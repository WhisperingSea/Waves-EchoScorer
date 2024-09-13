import React from "react";
import { useSearchFilter } from "../../contexts/SearchFilterContext";
import "./SearchBar.css";

export const SearchBar: React.FC = () => {
  const { query, handleSearch, handleWeaponFilter, handleElementFilter } =
    useSearchFilter();

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
              className="ele-btn"
              onClick={() => handleElementFilter("")}
            >
              <img
                src="https://cdn.wanderer.moe/wuthering-waves/elements/T_IconElementZero3.png"
                alt="All Element Icon"
              />
            </button>
            <button
              title="Glacio"
              className="ele-btn"
              onClick={() => handleElementFilter("Glacio")}
            >
              <img
                src="https://cdn.wanderer.moe/wuthering-waves/elements/T_IconElementIce3.png"
                alt="Glacio Element Icon"
              />
            </button>
            <button
              title="Fusion"
              className="ele-btn"
              onClick={() => handleElementFilter("Fusion")}
            >
              <img
                src="https://cdn.wanderer.moe/wuthering-waves/elements/T_IconElementFire3.png"
                alt="Fusion Element Icon"
              />
            </button>
            <button
              title="Electro"
              className="ele-btn"
              onClick={() => handleElementFilter("Electro")}
            >
              <img
                src="https://cdn.wanderer.moe/wuthering-waves/elements/T_IconElementThunder3.png"
                alt="Electro Element Icon"
              />
            </button>
            <button
              title="Aero"
              className="ele-btn"
              onClick={() => handleElementFilter("Aero")}
            >
              <img
                src="https://cdn.wanderer.moe/wuthering-waves/elements/T_IconElementWind3.png"
                alt="Aero Element Icon"
              />
            </button>
            <button
              title="Spectro"
              className="ele-btn"
              onClick={() => handleElementFilter("Spectro")}
            >
              <img
                src="https://cdn.wanderer.moe/wuthering-waves/elements/T_IconElementLight3.png"
                alt="Spectro Element Icon"
              />
            </button>
            <button
              title="Havoc"
              className="ele-btn"
              onClick={() => handleElementFilter("Havoc")}
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
            <button className="wep-btn" onClick={() => handleWeaponFilter("")}>
              All
            </button>
            <button
              className="wep-btn"
              onClick={() => handleWeaponFilter("Sword")}
            >
              Sword
            </button>
            <button
              className="wep-btn"
              onClick={() => handleWeaponFilter("Broadblade")}
            >
              BroadBlade
            </button>
            <button
              className="wep-btn"
              onClick={() => handleWeaponFilter("Pistols")}
            >
              Pistols
            </button>
            <button
              className="wep-btn"
              onClick={() => handleWeaponFilter("Gauntlets")}
            >
              Gauntlets
            </button>
            <button
              className="wep-btn"
              onClick={() => handleWeaponFilter("Rectifier")}
            >
              Rectifier
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
