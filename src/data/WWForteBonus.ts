export interface WWForteBonusType {
    name: string;
    Id: number;
    skillBonuses?: {
        id: number;
        type: string;
        name: string;
        effect: string;
        values: number[];
    }[];
    sequenceBonuese?: {
        id: number;
        node: string;
        name: string;
        effect: string;
        values: number[];
    }[],
    minorForte: {
        id: number, 
        type: string;
        value: number;
    }[];
}[]

export const WWForteBonus: WWForteBonusType[] = [
    {
        name: "Rover-Spectro",
        Id: 1001,
        skillBonuses: [
            {
                id: 1, 
                type: "Inherant Skill",
                name: "Reticence",
                effect: `Basic Attack Resonating Echoes`, 
                values: [0.60]
            },
            {
                id: 2, 
                type: "Inherant Skill",
                name: "Silent Listener",
                effect: `Rover gains <strong>15%</strong> ATK increase for 5s upon casting Heavy Attack <span class="Highlight">Resonance</span>`, 
                values: [0.15]
            }
        ],
        sequenceBonuese: [
            {
                id: 1,
                node: "Sequence Node 2",
                name: "Microcosmic Murmurs",
                effect: `Rover's Spectro DMG Bonus is increased by <strong>20%</strong>`,
                values: [0.20]
            },
            {
                id: 2,
                node: "Sequence Node 5",
                name: "Temporal Virtuoso",
                effect: `Rover's Resonance Liberation DMG Bonus is increased by <strong>40%</strong>`,
                values: [0.40]
            },
            {
                id: 3,
                node: "Sequence Node 6",
                name: "Echoes of Wanderlust",
                effect: `Resonance Skill Resonating Slashes and Resonance Skill Resonating Spin reduces the target's Spectro DMG RES by <strong>10%</strong> on hit for 20s.`,
                values: [0.10]
            },
        ],
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Spectro Damage Bonus`, value: 1.8 },
            { id: 6, type: `Spectro Damage Bonus`, value: 1.8 },
            { id: 7, type: `Spectro Damage Bonus`, value: 4.2 },
            { id: 8, type: `Spectro Damage Bonus`, value: 4.2 }
        ]
    },
    {
        name: "Rover-Havoc",
        Id: 1002,
        skillBonuses: [
            {
                id: 1,
                type: "Inherant Skill",
                name: "Metamorph",
                effect: `In the <span class="Highlight">Dark Surge</span> state, Havoc DMG Bonus is increased by <strong>20%</strong>.`,
                values: [0.20]
            },
        ],
        sequenceBonuese: [
            {
                id: 1,
                node: "Sequence Node 1",
                name: "Cryptic Insight",
                effect: `Resonance Skill DMG Bonus is increased by <strong>30%</strong>.`,
                values: [0.30]
            },
            {
                id: 2,
                node: "Sequence Node 4",
                name: "Annihilated Silence",
                effect: `Heavy Attack Devastation and Resonance Liberation Deadening Abyss reduces enemy Havoc RES by <strong>10%</strong> for 20s on hit.`,
                values: [0.10]
            },
            {
                id: 3,
                node: "Sequence Node 5",
                name: "Aeon Symphony",
                effect: `In the Dark Surge state, Basic Attack V deals an additional Havoc damage equal to <strong>50%</strong> of Basic Attack V damage.`,
                values: [0.50]
            },
            {
                id: 4,
                node: "Sequence Node 6",
                name: "Ebbing Undercurrent",
                effect: `In the <color=Highlight>Dark Surge</color> state, Rover's Crit. Rate is increased by <strong>25%</strong>.`,
                values: [25]
            },
        ],
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Havoc Damage Bonus`, value: 1.8 },
            { id: 6, type: `Havoc Damage Bonus`, value: 1.8 },
            { id: 7, type: `Havoc Damage Bonus`, value: 4.2 },
            { id: 8, type: `Havoc Damage Bonus`, value: 4.2 }
        ]
    },
    {
        name: "Baizhi",
        Id: 1101,
        skillBonuses: [
            {
                id: 1,
                type: "Outro Skill",
                name: "Rejuvinating Flow",
                effect: `Baizhi restores HP equal to 1.54% of her max HP to the next character (or other characters on a nearby team that activates an Outro Skill) every 3s for 30s. Resonators gaining this healing also gain <strong>15%</strong> all-Type DMG Deepen for 6s.`,
                values: [0.15]
            },
            {
                id: 2,
                type: "Inherant Skill",
                name: "Harmonic Range",
                effect: `When Baizhi casts Resonance Skill <span class="Highlight">Emergency Plan</span>, You'tan generates a field of <span class="Highlight">Euphonia</span> that lasts for 15s.\n
                <div class="gap"></div>
                <span class="Title">Euphonia</span>\n
                ATK of the Resonators who picks up Euphonia is increased by <strong>15%</strong> for 20s.`,
                values: [0.15]
            },
        ],
        sequenceBonuese: [
            {
                id: 1,
                node: "Sequence Node 2",
                name: "Silent Tundra",
                effect: `Resonance Skill <color=Highlight>Emergency Plan</color> increases Baizhi's Glacio DMG Bonus by <strong>15%</strong> and her Healing by 15% if she has 4 "Concentration". These effects last for 12s.`,
                values: [0.15]
            },
            {
                id: 2,
                node: "Sequence Node 3",
                name: "Veritas Lux Mea",
                effect: `Intro Skill <color=Highlight>Overflowing Frost</color> increases Baizhi's Max HP by <strong>12%</strong> for 10s.`,
                values: [0.12]
            },
            {
                id: 3,
                node: "Sequence Node 4",
                name: "Eternal Verity",
                effect: `Upon casting Resonance Liberation <color=Highlight>Momentary Union</color>, Resonance Liberation <color=Highlight>Remnant Entities</color> gains the following enhancements:
-<color=Highlight>Remnant Entities</color> can be performed 2 more time(s);
-Healing multiplier of <color=Highlight>Remnant Entities</color> is increased by 20%;
-<color=Highlight>Remnant Entities</color> deals additional Glacio DMG equal to 1.20% of Baizhi's Max HP.`,
                values: [0.20, 0.012]
            },
            {
                id: 4,
                node: "Sequence Node 6",
                name: "Seeker's Devotion",
                effect: `When <color=Highlight>Euphonia</color> is picked up, increase the Glacio DMG Bonus of all characters nearby by 12% for 20s.`,
                values: [0.12]
            },
        ],
        minorForte: [
            { id: 1, type: "HP", value: 1.8 },
            { id: 2, type: "HP", value: 1.8 },
            { id: 3, type: "HP", value: 4.2 },
            { id: 4, type: "HP", value: 4.2 },
            { id: 5, type: "Bonus Healing", value: 1.8 },
            { id: 6, type: "Bonus Healing", value: 1.8 },
            { id: 7, type: "Bonus Healing", value: 4.2 },
            { id: 8, type: "Bonus Healing", value: 4.2 }
        ]
    },
    {
        name: "Sanhua",
        Id: 1102,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Glacio Damage Bonus`, value: 1.8 },
            { id: 6, type: `Glacio Damage Bonus`, value: 1.8 },
            { id: 7, type: `Glacio Damage Bonus`, value: 4.2 },
            { id: 8, type: `Glacio Damage Bonus`, value: 4.2 }
        ]
    },
    {
        name: "Lingyang",
        Id: 1103,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Glacio Damage Bonus`, value: 1.8 },
            { id: 6, type: `Glacio Damage Bonus`, value: 1.8 },
            { id: 7, type: `Glacio Damage Bonus`, value: 4.2 },
            { id: 8, type: `Glacio Damage Bonus`, value: 4.2 }
        ]
    },
    {
        name: "Zhezhi",
        Id: 1104,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: "Crit. Rate", value: 1.2 },
            { id: 6, type: "Crit. Rate", value: 1.2 },
            { id: 7, type: "Crit. Rate", value: 2.8 },
            { id: 8, type: "Crit. Rate", value: 2.8 }
        ]
    },
    {
        name: "Encore",
        Id: 1201,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Fusion Damage Bonus`, value: 1.8 },
            { id: 6, type: `Fusion Damage Bonus`, value: 1.8 },
            { id: 7, type: `Fusion Damage Bonus`, value: 4.2 },
            { id: 8, type: `Fusion Damage Bonus`, value: 4.2 }
        ]
    },
    {
        name: "Chixia",
        Id: 1202,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Fusion Damage Bonus`, value: 1.8 },
            { id: 6, type: `Fusion Damage Bonus`, value: 1.8 },
            { id: 7, type: `Fusion Damage Bonus`, value: 4.2 },
            { id: 8, type: `Fusion Damage Bonus`, value: 4.2 }
        ]
    },
    {
        name: "Mortefi",
        Id: 1203,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Fusion Damage Bonus`, value: 1.8 },
            { id: 6, type: `Fusion Damage Bonus`, value: 1.8 },
            { id: 7, type: `Fusion Damage Bonus`, value: 4.2 },
            { id: 8, type: `Fusion Damage Bonus`, value: 4.2 }
        ]
    },
    {
        name: "Changli",
        Id: 1204,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Fusion Damage Bonus`, value: 1.8 },
            { id: 6, type: `Fusion Damage Bonus`, value: 1.8 },
            { id: 7, type: `Fusion Damage Bonus`, value: 4.2 },
            { id: 8, type: `Fusion Damage Bonus`, value: 4.2 }
        ]
    },
    {
        name: "Calcharo",
        Id: 1301,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: "Crit. Damage", value: 2.4 },
            { id: 6, type: "Crit. Damage", value: 2.4 },
            { id: 7, type: "Crit. Damage", value: 5.6 },
            { id: 8, type: "Crit. Damage", value: 5.6 }
        ]
    },
    {
        name: "Yinlin",
        Id: 1302,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: "Crit. Rate", value: 1.2 },
            { id: 6, type: "Crit. Rate", value: 1.2 },
            { id: 7, type: "Crit. Rate", value: 2.8 },
            { id: 8, type: "Crit. Rate", value: 2.8 }
        ]
    },
    {
        name: "Yuanwu",
        Id: 1303,
        minorForte: [
            { id: 1, type: "DEF", value: 2.28 },
            { id: 2, type: "DEF", value: 2.28 },
            { id: 3, type: "DEF", value: 5.32 },
            { id: 4, type: "DEF", value: 5.32 },
            { id: 5, type: `Electro Damage Bonus`, value: 1.8 },
            { id: 6, type: `Electro Damage Bonus`, value: 1.8 },
            { id: 7, type: `Electro Damage Bonus`, value: 4.2 },
            { id: 8, type: `Electro Damage Bonus`, value: 4.2 }
        ]
    },
        {
        name: "Jianxin",
        Id: 1401,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: "Crit. Rate", value: 1.2 },
            { id: 6, type: "Crit. Rate", value: 1.2 },
            { id: 7, type: "Crit. Rate", value: 2.8 },
            { id: 8, type: "Crit. Rate", value: 2.8 }
        ]
    },
        {
        name: "YangYang",
        Id: 1402,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Aero Damage Bonus`, value: 1.8 },
            { id: 6, type: `Aero Damage Bonus`, value: 1.8 },
            { id: 7, type: `Aero Damage Bonus`, value: 4.2 },
            { id: 8, type: `Aero Damage Bonus`, value: 4.2 }
        ]
    },
        {
        name: "Aalto",
        Id: 1403,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Aero Damage Bonus`, value: 1.8 },
            { id: 6, type: `Aero Damage Bonus`, value: 1.8 },
            { id: 7, type: `Aero Damage Bonus`, value: 4.2 },
            { id: 8, type: `Aero Damage Bonus`, value: 4.2 }
        ]
    },
        {
        name: "Jiyan",
        Id: 1404,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: "Crit. Rate", value: 1.2 },
            { id: 6, type: "Crit. Rate", value: 1.2 },
            { id: 7, type: "Crit. Rate", value: 2.8 },
            { id: 8, type: "Crit. Rate", value: 2.8 }
        ]
    },
        {
        name: "Verina",
        Id: 1501,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: "Bonus Healing", value: 1.8 },
            { id: 6, type: "Bonus Healing", value: 1.8 },
            { id: 7, type: "Bonus Healing", value: 4.2 },
            { id: 8, type: "Bonus Healing", value: 4.2 }
        ]
    },
        {
        name: "Jinhsi",
        Id: 1502,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: "Crit. Rate", value: 1.2 },
            { id: 6, type: "Crit. Rate", value: 1.2 },
            { id: 7, type: "Crit. Rate", value: 2.8 },
            { id: 8, type: "Crit. Rate", value: 2.8 }
        ]
    },
        {
        name: "Taoqi",
        Id: 1601,
        minorForte: [
            { id: 1, type: "DEF", value: 2.28 },
            { id: 2, type: "DEF", value: 2.28 },
            { id: 3, type: "DEF", value: 5.32 },
            { id: 4, type: "DEF", value: 5.32 },
            { id: 5, type: `Havoc Damage Bonus`, value: 1.8 },
            { id: 6, type: `Havoc Damage Bonus`, value: 1.8 },
            { id: 7, type: `Havoc Damage Bonus`, value: 4.2 },
            { id: 8, type: `Havoc Damage Bonus`, value: 4.2 }
        ]
    },
            {
        name: "Danjin",
        Id: 1602,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Havoc Damage Bonus`, value: 1.8 },
            { id: 6, type: `Havoc Damage Bonus`, value: 1.8 },
            { id: 7, type: `Havoc Damage Bonus`, value: 4.2 },
            { id: 8, type: `Havoc Damage Bonus`, value: 4.2 }
        ]
    },
]