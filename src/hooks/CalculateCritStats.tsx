import { useParams } from "react-router-dom";
import { useDataContext } from "../contexts/CharacterDataContext";
import { useWeapons } from "../contexts/CalcWeaponContext";
import { useEchoes } from "../contexts/CalcEchoContext";
import { useForte } from "../contexts/CalcForteContext";
import { useEffect, useState } from "react";
import { useSequence } from "../contexts/CalcSequenceContext";
import { WWForteBonus } from "../data/WWForteBonus";

export function CritcalCalc() {
  const { charaName } = useParams<{ charaName: string }>();
  const { characters, selectedCharacterId, setSelectedCharacterId } =
    useDataContext();
  const { weaponStats } = useWeapons();
  const { echoStats } = useEchoes();
  const { skillLevels } = useForte();
  const { sequence } = useSequence();
  const [AdditionalPercent, setAdditionalPercent] = useState<number>(0);
  const [sequenceBuff, setSequenceBuff] = useState<number>(0);

  const charaStats = Object.values(characters).find(
    (i) => i.charaId === selectedCharacterId
  );

  const cName = Object.values(characters).find(
    (character) => character.name.toLowerCase() === charaName?.toLowerCase()
  );

  const forteStat = Object.values(WWForteBonus).find(
    (F) => F.Id === selectedCharacterId
  )?.minorForte;

  useEffect(() => {
    if (cName) {
      setSelectedCharacterId(cName.charaId);
    }
  }, [cName, setSelectedCharacterId]);

  useEffect(() => {
    if (skillLevels.InherantSkill1.Buff === "Crit. Rate") {
      setAdditionalPercent(skillLevels.InherantSkill1.Value);
    } else {
      setAdditionalPercent(0);
    }
  });

  useEffect(() => {
    if (sequence.charaId === selectedCharacterId) {
      const sequences = [
        sequence.sequences.node1,
        sequence.sequences.node2,
        sequence.sequences.node3,
        sequence.sequences.node4,
        sequence.sequences.node5,
        sequence.sequences.node6,
      ];

      const targetType = "Character Buff";
      const targetBuff = "Crit. Rate";

      const totalValue = (sequences ?? [])
        .flat()
        .filter(
          (node) =>
            node.type?.toLowerCase() === targetType.toLowerCase() &&
            node.buff?.toLowerCase() === targetBuff.toLowerCase()
        )
        .reduce((sum, node) => sum + node.value, 0);

      setSequenceBuff(totalValue);
    }
  }, [sequence, selectedCharacterId, setSequenceBuff]);

  const echoStatsArray = Object.values(echoStats);
  const baseCrit = charaStats?.stats.base_crit as number;

  const weaponCritPercent =
    weaponStats.secondaryStat === "Crit. Rate"
      ? weaponStats.secondaryStatValue || 0
      : 0;
  const forteBonus = Array.isArray(forteStat)
    ? forteStat?.reduce((total, stat) => {
        return stat.type === "Crit. Rate" ? total + (stat.value || 0) : total;
      }, 0)
    : 0;
  const echoMainCrit = echoStatsArray.reduce((total, echo) => {
    return echo.mainStat === "Crit. Rate%"
      ? total + (echo.mainStatValue || 0)
      : total;
  }, 0);
  const echoCritSubStats = echoStatsArray.reduce((total, echo) => {
    const subStats = [
      echo.selectedSubStat1,
      echo.selectedSubStat2,
      echo.selectedSubStat3,
      echo.selectedSubStat4,
      echo.selectedSubStat5,
    ];

    const subStatTotal = subStats.reduce((subTotal, subStat) => {
      return subStat.stat === "Crit. Rate%"
        ? subTotal + (subStat.value || 0)
        : subTotal;
    }, 0);

    return total + subStatTotal;
  }, 0);

  const finalValue =
    baseCrit +
    weaponCritPercent +
    echoMainCrit +
    echoCritSubStats +
    forteBonus +
    sequenceBuff +
    AdditionalPercent;

  return finalValue.toFixed(2);
}

