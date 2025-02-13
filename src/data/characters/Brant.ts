import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Brant: WWCharacter = {
    name: "Brant",
    charaId: 1206,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Fusion",
    weapon: "Sword",
    bio: `Brant, the captain of Rinascita's Troupe of Fools, is a free spirit and romantic. Unpredictable and full of life, he is the beating heart of the troupe. On stage, he slips into countless roles, donning new masks to breathe life into every story. Yet beyond the spotlight, he is unwaveringly genuine, offering nothing but true sincerity to those around him.`,
    images: {
        portrait: "https://i.imgur.com/bjFyqtT.png",
        icon_sq: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_44_UI.webp",
        model: "https://i.imgur.com/to4pmnE.png"
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
                item: "Blazing Bone",
                id: 5,
                value: "46"
            },
            {
                item: "Golden Fleece",
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
        base_hp: 934,
        base_atk: 30,
        base_def: 107,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 175,
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
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconNor/SP_IconNorKnife.webp",
            skillName: 'Captain\'s Rhapsody',
            skillDescription: `<span class="Title">Basic Attack</span>
            Perform up to 4 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>.
            <div class="gap"></div>
            <span class="Title">Heavy Attack</span>
            Consume STA to attack the target, dealing <span class="Fire">Fusion DMG</span>.
            <div class="gap"></div>
            <span class="Title">Heavy Attack - Rhapsodic Riff</span>
            Consume STA to attack the target, dealing <span class="Fire">Fusion DMG</span>.<br>
            - After performing Basic Attack <span class="Highlight">Stage 2</span> or <span class="Highlight">Stage 4</span>, hold Normal Attack to perform <span class="Highlight">Heavy Attack - Rhapsodic Riff</span>.<br>
            - After performing <span class="Highlight">Mid-air Attack Stage 4</span>, press Normal Attack to perform <span class="Highlight">Heavy Attack - Rhapsodic Riff</span>.
            <div class="gap"></div>
            <span class="Title">Mid-air Attack</span>
            Perform up to 4 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>.<br>
            Press Normal Attack following Mid-air Attack <span class="Highlight">Stage 1</span> or <span class="Highlight">Stage 2</span> to swing to the target with Grapple. Brant will attack the target if he reaches them with the swing. Release while in action to <span class="Highlight">flip backward</span> after the attack hits; or hold Normal Attack to attack the target continuously and <span class="Highlight">flip backward</span> after the finishing move. Brant flips backward automatically after <span class="Highlight">Mid-air Attack Stage 3</span>. Press Normal Attack after each <span class="Highlight">flip</span> to perform the next stage of <span class="Highlight">Mid-air Attack</span>. <span class="Highlight">Flip</span> resets Mid-air Dodge attempts.<br>
            - If Brant fails to reach the target with the Grapple swing of <span class="Highlight">Mid-air Attack Stage 1</span>, he instead performs a slash forward, dealing <span class="Fire">Fusion DMG</span>.<br>
            - If Brant reaches the target with the Grapple swing of <span class="Highlight">Mid-air Attack Stage 1</span> or <span class="Highlight">Stage 2</span> but the attack fails to hit the target, he will drop down after a temporary suspension in mid-air.
            <div class="gap"></div>
            <span class="Title">Dodge Counter</span>
            Press <span class="Highlight">Normal Attack</span> right after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Fire">Fusion DMG</span>.
            `,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["25.42%", "27.50%", "29.59%", "29.59%", "34.59%", "36.99%", "40.32%", "43.66%", "46.99%", "50.53%"]
                    }],
                    index: 1
                }, {
                    attributeName: "Stage 2 DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["25.50%+25.50%", "27.60%+27.60%", "29.69%+29.69%", "29.69%+29.69%", "34.71%+34.71%", "37.11%+37.11%", "40.46%+40.46%", "43.80%+43.80%", "47.15%+47.15%", "50.70%+50.70%"]
                    }],
                    index: 2
                }, {
                    attributeName: "Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["11.10%*3+16.64%*2", "12.01%*3+18.01%*2", "12.92%*3+19.37%*2", "12.92%*3+19.37%*2", "15.10%*3+22.65%*2", "16.15%*3+24.22%*2", "17.60%*3+26.40%*2", "19.06%*3+28.58%*2", "20.51%*3+30.77%*2", "22.06%*3+33.08%*2"]
                    }],
                    index: 3
                }, {
                    attributeName: "Stage 4 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["14.10%+11.28%*5", "15.25%+12.20%*5", "16.41%+13.13%*5", "16.41%+13.13%*5", "19.18%+15.35%*5", "20.51%+16.41%*5", "22.36%+17.89%*5", "24.21%+19.37%*5", "26.06%+20.85%*5", "28.02%+22.42%*5"]
                    }],
                    index: 4
                }, {
                    attributeName: "Heavy Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["99.37%", "107.52%", "115.67%", "115.67%", "135.22%", "144.59%", "157.63%", "170.66%", "183.70%", "197.55%"]
                    }],
                    index: 5
                }, {
                    attributeName: "Heavy Attack - Rhapsodic Riff DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["85.00%", "91.97%", "98.94%", "98.94%", "115.67%", "123.69%", "134.84%", "145.99%", "157.14%", "168.99%"]
                    }],
                    index: 6
                }, {
                    attributeName: "Mid-air Attack Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["61.80%", "66.87%", "71.93%", "71.93%", "84.10%", "89.92%", "98.03%", "106.14%", "114.25%", "122.86%"]
                    }],
                    index: 7
                }, {
                    attributeName: "Mid-air Attack Stage 1: Charged Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["16.72%+25.08%+20.90%*6", "18.10%+27.14%+22.62%*6", "19.47%+29.20%+24.33%*6", "19.47%+29.20%+24.33%*6", "22.76%+34.13%+28.44%*6", "24.33%+36.50%+30.42%*6", "26.53%+39.79%+33.16%*6", "28.72%+43.08%+35.90%*6", "30.91%+46.37%+38.64%*6", "33.25%+49.87%+41.56%*6"]
                    }],
                    index: 8
                }, {
                    attributeName: "Mid-air Attack Stage 1: Flip DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["17.00%+29.75%", "18.40%+32.19%", "19.79%+34.63%", "19.79%+34.63%", "23.14%+40.49%", "24.74%+43.29%", "26.97%+47.20%", "29.20%+51.10%", "31.43%+55.00%", "33.80%+59.15%"]
                    }],
                    index: 9
                }, {
                    attributeName: "Mid-air Attack Stage 1 Slash DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["14.17%*3", "15.33%*3", "16.49%*3", "16.49%*3", "19.28%*3", "20.62%*3", "22.48%*3", "24.34%*3", "26.19%*3", "28.17%*3"]
                    }],
                    index: 10
                }, {
                    attributeName: "Mid-air Attack Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["42.72%+42.72%", "46.22%+46.22%", "49.72%+49.72%", "49.72%+49.72%", "58.13%+58.13%", "62.16%+62.16%", "67.76%+67.76%", "73.36%+73.36%", "78.97%+78.97%", "84.92%+84.92%"]
                    }],
                    index: 11
                }, {
                    attributeName: "Mid-air Attack Stage 2: Charged Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["16.54%*6", "17.89%*6", "19.25%*6", "19.25%*6", "22.50%*6", "24.06%*6", "26.23%*6", "28.40%*6", "30.57%*6", "32.87%*6"]
                    }],
                    index: 12
                }, {
                    attributeName: "Mid-air Attack Stage 2: Flip DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["17.00%+29.75%", "18.40%+32.19%", "19.79%+34.63%", "19.79%+34.63%", "23.14%+40.49%", "24.74%+43.29%", "26.97%+47.20%", "29.20%+51.10%", "31.43%+55.00%", "33.80%+59.15%"]
                    }],
                    index: 13
                }, {
                    attributeName: "Mid-air Attack Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["14.17%*6", "15.33%*6", "16.49%*6", "16.49%*6", "19.28%*6", "20.62%*6", "22.48%*6", "24.34%*6", "26.19%*6", "28.17%*6"]
                    }],
                    index: 14
                }, {
                    attributeName: "Mid-air Attack Stage 3: Flip DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["17.00%+29.75%", "18.40%+32.19%", "19.79%+34.63%", "19.79%+34.63%", "23.14%+40.49%", "24.74%+43.29%", "26.97%+47.20%", "29.20%+51.10%", "31.43%+55.00%", "33.80%+59.15%"]
                    }],
                    index: 15
                }, {
                    attributeName: "Mid-air Attack Stage 4 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["51.07%+12.77%*3+38.31%", "55.26%+13.82%*3+41.45%", "59.45%+14.87%*3+44.59%", "59.45%+14.87%*3+44.59%", "69.50%+17.38%*3+52.13%", "74.31%+18.58%*3+55.74%", "81.01%+20.26%*3+60.76%", "87.71%+21.93%*3+65.79%", "94.41%+23.61%*3+70.81%", "101.53%+25.39%*3+76.15%"]
                    }],
                    index: 16
                }, {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["19.13%*3+28.69%*2", "20.70%*3+31.04%*2", "22.27%*3+33.40%*2", "22.27%*3+33.40%*2", "26.03%*3+39.04%*2", "27.83%*3+41.75%*2", "30.34%*3+45.51%*2", "32.85%*3+49.28%*2", "35.36%*3+53.04%*2", "38.03%*3+57.04%*2"]
                    }],
                    index: 17
                }, {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 18
                }, {
                    attributeName: "Heavy Attack - Rhapsodic Riff STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 19
                }, {
                    attributeName: "Mid-air Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 20
                }, {
                    attributeName: "Mid-air Charged Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                    }],
                    index: 21
                }, 
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconBulante/SP_IconBulanteB1.webp",
            skillName: 'Anchors Aweigh!',
            skillDescription: `
            Brant launches himself into the air and blasts all targets in an area, dealing <span class="Fire">Fusion DMG</span>. While in mid-air, if Bravo is not full, Resonance Skill <span class="Highlight">Anchors Aweigh!</span> is replaced with <span class="Highlight">Plunging Attack</span>.
            <div class="gap"></div>
            <span class="Title">Plunging Attack</span>
            Plunge at the target at the cost of STA, dealing <span class="Fire">Fusion DMG</span>, which is considered <span class="Highlight">Basic Attack DMG</span>.<br>
            - If Brant fails to reach the target with the Grapple swing of <span class="Highlight">Mid-air Attack Stage 1</span>, he instead performs a slash forward. Afterward, press Normal Attack to perform <span class="Highlight">Plunging Attack</span>.<br>
            - If Brant reaches the target with the Grapple swing of Mid-air Attack <span class="Highlight">Stage 1</span> or <span class="Highlight">Stage 2</span> but the attack fails to hit the target, press Normal Attack to perform <span class="Highlight">Plunging Attack</span> during the suspension.
            <div class="gap"></div>`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["100.77%+67.18%", "109.04%+72.69%", "117.30%+78.20%", "128.87%+85.91%", "137.13%+91.42%", "146.64%+97.76%", "159.86%+106.57%", "173.08%+115.39%", "186.30%+124.20%", "200.35%+133.57%"],
                    }],
                    index: 1
                }, {
                    attributeName: "Plunging Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["52.70%", "57.03%", "61.35%", "67.40%", "71.72%", "76.69%", "83.60%", "90.52%", "97.43%", "104.78%"],
                    }],
                    index: 2
                }, {
                    attributeName: "Plunging Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 3
                }, {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["4s", "4s", "4s", "4s", "4s", "4s", "4s", "4s", "4s", "4s"]
                    }],
                    index: 4
                }, {
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 5
                }
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconBulante/SP_IconBulanteC1.webp",
            skillName: 'To the Horizon',
            skillDescription: `
            Deal <span class="Fire">Fusion DMG</span> to targets within the range and heal all nearby Resonators in the team before entering the <span class="Highlight">Aflame</span> state.<br>
            Can be cast in mid-air.
            <div class="gap"></div>
            <span class="Title">Aflame</span>
            The efficiency of gaining Bravo is increased by 100% when <span class="Highlight">Normal Attack</span> or Resonance Skill <span class="Highlight">Anchors Aweigh!</span> hits the target. Meanwhile, Forte Circuit <span class="Highlight">Theatrical Moment</span> is replaced by <span class="Highlight">"My" Moment</span>.
            <div class="gap"></div>
            <span class="Title">"My" Moment</span>
            Brant gains additional ATK based on his Energy Regen: For every 1% of his Energy Regen over 150%, Brant gains additional 20 points of ATK, up to 2600.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["42.78%*4+171.12%", "46.29%*4+185.16%", "49.80%*4+199.19%", "54.71%*4+218.83%", "58.22%*4+232.87%", "62.25%*4+249.00%", "67.87%*4+271.45%", "73.48%*4+293.90%", "79.09%*4+316.35%", "85.06%*4+340.21%"],
                    }],
                    index: 1
                }, {
                    attributeName: "Healing",
                    type: "Healing",
                    skillDetailNum: [{
                        values: ["500+1.75*per 1% Energy Regen", "560+1.96*per 1% Energy Regen", "625+2.18*per 1% Energy Regen", "700+2.45*per 1% Energy Regen", "790+2.76*per 1% Energy Regen", "875+3.06*per 1% Energy Regen", "890+3.11*per 1% Energy Regen", "910+3.18*per 1% Energy Regen", "925+3.23*per 1% Energy Regen", "950+3.32*per 1% Energy Regen"],
                    }],
                    index: 2
                }, {
                    attributeName: "Aflame Duration",
                    type: "",
                    skillDetailNum: [{
                        values: ["12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s"]
                    }],
                    index: 3
                }, {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["24s", "24s", "24s", "24s", "24s", "24s", "24s", "24s", "24s", "24s"]
                    }],
                    index: 4
                }, {
                    attributeName: "Resonance Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["175", "175", "175", "175", "175", "175", "175", "175", "175", "175"] 
                    }],
                    index: 5
                }, {
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 6
                }
            ]
        },
        {
            skillId: 4,
            typeName: 'Intro Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconBulante/SP_IconBulanteQTE.webp",
            skillName: 'Applaud for Me!',
            skillDescription: `
            Attack the target, dealing <span class="Fire">Fusion DMG</span> and gain <span class="Highlight">Interlude Applause</span> effect.
            <span class="Title">Interlude Applause</span>
            The next Mid-air Attack begins at <span class="Highlight">Stage 2</span>. This effect ends when Brant lands early or is switched out.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["102.00%+25.50%", "110.37%+27.60%", "118.73%+29.69%", "130.44%+32.61%", "138.81%+34.71%", "148.43%+37.11%", "161.81%+40.46%", "175.19%+43.80%", "188.57%+47.15%", "202.79%+50.70%"]
                    }],
                    index: 1
                }, {
                    attributeName: "Concerto Regen",
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
            skillName: 'The Course is Set!',
            skillDescription: `Ampify the incoming Resonator's Fusion DMG by {0} and Resonance Skill DMG by {1} for 14s or until the Resonator is switched out.`,
            skillDetailNum: ["20%", "25%"],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconBulante/SP_IconBulanteY.webp",
            skillName: '',
            skillDescription: `<span class="Title">Theatrical Moment</span>
            Brant gains additional ATK based on his Energy Regen: For every 1% of his Energy Regen over 150%, Brant gains additional 12 points of ATK, up to 1560.
            <div class="gap"></div>
            <span class="Title">Waves of Acclaims</span>
            Heal all nearby Resonators in the team when Bravo reaches 25, 50, 75, and 100.
            <div class="gap"></div>
            <span class="Title">Returned from Ashes</span>
            When Bravo is full, replace Resonance Skill <span class="Highlight">Anchor Aweigh!</span> with <span class="Highlight">Returned from Ashes</span>.<br>
            Consume all Bravo to perform <span class="Highlight">Returned from Ashes</span>, dealing <span class="Fire">Fusion DMG</span>, considered <span class="Highlight">Basic Attack DMG</span>, and generate a shield. Casting this skill during <span class="Highlight">Aflame</span> ends this state after <span class="Highlight">Returned from Ashes</span> ends.
            <div class="gap"></div>
            <span class="Title">Bravo</span>
            Brant can hold up to 100 Bravo.<br>
            - Obtain Bravo when Normal Attacks hit the target.<br>
            - Obtain Bravo when Intro Skill hits the target.<br>
            - Obtain Bravo when Resonance Skill hits the target.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Returned from Ashes DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["23.75%*2+47.50%+95.00%*2+665.00%", "25.70%*2+51.40%+102.79%*2+719.53%", "27.65%*2+55.29%+110.58%*2+774.06%", "30.38%*2+60.75%+121.49%*2+850.41%", "32.32%*2+64.64%+129.28%*2+904.94%", "34.56%*2+69.12%+138.24%*2+967.65%", "37.68%*2+75.35%+150.70%*2+1054.89%", "40.80%*2+81.59%+163.17%*2+1142.14%", "43.91%*2+87.82%+175.63%*2+1229.39%", "47.22%*2+94.44%+188.87%*2+1322.09%"],
                    }],
                    index: 1
                }, {
                    attributeName: "Waves of Acclaims Healing",
                    type: "Healing",
                    skillDetailNum: [{
                        values: ["312+1.09*per 1% Energy Regen", "350+1.22*per 1% Energy Regen", "390+1.36*per 1% Energy Regen", "437+1.53*per 1% Energy Regen", "493+1.72*per 1% Energy Regen", "546+1.91*per 1% Energy Regen", "556+1.94*per 1% Energy Regen", "568+1.99*per 1% Energy Regen", "578+2.02*per 1% Energy Regen", "593+2.07*per 1% Energy Regen"],
                    }],
                    index: 2
                }, {
                    attributeName: "Shield",
                    type: "Shield",
                    skillDetailNum: [{
                        values: ["2500+9*per 1% Energy Regen", "2800+10.08*per 1% Energy Regen", "3125+11.25*per 1% Energy Regen", "3500+12.6*per 1% Energy Regen", "3950+14.22*per 1% Energy Regen", "4375+15.75*per 1% Energy Regen", "4450+16.02*per 1% Energy Regen", "4550+16.38*per 1% Energy Regen", "4625+16.65*per 1% Energy Regen", "4750+17.1*per 1% Energy Regen"],
                    }],
                    index: 3
                }, {
                    attributeName: "Shield Duration",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 4
                }, {
                    attributeName: "Returned from Ashes Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 5
                }, 
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Voyager\'s Blaze',
            skillDescription: `Healing provided by <span class="Highlight">Waves of Acclaims</span> is increased by {0}.`,
            skillDetailNum: ["20%"],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Trial by Fire and Tide',
            skillDescription: `Brant's resistance to interruption is increased during <span class="Highlight">Mid-air Attacks</span> and gains {0} <span class="Fire">Fusion DMG Bonus</span>.`,
            skillDetailNum: ["15%"],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "By Currents and Winds",
            description: `<span class="Highlight">Returned from Ashes</span> temporarily causes nearby targets to stagnate while casting. The stagnation effect is removed when Brant is switched off the field.<br>
            After casting Intro Skill <span class="Highlight">Applaud for Me!</span> or each <span class="Highlight">flip</span> following Mid-air Attack, Brant's DMG dealt is increased by {0} for 5s, stacking up to 3 times.`,
            detailNum: ["20%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [20],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_BulanteM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "For Smiles and Cheers",
            description: `Brant's Crit. Rate increases by {0} when <span class="Highlight">Mid-air Attack</span> and <span class="Highlight">Returned from Ashes</span>.<br>
            Brant's Outro Skill <span class="Highlight">The Course is Set!</span> gains new enhancement. Within 20s after Brant's Outro Skill:<br>
            When <span class="Highlight">Resonance Skill</span> cast by the incoming Resonator (or nearby Resonators who activate Brant's Outro Skill) hits a target, Brant blasts the target, dealing <span class="Fire">Fusion DMG</span> equal to {1} of Brant's ATK (considered Basic Attack DMG). Up to 1 explosion per second, max 2 explosions.<br>
            - This effect remains active when Brant is switched off the field.`,
            detailNum: ["30%", "440%"],
            sequenceBuffType: "Character Buff",
            sequenceBuffAtrribute: ["Crit. Rate%"],
            sequenceBuff: [30],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_BulanteM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "Through Storms I Sail",
            description: `The multiplier of the DMG dealt by Returned from Ashes is increased by {0}.`,
            detailNum: ["42%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Basic Attack DMG Bonus"],
            sequenceBuff: [42],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_BulanteM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "To Freedom I Sing",
            description: `The Shield obtained from <span class="Highlight">Returned from Ashes</span> is increased by {0}. Casting <span class="Highlight">Returned from Ashes</span> restores HP for all nearby Resonators in the team (6.60 HP for every 1% Energy Regen).`,
            detailNum: ["20%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_BulanteM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "All the World's an Actor's Stage",
            description: `When dealing Basic Attack DMG to the target, Brant's <span class="Highlight">Basic Attack DMG Bonus</span> is increased by {0} for 10s.`,
            detailNum: ["15%"],
            sequenceBuffType: "Character Buff",
            sequenceBuffAtrribute: ["Basic Attack DMG Bonus"],
            sequenceBuff: [15],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_BulanteM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "All the World's a Captain's Carnevale",
            description: `<span class="Highlight">Mid-air Attack's</span> multiplier is increased by {0}. Casting <span class="Highlight">Returned from Ashes</span> causes a secondary blast, dealing <span class="Fire">Fusion DMG</span>, considered Basic Attack DMG, equal to 30% of the DMG dealt by <span class="Highlight">Returned from Ashes</span>.`,
            detailNum: ["30%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Basic Attack DMG Bonus"],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_BulanteM6_UI.webp"
        },
    ]
}