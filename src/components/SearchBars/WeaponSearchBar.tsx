import "./WeaponSearchBar.css";
import React, { useState } from "react";
import { WeaponType } from "../../contexts/SearchFilterContext";
import { useSearchFilter } from "../../contexts/SearchFilterContext";

const WeaponSearchBar: React.FC = () => {
  const {
    handleWeaponFilter,
    weaponQuery,
    handleWeaponQuery,
    handleWeaponRarity,
    selectedWeaponRarity,
  } = useSearchFilter();
  const [activeWeapon, setActiveWeapon] = useState<string>("");

  const handleSelectWeapon = (weapon: WeaponType) => {
    weapon === activeWeapon ? setActiveWeapon("") : setActiveWeapon(weapon);
    handleWeaponFilter(weapon);
  };

  return (
    <>
      <div className="weapon-searchbar weapon-search-grid">
        <div className="weapon-search-input">
          <input
            type="text"
            className="weapon-search"
            id="weapon-search"
            placeholder="Search By Name..."
            value={weaponQuery}
            onChange={handleWeaponQuery}
          />
        </div>
        <button className="weapon-btn" onClick={() => handleSelectWeapon("")}>
          All
        </button>
        <button
          className={`weapon-btn ${activeWeapon === "Sword" ? "active" : ""}`}
          onClick={() => handleSelectWeapon("Sword")}
        >
          Sword
        </button>
        <button
          className={`weapon-btn ${activeWeapon === "Broadblade" ? "active" : ""}`}
          onClick={() => handleSelectWeapon("Broadblade")}
        >
          Broadblade
        </button>
        <button
          className={`weapon-btn ${activeWeapon === "Pistols" ? "active" : ""}`}
          onClick={() => handleSelectWeapon("Pistols")}
        >
          Pistols
        </button>
        <button
          className={`weapon-btn ${activeWeapon === "Gauntlets" ? "active" : ""}`}
          onClick={() => handleSelectWeapon("Gauntlets")}
        >
          Gauntlets
        </button>
        <button
          className={`weapon-btn ${activeWeapon === "Rectifier" ? "active" : ""}`}
          onClick={() => handleSelectWeapon("Rectifier")}
        >
          Rectifier
        </button>
        <div className="weapon-rarity">
          <select value={selectedWeaponRarity} onChange={handleWeaponRarity}>
            <option value={0}>Select Rarity</option>
            <option value={1}>1 Star</option>
            <option value={2}>2 Star</option>
            <option value={3}>3 Star</option>
            <option value={4}>4 Star</option>
            <option value={5}>5 Star</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default WeaponSearchBar;
