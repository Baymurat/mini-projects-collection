import React, { FC } from "react";
import styles from "./styles.module.scss";
import Timer from "../timer";
import { useGameConfig } from "../../game";
import ScoreBoard from "../score-board";
import Rows from "./Rows";
import StyledButton from "../styled-button";

const GameBoard: FC = () => {
  const {
    gameState: { isOver },
    cards,
    finishedTime,
    countedTime$,
    restartGame,
    onCardClick,
  } = useGameConfig();

  return (
    <div className={styles.container}>
      <ScoreBoard
        time={finishedTime}
        show={isOver}
        onClose={restartGame}
      />
      <Timer countedTime$={countedTime$} />

      <div className={styles.board}>
        <Rows
          cards={cards}
          onCardClick={onCardClick}
        />
      </div>
      <div>
        <StyledButton onClick={restartGame}>
          Restart
        </StyledButton>
      </div>
    </div>
  );
};

export default GameBoard;
