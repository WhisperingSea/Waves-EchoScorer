export interface WWCharaBuildTypes {
    name: string,
    charaId: number;
    buildStats?: {
        [key: string]: {stat: string, value: [number, number?]};
    };
    preferedSonata: number[];
    preferedMainStat1: string[];
    preferedMainStat2: string[];
    preferedMainStat3: string[];
    preferedSubStats: string[];
}

export interface DefaultBuildTypes {
    DPSStats: {
        [key: string]: {stat: string, hpScale: number, atkScale: number, defScale: number},
    },
    SubDPSStats: {
        [key: string]: {stat: string, hpScale: number, atkScale: number, defScale: number}
    },
    SupportStats: {
        [key: string]: {stat: string, hpScale: number, atkScale: number, defScale: number}
    },
    DpsMainStats: {
        Cost1HP: string[]
        Cost1ATK: string[]
        Cost1DEF: string[]
        Cost3HP: string[]
        Cost3ATK: string[]
        Cost3DEF: string[]
        Cost4HP: string[]
        Cost4ATK: string[]
        Cost4DEF: string[]
    },
    SubDpsMainStats: {
        Cost1HP: string[]
        Cost1ATK: string[]
        Cost1DEF: string[]
        Cost3HP: string[]
        Cost3ATK: string[]
        Cost3DEF: string[]
        Cost4HP: string[]
        Cost4ATK: string[]
        Cost4DEF: string[]
    }
    SupportMainStats: {
        Cost1HP: string[]
        Cost1ATK: string[]
        Cost1DEF: string[]
        Cost3HP: string[]
        Cost3ATK: string[]
        Cost3DEF: string[]
        Cost4HP: string[]
        Cost4ATK: string[]
        Cost4DEF: string[]
    }
}

