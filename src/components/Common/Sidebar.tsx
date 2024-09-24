import { useEffect, useRef, useState } from "react";
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
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  const lastScrollTop = useRef(0);
  const touchStartY = useRef(0);

  const SidebarImg =
    "https://sohansc13.github.io/wuthering-waves-assets/images/menu.png";

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
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
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      console.log("Scroll Top:", scrollTop);
      if (scrollTop > lastScrollTop.current) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
      console.log("Touch Start Y:", touchStartY.current);
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const touchEndY = event.changedTouches[0].clientY;
      console.log("Touch End Y:", touchEndY);
      if (touchEndY < touchStartY.current) {
        // Swiping up
        setIsNavbarVisible(true);
      } else {
        // Swiping down
        setIsNavbarVisible(false);
      }
    };

    if (!sidebarOpen) {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchend", handleTouchEnd);
    } else {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [sidebarOpen]);

  useEffect(() => {
    if (sidebarOpen === true) {
      setIsNavbarVisible(true);
    }
  }, [sidebarOpen]);

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
      <div
        className={`sidebar-wrapper ${
          isNavbarVisible ? "sidebar-visible" : "sidebar-hidden"
        }`}
      >
        <div
          className={`sidebar-icon-box ${
            isNavbarVisible ? "sidebar-visible" : "sidebar-hidden"
          }`}
        >
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
