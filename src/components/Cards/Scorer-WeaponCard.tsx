import { useEffect, useState } from "react";
import { useWeaponContext } from "../../contexts/WeaponDataContext";
import "./Scorer-WeaponCard.css";
import WeaponModal from "../Modals/WeaponModal";
import { useWeapons } from "../../contexts/CalcWeaponContext";

type RarityType = {
  [key: number]: {
    background: string;
  };
};

const ScorerWeaponCard: React.FC = () => {
  const { weapons, selectedWeapon } = useWeaponContext();
  const [open, setOpen] = useState(false);
  const { weaponStats } = useWeapons();
  const [WeaponRarityIcon, setWeaponRarityIcon] = useState<string>("");

  const weapon = Object.values(weapons).find(
    (weap) => weap.id === selectedWeapon
  );

  const openWeaponModal = () => {
    setOpen(true);
  };

  const closeWeaponModal = () => {
    setOpen(false);
  };

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

  useEffect(() => {
    if (weapon?.rarity === 1) {
      setWeaponRarityIcon(
        "https://sohansc13.github.io/wuthering-waves-assets/images/icon_stars/Icon_1_Star.webp"
      );
    } else if (weapon?.rarity === 2) {
      setWeaponRarityIcon(
        "https://sohansc13.github.io/wuthering-waves-assets/images/icon_stars/Icon_2_Stars.webp"
      );
    } else if (weapon?.rarity === 3) {
      setWeaponRarityIcon(
        "https://sohansc13.github.io/wuthering-waves-assets/images/icon_stars/Icon_3_Stars.webp"
      );
    } else if (weapon?.rarity === 4) {
      setWeaponRarityIcon(
        "https://sohansc13.github.io/wuthering-waves-assets/images/icon_stars/Icon_4_Stars.webp"
      );
    } else if (weapon?.rarity === 5) {
      setWeaponRarityIcon(
        "https://sohansc13.github.io/wuthering-waves-assets/images/icon_stars/Icon_5_Stars.webp"
      );
    } else {
      setWeaponRarityIcon("");
    }
  }, [weapon, setWeaponRarityIcon]);

  return (
    <>
      <div className="scorer-weaponCard-container">
        <div className="scorer-weaponCard-btn">
          {weapon && (
            <h3 className="scorer-weaponCard-rank">{weaponStats.rank}</h3>
          )}
          <div
            className="border-background"
            style={{
              ...(rarityBG[weapon?.rarity || 1] || {}),
            }}
          ></div>
          <img
            className={`scorer-weaponCard-img ${weapon ? "white-border" : ""}`}
            src={
              weapon
                ? weapon?.img
                : "https://sohansc13.github.io/wuthering-waves-assets/images/icons_ui2/weapons.png"
            }
            alt={weapon?.name}
            onClick={openWeaponModal}
          />
        </div>
        {weapon ? (
          <div className="scorer-weaponCard-info">
            <div className="scorer-weaponCard-flex">
              <h3 className="scorer-weaponCard-text-name">
                {weaponStats.name}
              </h3>
              <img
                className="scorer-weaponCard-rarity"
                src={WeaponRarityIcon}
                alt={`${weapon.rarity} Star Image`}
              />
            </div>
            <h3 className="scorer-weaponCard-text">
              Level - {weaponStats.level}
            </h3>
            <h3 className="scorer-weaponCard-text"></h3>
            <div className="scorer-weaponCard-flex-2">
              <h3 className="scorer-weaponCard-text">
                {weaponStats.primaryStat} - {weaponStats.primaryStatValue}
              </h3>
              <h3 className="scorer-weaponCard-text">||</h3>
              <h3 className="scorer-weaponCard-text">
                {weaponStats.secondaryStat} - {weaponStats.secondaryStatValue}%
              </h3>
            </div>
          </div>
        ) : (
          <>
            <h3 className="scorer-weaponCard-text">No Weapon Selected</h3>
          </>
        )}
        {open && (
          <WeaponModal onClose={closeWeaponModal} DisplayAsSelect={true} />
        )}
      </div>
    </>
  );
};

export default ScorerWeaponCard;
