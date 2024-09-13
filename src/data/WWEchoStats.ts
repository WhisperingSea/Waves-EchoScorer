interface MainStatsType {
    cost: number;
    name: string;
    primary: {
        name: string;
        ranks: number[];
    }[];
    secondary: {
        name: string;
        ranks: number[];
    }[];
}

interface SubStatsType {
    name: string;
    min: number;
    max: number;
}

interface MainStatsWrapper {
    mainStats: MainStatsType[];
    subStats?: never; // Excludes subStats in this structure
}

interface SubStatsWrapper {
    subStats: SubStatsType[];
    mainStats?: never; // Excludes mainStats in this structure
}

type WWEchoStatsType = MainStatsWrapper | SubStatsWrapper;

export const WWEchoStats: WWEchoStatsType[]  = [
    {
        mainStats: [
        {
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
        {
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
        {
            cost: 1,
            name: "Common",
            primary: [
            { name: "HP%", ranks: [7.2, 10.2, 14.2, 22.5] },
            { name: "ATK%", ranks: [5.7, 8.1, 11.3, 18.0] },
            { name: "DEF%", ranks: [5.7, 8.1, 11.3, 18.0] }
            ],
            secondary: [{ name: "HP", ranks: [296, 516, 957, 2280] }]
        }
        ]
    },
    {
        subStats: [
            { name: "HP", min: 260, max: 740 },
            { name: "DEF", min: 30, max: 90 },
            { name: "ATK", min: 20, max: 70 },
            { name: "HP%", min: 5.2, max: 15 },
            { name: "DEF%", min: 6.6, max: 16.9 },
            { name: "ATK%", min: 5.2, max: 15 },
            { name: "Crit. Rate", min: 4.9, max: 10.4 },
            { name: "Crit. DMG", min: 9.8, max: 20.4 },
            { name: "Energy Regen", min: 5.6, max: 14.9 },
            { name: "Basic Attack DMG Bonus", min: 4.2, max: 11.8 },
            { name: "Heavy Attack DMG Bonus", min: 4.2, max: 11.8 },
            { name: "Resonance Skill DMG Bonus", min: 4.3, max: 12.0 },
            { name: "Resonance Liberation DMG Bonus", min: 4.2, max: 12.0 }
            ]
    }
]

export const WWSubstats: SubStatsType[] = [
            { name: "HP", min: 320, max: 580 },
            { name: "DEF", min: 40, max: 70 },
            { name: "ATK", min: 30, max: 60 },
            { name: "HP%", min: 6.4, max: 11.6 },
            { name: "DEF%", min: 8.1, max: 14.7 },
            { name: "ATK%", min: 6.4, max: 11.6 },
            { name: "Crit. Rate%", min: 6.3, max: 10.5 },
            { name: "Crit. DMG%", min: 12.6, max: 21 },
            { name: "Energy Regen%", min: 6.8, max: 12.4 },
            { name: "Basic Attack DMG Bonus%", min: 6.4, max: 11.6 },
            { name: "Heavy Attack DMG Bonus%", min: 6.4, max: 11.6 },
            { name: "Resonance Skill DMG Bonus%", min: 6.4, max: 11.6 },
            { name: "Resonance Liberation DMG Bonus%", min: 6.4, max: 11.6 }
]