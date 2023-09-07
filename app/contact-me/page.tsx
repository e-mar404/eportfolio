'use client';

import { FormEvent, useState } from 'react';
import styles from './page.module.css'

export default function Home() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [popup, setPopup] = useState(false);

    const submit = (e: FormEvent) => {
        e.preventDefault();

        console.log('Name: ', name);
        console.log('Email: ', email);
        console.log('Message:', message);
        
        setPopup(true);

        setName('');
        setEmail('');
        setMessage('');

        setTimeout(() => {
            setPopup(false);
        }, 5000);
    };

    
    return(
        <>
            <h1 className={styles.title}>Contact Me Page</h1>
            <form onSubmit={submit}>
                <div className={styles.inputContainer}>
                    <label className={styles.element} htmlFor="name">Name:</label>
                    <input
                        className={styles.nameInput}
                        type="text"
                        id="name"
                        autoComplete='true'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.element}  htmlFor="email">Email:</label>
                    <input
                        className={styles.emailInput}
                        type="email"
                        id="email"
                        autoComplete='true'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.element} htmlFor="message">Message:</label>
                    <textarea
                        className={styles.messageInput}
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button className={styles.button} type="submit">Submit</button>
            </form>

            {popup && (
                <div className={styles.popup}>
                    <p>Message Sent Successfully</p>
                    <button onClick={() => setPopup(false)}>Close</button>
                </div>
            )}
        </>
    );
}