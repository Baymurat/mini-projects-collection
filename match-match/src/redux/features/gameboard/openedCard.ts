import { createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";

const openCardId = createSlice<number, SliceCaseReducers<number>>({
  name: "openCardId",
  initialState: -1,
  reducers: {
    setOpenCard(state, action: PayloadAction<number>) {
      return action.payload;
    },
  },
});

export const { setOpenCard } = openCardId.actions;
export default openCardId.reducer;
