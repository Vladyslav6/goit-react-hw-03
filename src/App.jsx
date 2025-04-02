import { useState } from "react";
import ContactFrom from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import SearchBox from "./Components/SearchBox/SearchBox";
import ContactHomeWork from "./ContactsItem.json";

function App() {
  const [ContactItem, ContactItems] = useState(ContactHomeWork);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactFrom />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
