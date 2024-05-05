import styles from "./ContactCard.module.css";

export default function ContactCard( {contact, onContactClicked} ) {

    function handleClick() {
        //console.log("Div clicked")
        onContactClicked(contact);

    }

    return (
        <div className={styles.card} onClick={handleClick}>
            <img src={contact.photoUrl} alt={contact.name}/>
            <h2> {contact.name} </h2>
        </div>
    )
}