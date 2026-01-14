export interface WWSonata {
    name: string;
    id: number;
    img: string;
    twoPiece?: string
    fivePiece?: string
    threePiece?: string
    twoPieceEffect?: {stat: string, value: number, stackable: number}
    fivePieceEffect?: {stat: string, value: number, stackable: number}
    threePieceEffect?: {stat: string, value: number, stackable: number}
}

export const enum SonataId {
  FreezingFrost = 1,
  MoltenRift = 2,
  VoidThunder = 3,
  SierraGale = 4,
  CelestialLight = 5,
  SunSinkingEclipse = 6,
  RejuvenatingGlow = 7,
  MoonlitClouds = 8,
  LingeringTunes = 9,
  FrostyResolve = 10,
  EternalRadiance = 11,
  MidnightVeil = 12,
  EmpyreanAnthem = 13,
  TidebreakingCourage = 14,
  GustOfWelkin = 15,
  WindwardPilgrimage = 16,
  FlamingClawprint = 17,
  DreamOfTheLost = 18,
  CrownOfValor = 19,
  LawOfHarmony = 20,
  FlamewingsShadow = 21,
  ThreadOfSeveredFate = 22,
  PactOfNeonlightLeap = 23,
  HaloOfStarryRadiance = 24,
  RiteOfGildedRevelation = 25
}

