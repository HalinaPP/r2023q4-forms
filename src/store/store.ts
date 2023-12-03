import { combineReducers, configureStore } from "@reduxjs/toolkit";
import uncontrolledForm from "./reducers/uncontrolledForm.slice";
import reactHookForm from "./reducers/reactHookForm.slice";
import forms from "./reducers/forms.slice";

export const rootReducer = combineReducers({
  forms,
  uncontrolledForm,
  reactHookForm,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
