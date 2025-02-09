import React, { useState } from "react";
import "../styles/Home.css";
import { useDataContext } from "../contexts/CharacterDataContext.tsx";
import Footer from "../components/Common/Footer.tsx";
import FeaturesModal from "../components/Modals/FeaturesModal.tsx";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { characters } = useDataContext();
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState<string>("");

  const chara = Object.values(characters).find((i) => i.charaId === 1606);

  const openFeatureModal1 = () => {
    setOpen(true);
    setLink("/echo-scorer/");
  };

  const closeFeatureModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="home-background"></div>
      <div className="container">
        <header>
          {open && (
            <FeaturesModal onClose={closeFeatureModal} pageLink={link} />
          )}
        </header>
        <main>
          <section className="section">
            <div className="header">
              <h1 className="heading">~ Welcome To Waves ~</h1>
              <p className="paragraph">
                Wuthering Waves Damage Calculator and Echo Scorer
              </p>
            </div>
            <div className="sub-header">
              <h2 className="heading-2">What's new?</h2>
              <div className="card-guide-grid">
                <div className="card-guide-info">
                  <h2 className={`heading-2 ${chara?.element}`}>
                    <a className="chara-name">{chara?.name}</a>
                  </h2>
                  <p className="paragraph">{chara?.bio}</p>
                  <div className="flexbox-card-guide">
                    <p className="paragraph">Element: </p>
                    <p className={`paragraph ${chara?.element}`}>
                      {" "}
                      {chara?.element}
                    </p>
                  </div>
                  <div className="flexbox-card-guide">
                    <p className="paragraph">Weapon:</p>
                    <p className={`paragraph ${chara?.element}`}>
                      {chara?.weapon}
                    </p>
                  </div>
                  <p className={`paragraph ${chara?.element}`}>
                    {chara?.rarity.alt} Resonator
                  </p>
                  <div className="guide-link">
                    <Link
                      className="guide-link-text"
                      to={`/echo-scorer/${chara?.name}`}
                    >
                      Click here to go to Scorer
                    </Link>
                  </div>
                </div>
                <div className="card-guide-image-box">
                  <img
                    className="card-guide-image"
                    src={chara?.images.portrait}
                    alt={`${chara?.name} image`}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="updates-data">
              <div>
                <h2 className="heading-2">Updates :</h2>
                <ul className="update-list">
                  <li className="update-list-item">
                    Added Resonators from 1.4 and 2.0
                  </li>
                  <li className="update-list-item">
                    Added Weapons from 1.4 and 2.0
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="heading-2">Upcoming Updates :</h2>
                <ul className="update-list">
                  <li className="update-list-item">Echo Scorer</li>
                  <li className="update-list-item">
                    2.1 Resonators (Phoebe & Brant) and Weapons
                  </li>
                  <li className="update-list-item">Minor QoL Changes</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="home-features">
              <h2 className="heading-2">Check Out :</h2>
              <div className="damage-calc-home">
                <div className="home-feature-grid">
                  <div
                    className="home-feature-grid-item-2"
                    onClick={openFeatureModal1}
                  >
                    <div className="home-feature-grid-item-2-bg"></div>
                    <div className="home-feature-grid-item-overlay"></div>
                    <h2 className="header-2">Echo Scorer</h2>
                  </div>
                  <div className="home-feature-grid-item-1">
                    <a
                      className="tools-Site-Link"
                      href="https://www.wutheringtools.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="home-feature-grid-item-1-bg"></div>
                      <div className="home-feature-grid-item-overlay"></div>
                      <h2 className="header-2">Damage Calculator</h2>
                      <p>(Built By @LavaSnake)</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;
