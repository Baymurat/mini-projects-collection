import React, { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
  onNext: () => void;
  onPrev: () => void;
}

const GroupButtons: FC<Props> = ({ onPrev, onNext }) => (
  <div className={styles.cardSwiperButtons}>
    <div onClick={onPrev} className={styles.button}>{"<"}</div>
    <div onClick={onNext} className={styles.button}>{">"}</div>
  </div>
);

export default GroupButtons;
