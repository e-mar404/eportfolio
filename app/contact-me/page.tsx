'use client';

import { FormEvent, useState } from 'react';
import { sendEmail } from './SendEmail';
import styles from './page.module.css'

export default function Home() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sentPopup, setSentPopup] = useState(false);
    const [notSentPopup, setNotSentPopup] = useState(false);


    const submit = async (e: FormEvent) => {
        e.preventDefault();

        console.log('Name: ', name);
        console.log('Email: ', email);
        console.log('Message:', message);
        
        const emailVerification = await sendEmail({name, email, message});
        if (emailVerification){
            setSentPopup(true);
        }else{
            setNotSentPopup(true);
        }

        setName('');
        setEmail('');
        setMessage('');

        setTimeout(() => {
            setSentPopup(false);
            setNotSentPopup(false);
        }, 10000);
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

            {sentPopup && (
                <div className={styles.sentPopup}>
                    <p>Message sent successfully</p>
                    <button onClick={() => setSentPopup(false)}>Close</button>
                </div>
            )}

            {notSentPopup && (
                <div className={styles.notSentPopup}>
                    <p>There was an error sending the message</p>
                    <button onClick={() => setNotSentPopup(false)}>Close</button>
                </div>
            )}
        </>
    );
}