import { useState } from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const SidebarImg =
    "https://sohansc13.github.io/wuthering-waves-assets/images/menu.png";

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div className="sidebar-container">
        {!sidebarOpen ? (
          <div className="sidebar-icon-box" onMouseEnter={handleSidebarOpen}>
            <h3>Menu</h3>
            <img className="sidebar-icon" src={SidebarImg} />
          </div>
        ) : (
          <div className="sidebar-list" onMouseLeave={handleSidebarClose}>
            <a className="sidebar-link" href="/">
              Home
            </a>
            <a className="sidebar-link" href="/characters">
              Characters
            </a>
            <a className="sidebar-link" href="/weapons">
              Weapons
            </a>
            <a className="sidebar-link" href="/echoes">
              Echoes
            </a>
            <a className="sidebar-link" href="/features">
              Features
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
