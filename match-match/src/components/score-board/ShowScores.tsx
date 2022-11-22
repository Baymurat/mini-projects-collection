import React, { FC } from "react";
import styles from "./styles.module.scss";
import { Score } from "./index";

type Props = {
  scores: Score[]
}

const ShowScores: FC<Props> = ({ scores }) => (
  <div className={styles.scoresContainer}>
    {scores.map((score, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={index} className={styles.scoreRow}>
        <span>{index + 1}.</span>
        <div className={styles.score}>
          <span>
            {score.player}
          </span>
          <span>
            {score.time}
          </span>
        </div>
      </div>
    ))}
  </div>
);

export default ShowScores;
