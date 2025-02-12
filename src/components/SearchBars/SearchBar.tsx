import React, { useState } from "react";
import { ElementType, useSearchFilter, WeaponType } from "../../contexts/SearchFilterContext";
import "./SearchBar.css";

const WeaponTypes: WeaponType[] = ["Sword", "Broadblade", "Pistols", "Gauntlets", "Rectifier"];

//TODO: change the names of files on server to match the names of the elements
const ElementTypes: { name: ElementType, displayName: string }[] = [
  { name: "Glacio", displayName: "Ice" },
  { name: "Fusion", displayName: "Fire" },
  { name: "Electro", displayName: "Thunder" },
  { name: "Aero", displayName: "Wind" },
  { name: "Spectro", displayName: "Light" },
  { name: "Havoc", displayName: "Dark" }
];
export const SearchBar: React.FC = () => {
  const { query, handleSearch, handleWeaponFilter, handleElementFilter, selectedElement, selectedWeaponType } =
    useSearchFilter();
  const [activeElement, setActiveElement] = useState<string>(selectedElement);
  const [activeWeapon, setActiveWeapon] = useState<string>(selectedWeaponType);

  const handleSelectElement = (element: ElementType) => {
    element == activeElement ? setActiveElement("") : setActiveElement(element);
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
              key="All"
              title="All Elements"
              className={`ele-btn start`}
              onClick={() => handleSelectElement("")}
            >
              <img
                src="https://cdn.wanderer.moe/wuthering-waves/elements/T_IconElementZero3.png"
                alt="All Element Icon"
              />
            </button>
            {ElementTypes.map((element, index) => (
              <button
                key={element.name}
                title={element.name}
                className={`ele-btn ${index === ElementTypes.length - 1 ? "end" : ""} ${activeElement === element.name ? "active" : ""}`}
                onClick={() => handleSelectElement(element.name)}
              >
                <img
                  src={`https://cdn.wanderer.moe/wuthering-waves/elements/T_IconElement${element.displayName}3.png`}
                  alt={`${element.name} Element Icon`}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="filter-2">
          <div className="inline-flex">
            <button
              key={"All"}
              className={`wep-btn start`}
              onClick={() => handleSelectWeapon("")}
            >
              All
            </button>
            {WeaponTypes.map((weapon, index) => (
              <button
                key={weapon}
                className={`wep-btn ${index === WeaponTypes.length - 1 ? "end" : ""} ${activeWeapon === weapon ? "active" : ""}`}
                onClick={() => handleSelectWeapon(weapon)}
              >
                {weapon}
              </button>
            ))}
          </div>
        </div>
        <div className="dropdown-filter-1">
          <span>{activeElement ? activeElement : "Select Element"}</span>
          <div className="dropdown-content-filter">
            <ul>
              <li>
                <button
                  key="All"
                  className="ele-select"
                  onClick={() => handleSelectElement("")}
                >
                  All
                </button>
              </li>
              {ElementTypes.map((element) => (
                <li>
                  <button
                    key={element.name}
                    className="ele-select"
                    onClick={() => handleSelectElement(element.name)}
                  >
                    {element.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="dropdown-filter-2">
          <span>{activeWeapon ? activeWeapon : "Select Weapon"}</span>
          <div className="dropdown-content-filter">
            <ul>
              <li>
                <button
                  key="All"
                  className="wep-select"
                  onClick={() => handleSelectWeapon("")}
                >
                  All
                </button>
              </li>
              {WeaponTypes.map((weapon) => (
                <li>
                  <button
                    key={weapon}
                    className="wep-select"
                    onClick={() => handleSelectWeapon(weapon)}
                  >
                    {weapon}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
