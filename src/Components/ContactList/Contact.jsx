import clsx from "clsx";
import css from "./Contact.module.css";
const Contact = ({ DataItem: { name, number, id }, onDeleteToContact }) => {
  return (
    <>
      <div className={clsx(css.container)}>
        <div>
          <p>{name}</p>
          <p>{number}</p>
        </div>
        <button
          className={clsx(css.deleteButton)}
          onClick={() => onDeleteToContact(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};
export default Contact;
