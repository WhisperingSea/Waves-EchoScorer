import "./WeaponModal.css";
import { useWeaponContext } from "../../contexts/WeaponDataContext";
import { useDataContext } from "../../contexts/CharacterDataContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { WWCharacterLevelsJSON } from "../../data/WWLevels";
import { useWeapons } from "../../contexts/CalcWeaponContext";

type RarityType = {
  [key: number]: {
    background: string;
  };
};

interface WeaponFeaturesModalProps {
  onClose: () => void;
  DisplayAsSelect?: boolean;
}

const WeaponModal: React.FC<WeaponFeaturesModalProps> = ({
  onClose,
  DisplayAsSelect,
}) => {
  const { charaName } = useParams<{ charaName: string }>();
  const { characters, selectedCharacterId, setSelectedCharacterId } =
    useDataContext();
  const { weapons, setSelectedWeapon, selectedWeapon } = useWeaponContext();

  const { setWeaponStats, weaponStats } = useWeapons();

  const chara = Object.values(characters).find(
    (id) => id.charaId === selectedCharacterId
  );

  const cName = Object.values(characters).find(
    (character) => character.name.toLowerCase() === charaName?.toLowerCase()
  );

  useEffect(() => {
    if (cName) {
      setSelectedCharacterId(cName.charaId);
    }
  }, [cName, setSelectedCharacterId]);

  const weapon = Object.values(weapons).filter(
    (weap) => weap.weaponType === chara?.weapon
  );

  const weaponSelect = Object.values(weapons).find(
    (weap) => weap.id === selectedWeapon
  );

  const closeModal = () => {
    onClose();
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const levels = WWCharacterLevelsJSON.find(
    (l) => l.level === weaponStats.level
  );

  const weaponStat1 = Math.floor(
    (typeof weaponSelect?.statPrimaryValue === "number"
      ? weaponSelect.statPrimaryValue
      : 0) *
      ((typeof levels?.weapon_multi === "number" ? levels.weapon_multi : 0) /
        10000)
  );

  const weaponStat2 = (
    (typeof weaponSelect?.statSecondaryValue === "number"
      ? weaponSelect.statSecondaryValue
      : 0) *
    ((typeof levels?.weapon_multi2 === "number" ? levels.weapon_multi2 : 0) /
      10000)
  ).toFixed(2);

  useEffect(() => {
    setWeaponStats((prevWeaponStat) => {
      const updatedStats = {
        ...prevWeaponStat,
        id: weaponSelect?.id || 0,
        name: weaponSelect?.name || "",
        weaponType: weaponSelect?.weaponType || "",
        primaryStat: weaponSelect?.statPrimary || "",
        primaryStatValue: weaponStat1,
        secondaryStat: weaponSelect?.statSecondary || "",
        secondaryStatValue: parseFloat(weaponStat2),
      };
      return updatedStats;
    });
  }, [weaponSelect, levels, setWeaponStats]);

  const handleLevelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeaponStats((prev) => ({
      ...prev,
      level: parseInt(e.target.value),
    }));
  };

  const handleRankInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeaponStats((prev) => ({
      ...prev,
      rank: parseInt(e.target.value),
    }));
  };

  useEffect(() => {
    if (selectedWeapon !== weaponStats.id) {
      setWeaponStats((prev) => ({
        ...prev,
        level: 90,
        rank: 1,
      }));
    }
  }, [selectedWeapon, weaponStats]);

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

  const handleWeaponId = (id: number) => {
    setSelectedWeapon(id);
    closeModal();
  };

  const handleWeaponSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWeapon(parseFloat(e.target.value));
  };

  return (
    <>
      <div className="overlay" onClick={handleOverlayClick}>
        <section className="calcWeapon-modal-container">
          {DisplayAsSelect ? (
            <div className="calcWeapon-modal-box-2">
              <div className="modal-box-2-item-1">
                <h3>Weapon</h3>
                <select
                  className="weapon-Modal-Select"
                  id="Weapon-Select"
                  value={selectedWeapon ? selectedWeapon : ""}
                  onChange={handleWeaponSelect}
                >
                  <option value="" disabled>
                    Select Weapon
                  </option>
                  {weapon.map((weap, index) => (
                    <option key={index} value={weap.id}>
                      {weap.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>|</div>
              <div className="modal-box-2-item-2">
                <h3>Level</h3>
                <input
                  className="modal-weapon-input"
                  id="weapon-level"
                  type="number"
                  min={1}
                  max={90}
                  value={weaponStats.level}
                  onChange={handleLevelInput}
                />
              </div>
              <div>|</div>
              <div className="modal-box-2-item-3">
                <h3>Rank</h3>
                <input
                  className="modal-weapon-input"
                  id="weapon-rank"
                  type="number"
                  min={1}
                  max={5}
                  value={weaponStats.rank}
                  onChange={handleRankInput}
                />
              </div>
            </div>
          ) : (
            <div className="calcWeapon-modal-box">
              {weapon &&
                weapon.map((item) => (
                  <>
                    <div
                      key={item.name}
                      className="weapon-modal-cards"
                      onClick={() => handleWeaponId(item.id)}
                      style={{
                        ...(rarityBG[item.rarity] || {}),
                      }}
                    >
                      <div className="weapon-modal-card-top">
                        <img src={item.img} alt={`${item.name} Icon`} />
                      </div>
                      <div className="weapon-modal-card-bottom">
                        <div className="weapon-name">
                          <h3 className="">{item.name}</h3>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default WeaponModal;
