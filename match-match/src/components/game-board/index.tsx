import React, { FC, useEffect } from "react";
import styles from "./styles.module.scss";
import Timer from "../timer";
import { useGameConfig } from "../../game";
import { useTimer } from "../../hooks/timer";
import ScoreBoard from "../score-board";
import Rows from "./Rows";
import StyledButton from "../styled-button";

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
      <ScoreBoard
        time={`${minutes}:${seconds}`}
        show={gameState.isOver}
        onClose={() => {
          restartGame();
          restartTimer();
        }}
      />
      <Timer
        seconds={seconds}
        minutes={minutes}
      />

      <div className={styles.board}>
        <Rows
          cards={cards}
          onCardClick={onCardClick}
        />
      </div>
      <div>
        <StyledButton
          onClick={() => {
            restartGame();
            stopTimer();
            restartTimer();
          }}
          text="Restart"
        />
      </div>
    </div>
  );
};

export default GameBoard;
