import { WWCharacter } from "../WWCharacter";

const rarity4Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_4_Stars.webp";

export const Sanhua: WWCharacter = {
    name: "Sanhua",
    charaId: 1102,
    rarity: {
        alt: "4 Star",
        img: rarity4Star
    },
    element: "Glacio",
    weapon: "Sword",
    bio: `A loyal and reliable guard for Jinhsi, Sanhua is composed and reserved.Sanhua perceives a world distinctly different from that in the eyes of others, and her body temperature is below normal.
Her Forte allows her to cool the surrounding air and conjure snow.
To maintain emotional stability and prevent Overclocking, Sanhua finds solace in the art of swordplay.
This allows her to master her Forte with graceful ease and alleviates the burden on her body.`,
    images: {
        portrait: "https://wuthering-waves-assets.pages.dev/portraits/T_IconRole_Pile_shanhua_UI.png",
        icon_sq: "https://wuthering-waves-assets.pages.dev/icons_character/Sanhua.png",
        model: "https://wuthering-waves-assets.pages.dev/models/Sanhua_Model.png"
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill1.webp",
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
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["24.50%", "26.51%", "28.52%", "31.34%", "33.34%", "35.65%", "38.87%", "42.08%", "45.30%", "48.71%", "52.73%", "56.75%", "60.77%", "64.79%", "68.80%", "72.82%", "76.84%", "80.86%", "84.88%", "88.89%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["37.10%", "40.15%", "43.19%", "47.45%", "50.49%", "53.99%", "58.86%", "63.72%", "68.59%", "73.76%", "79.85%", "85.93%", "92.02%", "98.10%", "104.19%", "110.27%", "116.35%", "122.44%", "128.52%", "134.61%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["10.85%*4", "11.74%*4", "12.63%*4", "13.88%*4", "14.77%*4", "15.79%*4", "17.22%*4", "18.64%*4", "20.06%*4", "21.58%*4", "23.36%*4", "25.13%*4", "26.91%*4", "28.69%*4", "30.47%*4", "32.25%*4", "34.03%*4", "35.81%*4", "37.59%*4", "39.37%*4"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["19.95%*2", "21.59%*2", "23.23%*2", "25.52%*2", "27.15%*2", "29.03%*2", "31.65%*2", "34.27%*2", "36.89%*2", "39.67%*2", "42.94%*2", "46.21%*2", "49.48%*2", "52.75%*2", "56.03%*2", "59.30%*2", "62.57%*2", "65.84%*2", "69.11%*2", "72.39%*2"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Part 5 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["117.60%", "127.25%", "136.89%", "150.39%", "160.04%", "171.12%", "186.55%", "201.98%", "217.41%", "233.81%", "253.09%", "272.38%", "291.66%", "310.95%", "330.24%", "349.52%", "368.81%", "388.10%", "407.38%", "426.67%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Heavy Attack Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["11.20%*5", "12.12%*5", "13.04%*5", "14.33%*5", "15.25%*5", "16.30%*5", "17.77%*5", "19.24%*5", "20.71%*5", "22.27%*5", "24.11%*5", "25.95%*5", "27.78%*5", "29.62%*5", "31.46%*5", "33.29%*5", "35.13%*5", "36.97%*5", "38.80%*5", "40.64%*5"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Mid-air Attack Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["43.40%", "46.96%", "50.52%", "55.50%", "59.06%", "63.16%", "68.85%", "74.54%", "80.24%", "86.29%", "93.41%", "100.52%", "107.64%", "114.76%", "121.88%", "128.99%", "136.11%", "143.23%", "150.35%", "157.46%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Dodge Counter Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["84.00%", "90.89%", "97.78%", "107.42%", "114.31%", "122.23%", "133.25%", "144.27%", "155.30%", "167.01%", "180.78%", "194.56%", "208.33%", "222.11%", "235.89%", "249.66%", "263.44%", "277.21%", "290.99%", "304.77%"]
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
                        attributeName: "Mid-air Attack Stamina Cost",
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillSanhua2.webp",
                skillName: 'Eternal Frost',
                skillDescription: `Sanhua sends an air blade to create {0} "Ice Prism" cross the ground, dealing <span class="Ice">Glacio DMG</span>.`,
                skillDetailNum: ["1"],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["181.00%", "195.85%", "210.69%", "231.47%", "246.31%", "263.38%", "287.13%", "310.87%", "334.62%", "359.85%", "389.54%", "419.22%", "448.90%", "478.59%", "508.27%", "537.96%", "567.64%", "597.32%", "627.01%", "656.69%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
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
                typeName: 'Resonance Liveration',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillSanhua3.webp",
                skillName: 'Glacial Gaze',
                skillDescription: `Sanhua deals <span class="Ice">Glacio DMG</span> and creates {0} "Glacier".`,
                skillDetailNum: ["1", "5"],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "Liberation",
                        skillDetailNum: [{
                            values: ["407.16%", "440.55%", "473.94%", "520.68%", "554.07%", "592.46%", "645.88%", "699.30%", "752.72%", "809.48%", "876.25%", "943.03%", "1009.80%", "1076.58%", "1143.35%", "1210.13%", "1276.90%", "1343.67%", "1410.45%", "1477.22%"]
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
                            values: ["100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100"]
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillSanhua5.webp",
                skillName: 'Freezing Thorns',
                skillDescription: `Sanhua swings her blade downward and creates 1 "Ice Thorn", dealing <span class="Ice">Glacio DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "",
                        skillDetailNum: [{
                            values: ["70.00%", "75.74%", "81.48%", "89.52%", "95.26%", "101.86%", "111.05%", "120.23%", "129.41%", "139.17%", "150.65%", "162.13%", "173.61%", "185.09%", "196.57%", "208.05%", "219.53%", "231.01%", "242.49%", "253.97%"]
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
                skillName: 'Silversnow',
                skillDescription: `The next character (or other characters on a nearby team that activates an Outro Skill) gains {0} Basic Attack DMG Deepen for {1}s, or until the character is switched off field.`,
                skillDetailNum: ["38%", "14"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillSanhua4.webp",
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
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["93.70%*2", "101.39%*2", "109.07%*2", "119.83%*2", "127.51%*2", "136.35%*2", "148.64%*2", "160.93%*2", "173.23%*2", "186.29%*2", "201.66%*2", "217.02%*2", "232.39%*2", "247.76%*2", "263.12%*2", "278.49%*2", "293.86%*2", "309.22%*2", "324.59%*2", "339.96%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Glacier Burst Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["70.00%", "75.74%", "81.48%", "89.52%", "95.26%", "101.86%", "111.05%", "120.23%", "129.41%", "139.17%", "150.65%", "162.13%", "173.61%", "185.09%", "196.57%", "208.05%", "219.53%", "231.01%", "242.49%", "253.97%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Ice Prism Burst Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["40.00%", "43.28%", "46.56%", "51.16%", "54.44%", "58.21%", "63.46%", "68.70%", "73.95%", "79.53%", "86.09%", "92.65%", "99.21%", "105.77%", "112.33%", "118.89%", "125.45%", "132.01%", "138.57%", "145.13%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Ice Thorn Burst Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["30.00%", "32.46%", "34.92%", "38.37%", "40.83%", "43.66%", "47.59%", "51.53%", "55.47%", "59.65%", "64.57%", "69.49%", "74.41%", "79.33%", "84.25%", "89.17%", "94.09%", "99.01%", "103.93%", "108.85%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Clarity Duration",
                        type: "",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Glacier Duration",
                        type: "",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Ice Prism Duration",
                        type: "",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Ice Thorn Duration",
                        type: "",
                        skillDetailNum: [{
                            values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Burst Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Glacier Burst Con. Damage Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Ice Prism Burst Con. Damage Regen",
                        type: "",
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
            sequenceBuff: [],
            sequenceBuffAtrribute: [""],
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
}