import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://sohansc13.github.io/wuthering-waves-assets/images/icon_stars/Icon_5_Stars.webp";

export const Jiyan: WWCharacter = {
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
}