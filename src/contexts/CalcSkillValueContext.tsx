import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import {
  GlacioDamageCalc,
  FusionDamageCalc,
  ElectroDamageCalc,
  AeroDamageCalc,
  SpectroDamageCalc,
  HavocDamageCalc,
} from "../hooks/CalculateElementBonusStats";
import { useDataContext } from "./CharacterDataContext";
import { useParams } from "react-router-dom";
import { AttackCalc } from "../hooks/CalculateStats";
import { EnemyResistaneCalc } from "../hooks/CalculateEnemyStats";
import { CritcalDamageCalc } from "../hooks/CalculateCritStats";

interface CalcSkillType {
  Attack: number;
  SkillScalingBonus: number;
  BonusSkillDamage: number;
  ElementDamageBonus: number;
  TotalDeepen: number;
  EnemyRes: number;
  CriticalDamage: number;
}

const CalcSkillContext = createContext<CalcSkillType | undefined>(undefined);

export const useCalcSkillValue = () => {
  const context = useContext(CalcSkillContext);
  if (!context) {
    throw new Error(
      "useCalcSkillValue must be used within an CalcSkillProvider"
    );
  }
  return context;
};

interface CalcSkillProviderProps {
  children: ReactNode;
}

export const CalcSkillProvider: React.FC<CalcSkillProviderProps> = ({
  children,
}) => {
  const { characters, selectedCharacterId, setSelectedCharacterId } =
    useDataContext();
  const { charaName } = useParams<{ charaName: string }>();
  const [Attack, setAttack] = useState(0);
  const [ElementDamageBonus, setElementDamageBonus] = useState(0);
  const [SkillScalingBonus, setSkillScalingBonus] = useState(0);
  const [BonusSkillDamage, setBonusSkillDamage] = useState(0);
  const [TotalDeepen, setTotalDeepen] = useState(0);
  const [EnemyRes, setEnemyRes] = useState(0);
  const [CriticalDamage, setCriticalDamage] = useState(150);

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

  // Custom Hooks Call
  const atk = AttackCalc();
  const glacioBonus = GlacioDamageCalc();
  const fusionBonus = FusionDamageCalc();
  const electroBonus = ElectroDamageCalc();
  const aeroBonus = AeroDamageCalc();
  const spectroBonus = SpectroDamageCalc();
  const havocBonus = HavocDamageCalc();
  const enemyRes = EnemyResistaneCalc();
  const critDmg = CritcalDamageCalc();

  // Setting States

  useEffect(() => {
    setAttack(atk);
  }, [atk]);

  useEffect(() => {
    let bonus = 0;

    if (chara?.element === "Glacio") {
      bonus = glacioBonus;
    } else if (chara?.element === "Fusion") {
      bonus = fusionBonus;
    } else if (chara?.element === "Electro") {
      bonus = electroBonus;
    } else if (chara?.element === "Aero") {
      bonus = aeroBonus;
    } else if (chara?.element === "Spectro") {
      bonus = spectroBonus;
    } else if (chara?.element === "Havoc") {
      bonus = havocBonus;
    }

    setElementDamageBonus(bonus);
  }, [
    chara,
    glacioBonus,
    fusionBonus,
    electroBonus,
    aeroBonus,
    spectroBonus,
    havocBonus,
  ]);

  useEffect(() => {
    setBonusSkillDamage(0);
  }, []);

  useEffect(() => {
    setSkillScalingBonus(0);
  }, []);

  useEffect(() => {
    setTotalDeepen(0);
  }, []);

  useEffect(() => {
    setEnemyRes(enemyRes);
  }, [enemyRes]);

  useEffect(() => {
    setCriticalDamage(critDmg);
  }, [critDmg]);

  return (
    <CalcSkillContext.Provider
      value={{
        Attack,
        SkillScalingBonus,
        BonusSkillDamage,
        ElementDamageBonus,
        TotalDeepen,
        EnemyRes,
        CriticalDamage,
      }}
    >
      {children}
    </CalcSkillContext.Provider>
  );
};
