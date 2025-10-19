import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Phrolova: WWCharacter = {
    name: "Phrolova",
    charaId: 1608,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Havoc",
    weapon: "Rectifier",
    bio: `Phrolova, a Fractsidus Overseer walking the fine line between life and death, an uncanny, deadly conductor.<br>
    A silent wave of her baton is enough to attune the very frequencies of being and conduct the symphonies of "souls." The music of hers can sculpt a better world or, just as easily, summon a legion to wreak havoc.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_fuluoluo_UI.webp",
        icon_sq: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_41_UI.webp",
        model: "https://i.imgur.com/Jk9b8jV.png"
    },
    asension: {
        charaAsension: [
            {
                item: "LF Polygon Core",
                id: 1,
                value: "4"
            },
            {
                item: "MF Polygon Core",
                id: 2,
                value: "12"
            },
            {
                item: "HF Polygon Core",
                id: 3,
                value: "12"
            },
            {
                item: "FF Polygon Core",
                id: 4,
                value: "4"
            },
            {
                item: "Truth in Lies",
                id: 5,
                value: "46"
            },
            {
                item: "\"Afterlife\"",
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
                item: "LF Polygon Core",
                id: 1,
                value: "25"
            },
            {
                item: "MF Polygon Core",
                id: 2,
                value: "28"
            },
            {
                item: "HF Polygon Core",
                id: 3,
                value: "40"
            },
            {
                item: "FF Polygon Core",
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
                item: "The Netherworld's Stare",
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
        base_hp: 862,
        base_atk: 35,
        base_def: 93,
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
            typeName: 'Normal Attack',
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill5.webp",
            skillName: 'Movement of Life and Death',
            skillDescription: `<span class="Title">Basic Attack</span>
            Perform up to 3 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.<br>
            When performing <span class="Highlight">Basic Attack Stage 3</span>, enter <span class="Highlight">Reincarnate</span> state.
            <div class="gap"></div>
            <span class="Title">Heavy Attack</span>
            Consume STA to atta<span class="Highlight">ck the target, dealing <span class="Dark">Havoc DMG</span>.<br>
            Press </span>Normal Attack shortly after casting this skill to cast <span class="Highlight">Basic Attack Stage 2</span>.
            <div class="gap"></div>
            <span class="Title">Scarlet Coda</span>
            Phrolova enters the <span class="Highlight">Compose</span> state every 25s.<br>
            When the following 3 conditions are met, <span class="Highlight">Heavy Attack</span> is replaced with <span class="Highlight">Scarlet Coda</span>.<br>
            - Has 6 <span class="Highlight">Volatile Notes</span>.<br>
            - In the <span class="Highlight">Compose</span> state.<br>
            - Not in the <span class="Highlight">Resolving Chord</span> state.<br>
            <div class="gap"></div>
            <span class="Highlight">Scarlet Coda</span>: Consume STA to deal <span class="Dark">Havoc DMG</span>, Stagnating and pulling in nearby targets. This instance of damage is considered <span class="Highlight">Resonance Skill DMG</span>.<br>
            Each stack of <span class="Highlight">Aftersound</span> additionally increases the DMG Multiplier of this instance of damage.<br>
            Casting this skill is considered as casting Echo Skill.<br>
            Casting this skill sends <span class="Highlight">Compose</span> state into cooldown and activates the <span class="Highlight">Resolving Chord</span> state.
            <div class="gap"></div>
            <span class="Title">Mid-air Attack</span>
            Consume STA to perform a Plunging Attack, dealing <span class="Dark">Havoc DMG</span>.
            <div class="gap"></div>
            <span class="Title">Dodge Counter</span>
            Press <span class="Highlight">Normal Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Dark">Havoc DMG</span>.<br>
            Press <span class="Highlight">Normal Attack</span> shortly after casting this skill to cast <span class="Highlight">Basic Attack Stage 3</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{ values: ["53.45%*2", "29.09%*2", "31.29%*2", "34.38%*2", "36.58%*2", "39.12%*2", "42.64%*2", "46.17%*2", "49.70%*2", "53.45%*2"] }],
                    index: 1
                },
                {
                    attributeName: "Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{ values: ["95.43%", "51.94%", "55.88%", "61.39%", "65.32%", "69.85%", "76.15%", "82.44%", "88.74%", "95.43%"] }],
                    index: 2
                },
                {
                    attributeName: "Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{ values: ["32.69%*6", "17.79%*6", "19.14%*6", "21.03%*6", "22.38%*6", "23.93%*6", "26.08%*6", "28.24%*6", "30.40%*6", "32.69%*6"] }],
                    index: 3
                },
                {
                    attributeName: "Heavy Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{ values: ["79.85%*2", "43.46%*2", "46.75%*2", "51.36%*2", "54.65%*2", "58.44%*2", "63.71%*2", "68.98%*2", "74.25%*2", "79.85%*2"] }],
                    index: 4
                },
                {
                    attributeName: "Scarlet Coda DMG",
                    type: "Skill",
                    skillDetailNum: [{ values: ["33.01%*2+12.38%*8+495.10%", "17.97%*2+6.74%*8+269.46%", "19.33%*2+7.25%*8+289.88%", "21.24%*2+7.97%*8+318.46%", "22.60%*2+8.48%*8+338.89%", "24.16%*2+9.06%*8+362.37%", "26.34%*2+9.88%*8+395.04%", "28.52%*2+10.70%*8+427.71%", "30.70%*2+11.51%*8+460.39%", "33.01%*2+12.38%*8+495.10%"] }],
                    index: 5
                },
                {
                    attributeName: "DMG Multiplier Increase per Aftersound",
                    type: "",
                    skillDetailNum: [{ values: ["82.55%", "44.9%", "48.36%", "53.13%", "56.5%", "60.38%", "65.88%", "71.32%", "76.75%", "82.55%"] }],
                    index: 6
                },
                {
                    attributeName: "Mid-air Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{ values: ["127.24%", "69.25%", "74.50%", "81.85%", "87.10%", "93.13%", "101.53%", "109.92%", "118.32%", "127.24%"] }],
                    index: 7
                },
                {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{ values: ["121.99%", "66.40%", "71.43%", "78.47%", "83.50%", "89.29%", "97.34%", "105.39%", "113.44%", "121.99%"] }],
                    index: 8
                },
                {
                    attributeName: "Scarlet Coda Concerto Regen",
                    type: "",
                    skillDetailNum: [{ values: ["40", "40", "40", "40", "40", "40", "40", "40", "40", "40"] }],
                    index: 9
                },
                {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{ values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"] }],
                    index: 10
                },
                {
                    attributeName: "Scarlet Coda STA Cost",
                    type: "",
                    skillDetailNum: [{ values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"] }],
                    index: 11
                },
                {
                    attributeName: "Mid-air Attack STA Cost",
                    type: "",
                    skillDetailNum: [{ values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"] }],
                    index: 12
                },
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconFuluoluo/SP_IconFuluoluoB1.webp",
            skillName: 'Whispers in a Fleeting Dream',
            skillDescription: `<span class="start-gap"></span>
            Attack the target and deal <span class="Dark">Havoc DMG</span>.<br>
            Casting this skill sends Phrolova into <span class="Highlight">Reincarnate</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Skill",
                    skillDetailNum: [{ values: ["53.30%*2", "57.68%*2", "62.05%*2", "68.17%*2", "72.54%*2", "77.56%*2", "84.55%*2", "91.55%*2", "98.54%*2", "105.97%*2"] }],
                    index: 1
                },
                {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{ values: ["12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s"] }],
                    index: 2
                },
                {
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{ values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"] }],
                    index: 3
                }
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconFuluoluo/SP_IconFuluoluoC1.webp",
            skillName: 'Waltz of Forsaken Depths',
            skillDescription: `<span class="Title">Waltz of Forsaken Depths</span>
            Phrolova's max Resonance Energy is 0. <span class="Highlight">Waltz of Forsaken Depths</span> does not consume Resonance Energy.<br>
            When in the <span class="Highlight">Resolving Chord</span> state, <span class="Highlight">Waltz of Forsaken Depths</span> becomes available.<br>
            Casting this skill ends the <span class="Highlight">Resolving Chord</span> state, and Phrolova enters the <span class="Highlight">Maestro</span> state for 24s.
            <div class="gap"></div>
            <span class="Title">Maestro</span>
            Gain 120% ATK increase.<br>
            Phrolova floats in the air and commands Hecate to fight. Hecate will share Phrolova's stats and statuses, and damage dealt by Hecate will be considered coming from Phrolova. Hecate's attacks will not remove the target's Hazy Dream state.<br>
            During this period, Phrolova plays the <span class="Highlight">Volatile Notes</span> in turn. Each <span class="Highlight">Volatile Note</span> holds for 4s.<br>
            If Phrolova is the active Resonator on the field, she can give the following cues to Hecate. Any damage taken by Hecate in this state affects Phrolova as well.<br>
            - <span class="Highlight">Cue - Basic Attack</span>: Press Normal Attack to command Hecate to cast <span class="Highlight">Basic Attack - Hecate</span>. When Phrolova is the active Resonator on the field, for every 2 times Hecate casts <span class="Highlight">Basic Attack - Hecate</span>, the next <span class="Highlight">Basic Attack - Hecate</span> is replaced with <span class="Highlight">Enhanced Attack - Hecate</span>.<br>
            - <span class="Highlight">Cue - Dodge</span>: Press Dodge to command Hecate to dodge an attack. Hecate takes no damage from a hit successfully Dodged.<br>
            - <span class="Highlight">Cue - Reset</span>: Press Jump to reset Hecate's position.<br>
            - <span class="Highlight">Cue - Curtain Call</span>: Press Resonance Liberation to command Hecate to cast <span class="Highlight">Curtain Call</span> and end the <span class="Highlight">Maestro</span> state.<br>
            When Phrolova is not the active Resonator, Hecate takes no damage and automatically casts <span class="Highlight">Basic Attack - Hecate</span> to attack the target. When Resonators in the team cast Echo Skill, Hecate casts <span class="Highlight">Enhanced Attack - Hecate</span> to attack the target. This effect can be triggered up to 10 times in total during Phrolova's <span class="Highlight">Maestro</span> state. Echoes of the same name can trigger this effect 1 time.<br>
            Switching back to Phrolova ends <span class="Highlight">Maestro</span> state.<br>
            Ending <span class="Highlight">Maestro</span> state removes all <span class="Highlight">Volatile Notes</span>.
            <div class="gap"></div>
            <span class="Title">Basic Attack - Hecate</span>
            Perform up to 2 consecutive attacks, dealing <span class="Dark">Havoc DMG</span> (considered <span class="Highlight">Echo Skill DMG</span>).
            <div class="gap"></div>
            <span class="Title">Enhanced Attack - Hecate: Strings</span>
            When Phrolova plays <span class="Highlight">Volatile Note - Strings</span>, Hecate casts <span class="Highlight">Enhanced Attack - Hecate: Strings</span> when casting <span class="Highlight">Enhanced Attack - Hecate</span>, dealing <span class="Dark">Havoc DMG</span> and Stagnating the targets (considered <span class="Highlight">Echo Skill DMG</span>).
            <div class="gap"></div>
            <span class="Title">Enhanced Attack - Hecate: Winds</span>
            When Phrolova plays <span class="Highlight">Volatile Note - Winds</span>, Hecate casts <span class="Highlight">Enhanced Attack - Hecate: Winds</span> when casting <span class="Highlight">Enhanced Attack - Hecate</span>, dealing <span class="Dark">Havoc DMG</span>, pulling the targets in (considered <span class="Highlight">Echo Skill DMG</span>).
            <div class="gap"></div>
            <span class="Title">Enhanced Attack - Hecate: Cadenza</span>
            When Phrolova plays <span class="Highlight">Volatile Note - Cadenza</span>, Hecate casts <span class="Highlight">Enhanced Attack - Hecate: Cadenza</span> when casting <span class="Highlight">Enhanced Attack - Hecate</span>, dealing <span class="Dark">Havoc DMG</span>, Stagnating and pulling the targets in (considered <span class="Highlight">Echo Skill DMG</span>).
            <div class="gap"></div>
            <span class="Title">Curtain Call</span>
            <span class="Highlight">Curtain Call</span> can be cast via the following 5 ways, Stagnating the targets and dealing <span class="Dark">Havoc DMG</span>.<br>
            - When Phrolova is the active Resonator on the field, end the <span class="Highlight">Maestro</span> state.<br>
            - When Phrolova is in the <span class="Highlight">Maestro</span> state, switch to Phrolova without casting Intro Skill.<br>
            - When Phrolova is not the active Resonator and the Mae<span class="Highlight"></span>stro state ends, switch to Phrolova without casting Intro Skill.<br>
            - When Phrolova is in the <span class="Highlight">Maestro</span> state, press Resonance Liberation.<br>
            - When Phrolova is in the <span class="Highlight">Resolving Chord</span> state, hold Resonance Liberation.<br>
            When in <span class="Highlight">Resolving Chord</span> state, casting <span class="Highlight">Curtain Call</span> removes all <span class="Highlight">Volatile Notes</span> and ends the <span class="Highlight">Resolving Chord</span> state.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Basic Attack - Hecate Stage 1 DMG",
                    type: "Echo",
                    skillDetailNum: [{ values: ["14.00%", "15.15%", "16.30%", "17.91%", "19.06%", "20.38%", "22.21%", "24.05%", "25.89%", "27.84%"] }],
                    index: 1
                },
                {
                    attributeName: "Basic Attack - Hecate Stage 2 DMG",
                    type: "Echo",
                    skillDetailNum: [{ values: ["7.00%*2", "7.58%*2", "8.15%*2", "8.96%*2", "9.53%*2", "10.19%*2", "11.11%*2", "12.03%*2", "12.95%*2", "13.92%*2"] }],
                    index: 2
                },
                {
                    attributeName: "Enhanced Attack - Hecate: Strings DMG",
                    type: "Echo",
                    skillDetailNum: [{ values: ["52.50%+122.50%", "56.81%+132.55%", "61.11%+142.59%", "67.14%+156.66%", "71.45%+166.70%", "76.40%+178.25%", "83.29%+194.33%", "90.17%+210.40%", "97.06%+226.47%", "104.38%+243.55%"] }],
                    index: 3
                },
                {
                    attributeName: "Enhanced Attack - Hecate: Winds DMG",
                    type: "Echo",
                    skillDetailNum: [{ values: ["49.88%+116.38%", "53.97%+125.92%", "58.06%+135.47%", "63.79%+148.83%", "67.87%+158.37%", "72.58%+169.34%", "79.12%+184.61%", "85.67%+199.88%", "92.21%+215.15%", "99.16%+231.37%"] }],
                    index: 4
                },
                {
                    attributeName: "Enhanced Attack - Hecate: Cadenza DMG",
                    type: "",
                    skillDetailNum: [{ values: ["52.50%+122.50%", "56.81%+132.55%", "61.11%+142.59%", "67.14%+156.66%", "71.45%+166.70%", "76.40%+178.25%", "83.29%+194.33%", "90.17%+210.40%", "97.06%+226.47%", "104.38%+243.55%"] }],
                    index: 5
                },
                {
                    attributeName: "Curtain Call DMG",
                    type: "Liberation",
                    skillDetailNum: [{ values: ["234.00%", "253.19%", "272.38%", "299.24%", "318.43%", "340.50%", "371.20%", "401.90%", "432.60%", "465.22%"] }],
                    index: 6
                },
                {
                    attributeName: "Waltz of Forsaken Depths Concerto Regen",
                    type: "",
                    skillDetailNum: [{ values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"] }],
                    index: 7
                },
                {
                    attributeName: "Waltz of Forsaken Depths Duration",
                    type: "",
                    skillDetailNum: [{ values: ["24s", "24s", "24s", "24s", "24s", "24s", "24s", "24s", "24s", "24s"] }],
                    index: 8
                }
            ]
        },
        {
            skillId: 4,
            typeName: 'Intro Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconFuluoluo/SP_IconFuluoluoQTE.webp",
            skillName: 'Suite of Quietus',
            skillDescription: `<span class="Title">Suite of Quietus</span>
            Attack the target, dealing <span class="Dark">Havoc DMG</span>.<br>
            Press <span class="Highlight">Normal Attack</span> shortly after casting this skill to cast <span class="Highlight">Basic Attack Stage 3</span>.
            <div class="gap"></div>
            <span class="Title">Suite of Immortality</span>
            When in the <span class="Highlight">Maestro</span> state, the next <span class="Highlight">Suite of Quietus</span> is replaced with <span class="Highlight">Suite of Immortality</span>. This replacement is cancelled if <span class="Highlight">Curtain Call</span> is cast while in this state. <span class="Highlight">Suite of Immortality</span> deals <span class="Dark">Havoc DMG</span> (considered <span class="Highlight">Resonance Skill DMG</span>) and Stagnates the target.<br>
            Press <span class="Highlight">Normal Attack</span> shortly after casting this skill to cast <span class="Highlight">Basic Attack Stage 3</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Suite of Quietus DMG",
                    type: "",
                    skillDetailNum: [{ values: ["40.55%+60.82%", "43.87%+65.81%", "47.20%+70.79%", "51.85%+77.78%", "55.18%+82.76%", "59.00%+88.50%", "64.32%+96.48%", "69.64%+104.46%", "74.96%+112.44%", "80.61%+120.91%"] }],
                    index: 1
                },
                {
                    attributeName: "Suite of Immortality DMG",
                    type: "Skill",
                    skillDetailNum: [{ values: ["300.00%", "324.60%", "349.20%", "383.64%", "408.24%", "436.53%", "475.89%", "515.25%", "554.61%", "596.43%"] }],
                    index: 2
                },
                {
                    attributeName: "Suite of Quietus Concerto Regen",
                    type: "",
                    skillDetailNum: [{ values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"] }],
                    index: 3
                },
                {
                    attributeName: "Suite of Immortality Concerto Regen",
                    type: "",
                    skillDetailNum: [{ values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"] }],
                    index: 4
                }
            ]
        },
        {
            skillId: 5,
            typeName: 'Outro Skill',
            skillName: 'Unfinished Piece',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconFuluoluo/SP_IconFuluoluoT.webp",
            skillDescription: `The incoming Resonator gains 20% Havoc DMG Amplification and 25% Heavy Attack DMG Amplification for 14s or until they are switched out.<br>
            If Phrolova is in <span class="Highlight">Maestro</span> state when she casts this skill, Hecate additionally casts <span class="Highlight">Enhanced Attack - Hecate</span> 2 times when Phrolova is switched off the field while in the same <span class="Highlight">Maestro</span> state duration.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconFuluoluo/SP_IconFuluoluoY.webp",
            skillName: 'Rhapsody of a New World',
            skillDescription: `<span class="Title">Basic Attack - Movement of Fate and Finality</span>
            When in <span class="Highlight">Reincarnate</span>, press <span class="Highlight">Normal Attack</span> on the ground to cast <span class="Highlight">Movement of Fate and Finality</span>, which Stagnates the target, dealing <span class="Dark">Havoc DMG</span> (considered <span class="Highlight">Resonance Skill DMG</span>) and ending <span class="Highlight">Reincarnate</span> afterward.
            <div class="gap"></div>
            <span class="Title">Resonance Skill - Murmurs in a Haunting Dream</span>
            When in <span class="Highlight">Reincarnate</span>, press <span class="Highlight">Resonance Skill</span> on the ground to cast <span class="Highlight">Murmurs in a Haunting Dream</span>, dealing <span class="Dark">Havoc DMG</span> (considered <span class="Highlight">Resonance Skill DMG</span>) and ending <span class="Highlight">Reincarnate</span> afterward.
            <div class="gap"></div>
            <span class="Title">Aftersound/span>
            Phrolova can hold up to 24 stacks of Aftersound.<br>
            When Phrolova is not the active Resonator, casting <span class="Highlight">Enhanced Attack - Hecate: Strings</span>, <span class="Highlight">Enhanced Attack - Hecate: Winds</span>, and <span class="Highlight">Enhanced Attack - Hecate: Cadenza</span> grants 1 stack of Aftersound.<br>
            When Phrolova is out of combat, all stacks of Aftersound are removed every 30s.
            <div class="gap"></div>
            <span class="Title">Volatile Note</span>
            Phrolova can hold up to 6 <span class="Highlight">Volatile Notes</span>. When <span class="Highlight">Volatile Notes</span> reach the max number, gaining new <span class="Highlight">Volatile Notes</span> moves all <span class="Highlight">Volatile Notes</span> one slot to the left, and the leftmost <span class="Highlight">Volatile Note - Strings</span> or <span class="Highlight">Volatile Note - Winds</span> will be removed.<br>
            Hitting a target with <span class="Highlight">Basic Attack Stage 3</span> or <span class="Highlight">Movement of Fate and Finality</span> grants <span class="Highlight">1 Volatile Note - Strings</span>.<br>
            Hitting a target with Resonance Skill <span class="Highlight">Whispers in a Fleeting Dream</span> or Resonance Skill <span class="Highlight">Murmurs in a Haunting Dream</span> grants 1 <span class="Highlight">Volatile Note - Winds</span>.<br>
            When <span class="Highlight">Inherent Skill - Accidental</span> is activated, casting Suite of Quietus, Suite of Immortality, or Echo Skill grants <span class="Highlight">1 Volatile Note - Cadenza</span>.<br>
            Phrolova cannot obtain <span class="Highlight">Volatile Notes</span> during <span class="Highlight">Resolving Chord</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Movement of Fate and Finality DMG",
                    type: "Skill",
                    skillDetailNum: [{ values: ["19.05%*4+59.27%*3", "20.62%*4+64.13%*3", "22.18%*4+68.99%*3", "24.37%*4+75.80%*3", "25.93%*4+80.66%*3", "27.72%*4+86.24%*3", "30.22%*4+94.02%*3", "32.72%*4+101.80%*3", "35.22%*4+109.57%*3", "37.88%*4+117.83%*3"] }],
                    index: 1
                },
                {
                    attributeName: "Murmurs in a Haunting Dream DMG",
                    type: "Skill",
                    skillDetailNum: [{ values: ["11.67%*4+23.34%+163.38%", "12.63%*4+25.26%+176.78%", "13.59%*4+27.17%+190.18%", "14.93%*4+29.85%+208.94%", "15.89%*4+31.77%+222.33%", "16.99%*4+33.97%+237.74%", "18.52%*4+37.03%+259.17%", "20.05%*4+40.09%+280.61%", "21.58%*4+43.15%+302.05%", "23.21%*4+46.41%+324.82%"] }],
                    index: 2
                }
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Accidental',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconFuluoluo/SP_IconFuluoluoD1.webp",
            skillDescription: `Casting <span class="Highlight">Echo Skill</span> grants increased resistance to interruption and reduces damage taken by 30% for 15s.<br>
            After casting <span class="Highlight">Suite of Quietus</span>, <span class="Highlight">Suite of Immortality</span>, and <span class="Highlight">Echo Skill</span>, the next <span class="Highlight">Volatile Note</span> becomes <span class="Highlight">Volatile Note - Cadenza</span>.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Octet',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconFuluoluo/SP_IconFuluoluoD2.webp",
            skillDescription: `Obtain 10 stacks of <span class="Highlight">Aftersound</span> upon entering battle. This effect cannot be triggered again within 4s after exiting the combat state. For every 1 stacks of <span class="Highlight">Aftersound</span>, Crit. DMG is increased by 2.5%.<br>
            When <span class="Highlight">Aftersound</span> reaches the max, each new stack of <span class="Highlight">Aftersound</span> increases Phrolova's Crit. DMG by 1%, up to 100%. The increased Crit. DMG is removed when <span class="Highlight">Aftersound</span> stacks are cleared.`,
            skillDetailNum: [""],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "A Key to Netherworld's Secrets",
            description: `The DMG Multiplier of <span class="Highlight">Movement of Fate and Finality</span> is increased by 80%.<br>
            The DMG Multiplier of <span class="Highlight">Murmurs in a Haunting Dream</span> is increased by 80%.<br>
            If Phrolova has less than 2 <span class="Highlight">Volatile Notes</span> when she is not in the <span class="Highlight">Maestro</span> state and stays out of combat for 4s, she gains <span class="Highlight">Volatile Note - Cadenza</span> until she has at least 2 <span class="Highlight">Volatile Notes</span>.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FuluoluoM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "A Rope Tied to a Life Beyond",
            description: `The DMG Multiplier of <span class="Highlight">Scarlet Coda</span> is increased by 75%. <span class="Highlight">Aftersound</span> now additionally increases the DMG Multiplier of <span class="Highlight">Scarlet Coda</span> by 75%.<br>
            Casting <span class="Highlight">Scarlet Coda</span> grants 14 stacks of <span class="Highlight">Aftersound</span>.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FuluoluoM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "A Dagger to Cut Clean Obsessions",
            description: `Echo Skill DMG is Amplified by 80%.<br>
            Casting <span class="Highlight">Scarlet Coda</span> will convert all <span class="Highlight">Volatile Notes</span> to <span class="Highlight">Volatile Notes - Cadenza</span> in turn. Targets hit by <span class="Highlight">Enhanced Attack - Hecate: Cadenza</span> will have their ATK reduced by 20% for 15s.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FuluoluoM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "A Torch Illuminating the Path",
            description: `Casting <span class="Highlight">Echo Skill</span> grants 20% Attribute DMG Bonus for all Resonators in the team for 30s.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FuluoluoM5_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "A Forked Road in Fate's Heartland",
            description: `Upon entering the <span class="Highlight">Maestro</span> state, generate a field to Stagnate the nearby targets, which lasts for 4s. Leaving the <span class="Highlight">Maestro</span> state or switching to other Resonators removes the Stagnation effect early.<br>
            Damage taken during the <span class="Highlight">Maestro</span> state is reduced by 30%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FuluoluoM4_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "A Night to Depart From Eternal Rest",
            description: `The DMG Multiplier of <span class="Highlight">Enhanced Attack - Hecate</span> is increased by 24%.
            <div class="gap"></div>
            During <span class="Highlight">Movement of Fate and Finality</span> and <span class="Highlight">Murmurs in a Haunting Dream</span>, command Hecate to cast 1 <span class="Highlight">Apparition of Beyond - Hecate</span>, dealing <span class="Dark">Havoc DMG</span> equal to 216.42% of Phrolova's ATK (considered <span class="Highlight">Echo Skill DMG</span>) and granting 8 stacks of <span class="Highlight">Aftersound</span> on hit.
            <div class="gap"></div>
            If Phrolova is not the active Resonator during the <span class="Highlight">Maestro</span> state, targets take 40% more DMG from Hecate and Phrolova. If Phrolova is the active Resonator during the <span class="Highlight">Maestro</span> state, gain 60% Havoc DMG Bonus.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FuluoluoM6_UI.webp"
        },
    ]
}