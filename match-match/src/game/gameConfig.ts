import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { GameConfigType, Card } from "./types";
// import { initGameboard, openCard, setUnmatchedCardsCount } from "../redux/features/gameboard/gameboardSlices-DELETE";
import { initGameboard, openCard } from "../redux/features/gameboard/cards";
import { setUnmatchedCardsCount } from "../redux/features/gameboard/unmatchedCards";

const gameConfig = (): GameConfigType => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const cards = getRandomCards();
    dispatch(initGameboard(cards));
    dispatch(setUnmatchedCardsCount(cards.length / 2));
  }, []);
  const cards = useAppSelector((state) => state.cards);
  const isDisabled = useAppSelector((state) => state.boardState);
  const gameState = useAppSelector((state) => state.gameState);

  const restartGame = () => {
    dispatch(initGameboard(getRandomCards()));
  };

  const onCardClick = (id: string, targetId: string, isOpen: boolean) => {
    if (isDisabled) return;

    dispatch(openCard({
      id, targetId, isOpen,
    }));
  };

  return {
    cards, gameState, restartGame, onCardClick,
  };
};

const generateCard = (id: string, targetId: string): Card => ({
  id,
  targetId,
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

const getRandomCards = () => {
  const firstHalf = new Array(8).fill(1).map((c, i) => generateCard(`${i}a`, `${i}b`));
  const secondHalf = new Array(8).fill(1).map((c, i) => generateCard(`${i}b`, `${i}a`));

  return shuffle([...firstHalf, ...secondHalf]);
};

export { gameConfig };
