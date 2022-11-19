import { createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { GameStateType } from "../../../game/types";

const gameState = createSlice<GameStateType, SliceCaseReducers<GameStateType>>({
  name: "gameState",
  initialState: { isOver: false, isStarted: false },
  reducers: {
    setGameOver(state, action: PayloadAction<boolean>) {
      return { ...state, isOver: action.payload };
    },
    setGameStarted(state, action: PayloadAction<boolean>) {
      return { ...state, isStarted: action.payload };
    },
  },
});

export const { setGameOver, setGameStarted } = gameState.actions;
export default gameState.reducer;
