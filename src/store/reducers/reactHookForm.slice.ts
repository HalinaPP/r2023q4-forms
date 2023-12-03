import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Person } from "../../validation/form.schema";

const initialState: { person: Person } = {
  person: {} as Person,
};

const reactHookFormSlice = createSlice({
  name: "reactHookForm",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Person>) => {
      state.person = action.payload;
    },
  },
});

export const { setData: setReactHookData } = reactHookFormSlice.actions;
export default reactHookFormSlice.reducer;
