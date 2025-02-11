import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Roccia: WWCharacter = {
    name: "Roccia",
    charaId: 1606,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Havoc",
    weapon: "Gauntlets",
    bio: `Roccia is a gifted improvisational comedian and the First Mate of the Fool's Troupe, known for her mastery of stage props.
    With a tranquil, composed disposition, she navigates the ship's quarters, perched atop her giant box, meticulously ensuring the Troupe remains orderly and tidy.`,
    images: {
        portrait: "https://wuthering-waves-assets.pages.dev/portraits/RocciaPortrait.webp",
        icon_sq: "https://wuthering-waves-assets.pages.dev/icons_character/Roccia.webp",
        model: "https://wuthering-waves-assets.pages.dev/models/Roccia_Full_Sprite.webp"
    },
    asension: {
        charaAsension: [
            {
                item: "LF Tidal Residuum",
                id: 1,
                value: "4"
            },
            {
                item: "MF Tidal Residuum",
                id: 2,
                value: "12"
            },
            {
                item: "HF Tidal Residuum",
                id: 3,
                value: "12"
            },
            {
                item: "FF Tidal Residuum",
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
                item: "LF Tidal Residuum",
                id: 1,
                value: "25"
            },
            {
                item: "MF Tidal Residuum",
                id: 2,
                value: "28"
            },
            {
                item: "HF Tidal Residuum",
                id: 3,
                value: "40"
            },
            {
                item: "FF Tidal Residuum",
                id: 4,
                value: "57"
            },
            {
                item: "Cadence Seed",
                id: 5,
                value: "25"
            },
            {
                item: "Cadence Bud",
                id: 6,
                value: "28"
            },
            {
                item: "Cadence Leaf",
                id: 7,
                value: "55"
            },
            {
                item: "Cadence Blossom",
                id: 8,
                value: "67"
            },
            {
                item: "The Netherworld Stare",
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
        base_hp: 980,
        base_atk: 30,
        base_def: 98,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 0,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 8,
        bonus_critdmg: 16,
        bonus_hp: 0
    },
    skills: [
        {
            skillId: 1,
            typeName: 'Normal Attack',
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill4.webp",
            skillName: 'Pero, Easy',
            skillDescription: `<span class="Title">Basic Attack</span>
                Perform up to 4 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>
                Consume STA to attack, dealing <span class="Dark">Havoc DMG</span>. Hitting a target with at least 100 Imagination sends Roccia into mid-air and activates the <span class="Highlight">Beyond Imagination</span> state. The longer you hold the <span class="Highlight">Basic Attack</span> button, the more Imagination Roccia gains. In this state, Roccia can continue to charge the attack even when her STA depletes. Heavy Attack will be automatically cast when you release the <span class="Highlight">Basic Attack</span> button while charging or when Imagination reaches the max limit.
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>
                Consume STA to perform a Plunging Attack, dealing <span class="Dark">Havoc DMG</span>.
                <div class="gap"></div>
                <span class="Title">Dodge Attack</span>
                Use <span class="Highlight">Basic Attack</span> right after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Dark">Havoc DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["36.81%", "39.83%", "42.85%", "47.07%", "50.09%", "53.56%", "58.39%", "63.22%", "68.05%", "73.18%"]
                    }],
                    index: 1
                }, {
                    attributeName: "Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["19.19%*3", "20.76%*3", "22.33%*3", "24.53%*3", "26.11%*3", "27.92%*3", "30.43%*3", "32.95%*3", "35.47%*3", "38.14%*3"],
                    }],
                    index: 2
                }, {
                    attributeName: "Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["17.00%*2+51.00%", "18.40%*2+55.19%", "19.79%*2+59.37%", "21.74%*2+65.22%", "23.14%*2+69.41%", "24.74%*2+74.22%", "26.97%*2+80.91%", "29.20%*2+87.60%", "31.43%*2+94.29%", "33.80%*2+101.40%"]
                    }],
                    index: 3
                }, {
                    attributeName: "Stage 4 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["52.41%*2", "56.70%*2", "61.00%*2", "67.02%*2", "71.31%*2", "76.26%*2", "83.13%*2", "90.01%*2", "96.88%*2", "104.19%*2"]
                    }],
                    index: 4
                }, {
                    attributeName: "Heavy Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["85.00%", "91.97%", "98.94%", "108.70%", "115.67%", "123.69%", "134.84%", "145.99%", "157.14%", "168.99%"]
                    }],
                    index: 5
                }, {
                    attributeName: "Mid-air Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["52.70%", "57.03%", "61.35%", "67.40%", "71.72%", "76.69%", "83.60%", "90.52%", "97.43%", "104.78%"]
                    }],
                    index: 6
                }, {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["34.66%*3", "37.50%*3", "40.34%*3", "44.32%*3", "47.16%*3", "50.43%*3", "54.97%*3", "59.52%*3", "64.07%*3", "68.90%*3"]
                    }],
                    index: 7
                }, {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 8
                }, {
                    attributeName: "STA Cost per Second while Charging",
                    type: "",
                    skillDetailNum: [{
                        values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                    }],
                    index: 9
                }, {
                    attributeName: "Mid-air Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 10
                }, 
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillRoccia2.webp",
            skillName: 'Acrobatic Trick',
            skillDescription: `Roccia projects her creativity into reality, pulling in nearby targets and dealing <span class="Dark">Havoc DMG</span>. She then launches into mid-air and activates the <span class="Highlight">Beyond Imagination</span> state.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["30.92%*8", "30.92%*8", "30.92%*8", "35.99%*8", "39.54%*8", "42.07%*8", "44.99%*8", "49.05%*8", "53.10%*8", "57.16%*8", "61.47%*8"]
                    }],
                    index: 1
                }, {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["20s", "20s", "20s", "20s", "20s", "20s", "20s", "20s", "20s", "20s"]
                    }],
                    index: 2
                },{
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 3
                },
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillRoccia3.webp",
            skillName: 'Commedia Improvviso!',
            skillDescription: `Roccia's improvised comedy begins! Deal <span class="Dark">Havoc DMG</span> to the target, considered Heavy Attack DMG. For every 0.1% of Roccia's Crit. Rate over 50%, this skill increases the ATK of all Resonators in the team by 1 point for 30s, up to 200 points.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["140.00%*3", "151.48%*3", "162.96%*3", "179.04%*3", "190.52%*3", "203.72%*3", "222.09%*3", "240.45%*3", "258.82%*3", "278.34%*3"]
                    }],
                    index: 1
                }, {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["20s", "20s", "20s", "20s", "20s", "20s", "20s", "20s", "20s", "20s"]
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
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillRoccia5.webp",
            skillName: 'Pero, Help',
            skillDescription: `Attack the target, dealing <span class="Dark">Havoc DMG</span>. Use <span class="Highlight">Basic Attack</span> right after casting this skill to cast <span class="Highlight">Basic Attack Stage 4</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["85.00%", "91.97%", "98.94%", "108.70%", "115.67%", "123.69%", "134.84%", "145.99%", "157.14%", "168.99%"]
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
            skillName: 'Applause, Please!',
            skillDescription: `The incoming Resonator has their Havoc DMG Amplified by {0}and Basic Attack DMG Amplified by {1} for 14s or until the Resonator is switched out.`,
            skillDetailNum: ["20%", "25%"],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillRoccia4.webp",
            skillName: 'A Prop Master Prepares',
            skillDescription: `<span class="Title">Beyond Imagination</span>
            - When Roccia is in <span class="Highlight">Beyond Imagination</span> with at least 100 Imagination, press the <span class="Highlight">Basic Attack</span> button to consume 100 Imagination to cast Basic Attack <span class="Highlight">Real Fantasy</span>.<br>
            - Roccia exits this state when she is not airborne or when switched off the field.
            <div class="gap"></div>
            <span class="Title">Basic Attack - Real Fantasy</span>
            - Perform up to 3 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>, considered Heavy Attack DMG. When Roccia lands after Stage 1 and Stage 2 attacks with over 100 Imagination, she will launch into mid-air and activate <span class="Highlight">Beyond Imagination</span>.
            <div class="gap"></div>
            <span class="Title">Imagination</span>
            Roccia can hold up to 300 Imagination.
            - Dealing DMG with Normal Attacks restores Imagination.<br>
            - Hold <span class="Highlight">Normal Attack</span> to charge the next attack while restoring Imagination.<br>
            - Casting Resonance Skill <span class="Highlight">Acrobatic Trick</span> restores 100 Imagination.<br>
            - Casting Intro Skill <span class="Highlight">Pero, Help</span> restores 100 Imagination.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Stage 1 DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["162.00%", "175.29%", "188.57%", "207.17%", "220.45%", "235.73%", "256.99%", "278.24%", "299.49%", "322.08%"]
                    }],
                    index: 1
                }, {
                    attributeName: "Stage 2 DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["171.00%", "185.03%", "199.05%", "218.68%", "232.70%", "248.83%", "271.26%", "293.70%", "316.13%", "339.97%"]
                    }],
                    index: 2
                },{
                    attributeName: "Stage 3 DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["180.00%", "194.76%", "209.52%", "230.19%", "244.95%", "261.92%", "285.54%", "309.15%", "332.77%", "357.86%"]
                    }],
                    index: 3
                },{
                    attributeName: "Stage 1 Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 4
                },{
                    attributeName: "Stage 2 Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16"]
                    }],
                    index: 5
                },{
                    attributeName: "Stage 3 Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 6
                },
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Immersive Performance',
            skillDescription: `Casting Resonance Skill or Heavy Attack increases Roccia's ATK by {0} for 12s.`,
            skillDetailNum: ["20%"],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Super Attractive Magic Box',
            skillDescription: `After casting Outro Skill, the Utility of the incoming Resonator is replaced with Magic Box.
            <span class="Title">Magic Box</span>
            - Upon use, pull nearby targets toward the Magic Box, dealing 100 points of <span class="Dark">Havoc DMG</span>. This skill is considered Echo Skill that deals Utility DMG.
            - The Magic Box lasts for 14s or until the Resonator is switched out.`,
            skillDetailNum: [""],
            multipliers: []
        },
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "When Shadows Engulf the Hull",
            description: `Casting Resonance Skill <span class="Highlight">Acrobatic Trick</span> grants 100 additional Imagination and 10 Concerto Energy.<br>
            Immune to interruptions when casting Basic Attack <span class="Highlight">Real Fantasy</span>.`,
            detailNum: [""],
            sequenceBuffType: "Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LuokekeM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "When the Luceanite Gleams",
            description: `Casting Basic Attack <span class="Highlight">Real Fantasy</span> grants all Resonators in the team {0} Havoc DMG Bonus for 30s, stacking up to 3 times. Upon reaching the max stacks, it grants all Resonators in the team {0} additional Havoc DMG Bonus for 30s.`,
            detailNum: ["10%", "10%"],
            sequenceBuffType: "Buff",
            sequenceBuffAtrribute: ["Havoc DMG Bonus"],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LuokekeM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "When the Heart Sees and Hands Feel",
            description: `Casting Intro Skill <span class="Highlight">Pero, Help</span> increases Roccia's Crit. Rate by {0} and Crit. DMG by {1} for 15s.`,
            detailNum: ["10%", "30%"],
            sequenceBuffType: "Buff",
            sequenceBuffAtrribute: ["Crit. Rate", "Crit. DMG"],
            sequenceBuff: [10, 30],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LuokekeM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "When Wonders Gather in the Box",
            description: `Casting Resonance Skill <span class="Highlight">Acrobatic Trick</span> increases Basic Attack <span class="Highlight">Real Fantasy</span>'s DMG Multiplier by {0} for 12s.`,
            detailNum: ["60%"],
            sequenceBuffType: "Buff",
            sequenceBuffAtrribute: ["Basic Attack DMG Bonus"],
            sequenceBuff: [60],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LuokekeM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "When Dreams Are Reborn on Stage",
            description: `Increase Resonance Liberation <span class="Highlight">Commedia Improvviso!</span>'s DMG Multiplier by {0} and <span class="Highlight">Heavy Attack</span>'s DMG Multiplier by {1}.`,
            detailNum: ["20%", "80%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Liberation DMG Bonus", "Heavy Attack DMG Bonus"],
            sequenceBuff: [20, 80],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LuokekeM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "When the Golden Wings Fly",
            description: `Casting Resonance Liberation <span class="Highlight">Commedia Improvviso!</span> grants the following effects for 12s:<br>
            - Basic Attack <span class="Highlight">Real Fantasy</span> ignores enemies' DEF by {0}.<br>
            - When Roccia lands after performing Basic Attack <span class="Highlight">Real Fantasy</span> Stage 3, she is launched into mid-air, activating <span class="Highlight">Beyond Imagination</span>. In this state, <span class="Highlight">Basic Attack</span> becomes Basic Attack <span class="Highlight">Reality Recreation</span>, dealing DMG equal to 100% of Basic Attack <span class="Highlight">Real Fantasy</span> Stage 3 DMG, considered Heavy Attack DMG. Roccia is immune to interruptions while casting Basic Attack <span class="Highlight">Reality Recreation</span>.<br>
            - When Roccia lands after performing Basic Attack <span class="Highlight">Reality Recreation</span>, she is launched into mid-air, activating <span class="Highlight">Beyond Imagination</span>. Basic Attack <span class="Highlight">Reality Recreation</span> is only available in the <span class="Highlight">Beyond Imagination</span> state.`,
            detailNum: ["60%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [60],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LuokekeM6_UI.webp"
        },
    ]
}