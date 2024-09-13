import {
  CriticalSkillDamageCalc,
  SkillDamageCalc,
} from "../CalculateSkillDamge";

export function TwoValueCalc(converted: string, converted1: string) {
  const val = parseFloat(converted);
  const val2 = parseFloat(converted1);
  let Damage1 = 0;
  let Damage2 = 0;
  let Format = "";
  let CritFormat = "";
  if (converted1.includes(".") && converted.includes(".")) {
    // Val + Val
    Damage1 = SkillDamageCalc(val) + SkillDamageCalc(val2);
    Damage2 = CriticalSkillDamageCalc(val) + CriticalSkillDamageCalc(val2);
    Format = `${Math.round(SkillDamageCalc(val))} + ${Math.round(
      SkillDamageCalc(val2)
    )}`;
    CritFormat = `${Math.round(CriticalSkillDamageCalc(val))} + ${Math.round(
      CriticalSkillDamageCalc(val2)
    )}`;
  } else if (parseFloat(converted) === 1 && converted1.includes(".")) {
    // Val + Val
    Damage1 = SkillDamageCalc(val) + SkillDamageCalc(val2);
    Damage2 = CriticalSkillDamageCalc(val) + CriticalSkillDamageCalc(val2);
    Format = `${Math.round(SkillDamageCalc(val))} + ${Math.round(
      SkillDamageCalc(val2)
    )}`;
    CritFormat = `${Math.round(CriticalSkillDamageCalc(val))} + ${Math.round(
      CriticalSkillDamageCalc(val2)
    )}`;
  } else if (parseFloat(converted) === 1 && !converted1.includes(".")) {
    // Val + Val
    Damage1 = SkillDamageCalc(val) * val2;
    Damage2 = CriticalSkillDamageCalc(val) * val2;
    Format = `${Math.round(SkillDamageCalc(val))} * ${val2}`;
    CritFormat = `${Math.round(CriticalSkillDamageCalc(val))} * ${val2}`;
  } else if (
    converted.includes(".") &&
    parseFloat(converted1) < 20 &&
    !converted1.includes(".")
  ) {
    // Val * Multi
    Damage1 = SkillDamageCalc(val) * val2;
    Damage2 = CriticalSkillDamageCalc(val) * val2;
    Format = `${Math.round(SkillDamageCalc(val))} * ${val2}`;
    CritFormat = `${Math.round(CriticalSkillDamageCalc(val))} * ${val2}`;
  } else if (
    parseFloat(converted) > 20 &&
    !converted.includes(".") &&
    converted1.includes(".")
  ) {
    // ValFlat + Val
    Damage1 = val + SkillDamageCalc(val2);
    Damage2 = val + CriticalSkillDamageCalc(val2);
    Format = `${val} + ${Math.round(SkillDamageCalc(val))}`;
    CritFormat = `${val} + ${Math.round(CriticalSkillDamageCalc(val))}`;
  }

  return { Damage1, Damage2, Format, CritFormat };
}
