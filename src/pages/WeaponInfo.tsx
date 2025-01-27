import "../styles/WeaponInfo.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Common/Footer.tsx";
import { useWeaponContext } from "../contexts/WeaponDataContext.tsx";
import { WWCharacterLevelsJSON } from "../data/WWLevels.ts";

type RarityType = {
  [key: number]: {
    color: string;
  };
};

type RarityTypeB = {
  [key: number]: {
    padding: string;
    border: string;
  };
};

const WeaponInfo: React.FC = () => {
  const { weaponName } = useParams<{ weaponName: string }>();
  const { selectedWeapon, weapons, setSelectedWeapon } = useWeaponContext();
  const [level, setLevel] = useState<number>(1);
  const [rank, setRank] = useState<number>(1);

  const weapon = Object.values(weapons).find(
    (weap) => weap.id === selectedWeapon
  );

  const wName = Object.values(weapons).find(
    (weap) =>
      weap.name.toLowerCase() === weaponName?.toLowerCase().replace(/-/g, " ")
  );

  const levels = WWCharacterLevelsJSON.find((l) => l.level === level);

  useEffect(() => {
    if (wName) {
      setSelectedWeapon(wName.id);
    }
  }, [wName, setSelectedWeapon]);

  const handleLevelInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLevel(parseInt(event.target.value));
  };

  const handleRankInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRank(parseInt(event.target.value));
  };

  const rarityC: RarityType = {
    1: {
      color: "rgba(138,138,138,1)",
    },
    2: {
      color: "rgba(48,231,78,1)",
    },
    3: {
      color: "rgba(33,190,222,1)",
    },
    4: {
      color: "rgba(201,48,231,1)",
    },
    5: {
      color: "rgba(231,198,48,1)",
    },
  };

  const rarityB: RarityTypeB = {
    1: {
      padding: "5px",
      border: "2px solid rgba(138,138,138,1)",
    },
    2: {
      padding: "5px",
      border: "2px solid rgba(48,231,78,1)",
    },
    3: {
      padding: "5px",
      border: "2px solid rgba(33,190,222,1)",
    },
    4: {
      padding: "5px",
      border: "2px solid rgba(201,48,231,1)",
    },
    5: {
      padding: "5px",
      border: "2px solid rgba(231,198,48,1)",
    },
  };

  const replacePlaceholders = (effect: string, rank: number, weapon: any) => {
    return effect.replace(/{(\d+)}/g, (match, number) => {
      const arrayIndex = parseInt(number);
      const arrays = [
        weapon?.array0,
        weapon?.array1,
        weapon?.array2,
        weapon?.array3,
        weapon?.array4,
        weapon?.array5,
      ];

      if (arrayIndex >= 0 && arrayIndex < arrays.length && arrays[arrayIndex]) {
        return `<strong>${arrays[arrayIndex][rank] ?? match}</strong>`;
      }

      return match;
    }) as string | TrustedHTML;
  };

  const formattedDesc = replacePlaceholders(
    weapon?.effect ?? "",
    rank - 1,
    weapon
  );

  return (
    <>
      <div className="weapon-info-page-container">
        <div className="weapon-info-page-bg"></div>
        <main>
          <section className="weapon-info-page-section">
            <div className="weapon-info-flex">
              <div className="weapon-info-grid-item-1">
                <div className="weapon-info-img-box">
                  <img
                    src={weapon?.img}
                    alt={`${weapon?.name} icon`}
                    style={{
                      ...(rarityB[weapon?.rarity ?? 0] || {}),
                    }}
                  />
                </div>
              </div>
              <div
                className="weapon-info-grid-item-2"
                style={{
                  ...(rarityC[weapon?.rarity ?? 0] || {}),
                }}
              >
                <h2>{weapon?.name}</h2>
              </div>
              <div className="weapon-info-flex-item-3">
                <div className="weapon-info-flex-2">
                  <h3>Level:</h3>
                  <input
                    className="weapon-input"
                    id="weapon-level"
                    type="range"
                    min={1}
                    max={90}
                    defaultValue={1}
                    onChange={handleLevelInput}
                  />
                  <h3>{level}</h3>
                </div>
                <div className="divider">|</div>
                <div className="weapon-info-flex-2">
                  <h3>Rank</h3>
                  <input
                    className="weapon-input"
                    id="weapon-reine"
                    type="range"
                    min={1}
                    max={5}
                    defaultValue={1}
                    onChange={handleRankInput}
                  />
                  <h3>{rank}</h3>
                </div>
              </div>
              <div className="weapon-info-flex-item-4">
                <div className="weapon-info-flex-2">
                  <h3>{weapon?.statPrimary}:</h3>
                  <h3>
                    {weapon && levels
                      ? Math.ceil(
                          weapon?.statPrimaryValue *
                            (levels?.weapon_multi / 10000)
                        )
                      : "N/A"}
                  </h3>
                </div>
                <div className="divider">|</div>
                <div className="weapon-info-flex-2">
                  <h3>{weapon?.statSecondary}:</h3>
                  <h3>
                    {weapon && levels
                      ? (
                          weapon.statSecondaryValue *
                          (levels.weapon_multi2 / 10000)
                        ).toFixed(2)
                      : "N/A"}
                    %
                  </h3>
                </div>
              </div>
              <div className="weapon-info-grid-item-5">
                <p dangerouslySetInnerHTML={{ __html: formattedDesc }}></p>
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

export default WeaponInfo;
