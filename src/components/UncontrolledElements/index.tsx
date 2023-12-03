import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { Person, personSchema } from "../../validation/form.schema";
import collectErrors from "../../validation/helpers";
import { Fields } from "../../types";

import styles from "./UncontrolledElements.module.css";

function UncontrolledElements() {
  const [fieldsErrors, setFieldErrors] = useState<Fields>({} as Fields);
  const [isNotValid, setIsNotValid] = useState(false);
  const navigate = useNavigate();

  const getIsFormNotValid = (errorArr: Fields) =>
    Object.keys(errorArr).length > 0;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.currentTarget;

    const person: Person = {
      name: target.name.value,
      age: target.age.value,
      email: target.email.value,
      gender: target.gender.value,
      password: target.password.value,
      confirmPassword: target.confirmPassword.value,
      accept: target.accept.value === "on",
      picture: target.picture.value,
      country: target.country.value,
    };

    await personSchema
      .validate(person, { abortEarly: false })
      .then(() => {
        navigate("/");
      })
      .catch((err: yup.ValidationError) => {
        const errors: Fields = collectErrors(err);
        setFieldErrors(errors);

        const isFormNotValid = getIsFormNotValid(errors);
        setIsNotValid(isFormNotValid);
      });
  };

  const handleChange = () => {
    setFieldErrors({} as Fields);
    setIsNotValid(false);
  };

  return (
    <>
      <h1>Uncontrolled Elements</h1>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <label htmlFor="name">
          Name:
          <input type="text" id="name" />
        </label>
        {fieldsErrors.name && (
          <span className={styles.error}>{fieldsErrors.name}</span>
        )}
        <label htmlFor="age">
          Age:
          <input type="number" id="age" />
        </label>
        {fieldsErrors.age && (
          <span className={styles.error}>{fieldsErrors.age}</span>
        )}
        <label htmlFor="email">
          Email:
          <input type="email" id="email" />
        </label>
        {fieldsErrors.email && (
          <span className={styles.error}>{fieldsErrors.email}</span>
        )}
        <label htmlFor="password">
          Password:
          <input type="password" id="password" />
        </label>
        {fieldsErrors.password && (
          <span className={styles.error}>{fieldsErrors.password}</span>
        )}
        <label htmlFor="confirmPassword">
          Confirm password:
          <input type="password" id="confirmPassword" />
        </label>
        {fieldsErrors.confirmPassword && (
          <span className={styles.error}>{fieldsErrors.confirmPassword}</span>
        )}
        <label htmlFor="gender">
          Gender:
          <label htmlFor="male">
            Male
            <input type="radio" name="gender" id="male" value="male" checked />
          </label>
          <label htmlFor="female">
            Female
            <input type="radio" name="gender" id="female" value="female" />
          </label>
        </label>
        <label htmlFor="accept">
          Accept T&C: <input type="checkbox" id="accept" />
        </label>
        <label htmlFor="picture">
          Upload picture: <input type="file" id="picture" />
        </label>
        {fieldsErrors.picture && (
          <span className={styles.error}>{fieldsErrors.picture}</span>
        )}
        <label htmlFor="country">
          Country:
          <select name="country" autoComplete="on">
            <option value="">-- Select country --</option>
            <option value="belarus">Belarus</option>
            <option value="poland">Poland</option>
            <option value="greece">Greece</option>
          </select>
        </label>
        {fieldsErrors.country && (
          <span className={styles.error}>{fieldsErrors.country}</span>
        )}
        <input type="submit" name="Submit" disabled={isNotValid} />
      </form>
    </>
  );
}

export default UncontrolledElements;
