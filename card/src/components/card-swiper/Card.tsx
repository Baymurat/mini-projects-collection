import React, { FC, useMemo } from "react";
import cx from "classnames";
import styles from "./styles.module.scss";
import { useCustomRef } from "../../utils/hooks";

export type CardProps = {
  imageUrl: string;
  isLittle?: boolean;
  position?: number;
}

const Card:FC<CardProps> = ({
  imageUrl, isLittle = false, position = 1,
}) => {
  const positionClasses: { [key: number]: string } = useMemo(() => ({
    1: styles.first,
    2: styles.second,
    3: styles.third,
    0: styles.fourth,
  }), []);

  const cardPosition = position % 4;
  const [node, setNodeRef] = useCustomRef<HTMLDivElement>();

  if (node) {
    node.style.setProperty("--position", `${cardPosition === 0 ? 4 : cardPosition}`);
  }

  const cardClassName = isLittle ? styles.little : styles.big;

  return (
    <div
      ref={setNodeRef}
      className={cx(cardClassName, styles.card, positionClasses[cardPosition])}
    >
      <img alt="cat" src={imageUrl} />
    </div>
  );
};

export default Card;
