import {
  CriticalSkillDamageCalc,
  SkillDamageCalc,
} from "../CalculateSkillDamge";

export function ThreeValueCalc(converted: string[]) {
  let Damage1 = 0;
  let Damage2 = 0;
  let Format = "";
  let CritFormat = "";
  const val = parseFloat(converted[0]);
  const val2 = parseFloat(converted[1]);
  const val3 = parseFloat(converted[2]);
  if (
    converted[0].includes(".") &&
    converted[1]?.includes(".") &&
    converted[2]?.includes(".")
  ) {
    // Val + Val + Val
    Damage1 =
      SkillDamageCalc(val) + SkillDamageCalc(val2) + SkillDamageCalc(val3);
    Damage2 =
      CriticalSkillDamageCalc(val) +
      CriticalSkillDamageCalc(val2) +
      CriticalSkillDamageCalc(val3);
    Format = `${Math.floor(SkillDamageCalc(val))} + ${Math.floor(
      SkillDamageCalc(val2)
    )} + ${Math.floor(SkillDamageCalc(val3))}`;
    CritFormat = `${Math.floor(CriticalSkillDamageCalc(val))} + ${Math.floor(
      CriticalSkillDamageCalc(val2)
    )} + ${Math.floor(CriticalSkillDamageCalc(val3))}`;
  } else if (
    converted[0].includes(".") &&
    parseFloat(converted[1]) < 20 &&
    !converted[1]?.includes(".") &&
    converted[2]?.includes(".")
  ) {
    // Val * Multi + Val
    Damage1 = SkillDamageCalc(val) * val2 + SkillDamageCalc(val3);
    Damage2 =
      CriticalSkillDamageCalc(val) * val2 + CriticalSkillDamageCalc(val3);
    Format = `${Math.floor(SkillDamageCalc(val))} * ${val2} + ${Math.floor(
      SkillDamageCalc(val3)
    )}`;
    CritFormat = `${Math.floor(
      CriticalSkillDamageCalc(val)
    )} * ${val2} + ${Math.floor(CriticalSkillDamageCalc(val3))}`;
  } else if (
    converted[0].includes(".") &&
    parseFloat(converted[2]) < 20 &&
    !converted[2]?.includes(".") &&
    converted[1]?.includes(".")
  ) {
    // Val + Val * Multi
    Damage1 = SkillDamageCalc(val) + SkillDamageCalc(val2) * val3;
    Damage2 =
      CriticalSkillDamageCalc(val) + CriticalSkillDamageCalc(val2) * val3;
    Format = `${Math.floor(SkillDamageCalc(val))} + ${Math.floor(
      SkillDamageCalc(val2)
    )} + ${val3}`;
    CritFormat = `${Math.floor(CriticalSkillDamageCalc(val))} + ${Math.floor(
      CriticalSkillDamageCalc(val2)
    )} + ${val3}`;
  }

  return { Damage1, Damage2, Format, CritFormat };
}
