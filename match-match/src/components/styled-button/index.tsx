import React, { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

const StyledButton: FC<PropsWithChildren<Props>> = ({ children, ...rest }) => (
  <button
    {...rest}
    className={styles.button}
    type="button"
  >
    <span>
      {children}
    </span>
    <i />
  </button>
);

export default StyledButton;
