import "../../styles/Weapons.css";
import { useSearchFilter } from "../../contexts/SearchFilterContext";
import { Link } from "react-router-dom";
import { useWeaponContext } from "../../contexts/WeaponDataContext";

type RarityType = {
  [key: number]: {
    background: string;
  };
};
const WeaponCards: React.FC = () => {
  const { filteredWeapons } = useSearchFilter();
  const { setSelectedWeapon } = useWeaponContext();
  const rarityBG: RarityType = {
    1: {
      background:
        "linear-gradient(rgba(138,138,138,0.11) 0%, rgba(94,91,86,0.2) 52%, rgba(138,138,138,0.5) 100%)",
    },
    2: {
      background:
        "linear-gradient(rgba(45,236,77,0.1) 0%, rgba(70,168,50,0.2) 52%, rgba(48,231,78,0.4) 100%)",
    },
    3: {
      background:
        "linear-gradient( rgba(10,163,194,0.1) 0%, rgba(50,128,168,0.2) 52%, rgba(33,190,222,0.4) 100%)",
    },
    4: {
      background:
        "linear-gradient(rgba(201,48,231,0.11) 0%, rgba(151,50,168,0.2) 52%, rgba(201,48,231,0.4) 100%)",
    },
    5: {
      background:
        "linear-gradient(rgba(231,198,48,0.11) 0%, rgba(168,143,50,0.2) 52%, rgba(231,198,48,0.6) 100%)",
    },
  };

  return (
    <>
      <div className="weapon-card-group">
        <div className="weapon-card-grid">
          {filteredWeapons && filteredWeapons.length > 0 ? (
            filteredWeapons
              .sort((a, b) => {
                if (b.rarity === a.rarity) {
                  return a.name.localeCompare(b.name);
                }
                return b.rarity - a.rarity;
              })
              .map((item) => (
                <Link
                  key={item.name}
                  className="card-link"
                  to={`/weapons/${encodeURIComponent(
                    item.name.toLowerCase().replace(/\s/g, "-")
                  )}`}
                >
                  <div
                    key={item.name}
                    className="weapon-cards"
                    onClick={() => setSelectedWeapon(item.id)}
                    style={{
                      ...(rarityBG[item.rarity] || {}),
                    }}
                  >
                    <div className="weapon-card-top">
                      <img src={item.img} alt={`${item.name} Icon`} />
                    </div>
                    <div className="weapon-card-bottom">
                      <div className="weapon-name">
                        <h3 className="weapon-name-text">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
          ) : (
            <h2 className="No-Match">No Match Found</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default WeaponCards;
