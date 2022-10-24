import React, { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
  subTitle: string;
  title: string;
}

const Card: FC<Props> = ({ subTitle, title }) => (
  <div className={styles.container}>
    <div className={styles.card}>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  </div>
);

export default Card;
