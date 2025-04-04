import { Field, Form, Formik } from "formik";
import { number } from "yup";

const ContactFrom = () => {
  const onSubmit = (value, options) => {
    console.log(value);
  };
  const initialsValue = {
    name: "",
    number: "",
  };
  return (
    <>
      <Formik onSubmit={onSubmit} initialValues={initialsValue}>
        <Form>
          <label>
            <span>Name</span>
            <Field name="name"></Field>
          </label>
          <label>
            <span>Number</span>
            <Field name="number"></Field>
          </label>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
};
export default ContactFrom;
