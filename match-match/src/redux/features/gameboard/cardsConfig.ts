import { createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";

type SliceType = {
  columnsCount: number;
  pairsCount: number;
}

const initialState = {
  columnsCount: 7,
  pairsCount: 14,
};

const cardsConfig = createSlice<SliceType, SliceCaseReducers<SliceType>>({
  name: "cardsConfig",
  initialState,
  reducers: {
    setColumnsCount: (state, action: PayloadAction<number>) => ({ ...state, columnsCount: action.payload }),
    setPairsCount: (state, action: PayloadAction<number>) => ({ ...state, pairsCount: action.payload }),
  },
});

export const { setColumnsCount, setPairsCount } = cardsConfig.actions;
export default cardsConfig.reducer;
