import { Outlet } from "react-router-dom";
import Main from "../layouts/Main/Main";

function Home() {
  return (
    <Main>
      <Outlet />
    </Main>
  );
}

export default Home;
