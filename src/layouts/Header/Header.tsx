import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/uncontrolled-elements">Uncontrolled elements</Link>
      <Link to="/react-hook-form">React Hook Form</Link>
    </header>
  );
}
