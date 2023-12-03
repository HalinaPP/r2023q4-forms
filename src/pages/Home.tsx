import { Outlet } from "react-router-dom";
import Main from "../layouts/Main/Main";

function Home() {
  return (
    <Main>
      <h1>Person data:</h1>
      <Outlet />
    </Main>
  );
}

export default Home;
