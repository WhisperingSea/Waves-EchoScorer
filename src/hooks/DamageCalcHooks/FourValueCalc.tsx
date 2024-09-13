import {
  CriticalSkillDamageCalc,
  SkillDamageCalc,
} from "../CalculateSkillDamge";

export function FourValueCalc(converted: string[]) {
  const val = parseFloat(converted[0]);
  const val2 = parseFloat(converted[1]);
  const val3 = parseFloat(converted[2]);
  const val4 = parseFloat(converted[3]);
  let Damage1 = 0;
  let Damage2 = 0;
  let Format = "";
  let CritFormat = "";
  if (
    converted[0].includes(".") &&
    converted[1]?.includes(".") &&
    converted[2]?.includes(".") &&
    converted[3]?.includes(".")
  ) {
    // Val + Val + Val + Val
    Damage1 =
      SkillDamageCalc(val) +
      SkillDamageCalc(val2) +
      SkillDamageCalc(val3) +
      SkillDamageCalc(val4);
    Damage2 =
      CriticalSkillDamageCalc(val) +
      CriticalSkillDamageCalc(val2) +
      CriticalSkillDamageCalc(val3) +
      CriticalSkillDamageCalc(val4);
  } else if (
    converted[0].includes(".") &&
    parseFloat(converted[1]) < 20 &&
    !converted[1]?.includes(".") &&
    converted[2]?.includes(".") &&
    converted[3]?.includes(".")
  ) {
    // Val * Multi + Val + Val
    Damage1 =
      SkillDamageCalc(val) * val2 +
      SkillDamageCalc(val3) +
      SkillDamageCalc(val4);
    Damage2 =
      CriticalSkillDamageCalc(val) * val2 +
      CriticalSkillDamageCalc(val3) +
      CriticalSkillDamageCalc(val4);
  } else if (
    converted[0].includes(".") &&
    converted[1]?.includes(".") &&
    parseFloat(converted[2]) < 20 &&
    !converted[2]?.includes(".") &&
    converted[3]?.includes(".")
  ) {
    // Val + Val * Multi + Val
    Damage1 =
      SkillDamageCalc(val) +
      SkillDamageCalc(val2) * val3 +
      SkillDamageCalc(val4);
    Damage2 =
      CriticalSkillDamageCalc(val) +
      CriticalSkillDamageCalc(val2) * val3 +
      CriticalSkillDamageCalc(val4);
  } else if (
    converted[0].includes(".") &&
    converted[1]?.includes(".") &&
    converted[2]?.includes(".") &&
    parseFloat(converted[3]) < 20 &&
    !converted[3]?.includes(".")
  ) {
    // Val + Val + Val * Multi
    Damage1 =
      SkillDamageCalc(val) +
      SkillDamageCalc(val2) +
      SkillDamageCalc(val4) * val3;
    Damage2 =
      CriticalSkillDamageCalc(val) +
      CriticalSkillDamageCalc(val2) +
      CriticalSkillDamageCalc(val4) * val3;
  } else if (
    converted[0].includes(".") &&
    parseFloat(converted[1]) < 20 &&
    !converted[1]?.includes(".") &&
    converted[2]?.includes(".") &&
    parseFloat(converted[3]) < 20 &&
    !converted[3]?.includes(".")
  ) {
    // Val * Multi + Val * Multi
    Damage1 = SkillDamageCalc(val) * val2 + SkillDamageCalc(val3) * val4;
    Damage2 =
      CriticalSkillDamageCalc(val) * val2 +
      CriticalSkillDamageCalc(val3) * val4;
  }

  return { Damage1, Damage2, Format, CritFormat };
}
