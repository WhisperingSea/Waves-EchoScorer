import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev//icon_stars/Icon_5_Stars.webp";

export const RoverHavoc: WWCharacter = {
    name: "Rover-Havoc",
    charaId: 1605,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Havoc",
    weapon: "Sword",
    bio: `Awakened with an unknown past, Rover embarks on a journey to uncover the truths.
As secrets are unveiled, Rover establishes deeper connections with the world.`,
    images: {
            portrait: "https://wuthering-waves-assets.pages.dev//portraits/T_IconRole_Pile_zhujue_UI.png",
            icon_sq: "https://wuthering-waves-assets.pages.dev//icons_character/RoverHavocFemale.png",
            model: "https://wuthering-waves-assets.pages.dev//models/Female_Rover_Model.png"
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill1.webp",
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
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["28.50%", "30.84%", "33.18%", "36.45%", "38.79%", "41.48%", "45.21%", "48.95%", "52.69%", "56.67%", "61.34%", "66.01%", "70.69%", "75.36%", "80.04%", "84.71%", "89.38%", "94.06%", "98.73%", "103.41%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["28.50%*2", "30.84%*2", "33.18%*2", "36.45%*2", "38.79%*2", "41.48%*2", "45.21%*2", "48.95%*2", "52.69%*2", "56.67%*2", "61.34%*2", "66.01%*2", "70.69%*2", "75.36%*2", "80.04%*2", "84.71%*2", "89.38%*2", "94.06%*2", "98.73%*2", "103.41%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["42.75%", "46.26%", "49.77%", "54.67%", "58.18%", "62.21%", "67.82%", "73.43%", "79.04%", "85.00%", "92.01%", "99.02%", "106.03%", "113.04%", "120.05%", "127.06%", "134.07%", "141.08%", "148.10%", "155.11%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["20.27%*3", "21.93%*3", "23.60%*3", "25.92%*3", "27.58%*3", "29.50%*3", "32.15%*3", "34.81%*3", "37.47%*3", "40.30%*3", "43.62%*3", "46.94%*3", "50.27%*3", "53.59%*3", "56.92%*3", "60.24%*3", "63.56%*3", "66.89%*3", "70.21%*3", "73.53%*3"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Part 5 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["47.50%*2", "51.40%*2", "55.29%*2", "60.75%*2", "64.64%*2", "69.12%*2", "75.35%*2", "81.59%*2", "87.82%*2", "94.44%*2", "102.23%*2", "110.02%*2", "117.81%*2", "125.60%*2", "133.39%*2", "141.18%*2", "148.97%*2", "156.76%*2", "164.55%*2", "172.34%*2"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Heavy Attack Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["48.00%", "51.94%", "55.88%", "61.39%", "65.32%", "69.85%", "76.15%", "82.44%", "88.74%", "95.43%", "103.31%", "111.18%", "119.05%", "126.92%", "134.79%", "142.67%", "150.54%", "158.41%", "166.28%", "174.15%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["58.90%", "63.73%", "68.56%", "75.33%", "80.16%", "85.71%", "93.44%", "101.17%", "108.89%", "117.10%", "126.76%", "136.42%", "146.08%", "155.74%", "165.40%", "175.06%", "184.72%", "194.38%", "204.04%", "213.70%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Dodge Counter Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["90.25%", "97.66%", "105.06%", "115.42%", "122.82%", "131.33%", "143.17%", "155.01%", "166.85%", "179.43%", "194.23%", "209.03%", "223.83%", "238.64%", "253.44%", "268.24%", "283.04%", "297.84%", "312.64%", "327.44%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Heavy Attack Stamina Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Mid-Air Attack Stamina Cost",
                        type: "",
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillRoverHavoc2.webp",
                skillName: 'Wingblade',
                skillDescription: `Transforms sound into feathers, dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["144.00%*2", "155.81%*2", "167.62%*2", "184.15%*2", "195.96%*2", "209.54%*2", "228.43%*2", "247.32%*2", "266.22%*2", "286.29%*2", "309.91%*2", "333.52%*2", "357.14%*2", "380.76%*2", "404.37%*2", "427.99%*2", "451.60%*2", "475.22%*2", "498.84%*2", "522.45%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Con. Energy Regen",
                        type: "",
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillRoverHavoc3.webp",
                skillName: 'Deadening Abyss',
                skillDescription: `Gather the echoes between Rover's palms to attack a target, dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "Liberation",
                        skillDetailNum: [{
                            values: ["765.00%", "827.73%", "890.46%", "978.29%", "1041.02%", "1113.16%", "1213.52%", "1313.89%", "1414.26%", "1520.90%", "1646.36%", "1771.82%", "1897.28%", "2022.74%", "2148.20%", "2273.66%", "2399.12%", "2524.58%", "2650.04%", "2775.50%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Res. Energy Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Con. Energy Regen",
                        type: "",
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillRoverHavoc5.webp",
                skillName: 'Instant of Annihilation',
                skillDescription: `Attack the target, dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "",
                        skillDetailNum: [{
                            values: ["100.00%", "108.20%", "116.40%", "127.88%", "136.08%", "145.51%", "158.63%", "171.75%", "184.87%", "198.81%", "215.21%", "231.61%", "248.01%", "264.41%", "280.81%", "297.21%", "313.61%", "330.01%", "346.41%", "362.81%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        type: "",
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillRoverHavoc4.webp",
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
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["114.75%", "124.16%", "133.57%", "146.75%", "156.16%", "166.98%", "182.03%", "197.09%", "212.14%", "228.14%", "246.96%", "265.78%", "284.60%", "303.42%", "322.23%", "341.05%", "359.87%", "378.69%", "397.51%", "416.33%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Umbra: Basic Attack Part 1 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["28.35%", "30.68%", "33.00%", "36.26%", "38.58%", "41.26%", "44.98%", "48.70%", "52.42%", "56.37%", "61.02%", "65.67%", "70.32%", "74.97%", "79.61%", "84.26%", "88.91%", "93.56%", "98.21%", "102.86%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Umbra: Basic Attack Part 2 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["47.25%", "51.13%", "55.00%", "60.43%", "64.30%", "68.76%", "74.96%", "81.16%", "87.36%", "93.94%", "101.69%", "109.44%", "117.19%", "124.94%", "132.69%", "140.44%", "148.19%", "155.93%", "163.68%", "171.43%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Umbra: Basic Attack Part 3 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["78.30%", "84.73%", "91.15%", "100.14%", "106.56%", "113.94%", "124.21%", "134.49%", "144.76%", "155.67%", "168.51%", "181.36%", "194.20%", "207.04%", "219.88%", "232.72%", "245.56%", "258.40%", "271.24%", "284.09%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Umbra: Basic Attack Part 4 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["18.68%*3+56.03%", "20.21%*3+60.62%", "21.74%*3+65.22%", "23.89%*3+71.65%", "25.42%*3+76.24%", "27.18%*3+81.53%", "29.63%*3+88.88%", "32.08%*3+96.23%", "34.53%*3+103.58%", "37.13%*3+111.39%", "40.20%*3+120.58%", "43.26%*3+129.76%", "46.32%*3+138.95%", "49.38%*3+148.14%", "52.45%*3+157.33%", "55.51%*3+166.52%", "58.57%*3+175.71%", "61.63%*3+184.89%", "64.70%*3+194.08%", "67.76%*3+203.27%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Umbra: Basic Attack Part 5 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["14.35%*4+57.38%", "15.52%*4+62.08%", "16.70%*4+66.79%", "18.35%*4+73.38%", "19.52%*4+78.08%", "20.88%*4+83.49%", "22.76%*4+91.02%", "24.64%*4+98.55%", "26.52%*4+106.07%", "28.52%*4+114.07%", "30.87%*4+123.48%", "33.23%*4+132.89%", "35.58%*4+142.30%", "37.93%*4+151.71%", "40.28%*4+161.12%", "42.64%*4+170.53%", "44.99%*4+179.94%", "47.34%*4+189.35%", "49.69%*4+198.76%", "52.05%*4+208.17%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Umbra: Heavy Attack Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["64.80%", "70.12%", "75.43%", "82.87%", "88.18%", "94.30%", "102.80%", "111.30%", "119.80%", "128.83%", "139.46%", "150.09%", "160.72%", "171.34%", "181.97%", "192.60%", "203.22%", "213.85%", "224.48%", "235.11%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Umbra: Thwackblade Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["63.70%+5.00%*4", "68.93%+5.41%*4", "74.15%+5.82%*4", "81.46%+6.40%*4", "86.69%+6.81%*4", "92.69%+7.28%*4", "101.05%+7.94%*4", "109.41%+8.59%*4", "117.77%+9.25%*4", "126.65%+9.95%*4", "137.09%+10.77%*4", "147.54%+11.59%*4", "157.99%+12.41%*4", "168.43%+13.23%*4", "178.88%+14.05%*4", "189.33%+14.87%*4", "199.77%+15.69%*4", "210.22%+16.51%*4", "220.67%+17.33%*4", "231.11%+18.15%*4"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Umbra: Plunging Attack Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["62.00%", "67.09%", "72.17%", "79.29%", "84.37%", "90.22%", "98.36%", "106.49%", "114.62%", "123.27%", "133.44%", "143.60%", "153.77%", "163.94%", "174.11%", "184.28%", "194.44%", "204.61%", "214.78%", "224.95%"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Umbra: Dodge Counter Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["159.30%", "172.37%", "185.43%", "203.72%", "216.78%", "231.80%", "252.70%", "273.60%", "294.50%", "316.71%", "342.83%", "368.96%", "395.08%", "421.21%", "447.34%", "473.46%", "499.59%", "525.71%", "551.84%", "577.96%"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Umbra: Heavy Attack Stamina Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 11
                    }, {
                        attributeName: "Umbra: Plunging Stamina Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 12
                    }, {
                        attributeName: "Umbra: Lifetaker Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["139.00%*2+5.00%*4", "150.40%*2+5.41%*4", "161.80%*2+5.82%*4", "177.76%*2+6.40%*4", "189.16%*2+6.81%*4", "202.26%*2+7.28%*4", "220.50%*2+7.94%*4", "238.74%*2+8.59%*4", "256.97%*2+9.25%*4", "276.35%*2+9.95%*4", "299.15%*2+10.77%*4", "321.94%*2+11.59%*4", "344.74%*2+12.41%*4", "367.53%*2+13.23%*4", "390.33%*2+14.05%*4", "413.13%*2+14.87%*4", "435.92%*2+15.69%*4", "458.72%*2+16.51%*4", "481.51%*2+17.33%*4", "504.31%*2+18.15%*4"]
                        }],
                        index: 13
                    }, {
                        attributeName: "Umbra: Lifetaker Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 14
                    }, {
                        attributeName: "Lifetaker Con. Energy Regen",
                        type: "",
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
            sequenceBuff: [],
            sequenceBuffAtrribute: [""],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/icons/T_IconDevice_ZhujueDarkM2_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Surging Resonance",
            description: `In the <color=Highlight>Dark Surge</color> state, Basic Attack V restores HP equal to {0} of total HP lost on hit.`,
            detailNum: ["10%"],
            sequenceBuffType: "No Buff",
            sequenceBuff: [],
            sequenceBuffAtrribute: [""],
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
    }