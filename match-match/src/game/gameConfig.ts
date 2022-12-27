import { useEffect, useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { GameConfigType, Card } from "./types";
import { initGameboard, openCard } from "../redux/features/gameboard/cards";
import { setUnmatchedCardsCount } from "../redux/features/gameboard/unmatchedCards";
import { setGameOver, setGameStarted } from "../redux/features/gameboard/gameState";
import { setOpenCard } from "../redux/features/gameboard/openedCard";
import { Timer } from "../utils/timer";

const {
  getCountedTime,
  getFinishTime,
  stopTimer,
  restartTimer,
} = Timer.getInstance();

const countedTime$ = getCountedTime();
const finishTime$ = getFinishTime();

const gameConfig = (): GameConfigType => {
  const dispatch = useAppDispatch();
  const [finishedTime, setFinishedTime] = useState<string>("");

  const { pairsCount } = useAppSelector((state) => state.cardsConfig);
  const initGame = useCallback(() => {
    const cards = getRandomCards(pairsCount);
    dispatch(initGameboard(cards));
    dispatch(setUnmatchedCardsCount(cards.length / 2));
    dispatch(setGameOver(false));
    dispatch(setGameStarted(false));
    dispatch(setOpenCard(-1));
  }, []);

  useEffect(() => {
    initGame();
    const subscription = finishTime$.subscribe({
      next: ({ seconds, minutes }) => {
        setFinishedTime(`${minutes}:${seconds}`);
      },
    });

    return () => subscription.unsubscribe();
  }, []);

  const cards = useAppSelector((state) => state.cards);
  const isDisabled = useAppSelector((state) => state.boardState);
  const gameState = useAppSelector((state) => state.gameState);

  const restartGame = () => {
    initGame();
    stopTimer();
    restartTimer();
  };

  const onCardClick = (id: string, targetId: string, isOpen: boolean) => {
    if (isDisabled) return;

    dispatch(openCard({
      id, targetId, isOpen,
    }));
  };

  return {
    cards,
    gameState,
    finishedTime,
    restartGame,
    onCardClick,
    countedTime$,
  };
};

const generateCard = (iconName: string, id: string, targetId: string): Card => ({
  id,
  targetId,
  iconName,
  isMatched: false,
  isOpen: false,
});

const swap = (a: number, b: number, array: Card[]) => {
  const temp = array[a];
  // eslint-disable-next-line
  array[a] = array[b];
  // eslint-disable-next-line
  array[b] = temp;
};

const shuffle = (array: Card[]) => {
  const outArray: Card[] = [...array];

  for (let i = 0; i < outArray.length; i++) {
    const a = Math.floor(Math.random() * outArray.length);
    const b = Math.floor(Math.random() * outArray.length);

    swap(a, b, outArray);
  }

  return outArray;
};

const iconNames: string[] = [
  "alarm-outline",
  "basketball-outline",
  "bicycle-outline",
  "bus-outline",
  "dice-outline",
  "diamond-outline",
  "hammer-outline",
  "easel-outline",
  "fish-outline",
  "fitness-outline",
  "flame-outline",
  "leaf-outline",
  "megaphone-outline",
  "prism-outline",
];

const getRandomCards = (count: number) => {
  const firstHalf = iconNames.slice(0, count).map((iconName, i) => generateCard(iconName, `${i}a`, `${i}b`));
  const secondHalf = iconNames.slice(0, count).map((iconName, i) => generateCard(iconName, `${i}b`, `${i}a`));

  return shuffle([...firstHalf, ...secondHalf]);
};

export { gameConfig };
