import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container-nav">
          <a className="nav-link logo-link" href="/">
            Waves
          </a>
          <ul className="nav-list">
            <li className="list-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="list-item">
              <a className="nav-link" href="/characters">
                Characters
              </a>
            </li>
            <li className="list-item">
              <a className="nav-link" href="/echoes">
                Echoes
              </a>
            </li>
            <li className="list-item">
              <a className="nav-link" href="/weapons">
                Weapons
              </a>
            </li>
            <li className="list-item">
              <a className="nav-link" href="/features">
                Features
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
