import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Person } from "../../validation/form.schema";

const initialState: { person: Person } = {
  person: {} as Person,
};

const uncontrolledFormSlice = createSlice({
  name: "uncontrolledForm",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Person>) => {
      state.person = action.payload;
    },
  },
});

export const { setData: setUncontrolledData } = uncontrolledFormSlice.actions;
export default uncontrolledFormSlice.reducer;
