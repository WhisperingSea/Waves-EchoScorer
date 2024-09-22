import { useEffect, useState } from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  activeTab?: number;
  onTabChange?: (tab: number) => void;
}

const Sidebar: React.FC<NavbarProps> = ({ activeTab = 1, onTabChange }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState<number>(activeTab);

  const SidebarImg =
    "https://sohansc13.github.io/wuthering-waves-assets/images/menu.png";

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleActiveNav = (tab: number) => {
    setActive(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
    setSidebarOpen(false);
  };

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActive(1);
    else if (path.startsWith("/characters")) setActive(2);
    else if (path.startsWith("/echoes")) setActive(3);
    else if (path.startsWith("/weapons")) setActive(4);
    else if (path.startsWith("/echo-scorer")) setActive(5);
  }, [location.pathname]);

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-icon-box">
          <Link className="nav-link logo-link" to="/">
            <span>W</span>aves
          </Link>
          <img
            className="sidebar-icon"
            src={SidebarImg}
            onClick={handleSidebarOpen}
          />
        </div>
        {sidebarOpen && (
          <div className="sidebar-list" onMouseLeave={handleSidebarClose}>
            <Link
              className={`sidebar-link ${active === 1 ? "active-navTab" : ""}`}
              to="/"
              onClick={() => handleActiveNav(1)}
            >
              Home
            </Link>
            <Link
              className={`sidebar-link ${active === 2 ? "active-navTab" : ""}`}
              to="/characters"
              onClick={() => handleActiveNav(2)}
            >
              Characters
            </Link>
            <Link
              className={`sidebar-link ${active === 3 ? "active-navTab" : ""}`}
              to="/echoes"
              onClick={() => handleActiveNav(3)}
            >
              Echoes
            </Link>
            <Link
              className={`sidebar-link ${active === 4 ? "active-navTab" : ""}`}
              to="/weapons"
              onClick={() => handleActiveNav(4)}
            >
              Weapons
            </Link>
            <Link
              className={`sidebar-link ${active === 5 ? "active-navTab" : ""}`}
              to="/echo-scorer/Rover-Spectro"
              onClick={() => handleActiveNav(5)}
            >
              Echo-Scorer
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
