import { WWCharacter } from "../WWCharacter";

const rarity4Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_4_Stars.webp";

export const Chixia: WWCharacter = {
    name: "Chixia",
    charaId: 1202,
    rarity: {
        alt: "4 Star",
        img: rarity4Star
    },
    element: "Fusion",
    weapon: "Pistols",
    bio: `Chixia is a junior Jinzhou Patroller.
She roams Jinzhou City, leaving her fiery mark on every alley she stamps through.
As the starring hero among her community, Chixia is always ready for anyone in need.`,
    images: {
        portrait: "https://wuthering-waves-assets.pages.dev/portraits/T_IconRole_Pile_maxiaofang_UI.png",
        icon_sq: "https://wuthering-waves-assets.pages.dev/icons_character/Chixia.png",
        model: "https://wuthering-waves-assets.pages.dev/models/Chixia_Full_Sprite.png"
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill3.webp",
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
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["33.30%", "36.04%", "38.77%", "42.59%", "45.32%", "48.46%", "52.83%", "57.20%", "61.57%", "66.21%", "71.67%", "77.13%", "82.59%", "88.05%", "93.51%", "98.98%", "104.44%", "109.90%", "115.36%", "120.82%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["24.30%*2", "26.30%*2", "28.29%*2", "31.08%*2", "33.07%*2", "35.36%*2", "38.55%*2", "41.74%*2", "44.93%*2", "48.32%*2", "52.30%*2", "56.29%*2", "60.27%*2", "64.26%*2", "68.24%*2", "72.23%*2", "76.21%*2", "80.20%*2", "84.18%*2", "88.17%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["16.88%*4", "18.26%*4", "19.65%*4", "21.58%*4", "22.97%*4", "24.56%*4", "26.77%*4", "28.99%*4", "31.20%*4", "33.55%*4", "36.32%*4", "39.09%*4", "41.86%*4", "44.62%*4", "47.39%*4", "50.16%*4", "52.93%*4", "55.69%*4", "58.46%*4", "61.23%*4"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["117.00%", "126.60%", "136.19%", "149.62%", "159.22%", "170.25%", "185.60%", "200.95%", "216.30%", "232.61%", "251.80%", "270.99%", "290.18%", "309.36%", "328.55%", "347.74%", "366.93%", "386.12%", "405.30%", "424.49%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Heavy Attack Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["18.00%", "19.48%", "20.96%", "23.02%", "24.50%", "26.20%", "28.56%", "30.92%", "33.28%", "35.79%", "38.74%", "41.69%", "44.65%", "47.60%", "50.55%", "53.50%", "56.45%", "59.41%", "62.36%", "65.31%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Full Charge Heavy Attack Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["40.50%", "43.83%", "47.15%", "51.80%", "55.12%", "58.94%", "64.25%", "69.56%", "74.88%", "80.52%", "87.17%", "93.81%", "100.45%", "107.09%", "113.73%", "120.38%", "127.02%", "133.66%", "140.30%", "146.94%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["16.20%", "17.53%", "18.86%", "20.72%", "22.05%", "23.58%", "25.70%", "27.83%", "29.95%", "32.21%", "34.87%", "37.53%", "40.18%", "42.84%", "45.50%", "48.15%", "50.81%", "53.47%", "56.12%", "58.78%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Dodge Counter Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["171.00%", "185.03%", "199.05%", "218.68%", "232.70%", "248.83%", "271.26%", "293.70%", "316.13%", "339.97%", "368.01%", "396.06%", "424.10%", "452.15%", "480.19%", "508.23%", "536.28%", "564.32%", "592.37%", "620.41%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        type: "",
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillChixia2.webp",
                skillName: 'Whizzing Fight Spirit',
                skillDescription: `Chixia unleashes a flurry of shots, dealing <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Highlight">Whizzing Fight Spirit</span> has 2 initial charges.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["16.00%*8", "17.32%*8", "18.63%*8", "20.47%*8", "21.78%*8", "23.29%*8", "25.39%*8", "27.48%*8", "29.58%*8", "31.81%*8", "34.44%*8", "37.06%*8", "39.69%*8", "42.31%*8", "44.93%*8", "47.56%*8", "50.18%*8", "52.81%*8", "55.43%*8", "58.05%*8"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Con. Energy Regen",
                        type: "",
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillChixia3.webp",
                skillName: 'Blazing Flames',
                skillDescription: `Chixia fires up fast shots at nearby enemies, dealing <span class="Fire">Fusion DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "Liberation",
                        skillDetailNum: [{
                            values: ["480.00%+29.10%*11", "519.36%+31.48%*11", "558.72%+33.87%*11", "613.83%+37.21%*11", "653.19%+39.59%*11", "698.45%+42.34%*11", "761.43%+46.15%*11", "824.40%+49.97%*11", "887.38%+53.79%*11", "954.29%+57.84%*11", "1033.01%+62.61%*11", "1111.73%+67.38%*11", "1190.45%+72.15%*11", "1269.17%+76.92%*11", "1347.89%+81.70%*11", "1426.61%+86.47%*11", "1505.33%+91.24%*11", "1584.05%+96.01%*11", "1662.77%+100.78%*11", "1741.49%+105.55%*11"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Res. Energy Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150"]
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillChixia5.webp",
                skillName: 'Grand Entrance',
                skillDescription: `Chixia makes a heroic entrance and fires rapidly with her dual Pistolss at the target, dealing <span class="Fire">Fusion DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "",
                        skillDetailNum: [{
                            values: ["24.75%*2+12.38%*4", "26.78%*2+13.39%*4", "28.81%*2+14.41%*4", "31.66%*2+15.83%*4", "33.68%*2+16.84%*4", "36.02%*2+18.01%*4", "39.27%*2+19.64%*4", "42.51%*2+21.26%*4", "45.76%*2+22.88%*4", "49.21%*2+24.61%*4", "53.27%*2+26.64%*4", "57.33%*2+28.67%*4", "61.39%*2+30.70%*4", "65.45%*2+32.73%*4", "69.51%*2+34.76%*4", "73.56%*2+36.78%*4", "77.62%*2+38.81%*4", "81.68%*2+40.84%*4", "85.74%*2+42.87%*4", "89.80%*2+44.90%*4"]
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
                skillName: 'Leaping Flames',
                skillDescription: `Chixia releases a shock wave surrounding the target, dealing <span class="Fire">Fusion DMG</span> equal to {0} of Chixia's ATK to enemies within the range.`,
                skillDetailNum: ["530.00%"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillChixia4.webp",
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
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["10.00%", "10.82%", "11.64%", "12.79%", "13.61%", "14.56%", "15.87%", "17.18%", "18.49%", "19.89%", "21.53%", "23.17%", "24.81%", "26.45%", "28.09%", "29.73%", "31.37%", "33.01%", "34.65%", "36.29%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Boom Boom Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["220.00%", "238.04%", "256.08%", "281.34%", "299.38%", "320.13%", "348.99%", "377.85%", "406.72%", "437.39%", "473.47%", "509.55%", "545.63%", "581.71%", "617.79%", "653.87%", "689.95%", "726.03%", "762.11%", "798.19%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "DAKA DAKA! Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Thermobaric Bullet Con. Energy Regen",
                        type: "",
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
}