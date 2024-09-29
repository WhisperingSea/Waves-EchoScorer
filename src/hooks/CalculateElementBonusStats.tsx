import { useEffect, useState } from "react";
import { useEchoes } from "../contexts/CalcEchoContext";
import { useForte } from "../contexts/CalcForteContext";
import { WWForteBonus } from "../data/WWForteBonus";
import { useDataContext } from "../contexts/CharacterDataContext";

export function GlacioDamageCalc() {
  const { echoStats, sonataGroup, sonataGroup2, sonataEffectStacks } =
    useEchoes();
  const { selectedCharacterId } = useDataContext();
  const echoStatsArray = Object.values(echoStats);
  const { skillLevels } = useForte();
  const [Sonata2PieceBonus, setSonata2PieceBonus] = useState<number>(0);
  const [Sonata5PieceBonus, setSonata5PieceBonus] = useState<number>(0);
  const [InherentBonus, setInherentBonus] = useState<number>(0);

  const forteStat = Object.values(WWForteBonus).find(
    (F) => F.Id === selectedCharacterId
  )?.minorForte;

  const countOfOnes = echoStatsArray.filter((i) => i.set === 1).length;

  const set = countOfOnes >= 2 ? 10 : 0;

  useEffect(() => {
    if (skillLevels.InherantSkill1.Buff === "Glacio DMG Bonus") {
      setInherentBonus(skillLevels.InherantSkill1.Value);
    } else {
      setInherentBonus(0);
    }
  });
  useEffect(() => {
    if (sonataGroup === "Freezing Frost" || sonataGroup2 === "Freezing Frost") {
      setSonata2PieceBonus(10);
    } else {
      setSonata2PieceBonus(0);
    }

    if (sonataGroup === "Freezing Frost" && sonataGroup2 === "Freezing Frost") {
      setSonata5PieceBonus(10 * sonataEffectStacks);
    } else {
      setSonata5PieceBonus(0);
    }
  });

  const forteBonus = Array.isArray(forteStat)
    ? forteStat?.reduce((total, stat) => {
        return stat.type === "Glacio Damage Bonus"
          ? total + (stat.value || 0)
          : total;
      }, 0)
    : 0;

  const echoGlacioDamageStats = echoStatsArray.reduce((total, echo) => {
    return echo.mainStat === "Glacio DMG Bonus%"
      ? total + (echo.mainStatValue || 0)
      : total;
  }, 0);

  const TotalElementDamageBonus =
    echoGlacioDamageStats +
    Sonata2PieceBonus +
    Sonata5PieceBonus +
    forteBonus +
    InherentBonus +
    set;
  return TotalElementDamageBonus;
}

export function FusionDamageCalc() {
  const { echoStats, sonataGroup, sonataGroup2, sonataEffectStacks } =
    useEchoes();
  const { selectedCharacterId } = useDataContext();
  const echoStatsArray = Object.values(echoStats);
  const { skillLevels } = useForte();
  const [Sonata2PieceBonus, setSonata2PieceBonus] = useState<number>(0);
  const [Sonata5PieceBonus, setSonata5PieceBonus] = useState<number>(0);
  const [InherentBonus, setInherentBonus] = useState<number>(0);
  const [InherentBonus2, setInherentBonus2] = useState<number>(0);

  const forteStat = Object.values(WWForteBonus).find(
    (F) => F.Id === selectedCharacterId
  )?.minorForte;

  const countOfOnes = echoStatsArray.filter((i) => i.set === 2).length;

  const set = countOfOnes >= 2 ? 10 : 0;

  useEffect(() => {
    if (skillLevels.InherantSkill1.Buff === "Fusion DMG Bonus") {
      setInherentBonus(skillLevels.InherantSkill1.Value);
    } else {
      setInherentBonus(0);
    }

    if (skillLevels.InherantSkill2.Buff === "Fusion DMG Bonus") {
      setInherentBonus2(skillLevels.InherantSkill2.Value);
    } else if (skillLevels.InherantSkill2.Buff2 === "Fusion DMG Bonus") {
      setInherentBonus2(skillLevels.InherantSkill2.Value2 as number);
    } else {
      setInherentBonus2(0);
    }
  });

  useEffect(() => {
    if (sonataGroup === "Molten Rift" || sonataGroup2 === "Molten Rift") {
      setSonata2PieceBonus(10);
    } else {
      setSonata2PieceBonus(0);
    }

    if (sonataGroup === "Molten Rift" && sonataGroup2 === "Molten Rift") {
      setSonata5PieceBonus(30 * sonataEffectStacks);
    } else {
      setSonata5PieceBonus(0);
    }
  });

  const forteBonus = Array.isArray(forteStat)
    ? forteStat?.reduce((total, stat) => {
        return stat.type === "Fusion Damage Bonus"
          ? total + (stat.value || 0)
          : total;
      }, 0)
    : 0;

  const echoFusionDamageStats = echoStatsArray.reduce((total, echo) => {
    return echo.mainStat === "Fusion DMG Bonus%"
      ? total + (echo.mainStatValue || 0)
      : total;
  }, 0);

  const TotalElementDamageBonus =
    echoFusionDamageStats +
    forteBonus +
    Sonata2PieceBonus +
    Sonata5PieceBonus +
    InherentBonus +
    InherentBonus2 +
    set;
  return TotalElementDamageBonus;
}

