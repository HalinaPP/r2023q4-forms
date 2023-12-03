import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Person } from "../../validation/form.schema";

const initialState: { persons: Person[] } = {
  persons: [],
};

const uncontrolledFormSlice = createSlice({
  name: "uncontrolledForm",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<Person>) => {
      state.persons.push(action.payload);
    },
  },
});

export const { addData: addUncontrolledData } = uncontrolledFormSlice.actions;
export default uncontrolledFormSlice.reducer;
