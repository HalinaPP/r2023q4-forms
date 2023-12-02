import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import ReactHookForm from "./components/ReactHookForm";
import UncontrolledElements from "./components/UncontrolledElements";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />}>
        <Route
          path="uncontrolled-elements/"
          element={<UncontrolledElements />}
        />
        <Route path="react-hook-form" element={<ReactHookForm />} />
      </Route>
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
