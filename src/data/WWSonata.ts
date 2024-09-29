export interface WWSonata {
    name: string;
    id: number;
    img: string;
    twoPiece: string;
    fivePiece: string
    twoPieceEffect: {stat: string, value: number, stackable: number}
    fivePieceEffect: {stat: string, value: number, stackable: number}
}

export const WWSonataData: WWSonata[] = [
  {
    name: "Freezing Frost",
    id: 1,
    img: "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_sonata/Icon_Freezing_Frost.webp",
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
    img: "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_sonata/Icon_Molten_Rift.webp",
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
    img: "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_sonata/Icon_Void_Thunder.webp",
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
    img: "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_sonata/Icon_Sierra_Gale.webp",
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
    img: "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_sonata/Icon_Celestial_Light.webp",
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
    img: "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_sonata/Icon_Sun-sinking_Eclipse.webp",
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
    img: "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_sonata/Icon_Rejuvenating_Glow.webp",
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
    img: "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_sonata/Icon_Moonlit_Clouds.webp",
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
    img: "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_sonata/Icon_Lingering_Tunes.webp",
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
  }
]