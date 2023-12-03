import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { Person, personSchema } from "../../validation/form.schema";
import collectErrors from "../../validation/helpers";
import { Fields, Forms, Strength } from "../../types";

import styles from "./UncontrolledElements.module.css";
import { useAppDispatch } from "../../store/hooks/redux";
import { addUncontrolledData } from "../../store/reducers/uncontrolledForm.slice";
import { setLastFilledForm } from "../../store/reducers/forms.slice";
import {
  calculatePasswordStrength,
  countMatchedStrengthRequirements,
} from "../../utils/helpers";

function UncontrolledElements() {
  const [fieldsErrors, setFieldErrors] = useState<Fields>({} as Fields);
  const [isNotValid, setIsNotValid] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(Strength.poor);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLastFilledForm(undefined));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        dispatch(addUncontrolledData(person));
        dispatch(setLastFilledForm(Forms.uncontrolled));
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

  const checkPasswordStrength = (event: ChangeEvent) => {
    const currPassword = (event.target as HTMLInputElement).value;
    const strengthCount = countMatchedStrengthRequirements(currPassword);
    const currPasswordStrength = calculatePasswordStrength(strengthCount);
    
    setPasswordStrength(currPasswordStrength);
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
        <p>
          {" "}
          {fieldsErrors.name && (
            <span className={styles.error}>{fieldsErrors.name}</span>
          )}
        </p>
        <label htmlFor="age">
          Age:
          <input type="number" id="age" />
        </label>
        <p>
          {fieldsErrors.age && (
            <span className={styles.error}>{fieldsErrors.age}</span>
          )}
        </p>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" />
        </label>
        <p>
          {fieldsErrors.email && (
            <span className={styles.error}>{fieldsErrors.email}</span>
          )}
        </p>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            onChange={checkPasswordStrength}
          />
        </label>
        <p className={styles.green}>
          Your password strength is <strong>{passwordStrength}</strong>
        </p>
        <p>
          {fieldsErrors.password && (
            <span className={styles.error}>{fieldsErrors.password}</span>
          )}
        </p>
        <label htmlFor="confirmPassword">
          Confirm password:
          <input type="password" id="confirmPassword" />
        </label>
        <p>
          {" "}
          {fieldsErrors.confirmPassword && (
            <span className={styles.error}>{fieldsErrors.confirmPassword}</span>
          )}
        </p>
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
        <p>
          {fieldsErrors.picture && (
            <span className={styles.error}>{fieldsErrors.picture}</span>
          )}
        </p>
        <label htmlFor="country">
          Country:
          <select name="country" autoComplete="on">
            <option value="">-- Select country --</option>
            <option value="belarus">Belarus</option>
            <option value="poland">Poland</option>
            <option value="greece">Greece</option>
          </select>
        </label>
        <p>
          {fieldsErrors.country && (
            <span className={styles.error}>{fieldsErrors.country}</span>
          )}
        </p>
        <input type="submit" name="Submit" disabled={isNotValid} />
      </form>
    </>
  );
}

export default UncontrolledElements;
