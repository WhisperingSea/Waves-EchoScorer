import { useEffect, useState } from "react";
import { useEchoes } from "../contexts/CalcEchoContext";
import { useForte } from "../contexts/CalcForteContext";
import { useSequence } from "../contexts/CalcSequenceContext";
import { useDataContext } from "../contexts/CharacterDataContext";

export function BasicAttackBonus() {
  const { selectedCharacterId } = useDataContext();
  const { echoStats } = useEchoes();
  const { skillLevels } = useForte();
  const [AdditionalBasicDamage, setAdditionalBasicDamage] = useState(0);
  const [AdditionalBasicDamage2, setAdditionalBasicDamage2] = useState(0);
  const { sequence } = useSequence();
  const [sequenceBuff, setSequenceBuff] = useState<number>(0);

  const echoStatsArray = Object.values(echoStats);
  useEffect(() => {
    let Damage = 0;
    let Damage2 = 0;
    if (skillLevels.InherantSkill1.Buff === "Basic Attack Damage Bonus") {
      Damage = skillLevels.InherantSkill1.Value;
      setAdditionalBasicDamage(Damage);
    } else {
      setAdditionalBasicDamage(0);
    }

    if (skillLevels.InherantSkill2.Buff === "Basic Attack Damage Bonus") {
      Damage2 = skillLevels.InherantSkill2.Value;
      setAdditionalBasicDamage2(Damage2);
    } else if (
      skillLevels.InherantSkill2.Buff2 === "Basic Attack Damage Bonus"
    ) {
      Damage2 = skillLevels.InherantSkill2.Value2 as number;
      setAdditionalBasicDamage2(Damage2);
    } else {
      setAdditionalBasicDamage2(0);
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
      const targetBuff = "Basic Attack Damage Bonus";

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

  const echoBasicDmgSubStats = echoStatsArray.reduce((total, echo) => {
    const subStats = [
      echo.selectedSubStat1,
      echo.selectedSubStat2,
      echo.selectedSubStat3,
      echo.selectedSubStat4,
      echo.selectedSubStat5,
    ];

    const subStatTotal = subStats.reduce((subTotal, subStat) => {
      return subStat.stat === "Basic Attack Damage Bonus%"
        ? subTotal + (subStat.value || 0)
        : subTotal;
    }, 0);

    return total + subStatTotal;
  }, 0);

  const TotalBasicDamage =
    echoBasicDmgSubStats +
    AdditionalBasicDamage +
    sequenceBuff +
    AdditionalBasicDamage2;

  return TotalBasicDamage;
}

export function HeavyAttackBonus() {
  const { selectedCharacterId } = useDataContext();
  const { echoStats } = useEchoes();
  const { skillLevels } = useForte();
  const [AdditionalHeavyDamage, setAdditionalHeavyDamage] = useState(0);
  const [AdditionalHeavyDamage2, setAdditionalHeavyDamage2] = useState(0);
  const { sequence } = useSequence();
  const [sequenceBuff, setSequenceBuff] = useState<number>(0);

  const echoStatsArray = Object.values(echoStats);

  useEffect(() => {
    let Damage = 0;
    let Damage2 = 0;
    if (skillLevels.InherantSkill1.Buff === "Heavy Attack Damage Bonus") {
      Damage = skillLevels.InherantSkill1.Value;
      setAdditionalHeavyDamage(Damage);
    } else {
      setAdditionalHeavyDamage(0);
    }

    if (skillLevels.InherantSkill2.Buff === "Heavy Attack Damage Bonus") {
      Damage2 = skillLevels.InherantSkill2.Value;
      setAdditionalHeavyDamage2(Damage2);
    } else if (
      skillLevels.InherantSkill2.Buff2 === "Heavy Attack Damage Bonus"
    ) {
      Damage2 = skillLevels.InherantSkill2.Value2 as number;
      setAdditionalHeavyDamage2(Damage2);
    } else {
      setAdditionalHeavyDamage2(0);
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
      const targetBuff = "Heavy Attack Damage Bonus";

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

  const echoHeavyDmgSubStats = echoStatsArray.reduce((total, echo) => {
    const subStats = [
      echo.selectedSubStat1,
      echo.selectedSubStat2,
      echo.selectedSubStat3,
      echo.selectedSubStat4,
      echo.selectedSubStat5,
    ];

    const subStatTotal = subStats.reduce((subTotal, subStat) => {
      return subStat.stat === "Heavy Attack Damage Bonus%"
        ? subTotal + (subStat.value || 0)
        : subTotal;
    }, 0);

    return total + subStatTotal;
  }, 0);

  const TotalHeavyDamage =
    echoHeavyDmgSubStats +
    AdditionalHeavyDamage +
    AdditionalHeavyDamage2 +
    sequenceBuff;

  return TotalHeavyDamage;
}

export function RSkillBonus() {
  const { selectedCharacterId } = useDataContext();
  const { echoStats } = useEchoes();
  const { skillLevels } = useForte();
  const [AdditionalRSkillDamage, setAdditionalRSkillDamage] = useState(0);
  const [AdditionalRSkillDamage2, setAdditionalRSkillDamage2] = useState(0);
  const { sequence } = useSequence();
  const [sequenceBuff, setSequenceBuff] = useState<number>(0);

  const echoStatsArray = Object.values(echoStats);

  useEffect(() => {
    let Damage = 0;
    let Damage2 = 0;
    if (skillLevels.InherantSkill1.Buff === "Resonance Skill Damage Bonus") {
      Damage = skillLevels.InherantSkill1.Value;
      setAdditionalRSkillDamage(Damage);
    } else {
      setAdditionalRSkillDamage(0);
    }

    if (skillLevels.InherantSkill2.Buff === "Resonance Skill Damage Bonus") {
      Damage2 = skillLevels.InherantSkill2.Value;
      setAdditionalRSkillDamage2(Damage2);
    } else if (
      skillLevels.InherantSkill2.Buff2 === "Resonance Skill Damage Bonus"
    ) {
      Damage2 = skillLevels.InherantSkill2.Value2 as number;
      setAdditionalRSkillDamage2(Damage2);
    } else {
      setAdditionalRSkillDamage2(0);
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
      const targetBuff = "Resonance Skill Damage Bonus";

      const totalValue = (sequences ?? [])
        .flat()
        .filter(
          (node) =>
            node.type?.toLowerCase() === targetType.toLowerCase() &&
            node.buff?.toLowerCase() === targetBuff.toLowerCase()
        )
        .reduce((sum, node) => sum + node.value, 0);

      setSequenceBuff(totalValue);
      console.log(sequenceBuff);
    }
  }, [sequence, selectedCharacterId, setSequenceBuff]);

  const echoBasicDmgSubStats = echoStatsArray.reduce((total, echo) => {
    const subStats = [
      echo.selectedSubStat1,
      echo.selectedSubStat2,
      echo.selectedSubStat3,
      echo.selectedSubStat4,
      echo.selectedSubStat5,
    ];

    const subStatTotal = subStats.reduce((subTotal, subStat) => {
      return subStat.stat === "Resonance Skill Damage Bonus%"
        ? subTotal + (subStat.value || 0)
        : subTotal;
    }, 0);

    return total + subStatTotal;
  }, 0);

  const TotalRSkillDamage =
    echoBasicDmgSubStats +
    AdditionalRSkillDamage +
    AdditionalRSkillDamage2 +
    sequenceBuff;

  return TotalRSkillDamage;
}

export function RLiberationBonus() {
  const { selectedCharacterId } = useDataContext();
  const { echoStats } = useEchoes();
  const { skillLevels } = useForte();
  const [AdditionalRLiberationDamage, setAdditionalRLiberationDamage] =
    useState(0);
  const [AdditionalRLiberationDamage2, setAdditionalRLiberationDamage2] =
    useState(0);
  const { sequence } = useSequence();
  const [sequenceBuff, setSequenceBuff] = useState<number>(0);
  const echoStatsArray = Object.values(echoStats);

  useEffect(() => {
    let Damage = 0;
    let Damage2 = 0;
    if (
      skillLevels.InherantSkill1.Buff === "Resonance Liberation Damage Bonus"
    ) {
      Damage = skillLevels.InherantSkill1.Value;
      setAdditionalRLiberationDamage(Damage);
    } else {
      setAdditionalRLiberationDamage(0);
    }

    if (
      skillLevels.InherantSkill2.Buff === "Resonance Liberation Damage Bonus"
    ) {
      Damage2 = skillLevels.InherantSkill2.Value;
      setAdditionalRLiberationDamage2(Damage2);
    } else if (
      skillLevels.InherantSkill2.Buff2 === "Resonance Liberation Damage Bonus"
    ) {
      Damage2 = skillLevels.InherantSkill2.Value2 as number;
      setAdditionalRLiberationDamage2(Damage2);
    } else {
      setAdditionalRLiberationDamage2(0);
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
      const targetBuff = "Resonance Liberation Damage Bonus";

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

  const echoBasicDmgSubStats = echoStatsArray.reduce((total, echo) => {
    const subStats = [
      echo.selectedSubStat1,
      echo.selectedSubStat2,
      echo.selectedSubStat3,
      echo.selectedSubStat4,
      echo.selectedSubStat5,
    ];

    const subStatTotal = subStats.reduce((subTotal, subStat) => {
      return subStat.stat === "Resonance Liberation Damage Bonus%"
        ? subTotal + (subStat.value || 0)
        : subTotal;
    }, 0);

    return total + subStatTotal;
  }, 0);

  const TotalRSkillDamage =
    echoBasicDmgSubStats +
    AdditionalRLiberationDamage +
    AdditionalRLiberationDamage2 +
    sequenceBuff;

  return TotalRSkillDamage;
}
