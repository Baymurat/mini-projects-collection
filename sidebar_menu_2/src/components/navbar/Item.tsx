import React, { FC } from "react";
import styles from "./style.module.scss";

export type TProps = {
  id: string;
  href: string;
  title: string;
  icon: string;
  isActive: boolean;
  onSelect: (id: string) => void;
}

const Item: FC<TProps> = ({
  href, title, icon, id, isActive, onSelect,
}) => (
  <li
    onClick={() => onSelect(id)}
    className={`${styles.list} ${isActive ? styles.active : ""}`}
  >
    <a href={href}>
      <span className={styles.icon}>
        <ion-icon name={icon} />
      </span>
      <span className={styles.title}>{title}</span>
    </a>
  </li>
);

export default Item;
