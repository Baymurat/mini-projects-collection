import React, { FC } from "react";
import styles from "./styles.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
}

const StyledButton: FC<Props> = ({ text, ...rest }) => (
  <button
    {...rest}
    className={styles.button}
    type="button"
  >
    <span>
      {text}
    </span>
    <i />
  </button>
);

export default StyledButton;
