import { createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";

const unmatchedCards = createSlice<number, SliceCaseReducers<number>>({
  name: "unmatchedCardsCount",
  initialState: 0,
  reducers: {
    setUnmatchedCardsCount(state, action: PayloadAction<number>) {
      return action.payload;
    },
  },
});

export const { setUnmatchedCardsCount } = unmatchedCards.actions;
export default unmatchedCards.reducer;
