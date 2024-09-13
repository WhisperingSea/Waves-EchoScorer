import React, { useEffect, useState } from "react";
import { WWCharacterLevelsJSON } from "../../data/WWLevels.ts";
import { useDataContext } from "../../contexts/CharacterDataContext";

interface StatProps {
  Level: string;
  isChecked: boolean;
}

const WWStats: React.FC<StatProps> = ({ Level, isChecked }) => {
  const { characters, selectedCharacterId } = useDataContext();
  const [bonusHp, setBonusHp] = useState(1);
  const [bonusAtk, setBonusATk] = useState(1);
  const [bonusDef, setBonusDef] = useState(1);
  const [bonusCrit, setBonusCrit] = useState(0);
  const [bonusCritDmg, setBonusCritDmg] = useState(0);
  const [bonusHeal, setBonusHeal] = useState(0);
  const [bonusEle, setBonusEle] = useState(0);

  const chara = Object.values(characters).find(
    (id) => id.charaId === selectedCharacterId
  );

  const levels = WWCharacterLevelsJSON.find(
    (l) => l.level.toString() === Level
  );

  useEffect(() => {
    if (isChecked && chara?.stats.bonus_hp === 1.12) {
      setBonusHp(1.12);
    } else {
      setBonusHp(1);
    }

    if (isChecked && chara?.stats.bonus_atk === 1.12) {
      setBonusATk(1.12);
    } else {
      setBonusATk(1);
    }

    if (isChecked && chara?.stats.bonus_def === 1.152) {
      setBonusDef(1.152);
    } else {
      setBonusDef(1);
    }

    if (isChecked === true) {
      if (
        chara?.stats.bonus_crit !== undefined &&
        chara?.stats.bonus_crit !== 0
      ) {
        setBonusCrit(chara.stats.bonus_crit);
      }
    } else {
      setBonusCrit(0);
    }

    if (isChecked === true) {
      if (
        chara?.stats.bonus_critdmg !== undefined &&
        chara?.stats.bonus_critdmg !== 0
      ) {
        setBonusCritDmg(chara.stats.bonus_critdmg);
      }
    } else {
      setBonusCritDmg(0);
    }

    if (isChecked === true) {
      if (
        chara?.stats.bonus_heal !== undefined &&
        chara?.stats.bonus_heal !== 0
      ) {
        setBonusHeal(chara.stats.bonus_heal);
      }
    } else {
      setBonusHeal(0);
    }

    if (isChecked && chara?.stats.bonus_ele === 1.12) {
      setBonusEle(12);
    } else {
      setBonusEle(0);
    }
  }, [
    isChecked,
    chara?.stats.bonus_atk,
    chara?.stats.bonus_hp,
    chara?.stats.bonus_def,
    chara?.stats.bonus_crit,
    chara?.stats.bonus_critdmg,
    chara?.stats.bonus_heal,
    chara?.stats.bonus_ele,
  ]);

  return (
    <>
      <div className="stats-grid">
        <h2>
          HP:{" "}
          {chara && levels
            ? Math.round(
                chara.stats.base_hp * (levels.hp_multi / 10000) * bonusHp
              )
            : "N/A"}
        </h2>
        <h2>
          ATK:{" "}
          {chara && levels
            ? Math.round(
                chara.stats.base_atk * (levels.atk_multi / 10000) * bonusAtk
              )
            : "N/A"}
        </h2>
        <h2>
          DEF:{" "}
          {chara && levels
            ? Math.round(
                chara.stats.base_def * (levels.def_multi / 10000) * bonusDef
              )
            : "N/A"}
        </h2>
        <h2>Max Energy: {chara?.stats.max_energy}</h2>
        <h2>
          Crit. Rate: {chara ? `${chara.stats.base_crit + bonusCrit}%` : "N/A"}
        </h2>
        <h2>
          Crit. Damage:{" "}
          {chara ? `${chara.stats.base_critdmg + bonusCritDmg}%` : "N/A"}
        </h2>
        <h2>
          Healing Bonus:{" "}
          {chara ? `${chara.stats.base_healing + bonusHeal}%` : "N/A"}
        </h2>
        <h2>
          {chara?.element} Bonus: {chara ? `${bonusEle}%` : "N/A"}
        </h2>
      </div>
    </>
  );
};

export default WWStats;
