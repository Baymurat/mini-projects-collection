import { ActionCreatorWithoutPayload, createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { Card } from "../../../game/types";

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

export const {
  openCard,
  initGameboard,
  markMatched,
} = cards.actions;
export const closeUnmatched = cards.actions.closeUnmatched as ActionCreatorWithoutPayload<`${string}/${string}`>;

export default cards.reducer;