export function CritcalDamageCalc() {
  const { charaName } = useParams<{ charaName: string }>();
  const { characters, selectedCharacterId, setSelectedCharacterId } =
    useDataContext();
  const { weaponStats } = useWeapons();
  const { echoStats } = useEchoes();
  const { skillLevels } = useForte();
  const [AdditionalPercent, setAdditionalPercent] = useState<number>(0);
  const { sequence } = useSequence();
  const [sequenceBuff, setSequenceBuff] = useState<number>(0);
  const [AdditionalPercent2, setAdditionalPercent2] = useState<number>(0);

  const charaStats = Object.values(characters).find(
    (i) => i.charaId === selectedCharacterId
  );

  const cName = Object.values(characters).find(
    (character) => character.name.toLowerCase() === charaName?.toLowerCase()
  );

  const forteStat = Object.values(WWForteBonus).find(
    (F) => F.Id === selectedCharacterId
  )?.minorForte;

  useEffect(() => {
    if (cName) {
      setSelectedCharacterId(cName.charaId);
    }
  }, [cName, setSelectedCharacterId]);

  useEffect(() => {
    if (skillLevels.InherantSkill1.Buff === "Crit. Damage") {
      setAdditionalPercent(skillLevels.InherantSkill1.Value);
    } else {
      setAdditionalPercent(0);
    }

    if (skillLevels.InherantSkill2.Buff === "Crit. Damage") {
      setAdditionalPercent2(skillLevels.InherantSkill2.Value);
    } else if (skillLevels.InherantSkill2.Buff2 === "Crit. Damage") {
      setAdditionalPercent2(skillLevels.InherantSkill2.Value2 as number);
    } else {
      setAdditionalPercent2(0);
    }
  });

  useEffect(() => {
    if (sequence.charaId === selectedCharacterId) {
      const sequences = [
        sequence.sequences.node1,
        sequence.sequences.node2,
        sequence.sequences.node3,
        sequence.sequences.node4,
        sequence.sequences.node5,
        sequence.sequences.node6,
      ];

      const targetType = "Character Buff";
      const targetBuff = "Crit. Damage";

      const totalValue = (sequences ?? [])
        .flat()
        .filter(
          (node) =>
            node.type?.toLowerCase() === targetType.toLowerCase() &&
            node.buff?.toLowerCase() === targetBuff.toLowerCase()
        )
        .reduce((sum, node) => sum + node.value, 0);

      setSequenceBuff(totalValue);
    }
  }, [sequence, selectedCharacterId, setSequenceBuff]);

  const echoStatsArray = Object.values(echoStats);
  const baseCritDmg = charaStats?.stats.base_critdmg as number;

  const weaponCritDmgPercent =
    weaponStats.secondaryStat === "Crit. Dmg"
      ? weaponStats.secondaryStatValue || 0
      : 0;
  const forteBonus = Array.isArray(forteStat)
    ? forteStat?.reduce((total, stat) => {
        return stat.type === "Crit. Damage" ? total + (stat.value || 0) : total;
      }, 0)
    : 0;
  const echoMainCritDmg = echoStatsArray.reduce((total, echo) => {
    return echo.mainStat === "Crit. DMG%"
      ? total + (echo.mainStatValue || 0)
      : total;
  }, 0);
  const echoCritDmgSubStats = echoStatsArray.reduce((total, echo) => {
    const subStats = [
      echo.selectedSubStat1,
      echo.selectedSubStat2,
      echo.selectedSubStat3,
      echo.selectedSubStat4,
      echo.selectedSubStat5,
    ];

    const subStatTotal = subStats.reduce((subTotal, subStat) => {
      return subStat.stat === "Crit. DMG%"
        ? subTotal + (subStat.value || 0)
        : subTotal;
    }, 0);

    return total + subStatTotal;
  }, 0);

  const finalValue =
    baseCritDmg +
    weaponCritDmgPercent +
    echoMainCritDmg +
    echoCritDmgSubStats +
    forteBonus +
    sequenceBuff +
    AdditionalPercent +
    AdditionalPercent2;

  return finalValue;
}
