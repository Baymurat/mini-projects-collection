import { ActionCreatorWithoutPayload, createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { Card, GameStateType } from "../../../game/types";

const cards = createSlice<Card[], SliceCaseReducers<Card[]>>({
  name: "cards",
  initialState: [],
  reducers: {
    openCard(state, action: PayloadAction<{ id: string, targetId: string, isOpen: boolean }>) {
      return state.map((card: Card) => {
        if (action.payload.id === card.id) {
          return { ...card, isOpen: action.payload.isOpen };
        }

        return card;
      });
    },
    initGameboard(state, action: PayloadAction<Card[]>) {
      return action.payload;
    },
    markMatched(state, action: PayloadAction<string[]>) {
      return state.map((card) => (
        action.payload.findIndex((marked) => marked === card.id) !== -1
          ? { ...card, isMatched: true }
          : { ...card }
      ));
    },
    closeUnmatched(state) {
      return state.map((card) => (card.isMatched ? card : { ...card, isOpen: false }));
    },
  },
});

const openCardId = createSlice<number, SliceCaseReducers<number>>({
  name: "openCardId",
  initialState: -1,
  reducers: {
    setOpenCard(state, action: PayloadAction<number>) {
      return action.payload;
    },
  },
});

const boardState = createSlice<boolean, SliceCaseReducers<boolean>>({
  name: "isDisabled",
  initialState: false,
  reducers: {
    setBoardDisabled(state, action: PayloadAction<boolean>) {
      return action.payload;
    },
  },
});

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

const unmatchedCards = createSlice<number, SliceCaseReducers<number>>({
  name: "unmatchedCardsCount",
  initialState: 0,
  reducers: {
    setUnmatchedCardsCount(state, action: PayloadAction<number>) {
      return action.payload;
    },
  },
});

export const {
  openCard,
  initGameboard,
  markMatched,
} = cards.actions;
export const closeUnmatched = cards.actions.closeUnmatched as ActionCreatorWithoutPayload<`${string}/${string}`>;

export const { setOpenCard } = openCardId.actions;
export const { setBoardDisabled } = boardState.actions;
export const { setGameOver, setGameStarted } = gameState.actions;
export const { setUnmatchedCardsCount } = unmatchedCards.actions;

export const cardsReducer = cards.reducer;
export const openCardReducer = openCardId.reducer;
export const gameStateReducer = gameState.reducer;
export const boardStateReducer = boardState.reducer;
export const unmatchedCardsReducer = unmatchedCards.reducer;
