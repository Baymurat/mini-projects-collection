import React, { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
  animationDelay: number;
  height: number;
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
  width: number;
}

const BouncingSquare: FC<Props> = (props) => {
  const {
    animationDelay,
    bottom,
    height,
    right,
    top,
    left,
    width,
  } = props;
  return (
    <div
      className={styles.square}
      style={{
        animationDelay: `${-1 * animationDelay}s`,
        bottom,
        height,
        left,
        right,
        top,
        width,
      }}
    />
  );
};

export default BouncingSquare;
