import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Qiuyuan: WWCharacter = {
    name: "Qiuyuan",
    charaId: 1411,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Aero",
    weapon: "Sword",
    bio: `Former senior agent of Mingting's Internal Security Agency.
    Though enmity filled his younger days, loyalty defined his later years. However, scapegoated for a murder, he is now but a blind swordsman wandering the world alone.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_Qiuyuan_UI.webp",
        icon_sq: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_56_UI.webp",
        model: "https://i.imgur.com/MXdCqGc.png"
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
                item: "Truth in Lies",
                id: 5,
                value: "46"
            },
            {
                item: "Wintry Bell",
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
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill1.webp",
            skillName: 'Inkwash',
            skillDescription: `<span class="Title">Basic Attack</span>
            Perform up to 3 consecutive attacks, dealing <span class="Wind">Aero DMG</span>.
            <div class="gap"></div>
            <span class="Title">Heavy Attack</span>
            Consume STA to attack the target, dealing <span class="Wind">Aero DMG</span>. Press <span class="Highlight">Normal Attack</span> within a certain period of time after casting this skill to perform <span class="Highlight">Basic Attack Thus Spoke the Blade: Inkwash Stage 4</span>.
            <div class="gap"></div>
            <span class="Title">Mid-air Attack</span>
            Consume STA to perform Plunging Attack, dealing <span class="Wind">Aero DMG</span>.
            <div class="gap"></div>
            <span class="Title">Dodge Counter</span>
            Press <span class="Highlight">Normal Attack</span> right after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Wind">Aero DMG</span>, considered as <span class="Highlight">Heavy Attack</span>.<br>
            Moments after a <span class="Highlight">Basic Attack</span> or <span class="Highlight">Heavy Attack</span>, Qiuyuan becomes immune to the next instance of DMG he takes and casts <span class="Highlight">Dodge Counter</span> upon being attacked, dealing <span class="Wind">Aero DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["21.00%", "22.73%", "24.45%", "26.86%", "28.58%", "30.56%", "33.32%", "36.07%", "38.83%", "41.76%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["17.50%+17.50%", "18.94%+18.94%", "20.37%+20.37%", "22.38%+22.38%", "23.82%+23.82%", "25.47%+25.47%", "27.77%+27.77%", "30.06%+30.06%", "32.36%+32.36%", "34.80%+34.80%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["12.39%+12.39%+12.39%+12.39%+33.04%", "13.41%+13.41%+13.41%+13.41%+35.75%", "14.43%+14.43%+14.43%+14.43%+38.46%", "15.85%+15.85%+15.85%+15.85%+42.26%", "16.87%+16.87%+16.87%+16.87%+44.97%", "18.03%+18.03%+18.03%+18.03%+48.08%", "19.66%+19.66%+19.66%+19.66%+52.42%", "21.28%+21.28%+21.28%+21.28%+56.75%", "22.91%+22.91%+22.91%+22.91%+61.09%", "24.64%+24.64%+24.64%+24.64%+65.69%"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Mid-air Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["58.80%", "63.63%", "68.45%", "75.20%", "80.02%", "85.56%", "93.28%", "100.99%", "108.71%", "116.91%"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Heavy Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["83.30%", "90.14%", "96.97%", "106.53%", "113.36%", "121.21%", "132.14%", "143.07%", "154.00%", "165.61%"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Dodge Counter DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["98.00%+14.00%*3", "106.04%+15.15%*3", "114.08%+16.30%*3", "125.33%+17.91%*3", "133.36%+19.06%*3", "142.60%+20.38%*3", "155.46%+22.21%*3", "168.32%+24.05%*3", "181.18%+25.89%*3", "194.84%+27.84%*3"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Mid-air Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 8
                }
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconQiuyuan/SP_IconQiuyuanB1.webp",
            skillName: 'Through the Groves',
            skillDescription: `<span class="start-gap"></span>
            Press <span class="Highlight">Resonance Skill</span> to dash forward for a distance, dealing <span class="Wind">Aero DMG</span>, considered as Echo Skill DMG. If <span class="Highlight">Resonance Skill</span> is cast upon being attacked by an enemy target, Qiuyuan becomes immune to this instance of DMG and stagnates nearby enemies, while gaining immunity to interruption during this <span class="Highlight">Resonance Skill</span>.<br>
            Switching to other Resonators removes the Stagnation effect from enemies.
            <div class="gap"></div>
            <span class="Title">Undaunted Wayfarer</span>
            Hold <span class="Highlight">Resonance Skill</span> to dash forward for a distance at the cost of STA, dealing <span class="Wind">Aero DMG</span> to the target, considered as Echo Skill DMG.<br>
            If there are no targets nearby, Qiuyuan will leap up and dash through the air by continuously consuming STA until it runs out. Release <span class="Highlight">Resonance Skill</span> to immediately end the dash and land. If there are targets nearby when Qiuyuan lands, deal <span class="Wind">Aero DMG</span> to nearby targets, considered as Echo Skill DMG. This skill can be cast in mid-air.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Echo",
                    skillDetailNum: [{
                        values: ["36.14%*3", "39.10%*3", "42.06%*3", "46.21%*3", "49.18%*3", "52.58%*3", "57.32%*3", "62.06%*3", "66.80%*3", "71.84%*3"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Undaunted Wayfarer DMG",
                    type: "Echo",
                    skillDetailNum: [{
                        values: ["16.26%+16.26%*3+43.36%", "17.60%+17.60%*3+46.92%", "18.93%+18.93%*3+50.48%", "20.80%+20.80%*3+55.45%", "22.13%+22.13%*3+59.01%", "23.66%+23.66%*3+63.10%", "25.80%+25.80%*3+68.79%", "27.93%+27.93%*3+74.48%", "30.06%+30.06%*3+80.16%", "32.33%+32.33%*3+86.21%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["14s", "14s", "14s", "14s", "14s", "14s", "14s", "14s", "14s", "14s"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Undaunted Wayfarer Concerto Regen",
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
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconQiuyuan/SP_IconQiuyuanC1.webp",
            skillName: 'Sundering Strike',
            skillDescription: `<span class="start-gap"></span>
            Deal <span class="Wind">Aero DMG</span> to targets within range, considered as Echo Skill DMG.<br>
            For every 1% of Qiuyuan's Crit. Rate over 50%, this skill increases the Crit. DMG of all nearby active Resonators in the team by 2% for 30s, up to 30%.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Echo",
                    skillDetailNum: [{
                        values: ["400.00%", "432.80%", "465.60%", "511.52%", "544.32%", "582.04%", "634.52%", "687.00%", "739.48%", "795.24%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Resonance Energy Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
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
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconQiuyuan/SP_IconQiuyuanQTE.webp",
            skillName: 'Attack the Must-Defend',
            skillDescription: `<span class="start-gap"></span>
            Attack the target, dealing <span class="Wind">Aero DMG</span>, considered as Heavy Attack DMG.<br>
            Within a certain period of time after casting this skill, press <span class="Highlight">Normal Attack</span> to perform Basic Attack <span class="Highlight">Thus Spoke the Blade: Inkwash Stage 3</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill Damage",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["4.80%*5+24.00%+72.00%", "5.20%*5+25.97%+77.91%", "5.59%*5+27.94%+83.81%", "6.14%*5+30.70%+92.08%", "6.54%*5+32.66%+97.98%", "6.99%*5+34.93%+104.77%", "7.62%*5+38.08%+114.22%", "8.25%*5+41.22%+123.66%", "8.88%*5+44.37%+133.11%", "9.55%*5+47.72%+143.15%"]
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
            skillName: 'Strike Before Ready',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconQiuyuan/SP_IconQiuyuanT.webp",
            skillDescription: `Attack the target, dealing <span class="Wind">Aero DMG</span> equal to 100% of Qiuyuan's ATK, considered as Echo Skill DMG.<br>
            Grant 50% Echo Skill DMG Amplification to the incoming Resonator, lasting for 14s or until the Resonator is switched out.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconQiuyuan/SP_IconQiuyuanY.webp",
            skillName: 'Verdant Edge',
            skillDescription: `<span class="Title">Basic Attack - Thus Spoke the Blade: Inkwash</span>
            When Qiuyuan reaches 200 points of Swordster's Soliloquy, his <span class="Highlight">Basic Attack</span> is replaced with Basic Attack <span class="Highlight">Thus Spoke the Blade: Inkwash</span>, which chains together up to 4 consecutive strikes, dealing <span class="Wind">Aero DMG</span>, considered as Heavy Attack DMG.
            <div class="gap"></div>
            <span class="Title">Bamboo's Shade</span>
            When Qiuyuan reaches 400 points of Swordster's Soliloquy, he gains the <span class="Highlight">Bamboo's Shade</span> effect, granting all nearby active Resonators in the team 30% Echo Skill DMG Bonus for 30s.
            <div class="gap"></div>
            <span class="Title">Inksplash of Mind</span>
            When Swordster's Soliloquy is full, Qiuyuan enters the <span class="Highlight">Inksplash of Mind</span> state for 8s, during which <span class="Highlight">Heavy Attack</span> is replaced with Heavy Attack <span class="Highlight">Thus Spoke the Blade: To Save</span>.<br>
            In this state, hold <span class="Highlight">Normal Attack</span> to consume Swordster's Soliloquy to perform Heavy Attack <span class="Highlight">Thus Spoke the Blade: To Teach</span>, <span class="Highlight">Thus Spoke the Blade: To Save</span>, and <span class="Highlight">Thus Spoke the Blade: To Sacrifice</span> in order, dealing <span class="Wind">Aero DMG</span>, considered as Heavy Attack DMG.<br>
            - Performing <span class="Highlight">Thus Spoke the Blade: To Teach</span>, <span class="Highlight">Thus Spoke the Blade: To Save</span>, or <span class="Highlight">Thus Spoke the Blade: To Sacrifice</span> is considered as performing Echo Skill.<br>
            - Inksplash of Mind ends when Swordster's Soliloquy is used up.
            <div class="gap"></div>
            <span class="Title">Swordster's Soliloquy</span>
            Qiuyuan can hold up to 600 points of Swordster's Soliloquy.<br>
            - 100 points of Swordster's Soliloquy is obtained when performing <span class="Highlight">Basic Attack Stage 3</span>.<br>
            - 100 points of Swordster's Soliloquy is obtained when performing each stage of Basic Attack <span class="Highlight">Thus Spoke the Blade: Inkwash</span>.<br>
            - 100 points of Swordster's Soliloquy is obtained when performing <span class="Highlight">Dodge Counter</span>.<br>
            - 400 points of Swordster's Soliloquy is obtained when performing <span class="Highlight">Intro Skill</span>.<br>
            - Swordster's Soliloquy cannot be obtained in the Inksplash of Mind state.<br>
            - Swordster's Soliloquy is cleared when the Inksplash of Mind state ends.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Thus Spoke the Blade: Inkwash Stage 1 DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["30.00%+30.00%", "32.46%+32.46%", "34.92%+34.92%", "38.37%+38.37%", "40.83%+40.83%", "43.66%+43.66%", "47.59%+47.59%", "51.53%+51.53%", "55.47%+55.47%", "59.65%+59.65%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Thus Spoke the Blade: Inkwash Stage 2 DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["27.99%+27.99%+37.32%", "30.29%+30.29%+40.39%", "32.59%+32.59%+43.45%", "35.80%+35.80%+47.73%", "38.09%+38.09%+50.79%", "40.73%+40.73%+54.31%", "44.41%+44.41%+59.21%", "48.08%+48.08%+64.10%", "51.75%+51.75%+69.00%", "55.65%+55.65%+74.20%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Thus Spoke the Blade: Inkwash Stage 3 DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["7.33%+7.33%*4+36.65%", "7.94%+7.94%*4+39.66%", "8.54%+8.54%*4+42.67%", "9.38%+9.38%*4+46.87%", "9.98%+9.98%*4+49.88%", "10.67%+10.67%*4+53.33%", "11.63%+11.63%*4+58.14%", "12.59%+12.59%*4+62.95%", "13.56%+13.56%*4+67.76%", "14.58%+14.58%*4+72.87%"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Thus Spoke the Blade: Inkwash Stage 4 DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["86.70%", "93.81%", "100.92%", "110.88%", "117.99%", "126.16%", "137.54%", "148.91%", "160.29%", "172.37%"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Thus Spoke the Blade: To Teach DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["45.99%+45.99%+45.99%+45.99%+45.99%", "49.77%+49.77%+49.77%+49.77%+49.77%", "53.54%+53.54%+53.54%+53.54%+53.54%", "58.82%+58.82%+58.82%+58.82%+58.82%", "62.59%+62.59%+62.59%+62.59%+62.59%", "66.93%+66.93%+66.93%+66.93%+66.93%", "72.96%+72.96%+72.96%+72.96%+72.96%", "78.99%+78.99%+78.99%+78.99%+78.99%", "85.03%+85.03%+85.03%+85.03%+85.03%", "91.44%+91.44%+91.44%+91.44%+91.44%"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Thus Spoke the Blade: To Save DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["19.34%*3+15.82%+15.82%+15.82%", "20.92%*3+17.12%+17.12%+17.12%", "22.51%*3+18.42%+18.42%+18.42%", "24.73%*3+20.23%+20.23%+20.23%", "26.31%*3+21.53%+21.53%+21.53%", "28.14%*3+23.02%+23.02%+23.02%", "30.67%*3+25.10%+25.10%+25.10%", "33.21%*3+27.17%+27.17%+27.17%", "35.74%*3+29.25%+29.25%+29.25%", "38.44%*3+31.45%+31.45%+31.45%"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Thus Spoke the Blade: To Sacrifice DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["109.50%", "118.48%", "127.46%", "140.03%", "149.01%", "159.34%", "173.70%", "188.07%", "202.44%", "217.70%"]
                    }],
                    index: 7
                }
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Quietude Within',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconQiuyuan/SP_IconQiuyuanD1.webp",
            skillDescription: `Qiuyuan obtains <span class="Highlight">Quietude Within</span> for 10s upon entering the Inksplash of Mind state. This effect can be triggered once every 22s.<br>
            Heavy Attack <span class="Highlight">Thus Spoke the Blade: To Teach</span>, <span class="Highlight">Thus Spoke the Blade: To Save</span>, and <span class="Highlight">Thus Spoke the Blade: To Sacrifice</span> deal 50% more DMG. <span class="Highlight">Thus Spoke the Blade: To Sacrifice</span> additionally restores 30 points of Concerto Energy on hit.<br>
            - This effect ends early when Qiuyuan is switched off the field.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Drink Away Woes Age-Old',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconQiuyuan/SP_IconQiuyuanD2.webp",
            skillDescription: `When casting Echo Skill, Qiuyuan's bamboo flask absorbs the overflowing energy and brews it into <span class="Highlight">Flowing Panacea</span>.<br>
            The next time Swordster's Soliloquy is obtained, the <span class="Highlight">Flowing Panacea</span> is consumed to gain 10% ATK increase for 20s.`,
            skillDetailNum: [""],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Sword Sheathed, Mind Unclouded",
            description: `<span class="Highlight">Thus Spoke the Blade: To Teach</span>, <span class="Highlight">Thus Spoke the Blade: To Save</span>, and <span class="Highlight">Thus Spoke the Blade: To Sacrifice</span> can no longer be interrupted.<br>
            Qiuyuan gains 20% Crit. Rate increase.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_QiuyuanM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "O Blade, I, Who Teach No More",
            description: `Bamboo's Shade now grants an additional 30% Echo Skill DMG Amplification to all nearby Resonators in the team.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_QiuyuanM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "O Blade, I, Who Save No More",
            description: `The DMG Multiplier of Resonance Liberation <span class="Highlight">Sundering Strike</span> is increased by 500%.<br>
            If Concerto Energy is full when not in the Inksplash of Mind state, Qiuyuan's <span class="Highlight">Resonance Skill</span> is replaced with Resonance Skill <span class="Highlight">Straw Cape in Drizzly Rain</span>, available once every 20s.<br>
            Upon casting <span class="Highlight">Straw Cape in Drizzly Rain</span>, the <span class="Highlight">Quietude Within</span> effect immediately ends and 60 Concerto Energy is consumed to deal <span class="Wind">Aero DMG</span> equal to 500% of Qiuyuan's ATK, considered Echo Skill DMG, and restore 400 points of Swordster's Soliloquy. The next <span class="Hi<span class="Highlight">ghlight">Basic Attack</span> is replaced with <span class="Highlight">Thus Spoke the Blade: Inkwash Stage 3</span>.<br>
            Upon casting <span class="Highlight">Straw Cape in Drizzly Rain</span>, Qiuyuan cannot gain the <span class="Highlight">Quietude Within</span> effect the next time he enters Inksplash of Mind. <span class="Highlight">Thus Spoke the Blade: To Teach</span>, <span class="Highlight">Thus Spoke the Blade: To Save</span>, and <span class="Highlight">Thus Spoke the Blade: To Sacrifice</span> gain 600% DMG Multiplier increase and additionally restore 30 points of Concerto Energy on hit.<br>
            When not in Co-op mode, upon casting <span class="Highlight">Straw Cape in Drizzly Rain</span>, the next <span class="Highlight">Outro Skill</span> is replaced with Outro Skill <span class="Highlight">Sheath Fallen, New Shoots Revealed</span>, which deals <span class="Wind">Aero DMG</span> equal to 500% of Qiuyuan's ATK, considered Echo Skill DMG.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_QiuyuanM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "O Blade, I, Who Sacrifice No More",
            description: `ATK is increased by 20%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_QiuyuanM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "O Blade, I, Who Await to be Wielded",
            description: `Qiuyuan now ignores 15% of the target's DEF when dealing damage.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_QiuyuanM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "Thus I Heard, Thus I Saw, Thus I Spoke",
            description: `Casting Heavy Attack <span class="Highlight">Thus Spoke the Blade: To Sacrifice</span> stagnates nearby targets for 5s or until the targets are damaged or until Qiuyuan is switched off the field. This effect is not available in the Co-op Mode.<br>
            When Qiuyuan is the active Resonator in the team, upon exiting Inksplash of Mind, he deals <span class="Wind">Spectro DMG</span> equal to 600% of his ATK to all targets within range, considered Echo Skill DMG.<br>
            Casting Resonance Skill <span class="Highlight">Straw Cape in Drizzly Rain</span> increases Qiuyuan's Crit. DMG by 100% for 6s. Switching to another Resonator ends this effect early.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_QiuyuanM6_UI.webp"
        }
    ]
}