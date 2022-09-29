import React, { FC, PropsWithChildren, Children } from "react";
import Logo from "@static/images/logo.png";
import cx from "classnames";
import styles from "./styles.module.scss";

type Props = {
  isOpen: boolean;
  selected: number;
  setSelected: (index: number) => void;
  setIsOpen: () => void;
}

const Sidebar: FC<PropsWithChildren<Props>> = ({
  children,
  isOpen,
  selected,
  setSelected,
  setIsOpen,
}) => (
  <header>
    <div className={cx(styles.sideNav, { [styles.open]: isOpen })}>
      <div
        onClick={setIsOpen}
        className={styles.menuToggle}
      />
      <a href="#" className={styles.logo}>
        <img src={Logo} alt="logo.png" className={styles.logoImg} />
      </a>
      <ul className={styles.navLinks}>
        {Children.map(
          children,
          (child, index) => (
            <li
              className={cx({ [styles.selected]: selected === index })}
              onClick={() => setSelected(index)}
            >
              {child}
            </li>
          ),
        )}
        <div className={styles.active} />
      </ul>
    </div>
  </header>
);

export default Sidebar;
