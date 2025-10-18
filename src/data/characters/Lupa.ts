import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Lupa: WWCharacter = {
    name: "Lupa",
    charaId: 1207,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Fusion",
    weapon: "Broadblade",
    bio: `A Gladiator of Septimont, a radiant star of the arena. Fiery and straightforward, Lupa lives like a wild lone wolf. As long as she can savor the adrenaline rush of battle, she doesn't mind if that same fire ends up consuming her whole.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_lupa_UI.webp",
        icon_sq: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_46_UI.webp",
        model: "https://i.imgur.com/RK9i8KC.png"
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
                item: "Unfading Glory",
                id: 5,
                value: "46"
            },
            {
                item: "Bloodleaf Viburnum",
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
        base_hp: 953,
        base_atk: 31,
        base_def: 97,
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
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill2.webp",
            skillName: 'Flaming Star',
            skillDescription: `<span class="Title">Basic Attack</span>
                        Perform up to 4 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>.<br>
                        - After Basic Attack Stage 3, press Normal Attack in the right time to cast <span class="Highlight">Mid-air Attack Stage 1</span>.<br>
                        - After <span class="Highlight">Dodge Counter</span>, Basic Attack <span class="Highlight">Starfall</span>, Resonance Skill <span class="Highlight">Shewolf's Hunt</span>, or Resonance Skill <span class="Highlight">Feral Fang</span>, press Normal Attack in time to cast <span class="Highlight">Basic Attack Stage 2</span>.
                        <div class="gap"></div>
                        <span class="Title">Heavy Attack</span>
                        Consume STA to attack the target, dealing Fusion DMG.
                        <div class="gap"></div>
                        <span class="Title">Heavy Attack - Wolf's Gnawing</span>
                        When Wolflame reaches 50 points, <span class="Highlight">Heavy Attack<span class="Highlight"></span></span> will be replaced by <span class="Highlight">Wolf's Gnawing</span>, consuming STA to attack the target and dealing <span class="Fire">Fusion DMG</span>.<br>
                        - This attack does not restore Wolflame. Consume 50 points of Wolflame to perform this attack and gain 1 point of Wolfaith.
                        <div class="gap"></div>
                        <span class="Title">Heavy Attack - Wolf's Claw</span>
                        When Wolflame reaches 50 points and Wolfaith reaches 1 point, <span class="Highlight">Heavy Attack</span> will be replaced by <span class="Highlight">Wolf's Claw</span>, consuming STA to attack the target and dealing <span class="Fire">Fusion DMG</span>.<br>
                        - If Wolflame reaches 50 points and Wolfaith reaches 1 point after performing <span class="Highlight">Mid-air Attack - Firestrike</span> or <span class="Highlight">Heavy Attack - Wolf's Gnawing</span>, press <span class="Highlight">Normal Attack</span> in time to perform <span class="Highlight">Heavy Attack - Wolf's Claw</span>.<br>
                        - This attack does not restore Wolflame. Consume 50 points of Wolflame to perform this attack and gain 1 point of Wolfaith.
                        <div class="gap"></div>
                        <span class="Title">Mid-air Attack</span>
                        Consume STA to perform up to 3 attacks in mid-air, dealing <span class="Fire">Fusion DMG</span>. The <span class="Highlight">Mid-air Attack</span> cycle will not be reset.
                        <div class="gap"></div>
                        <span class="Title">Mid-air Attack - Firestrike</span>
                        When Wolflame reaches 50 points, <span class="Highlight">Mid-air Attack Stage 3</span> will be replaced by <span class="Highlight">Mid-air Attack - Firestrike</span>, consuming STA to attack the target and dealing <span class="Fire">Fusion DMG</span> (considered Heavy Attack DMG).<br>
                        - This attack does not restore Wolflame. Consume 50 points of Wolflame to perform this attack and gain 1 point of Wolfaith.
                        <div class="gap"></div>
                        <span class="Title">Plunging Attack</span>
                        Hold Normal Attack while airborne to perform a Plunging Attack at the cost of STA, dealing <span class="Fire">Fusion DMG</span>. After performing this attack, press Normal Attack in time to perform Basic Attack <span class="Highlight">Starfall</span>.<br>
                        - If a <span class="Highlight">Dodge</span> is performed while casting <span class="Highlight">Mid-air Attack Stage 3</span> or <span class="Highlight">Mid-air Attack - Firestrike</span>, press <span class="Highlight">Normal Attack</span> to perform <span class="Highlight">Plunging Attack</span> in time at the cost of STA.
                        <div class="gap"></div>
                        <span class="Title">Basic Attack - Starfall</span>
                        Attack the target, dealing <span class="Fire">Fusion DMG</span>.
                        <div class="gap"></div>
                        <span class="Title">Dodge Counter</span>
                        Press Normal Attack after a successful Dodge to attack the target, dealing <span class="Fire">Fusion DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["11.33%+11.33%+22.66%", "12.26%+12.26%+24.52%", "13.19%+13.19%+26.37%", "14.49%+14.49%+28.97%", "15.42%+15.42%+30.83%", "16.49%+16.49%+32.97%", "17.97%+17.97%+35.94%", "19.46%+19.46%+38.91%", "20.94%+20.94%+41.88%", "22.52%+22.52%+45.04%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["45.31%", "49.03%", "52.74%", "57.94%", "61.66%", "65.93%", "71.87%", "77.82%", "83.76%", "90.08%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["39.66%+6.61%*6", "42.91%+7.16%*6", "46.16%+7.70%*6", "50.71%+8.46%*6", "53.96%+9.00%*6", "57.70%+9.62%*6", "62.91%+10.49%*6", "68.11%+11.36%*6", "73.31%+12.22%*6", "78.84%+13.14%*6"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Stage 4 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["37.16%+37.16%+24.77%*2", "40.21%+40.21%+26.81%*2", "43.25%+43.25%+28.84%*2", "47.52%+47.52%+31.68%*2", "50.56%+50.56%+33.71%*2", "54.07%+54.07%+36.05%*2", "58.94%+58.94%+39.30%*2", "63.82%+63.82%+42.55%*2", "68.69%+68.69%+45.80%*2", "73.87%+73.87%+49.25%*2"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Heavy Attack",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["28.35%+28.35%", "30.68%+30.68%", "33.00%+33.00%", "36.26%+36.26%", "38.58%+38.58%", "41.25%+41.25%", "44.97%+44.97%", "48.69%+48.69%", "52.41%+52.41%", "56.36%+56.36%"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Heavy Attack - Wolf's Gnawing DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["28.22%+28.22%", "30.54%+30.54%", "32.85%+32.85%", "36.09%+36.09%", "38.41%+38.41%", "41.07%+41.07%", "44.77%+44.77%", "48.47%+48.47%", "52.18%+52.18%", "56.11%+56.11%"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Heavy Attack - Wolf's Claw DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["36.29%+9.08%*4+48.39%", "39.27%+9.82%*4+52.35%", "42.24%+10.56%*4+56.32%", "46.41%+11.61%*4+61.88%", "49.38%+12.35%*4+65.84%", "52.81%+13.21%*4+70.41%", "57.57%+14.40%*4+76.75%", "62.33%+15.59%*4+83.10%", "67.09%+16.78%*4+89.45%", "72.15%+18.04%*4+96.19%"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Mid-air Attack Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["38.59%", "41.76%", "44.92%", "49.35%", "52.52%", "56.16%", "61.22%", "66.28%", "71.35%", "76.73%"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Mid-air Attack Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["38.85%+9.72%*4", "42.04%+10.51%*4", "45.22%+11.31%*4", "49.68%+12.42%*4", "52.87%+13.22%*4", "56.53%+14.14%*4", "61.62%+15.41%*4", "66.72%+16.68%*4", "71.82%+17.96%*4", "77.23%+19.31%*4"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Mid-air Attack Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["14.33%+14.33%", "15.50%+15.50%", "16.68%+16.68%", "18.32%+18.32%", "19.50%+19.50%", "20.85%+20.85%", "22.72%+22.72%", "24.60%+24.60%", "26.48%+26.48%", "28.48%+28.48%"]
                    }],
                    index: 10
                },
                {
                    attributeName: "Mid-air Attack - Firestrike DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["14.33%+14.33%", "15.50%+15.50%", "16.68%+16.68%", "18.32%+18.32%", "19.50%+19.50%", "20.85%+20.85%", "22.72%+22.72%", "24.60%+24.60%", "26.48%+26.48%", "28.48%+28.48%"]
                    }],
                    index: 11
                },
                {
                    attributeName: "Plunging Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["13.18%+26.35%+13.18%", "14.26%+28.52%+14.26%", "15.34%+30.68%+15.34%", "16.85%+33.70%+16.85%", "17.93%+35.86%+17.93%", "19.18%+38.35%+19.18%", "20.90%+41.80%+20.90%", "22.63%+45.26%+22.63%", "24.36%+48.72%+24.36%", "26.20%+52.39%+26.20%"]
                    }],
                    index: 12
                },
                {
                    attributeName: "Basic Attack - Starfall DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["6.37%*4+59.39%", "6.89%*4+64.26%", "7.41%*4+69.12%", "8.14%*4+75.94%", "8.66%*4+80.81%", "9.26%*4+86.41%", "10.10%*4+94.20%", "10.93%*4+101.99%", "11.77%*4+109.78%", "12.65%*4+118.06%"]
                    }],
                    index: 13
                },
                {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["17.20%*4+68.77%", "18.61%*4+74.41%", "20.02%*4+80.05%", "21.99%*4+87.94%", "23.40%*4+93.58%", "25.02%*4+100.06%", "27.28%*4+109.09%", "29.53%*4+118.11%", "31.79%*4+127.13%", "34.18%*4+136.72%"]
                    }],
                    index: 14
                },
                {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 15
                },
                {
                    attributeName: "Heavy Attack - Wolf's Gnawing STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 16
                },
                {
                    attributeName: "Heavy Attack - Wolf's Claw STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 17
                },
                {
                    attributeName: "Mid-air Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 18
                },
                {
                    attributeName: "Plunging Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 19
                },
                {
                    attributeName: "Mid-air Attack - Firestrike STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 20
                }
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconLupa/SP_IconLupaB1.webp",
            skillName: 'Shewolf\'s Hunt',
            skillDescription: `<div class="gap-start"></div>
            Lupa hurls her Wildfire Banner at the target, dealing <span class="Fire">Fusion DMG</span> and restoring 15 points of Wolflame. <span class="Highlight">Mark</span> the target for 8s. After performing Resonance Skill <span class="Highlight">Shewolf's Hunt</span>, Lupa can perform <span class="Highlight">Feral Fang</span> within a certain period of time.<br>
            Can be performed in mid-air close to the ground.<br>
            - Hold Resonance Skill to leap into the air, then press <span class="Highlight">Normal Attack</span> in time to cast <span class="Highlight">Mid-air Attack Stage 1</span>.
            <div class="gap"></div>
            <span class="Title">Resonance Skill - Feral Fang</span>
            Lupa locks onto a target, dealing <span class="Fire">Fusion DMG</span> and restoring 15 points of Wolflame. The DMG Multiplier to <span class="Highlight">marked</span> targets is increased by 50%. Resonance Skill - Feral Fang enters cooldown if not cast in time or when Lupa is switched out.<br>
            Can be performed in mid-air close to the ground.
            `,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill Damage",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["140.77%", "76.62%", "82.42%", "90.55%", "96.36%", "103.03%", "112.32%", "121.61%", "130.90%", "140.77%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Feral Fang DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["313.61%", "170.68%", "183.61%", "201.72%", "214.66%", "229.53%", "250.23%", "270.92%", "291.62%", "313.61%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s"]
                    }],
                    index: 3
                }
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconLupa/SP_IconLupaC1.webp",
            skillName: 'Fire-Kissed Glory',
            skillDescription: `<div class="gap-start"></div>
            Attack the target and deal <span class="Fire">Fusion DMG</span>. Performing this attack consumes all Wolfaith and restores 100 points of Wolflame. Use Basic Attack or Resonance Skill in time to cast Resonance Skill <span class="Highlight">Foebreaker</span>.<br>
            Can be performed in mid-air close to the ground.<br>
            Performing this skill strengthens all Resonators in the team. Within 35s:<br>
            - All Resonators in the team gain <span class="Highlight">Pack Hunt</span> effect.<br>
            - If the active Resonator is hit or launched into the air, they immediately recover and are considered to have successfully dodged the attack when they are on the ground. Can be triggered up to 3 times.
            <span class="Title">Pack Hunt</span>
            Resonators with <span class="Highlight">Pack Hunt</span> gain a 6% ATK increase, and 10% Fusion DMG Bonus when they attack Overlord Class or Calamity Class targets (Both are non-stackable). If there are 3 Fusion Resonators in the team, the Fusion DMG Bonus against Overlord Class or Calamity Class targets additionally increases by 10%. When the active Resonator casts <span class="Highlight">Intro Skill</span>, Pack Hunt is enhanced, granting an additional 6% ATK increase to all Resonators in the team, up to a maximum of 18%.<br>
            If Lupa's <span class="Highlight">Pack Hunt</span> reaches its cap within its duration, she enters <span class="Highlight">Wild Hunt</span> and Intro Skill <span class="Highlight">Nowhere to Run!</span> becomes available. <span class="Highlight">Wild Hunt</span> can be triggered once per <span class="Highlight">Pack Hunt</span>.
            <div class="gap"></div>
            <span class="Title">Resonance Skill - Foebreaker</span>
            Consume all Wolflame to perform <span class="Highlight">Foebreaker</span>, dealing <span class="Fire">Fusion DMG</span> and entering <span class="Highlight">Burning Matchpoint</span> state.
            <div class="gap"></div>
            <span class="Title">Burning Matchpoint</span>
            Normal Attacks retore 500% more Wolflame on hit. Cannot perform Resonance Skill <span class="Highlight">Shewolf's Hunt</span> and Resonance Skill <span class="Highlight">Feral Fang</span> in this state.
            <div class="gap"></div>`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill Damage",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["412.68%", "446.52%", "480.36%", "527.73%", "561.57%", "600.48%", "654.63%", "708.77%", "762.91%", "820.44%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Foebreaker DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["153.14%", "165.70%", "178.26%", "195.84%", "208.40%", "222.84%", "242.93%", "263.02%", "283.11%", "304.46%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Burning Matchpoint Duration",
                    type: "",
                    skillDetailNum: [{
                        values: ["12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["20s", "20s", "20s", "20s", "20s", "20s", "20s", "20s", "20s", "20s"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Resonance Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                    }],
                    index: 5
                },
                {
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
            typeName: 'Fire">Fusion DMG Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconLupa/SP_IconLupaQTE.webp",
            skillName: 'Try Focusing, Eh?',
            skillDescription: `<div class="gap-start"></div>
            Attack the target, dealing <span class="Fire">Fusion DMG</span>. Press <span class="Highlight">Normal Attack</span> following Intro Skill <span class="Highlight">Try Focusing, Eh?</span> to cast <span class="Highlight">Mid-air Attack Stage 3</span>.
            <div class="gap"></div>
            <span class="Title">Nowhere to Run!</span>
            When Lupa enters the <span class="Highlight">Wild Hunt</span> state, her next Intro Skill is replaced with <span class="Highlight">Nowhere to Run!</span>. Casting <span class="Highlight">Nowhere to Run!</span> removes the <span class="Highlight">Pack Hunt</span> and <span class="Highlight">Glory</span> effects on all Resonators in the team, dealing <span class="Fire">Fusion DMG</span> (considered Resonance Liberation DMG).`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill Damage",
                    type: "",
                    skillDetailNum: [{
                        values: ["14.97%+21.21%*4", "16.20%+22.95%*4", "17.43%+24.69%*4", "19.15%+27.12%*4", "20.37%+28.86%*4", "21.79%+30.86%*4", "23.75%+33.64%*4", "25.71%+36.43%*4", "27.68%+39.21%*4", "29.76%+42.16%*4"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Nowhere to Run! DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["399.16%+24.95%*4", "431.90%+27.00%*4", "464.63%+29.04%*4", "510.45%+31.91%*4", "543.18%+33.95%*4", "580.82%+36.31%*4", "633.19%+39.58%*4", "685.56%+42.85%*4", "737.93%+46.13%*4", "793.57%+49.60%*4"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Nowhere to Run! Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 4
                }
            ]
        },
        {
            skillId: 5,
            typeName: 'Outro Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconLupa/SP_IconLupaT.webp",
            skillName: 'Stand by Me, Warrior',
            skillDescription: `<div class="gap-start"></div>The incoming Resonator will have their Fusion DMG Amplified by 20% and Basic Attack DMG Amplified by 25% for 14s or until the Resonator is switched out.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconLupa/SP_IconLupaY.webp",
            skillName: 'Ignis Lupa',
            skillDescription: `<span class="Title">Wildfire Banner</span>
            Lupa's ATK is increased by 12% for 8s when performing the following actions:<br>
            - Casting Resonance Skill <span class="Highlight">Feral Fang</span>.<br>
            - Casting <span class="Highlight">Heavy Attack - Wolf's Gnawing</span>, <span class="Highlight">Heavy Attack - Wolf's Claw</span>, or <span class="Highlight">Mid-air Attack - Firestrike</span>.<br>
            - Casting Resonance Liberation <span class="Highlight">Fire-Kissed Glory</span>.
            - Casting <span class="Highlight">Dance With the Wolf</span> and <span class="Highlight">Dance With the Wolf: Climax</span>.
            <div class="gap"></div>
            <span class="Title">Resonance Skill - Dance With the Wolf</span>
            When Wolfaith reaches 2 points, Resonance Skill is replaced with <span class="Highlight">Dance With the Wolf</span>. Performing <span class="Highlight">Dance With the Wolf</span> consumes all Wolfaith, dealing <span class="Fire">Fusion DMG</span> (considered Resonance Liberation DMG).<br>
            Can be performed in mid-air close to the ground.
            <div class="gap"></div>
            <span class="Title">Resonance Skill - Dance With the Wolf: Climax</span>
            When Wolfaith reaches 2 points in the <span class="Highlight">Burning Matchpoint</span> state, Resonance Skill is replaced with <span class="Highlight">Dance With the Wolf: Climax</span>. Performing <span class="Highlight">Dance With the Wolf: Climax</span> consumes all Wolfaith, dealing <span class="Fire">Fusion DMG</span> (considered Resonance Liberation DMG). <span class="Highlight">Burning Matchpoint</span> is removed when the skill ends.<br>
            Can be performed in mid-air close to the ground.
            <div class="gap"></div>
            <span class="Title">Resonance Skill - Set the Arena Ablaze</span>
            Within 8s after performing <span class="Highlight">Dance With the Wolf</span> or <span class="Highlight">Dance With the Wolf: Climax</span>, Lupa will remain on the field after switching to another Resonator and back up the active Resonator when they perform <span class="Highlight">Resonance Liberation</span>, dealing <span class="Fire">Fusion DMG</span> (considered Resonance Skill DMG). This effect can only be triggered once in its duration.
            <div class="gap"></div>
            <span class="Title">Wolflame</span>
            Lupa can hold up to 100 points of Wolflame.<br>
            - Restore Wolflame when Normal Attacks hit the target.<br>
            - Restore Wolflame while casting Resonance Skill.<br.>
            - Restore Wolflame while casting Resonance Liberation.
            <div class="gap"></div>
            <span class="Title">Wolfaith</span>
            Lupa can hold up to 2 points of Wolfaith.<br>
            Wolfaith lasts for 10s. The duration is reset when Wolfaith is restored. At the end of its duration, each remaining point of Wolfaith becomes 50 points of Wolflame.<br>
            - Restore 1 point of Wolfaith when casting <span class="Highlight">Heavy Attack - Wolf's Gnawing</span>, <span class="Highlight">Heavy Attack - Wolf's Claw</span>, or <span class="Highlight">Mid-air Attack - Firestrike</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Dance With the Wolf DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["28.18%+21.14%*4+169.06%", "30.49%+22.87%*4+182.93%", "32.80%+24.60%*4+196.79%", "36.04%+27.03%*4+216.20%", "38.35%+28.76%*4+230.06%", "41.00%+30.75%*4+246.00%", "44.70%+33.53%*4+268.18%", "48.40%+36.30%*4+290.36%", "52.09%+39.07%*4+312.54%", "56.02%+42.02%*4+336.11%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Dance With the Wolf: Climax DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["38.04%+28.53%*4+228.23%", "41.16%+30.87%*4+246.95%", "44.28%+33.21%*4+265.66%", "48.65%+36.49%*4+291.86%", "51.77%+38.83%*4+310.58%", "55.35%+41.52%*4+332.10%", "60.34%+45.26%*4+362.04%", "65.34%+49.00%*4+391.99%", "70.33%+52.75%*4+421.93%", "75.63%+56.72%*4+453.75%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Set the Arena Ablaze DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["21.31%+85.21%", "23.05%+92.20%", "24.80%+99.18%", "27.25%+108.97%", "28.99%+115.95%", "31.00%+123.99%", "33.80%+135.17%", "36.59%+146.34%", "39.38%+157.52%", "42.35%+169.40%"]
                    }],
                    index: 3
                },
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconLupa/SP_IconLupaD1.webp",
            skillName: 'Remember My Name',
            skillDescription: `<div class="gap-start"></div>After dashing for 2.5s, Lupa enters Sprint state. The next <span class="Highlight">Basic Attack</span> is replaced with <span class="Highlight">Basic Attack - Starfall</span>.<br>
            Gain increased resistance to interruptions while casting <span class="Highlight">Heavy Attack - Wolf's Gnawing</span>, <span class="Highlight">Heavy Attack - Wolf's Claw</span>, and <span class="Highlight">Mid-air Attack - Firestrike</span>.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconLupa/SP_IconLupaD2.webp",
            skillName: 'Applause of Victory',
            skillDescription: `<div class="gap-start"></div>Defeating a marked target resets the cooldown of Resonance Skill <span class="Highlight">Shewolf's Hunt</span>.
            <div class="gap"></div>
            <span class="Title">Resonance Liberation - Glory</span>
            Casting Resonance Liberation <span class="Highlight">Fire-Kissed Glory</span> grants <span class="Highlight">Glory</span>. Within 35s:<br>
            Attacks of all Resonators in the team ignore 3% of the target's Fusion RES. For each Fusion Resonator in the team other than Lupa, this effect increases by 3%, up to the maximum of 9%. When there are 3 Fusion Resonators in the team, Resonators' attacks further ignore 6% Fusion RES.`,
            skillDetailNum: [""],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Behold the Nameless One",
            description: `Performing Resonance Liberation <span class="Highlight">Fire-Kissed Glory</span> recovers 10 Concerto Energy for Lupa and increases Lupa's Crit. Rate by 20% for 10s.<br>
            Gain immunity to interruption when casting Dance With the Wolf: Climax.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LupaM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "Every Ground, Her Hunting Field",
            description: `Performing <span class="Highlight">Fire-Kissed Glory</span>, <span class="Highlight">Heavy Attack - Wolf's Gnawing</span>, <span class="Highlight">Heavy Attack - Wolf's Claw</span>, or <span class="Highlight">Mid-air Attack - Firestrike</span> gives 20% Fusion DMG Bonus to all Resonators in the team for 30s, stacking up to 2 times.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LupaM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "Wolflame Howls in Her Wake",
            description: `The DMG Multiplier of Intro Skill <span class="Highlight">Nowhere to Run!</span> increases by 100%.<br>
            - The <span class="Highlight">Pack Hunt</span> effect of Resonance Liberation now no longer requires 3 Fusion Resonators.<br>
            - The <span class="Highlight">Glory</span> effect of Resonance Liberation is now modified as:<br>
            Casting Resonance Liberation <span class="Highlight">Fire-Kissed Glory</span> additionally grants <span class="Highlight">Glory</span>: Resonators in the team ignore 15% Fusion RES of targets for 35s.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LupaM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "High and Aflame Is Her Banner",
            description: `The DMG Multiplier of <span class="Highlight">Dance With the Wolf: Climax</span> increases by 125%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LupaM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "Embrace the Thunderous Triumph",
            description: `Performing Intro Skill <span class="Highlight">Try Focusing, Eh</span>? or <span class="Highlight">Nowhere to Run!</span> gives 15% Resonance Liberation DMG Bonus for 10s.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LupaM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "To the Brightest Flaming Star",
            description: `- The damage dealt by Forte Circuit <span class="Highlight">Dance With the Wolf: Climax</span>, Resonance Liberation <span class="Highlight">Fire-Kissed Glory</span>, and Intro Skill <span class="Highlight">Nowhere to Run!</span> ignores 30% of the target's DEF.<br>
            - Resonance Skill <span class="Highlight">Feral Fang</span> restores 100 points of Wolflame on hit, triggered once per 20s.<br>
            - Forte Circuit <span class="Highlight">Dance With the Wolf</span> is replaced with <span class="Highlight">Dance With the Wolf: Climax</span>. <span class="Highlight">Dance With the Wolf: Climax</span> can be performed when Lupa is not in <span class="Highlight">Burning Matchpoint</span> state.<br>
            - Casting Intro Skill <span class="Highlight">Nowhere to Run!</span> no longer ends <span class="Highlight">Pack Hunt</span> and <span class="Highlight">Glory</span>.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_LupaM6_UI.webp"
        },
    ]
}