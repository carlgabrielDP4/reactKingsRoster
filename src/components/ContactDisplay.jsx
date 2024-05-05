import styles from "./ContactDisplay.module.css";

export default function ContactDisplay({ contact }) {

    return (
        <main className={styles.container}>
            <img src={contact.photoUrl} alt={contact.name} />
            <h1>{contact.name}</h1>
            <h2>{contact.phoneNumber}</h2>
            <p>{contact.funFact}</p>
        </main>
    );

}