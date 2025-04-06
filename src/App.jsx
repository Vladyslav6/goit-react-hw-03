import { useState } from "react";
import ContactFrom from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import SearchBox from "./Components/SearchBox/SearchBox";
import ContactHomeWork from "./ContactsItem.json";

function App() {
  const [ContactItem, ContactItems] = useState(ContactHomeWork);
  const [FilterItem, SetFilter] = useState("");

  const FilterContact = ContactItem.filter((item) =>
    item.name.toLowerCase().includes(FilterItem.toLowerCase())
  );
  const AddContacts = (newContact) => {
    ContactItems((prevContact) => {
      return [...prevContact, newContact];
    });
  };
  const DeleteContact = (onDeleteId) => {
    ContactItems((prevContact) => {
      return prevContact.filter((item) => item.id !== onDeleteId);
    });
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactFrom addToContact={AddContacts} />
        <SearchBox value={FilterItem} OnChangeFilter={SetFilter} />
        <ContactList
          StateContactItem={FilterContact}
          onDeleteToContact={DeleteContact}
        />
      </div>
    </>
  );
}

export default App;
