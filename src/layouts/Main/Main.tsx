import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ChildrenProps } from "../../types";
import styles from "./Main.module.css";

export default function Main({ children }: ChildrenProps) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
