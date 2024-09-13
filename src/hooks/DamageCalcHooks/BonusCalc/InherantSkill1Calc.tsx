import { useDataContext } from "../../../contexts/CharacterDataContext";

export function InherantSkillCalc1() {
  const { selectedCharacterId } = useDataContext();

  switch (selectedCharacterId) {
    case 1001:
      return { Buff: "Resonating Echoes", Value: 60 };
    case 1002:
      return { Buff: "Havoc Damage Bonus", Value: 20 };
    case 1101:
      return { Buff: "ATK", Value: 15 };
    case 1102:
      return { Buff: "Resonance Skill Damage Bonus", Value: 20 };
    case 1103:
      return { Buff: "Intro Skill", Value: 50 };
    case 1104:
      return { Buff: "ATK", Value: 6 };
    case 1201:
      return { Buff: "Damage Bonus", Value: 10 };
    case 1202:
      return { Buff: "Boom Boom", Value: 50 };
    case 1203:
      return { Buff: "Fury Fugue", Value: 25 };
    case 1204:
      return { Buff: "Multi Skill Bonus", Value: 20 };
    case 1301:
      return { Buff: "Resonance Liberation Damage Bonus", Value: 10 };
    case 1302:
      return { Buff: "Crit. Rate", Value: 15 };
    case 1303:
      return { Buff: "Thunder Uprising", Value: 40 };
    case 1401:
      return { Buff: "Resonance Liberation Damage Bonus", Value: 20 };
    case 1402:
      return { Buff: "", Value: 0 };
    case 1403:
      return { Buff: "", Value: 0 };
    case 1404:
      return { Buff: "ATK", Value: 10 };
    case 1501:
      return { Buff: "", Value: 0 };
    case 1502:
      return { Buff: "Spectro Damage Bonus", Value: 20 };
    case 1601:
      return { Buff: "DEF", Value: 15 };
    case 1602:
      return { Buff: "Crimson Erosion", Value: 20 };
    case 1:
      return { Buff: "", Value: 0 };
  }
}
