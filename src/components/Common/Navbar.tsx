import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  activeTab?: number;
  onTabChange?: (tab: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab = 1, onTabChange }) => {
  const [active, setActive] = useState<number>(activeTab);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  let lastScrollTop = 0;

  const DiscordImg =
    "https://whisperingsea.github.io/wuthering-waves-assets/images/discord.png";

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
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
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
      className={`navbar-wrapper ${
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
            <li className="list-item">
              <a
                className="discord-link"
                href="https://discord.com/invite/fSkdH75T9U"
              >
                <img
                  className="discord-link-img"
                  src={DiscordImg}
                  alt="Discord link image"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
