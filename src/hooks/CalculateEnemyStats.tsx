import { useEffect, useState } from "react";
import { useEnemyStats } from "../contexts/CalcEnemyStatsContext";
import { useDataContext } from "../contexts/CharacterDataContext";

export function EnemyResistaneCalc() {
  const { level } = useDataContext();
  const { EnemyLevel, EnemyEleRes, EnemyDefIgnore } = useEnemyStats();
  const [TotalRes, setTotalRes] = useState(0);
  const [TotalDef, setTotalDef] = useState(0);

  useEffect(() => {
    const ResPen = 0;
    const BaseRes = EnemyEleRes + ResPen;

    setTotalRes(BaseRes);
  });

  useEffect(() => {
    const BaseDef = 8 * EnemyLevel + 792;
    const BaseAttacker = 800 + 8 * (level as number);
    let DefIgnore = 0;

    if (EnemyDefIgnore !== 0) {
      DefIgnore = EnemyDefIgnore;
    }

    const DefMulti =
      BaseAttacker / ((BaseAttacker + BaseDef) * (1 - DefIgnore));

    setTotalDef(DefMulti);
  });

  const finalValue = TotalDef * (1 - TotalRes);
  return finalValue;
}