export const WWSonataData: WWSonata[] = [
  {
    name: "Freezing Frost",
    id: 1,
    img: "sonata-icons/1.webp",
    twoPiece: "Glacio damage increased by 10%",
    fivePiece: "When releasing Basic Attack or Heavy Attack, Glacio damage is increased by 10%, stacking up to three times, lasting for 15 seconds",
    twoPieceEffect: {
      stat: "Glacio Damage Bonus",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "Glacio Damage Bonus",
      value: 10,
      stackable: 3
    },
  },
  {
    name: "Molten Rift",
    id: 2,
    img: "sonata-icons/2.webp",
    twoPiece: "Fusion damage is increased by 10%",
    fivePiece: "When releasing Resonance Skill, Fusion damage is increased by 30% for 15s",
    twoPieceEffect: {
      stat: "Fusion Damage Bonus",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "Fusion Damage Bonus",
      value: 30,
      stackable: 0
    },
  },
  {
    name: "Void Thunder",
    id: 3,
    img: "sonata-icons/3.webp",
    twoPiece: "Electro damage is increased by 10%",
    fivePiece: "When releasing Heavy Attack or Resonance Skill, Electro damage dealt is increased by 15%, stacking up to two times, each lasting for 15 seconds",
    twoPieceEffect: {
      stat: "Electro Damage Bonus",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "Electro Damage Bonus",
      value: 15,
      stackable: 2
    },
  },
  {
    name: "Sierra Gale",
    id: 4,
    img: "sonata-icons/4.webp",
    twoPiece: "Aero DMG increased by 10%",
    fivePiece: "Aero DMG is increased by 30% for 15 seconds when Intro Skill is used",
    twoPieceEffect: {
      stat: "Aero Damage Bonus",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "Aero Damage Bonus",
      value: 30,
      stackable: 0
    },
  },
  {
    name: "Celestial Light",
    id: 5,
    img: "sonata-icons/5.webp",
    twoPiece: "Spectro DMG is increased by 10%",
    fivePiece: "Increases Spectro damage by 30% over 15s when releasing Intro Skill",
    twoPieceEffect: {
      stat: "Spectro Damage Bonus",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "Spectro Damage Bonus",
      value: 30,
      stackable: 0
    },
  },
  {
    name: "Sun-sinking Eclipse",
    id: 6,
    img: "sonata-icons/6.webp",
    twoPiece: "Havoc DMG is increased by 10%",
    fivePiece: "When releasing Basic Attack or Heavy Attack, Havoc DMG is increased by 7.5%, stacking up to four times for 15 seconds",
    twoPieceEffect: {
      stat: "Havoc Damage Bonus",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "Havoc Damage Bonus",
      value: 7.5,
      stackable: 4
    },
  },
  {
    name: "Rejuvenating Glow",
    id: 7,
    img: "sonata-icons/7.webp",
    twoPiece: "Healing is increased by 10%",
    fivePiece: " When healing allies, ATK for the entire team is increased by 15%, lasting 30s",
    twoPieceEffect: {
      stat: "Healing Bonus",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "ATK",
      value: 15,
      stackable: 0
    },
  },
  {
    name: "Moonlit Clouds",
    id: 8,
    img: "sonata-icons/8.webp",
    twoPiece: "Energy Regen increased by 10%",
    fivePiece: "After using Outro Skill, the ATK of the next Resonator is increased by 22.5% for 15 seconds",
    twoPieceEffect: {
      stat: "Energy Regen",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "ATK",
      value: 22.5,
      stackable: 0
    },
  },
  {
    name: "Lingering Tunes",
    id: 9,
    img: "sonata-icons/9.webp",
    twoPiece: "ATK increases by 10%",
    fivePiece: "When in effect, your ATK increases by 5% every 1.5 seconds, stacking up to four times. Outro Skill DMG is increased by 60%",
    twoPieceEffect: {
      stat: "ATK",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "ATK",
      value: 5,
      stackable: 4
    },
  },
  {
    name: "Frosty Resolve",
    id: 10,
    img: "sonata-icons/10.webp",
    twoPiece: "Resonance Skill DMG increases by 12%",
    fivePiece: "Casting Resonance Skill grants 22.5% Glacio DMG Bonus for 15s and casting Resonance Liberation increases Resonance Skill DMG by 18%, lasting for 5s. This effect stacks up to 2 times.",
    twoPieceEffect: {
      stat: "Resonance Skill DMG Bonus", //??
      value: 12,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "Glacio DMG Bonus", //?
      value: 22.5,
      stackable: 2
    },
  },
  {
    name: "Eternal Radiance",
    id: 11,
    img: "sonata-icons/11.webp",
    twoPiece: "Spectro DMG Bonus increases by 10%",
    fivePiece: "Inflicting enemies with Spectro Frazzle increases Crit. Rate by 20% for 15s. Attacking enemies with 10 stacks of Spectro Frazzle grants 15% Spectro DMG Bonus for 15s.",
    twoPieceEffect: {
      stat: "Spectro DMG Bonus",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "Crit Rate%", //?
      value: 20,
      stackable: 0
    },
  },
  {
    name: "Midnight Veil",
    id: 12,
    img: "sonata-icons/12.webp",
    twoPiece: "Havoc DMG Bonus increases by 10%",
    fivePiece: "When Outro Skill is triggered, deal additional 480% Havoc DMG to surrounding enemies, and grants the incoming Resonator 15% Havoc DMG Bonus for 15s.",
    twoPieceEffect: {
      stat: "Havoc DMG Bonus",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "Havoc DMG Bonus",
      value: 15,
      stackable: 0
    },
  },
  {
    name: "Empyrean Anthem",
    id: 13,
    img: "sonata-icons/13.webp",
    twoPiece: "Energy Regen increases by 10%",
    fivePiece: "Increase the Resonator's Coordinated Attack DMG by 80%. Upon a critical hit of Coordinated Attack, increase the active Resonator's ATK by 20% for 4s.",
    twoPieceEffect: {
      stat: "Energy Regen",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "ATK",
      value: 20,
      stackable: 0
    },
  },
  {
    name: "Tidebreaking Courage",
    id: 14,
    img: "sonata-icons/14.webp",
    twoPiece: "Energy Regen increases by 10%",
    fivePiece: "Increase the Resonator's ATK by 15%. Reaching 250% Energy Regen increases all Attribute DMG by 30% for the Resonator.",
    twoPieceEffect: {
      stat: "Energy Regen",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "ATK",
      value: 15,
      stackable: 0
    },
  },
  {
    name: "Gust of Welkin",
    id: 15,
    img: "sonata-icons/15.webp",
    twoPiece: "Aero DMG increases by 10%",
    fivePiece: "Inflicting Aero Erosion on enemies increases Aero DMG for all Resonators in the team by 15%, and for the Resonator triggering this effect by an additional 15%, lasting for 20s.",
    twoPieceEffect: {
      stat: "Aero DMG Bonus",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "Aero DMG Bonus",
      value: 15,
      stackable: 0
    },
  },
  {
    name: "Windward Pilgrimage",
    id: 16,
    img: "sonata-icons/16.webp",
    twoPiece: "Aero DMG increases by 10%",
    fivePiece: "Hitting a target with Aero Erosion increases Crit. Rate by 10% and grants 30% Aero DMG Bonus, lasting for 10s.",
    twoPieceEffect: {
      stat: "Aero DMG Bonus",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "Aero DMG Bonus",
      value: 15,
      stackable: 0
    },
  },
  {
    name: "Flaming Clawprint",
    id: 17,
    img: "sonata-icons/17.webp",
    twoPiece: "Fusion DMG increases by 10%",
    fivePiece: "Casting Resonance Liberation grants all Resonators in the team 15% Fusion DMG Bonus and the caster 20% Resonance Liberation DMG Bonus, lasting for 35s.",
    twoPieceEffect: {
      stat: "Fusion DMG Bonus",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "Fusion DMG Bonus",
      value: 15,
      stackable: 0
    },
  },
  {
    name: "Dream of the Lost",
    id: 18,
    img: "sonata-icons/18.webp",
    threePiece: "Holding 0 Resonance Energy increases Crit. Rate by 20% and grants 35% Echo Skill DMG Bonus.",
    threePieceEffect: {
      stat: "Crit Rate%",
      value: 20,
      stackable: 0
    }
  },
  {
    name: "Crown of Valor",
    id: 19,
    img: "sonata-icons/19.webp",
    threePiece: "Upon gaining a Shield, increase the Resonator's ATK by 6% and Crit. DMG by 4% for 4s. This effect can be triggered once every 0.5s and stacks up to 5 times.",
    threePieceEffect: {
      stat: "",
      value: 0,
      stackable: 5
    }
  },
  {
    name: "Law of Harmony",
    id: 20,
    img: "sonata-icons/20.webp",
    threePiece: `Casting Echo Skill grants 30% Heavy Attack DMG Bonus to the caster for 4s.\n
    Additionally, all Resonators in the team gain 4% Echo Skill DMG Bonus for 30s, stacking up to 4 times. Echoes of the same name can only trigger this effect once. The record of Echo triggering this effect is cleared along with this effect. At 4 stacks, casting Echo Skill again resets the duration of this effect.`,
    threePieceEffect: {
      stat: "",
      value: 0,
      stackable: 0
    }
  },
  {
    name: "Flamewing's Shadow",
    id: 21,
    img: "sonata-icons/21.webp",
    threePiece: "Dealing Echo Skill DMG increases Heavy Attack Crit. Rate by 20% for 6s. Dealing Heavy Attack DMG increases Echo Skill Crit. Rate by 20% for 6s. While both effects are active, gain 16% Fusion DMG Bonus.",
    threePieceEffect: {
      stat: "",
      value: 0,
      stackable: 0
    }
  },
  {
    name: "Thread of Severed Fate",
    id: 22,
    img: "sonata-icons/22.webp",
    threePiece: "Inflicting Havoc Bane increases the Resonator's ATK by 20% and grants 30% Resonance Liberation DMG Bonus for 5s.",
    threePieceEffect: {
      stat: "",
      value: 0,
      stackable: 0
    }
  },
  {
    name: "Pact of Neonlight Leap",
    id: 23,
    img: "sonata-icons/23.webp",
    twoPiece: "Spectro DMG increases by 10%",
    fivePiece: "Casting Outro Skill increases the ATK of the incoming Resonator who casts Intro Skill by 15%. Each point of Tune Break Boost the incoming Resonator has additionally increases their ATK by 0.3%, up to 15%. This effect lasts for 15s, or until the Resonator is switched out.",
    twoPieceEffect: {
      stat: "Spectro DMG Bonus",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "ATK",
      value: 15,
      stackable: 0
    }
  },
  {
    name: "Halo of Starry Radiance",
    id: 24,
    img: "sonata-icons/24.webp",
    twoPiece: "Healing Bonus increased by 10%",
    fivePiece: "When healing a Resonator in the team, every 1% of Off-Tune Buildup Rate grants a 0.2% ATK increase to all Resonators in the team for 4s, up to 25%. Effects of the same name cannot be stacked.",
    twoPieceEffect: {
      stat: "Healing Bonus",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "ATK",
      value: 0.2,
      stackable: 0
    }
  },
  {
    name: "Rite of Gilded Revelation",
    id: 25,
    img: "sonata-icons/25.webp",
    twoPiece: "Spectro DMG increases by 10%",
    fivePiece: "Dealing Basic Attack DMG increases Spectro DMG by 10% for 5s, stacking up to 3 times. With 3 stacks, casting Resonance Liberation grants 40% Basic Attack DMG Bonus.",
    twoPieceEffect: {
      stat: "Spectro DMG Bonus",
      value: 10,
      stackable: 0
    },
    fivePieceEffect: {
      stat: "",
      value: 0,
      stackable: 0
    }
  }
]