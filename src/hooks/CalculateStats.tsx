import { useParams } from "react-router-dom";
import { useDataContext } from "../contexts/CharacterDataContext";
import { useWeapons } from "../contexts/CalcWeaponContext";
import { useEchoes } from "../contexts/CalcEchoContext";
import { useForte } from "../contexts/CalcForteContext";
import { useEffect, useState } from "react";
import { WWCharacterLevelsJSON } from "../data/WWLevels";

export function AttackCalc() {
  const { characters, selectedCharacterId, level } = useDataContext();
  const { weaponStats } = useWeapons();
  const { echoStats, sonataGroup, sonataGroup2, sonataEffectStacks } =
    useEchoes();
  const { forteStats, skillLevels } = useForte();
  const [Sonata2PieceBonus, setSonata2PieceBonus] = useState<number>(0);
  const [Sonata5PieceBonus, setSonata5PieceBonus] = useState<number>(0);
  const [echoPassive, setEchoPassive] = useState(0);
  const [AdditionalPercent, setAdditionalPercent] = useState<number>(0);
  const [AdditionalPercent2, setAdditionalPercent2] = useState<number>(0);

  const charaStats = Object.values(characters).find(
    (i) => i.charaId === selectedCharacterId
  );

  const levels = WWCharacterLevelsJSON.find((i) => i.level === level);

  useEffect(() => {
    // Initialize bonuses
    let newSonata5PieceBonus = 0;
    let newSonata2PieceBonus = 0;

    // Calculate the 5-piece bonus for "Rejuvenating Glow"
    if (
      sonataGroup === "Rejuvenating Glow" &&
      sonataGroup2 === "Rejuvenating Glow"
    ) {
      newSonata5PieceBonus = 0.15 * sonataEffectStacks;
    }

    // Calculate the 2-piece bonus for "Lingering Tunes"
    if (
      sonataGroup === "Lingering Tunes" ||
      sonataGroup2 === "Lingering Tunes"
    ) {
      newSonata2PieceBonus = 0.1;
    }

    // Calculate the 5-piece bonus for "Lingering Tunes"
    if (
      sonataGroup === "Lingering Tunes" &&
      sonataGroup2 === "Lingering Tunes"
    ) {
      newSonata5PieceBonus = 0.05 * sonataEffectStacks;
    }

    setSonata5PieceBonus(newSonata5PieceBonus);
    setSonata2PieceBonus(newSonata2PieceBonus);
  }, [sonataGroup, sonataGroup2, sonataEffectStacks]);

  const echoStatsArray = Object.values(echoStats);
  const baseAtk = charaStats?.stats.base_atk as number;
  const atkMulti = levels?.atk_multi as number;

  const calculatedAtk = Math.floor(baseAtk * (atkMulti / 10000) || 0);

  useEffect(() => {
    if (echoStatsArray.some((i) => i.cost === 3)) {
      setEchoPassive(100);
    } else if (echoStatsArray.some((i) => i.cost === 4)) {
      setEchoPassive(150);
    } else {
      setEchoPassive(0);
    }
  });

  useEffect(() => {
    if (skillLevels.InherantSkill1.Buff === "ATK") {
      setAdditionalPercent(skillLevels.InherantSkill1.Value / 100);
    } else {
      setAdditionalPercent(0);
    }

    if (skillLevels.InherantSkill2.Buff === "ATK") {
      setAdditionalPercent2(skillLevels.InherantSkill2.Value / 100);
    } else if (skillLevels.InherantSkill2.Buff2 === "ATK") {
      setAdditionalPercent2(
        (skillLevels.InherantSkill2.Value2 as number) / 100
      );
    } else {
      setAdditionalPercent2(0);
    }
  });

  const weaponAtk = weaponStats.primaryStatValue || 0;
  const weaponAtkPercent =
    weaponStats.secondaryStat === "ATK"
      ? Math.floor(weaponStats.secondaryStatValue * 10) / 10 / 100 || 0
      : 0;
  const forteAtk =
    forteStats.stat1 === "ATK"
      ? (forteStats.stat1Value1 / 100 || 0) +
        (forteStats.stat1Value2 / 100 || 0) +
        (forteStats.stat1Value3 / 100 || 0) +
        (forteStats.stat1Value4 / 100 || 0)
      : 0;
  const echoMainAtk = echoStatsArray.reduce((total, echo) => {
    return echo.mainStat === "ATK" ? total + (echo.mainStatValue || 0) : total;
  }, 0);
  const echoMainAtkPercent = echoStatsArray.reduce((total, echo) => {
    return echo.mainStat === "ATK%"
      ? total + (echo.mainStatValue / 100 || 0)
      : total;
  }, 0);
  const echoATKSubStats = echoStatsArray.reduce((total, echo) => {
    const subStats = [
      echo.selectedSubStat1,
      echo.selectedSubStat2,
      echo.selectedSubStat3,
      echo.selectedSubStat4,
      echo.selectedSubStat5,
    ];

    const subStatTotal = subStats.reduce((subTotal, subStat) => {
      return subStat.stat === "ATK"
        ? subTotal + (subStat.value || 0)
        : subTotal;
    }, 0);

    return total + subStatTotal;
  }, 0);
  const echoATKPercentSubStats = echoStatsArray.reduce((total, echo) => {
    const subStats = [
      echo.selectedSubStat1,
      echo.selectedSubStat2,
      echo.selectedSubStat3,
      echo.selectedSubStat4,
      echo.selectedSubStat5,
    ];

    const subStatTotal = subStats.reduce((subTotal, subStat) => {
      return subStat.stat === "ATK%"
        ? subTotal + (subStat.value || 0)
        : subTotal;
    }, 0);

    return total + subStatTotal / 100;
  }, 0);
  const TotalAtk = calculatedAtk + weaponAtk;

  const TotalAtkpercent =
    weaponAtkPercent +
    echoMainAtkPercent +
    echoATKPercentSubStats +
    forteAtk +
    Sonata2PieceBonus +
    Sonata5PieceBonus +
    AdditionalPercent +
    AdditionalPercent2;

  const finalValue =
    TotalAtk * (1 + TotalAtkpercent) +
    echoMainAtk +
    echoPassive +
    echoATKSubStats;

  return finalValue;
}

