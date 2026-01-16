import { WWCharacter } from "../WWCharacter";

const rarity4Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_4_Stars.webp";

export const Buling: WWCharacter = {
    name: "Buling",
    charaId: 1307,
    rarity: {
        alt: "4 Star",
        img: rarity4Star
    },
    element: "Electro",
    weapon: "Rectifier",
    bio: `Taoist of Mengzhou, Black Shores Consultant, feng shui master, and veteran forum dweller.
    Easygoing and well-traveled, Buling will "bling" whatever you seek.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_Buling_UI.webp",
        icon_sq: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_58_UI.webp",
        model: "https://i.imgur.com/tIiW81S.png"
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
                item: "Blighted Crown of Puppet King",
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
                item: "Curse of the Abyss",
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
        base_hp: 850,
        base_atk: 18,
        base_def: 103,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
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
            typeName: 'Normal Attack',
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill5.webp",
            skillName: 'Hexagram Calls, Lightning Falls',
            skillDescription: `<span class="Title">Basic Attack</span>
            Perform up to 4 consecutive attacks, dealing <span class="Thunder">Electro DMG</span>.
            <div class="gap"></div>
            <span class="Title">Heavy Attack - Mountain Over Thunder</span>
            <span class="Highlight">Hold Normal Attack</span> to consume the highlighted Trigram - Mountain and Trigram - Thunder from left to right and cast <span class="Highlight">Heavy Attack - Mountain Over Thunder</span>, dealing <span class="Thunder">Electro DMG</span>.
            <div class="gap"></div>
            <span class="Title">Heavy Attack - Thunder Over Mountain</span>
            <span class="Highlight">Hold Normal Attack</span> to consume the highlighted Trigram - Thunder and Trigram - Mountain from left to right and cast <span class="Highlight">Heavy Attack - Thunder Over Mountain</span>, dealing a small amount of <span class="Thunder">Electro DMG</span> and additionally reducing the target's Vibration Strength.
            <div class="gap"></div>
            <span class="Title">Heavy Attack - Twin Mountains</span>
            <span class="Highlight">Hold Normal Attack</span> to consume the highlighted 2 Trigrams - Mountain from left to right and cast <span class="Highlight">Heavy Attack - Twin Mountains</span>, healing all nearby Resonators in the team.
            <div class="gap"></div>
            <span class="Title">Heavy Attack - Twin Thunders</span>
            <span class="Highlight">Hold Normal Attack</span> to consume the highlighted 2 Trigrams - Thunder from left to right and cast <span class="Highlight">Heavy Attack - Twin Thunders</span>, healing all nearby Resonators in the team once per second for 8s.
            <div class="gap"></div>
            <span class="Title">Heavy Attack - Ghost Gate Omen</span>
            When <span class="Highlight">holding Normal Attack</span> with fewer than 2 Trigrams, Buling fails the divination, becoming temporarily immobilized and losing all Trigrams and 20% of her current HP. This effect will not consume HP if Buling's current HP is below 1%.
            <div class="gap"></div>
            <span class="Title">Mid-air Attack</span>
            Consume STA to perform Mid-air Attack, dealing <span class="Thunder">Electro DMG</span>.
            <div class="gap"></div>
            <span class="Title">Dodge Counter</span>
            <span class="Highlight">Press Normal Attack</span> right after a successful Dodge to perform <span class="Highlight">Basic Attack Stage 3</span>, dealing <span class="Thunder">Electro DMG</span>.<br>
            - After performing <span class="Highlight">Dodge Counter</span>, <span class="Highlight">press Normal Attack</span> to perform <span class="Highlight">Basic Attack Stage 4</span>.
            <div class="gap"></div>
            <span class="Title">Trigram</span>
            Buling can hold up to 4 Trigrams. When Trigrams reach the max number, gaining new Trigrams moves all Trigrams 1 slot to the left, and the original leftmost Trigram will be removed.<br>
            - Trigram - Mountain is obtained when <span class="Highlight">Basic Attack Stage 2</span> deals damage.<br>
            - Trigram - Thunder is obtained when <span class="Highlight">Basic Attack Stage 4</span> or <span class="Highlight">Mid-air Attack</span> deals damage.<br>
            - Trigram - Thunder is obtained when casting <span class="Highlight">Resonance Skill - In Shadow Thunder Stirs</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["10.43%*2", "11.28%*2", "12.14%*2", "13.34%*2", "14.19%*2", "15.17%*2", "16.54%*2", "17.91%*2", "19.28%*2", "20.73%*2"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["16.83%*2", "18.21%*2", "19.59%*2", "21.52%*2", "22.90%*2", "24.49%*2", "26.69%*2", "28.90%*2", "31.11%*2", "33.45%*2"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["11.83%*2", "12.80%*2", "13.77%*2", "15.13%*2", "16.10%*2", "17.21%*2", "18.76%*2", "20.31%*2", "21.87%*2", "23.51%*2"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Stage 4 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["47.10%", "50.97%", "54.83%", "60.24%", "64.10%", "68.54%", "74.72%", "80.90%", "87.08%", "93.64%"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Mid-air Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["37.20%", "40.26%", "43.31%", "47.58%", "50.63%", "54.13%", "59.02%", "63.90%", "68.78%", "73.96%"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["11.83%*2", "12.80%*2", "13.77%*2", "15.13%*2", "16.10%*2", "17.21%*2", "18.76%*2", "20.31%*2", "21.87%*2", "23.51%*2"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Heavy Attack - Mountain Over Thunder DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["90.00%", "97.38%", "104.76%", "115.10%", "122.48%", "130.96%", "142.77%", "154.58%", "166.39%", "178.93%"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Heavy Attack - Thunder Over Mountain DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["45.00%", "48.69%", "52.38%", "57.55%", "61.24%", "65.48%", "71.39%", "77.29%", "83.20%", "89.47%"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Heavy Attack - Twin Mountains Healing",
                    type: "",
                    skillDetailNum: [{
                        values: ["360+68.00% ATK", "390+73.58% ATK", "420+79.16% ATK", "461+86.96% ATK", "490+92.54% ATK", "524+98.95% ATK", "572+107.87% ATK", "619+116.79% ATK", "666+125.72% ATK", "716+135.20% ATK"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Heavy Attack - Twin Thunders Healing",
                    type: "",
                    skillDetailNum: [{
                        values: ["85+9.20% ATK", "92+9.96% ATK", "99+10.71% ATK", "109+11.77% ATK", "116+12.52% ATK", "124+13.39% ATK", "135+14.60% ATK", "146+15.81% ATK", "158+17.01% ATK", "169+18.30% ATK"]
                    }],
                    index: 10
                },
                {
                    attributeName: "Mid-air Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 11
                },
                {
                    attributeName: "Heavy Attack - Mountain Over Thunder STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 12
                },
                {
                    attributeName: "Heavy Attack - Thunder Over Mountain STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 13
                },
                {
                    attributeName: "Heavy Attack - Twin Mountains STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 14
                },
                {
                    attributeName: "Heavy Attack - Twin Thunders STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 15
                },
                {
                    attributeName: "Heavy Attack - Ghost Gate Omen STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 16
                },
                {
                    attributeName: "Heavy Attack - Mountain Over Thunder Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                    }],
                    index: 17
                },
                {
                    attributeName: "Heavy Attack - Thunder Over Mountain Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                    }],
                    index: 18
                },
                {
                    attributeName: "Heavy Attack - Twin Mountains Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                    }],
                    index: 19
                },
                {
                    attributeName: "Heavy Attack - Twin Thunders Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                    }],
                    index: 20
                }
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconBuling/SP_IconBulingB1.webp",
            skillName: 'In Shadow Thunder Stirs',
            skillDescription: `
            Attack the target, dealing <span class="Thunder">Electro DMG</span> and continuously pulling in nearby targets.<br>
            - Right after casting <span class="Highlight">Resonance Skill</span>, <span class="Highlight">press Normal Attack</span> to perform <span class="Highlight">Basic Attack Stage 4</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Thunder Talisman DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["29.37%", "31.78%", "34.19%", "37.56%", "39.97%", "42.74%", "46.59%", "50.45%", "54.30%", "58.40%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Pull-in Effect Continuous DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["2.94%*10", "3.18%*10", "3.42%*10", "3.76%*10", "4.00%*10", "4.28%*10", "4.66%*10", "5.05%*10", "5.43%*10", "5.84%*10"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["15s", "15s", "15s", "15s", "15s", "15s", "15s", "15s", "15s", "15s"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["23", "23", "23", "23", "23", "23", "23", "23", "23", "23"]
                    }],
                    index: 4
                }
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconBuling/SP_IconBulingC1.webp",
            skillName: 'Flashing Thunder Spell',
            skillDescription: `Attack the target, dealing <span class="Thunder">Electro DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Flashing Thunder Spell DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["180.00%", "194.76%", "209.52%", "230.19%", "244.95%", "261.92%", "285.54%", "309.15%", "332.77%", "357.86%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["24s", "24s", "24s", "24s", "24s", "24s", "24s", "24s", "24s", "24s"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Resonance Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["150", "150", "150", "150", "150", "150", "150", "150", "150", "150"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 4
                }
            ]
        },
        {
            skillId: 4,
            typeName: 'Intro Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconBuling/SP_IconBulingQTE.webp",
            skillName: 'Summon and Smite',
            skillDescription: `Attack the target, dealing <span class="Thunder">Electro DMG</span> and healing all nearby Resonators in the team.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["65.94%", "71.35%", "76.76%", "84.33%", "89.74%", "95.95%", "104.61%", "113.26%", "121.91%", "131.10%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Skill Healing",
                    type: "",
                    skillDetailNum: [{
                        values: ["350+40.00% ATK", "379+43.28% ATK", "408+46.56% ATK", "448+51.16% ATK", "477+54.44% ATK", "510+58.21% ATK", "556+63.46% ATK", "602+68.70% ATK", "648+73.95% ATK", "696+79.53% ATK"]
                    }],
                    index: 2
                },
                {
                    attributeName: "",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 3
                }
            ]
        },
        {
            skillId: 5,
            typeName: 'Outro Skill',
            skillName: 'Exorcism Spell',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconBuling/SP_IconBulingT.webp",
            skillDescription: `Heal the active Resonator in the team by 18% of Buling's ATK per second for 16s. All nearby Resonators in the team have their DMG Amplified by 15% for 30s.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconBuling/SP_IconBulingC2.webp",
            skillName: 'Thunder Begets Life',
            skillDescription: `<span class="Title">Yin-Yang Balance</span>
            When Buling obtains Minor Yin and Minor Yang, she enters the <span class="Highlight">Yin-Yang Balance</span> state, replacing her <span class="Highlight">Resonance Liberation - Flashing Thunder Spell</span> with <span class="Highlight">Resonance Liberation - Flashing Thunder Spell: Harmony</span>.
            <div class="gap"></div>
            <span class="Title">Flashing Thunder Spell - Harmony</span>
            Attack the target, dealing <span class="Thunder">Electro DMG</span> and generating a <span class="Highlight">Five Thunders Spell Array</span> at the target area. The array deals <span class="Thunder">Electro DMG</span> and inflicts 2 stacks of <span class="Highlight">Electro Flare</span> on all targets within it every 2s, lasting for 24s. When <span class="Highlight">Five Thunders Spell Array</span> is active, all Resonators in the team enter the <span class="Highlight">Thunder Spell - Primordial Qi</span> state.<br>
            - While in the <span class="Highlight">Thunder Spell - Primordial Qi</span> state, when any Resonator in the team casts <span class="Highlight">Intro Skill</span>, <span class="Highlight">Thunder Spell - Primordial Qi</span> becomes <span class="Highlight">Thunder Spell - Yin and Yang</span>.<br>
            - <span class="Highlight">Thunder Spell - Yin and Yang</span> grants 10% <span class="Highlight">Resonance Skill</span> DMG Bonus to all active Resonators in the team. When any Resonator in the team casts <span class="Highlight">Intro Skill</span> during this state, <span class="Highlight">Thunder Spell - Yin and Yang</span> becomes <span class="Highlight">Thunder Spell - Heaven, Earth, Mind</span>.<br>
            - <span class="Highlight">Thunder Spell - Heaven, Earth, Mind</span> grants 25% <span class="Highlight">Resonance Skill</span> DMG Bonus to all active Resonators in the team.
            <div class="gap"></div>
            <span class="Title">Minor Yang and Minor Yin</span>
            - Minor Yang is obtained after casting <span class="Highlight">Heavy Attack - Mountain Over Thunder</span> or <span class="Highlight">Heavy Attack - Thunder Over Mountain</span>.<br>
            - Minor Yin is obtained after casting <span class="Highlight">Heavy Attack - Twin Mountains</span> or <span class="Highlight">Heavy Attack - Twin Thunders</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Flashing Thunder Spell - Harmony DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["270.00%", "292.14%", "314.28%", "345.28%", "367.42%", "392.88%", "428.31%", "463.73%", "499.15%", "536.79%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Five Thunders Spell Array Continuous DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["10.00%", "10.82%", "11.64%", "12.79%", "13.61%", "14.56%", "15.87%", "17.18%", "18.49%", "19.89%"]
                    }],
                    index: 2
                }
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Time Arrives, Evil Declines',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconBuling/SP_IconBulingD1.webp",
            skillDescription: `Buling gains 25% Healing Bonus when restoring HP for Resonators with less than 50% HP.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Earthly Immortal is Here!',
            skillDescription: `Targets damaged by <span class="Highlight">Intro Skill - Summon and Smite</span> obtain 4 stacks of <span class="Thunder">Electro Flare</span>. This effect is triggered once every 10s.`,
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconBuling/SP_IconBulingD2.webp",
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 9,
            typeName: "Tune Break",
            skillName: '',
            skillImg: "",
            skillDescription: `When the target\'s <span class="Highlight">Off-Tune Level</span> is full, the Resonator may cast <span class="Highlight">Tune Break</span> on the target.`,
            skillDetailNum: [""],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Exorcist Gadgets, Lend Me Your Power",
            description: `The Crit. Rate of <span class="Highlight">Resonance Liberation - Flashing Thunder Spell: Harmony</span> is increased by 20% upon dealing damage.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_BulingM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "Talisman Burns, Spirits Turn",
            description: `Buling restores 25 points of Resonance Energy when she enters the <span class="Highlight">Yin-Yang Balance</span> state. This effect is triggered once every 24s.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_BulingM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "Summoner of Spirits, Seeker of Fate",
            description: `While <span class="Highlight">Five Thunders Spell Array</span> lasts, whenever the HP of Resonators in the team drops below 50%, immediately restore their HP by 350+150% of Buling's ATK. This effect can be triggered once every 24s.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_BulingM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "Wanderer of Solaris, Blessed by Fortune",
            description: `Buling gains 20% Healing Bonus.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_BulingM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "Forum Ban? New Account!",
            description: `<span class="Highlight">Five Thunders Spell Array</span> instantly inflicts another 6 stacks of <span class="Thunder">Electro Flare</span> on all targets within its range upon generation.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_BulingM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "\"Almighty Forum Lord of Thunder Spell\"",
            description: `The <span class="Highlight">Thunder Spell - Heaven, Earth, Mind</span> state now grants 50% <span class="Highlight">Resonance Skill</span> DMG Bonus to the active Resonator in the team.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_BulingM6_UI.webp"
        },
    ]
}