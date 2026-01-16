import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Mornye: WWCharacter = {
    name: "Mornye",
    charaId: 1209,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Fusion",
    weapon: "Broadblade",
    bio: `Mornye, a Spacetrek Collective Research Institute engineer and a Department of Exostrider Engineering professor at Startorch Academy.
    Each step on her prosthetic legs carries her toward the stars of her dreams.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_Moning_UI.webp",
        icon_sq: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_61_UI.webp",
        model: "https://i.imgur.com/VQ3tdMB.png"
    },
    asension: {
        charaAsension: [
            {
                item: "LF Mech Core",
                id: 1,
                value: "4"
            },
            {
                item: "MF Mech Core",
                id: 2,
                value: "12"
            },
            {
                item: "HF Mech Core",
                id: 3,
                value: "12"
            },
            {
                item: "FF Mech Core",
                id: 4,
                value: "4"
            },
            {
                item: "Burning Judgment",
                id: 5,
                value: "46"
            },
            {
                item: "Gemini Spore",
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
                item: "LF Mech Core",
                id: 1,
                value: "25"
            },
            {
                item: "MF Mech Core",
                id: 2,
                value: "28"
            },
            {
                item: "HF Mech Core",
                id: 3,
                value: "40"
            },
            {
                item: "FF Mech Core",
                id: 4,
                value: "57"
            },
            {
                item: "LF Carved Crystal",
                id: 5,
                value: "25"
            },
            {
                item: "MF Carved Crystal",
                id: 6,
                value: "28"
            },
            {
                item: "HF Carved Crystal",
                id: 7,
                value: "55"
            },
            {
                item: "FF Carved Crystal",
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
        base_hp: 1230,
        base_atk: 23,
        base_def: 111,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 0,
        bonus_atk: 0,
        bonus_def: 1.152,
        bonus_heal: 12,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
        {
            skillId: 1,
            typeName: 'Normal Attack',
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill2.webp",
            skillName: 'Ground State Calibration',
            skillDescription: `<span class="Title">Basic Attack</span>
            Perform up to 4 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>.
            <div class="gap"></div>
            <span class="Title">Heavy Attack</span>
            Consume STA to attack the target, dealing <span class="Fire">Fusion DMG</span>.
            <div class="gap"></div>
            <span class="Title">Basic Attack - Wide Field Observation Mode</span>
            While in <Info key="mornye_wfom"><span class="Highlight">Wide Field Observation Mode</span></Info>, <span class="Highlight">Basic Attack</span> is replaced with <span class="Highlight">Basic Attack - Wide Field Observation Mode</span>.<br>
            Perform up to 3 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>.
            <div class="gap"></div>
            <span class="Title">Mid-air Attack</span>
            Consume STA to perform Mid-air Plunging Attack, dealing <span class="Fire">Fusion DMG</span>. Press Normal Attack within a certain time afterward to cast <span class="Highlight">Basic Attack Stage 3</span>.
            <div class="gap"></div>
            <span class="Title">Dodge Counter</span>
            Press <span class="Highlight">Normal Attack</span> right after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Fire">Fusion DMG</span>.<br>
            Press <span class="Highlight">Normal Attack</span> shortly after performing this attack to perform <span class="Highlight">Basic Attack Stage 2</span>.
            <div class="gap"></div>
            <span class="Title">Dodge Counter - Wide Field Observation Mode</span>
            While in <Info key="mornye_wfom"><span class="Highlight">Wide Field Observation Mode</span></Info>, <span class="Highlight">Dodge Counter</span> is replaced with <span class="Highlight">Dodge Counter - Wide Field Observation Mode</span>.<br>
            Press <span class="Highlight">Normal Attack</span> right after a successful <span class="Highlight">Dodge</span> to counterattack and deal <span class="Fire">Fusion DMG</span>.<br>
            Within a certain time afterward, press <span class="Highlight">Normal Attack</span> to cast <span class="Highlight">Basic Attack - Wide Field Observation Mode Stage 3</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Basic Attack Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["11.20%+8.40%*2", "12.12%+9.09%*2", "13.04%+9.78%*2", "14.33%+10.75%*2", "15.25%+11.44%*2", "16.30%+12.23%*2", "17.77%+13.33%*2", "19.24%+14.43%*2", "20.71%+15.53%*2", "22.27%+16.71%*2"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Basic Attack Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["12.00%+12.00%+9.00%*4", "12.99%+12.99%+9.74%*4", "13.97%+13.97%+10.48%*4", "15.35%+15.35%+11.51%*4", "16.33%+16.33%+12.25%*4", "17.47%+17.47%+13.10%*4", "19.04%+19.04%+14.28%*4", "20.61%+20.61%+15.46%*4", "22.19%+22.19%+16.64%*4", "23.86%+23.86%+17.90%*4"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Basic Attack Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["20.80%+5.20%*6", "22.51%+5.63%*6", "24.22%+6.06%*6", "26.60%+6.65%*6", "28.31%+7.08%*6", "30.27%+7.57%*6", "33.00%+8.25%*6", "35.73%+8.94%*6", "38.46%+9.62%*6", "41.36%+10.34%*6"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Basic Attack Stage 4 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["68.00%", "73.58%", "79.16%", "86.96%", "92.54%", "98.95%", "107.87%", "116.79%", "125.72%", "135.20%"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Basic Attack - Wide Field Observation Mode Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["7.00%*4", "7.58%*4", "8.15%*4", "8.96%*4", "9.53%*4", "10.19%*4", "11.11%*4", "12.03%*4", "12.95%*4", "13.92%*4"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Basic Attack - Wide Field Observation Mode Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["13.00%*4", "14.07%*4", "15.14%*4", "16.63%*4", "17.70%*4", "18.92%*4", "20.63%*4", "22.33%*4", "24.04%*4", "25.85%*4"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Basic Attack - Wide Field Observation Mode Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["4.68%*4+16.64%*2", "5.07%*4+18.01%*2", "5.45%*4+19.37%*2", "5.99%*4+21.28%*2", "6.37%*4+22.65%*2", "6.81%*4+24.22%*2", "7.43%*4+26.40%*2", "8.04%*4+28.58%*2", "8.66%*4+30.77%*2", "9.31%*4+33.09%*2"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Heavy Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["5.58%+5.58%+7.44%", "6.04%+6.04%+8.06%", "6.50%+6.50%+8.67%", "7.14%+7.14%+9.52%", "7.60%+7.60%+10.13%", "8.12%+8.12%+10.83%", "8.86%+8.86%+11.81%", "9.59%+9.59%+12.78%", "10.32%+10.32%+13.76%", "11.10%+11.10%+14.80%"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Mid-air Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["49.60%", "53.67%", "57.74%", "63.43%", "67.50%", "72.18%", "78.69%", "85.19%", "91.70%", "98.61%"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["81.60%", "88.30%", "94.99%", "104.36%", "111.05%", "118.74%", "129.45%", "140.15%", "150.86%", "162.23%"]
                    }],
                    index: 10
                },
                {
                    attributeName: "Dodge Counter - Wide Field Observation Mode DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["13.00%*4", "14.07%*4", "15.14%*4", "16.63%*4", "17.70%*4", "18.92%*4", "20.63%*4", "22.33%*4", "24.04%*4", "25.85%*4"]
                    }],
                    index: 11
                },
                {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 12
                },
                {
                    attributeName: "Mid-air Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 13
                }
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconMoNing/SP_IconMoNingB1.webp",
            skillName: 'Resolution',
            skillDescription: `<span class="Title">Expectation Error</span>
            Heal all nearby Resonators in the team and enter the Parry state, during which DMG taken is reduced by 100% for a time. Switching to another Resonator ends this state immediately.<br>
            If attacked while in the Parry state, exit the state and cast <span class="Highlight">Resonance Skill - Optimal Solution</span>.<br>
            If not attacked while in the Parry state, press <span class="Highlight">Normal Attack</span> to exit the state and cast <span class="Highlight">Basic Attack Stage 2</span>.
            <div class="gap"></div>
            <span class="Title">Optimal Solution</span>
            Stagnate nearby targets and deal <span class="Fire">Fusion DMG</span>, reducing the cooldown of <span class="Highlight">Resonance Skill - Expectation Error</span> by 2s.<br>
            Switching to another Resonator ends the Stagnation effect early.
            <div class="gap"></div>
            <span class="Title">Distributed Array</span>
            While in <span class="Highlight">Wide Field Observation Mode</span>, Resonance Skill is replaced with <span class="Highlight">Resonance Skill - Distributed Array</span>.<br>
            Heal all nearby Resonators in the team and summon Hover Cannons to strike the target, dealing <span class="Fire">Fusion DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Distributed Array Healing",
                    type: "",
                    skillDetailNum: [{
                        values: ["225+54.00% DEF", "252+56.16% DEF", "281+58.32% DEF", "315+61.56% DEF", "355+65.88% DEF", "393+70.20% DEF", "400+78.30% DEF", "409+87.48% DEF", "416+97.20% DEF", "427+113.40% DEF"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Expectation Error Healing",
                    type: "",
                    skillDetailNum: [{
                        values: ["49+11.88% DEF", "55+12.35% DEF", "61+12.83% DEF", "69+13.54% DEF", "78+14.49% DEF", "86+15.44% DEF", "88+17.22% DEF", "90+19.24% DEF", "91+21.38% DEF", "94+24.94% DEF"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Optimal Solution DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["90.40%", "97.82%", "105.23%", "115.61%", "123.02%", "131.55%", "143.41%", "155.27%", "167.13%", "179.73%"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Distributed Array DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["20.00%*4", "21.64%*4", "23.28%*4", "25.58%*4", "27.22%*4", "29.11%*4", "31.73%*4", "34.35%*4", "36.98%*4", "39.77%*4"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Expectation Error Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["5s", "5s", "5s", "5s", "5s", "5s", "5s", "5s", "5s", "5s"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Distributed Array Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["16s", "16s", "16s", "16s", "16s", "16s", "16s", "16s", "16s", "16s"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Distributed Array Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 7
                }
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconMoNing/SP_IconMoNingC1.webp",
            skillName: 'Critical Protocol',
            skillDescription: `
            Attack the targets within the effective range, dealing <span class="Fire">Fusion DMG</span>.<br>
            For every 1% of Mornye's Energy Regen exceeding 100%, this skill gains an additional 0.5% Crit. Rate (up to 80%) and 1% Crit. DMG (up to 160%).<br>
            When casting this skill, if a <Info key="mornye_sf"><span class="Highlight">Syntony Field</span></Info> is present, remove it and generate a <Info key="mornye_hsf"><span class="Highlight">High Syntony Field</span></Info>.<br>
            Can be performed in mid-air.
            <span class="Title">High Syntony Field</span>
            - High Syntony Field lasts for 25s.<br>
            - Increases the DEF of all nearby Resonators in the team within the <span class="Highlight">High Syntony Field</span> by 20%.<br>
            - Inherits the <Info key="mornye_sf"><span class="Highlight">Syntony Field</span></Info>'s boost to resistance to interruption and Off-Tune Buildup Rate.<br>
            - Inherits the <Info key="mornye_sf"><span class="Highlight">Syntony Field</span></Info>'s healing effect and increases the Healing Multiplier by 40%.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["262.73% DEF", "284.27% DEF", "305.82% DEF", "335.98% DEF", "357.52% DEF", "382.30% DEF", "416.77% DEF", "451.24% DEF", "485.70% DEF", "522.33% DEF"]
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
                        values: ["175", "175", "175", "175", "175", "175", "175", "175", "175", "175"]
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
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconMoNing/SP_IconMoNingQTE.webp",
            skillName: 'Convergence',
            skillDescription: `
            Attack the target to deal <span class="Fire">Fusion DMG</span>, then jump into mid-air, clearing all <Info key="mornye_rme"><span class="Highlight">Rest Mass Energy</span></Info> and entering <Info key="mornye_wfom"><span class="Highlight">Wide Field Observation Mode</span></Info>.
            <div class="gap"></div>`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["102.00%", "110.37%", "118.73%", "130.44%", "138.81%", "148.43%", "161.81%", "175.19%", "188.57%", "202.79%"]
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
            skillName: 'Recursion',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconMoNing/SP_IconMoNingP1.webp",
            skillDescription: `Resonators in the team gain 25% All DMG Amplification for 30s.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconMoNing/SP_IconMoNingY1.webp",
            skillName: 'Mass-Energy Equivalence',
            skillDescription: `<span class="Title">Baseline Mode</span>
            While in her default <span class="Highlight">Baseline Mode</span>, Mornye gains <Info key="mornye_rme"><span class="Highlight">Rest Mass Energy</span></Info>.
            <div class="gap"></div>
            <span class="Title">Heavy Attack - Geopotential Shift</span>
            When <Info key="mornye_rme"><span class="Highlight">Rest Mass Energy</span></Info> reaches 100 points, Heavy Attack is replaced with <span class="Highlight">Heavy Attack - Geopotential Shift</span>.<br>
            Cast <span class="Highlight">Heavy Attack - Geopotential Shift</span> to deal <span class="Fire">Fusion DMG</span>, considered Heavy Attack DMG. Afterward, Mornye jumps into mid-air, consumes all <Info key="mornye_rme"><span class="Highlight">Rest Mass Energy</span></Info> and enters <Info key="mornye_wfom"><span class="Highlight">Wide Field Observation Mode</span></Info>.
            <div class="gap"></div>
            <span class="Title">Wide Field Observation Mode</span>
            <span class="Highlight">Wide Field Observation Mode</span> lasts for 30s.<br>
            - Upon entering <span class="Highlight">Wide Field Observation Mode</span>, Mornye generates a <span class="Highlight">Syntony Field</span>.<br>
            - While in <span class="Highlight">Wide Field Observation Mode</span>, Mornye gains <Info key="mornye_rm"><span class="Highlight">Relative Momentum</span></Info>.<br>
            - If <Info key="mornye_rm"><span class="Highlight">Relative Momentum</span></Info> is below 100 when holding <span class="Highlight">Normal Attack</span>, perform <span class="Highlight">Basic Attack - Wide Field Observation Mode Stage 1 to 3</span> in sequence. If <Info key="mornye_rm"><span class="Highlight">Relative Momentum</span></Info> reaches 100 during this time, cast <span class="Highlight">Heavy Attack - Inversion</span> instead.<br>
            - While moving, Mornye continuously consumes STA. STA cannot be recovered while in <span class="Highlight">Wide Field Observation Mode</span>.<br>
            - When Dodging with directional input, Mornye starts to fly at speed, which lasts for up to 10s or until STA is depleted or until the <span class="Highlight">Wide Field Observation Mode</span> ends.<br>
            - When Mornye is hit or launched into mid-air, press Dodge to immediately recover from the attack, which is considered a successful Dodge. This effect can be triggered up to 3 times, which resets when <span class="Highlight">Wide Field Observation Mode</span> ends.<br>
            - Press Jump and Mornye will slowly descend. Before she lands, <span class="Highlight">Basic Attack - Wide Field Observation Mode</span>, <span class="Highlight">Resonance Skill - Distributed Array</span>, and <span class="Highlight">Heavy Attack - Inversion</span> are unavailable. If Jump is pressed when Mornye runs out of STA, she will exit the <span class="Highlight">Wide Field Observation Mode</span>. She will leave the <span class="Highlight">Wide Field Observation Mode</span> also when she <span class="Highlight">Dodges</span>, Jumps, or performs Mid-air Attacks.<br>
            Additionally, performing environmental interactions, using Utilities, or switching to another Resonator ends <span class="Highlight">Wide Field Observation Mode</span>. The state also ends when Mornye is no longer airborne.
            <div class="gap"></div>
            <span class="Title">Syntony Field</span>
            - <span class="Highlight">Syntony Field</span> lasts for 25s.<br>
            - When the <span class="Highlight">Syntony Field</span> is generated, deal <span class="Fire">Fusion DMG</span>, considered Resonance Liberation DMG.<br>
            - Continuously restores HP for nearby active Resonators in the team within the <span class="Highlight">Syntony Field</span>, triggered once every 3s.<br>
            - Increases the <span class="Highlight">Off-Tune Buildup Rate</span> of all nearby Resonators in the team within the <span class="Highlight">Syntony Field</span> by 50%.<br>
            - Enhances the resistance to interruption of nearby active Resonators in the team within the <span class="Highlight">Syntony Field</span>.
            <div class="gap"></div>
            <span class="Title">Heavy Attack - Inversion</span>
            - When <Info key="mornye_rm"><span class="Highlight">Relative Momentum</span></Info> reaches 100 points, Heavy Attack is replaced with <span class="Highlight">Heavy Attack - Inversion</span>.<br>
            - Consume all <Info key="mornye_rm"><span class="Highlight">Relative Momentum</span></Info> to cast <span class="Highlight">Heavy Attack - Inversion</span>, dealing <span class="Fire">Fusion DMG</span>, considered Heavy Attack DMG.<br>
            - <span class="Highlight">Heavy Attack - Inversion</span> inflicts <Info key="mornye_om"><span class="Highlight">Observation Marker</span></Info> upon the target on hit for 30s.
            <div class="gap"></div>
            <span class="Title">Observation Marker</span>
            When a Resonator in the team deals <Info key="tune_break"><span class="Highlight">Tune Break</span></Info> DMG to a target inflicted with <span class="Highlight">Observation Marker</span>, Mornye inflicts an <Info key="mornye_im"><span class="Highlight">Interfered Marker</span></Info> on the target for 8s.
            <div class="gap"></div>
            <span class="Title">Interfered Marker</span>
            Targets affected by <Info key="tuneRupture_interfered"><span class="Highlight">Tune Rupture - Interfered</span></Info> or <Info key="tuneStrain_interfered"><span class="Highlight">Tune Strain - Interfered</span></Info> take increased DMG from all nearby Resonators in the team. For every 1% of Mornye's Energy Regen exceeding 100%, their DMG is increased by 0.25%, up to 40%.
            <div class="gap"></div>
            <span class="Title">Visual Field</span>
            When a Resonator in the team defeats a target inflicted with <Info key="mornye_om"><span class="Highlight">Observation Marker</span></Info> or <Info key="mornye_im"><span class="Highlight">Interfered Marker</span></Info>, Mornye gains <span class="Highlight">Visual Field</span> for 3s. While in this state, Mornye inflicts <Info key="mornye_om"><span class="Highlight">Observation Marker</span></Info> on the target hit whenever any Resonator in the team deals damage.
            <div class="gap"></div>
            <span class="Title">Tune Rupture Response - Particle Jet</span>
            Mornye deals one instance of <span class="Fire">Fusion DMG</span> to targets in the <Info key="tuneRupture_interfered"><span class="Highlight">Tune Rupture - Interfered</span></Info> state within range, considered <span class="Highlight">Tune Rupture DMG</span>.
            <div class="gap"></div>
            <span class="Title">Rest Mass Energy</span>
            Mornye can hold up to 100 points of <span class="Highlight">Rest Mass Energy</span>.<br>
            While in <Info key="mornye_bm"><span class="Highlight">Baseline Mode</span></Info>, she gains <span class="Highlight">Rest Mass Energy</span> when performing <span class="Highlight">Basic Attack</span>, <span class="Highlight">Heavy Attack</span>, <span class="Highlight">Dodge Counter</span>, or when <span class="Highlight">Resonance Skill - Optimal Solution</span> hits a target.
            <div class="gap"></div>
            <span class="Title">Relative Momentum</span>
            Mornye can hold up to 100 points of <span class="Highlight">Relative Momentum</span>.<br>
            While in <Info key="mornye_wfom"><span class="Highlight">Wide Field Observation Mode</span></Info>, she gains <span class="Highlight">Relative Momentum</span> when <span class="Highlight">Basic Attack - Wide Field Observation Mode</span>, <span class="Highlight">Dodge Counter - Wide Field Observation Mode</span> or <span class="Highlight">Resonance Skill - Distributed Array</span> hits the target.<br>
            Mornye cannot gain <span class="Highlight">Relative Momentum</span> during <span class="Highlight">Heavy Attack - Inversion</span>.
            `,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Syntony Field Healing",
                    type: "",
                    skillDetailNum: [{
                        values: ["40+9.63% DEF", "44+10.02% DEF", "50+10.41% DEF", "56+10.98% DEF", "63+11.75% DEF", "70+12.53% DEF", "71+13.97% DEF", "73+15.61% DEF", "74+17.35% DEF", "76+20.24% DEF"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Syntony Field DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["20.00%*5", "21.64%*5", "23.28%*5", "25.58%*5", "27.22%*5", "29.11%*5", "31.73%*5", "34.35%*5", "36.98%*5", "39.77%*5"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Heavy Attack - Geopotential Shift DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["22.20%+49.81%", "24.02%+53.89%", "25.84%+57.97%", "28.39%+63.69%", "30.21%+67.78%", "32.30%+72.47%", "35.22%+79.01%", "38.13%+85.54%", "41.04%+92.07%", "44.14%+99.02%"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Heavy Attack - Inversion DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["130.00%", "140.66%", "151.32%", "166.25%", "176.91%", "189.17%", "206.22%", "223.28%", "240.34%", "258.46%"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Tune Rupture Response - Particle Jet DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["150.00% Tune AMP", "162.30% Tune AMP", "174.60% Tune AMP", "191.82% Tune AMP", "204.12% Tune AMP", "218.27% Tune AMP", "237.95% Tune AMP", "257.63% Tune AMP", "277.31% Tune AMP", "298.22% Tune AMP"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Wide Field Observation Mode STA Cost Per Sec",
                    type: "",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 6
                }
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Blueprint',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconMoNing/SP_IconMoNing1D1.webp",
            skillDescription: `Mornye's Energy Regen is increased by 10%.<br>
            Casting <span class="Highlight">Intro Skill - Convergence</span> restores 20 points of Concerto Energy, triggered once every 20s.<br>
            Casting <span class="Highlight">Basic Attack - Wide Field Observation Mode Stage 3</span> restores 20 points of Concerto Energy, triggered once every 20s.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Boundedness',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconMoNing/SP_IconMoNing2D2.webp",
            skillDescription: `Casting <span class="Highlight">Resonance Skill - Expectation Error</span> or <span class="Highlight">Resonance Skill - Distributed Array</span> grants <span class="Highlight">Proof of Boundedness</span> to all Resonators in the team:<br>
            - <span class="Highlight">Proof of Boundedness</span> lasts for 60s and can be gained once every 5 min.<br>
            - When the active Resonator takes DMG greater than 30% of their Max HP, they instead take DMG equal to 30% of their Max HP. This effect can trigger up to 3 times. <span class="Highlight">Proof of Boundedness</span> is removed after triggering it 3 times.<br>
            - When the active Resonator takes a fatal blow, they are not downed by this instance of damage. This effect can trigger up to 1 time. <span class="Highlight">Proof of Boundedness</span> is removed after triggering it 1 time.<br>
            - When <span class="Highlight">Proof of Boundedness</span> is removed, the active Resonator restores HP equal to 150% of Mornye's DEF.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 9,
            typeName: "Tune Break",
            skillName: 'Decoupling',
            skillImg: "",
            skillDescription: `Mornye can respond to <Info key="tuneRupture_interfered"><span class="Highlight">Tune Rupture - Interfered</span></Info> and <Info key="tuneStrain_interfered"><span class="Highlight">Tune Strain - Interfered</span></Info>.<br>
            - Responding to <Info key="tuneRupture_interfered"><span class="Highlight">Tune Rupture - Interfered</span></Info>: When any Resonator in the team deals <Info key="tuneBreak"><span class="Highlight">Tune Break</span></Info> DMG and inflicts <Info key="tuneRupture_interfered"><span class="Highlight">Tune Rupture - Interfered</span></Info>, Mornye casts <span class="Highlight">Tune Rupture Response - Particle Jet</span>. Each target can be damaged by this skill up to once every 8s.<br>
            - Responding to <Info key="tuneStrain_interfered"><span class="Highlight">Tune Strain - Interfered</span></Info>: Each stack of <Info key="tuneStrain_interfered"><span class="Highlight">Tune Strain - Interfered</span></Info> on the target increases Mornye's total DMG against them. Each point of Mornye's <span class="Highlight">Tune Break Boost</span> increases the total DMG by 0.12%. While Mornye is in the team, the max stack limit of Tune Strain - Interfered on a target is increased by 1.<br>
            Mornye can perform <Info key="tuneBreak"><span class="Highlight">Tune Break</span></Info> against the targets with full <span class="Highlight">Off-Tune Level</span>.`,
            skillDetailNum: [""],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "The Silent Observer",
            description: `<span class="Highlight">Basic Attack – Wide Field Observation Mode</span> becomes immune to interruption.<br>
            The duration of <Info key="mornye_im"><span class="Highlight">Interfered Marker</span></Info> is extended by 150%. <Info key="mornye_im"><span class="Highlight">Interfered Marker</span></Info> now grants DMG increase even when the target is not affected by <Info key="tuneRupture_interfered"><span class="Highlight">Tune Rupture - Interfered</span></Info> or <Info key="tuneStrain_interfered"><span class="Highlight">Tune Strain - Interfered</span></Info>. When Mornye applies <Info key="mornye_om"><span class="Highlight">Observation Marker</span></Info> on a target, she also inflicts <Info key="mornye_im"><span class="Highlight">Interfered Marker</span></Info>.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_MoNingM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "Morning Star of Entropy",
            description: `All nearby Resonators in the team gain Crit. DMG increase against targets with <Info key="mornye_if"><span class="Highlight">Interfered Marker</span></Info>. Every 1% of Mornye's Energy Regen over 100% grants 0.2% Crit. DMG increase, up to 32%.<br>
            <Info key="mornye_sf"><span class="Highlight">Syntony Field</span></Info> and <Info key="mornye_hsf"><span class="Highlight">High Syntony Field</span></Info> further increase the <span class="Highlight">Off-Tune Buildup Rate</span> of all nearby Resonators in the team by 20%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_MoNingM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "Blueprint of Recursion",
            description: `Casting <span class="Highlight">Resonance Skill - Distributed Array</span> additionally restores 25 points of Concerto Energy and 100 <Info key="mornye_rm"><span class="Highlight">Relative Momentum</span></Info>, triggered once every 25s.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_MoNingM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "Latent Variables of the Cosmos",
            description: `The healing of <Info key="mornye_hsf"><span class="Highlight">High Syntony Field</span></Info> is increased by 30%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_MoNingM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "Time Dilation Effect",
            description: `The DMG Multiplier of <span class="Highlight">Resonance Liberation - Critical Protocol</span> is increased by 40%.<br>
            The DMG Multiplier of <span class="Highlight">Tune Rupture Response - Particle Jet</span> is increased by 160%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_MoNingM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "To the Far Shores of the Stars",
            description: `<span class="Highlight">Resonance Liberation - Critical Protocol</span> deals 400% more DMG. If Mornye has not engaged in combat for over 4s, she restores Resonance Energy equal to 10% of her Max Resonance Energy every 0.2s.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_MoNingM6_UI.webp"
        },
    ]
}