//HP Stat Calc
export function HealthCalc() {
  const { charaName } = useParams<{ charaName: string }>();
  const { characters, selectedCharacterId, setSelectedCharacterId, level } =
    useDataContext();
  const { weaponStats } = useWeapons();
  const { echoStats } = useEchoes();
  const { forteStats } = useForte();
  const [echoPassive, setEchoPassive] = useState(0);

  const charaStats = Object.values(characters).find(
    (i) => i.charaId === selectedCharacterId
  );

  const cName = Object.values(characters).find(
    (character) => character.name.toLowerCase() === charaName?.toLowerCase()
  );

  const levels = WWCharacterLevelsJSON.find((i) => i.level === level);

  useEffect(() => {
    if (cName) {
      setSelectedCharacterId(cName.charaId);
    }
  }, [cName, setSelectedCharacterId]);

  const echoStatsArray = Object.values(echoStats);
  const baseHp = charaStats?.stats.base_hp as number;
  const hpMulti = levels?.hp_multi as number;

  useEffect(() => {
    if (echoStatsArray.some((i) => i.cost === 1)) {
      setEchoPassive(2280);
    } else {
      setEchoPassive(0);
    }
  });

  const calculatedHp = Math.floor(baseHp * (hpMulti / 10000) || 0);

  const weaponHpPercent =
    weaponStats.secondaryStat === "HP"
      ? Math.floor(weaponStats.secondaryStatValue * 10) / 10 / 100 || 0
      : 0;
  const forteHp =
    forteStats.stat1 === "HP"
      ? (forteStats.stat1Value1 / 100 || 0) +
        (forteStats.stat1Value2 / 100 || 0) +
        (forteStats.stat1Value3 / 100 || 0) +
        (forteStats.stat1Value4 / 100 || 0)
      : 0;
  const echoMainHp = echoStatsArray.reduce((total, echo) => {
    return echo.mainStat === "HP" ? total + (echo.mainStatValue || 0) : total;
  }, 0);
  const echoMainHpPercent = echoStatsArray.reduce((total, echo) => {
    return echo.mainStat === "HP%"
      ? total + (echo.mainStatValue / 100 || 0)
      : total;
  }, 0);
  const echoHpSubStats = echoStatsArray.reduce((total, echo) => {
    const subStats = [
      echo.selectedSubStat1,
      echo.selectedSubStat2,
      echo.selectedSubStat3,
      echo.selectedSubStat4,
      echo.selectedSubStat5,
    ];

    const subStatTotal = subStats.reduce((subTotal, subStat) => {
      return subStat.stat === "HP" ? subTotal + (subStat.value || 0) : subTotal;
    }, 0);

    return total + subStatTotal;
  }, 0);
  const echoHpPercentSubStats = echoStatsArray.reduce((total, echo) => {
    const subStats = [
      echo.selectedSubStat1,
      echo.selectedSubStat2,
      echo.selectedSubStat3,
      echo.selectedSubStat4,
      echo.selectedSubStat5,
    ];

    const subStatTotal = subStats.reduce((subTotal, subStat) => {
      return subStat.stat === "HP%"
        ? subTotal + (subStat.value || 0)
        : subTotal;
    }, 0);

    return total + subStatTotal / 100;
  }, 0);
  const TotalHp = calculatedHp;

  const TotalHpPercent =
    weaponHpPercent + echoMainHpPercent + echoHpPercentSubStats + forteHp;

  const finalValue =
    TotalHp * (1 + TotalHpPercent) + echoMainHp + echoPassive + echoHpSubStats;

  return finalValue;
}

