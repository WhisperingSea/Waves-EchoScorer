import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Lynae: WWCharacter = {
    name: "Lynae",
    charaId: 1509,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Spectro",
    weapon: "Pistols",
    bio: `A Startorch Academy prep student whose head-turning, electric style hides an inner focus as explosive as a coiled spring.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_Linnai_UI.webp",
        icon_sq: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_60_UI.webp",
        model: "https://i.imgur.com/pDjHXYs.png"
    },
    asension: {
        charaAsension: [
            {
                item: "LF Exoswarm Core",
                id: 1,
                value: "4"
            },
            {
                item: "MF Exoswarm Core",
                id: 2,
                value: "12"
            },
            {
                item: "HF Exoswarm Core",
                id: 3,
                value: "12"
            },
            {
                item: "FF Exoswarm Core",
                id: 4,
                value: "4"
            },
            {
                item: "Suncoveter's Reach",
                id: 5,
                value: "46"
            },
            {
                item: "Rimewisp",
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
                item: "LF Exoswarm Core",
                id: 1,
                value: "25"
            },
            {
                item: "MF Exoswarm Core",
                id: 2,
                value: "28"
            },
            {
                item: "HF Exoswarm Core",
                id: 3,
                value: "40"
            },
            {
                item: "FF Exoswarm Core",
                id: 4,
                value: "57"
            },
            {
                item: "Incomplete Combustor",
                id: 5,
                value: "25"
            },
            {
                item: "Aftertune Combustor",
                id: 6,
                value: "28"
            },
            {
                item: "Remnant Combustor",
                id: 7,
                value: "55"
            },
            {
                item: "Reverb Combustor",
                id: 8,
                value: "67"
            },
            {
                item: "Dreamless Feather",
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
        base_hp: 979,
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
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
        {
            skillId: 1,
            typeName: 'Normal Attack',
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill3.webp",
            skillName: 'Chroma Drift',
            skillDescription: `<span class="Title">Basic Attack</span>
            Press or hold Normal Attack to perform up to 3 consecutive attacks, dealing <span class="Light">Spectro DMG</span>.
            <div class="gap"></div>
            <span class="Title">Mid-air Attack</span>
            Consume STA to perform Plunging Attack, dealing <span class="Light">Spectro DMG</span>.
            <div class="gap"></div>
            <span class="Title">Dodge Counter</span>
            Press Normal Attack right after a successful Dodge to attack the target, dealing <span class="Light">Spectro DMG</span>.
            <div class="gap"></div>
            <span class="Title">Basic Attack - Spark Collision</span>
            With full <Info key="lynae_overflow"><span class='Highlight'>Overflow</span></Info> in the <Info key="lynae_oss"><span class='Highlight'>Overflow</span></Info>, hold Normal Attack to enter a charging state.<br>
            During this state, 15 points of <Info key="lynae_overflow"><span class='Highlight'>Overflow</span></Info> will be converted to 12.5% of <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info> every 0.2s. Lynae is immune to interruption and takes 50% less DMG.<br>
            Upon releasing Normal Attack or when <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info> is full, Lynae casts Spark Collision of varying strengths based on the ratio of <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info>, dealing <span class="Light">Spectro DMG</span>:<br>
            - Spark Collision Lv. 1: <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info> < 50%<br>
            - Spark Collision Lv. 2: 50% ≤ <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info> < 100%<br>
            - Spark Collision Lv. 3: <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info> = 100%
            <div class="gap"></div>
            <span class="Title">Kaleidoscopic Parade - Basic Attack</span>
            While in <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info>, <span class="Highlight">Basic Attack</span> is replaced with <span class="Highlight">Kaleidoscopic Parade - Basic Attack</span>.<br>
            Perform up to 5 consecutive attacks, dealing <span class="Light">Spectro DMG</span>.<br>
            With 120 points of <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info>, <span class="Highlight">Kaleidoscopic Parade - Basic Attack Stage 1 & 4</span> track enemies in a greater distance.<br>
            <div class="gap"></div>
            <span class="Title">Kaleidoscopic Parade - Ground Heavy Attack</span>
            While in <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info>, hold Normal Attack on the ground to cast this skill. Consume STA to continuously attack the target, dealing <span class="Light">Spectro DMG</span>, considered Basic Attack DMG. Release to cast <span class="Highlight">Kaleidoscopic Parade - Graffiti Blast</span>, dealing <span class="Light">Spectro DMG</span>, considered Basic Attack DMG.
            <div class="gap"></div>
            <span class="Title">Kaleidoscopic Parade - Mid-air Heavy Attack</span>
            While in <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info>, hold Normal Attack in mid-air to cast this skill. Consume STA to attack the target, dealing <span class="Light">Spectro DMG</span>, considered Basic Attack DMG.<br>
            Cannot gain new charges while in the air. The available charges reset when Lynae is the active Resonator and is on the ground.
            <div class="gap"></div>
            <span class="Title">Kaleidoscopic Parade - Mid-air Attack</span>
            While in <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info>, <span class="Highlight">Mid-air Attack</span> is replaced with <span class="Highlight">Kaleidoscopic Parade - Mid-air Attack</span>.<br>
            Consume STA to perform Plunging Attack, dealing <span class="Light">Spectro DMG</span>.
            <div class="gap"></div>
            <span class="Title">Kaleidoscopic Parade - Dodge Counter</span>
            While in <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info>, <span class="Highlight">Dodge Counter</span> is replaced with <span class="Highlight">Kaleidoscopic Parade - Dodge Counter</span>.<br>
            Press Normal Attack right after a successful Dodge to attack the target, dealing <span class="Light">Spectro DMG</span>.<br>
            While in <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info>, press Normal Attack shortly after casting this skill to cast <span class="Highlight">Kaleidoscopic Parade - Basic Attack Stage 2</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Basic Attack Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["43.35%", "46.91%", "50.46%", "55.44%", "59.00%", "63.08%", "68.77%", "74.46%", "80.15%", "86.19%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Basic Attack Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["26.35%+26.35%+26.35%", "28.52%+28.52%+28.52%", "30.68%+30.68%+30.68%", "33.70%+33.70%+33.70%", "35.86%+35.86%+35.86%", "38.35%+38.35%+38.35%", "41.80%+41.80%+41.80%", "45.26%+45.26%+45.26%", "48.72%+48.72%+48.72%", "52.39%+52.39%+52.39%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Basic Attack Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["62.05%", "67.14%", "72.23%", "79.35%", "84.44%", "90.29%", "98.43%", "106.58%", "114.72%", "123.37%"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["120.70%", "130.60%", "140.50%", "154.36%", "164.25%", "175.64%", "191.47%", "207.31%", "223.14%", "239.97%"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Mid-air Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["7.23%+65.03%", "7.82%+70.36%", "8.41%+75.69%", "9.24%+83.16%", "9.84%+88.49%", "10.52%+94.62%", "11.47%+103.15%", "12.41%+111.69%", "13.36%+120.22%", "14.37%+129.28%"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Basic Attack - Spark Collision Lv. 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["27.95%*2", "30.24%*2", "32.53%*2", "35.74%*2", "38.03%*2", "40.67%*2", "44.33%*2", "48.00%*2", "51.66%*2", "55.56%*2"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Basic Attack - Spark Collision Lv. 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["83.84%*2", "90.71%*2", "97.58%*2", "107.21%*2", "114.08%*2", "121.99%*2", "132.99%*2", "143.99%*2", "154.98%*2", "166.67%*2"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Basic Attack - Spark Collision Lv. 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["139.72%*2", "151.18%*2", "162.64%*2", "178.68%*2", "190.13%*2", "203.31%*2", "221.64%*2", "239.97%*2", "258.30%*2", "277.78%*2"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Kaleidoscopic Parade - Basic Attack Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["41.65%", "45.07%", "48.49%", "53.27%", "56.68%", "60.61%", "66.07%", "71.54%", "77.00%", "82.81%"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Kaleidoscopic Parade - Basic Attack Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["19.55%*2", "21.16%*2", "22.76%*2", "25.01%*2", "26.61%*2", "28.45%*2", "31.02%*2", "33.58%*2", "36.15%*2", "38.87%*2"]
                    }],
                    index: 10
                },
                {
                    attributeName: "Kaleidoscopic Parade - Basic Attack Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["18.99%*3", "20.54%*3", "22.10%*3", "24.28%*3", "25.84%*3", "27.63%*3", "30.12%*3", "32.61%*3", "35.10%*3", "37.75%*3"]
                    }],
                    index: 11
                },
                {
                    attributeName: "Kaleidoscopic Parade - Basic Attack Stage 4 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["14.96%*2+22.44%+22.44%", "16.19%*2+24.29%+24.29%", "17.42%*2+26.13%+26.13%", "19.14%*2+28.70%+28.70%", "20.36%*2+30.54%+30.54%", "21.77%*2+32.66%+32.66%", "23.74%*2+35.60%+35.60%", "25.70%*2+38.55%+38.55%", "27.66%*2+41.49%+41.49%", "29.75%*2+44.62%+44.62%"]
                    }],
                    index: 12
                },
                {
                    attributeName: "Kaleidoscopic Parade - Basic Attack Stage 5 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["38.00%+7.60%*5+50.66%", "41.12%+8.23%*5+54.82%", "44.23%+8.85%*5+58.97%", "48.59%+9.72%*5+64.79%", "51.71%+10.35%*5+68.94%", "55.29%+11.06%*5+73.72%", "60.28%+12.06%*5+80.37%", "65.26%+13.06%*5+87.01%", "70.25%+14.05%*5+93.66%", "75.54%+15.11%*5+100.72%"]
                    }],
                    index: 13
                },
                {
                    attributeName: "Kaleidoscopic Parade - Dodge Counter",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["92.65%", "100.25%", "107.85%", "118.49%", "126.08%", "134.82%", "146.98%", "159.13%", "171.29%", "184.20%"]
                    }],
                    index: 14
                },
                {
                    attributeName: "Kaleidoscopic Parade - Ground Heavy Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["8.87%*7", "9.60%*7", "10.32%*7", "11.34%*7", "12.07%*7", "12.90%*7", "14.07%*7", "15.23%*7", "16.39%*7", "17.63%*7"]
                    }],
                    index: 15
                },
                {
                    attributeName: "Kaleidoscopic Parade - Graffiti Blast DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["52.70%", "57.03%", "61.35%", "67.40%", "71.72%", "76.69%", "83.60%", "90.52%", "97.43%", "104.78%"]
                    }],
                    index: 16
                },
                {
                    attributeName: "Kaleidoscopic Parade - Mid-Air Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["7.23%+65.03%", "7.82%+70.36%", "8.41%+75.69%", "9.24%+83.16%", "9.84%+88.49%", "10.52%+94.62%", "11.47%+103.15%", "12.41%+111.69%", "13.36%+120.22%", "14.37%+129.28%"]
                    }],
                    index: 17
                },
                {
                    attributeName: "Kaleidoscopic Parade - Mid-air Heavy Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["17.49%*7", "18.92%*7", "20.36%*7", "22.37%*7", "23.80%*7", "25.45%*7", "27.74%*7", "30.04%*7", "32.33%*7", "34.77%*7"]
                    }],
                    index: 18
                },
                {
                    attributeName: "Mid-air Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 19
                },
                {
                    attributeName: "Kaleidoscopic Parade - Ground Heavy Attack STA Cost Per Strike",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 20
                },
                {
                    attributeName: "Kaleidoscopic Parade - Mid-air Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 21
                },
                {
                    attributeName: "Kaleidoscopic Parade - Mid-air Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 22
                }
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconLinNai/SP_IconLinNaiB1.webp",
            skillName: 'Lynae-Style Palettes',
            skillDescription: `<span class="Title">Lynae-Style Palettes</span>
            Press Resonance Skill to deal <span class="Light">Spectro DMG</span>.<br>
            While in <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info>, hold Resonance Skill to attack the target, dealing <span class="Light">Spectro DMG</span> and exiting the <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info>.<br>
            Press Normal Attack within a certain time after this skill to cast <span class="Highlight">Basic Attack Stage 2</span>.<br>
            Lynae-Style Palettes and Additive Color <span class="Highlight">share a cooldown</span>.
            <div class="gap"></div>
            <span class="Title">Additive Color</span>
            During <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info>, press Resonance Skill on the ground to attack the target, dealing <span class="Light">Spectro DMG</span>.<br>
            Within a certain time during the skill, press Normal Attack to cast <span class="Highlight">Kaleidoscopic Parade - Basic Attack Stage 2</span>.<br>
            Lynae-Style Palettes and Additive Color <span class="Highlight">share a cooldown</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Lynae-Style Palettes DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["70.08%+23.36%*3", "75.82%+25.28%*3", "81.57%+27.19%*3", "89.61%+29.87%*3", "95.36%+31.79%*3", "101.97%+33.99%*3", "111.16%+37.06%*3", "120.35%+40.12%*3", "129.55%+43.19%*3", "139.31%+46.44%*3"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Additive Color DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["58.50%*2", "63.30%*2", "68.10%*2", "74.81%*2", "79.61%*2", "85.13%*2", "92.80%*2", "100.48%*2", "108.15%*2", "116.31%*2"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Lynae-Style Palettes Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["6s", "6s", "6s", "6s", "6s", "6s", "6s", "6s", "6s", "6s"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Additive Color Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["6s", "6s", "6s", "6s", "6s", "6s", "6s", "6s", "6s", "6s"]
                    }],
                    index: 4
                }
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconLinNai/SP_IconLinNaiC1.webp",
            skillName: 'Prismatic Overblast',
            skillDescription: `
            Deal <span class="Light">Spectro DMG</span>. Casting this skill increases the DMG dealt by all nearby Resonators in the team by 24% for 30s.
            <div class="gap"></div>
            <span class="Title">Basic Attack - To a Vivid Tomorrow!</span>
            Press Normal Attack within a certain time after casting <span class="Highlight">Resonance Liberation - Prismatic Overblast<span class="Highlight"><span class="Highlight"></span></span></span> to cast <span class="Highlight">Basic Attack - To a Vivid Tomorrow!<span class="Highlight"></span></span>, dealing <span class="Light">Spectro DMG</span>.<br>
            While in <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info>, press Normal Attack within a certain time during the skill to cast <span class="Highlight">Kaleidoscopic Parade - Basic Attack Stage 2</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Prismatic Overblast DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["44.00%*10", "47.61%*10", "51.22%*10", "56.27%*10", "59.88%*10", "64.03%*10", "69.80%*10", "75.57%*10", "81.35%*10", "87.48%*10"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Basic Attack - To a Vivid Tomorrow! DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["4.22%*12+5.06%*10", "4.56%*12+5.47%*10", "4.91%*12+5.89%*10", "5.39%*12+6.47%*10", "5.73%*12+6.88%*10", "6.13%*12+7.36%*10", "6.68%*12+8.02%*10", "7.24%*12+8.68%*10", "7.79%*12+9.35%*10", "8.38%*12+10.05%*10"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Prismatic Overblast Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Resonance Energy Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                    }],
                    index: 5
                }
            ]
        },
        {
            skillId: 4,
            typeName: 'Intro Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconLinNai/SP_IconLinNaiQTE.webp",
            skillName: 'Time to Show Some Colors!',
            skillDescription: `
            Deal <span class="Light">Spectro DMG</span>, inflicting <Info key="lynae_pf"><span class='Highlight'>Photochromic Flux</span></Info> on targets hit.<br>
            While in <Info key="lynae_oss"><span class='Highlight'>Overflow</span></Info>, casting this skill recovers 100 points of <Info key="lynae_overflow"><span class='Highlight'>Overflow</span></Info>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Time to Show Some Colors! DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["11.31%*10", "12.24%*10", "13.16%*10", "14.46%*10", "15.39%*10", "16.45%*10", "17.94%*10", "19.42%*10", "20.90%*10", "22.48%*10"]
                    }],
                    index: 1
                },
                {
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
            skillName: 'Let\'s Hit the Road!',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconLinNai/SP_IconLinNaiT.webp",
            skillDescription: `Attack the target and deal 100% <span class="Light">Spectro DMG</span>. The next incoming Resonator gain 15% All DMG Amplification and 25% Resonance Liberation DMG Amplification for 14s or until they are switched out.<br>
            Lynae leaves the <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info> state upon casting Outro Skill.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconLinNai/SP_IconLinNaiY1.webp",
            skillName: 'Chromaticity Modeling',
            skillDescription: `<span class="Title">Optical Sampling Stage</span>
            Lynae is in <Info key="lynae_oss"><span class='Highlight'>Overflow</span></Info> by default. While in this state, <Info key="lynae_overflow"><span class='Highlight'>Overflow</span></Info> recovers during certain skills.
            <div class="gap"></div>
            <span class="Title">Kaleidoscopic Parade</span>
            Casting <span class="Highlight">Basic Attack - Spark Collision</span> sends Lynae into <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info>. In this state, Lynae continuously recovers <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info> while moving on the ground or during certain periods of certain skills. Lynae will not Walk during this state, and her Running and Sprinting will be replaced by the faster <span class="Highlight">Free Skating</span> and <span class="Highlight">Speed Skating</span>.
            <div class="gap"></div>
            <span class="Title">Basic Attack - Polychrome Leap</span>
            While in <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info>, with at least 1/3 of the max <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info>, Jump is replaced by <span class="Highlight">Basic Attack - Polychrome Leap</span>.<br>
            Consume 1/3 of the max <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info> to deal <span class="Light">Spectro DMG</span>. Inflict <Info key="lynae_pf"><span class='Highlight'>Photochromic Flux</span></Info> on targets hit. Successful Dodges can be triggered within a certain time during this skill. While airborne, <span class="Highlight">Basic Attack - Polychrome Leap</span> chains up to 3 stages. Switching to another Resonator resets the combo.<br>
            While in combat, each stage of <span class="Highlight">Basic Attack - Polychrome Leap</span> cast recovers 1 point of <Info key="lynae_trueColor"><span class='Highlight'>True Color</span></Info>.<br>
            Within a certain time after <span class="Highlight">Basic Attack - Polychrome Leap Stage 1</span> press Normal Attack on the ground to cast <span class="Highlight">Kaleidoscopic Parade - Basic Attack Stage 2</span>.<br>
            Casting <span class="Highlight">Basic Attack - Polychrome Leap Stage 2</span> also pulls in nearby targets.
            <div class="gap"></div>
            <span class="Title">Basic Attack - Iridescent Splash</span>
            During <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info>, when Lynae is in mid-air with 3 points of <Info key="lynae_trueColor"><span class='Highlight'>True Color</span></Info>, and <span class="Highlight">Basic Attack - Visual Impact</span> is on cooldown, press Normal Attack or Resonance Skill to deal <span class="Light">Spectro DMG</span> and inflict <Info key="lynae_pf"><span class='Highlight'>Photochromic Flux</span></Info> on targets hit.<br>
            This skill consumes 3 points of <Info key="lynae_trueColor"><span class='Highlight'>True Color</span></Info>.<br>
            Press Normal Attack within a certain time during this skill to cast <span class="Highlight">Kaleidoscopic Parade - Basic Attack Stage 2</span>.
            <div class="gap"></div>
            <span class="Title">Basic Attack - Visual Impact</span>
            During <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info>, when Lynae is in mid-air with 3 points of <Info key="lynae_trueColor"><span class='Highlight'>True Color</span></Info>, and this skill is not on cooldown, press Normal Attack or Resonance Skill to deal <span class="Light">Spectro DMG</span> and inflict <Info key="lynae_pf"><span class='Highlight'>Photochromic Flux</span></Info> on targets hit.<br>
            This skill consumes 3 points of <Info key="lynae_trueColor"><span class='Highlight'>True Color</span></Info> and grants all nearby Resonators in the team 40 points of Tune Break Boost for 30s.<br>
            Press Normal Attack within a certain time during this skill to cast <span class="Highlight">Kaleidoscopic Parade - Basic Attack Stage 2</span>.
            <div class="gap"></div>
            <span class="Title">Resonance Mode</span>
            Inflict <Info key="lynae_pf"><span class='Highlight'>Photochromic Flux</span></Info> when hitting a target with <span class="Highlight">Basic Attack - Polychrome Leap</span>, <span class="Highlight">Basic Attack - Iridescent Splash</span>, <span class="Highlight">Basic Attack - Visual Impact</span> and <span class="Highlight">Intro Skill - Time to Show Some Colors!</span>.<br>
            Lynae can switch between <span class="Highlight">Resonance Mode - Tune Rupture</span> and <span class="Highlight">Resonance Mode - Tune Strain</span>:<br>
            - When in <span class="Highlight">Resonance Mode - Tune Rupture</span>, <Info key="lynae_pf"><span class='Highlight'>Photochromic Flux</span></Info> inflicts <Info key="tuneRupture_shifting"><span class='Highlight'>Tune Rupture - Shifting</span></Info> on targets for 25s.<br>
            - When in <span class="Highlight">Resonance Mode - Tune Strain</span>, <Info key="lynae_pf"><span class='Highlight'>Photochromic Flux</span></Info> inflicts <Info key="tuneStrain_shifting"><span class='Highlight'>Tune Strain - Shifting</span></Info> on targets for 25s.
            <div class="gap"></div>
            <span class="Title">Tune Rupture Response - Spectral Analysis</span>
            Deal an instance of <span class="Light">Spectro DMG</span>, considered Tune Rupture DMG, to targets within range affected by <Info key="tuneRupture_interfered"><span class='Highlight'>Tune Rupture - Interfered</span></Info>.
            <div class="gap"></div>
            <span class="Title">Overflow</span>
            Lynae can hold up to 120 points of Overflow.<br>
            While in <Info key="lynae_oss"><span class='Highlight'>Overflow</span></Info>, <Info key="lynae_overflow"><span class='Highlight'>Overflow</span></Info> recovers during Basic Attack, Lynae-Style Palettes, Mid-air Attack, and Dodge Counter, or when Intro Skill is cast.<br>
            When <Info key="lynae_overflow"><span class='Highlight'>Overflow</span></Info> is full, <span class="Highlight">Basic Attack - Spark Collision</span> becomes available.<br>
            Casting <span class="Highlight">Basic Attack - Spark Collision</span> removes all <Info key="lynae_overflow"><span class='Highlight'>Overflow</span></Info>.
            <div class="gap"></div>
            <span class="Title">Lumiflow</span>
            Lynae can hold up to 120 points of Lumiflow.<br>
            During <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info>:<br>
            - Restore 20% of <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info> per second when Lynae is moving on the ground/climbing, or performs a successful Dodge on the ground, or within a certain time during <span class="Highlight">Kaleidoscopic Parade - Basic Attack</span>, <span class="Highlight">Kaleidoscopic Parade - Ground Heavy Attack</span>, <span class="Highlight">Kaleidoscopic Parade - Mid-air Heavy Attack</span>, <span class="Highlight">Kaleidoscopic Parade - Dodge Counter</span>, <span class="Highlight">Additive Color</span>, ground Dodge, Intro Skill, or <span class="Highlight">Basic Attack - To a Vivid Tomorrow!</span>.<br>
            - <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info> starts to deplete by 20% per second while Lynae is staying still on the ground/climbing/swimming or off the field, or after a certain time following the use of the skills listed above.<br>
            - <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info> does not change while Lynae is not in any of the states described above.<br>
            Exiting <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info> removes all <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info>.<br>
            With 120 points of <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info>, Lynae's roller skating speed further increases. <span class="Highlight">Speed Skating</span> consumes STA over time.
            <div class="gap"></div>
            <span class="Title">True Color</span>
            Lynae can hold up to 3 points of True Color.<br>
            During combat, each time <span class="Highlight">Basic Attack - Polychrome Leap</span> is cast, gain 1 point of <Info key="lynae_trueColor"><span class='Highlight'>True Color</span></Info>.<br>
            With 3 points of <Info key="lynae_trueColor"><span class='Highlight'>True Color</span></Info>, <span class="Highlight">Basic Attack - Iridescent Splash</span> and <span class="Highlight">Basic Attack - Visual Impact</span> become available.<br>
            Exiting <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info> removes all <Info key="lynae_trueColor"><span class='Highlight'>True Color</span></Info>.<br>`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Basic Attack - Iridescent Splash DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["153.00%", "165.55%", "178.10%", "195.66%", "208.21%", "222.64%", "242.71%", "262.78%", "282.86%", "304.18%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Basic Attack - Visual Impact DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["612.00%", "662.19%", "712.37%", "782.63%", "832.81%", "890.53%", "970.82%", "1051.11%", "1131.41%", "1216.72%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Basic Attack - Polychrome Leap 1",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["17.00%*3", "18.40%*3", "19.79%*3", "21.74%*3", "23.14%*3", "24.74%*3", "26.97%*3", "29.20%*3", "31.43%*3", "33.80%*3"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Basic Attack - Polychrome Leap 2",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["8.50%*6", "9.20%*6", "9.90%*6", "10.87%*6", "11.57%*6", "12.37%*6", "13.49%*6", "14.60%*6", "15.72%*6", "16.90%*6"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Basic Attack - Polychrome Leap 3",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["6.59%*8", "7.13%*8", "7.67%*8", "8.43%*8", "8.97%*8", "9.59%*8", "10.45%*8", "11.32%*8", "12.18%*8", "13.10%*8"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Tune Rupture Response - Spectral Analysis DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["946.00% Tune AMP", "1023.58% Tune AMP", "1101.15% Tune AMP", "1209.75% Tune AMP", "1287.32% Tune AMP", "1376.53% Tune AMP", "1500.64% Tune AMP", "1624.76% Tune AMP", "1748.88% Tune AMP", "1880.75% Tune AMP"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Basic Attack - Visual Impact Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Roller Skating STA Cost Per Sec at Max Overflow",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 8
                }
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Colors Never Fade!',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconLinNai/SP_IconLinNai1D1.webp",
            skillDescription: `After casting <span class="Highlight">Basic Attack - Visual Impact</span>, Lynae leaves <Info key="lynae_sprayPaint"><span class='Highlight'>Spray Paint</span></Info> on the ground and continuously inflicts <Info key="lynae_pf"><span class='Highlight'>Photochromic Flux</span></Info> on targets within the <Info key="lynae_sprayPaint"><span class='Highlight'>Spray Paint</span></Info> for 5s, triggered once every 2s. When <Info key="lynae_sprayPaint"><span class='Highlight'>Spray Paint</span></Info> is on the ground, switching to another <span class="Highlight">Resonance Mode</span> doesn't affect the <Info key="lynae_pf"><span class='Highlight'>Photochromic Flux</span></Info> effects inflicted by the <Info key="lynae_sprayPaint"><span class='Highlight'>Spray Paint</span></Info>.<br><br>
            With Lynae in the team, the expedition motorbike's Energy Tank expands by 600 points. Lynae enters <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info> automatically while on the expedition motorbike and restores 20% of <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info> per second.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: '\"Adaptive Optics: Everyday Applications\"',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconLinNai/SP_IconLinNai2D2.webp",
            skillDescription: `Casting <span class="Highlight">Intro Skill - Time to Show Some Colors!</span> increases Lynae's <span class="Light">Spectro DMG</span> Bonus by 25% for 9s.<br><br>
            During <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info>, if Lynae isn't in combat, dodging without directional input grants her <span class="Highlight">Optic Camo</span> for 15s, which will be removed when Lynae casts any skill other than dodging or is switched off the field. Performing environmental, gameplay or functional interactions, or entering combat, removes the <span class="Highlight">Optic Camo</span>. With <span class="Highlight">Optic Camo</span>, Lynae may enter the enemy's aggro range without triggering combat.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 9,
            typeName: "Tune Break",
            skillName: 'Spectral Analysis',
            skillImg: "",
            skillDescription: `Lynae can inflict <Info key="tuneRupture_shifting"><span class='Highlight'>Tune Rupture - Shifting</span></Info> or <Info key="tuneStrain_shifting"><span class='Highlight'>Tune Strain - Shifting</span></Info> on targets.<br>
            Lynae can respond to <Info key="tuneRupture_interfered"><span class='Highlight'>Tune Rupture - Interfered</span></Info> and <Info key="tuneStrain_interfered"><span class='Highlight'>Tune Strain - Interfered</span></Info>.<br>
            - Responding to <Info key="tuneRupture_interfered"><span class='Highlight'>Tune Rupture - Interfered</span></Info>: When any Resonator in the team deals <Info key="tuneBreak"><span class='Highlight'>Tune Break</span></Info> DMG and inflicts the <Info key="tuneRupture_interfered"><span class='Highlight'>Tune Rupture - Interfered</span></Info> state, Lynae casts <span class="Highlight">Tune Rupture Response - Spectral Analysis</span>. Each target can be damaged by this skill up to once every 8s.<br>
            - Responding to <Info key="tuneStrain_interfered"><span class='Highlight'>Tune Strain - Interfered</span></Info>: For each stack of <Info key="tuneStrain_interfered"><span class='Highlight'>Tune Strain - Interfered</span></Info> on the target, each point of Lynae's Tune Break Boost increases her total DMG against that target by 0.12%. When Lynae is in the team, the target's max stack limit of <Info key="tuneStrain_interfered"><span class='Highlight'>Tune Strain - Interfered</span></Info> is increased by 1.<br>
            When the target's Off-Tune Level is full, Lynae can cast <Info key="tuneBreak"><span class='Highlight'>Tune Break</span></Info> on the target.`,
            skillDetailNum: [""],
            multipliers: [
                {
                    attributeName: "Spectral Analysis - Discorded Tune DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["946.00%", "1023.58%", "1101.15%", "1209.75%", "1287.32%", "1376.53%", "1500.64%", "1624.76%", "1748.88%", "1880.75%"]
                    }],
                    index: 1
                },
            ]
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Days to be Painted Like a Canvas",
            description: `The DMG Multiplier of <span class="Highlight">Basic Attack - Polychrome Leap</span> is increased by 120%.<br>
            The duration of <Info key="lynae_sprayPaint"><span class='Highlight'>Spray Paint</span></Info> is increased by 100%. Targets within the range of <Info key="lynae_sprayPaint"><span class='Highlight'>Spray Paint</span></Info> are <span class="Highlight">pulled in</span> towards the center every 6s.<br>
            Lynae is now immune to interruptions during <span class="Highlight">Basic Attack - Polychrome Leap</span> and <span class="Highlight">Basic Attack - Visual Impact</span>.<br>
            During <Info key="lynae_oss"><span class='Highlight'>Overflow</span></Info>, after staying in a non-combat state for 2s, restore 120 points of <Info key="lynae_overflow"><span class='Highlight'>Overflow</span></Info> every 2s.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LinNaiM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "Into Lights' Vanishing Point",
            description: `Gain 25% All DMG Amplification.<br>
            Outro Skill gains the following effect:<br>
            Casting Outro Skill now additionally grants the incoming Resonator 25% All DMG Amplification for 14s or until the Resonator is switched out.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LinNaiM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "For One Brilliant Moment",
            description: `The DMG Multiplier of <span class="Highlight">Basic Attack - Visual Impact</span> and <span class="Highlight">Basic Attack - Iridescent Splash</span> is increased by 90%.<br>
            While Lynae is in combat, when <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info> is at least 120 points, gain 1 stack of <span class="Highlight">Premixed Hue</span> every 1s, up to 25 stacks. Each stack of <span class="Highlight">Premixed Hue</span> increases the Spectro DMG Bonus of <span class="Highlight">Additive Color</span> by 55%. No <span class="Highlight">Premixed Hue</span> is gained while casting <span class="Highlight">Additive Color</span>. When <span class="Highlight">Additive Color</span> ends, remove all stacks of <span class="Highlight">Premixed Hue</span>. Lynae loses a stack of <span class="Highlight">Premixed Hue</span> every 0.5s when <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info> is below 120 points.<br>
            While Lynae is out of combat, with at least 120 points of <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info>, gain 1 stack of <span class="Highlight">Premixed Hue</span> every 0.5s; when <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info> is below 120 points, lose 1 stack of <span class="Highlight">Premixed Hue</span> every 1s.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LinNaiM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "Shadows of a Wind Racer",
            description: `ATK is increased by 20%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LinNaiM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "Visions of a Future Unbound",
            description: `The DMG Multiplier of <span class="Highlight">Resonance Liberation - Prismatic Overblast</span> is increased by 70%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LinNaiM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "Painted in My True Color",
            description: `Each time <span class="Highlight">Kaleidoscopic Parade - Graffiti Blast</span> or <span class="Highlight">Kaleidoscopic Parade - Mid-air Heavy Attack</span> is cast, Lynae gains 1 stack of <span class="Highlight">Color of Soul</span>, up to 3 stacks. Each stack of <span class="Highlight">Color of Soul</span> increases the DMG the target takes from <span class="Highlight">Basic Attack - Iridescent Splash</span> and <span class="Highlight">Basic Attack - Visual Impact</span> by 30%. After casting <span class="Highlight">Basic Attack - Iridescent Splash</span> or <span class="Highlight">Basic Attack - Visual Impact</span>, all stacks of <span class="Highlight">Color of Soul</span> are removed.<br>
            Casting <span class="Highlight">Basic Attack - Polychrome Leap</span> resets the charges of <span class="Highlight">Kaleidoscopic Parade - Mid-air Heavy Attack</span>.<br>
            Lynae is immune to interruptions, and DMG taken is reduced by 30% during <span class="Highlight">Kaleidoscopic Parade - Mid-air Heavy Attack</span>.<br>
            Lynae now stays in <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info> after casting <span class="Highlight">Outro Skill - Let's Hit the Road!</span>.<br>
            The <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info> upper limit is increased from 120 to 360. At the max limit, Lynae's roller skating speed further increases.<br>
            If Intro Skill is cast during <Info key="lynae_kp"><span class='Highlight'>Overflow</span></Info>, restore 120 points of <Info key="lynae_lumiflow"><span class='Highlight'>Lumiflow</span></Info>.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LinNaiM6_UI.webp"
        },
    ]
}