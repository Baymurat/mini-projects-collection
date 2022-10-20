import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarContainer from "./components/navbar";
import "../style/style.scss";

const App = () => (
  <Router>
    <NavbarContainer>
      <NavbarContainer.Item href="/dashboard" title="Dashboard" />
      <NavbarContainer.Item href="/message" title="Message" />
      <NavbarContainer.Item href="/settings" title="Settings" />
    </NavbarContainer>
  </Router>
);

export default App;
