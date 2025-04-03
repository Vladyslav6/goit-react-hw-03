import { useState } from "react";
import ContactFrom from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import SearchBox from "./Components/SearchBox/SearchBox";
import ContactHomeWork from "./ContactsItem.json";

function App() {
  const [ContactItem, ContactItems] = useState(ContactHomeWork);
  const [FilterItem, SetFilter] = useState("");
  // const mapTest = ContactItem.map()
  // console.log(JSON.stringify(ContactItem))
  // const testMap = ContactItem.map((item, id) => console.log(item.id));
  // const testSearch = ContactItem.filter((comment) =>
  //   comment.name.toLowerCase().includes("rosi")
  // );
  const FilterContact = ContactItem.filter((item) =>
    item.name.toLowerCase().includes(FilterItem.toLowerCase())
  );
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactFrom />
        <SearchBox value={FilterItem} OnChangeFilter={SetFilter} />
        <ContactList StateContactItem={FilterContact} />
      </div>
    </>
  );
}

export default App;
