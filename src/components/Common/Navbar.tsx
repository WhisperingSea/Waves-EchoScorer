import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  activeTab?: number;
  onTabChange?: (tab: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab = 1, onTabChange }) => {
  const location = useLocation();
  const [active, setActive] = useState<number>(activeTab);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  let lastScrollTop = 0;

  const handleActiveNav = (tab: number) => {
    setActive(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActive(1);
    else if (path.startsWith("/characters")) setActive(2);
    else if (path.startsWith("/echoes")) setActive(3);
    else if (path.startsWith("/weapons")) setActive(4);
    else if (path.startsWith("/echo-scorer")) setActive(5);
  }, [location.pathname]);

  return (
    <div
      className={`navbar-warpper ${
        isNavbarVisible ? "navbar-visible" : "navbar-hidden"
      }`}
    >
      <nav className="navbar">
        <div className="container-nav">
          <Link className="nav-link logo-link" to="/">
            <span>W</span>aves
          </Link>
          <ul className="nav-list">
            <li className={`list-item ${active === 1 ? "active-navTab" : ""}`}>
              <Link
                className="nav-link"
                to="/"
                onClick={() => handleActiveNav(1)}
              >
                Home
              </Link>
            </li>
            <li className={`list-item ${active === 2 ? "active-navTab" : ""}`}>
              <Link
                className="nav-link"
                to="/characters"
                onClick={() => handleActiveNav(2)}
              >
                Characters
              </Link>
            </li>
            <li className={`list-item ${active === 3 ? "active-navTab" : ""}`}>
              <Link
                className="nav-link"
                to="/echoes"
                onClick={() => handleActiveNav(3)}
              >
                Echoes
              </Link>
            </li>
            <li className={`list-item ${active === 4 ? "active-navTab" : ""}`}>
              <Link
                className="nav-link"
                to="/weapons"
                onClick={() => handleActiveNav(4)}
              >
                Weapons
              </Link>
            </li>
            <li className={`list-item ${active === 5 ? "active-navTab" : ""}`}>
              <Link
                className="nav-link"
                to="/echo-scorer/Rover-Spectro"
                onClick={() => handleActiveNav(5)}
              >
                Echo-Scorer
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
