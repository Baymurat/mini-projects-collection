import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SidebarContainer from "./components/side-bar";
import "../style/style.scss";

const App = () => (
  <Router>
    <SidebarContainer>
      <SidebarContainer.Item href="/dashboard" title="Dashboard" icon={<i className="fas fa-house-user" />} />
      <SidebarContainer.Item href="/message" title="Message" icon={<i className="fas fa-comment-dots" />} />
      <SidebarContainer.Item href="/users" title="Users" icon={<i className="fas fa-user-friends" />} />
      <SidebarContainer.Item href="/rewards" title="Rewards" icon={<i className="fas fa-box-open" />} />
      <SidebarContainer.Item href="/reports" title="Reports" icon={<i className="fas fa-chart-pie" />} />
      <SidebarContainer.Item href="/settings" title="Settings" icon={<i className="fas fa-tools" />} />
    </SidebarContainer>
  </Router>
);

export default App;
