import React, { FC } from "react";
import { Card } from "../../game/types";
import Square from "../square";
import styles from "./styles.module.scss";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  cards: Card[];
  onCardClick: (id: string, targetId: string, isOpen: boolean) => void;
}

const Rows: FC<Props> = ({ cards, onCardClick }) => {
  const { columnsCount } = useAppSelector((state) => state.cardsConfig);

  const cardRows = [];
  for (let i = 0; i < cards.length; i += columnsCount) {
    const chunk = cards.slice(i, i + columnsCount);
    cardRows.push(chunk);
  }

  return (
    <div>
      {cardRows.map((row, index) => (
        // eslint-disable-next-line
        <div key={index} className={styles.row}>
          {row.map((card) => (
            <Square
              key={card.id}
              onCardClick={onCardClick}
              {...card}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Rows;
