interface MainStatsType {
    [key: string] : {cost: number;
    name: string;
    primary: {
        name: string;
        ranks: number[];
    }[];
    secondary: {
        name: string;
        ranks: number[];
    }[];}
}

interface SubStatsType {
    name: string;
    min: number;
    max: number;
    rolls: number[];
}

export const WWEchoStats: MainStatsType[]  = [
    {
        Overlord: {
            cost: 4,
            name: "Overload/Calamity",
            primary: [
            { name: "HP%", ranks: [10.6, 14.6, 20.5, 33.0] },
            { name: "ATK%", ranks: [10.6, 14.6, 20.5, 33.0] },
            { name: "DEF%", ranks: [13.5, 18.7, 26.0, 41.5] },
            { name: "CRIT Rate", ranks: [7.1, 9.8, 13.8, 22.0] },
            { name: "CRIT Dmg", ranks: [14.3, 19.7, 27.7, 44.0] },
            { name: "Healing Bonus", ranks: [8.5, 11.9, 16.3, 26.0] },
            { name: "Energy Regen", ranks: [11, 15.6, 22.11, 35.2] }
            ],
            secondary: [{ name: "ATK", ranks: [46, 68, 92, 150] }]
        },
        Elite: {
            cost: 3,
            name: "Elite",
            primary: [
            { name: "HP%", ranks: [9.6, 14.0, 18.9, 30.0] },
            { name: "ATK%", ranks: [9.6, 14.0, 18.9, 30.0] },
            { name: "DEF%", ranks: [12.3, 17.0, 23.9, 38.0] },
            { name: "Energy Regen", ranks: [10.0, 14.2, 20.1, 32.0] },
            { name: "[Element] DMG", ranks: [9.6, 14.0, 18.9, 30.0] }
            ],
            secondary: [{ name: "ATK", ranks: [31, 44, 63, 100] }]
        },
        common: {
            cost: 1,
            name: "Common",
            primary: [
            { name: "HP%", ranks: [7.2, 10.2, 14.2, 22.5] },
            { name: "ATK%", ranks: [5.7, 8.1, 11.3, 18.0] },
            { name: "DEF%", ranks: [5.7, 8.1, 11.3, 18.0] }
            ],
            secondary: [{ name: "HP", ranks: [296, 516, 957, 2280] }]
        }
    }
]

export const WWSubstats: SubStatsType[] = [
            { name: "HP", min: 320, max: 580, rolls: [320, 360, 390, 430, 470, 510, 540, 580] },
            { name: "DEF", min: 40, max: 70, rolls: [40, 50, 60, 70] },
            { name: "ATK", min: 30, max: 60, rolls: [30, 40, 50, 60] },
            { name: "HP%", min: 6.4, max: 11.6, rolls: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6] },
            { name: "DEF%", min: 8.1, max: 14.7, rolls: [8.1, 9, 10, 10.9, 11.8, 12.8, 13.8, 14.7] },
            { name: "ATK%", min: 6.4, max: 11.6, rolls: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6]  },
            { name: "Crit. Rate%", min: 6.3, max: 10.5, rolls: [6.3, 6,9, 7.5, 8.1, 8.7, 9.3, 9.9, 10.5] },
            { name: "Crit. DMG%", min: 12.6, max: 21, rolls: [12.6, 13.8, 15, 16.2, 17.4, 18.6, 19.8, 21]  },
            { name: "Energy Regen%", min: 6.8, max: 12.4, rolls: [6.8, 7.6, 8.4, 9.2, 10, 10.8, 11.6, 12.4] },
            { name: "Basic Attack DMG Bonus%", min: 6.4, max: 11.6, rolls: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6]  },
            { name: "Heavy Attack DMG Bonus%", min: 6.4, max: 11.6, rolls: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6]  },
            { name: "Resonance Skill DMG Bonus%", min: 6.4, max: 11.6, rolls: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6]  },
            { name: "Resonance Liberation DMG Bonus%", min: 6.4, max: 11.6, rolls: [6.4, 7.1, 7.9, 8.6, 9.4, 10.1, 10.9, 11.6]  }
]