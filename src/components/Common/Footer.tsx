import { useLocation } from "react-router-dom";
import "./Footer.css";
import { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [scorerPath, setScorerPath] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/echo-scorer")) setScorerPath(true);
  }, [location.pathname]);

  return (
    <>
      <div className={`${scorerPath ? "footer-2" : "footer"}`}>
        <h3>
          <b>Copyright</b>
        </h3>
        <p>
          <b>
            We are not affiliated with Wuthering Waves, all assets, game
            content, and materials are trademarks and copyrights of Kuro Game
          </b>
        </p>
        <p>
          <b>
            All media displayed on this site is the property of their respective
            owners. We do not claim ownership of any content, and any rights
            belong to the original creators.
          </b>
        </p>
        <h3>
          <b>Privacy Policy</b>
        </h3>
        <p>
          <b>
            No personal or identifiable information is stored or collected about
            you and we don't use cookies.
          </b>
        </p>
        <h4>Waves.com</h4>
      </div>
    </>
  );
};

export default Footer;
