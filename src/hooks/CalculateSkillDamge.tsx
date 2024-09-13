import { useCalcSkillValue } from "../contexts/CalcSkillValueContext";

export function SkillDamageCalc(SkillMulti: number) {
  const { Attack, ElementDamageBonus, EnemyRes } = useCalcSkillValue();
  const SkillScalingBonus = 0;
  const BonusSkillDamage = 0;
  const TotalDeepen = 0;
  const SkillDamage =
    Attack *
    (SkillMulti * (1 + SkillScalingBonus)) *
    (1 + ElementDamageBonus / 100 + BonusSkillDamage) *
    (1 + TotalDeepen) *
    EnemyRes;

  return SkillDamage;
}

export function CriticalSkillDamageCalc(SkillMulti: number) {
  const { Attack, ElementDamageBonus, EnemyRes, CriticalDamage } =
    useCalcSkillValue();
  const SkillScalingBonus = 0;
  const BonusSkillDamage = 0;
  const TotalDeepen = 0;
  const BonusCritDamage = 0;
  const SkillDamage =
    Attack *
    (SkillMulti * (1 + SkillScalingBonus)) *
    (1 + ElementDamageBonus / 100 + BonusSkillDamage) *
    (1 + TotalDeepen) *
    ((CriticalDamage + BonusCritDamage) / 100) *
    EnemyRes;

  return SkillDamage;
}
