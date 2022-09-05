import React, { FC, useState } from "react";
import Item from "./Item";

import styles from "./style.module.scss";

const Navbar: FC = () => {
  const [selected, setSelected] = useState<string>("Home");
  return (
    <div className={styles.navigation}>
      <ul>
        <Item
          onSelect={(id) => setSelected(id)}
          isActive={selected === "Home"}
          id="Home"
          icon="home-outline"
          href="#"
          title="Home"
        />
        <Item
          onSelect={(id) => setSelected(id)}
          isActive={selected === "Profile"}
          id="Profile"
          icon="person-outline"
          href="#"
          title="Profile"
        />
        <Item
          onSelect={(id) => setSelected(id)}
          isActive={selected === "Messages"}
          id="Messages"
          icon="chatbubbles-outline"
          href="#"
          title="Messages"
        />
        <Item
          onSelect={(id) => setSelected(id)}
          isActive={selected === "Settings"}
          id="Settings"
          icon="settings-outline"
          href="#"
          title="Settings"
        />
        <Item
          onSelect={(id) => setSelected(id)}
          isActive={selected === "Help"}
          id="Help"
          icon="help-outline"
          href="#"
          title="Help"
        />
        <Item
          onSelect={(id) => setSelected(id)}
          isActive={selected === "Password"}
          id="Password"
          icon="lock-closed-outline"
          href="#"
          title="Password"
        />
        <Item
          onSelect={(id) => setSelected(id)}
          isActive={selected === "Sign out"}
          id="Sign out"
          icon="log-out-outline"
          href="#"
          title="Sign out"
        />
      </ul>
    </div>
  );
};

export default Navbar;
