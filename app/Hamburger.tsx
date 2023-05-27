'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './Hamburger.module.css'
import github_logo from './github_logo.webp';
import { usePathname } from 'next/navigation';
import linkedin_logo from './linkedin_logo.webp'

export default function Hamburger(){
    const [open, setOpen] = useState(false)
    const path = usePathname();
    const clickEvent = (e:any) => {
        e.preventDefault();
        setOpen(!open);
    }

    return(
        <>
            <div className={styles.hamburger_container}
                onClick={clickEvent}>
                <div className={styles.bun}></div>
                <div className={styles.bun}></div>
                <div className={styles.bun}></div>
            </div>
            {open ? <div className={styles.hamburger_menu}>
                <div className={styles.links_container}>
                    <a href='/' className={path == '/' ? styles.active_link : styles.inactive_link}>Home</a>
                    <a href='/about' className={path.startsWith('/about') ? styles.active_link : styles.inactive_link}>About</a>
                    <a href='/projects' className={path.startsWith('/projects') ? styles.active_link : styles.inactive_link}>Projects</a>
                    <a href='/contact-me' className={path.startsWith('/contact-me') ? styles.active_link : styles.inactive_link}>Contact Me</a>
                </div>
                <div className={styles.contacts_container}>
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
                            width={80}
                            height={80} />
                    </a>
                </div>
            </div>: null}
        </>
    );
}