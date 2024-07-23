import React from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import styles from "./ContactDisplay.module.css";

export default function ContactDisplay({ contact }) {
    const typedName = useTypingEffect(contact.name || '', 100);
    const typedPhoneNumber = useTypingEffect(contact.phoneNumber || '', 50);
    const typedFunFact = useTypingEffect(contact.funFact || '', 25);

    return (
        <main className={styles.container}>
            <img src={contact.photoUrl} alt={contact.name} />
            <h1>{typedName}</h1>
            <h2>{typedPhoneNumber}</h2>
            <p>{typedFunFact}</p>
        </main>
    );
}
