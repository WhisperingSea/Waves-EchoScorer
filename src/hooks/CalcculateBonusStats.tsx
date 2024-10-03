import { useParams } from "react-router-dom";
import { useDataContext } from "../contexts/CharacterDataContext";
import { useWeapons } from "../contexts/CalcWeaponContext";
import { useEchoes } from "../contexts/CalcEchoContext";
import { useForte } from "../contexts/CalcForteContext";
import { useEffect, useState } from "react";

export function EnergyCalc() {
  const { charaName } = useParams<{ charaName: string }>();
  const { characters, selectedCharacterId, setSelectedCharacterId } =
    useDataContext();
  const { weaponStats } = useWeapons();
  const [Sonata2PieceBonus, setSonata2PieceBonus] = useState<number>(0);
  const { echoStats, sonataGroup, sonataGroup2 } = useEchoes();

  const countOfOnes = Object.values(echoStats).filter(
    (i) => i.set === 8
  ).length;

  const set = countOfOnes >= 2 ? 10 : 0;

  //@ts-ignore Ignoring charaStat not called
  const charaStats = Object.values(characters).find(
    (i) => i.charaId === selectedCharacterId
  );

  const cName = Object.values(characters).find(
    (character) => character.name.toLowerCase() === charaName?.toLowerCase()
  );

  useEffect(() => {
    if (cName) {
      setSelectedCharacterId(cName.charaId);
    }
  }, [cName, setSelectedCharacterId]);

  useEffect(() => {
    if (sonataGroup === "Moonlit Clouds" || sonataGroup2 === "Moonlit Clouds") {
      setSonata2PieceBonus(10);
    } else {
      setSonata2PieceBonus(0);
    }
  });

  const echoStatsArray = Object.values(echoStats);
  const baseEnergy = 100;

  const weaponCritPercent =
    weaponStats.secondaryStat === "Energy Regen"
      ? weaponStats.secondaryStatValue || 0
      : 0;

  const echoMainEnergy = echoStatsArray.reduce((total, echo) => {
    return echo.mainStat === "Energy Regen%"
      ? total + (echo.mainStatValue || 0)
      : total;
  }, 0);
  const echoEnergySubStats = echoStatsArray.reduce((total, echo) => {
    const subStats = [
      echo.selectedSubStat1,
      echo.selectedSubStat2,
      echo.selectedSubStat3,
      echo.selectedSubStat4,
      echo.selectedSubStat5,
    ];

    const subStatTotal = subStats.reduce((subTotal, subStat) => {
      return subStat.stat === "Energy Regen%"
        ? subTotal + (subStat.value || 0)
        : subTotal;
    }, 0);

    return total + subStatTotal;
  }, 0);

  const finalValue =
    baseEnergy +
    weaponCritPercent +
    echoMainEnergy +
    echoEnergySubStats +
    Sonata2PieceBonus +
    set;

  return finalValue.toFixed(2);
}

export function HealCalc() {
  const { charaName } = useParams<{ charaName: string }>();
  const { characters, selectedCharacterId, setSelectedCharacterId } =
    useDataContext();
  const [Sonata2PieceBonus, setSonata2PieceBonus] = useState<number>(0);
  const { echoStats, sonataGroup, sonataGroup2 } = useEchoes();
  const { forteStats } = useForte();

  const countOfOnes = Object.values(echoStats).filter(
    (i) => i.set === 7
  ).length;

  const set = countOfOnes >= 2 ? 10 : 0;

  const charaStats = Object.values(characters).find(
    (i) => i.charaId === selectedCharacterId
  );

  const cName = Object.values(characters).find(
    (character) => character.name.toLowerCase() === charaName?.toLowerCase()
  );

  useEffect(() => {
    if (cName) {
      setSelectedCharacterId(cName.charaId);
    }
  }, [cName, setSelectedCharacterId]);

  useEffect(() => {
    if (
      sonataGroup === "Rejuvenating Glow" ||
      sonataGroup2 === "Rejuvenating Glow"
    ) {
      setSonata2PieceBonus(10);
    } else {
      setSonata2PieceBonus(0);
    }
  });

  const echoStatsArray = Object.values(echoStats);
  const baseHeal = charaStats?.stats.base_healing as number;

  const forteHeal =
    forteStats.stat2 === "Bonus Healing"
      ? (forteStats.stat2Value1 || 0) +
        (forteStats.stat2Value2 || 0) +
        (forteStats.stat2Value3 || 0) +
        (forteStats.stat2Value4 || 0)
      : 0;
  const echoMainHeal = echoStatsArray.reduce((total, echo) => {
    return echo.mainStat === "Healing Bonus%"
      ? total + (echo.mainStatValue || 0)
      : total;
  }, 0);

  const finalValue =
    baseHeal + echoMainHeal + forteHeal + Sonata2PieceBonus + set;

  return finalValue.toFixed(2);
}
