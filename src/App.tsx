import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import ReactHookForm from "./components/ReactHookForm";
import UncontrolledElements from "./components/UncontrolledElements";
import { setupStore } from "./store/store";
import FormsData from "./components/FormsData";

const store = setupStore();

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />}>
        <Route path="/" element={<FormsData />} />
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
  return (
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  );
}

export default App;
