import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilledForm } from "../../types";

interface FormsState {
  lastFilledForm: FilledForm;
  countrySuggestions: string[];
}
const initialState: FormsState = {
  lastFilledForm: undefined,
  countrySuggestions: ["Belarus", "Poland", "Greece"],
};

const formsSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    setLastFilledForm: (state, action: PayloadAction<FilledForm>) => {
      state.lastFilledForm = action.payload;
    },
  },
});

export const { setLastFilledForm } = formsSlice.actions;
export default formsSlice.reducer;
