import React, { FC, PropsWithChildren, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

type ItemProps = {
  icon?: React.ReactNode;
  href: string;
  title: string;
}

type IContainerProps = FC<PropsWithChildren> & { Item: FC<ItemProps> }

const SidebarContainer: IContainerProps = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);

  return (
    <div>
      <Sidebar
        isOpen={isOpen}
        selected={selected}
        setSelected={(index) => setSelected(index)}
        setIsOpen={() => setIsOpen((prev) => !prev)}
      >
        {children}
      </Sidebar>
    </div>
  );
};

SidebarContainer.Item = ({
  title, icon, href,
}) => (
  <Link to={href}>{icon}<p>{title}</p></Link>
);

export default SidebarContainer;
