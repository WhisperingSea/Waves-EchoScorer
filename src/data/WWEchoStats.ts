interface MainStatsType {
    cost: number;
    name: string;
    primary: {
        name: string;
        maxVal: number;
    }[];
    secondary: {
        name: string;
        maxVal: number
    };
}[]

interface SubStatsType {
    name: string;
    min: number;
    max: number;
    rolls: number[];
}

export const WWEchoStats: MainStatsType[]  = [
        {
            cost: 4,
            name: "Overload/Calamity",
            primary: [
            { name: "HP%", maxVal: 33.0 },
            { name: "ATK%", maxVal: 33.0 },
            { name: "DEF%", maxVal: 41.5 },
            { name: "Crit. Rate%", maxVal: 22.0 },
            { name: "Crit. DMG%", maxVal: 44.0 },
            { name: "Healing Bonus%", maxVal: 26.0 },
            ],
            secondary: { name: "ATK", maxVal: 150 }
        },
        {
            cost: 3,
            name: "Elite",
            primary: [
            { name: "HP%", maxVal: 30.0 },
            { name: "ATK%", maxVal: 30.0 },
            { name: "DEF%", maxVal: 38.0 },
            { name: "Energy Regen%", maxVal: 32.0 },
            { name: "Glacio DMG Bonus%", maxVal: 30.0 },
            { name: "Fusion DMG Bonus%", maxVal: 30.0 },
            { name: "Electro DMG Bonus%", maxVal: 30.0 },
            { name: "Aero DMG Bonus%", maxVal: 30.0 },
            { name: "Spectro DMG Bonus%", maxVal: 30.0 },
            { name: "Havoc DMG Bonus%", maxVal: 30.0 }
            ],
            secondary: { name: "ATK", maxVal: 100 }
        },
        {
            cost: 1,
            name: "Common",
            primary: [
            { name: "HP%", maxVal: 22.5 },
            { name: "ATK%", maxVal: 18.0 },
            { name: "DEF%", maxVal: 18.0 }
            ],
            secondary: { name: "HP", maxVal: 2280 }
        }
]

export const WWSubstats: SubStatsType[] = [
            { name: "HP", min: 320, max: 580, rolls: [320, 360, 390, 430, 470, 510, 540, 580] },
            { name: "DEF", min: 40, max: 70, rolls: [40, 50, 60, 70] },
            { name: "ATK", min: 30, max: 60, rolls: [30, 40, 50, 60] },
            { name: "HP%", min: 6.4, max: 11.6, rolls: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6] },
            { name: "DEF%", min: 8.1, max: 14.7, rolls: [8.1, 9, 10, 10.9, 11.8, 12.8, 13.8, 14.7] },
            { name: "ATK%", min: 6.4, max: 11.6, rolls: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6]  },
            { name: "Crit. Rate%", min: 6.3, max: 10.5, rolls: [6.3, 6.9, 7.5, 8.1, 8.7, 9.3, 9.9, 10.5] },
            { name: "Crit. DMG%", min: 12.6, max: 21, rolls: [12.6, 13.8, 15, 16.2, 17.4, 18.6, 19.8, 21]  },
            { name: "Energy Regen%", min: 6.8, max: 12.4, rolls: [6.8, 7.6, 8.4, 9.2, 10, 10.8, 11.6, 12.4] },
            { name: "Basic Attack DMG Bonus%", min: 6.4, max: 11.6, rolls: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6]  },
            { name: "Heavy Attack DMG Bonus%", min: 6.4, max: 11.6, rolls: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6]  },
            { name: "Resonance Skill DMG Bonus%", min: 6.4, max: 11.6, rolls: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6]  },
            { name: "Resonance Liberation DMG Bonus%", min: 6.4, max: 11.6, rolls: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6]  }
]