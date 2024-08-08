import React from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import styles from "./ContactDisplay.module.css";

export default function ContactDisplay({ contact }) {
    const typedName = useTypingEffect(contact.name || '', 50);
    const typedPhoneNumber = useTypingEffect(contact.phoneNumber || '', 30);
    const typedFunFact = useTypingEffect(contact.funFact || '', 20);

    return (
        <main className={styles.container}>
            <img src={contact.photoUrl} alt={contact.name} />
            <h1>{typedName}</h1>
            <h2>{typedPhoneNumber}</h2>
            <p>{typedFunFact}</p>
        </main>
    );
}
