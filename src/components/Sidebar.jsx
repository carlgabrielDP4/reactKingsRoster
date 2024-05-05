import { useState } from "react";
import ContactCard from "./ContactCard";
import styles from "./Sidebar.module.css";

export default function Sidebar({ contacts , onContactClicked}) {

    const [search, setSearch] = useState("");

function handleChange(e) {
    setSearch(e.target.value);
}

    function searchFilter(contact) {
        const searchLower = search.toLowerCase();
        const nameLower = contact.name.toLowerCase();
        return nameLower.includes(searchLower);
    }



  return (
    <nav className={styles.sidebar}>
      <div className={styles.corner}>
        <h2>2023-24 Kings Roster</h2>
        <input className={styles.searchbar} type="text"  value={search} onChange={handleChange} placeholder="Player search..." />
      </div>
      <div className={styles.contactList}>
        {contacts.filter(searchFilter).map((contact) => (
          <ContactCard key={contact._id} contact={contact}  onContactClicked={onContactClicked}/>
        ))}
      </div>
    </nav>
  );
}