import styles from './Navbar.module.css'

export default function Navbar() {
    return(
        <div className={styles.background}>
            <div className={styles.links_container}>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/projects'>Projects</a>
                <a href='/contact-me'>Contact Me</a>
            </div>
        </div>
    );
}