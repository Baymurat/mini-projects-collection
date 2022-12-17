import React, { FC } from "react";
import styles from "./styles.module.scss";

type Props = React.CSSProperties

const RotateCircle: FC<Props> = (props) => (
  <div style={{ ...props }} className={styles.container} />
);

export default RotateCircle;
