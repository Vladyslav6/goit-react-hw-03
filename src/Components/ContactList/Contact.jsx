 import clsx from "clsx";
import css from "./contact.module.css";
const Contact = ({ DataItem: { name, number, id } }) => {
  return (
    <>
      <div className={clsx(css.container)}>
        <div>
          <p>{name}</p>
          <p>{number}</p>
          <p>{id}</p>
        </div>
        <button className={clsx(css.deleteButton)}>Delete</button>
      </div>
    </>
  );
};
export default Contact;
