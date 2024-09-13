import { useParams } from "react-router-dom";
import { useDataContext } from "../contexts/CharacterDataContext";
import "../styles/DamageCalcualtor.css";
import { useEffect, useRef, useState } from "react";
import CalcStats from "../components/CalculatorComponents/CalcStats";
import CalcFortes from "../components/CalculatorComponents/CalcFortes";
import CalcWeapons from "../components/CalculatorComponents/CalcWeapons";
import FeaturesModal from "../components/Modals/FeaturesModal";
import CalcEchoes from "../components/CalculatorComponents/CalcEchoes";
import CalcSequence from "../components/CalculatorComponents/CalcSequence";
import CalcBuffs from "../components/CalculatorComponents/CalcBuffs";
import CalcEnemyRes from "../components/CalculatorComponents/CalcEnemyRes";
import CalcDamageComp from "../components/CalculatorComponents/CalcSkillDmg";

const DamageCalculator: React.FC = () => {
  const {
    characters,
    selectedCharacterId,
    setSelectedCharacterId,
    level,
    setLevel,
  } = useDataContext();
  const { charaName } = useParams<{ charaName: string }>();
  const [activeTab, setActiveTab] = useState<number>(1);
  const [activeStatsTab, setActiveStatsTab] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState<string>("");

  //Sidebar Menu Animation Delay
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    timeoutRef.current = window.setTimeout(() => {
      setIsVisible(true);
    }, 400);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsVisible(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  //Page Dependency
  const chara = Object.values(characters).find(
    (char) => char.charaId === selectedCharacterId
  );

  const cName = Object.values(characters).find(
    (character) => character.name.toLowerCase() === charaName?.toLowerCase()
  );

  useEffect(() => {
    if (cName) {
      setSelectedCharacterId(cName.charaId);
    }
  });

  //Modal
  const openFeatureModal1 = () => {
    setOpen(true);
    setLink("/damage-calculator/");
  };

  const closeFeatureModal = () => {
    setOpen(false);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveStatsTab(parseInt(e.target.value));
  };

  return (
    <>
      <div className="damage-calculator-page-container">
        <header className="calculator-section">
          {open && (
            <FeaturesModal onClose={closeFeatureModal} pageLink={link} />
          )}
          <div className="calculator-modal-box" onClick={openFeatureModal1}>
            <div className="calculator-modal-sigil">
              <img src={chara?.images.icon_sq} alt={`${chara?.name} Icon`} />
            </div>
          </div>
          <div className="calculator-header">
            <h2 className="calc-header-2">{chara?.name}</h2>
            <img src={chara?.rarity.img} alt={chara?.rarity.alt} />
          </div>
          <div
            className="calculator-sidebar"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isVisible && isHovered && (
              <div
                className={`calculator-sidebar-menu ${
                  isVisible ? "menu-show" : ""
                }`}
              >
                <a
                  className="calc-menu-link menu-link-top"
                  onClick={() => setActiveTab(1)}
                >
                  Forte
                </a>
                <a className="calc-menu-link" onClick={() => setActiveTab(2)}>
                  Weapon
                </a>
                <a className="calc-menu-link" onClick={() => setActiveTab(3)}>
                  Echoes
                </a>
                <a className="calc-menu-link" onClick={() => setActiveTab(4)}>
                  Sequence
                </a>
                <a className="calc-menu-link" onClick={() => setActiveTab(6)}>
                  Enemy Res
                </a>
              </div>
            )}
          </div>
        </header>
        <main>
          <section className="calculator-section">
            <div className="calculator-grid">
              <div className="calculator-grid-item-1">
                <div className="calculator-level calculator-flexbox">
                  <h3 className="calculator-headers">Level</h3>
                  <input
                    id="level"
                    className="calculator-level-input"
                    name="level-input"
                    type="range"
                    min={1}
                    max={90}
                    defaultValue={90}
                    step={1}
                    onChange={(e) => setLevel(parseInt(e.target.value))}
                  />
                  <h3>{level}</h3>
                </div>
                {activeTab === 1 && <CalcFortes />}
                {activeTab === 2 && <CalcWeapons />}
                {activeTab === 3 && <CalcEchoes />}
                {activeTab === 4 && <CalcSequence />}
                {activeTab === 5 && <CalcBuffs />}
                {activeTab === 6 && <CalcEnemyRes />}
              </div>
              <div className="calculator-grid-item-2">
                <select
                  className="calculator-skill-select"
                  id="StatDamageSelect"
                  value={activeStatsTab}
                  onChange={handleSelect}
                >
                  <option value={0} id="StatDamageSelectOption1">
                    Stats
                  </option>
                  <option value={1} id="StatDamageSelectOption2">
                    Basic Attack Damage
                  </option>
                  <option value={2} id="StatDamageSelectOption3">
                    Resonance Skill Damage
                  </option>
                  <option value={3} id="StatDamageSelectOption4">
                    Resonance Liberation Damage
                  </option>
                  <option value={6} id="StatDamageSelectOption5">
                    Forte Circuit Damage
                  </option>
                  <option value={4} id="StatDamageSelectOption6">
                    Intro Skill Damage
                  </option>
                </select>
                {activeStatsTab === 0 ? <CalcStats /> : null}
                {activeStatsTab !== 0 && (
                  <>
                    <div className="extra-item">
                      <div className="extra-item-1">
                        <div className="extra-item-box"></div>
                        <p>Base</p>
                      </div>
                      <div className="extra-item-2">
                        <div className="extra-item-box-2"></div>
                        <p>Critical</p>
                      </div>
                    </div>
                    <div className="extra-item-3">
                      <h3>Damage</h3>
                      <h3>Hits</h3>
                    </div>
                    <CalcDamageComp index={activeStatsTab} />
                  </>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default DamageCalculator;
