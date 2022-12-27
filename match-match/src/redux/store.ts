import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import cardsReducer, { openCard, markMatched, closeUnmatched } from "./features/gameboard/cards";
import openCardReducer, { setOpenCard } from "./features/gameboard/openedCard";
import boardStateReducer, { setBoardDisabled } from "./features/gameboard/boardState";
import gameStateReducer, { setGameOver, setGameStarted } from "./features/gameboard/gameState";
import unmatchedCardsReducer, { setUnmatchedCardsCount } from "./features/gameboard/unmatchedCards";
import cardsConfigReducer from "./features/gameboard/cardsConfig";
import { Timer } from "../utils/timer";

const { startTimer, stopTimer } = Timer.getInstance();
const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: openCard,
  effect: async (action, listenerApi) => {
    const { payload } = action;
    const {
      openCardId, gameState, unmatchedCards,
    } = listenerApi.getState() as RootState;

    if (!gameState.isStarted) {
      listenerApi.dispatch(setGameStarted(true));
      startTimer();
    }

    if (!payload.isOpen) {
      listenerApi.dispatch(setOpenCard(-1));
      return;
    }

    if (openCardId === -1) {
      listenerApi.dispatch(setOpenCard(action.payload.id));
      return;
    }

    if (openCardId === action.payload.targetId) {
      listenerApi.dispatch(markMatched([openCardId, action.payload.id]));

      if (unmatchedCards === 1) {
        listenerApi.dispatch(setGameOver(true));
        listenerApi.dispatch(setGameStarted(false));
        stopTimer();
      } else {
        listenerApi.dispatch(setUnmatchedCardsCount(unmatchedCards - 1));
      }
    } else {
      listenerApi.dispatch(setBoardDisabled(true));
      setTimeout(() => {
        listenerApi.dispatch(closeUnmatched());
        listenerApi.dispatch(setBoardDisabled(false));
      }, 1000);
    }

    listenerApi.dispatch(setOpenCard(-1));
  },
});

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    openCardId: openCardReducer,
    boardState: boardStateReducer,
    gameState: gameStateReducer,
    unmatchedCards: unmatchedCardsReducer,
    cardsConfig: cardsConfigReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

