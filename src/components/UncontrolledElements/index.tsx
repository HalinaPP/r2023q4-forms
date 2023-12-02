import { FormEvent, useState } from "react";
import styles from "./UncontrolledElements.module.css";
import { personSchema } from "../../validation/form.validation";

function UncontrolledElements() {
  const [fieldsErrors, setFieldErrors] = useState({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.currentTarget;

    const person = {
      name: target.name.value,
      age: target.age.value,
      email: target.email.value,
      gender: target.gender.value,
      password: target.password.value,
      confirmPassword: target.confirmPassword.value,
      accept: target.accept.value === "on",
      picture: target.file.value,
      country: target.country.value,
    };

    await personSchema.validate(person, { abortEarly: false }).catch((err) => {
      const errors = err.inner.reduce(
        (acc, error) => ({
          ...acc,
          [error.path]: true,
        }),
        {},
      );
      
      setFieldErrors(errors);
    });
  };
  
  return (
    <>
      <h1>Uncontrolled Elements</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" />
        </label>
        {fieldsErrors.name && (
          <span className={styles.error}>name is error</span>
        )}
        <label htmlFor="age">
          Age:
          <input type="number" id="age" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" />
        </label>
        <label htmlFor="confirmPassword">
          Confirm password:
          <input type="password" id="confirmPassword" />
        </label>
        <label htmlFor="gender">
          Gender:
          <label htmlFor="male">
            Male
            <input type="radio" name="gender" id="male" value="male" />
          </label>
          <label htmlFor="female">
            Female
            <input type="radio" name="gender" id="female" value="female" />
          </label>
        </label>
        <label htmlFor="accept">
          Accept T&C: <input type="checkbox" id="accept" />
        </label>
        <label htmlFor="file">
          Upload picture: <input type="file" id="file" />
        </label>
        <label htmlFor="country">
          Country:
          <select name="country" autoComplete="on">
            <option value="">-- Select country --</option>
            <option value="belarus">Belarus</option>
            <option value="poland">Poland</option>
            <option value="greece">Greece</option>
          </select>
        </label>
        <input type="submit" name="Submit" />
      </form>
    </>
  );
}

export default UncontrolledElements;