//Def Stat Calc

export function DefenseCalc() {
  const { charaName } = useParams<{ charaName: string }>();
  const { characters, selectedCharacterId, setSelectedCharacterId, level } =
    useDataContext();
  const { weaponStats } = useWeapons();
  const { echoStats } = useEchoes();
  const { forteStats, skillLevels } = useForte();
  const [AdditionalPercent, setAdditionalPercent] = useState<number>(0);

  const charaStats = Object.values(characters).find(
    (i) => i.charaId === selectedCharacterId
  );

  const cName = Object.values(characters).find(
    (character) => character.name.toLowerCase() === charaName?.toLowerCase()
  );

  const levels = WWCharacterLevelsJSON.find((i) => i.level === level);

  useEffect(() => {
    if (cName) {
      setSelectedCharacterId(cName.charaId);
    }
  }, [cName, setSelectedCharacterId]);

  useEffect(() => {
    if (skillLevels.InherantSkill1.Buff === "DEF") {
      setAdditionalPercent(skillLevels.InherantSkill1.Value / 100);
    } else {
      setAdditionalPercent(0);
    }
  });

  const echoStatsArray = Object.values(echoStats);
  const baseHp = charaStats?.stats.base_def as number;
  const hpMulti = levels?.def_multi as number;

  const calculatedDef = Math.floor(baseHp * (hpMulti / 10000) || 0);

  const weaponDefPercent =
    weaponStats.secondaryStat === "DEF"
      ? weaponStats.secondaryStatValue || 0
      : 0;
  const forteDef =
    forteStats.stat1 === "DEF"
      ? (forteStats.stat1Value1 / 100 || 0) +
        (forteStats.stat1Value2 / 100 || 0) +
        (forteStats.stat1Value3 / 100 || 0) +
        (forteStats.stat1Value4 / 100 || 0)
      : 0;
  const echoMainDef = echoStatsArray.reduce((total, echo) => {
    return echo.mainStat === "DEF" ? total + (echo.mainStatValue || 0) : total;
  }, 0);
  const echoMainDefPercent = echoStatsArray.reduce((total, echo) => {
    return echo.mainStat === "DEF%"
      ? total + (echo.mainStatValue / 100 || 0)
      : total;
  }, 0);
  const echoDefSubStats = echoStatsArray.reduce((total, echo) => {
    const subStats = [
      echo.selectedSubStat1,
      echo.selectedSubStat2,
      echo.selectedSubStat3,
      echo.selectedSubStat4,
      echo.selectedSubStat5,
    ];

    const subStatTotal = subStats.reduce((subTotal, subStat) => {
      return subStat.stat === "DEF"
        ? subTotal + (subStat.value || 0)
        : subTotal;
    }, 0);

    return total + subStatTotal;
  }, 0);
  const echoDefPercentSubStats = echoStatsArray.reduce((total, echo) => {
    const subStats = [
      echo.selectedSubStat1,
      echo.selectedSubStat2,
      echo.selectedSubStat3,
      echo.selectedSubStat4,
      echo.selectedSubStat5,
    ];

    const subStatTotal = subStats.reduce((subTotal, subStat) => {
      return subStat.stat === "DEF%"
        ? subTotal + (subStat.value || 0)
        : subTotal;
    }, 0);

    return total + subStatTotal / 100;
  }, 0);
  const TotalDef = calculatedDef;

  const TotalDefPercent =
    weaponDefPercent +
    echoMainDefPercent +
    echoDefPercentSubStats +
    forteDef +
    AdditionalPercent;

  const finalValue =
    TotalDef * (1 + TotalDefPercent) + echoMainDef + echoDefSubStats;

  return finalValue;
}
