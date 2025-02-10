import React, { useState } from "react";
import { ElementType, useSearchFilter, WeaponType } from "../../contexts/SearchFilterContext";
import "./SearchBar.css";

export const SearchBar: React.FC = () => {
  const { query, handleSearch, handleWeaponFilter, handleElementFilter } =
    useSearchFilter();
  const [activeElement, setActiveElement] = useState<string>("");
  const [activeWeapon, setActiveWeapon] = useState<string>("");

  const handleSelectElement = (element: ElementType) => {
    setActiveElement(element);
    handleElementFilter(element);
  };

  const handleSelectWeapon = (weapon: WeaponType) => {
    weapon === activeWeapon ? setActiveWeapon("") : setActiveWeapon(weapon);
    handleWeaponFilter(weapon);
  };

  return (
    <>
      <div className="search-bar search-bar-grid">
        <input
          id="Search-input"
          className="search"
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search by name..."
        />
        <div className="filter-1">
          <div className="inline-flex">
            <button
              title="All Elements"
              className={`ele-btn start`}
              onClick={() => handleSelectElement("")}
            >
              <img
                src="https://cdn.wanderer.moe/wuthering-waves/elements/T_IconElementZero3.png"
                alt="All Element Icon"
              />
            </button>
            <button
              title="Glacio"
              className={`ele-btn ${activeElement === "Glacio" ? "active" : ""}`}
              onClick={() => handleSelectElement("Glacio")}
            >
              <img
                src="https://cdn.wanderer.moe/wuthering-waves/elements/T_IconElementIce3.png"
                alt="Glacio Element Icon"
              />
            </button>
            <button
              title="Fusion"
              className={`ele-btn ${activeElement === "Fusion" ? "active" : ""}`}
              onClick={() => handleSelectElement("Fusion")}
            >
              <img
                src="https://cdn.wanderer.moe/wuthering-waves/elements/T_IconElementFire3.png"
                alt="Fusion Element Icon"
              />
            </button>
            <button
              title="Electro"
              className={`ele-btn ${activeElement === "Electro" ? "active" : ""}`}
              onClick={() => handleSelectElement("Electro")}
            >
              <img
                src="https://cdn.wanderer.moe/wuthering-waves/elements/T_IconElementThunder3.png"
                alt="Electro Element Icon"
              />
            </button>
            <button
              title="Aero"
              className={`ele-btn ${activeElement === "Aero" ? "active" : ""}`}
              onClick={() => handleSelectElement("Aero")}
            >
              <img
                src="https://cdn.wanderer.moe/wuthering-waves/elements/T_IconElementWind3.png"
                alt="Aero Element Icon"
              />
            </button>
            <button
              title="Spectro"
              className={`ele-btn ${activeElement === "Spectro" ? "active" : ""}`}
              onClick={() => handleSelectElement("Spectro")}
            >
              <img
                src="https://cdn.wanderer.moe/wuthering-waves/elements/T_IconElementLight3.png"
                alt="Spectro Element Icon"
              />
            </button>
            <button
              title="Havoc"
              className={`ele-btn end ${activeElement === "Havoc" ? "active" : ""}`}
              onClick={() => handleSelectElement("Havoc")}
            >
              <img
                src="https://cdn.wanderer.moe/wuthering-waves/elements/T_IconElementDark3.png"
                alt="Havoc Element Icon"
              />
            </button>
          </div>
        </div>
        <div className="filter-2">
          <div className="inline-flex">
            <button
              className={`wep-btn start`}
              onClick={() => handleSelectWeapon("")}
            >
              All
            </button>
            <button
              className={`wep-btn ${activeWeapon === "Sword" ? "active" : ""}`}
              onClick={() => handleSelectWeapon("Sword")}
            >
              Sword
            </button>
            <button
              className={`wep-btn ${activeWeapon === "Broadblade" ? "active" : ""}`}
              onClick={() => handleSelectWeapon("Broadblade")}
            >
              Broadblade
            </button>
            <button
              className={`wep-btn ${activeWeapon === "Pistols" ? "active" : ""}`}
              onClick={() => handleSelectWeapon("Pistols")}
            >
              Pistols
            </button>
            <button
              className={`wep-btn ${activeWeapon === "Gauntlets" ? "active" : ""}`}
              onClick={() => handleSelectWeapon("Gauntlets")}
            >
              Gauntlets
            </button>
            <button
              className={`wep-btn end ${activeWeapon === "Rectifier" ? "active" : ""}`}
              onClick={() => handleSelectWeapon("Rectifier")}
            >
              Rectifier
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
