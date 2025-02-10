import { WWCharacter } from "../WWCharacter";

const rarity4Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_4_Stars.webp";

export const Lumi: WWCharacter = {
    name: "Lumi",
    charaId: 1504,
    rarity: {
        alt: "4 Star",
        img: rarity4Star
    },
    element: "Electro",
    weapon: "Broadblade",
    bio: `From dense forests to vast wilderness, places where navigator of Lollo Logistics Lumi has traveled bear witness to her charming personality, like a shaft of sunlight.<br>
    Born disciplined, she is now enjoying her daily tasks as a diligent courier, honoring her duty of punctual delivery.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_dengdeng_UI.webp",
        icon_sq: "https://static.wikia.nocookie.net/wutheringwaves/images/5/5e/Lumi_Icon.png",
        model: "https://i.imgur.com/34KUupN.png"
    },
    asension: {
        charaAsension: [
            {
                item: "LF Howler Core",
                id: 1,
                value: "4"
            },
            {
                item: "MF Howler Core",
                id: 2,
                value: "12"
            },
            {
                item: "HF Howler Core",
                id: 3,
                value: "12"
            },
            {
                item: "FF Howler Core",
                id: 4,
                value: "4"
            },
            {
                item: "Topological Confinement",
                id: 5,
                value: "46"
            },
            {
                item: "Nova",
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
                item: "LF Howler Core",
                id: 1,
                value: "25"
            },
            {
                item: "MF Howler Core",
                id: 2,
                value: "28"
            },
            {
                item: "HF Howler Core",
                id: 3,
                value: "40"
            },
            {
                item: "FF Howler Core",
                id: 4,
                value: "57"
            },
            {
                item: "Waveworn Residue 210",
                id: 5,
                value: "25"
            },
            {
                item: "Waveworn Residue 226",
                id: 6,
                value: "28"
            },
            {
                item: "Waveworn Residue 235",
                id: 7,
                value: "55"
            },
            {
                item: "Waveworn Residue 239",
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
        base_hp: 680,
        base_atk: 27,
        base_def: 72,
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
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconNor/SP_IconNorSword.webp",
            skillName: 'Navigation Support',
            skillDescription: `<span class="Title">Yellow Light: Basic Attack</span>
                Summon Squeakie to shoot three shots in a row, dealing <span class="Electro">Electro DMG</span>.
                <div class="gap"></div>
                <span class="Title">Yellow Light: Sprint</span>
                Dodge to perform <span class="Highlight">Sprint</span> and enter <span class="Highlight">Zoom Mode</span>. Lumi is unable to Dodge when performing <span class="Highlight">Sprint</span>.
                <div class="gap"></div>
                <span class="Title">Yellow Light: Zoom</span>
                When in this state, automatically shoot <span class="Highlight">Glitters</span> at a locked-on target and deal <span class="Thunder">Electro DMG</span>, considered Basic Attack DMG.
                <div class="gap"></div>
                <span class="Title">Yellow Light: Plunging Attack</span>
                Consume STA to perform a Plunging Attack, dealing <span class="Thunder">Electro DMG</span>.
                <div class="gap"></div>
                <span class="Title">Red Light: Basic Attack</span>
                Perform up to 3 consecutive attacks, dealing <span class="Thunder">Electro DMG</span>.
                <div class="gap"></div>
                <span class="Title">Red Light: Heavy Attack</span>
                Consume STA to strike the ground with Squeakie, causing an impact dealing <span class="Thunder">Electro DMG</span>, considered Basic Attack DMG.
                <div class="gap"></div>
                <span class="Title">Red Light: Plunging Attack</span>
                Consume STA to perform a Plunging Attack, dealing <span class="Thunder">Electro DMG</span>.
                <div class="gap"></div>
                <span class="Title">Red Light: Dodge Counter</span>
                Use Basic Attack right after a successful Dodge to attack the target, dealing <span class="Thunder">Electro DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Yellow Light: Basic Attack",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["16.00%*3", "17.32%*3", "18.63%*3", "20.47%*3", "21.78%*3", "23.29%*3", "25.39%*3", "27.48%*3", "29.58%*3", "31.81%*3"]
                    }],
                    index: 1
                }, {
                    attributeName: "Glitter",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["32.00%", "34.63%", "37.25%", "40.93%", "43.55%", "46.57%", "50.77%", "54.96%", "59.16%", "63.62%"]
                    }],
                    index: 2
                }, {
                    attributeName: "Yellow Light: Plunging Attack",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["48.00%", "51.94%", "55.88%", "61.39%", "65.32%", "69.85%", "76.15%", "82.44%", "88.74%", "95.43%"]
                    }],
                    index: 3
                }, {
                    attributeName: "Red Light: Basic Attack 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["45.60%", "49.34%", "53.08%", "58.32%", "62.06%", "66.36%", "72.34%", "78.32%", "84.31%", "90.66%"]
                    }],
                    index: 4
                }, {
                    attributeName: "Red Light: Basic Attack 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["54.15%+10.83%*5", "58.60%+11.72%*5", "63.04%+12.61%*5", "69.25%+13.85%*5", "73.69%+14.74%*5", "78.80%+15.76%*5", "85.90%+17.18%*5", "93.01%+18.61%*5", "100.11%+20.03%*5", "107.66%+21.54%*5"]
                    }],
                    index: 5
                }, {
                    attributeName: "Red Light: Basic Attack 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["32.49%+75.81%", "35.16%+82.03%", "37.82%+88.25%", "41.55%+96.95%", "44.22%+103.17%", "47.28%+110.32%", "51.54%+120.26%", "55.81%+130.21%", "60.07%+140.15%", "64.60%+150.72%"]
                    }],
                    index: 6
                }, {
                    attributeName: "Red Light: Heavy Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["33.25%*2", "35.98%*2", "38.71%*2", "42.53%*2", "45.25%*2", "48.39%*2", "52.75%*2", "57.11%*2", "61.47%*2", "66.11%*2"]
                    }],
                    index: 7
                }, {
                    attributeName: "Red Light: Plunging Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["57.00%", "61.68%", "66.35%", "72.90%", "77.57%", "82.95%", "90.42%", "97.90%", "105.38%", "113.33%"]
                    }],
                    index: 8
                }, {
                    attributeName: "Red Light: Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["84.15%+16.83%*5", "91.06%+18.22%*5", "97.96%+19.60%*5", "107.62%+21.53%*5", "114.52%+22.91%*5", "122.45%+24.49%*5", "133.49%+26.70%*5", "144.53%+28.91%*5", "155.57%+31.12%*5", "167.30%+33.46%*5"]
                    }],
                    index: 9
                }, {
                    attributeName: "Yellow Light: Plunging Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 10
                }, {
                    attributeName: "Red Light: Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 11
                }, {
                    attributeName: "Red Light: Plunging Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 12
                }
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconDengdeng/SP_IconDengdengB1.webp",
            skillName: 'Searchlight Service',
            skillDescription: `<span class="Title">Pounce</span>
                When in <span class="Highlight">Yellow Light Mode</span>, use Resonance Skill to perform Pounce, which consumes STA to pounce on the target before switching to <span class="Highlight">Red Light Mode</span>.<br>
                Lumi will perform a <span class="Highlight">Pounce</span> without STA cost when switched onto the field.
                <div class="gap"></div>
                <span class="Title">Rebound</span>
                When in <span class="Highlight">Red Light Mode</span>, use Resonance Skill to perform Rebound, which consumes STA to leap backward and attack the target before switching to <span class="Highlight">Yellow Light Mode</span>.
                <div class="gap"></div>
                <span class="Title">Yellow Light Mode</span>
                Perform ranged attacks when in Yellow Light Mode.
                <div class="gap"></div>
                <span class="Title">Red Light Mode</span>
                Perform melee attacks when in Red Light Mode.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Pounce DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["91.20%", "98.68%", "106.16%", "116.63%", "124.11%", "132.71%", "144.68%", "156.64%", "168.61%", "181.32%"]
                    }],
                    index: 1
                }, {
                    attributeName: "Rebound DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["87.40%", "94.57%", "101.74%", "111.77%", "118.94%", "127.18%", "138.65%", "150.11%", "161.58%", "173.76%"]
                    }],
                    index: 2
                }, {
                    attributeName: "Pounce STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 3
                }, {
                    attributeName: "Rebound STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 4
                }
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconDengdeng/SP_IconDengdengC1.webp",
            skillName: 'Squeakie Express',
            skillDescription: `Throw the giant Squeakie at the target, dealing <span class="Thunder">Electro DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["480.00%", "519.36%", "558.72%", "613.83%", "653.19%", "698.45%", "761.43%", "824.40%", "887.38%", "954.29%"]
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
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconDengdeng/SP_IconDengdengQTE.webp",
            skillName: 'Special Delivery',
            skillDescription: `Enter <span class="Highlight">Yellow Light Mode</span> and attack the target, dealing <span class="Thunder">Electro DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["28.34%*3", "30.66%*3", "32.98%*3", "36.24%*3", "38.56%*3", "41.23%*3", "44.95%*3", "48.67%*3", "52.38%*3", "56.33%*3"]
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
            skillName: 'Escorting',
            skillDescription: `The incoming Resonator has their Resonance Skill DMG Amplified by {0} for 10s or until they are switched out.`,
            skillDetailNum: ["38%"],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconDengdeng/SP_IconDengdengY.webp",
            skillName: 'Signal Light',
            skillDescription: `<span class="Title">Energized Pounce</span>
                When Yellow Light Spark is fully recovered, replace Resonance Skill with Resonance Skill <span class="Highlight">Energized Pounce</span> that deals <span class="Thunder">Electro DMG</span> and enter <span class="Highlight">Red Spotlight</span> Mode. The DMG dealt is considered Basic Attack DMG.<br>
                When in <span class="Highlight">Red Spotlight</span> Mode, the DMG Multiplier of <span class="Highlight">Red Light: Basic Attack</span> and <span class="Highlight">Red Light: Heavy Attack</span> is increased, with an extra amount of Sparks recovered.<br>
                <span class="Highlight">Red Spotlight Mode</span> ends after performing altogether 4 Basic Attacks and/or Heavy Attacks.
                <div class="gap"></div>
                <span class="Title">Energized Rebound</span>
                When Red Light Spark is fully recovered, replace Resonance Skill with Resonance Skill <span class="Highlight">Energized Rebound</span> that deals <span class="Thunder">Electro DMG</span> and enter <span class="Highlight">Yellow Spotlight Mode</span>. The DMG dealt is considered Basic Attack DMG.<br>
                When in <span class="Highlight">Yellow Spotlight Mode</span>, <span class="Highlight">Glitter</span> is replaced by <span class="Highlight">Glare</span>, with an increased DMG Multiplier and an extra amount of Sparks recovered.<br>
                <span class="Highlight">Yellow Spotlight Mode</span> ends after shooting 6 <span class="Highlight">Glares</span>.
                <div class="gap"></div>
                <span class="Title">Laser</span>
                Casting Outro Skill consumes all Sparks obtained in the current mode.<br>
                Laser can be cast when the amount of consumed Sparks is greater than or equal to 25, dealing <span class="Thunder">Electro DMG</span>. The DMG dealt is considered Basic Attack DMG.<br>
                Every 25 Sparks consumed generates 1 extra Laser beam, up to 4 Laser beams.
                <div class="gap"></div>
                <span class="Title">Yellow Light Spark</span>
                Lumi can hold up to 100 Yellow Light Sparks.<br>
                Lumi obtains Yellow Light Spark under the following conditions:<br>
                When <span class="Highlight">Yellow Light: Basic Attack</span> hits the target;<br>
                When <span class="Highlight">Glitter</span> hits the target;<br>
                When <span class="Highlight">Glare</span> hits the target;<br>
                When Resonance Skill <span class="Highlight">Energized Rebound</span> hits the target;<br>
                When casting Intro Skill <span class="Highlight">Special Delivery</span>.
                <div class="gap"></div>
                <span class="Title">Red Light Spark</span>
                Lumi can hold up to 100 Red Light Sparks.<br>
                Lumi obtains Red Light Spark under the following conditions:<br>
                When Normal Attack <span class="Highlight">Navigation Support</span> hits the target in <span class="Highlight">Red Light Mode</span> or <span class="Highlight">Red Spotlight Mode</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Glare DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["41.00%", "44.37%", "47.73%", "52.44%", "55.80%", "59.66%", "65.04%", "70.42%", "75.80%", "81.52%"]
                    }],
                    index: 1
                }, {
                    attributeName: "Red Spotlight: Basic Attack 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["60.48%", "65.44%", "70.40%", "77.35%", "82.31%", "88.01%", "95.94%", "103.88%", "111.81%", "120.25%"]
                    }],
                    index: 2
                }, {
                    attributeName: "Red Spotlight: Basic Attack 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["69.57%+13.92%*5", "75.28%+15.06%*5", "80.98%+16.20%*5", "88.97%+17.80%*5", "94.68%+18.94%*5", "101.24%+20.25%*5", "110.36%+22.08%*5", "119.49%+23.90%*5", "128.62%+25.73%*5", "138.32%+27.67%*5"]
                    }],
                    index: 3
                }, {
                    attributeName: "Red Spotlight: Basic Attack 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["47.15%+110.00%", "51.01%+119.02%", "54.88%+128.04%", "60.29%+140.67%", "64.16%+149.69%", "68.60%+160.06%", "74.79%+174.49%", "80.97%+188.93%", "87.16%+203.36%", "93.73%+218.69%"]
                    }],
                    index: 4
                }, {
                    attributeName: "Red Spotlight: Heavy Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["44.35%*2", "47.99%*2", "51.63%*2", "56.72%*2", "60.36%*2", "64.54%*2", "70.36%*2", "76.18%*2", "81.99%*2", "88.18%*2"]
                    }],
                    index: 5
                }, {
                    attributeName: "Energized Pounce DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["92.20%*2", "99.77%*2", "107.33%*2", "117.91%*2", "125.47%*2", "134.17%*2", "146.26%*2", "158.36%*2", "170.46%*2", "183.31%*2"]
                    }],
                    index: 6
                }, {
                    attributeName: "Energized Rebound DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["126.60%", "136.99%", "147.37%", "161.90%", "172.28%", "184.22%", "200.83%", "217.44%", "234.05%", "234.05%"]
                    }],
                    index: 7
                }, {
                    attributeName: "Single Laser Beam DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["37.50%", "40.58%", "43.65%", "47.96%", "51.03%", "54.57%", "59.49%", "64.41%", "69.33%", "74.56%"]
                    }],
                    index: 8
                }, {
                    attributeName: "Energized Pounce Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                    }],
                    index: 9
                }, {
                    attributeName: "Energized Rebound Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                    }],
                    index: 10
                },
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Pathfinding',
            skillDescription: `Gain {0} Electro DMG Bonus when in Red Light Mode.`,
            skillDetailNum: ["10%"],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Expediting',
            skillDescription: `Casting <span class="Highlight">Energized Pounce</span> or <span class="Highlight">Energized Rebound</span> increases ATK by {0} for 5s.`,
            skillDetailNum: ["10%"],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Parcel To Be Delivered",
            description: `After casting <span class="Highlight">Energized Rebound</span>, additionally recovers 60 STA within 3s.`,
            detailNum: [""],
            sequenceBuffType: "Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_DengdengM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "Lollo Logistics, Ready to Help",
            description: `<span class="Highlight">Energized Pounce</span> and <span class="Highlight">Energized Rebound</span> ignore 20% of the target's DEF.`,
            detailNum: [""],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_DengdengM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "Priority Parcel In Transit",
            description: `The DMG of Resonance Liberation <span class="Highlight">Squeakie Express</span> is increased by {0}.`,
            detailNum: ["30%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Liberation DMG Bonus"],
            sequenceBuff: [30],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_DengdengM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "Captain Lumi, At Your Service",
            description: `Gain {0} Basic Attack DMG Bonus.`,
            detailNum: ["30%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Basic Attack DMG Bonus"],
            sequenceBuff: [30],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_DengdengM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "Parcel Collected On Time",
            description: `When Spark is fully recovered, <span class="Highlight">Laser</span> DMG Multiplier is increased by {0}.`,
            detailNum: ["100%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_DengdengM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "Give Me A Five-star Rating",
            description: `Casting Resonance Liberation <span class="Highlight">Squeakie Express</span> increases all team members' ATK by {0} for 20s.`,
            detailNum: ["20%"],
            sequenceBuffType: "Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [20],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_DengdengM6_UI.webp"
        },
    ]
}