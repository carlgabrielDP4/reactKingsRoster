import styles from "./App.module.css";
import ContactDisplay from "./components/ContactDisplay";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
import { INITIAL_CONTACTS } from "./data/initial-contacts.js"; 

export default function App() {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS); 
  const [contact, setContact] = useState(null);

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
            <a href="https://www.proballers.com/" target="_blank" rel="noreferrer">
              Credit to Proballers.com
            </a>
          </div>
        </div>
      )}
    </div>
  );
}







// the stuff below is when i wanna have only a few json within the app.jsx
// import styles from "./App.module.css";
// import ContactDisplay from "./components/ContactDisplay";
// import Sidebar from "./components/Sidebar";
// import { useState } from "react";

// export default function App() {
//   // Hardcoded contact data
//   const hardcodedContact = [
//     {
//       _id: "71b5ed07-9e1e-47d0-937a-64c396d5567b",
//       name: "Bruce Wayne",
//       phoneNumber: "+1 555-000-1007",
//       funFact: "Lives in Gotham City.",
//       photoUrl: "https://th.bing.com/th/id/OIP.PoS7waY4-VeqgNuBSxVUogAAAA?rs=1&pid=ImgDetMain"
//     }
//   ];

//   const [contacts, setContacts] = useState(hardcodedContact);
//   const [contact, setContact] = useState(null);

//   function handleContactClicked(c) {
//     setContact(c);
//   }

//   return (
//     <>
//       <div className={styles.container}>
//         <Sidebar contacts={contacts} onContactClicked={handleContactClicked} />
//         {contact != null ? <ContactDisplay contact={contact} /> : undefined}
//       </div>
//     </>
//   );
// }



//the stuff below is when i wanna use backend and fetch from server

// import styles from "./App.module.css";
// import ContactDisplay from "./components/ContactDisplay";
// import { INITIAL_CONTACTS } from "./data/initial-contacts";
// import Sidebar from "./components/Sidebar";
// import { useState, useEffect} from "react";

// export default function App() {
//   //const [contact, setContact] = useState(INITIAL_CONTACTS[0]);
//   const [contacts, setContacts] = useState([]);
//   const [contact, setContact] = useState(null);

//   async function fetchContacts() {
//     const response = await fetch("http://localhost:3000/api/contacts");
//     const newContacts = await response.json();
//     setContacts(newContacts);

//   }

//   useEffect(() => {
//     fetchContacts();}
//     ,[]);


//   function handleContactClicked(c) {
//     setContact(c);
//   }

//   return (
//     <>
//       <div className={styles.container}>
//         <Sidebar contacts={contacts} onContactClicked={handleContactClicked} />

//         {/* <ContactDisplay contact={contact}/> */}
//         {contact != null ? <ContactDisplay contact={contact} /> : undefined}


//       </div>
//     </>
//   );
// }
