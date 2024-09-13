import {
  CriticalSkillDamageCalc,
  SkillDamageCalc,
} from "../CalculateSkillDamge";

export function OneValueCalc(converted: string) {
  // Val
  const val = parseFloat(converted);

  // Calculate values
  const Damage1 = SkillDamageCalc(val);
  const Damage2 = CriticalSkillDamageCalc(val);

  // Format string
  const Format = `${Math.round(Damage1)}`;
  const CritFormat = `${Math.round(Damage2)}`;

  return { Damage1, Damage2, Format, CritFormat };
}
