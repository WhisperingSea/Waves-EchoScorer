import "./SkillCalc.css";
import { useParams } from "react-router-dom";
import { useDataContext } from "../../contexts/CharacterDataContext";
import { useEffect } from "react";
import { useForte } from "../../contexts/CalcForteContext";
import { OneValueCalc } from "../../hooks/DamageCalcHooks/OneValueCalc";
import { TwoValueCalc } from "../../hooks/DamageCalcHooks/TwoValueCalc";
import { ThreeValueCalc } from "../../hooks/DamageCalcHooks/ThreeValueCalc";
import { FourValueCalc } from "../../hooks/DamageCalcHooks/FourValueCalc";
import { FiveValueCalc } from "../../hooks/DamageCalcHooks/FiveValueCalc";
import {
  BasicAttackBonus,
  HeavyAttackBonus,
  RLiberationBonus,
  RSkillBonus,
} from "../../hooks/CalculateSkillBonus";
import { useEnemyStats } from "../../contexts/CalcEnemyStatsContext";

interface CalcDamage {
  index: number;
}

const CalcDamageComp: React.FC<CalcDamage> = ({ index }) => {
  const { charaName } = useParams<{ charaName: string }>();
  const { characters, selectedCharacterId, setSelectedCharacterId } =
    useDataContext();
  const { setEnemyDefIgnore } = useEnemyStats();
  const { skillLevels } = useForte();
  const BasicAttack = BasicAttackBonus();
  const HeavyAttack = HeavyAttackBonus();
  const ResonanceSkill = RSkillBonus();
  const ResonanceLiberation = RLiberationBonus();

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

  const skill = chara?.skills.find((id) => id.skillId === index);

  //Individual Chara Stats
  useEffect(() => {
    if (chara?.charaId === 1204 && (index === 3 || index === 6)) {
      setEnemyDefIgnore(
        skillLevels.InherantSkill2.Value2
          ? skillLevels.InherantSkill2.Value2 / 100
          : 0
      );
    }
  }, [chara, index, setEnemyDefIgnore, skillLevels]);

  //Filtered Multis

  const excludeSubstrings = [
    "Cooldown",
    "Energy Regen",
    "Stamina Cost",
    "Con. Regen",
    "Concerto Regen",
    "Cost",
    "Consumption",
    "Duration",
    "Con. Damage Regen",
  ];

  const filteredMultipliers = skill?.multipliers.filter(
    (item) =>
      !excludeSubstrings.some((substring) =>
        item.attributeName.toLowerCase().includes(substring.toLowerCase())
      )
  );

  //Skill Multi Extraction

  const formattedSkills = filteredMultipliers?.map((item) => {
    const multi = item.skillDetailNum
      ? item.skillDetailNum[0].values[
          index === 1
            ? skillLevels.BasicAttack - 1
            : index === 2
            ? skillLevels.ResonanceSkill - 1
            : index === 3
            ? skillLevels.ResonanceLiberation - 1
            : index === 6
            ? skillLevels.ForteCircuit - 1
            : index === 4
            ? skillLevels.IntroSkill - 1
            : 1
        ]
      : "";

    // Split by '+' and '*'
    const splitMulti = multi.split(/\+|\*/);

    // Map through the array and replace '%' with '/100'
    const converted = splitMulti.map((part) =>
      part.includes("%")
        ? (parseFloat(part.replace("%", "").trim()) / 100).toString()
        : part.trim()
    );

    let Damage1 = 0;
    let Damage2 = 0;
    //@ts-ignore
    let Format = "";
    let CritFormat = "";
    let AdditionalSkillDamage = 1;
    let AdditionalSkillDamage2 = 1;
    let AdditionalBonusDamage = 0;
    let AdditionalBonusDamage2 = 0;
    let BasicBonus = 0;
    let HeavyBonus = 0;
    let SkillBonus = 0;
    let LiberationBonus = 0;

    // Calculate Damage based on number of values in converted array
    switch (converted.length) {
      case 1:
        const result1 = OneValueCalc(converted[0]);
        Damage1 = result1.Damage1;
        Damage2 = result1.Damage2;
        Format = result1.Format;
        CritFormat = result1.CritFormat;
        break;
      case 2:
        const result2 = TwoValueCalc(converted[0], converted[1]);
        Damage1 = result2.Damage1;
        Damage2 = result2.Damage2;
        Format = result2.Format;
        CritFormat = result2.CritFormat;
        break;
      case 3:
        const result3 = ThreeValueCalc(converted);
        Damage1 = result3.Damage1;
        Damage2 = result3.Damage2;
        Format = result3.Format;
        CritFormat = result3.CritFormat;
        break;
      case 4:
        const result4 = FourValueCalc(converted);
        Damage1 = result4.Damage1;
        Damage2 = result4.Damage2;
        Format = result4.Format;
        CritFormat = result4.CritFormat;
        break;
      case 5:
        const result5 = FiveValueCalc(converted);
        Damage1 = result5.Damage1;
        Damage2 = result5.Damage2;
        Format = result5.Format;
        CritFormat = result5.CritFormat;
        break;
      default:
        console.log("Unexpected number of values in converted array");
    }

    // Normalize and simplify String
    const simplifiedString = (str: string) =>
      str.toLowerCase().replace(/\s+/g, " ").trim();

    const attributeNameSimplified = simplifiedString(item.attributeName);
    const buffSimplified = simplifiedString(skillLevels.InherantSkill1.Buff);
    const buffSimplified2 = simplifiedString(skillLevels.InherantSkill2.Buff);

    const isMatch = attributeNameSimplified.includes(buffSimplified);
    const isMatch2 = attributeNameSimplified.includes(buffSimplified2);

    if (attributeNameSimplified.includes(buffSimplified)) {
      AdditionalSkillDamage = skillLevels.InherantSkill1.Value;
    } else {
      AdditionalSkillDamage = 1;
    }

    if (attributeNameSimplified.includes(buffSimplified2)) {
      AdditionalSkillDamage2 = skillLevels.InherantSkill2.Value;
    } else {
      AdditionalSkillDamage2 = 1;
    }

    if (
      (chara?.charaId === 1102 && index === 2) ||
      (chara?.charaId === 1103 && index === 4) ||
      (chara?.charaId === 1201 && index === 3) ||
      (chara?.charaId === 1301 && index === 3) ||
      (chara?.charaId === 1401 && index === 3)
    ) {
      AdditionalBonusDamage = skillLevels.InherantSkill1.Value;
    }

    if (chara?.charaId === 1502 && index === 4) {
      AdditionalBonusDamage2 = skillLevels.InherantSkill2.Value;
    }

    if (index === 1 && !item.attributeName.includes("Heavy")) {
      BasicBonus = BasicAttack / 100;
    }

    if (item.attributeName.includes("Heavy")) {
      HeavyBonus = HeavyAttack / 100;
    }

    if (index === 2) {
      SkillBonus = ResonanceSkill / 100;
    }

    if (index === 3) {
      LiberationBonus = ResonanceLiberation / 100;
    }

    //Individual Character Bonuses

    if (
      chara?.charaId === 1204 &&
      index === 2 &&
      (item.attributeName.includes("Conquest") ||
        item.attributeName.includes("Charge"))
    ) {
      AdditionalBonusDamage = skillLevels.InherantSkill1.Value;
    }

    if (chara?.charaId === 1204 && (index === 3 || index === 6)) {
      AdditionalBonusDamage2 = skillLevels.InherantSkill2.Value;
    }

    return (
      <div className="calcSkill-item-1" key={item.index}>
        <h3 className="calcSkill-item-1-h3">{item.attributeName} :</h3>
        <div className="calcSkill-item-2">
          <h3>
            {Math.round(
              Damage1 *
                (1 +
                  (isMatch ? AdditionalSkillDamage / 100 : 0) +
                  (isMatch2 ? AdditionalSkillDamage2 / 100 : 0) +
                  (AdditionalBonusDamage ? AdditionalBonusDamage / 100 : 0) +
                  (AdditionalBonusDamage2 ? AdditionalBonusDamage2 / 100 : 0) +
                  BasicBonus +
                  HeavyBonus +
                  SkillBonus +
                  LiberationBonus)
            )}
          </h3>
          <h3>{Format}</h3>
        </div>
        <div className="calcSkill-item-2 Crit-item">
          <h3>
            {Math.round(
              Damage2 *
                (1 +
                  (isMatch ? AdditionalSkillDamage / 100 : 0) +
                  (isMatch2 ? AdditionalSkillDamage2 / 100 : 0) +
                  (AdditionalBonusDamage ? AdditionalBonusDamage / 100 : 0) +
                  (AdditionalBonusDamage2 ? AdditionalBonusDamage2 / 100 : 0) +
                  BasicBonus +
                  HeavyBonus +
                  SkillBonus +
                  LiberationBonus)
            )}
          </h3>
          <h3>{CritFormat}</h3>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="CalcSkill-Container">
        <div className="calcSkill-box">{formattedSkills}</div>
      </div>
    </>
  );
};

export default CalcDamageComp;
