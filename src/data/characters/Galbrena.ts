import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Galbrena: WWCharacter = {
    name: "Galbrena",
    charaId: 1208,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Fusion",
    weapon: "Pistols",
    bio: `Cold and decisive, she is the "Discord Slayer" who hunts across Solaris and the same "Fiend of Ever-burning Flame" spoken of in whispers. Now, she serves as a Black Shores Consultant, active across the world.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_Jiabeilina_UI.webp",
        icon_sq: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_55_UI.webp",
        model: "https://i.imgur.com/NSd0yRf.png"
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
                item: "Blighted Crown of Puppet",
                id: 5,
                value: "46"
            },
            {
                item: "Stone Rose",
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
        base_hp: 824,
        base_atk: 37,
        base_def: 91,
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
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill3.webp",
            skillName: 'Slayer\'s Trigger',
            skillDescription: `<span class="Title">Basic Attack</span>
            Perform up to 4 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>. Basic Attack Stage 1 to 3 DMG are considered as <span class="Highlight">Heavy Attack DMG</span>, and Basic Attack Stage 4 DMG as <span class="Highlight">Echo Skill DMG</span>.<br>
            Press Normal Attack right after performing <span class="Highlight">Basic Attack Stage 4</span> to perform <span class="Highlight">Basic Attack Stage 2</span>.
            <div class="gap"></div>
            <span class="Title">Heavy Attack - Volley of Death</span>
            Consume STA to attack the target and perform up to 3 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>. Stage 3 DMG is considered as <span class="Highlight">Echo Skill DMG</span>.<br>
            Press Normal Attack right after performing <span class="Highlight">Heavy Attack - Volley of Death Stage 1</span> to perform <span class="Highlight">Basic Attack Stage 2</span>. Press Normal Attack right after performing <span class="Highlight">Heavy Attack - Volley of Death Stage 2 or 3</span> to perform <span class="Highlight">Basic Attack Stage 3</span>.
            <div class="gap"></div>
            <span class="Title">Mid-air Attack - Ashfall Barrage</span>
            While in mid-air, press Normal Attack to consume STA to perform a Plunging Attack, dealing <span class="Fire">Fusion DMG</span>, considered as <span class="Highlight">Heavy Attack DMG</span>.<br>
            While in mid-air, hold Normal Attack to continuously consume STA to launch a barrage of shots at targets below, dealing <span class="Fire">Fusion DMG</span>, considered as <span class="Highlight">Heavy Attack DMG</span>. If Galbrena does not land when interrupted during the barrage, she cannot immediately cast this skill again. Release Normal Attack during the barrage to cast Plunging Attack.<br>
            Press Normal Attack right after casting Plunging Attack to cast <span class="Highlight">Basic Attack Stage 3</span>.
            <div class="gap"></div>
            <span class="Title">Dodge Counter - Blood for Blood</span>
            Press Normal Attack right after a successful Dodge to attack the target, dealing <span class="Fire">Fusion DMG</span>, considered as <span class="Highlight">Heavy Attack DMG</span>.<br>
            Press Normal Attack right after casting this skill to cast <span class="Highlight">Basic Attack Stage 4</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Basic Attack Stage 1 DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["29.77%", "32.21%", "34.65%", "38.07%", "40.51%", "43.31%", "47.22%", "51.12%", "55.03%", "59.18%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Basic Attack Stage 2 DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["13.23%+13.23%+39.69%", "14.32%+14.32%+42.95%", "15.40%+15.40%+46.20%", "16.92%+16.92%+50.76%", "18.01%+18.01%+54.02%", "19.26%+19.26%+57.76%", "20.99%+20.99%+62.97%", "22.73%+22.73%+68.17%", "24.46%+24.46%+73.38%", "26.31%+26.31%+78.91%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Basic Attack Stage 3 DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["14.39%+14.39%+21.58%+21.58%", "15.57%+15.57%+23.35%+23.35%", "16.75%+16.75%+25.12%+25.12%", "18.40%+18.40%+27.59%+27.59%", "19.58%+19.58%+29.36%+29.36%", "20.93%+20.93%+31.40%+31.40%", "22.82%+22.82%+34.23%+34.23%", "24.71%+24.71%+37.06%+37.06%", "26.59%+26.59%+39.89%+39.89%", "28.60%+28.60%+42.89%+42.89%"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Basic Attack Stage 4 DMG",
                    type: "Echo",
                    skillDetailNum: [{
                        values: ["89.46%", "96.80%", "104.14%", "114.41%", "121.74%", "130.18%", "141.92%", "153.65%", "165.39%", "177.86%"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Dodge Counter - Blood for Blood DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["20.65%+20.65%+30.97%+30.97%", "22.34%+22.34%+33.51%+33.51%", "24.04%+24.04%+36.05%+36.05%", "26.41%+26.41%+39.61%+39.61%", "28.10%+28.10%+42.15%+42.15%", "30.05%+30.05%+45.07%+45.07%", "32.76%+32.76%+49.13%+49.13%", "35.46%+35.46%+53.19%+53.19%", "38.17%+38.17%+57.26%+57.26%", "41.05%+41.05%+61.57%+61.57%"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Mid-air Attack - Ashfall Barrage Plunging Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["72.00%", "77.91%", "83.81%", "92.08%", "97.98%", "104.77%", "114.22%", "123.66%", "133.11%", "143.15%"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Mid-air Attack - Ashfall Barrage Sustained Fire DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["13.50%", "14.61%", "15.72%", "17.27%", "18.38%", "19.65%", "21.42%", "23.19%", "24.96%", "26.84%"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Heavy Attack - Volley of Death Stage 1 DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["26.81%+26.81%", "29.01%+29.01%", "31.21%+31.21%", "34.29%+34.29%", "36.48%+36.48%", "39.01%+39.01%", "42.53%+42.53%", "46.05%+46.05%", "49.56%+49.56%", "53.30%+53.30%"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Heavy Attack - Volley of Death Stage 2 DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["17.40%*2", "18.83%*2", "20.26%*2", "22.25%*2", "23.68%*2", "25.32%*2", "27.60%*2", "29.88%*2", "32.17%*2", "34.59%*2"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Heavy Attack - Volley of Death Stage 3 DMG",
                    type: "Echo",
                    skillDetailNum: [{
                        values: ["8.44%*3+59.05%", "9.13%*3+63.89%", "9.82%*3+68.73%", "10.79%*3+75.51%", "11.48%*3+80.35%", "12.28%*3+85.92%", "13.39%*3+93.67%", "14.49%*3+101.41%", "15.60%*3+109.16%", "16.77%*3+117.39%"]
                    }],
                    index: 10
                },
                {
                    attributeName: "Mid-air Attack - Ashfall Barrage Sustained Fire STA Cost (Per Sec)",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 11
                },
                {
                    attributeName: "Mid-air Attack - Ashfall Barrage STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 12
                },
                {
                    attributeName: "Heavy Attack - Volley of Death Stage 1 STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 13
                },
                {
                    attributeName: "Heavy Attack - Volley of Death Stage 2 STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 14
                },
                {
                    attributeName: "Heavy Attack - Volley of Death Stage 3 STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 15
                }
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconJiaBeiLiNa/SP_IconJiaBeiLiNaB1.webp",
            skillName: 'Edge Transcended',
            skillDescription: `<span class="Title">Resonance Skill - Encroach</span>
            Dash forward and leap into the air. Flip backward upon hitting the target, dealing <span class="Fire">Fusion DMG</span>, considered <span class="Highlight">Heavy Attack DMG</span>.
            <div class="gap"></div>
            <span class="Title">Resonance Skill - Ascent of Malice</span>
            Upon reaching 100 points of <span class="Highlight">Sinflame</span>, <span class="Highlight">Resonance Skill</span> is replaced with <span class="Highlight">Resonance Skill - Ascent of Malice</span>.<br>
            Slash at enemies with her wings, dealing <span class="Fire">Fusion DMG</span>, considered <span class="Highlight">Heavy Attack DMG</span>. Upon casting this skill:<br>
            - Galbrena enters <span class="Highlight">Demon Hypostasis</span>.<br>
            - <span class="Highlight">Sinflame</span> is converted into an equivalent amount of <span class="Highlight">Purging Flame</span>.<br>
            - Can be followed by <span class="Highlight">Basic Attack - Seraphic Execution Stage 2</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Resonance Skill - Encroach DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["5.40%+12.60%", "5.85%+13.63%", "6.29%+14.66%", "6.91%+16.11%", "7.35%+17.14%", "7.86%+18.33%", "8.57%+19.98%", "9.28%+21.64%", "9.98%+23.29%", "10.74%+25.04%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Resonance Skill - Ascent of Malice DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["25.94%+25.94%", "28.07%+28.07%", "30.20%+30.20%", "33.17%+33.17%", "35.30%+35.30%", "37.75%+37.75%", "41.15%+41.15%", "44.55%+44.55%", "47.96%+47.96%", "51.57%+51.57%"]
                    }],
                    index: 2
                },{
                    attributeName: "Resonance Skill - Ascent of Malice Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 3
                },{
                    attributeName: "Resonance Skill - Encroach Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["5s", "5s", "5s", "5s", "5s", "5s", "5s", "5s", "5s", "5s"]
                    }],
                    index: 4
                },{
                    attributeName: "Resonance Skill - Ascent of Malice Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["13s", "13s", "13s", "13s", "13s", "13s", "13s", "13s", "13s", "13s"]
                    }],
                    index: 5
                }
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconJiaBeiLiNa/SP_IconJiaBeiLiNaC1.webp",
            skillName: 'Hellfire Absolution',
            skillDescription: `<span class="start-gap"></span>
            Attack the target and deal <span class="Fire">Fusion DMG</span>, considered <span class="Highlight">Echo Skill DMG</span>. Gain 85% DMG Multiplier increase for <span class="Highlight">Basic Attack - Seraphic Execution</span>, <span class="Highlight">Heavy Attack - Flamewing Verdict</span>, <span class="Highlight">Mid-air Attack - Hellsent Barrage</span>, and <span class="Highlight">Dodge Counter - Purgatory Scourge</span> for 14s while in <span class="Highlight">Demon Hypostasis</span>.<br>
            Press Normal Attack after casting Resonance Liberation to cast <span class="Highlight">Basic Atttack Stage 2</span>. While in <span class="Highlight">Demon Hypostasis</span>, cast <span class="Highlight">Basic Attack - Seraphic Execution Stage 2</span> instead.<br>
            Can be cast in mid-air close to the ground.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Resonance Liberation - Hellfire Absolution DMG",
                    type: "Echo",
                    skillDetailNum: [{
                        values: ["55.79%+45.64%*11", "60.36%+49.39%*11", "64.93%+53.13%*11", "71.34%+58.37%*11", "75.91%+62.11%*11", "81.17%+66.41%*11", "88.49%+72.40%*11", "95.81%+78.39%*11", "103.13%+84.38%*11", "110.90%+90.74%*11"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Resonance Liberation - Hellfire Absolution Resonance Energy Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Resonance Liberation - Hellfire Absolution Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Resonance Liberation - Hellfire Absolution Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s"]
                    }],
                    index: 4
                }
            ]
        },
        {
            skillId: 4,
            typeName: 'Intro Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconJiaBeiLiNa/SP_IconJiaBeiLiNaQTE.webp",
            skillName: 'Hellflare Overload',
            skillDescription: `<span class="start-gap"></span>
            Attack the target and deal <span class="Fire">Fusion DMG</span>.<br>
            Hold Normal Attack after casting this skill to cast <span class="Highlight">Heavy Attack - Volley of Death Stage 2</span>. While in <span class="Highlight">Demon Hypostasis</span>, cast <span class="Highlight">Heavy Attack - Flamewing Verdict Stage 2</span> instead.<br>
            Press Normal Attack right after casting this skill to perform <span class="Highlight">Basic Attack Stage 2</span>, which is replaced with <span class="Highlight">Basic Attack - Seraphic Execution Stage 2</span> if Galbrena is in <span class="Highlight">Demon Hypostasis</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Intro Skill - Hellflare Overload DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["47.34%", "51.23%", "55.11%", "60.54%", "64.43%", "68.89%", "75.10%", "81.31%", "87.52%", "94.12%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Intro Skill - Hellflare Overload Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 2
                }
            ]
        },
        {
            skillId: 5,
            typeName: 'Outro Skill',
            skillName: 'Ashen Pursuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconJiaBeiLiNa/SP_IconJiaBeiLiNaT.webp",
            skillDescription: `Attack the target, dealing <span class="Fire">Fusion DMG</span> equal to 79.5%*3+556.5% of Galbrena's ATK.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconJiaBeiLiNa/SP_IconJiaBeiLiNaY.webp",
            skillName: 'Beyond Threshold',
            skillDescription: `<span class="Title">Threshold State</span>
            By default, Galbrena is in <span class="Highlight">Threshold State</span>, and in this state, she accumulates <span class="Highlight">Afterflame</span> and <span class="Highlight">Sinflame</span>.
            <div class="gap"></div>
            <span class="Title">Demon Hypostasis</span>
            While in <span class="Highlight">Demon Hypostasis</span>, Basic Attack, Heavy Attack - Volley of Death, Mid-air Attack - Ashfall Barrage, Dodge Counter - Blood for Blood, and Resonance Skill - Encroach are replaced with Basic Attack - Seraphic Execution, Heavy Attack - Flamewing Verdict, Mid-air Attack - Hellsent Barrage, Dodge Counter - Purgatory Scourge, and Resonance Skill - Ravage, which consume <span class="Highlight">Purging Flame</span> on hit.<br>
            While in <span class="Highlight">Demon Hypostasis</span>, every point of <span class="Highlight">Afterflame</span> increases the DMG of <span class="Highlight">Basic Attack - Seraphic Execution</span>, <span class="Highlight">Heavy Attack - Flamewing Verdict</span>, <span class="Highlight">Mid-air Attack - Hellsent Barrage</span>, <span class="Highlight">Resonance Skill - Ravage</span>, and <span class="Highlight">Dodge Counter - Purgatory Scourge</span> by 1.5%, up to 60%, which is removed upon exiting <span class="Highlight">Demon Hypostasis</span>.<br>
            When <span class="Highlight">Purging Flame</span> depletes or after staying in <span class="Highlight">Demon Hypostasis</span> for over 50s, <span class="Highlight">Demon Hypostasis</span> ends automatically.
            <div class="gap"></div>
            <span class="Title">Basic Attack - Seraphic Execution</span>
            Perform up to 5 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>. Consume <span class="Highlight">Purging Flame</span> on hit. Stage 1 to 3 DMG are considered <span class="Highlight">Heavy Attack DMG</span>, and Stage 4 & 5 DMG <span class="Highlight">Echo Skill DMG</span>.<br>
            Press Normal Attack after casting <span class="Highlight">Basic Attack - Seraphic Execution Stage 5</span> to cast <span class="Highlight">Basic Attack - Seraphic Execution Stage 3</span>.
            <div class="gap"></div>
            <span class="Title">Heavy Attack - Flamewing Verdict</span>
            Consume STA to attack the target and perform up to 3 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>. Consume <span class="Highlight">Purging Flame</span> on hit. Stage 3 DMG is considered <span class="Highlight">Echo Skill DMG</span>.<br>
            Press Normal Attack after casting <span class="Highlight">Heavy Attack - Flamewing Verdict Stage 1</span> to cast <span class="Highlight">Basic Attack - Seraphic Execution Stage 2</span>.<br>
            Press Normal Attack after casting <span class="Highlight">Heavy Attack - Flamewing Verdict Stage 2</span> & <span class="Highlight">Stage 3</span> to cast <span class="Highlight">Basic Attack - Seraphic Execution Stage 3</span>.
            <div class="gap"></div>
            <span class="Title">Mid-air Attack - Hellsent Barrage</span>
            While in mid-air, press Normal Attack to consume STA to perform aerial attacks, dealing <span class="Fire">Fusion DMG</span>, considered <span class="Highlight">Heavy Attack DMG</span>. Consume <span class="Highlight">Purging Flame</span> on hit.<br>
            While in mid-air, hold Normal Attack to continuously consume STA to launch a barrage of shots at targets, dealing <span class="Fire">Fusion DMG</span>, considered <span class="Highlight">Heavy Attack DMG</span>. Consume <span class="Highlight">Purging Flame</span> on hit. If Galbrena does not land when interrupted during the barrage, she cannot immediately cast this skill again. Release Normal Attack during the barrage to cast Plunging Attack.<br>
            Press Normal Attack after the Plunging Attack to cast <span class="Highlight">Basic Attack - Seraphic Execution Stage 3</span>.
            <div class="gap"></div>
            <span class="Title">Dodge Counter - Purgatory Scourge</span>
            Press Normal Attack right after a successful Dodge to attack the target, dealing <span class="Fire">Fusion DMG</span>, considered <span class="Highlight">Heavy Attack DMG</span>.<br>
            Press Normal Attack right after casting this skill to cast <span class="Highlight">Basic Attack - Seraphic Execution Stage 4</span>.
            <div class="gap"></div>
            <span class="Title">Resonance Skill - Ravage</span>
            Dash forward and leap into the air. Flip backward upon hitting the target, dealing <span class="Fire">Fusion DMG</span>, considered <span class="Highlight">Heavy Attack DMG</span>. Consume <span class="Highlight">Purging Flame</span> on hit. <span class="Highlight">Resonance Skill - Ravage</span> and <span class="Highlight">Resonance Skill - Encroach</span> share a cooldown.
            <div class="gap"></div>
            <span class="Title">Hellstride</span>
            Press Dodge on the ground while casting <span class="Highlight">Galbrena's own skills</span> to cast <span class="Highlight">Hellstride</span> to deal a fixed amount of <span class="Fire">Fusion DMG</span>, considered Basic Attack DMG that does not bear any effect from DMG buffs. <span class="Highlight">Hellstride</span> can trigger successful Dodges. <span class="Highlight">Hellstride</span> cannot be cast consecutively.<br>
            Casting this skill does not reset the attack cycles within a short period of time.
            <div class="gap"></div>
            <span class="Title">Burning Drive</span>
            Casting <span class="Highlight">Intro Skill</span>, <span class="Highlight">Hellstride</span>, <span class="Highlight">Normal Attack - Seraphic Execution Basic Attack Stage 4</span>, <span class="Highlight">Resonance Skill - Encroach</span>, <span class="Highlight">Resonance Skill - Ascent of Malice</span>, and <span class="Highlight">Resonance Skill - Ravage</span> increases Galbrena's resistance to interruptions and ATK by 20% for 4s.
            <div class="gap"></div>
            <span class="Title">Afterflame</span>
            Galbrena can hold up to 40 points of <span class="Highlight">Afterflame</span>.<br>
            While in <span class="Highlight">Threshold State</span>, Galbrena recovers 8 points of <span class="Highlight">Afterflame</span> when Resonators in the nearby team cast Echo Skill. Echoes with the same name can only trigger this effect once. This effect resets when Galbrena exits <span class="Highlight">Demon Hypostasis</span>.<br>
            All <span class="Highlight">Afterflame</span> is removed upon exiting <span class="Highlight">Demon Hypostasis</span>.
            <div class="gap"></div>
            <span class="Title">Sinflame</span>
            Galbrena can hold up to 100 points of <span class="Highlight">Sinflame</span>.<br>
            While in <span class="Highlight">Threshold State</span>, hitting an enemy with Basic Attack, Heavy Attack - Volley of Death, Mid-air Attack - Ashfall Barrage, Resonance Skill - Encroach, and Intro Skill - Hellflare Overload recovers <span class="Highlight">Sinflame</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Hellstride DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["666", "666", "666", "666", "666", "666", "666", "666", "666", "666"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Basic Attack - Seraphic Execution Stage 1 DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["29.67%", "32.11%", "34.54%", "37.95%", "40.38%", "43.18%", "47.07%", "50.96%", "54.86%", "58.99%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Basic Attack - Seraphic Execution Stage 2 DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["14.00%+14.00%+42.00%", "15.15%+15.15%+45.45%", "16.30%+16.30%+48.89%", "17.91%+17.91%+53.71%", "19.06%+19.06%+57.16%", "20.38%+20.38%+61.12%", "22.21%+22.21%+66.63%", "24.05%+24.05%+72.14%", "25.89%+25.89%+77.65%", "27.84%+27.84%+83.51%"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Basic Attack - Seraphic Execution Stage 3 DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["12.23%*3+85.61%", "13.24%*3+92.64%", "14.24%*3+99.66%", "15.64%*3+109.48%", "16.65%*3+116.50%", "17.80%*3+124.58%", "19.41%*3+135.81%", "21.01%*3+147.04%", "22.61%*3+158.27%", "24.32%*3+170.21%"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Basic Attack - Seraphic Execution Stage 4 DMG",
                    type: "Echo",
                    skillDetailNum: [{
                        values: ["9.13%*3+63.89%", "9.88%*3+69.13%", "10.63%*3+74.37%", "11.68%*3+81.71%", "12.43%*3+86.95%", "13.29%*3+92.97%", "14.48%*3+101.35%", "15.68%*3+109.73%", "16.88%*3+118.12%", "18.15%*3+127.02%"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Basic Attack - Seraphic Execution Stage 5 DMG",
                    type: "Echo",
                    skillDetailNum: [{
                        values: ["33.84%+78.96%", "36.62%+85.44%", "39.39%+91.91%", "43.28%+100.98%", "46.05%+107.45%", "49.25%+114.90%", "53.69%+125.26%", "58.13%+135.62%", "62.57%+145.98%", "67.28%+156.99%"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Heavy Attack - Flamewing Verdict Stage 1 DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["29.79%+29.79%", "32.23%+32.23%", "34.67%+34.67%", "38.09%+38.09%", "40.54%+40.54%", "43.35%+43.35%", "47.25%+47.25%", "51.16%+51.16%", "55.07%+55.07%", "59.22%+59.22%"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Heavy Attack - Flamewing Verdict Stage 2 DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["19.29%*2", "20.87%*2", "22.45%*2", "24.67%*2", "26.25%*2", "28.07%*2", "30.60%*2", "33.13%*2", "35.66%*2", "38.35%*2"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Heavy Attack - Flamewing Verdict Stage 3 DMG",
                    type: "Echo",
                    skillDetailNum: [{
                        values: ["8.90%*3+62.26%", "9.63%*3+67.36%", "10.36%*3+72.47%", "11.38%*3+79.62%", "12.11%*3+84.72%", "12.95%*3+90.59%", "14.11%*3+98.76%", "15.28%*3+106.93%", "16.45%*3+115.09%", "17.69%*3+123.77%"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Dodge Counter - Purgatory Scourge",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["16.15%*3+113.03%", "17.47%*3+122.29%", "18.80%*3+131.56%", "20.65%*3+144.54%", "21.98%*3+153.81%", "23.50%*3+164.46%", "25.62%*3+179.29%", "27.74%*3+194.12%", "29.85%*3+208.95%", "32.10%*3+224.70%"]
                    }],
                    index: 10
                },
                {
                    attributeName: "Heavy Attack - Flamewing Verdict Stage 1 STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 11
                },
                {
                    attributeName: "Heavy Attack - Flamewing Verdict Stage 2 STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 12
                },
                {
                    attributeName: "Heavy Attack - Flamewing Verdict Stage 3 STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 13
                },
                {
                    attributeName: "Hellstride STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 14
                },
                {
                    attributeName: "Mid-air Attack - Hellsent Barrage Plunging Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["80.00%", "86.56%", "93.12%", "102.31%", "108.87%", "116.41%", "126.91%", "137.40%", "147.90%", "159.05%"]
                    }],
                    index: 15
                },
                {
                    attributeName: "Mid-air Attack - Hellsent Barrage Sustained Fire DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["15.00%", "16.23%", "17.46%", "19.19%", "20.42%", "21.83%", "23.80%", "25.77%", "27.74%", "29.83%"]
                    }],
                    index: 16
                },
                {
                    attributeName: "Mid-air Attack - Hellsent Barrage Sustained Fire STA Cost (Per Sec)",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 17
                },
                {
                    attributeName: "Mid-air Attack - Hellsent Barrage STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 18
                },
                {
                    attributeName: "Resonance Skill - Ravage DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["5.40%+12.60%", "5.85%+13.63%", "6.29%+14.66%", "6.91%+16.11%", "7.35%+17.14%", "7.86%+18.33%", "8.57%+19.98%", "9.28%+21.64%", "9.98%+23.29%", "10.74%+25.04%"]
                    }],
                    index: 19
                },
                {
                    attributeName: "Resonance Skill - Ravage Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["5s", "5s", "5s", "5s", "5s", "5s", "5s", "5s", "5s", "5s"]
                    }],
                    index: 20
                }
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Oathbound Hunt',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconJiaBeiLiNa/SP_IconJiaBeiLiNa1D1.webp",
            skillDescription: `1 stack of <span class="Highlight">Fated End</span> is inflicted on the target when the following skills hit: <span class="Highlight">Intro Skill</span>, <span class="Highlight">Basic Attack</span>, <span class="Highlight">Basic Attack - Seraphic Execution</span>, <span class="Highlight">Dodge Counter</span>, <span class="Highlight">Heavy Attack - Volley of Death</span>, <span class="Highlight">Heavy Attack - Flamewing Verdict</span>, <span class="Highlight">Mid-air Attack</span>, <span class="Highlight">Hellstride</span>, <span class="Highlight">Resonance Skill - Encroach</span>, <span class="Highlight">Resonance Skill - Ascent of Malice</span>, <span class="Highlight">Resonance Skill - Ravage</span> and <span class="Highlight">Resonance Liberation</span>, up to 4 stacks. Each stack Amplifies the DMG directly dealt by Galbrena's <span class="Highlight">Normal Attack</span>, <span class="Highlight">Resonance Skill</span>, <span class="Highlight">Forte Circuit</span>, <span class="Highlight">Resonance Liberatio</span>n, <span class="Highlight">Intro Skill</span>, and <span class="Highlight">Outro Skill</span> by 5% for 5.5s. The same type of skill can trigger this effect on the same target once every 5s.<br>
            <span class="Highlight">Resonance Skill - Encroach</span> and <span class="Highlight">Resonance Skill - Ravage</span> are considered the same type of skill.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Sin Feaster',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconJiaBeiLiNa/SP_IconJiaBeiLiNa2D2.webp",
            skillDescription: `Casting <span class="Highlight">Basic Attack Stage 4</span>, <span class="Highlight">Basic Attack - Seraphic Execution Stage 5</span>, <span class="Highlight">Heavy Attack - Volley of Death Stage 3</span>, and <span class="Highlight">Heavy Attack - Flamewing Verdict Stage 3</span> recovers 10 points of STA.`,
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
            name: "Heart of Defiance Ever Ablaze",
            description: `When casting <span class="Highlight">Resonance Skill - Ascent of Malice</span>, each point of <span class="Highlight">Afterflame</span> additionally grants 2% Crit. DMG to <span class="Highlight">Basic Attack - Seraphic Execution</span>, <span class="Highlight">Heavy Attack - Flamewing Verdict</span>, <span class="Highlight">Mid-air Attack - Hellsent Barrage</span>, <span class="Highlight">Resonance Skill - Ravage</span>, and <span class="Highlight">Dodge Counter - Purgatory Scourge</span>, up to 80%. This effect is removed upon exiting <span class="Highlight">Demon Hypostasis</span>.<br>
            While in <span class="Highlight">Demon Hypostasis</span>, <span class="Highlight">Basic Attack - Seraphic Execution Stage 5</span>, <span class="Highlight">Heavy Attack - Flamewing Verdict Stage 3</span>, and <span class="Highlight">Mid-air Attack - Hellsent Barrage</span> are immune to interruption.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconJiaBeiLiNaM1.webp"
        },
        {
            node: "Sequence Node 2",
            name: "Hellbound Dive of Fire and Abyss",
            description: `<span class="Highlight">Burning Drive</span> grants 350% more ATK Bonus.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconJiaBeiLiNaM2.webp"
        },
        {
            node: "Sequence Node 3",
            name: "Hunter's Blood Oath Rekindled",
            description: `Resonance Liberation DMG Multiplier is increased by 130%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconJiaBeiLiNaM3.webp"
        },
        {
            node: "Sequence Node 4",
            name: "Carry Forth This Fading Spark",
            description: `When Resonators in the team cast Echo Skill, all Resonators in the team gain 20% all-Attribute DMG Bonus for 20s.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconJiaBeiLiNaM4.webp"
        },
        {
            node: "Sequence Node 5",
            name: "Though Light Fades, Torment Consumes",
            description: `The DMG Multipliers of <span class="Highlight">Resonance Skill - Encroach</span>, <span class="Highlight">Resonance Skill - Ascent of Malice</span>, and <span class="Highlight">Resonance Skill - Ravage</span> are increased by 150%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconJiaBeiLiNaM5.webp"
        },
        {
            node: "Sequence Node 6",
            name: "I Remain Who I am, Eternal My Flame",
            description: `<span class="Highlight">Demon Hypostasis</span> becomes <span class="Highlight">Eternal Hypostasis</span>. <span class="Highlight">Eternal Hypostasis</span> retains all effects of <span class="Highlight">Demon Hypostasis</span>.<br>
            Additionally, <span class="Highlight">Eternal Hypostasis</span> lasts, the DMG Multipliers of <span class="Highlight">Basic Attack - Seraphic Execution</span>, <span class="Highlight">Heavy Attack - Flamewing Verdict</span>, <span class="Highlight">Mid-air Attack - Hellsent Barrage</span>, and <span class="Highlight">Dodge Counter - Purgatory Scourge</span> are additionally increased by 60%.<br><br>
            When casting <span class="Highlight">Resonance Skill - Ascent of Malice</span>, for every 1 point of <span class="Highlight">Afterflame</span> consumed, Galbrena's <span class="Highlight">Basic Attack - Seraphic Execution</span>, <span class="Highlight">Heavy Attack - Flamewing Verdict</span>, <span class="Highlight">Mid-air Attack - Hellsent Barrage</span>, <span class="Highlight">Resonance Skill - Ravage</span>, and <span class="Highlight">Dodge Counter - Purgatory Scourge</span> gain 0.875% Fusion DMG Amplification, up to 35%, which is removed upon exiting <span class="Highlight">Eternal Hypostasis</span>.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconJiaBeiLiNaM6.webp"
        },
    ]
}