import React, { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

type ItemProps = {
  href: string;
  title: string;
}

type ContainerProps = FC<PropsWithChildren> & { Item: FC<ItemProps>}

const NavbarContainer: ContainerProps = ({ children }) => (
  <Navbar>
    {children}
  </Navbar>
);

NavbarContainer.Item = ({ title, href }) => {
  const selfRef = React.createRef<HTMLAnchorElement>();

  return (
    <Link
      ref={selfRef}
      onMouseMove={(e) => {
        if (!selfRef.current) return;
        const decimal = e.clientX / selfRef.current.offsetWidth;
        const basePercent = 80;
        const percentRange = 20;
        const adjustablePercent = percentRange * decimal;
        const lightbluePercent = basePercent + adjustablePercent;
        selfRef.current.style.setProperty("--light-blue-percent", `${lightbluePercent}%`);
      }}
      to={href}
    >{title}
    </Link>
  );
};
export default NavbarContainer;
