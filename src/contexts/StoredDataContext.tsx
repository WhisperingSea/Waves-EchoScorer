interface CharacterTypes {
  Name: string;
  ID: number;
  SaveID: number;
  Stats?: {
    Attack: number;
    HP: number;
    DEF: number;
    Crit: number;
    CritDmg: number;
    Heal: number;
    EleDmgBonus: number;
    BasicAttackBonus: number;
    HeavyAttackBonus: number;
    ResonanceSkillBonus: number;
    ResonanceLiberationBonus: number;
    IntroBonus: number;
  };
  Weapon?: {
    ATK: number;
    SecondaryStat: string;
    SecondaryStatValue: number;
  };
  Forte: {
    BasicAattackLevel: number;
    ResonanceSkillLevel: number;
    ResonanceLiberationLevel: number;
    ForteCiruitLevel: number;
    IntroSkillLevel: number;
  };
  Echo?: {
    [key: number]: {
      id: number;
      name: string;
      cost: number;
      mainStat: string;
      mainStatValue: number;
      selectedSubStat1: { stat: string; value: number };
      selectedSubStat2: { stat: string; value: number };
      selectedSubStat3: { stat: string; value: number };
      selectedSubStat4: { stat: string; value: number };
      selectedSubStat5: { stat: string; value: number };
    };
  }[];
  SkillModifiers?: {
    Forte: {
      [key: number]: {
        Stat: string;
        Checked: false;
      };
    };
  };
  SonataEffect: {
    Sonata1: false;
    Sonata2: false;
  };
}
