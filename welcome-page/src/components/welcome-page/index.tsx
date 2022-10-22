import React, { useState, useEffect, useMemo } from "react";
import cx from "classnames";
import styles from "./style.module.scss";
import { randomUnique } from "../../utlis/utils";

const WelcomePage = () => {
  const roundConfigArray = useMemo(() => ([
    styles.roundConfig0,
    styles.roundConfig1,
    styles.roundConfig2,
  ]), []);

  const [positionConfig, setPositionConfig] = useState<string>(styles.default);
  const [roundConfig, setRoundConfig] = useState<string>(styles.roundConfig0);

  const changeConfig = () => {
    const nextPositionConfig = Math.round(Math.random()) === 0 ? styles.default : styles.moved;
    const next = (nextPositionConfig === styles.moved) ? randomUnique(1) : randomUnique(2);
    const nextRoundConfig = roundConfigArray[next];

    setPositionConfig(nextPositionConfig);
    setRoundConfig(nextRoundConfig);
  };

  useEffect(() => {
    const intervalId = setInterval(changeConfig, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={cx(styles.container, positionConfig, roundConfig)}>
      <div className={styles.preview} />
      <div className={styles.preview} />
      <div className={styles.preview} />
      <div className={styles.preview} />
      <div className={styles.preview} />
      <div className={styles.preview} />
      <div className={styles.preview} />
    </div>
  );
};

export default WelcomePage;
