import React, { useState, FC } from "react";
import { Link, useLocation } from "react-router-dom";
import cx from "classnames";
import styles from "./styles.module.scss";

type WrapperProps = {
  to: string;
  title: string;
  onClick: () => void;
  isActive: boolean;
}

const LinkWrapper: FC<WrapperProps> = ({
  isActive, to, title, onClick,
}) => (
  <Link
    className={cx({ [styles.active]: isActive })}
    to={to}
    onClick={() => onClick()}
  >
    {title}
  </Link>
);

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState<string>(location.pathname.slice(1));

  return (
    <header>
      <Link to="home" className={styles.logo}>LOGO</Link>
      <ul>
        <li>
          <LinkWrapper
            isActive={active === "home"}
            title="Home"
            to="home"
            onClick={() => setActive("home")}
          />
        </li>
        <li>
          <LinkWrapper
            isActive={active === "about"}
            title="About"
            to="about"
            onClick={() => setActive("about")}
          />
        </li>
        <li>
          <LinkWrapper
            isActive={active === "work"}
            title="Work"
            to="work"
            onClick={() => setActive("work")}
          />
        </li>
        <li>
          <LinkWrapper
            isActive={active === "contact"}
            title="Contact"
            to="contact"
            onClick={() => setActive("contact")}
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
