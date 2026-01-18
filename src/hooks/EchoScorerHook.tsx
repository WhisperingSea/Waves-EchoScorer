import { useCallback, useState, useMemo, useEffect } from "react";
import { useEchoes } from "../contexts/CalcEchoContext";
import { WWSubstats } from "../data/WWEchoStats";
import { useScorerContext } from "../contexts/ScorerContext";
import { WWCharaBuilds } from "../data/WWCharacterBuild";
import { useDataContext } from "../contexts/CharacterDataContext";

interface ScoreMisc {
  [key: number]: { statVal: number };
}

export function EchoScorerFunction(index: number) {
  const { selectedCharacterId } = useDataContext();
  const { echoStats } = useEchoes();
  const { ScorerWeight, subStats, cost1Main, cost3Main, cost4Main } =
    useScorerContext();
  const [scoreMisc, setScoreMisc] = useState<ScoreMisc>({
    1: { statVal: 0 },
    2: { statVal: 0 },
    3: { statVal: 0 },
    4: { statVal: 0 },
    5: { statVal: 0 },
  });

  const echoStat = useMemo(
    () => Object.values(echoStats)[index - 1],
    [echoStats, index]
  );

  const set = Object.values(WWCharaBuilds)
    .find((set) => set.charaId === selectedCharacterId)
    ?.preferedSonata?.includes(echoStat.set);

  const valCalc = useCallback(
    (stat: number, statName: string) => {
      const st = Object.values(WWSubstats).find((s) => s.name === statName);
      const mainStat = echoStat.mainStat;
      const prefStat = subStats?.includes(statName);
      const prefStatName = subStats?.includes(statName) ? statName : "";
      const prefMainCost1 =
        echoStat.cost === 1 && cost1Main?.includes(mainStat) ? 0.4 : 0;
      const prefMainCost3 =
        echoStat.cost === 3 && cost3Main?.includes(mainStat) ? 0.4 : 0;
      const prefMainCost4 =
        echoStat.cost === 4 && cost4Main?.includes(mainStat) ? 0.4 : 0;

      if (!st) {
        return 0;
      }

      const index = st.rolls.indexOf(stat);
      if (index === -1) {
        return 0;
      }

      const supports = [1101, 1106, 1209, 1501, 1503];
      const dps = !supports.includes(selectedCharacterId || 0);

      let dpsBonus = 0;
      let dpsSubBonus = 0;
      let supportBonus = 0;
      let supportSubBonus = 0;
      let flatBonus = 0;

      // Per stat Roll Bonus = 0.5 per roll / Max = 4
      // Main Stat bonus = 0.4 * 5 = 2
      // Crit Rate, Crit Damage Bonus = 5 + 3
      // HP%, Energy Regen, ATK%(Verina) Bonus = 5 + 3
      // ATK% Bonus = 3 + 3
      // ATK, HP, DEF Bonus = 2 + 3

      // Max DPS score = 52

      if (dps) {
        dpsBonus = ["Crit. Rate%", "Crit. DMG%"].includes(prefStatName) ? 5 : 0;

        if ([1303, 1601].includes(selectedCharacterId || 0)) {
          dpsSubBonus = prefStatName === "DEF%" ? 3 : 0;
          flatBonus = prefStatName === "DEF" ? 2 : 0;
        } else {
          dpsSubBonus = prefStatName === "ATK%" ? 3 : 0;
          flatBonus = prefStatName === "ATK" ? 2 : 0;
        }
      } else if (supports.includes(selectedCharacterId || 0)) {
        if (selectedCharacterId === 1501) {
          supportBonus = ["ATK%", "Energy Regen%"].includes(prefStatName)
            ? 5
            : 0;
          flatBonus = ["ATK", "DEF"].includes(prefStatName) ? 2 : 0;
        } else if (selectedCharacterId === 1209) {
          // Mornye support profile: favors Energy Regen and DEF
          supportBonus = ["Energy Regen%", "DEF%"].includes(prefStatName)
            ? 5
            : 0;
          supportSubBonus = ["DEF", "Crit. DMG%"].includes(prefStatName)
            ? 3
            : 0;
          flatBonus = ["DEF"].includes(prefStatName) ? 2 : 0;
        } else if (selectedCharacterId === 1101) {
          supportBonus = ["HP%", "Energy Regen%"].includes(prefStatName)
            ? 5
            : 0;
          flatBonus = ["HP", "DEF"].includes(prefStatName) ? 2 : 0;
        } else if (selectedCharacterId === 1503) {
          supportBonus = ["HP%", "Energy Regen%", "Crit. DMG%"].includes(
            prefStatName
          )
            ? 5
            : 0;
          flatBonus = ["HP", "DEF"].includes(prefStatName) ? 2 : 0;
        }
      }

      const statScore = (index + 1) * 0.5;
      const prefStatScore = prefStat ? 2 : 0;
      const baseScore =
        (prefStatScore +
          statScore +
          prefMainCost1 +
          prefMainCost3 +
          prefMainCost4 +
          dpsBonus +
          dpsSubBonus +
          supportBonus +
          supportSubBonus +
          flatBonus) *
        (set ? 1 : 0.8);

      const weightItem = Object.values(ScorerWeight).find(
        (w) => w.stat === statName
      );
      const weightValue = weightItem?.value ?? 1;

      return baseScore * weightValue;
    },
    [WWSubstats, subStats, selectedCharacterId, set, ScorerWeight]
  );

  const weights = useMemo(() => Object.values(ScorerWeight), [ScorerWeight]);

  const calculateScoreMisc = useMemo(() => {
    const updatedScoreMisc: ScoreMisc = { ...scoreMisc };

    try {
      const selectedSubStats = [
        echoStat.selectedSubStat1,
        echoStat.selectedSubStat2,
        echoStat.selectedSubStat3,
        echoStat.selectedSubStat4,
        echoStat.selectedSubStat5,
      ];

      selectedSubStats.forEach((subStat, idx) => {
        const subStatIndex = idx + 1;
        if (echoStat.id !== 0 && subStat) {
          const stat = subStat.value;
          const statName = subStat.stat;

          const val = valCalc(stat, statName);
          const finalValue = val;

          updatedScoreMisc[subStatIndex] = { statVal: finalValue };
        } else {
          updatedScoreMisc[subStatIndex] = { statVal: 0 };
        }
      });

      return updatedScoreMisc;
    } catch (error) {
      console.error("Error in scoring calculation:", error);
      return updatedScoreMisc;
    }
  }, [echoStat, weights, valCalc]);

  const scoreVal = useMemo(() => {
    return Object.values(calculateScoreMisc).reduce(
      (acc, curr) => acc + curr.statVal,
      0
    );
  }, [calculateScoreMisc]);

  const Score = useMemo(() => {
    if (scoreVal >= 43.5) return "OP";
    if (scoreVal >= 42.0) return "SSS+";
    if (scoreVal >= 38.5) return "SSS";
    if (scoreVal >= 36.0) return "SS+";
    if (scoreVal >= 33.5) return "SS";
    if (scoreVal >= 31.0) return "S+";
    if (scoreVal >= 28.5) return "S";
    if (scoreVal >= 26.0) return "A+";
    if (scoreVal >= 23.5) return "A";
    if (scoreVal >= 21.0) return "B+";
    if (scoreVal >= 18.5) return "B";
    if (scoreVal >= 16.0) return "C+";
    if (scoreVal >= 13.5) return "C";
    if (scoreVal >= 11.0) return "D+";
    if (scoreVal >= 8.5) return "D";
    if (scoreVal >= 4.0) return "D-";
    if (scoreVal < 4.0) return "Trash";
    return "";
  }, [scoreVal]);

  useEffect(() => {
    setScoreMisc(calculateScoreMisc);
  }, [calculateScoreMisc]);

  return Score;
}
