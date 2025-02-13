import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Phoebe: WWCharacter = {
    name: "Phoebe",
    charaId: 1506,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Spectro",
    weapon: "Rectifier",
    bio: `Phoebe, Acolyte of the Order of the Deep, is a young woman of quiet devotion. With a kind heart, she fulfills her duties with unwavering diligence. Her prayers, like the light she carries, offer comfort and peace to all.`,
    images: {
        portrait: "https://i.imgur.com/pgFwwL4.png",
        icon_sq: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_45_UI.webp",
        model: "https://i.imgur.com/3SrarxI.png"
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
                item: "Cleansing Conch",
                id: 5,
                value: "46"
            },
            {
                item: "Firecracker Jewelweed",
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
        bonus_crit: 0,
        bonus_critdmg: 16,
        bonus_hp: 0
    },
    skills: [
        {
            skillId: 1,
            typeName: 'Normal Attack',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconNor/SP_IconNorMagic.webp",
            skillName: 'O Come Divine Light',
            skillDescription: `<span class="Title">Basic Attack</span>
            Perform up to 3 consecutive attacks of Holy Light, dealing <span class="Light">Spectro DMG</span>.
            <div class="gap"></div>
            <span class="Title">Heavy Attack</span>
            Consume STA to attack the target, dealing <span class="Light">Spectro DMG</span>.
            <div class="gap"></div>
            <span class="Title">Mid-air Attack</span>
            Consume STA to ride the staff and dive down from mid-air to attack the target, dealing <span class="Light">Spectro DMG</span>.
            <div class="gap"></div>
            <span class="Title">Mid-air Heavy Attack</span>
            Consume STA to ride on the staff for a distance.<br>
            - Can be re-cast after a Mid-Air Dodge or using Grapple.
            <div class="gap"></div>
            <span class="Title">Dodge Counter</span>
            After a successful <span class="Highlight">Dodge</span>, quickly use <span class="Highlight">Basic Attack</span> to attack the target, dealing <span class="Light">Spectro DMG</span>.<br>
            - When Phoebe is inside the Ring of Mirrors, Dodge Counter becomes <span class="Highlight">Chamuel's Star: Dodge Counter</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["14.85%", "16.07%", "17.29%", "19.00%", "20.21%", "21.61%", "23.56%", "25.51%", "27.46%", "29.53%"]
                    }],
                    index: 1
                }, {
                    attributeName: "Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["11.25%+13.75%", "12.18%+14.88%", "13.10%+16.01%", "14.39%+17.59%", "15.31%+18.72%", "16.37%+20.01%", "17.85%+21.82%", "19.33%+23.62%", "20.80%+25.42%", "22.37%+27.34%"]
                    }],
                    index: 2
                }, {
                    attributeName: "Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["7.17%*8", "7.75%*8", "8.34%*8", "9.16%*8", "9.75%*8", "10.43%*8", "11.37%*8", "12.31%*8", "13.25%*8", "14.24%*8"]
                    }],
                    index: 3
                }, {
                    attributeName: "Heavy Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["20.80%*4", "22.50%*4", "24.21%*4", "26.60%*4", "28.30%*4", "30.26%*4", "32.99%*4", "35.72%*4", "38.45%*4", "41.35%*4"]
                    }],
                    index: 4
                }, {
                    attributeName: "Plunging Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["23.25%*2", "25.16%*2", "27.07%*2", "29.74%*2", "31.64%*2", "33.84%*2", "36.89%*2", "39.94%*2", "42.99%*2", "46.23%*2"]
                    }],
                    index: 5
                }, {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["10.86%*8", "11.75%*8", "12.64%*8", "13.89%*8", "14.78%*8", "15.80%*8", "17.22%*8", "18.65%*8", "20.07%*8", "21.58%*8"]
                    }],
                    index: 6
                }, {
                    attributeName: "Chamuel's Star: Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["22.05%*6", "23.86%*6", "25.67%*6", "28.20%*6", "30.01%*6", "32.09%*6", "34.98%*6", "37.88%*6", "40.77%*6", "43.84%*6"]
                    }],
                    index: 7
                }, {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 8
                }, {
                    attributeName: "Mid-air Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 9
                }, {
                    attributeName: "Mid-air Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 10
                }, 
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconFeibi/SP_IconFeibiB1.webp",
            skillName: 'To Where Light Shines',
            skillDescription: `
            Summon a Ring of Mirrors at the target location, making the target hit stagnate for 2s and dealing <span class="Light">Spectro DMG</span>. The stagnation effect can be applied to 12 targets max for each Ring of Mirrors. Using <span class="Highlight">Resonance Skill</span> again shortly after the summoning teleports Phoebe to the Ring of Mirrors' location, dealing <span class="Light">Spectro DMG</span>.<br>
            Unable to teleport if Phoebe is too far from the Ring of Mirrors.
            <div class="gap"></div>
            <span class="Title">Ring of Mirrors</span>
            - Ring of Mirrors lasts for 30s. When Phoebe summons a new Ring of Mirrors, the existing Ring of Mirrors disappears.<br>
            - When Phoebe is outside of the Ring of Mirrors, a <span class="Highlight">Basic Attack</span> or <span class="Highlight">Dodge Counter </span>that hits the Ring of Mirrors will refract Holy Light, which deals <span class="Light">Spectro DMG </span>to targets inside the Ring of Mirrors and pulls the targets hit to the center of the ring. The DMG dealt is considered Basic Attack DMG. Can be triggered once every 0.5s.<br>
            - When Phoebe is inside the Ring of Mirrors, <span class="Highlight">Basic Attack</span> becomes Basic Attack <span class="Highlight">Chamuel's Star</span>, which performs up to 3 consecutive attacks, dealing <span class="Light">Spectro DMG</span>, considered Basic Attack DMG.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["31.50%*2", "34.09%*2", "36.67%*2", "40.29%*2", "42.87%*2", "45.84%*2", "49.97%*2", "54.11%*2", "58.24%*2", "62.63%*2"]
                    }],
                    index: 1
                }, {
                    attributeName: "Ring of Mirrors: Refracted Holy Light DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["7.50%*2", "8.12%*2", "8.73%*2", "9.60%*2", "10.21%*2", "10.92%*2", "11.90%*2", "12.89%*2", "13.87%*2", "14.92%*2"]
                    }],
                    index: 2
                }, {
                    attributeName: "Chamuel's Star: Stage 1 DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["29.85%", "32.30%", "34.75%", "38.18%", "40.62%", "43.44%", "47.36%", "51.27%", "55.19%", "59.35%"]
                    }],
                    index: 3
                }, {
                    attributeName: "Chamuels's Star: Stage 2 DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["20.00%*2", "21.64%*2", "23.28%*2", "25.58%*2", "27.22%*2", "29.11%*2", "31.73%*2", "34.35%*2", "36.98%*2", "39.77%*2"]
                    }],
                    index: 4
                }, {
                    attributeName: "Chamuel's Star: Stage 3 DMG",
                    type: "SKill",
                    skillDetailNum: [{
                        values: ["14.55%*6", "15.75%*6", "16.94%*6", "18.61%*6", "19.80%*6", "21.18%*6", "23.09%*6", "24.99%*6", "26.90%*6", "28.93%*6"]
                    }],
                    index: 5
                }, {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s"]
                    }],
                    index: 6
                }, 
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconFeibi/SP_IconFeibiC1.webp",
            skillName: 'Dawn of Enlightenment',
            skillDescription: `
            Phoebe concentrates the light in her hands into the Mirror of Enlightenment and smashes it, dealing <span class="Light">Spectro DMG</span>.<br>
            - <span class="Highlight">Absolution</span> Enhancement: Increase DMG Multiplier by 255%.<br>
            - <span class="Highlight">Confession</span> Enhancement: Apply 8 stacks of <span class="Highlight">Spectro Frazzle</span> to targets hit.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["202.00%", "218.57%", "235.13%", "258.32%", "274.89%", "293.94%", "320.44%", "346.94%", "373.44%", "401.60%"]
                    }],
                    index: 1
                }, {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s"]
                    }],
                    index: 2
                }, {
                    attributeName: "Resonance Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                    }],
                    index: 3
                }, {
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 4
                }, 
            ]
        },
        {
            skillId: 4,
            typeName: 'Intro Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconFeibi/SP_IconFeibiQTE.webp",
            skillName: 'Golden Grace',
            skillDescription: `Knock back nearby targets and deal <span class="Light">Spectro DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["100.00%", "108.20%", "116.40%", "127.88%", "136.08%", "145.51%", "158.63%", "171.75%", "184.87%", "198.81%"]
                    }],
                    index: 1
                }, {
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 2
                }, 
            ]
        },
        {
            skillId: 5,
            typeName: 'Outro Skill',
            skillName: 'Attentive Heart',
            skillDescription: `Deal <span class="Light">Spectro DMG</span> equal to {0} of Phoebe's ATK to nearby targets.<br>
            - <span class="Highlight">Absolution</span> Enhancement: Increase DMG Multiplier by {1}.<br>
            - <span class="Highlight">Confession</span> Enhancement: Grant <span class="Highlight">Silent Prayer</span> to the Resonator on the field, reducing the Spectro RES of nearby targets by {2} and granting {3} <span class="Highlight">Spectro Frazzle</span> DMG Amplification. When <span class="Highlight">Spectro Frazzle</span> inflicts DMG, extend <span class="Highlight">Spectro Frazzle</span>'s damage interval by {4}. This effect lasts 30s or until Phoebe switches to <span class="Highlight">Absolution</span> status.`,
            skillDetailNum: ["528.41%", "528.41%", "10%", "100%", "50%"],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconFeibi/SP_IconFeibiY.webp",
            skillName: 'Radiant Invocation',
            skillDescription: `
            When Phoebe's Prayer is full, consume all Prayer to cast one of the following skills:<br>
            - Hold <span class="Highlight">Basic Attack</span> to cast Heavy Attack <span class="Highlight">Absolution Litany</span>, dealing <span class="Light">Spectro DMG</span> and applying 1 stack of <span class="Highlight">Spectro Frazzle</span> to the targets hit. Phoebe enters <span class="Highlight">Absolution</span> status, which allows her to deal more DMG.<br>
            - Hold <span class="Highlight">Resonance Skill</span> to cast Resonance Skill <span class="Highlight">Utter Confession</span>, dealing <span class="Light">Spectro DMG</span> and applying 1 stack of <span class="Highlight">Spectro Frazzle</span> to the targets hit. Phoebe enters <span class="Highlight">Confession</span> status, which allows her to better exploit Spectro Frazzle.<br>
            - <span class="Highlight">Absolution</span> and <span class="Highlight">Confession</span> cannot coexist. Entering into one will end the other.<br>
            - When Divine Voice is not exhausted, Phoebe is unable to cast Heavy Attack <span class="Highlight">Absolution Litany</span> and Resonance Skill <span class="Highlight">Utter Confession</span>.<br>
            - When Divine Voice is exhausted, Phoebe will not exit the <span class="Highlight">Absolution</span> or <span class="Highlight">Confession</span> status.
            <div class="gap"></div>
            <span class="Title">Heavy Attack: Starflash</span>
            When Phoebe has Divine Voice, casting <span class="Highlight">Basic Attack Stage 3</span> or <span class="Highlight">Dodge Counter</span> replaces the next <span class="Highlight">Heavy Attack</span> with <span class="Highlight">Heavy Attack: Starflash</span>, which deals <span class="Light">Spectro DMG</span> at the cost of 30 Divine Voice.<br>
            - <span class="Highlight">Absolution</span> Enhancement: Reduce the cost of Divine Voice by 15. When the targets hit have <span class="Highlight">Spectro Frazzle</span>, the skill gains 256% DMG Amplification.<br>
            - <span class="Highlight">Confession</span> Enhancement: Apply 5 stacks of <span class="Highlight">Spectro Frazzle</span> to the targets hit.<br>
            <div class="gap"></div>
            <span class="Title">Prayer</span>
            Phoebe can hold up to 120 Prayer.<br>
            Phoebe automatically gains 5 Prayer every second.
            <div class="gap"></div>
            <span class="Title">Divine Voice</span>
            Phoebe can hold up to 60 Divine Voice.<br>
            Casting Heavy Attack <span class="Highlight">Absolution Litany</span> or Resonance Skill <span class="Highlight">Utter Confession</span> restores 60 Divine Voice.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Absolution Litany DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["321.00%", "347.33%", "373.65%", "410.50%", "436.82%", "467.09%", "509.21%", "551.32%", "593.44%", "638.19%"]
                    }],
                    index: 1
                }, {
                    attributeName: "Utter Confession DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["94.50%", "102.25%", "110.00%", "120.85%", "128.60%", "137.51%", "149.91%", "162.31%", "174.71%", "187.88%"]
                    }],
                    index: 2
                }, {
                    attributeName: "Heavy Attack: Starflash DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["41.59%*3", "45.00%*3", "48.41%*3", "53.19%*3", "56.60%*3", "60.52%*3", "65.98%*3", "71.43%*3", "76.89%*3", "82.69%*3"]
                    }],
                    index: 3
                }, {
                    attributeName: "Heavy Attack: Starflash STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 4
                }, {
                    attributeName: "Absolution Litany Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 5
                }, {
                    attributeName: "Utter Confession Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["40", "40", "40", "40", "40", "40", "40", "40", "40", "40"]
                    }],
                    index: 6
                }, 
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Presence',
            skillDescription: `Mid-air Heavy Attack can be cast 1 more time.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Revelation',
            skillDescription: `When in the <span class="Highlight">Absolution</span> status and <span class="Highlight">Confession</span> status, Spectro DMG Bonus is increased by {0}.`,
            skillDetailNum: ["12%"],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Warm Light and Bedside Wishes",
            description: `When in <span class="Highlight">Absolution</span>, Resonance Liberation <span class="Highlight">Dawn of Enlightenment</span> now increases DMG Multiplier by {0} instead of 255%.<br>
            When in <span class="Highlight">Confession</span>, Resonance Liberation <span class="Highlight">Dawn of Enlightenment</span> increases DMG Multiplier by {1} and applies <span class="Highlight">Spectro Frazzle</span> to the targets with the maximum stack the targets can receive.`,
            detailNum: ["480%", "90%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Liberation DMG Bonus"],
            sequenceBuff: [480, 90],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FeibiM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "A Boat Adrift in Tears",
            description: `When in <span class="Highlight">Absolution</span>, DMG dealt by Outro Skills to targets with <span class="Highlight">Spectro Frazzle</span> is Amplified by {0}.<br>
            When in <span class="Highlight">Confession</span>, Silent Prayer grants {1} more DMG Amplification for <span class="Highlight">Spectro Frazzle</span>.`,
            detailNum: ["120%", "120%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Attentive Heart", "Attentive Heart"],
            sequenceBuff: [120, 120],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FeibiM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "Daisy Wreaths and Dreams",
            description: `When in <span class="Highlight">Absolution</span>, the DMG Multiplier of Heavy Attack <span class="Highlight">Starflash</span> is increased by {0}.<br>
            When in <span class="Highlight">Confession</span>, the DMG Multiplier of Heavy Attack <span class="Highlight">Starflash</span> is increased by {1}.`,
            detailNum: ["91%", "249%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Heavy Attack DMG Bonus", "Heavy Attack DMG Bonus"],
            sequenceBuff: [91, 249],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FeibiM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "Ringing Bells on Wings Aloft",
            description: `When <span class="Highlight">Basic Attack</span>, Basic Attack <span class="Highlight">Chamuel's Star</span>, <span class="Highlight">Dodge Counter</span>, or <span class="Highlight">Chamuel‘s Star: Dodge Counter</span> hits, the target's Spectro RES is reduced by {0} for 30s.`,
            detailNum: ["10%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Basic Attack DMG Bonus"],
            sequenceBuff: [10],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FeibiM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "Prayer to the Distant Light",
            description: `Casting Intro Skill <span class="Highlight">Golden Grace</span> increases Phoebe's Spectro DMG Bonus by {0} for 15s.`,
            detailNum: ["12%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Golden Grace"],
            sequenceBuff: [12],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FeibiM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "Whispering Chirps in Silence",
            description: `Targets entering the Ring of Mirrors are stagnated for an additional 2s. The stagnation effect affects all targets entering the Ring of Mirrors and can be applied to 12 targets max for each Ring of Mirrors. Each target will only be affected by this effect once.<br>
            When in <span class="Highlight">Absolution</span> or <span class="Highlight">Confession</span>, summoning a Ring of Mirrors with <span class="Highlight">Resonance Skill</span> increases Pheobe's ATK by {0} for 20s, and triggers an extra Heavy Attack <span class="Highlight">Starflash</span> at the Ring of Mirrors' location. This Heavy Attack <span class="Highlight">Starflash</span> does not consume Divine Voice and is not considered as casting a <span class="Highlight">Heavy Attack</span>.`,
            detailNum: ["10%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK%"],
            sequenceBuff: [10],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FeibiM6_UI.webp"
        },
    ]
}