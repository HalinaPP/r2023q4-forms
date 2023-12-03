import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilledForm } from "../../types";

const initialState: { lastFilledForm: FilledForm } = {
  lastFilledForm: undefined,
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
