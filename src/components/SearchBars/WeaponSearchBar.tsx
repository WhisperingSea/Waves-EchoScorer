import "./WeaponSearchBar.css";
import { useSearchFilter } from "../../contexts/SearchFilterContext";

const WeaponSearchBar: React.FC = () => {
  const {
    handleWeaponFilter,
    weaponQuery,
    handleWeaponQuery,
    handleWeaponRarity,
    selectedWeaponRarity,
  } = useSearchFilter();
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
        <button className="weapon-btn" onClick={() => handleWeaponFilter("")}>
          All
        </button>
        <button
          className="weapon-btn"
          onClick={() => handleWeaponFilter("Sword")}
        >
          Sword
        </button>
        <button
          className="weapon-btn"
          onClick={() => handleWeaponFilter("Broadblade")}
        >
          BroadBlade
        </button>
        <button
          className="weapon-btn"
          onClick={() => handleWeaponFilter("Pistols")}
        >
          Pistols
        </button>
        <button
          className="weapon-btn"
          onClick={() => handleWeaponFilter("Gauntlets")}
        >
          Gauntlets
        </button>
        <button
          className="weapon-btn"
          onClick={() => handleWeaponFilter("Rectifier")}
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
