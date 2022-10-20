import React, { FC, PropsWithChildren } from "react";
import cx from "classnames";
import styles from "./style.module.scss";

type Props = {
  isChecked: boolean;
  setIsChecked: () => void;
}

const Checkbox: FC<PropsWithChildren<Props>> = ({ isChecked, setIsChecked }) => (
  <div
    className={styles.container}
    onClick={setIsChecked}
  >
    <div
      className={cx(styles.tick, { [styles.isChecked]: isChecked })}
    />
  </div>
);

export default Checkbox;
