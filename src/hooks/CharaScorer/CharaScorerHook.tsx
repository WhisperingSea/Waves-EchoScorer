import { useEchoes } from "../../contexts/CalcEchoContext";
import { WWSubstats } from "../../data/WWEchoStats";

export function OccuranceVal(stat: string) {
  const { echoStats } = useEchoes();
  const subStats = WWSubstats;

  const getSubstats = (i: number) => {
    return [
      echoStats[i].selectedSubStat1,
      echoStats[i].selectedSubStat2,
      echoStats[i].selectedSubStat3,
      echoStats[i].selectedSubStat4,
      echoStats[i].selectedSubStat5,
    ];
  };

  let statOccurrence = 0;

  for (let i = 1; i < 6; i++) {
    const subStatsList = getSubstats(i);

    subStatsList.forEach((subStat) => {
      if (subStat.stat.includes(stat)) {
        const sub = subStats.find((s) => s.name === stat);

        const val = subStat.value;
        const subVal = sub ? sub.rolls.indexOf(val) + 1 : 0;

        statOccurrence += subVal;
      }
    });
  }

  return statOccurrence;
}
