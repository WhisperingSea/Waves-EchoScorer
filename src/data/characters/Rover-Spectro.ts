const rarity4Star = "https://sohansc13.github.io/wuthering-waves-assets/images/icon_stars/Icon_4_Stars.webp";
const rarity5Star = "https://sohansc13.github.io/wuthering-waves-assets/images/icon_stars/Icon_5_Stars.webp";

export const RoverSpectro = {
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
    };