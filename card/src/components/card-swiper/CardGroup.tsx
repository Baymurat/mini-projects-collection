import React, {
  FC,
  PropsWithChildren,
  Children,
  cloneElement,
  isValidElement,
} from "react";
import cx from "classnames";
import styles from "./styles.module.scss";
import { CardProps } from "./Card";

export type Direction = "left" | "right";

export type CardGroupProps = {
  isNext?: boolean;
  isPrev? : boolean;
  direction?: Direction;
}

const moveTo: {[key in Direction]: string} = {
  left: styles.toLeft,
  right: styles.toRight,
};

const appearFrom: {[key in Direction]: string} = {
  left: styles.fromLeft,
  right: styles.fromRight,
};

const CardGroup: FC<PropsWithChildren<CardGroupProps>> = ({
  children, isNext, isPrev, direction = "right",
}) => {
  let bigCardsCount = 0;
  let littleCardsCount = 0;

  const appear = isNext ? (appearFrom[direction]) : "";
  const move = isPrev ? (direction === "left" ? moveTo.right : moveTo.left) : "";

  return (
    <div className={cx(styles.cardGroup, appear, move)}>
      {Children.map(
        children,
        (child) => {
          if (isValidElement<CardProps>(child)) {
            const { isLittle } = child.props;
            isLittle ? (littleCardsCount++) : (bigCardsCount++);

            return (<>{cloneElement(child, { position: isLittle ? littleCardsCount : bigCardsCount })}</>);
          }

          return child;
        },
      )}
    </div>
  );
};

export default CardGroup;
