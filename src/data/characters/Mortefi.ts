import { WWCharacter } from "../WWCharacter";

const rarity4Star = "https://sohansc13.github.io/wuthering-waves-assets/images/icon_stars/Icon_4_Stars.webp";

export const Mortefi: WWCharacter = {
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
}