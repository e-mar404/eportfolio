'use client';

import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css'

export default function Navbar() {
    const path = usePathname();

    return(
        <div className={styles.background}>
            <div className={styles.links_container}>
                <a href='/' className={path == '/' ? styles.active_link : styles.inactive_link}>Home</a>
                <a href='/about' className={path.startsWith('/about') ? styles.active_link : styles.inactive_link}>About</a>
                <a href='/projects' className={path.startsWith('/projects') ? styles.active_link : styles.inactive_link}>Projects</a>
                <a href='/contact-me' className={path.startsWith('/contact-me') ? styles.active_link : styles.inactive_link}>Contact Me</a>
            </div>
        </div>
    );
}