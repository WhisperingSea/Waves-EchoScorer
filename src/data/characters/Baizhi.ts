import { WWCharacter } from "../WWCharacter";

const rarity4Star = "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_stars/Icon_4_Stars.webp";

export const Baizhi: WWCharacter = {
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
        portrait: "https://whisperingsea.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_bailian_UI.png",
        icon_sq: "https://whisperingsea.github.io/wuthering-waves-assets/images/icons_character/Baizhi.png",
        model: "https://whisperingsea.github.io/wuthering-waves-assets/images/models/Baizhi_Full_Sprite.png"
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
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1103_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Silent Tundra",
            description: `Resonance Skill <color=Highlight>Emergency Plan</color> increases Baizhi's Glacio DMG Bonus by {1} and her Healing by {2} if she has {0} "Concentration". These effects last for {3}s.`,
            detailNum: ["4", "15%", "15%", "12"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1103_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Veritas Lux Mea",
            description: `Intro Skill <color=Highlight>Overflowing Frost</color> increases Baizhi's Max HP by {0} for {1}s.`,
            detailNum: ["12%", "10"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
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
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1103_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "A Wish Answered",
            description: `If a team member is downed when Baizhi is alive on the team, immediately revive them and restore their HP to {0} of their Max HP. This effect can be triggered once every {1} minute(s).`,
            detailNum: ["100%", "10"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1103_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Seeker's Devotion",
            description: `When <color=Highlight>Euphonia</color> is picked up, increase the Glacio DMG Bonus of all characters nearby by {0} for {1}s.`,
            detailNum: ["12%", "20"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1103_UI.png"
        }
    ]
}