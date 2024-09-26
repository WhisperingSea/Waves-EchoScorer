import { useLocation } from "react-router-dom";
import "./Footer.css";
import { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const date = new Date().getFullYear();
  const [scorerPath, setScorerPath] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/echo-scorer")) setScorerPath(true);
  }, [location.pathname]);

  return (
    <>
      <div className={`${scorerPath ? "footer-2" : "footer"}`}>
        <a>Privacy Policy</a>
        <p>Copyright Ⓒ {date} Waves</p>
      </div>
    </>
  );
};

export default Footer;
