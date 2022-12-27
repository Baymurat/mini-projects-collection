import { Subject } from "rxjs";

export type Card = {
  id: string;
  isMatched: boolean;
  isOpen: boolean;
  targetId: string;
  iconName: string;
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
  finishedTime: string;
  countedTime$: Subject<TimeType>;
}


export interface TimerType {
  startTimer: () => void;
  stopTimer: () => void;
  restartTimer: () => void;
  getCountedTime: () => Subject<TimeType>;
  getFinishTime: () => Subject<TimeType>;
}

export type TimeType = {
  seconds: string,
  minutes: string
}
