import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Person } from "../../validation/form.schema";

const initialState: { persons: Person[] } = {
  persons: [],
};

const reactHookFormSlice = createSlice({
  name: "reactHookForm",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<Person>) => {
      state.persons.push(action.payload);
    },
  },
});

export const { addData: addReactHookData } = reactHookFormSlice.actions;
export default reactHookFormSlice.reducer;
