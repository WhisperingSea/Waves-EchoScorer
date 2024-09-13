import { useDataContext } from "../../../contexts/CharacterDataContext";

export function InherantSkillCalc2() {
  const { selectedCharacterId } = useDataContext();

  switch (selectedCharacterId) {
    case 1001:
      return { Buff: "ATK", Value: 15 };
    case 1002:
      return { Buff: "", Value: 0 };
    case 1101:
      return { Buff: "", Value: 0 };
    case 1102:
      return { Buff: "Burst", Value: 20 };
    case 1103:
      return { Buff: "Inherent Skill: Diligent Practice", Value: 150 };
    case 1201:
      return { Buff: "Fusion Damage Bonus", Value: 20 };
    case 1202:
      return { Buff: "ATK", Value: 1 };
    case 1203:
      return { Buff: "Marcato", Value: 1.5 };
    case 1204:
      return {
        Buff: "Multi Skill Bonus",
        Value: 20,
        Buff2: "Def Ignore",
        Value2: 15,
      };
    case 1301:
      return { Buff: "", Value: 0 };
    case 1302:
      return {
        Buff: "Lightning Execution",
        Value: 10,
        Buff2: "ATK",
        Value2: 10,
      };
    case 1303:
      return { Buff: "", Value: 0 };
    case 1401:
      return { Buff: "Shield", Value: 20 };
    case 1402:
      return { Buff: "Aero Damage Bonus", Value: 8 };
    case 1403:
      return { Buff: "", Value: 0 };
    case 1404:
      return { Buff: "Crit. Damage", Value: 12 };
    case 1501:
      return { Buff: "ATK", Value: 20 };
    case 1502:
      return { Buff: "Intro Skill", Value: 50 };
    case 1601:
      return { Buff: "", Value: 0 };
    case 1602:
      return { Buff: "Heavy Attack Damage Bonus", Value: 30 };
    case 1:
      return { Buff: "", Value: 0 };
  }
}
