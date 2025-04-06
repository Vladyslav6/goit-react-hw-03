import Contact from "./contact";

const ContactList = ({ StateContactItem, onDeleteToContact }) => {
  return (
    <>
      <ul>
        {StateContactItem.map((item) => (
          <li key={item.id}>
            <Contact DataItem={item} onDeleteToContact={onDeleteToContact} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