export const WWCharaBuilds: WWCharaBuildTypes[] = [
    {
        name: "Rover-Spectro",
        charaId: 1501,
        buildStats: {
            stat1: {stat: "ATK", value: [1700, 2000]},
            stat2: {stat: "HP", value: [15000]},
        },
        preferedSonata: [5, 8, 11],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Spectro DMG Bonus%", "Energy Regen%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Energy Regen%", "Resonance Skill DMG Bonus%", "Resonance Liberation DMG Bonus%"]
    },
    {
        name: "Rover-Havoc",
        charaId: 1604,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [6],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Havoc DMG Bonus%", "ATK%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Resonance Skill DMG Bonus%", "Resonance Liberation DMG Bonus%", "ATK"]
    },
    {
        name: "Baizhi",
        charaId: 1103,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [7],
        preferedMainStat1: ["HP%", "Healing Bonus%"],
        preferedMainStat2: ["Energy Regen%"],
        preferedMainStat3: ["HP%%"],
        preferedSubStats: ["HP%", "Enerhy Regen%", "DEF%", "HP", "DEF"]
    },
    {
        name: "Sanhua",
        charaId: 1102,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [1, 8],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Glacio DMG Bonus%", "Energy Regen", "ATK%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Enerhy Regen%", "Resonance Skill DMG Bonus%", "Resonance Liberation DMG Bonus%", "ATK",]
    },
    {
        name: "Lingyang",
        charaId: 1104,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [1],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Glacio DMG Bonus%", "ATK%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Enerhy Regen%", "Basic Attack DMG Bonus%", "ATK",]
    },
    {
        name: "Zhezhi",
        charaId: 1105,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [1, 7, 8],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%", "Healing Bonus%"],
        preferedMainStat2: ["ATK%", "Energy Regen%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Enerhy Regen%", "ATK",]
    },
    {
        name: "Youhu",
        charaId: 1106,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [1, 8],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Glacio DMG Bonus%", "ATK%", "Energy Regen%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Enerhy Regen%", "Resonance Liberation DMG Bonus%", "ATK",]
    },
    {
        name: "Encore",
        charaId: 1203,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [2],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Fusion DMG Bonus%", "ATK%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Enerhy Regen%", "Basic Attack DMG Bonus%", "Resonance Skill DMG Bonus%", "Resonance Liberation DMG Bonus%", "ATK",]
    },
    {
        name: "Chixia",
        charaId: 1202,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [2, 8],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Fusion DMG Bonus%", "ATK%", "Energy Regen%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Enerhy Regen%", "Resonance Skill DMG Bonus%", "Resonance Liberation DMG Bonus%", "ATK",]
    },
    {
        name: "Mortefi",
        charaId: 1204,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [2, 8],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Fusion DMG Bonus%", "ATK%", "Energy Regen%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Enerhy Regen%", "Resonance Skill DMG Bonus%", "Resonance Liberation DMG Bonus%", "ATK",]
    },
    {
        name: "Changli",
        charaId: 1205,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [2],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Fusion DMG Bonus%", "ATK%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Enerhy Regen%", "Resonance Skill DMG Bonus%", "Resonance Liberation DMG Bonus%", "ATK",]
    },
    {
        name: "Calcharo",
        charaId: 1301,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [3],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Electro DMG Bonus%", "ATK%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Enerhy Regen%", "Basic Attack DMG Bonus%", "Resonance Liberation DMG Bonus%", "ATK",]
    },
    {
        name: "Yinlin",
        charaId: 1302,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [3, 8],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Electro DMG Bonus%", "ATK%", "Energy Regen%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Enerhy Regen%", "Resonance Skill DMG Bonus%", "ATK",]
    },
    {
        name: "Yuanwu",
        charaId: 1303,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [3, 8],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Electro DMG Bonus%", "DEF%", "Energy Regen%"],
        preferedMainStat3: ["DEF%"],
        preferedSubStats: ["DEF%", "Crit. Rate%", "Crit. DMG%", "DEF", "HP%"]
    },
    {
        name: "Xiangli-Yao",
        charaId: 1305,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [3],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Electro DMG Bonus%", "ATK%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Enerhy Regen%", "Resonance Skill DMG Bonus%", "Basic Attack DMG Bonus%", "ATK",]
    },
    {
        name: "Jianxin",
        charaId: 1405,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [4, 8],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Aero DMG Bonus%", "ATK%", "Energy Regen%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Enerhy Regen%", "Heavy Attack DMG Bonus%", "Resonance Skill DMG Bonus%", "ATK",]
    },
    {
        name: "Yangyang",
        charaId: 1402,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [4, 8],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Aero DMG Bonus%", "ATK%", "Energy Regen%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Enerhy Regen%", "Basic Attack DMG Bonus%", "ATK",]
    },
    {
        name: "Aalto",
        charaId: 1403,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [4, 8],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Aero DMG Bonus%", "ATK%", "Energy Regen%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Enerhy Regen%", "ATK",]
    },
    {
        name: "Jiyan",
        charaId: 1404,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [4],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Aero DMG Bonus%", "ATK%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Enerhy Regen%", "Heavy Attack DMG Bonus%", "ATK",]
    },
    {
        name: "Verina",
        charaId: 1503,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [7],
        preferedMainStat1: ["ATK%", "Healing Bonus%"],
        preferedMainStat2: ["ATK%", "Energy Regen%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "HP%", "DEF%", "Enerhy Regen%", "ATK", "DEF", "HP"]
    },
    {
        name: "Jinhsi",
        charaId: 1304,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [5],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Spectro DMG Bonus%", "ATK%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Resonance Skill DMG Bonus%", "ATK",]
    },
    {
        name: "Shorekeeper",
        charaId: 1505,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [7],
        preferedMainStat1: ["HP%", "Healing Bonus%"],
        preferedMainStat2: ["HP%", "Energy Regen%"],
        preferedMainStat3: ["HP%"],
        preferedSubStats: ["HP%", "Energy Regen%", "Crit. DMG%", "Resonance Liberation DMG Bonus%", "HP",]
    },
    {
        name: "Taoqi",
        charaId: 1601,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [6, 8],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Havoc DMG Bonus%", "DEF%", "Energy Regen%"],
        preferedMainStat3: ["DEF%"],
        preferedSubStats: ["ATK%", "HP%", "DEF%", "Enerhy Regen%", "Crit. Rate%", "Crit. DMG%" ]
    },
    {
        name: "Danjin",
        charaId: 1602,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [6, 8],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Havoc DMG Bonus%", "ATK%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["ATK%", "Crit. Rate%", "Crit. DMG%", "Resonance Skill DMG Bonus", "ATK",]
    },
    {
        name: "Camellya",
        charaId: 1603,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [6],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Havoc DMG Bonus%", "ATK%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["Crit. Rate%", "Crit. DMG%", "ATK%", "Basic Attack DMG Bonus%", "ATK", "Resonance Skill DMG Bonus"]
    },
    {
        name: "Lumi",
        charaId: 1504,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [8],
        preferedMainStat1: ["Crit. Rate%", "Crit. DMG%"],
        preferedMainStat2: ["Electro DMG Bonus%", "Energy Regen%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["Crit. Rate%", "Crit. DMG%", "Basic Attack DMG Bonus%", "Energy Regen%", "ATK%", "ATK"]
    },
    {
        name: "Carlotta",
        charaId: 1107,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [10],
        preferedMainStat1: ["Crit. Rate%", "Crit. DMG%"],
        preferedMainStat2: ["Glacio DMG Bonus%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["Crit. Rate%", "Crit. DMG%", "ATK%", "Resonance Skill DMG Bonus%", "ATK"]
    },
    {
        name: "Roccia",
        charaId: 1606,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [8, 12],
        preferedMainStat1: ["Crit. Rate%"],
        preferedMainStat2: ["Havoc DMG Bonus%", "ATK%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["Energy Regen%", "Crit. Rate%", "Crit. DMG%", "ATK%", "Heavy Attack DMG Bonus%", "ATK"]
    },
    {
        name: "Phoebe",
        charaId: 1506,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [11],
        preferedMainStat1: ["Crit. Rate%", "Crit. DMG%"],
        preferedMainStat2: ["Spectro DMG Bonus%", "ATK%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["Crit. Rate%", "Crit. DMG%", "ATK%", "Basic Attack DMG Bonus%", "Resonance Liberation DMG Bonus%", "Resonance Skill DMG Bonus"]
    },
    {
        name: "Brant",
        charaId: 1206,
        buildStats: {
            stat1: {stat: "Energy Regen%", value: [2500, 2800]}
        },
        preferedSonata: [14, 8],
        preferedMainStat1: ["Crit. Rate%", "Crit. DMG%"],
        preferedMainStat2: ["Energy Regen%", "Fusion DMG Bonus%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: ["Energy Regen%", "Crit. Rate%", "Crit. DMG%", "Basic Attack DMG Bonus", "ATK%", "Resonance Liberation DMG Bonus"]
    },
    {
        name: "",
        charaId: 0,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        },
        preferedSonata: [],
        preferedMainStat1: ["Crit. DMG%", "Crit. Rate%"],
        preferedMainStat2: ["Aero DMG Bonus%", "ATK%", "Energy Regen%"],
        preferedMainStat3: ["ATK%"],
        preferedSubStats: []
    },
]

export const DefaultBuildWeights: DefaultBuildTypes = {
    DPSStats: {
        ATK: { stat: "ATK", hpScale: 0.5, atkScale: 0.75, defScale: 0.5 },
        ATKPerc: { stat: "ATK%", hpScale: 0.5, atkScale: 1.25, defScale: 0.5  },
        HP: { stat: "HP", hpScale: 0.75, atkScale: 0.5, defScale: 0.5  },
        HPPerc: { stat: "HP%", hpScale: 1, atkScale: 0.5, defScale: 0.5  },
        DEF: { stat: "DEF", hpScale: 0.5, atkScale: 0.5, defScale: 0.75  },
        DEFPerc: { stat: "DEF%", hpScale: 0.5, atkScale: 0.5, defScale: 1  },
        CritRate: { stat: "Crit. Rate%", hpScale: 1.25, atkScale: 1.25, defScale: 1.25  },
        CritDMG: { stat: "Crit. DMG%", hpScale: 1.25, atkScale: 1.25, defScale: 1.25  },
        EnergyRegen: { stat: "Energy Regen%", hpScale: 0.75, atkScale: 0.75, defScale: 0.75  },
        HealingBonus: { stat: "Heaing Bonus%", hpScale: 0, atkScale: 0, defScale: 0  },
        BasicBonus: { stat: "Basic Attack DMG Bonus%", hpScale: 0.75, atkScale: 0.75, defScale: 0.75  },
        HeavyBonus: { stat: "Heavy Attack DMG Bonus%", hpScale: 0.75, atkScale: 0.75, defScale: 0.75  },
        SkillBonus: { stat: "Resonance Skill DMG Bonus%", hpScale: 0.75, atkScale: 0.75, defScale: 0.75  },
        LibreationBonus: {
        stat: "Resonance Liberation DMG Bonus%",
        hpScale: 0.75, atkScale: 0.75, defScale: 0.75 
        },
    },
    SubDPSStats: {ATK: { stat: "ATK", hpScale: 0.5, atkScale: 0.75, defScale: 0.5 },
        ATKPerc: { stat: "ATK%", hpScale: 0.5, atkScale: 1, defScale: 0.5  },
        HP: { stat: "HP", hpScale: 0.75, atkScale: 0.5, defScale: 0.5  },
        HPPerc: { stat: "HP%", hpScale: 1, atkScale: 0.5, defScale: 0.5  },
        DEF: { stat: "DEF", hpScale: 0.5, atkScale: 0.5, defScale: 0.75  },
        DEFPerc: { stat: "DEF%", hpScale: 0.5, atkScale: 0.5, defScale: 1  },
        CritRate: { stat: "Crit. Rate%", hpScale: 1, atkScale: 1, defScale: 1  },
        CritDMG: { stat: "Crit. DMG%", hpScale: 1, atkScale: 1, defScale: 1  },
        EnergyRegen: { stat: "Energy Regen%", hpScale: 1, atkScale: 1, defScale: 1  },
        HealingBonus: { stat: "Heaing Bonus%", hpScale: 0, atkScale: 0, defScale: 0  },
        BasicBonus: { stat: "Basic Attack DMG Bonus%", hpScale: 0.75, atkScale: 0.75, defScale: 0.75  },
        HeavyBonus: { stat: "Heavy Attack DMG Bonus%", hpScale: 0.75, atkScale: 0.75, defScale: 0.75  },
        SkillBonus: { stat: "Resonance Skill DMG Bonus%", hpScale: 0.75, atkScale: 0.75, defScale: 0.75  },
        LibreationBonus: {
        stat: "Resonance Liberation DMG Bonus%",
        hpScale: 0.75, atkScale: 0.75, defScale: 0.75 
        },},
    SupportStats: {
        ATK: { stat: "ATK", hpScale: 0.5, atkScale: 0.75, defScale: 0.5  },
        ATKPerc: { stat: "ATK%", hpScale: 0.5, atkScale: 1, defScale: 0.5  },
        HP: { stat: "HP", hpScale: 0.75, atkScale: 0.5, defScale: 0.5  },
        HPPerc: { stat: "HP%", hpScale: 1, atkScale: 0.5, defScale: 0.5  },
        DEF: { stat: "DEF", hpScale: 0.5, atkScale: 0.5, defScale: 0.75  },
        DEFPerc: { stat: "DEF%", hpScale: 0.5, atkScale: 0.5, defScale: 1  },
        CritRate: { stat: "Crit. Rate%", hpScale: 0.5, atkScale: 0.5, defScale: 0.5  },
        CritDMG: { stat: "Crit. DMG%", hpScale: 0.5, atkScale: 0.5, defScale: 0.5  },
        EnergyRegen: { stat: "Energy Regen%", hpScale: 1, atkScale: 1, defScale: 1  },
        HealingBonus: { stat: "Heaing Bonus%", hpScale: 1, atkScale: 1, defScale: 1  },
        BasicBonus: { stat: "Basic Attack DMG Bonus%", hpScale: 0.5, atkScale: 0.5, defScale: 0.5  },
        HeavyBonus: { stat: "Heavy Attack DMG Bonus%", hpScale: 0.5, atkScale: 0.5, defScale: 0.5 },
        SkillBonus: { stat: "Resonance Skill DMG Bonus%", hpScale: 0.5, atkScale: 0.5, defScale: 0.5  },
        LibreationBonus: {
        stat: "Resonance Liberation DMG Bonus%",
        hpScale: 0.5, atkScale: 0.5, defScale: 0.5 
        },
    },
    DpsMainStats: {
        Cost1HP: ["HP%"],
        Cost1ATK: ["ATK%"],
        Cost1DEF: ["DEF%"],
        Cost3HP: ["HP%", "Element DMG Bonus%"],
        Cost3ATK: ["ATK%", "Element DMG Bonus%"],
        Cost3DEF: ["DEF%", "Element DMG Bonus%"],
        Cost4HP: ["HP%", "Crit. Rate%", "Crit. DMG%"],
        Cost4ATK: ["ATK%", "Crit. Rate%", "Crit. DMG%"],
        Cost4DEF: ["DEF%", "Crit. Rate%", "Crit. DMG%"],
    },
    SubDpsMainStats: {
        Cost1HP: ["HP%"],
        Cost1ATK: ["ATK%"],
        Cost1DEF: ["DEF%"],
        Cost3HP: ["HP%", "Energy Regen%"],
        Cost3ATK: ["ATK%", "Energy Regen%"],
        Cost3DEF: ["DEF%", "Energy Regen%"],
        Cost4HP: ["HP%", "Crit. Rate%", "Crit. DMG%"],
        Cost4ATK: ["ATK%", "Crit. Rate%", "Crit. DMG%"],
        Cost4DEF: ["DEF%", "Crit. Rate%", "Crit. DMG%"],
    },
    SupportMainStats: {
        Cost1HP: ["HP%"],
        Cost1ATK: ["ATK%"],
        Cost1DEF: ["DEF%"],
        Cost3HP: ["HP%", "Energy Regen%"],
        Cost3ATK: ["ATK%", "Energy Regen%"],
        Cost3DEF: ["DEF%", "Energy Regen%"],
        Cost4HP: ["HP%", "Healing Bonus%"],
        Cost4ATK: ["ATK%", "Healing Bonus%"],
        Cost4DEF: ["DEF%", "Healing Bonus%"],
    }
}