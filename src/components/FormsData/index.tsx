import PersonData from "../PersonData";
import { useAppSelector } from "../../store/hooks/redux";
import styles from "./FormsData.module.css";
import { Forms } from "../../types";

function FormsData() {
  const lastFilledForm = useAppSelector((state) => state.forms.lastFilledForm);
  const uncontrolledFormData = useAppSelector(
    (state) => state.uncontrolledForm.persons,
  );
  const reactHookFormData = useAppSelector(
    (state) => state.reactHookForm.persons,
  );

  return (
    <>
      <h1>Person data:</h1>
      <div className={styles.data}>
        <section
          className={
            lastFilledForm === Forms.uncontrolled ? styles.active : undefined
          }
        >
          <h2>Uncontrolled Form data:</h2>
          <div>
            {uncontrolledFormData.length > 0 ? (
              uncontrolledFormData.map((data) => <PersonData data={data} />)
            ) : (
              <div>There are no items</div>
            )}
          </div>
        </section>
        <section
          className={
            lastFilledForm === Forms.reactHook ? styles.active : undefined
          }
        >
          <h2>React Hook Form data:</h2>
          <div>
            {reactHookFormData.length > 0 ? (
              reactHookFormData.map((data) => <PersonData data={data} />)
            ) : (
              <div>There are no items</div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default FormsData;
