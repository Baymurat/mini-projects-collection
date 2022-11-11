import React from "react";
import Square from "../square";
import styles from "./styles.module.scss";

type Props = {
  nothing?: string;
  dimension?: number;
}

const paintGameBoard = (dimension: number) => {
  const icons: any = ["red", "red", "blue", "", "", "", "", "", ""];
  return icons.map((icon: any, index: number) => (<Square key={index} />));
};

const GameBoard = ({ dimension = 4 }: Props) => (
  <div className={styles.container}>
    <div className={styles.board}>
      {paintGameBoard(dimension)}
    </div>
    <div>
      <button type="button">Reset</button>
    </div>
  </div>
);

export default GameBoard;
