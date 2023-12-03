import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAppDispatch } from "../../store/hooks/redux";
import { setLastFilledForm } from "../../store/reducers/forms.slice";
import { Person, personSchema } from "../../validation/form.schema";

import styles from "./ReactHookForm.module.css";
import { setReactHookData } from "../../store/reducers/reactHookForm.slice";
import { Forms } from "../../types";

function ReactHookForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Person>({
    resolver: yupResolver(personSchema),
  });

  useEffect(() => {
    dispatch(setLastFilledForm(undefined));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmitHandler: SubmitHandler<Person> = (data) => {
    dispatch(setReactHookData(data));
    dispatch(setLastFilledForm(Forms.reactHook));
    navigate("/");
  };

  return (
    <>
      <h1>React Hook Form Elements</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" {...register("name")} />
        </label>
        <p>{errors.name?.message}</p>
        <label htmlFor="age">
          Age:
          <input type="number" id="age" {...register("age")} />
        </label>
        <p>{errors.age?.message}</p>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" {...register("email")} />
        </label>
        <p>{errors.email?.message}</p>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" {...register("password")} />
        </label>
        <p>{errors.password?.message}</p>
        <label htmlFor="confirmPassword">
          Confirm password:
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
        </label>
        <p>{errors.confirmPassword?.message}</p>
        <label htmlFor="gender">
          Gender:
          <label htmlFor="male">
            Male
            <input
              type="radio"
              id="male"
              value="male"
              checked
              {...register("gender")}
            />
          </label>
          <label htmlFor="female">
            Female
            <input
              type="radio"
              id="female"
              value="female"
              {...register("gender")}
            />
          </label>
        </label>
        <label htmlFor="accept">
          Accept T&C:{" "}
          <input type="checkbox" id="accept" {...register("accept")} />
        </label>
        <label htmlFor="picture">
          Upload picture:{" "}
          <input type="file" id="picture" {...register("picture")} />
        </label>
        <p>{errors.picture?.message}</p>
        <label htmlFor="country">
          Country:
          <select autoComplete="on" {...register("country")}>
            <option value="">-- Select country --</option>
            <option value="belarus">Belarus</option>
            <option value="poland">Poland</option>
            <option value="greece">Greece</option>
          </select>
        </label>
        <p>{errors.country?.message}</p>
        <input type="submit" />
      </form>
    </>
  );
}

export default ReactHookForm;
