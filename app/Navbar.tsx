'use client';

import Image from 'next/image';
import styles from './Navbar.module.css'
import github_logo from './github_logo.webp';
import { usePathname } from 'next/navigation';
import linkedin_logo from './linkedin_logo.webp';
import pdf_icon from './pdf_icon.webp';

export default function Navbar() {
    const path = usePathname();

    return(
        <>
            <div className={styles.navbar}>
                <div className={styles.links_container}>
                    <a href='/' className={path == '/' ? styles.active_link : styles.inactive_link}>Home</a>
                    <a href='/career' className={path.startsWith('/career') ? styles.active_link : styles.inactive_link}>Career</a>
                    <a href='/contact-me' className={path.startsWith('/contact-me') ? styles.active_link : styles.inactive_link}>Contact Me</a>
                </div>
                <div className={styles.contacts_container}>
                    <a href='https://drive.google.com/file/d/1aQCzWZirNIiY9k8BpdFrPPX6Iy2GBGDj/view?usp=drive_link' target='_blank'>
                        <Image className={styles.contact}
                            src={pdf_icon}
                            alt='Resume'
                            width={50}
                            height={50} />
                    </a>
                    <a href='https://github.com/e-mar404' target='_blank' rel='noopener noreferrer'>
                        <Image className={styles.contact}
                            src={github_logo} 
                            alt='Github Profile' 
                            width={45} 
                            height={45} />
                    </a> 
                    <a href='https://www.linkedin.com/in/emilio-marin-8393a51bb/' target='_blank' rel='noopener noreferrer'>
                        <Image className={styles.contact}
                            src={linkedin_logo}
                            alt='LinkedIn Profile'
                            width={45}
                            height={45} />
                    </a>
                </div>
            </div>
        </>
    );
}