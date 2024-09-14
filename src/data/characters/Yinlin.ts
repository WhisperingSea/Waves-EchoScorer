import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://sohansc13.github.io/wuthering-waves-assets/images/icon_stars/Icon_5_Stars.webp";

export const Yinlin: WWCharacter = {
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
}