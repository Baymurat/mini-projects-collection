import { createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";

const boardState = createSlice<boolean, SliceCaseReducers<boolean>>({
  name: "isDisabled",
  initialState: false,
  reducers: {
    setBoardDisabled(state, action: PayloadAction<boolean>) {
      return action.payload;
    },
  },
});

export const { setBoardDisabled } = boardState.actions;
export default boardState.reducer;
