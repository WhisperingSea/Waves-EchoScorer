import React, { useEffect, useState } from "react";
import "../styles/Guide.css";
import { useDataContext } from "../contexts/CharacterDataContext";
import { useParams } from "react-router-dom";
import WWStats from "../components/PageComponents/WWStats.tsx";
import WWSkills from "../components/PageComponents/WWSkills.tsx";
import Footer from "../components/Common/Footer.tsx";
import WWSequences from "../components/PageComponents/WWSequences.tsx";

const Guide: React.FC = () => {
  const [isSwitched, setIsSwitched] = useState(false);
  const { characters, selectedCharacterId, setSelectedCharacterId } =
    useDataContext();
  const { charaName } = useParams<{ charaName: string }>();
  const [rangeval, setRangeval] = useState("90");
  const [level, setLevel] = useState("90");

  const chara = Object.values(characters).find(
    (id) => id.charaId === selectedCharacterId
  );

  const cName = Object.values(characters).find(
    (character) => character.name.toLowerCase() === charaName?.toLowerCase()
  );

  useEffect(() => {
    if (cName) {
      setSelectedCharacterId(cName.charaId);
    }
  }, [cName, setSelectedCharacterId]);

  const handleInputSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = event.target.value;
    setRangeval(newVal);
    setLevel(newVal);
  };

  const toggleSwitch = () => {
    setIsSwitched(!isSwitched);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Styles for background
  const [styles, setStyles] = useState<React.CSSProperties>({
    width: "100%",
    height: "100vh",
    position: "fixed",
    zIndex: `-1`,
  });

  useEffect(() => {
    if (chara?.element === "Glacio") {
      setStyles((prevStyles) => ({
        background: `linear-gradient(rgb(115, 194, 226, 0.200), black, rgb(115, 194, 226, 0.200))`,
        ...prevStyles,
      }));
    } else if (chara?.element === "Fusion") {
      setStyles((prevStyles) => ({
        background: `linear-gradient(rgb(211, 77, 77, 0.200), rgb(255, 255, 255, 0.180), rgb(211, 77, 77, 0.200))`,
        ...prevStyles,
      }));
    } else if (chara?.element === "Electro") {
      setStyles((prevStyles) => ({
        background: `linear-gradient(rgb(197, 56, 197, 0.150), rgb(255, 255, 255, 0.180), rgb(197, 56, 197, 0.150))`,
        ...prevStyles,
      }));
    } else if (chara?.element === "Aero") {
      setStyles((prevStyles) => ({
        background: `linear-gradient(rgb(123, 207, 172, 0.200), black, rgb(123, 207, 172, 0.200))`,
        ...prevStyles,
      }));
    } else if (chara?.element === "Spectro") {
      setStyles((prevStyles) => ({
        background: `linear-gradient(rgb(206, 180, 31, 0.200), black, rgb(206, 180, 31, 0.200))`,
        ...prevStyles,
      }));
    } else if (chara?.element === "Havoc") {
      setStyles((prevStyles) => ({
        background: `linear-gradient(rgb(196, 40, 133, 0.200), rgb(255, 255, 255, 0.180), rgb(196, 40, 133, 0.200))`,
        ...prevStyles,
      }));
    }
  }, [chara]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div className="guide-background" style={styles}></div>
      <div className="guide-container">
        <div className="selector-modal"></div>
        <div className="centerize">
          <main>
            <section className="guide-section">
              <div className="guide-grid">
                <div className="guide-grid-item-1 grid-item-1-flex">
                  <h1 className="guide-chara-name">{chara?.name}</h1>
                  <p className={`paragraph guide-paragraph ${chara?.element}`}>
                    {chara?.element}
                  </p>
                  <img
                    className="rarity-icon"
                    src={chara?.rarity.img}
                    alt={chara?.rarity.alt}
                  />
                </div>
                <div className="guide-grid-item-2">
                  <div className="flexbox-range">
                    <input
                      className="slider-input"
                      type="range"
                      min={1}
                      max={90}
                      name="vol"
                      defaultValue={90}
                      onChange={handleInputSlider}
                      step={1}
                    />
                    <p defaultValue={90}>{rangeval}</p>
                    <label className="switch" title="Minor Forte">
                      <input
                        id="minor-forte-switch"
                        type="checkbox"
                        checked={isSwitched}
                        onChange={toggleSwitch}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className="guide-grid-item-0">
                    <WWStats Level={level} isChecked={isSwitched} />
                  </div>
                </div>
                <div className="guide-grid-item-3">
                  <img srcSet={chara?.images.model} alt={chara?.name} />
                </div>
              </div>
            </section>
            <section className="page-link-grid">
              <a className="page-link-ref">Jump to: </a>
              <a className="page-link" onClick={() => scrollToSection("Skills")}>
                Skills
              </a>
              <a className="page-link" onClick={() => scrollToSection("Sequences")}>
                Sequences
              </a>
              <a className="page-link" onClick={() => scrollToSection("Ascension")}>
                Ascension
              </a>
              {/*hidden as the section is not prepared yet
              <a className="page-link" onClick={() => scrollToSection("Build")}>
                Build
              </a>*/}
            </section>
            <section className="guide-section ">
              <div id="Skills">
                <WWSkills />
              </div>
              <div id="Sequences">
                <WWSequences />
              </div>
            </section>
            <section className="materials">
              <div id="Ascension">
                <h2 className="center-header">Ascension Materials</h2>
                <div className="mat-flexbox">
                  <div className="chara-mat-box">
                    <h2 className="chara-mat-type">Character Ascension Mats</h2>
                    {chara &&
                      chara.asension &&
                      chara.asension.charaAsension &&
                      chara.asension.charaAsension.map((item, index) => (
                        <div key={index}>
                          <ul className="chara-ascension-list">
                            <li className="mat-item">
                              {item.item} x<b>{item.value}</b>
                            </li>
                          </ul>
                        </div>
                      ))}
                  </div>
                  <div className="forte-mat-box">
                    <h2 className="chara-mat-type">Forte Ascension Mats</h2>
                    {chara &&
                      chara.asension &&
                      chara.asension.forteAsension &&
                      chara.asension.forteAsension.map((item, index) => (
                        <div key={index}>
                          <ul className="chara-ascension-list">
                            <li className="mat-item">
                              {item.item} x<b>{item.value}</b>
                            </li>
                          </ul>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </section>
            {/*hidden as the section is not prepared yet
            <section className="guide-section">
              <div id="Build"></div>
            </section>*/}
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default Guide;
