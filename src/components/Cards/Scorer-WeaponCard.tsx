import { useEffect, useState } from "react";
import { useWeaponContext } from "../../contexts/WeaponDataContext";
import "./Scorer-WeaponCard.css";
import WeaponModal from "../Modals/WeaponModal";
import { useWeapons } from "../../contexts/CalcWeaponContext";
import { Icons } from "../../data/Icons";

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

  useEffect(() => {
    if (weapon?.rarity === 1) {
      setWeaponRarityIcon(
        "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_stars/Icon_1_Star.webp"
      );
    } else if (weapon?.rarity === 2) {
      setWeaponRarityIcon(
        "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_stars/Icon_2_Stars.webp"
      );
    } else if (weapon?.rarity === 3) {
      setWeaponRarityIcon(
        "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_stars/Icon_3_Stars.webp"
      );
    } else if (weapon?.rarity === 4) {
      setWeaponRarityIcon(
        "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_stars/Icon_4_Stars.webp"
      );
    } else if (weapon?.rarity === 5) {
      setWeaponRarityIcon(
        "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_stars/Icon_5_Stars.webp"
      );
    } else {
      setWeaponRarityIcon("");
    }
  }, [weapon, setWeaponRarityIcon]);

  return (
    <>
      <div className="scorer-weaponCard-container">
        <div className="scorer-weaponCard-btn">
          <img
            className={`scorer-weaponCard-img ${weapon ? "white-border" : ""}`}
            src={
              weapon
                ? weapon?.img
                : "https://whisperingsea.github.io/wuthering-waves-assets/images/icons_ui2/weapons.png"
            }
            alt={weapon?.name}
            onClick={openWeaponModal}
          />
          {weapon && (
            <img
              className="scorer-weaponCard-rarity"
              src={WeaponRarityIcon}
              alt={`${weapon.rarity} Star Image`}
            />
          )}
        </div>
        {weapon ? (
          <div className="scorer-weaponCard-info">
            <div className="weapon-card-flexbox">
              {weapon && (
                <h3 className="scorer-weaponCard-rank">{weaponStats.rank}</h3>
              )}
              <h3 className="scorer-weaponCard-text-name">
                {weaponStats.name}
              </h3>
            </div>
            <h3 className="scorer-weaponCard-text">
              Lv. {weaponStats.level}/90
            </h3>
            <div className="scorer-weaponCard-flex-2">
              <div className="weapon-card-flexbox">
                <img
                  className="attrib-icon"
                  src={
                    Icons.find((I) => I.name === weaponStats.primaryStat)?.icon
                  }
                />
                <h3 className="scorer-weaponCard-text">
                  {weaponStats.primaryStat} {weaponStats.primaryStatValue}
                </h3>
              </div>
              <div>||</div>
              <div className="weapon-card-flexbox">
                <img
                  className="attrib-icon"
                  src={
                    Icons.find((I) =>
                      I.name
                        .toLowerCase()
                        .replace(".", "")
                        .includes(
                          weaponStats.secondaryStat
                            .toLowerCase()
                            .replace(".", "")
                        )
                    )?.icon
                  }
                />
                <h3 className="scorer-weaponCard-text">
                  {weaponStats.secondaryStat} {weaponStats.secondaryStatValue}%
                </h3>
              </div>
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
