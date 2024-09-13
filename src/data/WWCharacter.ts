const rarity4Star = "https://sohansc13.github.io/wuthering-waves-assets/images/icon_stars/Icon_4_Stars.webp";
const rarity5Star = "https://sohansc13.github.io/wuthering-waves-assets/images/icon_stars/Icon_5_Stars.webp";


export interface WWCharacter {
    name: string;
    charaId: number;
    rarity: {
        alt: string;
        img: string
    };
    element: string;
    weapon: string;
    bio: string;
    images: {
        portrait: string;
        icon_sq: string;
        icon_cr?: string;
        sigil?: string;
        model: string;
    };
    asension: {
        charaAsension: {
            item: string;
            id: number;
            value: string;
        }[];
        forteAsension: {
            item: string;
            id: number;
            value: string;
        }[];
    };
    stats: {
        base_hp: number;
        base_atk: number;
        base_def: number;
        base_crit: number;
        base_critdmg: number;
        base_healing: number;
        max_energy: number;
        bonus_ele: number;
        bonus_atk: number;
        bonus_def: number;
        bonus_heal: number;
        bonus_crit: number;
        bonus_critdmg: number;
        bonus_hp: number;
    };
    skills: {
        skillId: number;
        typeName: string;
        skillName: string;
        skillDescription: string;
        skillDetailNum?: string[];
        skillBuffAtrribute?: string[];
        skillBuff?: number[];
        multipliers: {
            attributeName: string;
            index: number;
            skillDetailNum?: {
                values: string[];
            }[];
        }[];
    }[];
    sequences: {
        node: string;
        name: string;
        description: string;
        detailNum: string[];
        itemImg: string;
        sequenceBuffType?: string;
        sequenceBuffAtrribute?: string[];
        sequenceBuff?: number[];
        stacks?: number
    }[];
}


export const WWCharacterData: WWCharacter[] = [
    {
    name: "Rover-Spectro",
    charaId: 1001,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Spectro",
    weapon: `Sword`,
    bio: `Awakened with an unknown past, Rover embarks on a journey to uncover the truths.
As secrets are unveiled, Rover establishes deeper connections with the world.`,
    images: {
            portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_zhujuenan_UI.png",
            icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/RoverSpectroMale.png",
            model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Male_Rover_Model.png?raw=true"
        },
    asension: {
        charaAsension: [
            {
                item: "LF Whisperin Core",
                id: 1,
                value: "4"
            },
            {
                item: "MF Whisperin Core",
                id: 2,
                value: "12"
            },
            {
                item: "HF Whisperin Core",
                id: 3,
                value: "12"
            },
            {
                item: "FF Whisperin Core",
                id: 4,
                value: "4"
            },
            {
                item: "Mysterious Code",
                id: 5,
                value: "5"
            },
            {
                item: "Pecok Flower",
                id: 6,
                value: "50"
            },
            {
                item: "Shell Credits",
                id: 7,
                value: "170,000"
            }
        ],
        forteAsension: [
            {
                item: "LF Whisperin Core",
                id: 1,
                value: "25"
            },
            {
                item: "MF Whisperin Core",
                id: 2,
                value: "28"
            },
            {
                item: "HF Whisperin Core",
                id: 3,
                value: "40"
            },
            {
                item: "FF Whisperin Core",
                id: 4,
                value: "57"
            },
            {
                item: "Inert Metallic Drip",
                id: 5,
                value: "25"
            },
            {
                item: "Reactive Metallic Drip",
                id: 6,
                value: "28"
            },
            {
                item: "Polarized Metallic Drip",
                id: 7,
                value: "55"
            },
            {
                item: "Heterized Metallic Drip",
                id: 8,
                value: "67"
            },
            {
                item: "Unending Destruction",
                id: 9,
                value: "26"
            },
            {
                item: "Shell Credits",
                id: 10,
                value: "2,030,000"
            },
        ]
    },
    stats: {    
            base_hp: 912,
            base_atk: 30,
            base_def: 112,
            base_crit: 5,
            base_critdmg: 150,
            base_healing: 0,
            max_energy: 125,
            bonus_ele: 1.12,
            bonus_atk: 1.12,
            bonus_def: 0,
            bonus_heal: 0,
            bonus_crit: 0,
            bonus_critdmg: 0,
            bonus_hp: 0
        },
    skills: [
        {
                skillId: 1,
                typeName: "Basic Attack",
                skillName: "Vibration Manifestation",
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Rover performs up to 4 consecutive attacks, dealing <span class="Light">Spectro DMG</span>.\n
                <div class="gap"></div>
                <span class=Title>Heavy Attack</span>\n
                Rover consumes Stamina, dealing <span class="Light">Spectro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack: Resonance</span>\n
                After <span class="Highlight">Basic Attack 3</span> or <span class="Highlight">Heavy Attack</span>, press the <span class="Highlight">Basic Attack</span> button at the right time to perform Heavy Attack <span class="Highlight">Resonance</span>, dealing <span class="Light">Spectro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack: Aftertune</span>\n
                After Heavy Attack <span class="Highlight">Resonance</span> or <span class="Highlight">Dodge Counter</span> hits a target, press the <span class="Highlight">Basic Attack</span> button to perform Heavy Attack <span class="Highlight">Aftertune</span>, dealing <span class="Light">Spectro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Rover consumes Stamina to perform a Mid-Air Plunging Attack, dealing <span class="Light">Spectro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Light">Spectro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        index: 1,
                        skillDetailNum: [{
                            values: ["29.75%", "32.19%", "34.63%", "38.05%", "40.49%", "43.29%", "47.20%", "51.10%", "55.00%", "59.15%", "64.03%", "68.91%", "73.79%", "78.67%", "83.55%", "88.42%", "93.30%", "98.18%", "103.06%", "107.94%"]
                        }]
                    },
                    {
                        attributeName: "Part 2 Damage",
                        index: 2,
                        skillDetailNum: [{
                            values: ["38.25%", "41.39%", "44.53%", "48.92%", "52.06%", "55.66%", "60.68%", "65.70%", "70.72%", "76.05%", "82.32%", "88.60%", "94.87%", "101.14%", "107.41%", "113.69%", "119.96%", "126.23%", "132.51%", "138.78%"]
                        }]
                    },
                    {
                        attributeName: "Part 3 Damage",
                        index: 3,
                        skillDetailNum: [{
                            values: ["7.65%*5", "8.28%*5", "8.91%*5", "9.79%*5", "10.42%*5", "11.14%*5", "12.14%*5", "13.14%*5", "14.15%*5", "15.21%*5", "16.47%*5", "17.72%*5", "18.98%*5", "20.23%*5", "21.49%*5", "22.74%*5", "24.00%*5", "25.25%*5", "26.51%*5", "27.76%*5"]
                        }]
                    },
                    {
                        attributeName: "Part 4 Damage",
                        index: 4,
                        skillDetailNum: [{
                            values: ["65.45%", "70.82%", "76.19%", "83.70%", "89.07%", "95.24%", "103.83%", "112.42%", "121.00%", "130.13%", "140.86%", "151.59%", "162.33%", "173.06%", "183.80%", "194.53%", "205.26%", "216.00%", "226.73%", "237.46%"]
                        }]
                    },
                    {
                        attributeName: "Dodge Counter Damage",
                        index: 5,
                        skillDetailNum: [{
                            values: ["98.25%", "106.31%", "114.37%", "125.65%", "133.70%", "142.97%", "155.86%", "168.75%", "181.64%", "195.34%", "211.45%", "227.56%", "243.67%", "259.79%", "275.90%", "292.01%", "308.13%", "324.24%", "340.35%", "356.47%"]
                        }]
                    },
                    {
                        attributeName: "Heavy Attack Damage",
                        index: 6,
                        skillDetailNum: [{
                            values: ["9.69%*5", "10.49%*5", "11.28%*5", "12.40%*5", "13.19%*5", "14.10%*5", "15.38%*5", "16.65%*5", "17.92%*5", "19.27%*5", "20.86%*5", "22.45%*5", "24.04%*5", "25.63%*5", "27.22%*5", "28.80%*5", "30.39%*5", "31.98%*5", "33.57%*5", "35.16%*5"]
                        }]
                    },
                    {
                        attributeName: "HA: Resonance Damage",
                        index: 7,
                        skillDetailNum: [{
                            values: ["38.25%", "41.39%", "44.53%", "48.92%", "52.06%", "55.66%", "60.68%", "65.70%", "70.72%", "76.05%", "82.32%", "88.60%", "94.87%", "101.14%", "107.41%", "113.69%", "119.96%", "126.23%", "132.51%", "138.78%"]
                        }]
                    },
                    {
                        attributeName: "HA: Aftertune Damage",
                        index: 8,
                        skillDetailNum: [{
                            values: ["63.75%", "68.98%", "74.21%", "81.53%", "86.76%", "92.77%", "101.13%", "109.50%", "117.86%", "126.75%", "137.20%", "147.66%", "158.11%", "168.57%", "179.02%", "189.48%", "199.93%", "210.39%", "220.84%", "231.30%"]
                        }]
                    },
                    {
                        attributeName: "Mid-Air Attack Damage",
                        index: 9,
                        skillDetailNum: [{
                            values: ["52.70%", "57.03%", "61.35%", "67.40%", "71.72%", "76.69%", "83.60%", "90.52%", "97.43%", "104.78%", "113.42%", "122.06%", "130.71%", "139.35%", "147.99%", "156.63%", "165.28%", "173.92%", "182.56%", "191.21%"]
                        }]
                    },
                    {
                        attributeName: "Heavy Attack Stamina Consumption",
                        index: 10,
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }]
                    },
                    {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        index: 11,
                        skillDetailNum: [{
                            values:  ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }]
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Resonating Slashes',
                skillDescription: `Rover launches an attack forward, dealing <span class="Light">Spectro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        index: 1,
                        skillDetailNum: [{
                            values: ["118.80%", "128.55%", "138.29%", "151.93%", "161.67%", "172.87%", "188.46%", "204.04%", "219.63%", "236.19%", "255.67%", "275.16%", "294.64%", "314.12%", "333.61%", "353.09%", "372.57%", "392.06%", "411.54%", "431.02%"]
                        }]
                    },
                    {
                        attributeName: "Cooldown",
                        index: 2,
                        skillDetailNum: [{
                            values: ["6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
                        }]
                    },
                    {
                        attributeName: "Con. Energy Regen",
                        index: 1,
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }]
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liberation',
                skillName: 'Echoing Orchestra',
                skillDescription: `Rover converges Spectro energy to assail the target area, detonating it after a short interval and dealing <span class="Light">Spectro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        index: 1,
                        skillDetailNum: [{
                            values: ["100.00%+340.00%", "108.20%+367.88%", "116.40%+395.76%", "127.88%+434.80%", "136.08%+462.68%", "145.51%+494.74%", "158.63%+539.35%", "171.75%+583.95%", "184.87%+628.56%", "198.81%+675.96%", "215.21%+731.72%", "231.61%+787.48%", "248.01%+843.24%", "264.41%+899.00%", "280.81%+954.76%", "297.21%+1010.52%", "313.61%+1066.28%", "330.01%+1122.04%", "346.41%+1177.80%", "362.81%+1233.56%"]
                        }]
                    },
                    {
                        attributeName: "Cooldown",
                        index: 1,
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }]
                    },
                    {
                        attributeName: "Res. Energy Cost",
                        index: 1,
                        skillDetailNum: [{
                            values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                        }]
                    },
                    {
                        attributeName: "Con. Energy Regen",
                        index: 1,
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }]
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Waveshock',
                skillDescription: `Rover attacks the target, dealing <span class="Light">Spectro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["85.00%", "91.97%", "98.94%", "108.70%", "115.67%", "123.69%", "134.84%", "145.99%", "157.14%", "168.99%", "182.93%", "196.87%", "210.81%", "224.75%", "238.69%", "252.63%", "266.57%", "280.51%", "294.45%", "308.39%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Instant',
                skillDescription: `Generate an area of stasis surrounding the next character, lasting for {0}s.`,
                skillDetailNum: ["3"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: "World in a Grain of Sand",
                skillDescription: `<span class="Title">Resonance Skill: Resonating Spin</span>\n
                If "Diminutive Sound" exceeds {0} when <span class="Highlight">Resonance Skill</span> is used, Rover consumes {1} "Diminutive Sound" to cast <span class="Highlight">Resonating Spin</span>, dealing <span class="Light">Spectro DMG</span>, considered as Resonance Skill damage.\n
                <div class="gap"></div>
                <span class="Title">Basic attack: Resonating Echoes</span>\n
                After Resonance Skill <span class="Highlight">Resonating Spin</span> ends, Rover performs Resonance Skill <span class="Highlight">Resonating Echoes</span> upon pressing the Basic Attack button.\n
                Rover performs attacks forward, dealing <span class="Light">Spectro DMG</span> considered as Resonance Skill DMG.\n
                <div class="gap"></div>
                <span class="Title">Diminutive Sound</span>\n
                Rover can hold up to {2} "Diminutive Sounds".\n
                Rover obtains "Diminutive Sound" for every Normal Attack <span class="Highlight">Vibration Manifestation</span> on hit.\n
                Rover obtains "Diminutive Sound" for every Heavy Attack <span class="Highlight"> aftertune</span> on hit.\n
                Rover obtains "Diminutive Sound" upon casting Intro Skill <span class="Highlight">Waveshock</span>.`,
                skillDetailNum: ["50", "50", "100"],
                multipliers: [
                    {
                        attributeName: "Resonating Spin Damage",
                        skillDetailNum: [{
                            values: ["64.93%*2", "70.25%*2", "75.58%*2", "83.03%*2", "88.35%*2", "94.48%*2", "103.00%*2", "111.51%*2", "120.03%*2", "129.08%*2", "139.73%*2", "150.38%*2", "161.03%*2", "171.67%*2", "182.32%*2", "192.97%*2", "203.62%*2", "214.26%*2", "224.91%*2", "235.56%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Resonating Whirl Damage",
                        skillDetailNum: [{
                            values: ["20.00%", "21.64%", "23.28%", "25.58%", "27.22%", "29.11%", "31.73%", "34.35%", "36.98%", "39.77%", "43.05%", "46.33%", "49.61%", "52.89%", "56.17%", "59.45%", "62.73%", "66.01%", "69.29%", "72.57%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Resonating Echoes Part 1 Damage",
                        skillDetailNum: [{
                            values: ["40.00%", "43.28%", "46.56%", "51.16%", "54.44%", "58.21%", "63.46%", "68.70%", "73.95%", "79.53%", "86.09%", "92.65%", "99.21%", "105.77%", "112.33%", "118.89%", "125.45%", "132.01%", "138.57%", "145.13%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Resonating Echoes Part 2 Damage",
                        skillDetailNum: [{
                            values: ["80.00%", "86.56%", "93.12%", "102.31%", "108.87%", "116.41%", "126.91%", "137.40%", "147.90%", "159.05%", "172.17%", "185.29%", "198.41%", "211.53%", "224.65%", "237.77%", "250.89%", "264.01%", "277.13%", "290.25%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Resonating Spin Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Resonating Echoes Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Reticence',
                skillDescription: `Damage dealt by Rover's Basic Attack <span class="Highlight">Resonating Echoes</span> is increased by {0}.`,
                skillDetailNum: ["60%"],
                multipliers: [],
                skillBuffAtrribute: ["Basic Attack", "Resonating Echoes"],
                skillBuff: [60]
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Silent Listener',
                skillDescription: `Rover gains {0} ATK increase for {1}s upon casting Heavy Attack <span class="Highlight">Resonance</span>`,
                skillDetailNum: ["15%", "5"],
                multipliers: [],
                skillBuffAtrribute: ["ATK"],
                skillBuff: [15]
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Solaris Voyager',
                skillDescription: `Stamina consumption for swimming is reduced by 20%`,
                skillDetailNum: [],
                multipliers: []
            }
    ],
    sequences: [
        {
        node: "Sequence Node 1",
        name: "Odyssey of Beginnings",
        description: `Rover's Crit. Rate is increased by {0} for {1}s when casting Resonance Skill <color=Highlight>Resonating Slashes</color> or Resonance Skill <color=Highlight>Resonating Spin</color>.`,
        detailNum: ["15%", "7"],
        itemImg: "https://cdn.wanderer.moe/wuthering-waves/icons/T_IconDevice_nannvzhuM1_UI.png",
        sequenceBuffType: "Character Skill Buff",
        sequenceBuffAtrribute: ["Crit. Rate"],
        sequenceBuff: [15]
        },
        {
        node: "Sequence Node 2",
        name: "Microcosmic Murmurs",
        description: "Rover's Spectro DMG Bonus is increased by {0}.",
        detailNum: ["20%"],
        itemImg: "https://cdn.wanderer.moe/wuthering-waves/icons/T_IconDevice_nannvzhuM2_UI.png",
        sequenceBuffType: "Character Buff",
        sequenceBuffAtrribute: ["Spectro Damage Bonus"],
        sequenceBuff: [20]
        },
        {
        node: "Sequence Node 3",
        name: "Visages of Dust",
        description: "Rover's Energy Regen is increased by {0}.",
        detailNum: ["20%"],
        itemImg: "https://cdn.wanderer.moe/wuthering-waves/icons/T_IconDevice_nannvzhuM3_UI.png",
        sequenceBuffType: "Character Buff",
        sequenceBuffAtrribute: ["Energy Regen"],
        sequenceBuff: [20]
        },
        {
        node: "Sequence Node 4",
        name: "Resonating Lamella",
        description: "When casting Resonance Liberation <color=Highlight>Echoing Resonance</color>, Rover continuously restores HP for all team members: HP equal to {0} of Rover's ATK will be restored every second for {1}s.",
        detailNum: ["20%", "5"],
        itemImg: "https://cdn.wanderer.moe/wuthering-waves/icons/T_IconDevice_nannvzhuM4_UI.png",
        sequenceBuffType: "No Buff",
        },
        {
        node: "Sequence Node 5",
        name: "Temporal Virtuoso",
        description: "Rover's Resonance Liberation DMG Bonus is increased by {0}.",
        detailNum: ["40%"],
        itemImg: "https://cdn.wanderer.moe/wuthering-waves/icons/T_IconDevice_nannvzhuM5_UI.png",
        sequenceBuffType: "Character Buff",
        sequenceBuffAtrribute: ["Resonanc Liberation Damage Bonus"],
        sequenceBuff: [40]
        },
        {
        node: "Sequence Node 6",
        name: "Echoes of Wanderlust",
        description: "Resonance Skill <color=Highlight>Resonating Slashes</color> and Resonance Skill <color=Highlight>Resonating Spin</color> reduces the target's Spectro DMG RES by {0} on hit for {1}s.",
        detailNum: ["10%", "20"],
        itemImg: "https://cdn.wanderer.moe/wuthering-waves/icons/T_IconDevice_nannvzhuM6_UI.png",
        sequenceBuffType: "Enemy Skill Debuff",
        sequenceBuffAtrribute: ["Spectro Damage Resistance"],
        sequenceBuff: [10]
        }
    ]
    },
    {
    name: "Rover-Havoc",
    charaId: 1002,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Havoc",
    weapon: "Sword",
    bio: `Awakened with an unknown past, Rover embarks on a journey to uncover the truths.
As secrets are unveiled, Rover establishes deeper connections with the world.`,
    images: {
            portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_zhujue_UI.png",
            icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/RoverHavocFemale.png",
            model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Female_Rover_Model.png"
        },
    asension: {
        charaAsension: [
            {
                item: "LF Whisperin Core",
                id: 1,
                value: "4"
            },
            {
                item: "MF Whisperin Core",
                id: 2,
                value: "12"
            },
            {
                item: "HF Whisperin Core",
                id: 3,
                value: "12"
            },
            {
                item: "FF Whisperin Core",
                id: 4,
                value: "4"
            },
            {
                item: "Mysterious Code",
                id: 5,
                value: "5"
            },
            {
                item: "Pecok Flower",
                id: 6,
                value: "50"
            },
            {
                item: "Shell Credits",
                id: 7,
                value: "170,000"
            }
        ],
        forteAsension: [
            {
                item: "LF Whisperin Core",
                id: 1,
                value: "25"
            },
            {
                item: "MF Whisperin Core",
                id: 2,
                value: "28"
            },
            {
                item: "HF Whisperin Core",
                id: 3,
                value: "40"
            },
            {
                item: "FF Whisperin Core",
                id: 4,
                value: "57"
            },
            {
                item: "Inert Metallic Drip",
                id: 5,
                value: "25"
            },
            {
                item: "Reactive Metallic Drip",
                id: 6,
                value: "28"
            },
            {
                item: "Polarized Metallic Drip",
                id: 7,
                value: "55"
            },
            {
                item: "Heterized Metallic Drip",
                id: 8,
                value: "67"
            },
            {
                item: "Unending Destruction",
                id: 9,
                value: "26"
            },
            {
                item: "Shell Credits",
                id: 10,
                value: "2,030,000"
            },
        ]
    },
    stats: {
        base_hp: 912,
        base_atk: 33,
        base_def: 112,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 1.12,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
        {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Tuneslayer',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Rover-Havoc performs up to 5 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Rover-Havoc consumes Stamina to attack, dealing <span class="Dark">Havoc DMG</span>.\n
                Use <span class="Highlight">Basic Attack</span> after casting Heavy Attack to cast Basic Attack 4.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Rover-Havoc consumes Stamina to cast a Mid-Air Plunging Attack, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful Dodge to attack the target, dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["28.50%", "30.84%", "33.18%", "36.45%", "38.79%", "41.48%", "45.21%", "48.95%", "52.69%", "56.67%", "61.34%", "66.01%", "70.69%", "75.36%", "80.04%", "84.71%", "89.38%", "94.06%", "98.73%", "103.41%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["28.50%*2", "30.84%*2", "33.18%*2", "36.45%*2", "38.79%*2", "41.48%*2", "45.21%*2", "48.95%*2", "52.69%*2", "56.67%*2", "61.34%*2", "66.01%*2", "70.69%*2", "75.36%*2", "80.04%*2", "84.71%*2", "89.38%*2", "94.06%*2", "98.73%*2", "103.41%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["42.75%", "46.26%", "49.77%", "54.67%", "58.18%", "62.21%", "67.82%", "73.43%", "79.04%", "85.00%", "92.01%", "99.02%", "106.03%", "113.04%", "120.05%", "127.06%", "134.07%", "141.08%", "148.10%", "155.11%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["20.27%*3", "21.93%*3", "23.60%*3", "25.92%*3", "27.58%*3", "29.50%*3", "32.15%*3", "34.81%*3", "37.47%*3", "40.30%*3", "43.62%*3", "46.94%*3", "50.27%*3", "53.59%*3", "56.92%*3", "60.24%*3", "63.56%*3", "66.89%*3", "70.21%*3", "73.53%*3"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Part 5 Damage",
                        skillDetailNum: [{
                            values: ["47.50%*2", "51.40%*2", "55.29%*2", "60.75%*2", "64.64%*2", "69.12%*2", "75.35%*2", "81.59%*2", "87.82%*2", "94.44%*2", "102.23%*2", "110.02%*2", "117.81%*2", "125.60%*2", "133.39%*2", "141.18%*2", "148.97%*2", "156.76%*2", "164.55%*2", "172.34%*2"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["48.00%", "51.94%", "55.88%", "61.39%", "65.32%", "69.85%", "76.15%", "82.44%", "88.74%", "95.43%", "103.31%", "111.18%", "119.05%", "126.92%", "134.79%", "142.67%", "150.54%", "158.41%", "166.28%", "174.15%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        skillDetailNum: [{
                            values: ["58.90%", "63.73%", "68.56%", "75.33%", "80.16%", "85.71%", "93.44%", "101.17%", "108.89%", "117.10%", "126.76%", "136.42%", "146.08%", "155.74%", "165.40%", "175.06%", "184.72%", "194.38%", "204.04%", "213.70%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["90.25%", "97.66%", "105.06%", "115.42%", "122.82%", "131.33%", "143.17%", "155.01%", "166.85%", "179.43%", "194.23%", "209.03%", "223.83%", "238.64%", "253.44%", "268.24%", "283.04%", "297.84%", "312.64%", "327.44%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Heavy Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Mid-Air Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 10
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Wingblade',
                skillDescription: `Transforms sound into feathers, dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["144.00%*2", "155.81%*2", "167.62%*2", "184.15%*2", "195.96%*2", "209.54%*2", "228.43%*2", "247.32%*2", "266.22%*2", "286.29%*2", "309.91%*2", "333.52%*2", "357.14%*2", "380.76%*2", "404.37%*2", "427.99%*2", "451.60%*2", "475.22%*2", "498.84%*2", "522.45%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 3
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liberation',
                skillName: 'Deadening Abyss',
                skillDescription: `Gather the echoes between Rover's palms to attack a target, dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["765.00%", "827.73%", "890.46%", "978.29%", "1041.02%", "1113.16%", "1213.52%", "1313.89%", "1414.26%", "1520.90%", "1646.36%", "1771.82%", "1897.28%", "2022.74%", "2148.20%", "2273.66%", "2399.12%", "2524.58%", "2650.04%", "2775.50%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 4
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Instant of Annihilation',
                skillDescription: `Attack the target, dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["100.00%", "108.20%", "116.40%", "127.88%", "136.08%", "145.51%", "158.63%", "171.75%", "184.87%", "198.81%", "215.21%", "231.61%", "248.01%", "264.41%", "280.81%", "297.21%", "313.61%", "330.01%", "346.41%", "362.81%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Soundweaver',
                skillDescription: `Summons a Havoc Field to attack a target, dealing {1} <span class="Dark">Havoc DMG</span> to targets within range every {0}s for {2}s.`,
                skillDetailNum: ["2", "143.3%", "6"],
                multipliers: [
                    
                ]
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Umbra Eclipse',
                skillDescription: `<span class="Title">Devastation</span>\n
                When "Umbra" is full, hold <span class="Highlight">Basic Attack</span> to cast <span class="Highlight">Devastation</span> to attack the target, dealing <span class="Dark">Havoc DMG</span>, considered as Heavy Attack damage.\n
                <div class="gap"></div>
                <span class="Title">Dark Surge</span>\n
                After casting <span class="Highlight">Devastation</span>, Rover enters the <span class="Highlight">Dark Surge</span> state. In this state:\n
                <span class="Highlight">Basic Attack</span> is replaced with <span class="Highlight">Enhanced Basic Attack</span>, which performs up to 5 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>;\n
                <span class="Highlight">Heavy Attack</span> is replaced with <span class="Highlight">Enhanced Heavy Attack</span>;\n
                Use <span class="Highlight">Basic Attack</span> after casting <span class="Highlight">Enhanced Heavy Attack</span> to cast Heavy Attack <span class="Highlight">Thwackblade</span> to attack the target, dealing <span class="Dark">Havoc DMG</span>, considered as Heavy Attack damage;\n
                Use <span class="Highlight">Basic Attack</span> after casting Heavy Attack <span class="Highlight">Thwackblade</span> to cast <span class="Highlight"> Enhanced Basic Attack 3</span> to attack the target, dealing <span class="Dark">Havoc DMG</span>;\n
                Resonance Skill <span class="Highlight">Wingblade</span> is replaced with Resonance Skill <span class="Highlight">Lifetaker</span>, transforming sounds into blades to attack the target, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Umbra</span>\n
                Rover can hold up to 100 points of Umbra.\n
                Normal Attack <span class="Highlight">Tuneslayer</span> recovers Umbra on hit.\n
                Resonance Skill <span class="Highlight">Wingblade</span> recovers Umbra when cast.\n
                Resonance Skill <span class="Highlight">Lifetaker</span> recovers Umbra when cast.\n
                Intro Skill <span class="Highlight">Instant of Annihilation</span> recovers Umbra when cast.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Devastation Damage",
                        skillDetailNum: [{
                            values: ["114.75%", "124.16%", "133.57%", "146.75%", "156.16%", "166.98%", "182.03%", "197.09%", "212.14%", "228.14%", "246.96%", "265.78%", "284.60%", "303.42%", "322.23%", "341.05%", "359.87%", "378.69%", "397.51%", "416.33%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Umbra: Basic Attack Part 1 Damage",
                        skillDetailNum: [{
                            values: ["28.35%", "30.68%", "33.00%", "36.26%", "38.58%", "41.26%", "44.98%", "48.70%", "52.42%", "56.37%", "61.02%", "65.67%", "70.32%", "74.97%", "79.61%", "84.26%", "88.91%", "93.56%", "98.21%", "102.86%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Umbra: Basic Attack Part 2 Damage",
                        skillDetailNum: [{
                            values: ["47.25%", "51.13%", "55.00%", "60.43%", "64.30%", "68.76%", "74.96%", "81.16%", "87.36%", "93.94%", "101.69%", "109.44%", "117.19%", "124.94%", "132.69%", "140.44%", "148.19%", "155.93%", "163.68%", "171.43%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Umbra: Basic Attack Part 3 Damage",
                        skillDetailNum: [{
                            values: ["78.30%", "84.73%", "91.15%", "100.14%", "106.56%", "113.94%", "124.21%", "134.49%", "144.76%", "155.67%", "168.51%", "181.36%", "194.20%", "207.04%", "219.88%", "232.72%", "245.56%", "258.40%", "271.24%", "284.09%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Umbra: Basic Attack Part 4 Damage",
                        skillDetailNum: [{
                            values: ["18.68%*3+56.03%", "20.21%*3+60.62%", "21.74%*3+65.22%", "23.89%*3+71.65%", "25.42%*3+76.24%", "27.18%*3+81.53%", "29.63%*3+88.88%", "32.08%*3+96.23%", "34.53%*3+103.58%", "37.13%*3+111.39%", "40.20%*3+120.58%", "43.26%*3+129.76%", "46.32%*3+138.95%", "49.38%*3+148.14%", "52.45%*3+157.33%", "55.51%*3+166.52%", "58.57%*3+175.71%", "61.63%*3+184.89%", "64.70%*3+194.08%", "67.76%*3+203.27%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Umbra: Basic Attack Part 5 Damage",
                        skillDetailNum: [{
                            values: ["14.35%*4+57.38%", "15.52%*4+62.08%", "16.70%*4+66.79%", "18.35%*4+73.38%", "19.52%*4+78.08%", "20.88%*4+83.49%", "22.76%*4+91.02%", "24.64%*4+98.55%", "26.52%*4+106.07%", "28.52%*4+114.07%", "30.87%*4+123.48%", "33.23%*4+132.89%", "35.58%*4+142.30%", "37.93%*4+151.71%", "40.28%*4+161.12%", "42.64%*4+170.53%", "44.99%*4+179.94%", "47.34%*4+189.35%", "49.69%*4+198.76%", "52.05%*4+208.17%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Umbra: Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["64.80%", "70.12%", "75.43%", "82.87%", "88.18%", "94.30%", "102.80%", "111.30%", "119.80%", "128.83%", "139.46%", "150.09%", "160.72%", "171.34%", "181.97%", "192.60%", "203.22%", "213.85%", "224.48%", "235.11%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Umbra: Thwackblade Damage",
                        skillDetailNum: [{
                            values: ["63.70%+5.00%*4", "68.93%+5.41%*4", "74.15%+5.82%*4", "81.46%+6.40%*4", "86.69%+6.81%*4", "92.69%+7.28%*4", "101.05%+7.94%*4", "109.41%+8.59%*4", "117.77%+9.25%*4", "126.65%+9.95%*4", "137.09%+10.77%*4", "147.54%+11.59%*4", "157.99%+12.41%*4", "168.43%+13.23%*4", "178.88%+14.05%*4", "189.33%+14.87%*4", "199.77%+15.69%*4", "210.22%+16.51%*4", "220.67%+17.33%*4", "231.11%+18.15%*4"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Umbra: Plunging Attack Damage",
                        skillDetailNum: [{
                            values: ["62.00%", "67.09%", "72.17%", "79.29%", "84.37%", "90.22%", "98.36%", "106.49%", "114.62%", "123.27%", "133.44%", "143.60%", "153.77%", "163.94%", "174.11%", "184.28%", "194.44%", "204.61%", "214.78%", "224.95%"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Umbra: Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["159.30%", "172.37%", "185.43%", "203.72%", "216.78%", "231.80%", "252.70%", "273.60%", "294.50%", "316.71%", "342.83%", "368.96%", "395.08%", "421.21%", "447.34%", "473.46%", "499.59%", "525.71%", "551.84%", "577.96%"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Umbra: Heavy Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 11
                    }, {
                        attributeName: "Umbra: Plunging Stamina Cost",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 12
                    }, {
                        attributeName: "Umbra: Lifetaker Damage",
                        skillDetailNum: [{
                            values: ["139.00%*2+5.00%*4", "150.40%*2+5.41%*4", "161.80%*2+5.82%*4", "177.76%*2+6.40%*4", "189.16%*2+6.81%*4", "202.26%*2+7.28%*4", "220.50%*2+7.94%*4", "238.74%*2+8.59%*4", "256.97%*2+9.25%*4", "276.35%*2+9.95%*4", "299.15%*2+10.77%*4", "321.94%*2+11.59%*4", "344.74%*2+12.41%*4", "367.53%*2+13.23%*4", "390.33%*2+14.05%*4", "413.13%*2+14.87%*4", "435.92%*2+15.69%*4", "458.72%*2+16.51%*4", "481.51%*2+17.33%*4", "504.31%*2+18.15%*4"]
                        }],
                        index: 13
                    }, {
                        attributeName: "Umbra: Lifetaker Cooldown",
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 14
                    }, {
                        attributeName: "Lifetaker Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 15
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Metamorph',
                skillDescription: `In the <span class="Highlight">Dark Surge</span> state, Havoc DMG Bonus is increased by {0}.`,
                skillDetailNum: ["20%"],
                multipliers: [],
                skillBuffAtrribute: ["Havoc Damage Bonus"],
                skillBuff: [20]
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Bleak Crescendo',
                skillDescription: `While in the <span class="Highlight">Dark Surge</span> state, <span class="Highlight">Basic Attack</span> recovers {0} Resonance Energy when it hits a target, and this effect can be triggered once per second.`,
                skillDetailNum: ["1"],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'N/A',
                skillDescription: ``,
                skillDetailNum: [],
                multipliers: []
            }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Cryptic Insight",
            description: `Resonance Skill DMG Bonus is increased by {0}.`,
            detailNum: ["30%"],
            sequenceBuffType: "Character Buff",
            sequenceBuffAtrribute: ["Resonance Skill Damage Bonus"],
            sequenceBuff: [30],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/icons/T_IconDevice_ZhujueDarkM1_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Waning Crescent",
            description: `Reset Resonance Skill's Cooldown when Rover enters the <color=Highlight>Dark Surge</color> state by casting Heavy Attack <color=Highlight>Devastation</color>.`,
            detailNum: [],
            sequenceBuffType: "No Buff",
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/icons/T_IconDevice_ZhujueDarkM2_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Surging Resonance",
            description: `In the <color=Highlight>Dark Surge</color> state, Basic Attack V restores HP equal to {0} of total HP lost on hit.`,
            detailNum: ["10%"],
            sequenceBuffType: "No Buff",
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/icons/T_IconDevice_ZhujueDarkM3_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Annihilated Silence",
            description: `Heavy Attack <color=Highlight>Devastation</color> and Resonance Liberation <color=Highlight>Deadening Abyss</color> reduces enemy Havoc RES by {0} for {1}s on hit.`,
            detailNum: ["10%", "20"],
            sequenceBuffType: "Enemy Skill Debuff",
            sequenceBuffAtrribute: ["Havoc Damage Resistance"],
            sequenceBuff: [10],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1700_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Aeon Symphony",
            description: `In the <color=Highlight>Dark Surge</color> state, <color=Highlight>Basic Attack V</color> deals an additional <color=Highlight>Havoc damage</color> equal to {0} of <color=Highlight>Basic Attack V</color> damage.`,
            detailNum: ["50%"],
            sequenceBuffType: "Extra Skill",
            sequenceBuffAtrribute: ["Aeon Symphony"],
            sequenceBuff: [50],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1700_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Ebbing Undercurrent",
            description: `In the <color=Highlight>Dark Surge</color> state, Rover's Crit. Rate is increased by {0}.`,
            detailNum: ["25%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Crit. Rate"],
            sequenceBuff: [25],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1700_UI.png"
        }
    ]
    },
    {
    name: "Baizhi",
    charaId: 1101,
    rarity: {
        alt: "4 Star",
        img: rarity4Star
    },
    element: "Glacio",
    weapon: "Rectifier",
    bio: `Baizhi, a researcher at Huaxu Academy, is known for her sharp intellect and precise methods.
Despite appearing aloof, she is approachable to those who seek knowledge.
Her insatiable thirst for understanding drives her to tirelessly study Remnant Energy.
She will stop at nothing until its mysteries are unraveled, even if it means dedicating her entire life to the pursuit.`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_bailian_UI.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Baizhi.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Baizhi_Full_Sprite.png"
    },
    asension: {
        charaAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "4"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "12"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "12"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "4"
        },
        {
            item: "Sound-Keeping Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Lanternberry",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "25"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "28"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "40"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "57"
        },
        {
            item: "Lento Helix",
            id: 5,
            value: "25"
        },
        {
            item: "Adagio Helix",
            id: 6,
            value: "28"
        },
        {
            item: "Andante Helix",
            id: 7,
            value: "55"
        },
        {
            item: "Presto Helix",
            id: 8,
            value: "67"
        },
        {
            item: "Monument Bell",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 1025,
        base_atk: 17,
        base_def: 82,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 175,
        bonus_ele: 0,
        bonus_atk: 0,
        bonus_def: 0,
        bonus_heal: 12,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 1.12
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Destined Promise',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Baizhi instructs You'tan to perform up to 4 consecutive attacks, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Baizhi continuously consumes Stamina to command You'tan to attack enemies, dealing <span class="Ice">Glacio DMG</span>. During Heavy Attack, Baizhi can command You'tan to move.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Baizhi consumes Stamina and summons You’tan in mid-air to perform a Plunging Attack, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Ice">Glacio DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["32.94%", "35.64%", "38.34%", "42.12%", "44.82%", "47.93%", "52.25%", "56.57%", "60.89%", "65.48%", "70.88%", "76.28%", "81.68%", "87.08%", "92.48%", "97.88%", "103.29%", "108.69%", "114.09%", "119.49%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["39.52%", "42.76%", "46.01%", "50.54%", "53.78%", "57.51%", "62.69%", "67.88%", "73.06%", "78.57%", "85.05%", "91.54%", "98.02%", "104.50%", "110.98%", "117.46%", "123.94%", "130.42%", "136.90%", "143.39%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["6.59%*7", "7.13%*7", "7.67%*7", "8.43%*7", "8.97%*7", "9.59%*7", "10.45%*7", "11.32%*7", "12.18%*7", "13.10%*7", "14.18%*7", "15.26%*7", "16.34%*7", "17.42%*7", "18.50%*7", "19.58%*7", "20.66%*7", "21.74%*7", "22.82%*7", "23.90%*7"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["39.52%", "42.76%", "46.01%", "50.54%", "53.78%", "57.51%", "62.69%", "67.88%", "73.06%", "78.57%", "85.05%", "91.54%", "98.02%", "104.50%", "110.98%", "117.46%", "123.94%", "130.42%", "136.90%", "143.39%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["24.58%", "26.60%", "28.61%", "31.43%", "33.45%", "35.77%", "38.99%", "42.21%", "45.44%", "48.86%", "52.90%", "56.93%", "60.96%", "64.99%", "69.02%", "73.05%", "77.08%", "81.11%", "85.14%", "89.17%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        skillDetailNum: [{
                            values: ["39.68%", "42.94%", "46.19%", "50.75%", "54.00%", "57.74%", "62.95%", "68.16%", "73.36%", "78.89%", "85.40%", "91.91%", "98.42%", "104.92%", "111.43%", "117.94%", "124.45%", "130.95%", "137.46%", "143.97%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["89.86%", "97.23%", "104.60%", "114.91%", "122.28%", "130.75%", "142.54%", "154.33%", "166.12%", "178.65%", "193.38%", "208.12%", "222.86%", "237.59%", "252.33%", "267.07%", "281.80%", "296.54%", "311.28%", "326.01%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Heavy Attack Stamina Consumption (per second)",
                        skillDetailNum: [{
                            values: ["12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Mid-Air Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 9
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Emergency Plan',
                skillDescription: `Baizhi calls You'tan to attack the target, dealing <span class="Ice">Glacio DMG</span> while restoring HP for the entire team.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["8.02%", "8.68%", "9.34%", "10.26%", "10.91%", "11.67%", "12.72%", "13.77%", "14.82%", "15.94%", "17.26%", "18.57%", "19.89%", "21.20%", "22.52%", "23.83%", "25.15%", "26.46%", "27.77%", "29.09%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Healing",
                        skillDetailNum: [{
                            values: ["575+2.90%", "623+3.14%", "670+3.37%", "736+3.71%", "783+3.94%", "837+4.22%", "913+4.60%", "988+4.98%", "1064+5.36%", "1144+5.76%", "1238+6.24%", "1332+6.71%", "1427+7.19%", "1521+7.66%", "1615+8.14%", "1709+8.61%", "1804+9.09%", "1898+9.56%", "1992+10.04%", "2087+10.51%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 4
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Momentary Union',
                skillDescription: `Baizhi summons You'tan to restore HP for the entire team, generating {0} stacks of <span class="Highlight">Remnant Entities</span>.\n
                <div class="gap"></div>
                <span class="Title">Remnant Entities</span>\n
                Remnant Entities follow the active team members and automatically consume {2} stacks of <span class="Highlight">Remnant Entities</span> to attack the targets every {1}s, dealing <span class="Ice">Glacio DMG</span> on hit while restoring HP to all team members nearby.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Remnant Entities Damage",
                        skillDetailNum: [{
                            values: ["2.05%", "2.22%", "2.39%", "2.62%", "2.79%", "2.98%", "3.25%", "3.52%", "3.79%", "4.07%", "4.41%", "4.74%", "5.08%", "5.41%", "5.75%", "6.08%", "6.42%", "6.75%", "7.09%", "7.42%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Remnant Entities Healing",
                        skillDetailNum: [{
                            values: ["349+1.42%", "378+1.53%", "406+1.65%", "446+1.81%", "475+1.93%", "508+2.06%", "554+2.25%", "599+2.43%", "645+2.62%", "694+2.82%", "751+3.05%", "808+3.28%", "865+3.52%", "923+3.75%", "980+3.98%", "1037+4.21%", "1094+4.45%", "1151+4.68%", "1209+4.91%", "1266+5.14%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Momentary Union Healing",
                        skillDetailNum: [{
                            values: ["310+1.26%", "336+1.36%", "361+1.47%", "397+1.61%", "422+1.71%", "452+1.83%", "492+2.00%", "533+2.16%", "574+2.33%", "617+2.51%", "668+2.71%", "718+2.92%", "769+3.12%", "820+3.33%", "871+3.54%", "922+3.74%", "973+3.95%", "1024+4.16%", "1074+4.36%", "1125+4.57%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Overflowing Frost',
                skillDescription: `Baizhi calls You'tan to perform 1 plunging attack, dealing <span class="Ice">Glacio DMG</span> while restoring HP to all team members nearby.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["40.00%", "43.28%", "46.56%", "51.16%", "54.44%", "58.21%", "63.46%", "68.70%", "73.95%", "79.53%", "86.09%", "92.65%", "99.21%", "105.77%", "112.33%", "118.89%", "125.45%", "132.01%", "138.57%", "145.13%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Overflowing Frost Healing",
                        skillDetailNum: [{
                            values: ["75+0.38%", "82+0.41%", "88+0.44%", "96+0.48%", "103+0.51%", "110+0.55%", "119+0.60%", "129+0.65%", "139+0.70%", "150+0.75%", "162+0.81%", "174+0.88%", "187+0.94%", "199+1.00%", "211+1.06%", "223+1.12%", "236+1.19%", "248+1.25%", "260+1.31%", "273+1.37%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 3
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Rejuvinating Flow',
                skillDescription: `Baizhi restores HP equal to {1} of her max HP to the next character (or other characters on a nearby team that activates an Outro Skill) every {0}s for {2}s. Resonators gaining this healing also gain {3} all-Type DMG Deepen for {4}s.`,
                skillDetailNum: ["3", "1.54%", "30", "15%", "6"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Cycle of Life',
                skillDescription: `<span class="Title">You'tan</span>\n
                A Remnant Creature that answers to Baizhi’s mind and desires while sharing all her attributes. You’tan goes back to Baizhi when Baizhi dodges.\n
                <div class="gap"></div>
                <span class="Title">Concentration</span>\n
                Baizhi consumes all "Concentrations" when casting <span class="Highlight">Heavy Attack</span> or Resonance Skill <span class="Highlight">Emergency Plan</span> to continuously restore HP for Characters nearby. Each {0} "Concentration" consumed restores HP for 1 time every {2}s.\n
                When Baizhi consumes "Concentration" to cast <span class="Highlight">Heavy Attack</span>, Baizhi additionally restores Con. Energy and Resonance Energy;\n
                When Baizhi consumes "Concentration" to cast Resonance Skill <span class="Highlight">Emergency Plan</span>, Baizhi additionally restores Con. Energy.\n
                <div class="gap"></div>
                <span class="Title">Concentration</span>\n
                Baizhi can hold up to {3} "Concentrations".\n
                Baizhi obtains {4} "Concentration" for every <span class="Highlight">Basic Attack</span> on hit.`,
                skillDetailNum: ["1", "1", "2", "4", "1"],
                multipliers: [
                    {
                        attributeName: "Concentration Healing",
                        skillDetailNum: [{
                            values: ["32+0.16%", "34+0.17%", "37+0.18%", "40+0.20%", "43+0.21%", "46+0.23%", "50+0.25%", "54+0.27%", "58+0.29%", "63+0.31%", "68+0.34%", "73+0.36%", "78+0.39%", "83+0.42%", "88+0.44%", "93+0.47%", "99+0.49%", "104+0.52%", "109+0.55%", "114+0.57%"]
                        }],
                        index: 1
                    }, {
                        attributeName: 'Heavy Attack with "Concentration" Con. Energy Regen',
                        skillDetailNum: [{
                            values: ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
                        }],
                        index: 2
                    }, {
                        attributeName: 'Resonance Skill with "Concentration" Con. Energy Regen',
                        skillDetailNum: [{
                            values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
                        }],
                        index: 3
                    }, {
                        attributeName: 'Heavy Attack "Concentration" Con. Energy Regen',
                        skillDetailNum: [{
                            values: ["2.5", "2.5", "2.5", "2.5", "2.5", "2.5", "2.5", "2.5", "2.5", "2.5", "2.5", "2.5", "2.5", "2.5", "2.5", "2.5", "2.5", "2.5", "2.5", "2.5"]
                        }],
                        index: 4
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Harmonic Range',
                skillDescription: `When Baizhi casts Resonance Skill <span class="Highlight">Emergency Plan</span>, You'tan generates a field of <span class="Highlight">Euphonia</span> that lasts for {0}s.\n
                <div class="gap"></div>
                <span class="Title">Euphonia</span>\n
                ATK of the Resonators who picks up Euphonia is increased by {1} for {2}s.`,
                skillDetailNum: ["15", "15%", "20"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Stimulus Feedback',
                skillDescription: `For every <span class="Highlight">Heavy Attack</span> on hit, Baizhi restores HP to the nearby team member with the least HP equal to {0} of Baizhi's max HP.`,
                skillDetailNum: ["0.25%"],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Complex Simplicity",
            description: 'Resonance Skill <color=Highlight>Emergency Plan</color> additionally restores {1} Resonance Energy for every {0} "Concentration" consumed.',
            detailNum: ["1", "2.5"],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1103_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Silent Tundra",
            description: `Resonance Skill <color=Highlight>Emergency Plan</color> increases Baizhi's Glacio DMG Bonus by {1} and her Healing by {2} if she has {0} "Concentration". These effects last for {3}s.`,
            detailNum: ["4", "15%", "15%", "12"],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1103_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Veritas Lux Mea",
            description: `Intro Skill <color=Highlight>Overflowing Frost</color> increases Baizhi's Max HP by {0} for {1}s.`,
            detailNum: ["12%", "10"],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1103_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Eternal Verity",
            description: `Upon casting Resonance Liberation <color=Highlight>Momentary Union</color>, Resonance Liberation <color=Highlight>Remnant Entities</color> gains the following enhancements:
-<color=Highlight>Remnant Entities</color> can be performed {0} more time(s);
-Healing multiplier of <color=Highlight>Remnant Entities</color> is increased by {1};
-<color=Highlight>Remnant Entities</color> deals additional Glacio DMG equal to {2} of Baizhi's Max HP.`,
            detailNum: ["2", "20%", "1.20%"],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1103_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "A Wish Answered",
            description: `If a team member is downed when Baizhi is alive on the team, immediately revive them and restore their HP to {0} of their Max HP. This effect can be triggered once every {1} minute(s).`,
            detailNum: ["100%", "10"],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1103_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Seeker's Devotion",
            description: `When <color=Highlight>Euphonia</color> is picked up, increase the Glacio DMG Bonus of all characters nearby by {0} for {1}s.`,
            detailNum: ["12%", "20"],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1103_UI.png"
        }
    ]
    },
    {
    name: "Sanhua",
    charaId: 1102,
    rarity: {
        alt: "5 Star",
        img: rarity4Star
    },
    element: "Glacio",
    weapon: "Sword",
    bio: `A loyal and reliable guard for Jinhsi, Sanhua is composed and reserved.Sanhua perceives a world distinctly different from that in the eyes of others, and her body temperature is below normal.
Her Forte allows her to cool the surrounding air and conjure snow.
To maintain emotional stability and prevent Overclocking, Sanhua finds solace in the art of swordplay.
This allows her to master her Forte with graceful ease and alleviates the burden on her body.`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_shanhua_UI.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Sanhua.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Sanhua_Model.png"
    },
    asension: {
        charaAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "4"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "12"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "12"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "4"
        },
        {
            item: "Sound-Keeping Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Wintry Bell",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "25"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "28"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "40"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "57"
        },
        {
            item: "Inert Metallic Drip",
            id: 5,
            value: "25"
        },
        {
            item: "Reactive Metallic Drip",
            id: 6,
            value: "28"
        },
        {
            item: "Polarized Metallic Drip",
            id: 7,
            value: "55"
        },
        {
            item: "Heterized Metallic Drip",
            id: 8,
            value: "67"
        },
        {
            item: "Unending Destruction",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 805,
        base_atk: 22,
        base_def: 77,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 100,
        bonus_ele: 1.12,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Frigid Light',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Sanhua performs up to 5 consecutive attacks, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Sanhua consumes Stamina to launch attacks, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Sanhua consumes Stamina to perform a Mid-Air Plunging Attack, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Ice">Glacio DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["24.50%", "26.51%", "28.52%", "31.34%", "33.34%", "35.65%", "38.87%", "42.08%", "45.30%", "48.71%", "52.73%", "56.75%", "60.77%", "64.79%", "68.80%", "72.82%", "76.84%", "80.86%", "84.88%", "88.89%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["37.10%", "40.15%", "43.19%", "47.45%", "50.49%", "53.99%", "58.86%", "63.72%", "68.59%", "73.76%", "79.85%", "85.93%", "92.02%", "98.10%", "104.19%", "110.27%", "116.35%", "122.44%", "128.52%", "134.61%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["10.85%*4", "11.74%*4", "12.63%*4", "13.88%*4", "14.77%*4", "15.79%*4", "17.22%*4", "18.64%*4", "20.06%*4", "21.58%*4", "23.36%*4", "25.13%*4", "26.91%*4", "28.69%*4", "30.47%*4", "32.25%*4", "34.03%*4", "35.81%*4", "37.59%*4", "39.37%*4"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["19.95%*2", "21.59%*2", "23.23%*2", "25.52%*2", "27.15%*2", "29.03%*2", "31.65%*2", "34.27%*2", "36.89%*2", "39.67%*2", "42.94%*2", "46.21%*2", "49.48%*2", "52.75%*2", "56.03%*2", "59.30%*2", "62.57%*2", "65.84%*2", "69.11%*2", "72.39%*2"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Part 5 Damage",
                        skillDetailNum: [{
                            values: ["117.60%", "127.25%", "136.89%", "150.39%", "160.04%", "171.12%", "186.55%", "201.98%", "217.41%", "233.81%", "253.09%", "272.38%", "291.66%", "310.95%", "330.24%", "349.52%", "368.81%", "388.10%", "407.38%", "426.67%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["11.20%*5", "12.12%*5", "13.04%*5", "14.33%*5", "15.25%*5", "16.30%*5", "17.77%*5", "19.24%*5", "20.71%*5", "22.27%*5", "24.11%*5", "25.95%*5", "27.78%*5", "29.62%*5", "31.46%*5", "33.29%*5", "35.13%*5", "36.97%*5", "38.80%*5", "40.64%*5"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Mid-air Attack Damage",
                        skillDetailNum: [{
                            values: ["43.40%", "46.96%", "50.52%", "55.50%", "59.06%", "63.16%", "68.85%", "74.54%", "80.24%", "86.29%", "93.41%", "100.52%", "107.64%", "114.76%", "121.88%", "128.99%", "136.11%", "143.23%", "150.35%", "157.46%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["84.00%", "90.89%", "97.78%", "107.42%", "114.31%", "122.23%", "133.25%", "144.27%", "155.30%", "167.01%", "180.78%", "194.56%", "208.33%", "222.11%", "235.89%", "249.66%", "263.44%", "277.21%", "290.99%", "304.77%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Heavy Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Mid-air Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 10
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Eternal Frost',
                skillDescription: `Sanhua sends an air blade to create {0} "Ice Prism" cross the ground, dealing <span class="Ice">Glacio DMG</span>.`,
                skillDetailNum: ["1"],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["181.00%", "195.85%", "210.69%", "231.47%", "246.31%", "263.38%", "287.13%", "310.87%", "334.62%", "359.85%", "389.54%", "419.22%", "448.90%", "478.59%", "508.27%", "537.96%", "567.64%", "597.32%", "627.01%", "656.69%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 3
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Glacial Gaze',
                skillDescription: `Sanhua deals <span class="Ice">Glacio DMG</span> and creates {0} "Glacier".`,
                skillDetailNum: ["1", "5"],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["407.16%", "440.55%", "473.94%", "520.68%", "554.07%", "592.46%", "645.88%", "699.30%", "752.72%", "809.48%", "876.25%", "943.03%", "1009.80%", "1076.58%", "1143.35%", "1210.13%", "1276.90%", "1343.67%", "1410.45%", "1477.22%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 4
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Freezing Thorns',
                skillDescription: `Sanhua swings her blade downward and creates 1 "Ice Thorn", dealing <span class="Ice">Glacio DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["70.00%", "75.74%", "81.48%", "89.52%", "95.26%", "101.86%", "111.05%", "120.23%", "129.41%", "139.17%", "150.65%", "162.13%", "173.61%", "185.09%", "196.57%", "208.05%", "219.53%", "231.01%", "242.49%", "253.97%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Silversnow',
                skillDescription: `The next character (or other characters on a nearby team that activates an Outro Skill) gains {0} Basic Attack DMG Deepen for {1}s, or until the character is switched off field.`,
                skillDetailNum: ["38%", "14"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Clarity of Mind',
                skillDescription: `<span class="Title">Heavy Attack: Detonate</span>
                When holding <span class="Highlight">Basic Attack</span>, a cursor moves back and forth on the Forte Gauge. Release <span class="Highlight">Basic Attack</span> while cursor falls in the "Frostbite" area, to perform Heavy Attack <span class="Highlight">Detonate</span>, dealing <span class="Ice">Glacio DMG</span> considered as Heavy Attack damage.
                <div class="gap"></div>
                <span class="Title">Ice Burst</span>
                Sanhua’s Heavy Attack <span class="Highlight">Detonate</span> detonates all "Ice Thorns", "Ice Prisms" and "Glaciers" within her attack range, dealing <span class="Ice">Glacio DMG</span>. DMG done by Ice Burst is considered as Resonance Skill damage.
                <div class="gap"></div>
                <span class="Title">Frostbite Area</span>
                The "Frostbite" area expands with every {0} stack of "Clarity". "Clarity" stacks up to {1} times.
                Sanhua obtains {2} stack of "Clarity" upon performing <span class="Highlight">Basic Attack 5</span>.
                Sanhua obtains {3} stack of "Clarity" upon casting Intro Skill <span class="Highlight">Freezing Thorns</span>.
                Sanhua obtains {4} stack of "Clarity" upon casting Resonance Skill <span class="Highlight">Eternal Frost</span>.
                Sanhua obtains {5} stack(s) of "Clarity" upon casting Resonance Liberation <span class="Highlight">Glacial Gaze</span>.
                Upon casting Heavy Attack <span class="Highlight">Detonate</span>, all "Clarity" is removed.`,
                skillDetailNum: ["1", "2", "1", "1", "1", "2"],
                multipliers: [
                    {
                        attributeName: "Detonate Damage",
                        skillDetailNum: [{
                            values: ["93.70%*2", "101.39%*2", "109.07%*2", "119.83%*2", "127.51%*2", "136.35%*2", "148.64%*2", "160.93%*2", "173.23%*2", "186.29%*2", "201.66%*2", "217.02%*2", "232.39%*2", "247.76%*2", "263.12%*2", "278.49%*2", "293.86%*2", "309.22%*2", "324.59%*2", "339.96%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Glacier Burst Damage",
                        skillDetailNum: [{
                            values: ["70.00%", "75.74%", "81.48%", "89.52%", "95.26%", "101.86%", "111.05%", "120.23%", "129.41%", "139.17%", "150.65%", "162.13%", "173.61%", "185.09%", "196.57%", "208.05%", "219.53%", "231.01%", "242.49%", "253.97%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Ice Prism Burst Damage",
                        skillDetailNum: [{
                            values: ["40.00%", "43.28%", "46.56%", "51.16%", "54.44%", "58.21%", "63.46%", "68.70%", "73.95%", "79.53%", "86.09%", "92.65%", "99.21%", "105.77%", "112.33%", "118.89%", "125.45%", "132.01%", "138.57%", "145.13%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Ice Thorn Burst Damage",
                        skillDetailNum: [{
                            values: ["30.00%", "32.46%", "34.92%", "38.37%", "40.83%", "43.66%", "47.59%", "51.53%", "55.47%", "59.65%", "64.57%", "69.49%", "74.41%", "79.33%", "84.25%", "89.17%", "94.09%", "99.01%", "103.93%", "108.85%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Clarity Duration",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Glacier Duration",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Ice Prism Duration",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Ice Thorn Duration",
                        skillDetailNum: [{
                            values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Burst Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Glacier Burst Con. Damage Regen",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Ice Prism Burst Con. Damage Regen",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 11
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Condensation',
                skillDescription: `Damage dealt by Sanhua's Resonance Skill increased by {0} for {1}s after casting her Intro Skill.`,
                skillDetailNum: ["20%", "8"],
                multipliers: [],
                skillBuffAtrribute: ["Resonance Skill Damage Bonus"],
                skillBuff: [20]
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Avalanche',
                skillDescription: `Damage dealt by Sanhua's Forte Circuit <span class="Highlight">Ice Burst</span> is increased by {0} for {1}s after casting <span class="Highlight">Basic Attack 5</span>.`,
                skillDetailNum: ["20%", "8"],
                multipliers: [],
                skillBuffAtrribute: ["Forte Circuit", "Ice Burst"],
                skillBuff: [20]
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking.`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Solitude's Embrace",
            description: `<color=Highlight>Basic Attack V</color> increases Sanhua's Crit. Rate by {0} for {1}s.`,
            detailNum: ["15%", "10"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Crit. Rate"],
            sequenceBuff: [15],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1102_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Snowy Clarity",
            description: `Stamina cost of Heavy Attack <color=Highlight>Detonate</color> is reduced by {0}. When Sanhua casts Resonance Skill <color=Highlight>Eternal Frost</color>, her Anti-interruption is enhanced for {0}s.`,
            detailNum: ["10", "5"],
            sequenceBuffType: "No Buff",
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1102_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Anomalous Vision",
            description: `Sanhua's damage dealt is increased by {1} against targets with HP below {0}.`,
            detailNum: ["70%", "35%"],
            sequenceBuffType: "Additional Skill Buff",
            sequenceBuffAtrribute: ["Damage Increase"],
            sequenceBuff: [35],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1102_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Blade Mastery",
            description: `Resonance Liberation <color=Highlight>Glacial Gaze</color> restores {0} Resonance Energy. \r
DMG of the next Heavy Attack <color=Highlight>Detonate</color> within {1}s is increased by {2}.`,
            detailNum: ["10", "5", "120%"],
            sequenceBuffType: "Skill Damage Buff",
            sequenceBuffAtrribute: ["Detonate"],
            sequenceBuff: [120],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1102_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Unraveling Fate",
            description: `Crit. DMG of Forte Circuit <color=Highlight>Ice Burst</color> is increased by {0}. Ice Creations (Ice Thorn, Ice Prism, and Glacier) will explode even if they are not detonated.`,
            detailNum: ["100%"],
            sequenceBuffType: "Skill Critical Damage Buff",
            sequenceBuffAtrribute: ["Burst"],
            sequenceBuff: [100],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1102_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Daybreak Radiance",
            description: `After an Ice Prism or a Glacier is detonated, all team members' ATK is increased by {0} for {1}s, stacking up to {2} times.`,
            detailNum: ["10%", "20", "2"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [20],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1102_UI.png"
        }
    ]
    },
    {
    name: "Lingyang",
    charaId: 1103,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Glacio",
    weapon: "Gauntlets",
    bio: `Lingyang is a sincere, compassionate foreign visitor of the human community.
He joined the Liondance Troupe in Jinzhou by chance, aspiring to dispel fear and dread for others through his electrifying "Liondance".`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_lingyang_UI.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Lingyang.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Lingyang_Full_Sprite.png"
    },
    asension: {
        charaAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "4"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "12"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "12"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "4"
        },
        {
            item: "Sound-Keeping Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Coriolus",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "25"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "28"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "40"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "57"
        },
        {
            item: "Cadence Seed",
            id: 5,
            value: "25"
        },
        {
            item: "Cadence Bud",
            id: 6,
            value: "28"
        },
        {
            item: "Cadence Leaf",
            id: 7,
            value: "55"
        },
        {
            item: "Cadence Blossom",
            id: 8,
            value: "67"
        },
        {
            item: "Unending Destruction",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 831,
        base_atk: 35,
        base_def: 99,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 1.12,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Majestic Fists',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Lingyang performs up to 5 consecutive attacks, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Basic Attack: Feral Roars</span>\n
                After Resonance Skill <span class="Highlight">Furious Punches</span> is cast, <span class="Highlight">Basic Attack 5</span> is replaced with <span class="Highlight">Feral Roars</span>, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Lingyang consumes Stamina to attack the target, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Lingyang consumes Stamina to perform a Mid-air Plunging Attack, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Ice">Glacio DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["30.00%", "32.46%", "34.92%", "38.37%", "40.83%", "43.66%", "47.59%", "51.53%", "55.47%", "59.65%", "64.57%", "69.49%", "74.41%", "79.33%", "84.25%", "89.17%", "94.09%", "99.01%", "103.93%", "108.85%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["40.00%", "43.28%", "46.56%", "51.16%", "54.44%", "58.21%", "63.46%", "68.70%", "73.95%", "79.53%", "86.09%", "92.65%", "99.21%", "105.77%", "112.33%", "118.89%", "125.45%", "132.01%", "138.57%", "145.13%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["36.65%*2", "39.66%*2", "42.67%*2", "46.87%*2", "49.88%*2", "53.33%*2", "58.14%*2", "62.95%*2", "67.76%*2", "72.87%*2", "78.88%*2", "84.89%*2", "90.90%*2", "96.91%*2", "102.92%*2", "108.93%*2", "114.94%*2", "120.95%*2", "126.96%*2", "132.97%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["10.27%*5+21.99%", "11.11%*5+23.80%", "11.95%*5+25.60%", "13.13%*5+28.13%", "13.97%*5+29.93%", "14.94%*5+32.00%", "16.28%*5+34.89%", "17.63%*5+37.77%", "18.98%*5+40.66%", "20.41%*5+43.72%", "22.09%*5+47.33%", "23.77%*5+50.94%", "25.46%*5+54.54%", "27.14%*5+58.15%", "28.82%*5+61.76%", "30.50%*5+65.36%", "32.19%*5+68.97%", "33.87%*5+72.57%", "35.55%*5+76.18%", "37.24%*5+79.79%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Part 5 Damage",
                        skillDetailNum: [{
                            values: ["76.70%", "82.99%", "89.28%", "98.09%", "104.38%", "111.61%", "121.67%", "131.74%", "141.80%", "152.49%", "165.07%", "177.65%", "190.23%", "202.81%", "215.39%", "227.97%", "240.54%", "253.12%", "265.70%", "278.28%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Feral Roars Damage",
                        skillDetailNum: [{
                            values: ["40.00%*2", "43.28%*2", "46.56%*2", "51.16%*2", "54.44%*2", "58.21%*2", "63.46%*2", "68.70%*2", "73.95%*2", "79.53%*2", "86.09%*2", "92.65%*2", "99.21%*2", "105.77%*2", "112.33%*2", "118.89%*2", "125.45%*2", "132.01%*2", "138.57%*2", "145.13%*2"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["73.30%", "79.32%", "85.33%", "93.74%", "99.75%", "106.66%", "116.28%", "125.90%", "135.51%", "145.73%", "157.75%", "169.78%", "181.80%", "193.82%", "205.84%", "217.86%", "229.88%", "241.90%", "253.92%", "265.94%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        skillDetailNum: [{
                            values: ["62.00%", "67.09%", "72.17%", "79.29%", "84.37%", "90.22%", "98.36%", "106.49%", "114.62%", "123.27%", "133.44%", "143.60%", "153.77%", "163.94%", "174.11%", "184.28%", "194.44%", "204.61%", "214.78%", "224.95%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["63.40%*2", "68.60%*2", "73.80%*2", "81.08%*2", "86.28%*2", "92.26%*2", "100.58%*2", "108.89%*2", "117.21%*2", "126.05%*2", "136.45%*2", "146.85%*2", "157.24%*2", "167.64%*2", "178.04%*2", "188.44%*2", "198.83%*2", "209.23%*2", "219.63%*2", "230.03%*2"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Heavy Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 11
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Ancient Arts',
                skillDescription: `<span class="Title">Ancient Arts</span>\n
                Attack the target, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Furious Punches</span>\n
                When <span class="Highlight">Basic Attacks 3, 4, or 5</span> or Basic Attack <span class="Highlight">Feral Roars</span> hits the target, Resonance Skill <span class="Highlight">Ancient Arts</span> is replaced with Resonance Skill <span class="Highlight">Swift Punches</span>.\n
                If Lingyang uses <span class="Highlight">Basic Attack</span> after casting Basic Attack <span class="Highlight">Feral Roars</span> and Resonance Skill <span class="Highlight">Swift Punches</span>, he will start from <span class="Highlight">Basic Attack 3</span>.\n
                <div class="gap"></div>
                Lingyang's Resonance Skill will not reset his Basic Attack stage.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Ancient Arts Damage",
                        skillDetailNum: [{
                            values: ["66.70%", "72.17%", "77.64%", "85.30%", "90.77%", "97.06%", "105.81%", "114.56%", "123.31%", "132.61%", "143.55%", "154.49%", "165.43%", "176.37%", "187.31%", "198.24%", "209.18%", "220.12%", "231.06%", "242.00%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Furious Punches Damage",
                        skillDetailNum: [{
                            values: ["38.35%*2", "41.50%*2", "44.64%*2", "49.05%*2", "52.19%*2", "55.81%*2", "60.84%*2", "65.87%*2", "70.90%*2", "76.25%*2", "82.54%*2", "88.83%*2", "95.12%*2", "101.41%*2", "107.70%*2", "113.99%*2", "120.27%*2", "126.56%*2", "132.85%*2", "139.14%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
                        }],
                        index: 3
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: `Strive: Lion's Vigor`,
                skillDescription: `Attack the target, dealing <span class="Ice">Glacio DMG</span>, and receive the blessing of <span class="Highlight">Lion's Vigor</span>, which lasts for {0}s.
                <div class="gap"></div>
                <span class="Title">Lion's Vigor</span>
                Lingyang's <span class="Ice">Glacio DMG Bonus</span> is increased by {0};`,
                skillDetailNum: ["50%"],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["200.00%", "216.40%", "232.80%", "255.76%", "272.16%", "291.02%", "317.26%", "343.50%", "369.74%", "397.62%", "430.42%", "463.22%", "496.02%", "528.82%", "561.62%", "594.42%", "627.22%", "660.02%", "692.82%", "725.62%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Lion's Vigor Duration",
                        skillDetailNum: [{
                            values: ["14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 5
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Lion Awakens',
                skillDescription: `Lingyang enters the battlefield, dealing <span class="Ice">Glacio DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["50.00%*2", "54.10%*2", "58.20%*2", "63.94%*2", "68.04%*2", "72.76%*2", "79.32%*2", "85.88%*2", "92.44%*2", "99.41%*2", "107.61%*2", "115.81%*2", "124.01%*2", "132.21%*2", "140.41%*2", "148.61%*2", "156.81%*2", "165.01%*2", "173.21%*2", "181.41%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Frosty Marks',
                skillDescription: `Lingyang releases a shock wave centered on the skill target, dealing <span class="Ice">Glacio DMG</span> equal to {0} of Lingyang's ATK to targets within the range.`,
                skillDetailNum: ["587.94%"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Unification of Spirits',
                skillDescription: `<span class="Title">Heavy Attack: Glorious Plunge</span>\n
                When Lion's Spirit is full, use <span class="Highlight">Heavy Attack</span> to perform <span class="Highlight">Glorious Plunge</span>, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack: Tail Strike</span>\n
                When Lion's Spirit is not full, use <span class="Highlight">Basic Attack</span> after <span class="Highlight">Heavy Attack</span> to perform <span class="Highlight">Tail Strike</span>, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Striding Lion</span>\n
                After casting Heavy Attack <span class="Highlight">Glorious Plunge</span>, enter <span class="Highlight">Striding Lion</span> state;\n
                After casting Intro Skill <span class="Highlight">Lion Awakens</span> or Resonance Liberation <span class="Highlight">Strive: Lion's Vigor</span>, if Lion's Spirit is full, use <span class="Highlight">Basic Attack</span> to enter <span class="Highlight">Striding Lion</span> state.\n
                In the <span class="Highlight">Striding Lion</span> state:\n
                Attacks can be launched in mid-air. If Lingyang is on the ground, use Heavy Attack <span class="Highlight">Glorious Plunge</span> to get back in the air.\n
                Lion's Spirit is continuously consumed, and the <span class="Highlight">Striding Lion</span> state ends in {0}s after Lion's Spirit runs out;\n
                In the Resonance Liberation <span class="Highlight">Lion's Vigor</span> state, the consumption speed of Lion's Spirit is reduced by {1}, extending <span class="Highlight">Striding Lion</span> state by up to {2}s.\n
                Lingyang's <span class="Highlight">Basic Attack</span> is replaced with Basic Attack <span class="Highlight">Feral Gyrate</span>, which performs up to 2 consecutive attacks, dealing <span class="Ice">Glacio DMG</span>.\n
                Lingyang's <span class="Highlight">Resonance Skill</span> is replaced with <span class="Highlight">Mountain Roamer</span>, dealing <span class="Ice">Glacio DMG</span>.\n
                When Lion's Spirit is less than {3}, use <span class="Highlight">Basic Attack</span> to perform <span class="Highlight">Stormy Kicks</span>, dealing <span class="Ice">Glacio DMG</span>; after performing Basic Attack <span class="Highlight">Stormy Kicks</span>, the Mid-air Attack <span class="Highlight">Radiant Plunge</span> becomes available.\n
                Con. Energy is restored when Lion's Spirit is consumed.\n
                <div class="gap"></div>
                <span class="Title">Lion's Spirit</span>\n
                Lingyang can hold up to {4} Lion's Spirit.\n
                When casting Resonance Skill <span class="Highlight">Furious Punches</span>, Lion's Spirit is restored.\n
                When casting Intro Skill <span class="Highlight">Lion Awakens</span>, Lion's Spirit is restored.\n
                When casting Resonance Liberation <span class="Highlight">Strive: Lion's Vigor</span>, Lion's Spirit is restored.`,
                skillDetailNum: ["5", "50%", "10", "10", "100"],
                multipliers: [
                    {
                        attributeName: "Glorious Plunge Damage",
                        skillDetailNum: [{
                            values: ["86.70%", "93.81%", "100.92%", "110.88%", "117.99%", "126.16%", "137.54%", "148.91%", "160.29%", "172.37%", "186.59%", "200.81%", "215.03%", "229.25%", "243.47%", "257.69%", "271.90%", "286.12%", "300.34%", "314.56%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Feral Gyrate Part 1 Damage",
                        skillDetailNum: [{
                            values: ["43.80%*2+58.40%", "47.40%*2+63.19%", "50.99%*2+67.98%", "56.02%*2+74.69%", "59.61%*2+79.48%", "63.74%*2+84.98%", "69.48%*2+92.64%", "75.23%*2+100.31%", "80.98%*2+107.97%", "87.08%*2+116.11%", "94.27%*2+125.69%", "101.45%*2+135.27%", "108.63%*2+144.84%", "115.82%*2+154.42%", "123.00%*2+164.00%", "130.18%*2+173.58%", "137.37%*2+183.15%", "144.55%*2+192.73%", "151.73%*2+202.31%", "158.92%*2+211.89%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Feral Gyrate Part 2 Damage",
                        skillDetailNum: [{
                            values: ["15.98%*6", "17.29%*6", "18.60%*6", "20.44%*6", "21.75%*6", "23.26%*6", "25.35%*6", "27.45%*6", "29.55%*6", "31.77%*6", "34.39%*6", "37.01%*6", "39.63%*6", "42.26%*6", "44.88%*6", "47.50%*6", "50.12%*6", "52.74%*6", "55.36%*6", "57.98%*6"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Mountain Roamer Damage",
                        skillDetailNum: [{
                            values: ["41.69%*2", "45.11%*2", "48.53%*2", "53.31%*2", "56.73%*2", "60.66%*2", "66.13%*2", "71.60%*2", "77.07%*2", "82.88%*2", "89.72%*2", "96.56%*2", "103.39%*2", "110.23%*2", "117.07%*2", "123.90%*2", "130.74%*2", "137.58%*2", "144.41%*2", "151.25%*2"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Stormy Kicks Damage",
                        skillDetailNum: [{
                            values: ["18.13%*8+96.65%", "19.61%*8+104.58%", "21.10%*8+112.51%", "23.18%*8+123.60%", "24.67%*8+131.53%", "26.37%*8+140.64%", "28.75%*8+153.32%", "31.13%*8+166.00%", "33.51%*8+178.68%", "36.03%*8+192.15%", "39.01%*8+208.01%", "41.98%*8+223.86%", "44.95%*8+239.71%", "47.92%*8+255.56%", "50.89%*8+271.41%", "53.87%*8+287.26%", "56.84%*8+303.11%", "59.81%*8+318.96%", "62.78%*8+334.81%", "65.75%*8+350.66%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Tail Strike Damage",
                        skillDetailNum: [{
                            values: ["88.00%*2", "95.22%*2", "102.44%*2", "112.54%*2", "119.76%*2", "128.05%*2", "139.60%*2", "151.14%*2", "162.69%*2", "174.96%*2", "189.39%*2", "203.82%*2", "218.25%*2", "232.69%*2", "247.12%*2", "261.55%*2", "275.98%*2", "290.41%*2", "304.85%*2", "319.28%*2"]
                        }],
                        index: 8
                    }, {
                        attributeName: `"Lion's Spirit" Con. Energy Regen`,
                        skillDetailNum: [{
                            values: ["35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35"]
                        }],
                        index: 9
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: `Lion's Pride`,
                skillDescription: `Damage of the Intro Skill <span class="Highlight">Lion Awakens</span> is increased by {0}.`,
                skillDetailNum: ["50%"],
                multipliers: [],
                skillBuffAtrribute: ["Intro Skill"],
                skillBuff: [50],
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Diligent Practice',
                skillDescription: `Under the <span class="Highlight">Striding Lion</span> state, within {0}s after each <span class="Highlight">Basic Attack</span>, the next <span class="Highlight">Mountain Roamer</span> will deal an additional <span class="Ice">Glacio DMG</span>, equal to {1} of <span class="Highlight">Mountain Roamer</span> damage, considered as Resonance Skill damage.`,
                skillDetailNum: ["3", "150%"],
                multipliers: [],
                skillBuffAtrribute: ["Intro Skill"],
                skillBuff: [50]
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking.`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Lion of Light, Blessings Abound",
            description: `During Resonance Liberation <color=Highlight>Lion's Vigor</color>, Lingyang's Anti-Interruption is enhanced.`,
            detailNum: [],
            sequenceBuffType: "No Buff",
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1104_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Dominant and Fierce, Power Unbound",
            description: `Intro Skill <color=Highlight>Lion Awakens</color> additionally recovers {0} Resonance Energy for Lingyang, triggered once every {1}s.`,
            detailNum: ["10", "20"],
            sequenceBuffType: "No Buff",
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1104_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Jaw-Dropping Feats, Loud and Wide",
            description: `During Resonance Liberation <color=Highlight>Lion's Vigor</color>, Lingyang's Basic Attack DMG Bonus is increased by {0}, and Resonance Skill DMG Bonus increased by {1}.`,
            detailNum: ["20%", "10%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Basic Attack Damage Bonus", "Resonance Skill Damage Bonus"],
            sequenceBuff: [20, 10],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1104_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Immortals Bow, in Reverence Flawed",
            description: `Outro Skill <color=Highlight>Frosty Marks</color> increases the Glacio DMG Bonus of all team members by {0} for {1}s.`,
            detailNum: ["20%", "30"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Glacio Damage Bonus"],
            sequenceBuff: [20],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1104_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Seven Stars Shine, Stepped upon High",
            description: `Resonance Liberation <color=Highlight>Strive: Lion's Vigor</color> additionally deals <color=Ice>Glacio DMG</color> equal to {0} of Lingyang's ATK.`,
            detailNum: ["200%"],
            sequenceBuffType: "Extra Skill Buff",
            sequenceBuffAtrribute: ["Seven Stars Shine, Stepped upon High"],
            sequenceBuff: [200],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1104_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Demons Tremble, Divine Power Nigh",
            description: `In the Forte Circuit <color=Highlight>Striding Lion</color> state, during the first {0}s after every Resonance Skill <color=Highlight>Mountain Roamer</color>, the Basic Attack DMG Bonus for Lingyang's next Basic Attack is increased by {1}.`,
            detailNum: ["3", "100%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Basic Attack Damage Bonus"],
            sequenceBuff: [100],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1104_UI.png"
        }
    ]
    },
    {
    name: "Zhezhi",
    charaId: 1104,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Glacio",
    weapon: "Rectifier",
    bio: `Zhezhi is a commissioned painter, quiet and shy with a dedication to her craft.
She's not very eloquent, but her persistence and love for painting speak volumes.`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/Zhezhi_Portrait.webp",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Zhezhi.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Zhezhi_Full_Sprite.webp"
    },
    asension: {
        charaAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "4"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "12"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "12"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "4"
        },
        {
            item: "Sound-Keeping Tacet Core",
            id: 5,
            value: "46",
        },
        {
            item: "Lanternberry",
            id: 1,
            value: "60",
        },
        {
            item: "Shell Credits",
            id: 1,
            value: "170,000",
        },
        ],
        forteAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "25"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "28"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "40"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "57"
        },
        {
            item: "Lento Helix",
            id: 5,
            value: "25"
        },
        {
            item: "Adagio Helix",
            id: 6,
            value: "28"
        },
        {
            item: "Andante Helix",
            id: 7,
            value: "55"
        },
        {
            item: "Presto Helix",
            id: 8,
            value: "67"
        },
        {
            item: "Monument Bell",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 980,
        base_atk: 30,
        base_def: 98,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 0,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 8,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
        {
        skillName: "Dimming Brush",
        skillId: 1,
        skillDescription: `<span className="Title">Basic Attack</span>
Perform up to 3 consecutive attacks, dealing <span className="Ice">Glacio DMG</span>.
<span className="Title">Heavy Attack</span>
Consume STA to perform an attack, dealing <span className="Ice">Glacio DMG</span>.
Heavy Attack does not reset the Basic Attack cycle.
<span className="Title">Mid-air Attack</span>
Consume STA to perform up to 2 consecutive attacks while in mid-air, dealing <span className="Ice">Glacio DMG</span>.
<span className="Title">Dodge Counter</span>
Use <span className="Highlight">Basic Attack</span> after a successful <span className="Highlight">Dodge</span> to attack the target, dealing <span className="Ice">Glacio DMG</span>.`,
        typeName: "Normal Attack",
        skillDetailNum: [],
        multipliers: [{
            attributeName: "Stage 1 DMG",
            skillDetailNum: [{
                values: ["21.00%*2", "22.73%*2", "24.45%*2", "26.86%*2", "28.58%*2", "30.56%*2", "33.32%*2", "36.07%*2", "38.83%*2", "41.76%*2", "45.20%*2", "48.64%*2", "52.09%*2", "55.53%*2", "58.98%*2", "62.42%*2", "65.86%*2", "69.31%*2", "72.75%*2"]
            }],
            index: 1
        }, {
            attributeName: "Stage 2 DMG",
            skillDetailNum: [{
                values: ["10.34%*5", "11.18%*5", "12.03%*5", "13.22%*5", "14.06%*5", "15.04%*5", "16.39%*5", "17.75%*5", "19.11%*5", "20.55%*5", "22.24%*5", "23.93%*5", "25.63%*5", "27.32%*5", "29.02%*5", "30.71%*5", "32.41%*5", "34.10%*5", "35.80%*5"]
            }],
            index: 2
        }, {
            attributeName: "Stage 3 DMG",
            skillDetailNum: [{
                values: ["67.20%", "72.72%", "78.23%", "85.94%", "91.45%", "97.79%", "106.60%", "115.42%", "124.24%", "133.61%", "144.63%", "155.65%", "166.67%", "177.69%", "188.71%", "199.73%", "210.75%", "221.77%", "232.79%"]
            }],
            index: 3
        }, {
            attributeName: "HA DMG",
            skillDetailNum: [{
                values: ["56.70%", "61.35%", "66.00%", "72.51%", "77.16%", "82.50%", "89.94%", "97.38%", "104.82%", "112.72%", "122.02%", "131.32%", "140.61%", "149.91%", "159.21%", "168.51%", "177.81%", "187.10%", "196.40%"]
            }],
            index: 4
        }, {
            attributeName: "Mid-air Attack DMG",
            skillDetailNum: [{
                values: ["12.55%*5+52.70%", "13.58%*5+57.03%", "14.61%*5+61.35%", "16.05%*5+67.40%", "17.08%*5+71.72%", "18.26%*5+76.69%", "19.91%*5+83.60%", "21.55%*5+90.52%", "23.20%*5+97.43%", "24.95%*5+104.78%", "27.01%*5+113.42%", "29.06%*5+122.06%", "31.12%*5+130.71%", "33.18%*5+139.35%", "35.24%*5+147.99%", "37.29%*5+156.63%", "39.35%*5+165.28%", "41.41%*5+173.92%", "43.47%*5+182.56%"]
            }],
            index: 5
        }, {
            attributeName: "Dodge Counter DMG",
            skillDetailNum: [{
                values: ["14.62%*5", "15.82%*5", "17.02%*5", "18.70%*5", "19.90%*5", "21.28%*5", "23.20%*5", "25.11%*5", "27.03%*5", "29.07%*5", "31.47%*5", "33.87%*5", "36.26%*5", "38.66%*5", "41.06%*5", "43.46%*5", "45.85%*5", "48.25%*5", "50.65%*5"]
            }],
            index: 6
        }, {
            attributeName: "HA STA Cost",
            skillDetailNum: [{
                values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
            }],
            index: 7
        }, {
            attributeName: "Mid-air Attack STA Cost",
            skillDetailNum: [{
                values: ["5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25"]
            }],
            index: 8
        }]
        },
        {
        skillName: "Manifestation",
        skillId: 2,
        skillDescription: `<span className="Title">Press</span>
Deal <span className="Ice">Glacio DMG</span>. If "Afflatus" is no less than 60, consume 60 "Afflatus" to summon <span className="Highlight">Phatasmic Imprint - Left</span> and <span className="Highlight">Phatasmic Imprint - Right</span> on the ground.
<span className="Title">Hold</span>
Deal <span className="Ice">Glacio DMG</span>. If "Afflatus" is no less than 60, consume 60 "Afflatus" to summon <span className="Highlight">Phatasmic Imprint - Left</span> and <span className="Highlight">Phatasmic Imprint - Right</span> in the air.
<span className="Title">Press while in Mid-air</span>
Deal <span className="Ice">Glacio DMG</span>. If "Afflatus" is no less than 60, consume 60 "Afflatus" to summon <span className="Highlight">Phatasmic Imprint - Left</span> and <span className="Highlight">Phatasmic Imprint - Right</span> in the air.`,
        typeName: "Resonance Skill",
        skillDetailNum: [],
        multipliers: [{
            attributeName: "Press DMG",
            skillDetailNum: [{
                values: ["49.50%*3", "53.56%*3", "57.62%*3", "63.31%*3", "67.36%*3", "72.03%*3", "78.53%*3", "85.02%*3", "91.52%*3", "98.42%*3", "106.53%*3", "114.65%*3", "122.77%*3", "130.89%*3", "139.01%*3", "147.12%*3", "155.24%*3", "163.36%*3", "171.48%*3"]
            }],
            index: 1
        }, {
            attributeName: "Hold DMG",
            skillDetailNum: [{
                values: ["49.50%*3", "53.56%*3", "57.62%*3", "63.31%*3", "67.36%*3", "72.03%*3", "78.53%*3", "85.02%*3", "91.52%*3", "98.42%*3", "106.53%*3", "114.65%*3", "122.77%*3", "130.89%*3", "139.01%*3", "147.12%*3", "155.24%*3", "163.36%*3", "171.48%*3"]
            }],
            index: 2
        }, {
            attributeName: "Mid-air Press DMG",
            skillDetailNum: [{
                values: ["49.50%*3", "53.56%*3", "57.62%*3", "63.31%*3", "67.36%*3", "72.03%*3", "78.53%*3", "85.02%*3", "91.52%*3", "98.42%*3", "106.53%*3", "114.65%*3", "122.77%*3", "130.89%*3", "139.01%*3", "147.12%*3", "155.24%*3", "163.36%*3", "171.48%*3"]
            }],
            index: 3
        }, {
            attributeName: "Cooldown",
            skillDetailNum: [{
                values: ["6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
            }],
            index: 4
        }, {
            attributeName: "Press Concerto Regen",
            skillDetailNum: [{
                values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
            }],
            index: 5
        }, {
            attributeName: "Hold Concerto Regen",
            skillDetailNum: [{
                values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
            }],
            index: 6
        }, {
            attributeName: "Mid-air Press Concerto Regen",
            skillDetailNum: [{
                values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
            }],
            index: 7
        }]
        },
        {
        skillName: "Living Canvas",
        skillId: 3,
        skillDescription: `Summon <span className="Highlight">Inklit Spirits</span> for assistance.
<span className="Title">Inklit Spirit</span>
When the active Resonator deals DMG, an <span className="Highlight">Inklit Spirit</span> will be summoned to perform a Coordinated Attack, dealing <span className="Ice">Glacio DMG</span>, considered as Basic Attack DMG.
-In the {0}s after DMG is dealt, 1 <span className="Highlight">Inklit Spirit</span> is summoned every second. This effect can be triggered 1 time every second. Damage dealt by Inklit Spirit will not trigger this effect.
-Up to {1} <span className="Highlight">Inklit Spirit</span> can be summoned every second, and up to {2} in total.
-This effect lasts for {3}s, until max <span className="Highlight">Inklit Spirits</span> are summoned.`,
        typeName: "Resonance Liberation",
        skillDetailNum: ["3", "1", "21", "30"],
        multipliers: [{
            attributeName: "Inklit Spirit DMG",
            skillDetailNum: [{
                values: ["32.80%", "35.49%", "38.18%", "41.95%", "44.64%", "47.73%", "52.04%", "56.34%", "60.64%", "65.21%", "70.59%", "75.97%", "81.35%", "86.73%", "92.11%", "97.49%", "102.87%", "108.25%", "113.63%"]
            }],
            index: 1
        }, {
            attributeName: "Cooldown",
            skillDetailNum: [{
                values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
            }],
            index: 2
        }, {
            attributeName: "Resonance Energy Cost",
            skillDetailNum: [{
                values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
            }],
            index: 3
        }, {
            attributeName: "Concerto Energy Regen",
            skillDetailNum: [{
                values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
            }],
            index: 4
        }]
        },
        {
        skillName: "Radiant Ruin",
        skillId: 4,
        skillDescription: `Attack the target, dealing <span className="Ice">Glacio DMG</span>.`,
        typeName: "Intro Skill",
        skillDetailNum: [],
        multipliers: [{
            attributeName: "DMG",
            skillDetailNum: [{
                values: ["43.34%*3", "46.89%*3", "50.44%*3", "55.42%*3", "58.97%*3", "63.06%*3", "68.74%*3", "74.43%*3", "80.12%*3", "86.16%*3", "93.26%*3", "100.37%*3", "107.48%*3", "114.58%*3", "121.69%*3", "128.80%*3", "135.90%*3", "143.01%*3", "150.12%*3"]
            }],
            index: 1
        }, {
            attributeName: "Concerto Regen",
            skillDetailNum: [{
                values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
            }],
            index: 2
        }]
        },
        {
        skillName: "Carve and Draw",
        skillId: 5,
        skillDescription: "The incoming Resonator has their Glacio DMG Amplified by {0} and Resonance Skill DMG Amplified by {1} for {2}s or until they are switched out.",
        typeName: "Outro Skill",
        skillDetailNum: ["20%", "25%", "14"],
        multipliers: []
        },
        {
        skillName: "Ink and Wash",
        skillId: 6,
        skillDescription: `<span className="Title">Phantasmic Imprint</span>
Up to 1 of each of <span className="Highlight">Phantasmic Imprint - Left</span>, <span className="Highlight">Phantasmic Imprint - Middle</span>, and <span className="Highlight">Phantasmic Imprint - Right</span> can exist at the same time, each lasting for {0}s.
<span className="Title">Heavy Attack - Conjuration</span>
The 5 moves below consume STA to perform <span className="Highlight">Conjuration</span> to attack the target, dealing <span className="Ice">Glacio DMG</span>.
-Hold the <span className="Highlight">Basic Attack button</span> shortly after <color=Hightlight>Basic Attack Stage 3</span>.
-Press the <span className="Highlight">Basic Attack button</span> shortly after casting Resonance Skill <span className="Highlight">Manifestation</span>.
-Hold the <span className="Highlight">Basic Attack button</span> shortly after casting Resonance Skill <span className="Highlight">Stroke of Genius</span> or Resonance Skill <span className="Highlight">Creation's Zenith</span>.
-Hold the <span className="Highlight">Basic Attack button</span> while in mid-air.
-Hold the <span className="Highlight">Basic Attack button</span> after a Dodge.
If Zhezhi has at least 30 "Afflatus" when performing any of these, consume 30 "Afflatus" to summon <span className="Highlight">Phantasmic Imprint - Middle</span>.
<span className="Title">Resonance Skill - Stroke of Genius</span>
When a <span className="Highlight">Phatasmic Imprint</span> is nearby, the Resonance Skill is replaced with <span className="Highlight">Stroke of Genius</span>, which can be cast while in mid-air. When it is cast, Zhezhi will:
-Blink to the location of the <span className="Highlight">Phatasmic Imprint</span>, remove it, and then summon a crane spirit to attack the target, dealing <span className="Ice">Glacio DMG</span>, considered as Basic Attack DMG. Refresh the mid-air Dodge counter if the target <span className="Highlight">Phatasmic Imprint</span> is in mid-air.
-Gain 1 stack of "Painter's Delight", lasting for {1}s and stacking up to 2 times.
<span className="Title">Resonance Skill - Creation's Zenith</span>
When a <span className="Highlight">Phantasmic Imprint</span> is nearby and there are 2 stacks of "Painter's Delight", <span className="Highlight">Stroke of Genius</span> is replaced with <span className="Highlight">Creation's Zenith</span>, which can be cast while in mid-air. When it is cast, Zhezhi will:
-Blink to the location of the <span className="Highlight">Phantasmic Imprint</span>, remove it, and then summon a crane spirit to attack the target, dealing greater <span className="Ice">Glacio DMG</span>, considered as Basic Attack DMG, additionally increasing the Basic Attack DMG Bonus by {2} for {3}s. Refresh the mid-air Dodge counter if the target <span className="Highlight">Phatasmic Imprint</span> is in mid-air.
<span className="Title">"Afflatus"</span>
Zhezhi can hold up to 90 "Afflatus".
Normal Attacks grant "Afflatus".
Intro Skill grants "Afflatus".`,
        typeName: "Forte Circuit",
        skillDetailNum: ["15", "8", "18%", "27"],
        multipliers: [{
            attributeName: "HA - Conjuration DMG",
            skillDetailNum: [{
                values: ["41.75%*3", "45.18%*3", "48.60%*3", "53.39%*3", "56.82%*3", "60.76%*3", "66.23%*3", "71.71%*3", "77.19%*3", "83.01%*3", "89.86%*3", "96.70%*3", "103.55%*3", "110.40%*3", "117.24%*3", "124.09%*3", "130.94%*3", "137.78%*3", "144.63%*3"]
            }],
            index: 1
        }, {
            attributeName: "HA - Conjuration STA Cost",
            skillDetailNum: [{
                values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
            }],
            index: 2
        }, {
            attributeName: "Stroke of Genius DMG",
            skillDetailNum: [{
                values: ["150.00%", "162.30%", "174.60%", "191.82%", "204.12%", "218.27%", "237.95%", "257.63%", "277.31%", "298.22%", "322.82%", "347.42%", "372.02%", "396.62%", "421.22%", "445.82%", "470.42%", "495.02%", "519.62%"]
            }],
            index: 3
        }, {
            attributeName: "Creation's Zenith DMG",
            skillDetailNum: [{
                values: ["60.00%*3", "64.92%*3", "69.84%*3", "76.73%*3", "81.65%*3", "87.31%*3", "95.18%*3", "103.05%*3", "110.93%*3", "119.29%*3", "129.13%*3", "138.97%*3", "148.81%*3", "158.65%*3", "168.49%*3", "178.33%*3", "188.17%*3", "198.01%*3", "207.85%*3"]
            }],
            index: 4
        }, {
            attributeName: "Stroke of Genius Concerto Regen",
            skillDetailNum: [{
                values: ["13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13"]
            }],
            index: 5
        }, {
            attributeName: "Creation's Zenith Concerto Regen",
            skillDetailNum: [{
                values: ["13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13"]
            }],
            index: 6
        }]
        },
        {
        skillName: "Calligrapher's Touch",
        skillId: 7,
        skillDescription: `When casting Resonance Skill <span className="Highlight">Stroke of Genius</span> or Resonance Skill <span className="Highlight">Creation's Zenith</span>, ATK is increased by {0} for {2}s. This can be stacked up to {1} time(s).`,
        typeName: "Inherent Skill",
        skillDetailNum: ["6%", "3", "27"],
        multipliers: []
        }, 
        {
        skillName: "Flourish",
        skillId: 8,
        skillDescription: "After Outro Skill is cast, restore {0} Resonance Energy to the incoming Resonator.",
        typeName: "Inherent Skill",
        skillDetailNum: ["15"],
        multipliers: []
        }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Brushwork's Finish",
            description: `When casting Resonance Skill Creation's Zenith, Resonance Energy is restored by 15 and Crit. Rate is increased by 10% for 27s.`,
            detailNum: ["10%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Crit. Rate"],
            sequenceBuff: [10],
            itemImg: ""
        },
        {
            node: "Sequence Node 2",
            name: "Vivid Strokes",
            description: `Max Inklit Spirits summoned by Resonance Liberation Living Canvas increases by 6.`,
            detailNum: [""],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: ""
        },
        {
            node: "Sequence Node 3",
            name: "Reflection's Grace",
            description: `When Resonance Skill Manifestation, Resonance Skill Stroke of Genius, or Resonance Skill Creation's Zenith is cast, ATK increases by 15%, stacking up to 3 time(s) for 27s.`,
            detailNum: ["15%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [15],
            stacks: 3,
            itemImg: ""
        },
        {
            node: "Sequence Node 4",
            name: "Hue's Spectrum",
            description: `When Resonance Liberation Living Canvas is cast, ATK of Resonators on the team increases by 20% for 30s.`,
            detailNum: ["20%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [20],
            itemImg: ""
        },
        {
            node: "Sequence Node 5",
            name: "Composition's Clue",
            description: `For every 3 Inklit Spirits summoned by Resonance Liberation Living Canvas, 1 extra Inklit Spirit is summoned to perform a Coordinated Attack, dealing DMG equal to 140% of Inklit Spirit's DMG, considered as Basic Attack DMG. This damage dealt will not further summon Inklit Spirit.`,
            detailNum: ["140%"],
            sequenceBuffType: "Extra Skill Buff",
            sequenceBuffAtrribute: ["Proper Structuring"],
            sequenceBuff: [140],
            itemImg: ""
        },
        {
            node: "Sequence Node 6",
            name: "Infinite Legacy",
            description: `When Resonance Skill Stroke of Genius or Resonance Skill Creation's Zenith is cast, an extra Ivory Herald will be summoned to deal DMG equal to 120% of Resonance Skill Stroke of Genius's DMG, considered as Basic Attack DMG.`,
            detailNum: ["120%"],
            sequenceBuffType: "Extra Skill Buff",
            sequenceBuffAtrribute: ["Imitation and Inheritance"],
            sequenceBuff: [120],
            itemImg: ""
        },
    ]
    },
    {
    name: "Encore",
    charaId: 1201,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Fusion",
    weapon: "Rectifier",
    bio: `Encore, a consultant from the Black Shores, is a quirky, lively, and spunky girl who loves to recount her friendships and adventures through fantasy and fairy tales.
She always has two Woolies with her, who are Encore's best friends and protectors.
With Cosmos and Cloudy, Encore travels all over the world!`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_anke_UI.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Encore.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/EncoreModel.png"
    },
    asension: {
        charaAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "4"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "12"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "12"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "4"
        },
        {
            item: "Rage Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Pecok Flower",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "25"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "28"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "40"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "57"
        },
        {
            item: "Lento Helix",
            id: 5,
            value: "25"
        },
        {
            item: "Adagio Helix",
            id: 6,
            value: "28"
        },
        {
            item: "Andante Helix",
            id: 7,
            value: "55"
        },
        {
            item: "Presto Helix",
            id: 8,
            value: "67"
        },
        {
            item: "Unending Destruction",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 841,
        base_atk: 34,
        base_def: 102,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 1.12,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Wooly Attack',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Encore performs up to 4 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Basic Attack: Wooly Strike</span>\n
                After <span class="Highlight">Basic Attack 4</span>, press the Basic Attack button to attack the target, dealing <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Encore consumes Stamina to attack the target, dealing <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Encore consumes Stamina to perform a Mid-Air Plunging Attack, dealing <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Fire">Fusion DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["28.00%", "30.29%", "32.59%", "35.80%", "38.10%", "40.74%", "44.41%", "48.09%", "51.76%", "55.66%", "60.25%", "64.85%", "69.44%", "74.03%", "78.62%", "83.21%", "87.81%", "92.40%", "96.99%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["33.30%", "36.03%", "38.76%", "42.58%", "45.31%", "48.45%", "52.82%", "57.19%", "61.56%", "66.20%", "71.66%", "77.12%", "82.58%", "88.04%", "93.50%", "98.97%", "104.43%", "109.89%", "115.35%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["33.35%*2", "36.08%*2", "38.81%*2", "42.64%*2", "45.38%*2", "48.52%*2", "52.90%*2", "57.27%*2", "61.65%*2", "66.30%*2", "71.77%*2", "77.24%*2", "82.71%*2", "88.18%*2", "93.65%*2", "99.11%*2", "104.58%*2", "110.05%*2", "115.52%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["19.25%*4", "20.82%*4", "22.40%*4", "24.61%*4", "26.19%*4", "28.01%*4", "30.53%*4", "33.06%*4", "35.58%*4", "38.27%*4", "41.42%*4", "44.58%*4", "47.74%*4", "50.89%*4", "54.05%*4", "57.21%*4", "60.36%*4", "63.52%*4", "66.68%*4"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Woolies Damage",
                        skillDetailNum: [{
                            values: ["120.00%", "129.84%", "139.67%", "153.45%", "163.29%", "174.61%", "190.35%", "206.10%", "221.84%", "238.57%", "258.25%", "277.93%", "297.61%", "317.29%", "336.97%", "356.65%", "376.33%", "396.01%", "415.69%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["94.10%", "101.81%", "109.53%", "120.33%", "128.05%", "136.92%", "149.27%", "161.61%", "173.96%", "187.08%", "202.51%", "217.94%", "233.37%", "248.80%", "264.24%", "279.67%", "295.10%", "310.53%", "325.97%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Mid-Air Attack",
                        skillDetailNum: [{
                            values: ["62.00%", "67.08%", "72.16%", "79.28%", "84.36%", "90.21%", "98.35%", "106.48%", "114.61%", "123.26%", "133.43%", "143.59%", "153.76%", "163.93%", "174.10%", "184.27%", "194.43%", "204.60%", "214.77%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["63.34%*2", "68.54%*2", "73.73%*2", "81.01%*2", "86.20%*2", "92.18%*2", "100.49%*2", "108.80%*2", "117.11%*2", "125.94%*2", "136.33%*2", "146.72%*2", "157.11%*2", "167.50%*2", "177.89%*2", "188.28%*2", "198.67%*2", "209.06%*2", "219.45%*2"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Heavy Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 10
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Flaming Woolies',
                skillDescription: `<span class="Title">Flaming Woolies</span>\n
                Encore summons Cloudy and Cosmos to attack with burning rays, dealing <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Energetic Welcome</span>\n
                After casting <span class="Highlight">Flaming Woolies</span>, use <span class="Highlight">Resonance Skill</span> to perform <span class="Highlight">Energetic Welcome</span>, dealing <span class="Fire">Fusion DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Flaming Woolies Damage",
                        skillDetailNum: [{
                            values: ["38.53%*8", "41.69%*8", "44.85%*8", "49.28%*8", "52.44%*8", "56.07%*8", "61.13%*8", "66.18%*8", "71.24%*8", "76.61%*8", "82.93%*8", "89.25%*8", "95.57%*8", "101.89%*8", "108.21%*8", "114.53%*8", "120.85%*8", "127.17%*8", "133.49%*8"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Energetic Welcome Damage",
                        skillDetailNum: [{
                            values: ["170.60%", "184.58%", "198.57%", "218.16%", "232.15%", "248.24%", "270.62%", "293.00%", "315.38%", "339.16%", "367.14%", "395.12%", "423.10%", "451.08%", "479.06%", "507.04%", "535.01%", "562.99%", "590.97%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Flaming Woolies Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Energetic Welcome Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 5
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Cosmos Rave',
                skillDescription: `As Encore loses control, Cosmos breaks free and wreaks havoc on its surroundings.\n
                <div class="gap"></div>
                <span class="Title">Basic Attack: Cosmos: Frolicking</span>\n
                During Cosmos Rave, the <span class="Highlight">Basic Attack</span> is replaced with <span class="Highlight">Cosmos: Frolicking</span>, which performs up to 4 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>, considered as Basic Attack damage.\n
                <div class="gap"></div>
                <span class="Title">Cosmos: Heavy Attack</span>\n
                During Cosmos Rave, the <span class="Highlight">Heavy Attack</span> is replaced with <span class="Highlight">Cosmos: Heavy Attack</span>, consuming Stamina to attack the target, dealing <span class="Fire">Fusion DMG</span>, considered as Heavy Attack damage.\n
                <div class="gap"></div>
                <span class="Title">Resonance Skill: Cosmos: Rampage</span>\n
                During Cosmos Rave, <span class="Highlight">Flaming Woolies</span> is replaced with <span class="Highlight">Cosmos: Rampage</span>, dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Skill damage.\n
                <div class="gap"></div>
                <span class="Title">Cosmos: Dodge Counter</span>\n
                During Cosmos Rave, use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Fire">Fusion DMG</span>, considered as Basic Attack damage.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Cosmos: Frolicking Part 1 Damage",
                        skillDetailNum: [{
                            values: ["45.36%*2", "49.08%*2", "52.80%*2", "58.01%*2", "61.73%*2", "66.01%*2", "71.96%*2", "77.91%*2", "83.86%*2", "90.18%*2", "97.62%*2", "105.06%*2", "112.50%*2", "119.94%*2", "127.38%*2", "134.81%*2", "142.25%*2", "149.69%*2", "157.13%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cosmos: Frolicking Part 2 Damage",
                        skillDetailNum: [{
                            values: ["28.37%*3", "30.70%*3", "33.02%*3", "36.28%*3", "38.61%*3", "41.28%*3", "45.00%*3", "48.72%*3", "52.45%*3", "56.40%*3", "61.05%*3", "65.71%*3", "70.36%*3", "75.01%*3", "79.66%*3", "84.31%*3", "88.97%*3", "93.62%*3", "98.27%*3"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cosmos: Frolicking Part 3 Damage",
                        skillDetailNum: [{
                            values: ["33.19%*4", "35.92%*4", "38.64%*4", "42.45%*4", "45.17%*4", "48.30%*4", "52.65%*4", "57.01%*4", "61.36%*4", "65.99%*4", "71.43%*4", "76.87%*4", "82.32%*4", "87.76%*4", "93.20%*4", "98.65%*4", "104.09%*4", "109.53%*4", "114.98%*4"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Cosmos: Frolicking Part 4 Damage",
                        skillDetailNum: [{
                            values: ["97.59%*3", "105.59%*3", "113.59%*3", "124.79%*3", "132.79%*3", "142.00%*3", "154.80%*3", "167.60%*3", "180.40%*3", "194.01%*3", "210.01%*3", "226.01%*3", "242.02%*3", "258.02%*3", "274.02%*3", "290.03%*3", "306.03%*3", "322.03%*3", "338.04%*3"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Cosmos: Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["109.44%", "118.42%", "127.39%", "139.96%", "148.93%", "159.25%", "173.61%", "187.97%", "202.32%", "217.58%", "235.53%", "253.48%", "271.42%", "289.37%", "307.32%", "325.27%", "343.22%", "361.16%", "379.11%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Cosmos Rampage Damage",
                        skillDetailNum: [{
                            values: ["31.85%*4", "34.46%*4", "37.07%*4", "40.72%*4", "43.34%*4", "46.34%*4", "50.52%*4", "54.70%*4", "58.88%*4", "63.32%*4", "68.54%*4", "73.76%*4", "78.99%*4", "84.21%*4", "89.43%*4", "94.66%*4", "99.88%*4", "105.10%*4", "110.33%*4"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Cosmos: Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["33.19%*4", "35.92%*4", "38.64%*4", "42.45%*4", "45.17%*4", "48.30%*4", "52.65%*4", "57.01%*4", "61.36%*4", "65.99%*4", "71.43%*4", "76.87%*4", "82.32%*4", "87.76%*4", "93.20%*4", "98.65%*4", "104.09%*4", "109.53%*4", "114.98%*4"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Cosmos: Heavy Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Cosmos Rave Duration",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Cosmos Rampage Cooldown",
                        skillDetailNum: [{
                            values: ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
                        }],
                        index: 11
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                        }],
                        index: 12
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 13
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Woolies Can Help!',
                skillDescription: `Encore pounces at the enemies with Cosmos, dealing <span class="Fire">Fusion DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["100.00%", "108.20%", "116.40%", "127.88%", "136.08%", "145.51%", "158.63%", "171.75%", "184.87%", "198.81%", "215.21%", "231.61%", "248.01%", "264.41%", "280.81%", "297.21%", "313.61%", "330.01%", "346.41%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Thermal Field',
                skillDescription: `Encore generates a Flame Zone centered around skill target, with a radius of {0}m. Targets inside the Flame Zone are continuously burned, suffering <span class="Fire">Fusion DMG</span> equal to {2} of Encore's ATK every {1}s for {3}s.`,
                skillDetailNum: ["3", "1.5", "176.76%", "6"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Black & White Woolies',
                skillDescription: `<span class="Title">Resonance Liberation: Cloudy Frenzy</span>\n
                When Encore's "Dissonance" is full, after casting a <span class="Highlight">Heavy Attack</span>, Encore will consume all "Dissonance" to enter the Dissonance state, reducing damage taken by {0}. Switching Characters does not interrupt "Dissonance".\n
                After the Dissonance state ends, Encore will cast <span class="Highlight">Cloudy Frenzy</span>, dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Liberation damage.\n
                <div class="gap"></div>
                <span class="Title">Resonance Liberation: Cosmos Rupture</span>\n
                During Cosmos Rampage, when casting <span class="Highlight">Heavy Attack</span>, if "Dissonance" is full, Encore will consume all "Dissonance" to enter Cosmos' Dissonance state, reducing damage taken by {1}. Switching Characters does not interrupt "Dissonance".\n
                After Cosmos' Dissonance state ends, Encore will cast <span class="Highlight">Cosmos Rupture</span>, dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Liberation damage.\n
                <div class="gap"></div>
                <span class="Title">Dissonance</span>\n
                Encore can hold up to {2} "Dissonance".\n
                When Normal Attack <span class="Highlight">Wooly Attack</span> hits the target, Encore restores "Dissonance".\n
                When Resonance Skill <span class="Highlight">Flaming Woolies</span> hits the target, Encore restores "Dissonance".\n
                When Resonance Skill <span class="Highlight">Energetic Welcome</span> hits the target, Encore restores "Dissonance".\n
                When Intro Skill <span class="Highlight">Woolies Helpers</span> hits the target, Encore restores "Dissonance".\n
                During the duration of Resonance Liberation <span class="Highlight">Cosmos Rave</span>, hitting targets will restore "Dissonance" to Encore.`,
                skillDetailNum: ["70%", "70%", "100"],
                multipliers: [
                    {
                        attributeName: "Cloudy: Frenzy Damage",
                        skillDetailNum: [{
                            values: ["168.00%", "181.77%", "195.55%", "214.83%", "228.61%", "244.45%", "266.49%", "288.53%", "310.58%", "334.00%", "361.55%", "389.10%", "416.65%", "444.20%", "471.76%", "499.31%", "526.86%", "554.41%", "581.96%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cosmos: Rupture Damage",
                        skillDetailNum: [{
                            values: ["23.35%*6+249.08%", "25.26%*6+269.51%", "27.18%*6+289.93%", "29.86%*6+318.53%", "31.77%*6+338.95%", "33.97%*6+362.44%", "37.04%*6+395.12%", "40.10%*6+427.80%", "43.17%*6+460.48%", "46.42%*6+495.21%", "50.25%*6+536.06%", "54.08%*6+576.91%", "57.91%*6+617.76%", "61.74%*6+658.61%", "65.57%*6+699.46%", "69.40%*6+740.31%", "73.23%*6+781.16%", "77.06%*6+822.01%", "80.89%*6+862.86%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cloudy: Frenzy Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Cosmos: Rupture Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 4
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Angry Cosmos',
                skillDescription: `During the Resonance Liberation <span class="Highlight">Cosmos Rave</span>, when Encore's HP is above {0}, DMG dealt is increased by {1}.`,
                skillDetailNum: ["70%", "10%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Woolies Cheer Dance',
                skillDescription: `When Resonance Skill <span class="Highlight">Flaming Woolies</span> or Resonance Skill <span class="Highlight">Cosmos: Rampage</span> is cast, Encore's Fusion DMG Bonus is increased by {0} for {1}s.`,
                skillDetailNum: ["10%", "10"],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking.`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Wooly's Fairy Tale",
            description: `When <color=Highlight>Basic Attack</color> hits a target, Encore's Fusion DMG Bonus is increased by {0}, stacking up to {1} times for {2}s.`,
            detailNum: ["3%", "4", "6"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Fusion Damage Bonus"],
            sequenceBuff: [3],
            stacks: 4,
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1203_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Sheep-counting Lullaby",
            description: `Encore additionally restores {0} Resonance Energy when casting Basic Attack <color=Highlight>Woolies Attack</color> or Resonance Skill <color=Highlight>Energetic Welcome</color>. This can be triggered once every {1}s.`,
            detailNum: ["10", "10"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1203_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Fog? The Black Shores!",
            description: `The DMG multiplier of Heavy Attack <color=Highlight>Cloudy: Frenzy</color> and Heavy Attack <color=Highlight>Cosmos: Rupture</color> is increased by {0}.`,
            detailNum: ["40%"],
            sequenceBuffType: "Skill Forte Buff",
            sequenceBuffAtrribute: ["Forte Circuit"],
            sequenceBuff: [40],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1203_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: `Adventure? Let's go!`,
            description: `Heavy Attack <color=Highlight>Cosmos: Rupture</color> increases the Fusion DMG Bonus of all team members by {0} for {1}s.`,
            detailNum: ["20%", "30"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Fusion Damage Bonus"],
            sequenceBuff: [20],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1203_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Hero Takes the Stage!",
            description: `Resonance Skill DMG Bonus is increased by {0}.`,
            detailNum: ["35%"],
            sequenceBuffType: "Character Buff",
            sequenceBuffAtrribute: ["Resonance Skill Damage Bonus"],
            sequenceBuff: [35],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1203_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Woolies Save the World!",
            description: `During Resonance Liberation <color=Highlight>Cosmos Rave</color>, Encore gains {0} stack(s) of "Lost Lamb" every time she deals damage, each stack increasing her ATK by {1} for {2}s, stacking up to {3} time(s).`,
            detailNum: ["1", "5%", "10", "5"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [5],
            stacks: 5,
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1203_UI.png"
        }
    ]
    },
    {
    name: "Chixia",
    charaId: 1202,
    rarity: {
        alt: "5 Star",
        img: rarity4Star
    },
    element: "Fusion",
    weapon: "Pistols",
    bio: `Chixia is a junior Jinzhou Patroller.
She roams Jinzhou City, leaving her fiery mark on every alley she stamps through.
As the starring hero among her community, Chixia is always ready for anyone in need.`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_maxiaofang_UI.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Chixia.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Chixia_Full_Sprite.png"
},
    asension: {
        charaAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "4"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "12"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "12"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "4"
        },
        {
            item: "Rage Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Belle Poppy",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "25"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "28"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "40"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "57"
        },
        {
            item: "Impure Phlogiston",
            id: 5,
            value: "25"
        },
        {
            item: "Extracted Phlogiston",
            id: 6,
            value: "28"
        },
        {
            item: "Refined Phlogiston",
            id: 7,
            value: "55"
        },
        {
            item: "Flawless Phlogiston",
            id: 8,
            value: "67"
        },
        {
            item: "Monument Bell",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 727,
        base_atk: 24,
        base_def: 78,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 150,
        bonus_ele: 1.12,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'POW POW',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Chixia fires up to 4 consecutive shots, dealing <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Chixia enters the aiming state for a more powerful shot.\n
                The aimed shot fired after charging finishes deals <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Chixia consumes Stamina to perform consecutive shots at the target in mid-air, dealing <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Fire">Fusion DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["33.30%", "36.04%", "38.77%", "42.59%", "45.32%", "48.46%", "52.83%", "57.20%", "61.57%", "66.21%", "71.67%", "77.13%", "82.59%", "88.05%", "93.51%", "98.98%", "104.44%", "109.90%", "115.36%", "120.82%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["24.30%*2", "26.30%*2", "28.29%*2", "31.08%*2", "33.07%*2", "35.36%*2", "38.55%*2", "41.74%*2", "44.93%*2", "48.32%*2", "52.30%*2", "56.29%*2", "60.27%*2", "64.26%*2", "68.24%*2", "72.23%*2", "76.21%*2", "80.20%*2", "84.18%*2", "88.17%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["16.88%*4", "18.26%*4", "19.65%*4", "21.58%*4", "22.97%*4", "24.56%*4", "26.77%*4", "28.99%*4", "31.20%*4", "33.55%*4", "36.32%*4", "39.09%*4", "41.86%*4", "44.62%*4", "47.39%*4", "50.16%*4", "52.93%*4", "55.69%*4", "58.46%*4", "61.23%*4"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["117.00%", "126.60%", "136.19%", "149.62%", "159.22%", "170.25%", "185.60%", "200.95%", "216.30%", "232.61%", "251.80%", "270.99%", "290.18%", "309.36%", "328.55%", "347.74%", "366.93%", "386.12%", "405.30%", "424.49%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["18.00%", "19.48%", "20.96%", "23.02%", "24.50%", "26.20%", "28.56%", "30.92%", "33.28%", "35.79%", "38.74%", "41.69%", "44.65%", "47.60%", "50.55%", "53.50%", "56.45%", "59.41%", "62.36%", "65.31%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Full Charge Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["40.50%", "43.83%", "47.15%", "51.80%", "55.12%", "58.94%", "64.25%", "69.56%", "74.88%", "80.52%", "87.17%", "93.81%", "100.45%", "107.09%", "113.73%", "120.38%", "127.02%", "133.66%", "140.30%", "146.94%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        skillDetailNum: [{
                            values: ["16.20%", "17.53%", "18.86%", "20.72%", "22.05%", "23.58%", "25.70%", "27.83%", "29.95%", "32.21%", "34.87%", "37.53%", "40.18%", "42.84%", "45.50%", "48.15%", "50.81%", "53.47%", "56.12%", "58.78%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["171.00%", "185.03%", "199.05%", "218.68%", "232.70%", "248.83%", "271.26%", "293.70%", "316.13%", "339.97%", "368.01%", "396.06%", "424.10%", "452.15%", "480.19%", "508.23%", "536.28%", "564.32%", "592.37%", "620.41%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 9
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Whizzing Fight Spirit',
                skillDescription: `Chixia unleashes a flurry of shots, dealing <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Highlight">Whizzing Fight Spirit</span> has 2 initial charges.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["16.00%*8", "17.32%*8", "18.63%*8", "20.47%*8", "21.78%*8", "23.29%*8", "25.39%*8", "27.48%*8", "29.58%*8", "31.81%*8", "34.44%*8", "37.06%*8", "39.69%*8", "42.31%*8", "44.93%*8", "47.56%*8", "50.18%*8", "52.81%*8", "55.43%*8", "58.05%*8"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 3
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Blazing Flames',
                skillDescription: `Chixia fires up fast shots at nearby enemies, dealing <span class="Fire">Fusion DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["480.00%+29.10%*11", "519.36%+31.48%*11", "558.72%+33.87%*11", "613.83%+37.21%*11", "653.19%+39.59%*11", "698.45%+42.34%*11", "761.43%+46.15%*11", "824.40%+49.97%*11", "887.38%+53.79%*11", "954.29%+57.84%*11", "1033.01%+62.61%*11", "1111.73%+67.38%*11", "1190.45%+72.15%*11", "1269.17%+76.92%*11", "1347.89%+81.70%*11", "1426.61%+86.47%*11", "1505.33%+91.24%*11", "1584.05%+96.01%*11", "1662.77%+100.78%*11", "1741.49%+105.55%*11"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 4
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Grand Entrance',
                skillDescription: `Chixia makes a heroic entrance and fires rapidly with her dual Pistolss at the target, dealing <span class="Fire">Fusion DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["24.75%*2+12.38%*4", "26.78%*2+13.39%*4", "28.81%*2+14.41%*4", "31.66%*2+15.83%*4", "33.68%*2+16.84%*4", "36.02%*2+18.01%*4", "39.27%*2+19.64%*4", "42.51%*2+21.26%*4", "45.76%*2+22.88%*4", "49.21%*2+24.61%*4", "53.27%*2+26.64%*4", "57.33%*2+28.67%*4", "61.39%*2+30.70%*4", "65.45%*2+32.73%*4", "69.51%*2+34.76%*4", "73.56%*2+36.78%*4", "77.62%*2+38.81%*4", "81.68%*2+40.84%*4", "85.74%*2+42.87%*4", "89.80%*2+44.90%*4"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Leaping Flames',
                skillDescription: `Chixia releases a shock wave surrounding the target, dealing <span class="Fire">Fusion DMG</span> equal to {0} of Chixia's ATK to enemies within the range.`,
                skillDetailNum: ["530.00%"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Heroic Bullets',
                skillDescription: `<span class="Title">Resonance Skill: DAKA DAKA!</span>\n
                Hold Resonance Skill <span class="Highlight">Whizzing Fight Spirit</span> to enter <span class="Highlight">DAKA DAKA!</span>. In this state:\n
                Chixia continuously consumes "Thermobaric Bullets" to attack the target, dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Skill damage;\n
                Tap <span class="Highlight">Basic Attack</span> to cast <span class="Highlight">Basic Attack 4</span>, dealing <span class="Fire">Fusion DMG</span>, considered as Basic Attack damage. Then she terminates "DAKA DAKA!";\n
                ·If {0} "Thermobaric Bullets" have been fired when <span class="Highlight">Basic Attack</span>is activated, Chixia will cast Resonance Skill <span class="Highlight">Boom Boom</span> and terminate "DAKA DAKA!"\n
                Chixia terminates "DAKA DAKA!" when all "Thermobaric Bullets" are consumed.\n
                <div class="gap"></div>
                <span class="Title">Resonance Skill: Boom Boom</span>\n
                Chixia deals <span class="Fire">Fusion DMG</span>, considered as Resonance Skill damage.\n
                <div class="gap"></div>
                <span class="Title">Thermobaric Bullets</span>\n
                Chixia can hold up to {1} "Thermobaric Bullets".\n
                Inherent Skill <span class="Highlight">Scorching Magazine</span> increases Max "Thermobaric Bullets" by {2}.\n
                Chixia obtains "Thermobaric Bullets" for every Normal Attack <span class="Highlight">POW POW</span> on hit.\n
                Chixia obtains "Thermobaric Bullets" upon casting Intro Skill <span class="Highlight">Grand Entrance</span> and Resonance Skill <span class="Highlight">Whizzing Fight Spirit</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Thermobaric Bullets Damage",
                        skillDetailNum: [{
                            values: ["10.00%", "10.82%", "11.64%", "12.79%", "13.61%", "14.56%", "15.87%", "17.18%", "18.49%", "19.89%", "21.53%", "23.17%", "24.81%", "26.45%", "28.09%", "29.73%", "31.37%", "33.01%", "34.65%", "36.29%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Boom Boom Damage",
                        skillDetailNum: [{
                            values: ["220.00%", "238.04%", "256.08%", "281.34%", "299.38%", "320.13%", "348.99%", "377.85%", "406.72%", "437.39%", "473.47%", "509.55%", "545.63%", "581.71%", "617.79%", "653.87%", "689.95%", "726.03%", "762.11%", "798.19%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "DAKA DAKA! Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Thermobaric Bullet Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["0.5", "0.5", "0.5", "0.5", "0.5", "0.5", "0.5", "0.5", "0.5", "0.5", "0.5", "0.5", "0.5", "0.5", "0.5", "0.5", "0.5", "0.5"]
                        }],
                        index: 4
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Scorching Magazine',
                skillDescription: `Max "Thermobaric Bullets" is increased by {0} rounds. The damage of Resonance Skill <span class="Highlight">Boom Boom</span> is increased by {1}.`,
                skillDetailNum: ["10", "50%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Numbingly Spicy!',
                skillDescription: `Each "Thermobaric Bullets" that hits a target during Resonance Skill <span class="Highlight">DAKA DAKA!</span> increases ATK by {0} for {1}s, stacking up to {2} times.`,
                skillDetailNum: ["1%", "10", "30"],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "No.1 Hero Play Fan",
            description: `Resonance Skill <color=Highlight>Boom Boom</color> hits will always be Critical Hits.`,
            detailNum: [],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1202_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Leaping Sparkles",
            description: `During Resonance Liberation <color=Highlight>Blazing Flames</color>, for every {0} target defeated, Chixia recovers {1} Resonance Energy, up to {2} each time.`,
            detailNum: ["1", "5", "20"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1202_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Eternal Flames",
            description: `Resonance Liberation <color=Highlight>Blazing Flames</color> deals {1} more damage to targets whose HP is below {0}.`,
            detailNum: ["50%", "40%"],
            sequenceBuffType: "Skill Liberation Buff",
            sequenceBuffAtrribute: ["Resonance Liberation"],
            sequenceBuff: [40],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1202_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Hero's Ultimate Move",
            description: `Resonance Liberation <color=Highlight>Blazing Flames</color> grants {0} “Thermobaric Bullets” and immediately resets the Cooldown of Resonance Skill <color=Highlight>Whizzing Fight Spirit</color>.`,
            detailNum: ["60"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1202_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Triumphant Explosions",
            description: `When the Inherent Skill <color=Highlight>Numbingly Spicy!</color> reaches max stacks, ATK is additionally increased by {0}.`,
            detailNum: ["30%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [30],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1202_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Easter Egg Performance",
            description: `Resonance Skill <color=Highlight>Boom Boom</color> increases the Basic Attack DMG Bonus of all team members by {0} for {1}s.`,
            detailNum: ["25%", "15"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Basic Attack Damage Bonus"],
            sequenceBuff: [25],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1202_UI.png"
        }
    ]
    },
    {
    name: "Mortefi",
    charaId: 1203,
    rarity: {
        alt: "5 Star",
        img: rarity4Star
    },
    element: "Fusion",
    weapon: "Pistols",
    bio: `Born into the upper class, Mortefi is a lofty man with an erudite look.
Renowned for his exceptional talent in scientific research, Mortefi was once famed as the youngest genius in the New Federation.
Driven by a thirst for knowledge, Mortefi later abandoned his privileged life to work as an International Research Fellow at the Huaxu Academy.
It's not hard to win Mortefi's favor: Just remember to talk nicely, and always shower him with ample praise.`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_baer_UI.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Mortefi.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Mortefi_Illutration.png"
    },
    asension: {
        charaAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "4"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "12"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "12"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "4"
        },
        {
            item: "Rage Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Coriolus",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "25"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "28"
        },
        {
            item: "LF Whisperin Core",
            id: 3,
            value: "40"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "57"
        },
        {
            item: "Impure Phlogiston",
            id: 5,
            value: "25"
        },
        {
            item: "Extracted Phlogiston",
            id: 6,
            value: "28"
        },
        {
            item: "Refined Phlogiston",
            id: 7,
            value: "55"
        },
        {
            item: "Flawless Phlogiston",
            id: 8,
            value: "67"
        },
        {
            item: "Monument Bell",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 802,
        base_atk: 20,
        base_def: 93,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 1.12,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Impromptu Show',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Mortefi uses his dual Pistolss and flames to perform up to 4 consecutive shots, dealing <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Mortefi enters the aiming state for a more powerful shot.\n
                The aimed shot fired after charging finishes deals <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Mortefi consumes Stamina to perform consecutive shots at the target in mid-air, dealing <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Fire">Fusion DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["24.29%", "26.29%", "28.28%", "31.07%", "33.06%", "35.35%", "38.54%", "41.72%", "44.91%", "48.30%", "52.28%", "56.26%", "60.25%", "64.23%", "68.21%", "72.20%", "76.18%", "80.16%", "84.15%", "88.13%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["20.51%*2", "22.20%*2", "23.88%*2", "26.23%*2", "27.92%*2", "29.85%*2", "32.54%*2", "35.23%*2", "37.92%*2", "40.78%*2", "44.14%*2", "47.51%*2", "50.87%*2", "54.24%*2", "57.60%*2", "60.96%*2", "64.33%*2", "67.69%*2", "71.05%*2", "74.42%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["53.97%", "58.40%", "62.83%", "69.02%", "73.45%", "78.54%", "85.62%", "92.70%", "99.78%", "107.30%", "116.15%", "125.00%", "133.86%", "142.71%", "151.56%", "160.41%", "169.26%", "178.11%", "186.96%", "195.81%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["10.57%*4+63.84%", "11.44%*4+69.08%", "12.31%*4+74.31%", "13.52%*4+81.64%", "14.39%*4+86.88%", "15.39%*4+92.90%", "16.77%*4+101.27%", "18.16%*4+109.65%", "19.55%*4+118.03%", "21.02%*4+126.93%", "22.75%*4+137.40%", "24.49%*4+147.86%", "26.22%*4+158.33%", "27.95%*4+168.80%", "29.69%*4+179.27%", "31.42%*4+189.74%", "33.15%*4+200.21%", "34.89%*4+210.68%", "36.62%*4+221.15%", "38.35%*4+231.62%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Aimed Shot Damage",
                        skillDetailNum: [{
                            values: ["49.14%", "53.17%", "57.20%", "62.85%", "66.87%", "71.51%", "77.96%", "84.40%", "90.85%", "97.70%", "105.76%", "113.82%", "121.88%", "129.94%", "138.00%", "146.05%", "154.11%", "162.17%", "170.23%", "178.29%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Fully Charged Aimed Shot Damage",
                        skillDetailNum: [{
                            values: ["84.00%", "90.89%", "97.78%", "107.42%", "114.31%", "122.23%", "133.25%", "144.27%", "155.30%", "167.01%", "180.78%", "194.56%", "208.33%", "222.11%", "235.89%", "249.66%", "263.44%", "277.21%", "290.99%", "304.77%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Mid-Air Attack Part 1 Damage",
                        skillDetailNum: [{
                            values: ["11.69%", "12.65%", "13.61%", "14.95%", "15.91%", "17.02%", "18.55%", "20.08%", "21.62%", "23.25%", "25.16%", "27.08%", "29.00%", "30.91%", "32.83%", "34.75%", "36.67%", "38.58%", "40.50%", "42.42%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Mid-Air Attack Part 2 Damage",
                        skillDetailNum: [{
                            values: ["11.69%", "12.65%", "13.61%", "14.95%", "15.91%", "17.02%", "18.55%", "20.08%", "21.62%", "23.25%", "25.16%", "27.08%", "29.00%", "30.91%", "32.83%", "34.75%", "36.67%", "38.58%", "40.50%", "42.42%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["98.07%", "106.12%", "114.16%", "125.42%", "133.46%", "142.71%", "155.57%", "168.44%", "181.31%", "194.98%", "211.06%", "227.14%", "243.23%", "259.31%", "275.40%", "291.48%", "307.56%", "323.65%", "339.73%", "355.81%"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Mid-Air Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 10
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Passionate Variation',
                skillDescription: `Launch a flashing lightning of flames forward, dealing <span class="Fire">Fusion DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["105.00%", "113.61%", "122.22%", "134.28%", "142.89%", "152.79%", "166.57%", "180.34%", "194.12%", "208.76%", "225.98%", "243.20%", "260.42%", "277.64%", "294.86%", "312.08%", "329.30%", "346.52%", "363.74%", "380.96%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18"]
                        }],
                        index: 3
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Violent Finale',
                skillDescription: `Deal <span class="Fire">Fusion DMG</span>, and apply <span class="Highlight">Burning Rhapsody</span> to all characters in the team.\n
                <div class="gap"></div>
                <span class="Title">Burning Rhapsody</span>\n
                When the on-field character's <span class="Highlight">Basic Attack</span> hits the target, Mortefi launches a Coordinated Attack, firing {0} <span class="Highlight">Marcato</span>.\n
                When the on-field character's <span class="Highlight">Heavy Attack</span> hits the target, Mortefi launches a Coordinated Attack, firing {1} <span class="Highlight">Marcato</span>.\n
                Mortefi can launch one Coordinated Attack every {2}s.\n
                <div class="gap"></div>
                <span class="Title">Marcato</span>\n
                Deals <span class="Fire">Fusion DMG</span>.`,
                skillDetailNum: ["1", "2", "0.35"],
                multipliers: [
                    {
                        attributeName: "Violent Finale Damage",
                        skillDetailNum: [{
                            values: ["80.00%", "86.56%", "93.12%", "102.31%", "108.87%", "116.41%", "126.91%", "137.40%", "147.90%", "159.05%", "172.17%", "185.29%", "198.41%", "211.53%", "224.65%", "237.77%", "250.89%", "264.01%", "277.13%", "290.25%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Marcato Damage",
                        skillDetailNum: [{
                            values: ["16.00%", "17.32%", "18.63%", "20.47%", "21.78%", "23.29%", "25.39%", "27.48%", "29.58%", "31.81%", "34.44%", "37.06%", "39.69%", "42.31%", "44.93%", "47.56%", "50.18%", "52.81%", "55.43%", "58.05%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Duration",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Dissonance',
                skillDescription: `Attack the target, dealing <span class="Fire">Fusion DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["85.00%", "91.97%", "98.94%", "108.70%", "115.67%", "123.69%", "134.84%", "145.99%", "157.14%", "168.99%", "182.93%", "196.87%", "210.81%", "224.75%", "238.69%", "252.63%", "266.57%", "280.51%", "294.45%", "308.39%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Rage Transposition',
                skillDescription: `The next character (or other characters on a nearby team that activates an Outro Skill) gains {0} Heavy Attack DMG Deepen for {1}s, or until the character is switched off field.`,
                skillDetailNum: ["38%", "14"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Fury Fugue',
                skillDescription: `<span class="Title">Resonance Skill: Fury Fugue</span>
                When Mortefi's "Annoyance" reaches {0}, his <span class="Highlight">Resonance Skill</span> is replaced with <span class="Highlight">Fury Fudge</span>.
                When casting Fury Fudge, Mortefi consumes all "Annoyance" to unleash high-speed flame lightning, dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Skill damage.
                <div class="gap"></div>
                <span class="Title">Annoyance</span>
                Mortefi can hold up to {1} Annoyance.
                When Normal Attack <span class="Highlight">Impromptu Show</span> hits the target, “Annoyance” is restored.
                When Intro Skill <span class="Highlight">Dissonance</span> hits the target, “Annoyance” is restored.
                When Resonance Skill <span class="Highlight">Passionate Variation</span> hits the target, “Annoyance” is restored.
                Within {2}s after casting <span class="Highlight">Passionate Variation</span>, Basic Attack <span class="Highlight">Impromptu</span> that hits the target additionally restores “Annoyance”.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Fury Fugue Damage",
                        skillDetailNum: [{
                            values: ["164.00%", "177.45%", "190.90%", "209.73%", "223.18%", "238.64%", "260.16%", "281.67%", "303.19%", "326.05%", "352.95%", "379.85%", "406.74%", "433.64%", "460.53%", "487.43%", "514.33%", "541.22%", "568.12%", "595.01%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Harmonic Control',
                skillDescription: `After casting Resonance Skill <span class="Highlight">Passionate Variation</span>, the damage of Resonance Skill <span class="Highlight">Draconic Hellfire</span> is increased by {1} for {0}s.`,
                skillDetailNum: ["8", "25%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Rhythmic Vibrato',
                skillDescription: `During Resonance Liberation <span class="Highlight">Burning Rhapsody</span>, each hit of Resonance Liberation <span class="Highlight">Marcato</span> will increase the damage of the next Resonance Liberation <span class="Highlight">Marcato</span> by {0}, which can be triggered once every {1}s, stacking up to {2} times.\n
                The effect will be reset after Resonance Liberation <span class="Highlight">Burning Rhapsody</span> ends.`,
                skillDetailNum: ["1.5%", "0.35", "50"],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Solitary Etude",
            description: `During Resonance Liberation <color=Highlight>Burning Rhapsody</color>, Mortefi launches Coordinated Attacks when the on-field character performs their Resonance Skills, firing {0} Resonance Liberation's <color=Highlight>Marcato</color> hits, dealing <color=Fire>Fusion Damage</color>.`,
            detailNum: ["2"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1204_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Hypocritical Hymn",
            description: `After using the Echo Skill, Mortefi restores an additional {0} Resonance Energy. This can be triggered once every {1} second.`,
            detailNum: ["10", "20"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1204_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Flaming Recitativo",
            description: `During Resonance Liberation <color=Highlight>Burning Rhapsody</color>, the Crit. DMG of Resonance Liberation's <color=Highlight>Marcato</color> is increased by {0}.`,
            detailNum: ["30%"],
            sequenceBuffType: "Skill Critical Damage Buff",
            sequenceBuffAtrribute: ["Marcato"],
            sequenceBuff: [30],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1204_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Cathartic Waltz",
            description: `The duration of Resonance Liberation <color=Highlight>Burning Rhapsody</color> is extended by {0}s.`,
            detailNum: ["7"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1204_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Funerary Quartet",
            description: `When Resonance Skill <color=Highlight>Passionate Variation</color> or Resonance Skill <color=Highlight>Fury Fugue</color> hits a target, {0} Resonance Liberation's <color=Highlight>Marcato</color> hits will be fired, dealing <color=Fire>Fusion Damage</color>. DMG of Resonance Liberation's <color=Highlight>Marcato</color> fired in this way is reduced by {1}.`,
            detailNum: ["4", "50%"],
            sequenceBuffType: "Extra Skill Buff",
            sequenceBuffAtrribute: ["Funerary Quartet"],
            sequenceBuff: [50],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1204_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Apoplectic Instrumental",
            description: `When Resonance Liberation <color=Highlight>Violent Finale</color> is cast, ATK of all team members is increased by {0} for {1}s.`,
            detailNum: ["20%", "20"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [20],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1204_UI.png"
        }
    ]
    },
    {
    name: "Changli",
    charaId: 1204,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Fusion",
    weapon: "Sword",
    bio: `Counselor to the Jinzhou Magistrate, Changli excels at leveraging human nature to corner her enemies into traps.
Being the mentor to Jinhsi, she is persuasive and patient.
She entertains an unwavering aspiration, holding her ground in the endless game against time and chaos.`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/rolecard_1205.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Changli.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/ChangliCharacter_Sprite.png"
    },
    asension: {
        charaAsension: [
        {
            item: "Crude Ring",
            id: 1,
            value: "4"
        },
        {
            item: "Basic Ring",
            id: 2,
            value: "12"
        },
        {
            item: "Improved Ring",
            id: 3,
            value: "12"
        },
        {
            item: "Tailered Ring",
            id: 4,
            value: "4"
        },
        {
            item: "Rage Tactet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Pavo Plum",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "Crude Ring",
            id: 1,
            value: "25"
        },
        {
            item: "Basic Ring",
            id: 2,
            value: "28"
        },
        {
            item: "Improved Ring",
            id: 3,
            value: "40"
        },
        {
            item: "Tailered Ring",
            id: 4,
            value: "57"
        },
        {
            item: "",
            id: 5,
            value: "25"
        },
        {
            item: "",
            id: 6,
            value: "28"
        },
        {
            item: "",
            id: 7,
            value: "55"
        },
        {
            item: "",
            id: 8,
            value: "67"
        },
        {
            item: "",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 831,
        base_atk: 37,
        base_def: 90,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 0,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 8,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Blazing Enlightment',
                skillDescription: `<span class="Title">Basic Attack</span>
                Perform up to 4 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>.
                After releasing <span class="Highlight">Ground Basic Attack Stage 4</span>, Changli enters <span class="Highlight">True Sight</span>, lasting for 12s.
                <span class="Title">Mid-air Attack</span>
                Consume Stamina to perform up to 4 consecutive attacks in mid-air, dealing <span class="Fire">Fusion DMG</span>.
                After releasing <span class="Highlight">Mid-air Attack Stage 4</span>, Changli enters <span class="Highlight">True Sight</span>, lasting for 12s.
                <span class="Title">Heavy Attack</span>
                Hold <span class="Highlight">Basic Attack</span> on the ground to consume Stamina to perform an upward strike, dealing <span class="Fire">Fusion DMG</span>. Use <span class="Highlight">Basic Attack</span> within a certain time to release <span class="Highlight">Mid-air Attack Stage 3</span>.
                <span class="Title">Mid-air Heavy Attack</span>
                Shortly after holding <span class="Highlight">Basic Attack</span> in mid-air or using Basic Attack <span class="Highlight">True Sight: Charge</span>, use <span class="Highlight">Basic Attack</span> to consume Stamina to perform a Plunging Attack, dealing <span class="Fire">Fusion DMG</span>. Use <span class="Highlight">Basic Attack</span> within a certain time to release <span class="Highlight">Basic Attack Stage 3</span>.
                <span class="Title">Dodge Counter</span>
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Fire">Fusion DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {                    
                        attributeName: "Part 1 DMG",
                        skillDetailNum: [{values: ["14.84%*2", "16.05%*2", "17.27%*2", "18.97%*2", "20.19%*2", "21.59%*2", "23.53%*2", "25.48%*2", "27.43%*2", "29.49%*2", "31.93%*2", "34.36%*2", "36.79%*2", "39.22%*2", "41.66%*2", "44.09%*2", "46.52%*2", "48.95%*2", "51.39%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Basic Attack 2 DMG",
                        skillDetailNum: [{
                            values: ["17.85%*2", "19.32%*2", "20.78%*2", "22.83%*2", "24.30%*2", "25.98%*2", "28.32%*2", "30.66%*2", "33.00%*2", "35.49%*2", "38.42%*2", "41.35%*2", "44.27%*2", "47.20%*2", "50.13%*2", "53.06%*2", "55.98%*2", "58.91%*2", "61.84%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Basic Attack 3 DMG",
                        skillDetailNum: [{
                            values: ["18.34%*3", "19.84%*3", "21.34%*3", "23.45%*3", "24.95%*3", "26.68%*3", "29.08%*3", "31.49%*3", "33.89%*3", "36.45%*3", "39.46%*3", "42.46%*3", "45.47%*3", "48.48%*3", "51.48%*3", "54.49%*3", "57.49%*3", "60.50%*3", "63.51%*3"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Basic Attack 4 DMG",
                        skillDetailNum: [{
                            values: ["25.50%+14.88%*4", "27.60%+16.10%*4", "29.69%+17.32%*4", "32.61%+19.03%*4", "34.71%+20.25%*4", "37.11%+21.65%*4", "40.46%+23.60%*4", "43.80%+25.55%*4", "47.15%+27.50%*4", "50.70%+29.58%*4", "54.88%+32.02%*4", "59.07%+34.46%*4", "63.25%+36.90%*4", "67.43%+39.34%*4", "71.61%+41.78%*4", "75.79%+44.21%*4", "79.98%+46.65%*4", "84.16%+49.09%*4", "88.34%+51.53%*4"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Mid-Air Attack 1 DMG",
                        skillDetailNum: [{
                            values: ["30.86%", "33.39%", "35.92%", "39.46%", "41.99%", "44.90%", "48.95%", "53.00%", "57.05%", "61.35%", "66.41%", "71.47%", "76.53%", "81.59%", "86.65%", "91.71%", "96.77%", "101.83%", "106.89%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Mid-Air Attack 2 DMG",
                        skillDetailNum: [{
                            values: ["25.59%*2", "27.69%*2", "29.79%*2", "32.72%*2", "34.82%*2", "37.23%*2", "40.59%*2", "43.95%*2", "47.30%*2", "50.87%*2", "55.07%*2", "59.26%*2", "63.46%*2", "67.65%*2", "71.85%*2", "76.05%*2", "80.24%*2", "84.44%*2", "88.63%*2"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Mid-Air Attack 3 DMG",
                        skillDetailNum: [{
                            values: ["22.13%*3", "23.95%*3", "25.76%*3", "28.30%*3", "30.12%*3", "32.20%*3", "35.11%*3", "38.01%*3", "40.91%*3", "44.00%*3", "47.63%*3", "51.26%*3", "54.89%*3", "58.51%*3", "62.14%*3", "65.77%*3", "69.40%*3", "73.03%*3", "76.66%*3"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Mid-Air Attack 4 DMG",
                        skillDetailNum: [{
                            values: ["19.13%+11.16%*4", "20.70%+12.08%*4", "22.27%+12.99%*4", "24.46%+14.27%*4", "26.03%+15.19%*4", "27.83%+16.24%*4", "30.34%+17.70%*4", "32.85%+19.17%*4", "35.36%+20.63%*4", "38.03%+22.18%*4", "41.16%+24.01%*4", "44.30%+25.84%*4", "47.44%+27.67%*4", "50.57%+29.50%*4", "53.71%+31.33%*4", "56.85%+33.16%*4", "59.98%+34.99%*4", "63.12%+36.82%*4", "66.26%+38.65%*4"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Heavy Attack",
                        skillDetailNum: [{
                            values: ["14.58%*3+18.75%", "15.78%*3+20.28%", "16.97%*3+21.82%", "18.65%*3+23.97%", "19.84%*3+25.51%", "21.22%*3+27.28%", "23.13%*3+29.74%", "25.04%*3+32.20%", "26.95%*3+34.65%", "28.99%*3+37.27%", "31.38%*3+40.34%", "33.77%*3+43.41%", "36.16%*3+46.49%", "38.55%*3+49.56%", "40.94%*3+52.64%", "43.33%*3+55.71%", "45.72%*3+58.78%", "48.11%*3+61.86%", "50.50%*3+64.93%"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Mid-Air Heavy Attack",
                        skillDetailNum: [{
                            values: ["62.00%", "67.09%", "72.17%", "79.29%", "84.37%", "90.22%", "98.36%", "106.49%", "114.62%", "123.27%", "133.44%", "143.60%", "153.77%", "163.94%", "174.11%", "184.28%", "194.44%", "204.61%", "214.78%"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Dodge Counter",
                        skillDetailNum: [{
                            values: ["41.57%*3", "44.98%*3", "48.39%*3", "53.16%*3", "56.57%*3", "60.49%*3", "65.94%*3", "71.40%*3", "76.85%*3", "82.64%*3", "89.46%*3", "96.28%*3", "103.09%*3", "109.91%*3", "116.73%*3", "123.55%*3", "130.36%*3", "137.18%*3", "144.00%*3"]
                        }],
                        index: 11
                    }, {
                        attributeName: "Mid-Air Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 12
                    }, {
                        attributeName: "Heavy Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 13
                    }, {
                        attributeName: "Mid-Air Heavy Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 14
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Tripartite Flames',
                skillDescription: `<span class="Title">True Sight: Capture</span>
After releasing <span class="Highlight">Resonance Skill</span>, Changli rapidly attacks the enemy and enters <span class="Highlight">True Sight</span>, lasting for 12s. In the end, Changli releases a Plunging Attack, dealing <span class="Fire">Fusion DMG</span>.
<span class="Highlight">True Sight: Capture</span> has 2 initial attempts and can be used up to 2 times. The number of attempts is increased by 1 every 12s.

<span class="Title">Basic Attack: True Sight - Conquest</span>
When in <span class="Highlight">True Sight</span>, if Changli uses <span class="Highlight">Ground Basic Attack</span>, she releases <span class="Highlight">True Sight: Conquest</span>, rapidly approaching the enemy and dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Skill DMG. After releasing <span class="Highlight">True Sight: Conquest</span>, <span class="Highlight">True Sight</span> ends.

<span class="Title">Basic Attack: True Sight - Charge</span>
When in <span class="Highlight">True Sight</span>, if Changli <span class="Highlight">jumps</span> or uses <span class="Highlight">Basic Attack</span> in mid-air, she releases <span class="Highlight">True Sight: Charge</span>, dashing towards the enemy and dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Skill DMG. After releasing <span class="Highlight">True Sight: Charge</span>, <span class="Highlight">True Sight</span> ends.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "True Sight - Capture DMG",
                        skillDetailNum: [{
                            values: ["33.70%*3+67.40%", "36.46%*3+72.92%", "39.23%*3+78.45%", "43.10%*3+86.19%", "45.86%*3+91.71%", "49.04%*3+98.07%", "53.46%*3+106.91%", "57.88%*3+115.75%", "62.30%*3+124.59%", "67.00%*3+133.99%", "72.52%*3+145.04%", "78.05%*3+156.09%", "83.57%*3+167.14%", "89.10%*3+178.20%", "94.63%*3+189.25%", "100.15%*3+200.30%", "105.68%*3+211.35%", "111.21%*3+222.41%", "116.73%*3+233.46%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "True Sight - Conquest DMG",
                        skillDetailNum: [{
                            values: ["29.65%*2+41.51%+47.44%", "32.08%*2+44.91%+51.33%", "34.51%*2+48.32%+55.22%", "37.92%*2+53.08%+60.67%", "40.35%*2+56.49%+64.56%", "43.14%*2+60.40%+69.03%", "47.03%*2+65.85%+75.25%", "50.92%*2+71.29%+81.48%", "54.81%*2+76.74%+87.70%", "58.95%*2+82.52%+94.31%", "63.81%*2+89.33%+102.09%", "68.67%*2+96.14%+109.87%", "73.53%*2+102.94%+117.65%", "78.40%*2+109.75%+125.43%", "83.26%*2+116.56%+133.21%", "88.12%*2+123.37%+140.99%", "92.98%*2+130.17%+148.77%", "97.84%*2+136.98%+156.55%", "102.71%*2+143.79%+164.33%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "True Sight - Charge DMG",
                        skillDetailNum: [{
                            values: ["36.56%+54.84%", "39.56%+59.34%", "42.56%+63.83%", "46.75%+70.13%", "49.75%+74.62%", "53.20%+79.80%", "58.00%+86.99%", "62.79%+94.18%", "67.59%+101.38%", "72.68%+109.02%", "78.68%+118.02%", "84.67%+127.01%", "90.67%+136.00%", "96.66%+144.99%", "102.66%+153.99%", "108.66%+162.98%", "114.65%+171.97%", "120.65%+180.97%", "126.64%+189.96%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "True Sight: Capture - Con. Regen",
                        skillDetailNum: [{
                            values: ["14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"]
                        }],
                        index: 4
                    }, {
                        attributeName: "True Sight: Conquest - Con. Regen",
                        skillDetailNum: [{
                            values: ["7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7"]
                        }],
                        index: 5
                    }, {
                        attributeName: "True Sight: Charge - Con. Regen",
                        skillDetailNum: [{
                            values: ["6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Radiance of Fealty',
                skillDescription: `Deal <span class="Fire">Fusion DMG</span> to nearby targets, obtaining 4 stacks of [Enflamement], and entering <span class="Highlight">Fiery Feather</span>.
<span class="Title">Fiery Feather</span>
When Changli releases Heavy Attack <span class="Highlight">Flaming Sacrifice</span> within 10s, her ATK is increased by {0}, after which <span class="Highlight">Fiery Feather</span> ends.`,
                skillDetailNum: ["25%"],
                multipliers: [
                    {
                        attributeName: "Skill DMG",
                        skillDetailNum: [{
                            values: ["610.00%", "660.02%", "710.04%", "780.07%", "830.09%", "887.62%", "967.65%", "1047.68%", "1127.71%", "1212.75%", "1312.79%", "1412.83%", "1512.87%", "1612.91%", "1712.95%", "1812.99%", "1913.03%", "2013.07%", "2113.11%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Resonance Cost",
                        skillDetailNum: [{
                            values: ["150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Con. Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 4
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Obedience of Rules',
                skillDescription: `Changli appears in mid-air, attacks the target, and enters <span class="Highlight">True Sight</span>, lasting for 12s.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill DMG",
                        skillDetailNum: [{
                            values: ["22.38%+13.06%*4", "24.22%+14.13%*4", "26.06%+15.20%*4", "28.62%+16.70%*4", "30.46%+17.77%*4", "32.57%+19.00%*4", "35.51%+20.71%*4", "38.44%+22.43%*4", "41.38%+24.14%*4", "44.50%+25.96%*4", "48.17%+28.10%*4", "51.84%+30.24%*4", "55.51%+32.38%*4", "59.18%+34.52%*4", "62.85%+36.66%*4", "66.52%+38.81%*4", "70.19%+40.95%*4", "73.86%+43.09%*4", "77.53%+45.23%*4"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Strategy of Duality',
                skillDescription: `Changli's Outro Skill increases the switched-in Resonator's Fusion DMG by {0} and their Resonance Liberation DMG by {1}, lasting for {2}s. Switching to another Resonator ends this effect.`,
                skillDetailNum: ["20%", "25%", "10"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Flaming Sacrifice',
                skillDescription: `<span class="Title">Heavy Attack: Flaming Sacrifice</span>
When releasing <span class="Highlight">Heavy Attack</span>, if Changli carries 4 stacks of [Enflamement], she consumes all stacks of [Enflamement] to release <span class="Highlight">Flaming Sacrifice</span>, dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Skill DMG.
<span class="Title">Enflamement</span>
Changli can hold up to 4 stacks of [Enflamement].
Changli obtains 1 stack of [Enflamement] for every Basic Attack: <span class="Highlight">True Sight - Conquest</span> on hit.
Changli obtains 1 stack of [Enflamement] for every Basic Attack: <span class="Highlight">True Sight - Charge</span> on hit.
Changli obtains 4 stacks of [Enflamement] for every Resonance Liberation <span class="Highlight">Radiance of Fealty</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Flaming Sacrifice DMG",
                        skillDetailNum: [{
                            values: ["19.74%*5+230.30%", "21.36%*5+249.18%", "22.98%*5+268.07%", "25.25%*5+294.51%", "26.87%*5+313.39%", "28.73%*5+335.11%", "31.32%*5+365.32%", "33.91%*5+395.54%", "36.50%*5+425.75%", "39.25%*5+457.85%", "35.10%*5+409.43%", "37.77%*5+440.63%", "40.45%*5+471.83%", "43.12%*5+503.03%", "45.80%*5+534.23%", "48.47%*5+565.43%", "51.14%*5+596.63%", "53.82%*5+627.83%", "56.49%*5+659.03%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Secret Strategist',
                skillDescription: `When Changli releases Basic Attack: <span class="Highlight">True Sight - Conquest</span> or Basic Attack: <span class="Highlight">True Sight - Charge</span>, for each stack of [Enflamement], Changli's Fusion DMG is increased by {0}.`,
                skillDetailNum: ["5%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Sweeping Force',
                skillDescription: `When Changli releases Heavy Attack <span class="Highlight">Flaming Sacrifice</span> or Resonance Liberation <span class="Highlight">Radiance of Fealty</span>, Changli's Fusion DMG Bonus is increased by {0}, and Changli ignores {1} of the target's DEF when dealing damage.`,
                skillDetailNum: ["20%", "15%"],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Hidden Thoughts",
            description: `Resonance Skill Tripartite Flames and Heavy Attack Flaming Sacrifice increase Changli's DMG dealt by 10% and resistance to interruption.`,
            detailNum: ["10%"],
            sequenceBuffType: "Skill Damage Buff",
            sequenceBuffAtrribute: ["Damage Increase"],
            sequenceBuff: [10],
            itemImg: ""
        },
        {
            node: "Sequence Node 2",
            name: "Pursuit of Desires",
            description: `Enflamement increases Changli's Crit. Rate by 25% for 8s.`,
            detailNum: ["25%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Crit. Rate"],
            sequenceBuff: [25],
            itemImg: ""
        },
        {
            node: "Sequence Node 3",
            name: "Learned Secrets",
            description: `Resonance Liberation Radiance of Fealty DMG is increased by 80%.`,
            detailNum: ["80%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonance Liberation Damage Bonus"],
            sequenceBuff: [80],
            itemImg: ""
        },
        {
            node: "Sequence Node 4",
            name: "Polished Words",
            description: `After Intro Skill is cast, all team members' ATK is increased by 20% for 30s.`,
            detailNum: ["20%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [20],
            itemImg: ""
        },
        {
            node: "Sequence Node 5",
            name: "Sacrificed Gains",
            description: `Heavy Attack Flaming Sacrifice's Multiplier is increased by 50% and its DMG dealt is increased by 50%.`,
            detailNum: ["50%", "50%"],
            sequenceBuffType: "Skill Damage Buff",
            sequenceBuffAtrribute: ["Damage Increase"],
            sequenceBuff: [50],
            itemImg: ""
        },
        {
            node: "Sequence Node 6",
            name: "Realized Plans",
            description: `Resonance Skill Tripartite Flames, Heavy Attack Flaming Sacrifice, and Resonance Liberation Radiance of Fealty ignore an additional 40% of the target's DEF when dealing damage.`,
            detailNum: ["40%"],
            sequenceBuffType: "Enemy Def Ignore",
            sequenceBuffAtrribute: ["Def Ignore"],
            sequenceBuff: [40],
            itemImg: ""
        },
    ]
    },
    {
    name: "Calcharo",
    charaId: 1301,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Electro",
    weapon: "Broadblade",
    bio: `Leader of the "Ghost Hounds", an international mercenary group.
Ruthless, vengeful, unforgiving. A potential client must be mindful of the price to pay before making him an offer.`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_kakaluo_UI.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Calcharo.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Calcharo_Model.png"
    },
    asension: {
        charaAsension: [
        {
            item: "Crude Ring",
            id: 1,
            value: "4"
        },
        {
            item: "Basic Ring",
            id: 2,
            value: "12"
        },
        {
            item: "Improved Ring",
            id: 3,
            value: "12"
        },
        {
            item: "Tailored Ring",
            id: 4,
            value: "4"
        },
        {
            item: "Thundering Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Iris",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "Crude Ring",
            id: 1,
            value: "25"
        },
        {
            item: "Basic Ring",
            id: 2,
            value: "28"
        },
        {
            item: "Improved Ring",
            id: 3,
            value: "40"
        },
        {
            item: "Tailered Ring",
            id: 4,
            value: "57"
        },
        {
            item: "Waveworn Residue 210",
            id: 5,
            value: "25"
        },
        {
            item: "Waveworn Residue 226",
            id: 6,
            value: "28"
        },
        {
            item: "Waveworn Residue 235",
            id: 7,
            value: "55"
        },
        {
            item: "Waveworn Residue 239",
            id: 8,
            value: "67"
        },
        {
            item: "Monument Bell",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 840,
        base_atk: 35,
        base_def: 97,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 0,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 0,
        bonus_critdmg: 16,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Gnawing Fang',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Calcharo performs up to 4 consecutive attacks, dealing <span class="Thunder">Electro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Consumes Stamina to attack the target, dealing <span class="Thunder">Electro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Consumes Stamina to perform a Mid-Air Plunging Attack, dealing <span class="Thunder">Electro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Thunder">Electro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["23.00%*2", "24.89%*2", "26.78%*2", "29.42%*2", "31.30%*2", "33.47%*2", "36.49%*2", "39.51%*2", "42.53%*2", "45.73%*2", "49.50%*2", "53.28%*2", "57.05%*2", "60.82%*2", "64.59%*2", "68.36%*2", "72.14%*2", "75.91%*2", "79.68%*2", "83.45%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["50.00%", "54.10%", "58.20%", "63.94%", "68.04%", "72.76%", "79.32%", "85.88%", "92.44%", "99.41%", "107.61%", "115.81%", "124.01%", "132.21%", "140.41%", "148.61%", "156.81%", "165.01%", "173.21%", "181.41%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["42.84%+21.42%*3", "46.36%+23.18%*3", "49.87%+24.94%*3", "54.79%+27.40%*3", "58.30%+29.15%*3", "62.34%+31.17%*3", "67.96%+33.98%*3", "73.58%+36.79%*3", "79.20%+39.60%*3", "85.18%+42.59%*3", "92.20%+46.10%*3", "99.23%+49.62%*3", "106.25%+53.13%*3", "113.28%+56.64%*3", "120.30%+60.15%*3", "127.33%+63.67%*3", "134.36%+67.18%*3", "141.38%+70.69%*3", "148.41%+74.21%*3", "155.43%+77.72%*3"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["39.99%*2+53.32%", "43.27%*2+57.70%", "46.55%*2+62.07%", "51.14%*2+68.19%", "54.42%*2+72.56%", "58.19%*2+77.59%", "63.44%*2+84.59%", "68.69%*2+91.58%", "73.93%*2+98.58%", "79.51%*2+106.01%", "86.07%*2+114.75%", "92.63%*2+123.50%", "99.18%*2+132.24%", "105.74%*2+140.99%", "112.30%*2+149.73%", "118.86%*2+158.48%", "125.42%*2+167.22%", "131.98%*2+175.97%", "138.53%*2+184.71%", "145.09%*2+193.46%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["20.80%*5", "22.51%*5", "24.22%*5", "26.60%*5", "28.31%*5", "30.27%*5", "33.00%*5", "35.73%*5", "38.46%*5", "41.36%*5", "44.77%*5", "48.18%*5", "51.59%*5", "55.00%*5", "58.41%*5", "61.82%*5", "65.24%*5", "68.65%*5", "72.06%*5", "75.47%*5"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        skillDetailNum: [{
                            values: ["62.00%", "67.09%", "72.17%", "79.29%", "84.37%", "90.22%", "98.36%", "106.49%", "114.62%", "123.27%", "133.44%", "143.60%", "153.77%", "163.94%", "174.11%", "184.28%", "194.44%", "204.61%", "214.78%", "224.95%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["33.44%*3+42.99%", "36.18%*3+46.52%", "38.93%*3+50.05%", "42.76%*3+54.98%", "45.51%*3+58.51%", "48.66%*3+62.56%", "53.05%*3+68.20%", "57.43%*3+73.84%", "61.82%*3+79.48%", "66.48%*3+85.47%", "71.96%*3+92.52%", "77.45%*3+99.57%", "82.93%*3+106.62%", "88.41%*3+113.67%", "93.90%*3+120.73%", "99.38%*3+127.78%", "104.87%*3+134.83%", "110.35%*3+141.88%", "115.83%*3+148.93%", "121.32%*3+155.98%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Heavy Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 9
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Extermination index',
                skillDescription: `Calcharo performs up to 3 consecutive attacks, dealing <span class="Thunder">Electro DMG</span>.
                If Calcharo is switched off field, or if Resonance Skill <span class="Highlight">Extermination index</span> is not performed again in a while, this skill will enter Cooldown.
                Resonance Skill <span class="Highlight">Extermination index</span> does not interrupt Calcharo's Basic Attack combo.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Extermination index Part 1 Damage",
                        skillDetailNum: [{
                            values: ["25.94%*2+34.59%", "28.07%*2+37.42%", "30.20%*2+40.26%", "33.17%*2+44.23%", "35.30%*2+47.07%", "37.75%*2+50.33%", "41.15%*2+54.87%", "44.55%*2+59.40%", "47.96%*2+63.94%", "51.57%*2+68.76%", "55.83%*2+74.43%", "60.08%*2+80.11%", "64.33%*2+85.78%", "68.59%*2+91.45%", "72.84%*2+97.12%", "77.10%*2+102.79%", "81.35%*2+108.46%", "85.60%*2+114.14%", "89.86%*2+119.81%", "94.11%*2+125.48%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Extermination index Part 2 Damage",
                        skillDetailNum: [{
                            values: ["38.91%*2+51.88%", "42.10%*2+56.13%", "45.29%*2+60.39%", "49.76%*2+66.34%", "52.95%*2+70.60%", "56.62%*2+75.49%", "61.72%*2+82.30%", "66.83%*2+89.10%", "71.93%*2+95.91%", "77.36%*2+103.14%", "83.74%*2+111.65%", "90.12%*2+120.16%", "96.50%*2+128.66%", "102.88%*2+137.17%", "109.26%*2+145.68%", "115.64%*2+154.19%", "122.02%*2+162.69%", "128.40%*2+171.20%", "134.78%*2+179.71%", "141.16%*2+188.22%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Extermination index Part 3 Damage",
                        skillDetailNum: [{
                            values: ["108.08%*2", "116.94%*2", "125.80%*2", "138.21%*2", "147.07%*2", "157.26%*2", "171.44%*2", "185.62%*2", "199.80%*2", "214.87%*2", "232.59%*2", "250.32%*2", "268.04%*2", "285.77%*2", "303.49%*2", "321.21%*2", "338.94%*2", "356.66%*2", "374.39%*2", "392.11%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Extermination index Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
                        }],
                        index: 5
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liberation',
                skillName: 'Phantom Etching',
                skillDescription: `Calcharo attacks the target, dealing <span class="Thunder">Electro DMG</span> and enters <span class="Highlight">Deathblade Gear</span> state. After Resonance Liberation <span class="Highlight">Deathblade Gear</span> state ends, Calcharo's next Intro Skill is replaced with Intro Skill <span class="Highlight">"Necessary Means"</span>, which deals <span class="Thunder">Electro DMG</span>, considered as Intro Skill damage.\n
                <div class="gap"></div>
                <span class="Title">Deathblade Gear</span>\n
                -<span class="Highlight">Basic Attack</span> is replaced with Basic Attack <span class="Highlight">Hounds Roar</span>.\n
                -<span class="Highlight">Dodge Counter</span> deals increased damage, considered as Resonance Liberation damage.\n
                <div class="gap"></div>
                <span class="Title">Hounds Roar</span>\n
                Calcharo performs up to 5 consecutive attacks, dealing <span class="Thunder">Electro DMG</span>, considered as Basic Attack Damage.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["300.00%", "324.60%", "349.20%", "383.64%", "408.24%", "436.53%", "475.89%", "515.25%", "554.61%", "596.43%", "645.63%", "694.83%", "744.03%", "793.23%", "842.43%", "891.63%", "940.83%", "990.03%", "1039.23%", "1088.43%"]
                        }],
                        index: 1
                    }, {
                        attributeName: '"Necessary Means" Damage',
                        skillDetailNum: [{
                            values: ["100.00%*2", "108.20%*2", "116.40%*2", "127.88%*2", "136.08%*2", "145.51%*2", "158.63%*2", "171.75%*2", "184.87%*2", "198.81%*2", "215.21%*2", "231.61%*2", "248.01%*2", "264.41%*2", "280.81%*2", "297.21%*2", "313.61%*2", "330.01%*2", "346.41%*2", "362.81%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Hounds Roar Part 1",
                        skillDetailNum: [{
                            values: ["44.30%", "47.93%", "51.56%", "56.65%", "60.28%", "64.46%", "70.27%", "76.08%", "81.89%", "88.07%", "95.33%", "102.59%", "109.86%", "117.12%", "124.39%", "131.65%", "138.91%", "146.18%", "153.44%", "160.71%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Hounds Roar Part 2",
                        skillDetailNum: [{
                            values: ["17.72%*2+26.58%*2", "19.18%*2+28.76%*2", "20.63%*2+30.94%*2", "22.66%*2+33.99%*2", "24.11%*2+36.17%*2", "25.79%*2+38.68%*2", "28.11%*2+42.16%*2", "30.43%*2+45.65%*2", "32.76%*2+49.14%*2", "35.23%*2+52.84%*2", "38.13%*2+57.20%*2", "41.04%*2+61.56%*2", "43.95%*2+65.92%*2", "46.85%*2+70.28%*2", "49.76%*2+74.63%*2", "52.66%*2+78.99%*2", "55.57%*2+83.35%*2", "58.47%*2+87.71%*2", "61.38%*2+92.07%*2", "64.29%*2+96.43%*2"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Hounds Roar Part 3",
                        skillDetailNum: [{
                            values: ["82.41%", "89.17%", "95.93%", "105.39%", "112.14%", "119.92%", "130.73%", "141.54%", "152.35%", "163.84%", "177.35%", "190.87%", "204.38%", "217.90%", "231.41%", "244.93%", "258.44%", "271.96%", "285.47%", "298.99%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Hounds Roar Part 4",
                        skillDetailNum: [{
                            values: ["17.52%*6", "18.95%*6", "20.39%*6", "22.40%*6", "23.83%*6", "25.49%*6", "27.78%*6", "30.08%*6", "32.38%*6", "34.82%*6", "37.69%*6", "40.56%*6", "43.44%*6", "46.31%*6", "49.18%*6", "52.05%*6", "54.92%*6", "57.79%*6", "60.67%*6", "63.54%*6"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Hounds Roar Part 5",
                        skillDetailNum: [{
                            values: ["75.54%*2", "81.74%*2", "87.93%*2", "96.61%*2", "102.80%*2", "109.92%*2", "119.83%*2", "129.74%*2", "139.66%*2", "150.19%*2", "162.57%*2", "174.96%*2", "187.35%*2", "199.74%*2", "212.13%*2", "224.52%*2", "236.90%*2", "249.29%*2", "261.68%*2", "274.07%*2"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["31.20%*5", "33.76%*5", "36.32%*5", "39.90%*5", "42.46%*5", "45.40%*5", "49.50%*5", "53.59%*5", "57.68%*5", "62.03%*5", "67.15%*5", "72.27%*5", "77.38%*5", "82.50%*5", "87.62%*5", "92.73%*5", "97.85%*5", "102.97%*5", "108.08%*5", "113.20%*5"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["28.67%*6", "31.02%*6", "33.37%*6", "36.66%*6", "39.01%*6", "41.72%*6", "45.48%*6", "49.24%*6", "53.00%*6", "56.99%*6", "61.69%*6", "66.40%*6", "71.10%*6", "75.80%*6", "80.50%*6", "85.20%*6", "89.90%*6", "94.60%*6", "99.30%*6", "104.00%*6"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Heavy Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Deathblade Gear Duration",
                        skillDetailNum: [{
                            values: ["11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11"]
                        }],
                        index: 11
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 12
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                        }],
                        index: 13
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 14
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Wanted Outlaw',
                skillDescription: `Attack the target, dealing <span class="Thunder">Electro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["20.00%*2+30.00%*2", "21.64%*2+32.46%*2", "23.28%*2+34.92%*2", "25.58%*2+38.37%*2", "27.22%*2+40.83%*2", "29.11%*2+43.66%*2", "31.73%*2+47.59%*2", "34.35%*2+51.53%*2", "36.98%*2+55.47%*2", "39.77%*2+59.65%*2", "43.05%*2+64.57%*2", "46.33%*2+69.49%*2", "49.61%*2+74.41%*2", "52.89%*2+79.33%*2", "56.17%*2+84.25%*2", "59.45%*2+89.17%*2", "62.73%*2+94.09%*2", "66.01%*2+99.01%*2", "69.29%*2+103.93%*2", "72.57%*2+108.85%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Shadowy Raid',
                skillDescription: `Calcharo summons <span class="Highlight">Phantom</span> to support the on-field Resonator, clearing the targets in front with a slash. The <span class="Highlight">Phantom's</span> attack deals <span class="Thunder">Electro DMG</span> equal to {0} of Calcharo's ATK.`,
                skillDetailNum: ["195.98%+391.96%"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Hunting Mission',
                skillDescription: `<span class="Title">Heavy Attack: "Mercy"</span>\n
                When Calcharo has {0} "Cruelty", his <span class="Highlight">Heavy Attack</span> is replaced with Heavy Attack <span class="Highlight">"Mercy"</span>.\n
                When casting Heavy Attack <span class="Highlight">"Mercy"</span>, Calcharo consumes {1} "Cruelty" to deal <span class="Thunder">Electro DMG</span>, considered as Heavy Attack damage, and recovers Resonance Energy and Concerto Energy.\n
                <div class="gap"></div>
                <span class="Title">"Cruelty"</span>\n
                Calcharo can hold up to {2} "Cruelty".\n
                Under Resonance Liberation <span class="Highlight">Deathblade Gear</span> state, "Cruelty" cannot be acquired.\n
                When Resonance Skill <span class="Highlight">Extermination index</span> hits the target, gain {3} "Cruelty".\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack: "Death Messenger"</span>\n
                When Calcharo has {4} "Killing Intent", his <span class="Highlight">Basic Attack</span> is replaced with Heavy Attack <span class="Highlight">"Death Messenger"</span>.\n
                When casting Heavy Attack <span class="Highlight">"Death Messenger"</span>, Calcharo consumes {5} "Killing Intent" to deal <span class="Thunder">Electro DMG</span>, considered as Resonance Liberation damage, and recovers Resonance Energy and Concerto Energy.\n
                <div class="gap"></div>
                <span class="Title">"Killing Intent"</span>\n
                Under Resonance Liberation <span class="Highlight">Deathblade Gear</span> state, Calcharo's Forte Gauge is replaced with "Killing Intent", stacking up to {6}.\n
                When Basic Attack <span class="Highlight">Hounds Roar</span> hits the target, Calcharo gains 1 "Killing Intent".`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: '"Mercy" Damage',
                        skillDetailNum: [{
                            values: ["19.67%*8+39.34%", "21.29%*8+42.57%", "22.90%*8+45.80%", "25.16%*8+50.31%", "26.77%*8+53.54%", "28.63%*8+57.25%", "31.21%*8+62.41%", "33.79%*8+67.57%", "36.37%*8+72.73%", "39.11%*8+78.22%", "42.34%*8+84.67%", "45.56%*8+91.12%", "48.79%*8+97.57%", "52.01%*8+104.02%", "55.24%*8+110.48%", "58.47%*8+116.93%", "61.69%*8+123.38%", "64.92%*8+129.83%", "68.14%*8+136.28%", "71.37%*8+142.73%"]
                        }],
                        index: 1
                    }, {
                        attributeName: '"Death Messenger" Damage',
                        skillDetailNum: [{
                            values: ["49.18%*8+98.35%", "53.21%*8+106.42%", "57.24%*8+114.48%", "62.89%*8+125.77%", "66.92%*8+133.84%", "71.56%*8+143.11%", "78.01%*8+156.02%", "84.46%*8+168.92%", "90.91%*8+181.82%", "97.77%*8+195.53%", "105.83%*8+211.66%", "113.90%*8+227.79%", "121.96%*8+243.92%", "130.03%*8+260.05%", "138.09%*8+276.18%", "146.16%*8+292.31%", "154.22%*8+308.44%", "162.29%*8+324.57%", "170.35%*8+340.70%", "178.42%*8+356.83%"]
                        }],
                        index: 2
                    }, {
                        attributeName: '"Mercy" Con. Energy Regen',
                        skillDetailNum: [{
                            values: ["6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
                        }],
                        index: 3
                    }, {
                        attributeName: '"Death Messenger" Con. Energy Regen',
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 4
                    }, {
                        attributeName: '"Mercy" Con. Energy Regen',
                        skillDetailNum: [{
                            values: ["6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
                        }],
                        index: 5
                    }, {
                        attributeName: '"Death Messenger" Con. Energy Regen',
                        skillDetailNum: [{
                            values: ["12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Bloodshed Awaken',
                skillDescription: `When casting Heavy Attack <span class="Highlight">"Mercy"</span>, Calcharo's Resonance Liberation DMG Bonus is increased by {0} for {1}s.`,
                skillDetailNum: ["10%", "15"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Revenant Rush',
                skillDescription: `When Heavy Attack <span class="Highlight">"Death Messenger"</span> hits the target, the damage taken by Calcharo is reduced by {0} for {1}s.`,
                skillDetailNum: ["15%", "5"],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Covert Negotiation",
            description: `When Resonance Skill <span class="Highlight">Extermination index</span> hits a target, it additionally recovers {0} Resonance Energy. This can be triggered once every {1}s.`,
            detailNum: ["10", "20"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1301_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Zero-Sum Game",
            description: `After Calcharo casts Intro Skill <span class="Highlight">Wanted Criminal</span> or Intro Skill <span class="Highlight">"Necessary Means"</span>, his Resonance Skill DMG Bonus is increased by {0} for {1}s.`,
            detailNum: ["30%", "15"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonane Skill Damage Bonus"],
            sequenceBuff: [30   ],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1301_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Iron Fist Diplomacy",
            description: `During the Resonance Liberation <span class="Highlight">Deathblade Gear</span> state, Calcharo's Electro DMG Bonus is increased by {0}.`,
            detailNum: ["25%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Electro Damage Bonus"],
            sequenceBuff: [25],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1301_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Dark Alliance",
            description: `After casting Outro Skill <span class="Highlight">Shadowy Raid</span>, Electro DMG Bonus of all team members is increased by {0} for {1}s.`,
            detailNum: ["20%", "30"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Electro Damage Bonus"],
            sequenceBuff: [20],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1301_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Unconventional Compact",
            description: `Intro Skill <span class="Highlight">Wanted Criminal</span> and Intro Skill <span class="Highlight">"Necessary Means:</span> deal {0} more damage`,
            detailNum: ["50%"],
            sequenceBuffType: "Skill Buff",
            sequenceBuffAtrribute: ["Necessary Means"],
            sequenceBuff: [50],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1301_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "The Ultimatum",
            description: `When casting Resonance Liberation <span class="Highlight">"Death Messenger"</span>, Calcharo will summon {0} <span class="Highlight">Phantoms</span> to perform Coordinated Attacks. Each <span class="Highlight">Phantom</span> deals <span className="Thunder">Electro DMG</span> equal to {1} of Calcharo's ATK, which is considered Resonance Liberation damage.`,
            detailNum: ["2", "100.00%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1301_UI.png"
        }
    ]
    },
    {
    name: "Yinlin",
    charaId: 1302,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Electro",
    weapon: "Rectifier",
    bio: `Previously known as an outstanding Jinzhou Patroller, Yinlin is steady and reliable, yet harbors hidden depths of secrets. She excels at exploiting resources at her disposal to uncover lurking crimes. Beneath her aloof and flamboyant exterior, Yinlin possesses a heart of gold, reserved only for those she deems trustworthy.`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_yinlin_UI.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Yinlin.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Yinlin_Full_Sprite.webp"
    },
    asension: {
        charaAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "4"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "12"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "12"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "4"
        },
        {
            item: "Group Abomination Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Coriolus",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "25"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "28"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "40"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "57"
        },
        {
            item: "Lento Helix",
            id: 5,
            value: "25"
        },
        {
            item: "Adagio Helix",
            id: 6,
            value: "28"
        },
        {
            item: "Andante Helix",
            id: 7,
            value: "55"
        },
        {
            item: "Presto Helix",
            id: 8,
            value: "67"
        },
        {
            item: "Unwarranted Feather",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 880,
        base_atk: 32,
        base_def: 105,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 0,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 8,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: `Zapstring's Dance`,
                skillDescription: `<span class="Title">Basic Attack</span>\n
Yinlin controls the puppet "Zapstring" to perform up to 4 attacks, dealing <span class="Thunder">Electro DMG</span>.
 
<span class="Title">Heavy Attack</span>\n
Yinlin consumes Stamina to control "Zapstring", dealing <span class="Thunder">Electro DMG</span>.
 
<span class="Title">Mid-air Attack</span>\n
Yinlin consumes Stamina to control "Zapstring" and perform a Mid-air Plunging Attack, dealing <span class="Thunder">Electro DMG</span>.
 
<span class="Title">Dodge Counter</span>\n
Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Thunder">Electro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
            attributeName: "Part 1 Damage",
            skillDetailNum: [{
                values: ["14.49%", "15.68%", "16.87%", "18.53%", "19.72%", "21.09%", "22.99%", "24.89%", "26.79%", "28.81%", "31.19%", "33.57%", "35.94%", "38.32%", "40.69%", "43.07%", "45.45%", "47.82%", "50.2%", "52.58%"]
            }],
            index: 1
        }, {
            attributeName: "Part 2 Damage",
            skillDetailNum: [{
                values: ["17.01%*2", "18.41%*2", "19.8%*2", "21.76%*2", "23.15%*2", "24.76%*2", "26.99%*2", "29.22%*2", "31.45%*2", "33.82%*2", "36.61%*2", "39.4%*2", "42.19%*2", "44.98%*2", "47.77%*2", "50.56%*2", "53.35%*2", "56.14%*2", "58.93%*2", "61.72%*2"]
            }],
            index: 2
        }, {
            attributeName: "Part 3 Damage",
            skillDetailNum: [{
                values: ["7.04%*7", "7.62%*7", "8.19%*7", "9%*7", "9.58%*7", "10.24%*7", "11.16%*7", "12.09%*7", "13.01%*7", "13.99%*7", "15.15%*7", "16.3%*7", "17.45%*7", "18.61%*7", "19.76%*7", "20.91%*7", "22.07%*7", "23.22%*7", "24.37%*7", "25.53%*7"]
            }],
            index: 3
        }, {
            attributeName: "Part 4 Damage",
            skillDetailNum: [{
                values: ["37.8%", "40.9%", "44%", "48.34%", "51.44%", "55.01%", "59.97%", "64.93%", "69.89%", "75.16%", "81.35%", "87.55%", "93.75%", "99.95%", "106.15%", "112.35%", "118.55%", "124.75%", "130.95%", "137.15%"]
            }],
            index: 4
        }, {
            attributeName: "Heavy Attack Damage",
            skillDetailNum: [{
                values: ["15%*2", "16.23%*2", "17.46%*2", "19.19%*2", "20.42%*2", "21.83%*2", "23.8%*2", "25.77%*2", "27.74%*2", "29.83%*2", "32.29%*2", "34.75%*2", "37.21%*2", "39.67%*2", "42.13%*2", "44.59%*2", "47.05%*2", "49.51%*2", "51.97%*2", "54.43%*2"]
            }],
            index: 5
        }, {
            attributeName: "Mid-Air Attack Damage",
            skillDetailNum: [{
                values: ["62%", "67.09%", "72.17%", "79.29%", "84.37%", "90.22%", "98.36%", "106.49%", "114.62%", "123.27%", "133.44%", "143.6%", "153.77%", "163.94%", "174.11%", "184.28%", "194.44%", "204.61%", "214.78%", "224.95%"]
            }],
            index: 6
        }, {
            attributeName: "Dodge Counter Damage",
            skillDetailNum: [{
                values: ["12.18%*7", "13.18%*7", "14.18%*7", "15.58%*7", "16.58%*7", "17.72%*7", "19.32%*7", "20.92%*7", "22.52%*7", "24.22%*7", "26.21%*7", "28.21%*7", "30.21%*7", "32.2%*7", "34.2%*7", "36.2%*7", "38.2%*7", "40.19%*7", "42.19%*7", "44.19%*7"]
            }],
            index: 7
        }, {
            attributeName: "Heavy Attack Stamina Consumption",
            skillDetailNum: [{
                values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
            }],
            index: 8
        }, {
            attributeName: "Mid-Air Attack Stamina Consumption",
            skillDetailNum: [{
                values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
            }],
            index: 9
        }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Magnetic Roar',
                skillDescription: `<span class="Title">Magnetic Roar</span>\n
The puppet "Zapstring" deals <span class="Thunder">Electro DMG</span> to the target, and puts Yinlin into the <span class="Highlight">Execution Mode</span>.
 
<span class="Title">Execution Mode</span>\n
<span class="Highlight">Basic Attack</span> and <span class="Highlight">Dodge Counter</span> will trigger 1 <span class="Highlight">Electromagnetic Blast</span> when hitting a target.
Each stage of <span class="Highlight">Basic Attack</span> or <span class="Highlight">Dodge Counter</span> can only trigger 1 <span class="Highlight">Electromagnetic Blast</span>, up to 4 times.
 
<span class="Title">Electromagnetic Blast</span>\n
Attack all targets marked with Resonance Circuit <span class="Highlight">Sinner's Mark</span>, dealing <span class="Thunder">Electro DMG</span>.
 
<span class="Title">Lightning Execution</span>\n
Use Resonance Skill after casting Resonance Skill <span class="Highlight">Magnetic Roar</span> to cast <span class="Highlight">Lightning Execution</span> to attack the target, dealing <span class="Thunder">Electro DMG</span>.
If Resonance Skill <span class="Highlight">Lightning Execution</span> is not activated in a while or this Character is switched, this Skill will be put on Cooldown.`,
                skillDetailNum: [],
                multipliers: [
                    {
            attributeName: "Magnetic Roar Damage",
            skillDetailNum: [{
                values: ["30%*3", "32.46%*3", "34.92%*3", "38.37%*3", "40.83%*3", "43.66%*3", "47.59%*3", "51.53%*3", "55.47%*3", "59.65%*3", "64.57%*3", "69.49%*3", "74.41%*3", "79.33%*3", "84.25%*3", "89.17%*3", "94.09%*3", "99.01%*3", "103.93%*3", "108.85%*3"]
            }],
            index: 1
        }, {
            attributeName: "Lightning Execution Damage",
            skillDetailNum: [{
                values: ["45%*4", "48.69%*4", "52.38%*4", "57.55%*4", "61.24%*4", "65.48%*4", "71.39%*4", "77.29%*4", "83.2%*4", "89.47%*4", "96.85%*4", "104.23%*4", "111.61%*4", "118.99%*4", "126.37%*4", "133.75%*4", "141.13%*4", "148.51%*4", "155.89%*4", "163.27%*4"]
            }],
            index: 2
        }, {
            attributeName: "Electromagnetic Blast Damage",
            skillDetailNum: [{
                values: ["10%", "10.82%", "11.64%", "12.79%", "13.61%", "14.56%", "15.87%", "17.18%", "18.49%", "19.89%", "21.53%", "23.17%", "24.81%", "26.45%", "28.09%", "29.73%", "31.37%", "33.01%", "34.65%", "36.29%"]
            }],
            index: 3
        }, {
            attributeName: "Execution Mode Duration",
            skillDetailNum: [{
                values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
            }],
            index: 4
        }, {
            attributeName: "Cooldown",
            skillDetailNum: [{
                values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
            }],
            index: 5
        }, {
            attributeName: "Magnetic Roar Con. Energy Regen",
            skillDetailNum: [{
                values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
            }],
            index: 6
        }, {
            attributeName: "Lightning Execution Con. Energy Regen",
            skillDetailNum: [{
                values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
            }],
            index: 7
        }, {
            attributeName: "Electromagnetic Blast Con. Energy Regen",
            skillDetailNum: [{
                values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
            }],
            index: 8
        }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Thundering Wrath',
                skillDescription: `Command "Zapstring" to call for thunder to fall upon a large range, dealing <span class="Thunder">Electro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
            attributeName: "Skill Damage",
            skillDetailNum: [{
                values: ["58.63%*7", "63.44%*7", "68.25%*7", "74.98%*7", "79.79%*7", "85.32%*7", "93.01%*7", "100.7%*7", "108.39%*7", "116.56%*7", "126.18%*7", "135.79%*7", "145.41%*7", "155.02%*7", "164.64%*7", "174.25%*7", "183.87%*7", "193.49%*7", "203.1%*7", "212.72%*7"]
            }],
            index: 1
        }, {
            attributeName: "Cooldown",
            skillDetailNum: [{
                values: ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"]
            }],
            index: 2
        }, {
            attributeName: "Res. Energy Cost",
            skillDetailNum: [{
                values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
            }],
            index: 3
        }, {
            attributeName: "Con. Energy Regen",
            skillDetailNum: [{
                values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
            }],
            index: 4
        }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Raging Storm',
                skillDescription: `Command puppet "Zapstring" to attack, dealing <span class="Thunder">Electro DMG</span> in a large range.`,
                skillDetailNum: [],
                multipliers: [
                    {
            attributeName: "Skill Damage",
            skillDetailNum: [{
                values: ["7.2%*10", "7.8%*10", "8.39%*10", "9.21%*10", "9.8%*10", "10.48%*10", "11.43%*10", "12.37%*10", "13.32%*10", "14.32%*10", "15.5%*10", "16.68%*10", "17.86%*10", "19.04%*10", "20.22%*10", "21.4%*10", "22.58%*10", "23.77%*10", "24.95%*10", "26.13%*10"]
            }],
            index: 1
        }, {
            attributeName: "Con. Energy Regen",
            skillDetailNum: [{
                values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
            }],
            index: 2
        }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Strategist',
                skillDescription: `The next character (or other characters on a nearby team that activates an Outro Skill) gains 20% Electro DMG Deepen, and 25% Resonance Liberation DMG Deepen for 14 seconds or until the Character is switched.`,
                skillDetailNum: ["20%", "25%", "14"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Chameleon Cipher',
                skillDescription: `<span class="Title">Chameleon Cipher</span>\n
When Yinlin's "Judgment Points" is full, her <span class="Highlight">Heavy Attack</span> is replaced with <span class="Highlight">Chameleon Cipher</span>, which consumes all "Judgment Points" to attack the target, dealing <span class="Thunder">Electro DMG</span>. When it hits a target marked with <span class="Highlight">Sinner's Mark</span>, the <span class="Highlight">Sinner's Mark</span> is replaced with <span class="Highlight">Punishment Mark</span>, lasting for {0}s.
 
<span class="Title">Sinner's Mark</span>\n
Normal Attack <span class="Highlight">Zapstring's Dance</span>, Resonance Liberation <span class="Highlight">Thundering Wrath</span>, and Intro Skill <span class="Highlight">Roaring Storm</span> will apply <span class="Highlight">Sinner's Mark</span> on hit.
<span class="Highlight">Sinner's Mark</span> is removed when Yinlin exits.
 
<span class="Title">"Punishment Mark"</span>\n
When a target marked with <span class="Highlight">Punishment Mark</span> is damaged, <span class="Highlight">Judgement Strike</span> will fall, dealing <span class="Thunder">Electro DMG</span> to all targets marked with <span class="Highlight">Punishment Mark</span>. This can be triggered up to once per second.
 
<span class="Title">Judgment Points</span>\n
Yinlin can hold up to {1} Judgement Points.
When Normal Attack <span class="Highlight">Zapstring's Dance</span> hits a target, restores "Judgment Points".
Upon casting Resonance Skill <span class="Highlight">Magnetic Roar</span>, restores "Judgment Points".
When Resonance Skill <span class="Highlight">Electromagnetic Blast</span> hits a target, restores "Judgment Points".
Upon casting Resonance Skill <span class="Highlight">Magnetic Roar</span>, restores "Judgment Points".`,
                skillDetailNum: ["18", "100"],
                multipliers: [
                    {
            attributeName: "Chameleon Cipher Damage",
            skillDetailNum: [{
                values: ["90%*2", "97.38%*2", "104.76%*2", "115.1%*2", "122.48%*2", "130.96%*2", "142.77%*2", "154.58%*2", "166.39%*2", "178.93%*2", "193.69%*2", "208.45%*2", "223.21%*2", "237.97%*2", "252.73%*2", "267.49%*2", "282.25%*2", "297.01%*2", "311.77%*2", "326.53%*2"]
            }],
            index: 1
        }, {
            attributeName: "Judgment Strike Damage",
            skillDetailNum: [{
                values: ["39.56%", "42.8%", "46.05%", "50.59%", "53.83%", "57.56%", "62.75%", "67.94%", "73.13%", "78.64%", "85.13%", "91.62%", "98.1%", "104.59%", "111.08%", "117.56%", "124.05%", "130.54%", "137.02%", "143.51%"]
            }],
            index: 2
        }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Pain Immersion',
                skillDescription: `After using Resonance Skill <span class="Highlight">Magnetic Roar</span>, Yinlin's Crit. Rate is increased by {0} for {1}s.`,
                skillDetailNum: ["15%", "5"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Deadly Focus',
                skillDescription: `The damage of Resonance Skill <span class="Highlight">Lightning Execution</span> is increased by {0} when hitting targets marked with "Sinner's Mark", and Yinlin's ATK is increased by {1} for {2}s when this is triggered.`,
                skillDetailNum: ["10%", "10%", "4"],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Morality's Crossroads",
            description: `Resonance Skill <span class="Highlight">Magnetic Roar</span> and <span class="Highlight">Lightning Execution</span> deal {0} more damage.`,
            detailNum: ["70%"],
            sequenceBuffType: "Skill Damage Buff",
            sequenceBuffAtrribute: ["Damage Increase"],
            sequenceBuff: [70],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1302_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Ensnarled by Rapport",
            description: `Resonance Skill <span class="Highlight">Electromagnetic Blast</span> recovers an additional {1} "Judgement Point(s)" and {2} Resonance Energy on hit.`,
            detailNum: ["100%", "5", "5"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1302_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Unyielding Verdict",
            description: `Forte Circuit <span class="Highlight">Judgment Strike</span>'s DMG multiplier is increased by {0}`,
            detailNum: ["55%"],
            sequenceBuffType: "Skill Buff",
            sequenceBuffAtrribute: ["Judgment Strike"],
            sequenceBuff: [55],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1302_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Steadfast Conviction",
            description: `When Forte Circuit <span class="Highlight">Judgment Strike</span> hits a target, the ATK of all team members is increased by {0} for {1}s.`,
            detailNum: ["20%", "12"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [20],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1302_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Resounding Will",
            description: `Resonance Liberation <span class="Highlight">Thundering Wrath</span> deals {0} extra damage to targets with Forte Circuit's <span class="Highlight">Sinner's Mark</span> or <span class="Highlight">Punishment Mark</span>.`,
            detailNum: ["100%"],
            sequenceBuffType: "Skill Buff",
            sequenceBuffAtrribute: ["Thundering Wrath"],
            sequenceBuff: [100],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1302_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Pursuit of Justice",
            description: `In the first 30s after casting Resonance Liberation <span class="Highlight">Thundering Wrath</span>, when Yinlin's <span class="Highlight">Basic Attack</span> hits a target, <span class="Highlight">Furious Thunder</span> will be triggered, dealing <span className="Thunder">Electro DMG</span> equal to 419.59% of Yinlin's ATK. Every <span class="Highlight">Basic Attack</span> hit can trigger <span class="Highlight">Furious Thunder</span> 1 time, up to 4 times. This is considered Resonance Skill DMG.`,
            detailNum: ["10"],
            sequenceBuffType: "Extra Skill Buff",
            sequenceBuffAtrribute: ["Pursuit of Justice: Furious Thuner"],
            sequenceBuff: [419.59],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1302_UI.png"
        }
    ]
    },
    {
    name: "Yuanwu",
    charaId: 1303,
    rarity: {
        alt: "5 Star",
        img: rarity4Star
    },
    element: "Electro",
    weapon: "Gauntlets",
    bio: `As the proprietor of a boxing gym, Yuanwu is a polite and modest gentleman, displaying composure and confidence in his actions.
Having honed his skills in the Leihuang martial arts style, Yuanwu also earned mastery in health management.A perfect synergy of strength and elegance.`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_yuanwu_UI.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Yuanwu.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Yuanwu_Illustration.png"
    },
    asension: {
        charaAsension: [
        {
            item: "Crude Ring",
            id: 1,
            value: "4"
        },
        {
            item: "Basic Ring",
            id: 2,
            value: "12"
        },
        {
            item: "Improved Ring",
            id: 3,
            value: "12"
        },
        {
            item: "Tailered Ring",
            id: 4,
            value: "4"
        },
        {
            item: "Hidden Thunder Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "Crude Ring",
            id: 1,
            value: "25"
        },
        {
            item: "Basic Ring",
            id: 2,
            value: "28"
        },
        {
            item: "Improved Ring",
            id: 3,
            value: "40"
        },
        {
            item: "Tailered Ring",
            id: 4,
            value: "57"
        },
        {
            item: "Cadence Seed",
            id: 5,
            value: "25"
        },
        {
            item: "Cadence Bud",
            id: 6,
            value: "28"
        },
        {
            item: "Cadence Leaf",
            id: 7,
            value: "55"
        },
        {
            item: "Cadence Blossom",
            id: 8,
            value: "67"
        },
        {
            item: "Unending Destruction",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 682,
        base_atk: 18,
        base_def: 134,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 1.12,
        bonus_atk: 0,
        bonus_def: 1.152,
        bonus_heal: 0,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Leihuangquan',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Yuanwu performs up to 5 consecutive attacks, dealing <span class="Thunder">Electro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Yuanwu consumes Stamina to attack the target, dealing <span class="Thunder">Electro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Yuanwu consumes Stamina to launch a Mid-air Plunging Attack, dealing <span class="Thunder">Electro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Thunder">Electro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["24.70%", "26.73%", "28.76%", "31.59%", "33.62%", "35.95%", "39.19%", "42.43%", "45.67%", "49.11%", "53.16%", "57.21%", "61.26%", "65.31%", "69.36%", "73.41%", "77.47%", "81.52%", "85.57%", "89.62%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["26.06%*2", "28.20%*2", "30.34%*2", "33.33%*2", "35.46%*2", "37.92%*2", "41.34%*2", "44.76%*2", "48.18%*2", "51.81%*2", "56.08%*2", "60.36%*2", "64.63%*2", "68.91%*2", "73.18%*2", "77.45%*2", "81.73%*2", "86.00%*2", "90.27%*2", "94.55%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["10.99%*2+16.48%*2", "11.89%*2+17.83%*2", "12.79%*2+19.18%*2", "14.05%*2+21.07%*2", "14.95%*2+22.42%*2", "15.99%*2+23.98%*2", "17.43%*2+26.14%*2", "18.87%*2+28.30%*2", "20.31%*2+30.46%*2", "21.84%*2+32.76%*2", "23.64%*2+35.46%*2", "25.44%*2+38.16%*2", "27.24%*2+40.86%*2", "29.05%*2+43.57%*2", "30.85%*2+46.27%*2", "32.65%*2+48.97%*2", "34.45%*2+51.67%*2", "36.25%*2+54.37%*2", "38.05%*2+57.07%*2", "39.85%*2+59.78%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["26.06%*2", "28.20%*2", "30.34%*2", "33.33%*2", "35.46%*2", "37.92%*2", "41.34%*2", "44.76%*2", "48.18%*2", "51.81%*2", "56.08%*2", "60.36%*2", "64.63%*2", "68.91%*2", "73.18%*2", "77.45%*2", "81.73%*2", "86.00%*2", "90.27%*2", "94.55%*2"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Part 5 Damage",
                        skillDetailNum: [{
                            values: ["24.70%*2+32.94%", "26.73%*2+35.64%", "28.76%*2+38.34%", "31.59%*2+42.12%", "33.62%*2+44.82%", "35.95%*2+47.93%", "39.19%*2+52.25%", "42.43%*2+56.57%", "45.67%*2+60.89%", "49.11%*2+65.48%", "53.16%*2+70.88%", "57.21%*2+76.28%", "61.26%*2+81.68%", "65.31%*2+87.08%", "69.36%*2+92.48%", "73.41%*2+97.88%", "77.47%*2+103.29%", "81.52%*2+108.69%", "85.57%*2+114.09%", "89.62%*2+119.49%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["80.00%", "86.56%", "93.12%", "102.31%", "108.87%", "116.41%", "126.91%", "137.40%", "147.90%", "159.05%", "172.17%", "185.29%", "198.41%", "211.53%", "224.65%", "237.77%", "250.89%", "264.01%", "277.13%", "290.25%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        skillDetailNum: [{
                            values: ["49.60%", "53.67%", "57.74%", "63.43%", "67.50%", "72.18%", "78.69%", "85.19%", "91.70%", "98.61%", "106.75%", "114.88%", "123.02%", "131.15%", "139.29%", "147.42%", "155.56%", "163.69%", "171.82%", "179.96%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["57.60%*2", "62.33%*2", "67.05%*2", "73.66%*2", "78.39%*2", "83.82%*2", "91.38%*2", "98.93%*2", "106.49%*2", "114.52%*2", "123.97%*2", "133.41%*2", "142.86%*2", "152.31%*2", "161.75%*2", "171.20%*2", "180.64%*2", "190.09%*2", "199.54%*2", "208.98%*2"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Heavy Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 10
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Leihuang Master',
                skillDescription: `<span class="Title">Thunder Wedge</span>\n
                Yuanwu summons <span class="Highlight">Thunder Wedge</span>, dealing <span class="Thunder">Electro DMG</span>, and forms a <span class="Highlight">Thunder Field</span> centered on the <span class="Highlight">Thunder Wedge</span>. <span class="Highlight">Thunder Wedge</span> lasts for {0}s.\n
                Forte Circuit <span class="Highlight">Rumbling Spark</span> and Resonance Liberation <span class="Highlight">Blazing Might</span> will immediately detonate Resonance Skill <span class="Highlight">Thunder Wedge</span> on the field, dealing <span class="Thunder">Electro DMG</span>, considered as Resonance Skill Damage.\n
                <div class="gap"></div>
                <span class="Title">Thunder Field</span>\n
                The on-field character gains the effects below when in the <span class="Highlight">Thunder Field</span>: a Coordinated Attack from Resonance Skill <span class="Highlight">Thunder Wedge</span> is triggered when attacks hit a target, dealing <span class="Thunder">Electro DMG</span>. This can be triggered once every {1}s. The effect lasts for {2}s.`,
                skillDetailNum: ["12", "1.2", "1.5"],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["12.00%", "12.99%", "13.97%", "15.35%", "16.33%", "17.47%", "19.04%", "20.61%", "22.19%", "23.86%", "25.83%", "27.80%", "29.77%", "31.73%", "33.70%", "35.67%", "37.64%", "39.61%", "41.57%", "43.54%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Thunder Wedge Coordinated Attack Damage",
                        skillDetailNum: [{
                            values: ["4.00%", "4.33%", "4.66%", "5.12%", "5.45%", "5.83%", "6.35%", "6.87%", "7.40%", "7.96%", "8.61%", "9.27%", "9.93%", "10.58%", "11.24%", "11.89%", "12.55%", "13.21%", "13.86%", "14.52%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Thunder Wedge Detonation Damage",
                        skillDetailNum: [{
                            values: ["30.00%", "32.46%", "34.92%", "38.37%", "40.83%", "43.66%", "47.59%", "51.53%", "55.47%", "59.65%", "64.57%", "69.49%", "74.41%", "79.33%", "84.25%", "89.17%", "94.09%", "99.01%", "103.93%", "108.85%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Rumbling Spark Damage",
                        skillDetailNum: [{
                            values: ["54.60%", "59.07%", "63.55%", "69.82%", "74.29%", "79.44%", "86.60%", "93.76%", "100.93%", "108.54%", "117.49%", "126.44%", "135.39%", "144.35%", "153.30%", "162.25%", "171.21%", "180.16%", "189.11%", "198.06%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Thunder Wedge Duration",
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Leihuang Master Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Rumbling Spark Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 9
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Blazing Might',
                skillDescription: `Awaken the power of thunder and provide Forte Circuit <span class="Highlight">Lightning Infused</span> status for all nearby characters for {0}s, granting them increased Anti-interruption, then perform a powerful blow that deals <span class="Thunder">Electro DMG</span>`,
                skillDetailNum: ["10"],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["88.00%*2", "95.22%*2", "102.44%*2", "112.54%*2", "119.76%*2", "128.05%*2", "139.60%*2", "151.14%*2", "162.69%*2", "174.96%*2", "189.39%*2", "203.82%*2", "218.25%*2", "232.69%*2", "247.12%*2", "261.55%*2", "275.98%*2", "290.41%*2", "304.85%*2", "319.28%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 4
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Thunder Bombardment',
                skillDescription: `Attack the target, dealing <span class="Thunder">Electro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["32.00%", "34.63%", "37.25%", "40.93%", "43.55%", "46.57%", "50.77%", "54.96%", "59.16%", "63.62%", "68.87%", "74.12%", "79.37%", "84.62%", "89.86%", "95.11%", "100.36%", "105.61%", "110.86%", "116.10%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Lightning Manipulation',
                skillDescription: `Yuanwu summons thunderbolts on a field centered on the skill target, dealing significant Vibration Strength depletion to the enemies hit.`,
                skillDetailNum: [],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Unassuming Blade',
                skillDescription: `<span class="Title">Rumbling Spark</span>\n
                When "Readiness" is full, long press Resonance Skill to consume all "Readiness" and cast Rumbling Spark, dealing <span class="Thunder">Electro DMG</span> and entering the <span class="Highlight">Lightning Infused</span> state.\n
                <div class="gap"></div>
                <span class="Title">Thunder Uprising</span>\n
                When you have full "Readiness", Resonance Skill <span class="Highlight">Thunder Wedge</span> will cast <span class="Highlight">Thunder Uprising</span>, dealing <span class="Thunder">Electro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Lightning Infused</span>\n
                The character in <span class="Highlight">Lightning Infused</span> state has a greatly increased anti-interruption.\n
                When Yuanwu is in this state:\n
                -<span class="Highlight">Basic Attacks</span>: Hits targets in a larger range, depletes enemy Vibration Strength faster;\n
                -<span class="Highlight">Heavy Attacks</span>: Attack speed is increased, deplete enemy Vibration Strength faster;\n
                -<span class="Highlight">Dodge Counters</span>: Attack speed is increased, deplete enemy Vibration Strength faster.\n
                -Use <span class="Highlight">Basic Attack</span> within {0}s after casting a <span class="Highlight">Heavy Attack</span> or a successful <span class="Highlight">Counterattack</span> to cast <span class="Highlight">Thunderweaver</span>, dealing <span class="Thunder">Electro DMG</span>, considered as Basic Attack damage;\n
                Yuanwu does not recover "Readiness" in this state.\n
                <div class="gap"></div>
                <span class="Title">Readiness</span>\n
                Yuanwu can hold up to {1} "Readiness".\n
                When Resonance Skill <span class="Highlight">Thunder Wedge</span> is on the field, Yuanwu gains {2} "Readiness" every second, even when he is not the on-field character;\n
                When Resonance Skill <span class="Highlight">Thunder Wedge</span> hits a target with a Coordinated Attack, Yuanwu gains {3} "Readiness".`,
                skillDetailNum: ["3", "100", "6", "5"],
                multipliers: [
                    {
                        attributeName: "Thunder Uprising Damage",
                        skillDetailNum: [{
                            values: ["20.00%", "21.64%", "23.28%", "25.58%", "27.22%", "29.11%", "31.73%", "34.35%", "36.98%", "39.77%", "43.05%", "46.33%", "49.61%", "52.89%", "56.17%", "59.45%", "62.73%", "66.01%", "69.29%", "72.57%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Lightning Infused Basic Attack Part 1 Damage",
                        skillDetailNum: [{
                            values: ["12.35%", "13.37%", "14.38%", "15.80%", "16.81%", "17.98%", "19.60%", "21.22%", "22.84%", "24.56%", "26.58%", "28.61%", "30.63%", "32.66%", "34.68%", "36.71%", "38.74%", "40.76%", "42.79%", "44.81%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Lightning Infused Basic Attack Part 2 Damage",
                        skillDetailNum: [{
                            values: ["13.03%*2", "14.10%*2", "15.17%*2", "16.67%*2", "17.73%*2", "18.96%*2", "20.67%*2", "22.38%*2", "24.09%*2", "25.91%*2", "28.04%*2", "30.18%*2", "32.32%*2", "34.46%*2", "36.59%*2", "38.73%*2", "40.87%*2", "43.00%*2", "45.14%*2", "47.28%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Lightning Infused Basic Attack Part 3 Damage",
                        skillDetailNum: [{
                            values: ["5.50%*2+8.24%*2", "5.95%*2+8.92%*2", "6.40%*2+9.59%*2", "7.03%*2+10.54%*2", "7.48%*2+11.21%*2", "8.00%*2+11.99%*2", "8.72%*2+13.07%*2", "9.44%*2+14.15%*2", "10.16%*2+15.23%*2", "10.92%*2+16.38%*2", "11.82%*2+17.73%*2", "12.72%*2+19.08%*2", "13.62%*2+20.43%*2", "14.53%*2+21.79%*2", "15.43%*2+23.14%*2", "16.33%*2+24.49%*2", "17.23%*2+25.84%*2", "18.13%*2+27.19%*2", "19.03%*2+28.54%*2", "19.93%*2+29.89%*2"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Lightning Infused Basic Attack Part 4 Damage",
                        skillDetailNum: [{
                            values: ["5.77%*5", "6.24%*5", "6.71%*5", "7.38%*5", "7.85%*5", "8.39%*5", "9.15%*5", "9.90%*5", "10.66%*5", "11.46%*5", "12.41%*5", "13.35%*5", "14.30%*5", "15.24%*5", "16.19%*5", "17.13%*5", "18.08%*5", "19.02%*5", "19.97%*5", "20.91%*5"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Lightning Infused Basic Attack Part V Damage",
                        skillDetailNum: [{
                            values: ["8.24%*3+16.47%", "8.91%*3+17.82%", "9.59%*3+19.17%", "10.53%*3+21.06%", "11.21%*3+22.41%", "11.99%*3+23.97%", "13.07%*3+26.13%", "14.15%*3+28.29%", "15.23%*3+30.45%", "16.37%*3+32.74%", "17.72%*3+35.44%", "19.07%*3+38.14%", "20.42%*3+40.84%", "21.77%*3+43.54%", "23.12%*3+46.24%", "24.47%*3+48.94%", "25.83%*3+51.65%", "27.18%*3+54.35%", "28.53%*3+57.05%", "29.88%*3+59.75%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Lightning Infused Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["15.60%", "16.88%", "18.16%", "19.95%", "21.23%", "22.70%", "24.75%", "26.80%", "28.84%", "31.02%", "33.58%", "36.14%", "38.69%", "41.25%", "43.81%", "46.37%", "48.93%", "51.49%", "54.04%", "56.60%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Thunderweaver Damage",
                        skillDetailNum: [{
                            values: ["15.60%+10.40%*2", "16.88%+11.26%*2", "18.16%+12.11%*2", "19.95%+13.30%*2", "21.23%+14.16%*2", "22.70%+15.14%*2", "24.75%+16.50%*2", "26.80%+17.87%*2", "28.84%+19.23%*2", "31.02%+20.68%*2", "33.58%+22.39%*2", "36.14%+24.09%*2", "38.69%+25.80%*2", "41.25%+27.50%*2", "43.81%+29.21%*2", "46.37%+30.91%*2", "48.93%+32.62%*2", "51.49%+34.33%*2", "54.04%+36.03%*2", "56.60%+37.74%*2"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Lightning Infused Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["21.76%+16.32%*2", "23.55%+17.66%*2", "25.33%+19.00%*2", "27.83%+20.88%*2", "29.62%+22.21%*2", "31.67%+23.75%*2", "34.52%+25.89%*2", "37.38%+28.03%*2", "40.23%+30.18%*2", "43.27%+32.45%*2", "46.83%+35.13%*2", "50.40%+37.80%*2", "53.97%+40.48%*2", "57.54%+43.16%*2", "61.11%+45.83%*2", "64.68%+48.51%*2", "68.25%+51.19%*2", "71.82%+53.86%*2", "75.38%+56.54%*2", "78.95%+59.22%*2"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Lightning Infused Heavy Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Lightning Infused Duration",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 11
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Thunderweaver',
                skillDescription: `The damage multiplier of Resonance Skill <span class="Highlight">Thunder Uprising</span> is increased by {0}, and its depletion of enemy Vibration Strength is enhanced.`,
                skillDetailNum: ["40%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Reserved Confidence',
                skillDescription: `The ranges of the Resonance Skill <span class="Highlight">Thunder Field</span> and <span class="Highlight">Thunder Uprising</span> are greatly expanded. When exiting during combat, if <span class="Highlight">Readiness</span> is not full, Yuanwu will automatically leave {0} Resonance Skill <span class="Highlight">Thunder Wedge</span> in place.`,
                skillDetailNum: ["1"],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Steaming Cup of Justice",
            description: `When Yuanwu is in Forte Circuit's <span class="Highlight">Lightning Infused</span> state, his Basic Attack Speed is increased by {0}, and his Heavy Attack Speed is increased by {1}.`,
            detailNum: ["20%", "20%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1303_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Fierce Heart, Serene Mind",
            description: `Intro Skill <span class="Highlight">Thunder Bombardment</span> additionally recovers {0} Resonance Energy for Yuanwu.`,
            detailNum: ["15"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1303_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Upholder of Integrity",
            description: `When the Coordinated Attacks of Resonance Skill's <span class="Highlight">Thunder Wedge</span> hits a target, the damage is additionally increased by {0} of Yuanwu's DEF.`,
            detailNum: ["20%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1303_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Retributive Knuckles",
            description: `When casting Resonance Liberation <span class="Highlight">Blazing Might</span>, the on-field character will gain a Shield equal to {0} of Yuanwu's DEF for {1}s.`,
            detailNum: ["200%", "10"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1303_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Neighborhood Protector",
            description: `When Resonance Skill <span class="Highlight">Thunder Wedge</span> is on the field, Yuanwu's Resonance Liberation DMG Bonus is increased by {0}.`,
            detailNum: ["50%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonance Liberation Damage Bonus"],
            sequenceBuff: [50],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1303_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Defender of All Realms",
            description: `All team members nearby within the range of Resonance Skill <span class="Highlight">Thunder Wedge</span> will gain a {0} DEF increase, lasting {1}s.`,
            detailNum: ["32%", "3"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["DEF"],
            sequenceBuff: [32],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1303_UI.png"
        }
    ]
    },
    {
    name: "Jianxin",
    charaId: 1401,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Aero",
    weapon: "Gauntlets",
    bio: `Born in the wilderness and raised in a Taoist sect, Jianxin has been imparted the martial arts of Fengyiquan.
Her upbringing instilled in her a pure and persistent dedication to perfecting her martial arts skills.
Now, she journeys into the secular world, eager to experience the bittersweetness of everyday life and gain a deeper understanding of the world around her.`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_jiexin_UI.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Jianxin.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Jianxin_Full_Sprite.png"
    },
    asension: {
        charaAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "4"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "12"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "12"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "4"
        },
        {
            item: "Roaring Rock Fist",
            id: 5,
            value: "46"
        },
        {
            item: "Lanternberry",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "25"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "28"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "40"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "57"
        },
        {
            item: "Cadence Seed",
            id: 5,
            value: "25"
        },
        {
            item: "Cadence Bud",
            id: 6,
            value: "28"
        },
        {
            item: "Cadence Leaf",
            id: 7,
            value: "55"
        },
        {
            item: "Cadence Blossom",
            id: 8,
            value: "67"
        },
        {
            item: "Unending Destruction",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 1129,
        base_atk: 27,
        base_def: 92,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 150,
        bonus_ele: 0,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 8,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Fengyiquan',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Jianxin performs up to 4 consecutive attacks, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Jianxin consumes Stamina to attack the target, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Jianxin consumes Stamina to plunge and unleash a powerful kick, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["34.94%", "37.80%", "40.67%", "44.68%", "47.54%", "50.84%", "55.42%", "60.01%", "64.59%", "69.46%", "75.19%", "80.92%", "86.65%", "92.38%", "98.11%", "103.84%", "109.56%", "115.29%", "121.02%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["13.40%*2+40.19%", "14.50%*2+43.49%", "15.60%*2+46.78%", "17.14%*2+51.40%", "18.23%*2+54.69%", "19.50%*2+58.48%", "21.26%*2+63.76%", "23.01%*2+69.03%", "24.77%*2+74.30%", "26.64%*2+79.90%", "28.83%*2+86.49%", "31.03%*2+93.08%", "33.23%*2+99.68%", "35.43%*2+106.27%", "37.62%*2+112.86%", "39.82%*2+119.45%", "42.02%*2+126.04%", "44.21%*2+132.63%", "46.41%*2+139.22%", "48.61%*2+145.81%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["21.00%*4", "22.72%*4", "24.44%*4", "26.85%*4", "28.57%*4", "30.55%*4", "33.31%*4", "36.06%*4", "38.82%*4", "41.75%*4", "45.19%*4", "48.63%*4", "52.07%*4", "55.52%*4", "58.96%*4", "62.40%*4", "65.85%*4", "69.29%*4", "72.73%*4", "76.18%*4"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["57.04%", "61.72%", "66.39%", "72.94%", "77.62%", "83.00%", "90.48%", "97.96%", "105.45%", "113.40%", "122.75%", "132.10%", "141.46%", "150.81%", "160.16%", "169.52%", "178.87%", "188.23%", "197.58%", "206.93%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["63.41%", "68.61%", "73.81%", "81.09%", "86.29%", "92.27%", "100.59%", "108.91%", "117.23%", "126.07%", "136.47%", "146.87%", "157.27%", "167.67%", "178.07%", "188.47%", "198.87%", "209.26%", "219.66%", "230.06%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        skillDetailNum: [{
                            values: ["62.00%", "67.09%", "72.17%", "79.29%", "84.37%", "90.22%", "98.36%", "106.49%", "114.62%", "123.27%", "133.44%", "143.60%", "153.77%", "163.94%", "174.11%", "184.28%", "194.44%", "204.61%", "214.78%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["20.54%*2+82.14%", "22.22%*2+88.87%", "23.91%*2+95.61%", "26.26%*2+105.04%", "27.95%*2+111.77%", "29.88%*2+119.52%", "32.58%*2+130.29%", "35.27%*2+141.07%", "37.96%*2+151.84%", "40.83%*2+163.29%", "44.19%*2+176.76%", "47.56%*2+190.23%", "50.93%*2+203.70%", "54.30%*2+217.17%", "57.66%*2+230.64%", "61.03%*2+244.11%", "64.40%*2+257.58%", "67.77%*2+271.05%", "71.13%*2+284.52%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Heavy Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 9
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Calming Air',
                skillDescription: `Hold <span class="Highlight">Resonance Skill</span> to enter <span class="Highlight">Parry Stance</span>.
                <div class="gap"></div>
                <span class="Title">Chi Counter</span>
                When Jianxin is attacked in the <span class="Highlight">Parry Stance</span>, she does not take damage and immediately performs <span class="Highlight">Chi Counter</span>, dealing <span class="Wind">Aero DMG</span>.
                <div class="gap"></div>
                <span class="Title">Chi Parry</span>
                Release the <span class="Highlight">Resonance Skill</span> button during <span class="Highlight">Parry Stance</span> to interrupt <span class="Highlight">Parry Stance</span> and perform <span class="Highlight">Chi Parry</span>, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Chi Counter Damage",
                        skillDetailNum: [{
                            values: ["168.30%", "182.11%", "195.91%", "215.23%", "229.03%", "244.90%", "266.98%", "289.06%", "311.14%", "334.60%", "362.20%", "389.80%", "417.41%", "445.01%", "472.61%", "500.21%", "527.81%", "555.41%", "583.01%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Chi Parry Damage",
                        skillDetailNum: [{
                            values: ["130.14%", "140.81%", "151.48%", "166.42%", "177.09%", "189.36%", "206.44%", "223.51%", "240.59%", "258.73%", "280.07%", "301.41%", "322.75%", "344.09%", "365.44%", "386.78%", "408.12%", "429.46%", "450.81%", "472.15%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Skill Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Chi Counter Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Chi Parry Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Purification Force Field',
                skillDescription: `Creates a strong wind field, continuously pulling targets within the wind field to the center and causing <span class="Wind">Aero DMG</span>. When the wind field disappears, it will cause <span class="Wind">Aero DMG</span> to all targets within the range again.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Resonance Liberation Continuous Damage",
                        skillDetailNum: [{
                            values: ["15.00%", "16.23%", "17.46%", "19.19%", "20.42%", "21.83%", "23.80%", "25.77%", "27.74%", "29.83%", "32.29%", "34.75%", "37.21%", "39.67%", "42.13%", "44.59%", "47.05%", "49.51%", "51.97%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Resonance Liberation Explosion Damage",
                        skillDetailNum: [{
                            values: ["320.00%", "346.24%", "372.48%", "409.22%", "435.46%", "465.64%", "507.62%", "549.60%", "591.59%", "636.20%", "688.68%", "741.16%", "793.64%", "846.12%", "898.60%", "951.08%", "1003.56%", "1056.04%", "1108.52%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Wind Field Duration",
                        skillDetailNum: [{
                            values: ["3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Essence of Tao',
                skillDescription: `Pull in targets within the range, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["17.00%*3+34.00%", "18.40%*3+36.79%", "19.79%*3+39.58%", "21.74%*3+43.48%", "23.14%*3+46.27%", "24.74%*3+49.48%", "26.97%*3+53.94%", "29.20%*3+58.40%", "31.43%*3+62.86%", "33.80%*3+67.60%", "36.59%*3+73.18%", "39.38%*3+78.75%", "42.17%*3+84.33%", "44.95%*3+89.90%", "47.74%*3+95.48%", "50.53%*3+101.06%", "53.32%*3+106.63%", "56.11%*3+112.21%", "58.89%*3+117.78%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Transcendence',
                skillDescription: `The next character (or other characters on a nearby team that activates an Outro Skill) gains {0} Resonance Liberation DMG Deepen for {1}s, or until the character is switched off field.`,
                skillDetailNum: ["38%", "14"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Primordial Chi Spiral',
                skillDescription: `<span class="Title">Heavy Attack: Primordial Chi Spiral</span>\n
                When "Chi" reaches max stacks, hold <span class="Highlight">Heavy Attack</span> to cast <span class="Highlight">Primordial Chi Spiral</span> and start <span class="Highlight">Zhoutian Progress</span>.\n
                <div class="gap"></div>
                <span class="Title">Zhoutian Progress</span>\n
                Jianxin's anti-interruption is increased, and her the damage taken is reduced by {0}:\n
                Jianxin continuously consumes "Chi" and casts <span class="Highlight">Chi Strike</span> to attack targets nearby, dealing <span class="Wind">Aero DMG</span>.\n
                As <span class="Highlight">Zhoutian Progress</span> accumulates, Jianxin reaches different Zhoutian and gain effects accordingly.\n
                Before Minor Zhoutian: Gain Zhoutian Progress 1 shield. When Zhoutian Progress is interrupted, cast <span class="Highlight">Pushing Punch</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.\n
                Minor Zhoutian: Gain Zhoutian Progress 2 shield and cast <span class="Highlight">Shock</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.  When <span class="Highlight">Zhoutian Progress</span> is interrupted, cast <span class="Highlight">Yielding Pull</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.\n
                Major Zhoutian: Inner: Gain Zhoutian Progress 3 shield and cast <span class="Highlight">Shock</span> to attack the target, dealing <span class="Wind">Aero DMG</span>. When Zhoutian Progress is interrupted, cast <span class="Highlight">Yielding Pull</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.\n
                Major Zhoutian: Outer: Gain Zhoutian Progress 3 shield and cast <span class="Highlight">Shock</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.\n
                When you release <span class="Highlight">Basic Attack</span> button, interrupt <span class="Highlight">Zhoutian Progress</span> and lose all "Chi";\n
                When all "Chi" is consumed, end <span class="Highlight">Zhoutian Progress</span>.\n
                <div class="gap"></div>
                When <span class="Highlight">Zhoutian Progress</span> ends, regain a shield according to the Zhoutian Progress you reached;\n
                As the shield provided by <span class="Highlight">Heavy Attack: Primordial Chi Spiral</span> persists, restore HP for the on-field character once every {1}s.\n
                <div class="gap"></div>
                <span class="Title">Chi</span>\n
                Jianxin can hold up to {2} Chi.\n
                Chi is obtained when a Normal Attack <span class="Highlight">Fengyiquan</span> hits the target.\n
                Chi is obtained when the Resonance Skill <span class="Highlight">Calming Air</span> is cast.\n
                Chi is obtained when the Resonance Skill <span class="Highlight">Chi Counter</span> or Resonance Skill <span class="Highlight">Chi Parry</span> hits the target.\n
                Chi is obtained when the Intro Skill <span class="Highlight">Essence of Tao</span> hits the target.`,
                skillDetailNum: ["50%", "6", "120"],
                multipliers: [
                    {
                        attributeName: "Pushing Punch Damage",
                        skillDetailNum: [{
                            values: ["125.00%", "135.25%", "145.50%", "159.85%", "170.10%", "181.89%", "198.29%", "214.69%", "231.09%", "248.52%", "269.02%", "289.52%", "310.02%", "330.52%", "351.02%", "371.52%", "392.02%", "412.52%", "433.02%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Zhoutian Progress Continuous Damage",
                        skillDetailNum: [{
                            values: ["12.50%", "13.53%", "14.55%", "15.99%", "17.01%", "18.19%", "19.83%", "21.47%", "23.11%", "24.86%", "26.91%", "28.96%", "31.01%", "33.06%", "35.11%", "37.16%", "39.21%", "41.26%", "43.31%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Minor Zhoutian Shock Damage",
                        skillDetailNum: [{
                            values: ["70.00%", "75.74%", "81.48%", "89.52%", "95.26%", "101.86%", "111.05%", "120.23%", "129.41%", "139.17%", "150.65%", "162.13%", "173.61%", "185.09%", "196.57%", "208.05%", "219.53%", "231.01%", "242.49%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Major Zhoutian: Inner Shock Damage",
                        skillDetailNum: [{
                            values: ["190.00%", "205.58%", "221.16%", "242.98%", "258.56%", "276.47%", "301.40%", "326.33%", "351.26%", "377.74%", "408.90%", "440.06%", "471.22%", "502.38%", "533.54%", "564.70%", "595.86%", "627.02%", "658.18%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Major Zhoutian: Outer Shock Damage",
                        skillDetailNum: [{
                            values: ["260.00%", "281.32%", "302.64%", "332.49%", "353.81%", "378.33%", "412.44%", "446.55%", "480.67%", "516.91%", "559.55%", "602.19%", "644.83%", "687.47%", "730.11%", "772.75%", "815.39%", "858.03%", "900.67%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Yielding Pull Damage",
                        skillDetailNum: [{
                            values: ["110.00%", "119.02%", "128.04%", "140.67%", "149.69%", "160.07%", "174.50%", "188.93%", "203.36%", "218.70%", "236.74%", "254.78%", "272.82%", "290.86%", "308.90%", "326.94%", "344.98%", "363.02%", "381.06%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Incomplete Minor Zhoutian Final Shield",
                        skillDetailNum: [{
                            values: ["437+17.06%", "490+17.75%", "546+18.43%", "612+19.45%", "691+20.82%", "765+22.18%", "778+24.74%", "796+27.64%", "809+30.71%", "831+35.83%", "899+38.79%", "968+41.74%", "1036+44.70%", "1105+47.65%", "1174+50.61%", "1242+53.57%", "1311+56.52%", "1379+59.48%", "1448+62.43%", "1516+65.39%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Minor Zhoutian Final Shield",
                        skillDetailNum: [{
                            values: ["875+34.13%", "980+35.49%", "1093+36.86%", "1225+38.90%", "1382+41.63%", "1531+44.36%", "1557+49.48%", "1592+55.28%", "1618+61.43%", "1662+71.66%", "1799+77.57%", "1936+83.49%", "2073+89.40%", "2211+95.31%", "2348+101.22%", "2485+107.13%", "2622+113.04%", "2759+118.95%", "2896+124.87%", "3033+130.78%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Major Zhoutian: Inner Final Shield",
                        skillDetailNum: [{
                            values: ["1750+68.25%", "1960+70.98%", "2187+73.71%", "2450+77.81%", "2765+83.27%", "3062+88.73%", "3115+98.96%", "3185+110.57%", "3237+122.85%", "3325+143.33%", "3599+155.15%", "3873+166.97%", "4147+178.79%", "4422+190.62%", "4696+202.44%", "4970+214.26%", "5244+226.09%", "5519+237.91%", "5793+249.73%", "6067+261.55%"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Major Zhoutian: Outer Final Shield",
                        skillDetailNum: [{
                            values: ["2915+113.70%", "3265+118.25%", "3644+122.80%", "4081+129.62%", "4606+138.72%", "5102+147.82%", "5189+164.87%", "5306+184.20%", "5393+204.67%", "5539+238.78%", "5996+258.48%", "6453+278.17%", "6910+297.87%", "7367+317.57%", "7824+337.27%", "8281+356.96%", "8738+376.66%", "9195+396.36%", "9652+416.05%", "10108+435.75%"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Shield Healing",
                        skillDetailNum: [{
                            values: ["700+27.30%", "784+28.39%", "875+29.48%", "980+31.12%", "1106+33.31%", "1225+35.49%", "1246+39.59%", "1274+44.23%", "1295+49.14%", "1330+57.33%", "1439+62.06%", "1549+66.79%", "1659+71.52%", "1768+76.25%", "1878+80.98%", "1988+85.71%", "2097+90.43%", "2207+95.16%", "2317+99.89%", "2427+104.62%"]
                        }],
                        index: 11
                    }, {
                        attributeName: "Shield Duration",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 12
                    }, {
                        attributeName: "Pushing Punch Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 13
                    }, {
                        attributeName: "Minor Zhoutian Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 14
                    }, {
                        attributeName: "Major Zhoutian: Inner Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18"]
                        }],
                        index: 15
                    }, {
                        attributeName: "Major Zhoutian: Outer Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["23", "23", "23", "23", "23", "23", "23", "23", "23", "23", "23", "23", "23", "23", "23", "23", "23", "23"]
                        }],
                        index: 16
                    }, {
                        attributeName: "Yielding Pull Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7"]
                        }],
                        index: 17
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Formless Release',
                skillDescription: `Damage of Resonance Liberation <span class="Highlight">Purification Force Field</span> is increased by {0}.`,
                skillDetailNum: ["20%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Reflection',
                skillDescription: `The Shield obtained with Heavy Attack <span class="Highlight">Primordial Chi Spiral</span> is increased by {0}.`,
                skillDetailNum: ["20%"],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Verdant Branchlet",
            description: `After casting Intro Skill <span class="Highlight">Essence of Tao</span>, Jianxin gains {0} extra "Chi" from <span class="Highlight">Basic Attacks</span> for {1}s.`,
            detailNum: ["100%", "10"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1405_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Tao Seeker's Journey",
            description: `Resonance Skill <span class="Highlight">Calming Air</span> can be used {0} more time.`,
            detailNum: ["1"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1405_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Principles of Wuwei",
            description: `After staying in the <span class="Highlight">Parry Stance</span> of Resonance Skill <span class="Highlight">Calming Air</span> for {0}s, Resonance Skill <span class="Highlight">Chi Counter</span> becomes immediately available.`,
            detailNum: ["2.5"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1405_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Multitide Reflection",
            description: `When performing Forte Circuit <span class="Highlight">Heavy Attack: Primordial Chi Spiral</span>, Jianxin's Resonance Liberation <span class="Highlight">Purification Force Field</span> damage is increased by {0} for {1}s.`,
            detailNum: ["80%", "14"],
            sequenceBuffType: "Skill Liberation Buff",
            sequenceBuffAtrribute: ["Resonanc Liberation"],
            sequenceBuff: [80],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1405_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Mirroring Introspection",
            description: `The range of Resonance Liberation <span class="Highlight">Purification Force Field</span> is increased by {0}.`,
            detailNum: ["33%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1405_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Truth from Within",
            description: `During Forte Circuit <span class="Highlight">Heavy Attack: Primordial Qi Spiral</span>, if Jianxin performs <span class="Highlight">Pushing Punch</span>, enhanced Resonance Skill <span class="Highlight">Special Chi Counter</span> can be used {1} time(s) in {0}s.  <span class="Highlight">Special Chi Counter</span>: Deals <span className="Wind">Aero DMG</span> equal to {2} of Jianxin's ATK, considered as Heavy Attack DMG. Obtain a Zhoutian Progress 4 Shield (Benefits from Inherent Skill <span class="Highlight">Reflection</span>'s bonus effect.)`,
            detailNum: ["5", "1", "556.67%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1405_UI.png"
        }
    ]
    },
    {
    name: "Yangyang",
    charaId: 1402,
    rarity: {
        alt: "5 Star",
        img: rarity4Star
    },
    element: "Aero",
    weapon: "Sword",
    bio: `Yangyang journeyed far away from home to become an Outrider in Jinzhou.
Instead of seeking the spotlight, Yangyang chooses to provide comfort through quiet companionship for others.
After enduring hardships and anguish, she has found a clear purpose: to be a beacon of guidance and an aiding presence in a world still in need of healing.`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_yangyang_UI.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Yangyang.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Oldyangyang2.png"
    },
    asension: {
        charaAsension: [
        {
            item: "Crude Ring",
            id: 1,
            value: "4"
        },
        {
            item: "Basic Ring",
            id: 2,
            value: "12"
        },
        {
            item: "Improved Ring",
            id: 3,
            value: "12"
        },
        {
            item: "Tailered Ring",
            id: 4,
            value: "4"
        },
        {
            item: "Roaring Rock Fist",
            id: 5,
            value: "46"
        },
        {
            item: "Wintry Bell",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "Crude Ring",
            id: 1,
            value: "25"
        },
        {
            item: "Basic Ring",
            id: 2,
            value: "28"
        },
        {
            item: "Improved Ring",
            id: 3,
            value: "40"
        },
        {
            item: "Tailered Ring",
            id: 4,
            value: "57"
        },
        {
            item: "Inert Metallic Drip",
            id: 5,
            value: "25"
        },
        {
            item: "Reactive Metallic Drip",
            id: 6,
            value: "28"
        },
        {
            item: "Polarized Metallic Drip",
            id: 7,
            value: "55"
        },
        {
            item: "Heterized Metallic Drip",
            id: 8,
            value: "67"
        },
        {
            item: "Unending Destruction",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 816,
        base_atk: 20,
        base_def: 90,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 100,
        bonus_ele: 1.12,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Feather as Blade',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Yangayang performs up to 4 consecutive attacks, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Yangyang consumes Stamina to lunge forward, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack: Zephyr Song</span>\n
                Use <span class="Highlight">Basic Attack</span> after <span class="Highlight">Heavy Attack</span> or <span class="Highlight">Dodge Counter</span> to perform Heavy Attack <span class="Highlight">Zephyr Song</span>, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Yangyang consumes Stamina to perform a Plunging Attack from mid-air, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to thrust forward, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["22.50%", "24.34%", "26.18%", "28.77%", "30.61%", "32.73%", "35.69%", "38.64%", "41.59%", "44.73%", "48.42%", "52.11%", "55.80%", "59.49%", "63.18%", "66.87%", "70.56%", "74.25%", "77.94%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["30.00%", "32.46%", "34.92%", "38.36%", "40.82%", "43.65%", "47.58%", "51.52%", "55.46%", "59.64%", "64.56%", "69.48%", "74.40%", "79.32%", "84.24%", "89.16%", "94.08%", "99.00%", "103.92%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["23.55%*2", "25.48%*2", "27.41%*2", "30.11%*2", "32.04%*2", "34.26%*2", "37.35%*2", "40.44%*2", "43.53%*2", "46.81%*2", "50.68%*2", "54.54%*2", "58.40%*2", "62.26%*2", "66.13%*2", "69.99%*2", "73.85%*2", "77.71%*2", "81.57%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["29.86%*2+39.81%", "32.31%*2+43.08%", "34.76%*2+46.34%", "38.19%*2+50.91%", "40.64%*2+54.18%", "43.45%*2+57.93%", "47.37%*2+63.16%", "51.29%*2+68.38%", "55.20%*2+73.60%", "59.36%*2+79.15%", "64.26%*2+85.68%", "69.16%*2+92.21%", "74.05%*2+98.74%", "78.95%*2+105.27%", "83.85%*2+111.80%", "88.74%*2+118.32%", "93.64%*2+124.85%", "98.54%*2+131.38%", "103.43%*2+137.91%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["10.00%*3", "10.82%*3", "11.64%*3", "12.78%*3", "13.60%*3", "14.55%*3", "15.86%*3", "17.17%*3", "18.48%*3", "19.88%*3", "21.52%*3", "23.16%*3", "24.80%*3", "26.44%*3", "28.08%*3", "29.72%*3", "31.36%*3", "33.00%*3", "34.64%*3"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        skillDetailNum: [{
                            values: ["46.50%", "50.31%", "54.12%", "59.46%", "63.27%", "67.66%", "73.76%", "79.86%", "85.96%", "92.44%", "100.07%", "107.69%", "115.32%", "122.95%", "130.57%", "138.20%", "145.82%", "153.45%", "161.08%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Zephyr Song Damage",
                        skillDetailNum: [{
                            values: ["53.62%", "58.02%", "62.41%", "68.57%", "72.97%", "78.02%", "85.06%", "92.10%", "99.13%", "106.61%", "115.40%", "124.20%", "132.99%", "141.78%", "150.58%", "159.37%", "168.17%", "176.96%", "185.76%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["43.80%*2", "47.39%*2", "50.98%*2", "56.01%*2", "59.60%*2", "63.73%*2", "69.47%*2", "75.22%*2", "80.97%*2", "87.07%*2", "94.26%*2", "101.44%*2", "108.62%*2", "115.81%*2", "122.99%*2", "130.17%*2", "137.36%*2", "144.54%*2", "151.72%*2"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Heavy Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 10
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Zephyr Domain',
                skillDescription: `Yangyang wields her sword to create a whirling vortex of winds that gathers nearby enemies to the center, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["17.37%*4+104.22%", "18.79%*4+112.76%", "20.21%*4+121.31%", "22.21%*4+133.27%", "23.63%*4+141.82%", "25.27%*4+151.65%", "27.55%*4+165.32%", "29.83%*4+178.99%", "32.11%*4+192.67%", "34.53%*4+207.19%", "37.38%*4+224.29%", "40.23%*4+241.38%", "43.07%*4+258.47%", "45.92%*4+275.56%", "48.77%*4+292.66%", "51.62%*4+309.75%", "54.47%*4+326.84%", "57.32%*4+343.93%", "60.17%*4+361.02%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 3
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Wind Spirals',
                skillDescription: `Yangyang conjures a mighty Cyclone that gathers nearby enemies, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["23.43%*12+187.46%", "25.35%*12+202.83%", "27.27%*12+218.21%", "29.96%*12+239.73%", "31.88%*12+255.10%", "34.09%*12+272.78%", "37.17%*12+297.37%", "40.24%*12+321.97%", "43.32%*12+346.56%", "46.58%*12+372.70%", "50.43%*12+403.44%", "54.27%*12+434.19%", "58.11%*12+464.93%", "61.95%*12+495.67%", "65.80%*12+526.42%", "69.64%*12+557.16%", "73.48%*12+587.91%", "77.33%*12+618.65%", "81.17%*12+649.40%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 5
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Cerulean Song',
                skillDescription: `Yangyang sends the target into the air, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["40.00%*2", "43.28%*2", "46.56%*2", "51.15%*2", "54.43%*2", "58.20%*2", "63.45%*2", "68.70%*2", "73.94%*2", "79.52%*2", "86.08%*2", "92.64%*2", "99.20%*2", "105.76%*2", "112.32%*2", "118.88%*2", "125.44%*2", "132.00%*2", "138.56%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Whispering Breeze',
                skillDescription: `Yangyang recovers {0} Resonance Energy per second in {1}s for the next character (or other characters on a nearby team that activates an Outro Skill).`,
                skillDetailNum: ["4", "5"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Echoing Feathers',
                skillDescription: `<span class="Title">Heavy Attack: Stormy Strike</span>\n
                When Yangyang has {0} Melodies, she can cast <span class="Highlight">Stormy Strike</span> after <span class="Highlight">Heavy Attack</span>, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack: Feather Release</span>\n
                When Yangyang has {1} Melodies, casting <span class="Highlight">Basic Attacks</span> in mid-air will cause her to consume all Melodies, perform consecutive strikes, and dive from mid-air, dealing <span class="Wind">Aero DMG</span>. As Yangyang lands, she sheathes her sword with an attack, dealing <span class="Wind">Aero DMG</span>. This attack is considered as Basic Attack.\n
                <div class="gap"></div>
                <span class="Title">Melody</span>\n
                Yangyang can hold up to {2} Melodies\n
                Yangyang obtains {3} Melody with every <span class="Highlight">Basic Attack 4</span> on hit.\n
                Yangyang obtains {4} Melody for every <span class="Highlight">Zephyr Song</span> on hit.\n
                Yangyang obtains {5} Melody for every Resonance Skill <span class="Highlight">Zephyr Domain</span> on hit.\n
                Yangyang obtains {6} Melody upon casting Intro Skill <span class="Highlight">Cerulean Song</span>.`,
                skillDetailNum: ["3", "3", "3", "1", "1", "1", "1"],
                multipliers: [
                    {
                        attributeName: "Stormy Strike Damage",
                        skillDetailNum: [{
                            values: ["19.12%*2", "20.69%*2", "22.26%*2", "24.45%*2", "26.02%*2", "27.82%*2", "30.33%*2", "32.84%*2", "35.35%*2", "38.02%*2", "41.15%*2", "44.29%*2", "47.43%*2", "50.56%*2", "53.70%*2", "56.84%*2", "59.97%*2", "63.11%*2", "66.25%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Feather Release Damage",
                        skillDetailNum: [{
                            values: ["10.93%*5+63.78%*2", "11.83%*5+69.01%*2", "12.72%*5+74.24%*2", "13.98%*5+81.57%*2", "14.88%*5+86.80%*2", "15.91%*5+92.81%*2", "17.34%*5+101.18%*2", "18.78%*5+109.55%*2", "20.21%*5+117.92%*2", "21.73%*5+126.81%*2", "23.53%*5+137.27%*2", "25.32%*5+147.73%*2", "27.11%*5+158.19%*2", "28.91%*5+168.66%*2", "30.70%*5+179.12%*2", "32.49%*5+189.58%*2", "34.29%*5+200.04%*2", "36.08%*5+210.50%*2", "37.87%*5+220.96%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Feather Release Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 3
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Compassion',
                skillDescription: `Yangyang recovers {0} Stamina after she casts a Mid-air Attack <span class="Highlight">Feather Release</span>.`,
                skillDetailNum: ["30"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Lazuline Mercy',
                skillDescription: `Yangyang's Aero DMG Bonus is increased by {0} for {1}s after casting Intro Skill <span class="Highlight">Cerulean Song</span>.`,
                skillDetailNum: ["8%", "8"],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Sapphire Skies, Soaring Sparrows",
            description: `Intro Skill <span class="Highlight">Cerulean Song</span> increases Yangyang's Aero DMG Bonus by an additional {0} for {1}s.`,
            detailNum: ["15%", "8"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Aero Damage Bonus"],
            sequenceBuff: [15],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1402_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Nesting Twigs, in Beaks They Harrow",
            description: `<span class="Highlight">Heavy Attack</span> recovers an additional {0} Resonance Energy for Yangyang when it hits a target, which can be triggered 1 time every {1}s.`,
            detailNum: ["10", "20"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1402_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Nature Sings in Symphony",
            description: `Resonance Skill DMG Bonus is increased by {0}. The Wind Field's pulling effect on surrounding targets is enhanced, and the pulling range is expanded by {1}.`,
            detailNum: ["40%", "33%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonance Skill Damage Bonus"],
            sequenceBuff: [40],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1402_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Close Your Eyes and Listen in",
            description: `Mid-Air Attack <span class="Highlight">Feather Release</span>'s damage is increased by {0}.`,
            detailNum: ["95%"],
            sequenceBuffType: "Skill Damage Buff",
            sequenceBuffAtrribute: ["Feather Release"],
            sequenceBuff: [95],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1402_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Winds Whisper in Harmony",
            description: `Resonance Liberation <span class="Highlight">Wind Spirals</span>'s damage is increased by {0}.`,
            detailNum: ["85%"],
            sequenceBuffType: "Skill Liberation Buff",
            sequenceBuffAtrribute: ["Resonance Liberation"],
            sequenceBuff: [85],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1402_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "A Tribute to Life's Sweet Hymn",
            description: `After casting Mid-Air Attack <span class="Highlight">Feather Release</span>, the ATK of all team members is increased by {0} for {1}s.`,
            detailNum: ["20%", "20"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [20],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1402_UI.png"
        }
    ]
    },
    {
    name: "Aalto",
    charaId: 1403,
    rarity: {
        alt: "5 Star",
        img: rarity4Star
    },
    element: "Aero",
    weapon: "Pistols",
    bio: `Aalto is an enigmatic Information Broker, known for his elusive nature and welcoming smile.
Rumor has it he'll provide any information at the right price.
He was invited to join the Black Shores, a mysterious organization based on an isolated island, for his intel-gathering expertise.
Both working for the Black Shores as Consultants, Aalto and Encore have become an inseparable and lively duo during missions.
Despite his skittish demeanor, Aalto's true character shines through as a reliable and attentive individual`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_qiushui_UI.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Aalto.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Aalto_Full_body_illustration.png"
    },
    asension: {
        charaAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "4"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "12"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "12"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "4"
        },
        {
            item: "Roaring Rock Fist",
            id: 5,
            value: "46"
        },
        {
            item: "Wintry Bell",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "25"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "28"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "40"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "57"
        },
        {
            item: "Impure Phlogiston",
            id: 5,
            value: "25"
        },
        {
            item: "Extracted Phlogiston",
            id: 6,
            value: "28"
        },
        {
            item: "Refined Phlogiston",
            id: 7,
            value: "55"
        },
        {
            item: "Flawless Phlogiston",
            id: 8,
            value: "67"
        },
        {
            item: "Monument Bell",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 788,
        base_atk: 21,
        base_def: 88,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 150,
        bonus_ele: 1.12,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Half Truths',
                skillDescription: `<span class="Title">Basic Attack</span>
                Aalto fires up to 5 consecutive shots, dealing <span class="Wind">Aero DMG</span>. Basic Attack 4 will spread the "Mist" forward, which lasts for {0}s.
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>
                Aalto enters the aiming state for a more powerful shot.
                The aimed shot fired after charging finishes deals <span class="Wind">Aero DMG</span>.
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>
                Aalto consumes Stamina to perform consecutive shots at the target in mid-air, dealing <span class="Wind">Aero DMG</span>.
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: ["1.5"],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["16%", "17.32%", "18.63%", "20.47%", "21.78%", "23.29%", "25.39%", "27.48%", "29.58%", "31.81%", "34.44%", "37.06%", "39.69%", "42.31%", "44.93%", "47.56%", "50.18%", "52.81%", "55.43%", "58.05%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["26.67%", "28.86%", "31.04%", "34.11%", "36.29%", "38.81%", "42.31%", "45.8%", "49.3%", "53.02%", "57.39%", "61.77%", "66.14%", "70.51%", "74.89%", "79.26%", "83.63%", "88.01%", "92.38%", "96.75%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["24%*2", "25.97%*2", "27.94%*2", "30.7%*2", "32.66%*2", "34.93%*2", "38.08%*2", "41.22%*2", "44.37%*2", "47.72%*2", "51.66%*2", "55.59%*2", "59.53%*2", "63.46%*2", "67.4%*2", "71.34%*2", "75.27%*2", "79.21%*2", "83.14%*2", "87.08%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["25.34%*2", "27.42%*2", "29.49%*2", "32.4%*2", "34.48%*2", "36.87%*2", "40.19%*2", "43.51%*2", "46.84%*2", "50.37%*2", "54.52%*2", "58.68%*2", "62.83%*2", "66.99%*2", "71.14%*2", "75.3%*2", "79.45%*2", "83.61%*2", "87.76%*2", "91.92%*2"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Part 5 Damage",
                        skillDetailNum: [{
                            values: ["90.4%", "97.82%", "105.23%", "115.61%", "123.02%", "131.55%", "143.41%", "155.27%", "167.13%", "179.73%", "194.55%", "209.38%", "224.21%", "239.03%", "253.86%", "268.68%", "283.51%", "298.33%", "313.16%", "327.99%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Mid-Air Attack",
                        skillDetailNum: [{
                            values: ["30%", "32.46%", "34.92%", "38.37%", "40.83%", "43.66%", "47.59%", "51.53%", "55.47%", "59.65%", "64.57%", "69.49%", "74.41%", "79.33%", "84.25%", "89.17%", "94.09%", "99.01%", "103.93%", "108.85%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Aimed Shot Damage",
                        skillDetailNum: [{
                            values: ["18.00%", "19.48%", "20.96%", "23.02%", "24.50%", "26.20%", "28.56%", "30.92%", "33.28%", "35.79%", "38.74%", "41.69%", "44.65%", "47.60%", "50.55%", "53.50%", "56.45%", "59.41%", "62.30%", "65.31%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Fully Charged Aimed Shot Damage",
                        skillDetailNum: [{
                            values: ["40.50%", "43.83%", "47.15%", "51.80%", "55.12%", "58.94%", "64.25%", "69.56%", "74.88%", "80.52%", "87.17%", "93.81%", "100.45%", "107.09%", "113.73%", "120.38%", "127.02%", "133.66%", "140.30%", "146.94%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["107.7%", "116.54%", "125.37%", "137.73%", "146.56%", "156.72%", "170.85%", "184.98%", "199.11%", "214.12%", "231.79%", "249.45%", "267.11%", "284.77%", "302.44%", "320.1%", "337.76%", "355.43%", "373.09%", "390.75%"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 10
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Shift Trick',
                skillDescription: `<span class="Title">Mist Avatar</span>\n
                Casts "Mist" and {0} "Mist Avatar(s)" to taunt the surrounding targets. The avatars inherit a portion of Aalto's HP and generate {1} <span class="Highlight">Mist Bullets</span> around them, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mist Missiles</span>\n
                Deals <span class="Wind">Aero DMG</span>, considered as Resonance Skill damage.`,
                skillDetailNum: ["1", "6"],
                multipliers: [
                    {
                        attributeName: "Mist Missile Damage",
                        skillDetailNum: [{
                            values: ["30%", "32.46%", "34.92%", "38.37%", "40.83%", "43.66%", "47.59%", "51.53%", "55.47%", "59.65%", "64.57%", "69.49%", "74.41%", "79.33%", "84.25%", "89.17%", "94.09%", "99.01%", "103.93%", "108.85%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Mist Avatar HP",
                        skillDetailNum: [{
                            values: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Mist Avatar Duration",
                        skillDetailNum: [{
                            values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 5
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Flower in the Mist',
                skillDescription: `Generate a "Gate of Quandary" in front, dealing <span class="Wind">Aero DMG</span>. When bullets pass through the "Gate of Quandary", ATK is increased. "Gate of Quandary" lasts for {0}s.`,
                skillDetailNum: ["10"],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["200%", "216.4%", "232.8%", "255.76%", "272.16%", "291.02%", "317.26%", "343.5%", "369.74%", "397.62%", "430.42%", "463.22%", "496.02%", "528.82%", "561.62%", "594.42%", "627.22%", "660.02%", "692.82%", "725.62%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Gate Of Quandary ATK Increase",
                        skillDetailNum: [{
                            values: ["10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 5
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Feint Shot',
                skillDescription: `Aalto shows up out of thin air to performs rapid continuous shooting, dealing <span class="Wind">Aero damage</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["33.34%*3", "36.07%*3", "38.8%*3", "42.63%*3", "45.36%*3", "48.51%*3", "52.88%*3", "57.25%*3", "61.63%*3", "66.27%*3", "71.74%*3", "77.21%*3", "82.67%*3", "88.14%*3", "93.61%*3", "99.07%*3", "104.54%*3", "110.01%*3", "115.47%*3", "120.94%*3"]
                        }],
                        index: 20
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 24
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Dissolving Mist',
                skillDescription: `The next character (or other characters on a nearby team that activates an Outro Skill) gains {0} Aero DMG Deepen for {1}s, or until the character is switched off field.`,
                skillDetailNum: ["23%", "14"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Misty Cover',
                skillDescription: `When Aalto passes through "Mist" or "Gate of Quandary", he enters "Mistcloak Dash".\n
                <div class="gap"></div>
                <span class="Title">Mistcloak Dash</span>\n
                Movement speed increased;\n
                During this period, "Mist Drops" are continuously consumed, and for each {0} "Mist Drop" consumed, {1} Resonance Skill <span class="Highlight">Mist Missile</span> is generated.\n
                <div class="gap"></div>
                <span class="Title">Mist Drops</span>\n
                Aalto can hold up to {2} Mist Drops.\n
                When <span class="Highlight">Basic Attack</span> or <span class="Highlight">Mid-air Attack</span> passes through "Mist" and hits the target, {3} "Mist Drop" is recovered.`,
                skillDetailNum: ["1", "1", "6", "1"],
                multipliers: [
                    {
                        attributeName: "Mist Missile DMG",
                        skillDetailNum: [{
                            values: ["30%", "32.46%", "34.92%", "38.37%", "40.83%", "43.66%", "47.59%", "51.53%", "55.47%", "59.65%", "64.57%", "69.49%", "74.41%", "79.33%", "84.25%", "89.17%", "94.09%", "99.01%", "103.93%", "108.85%"]
                        }],
                        index: 21
                    }, {
                        attributeName: "Movement Speed Increase",
                        skillDetailNum: [{
                            values: ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%"]
                        }],
                        index: 22
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Perfect Performance',
                skillDescription: `Aalto's <span class="Highlight">Heavy Attack</span> will always critically hit, triggered once every {0}s.`,
                skillDetailNum: ["30"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Mid-game Break',
                skillDescription: `Aalto will continuously recover Stamina when he is in the Forte Circuit <span class="Highlight">Miscloak Dash</span> state.`,
                skillDetailNum: [],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Trickster's Opening Show",
            description: `The cooldown of Resonance Skill <span class="Highlight">Shift Trick</span> is reduced by {0}s.`,
            detailNum: ["4"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1403_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Mistweaver's Debut",
            description: `"Mist Avatar" inherits {0} more HP from Aalto. When Aalto attacks targets taunted by the "Mist Avatar(s)", his ATK is increased by {1}.`,
            detailNum: ["100%", "15%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [15],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1403_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Hazey Transition",
            description: `When Aalto's <span class="Highlight">Basic Attack</span> or <span class="Highlight">Mid-Air Attack</span> passes through the "Gate of Quandary", 2 more bullets will be generated, dealing {0} of the DMG of <span class="Highlight">Basic Attack</span> or <span class="Highlight">Mid-Air Attack</span>.`,
            detailNum: ["50%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1403_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Blake Bloom for Finale",
            description: `The damage of Resonance Skill <span class="Highlight">Mist Bullets</span> is increased by {0}; Aalto receives {1} less damage in his Forte Circuit <span class="Highlight">Mistcloak Dash</span> state.`,
            detailNum: ["30%", "30%"],
            sequenceBuffType: "Skill Damage Buff",
            sequenceBuffAtrribute: ["Mist Bullets"],
            sequenceBuff: [30],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1403_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Applause of the Lost",
            description: `In the Forte Circuit <span class="Highlight">Mistcloak Dash</span> state, Aalto's Aero DMG Bonus is increased by {0} for {1}s.`,
            detailNum: ["25%", "6"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Aero Damage Bonus"],
            sequenceBuff: [25],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1403_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Broker's Secrets",
            description: `Resonance Liberation <span class="Highlight">Flower in the Mist</span> now additionally increases Crit. Rate by {0}. When Aalto's Heavy Attack passes through the "Gate of Quandary", the damage dealt is additionally increased by {1}.`,
            detailNum: ["8%", "50%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Crit. Rate"],
            sequenceBuff: [8],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1403_UI.png"
        }
    ]
    },
    {
    name: "Jiyan",
    charaId: 1404,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Aero",
    weapon: "Broadblade",
    bio: `Jiyan is the General of Midnight Rangers stationed in Jinzhou, embracing strong sense of justice and resolution. Born in a family devoted to medicine, Jiyan is both skilled and attentive. Later, in a bid to fend off the encroaching Tacet Discords, he relinquished his role in medicine and took up arms as a soldier.`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_jiyan_UI.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Jiyan.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Jiyan_Full_Sprite.png"
    },
    asension: {
        charaAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "4"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "12"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "12"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "4"
        },
        {
            item: "Roaring Rock Fist",
            id: 5,
            value: "46"
        },
        {
            item: "Pecok Flower",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "25"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "28"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "40"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "57"
        },
        {
            item: "Waveworn Residue 210",
            id: 5,
            value: "25"
        },
        {
            item: "Waveworn Residue 226",
            id: 6,
            value: "28"
        },
        {
            item: "Waveworn Residue 235",
            id: 7,
            value: "55"
        },
        {
            item: "Waveworn Residue 239",
            id: 8,
            value: "67"
        },
        {
            item: "Monument Bell",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 839,
        base_atk: 35,
        base_def: 97,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 0,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 8,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Lone Lance',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Jiyan performs up to 5 consecutive attacks, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Jiyan consumes Stamina to thrust forward, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack: Windborne Strike</span>\n
                Hold the <span class="Highlight">Basic Attack</span> during <span class="Highlight">Heavy Attack</span> to cast <span class="Highlight">Windborne Strike</span> after the <span class="Highlight">Heavy Attack</span> ends, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack: Abyssal Slash</span>\n
                Release the <span class="Highlight">Basic Attack</span> during the <span class="Highlight">Heavy Attack</span> to cast <span class="Highlight">Abyssal Slash</span> after the <span class="Highlight">Heavy Attack</span> ends, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Jiyan consumes Stamina to perform a Mid-Air Plunging Attack, dealing <span class="Wind">Aero DMG</span>.\n
                After the <span class="Highlight">Plunging Attack</span>, use <span class="Highlight">Basic Attack</span> to perform a follow-up attack, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack: Banner of Triumph</span>\n
                After casting the Heavy Attack <span class="Highlight">Windborne Strike</span> or the Resonance Skill <span class="Highlight">Windqueller</span> in the air, Jiyan can perform a mid-air attack, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use a <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["36.80%", "39.81%", "42.83%", "47.05%", "50.07%", "53.54%", "58.37%", "63.20%", "68.03%", "73.16%", "79.19%", "85.23%", "91.26%", "97.30%", "103.33%", "109.37%", "115.40%", "121.44%", "127.47%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["22.00%", "23.80%", "25.60%", "28.13%", "29.93%", "32.01%", "34.89%", "37.78%", "40.67%", "43.73%", "47.34%", "50.95%", "54.56%", "58.17%", "61.77%", "65.38%", "68.99%", "72.60%", "76.21%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["18.30%*5", "19.80%*5", "21.30%*5", "23.40%*5", "24.90%*5", "26.62%*5", "29.02%*5", "31.43%*5", "33.83%*5", "36.38%*5", "39.38%*5", "42.38%*5", "45.38%*5", "48.38%*5", "51.38%*5", "54.38%*5", "57.39%*5", "60.39%*5", "63.39%*5"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["33.30%*2", "36.03%*2", "38.76%*2", "42.58%*2", "45.31%*2", "48.45%*2", "52.82%*2", "57.19%*2", "61.56%*2", "66.20%*2", "71.66%*2", "77.12%*2", "82.58%*2", "88.04%*2", "93.50%*2", "98.97%*2", "104.43%*2", "109.89%*2", "115.35%*2"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Part 5 Damage",
                        skillDetailNum: [{
                            values: ["11.87%*7+77.18%*2", "12.84%*7+83.51%*2", "13.82%*7+89.84%*2", "15.18%*7+98.70%*2", "16.15%*7+105.03%*2", "17.27%*7+112.31%*2", "18.83%*7+122.44%*2", "20.39%*7+132.56%*2", "21.95%*7+142.69%*2", "23.60%*7+153.45%*2", "25.55%*7+166.11%*2", "27.50%*7+178.77%*2", "29.45%*7+191.43%*2", "31.39%*7+204.09%*2", "33.34%*7+216.75%*2", "35.29%*7+229.40%*2", "37.24%*7+242.06%*2", "39.18%*7+254.72%*2", "41.13%*7+267.38%*2"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["11.16%*6", "12.08%*6", "12.99%*6", "14.27%*6", "15.19%*6", "16.24%*6", "17.71%*6", "19.17%*6", "20.64%*6", "22.20%*6", "24.03%*6", "25.86%*6", "27.69%*6", "29.52%*6", "31.35%*6", "33.18%*6", "35.01%*6", "36.85%*6", "38.68%*6"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Windborne Strike Damage",
                        skillDetailNum: [{
                            values: ["53.30%", "57.67%", "62.04%", "68.16%", "72.53%", "77.55%", "84.54%", "91.54%", "98.53%", "105.96%", "114.70%", "123.44%", "132.18%", "140.93%", "149.67%", "158.41%", "167.15%", "175.89%", "184.63%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Abyssal Slash Damage",
                        skillDetailNum: [{
                            values: ["41.10%", "44.47%", "47.84%", "52.55%", "55.92%", "59.80%", "65.19%", "70.58%", "75.98%", "81.71%", "88.45%", "95.19%", "101.93%", "108.67%", "115.41%", "122.15%", "128.89%", "135.63%", "142.37%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        skillDetailNum: [{
                            values: ["62.00%", "67.08%", "72.16%", "79.28%", "84.36%", "90.21%", "98.35%", "106.48%", "114.61%", "123.26%", "133.43%", "143.59%", "153.76%", "163.93%", "174.10%", "184.27%", "194.43%", "204.60%", "214.77%"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Banner Of Triumph Damage",
                        skillDetailNum: [{
                            values: ["40.00%", "43.28%", "46.56%", "51.15%", "54.43%", "58.20%", "63.45%", "68.70%", "73.94%", "79.52%", "86.08%", "92.64%", "99.20%", "105.76%", "112.32%", "118.88%", "125.44%", "132.00%", "138.56%"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Mid-Air Attack Follow-Up Damage",
                        skillDetailNum: [{
                            values: ["78.30%", "84.72%", "91.14%", "100.13%", "106.55%", "113.93%", "124.20%", "134.48%", "144.75%", "155.66%", "168.50%", "181.35%", "194.19%", "207.03%", "219.87%", "232.71%", "245.55%", "258.39%", "271.23%"]
                        }],
                        index: 11
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["63.30%*2", "68.49%*2", "73.68%*2", "80.95%*2", "86.14%*2", "92.11%*2", "100.41%*2", "108.72%*2", "117.02%*2", "125.85%*2", "136.23%*2", "146.61%*2", "156.99%*2", "167.37%*2", "177.75%*2", "188.13%*2", "198.52%*2", "208.90%*2", "219.28%*2"]
                        }],
                        index: 12
                    }, {
                        attributeName: "Heavy Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 13
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 14
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Windqueller',
                skillDescription: `Dash forward a certain distance, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                Can be cast in the air.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["53.50%*4", "57.88%*4", "62.27%*4", "68.41%*4", "72.80%*4", "77.84%*4", "84.86%*4", "91.88%*4", "98.90%*4", "106.36%*4", "115.13%*4", "123.91%*4", "132.68%*4", "141.45%*4", "150.23%*4", "159.00%*4", "167.78%*4", "176.55%*4", "185.32%*4"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"]
                        }],
                        index: 3
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Emerald Storm: Prelude',
                skillDescription: `After releasing Emerald Storm: Prelude, Jiyan enters <span class="Highlight">Qingloong Mode</span>.\n
                <div class="gap"></div>
                <span class="Title">Qingloong Mode</span>\n
                Jiyan has increased Anti-interruption;\n
                <span class="Highlight">Basic Attack</span>, <span class="Highlight">Heavy Attack</span> and <span class="Highlight">Dodge Counter</span> are replaced with Heavy Attack <span class="Highlight">Lance of Qingloong</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack: Lance of Qingloong</span>\n
                Perform up to 3 continuous attacks, dealing <span class="Wind">Aero DMG</span>, considered as Heavy Attack damage.`,
                skillDetailNum: ["10"],
                multipliers: [
                    {
                        attributeName: "Lance Of Qingloong Part 1 Damage",
                        skillDetailNum: [{
                            values: ["32.95%*8", "35.66%*8", "38.36%*8", "42.14%*8", "44.84%*8", "47.95%*8", "52.28%*8", "56.60%*8", "60.93%*8", "65.52%*8", "70.93%*8", "76.33%*8", "81.74%*8", "87.14%*8", "92.55%*8", "97.95%*8", "103.36%*8", "108.76%*8", "114.17%*8"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Lance Of Qingloong Part 2 Damage",
                        skillDetailNum: [{
                            values: ["30.96%*8", "33.49%*8", "36.03%*8", "39.59%*8", "42.13%*8", "45.05%*8", "49.11%*8", "53.17%*8", "57.23%*8", "61.55%*8", "66.62%*8", "71.70%*8", "76.78%*8", "81.86%*8", "86.93%*8", "92.01%*8", "97.09%*8", "102.17%*8", "107.24%*8"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Lance Of Qingloong Part 3 Damage",
                        skillDetailNum: [{
                            values: ["33.58%*8", "36.33%*8", "39.08%*8", "42.94%*8", "45.69%*8", "48.86%*8", "53.27%*8", "57.67%*8", "62.08%*8", "66.76%*8", "72.27%*8", "77.77%*8", "83.28%*8", "88.79%*8", "94.30%*8", "99.80%*8", "105.31%*8", "110.82%*8", "116.33%*8"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Qingloong Mode Duration",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 7
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Tactical Strike',
                skillDescription: `Jiyan pierces the target in mid-air, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["100.00%", "108.20%", "116.40%", "127.88%", "136.08%", "145.51%", "158.63%", "171.75%", "184.87%", "198.81%", "215.21%", "231.61%", "248.01%", "264.41%", "280.81%", "297.21%", "313.61%", "330.01%", "346.41%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Discipline',
                skillDescription: `When the next character's (or other characters on a nearby team that activates an Outro Skill) Heavy Attack hits a target, Jiyan will summon Qingloong to launch a Coordinated Attack, dealing <span class="Wind">Aero DMG</span> equal to {0} of Jiyan's ATK. This attack lasts for {1}s, and can be triggered once every {2}s, up to 2 times.`,
                skillDetailNum: ["313.40%", "8", "1"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Qingloong at War',
                skillDescription: `When casting Resonance Skill <span class="Highlight">Windqueller</span>, if Jiyan has {0} or more "Resolve", he consumes {1} "Resolve" to increase the damage of this Resonance Skill <span class="Highlight">Windqueller</span> by {2}.
                When Jiyan is in <span class="Highlight">Qingloong Mode</span>, DMG of Resonance Skill <span class="Highlight">Windqueller</span> is increased by {3} and no longer consumes "Resolve".
                <div class="gap"></div>
                <span class="Title">Resonance Liberation: Emerald Storm: Finale</span>
                When casting Resonance Liberation <span class="Highlight">Emerald Storm: Prelude</span>, if Jiyan has {4} "Resolve" or more, he will consume {5} "Resolve" to cast Emerald Storm: Finale, dealing <span class="Wind">Aero DMG</span>, considered as Heavy Attack damage.
                Emerald Storm: Finale can be cast in mid-air at low altitude.
                <div class="gap"></div>
                <span class="Title">Resolve</span>
                Jiyan can hold up to {6} Resolve.
                Jiyan gains "Resolve" when his Normal Attack <span class="Highlight">Lone Lance</span> hits the target.
                Jiyan gains "Resolve" when the Intro Skill <span class="Highlight">Tactical Strike</span> hits the target.
                If Jiyan does not hit a target within {7}s, his "Resolve" will gradually decrease.`,
                skillDetailNum: ["30", "30", "20%", "20%", "30", "30", "60", "15"],
                multipliers: [
                    {
                        attributeName: "Emerald Storm: Finale Damage",
                        skillDetailNum: [{
                            values: ["71.88%*2+215.65%", "77.78%*2+233.33%", "83.67%*2+251.01%", "91.92%*2+275.77%", "97.82%*2+293.45%", "104.60%*2+313.79%", "114.03%*2+342.08%", "123.46%*2+370.38%", "132.89%*2+398.67%", "142.91%*2+428.73%", "154.70%*2+464.10%", "166.49%*2+499.46%", "178.28%*2+534.83%", "190.07%*2+570.20%", "201.85%*2+605.56%", "213.64%*2+640.93%", "225.43%*2+676.29%", "237.22%*2+711.66%", "249.01%*2+747.03%"]
                        }],
                        index: 1
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Heavenly Balance',
                skillDescription: `After casting the Intro Skill <span class="Highlight">Tactical Strike</span>, Jiyan's ATK is increased by {0} for {1}s.`,
                skillDetailNum: ["10%", "15"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Tempest Taming',
                skillDescription: `When Jiyan's attacks hit a target, Jiyan's Crit. DMG is increased by {0} for {1}s`,
                skillDetailNum: ["12%", "8"],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Benevolence",
            description: `Resonance Skill <span class="Highlight">Windqueller</span> can be used 1 more time.\n
When casting Resonance Skill <span class="Highlight">Windqueller</span>, the "Resolve" cost is decreased by {1}.`,
            detailNum: ["1", "15"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1404_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Versatility",
            description: `After casting Intro Skill <span class="Highlight">Tactical Strike</span>, Jiyan gains {0} "Resolve" and his ATK is increased by {1} for {2}s. This can be triggered once every {3}s.`,
            detailNum: ["30", "28%", "15", "15"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [28],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1404_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Spectation",
            description: `When casting Resonance Skill <span class="Highlight">Windqueller</span>, Resonance Liberation <span class="Highlight">Emerald Storm: Prelude</span>, Resonance Skill <span class="Highlight">Emerald Storm: Finale</span> or Intro Skill <span class="Highlight">Tactical Strike</span>, Jiyan's Crit. Rate is increased by {0} and Crit. DMG is increased by {1} for {2}s.`,
            detailNum: ["16%", "32%", "8"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Crit. Rate", "Crit. Damage"],
            sequenceBuff: [16, 32],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1404_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Prudence",
            description: `When casting Resonance Liberation <span class="Highlight">Emerald Storm: Prelude</span> or Resonance Liberation <span class="Highlight">Emerald Storm: Finale</span>, the Heavy Attack DMG Bonus of all team members is increased by {0} for {1}s.`,
            detailNum: ["25%", "30"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Heavy Attack Damage Bonus"],
            sequenceBuff: [25],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1404_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Resolution",
            description: `The DMG multiplier of Outro Skill <span class="Highlight">Discipline</span> is increased by {0}.\n
When Jiyan's attacks hit a target, his ATK is increased by {1} for {2}s, stacking up to {3} times; this effect is immediately maxed after he casts Intro Skill <span class="Highlight">Tactical Strike</span>.`,
            detailNum: ["120%", "3%", "8", "15"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [3],
            stacks: 15,
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1404_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Fortitude",
            description: `Every time <span class="Highlight">Heavy Attack</span>, Intro Skill <span class="Highlight">Tactical Strike</span> or Resonance Skill <span class="Highlight">Windqueller</span> is used, Jiyan gains {0} stack(s) of "Momentum", stacking up to {1} times.\r
Resonance Liberation <span class="Highlight">Emerald Storm: Finale</span> will consume all "Momentum", and each stack consumed increases the DMG multiplier of Resonance Liberation <span class="Highlight">Emerald Storm: Finale</span> by {2}.`,
            detailNum: ["1", "2", "120%"],
            sequenceBuffType: "Skill Buff",
            sequenceBuffAtrribute: ["Emerald Storm: Finale"],
            sequenceBuff: [120],
            stacks: 2,
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1404_UI.png"
        }
    ]
    },
    {
    name: "Verina",
    charaId: 1501,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Spectro",
    weapon: "Rectifier",
    bio: `Formerly a member of a Pioneer Association expedition team from the New Federation, Verina is a humble and determined plant breeder.
Somehow she always ends up taking on caretaker duties in any expedition, showing remarkable tenacity for her age.`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_jueyuan_UI.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Verina.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Verina_Full_Sprite.webp"
    },
    asension: {
        charaAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "4"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "12"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "12"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "4"
        },
        {
            item: "Elegy Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Belle Poppy",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "25"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "28"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "40"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "57"
        },
        {
            item: "Lento Helix",
            id: 5,
            value: "25"
        },
        {
            item: "Adagio Helix",
            id: 6,
            value: "28"
        },
        {
            item: "Andante Helix",
            id: 7,
            value: "55"
        },
        {
            item: "Presto Helix",
            id: 8,
            value: "67"
        },
        {
            item: "Monument Bell",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 1139,
        base_atk: 27,
        base_def: 90,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 175,
        bonus_ele: 0,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 12,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Cultivation',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Verina performs up to 5 consecutive attacks with vines, dealing <span class="Light">Spectro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Verina consumes Stamina to charge forward, dealing <span class="Light">Spectro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Verina consumes Stamina to perform up to 3 consecutive attacks in mid-air, dealing <span class="Light">Spectro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Heavy Attack</span>\n
                Hold <span class="Highlight">Basic Attack</span> to consume Stamina and perform an Mid-air Plunging Attack, dealing <span class="Light">Spectro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Light">Spectro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["19.04%", "20.61%", "22.17%", "24.35%", "25.91%", "27.71%", "30.21%", "32.70%", "35.20%", "37.86%", "40.98%", "44.10%", "47.22%", "50.35%", "53.47%", "56.59%", "59.71%", "62.84%", "65.96%", "69.08%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["25.73%", "27.84%", "29.95%", "32.91%", "35.02%", "37.44%", "40.82%", "44.19%", "47.57%", "51.16%", "55.38%", "59.60%", "63.81%", "68.03%", "72.25%", "76.47%", "80.69%", "84.91%", "89.13%", "93.35%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["12.87%*2", "13.92%*2", "14.98%*2", "16.46%*2", "17.51%*2", "18.72%*2", "20.41%*2", "22.10%*2", "23.79%*2", "25.58%*2", "27.69%*2", "29.80%*2", "31.91%*2", "34.02%*2", "36.13%*2", "38.24%*2", "40.35%*2", "42.46%*2", "44.57%*2", "46.68%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["33.86%", "36.64%", "39.42%", "43.30%", "46.08%", "49.27%", "53.72%", "58.16%", "62.60%", "67.32%", "72.87%", "78.43%", "83.98%", "89.53%", "95.08%", "100.64%", "106.19%", "111.74%", "117.30%", "122.85%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Part 5 Damage",
                        skillDetailNum: [{
                            values: ["36.03%", "38.98%", "41.93%", "46.07%", "49.02%", "52.42%", "57.14%", "61.87%", "66.60%", "71.62%", "77.52%", "83.43%", "89.34%", "95.25%", "101.15%", "107.06%", "112.97%", "118.88%", "124.78%", "130.69%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["50.00%", "54.10%", "58.20%", "63.94%", "68.04%", "72.76%", "79.32%", "85.88%", "92.44%", "99.41%", "107.61%", "115.81%", "124.01%", "132.21%", "140.41%", "148.61%", "156.81%", "165.01%", "173.21%", "181.41%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Mid-Air Attack Part 1 Damage",
                        skillDetailNum: [{
                            values: ["28.35%", "30.68%", "33.00%", "36.26%", "38.58%", "41.26%", "44.98%", "48.70%", "52.42%", "56.37%", "61.02%", "65.67%", "70.32%", "74.97%", "79.61%", "84.26%", "88.91%", "93.56%", "98.21%", "102.86%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Mid-Air Attack Part 2 Damage",
                        skillDetailNum: [{
                            values: ["26.75%", "28.95%", "31.14%", "34.21%", "36.41%", "38.93%", "42.44%", "45.95%", "49.46%", "53.19%", "57.57%", "61.96%", "66.35%", "70.73%", "75.12%", "79.51%", "83.90%", "88.28%", "92.67%", "97.06%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Mid-Air Attack Part 3 Damage",
                        skillDetailNum: [{
                            values: ["12.79%*3", "13.84%*3", "14.88%*3", "16.35%*3", "17.40%*3", "18.61%*3", "20.28%*3", "21.96%*3", "23.64%*3", "25.42%*3", "27.52%*3", "29.61%*3", "31.71%*3", "33.81%*3", "35.90%*3", "38.00%*3", "40.09%*3", "42.19%*3", "44.29%*3", "46.38%*3"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Mid-Air Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["31.00%", "33.55%", "36.09%", "39.65%", "42.19%", "45.11%", "49.18%", "53.25%", "57.31%", "61.64%", "66.72%", "71.80%", "76.89%", "81.97%", "87.06%", "92.14%", "97.22%", "102.31%", "107.39%", "112.48%"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["65.00%", "70.33%", "75.66%", "83.13%", "88.46%", "94.59%", "103.11%", "111.64%", "120.17%", "129.23%", "139.89%", "150.55%", "161.21%", "171.87%", "182.53%", "193.19%", "203.85%", "214.51%", "225.17%", "235.83%"]
                        }],
                        index: 11
                    }, {
                        attributeName: "Heavy Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 12
                    }, {
                        attributeName: "Mid-Air Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 13
                    }, {
                        attributeName: "Mid-Air Heavy Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 14
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Botany Experiment',
                skillDescription: `Verina converges an energy field in front to grow foliage, dealing <span class="Light">Spectro DMG</span> within the range.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["18.00%*3+36.00%", "19.48%*3+38.96%", "20.96%*3+41.91%", "23.02%*3+46.04%", "24.50%*3+48.99%", "26.20%*3+52.39%", "28.56%*3+57.11%", "30.92%*3+61.83%", "33.28%*3+66.56%", "35.79%*3+71.58%", "38.74%*3+77.48%", "41.69%*3+83.38%", "44.65%*3+89.29%", "47.60%*3+95.19%", "50.55%*3+101.10%", "53.50%*3+107.00%", "56.45%*3+112.90%", "59.41%*3+118.81%", "62.36%*3+124.71%", "65.31%*3+130.62%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 3
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Arboreal Flourish',
                skillDescription: `Verina nourishes nearby foliage at rapid speed, dealing <span class="Light">Spectro DMG</span> while restoring HP to all Characters on teams nearby. A <span class="Highlight">Photosynthesis Mark</span> is applied to the target on hit.
                <div class="gap"></div>
                <span class="Title">Photosynthesis Mark</span>
                Whenever a Character on a team nearby performs an attack on targets with a Photosynthesis Mark, Verina performs a Coordinated Attack, dealing <span class="Light">Spectro DMG</span> while restoring HP to the active Character dealing damage on a team nearby, triggered once per second.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["100.00%", "108.20%", "116.40%", "127.88%", "136.08%", "145.51%", "158.63%", "171.75%", "184.87%", "198.81%", "215.21%", "231.61%", "248.01%", "264.41%", "280.81%", "297.21%", "313.61%", "330.01%", "346.41%", "362.81%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Arboreal Flourish Healing",
                        skillDetailNum: [{
                            values: ["500+11.33%", "600+13.03%", "700+14.17%", "800+15.87%", "825+17.00%", "890+18.13%", "900+19.27%", "915+20.40%", "930+21.53%", "950+23.80%", "1029+25.76%", "1107+27.73%", "1186+29.69%", "1264+31.65%", "1342+33.62%", "1421+35.58%", "1499+37.54%", "1577+39.51%", "1656+41.47%", "1734+43.43%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Coordinated Attack Damage",
                        skillDetailNum: [{
                            values: ["5.00%", "5.41%", "5.82%", "6.40%", "6.81%", "7.28%", "7.94%", "8.59%", "9.25%", "9.95%", "10.77%", "11.59%", "12.41%", "13.23%", "14.05%", "14.87%", "15.69%", "16.51%", "17.33%", "18.15%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Coordinated Attack Healing",
                        skillDetailNum: [{
                            values: ["225+5.10%", "270+5.87%", "315+6.38%", "360+7.14%", "372+7.65%", "401+8.16%", "405+8.67%", "412+9.18%", "419+9.69%", "428+10.71%", "463+11.59%", "499+12.48%", "534+13.36%", "569+14.24%", "604+15.13%", "640+16.01%", "675+16.89%", "710+17.78%", "745+18.66%", "781+19.54%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Photosynthesis Mark Duration",
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 8
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Verdant Growth',
                skillDescription: `Verina attacks the target, dealing <span class="Light">Spectro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["50.00%", "54.10%", "58.20%", "63.94%", "68.04%", "72.76%", "79.32%", "85.88%", "92.44%", "99.41%", "107.61%", "115.81%", "124.01%", "132.21%", "140.41%", "148.61%", "156.81%", "165.01%", "173.21%", "181.41%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Blossom',
                skillDescription: `Verina recovers HP to the next character (or other characters on a nearby team that activates an Outro Skill) equal to {0} of her ATK per second for {1}s. All Characters on nearby teams gain {2} all-Type DMG Deepen for {3}s.`,
                skillDetailNum: ["19%", "6", "15%", "30"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Starflower Blooms',
                skillDescription: `<span class="Title">Heavy Attack: Starflower Blooms</span>\n
                When casting <span class="Highlight">Heavy Attack</span>, if Verina carries "Photosynthesis Energy", Verina consumes {0} stack of "Photosynthesis Energy" to recover Concerto Energy and restore HP for all party members nearby;\n
                <span class="Highlight">Heavy Attack: Starflower Blooms</span> deals <span class="Light">Spectro DMG</span>, considered as Heavy Attack damage.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack: Starflower Blooms</span>\n
                When casting <span class="Highlight">Mid-air Attack</span>, if Verina carries "Photosynthesis Energy", Verina consumes {0} stack of "Photosynthesis Energy" to recover Concerto Energy and restore HP for all party members nearby;\n
                <span class="Highlight">Mid-air Attack: Starflower Blooms</span> deals <span class="Light">Spectro DMG</span>, considered as Basic Attack damage.\n
                Verina can cast <span class="Highlight">Mid-air Attack: Starflower Blooms</span> by using <span class="Highlight">Basic Attack</span> after casting <span class="Highlight">Heavy Attack: Starflower Blooms</span>.\n
                <div class="gap"></div>
                <span class="Title">Photosynthesis Energy</span>\n
                Verina can hold up to {1} "Photosynthesis Energy".\n
                Verina obtains {2} stack of "Photosynthesis Energy" for every Basic Attack 5 on hit;\n
                Verina obtains {3} stack of "Photosynthesis Energy" for every Resonance Skill <span class="Highlight">Botany Experiment</span> on hit;\n
                Verina obtains {4} stack of "Photosynthesis Energy" for every Intro Skill <span class="Highlight">Verdant Growth</span> on hit.`,
                skillDetailNum: ["1", "4", "1", "1", "1"],
                multipliers: [
                    {
                        attributeName: "Heavy Attack: Starflower Blooms Damage",
                        skillDetailNum: [{
                            values: ["32.67%+49.00%", "35.35%+53.02%", "38.03%+57.04%", "41.78%+62.67%", "44.46%+66.68%", "47.54%+71.30%", "51.82%+77.73%", "56.11%+84.16%", "60.40%+90.59%", "64.95%+97.42%", "70.31%+105.46%", "75.66%+113.49%", "81.02%+121.53%", "86.38%+129.57%", "91.74%+137.60%", "97.09%+145.64%", "102.45%+153.67%", "107.81%+161.71%", "113.17%+169.75%", "118.52%+177.78%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Mid-Air Attack: Starflower Bloom Part 1 Damage",
                        skillDetailNum: [{
                            values: ["34.02%", "36.81%", "39.60%", "43.51%", "46.30%", "49.51%", "53.97%", "58.43%", "62.90%", "67.64%", "73.22%", "78.80%", "84.38%", "89.96%", "95.54%", "101.12%", "106.70%", "112.27%", "117.85%", "123.43%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Mid-Air Attack: Starflower Bloom Part 2 Damage",
                        skillDetailNum: [{
                            values: ["32.10%", "34.74%", "37.37%", "41.05%", "43.69%", "46.71%", "50.93%", "55.14%", "59.35%", "63.82%", "69.09%", "74.35%", "79.62%", "84.88%", "90.15%", "95.41%", "100.67%", "105.94%", "111.20%", "116.47%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Mid-Air Attack: Starflower Bloom Part 3 Damage",
                        skillDetailNum: [{
                            values: ["15.34%*3", "16.60%*3", "17.86%*3", "19.62%*3", "20.88%*3", "22.33%*3", "24.34%*3", "26.35%*3", "28.36%*3", "30.50%*3", "33.02%*3", "35.53%*3", "38.05%*3", "40.57%*3", "43.08%*3", "45.60%*3", "48.11%*3", "50.63%*3", "53.14%*3", "55.66%*3"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Starflower Blooms Healing",
                        skillDetailNum: [{
                            values: ["625+14.17%", "750+16.29%", "875+17.71%", "1000+19.83%", "1032+21.25%", "1113+22.67%", "1125+24.08%", "1144+25.50%", "1163+26.92%", "1188+29.75%", "1286+32.20%", "1384+34.66%", "1482+37.11%", "1580+39.57%", "1678+42.02%", "1776+44.47%", "1874+46.93%", "1972+49.38%", "2070+51.84%", "2168+54.29%"]
                        }],
                        index: 5
                    }, {
                        attributeName: '"Photosynthesis Energy" Con. Energy Regen',
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Grace of Life',
                skillDescription: `Verina protects a party member from fatal damage and grants a shield with strength equal to {0} of Verina's ATK, lasting for {1}s. This can be triggered once every {2} minutes.`,
                skillDetailNum: ["120%", "10", "10"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Gift of Nature',
                skillDescription: `When Verina casts Heavy Attack <span class="Highlight">Starflower Blooms</span>, Mid-air Attack <span class="Highlight">Starflower Blooms</span>, Resonance Liberation <span class="Highlight">Arboreal Flourish</span> or Outro Skill <span class="Highlight">Blossom</span>, ATK for all party members is increased by {0} for {1}s.`,
                skillDetailNum: ["20%", "20"],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Moment of Emergence",
            description: `Outro Skill <span class="Highlight">Blossom</span> grants the next character a continuous Healing effect, recovering HP by {1} of Verina's ATK every {0}s for {2}s.`,
            detailNum: ["5", "20%", "30"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Sprouting Reflections",
            description: `Resonance Skill <span class="Highlight">Botany Experiment</span> additionally grants {0} [Photosynthetic Energy] and {1} Con. Energy.`,
            detailNum: ["1", "10"],
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "The Choice to Flourish",
            description: `Healing of Resonance Liberation's <span class="Highlight">Photosynthesis Mark</span> is increased by {0}.`,
            detailNum: ["12%"],
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Blossoming Embrace",
            description: `Heavy Attack <span class="Highlight">Starflower Blooms</span>, Mid-Air Attack <span class="Highlight">Starflower Blooms</span>, Resonance Liberation <span class="Highlight">Arboreal Flourish</span> and Outro Skill <span class="Highlight">Blossom</span> increases the Spectro DMG Bonus of all team members by {0} for {1}s.`,
            detailNum: ["15%", "24"],
            sequenceBuffAtrribute: ["Spectro Damage Bonus"],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Miraculous Blooms",
            description: `When Verina heals a team member with HP less than {0}, her Healing is increased by {1}.`,
            detailNum: ["50%", "20%"],
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Joyous Harvest",
            description: `Heavy Attack <span class="Highlight">Starflower Blooms</span> and Mid-Air Attack <span class="Highlight">Starflower Blooms</span> deal {0} more damage. They will trigger Coordinated Attack {1} time and heal all characters nearby. The DMG of this Coordinated Attack and the Healing are equal to those of the Resonance Liberation's <span class="Highlight">Photosynthesis Mark</span>.`,
            detailNum: ["20%", "1"],
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        }
    ]
    },
    {
    name: "Jinhsi",
    charaId: 1502,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Spectro",
    weapon: "Broadblade",
    bio: `Being the Magistrate of Jinzhou, Jinhsi bears her noble and weighty share of duties.
Through repeated ages, the Lament has preyed upon mankind's vulnerable hope.
Yet, grasping the nettle, she strives with all her might to forge a path toward tomorrow.`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/jinhsi-image.webp",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Jinhsi.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/jinhsi-Full-image.png"
    },
    asension: {
        charaAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "4"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "12"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "12"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "4"
        },
        {
            item: "Elegy Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Loong's Pearl",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "25"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "28"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "40"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "57"
        },
        {
            item: "Waveworn Residue 210",
            id: 5,
            value: "25"
        },
        {
            item: "Waveworn Residue 226",
            id: 6,
            value: "28"
        },
        {
            item: "Waveworn Residue 235",
            id: 7,
            value: "55"
        },
        {
            item: "Waveworn Residue 239",
            id: 8,
            value: "67"
        },
        {
            item: "Sentinel's Dagger",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 866,
        base_atk: 33,
        base_def: 103,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 0,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 8,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Slash of Breaking Dawn',
                skillDescription: `<span class="Title">Basic Attack</span>
Perform up to 4 consecutive strikes, dealing <span class="Light">Spectro DMG</span>.
<span class="Title">Heavy Attack</span>
Perform a charged attack by consuming Stamina, dealing <span class="Light">Spectro DMG</span>.

<span class="Title">Mid-Air Attack</span>
Perform a Plunging Attack while in mid-air by consuming Stamina, dealing <span class="Light">Spectro DMG</span>.

<span class="Title">Dodge Counter</span>
Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to counterattack, dealing <span class="Light">Spectro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Stage 1 DMG",
                        skillDetailNum: [{
                            values: ["33.43%", "36.18%", "38.92%", "42.75%", "45.50%", "48.65%", "53.03%", "57.42%", "61.81%", "66.47%", "71.95%", "77.43%", "82.91%", "88.40%", "93.88%", "99.36%", "104.84%", "110.33%", "115.81%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Stage 2 DMG",
                        skillDetailNum: [{
                            values: ["19.61%+9.81%*3", "21.22%+10.61%*3", "22.83%+11.42%*3", "25.08%+12.54%*3", "26.69%+13.35%*3", "28.54%+14.27%*3", "31.11%+15.56%*3", "33.68%+16.84%*3", "36.26%+18.13%*3", "38.99%+19.50%*3", "42.20%+21.10%*3", "45.42%+22.71%*3", "48.64%+24.32%*3", "51.85%+25.93%*3", "55.07%+27.54%*3", "58.28%+29.14%*3", "61.50%+30.75%*3", "64.72%+32.36%*3", "67.93%+33.97%*3"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Stage 3 DMG",
                        skillDetailNum: [{
                            values: ["5.36%*7+16.07%", "5.80%*7+17.39%", "6.24%*7+18.70%", "6.85%*7+20.55%", "7.29%*7+21.86%", "7.80%*7+23.38%", "8.50%*7+25.49%", "9.20%*7+27.59%", "9.90%*7+29.70%", "10.65%*7+31.94%", "11.53%*7+34.57%", "12.41%*7+37.21%", "13.28%*7+39.84%", "14.16%*7+42.48%", "15.04%*7+45.11%", "15.92%*7+47.75%", "16.80%*7+50.38%", "17.68%*7+53.02%", "18.55%*7+55.65%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Stage 4 DMG",
                        skillDetailNum: [{
                            values: ["31.74%+47.60%", "34.34%+51.51%", "36.94%+55.41%", "40.58%+60.87%", "43.19%+64.78%", "46.18%+69.26%", "50.34%+75.51%", "54.50%+81.75%", "58.67%+88.00%", "63.09%+94.63%", "68.29%+102.44%", "73.50%+110.25%", "78.70%+118.05%", "83.91%+125.86%", "89.11%+133.66%", "94.31%+141.47%", "99.52%+149.28%", "104.72%+157.08%", "109.93%+164.89%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Heavy Attack DMG",
                        skillDetailNum: [{
                            values: ["12.00%*5+18.00%+42.00%", "12.99%*5+19.48%+45.45%", "13.97%*5+20.96%+48.89%", "15.35%*5+23.02%+53.71%", "16.33%*5+24.50%+57.16%", "17.47%*5+26.20%+61.12%", "19.04%*5+28.56%+66.63%", "20.61%*5+30.92%+72.14%", "22.19%*5+33.28%+77.65%", "23.86%*5+35.79%+83.51%", "25.83%*5+38.74%+90.39%", "27.80%*5+41.69%+97.28%", "29.77%*5+44.65%+104.17%", "31.73%*5+47.60%+111.06%", "33.70%*5+50.55%+117.95%", "35.67%*5+53.50%+124.83%", "37.64%*5+56.45%+131.72%", "39.61%*5+59.41%+138.61%", "41.57%*5+62.36%+145.50%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Mid-air Attack DMG",
                        skillDetailNum: [{
                            values: ["6.20%+12.40%+43.40%", "6.71%+13.42%+46.96%", "7.22%+14.44%+50.52%", "7.93%+15.86%+55.50%", "8.44%+16.88%+59.06%", "9.03%+18.05%+63.16%", "9.84%+19.68%+68.85%", "10.65%+21.30%+74.54%", "11.47%+22.93%+80.24%", "12.33%+24.66%+86.29%", "13.35%+26.69%+93.41%", "14.36%+28.72%+100.52%", "15.38%+30.76%+107.64%", "16.40%+32.79%+114.76%", "17.42%+34.83%+121.88%", "18.43%+36.86%+128.99%", "19.45%+38.89%+136.11%", "20.47%+40.93%+143.23%", "21.48%+42.96%+150.35%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Dodge Counter DMG",
                        skillDetailNum: [{
                            values: ["7.38%*7+22.14%", "7.99%*7+23.96%", "8.59%*7+25.77%", "9.44%*7+28.32%", "10.05%*7+30.13%", "10.74%*7+32.22%", "11.71%*7+35.12%", "12.68%*7+38.03%", "13.65%*7+40.93%", "14.68%*7+44.02%", "15.89%*7+47.65%", "17.10%*7+51.28%", "18.31%*7+54.91%", "19.52%*7+58.54%", "20.73%*7+62.17%", "21.94%*7+65.80%", "23.15%*7+69.43%", "24.36%*7+73.06%", "25.57%*7+76.69%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Heavy Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Mid-air Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 9
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Trailing Lights of Eons',
                skillDescription: `Dash forward and perform consecutive strikes that inflict <span class="Light">Spectro DMG</span>.

<span class="Title">Overflowing Radiance</span>
After Jinhsi uses <span class="Light">Basic Attack 4</span> or, while not in <span class="Highlight">Incarnation</span>, Intro Skill <span class="Highlight">Loong's Halo</span>, an alternative Resonance Skill <span class="Highlight">Overflowing Radiance</span> becomes available within {0}s.
Resonance Skill <span class="Highlight">Overflowing Radiance</span> inflicts <span class="Highlight">Spectro DMG</span> and sends Jinhsi into <span class="Highlight"> Incarnation</span>`,
                skillDetailNum: ["5"],
                multipliers: [
                    {
                        attributeName: "Skill DMG",
                        skillDetailNum: [{
                            values: ["9.79%*4+39.15%", "10.60%*4+42.37%", "11.40%*4+45.58%", "12.52%*4+50.07%", "13.32%*4+53.28%", "14.25%*4+56.97%", "15.53%*4+62.11%", "16.82%*4+67.25%", "18.10%*4+72.38%", "19.46%*4+77.84%", "21.07%*4+84.26%", "22.67%*4+90.68%", "24.28%*4+97.10%", "25.88%*4+103.52%", "27.49%*4+109.94%", "29.09%*4+116.36%", "30.70%*4+122.78%", "32.30%*4+129.20%", "33.91%*4+135.62%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Overflowing Radiance DMG",
                        skillDetailNum: [{
                            values: ["4.96%*4+14.88%*4+19.84%", "5.37%*4+16.11%*4+21.47%", "5.78%*4+17.33%*4+23.10%", "6.35%*4+19.03%*4+25.38%", "6.75%*4+20.25%*4+27.00%", "7.22%*4+21.66%*4+28.87%", "7.87%*4+23.61%*4+31.48%", "8.52%*4+25.56%*4+34.08%", "9.17%*4+27.51%*4+36.68%", "9.87%*4+29.59%*4+39.45%", "10.68%*4+32.03%*4+42.70%", "11.49%*4+34.47%*4+45.96%", "12.31%*4+36.91%*4+49.21%", "13.12%*4+39.35%*4+52.46%", "13.93%*4+41.79%*4+55.72%", "14.75%*4+44.23%*4+58.97%", "15.56%*4+46.67%*4+62.23%", "16.37%*4+49.11%*4+65.48%", "17.19%*4+51.55%*4+68.73%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Incarnation Duration",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Overflowing Radiance Cooldown",
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Overflowing Radiance Con. Regen",
                        skillDetailNum: [{
                            values: ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Purge of Light',
                skillDescription: `Unleash the power of a heart's wish to deal <span class="Highlight">Spectro DMG</span>.
Can be cast in mid-air.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill DMG",
                        skillDetailNum: [{
                            values: ["251.40%+586.60%", "272.02%+634.71%", "292.63%+682.81%", "321.50%+750.15%", "342.11%+798.25%", "365.82%+853.57%", "398.80%+930.53%", "431.78%+1007.49%", "464.77%+1084.45%", "499.81%+1166.22%", "541.04%+1262.43%", "582.27%+1358.63%", "623.50%+1454.83%", "664.73%+1551.03%", "705.96%+1647.24%", "747.19%+1743.44%", "788.42%+1839.64%", "829.65%+1935.84%", "870.88%+2032.05%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24"]
                        }],
                        index: 2
                    }, {
                        attributeName: "RES Cost",
                        skillDetailNum: [{
                            values: ["150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Con. Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 4
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: `Loong's Halo`,
                skillDescription: `Attack the target, dealing <span class="Highlight">Spectro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill DMG",
                        skillDetailNum: [{
                            values: ["80.00%", "86.56%", "93.12%", "102.31%", "108.87%", "116.41%", "126.91%", "137.40%", "147.90%", "159.05%", "172.17%", "185.29%", "198.41%", "211.53%", "224.65%", "237.77%", "250.89%", "264.01%", "277.13%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Temporal Bender',
                skillDescription: `With the power homologous with the Sentinel, Jinhsi reduces the Cooldown of <span class="Highlight">Eras in Unity</span> to {0}s. This lasts for {1}s.`,
                skillDetailNum: ["1", "20"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Luminal Synthesis',
                skillDescription: `<span class="Title">Incarnation</span>
While in <span class="Highlight">Incarnation</span>:
- Alternative Basic Attack <span class="Highlight">"Incarnation: Basic Attack"</span> becomes available. Perform up to 4 consecutive strikes, dealing <span class="Light">Spectro DMG</span>. The basic attack cycle of this will not be reset. Can be cast in mid-air.
- Alternative Resonance Skill <span class="Highlight">"Crescent Divinity"</span> becomes available. Deal <span class="Light">Spectro DMG</span>. Can be cast in mid-air.
- Alternative Heavy Attack <span class="Highlight">"Incarnation: Heavy Attack"</span> becomes available. Attack the target in mid-air at the cost of Stamina, dealing <span class="Light">Spectro DMG</span>.
- Alternative Dodge <span class="Highlight">"Incarnation: Dodge"</span> becomes available while airborne. Can be cast multiple times at the cost of Stamina.
- Alternative Dodge Counter <span class="Highlight">"Incarnation: Dodge Counter"</span> becomes available. Deal <span class="Light">Spectro Damage</span>.
Can be cast in mid-air.

<span class="Title">Resonance Skill: Illuminous Epiphany</span>
After Stage 4 of <span class="Highlight">Incarnation: Basic Attack</span>, <span class="Highlight">Incarnation</span> terminates and Jinhsi gains <span class="Highlight">Ordination Glow</span>. 
Can be cast in mid-air.
While <span class="Highlight">Ordination Glow</span> lasts:
- Basic Attack is replaced with the Alternative Heavy Attack <span class="Highlight">"Incarnation: Heavy Attack"</span> when airborne. Attack the target in mid-air at the cost of Stamina, dealing <span class="Light">Spectro DMG</span>.
Resonance Skill is replaced with Resonance Skill <span class="Highlight">Illuminous Epiphany</span>. Send out <span class="Highlight">Solar Flare</span> that detonates as <span class="Highlight">Stella Glamour</span> that deals <span class="Light">Spectro Damage</span> after a short delay. When Jinhsi has "Incandescence", consume up to {0} Incandescence, each point of Incandescence grants an additional DMG multiplier percentage to the <span class="Highlight">Star Glamour</span>. Can be cast in mid-air.
After casting Resonance Skill <span class="Highlight">Illuminous Epiphany</span>, Jinhsi gains <span class="Highlight">Unison</span>. This can be triggered once in {1}s.

<span class="Title">Unison</span>
While Jinhsi has <span class="Highlight">Unison</span>, switching to other Characters will remove Jinhsi's <span class="Highlight">Unison</span> to trigger Jinhsi's Outro Skill and the incoming character's Intro Skill. <span class="Highlight">Unison</span> will be consumed in priority in place of Con. Energy when Con. Energy is full.

<span class="Title">Incandescence</span>
Jinhsi can hold up to {2} Incandescence。
When Jinhsi is on the team, all nearby characters on the team gain <span class="Highlight">Eras in Unity</span>. When characters with <span class="Highlight">Eras in Unity</span> deal Damage with an attribute, Jinhsi gains {3} Incandescence. Damage of the same attribute can provide up to {5} Incandescence every {4}s.`,
                skillDetailNum: ["40", "25", "40", "1", "3", "1"],
                multipliers: [
                    {
                        attributeName: "Incarnation: Basic Attack 1 DMG",
                        skillDetailNum: [{
                            values: ["44.58%", "48.23%", "51.89%", "57.00%", "60.66%", "64.86%", "70.71%", "76.56%", "82.41%", "88.62%", "95.93%", "103.24%", "110.55%", "117.86%", "125.17%", "132.48%", "139.79%", "147.10%", "154.41%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Incarnation: Basic Attack 2 DMG",
                        skillDetailNum: [{
                            values: ["39.22%+13.08%+13.08%", "42.44%+14.15%+14.15%", "45.65%+15.22%+15.22%", "50.16%+16.72%+16.72%", "53.37%+17.79%+17.79%", "57.07%+19.03%+19.03%", "62.22%+20.74%+20.74%", "67.36%+22.46%+22.46%", "72.51%+24.17%+24.17%", "77.97%+25.99%+25.99%", "84.40%+28.14%+28.14%", "90.84%+30.28%+30.28%", "97.27%+32.43%+32.43%", "103.70%+34.57%+34.57%", "110.13%+36.71%+36.71%", "116.56%+38.86%+38.86%", "123.00%+41.00%+41.00%", "129.43%+43.15%+43.15%", "135.86%+45.29%+45.29%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Incarnation: Basic Attack 3 DMG",
                        skillDetailNum: [{
                            values: ["50.02%+33.35%", "54.12%+36.08%", "58.23%+38.82%", "63.97%+42.65%", "68.07%+45.38%", "72.79%+48.53%", "79.35%+52.90%", "85.91%+57.28%", "92.47%+61.65%", "99.44%+66.30%", "107.65%+71.77%", "115.85%+77.24%", "124.05%+82.70%", "132.26%+88.17%", "140.46%+93.64%", "148.66%+99.11%", "156.86%+104.58%", "165.07%+110.05%", "173.27%+115.52%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Incarnation: Basic Attack 4 DMG",
                        skillDetailNum: [{
                            values: ["9.39%*6+37.56%", "10.16%*6+40.64%", "10.93%*6+43.72%", "12.01%*6+48.03%", "12.78%*6+51.11%", "13.67%*6+54.65%", "14.90%*6+59.58%", "16.13%*6+64.51%", "17.36%*6+69.44%", "18.67%*6+74.67%", "20.21%*6+80.83%", "21.75%*6+86.99%", "23.29%*6+93.15%", "24.83%*6+99.31%", "26.37%*6+105.47%", "27.91%*6+111.63%", "29.45%*6+117.79%", "30.99%*6+123.95%", "32.53%*6+130.11%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Incarnation: Heavy Attack DMG",
                        skillDetailNum: [{
                            values: ["24.00%+56.00%", "25.97%+60.60%", "27.94%+65.19%", "30.70%+71.62%", "32.66%+76.21%", "34.93%+81.49%", "38.08%+88.84%", "41.22%+96.18%", "44.37%+103.53%", "47.72%+111.34%", "51.66%+120.52%", "55.59%+129.71%", "59.53%+138.89%", "63.46%+148.07%", "67.40%+157.26%", "71.34%+166.44%", "75.27%+175.63%", "79.21%+184.81%", "83.14%+193.99%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Incarnation: Dodge Counter DMG",
                        skillDetailNum: [{
                            values: ["22.08%+16.56%*2+55.19%", "23.89%+17.92%*2+59.71%", "25.70%+19.27%*2+64.24%", "28.23%+21.17%*2+70.57%", "30.04%+22.53%*2+75.10%", "32.12%+24.09%*2+80.30%", "35.02%+26.27%*2+87.54%", "37.91%+28.44%*2+94.78%", "40.81%+30.61%*2+102.02%", "43.89%+32.92%*2+109.71%", "47.51%+35.63%*2+118.76%", "51.13%+38.35%*2+127.81%", "54.75%+41.06%*2+136.86%", "58.37%+43.78%*2+145.91%", "61.99%+46.49%*2+154.96%", "65.61%+49.21%*2+164.01%", "69.23%+51.92%*2+173.06%", "72.85%+54.64%*2+182.11%", "76.47%+57.35%*2+191.16%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Crescent Divinity DMG",
                        skillDetailNum: [{
                            values: ["50.68%+38.01%*2+126.70%", "54.84%+41.13%*2+137.09%", "59.00%+44.25%*2+147.48%", "64.81%+48.61%*2+162.03%", "68.97%+51.73%*2+172.42%", "73.75%+55.31%*2+184.37%", "80.40%+60.30%*2+200.99%", "87.05%+65.29%*2+217.61%", "93.70%+70.27%*2+234.24%", "100.76%+75.57%*2+251.90%", "109.07%+81.81%*2+272.68%", "117.38%+88.04%*2+293.45%", "125.70%+94.27%*2+314.23%", "134.01%+100.51%*2+335.01%", "142.32%+106.74%*2+355.79%", "150.63%+112.97%*2+376.57%", "158.94%+119.21%*2+397.35%", "167.25%+125.44%*2+418.13%", "175.57%+131.68%*2+438.91%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Illuminous Epiphany: Solar Flare DMG",
                        skillDetailNum: [{
                            values: ["10.00%*6", "10.82%*6", "11.64%*6", "12.79%*6", "13.61%*6", "14.56%*6", "15.87%*6", "17.18%*6", "18.49%*6", "19.89%*6", "21.53%*6", "23.17%*6", "24.81%*6", "26.45%*6", "28.09%*6", "29.73%*6", "31.37%*6", "33.01%*6", "34.65%*6"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Illuminous Epiphany: Star Glamour DMG",
                        skillDetailNum: [{
                            values: ["175.00%", "189.35%", "203.70%", "223.79%", "238.14%", "254.65%", "277.61%", "300.57%", "323.53%", "347.92%", "376.62%", "405.32%", "434.02%", "462.72%", "491.42%", "520.12%", "548.82%", "577.52%", "606.22%"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Incandescence additional multiplier per stack",
                        skillDetailNum: [{
                            values: ["13.50%", "14.61%", "15.72%", "17.27%", "18.38%", "19.65%", "21.42%", "23.19%", "24.96%", "26.84%", "29.06%", "31.27%", "33.49%", "35.70%", "37.91%", "40.13%", "42.34%", "44.56%", "46.77%"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Incarnation: Heavy Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 11
                    }, {
                        attributeName: "Incarnation: Dodge Stamina Cost",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 12
                    }, {
                        attributeName: "Ordination Glow Duration",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 13
                    }, {
                        attributeName: "Unison Duration",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 14
                    }, {
                        attributeName: "Crescent Divinity Cooldown",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 15
                    }, {
                        attributeName: "Crescent Divinity Con. Regen",
                        skillDetailNum: [{
                            values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
                        }],
                        index: 16
                    }, {
                        attributeName: "Illuminous Epiphany Con. Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 17
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Radiant Surge',
                skillDescription: `Jinhsi's Spectro DMG Bonus is increased by {0}.`,
                skillDetailNum: ["20%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Converged Flash',
                skillDescription: `Intro Skill <span class="Highlight">Loong's Halo</span> gains {0} additional DMG.`,
                skillDetailNum: ["50%"],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Abyssal asension",
            description: `When Jinhsi casts Basic Attack <span class="Highlight">"Incarnation: Basic Attack"</span> or Resonance Skill <span class="Highlight">"Crescent Divinity"</span>, gain one stack of <span class="Highlight">Herald of Revival</span>, which stacks up to {0} times and last for {1}s. When casting Resonance Skill <span class="Highlight">"Illuminous Epiphany"</span>, Jinhsi consumes all stacks of <span class="Highlight">Herald of Revival</span>. Each stack increases the DMG of Resonance Skill <span class="Highlight">"Illuminous Epiphany"</span> by {2}.`,
            detailNum: ["4", "6", "20%"],
            sequenceBuffType: "Skill Buff",
            sequenceBuffAtrribute: ["Illuminous Epiphany"],
            sequenceBuff: [20],
            stacks: 4,
            itemImg: ""
        },
        {
            node: "Sequence Node 2",
            name: "Chronofrost Repose",
            description: `Jinhsi recovers {1} Incandescence while staying out of combat for more than {0}s. This effect can only be triggered {3} every {2}s.`,
            detailNum: ["4", "40", "4", "1"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: ""
        },
        {
            node: "Sequence Node 3",
            name: "Celestial Incarnate",
            description: `Gain {0} stack of <span class="Highlight">Immortal's Descendancy</span> after casting Intro Skill <span class="Highlight">Loong's Halo</span>. Every stack of <span class="Highlight">Immortal's Descendancy</span> increases ATK by {1}, for up to {2} stacks, lasting for {3}s.`,
            detailNum: ["1", "25%", "2", "20"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [25],
            stacks: 2,
            itemImg: ""
        },
        {
            node: "Sequence Node 4",
            name: "Benevolent Grace",
            description: `When casting Resonance Liberation <span class="Highlight">Purge of Light</span> or Resonance Skill <span class="Highlight">Illuminous Epiphany</span>, all nearby Characters in the team gain DMG Bonus for all attributes by {0} for {1}s.`,
            detailNum: ["20%", "20"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Element Damage Bonus"],
            sequenceBuff: [20],
            itemImg: ""
        },
        {
            node: "Sequence Node 5",
            name: "Frostfire Illumination",
            description: `The DMG Multiplier of Resonance Liberation <span class="Highlight">Purge of Evil</span> is increased by {0}.`,
            detailNum: ["120%"],
            sequenceBuffType: "Skill Buff",
            sequenceBuffAtrribute: ["Purge of Evil"],
            sequenceBuff: [120],
            itemImg: ""
        },
        {
            node: "Sequence Node 6",
            name: "Comes Spring when Chill Exhausts",
            description: `DMG Multiplier percentage for Resonance Skill <span class="Highlight">Illuminous Epiphany</span> is increased by {0}. The multiplier increase brought by Incandescence is additionally increased by {1}.`,
            detailNum: ["45%", "45%"],
            sequenceBuffType: "Skill Buff",
            sequenceBuffAtrribute: ["Illuminous Epiphany"],
            sequenceBuff: [45],
            itemImg: ""
        }
    ]
    },
    {
    name: "Taoqi",
    charaId: 1601,
    rarity: {
        alt: "5 Star",
        img: rarity4Star
    },
    element: "Havoc",
    weapon: "Broadblade",
    bio: `Taoqi oversees Jinzhou's border defense at the Ministry of Development.
Despite her unhurried demeanor, she is an exceptionally dependable individual who works tirelessly to protect others and provide a peaceful haven.
With effortless efficiency, she balances her work and personal life, steadily moving towards her ultimate goal: creating a future of true safety for all.`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_taohua_UI.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Taoqi.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Taoqi_Model.png"
    },
    asension: {
        charaAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "4"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "12"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "12"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "4"
        },
        {
            item: "Gold-Dissolving Feather",
            id: 5,
            value: "46"
        },
        {
            item: "Iris",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "LF Whisperin Core",
            id: 1,
            value: "25"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "28"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "40"
        },
        {
            item: "FF Whisperin Core",
            id: 4,
            value: "57"
        },
        {
            item: "Waveworn Residue 210",
            id: 5,
            value: "25"
        },
        {
            item: "Waveworn Residue 226",
            id: 6,
            value: "28"
        },
        {
            item: "Waveworn Residue 235",
            id: 7,
            value: "55"
        },
        {
            item: "Waveworn Residue 239",
            id: 8,
            value: "67"
        },
        {
            item: "Unwarranted Feather",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 716,
        base_atk: 18,
        base_def: 128,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 1.12,
        bonus_atk: 0,
        bonus_def: 1.152,
        bonus_heal: 0,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Concealed Edge',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Taoqi performs up to 4 continuous attacks, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Taoqi consumes Stamina and enters <span class="Highlight">Rocksteady Defense</span> state.\n
                <div class="gap"></div>
                <span class="Title">Rocksteady Defense</span>\n
                Taoqi's damage taken is reduced by {0};\n
                -When Taoqi is attacked during <span class="Highlight">Rocksteady Defense</span>, she will cat <span class="Highlight">Strategic Parry</span>;\n
                -<span class="Highlight">Strategic Parry</span> is automatically cast after <span class="Highlight">Rocksteady Defense</span> lasts for {1}s;\n
                -If Taoqi is attacked when casting Resonance Skill <span class="Highlight">Rocksteady Shield</span>, <span class="Highlight">Strategic Parry</span> is automatically cast.\n
                <div class="gap"></div>
                <span class="Title">Strategic Parry</span>\n
                Taoqi attacks the target, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Taoqi consumes Stamina to perform a Mid-Air Plunging Attack, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: ["35%", "3"],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["45.34%", "49.06%", "52.78%", "57.99%", "61.7%", "65.98%", "71.93%", "77.88%", "83.83%", "90.15%", "97.58%", "105.02%", "112.45%", "119.89%", "127.32%", "134.76%", "142.2%", "149.63%", "157.07%", "164.5%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["42.67%", "46.17%", "49.67%", "54.57%", "58.07%", "62.09%", "67.69%", "73.29%", "78.89%", "84.84%", "91.84%", "98.83%", "105.83%", "112.83%", "119.83%", "126.82%", "133.82%", "140.82%", "147.82%", "154.82%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["56%", "60.6%", "65.19%", "71.62%", "76.21%", "81.49%", "88.84%", "96.18%", "103.53%", "111.34%", "120.52%", "129.71%", "138.89%", "148.07%", "157.26%", "166.44%", "175.63%", "184.81%", "193.99%", "203.18%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["136%", "147.16%", "158.31%", "173.92%", "185.07%", "197.9%", "215.74%", "233.58%", "251.43%", "270.39%", "292.69%", "314.99%", "337.3%", "359.6%", "381.91%", "404.21%", "426.51%", "448.82%", "471.12%", "493.43%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["110.84%", "119.93%", "129.02%", "141.75%", "150.84%", "161.29%", "175.83%", "190.37%", "204.91%", "220.37%", "238.54%", "256.72%", "274.9%", "293.08%", "311.25%", "329.43%", "347.61%", "365.79%", "383.97%", "402.14%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Heavy Attack Damage Reduction",
                        skillDetailNum: [{
                            values: ["35%", "35%", "35%", "35%", "35%", "35%", "35%", "35%", "35%", "35%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Strategic Parry Damage",
                        skillDetailNum: [{
                            values: ["39.59%", "42.84%", "46.08%", "50.63%", "53.87%", "57.61%", "62.8%", "67.99%", "73.19%", "78.7%", "85.2%", "91.69%", "98.18%", "104.67%", "111.16%", "117.66%", "124.15%", "130.64%", "137.13%", "143.62%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        skillDetailNum: [{
                            values: ["62%", "67.09%", "72.17%", "79.29%", "84.37%", "90.22%", "98.36%", "106.49%", "114.62%", "123.27%", "133.44%", "143.6%", "153.77%", "163.94%", "174.11%", "184.28%", "194.44%", "204.61%", "214.78%", "224.95%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["125%", "135.25%", "145.5%", "159.85%", "170.1%", "181.89%", "198.29%", "214.69%", "231.09%", "248.52%", "269.02%", "289.52%", "310.02%", "330.52%", "351.02%", "371.52%", "392.02%", "412.52%", "433.02%", "453.52%"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Heavy Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Mid-Air Attack Stamina Cost",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 11
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Fortified Defense',
                skillDescription: `Taoqi deals <span class="Dark">Havoc DMG</span> to surrounding targets, generating {0} Rocksteady Shield and restoring HP to Taoqi.
                If attacked when casting <span class="Highlight">Fortified Defense</span>, <span class="Highlight">Strategic Parry</span> will be automatically cast.
                <div class="gap"></div>
                <span class="Title">Rocksteady Shield</span>
                When the active character is attacked, {1} <span class="Highlight">Rocksteady Shield</span> is consumed to reduce the damage taken.`,
                skillDetailNum: ["3", "1"],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["67.86%", "73.43%", "78.99%", "86.78%", "92.35%", "98.75%", "107.65%", "116.55%", "125.46%", "134.92%", "146.05%", "157.18%", "168.3%", "179.43%", "190.56%", "201.69%", "212.82%", "223.95%", "235.08%", "246.21%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "HP recovery",
                        skillDetailNum: [{
                            values: ["950+45.00%", "1064+46.80%", "1187+48.60%", "1330+51.30%", "1501+54.90%", "1662+58.50%", "1691+65.25%", "1729+72.90%", "1757+81.00%", "1805+94.50%", "1953+102.30%", "2102+110.09%", "2251+117.89%", "2400+125.68%", "2549+133.48%", "2698+141.27%", "2847+149.07%", "2996+156.86%", "3145+164.66%", "3293+172.45%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Rocksteady Shield Damage Reduction",
                        skillDetailNum: [{
                            values: ["15%", "15%", "15%", "15%", "15%", "15%", "15%", "15%", "15%", "15%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 5
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Unmovable',
                skillDescription: `Launch an attack based on Taoqi's DEF on the target, dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: ["2"],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["226.2%", "244.75%", "263.3%", "289.27%", "307.82%", "329.15%", "358.83%", "388.5%", "418.18%", "449.71%", "486.81%", "523.91%", "561%", "598.1%", "635.2%", "672.29%", "709.39%", "746.49%", "783.58%", "820.68%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 4
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Defense Formation',
                skillDescription: `Attack the target, dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["105%", "113.61%", "122.22%", "134.28%", "142.89%", "152.79%", "166.57%", "180.34%", "194.12%", "208.76%", "225.98%", "243.2%", "260.42%", "277.64%", "294.86%", "312.08%", "329.3%", "346.52%", "363.74%", "380.96%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Iron Will',
                skillDescription: `The next character (or other characters on a nearby team that activates an Outro Skill) gains {0} Resonance Skill DMG Deepen for {1}s, or until the character is switched off field.`,
                skillDetailNum: ["38%", "14"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Power Shift',
                skillDescription: `<span class="Title">Timed Counters</span>\n
                When carrying "Resolving Caliber", use <span class="Highlight">Basic Attack</span> after <span class="Highlight">Heavy Attack: Strategic Parry</span> or <span class="Highlight">Intro Skill: Defense Formation</span> to cast <span class="Highlight">Timed Counters</span>, performing up to 3 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>, considered as Basic Attack damage.\n
                <span class="Highlight">Timed Counters</span> consume {0} "Resolving Caliber" upon hitting an enemy to grant a shield.\n
                After casting the Intro Skill <span class="Highlight">Defense Formation</span>, using <span class="Highlight">Basic Attack</span> can directly cast <span class="Highlight">Timed Counters</span>.\n
                <div class="gap"></div>
                <span class="Title">Resolving Caliber</span>\n
                Taoqi can hold up to {1} Resolving Caliber.\n
                <span class="Highlight">Basic Attack 4</span> will consume all of Taoqi's <span class="Highlight">Rocksteady Shields</span> to obtain that many "Resolving Caliber".\n
                While <span class="Highlight">Rocksteady Shield</span> exists, when the on-field character is attacked, {2} <span class="Highlight">Rocksteady Shield</span> will be consumed, and "Resolving Caliber" is recovered.\n
                After <span class="Highlight">Rocksteady Shield</span> ends, all remaining <span class="Highlight">Rocksteady Shield</span> will be consumed to grant that many "Resolving Caliber".`,
                skillDetailNum: ["1", "3", "1"],
                multipliers: [
                    {
                        attributeName: "Timed Counters Part 1 Damage",
                        skillDetailNum: [{
                            values: ["43.36%", "46.92%", "50.47%", "55.45%", "59%", "63.09%", "68.78%", "74.47%", "80.16%", "86.2%", "93.31%", "100.42%", "107.53%", "114.64%", "121.75%", "128.86%", "135.97%", "143.08%", "150.19%", "157.3%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Timed Counters Part 2 Damage",
                        skillDetailNum: [{
                            values: ["55.8%", "60.38%", "64.95%", "71.36%", "75.93%", "81.19%", "88.51%", "95.83%", "103.16%", "110.93%", "120.08%", "129.23%", "138.38%", "147.54%", "156.69%", "165.84%", "174.99%", "184.14%", "193.29%", "202.44%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Timed Counters Part 3 Damage",
                        skillDetailNum: [{
                            values: ["73.14%", "79.14%", "85.14%", "93.53%", "99.53%", "106.43%", "116.02%", "125.62%", "135.22%", "145.41%", "157.41%", "169.4%", "181.39%", "193.39%", "205.38%", "217.38%", "229.37%", "241.37%", "253.36%", "265.36%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Timed Counters Part 1 Shield",
                        skillDetailNum: [{
                            values: ["300+11.25%", "336+11.7%", "375+12.15%", "420+12.82%", "474+13.72%", "525+14.62%", "534+16.31%", "546+18.22%", "555+20.25%", "570+23.62%", "617+25.57%", "664+27.52%", "711+29.47%", "758+31.42%", "805+33.36%", "852+35.31%", "899+37.26%", "946+39.21%", "993+41.16%", "1040+43.11%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Timed Counters Part 2 Shield",
                        skillDetailNum: [{
                            values: ["450+16.87%", "504+17.55%", "562+18.22%", "630+19.23%", "711+20.58%", "787+21.93%", "801+24.46%", "819+27.33%", "832+30.37%", "855+35.43%", "925+38.36%", "996+41.28%", "1066+44.2%", "1137+47.13%", "1207+50.05%", "1278+52.97%", "1348+55.9%", "1419+58.82%", "1489+61.74%", "1560+64.67%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Timed Counters Part 3 Shield",
                        skillDetailNum: [{
                            values: ["750+28.12%", "840+29.25%", "937+30.37%", "1050+32.06%", "1185+34.31%", "1312+36.56%", "1335+40.78%", "1365+45.56%", "1387+50.62%", "1425+59.06%", "1542+63.93%", "1660+68.8%", "1777+73.67%", "1895+78.55%", "2012+83.42%", "2130+88.29%", "2247+93.16%", "2365+98.03%", "2482+102.91%", "2600+107.78%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Shield Duration",
                        skillDetailNum: [{
                            values: ["18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18"]
                        }],
                        index: 7
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Steadfast Protection',
                skillDescription: `During the duration of the Resonance Skill <span class="Highlight">Rocksteady Shield</span>, the Character's DEF is increased by {0}.`,
                skillDetailNum: ["15%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Unyielding',
                skillDescription: `After <span class="Highlight">Heavy Attack: Strategic Parry</span> is successfully triggered, {0} Stamina is recovered.`,
                skillDetailNum: ["25"],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Essense of Tranquility",
            description: `Forte Circuit <span class="Highlight">Power Shift</span>'s Shield is increased by {0}.`,
            detailNum: ["40%"],
            sequenceBuffType: "Shield Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1601_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Silent Strength",
            description: `The Crit. Rate and Crit. DMG of Resonance Liberation <span class="Highlight">Unmovable</span> is increased by {0} and {1}, respectively.`,
            detailNum: ["20%", "20%"],
            sequenceBuffType: "Skill Critcal Buff",
            sequenceBuffAtrribute: ["Unmovable"],
            sequenceBuff: [20],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1601_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Keen-eyed Observer",
            description: `The duration of Resonance Skill <span class="Highlight">Rocksteady Shield</span> is extended to {0}s.`,
            detailNum: ["30"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1601_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Heavylifting Duty",
            description: `When Taoqi successfully triggers Heavy Attack <span class="Highlight">Strategic Parry</span>, she restores {0} HP and increases her DEF by {1} for {2}s. This can be triggered once every {3}s.`,
            detailNum: ["25%", "50%", "5", "15"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["DEF"],
            sequenceBuff: [50],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1601_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Benevolent Guardian",
            description: `The damage of Forte Circuit <span class="Highlight">Power Shift</span> is increased by {0}. When Forte Circuit <span class="Highlight">Power Shift</span> hits a target, restore {1} Resonance Energy.`,
            detailNum: ["50%", "20"],
            sequenceBuffType: "Forte Skill Buff",
            sequenceBuffAtrribute: ["Forte Circuit"],
            sequenceBuff: [50],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1601_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Defender of Peace",
            description: `The damage of Taoqi's Basic Attack and Heavy Attack is increased by {0} while the Shield granted by Resonance Skill <span class="Highlight">Rocksteady Shield</span> holds.`,
            detailNum: ["40%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Basic Attack Damage Bonus", "Heavy Attack Damage Bonus"],
            sequenceBuff: [40],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1601_UI.png"
        }
    ]
    },
    {
    name: "Danjin",
    charaId: 1602,
    rarity: {
        alt: "5 Star",
        img: rarity4Star
    },
    element: "Havoc",
    weapon: "Sword",
    bio: `A ranger straightforward in nature, with a strong sense of moral judgment.
She travels the lands refining her knowledge in an endeavour to seek the true meaning of good and evil.
Though perils lurk in every corner of her journey, she vowes to cleanse the world of villainy.`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_micai_UI.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Danjin.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Danjin_Full_Sprite.png"
    },
    asension: {
        charaAsension: [
        {
            item: "Crude Ring",
            id: 1,
            value: "4"
        },
        {
            item: "Basic Ring",
            id: 2,
            value: "12"
        },
        {
            item: "Improved Ring",
            id: 3,
            value: "12"
        },
        {
            item: "Tailered Ring",
            id: 4,
            value: "4"
        },
        {
            item: "Strife Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Belle Poppy",
            id: 6,
            value: "60"
        },
        {
            item: "Shell Credits",
            id: 7,
            value: "170,000"
        },
        ],
        forteAsension: [
        {
            item: "Crude Ring",
            id: 1,
            value: "25"
        },
        {
            item: "Basic Ring",
            id: 2,
            value: "28"
        },
        {
            item: "Improved Ring",
            id: 3,
            value: "40"
        },
        {
            item: "Tailered Ring",
            id: 4,
            value: "57"
        },
        {
            item: "Inert Metallic Drip",
            id: 5,
            value: "25"
        },
        {
            item: "Reactive Metallic Drip",
            id: 6,
            value: "28"
        },
        {
            item: "Polarized Metallic Drip",
            id: 7,
            value: "55"
        },
        {
            item: "Heterized Metallic Drip",
            id: 8,
            value: "67"
        },
        {
            item: "Unwarranted Feather",
            id: 9,
            value: "26"
        },
        {
            item: "Shell Credits",
            id: 10,
            value: "2,030,000"
        },
        ]
    },
    stats: {
        base_hp: 755,
        base_atk: 21,
        base_def: 94,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 100,
        bonus_ele: 1.12,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Execution',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Danjin performs up to 3 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Danjin combines her Forte with the blade in her hand and consumes Stamina to launch consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Consume Stamina to perform a Mid-air Plunging Attack, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to launch an attack, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter: Ruby Shades</span>\n
                After a successful Dodge Counter, Danjin can use the Resonance Skill <span class="Highlight">Crimson Fragment</span> to perform Resonance Skill: <span class="Highlight">Crimson Erosion</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["28.80%", "31.17%", "33.53%", "36.83%", "39.20%", "41.91%", "45.69%", "49.47%", "53.25%", "57.26%", "61.99%", "66.71%", "71.43%", "76.16%", "80.88%", "85.60%", "90.32%", "95.05%", "99.77%", "104.49%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["29.60%", "32.03%", "34.46%", "37.86%", "40.28%", "43.08%", "46.96%", "50.84%", "54.73%", "58.85%", "63.71%", "68.56%", "73.42%", "78.27%", "83.12%", "87.98%", "92.83%", "97.69%", "102.54%", "107.40%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["40.00%", "43.28%", "46.56%", "51.16%", "54.44%", "58.21%", "63.46%", "68.70%", "73.95%", "79.53%", "86.09%", "92.65%", "99.21%", "105.77%", "112.33%", "118.89%", "125.45%", "132.01%", "138.57%", "145.13%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["18.67%*3", "20.20%*3", "21.73%*3", "23.88%*3", "25.41%*3", "27.17%*3", "29.62%*3", "32.06%*3", "34.51%*3", "37.12%*3", "40.18%*3", "43.24%*3", "46.30%*3", "49.36%*3", "52.42%*3", "55.48%*3", "58.55%*3", "61.61%*3", "64.67%*3", "67.73%*3"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Mid-air Attack Damage",
                        skillDetailNum: [{
                            values: ["49.60%", "53.67%", "57.74%", "63.43%", "67.50%", "72.18%", "78.69%", "85.19%", "91.70%", "98.61%", "106.75%", "114.88%", "123.02%", "131.15%", "139.29%", "147.42%", "155.56%", "163.69%", "171.82%", "179.96%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["32.00%*3", "34.63%*3", "37.25%*3", "40.93%*3", "43.55%*3", "46.57%*3", "50.77%*3", "54.96%*3", "59.16%*3", "63.62%*3", "68.87%*3", "74.12%*3", "79.37%*3", "84.62%*3", "89.86%*3", "95.11%*3", "100.36%*3", "105.61%*3", "110.86%*3", "116.10%*3"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Heavy Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 8
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Crimson Fragment',
                skillDescription: `When casting <span class="Highlight">Incinerating Will</span>, each attack consumes {0} of Danjin's max HP. When Danjin's HP is less than {1}, this no longer consumes HP.\n
                <div class="gap"></div>
                <span class="Title">Carmine Gleam</span>\n
                Danjin attacks the target, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Crimson Erosion</span>\n
                After <span class="Highlight">Basic Attack 2</span>, <span class="Highlight">Dodge Counter</span> or Intro Skill <span class="Highlight">Vindication</span>, use <span class="Highlight">Resonance Skill</span> to perform up to 2 consecutive strikes, dealing <span class="Dark">Havoc DMG</span>.\n
                When <span class="Highlight">Crimson Erosion II</span> hits a target, apply <span class="Highlight">Incinerating Will</span> to it.\n
                <div class="gap"></div>
                <span class="Title">Incinerating Will</span>\n
                Danjin's damage dealt to targets marked with <span class="Highlight">Incinerating Will</span> is increased by {2}.\n
                <div class="gap"></div>
                <span class="Title">Sanguine Pulse</span>\n
                Use <span class="Highlight">Resonance Skill</span> after <span class="Highlight">Basic Attack 3</span> to perform up to 3 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: ["3%", "1%", "20%"],
                multipliers: [
                    {
                        attributeName: "Carmine Gleam Damage",
                        skillDetailNum: [{
                            values: ["19.20%*2", "20.78%*2", "22.35%*2", "24.56%*2", "26.13%*2", "27.94%*2", "30.46%*2", "32.98%*2", "35.50%*2", "38.18%*2", "41.33%*2", "44.47%*2", "47.62%*2", "50.77%*2", "53.92%*2", "57.07%*2", "60.22%*2", "63.37%*2", "66.52%*2", "69.66%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Crimson Erosion Part 1 Damage",
                        skillDetailNum: [{
                            values: ["32.40%*2", "35.06%*2", "37.72%*2", "41.44%*2", "44.09%*2", "47.15%*2", "51.40%*2", "55.65%*2", "59.90%*2", "64.42%*2", "69.73%*2", "75.05%*2", "80.36%*2", "85.67%*2", "90.99%*2", "96.30%*2", "101.61%*2", "106.93%*2", "112.24%*2", "117.56%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Crimson Erosion Part 2 Damage",
                        skillDetailNum: [{
                            values: ["30.00%*2", "32.46%*2", "34.92%*2", "38.37%*2", "40.83%*2", "43.66%*2", "47.59%*2", "51.53%*2", "55.47%*2", "59.65%*2", "64.57%*2", "69.49%*2", "74.41%*2", "79.33%*2", "84.25%*2", "89.17%*2", "94.09%*2", "99.01%*2", "103.93%*2", "108.85%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Sanguine Pulse Part 1 Damage",
                        skillDetailNum: [{
                            values: ["28.20%*2", "30.52%*2", "32.83%*2", "36.07%*2", "38.38%*2", "41.04%*2", "44.74%*2", "48.44%*2", "52.14%*2", "56.07%*2", "60.69%*2", "65.32%*2", "69.94%*2", "74.57%*2", "79.19%*2", "83.82%*2", "88.44%*2", "93.07%*2", "97.69%*2", "102.32%*2"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Sanguine Pulse Part 2 Damage",
                        skillDetailNum: [{
                            values: ["21.60%*3", "23.38%*3", "25.15%*3", "27.63%*3", "29.40%*3", "31.44%*3", "34.27%*3", "37.10%*3", "39.94%*3", "42.95%*3", "46.49%*3", "50.03%*3", "53.58%*3", "57.12%*3", "60.66%*3", "64.20%*3", "67.74%*3", "71.29%*3", "74.83%*3", "78.37%*3"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Sanguine Pulse Part 3 Damage",
                        skillDetailNum: [{
                            values: ["32.40%*3", "35.06%*3", "37.72%*3", "41.44%*3", "44.09%*3", "47.15%*3", "51.40%*3", "55.65%*3", "59.90%*3", "64.42%*3", "69.73%*3", "75.05%*3", "80.36%*3", "85.67%*3", "90.99%*3", "96.30%*3", "101.61%*3", "106.93%*3", "112.24%*3", "117.56%*3"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Incinerating Will Duration",
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
                        }],
                        index: 8
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Crimson Bloom',
                skillDescription: `Danjin's anger intensifies as she frantically swings her dual blades, performing multiple rapid consecutive attacks, and {0} Scarlet Burst attack(s), dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: ["1"],
                multipliers: [
                    {
                        attributeName: "Continuous Attack Damage",
                        skillDetailNum: [{
                            values: ["24.69%*8", "26.72%*8", "28.74%*8", "31.58%*8", "33.60%*8", "35.93%*8", "39.17%*8", "42.41%*8", "45.64%*8", "49.09%*8", "53.13%*8", "57.18%*8", "61.23%*8", "65.28%*8", "69.33%*8", "73.38%*8", "77.43%*8", "81.48%*8", "85.52%*8", "89.57%*8"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Scarlet Burst Damage",
                        skillDetailNum: [{
                            values: ["197.50%", "213.70%", "229.89%", "252.57%", "268.76%", "287.39%", "313.30%", "339.21%", "365.12%", "392.65%", "425.04%", "457.43%", "489.82%", "522.21%", "554.60%", "586.99%", "619.38%", "651.77%", "684.16%", "716.55%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 5
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Vindiction',
                skillDescription: `With unwavering determination, Danjin unleashes a strike, dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["25.00%*4", "27.05%*4", "29.10%*4", "31.97%*4", "34.02%*4", "36.38%*4", "39.66%*4", "42.94%*4", "46.22%*4", "49.71%*4", "53.81%*4", "57.91%*4", "62.01%*4", "66.11%*4", "70.21%*4", "74.31%*4", "78.41%*4", "82.51%*4", "86.61%*4", "90.71%*4"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Duality',
                skillDescription: `The next character (or other characters on a nearby team that activates an Outro Skill) gains {0} Havoc DMG Deepen for {1}s, or until the character is switched off field.`,
                skillDetailNum: ["23%", "14"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Serene Vigil',
                skillDescription: `<span class="Title">Heavy Attack: Chaoscleave</span>\n
                After accumulating {0} "Ruby Blossom", long press <span class="Highlight">Basic Attack</span> to consume all "Ruby Blossom" to cast <span class="Highlight">Chaoscleave</span>, dealing <span class="Dark">Havoc DMG</span> considered as Heavy Attack damage, and restore HP for Danjin.\n
                If current "Ruby Blossom" reaches over {1}, this skill consumes {2} "Ruby Blossom" to increase the damage multiplier of <span class="Highlight">Chaoscleave</span> and <span class="Highlight">Scatterbloom</span> performed this time.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack: Scatterbloom</span>\n
                Use <span class="Highlight">Basic Attack</span> after Heavy Attack <span class="Highlight">Chaoscleave</span> to cast <span class="Highlight">Shatter</span> to attack the target, dealing <span class="Dark">Havoc DMG</span>, considered as Heavy Attack damage.\n
                <div class="gap"></div>
                <span class="Title">Ruby Blossom</span>\n
                Danjin obtains "Ruby Blossom" when using Resonance Skill <span class="Highlight">Crimson Fragment</span>.`,
                skillDetailNum: ["60", "120", "120", "120"],
                multipliers: [
                    {
                        attributeName: "Chaoscleave Damage",
                        skillDetailNum: [{
                            values: ["30.00%*7", "32.46%*7", "34.92%*7", "38.37%*7", "40.83%*7", "43.66%*7", "47.59%*7", "51.53%*7", "55.47%*7", "59.65%*7", "64.57%*7", "69.49%*7", "74.41%*7", "79.33%*7", "84.25%*7", "89.17%*7", "94.09%*7", "99.01%*7", "103.93%*7", "108.85%*7"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Scatterbloom Damage",
                        skillDetailNum: [{
                            values: ["90.00%", "97.38%", "104.76%", "115.10%", "122.48%", "130.96%", "142.77%", "154.58%", "166.39%", "178.93%", "193.69%", "208.45%", "223.21%", "237.97%", "252.73%", "267.49%", "282.25%", "297.01%", "311.77%", "326.53%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Full Energy Chaoscleave Damage",
                        skillDetailNum: [{
                            values: ["72.00%*7", "77.91%*7", "83.81%*7", "92.08%*7", "97.98%*7", "104.77%*7", "114.22%*7", "123.66%*7", "133.11%*7", "143.15%*7", "154.96%*7", "166.76%*7", "178.57%*7", "190.38%*7", "202.19%*7", "214.00%*7", "225.80%*7", "237.61%*7", "249.42%*7", "261.23%*7"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Full Energy Scatterbloom Damage",
                        skillDetailNum: [{
                            values: ["216.00%", "233.72%", "251.43%", "276.23%", "293.94%", "314.31%", "342.65%", "370.98%", "399.32%", "429.43%", "464.86%", "500.28%", "535.71%", "571.13%", "606.55%", "641.98%", "677.40%", "712.83%", "748.25%", "783.67%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Chaoscleave Healing",
                        skillDetailNum: [{
                            values: ["36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Chaoscleave Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Crimson Light',
                skillDescription: `Damage of Resonance Skill <span class="Highlight">Crimson Erosion</span> triggered by <span class="Highlight">Dodge Counter: Ruby Shades</span> is increased by {0}. The HP cost and stacks of "Ruby Blossom" recovered are doubled.`,
                skillDetailNum: ["20%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Overflow',
                skillDescription: `After casting the Resonance Skill <span class="Highlight">Sanguine Pulse</span>, Danjin's Heavy Attack damage is increased by {0} for {1}s.`,
                skillDetailNum: ["30%", "5"],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Crimson Heart of Justice",
            description: `When Danjin attacks a target with Resonance Skill's <span class="Highlight">Incinerating Will</span>, her ATK is increased by {0} for {1}s, stacking up to {2} times. Danjin loses {3} stacks of this effect each time she takes damage.`,
            detailNum: ["5%", "6", "6", "1"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [5],
            stacks: 6,
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1602_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Dusted Mirror",
            description: `When Danjin attacks a target with Resonance Skill's <span class="Highlight">Incinerating Will</span>, her damage dealt is increased by {0}.`,
            detailNum: ["20%"],
            sequenceBuffType: "Skill Damage Buff",
            sequenceBuffAtrribute: ["Damage Increse"],
            sequenceBuff: [20],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1602_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Fleeting Blossom",
            description: `Resonance Liberation DMG Bonus is increased by {0}.`,
            detailNum: ["30%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonance Liberation Damage Bonus"],
            sequenceBuff: [30],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1602_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Solitary Carnation",
            description: `When Danjin has more than {0} "Ruby Blossom", her Crit. Rate is increased by {1}.
This effect lasts until the end of <span class="Highlight">Heavy Attack: Scatterbloom</span> even after all "Ruby Blossom" is consumed when casting <span class="Highlight">Heavy Attack: Chaoscleave</span>.`,
            detailNum: ["60", "15%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Crit. Rate"],
            sequenceBuff: [15],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1602_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Reigning Blade",
            description: `Danjin's Havoc DMG Bonus is increased by {0}, and further increased by another {2} when her HP is lower than {1}.`,
            detailNum: ["15%", "60%", "15%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Havoc Damage Bonus"],
            sequenceBuff: [15, 15],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1602_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Bloodied Jade",
            description: `Heavy Attack <span class="Highlight">Chaoscleave</span> increases the ATK of all team members by {0} for {1}s.`,
            detailNum: ["20%", "20"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [20],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1602_UI.png"
        }
    ]
    }
]