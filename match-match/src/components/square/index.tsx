import React, { useState } from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

type Props = {
  nothing?: string;
}

const Square = (props: Props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const onClick = () => setIsSelected((prev) => !prev);

  return (
    <div
      onClick={onClick}
      className={cx(styles.container, { [styles.open]: isSelected })}
    >
      <div className={styles.first} />
      <div className={styles.second} />
    </div>
  );
};

export default Square;
