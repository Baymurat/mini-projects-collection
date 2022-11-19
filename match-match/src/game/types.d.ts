export type Card = {
  id: string;
  isMatched: boolean;
  isOpen: boolean;
  targetId: string;
}

export type GameStateType = {
  isOver: boolean;
  isStarted: boolean;
}

export type GameConfigType = {
  cards: Card[];
  restartGame: () => void;
  onCardClick: (id: string, targetId: string, isOpen: boolean) => void;
  gameState: GameStateType;
}


export type UseTimerType = {
  seconds :number,
  minutes :number,
  startTimer :() => NodeJS.Timer,
  stopTimer :() => void,
  restartTimer :() => void
}
