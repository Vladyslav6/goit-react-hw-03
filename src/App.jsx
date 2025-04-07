import { useEffect, useState } from "react";
import ContactFrom from "./componentss/ContactForm/ContactForm";
import ContactList from "./componentss/ContactList/ContactList";
import SearchBox from "./componentss/SearchBox/SearchBox";
import ContactHomeWork from "./ContactsItem.json";

function App() {
  const [ContactItem, ContactItems] = useState(() => {
    const ObjectSave = window.localStorage.getItem("setSaveObject");
    if (ObjectSave !== null) {
      return JSON.parse(ObjectSave);
    }
    return ContactHomeWork;
  });

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
  useEffect(() => {
    window.localStorage.setItem("setSaveObject", JSON.stringify(ContactItem), [
      ContactItem,
    ]);
  });
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
