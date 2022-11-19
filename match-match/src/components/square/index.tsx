import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";
import { Card } from "../../game/types";

type Props = Card & {
  onCardClick: (id: string, targetId: string, isOpen: boolean) => void;
}

const Square = ({
  id,
  isMatched,
  isOpen,
  targetId,
  onCardClick,
}: Props) => (
  <div
    onClick={() => {
      if (isMatched) return;
      onCardClick(id, targetId, !isOpen);
    }}
    className={cx(styles.container, {
      [styles.open]: isMatched || isOpen,
      [styles.matched]: isMatched,
    })}
  >
    <div className={styles.backSide} />
    <div className={styles.frontSide}>
      {id}
    </div>
  </div>
);

export default Square;
