import Contact from "./contact";

const ContactList = ({ StateContactItem }) => {
  // const testMap = StateContactItem.map((item, id) => console.log(item));

  return (
    <>
      <ul>
        {StateContactItem.map((item) => (
          <li key={item.id}>
            <Contact DataItem={item} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
