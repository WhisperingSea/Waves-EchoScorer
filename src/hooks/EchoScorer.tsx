import { useCallback, useState, useMemo, useEffect } from "react";
import { useEchoes } from "../contexts/CalcEchoContext";
import { WWSubstats } from "../data/WWEchoStats";
import { useScorerContext } from "../contexts/ScorerContext";

interface ScoreMisc {
  [key: number]: { statVal: number };
}

export function EchoScorerFunction(index: number) {
  const { echoStats } = useEchoes();
  const { ScorerWeight, cost1Main, cost3Main, cost4Main } = useScorerContext();
  const [scoreMisc, setScoreMisc] = useState<ScoreMisc>({
    1: { statVal: 0 },
    2: { statVal: 0 },
    3: { statVal: 0 },
    4: { statVal: 0 },
    5: { statVal: 0 },
  });

  const valCalc = useCallback(
    (stat: number, minStat: number, maxStat: number) => {
      if (
        !echoStat.selectedSubStat1.stat.includes("%") ||
        !echoStat.selectedSubStat2.stat.includes("%") ||
        !echoStat.selectedSubStat3.stat.includes("%") ||
        !echoStat.selectedSubStat4.stat.includes("%") ||
        !echoStat.selectedSubStat5.stat.includes("%")
      ) {
        return ((stat - minStat) / (maxStat - minStat)) * (5 - 2) + 2;
      } else {
        return ((stat - minStat) / (maxStat - minStat)) * (5 - 1) + 1;
      }
    },
    []
  );

  const echoStat = useMemo(
    () => Object.values(echoStats)[index - 1],
    [echoStats, index]
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
          const weight =
            weights.find((i) => i.stat === subStat.stat)?.value || 0;
          const stat = subStat.value;
          const minStat =
            WWSubstats.find((I) => I.name === subStat.stat)?.min || 0;
          const maxStat =
            WWSubstats.find((I) => I.name === subStat.stat)?.max || 0;
          const mainStat =
            (echoStat.cost === 4 && cost4Main?.includes(echoStat.mainStat)) ||
            (echoStat.cost === 3 && cost3Main?.includes(echoStat.mainStat)) ||
            (echoStat.cost === 1 && cost1Main?.includes(echoStat.mainStat))
              ? 2
              : 0;

          const val = valCalc(stat, minStat, maxStat);
          const finalValue = weight * val + mainStat;

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
    if (scoreVal >= 30) return "SSS";
    if (scoreVal >= 27.5) return "SS";
    if (scoreVal >= 25) return "S";
    if (scoreVal >= 22.5) return "A+";
    if (scoreVal >= 20) return "A";
    if (scoreVal >= 17.5) return "B+";
    if (scoreVal >= 15) return "B";
    if (scoreVal >= 12.5) return "C+";
    if (scoreVal >= 10) return "C";
    if (scoreVal >= 7.5) return "D+";
    if (scoreVal < 5) return "D";
    return "";
  }, [scoreVal]);

  // Update the state only when necessary
  useEffect(() => {
    setScoreMisc(calculateScoreMisc);
  }, [calculateScoreMisc]);

  return Score;
}
