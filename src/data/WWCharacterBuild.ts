export interface WWCharaBuildTypes {
    name: string,
    charaId: number
    buildStats: {
        [key: string]: {stat: string, value: [number, number?]}
    }
    
}

export interface DefaultBuildTypes {
    DPSStats: {
        [key: string]: {stat: string, value: number},
    },
    SubDPSStats: {
        [key: string]: {stat: string, value: number}
    },
    SupportStats: {
        [key: string]: {stat: string, value: number}
    },
    DpsMainStats: {
        Cost1: string[]
        Cost3: string[]
        Cost4: string[]
    },
    SubDpsMainStats: {
        Cost1: string[]
        Cost3: string[]
        Cost4: string[]
    }
    SupportMainStats: {
        Cost1: string[]
        Cost3: string[]
        Cost4: string[]
    }
}

export const WWCharaBuilds: WWCharaBuildTypes[] = [
    {
        name: "Rover-Spectro",
        charaId: 1001,
        buildStats: {
            stat1: {stat: "ATK", value: [1700, 2000]},
            stat2: {stat: "HP", value: [15000]},
        }
    },
    {
        name: "",
        charaId: 0,
        buildStats: {
            stat1: {stat: "ATK", value: [0, 0]}
        }
    },
]

export const DefaultBuildWeights: DefaultBuildTypes = {
    DPSStats: {
        ATK: { stat: "ATK", value: 0.75 },
        ATKPerc: { stat: "ATK%", value: 1 },
        HP: { stat: "HP", value: 0.5 },
        HPPerc: { stat: "HP%", value: 0.5 },
        DEF: { stat: "DEF", value: 0.5 },
        DEFPerc: { stat: "DEF%", value: 0.5 },
        CritRate: { stat: "Crit. Rate%", value: 1 },
        CritDMG: { stat: "Crit. DMG%", value: 1 },
        EnergyRegen: { stat: "Energy Regen%", value: 0.75 },
        HealingBonus: { stat: "Heaing Bonus%", value: 0 },
        BasicBonus: { stat: "Basic Attack DMG Bonus%", value: 0.75 },
        HeavyBonus: { stat: "Heavy Attack DMG Bonus%", value: 0.75 },
        SkillBonus: { stat: "Resonance Skill DMG Bonus%", value: 0.75 },
        LibreationBonus: {
        stat: "Resonance Liberation DMG Bonus%",
        value: 0.75,
        },
    },
    SubDPSStats: {},
    SupportStats: {
        ATK: { stat: "ATK", value: 0.5 },
        ATKPerc: { stat: "ATK%", value: 0.75 },
        HP: { stat: "HP", value: 0.75 },
        HPPerc: { stat: "HP%", value: 1 },
        DEF: { stat: "DEF", value: 0.75 },
        DEFPerc: { stat: "DEF%", value: 1 },
        CritRate: { stat: "Crit. Rate%", value: 0.75 },
        CritDMG: { stat: "Crit. DMG%", value: 0.75 },
        EnergyRegen: { stat: "Energy Regen%", value: 1 },
        HealingBonus: { stat: "Heaing Bonus%", value: 1 },
        BasicBonus: { stat: "Basic Attack DMG Bonus%", value: 0.5 },
        HeavyBonus: { stat: "Heavy Attack DMG Bonus%", value: 0.5 },
        SkillBonus: { stat: "Resonance Skill DMG Bonus%", value: 0.5 },
        LibreationBonus: {
        stat: "Resonance Liberation DMG Bonus%",
        value: 0.5,
        },
    },
    DpsMainStats: {
        Cost1: ["ATK%", "Crit. Rate%", "Crid. DMG%"],
        Cost3: ["ATK%", "Element DMG Bonus%"],
        Cost4: ["ATK%"]
    },
    SubDpsMainStats: {
        Cost1: ["ATK%", "Crit. Rate%", "Crid. DMG%"],
        Cost3: ["ATK%", "Element DMG Bonus%", "Energy Regen%"],
        Cost4: ["ATK%"]
    },
    SupportMainStats: {
        Cost1: ["HP%", "Healing Bonus%"],
        Cost3: ["HP%", "Energy Rege%"],
        Cost4: ["HP%"]
    }
}