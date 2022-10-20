import React, { FC, PropsWithChildren, Children } from "react";
import styles from "./style.module.scss";

const Navbar:FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.container}>
    <ul>
      {Children.map(children, (child) => (<li>{child}</li>))}
    </ul>
  </div>
);

export default Navbar;
