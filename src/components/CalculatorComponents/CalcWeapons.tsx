import { useEffect, useState } from "react";
import { useWeaponContext } from "../../contexts/WeaponDataContext";
import "./Calculator.css";
import WeaponModal from "../Modals/WeaponModal";
import { WWCharacterLevelsJSON } from "../../data/WWLevels";
import { useWeapons } from "../../contexts/CalcWeaponContext";

const CalcWeapons: React.FC = () => {
  const { weapons, selectedWeapon } = useWeaponContext();
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState<number>(1);
  const [rank, setRank] = useState<number>(1);
  const { setWeaponStats } = useWeapons();

  const weapon = Object.values(weapons).find(
    (weap) => weap.id === selectedWeapon
  );

  const levels = WWCharacterLevelsJSON.find((l) => l.level === level);

  const handleLevelInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLevel(parseInt(event.target.value));
  };

  const handleRankInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRank(parseInt(event.target.value));
  };

  const openWeaponModal = () => {
    setOpen(true);
  };

  const closeWeaponModal = () => {
    setOpen(false);
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

  const weaponStat1 = Math.floor(
    (typeof weapon?.statPrimaryValue === "number"
      ? weapon.statPrimaryValue
      : 0) *
      ((typeof levels?.weapon_multi === "number" ? levels.weapon_multi : 0) /
        10000)
  );

  const weaponStat2 = (
    (typeof weapon?.statSecondaryValue === "number"
      ? weapon.statSecondaryValue
      : 0) *
    ((typeof levels?.weapon_multi2 === "number" ? levels.weapon_multi2 : 0) /
      10000)
  ).toFixed(2);

  useEffect(() => {
    if (weapon && levels) {
      setWeaponStats((prevWeaponStat) => {
        const updatedStats = {
          ...prevWeaponStat,
          id: weapon.id,
          name: weapon.name,
          weaponType: weapon.weaponType,
          primaryStat: weapon.statPrimary,
          primaryStatValue: weaponStat1,
          secondaryStat: weapon.statSecondary,
          secondaryStatValue: parseFloat(weaponStat2),
        };
        return updatedStats;
      });
    }
  }, [weapon, levels]);

  return (
    <>
      <div className="calcWeapon-container">
        <header>{open && <WeaponModal onClose={closeWeaponModal} />}</header>
        <section className="calcWeapon-section">
          <div className="calcWeapon-box">
            <div className="calcWeapon-box-1">
              <div onClick={openWeaponModal}>
                {weapon ? (
                  <img src={weapon?.img} alt={`${weapon?.name} Icon`} />
                ) : (
                  <img src="https://cdn.wanderer.moe/wuthering-waves/emotes/T_ChatEmo_D_02.png" />
                )}
              </div>
            </div>
            <div className="calcWeapon-box-2">
              {weapon ? <h3>{weapon?.name}</h3> : <h3>Select Weapon</h3>}
            </div>
            {weapon ? (
              <div className="calcWeapon-box-3">
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
              </div>
            ) : (
              ""
            )}
            {weapon ? (
              <div className="calcWeapon-box-4">
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
            ) : (
              ""
            )}
            {weapon ? (
              <div className="calcWeapon-box-5">
                <div className="calcWeapon-info-flex">
                  <div className="calcWeapon-info-flex-2">
                    <h3>{weapon?.statPrimary}:</h3>
                    <h3>{weaponStat1}</h3>
                  </div>
                  <div className="divider">|</div>
                  <div className="calcWeapon-info-flex-2">
                    <h3>{weapon?.statSecondary}:</h3>
                    <h3>{weaponStat2}%</h3>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {weapon ? (
              <div className="calcWeapon-box-6">
                <h3 dangerouslySetInnerHTML={{ __html: formattedDesc }}></h3>
              </div>
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default CalcWeapons;
