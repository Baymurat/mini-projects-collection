import React, { FC, useEffect } from "react";
import Square from "../square";
import styles from "./styles.module.scss";
import Timer from "../timer";
import { useGameConfig } from "../../game";
import { useTimer } from "../../hooks/timer";

const GameBoard: FC = () => {
  const {
    seconds,
    minutes,
    startTimer,
    stopTimer,
    restartTimer,
  } = useTimer();

  const {
    gameState,
    cards,
    restartGame,
    onCardClick,
  } = useGameConfig();

  useEffect(() => {
    gameState.isStarted && startTimer();
  }, [gameState.isStarted]);

  useEffect(() => {
    stopTimer();
  }, [gameState.isOver]);

  return (
    <div className={styles.container}>
      <Timer
        seconds={seconds}
        minutes={minutes}
      />

      <div className={styles.board}>
        {(cards).map((card) => (
          <Square
            key={card.id}
            onCardClick={onCardClick}
            {...card}
          />
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            restartGame();
            stopTimer();
            restartTimer();
          }}
          type="button"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