export function ElectroDamageCalc() {
  const { echoStats, sonataGroup, sonataGroup2, sonataEffectStacks } =
    useEchoes();
  const { selectedCharacterId } = useDataContext();
  const echoStatsArray = Object.values(echoStats);
  const { skillLevels } = useForte();
  const [Sonata2PieceBonus, setSonata2PieceBonus] = useState<number>(0);
  const [Sonata5PieceBonus, setSonata5PieceBonus] = useState<number>(0);
  const [InherentBonus, setInherentBonus] = useState<number>(0);

  const forteStat = Object.values(WWForteBonus).find(
    (F) => F.Id === selectedCharacterId
  )?.minorForte;

  const countOfOnes = echoStatsArray.filter((i) => i.set === 3).length;

  const set = countOfOnes >= 2 ? 10 : 0;

  useEffect(() => {
    if (skillLevels.InherantSkill1.Buff === "Electro DMG Bonus") {
      setInherentBonus(skillLevels.InherantSkill1.Value);
    } else {
      setInherentBonus(0);
    }
  });
  useEffect(() => {
    if (sonataGroup === "Void Thunder" || sonataGroup2 === "Void Thunder") {
      setSonata2PieceBonus(10);
    } else {
      setSonata2PieceBonus(0);
    }

    if (sonataGroup === "Void Thunder" && sonataGroup2 === "Void Thunder") {
      setSonata5PieceBonus(15 * sonataEffectStacks);
    } else {
      setSonata5PieceBonus(0);
    }
  });

  const forteBonus = Array.isArray(forteStat)
    ? forteStat?.reduce((total, stat) => {
        return stat.type === "Electro Damage Bonus"
          ? total + (stat.value || 0)
          : total;
      }, 0)
    : 0;
  const echoElectroDamageStats = echoStatsArray.reduce((total, echo) => {
    return echo.mainStat === "Electro DMG Bonus%"
      ? total + (echo.mainStatValue || 0)
      : total;
  }, 0);

  const TotalElementDamageBonus =
    echoElectroDamageStats +
    Sonata2PieceBonus +
    Sonata5PieceBonus +
    forteBonus +
    InherentBonus +
    set;
  return TotalElementDamageBonus;
}

export function AeroDamageCalc() {
  const { echoStats, sonataGroup, sonataGroup2, sonataEffectStacks } =
    useEchoes();
  const { selectedCharacterId } = useDataContext();
  const echoStatsArray = Object.values(echoStats);
  const { skillLevels } = useForte();
  const [Sonata2PieceBonus, setSonata2PieceBonus] = useState<number>(0);
  const [Sonata5PieceBonus, setSonata5PieceBonus] = useState<number>(0);
  const [InherentBonus, setInherentBonus] = useState<number>(0);
  const [InherentBonus2, setInherentBonus2] = useState<number>(0);

  const forteStat = Object.values(WWForteBonus).find(
    (F) => F.Id === selectedCharacterId
  )?.minorForte;

  const countOfOnes = echoStatsArray.filter((i) => i.set === 4).length;

  const set = countOfOnes >= 2 ? 10 : 0;

  useEffect(() => {
    if (skillLevels.InherantSkill1.Buff === "Aero DMG Bonus") {
      setInherentBonus(skillLevels.InherantSkill1.Value);
    } else {
      setInherentBonus(0);
    }

    if (skillLevels.InherantSkill2.Buff === "Aero DMG Bonus") {
      setInherentBonus2(skillLevels.InherantSkill2.Value);
    } else if (skillLevels.InherantSkill2.Buff2 === "Aero DMG Bonus") {
      setInherentBonus2(skillLevels.InherantSkill2.Value2 as number);
    } else {
      setInherentBonus2(0);
    }
  });

  useEffect(() => {
    if (sonataGroup === "Sierra Gale" || sonataGroup2 === "Sierra Gale") {
      setSonata2PieceBonus(10);
    } else {
      setSonata2PieceBonus(0);
    }

    if (sonataGroup === "Sierra Gale" && sonataGroup2 === "Sierra Gale") {
      setSonata5PieceBonus(30 * sonataEffectStacks);
    } else {
      setSonata5PieceBonus(0);
    }
  });

  const forteBonus = Array.isArray(forteStat)
    ? forteStat?.reduce((total, stat) => {
        return stat.type === "Aero Damage Bonus"
          ? total + (stat.value || 0)
          : total;
      }, 0)
    : 0;
  const echoAeroDamageStats = echoStatsArray.reduce((total, echo) => {
    return echo.mainStat === "Aero DMG Bonus%"
      ? total + (echo.mainStatValue || 0)
      : total;
  }, 0);

  const TotalElementDamageBonus =
    echoAeroDamageStats +
    Sonata2PieceBonus +
    Sonata5PieceBonus +
    forteBonus +
    InherentBonus +
    InherentBonus2 +
    set;
  return TotalElementDamageBonus;
}

