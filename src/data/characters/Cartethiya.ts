import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Cartethiya: WWCharacter = {
    name: "Cartethiya",
    charaId: 1409,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Aero",
    weapon: "Sword",
    bio: `Cartethyia, the wandering knight who travels across Rinascita. Formerly known as the Blessed Maiden, the vessel of Divinity, and the Queen of Gale and Tide, she went by the name Fleurdelys. Now, she is simply a free and unfettered wandering knight.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_katixiya_UI.webp",
        icon_sq: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_40_UI.webp",
        model: "https://i.imgur.com/UiqwVaP.png"
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
                item: "//TODO",
                id: 5,
                value: "46"
            },
            {
                item: "//TODO",
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
                item: "When Irises Bloom",
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
        base_hp: 1184,
        base_atk: 25,
        base_def: 50,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 0,
        bonus_atk: 0,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 8,
        bonus_critdmg: 0,
        bonus_hp: 1.12
    },
    skills: [
        {
            skillId: 1,
            typeName: 'Normal Attack',
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill1.webp",
            skillName: 'Sword to Carve My Forms',
            skillDescription: `<span class="Title">Basic Attack - Cartethyia</span>
                Perform up to 4 consecutive attacks, dealing <span class="Wind">Aero DMG</span>.<br>
                Following <span class="Highlight">Basic Attack - Cartethyia</span> Stage 4, inflict 1 stacks of <span class="Wind">Aero Erosion</span> on targets hit and summon <span class="Highlight">Sword of Divinity’s Shadow</span>.<br>
                Up to 1 <span class="Highlight">Sword of Divinity’s Shadow</span> may exist for 20s at the same time.
                <div class="gap"></div>
                <span class="Title">Heavy Attack - Cartethyia</span>
                Consume STA to attack the target, dealing <span class="Wind">Aero DMG</span> and summoning <span class="Highlight">Sword of Discord’s Shadow</span>. Can be performed in mid-air.<br>
                Up to 1 <span class="Highlight">Sword of Discord’s Shadow</span> can exist for 20s at the same time.<br>
                This instance of DMG is considered <span class="Highlight">Basic Attack DMG</span>.
                <div class="gap"></div>
                <span class="Title">Mid-air Attack - Cartethyia</span>
                Release <span class="Highlight">Normal Attack</span> button while airborne to perform Plunging Attack at the cost of STA, dealing <span class="Wind">Aero DMG</span>, also considered <span class="Wind">Aero Erosion DMG</span>.<br>
                Press <span class="Highlight">Normal Attack</span> shortly after the <span class="Highlight">Plunging Attack</span> to perform <span class="Highlight">Basic Attack - Cartethyia Stage 2</span>.<br>
                Casting <span class="Highlight">Mid-air Attack - Cartethyia</span> recalls all <span class="Highlight">Sword Shadows</span>. Based on the types and number of <span class="Highlight">Sword Shadows</span> recalled, perform different forms of Plunging Attack and obtain the corresponding <span class="Highlight">Heart of Virtue</span>, <span class="Highlight">Mandate of Divinity</span>, and <span class="Highlight">Power of Discord</span>.
                <div class="gap"></div>
                <span class="Title">Dodge Counter - Cartethyia</span>
                Press Normal Attack shortly after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Wind">Aero DMG</span>, also considered <span class="Wind">Aero DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["2.41% HP", "2.60% HP", "2.80% HP", "3.08% HP", "3.27% HP", "3.50% HP", "3.82% HP", "4.13% HP", "4.45% HP", "4.78% HP"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["1.98%+1.98%+2.64% HP", "2.14%+2.14%+2.86% HP", "2.31%+2.31%+3.07% HP", "2.53%+2.53%+3.38% HP", "2.70%+2.70%+3.59% HP", "2.88%+2.88%+3.84% HP", "3.14%+3.14%+4.19% HP", "3.40%+3.40%+4.53% HP", "3.66%+3.66%+4.88% HP", "3.94%+3.94%+5.25% HP"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["2.15%+2.15%+2.15%+2.15% HP", "2.33%+2.33%+2.33%+2.33% HP", "2.51%+2.51%+2.51%+2.51% HP", "2.75%+2.75%+2.75%+2.75% HP", "2.93%+2.93%+2.93%+2.93% HP", "3.13%+3.13%+3.13%+3.13% HP", "3.41%+3.41%+3.41%+3.41% HP", "3.70%+3.70%+3.70%+3.70% HP", "3.98%+3.98%+3.98%+3.98% HP", "4.28%+4.28%+4.28%+4.28% HP"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Stage 4 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["1.27%*3+3.80% HP", "1.37%*3+4.11% HP", "1.48%*3+4.42% HP", "1.62%*3+4.85% HP", "1.73%*3+5.17% HP", "1.84%*3+5.52% HP", "2.01%*3+6.02% HP", "2.18%*3+6.52% HP", "2.34%*3+7.02% HP", "2.52%*3+7.54% HP"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["3.45%+3.45%+3.45%+3.45% HP", "3.73%+3.73%+3.73%+3.73% HP", "4.01%+4.01%+4.01%+4.01% HP", "4.41%+4.41%+4.41%+4.41% HP", "4.69%+4.69%+4.69%+4.69% HP", "5.02%+5.02%+5.02%+5.02% HP", "5.47%+5.47%+5.47%+5.47% HP", "5.92%+5.92%+5.92%+5.92% HP", "6.37%+6.37%+6.37%+6.37% HP", "6.85%+6.85%+6.85%+6.85% HP"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Heavy Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["1.05%*3+3.14% HP", "1.14%*3+3.40% HP", "1.22%*3+3.65% HP", "1.34%*3+4.01% HP", "1.43%*3+4.27% HP", "1.53%*3+4.57% HP", "1.66%*3+4.98% HP", "1.80%*3+5.39% HP", "1.94%*3+5.80% HP", "2.08%*3+6.24% HP"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Mid-air Attack",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["2.84% HP", "3.08% HP", "3.31% HP", "3.64% HP", "3.87% HP", "4.14% HP", "4.51% HP", "4.88% HP", "5.25% HP", "5.65% HP"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Mid-air Attack 1 Sword Shadow Recalled",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["2.84% HP", "3.08% HP", "3.31% HP", "3.64% HP", "3.87% HP", "4.14% HP", "4.51% HP", "4.88% HP", "5.25% HP", "5.65% HP"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Mid-air Attack 2 Sword Shadows Recalled",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["1.66%*3 HP", "1.80%*3 HP", "1.93%*3 HP", "2.12%*3 HP", "2.26%*3 HP", "2.41%*3 HP", "2.63%*3 HP", "2.85%*3 HP", "3.07%*3 HP", "3.30%*3 HP"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Mid-air Attack 3 Sword Shadows Recalled",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["5.68%*3 HP", "6.15%*3 HP", "6.61%*3 HP", "7.27%*3 HP", "7.73%*3 HP", "8.27%*3 HP", "9.01%*3 HP", "9.76%*3 HP", "10.50%*3 HP", "11.29%*3 HP"]
                    }],
                    index: 10
                },
                {
                    attributeName: "Mid-air Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 11
                },
                {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 12
                }
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconKatixiya/SP_IconKatixiyaB3.webp",
            skillName: 'Sword to Bear Their Names',
            skillDescription: `<span class="Title">Cartethyia - Resonance Skill</span>
                Attack the target, launch nearby enemies, and then plunge them to the ground, dealing <span class="Wind">Aero DMG</span> and inflicting 2 stacks of <span class="Wind">Aero Erosion</span> on the targets hit. This instance of DMG is considered <span class="Highlight">Basic Attack DMG</span>. Can be performed in mid-air.<br>
                Following <span class="Highlight">Cartethyia - Resonance Skill</span>, summon <span class="Highlight">Sword of Virtue’s Shadow</span>.<br>
                Up to 1 <span class="Highlight">Sword of Virtue’s Shadow</span> can exist for 20s at the same time.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["3.47%*3+4.46% HP", "3.75%*3+4.83% HP", "4.04%*3+5.19% HP", "4.44%*3+5.70% HP", "4.72%*3+6.07% HP", "5.05%*3+6.49% HP", "5.50%*3+7.07% HP", "5.96%*3+7.66% HP", "6.41%*3+8.24% HP", "6.89%*3+8.86% HP"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Resonance Skill Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Resonance Skill Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["14s", "14s", "14s", "14s", "14s", "14s", "14s", "14s", "14s", "14s"]
                    }],
                    index: 3
                }
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconKatixiya/SP_IconKatixiyaC1.webp",
            skillName: 'A Knight\'s Heartfelt Prayers',
            skillDescription: `<span class="Title">Resonance Liberation - A Knight's Heartfelt Prayers</span>
                By reducing HP to 50% of the Max HP, <span class="Highlight">Cartethyia</span> transforms into <span class="Highlight">Fleurdelys</span>, unlocking new moves and entering the <span class="Highlight">Manifest</span> state for 12s.<br>
                Can be performed in mid-air.<br>
                Entering <span class="Highlight">Manifest</span> clears all <span class="Highlight">Resolve</span>.<br>
                As <span class="Highlight">Fleurdelys</span>, <span class="Highlight">Basic Attack - Fleurdelys Stage 5</span>, <span class="Highlight">Mid-air Attack - Fleurdelys Stage 2</span>, and <span class="Highlight">Resonance Skill - May Tempest Break the Tides</span> instantly trigger 1 instance of <span class="Wind">Aero Erosion</span> DMG and reduce the <span class="Wind">Aero Erosion</span> stack on the target hit by 1.<br>
                - Ending the state will not clear Resonance Energy.<br>
                - No HP cost when HP is below 50%.<br><br>           
                During <span class="Highlight">Manifest</span>, <span class="Highlight">Fleurdelys</span> gains 60% Aero DMG Bonus.
                <span class="Highlight">Fleurdelys's</span> attacks restore <span class="Highlight">Resolve</span> on hit. When <span class="Highlight">Resolve</span> reaches 120 points, press Resonance Liberation to cast <span class="Highlight">Resonance Liberation - Blade of Howling Squall</span>.<br><br>
                When <span class="Highlight">Resolve</span> is below 120 points, press Resonance Liberation to transform back into <span class="Highlight">Cartethyia</span>. When in <span class="Highlight">Manifest</span>, casting <span class="Highlight">Resonance Liberation - A Knight's Heartfelt Prayers</span> as Cartethyia consumes no Resonance Energy.<br><br>
                When <span class="Highlight">Fleurdelys</span> has <span class="Highlight">Heart of Virtue</span> in <span class="Highlight">Manifest</span>:<br>
                - <span class="Highlight">Basic Attack - Fleurdelys Stage 4</span> will generate a force field to Stagnate the targets within the range.<br>
                - <span class="Highlight">Fleurdelys's</span> resistance to interruption increases.<br>
                <span class="Highlight">Heart of Virtu</span>e is removed when <span class="Highlight">Manifest</span> ends.<br><br>
                When <span class="Highlight">Fleurdelys</span> has <span class="Highlight">Mandate of Divinity</span> in <span class="Highlight">Manifest</span>:<br>
                <span class="Wind">Aero Erosion</span> DMG is Amplified by 50% and the damage interval is decreased by 50% for enemies within a certain distance from <span class="Highlight">Fleurdelys</span>.<br>
                <span class="Highlight">Mandate of Divinity</span> is removed when <span class="Highlight">Mandate of Divinity</span> ends.<br><br>
                When <span class="Highlight">Fleurdelys</span> has <span class="Highlight">Power of Discord</span> in <span class="Highlight">Manifest</span>:<br>
                When casting <span class="Highlight">Basic Attack - Fleurdelys Stage 5</span>, <span class="Highlight">Mid-air Attack - Fleurdelys Stage 2</span> and <span class="Highlight">Enhanced Heavy Attack - Fleurdelys</span> or after <span class="Highlight">Resonance Skill - May Tempest Break the Tides</span> deals damage, raise the <span class="Wind">Aero Erosion</span> stacks on all nearby targets to the highest count among the targets.<br>
                <span class="Highlight">Power of Discord</span> is removed when <span class="Highlight">Manifest</span> ends.<br><br>
                <span class="Highlight">Fleurdelys</span> will transform back to <span class="Highlight">Cartethyia</span> during <span class="Highlight">quest dialogues</span>, <span class="Highlight">environmental interaction animations</span>, or using <span class="Highlight">Utilities</span>.<br>
                <span class="Highlight">Fleurdelys</span> can walk on water. Doing so on deep waters continuously consumes STA. When in walking state, <span class="Highlight">Fleurdelys</span> can step out of a high place and walk in mid-air by continuously consuming STA.
                <div class="gap"></div>
                <span class="Title">Avatar - Cartethyia</span>
                As <span class="Highlight">Fleurdelys</span>, when <span class="Highlight">Resolve</span> is below 120 points, press Resonance Liberation to perform <span class="Highlight">Basic Attack - Cartethyia Stage 2</span> and temporarily transform back to <span class="Highlight">Cartethyia</span>, which pauses the timer on <span class="Highlight">Manifest</span>.<br>
                Can be cast in mid-air. Casting the skill in mid-air performs <span class="Highlight">Mid-air Attack - Cartethyia</span>.
                <div class="gap"></div>
                <span class="Title">Avatar - Fleurdelys</span>
                When in <span class="Highlight">Manifest</span>, casting Resonance Liberation as <span class="Highlight">Cartethyia</span> performs <span class="Highlight">Basic Attack - Fleurdelys Stage 2</span> without consuming Resonance Energy and transforms her back to <span class="Highlight">Fleurdelys</span>, which resumes the timer on <span class="Highlight">Manifest</span>.<br>
                Can be cast in mid-air. Casting this skill in mid-air performs <span class="Highlight">Mid-air Attack - Fleurdelys Stage 1</span>.
                <div class="gap"></div>
                <span class="Title">Resonance Liberation - Blade of Howling Squall</span>
                When <span class="Highlight">Fleurdelys</span> has 120 points of <span class="Highlight">Resolve</span>, <span class="Highlight">Resonance Liberation - A Knight's Heartfelt Prayers</span> is replaced by <span class="Highlight">Resonance Liberation - Blade of Howling Squall</span>.
                Casting <span class="Highlight">Resonance Liberation - Blade of Howling Squall</span> removes all <span class="Highlight">Resolve</span>, ends <span class="Highlight">Manifest</span>, restores 50% of Max HP, and then deals <span class="Wind">Aero DMG</span> to all targets in an area along a straight line in front. Upon hitting the target, remove all stacks of Aero Erosion on the target. Each stack removed Amplifies the DMG taken by the targets by 20%, up to 5 stacks.<br>
                Can be cast in mid-air.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "A Knight's Heartfelt Prayers Resonance Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                    }],
                    index: 1
                },
                {
                    attributeName: "A Knight's Heartfelt Prayers Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Blade of Howling Squall Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s"]
                    }],
                    index: 3
                },
                {
                    attributeName: "A Knight's Heartfelt Prayers Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Blade of Howling Squall Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Avatar Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["1.5s", "1.5s", "1.5s", "1.5s", "1.5s", "1.5s", "1.5s", "1.5s", "1.5s", "1.5s"]
                    }],
                    index: 6
                }
            ]
        },
        {
            skillId: 4,
            typeName: 'Intro Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconKatixiya/SP_IconKatixiyaQTE.webp",
            skillName: 'Sword to Mark Tide\'s Trace',
            skillDescription: `<span class="Title">Cartethyia - Sword to Mark Tide's Trace</span>
                Deal <span class="Wind">Aero DMG</span> and inflict 2 stacks of <span class="Wind">Aero Erosion</span> on targets hit. Summon <span class="Highlight">Sword of Discord’s Shadow</span>.<br>
                Up to 1 <span class="Highlight">Sword of Discord’s Shadow</span> may exist at the same time, lasting 20s.<br>
                Press <span class="Highlight">Normal Attack</span> shortly after <span class="Highlight">Cartethyia - Sword to Mark Tide's Trace</span> to perform <span class="Highlight">Basic Attack - Cartethyia Stage 2</span>.
                <div class="gap"></div>
                <span class="Title">Basic Attack</span>
                Thrust forward to impale the target, dealing <span class="Wind">Aero DMG</span> and restoring <span class="Highlight">Resolve</span>.<br>
                Press <span class="Highlight">Normal Attack</span> shortly after <span class="Highlight">Fleurdelys - Sword to Call for Freedom</span> to cast <span class="Highlight">Basic Attack - Fleurdelys Stage 2</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Sword to Mark Tide's Trace DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["1.05%*3+3.14% HP", "1.14%*3+3.40% HP", "1.22%*3+3.65% HP", "1.34%*3+4.01% HP", "1.43%*3+4.27% HP", "1.53%*3+4.57% HP", "1.66%*3+4.98% HP", "1.80%*3+5.39% HP", "1.94%*3+5.80% HP", "2.08%*3+6.24% HP"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Sword to Call for Freedom DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["2.15%+5.02% HP", "2.33%+5.43% HP", "2.51%+5.84% HP", "2.75%+6.41% HP", "2.93%+6.83% HP", "3.13%+7.30% HP", "3.41%+7.96% HP", "3.69%+8.61% HP", "3.98%+9.27% HP", "4.28%+9.97% HP"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Sword to Mark Tide's Trace Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Sword to Call for Freedom Concerto Regen",
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
            skillName: 'Wind\'s Divine Blessing',
            skillDescription: `<span class="Wind">Aero DMG</span> dealt by the active Resonator in the team other than <span class="Highlight">Cartethyia/Fleurdelys</span> to targets with Negative Statuses is Amplified by 17.5% for 20s.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconKatixiya/SP_IconKatixiyaY.webp",
            skillName: 'Tempest',
            skillDescription: `<span class="Highlight">Cartethyia</span> unlocks new moves when she transforms into <span class="Highlight">Fleurdelys</span>:
                <div class="gap"></div>
                <span class="Title">Fleurdelys - Basic Attack</span>
                <span class="Highlight">Basic Attack - Cartethyia</span> is replaced by <span class="Highlight">Basic Attack - Fleurdelys</span>.
                Perform up to 5 consecutive attacks, dealing <span class="Wind">Aero DMG</span> and restoring <span class="Highlight">Resolve</span> on hit.
                <div class="gap"></div>
                <span class="Title">Mid-air Attack - Fleurdelys</span>
                <span class="Highlight">Mid-air Attack - Cartethyia</span> is replaced by <span class="Highlight">Mid-air Attack - Fleurdelys</span>.<br>
                Perform up to 3 consecutive attacks in the air at the cost of STA, dealing <span class="Wind">Aero DMG</span> and restoring <span class="Highlight">Resolve</span> on hit.<br>
                While airborne, hold <span class="Highlight">Normal Attack</span> to cast <span class="Highlight">Mid-air Attack - Fleurdelys Stage 3</span>.<br>
                Follow up with <span class="Highlight">Basic Attack</span> shortly afterward to cast <span class="Highlight">Basic Attack - Fleurdelys Stage 3</span>.<br>
                While airborne, casting <span class="Highlight">Resonance Skill - Sword to Answer Waves' Call</span> and <span class="Highlight">Resonance Skill - May Tempest Break the Tides</span> resets the combo of <span class="Highlight">Mid-air Attack - Fleurdelys</span>.
                <div class="gap"></div>
                <span class="Title">Heavy Attack - Fleurdelys</span>
                <span class="Highlight">Heavy Attack - Cartethyia</span> is replaced by <span class="Highlight">Heavy Attack - Fleurdelys</span>.<br>
                Thrust forward to deliver a focused strike, dealing <span class="Wind">Aero DMG</span> and restoring <span class="Highlight">Resolve</span> on hit.
                <div class="gap"></div>
                <span class="Title">Enhanced Heavy Attack - Fleurdelys</span>
                While casting <span class="Highlight">Heavy Attack - Fleurdelys</span>, press <span class="Highlight">Normal Attack</span> again to cast Enhanced <span class="Highlight">Heavy Attack - Fleurdelys</span>: fall back and blast the area in a straight line in front, dealing <span class="Wind">Aero DMG</span> and restoring <span class="Highlight">Resolve</span> on hit.<br>
                Follow up with <span class="Highlight">Basic Attack</span> shortly after casting Enhanced <span class="Highlight">Heavy Attack - Fleurdelys</span> to cast <span class="Highlight">Upward Cut - Fleurdelys</span>.
                <div class="gap"></div>
                <span class="Title">Upward Cut - Fleurdelys</span>
                While <span class="Highlight">Fleurdelys</span> is on the ground, <span class="Highlight">Jump</span> to cast this skill, dealing <span class="Wind">Aero DMG</span> and restoring <span class="Highlight">Resolve</span> on hit.
                <div class="gap"></div>
                <span class="Title">Dodge Counter - Fleurdelys</span>
                <span class="Highlight">Dodge Counter - Cartethyia</span> is replaced by <span class="Highlight">Dodge Counter - Fleurdelys</span>.
                Press Normal Attack shortly after a successful Dodge to attack the target, dealing <span class="Wind">Aero DMG</span> and restoring <span class="Highlight">Resolve</span> on hit.<br>
                Follow up with <span class="Highlight">Basic Attack</span> shortly afterward to cast <span class="Highlight">Basic Attack - Fleurdelys Stage 4</span>.
                <div class="gap"></div>
                <span class="Title">Resonance Skill - Sword to Answer Waves' Call</span>
                <span class="Highlight">Resonance Skill - Cartethyia</span> is replaced by <span class="Highlight">Resonance Skill - Sword to Answer Waves' Call</span>.<br>
                Summon a force field near the target's location to continuously pull in nearby targets, dealing <span class="Wind">Aero DMG</span> and restoring <span class="Highlight">Resolve</span> on hit.<br>
                Can be cast in mid-air.
                <div class="gap"></div>
                <span class="Title">Resonance Skill - May Tempest Break the Tides</span>
                Following <span class="Highlight">Resonance Skill - Sword to Answer Waves' Call</span>, press <span class="Highlight">Resonance Skill</span> again to call down a giant Sword Shadow to crush an area around the target, dealing <span class="Wind">Aero DMG</span> to ground targets and restoring <span class="Highlight">Resolve</span> on hit.<br>
                Follow up with <span class="Highlight">Basic Attack</span> shortly afterward to cast <span class="Highlight">Basic Attack - Fleurdelys Stage 3</span>.<br>
                The Resonance Skill enters cooldown if <span class="Highlight">Resonance Skill - May Tempest Break the Tides</span> is not casted within a certain period or when switching to another Resonator.<br>
                Can be cast in mid-air.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Basic Attack Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["3.27% HP", "3.54% HP", "3.80% HP", "4.18% HP", "4.45% HP", "4.75% HP", "5.18% HP", "5.61% HP", "6.04% HP", "6.49% HP"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Basic Attack Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["1.83%+0.92%+0.92%+0.92% HP", "1.98%+0.99%+0.99%+0.99% HP", "2.13%+1.07%+1.07%+1.07% HP", "2.33%+1.17%+1.17%+1.17% HP", "2.48%+1.24%+1.24%+1.24% HP", "2.66%+1.33%+1.33%+1.33% HP", "2.89%+1.45%+1.45%+1.45% HP", "3.13%+1.57%+1.57%+1.57% HP", "3.37%+1.69%+1.69%+1.69% HP", "3.63%+1.82%+1.82%+1.82% HP"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Basic Attack Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["1.08%+1.08%+1.08%+2.15% HP", "1.16%+1.16%+1.16%+2.32% HP", "1.25%+1.25%+1.25%+2.50% HP", "1.37%+1.37%+1.37%+2.74% HP", "1.46%+1.46%+1.46%+2.92% HP", "1.56%+1.56%+1.56%+3.12% HP", "1.70%+1.70%+1.70%+3.40% HP", "1.84%+1.84%+1.84%+3.68% HP", "1.98%+1.98%+1.98%+3.96% HP", "2.13%+2.13%+2.13%+4.26% HP"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Basic Attack Stage 4 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["1.38%*5 HP", "1.49%*5 HP", "1.61%*5 HP", "1.77%*5 HP", "1.88%*5 HP", "2.01%*5 HP", "2.19%*5 HP", "2.37%*5 HP", "2.55%*5 HP", "2.74%*5 HP"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Basic Attack Stage 5 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["3.63%+14.49% HP", "3.92%+15.67% HP", "4.22%+16.86% HP", "4.63%+18.52% HP", "4.93%+19.71% HP", "5.27%+21.08% HP", "5.75%+22.98% HP", "6.22%+24.88% HP", "6.70%+26.78% HP", "7.20%+28.80% HP"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["1.61%+1.61%+1.61%+3.22% HP", "1.74%+1.74%+1.74%+3.48% HP", "1.87%+1.87%+1.87%+3.74% HP", "2.06%+2.06%+2.06%+4.11% HP", "2.19%+2.19%+2.19%+4.38% HP", "2.34%+2.34%+2.34%+4.68% HP", "2.55%+2.55%+2.55%+5.10% HP", "2.76%+2.76%+2.76%+5.52% HP", "2.97%+2.97%+2.97%+5.94% HP", "3.20%+3.20%+3.20%+6.39% HP"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Upward Cut DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["2.29%*2 HP", "2.48%*2 HP", "2.66%*2 HP", "2.92%*2 HP", "3.11%*2 HP", "3.33%*2 HP", "3.63%*2 HP", "3.93%*2 HP", "4.23%*2 HP", "4.54%*2 HP"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Heavy Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["2.15%+5.02% HP", "2.33%+5.43% HP", "2.51%+5.84% HP", "2.75%+6.41% HP", "2.93%+6.83% HP", "3.13%+7.30% HP", "3.41%+7.96% HP", "3.69%+8.61% HP", "3.98%+9.27% HP", "4.28%+9.97% HP"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Enhanced Heavy Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["3.91%*2+1.96% HP", "4.23%*2+2.12% HP", "4.55%*2+2.28% HP", "5.00%*2+2.50% HP", "5.32%*2+2.66% HP", "5.69%*2+2.85% HP", "6.21%*2+3.11% HP", "6.72%*2+3.36% HP", "7.23%*2+3.62% HP", "7.78%*2+3.89% HP"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Mid-air Attack 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["1.50%+1.50%+1.55% HP", "1.63%+1.63%+1.68% HP", "1.75%+1.75%+1.80% HP", "1.92%+1.92%+1.98% HP", "2.05%+2.05%+2.11% HP", "2.19%+2.19%+2.25% HP", "2.38%+2.38%+2.46% HP", "2.58%+2.58%+2.66% HP", "2.78%+2.78%+2.86% HP", "2.99%+2.99%+3.08% HP"]
                    }],
                    index: 10
                },
                {
                    attributeName: "Mid-air Attack 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["3.72%+3.72%+7.43% HP", "4.02%+4.02%+8.04% HP", "4.33%+4.33%+8.65% HP", "4.75%+4.75%+9.50% HP", "5.06%+5.06%+10.11% HP", "5.41%+5.41%+10.81% HP", "5.89%+5.89%+11.78% HP", "6.38%+6.38%+12.76% HP", "6.87%+6.87%+13.73% HP", "7.39%+7.39%+14.77% HP"]
                    }],
                    index: 11
                },
                {
                    attributeName: "Mid-air Attack 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["1.11% HP", "1.20% HP", "1.29% HP", "1.42% HP", "1.51% HP", "1.61% HP", "1.76% HP", "1.90% HP", "2.05% HP", "2.20% HP"]
                    }],
                    index: 12
                },
                {
                    attributeName: "Sword to Answer Waves' Call Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 13
                },
                {
                    attributeName: "May Tempest Break the Tides Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 14
                },
                {
                    attributeName: "Resonance Skill Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["14", "14", "14", "14", "14", "14", "14", "14", "14", "14"]
                    }],
                    index: 15
                },
                {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 16
                },
                {
                    attributeName: "Enhanced Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 17
                },
                {
                    attributeName: "Mid-air Attack 1 STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 18
                },
                {
                    attributeName: "Mid-air Attack 2 STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 19
                },
                {
                    attributeName: "Mid-air Attack 3 STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 20
                }
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'A Heart\'s Truest Wishes',
            skillDescription: `The healing received by all Resonators other than <span class="Highlight">Cartethyia/Fleurdelys</span> in the team is increased by 20% and their resistance to interruption is enhanced. If Rover: Aero is in the team, Rover: Aero additionally restores 25 <span class="Highlight">Windstrings</span> upon casting <span class="Highlight">Omega Storm</span>.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Wind\'s Indelible Imprint',
            skillDescription: `Targets with 1 to 3 stacks of <span class="Wind">Aero Erosion</span> take 30% more DMG from <span class="Highlight">Cartethyia</span> and <span class="Highlight">Fleurdelys</span>. Targets with more than 3 stacks of <span class="Wind">Aero Erosion</span> additionally take 10% more DMG from <span class="Highlight">Cartethyia</span> and <span class="Highlight">Fleurdelys</span> for each stack of <span class="Wind">Aero Erosion</span> they have, up to 3 stacks.`,
            skillDetailNum: [""],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Crown Destined by Fate",
            description: `Defeating targets with <span class="Wind">Aero Erosion</span> as <span class="Highlight">Cartethyia</span> and <span class="Highlight">Fleurdelys</span> grants <span class="Highlight">Zeal</span> that lasts for 10s.<br>
            In the <span class="Highlight">Zeal</span> state, upon defeating enemies, the next move raises the <span class="Wind">Aero Erosion</span> stacks on the targets hit to the highest count among the targets defeated. This will not exceed the current max <span class="Wind">Aero Erosion</span> stack limit. <span class="Highlight">Zeal</span> is removed afterward and enters a 1s cooldown.<br>
            When <span class="Highlight">Fleurdelys's Resolve</span> hits 30/60/90/120, both <span class="Highlight">Cartethyia</span> and <span class="Highlight">Fleurdelys</span>'s Crit. DMG is increased by 25% for 15s, up to 4 stacks. The duration of this effect does not reset upon gaining new stacks. After casting <span class="Highlight">Resonance Liberation - Blade of Howling Squall</span>, the increased Crit. DMG is removed.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KatixiyaM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "Blade Broken by Tempest",
            description: `Casting <span class="Highlight">Resonance Liberation - A Knight's Heartfelt Prayers</span> increases the max stack limit of <span class="Wind">Aero Erosion</span> on targets within a certain range by 3 stacks. The next attack inflicts 3 stacks of <span class="Wind">Aero Erosion</span> on all targets hit and immediately trigger the <span class="Wind">Aero Erosion</span> DMG on the targets once without consuming the <span class="Wind">Aero Erosion</span> stacks.<br>
            The DMG Multipliers of <span class="Highlight">Cartethyia's</span> Basic Attack, Heavy Attack, Dodge Counter, and Intro Skill are increased by 50% and the DMG Multiplier of her Mid-air Attack is increased by 200%.<br>
            After casting <span class="Highlight">Mid-air Attack - Cartethyia</span>, every 1 type of Sword Shadow recalled reduces the cooldown of <span class="Highlight">Resonance Skill - Cartethyia</span> by 1s.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KatixiyaM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "Prisoner Hanged in the Tower",
            description: `<span class="Highlight">Basic Attack - Fleurdelys Stage 5</span>, <span class="Highlight">Mid-air Attack - Fleurdelys Stage 5</span>, <span class="Highlight">Enhanced Heavy Attack - Fleurdelys</span>, and <span class="Highlight">Resonance Skill - May Tempest Break the Tides</span> now inflict 2 stacks of <span class="Wind">Aero Erosion</span> on the targets hit.<br>
            The DMG Multiplier of <span class="Highlight">Resonance Skill - Blade of Howling Squall</span> is increased by 100%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KatixiyaM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: " Sacrifice Made for Salvation",
            description: `When Resonators in the team inflict <span class="Highlight">Havoc Bane</span>, <span class="Highlight">Fusion Burst</span>, <span class="Highlight">Spectro Frazzle</span>, <span class="Highlight">Electro Flare</span>, <span class="Highlight">Glacio Chafe</span> and <span class="Highlight">Aero Erosion</span>, all Resonators in the team gain 20% DMG Bonus for all Attributes for 20s.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KatixiyaM5_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "Hope Reshaped in Storms",
            description: `When <span class="Highlight">Cartethyia</span> or <span class="Highlight">Fleurdelys</span> takes a fatal blow, they will not be downed by this instance of damage, but instead gain a Shield equal to 20% of <span class="Highlight">Cartethyia's</span> Max HP for 10s. This effect can be triggered once every 10 min.<br>
            The HP cost for casting <span class="Highlight">Resonance Liberation - A Knight's Heartfelt Prayers</span> is reduced to 25% of Max HP.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KatixiyaM4_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "Freedom Found in Storm's Wake",
            description: `After casting <span class="Highlight">Resonance Liberation - Blade of Howling Squall</span>, raise the <span class="Wind">Aero Erosion</span> stacks on the target hit to max. Casting <span class="Highlight">Resonance Liberation - Blade of Howling Squall</span> no longer removes the <span class="Wind">Aero Erosion</span> stacks on the target.<br>
            After casting <span class="Highlight">Intro Skill - Sword to Mark Tide's Trace</span>, <span class="Highlight">Intro Skill - Sword to Call for Freedom</span>, <span class="Highlight">Resonance Liberation - A Knight's Heartfelt Prayers</span>, <span class="Highlight">and Resonance Liberation - Blade of Howling Squall</span>, <span class="Highlight">Fleurdelys</span> gains new abilities: For 30s, when any Resonator in the team inflicts <span class="Wind">Aero Erosion</span> on the targets with max stacks of <span class="Wind">Aero Erosion</span>, immediately trigger the <span class="Wind">Aero Erosion</span> DMG once.<br>
            The targets take 40% more DMG from <span class="Highlight">Fleurdelys</span>.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KatixiyaM6_UI.webp"
        },
    ]
}