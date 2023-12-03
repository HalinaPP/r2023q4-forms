import PersonData from "../PersonData";
import { useAppSelector } from "../../store/hooks/redux";
import styles from "./FormsData.module.css";
import { Forms } from "../../types";

function FormsData() {
  const lastFilledForm = useAppSelector((state) => state.forms.lastFilledForm);
  const uncontrolledFormData = useAppSelector(
    (state) => state.uncontrolledForm.person,
  );
  const reactHookFormData = useAppSelector(
    (state) => state.reactHookForm.person,
  );

  return (
    <>
      <h1>Person data:</h1>
      <div className={styles.data}>
        {lastFilledForm}
        <section
          className={
            lastFilledForm === Forms.uncontrolled ? styles.active : undefined
          }
        >
          <h2>Uncontrolled Form data:</h2>
          <PersonData data={uncontrolledFormData} />
        </section>
        <section
          className={
            lastFilledForm === Forms.reactHook ? styles.active : undefined
          }
        >
          <h2>React Hook Form data:</h2>
          <PersonData data={reactHookFormData} />
        </section>
      </div>
    </>
  );
}

export default FormsData;