export function SpectroDamageCalc() {
  const { echoStats, sonataGroup, sonataGroup2, sonataEffectStacks } =
    useEchoes();
  const { selectedCharacterId } = useDataContext();
  const echoStatsArray = Object.values(echoStats);
  const { skillLevels } = useForte();
  const [Sonata2PieceBonus, setSonata2PieceBonus] = useState<number>(0);
  const [Sonata5PieceBonus, setSonata5PieceBonus] = useState<number>(0);
  const [InherentBonus, setInherentBonus] = useState<number>(0);

  const forteStat = Object.values(WWForteBonus).find(
    (F) => F.Id === selectedCharacterId
  )?.minorForte;

  const countOfOnes = echoStatsArray.filter((i) => i.set === 5).length;

  const set = countOfOnes >= 2 ? 10 : 0;

  useEffect(() => {
    if (skillLevels.InherantSkill1.Buff === "Spectro DMG Bonus") {
      setInherentBonus(skillLevels.InherantSkill1.Value);
    } else {
      setInherentBonus(0);
    }
  });

  useEffect(() => {
    if (
      sonataGroup === "Celestial Light" ||
      sonataGroup2 === "Celestial Light"
    ) {
      setSonata2PieceBonus(10);
    } else {
      setSonata2PieceBonus(0);
    }

    if (
      sonataGroup === "Celestial Light" &&
      sonataGroup2 === "Celestial Light"
    ) {
      setSonata5PieceBonus(30 * sonataEffectStacks);
    } else {
      setSonata5PieceBonus(0);
    }
  });

  const forteBonus = Array.isArray(forteStat)
    ? forteStat?.reduce((total, stat) => {
        return stat.type === "Spectro Damage Bonus"
          ? total + (stat.value || 0)
          : total;
      }, 0)
    : 0;

  const echoSpectroDamageStats = echoStatsArray.reduce((total, echo) => {
    return echo.mainStat === "Spectro DMG Bonus%"
      ? total + (echo.mainStatValue || 0)
      : total;
  }, 0);

  const TotalElementDamageBonus =
    echoSpectroDamageStats +
    Sonata2PieceBonus +
    Sonata5PieceBonus +
    forteBonus +
    InherentBonus +
    set;
  return TotalElementDamageBonus;
}

export function HavocDamageCalc() {
  const { echoStats, sonataGroup, sonataGroup2, sonataEffectStacks } =
    useEchoes();
  const { selectedCharacterId } = useDataContext();
  const echoStatsArray = Object.values(echoStats);
  const { skillLevels } = useForte();
  const [Sonata2PieceBonus, setSonata2PieceBonus] = useState<number>(0);
  const [Sonata5PieceBonus, setSonata5PieceBonus] = useState<number>(0);
  const [InherentBonus, setInherentBonus] = useState<number>(0);

  const forteStat = Object.values(WWForteBonus).find(
    (F) => F.Id === selectedCharacterId
  )?.minorForte;

  const countOfOnes = echoStatsArray.filter((i) => i.set === 6).length;

  const set = countOfOnes >= 2 ? 10 : 0;

  useEffect(() => {
    if (skillLevels.InherantSkill1.Buff === "Havoc DMG Bonus") {
      setInherentBonus(skillLevels.InherantSkill1.Value);
    } else {
      setInherentBonus(0);
    }
  });

  useEffect(() => {
    if (
      sonataGroup === "Sun-sinking Eclipse" ||
      sonataGroup2 === "Sun-sinking Eclipse"
    ) {
      setSonata2PieceBonus(10);
    } else {
      setSonata2PieceBonus(0);
    }

    if (
      sonataGroup === "Sun-sinking Eclipse" &&
      sonataGroup2 === "Sun-sinking Eclipse"
    ) {
      setSonata5PieceBonus(7.5 * sonataEffectStacks);
    } else {
      setSonata5PieceBonus(0);
    }
  });

  const forteBonus = Array.isArray(forteStat)
    ? forteStat?.reduce((total, stat) => {
        return stat.type === "Havoc Damage Bonus"
          ? total + (stat.value || 0)
          : total;
      }, 0)
    : 0;

  const echoHavocDamageStats = echoStatsArray.reduce((total, echo) => {
    return echo.mainStat === "Havoc DMG Bonus%"
      ? total + (echo.mainStatValue || 0)
      : total;
  }, 0);

  const TotalElementDamageBonus =
    echoHavocDamageStats +
    Sonata2PieceBonus +
    Sonata5PieceBonus +
    forteBonus +
    InherentBonus +
    set;

  return TotalElementDamageBonus;
}
