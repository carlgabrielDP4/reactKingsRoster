import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import ContactDisplay from "./components/ContactDisplay";
import Sidebar from "./components/Sidebar";
import { INITIAL_CONTACTS } from "./data/initial-contacts.js";
import { useTypingEffect } from "./hooks/useTypingEffect"; // Import your custom hook

export default function App() {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS); 
  const [contact, setContact] = useState(null);

  const typingText = useTypingEffect("Loading Recent NBA Statistics.....", 6);

  function handleContactClicked(c) {
    setContact(c);
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widgets.proballers.com/dist/team-schedule-results-banner-widget-v1.1.js";
    script.async = true;
    script.onload = () => {
      if (window.PbTeamScheduleResultsBannerWidget) {
        window.PbTeamScheduleResultsBannerWidget.render();
      }
    };
    document.body.appendChild(script);

    const eventHandler = () => {
      if (window.PbTeamScheduleResultsBannerWidget) {
        window.PbTeamScheduleResultsBannerWidget.render();
      }
    };
    window.addEventListener("load", eventHandler);

    return () => {
      window.removeEventListener("load", eventHandler);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Sidebar contacts={contacts} onContactClicked={handleContactClicked} />
      {contact != null ? (
        <ContactDisplay contact={contact} />
      ) : (
        <div className={styles["center-content"]}>
          <div 
            className={`proballers-widget-team-schedule-results-banner ${styles["proballers-widget-container"]}`} 
            data-proballers-widget-id="c183f270-bff0-40ac-959c-9b9c6e0cfd3c"  
            style={{ fontFamily: 'Roboto Slab, serif', marginTop: '160px' }}
          >
            <h1>
              {typingText}
            </h1>

          </div>
        </div>
      )}
    </div>
  );
}
