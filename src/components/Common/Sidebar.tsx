import { useEffect, useRef, useState } from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  activeTab?: number;
  onTabChange?: (tab: number) => void;
}

const getPathId = (path: string) => {
  if (path.endsWith("/")) return 1;
  else if (path.includes("/characters")) return 2;
  else if (path.includes("/echoes")) return 3;
  else if (path.includes("/weapons")) return 4;
  else if (path.includes("/echo-scorer")) return 5
  return 1;
};

const Sidebar: React.FC<NavbarProps> = ({ activeTab = 1, onTabChange }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState<number>();
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  const lastScrollTop = useRef(0);
  const touchStartY = useRef(0);

  const SidebarImg =
    "https://whisperingsea.github.io/wuthering-waves-assets/images/menu.png";

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
    setActive(getPathId(location.pathname));
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop.current) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const touchEndY = event.changedTouches[0].clientY;
      if (touchEndY < touchStartY.current) {
        setIsNavbarVisible(true);
      } else {
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
    handleActiveNav(getPathId(location.pathname));
  }, [location.pathname]);

  return (
    <>
      <div
        className={`sidebar-wrapper ${isNavbarVisible ? "sidebar-visible" : "sidebar-hidden"
          }`}
      >
        <div
          className={`sidebar-icon-box ${isNavbarVisible ? "sidebar-visible" : "sidebar-hidden"
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
            <Link
              className={`sidebar-link ${active === 5 ? "active-navTab" : ""}`}
              to="https://discord.com/invite/fSkdH75T9U"
            >
              Discord Link
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
