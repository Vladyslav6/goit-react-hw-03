import { useState } from "react";
import ContactFrom from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import SearchBox from "./Components/SearchBox/SearchBox";
import ContactHomeWork from "./ContactsItem.json";

function App() {
  const [ContactItem, ContactItems] = useState(ContactHomeWork);
  // const mapTest = ContactItem.map()
  // console.log(JSON.stringify(ContactItem))
  // const testMap = ContactItem.map((item, id) => console.log(item.id));

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactFrom />
        <SearchBox />
        <ContactList StateContactItem={ContactItem} />
      </div>
    </>
  );
}

export default App;
