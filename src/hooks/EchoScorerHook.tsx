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
  const { ScorerWeight } = useScorerContext();
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

  const valCalc = useCallback(
    (stat: number, statName: string) => {
      const st = Object.values(WWSubstats).find((s) => s.name === statName);
      const prefStat = WWCharaBuilds.find(
        (pre) => pre.charaId === selectedCharacterId
      )?.preferedSubStats.includes(statName.replace("%", ""));

      if (!st) {
        return 0;
      }

      const index = st.rolls.indexOf(stat);

      if (index === -1) {
        return 0;
      }

      let score = index + 1 + (prefStat ? 6 : 0);

      if (index === st.rolls.length - 1 && prefStat) {
        score += 2;
      }

      console.log("Score", {
        statName: statName,
        score: score,
      });
      return score;
    },
    [WWSubstats, selectedCharacterId]
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
    if (scoreVal >= 50) return "OP";
    if (scoreVal >= 47.5) return "SSS+";
    if (scoreVal >= 45) return "SSS";
    if (scoreVal >= 40.5) return "SS+";
    if (scoreVal >= 40) return "SS";
    if (scoreVal >= 37.5) return "S+";
    if (scoreVal >= 35) return "S";
    if (scoreVal >= 32.5) return "A+";
    if (scoreVal >= 30) return "A";
    if (scoreVal >= 27.5) return "B+";
    if (scoreVal >= 25) return "B";
    if (scoreVal >= 22.5) return "C+";
    if (scoreVal >= 20) return "C";
    if (scoreVal >= 17.5) return "D+";
    if (scoreVal >= 15) return "D";
    if (scoreVal >= 12.5) return "D";
    if (scoreVal < 10) return "Trash";
    return "";
  }, [scoreVal]);

  useEffect(() => {
    console.log("Score Val", scoreVal);
  }, [scoreVal]);

  // Update the state only when necessary
  useEffect(() => {
    setScoreMisc(calculateScoreMisc);
  }, [calculateScoreMisc]);

  return Score;
}
