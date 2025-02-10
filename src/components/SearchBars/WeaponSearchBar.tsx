import "./WeaponSearchBar.css";
import React, { useState } from "react";
import { WeaponType } from "../../contexts/SearchFilterContext";
import { useSearchFilter } from "../../contexts/SearchFilterContext";

const WeaponTypes: WeaponType[] = ["Sword", "Broadblade", "Pistols", "Gauntlets", "Rectifier"];

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
        {WeaponTypes.map((weapon) => (
          <button
            key={weapon}
            className={`weapon-btn ${activeWeapon === weapon ? "active" : ""}`}
            onClick={() => handleSelectWeapon(weapon)}
          >
            {weapon}
          </button>
        ))}
        <div className="weapon-rarity">
          <select value={selectedWeaponRarity} onChange={handleWeaponRarity}>
            <option value="0">Select Rarity</option>
            {[...Array(5)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1} Star</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default WeaponSearchBar;
