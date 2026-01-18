import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Augusta: WWCharacter = {
    name: "Augusta",
    charaId: 1306,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Electro",
    weapon: "Broadblade",
    bio: `Ephor of Septimont. The undying sun eternally ablaze, and a banner under which defeat does not exist.\n
    She comes. She sees. She conquers.\n
    With blade held high, she awaits the next challenger or the fate that claims it cannot be defied.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_aogusita_UI.webp",
        icon_sq: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_51_UI.webp",
        model: "https://i.imgur.com/jRPkdKi.png"
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
                item: "Blighted Crown of Puppet King",
                id: 5,
                value: "46"
            },
            {
                item: "Luminous Calendula",
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
        bonus_crit: 8,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
        {
            skillId: 1,
            typeName: 'Normal Attack',
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill2.webp",
            skillName: 'Hunter\'s Path',
            skillDescription: `<span class="Title">Basic Attack</span>
            Perform up to 4 consecutive attacks, dealing <span class="Thunder">Electro DMG</span>.
            <div class="gap"></div>
            <span class="Title">Heavy Attack - Steelclash</span>
            Consume STA to attack the target, dealing <span class="Thunder">Electro DMG</span>. Press <span class="Highlight">Normal Attack</span> shortly after performing Heavy Attack to perform <span class="Highlight">Basic Attack Stage 2</span>.
            <div class="gap"></div>
            <span class="Title">Mid-air Attack</span>
            Consume STA to perform Plunging Attack from mid-air, dealing Electro DMG.
            <div class="gap"></div>
            <span class="Title">Dodge Counter</span>
            Press <span class="Highlight">Normal Attack</span> after a successful Dodge to attack the target, dealing <span class="Thunder">Electro DMG</span>.
            <div class="gap"></div>
            <span class="Title">Mid-air Dodge Counter</span>
            Press <span class="Highlight">Normal Attack</span> after a successful Mid-air Dodge to perform Plunging Attack at the cost of STA, dealing <span class="Thunder">Electro DMG</span>.
            <div class="gap"></div>
            <span class="Title">Heavy Attack - Thunderoar: Backstep</span>
            When Prowess is full, <span class="Highlight">Heavy Attack - Steelclash</span> is replaced with <span class="Highlight">Heavy Attack - Thunderoar</span>: <span class="Highlight">Backstep</span>, dealing <span class="Thunder">Electro DMG</span> and consuming all Prowess.<br>
            - While in action, release or press <span class="Highlight">Normal Attack</span> again within a certain period to perform <span class="Highlight">Heavy Attack - Thunderoar: Spinslash</span>.<br>
            - <span class="Highlight">Heavy Attack - Thunderoar: Spinslash</span> is available if Augusta remains on the ground for a certain period after this skill is interrupted.
            <div class="gap"></div>
            <span class="Title">Heavy Attack - Thunderoar: Spinslash</span>
            Augusta whirls and lashes out with her Broadblade, dealing <span class="Thunder">Electro DMG</span>.
            <div class="gap"></div>
            <span class="Title">Heavy Attack - Thunderoar: Uppercut</span>
            Press Jump when Prowess is full to perform <span class="Highlight">Heavy Attack - Thunderoar: Uppercut</span>, dealing <span class="Thunder">Electro DMG</span> and consuming all Prowess.<br>
            If Prowess is full when casting <span class="Highlight">Resonance Skill - Warrior's Blade</span>, press <span class="Highlight">Resonance Skill</span> or Jump to perform <span class="Highlight">Heavy Attack - Thunderoar: Uppercut</span>, dealing <span class="Thunder">Electro DMG</span> and consuming all Prowess.<br>
            If Prowess is full when casting <span class="Highlight">Heavy Attack - Steelclash</span> or <span class="Highlight">Dodge Counter – Heavy Attack: Steelclash</span>, release <span class="Highlight">Normal Attack</span> after a certain period or press <span class="Highlight">Normal Attack</span> or Jump again to perform <span class="Highlight">Heavy Attack - Thunderoar: Uppercut</span>, dealing, <span class="Thunder">Electro DMG</span> and consuming all Prowess.
            <div class="gap"></div>
            <span class="Title">Dodge Counter - Heavy Attack: Steelclash</span>
            When Prowess is full, <span class="Highlight">Dodge Counter</span> is replaced with <span class="Highlight">Dodge Counter - Heavy Attack: Steelclash</span>, dealing <span class="Thunder">Electro DMG</span>, considered as Heavy Attack DMG.
            <div class="gap"></div>
            <span class="Title">Dodge Counter - Thunderoar: Backstep</span>
            When Ascendancy is full, press <span class="Highlight">Normal Attack</span> following a successful Dodge on the ground to cast <span class="Highlight">Dodge Counter - Thunderoar: Backstep</span> in place of <span class="Highlight">Dodge Counter</span> and <span class="Highlight">Dodge Counter - Heavy Attack: Steelclash</span>, dealing <span class="Thunder">Electro DMG</span>, considered as Heavy Attack DMG.<br>
            - Release or press <span class="Highlight">Normal Attack</span> again within a certain period into the action to perform <span class="Highlight">Heavy Attack - Thunderoar: Spinslash</span>.<br>
            - <span class="Highlight">Heavy Attack - Thunderoar: Spinslash</span> is available if Augusta remains on the ground for a certain period after this skill is interrupted.
            <div class="gap"></div>
            <span class="Title">Prowess</span>
            Augusta can hold up to 100 points of Prowess.<br>
            - Prowess is obtained when <span class="Highlight">Basic Attack</span>, <span class="Highlight">Heavy Attack - Steelclash</span>, <span class="Highlight">Mid-air Attack</span>, <span class="Highlight">Mid-air Dodge Counter</span>, <span class="Highlight">Resonance Skill - Warrior's Blade</span>, <span class="Highlight">Dodge Counter</span>, or <span class="Highlight">Dodge Counter - Heavy Attack: Steelclash</span> deals damage.<br>
            - Prowess is fully restored when casting <span class="Highlight">Intro Skill - Stride of Goldenflare</span>.
            <div class="gap"></div>
            `,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["28.90%", "31.27%", "33.64%", "36.96%", "39.33%", "42.06%", "45.85%", "49.64%", "53.43%", "57.46%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["33.70%*2", "36.47%*2", "39.23%*2", "43.10%*2", "45.86%*2", "49.04%*2", "53.46%*2", "57.88%*2", "62.31%*2", "67.00%*2"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["33.00%*3", "35.71%*3", "38.42%*3", "42.21%*3", "44.91%*3", "48.02%*3", "52.35%*3", "56.68%*3", "61.01%*3", "65.61%*3"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Stage 4 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["32.51%*3", "35.18%*3", "37.84%*3", "41.57%*3", "44.24%*3", "47.30%*3", "51.57%*3", "55.83%*3", "60.10%*3", "64.63%*3"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Heavy Attack: Steelclash DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["23.34%*3", "25.25%*3", "27.16%*3", "29.84%*3", "31.76%*3", "33.96%*3", "37.02%*3", "40.08%*3", "43.14%*3", "46.39%*3"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Mid-air Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["30.00%*2", "32.46%*2", "34.92%*2", "38.37%*2", "40.83%*2", "43.66%*2", "47.59%*2", "51.53%*2", "55.47%*2", "59.65%*2"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["33.70%*2", "36.47%*2", "39.23%*2", "43.10%*2", "45.86%*2", "49.04%*2", "53.46%*2", "57.88%*2", "62.31%*2", "67.00%*2"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Mid-air Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["30.00%*2", "32.46%*2", "34.92%*2", "38.37%*2", "40.83%*2", "43.66%*2", "47.59%*2", "51.53%*2", "55.47%*2", "59.65%*2"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Heavy Attack: Steelclash STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Mid-air Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 10
                },
                {
                    attributeName: "Mid-air Dodge Counter STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 11
                },
                {
                    attributeName: "Heavy Attack - Thunderoar: Backstep DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["27.00%", "29.22%", "31.43%", "34.53%", "36.75%", "39.29%", "42.84%", "46.38%", "49.92%", "53.68%"]
                    }],
                    index: 12
                },
                {
                    attributeName: "Heavy Attack - Thunderoar: Spinslash DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["71.28%*3", "77.13%*3", "82.97%*3", "91.16%*3", "97.00%*3", "103.72%*3", "113.08%*3", "122.43%*3", "131.78%*3", "141.72%*3"]
                    }],
                    index: 13
                },
                {
                    attributeName: "Heavy Attack - Thunderoar: Uppercut DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["90.00%*2", "97.38%*2", "104.76%*2", "115.10%*2", "122.48%*2", "130.96%*2", "142.77%*2", "154.58%*2", "166.39%*2", "178.93%*2"]
                    }],
                    index: 14
                },
                {
                    attributeName: "Dodge Counter - Heavy Attack: Steelclash DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["23.34%*3", "25.25%*3", "27.16%*3", "29.84%*3", "31.76%*3", "33.96%*3", "37.02%*3", "40.08%*3", "43.14%*3", "46.39%*3"]
                    }],
                    index: 15
                },
                {
                    attributeName: "Dodge Counter - Thunderoar: Backstep DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["27.00%", "29.22%", "31.43%", "34.53%", "36.75%", "39.29%", "42.84%", "46.38%", "49.92%", "53.68%"]
                    }],
                    index: 16
                },
                {
                    attributeName: "Heavy Attack - Thunderoar: Spinslash STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 17
                },
                {
                    attributeName: "Heavy Attack - Thunderoar: Uppercut STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 18
                }                
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconAogusita/SP_IconAogusitaB3.webp",
            skillName: 'Warrior\'s Blade',
            skillDescription: `<span class="start-gap"></span>
            Augusta leaps and slams down her Broadblade, dealing <span class="Thunder">Electro DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["110.00%*3", "119.02%*3", "128.04%*3", "140.67%*3", "149.69%*3", "160.07%*3", "174.50%*3", "188.93%*3", "203.36%*3", "218.70%*3"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["15s", "15s", "15s", "15s", "15s", "15s", "15s", "15s", "15s", "15s"]
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
                }
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconAogusita/SP_IconAogusitaC2.webp",
            skillName: 'Sunward Conquest',
            skillDescription: `<span class="Title">Resonance Liberation - Sword of Eternal Oath</span>
            Press and release <span class="Highlight">Resonance Liberation</span> to cast this skill. Augusta will sweep her Broadblade forward, dealing <span class="Thunder">Electro DMG</span>, considered as Heavy Attack DMG.
            <div class="gap"></div>
            <span class="Title">Resonance Liberation - Sublime is the Sun</span>
            When Majesty reaches 2 stacks, hold <span class="Highlight">Resonance Liberation</span> to cast <span class="Highlight">Resonance Liberation - Sublime is the Sun</span>. Casting <span class="Highlight">Resonance Liberation - Sublime is the Sun</span> costs no Resonance Energy but 2 stacks of Majesty instead.<br>
            - When casting <span class="Highlight">Resonance Liberation - Sublime is the Sun</span>, Augusta generates the <span class="Highlight">Ruler's Realm</span> and enters the <span class="Highlight">Sworn Allegiance</span> state for 7s. Within this duration, time is temporarily stopped, and <span class="Highlight">Resonator switching</span> is disabled. Only <span class="Highlight">Sublime is the Sun - Sunborne</span>, <span class="Highlight">Sublime is the Sun - Everbright Protector</span>, and <span class="Highlight">Dodge</span> can be performed in the <span class="Highlight">Sworn Allegiance</span> state. <span class="Highlight">Mid-air Attack</span> is available while airborne.<br>
            - In the <span class="Highlight">Sworn Allegiance</span> state, press or hold <span class="Highlight">Normal Attack</span> to cast <span class="Highlight">Sublime is the Sun - Sunborne</span>. Augusta can walk on water without consuming STA in this state.<br>
            - Performing <span class="Highlight">environmental, gameplay, or other interactions</span> ends <span class="Highlight">Sworn Allegiance</span> without triggering <span class="Highlight">Sublime is the Sun - Everbright Protector</span>.
            <div class="gap"></div>
            <span class="Title">Sublime is the Sun - Sunborne</span>
            Deal <span class="Thunder">Electro DMG</span>, considered as Heavy Attack DMG. After casting <span class="Highlight">Sublime is the Sun - Sunborne</span> 9 times, <span class="Highlight">press Normal Attack or Resonance Liberation</span> to perform <span class="Highlight">Sublime is the Sun - Everbright Protector</span>.
            <div class="gap"></div>
            <span class="Title">Sublime is the Sun - Everbright Protector</span>
            Deal <span class="Thunder">Electro DMG</span>, considered as Heavy Attack DMG. Casting <span class="Highlight">Sublime is the Sun - Everbright Protector</span> ends the <span class="Highlight">Sworn Allegiance</span> state and consumes all stacks of Crown of Wills later. All other Resonators in the team will be made to leave the field.<br>
            - When <span class="Highlight">Sworn Allegiance</span> ends, <span class="Highlight">Sublime is the Sun - Everbright Protector</span> is automatically cast.<br>
            - During <span class="Highlight">Sworn Allegiance</span>, hold <span class="Highlight">Resonance Liberation</span> to cast <span class="Highlight">Sublime is the Sun - Everbright Protector</span> early.
            <div class="gap"></div>
            <span class="Title">Ruler's Realm</span>
            - <span class="Highlight">Ruler's Realm</span> lasts for 30s.<br>
            - When Resonators in the team cast <span class="Highlight">Intro Skill</span> within <span class="Highlight">Ruler's Realm</span>, they gain a shield equal to 650 + 5% of Augusta's Max HP for 10s. This effect is unstackable. This Shield will not be passed on to the incoming Resonator.
            <div class="gap"></div>
            <span class="Title">Majesty</span>
            Augusta can hold up to 2 stacks of Majesty.<br>
            - 1 stack of Majesty is obtained when casting <span class="Highlight">Resonance Skill - Undying Sunlight: Plunge</span>.<br>
            - 1 stack of Majesty is obtained when other Resonators in the team cast <span class="Highlight">Outro Skill</span> under the effect of Augusta's <span class="Highlight">Outro Skill - Battlesong of the Unyielding</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Resonance Liberation - Sword of Eternal Oath DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["16.59%*2+66.36%*3+16.59%*2+287.56%", "17.96%*2+71.81%*3+17.96%*2+311.14%", "19.32%*2+77.25%*3+19.32%*2+334.72%", "21.22%*2+84.87%*3+21.22%*2+367.74%", "22.58%*2+90.31%*3+22.58%*2+391.32%", "24.15%*2+96.57%*3+24.15%*2+418.43%", "26.32%*2+105.27%*3+26.32%*2+456.16%", "28.50%*2+113.98%*3+28.50%*2+493.89%", "30.67%*2+122.68%*3+30.67%*2+531.62%", "32.99%*2+131.94%*3+32.99%*2+571.7%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Sublime is the Sun - Sunborne DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["60.00%", "64.92%", "69.84%", "76.73%", "81.65%", "87.31%", "95.18%", "103.05%", "110.93%", "119.29%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Sublime is the Sun - Everbright Protector DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["120.00%+450.00%+3.00%*10", "129.84%+486.90%+3.25%*10", "139.68%+523.80%+3.50%*10", "153.46%+575.46%+3.84%*10", "163.30%+612.36%+4.09%*10", "174.62%+654.80%+4.37%*10", "190.36%+713.84%+4.76%*10", "206.10%+772.88%+5.16%*10", "221.85%+831.92%+5.55%*10", "238.58%+894.65%+5.97%*10"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Resonance Liberation - Sword of Eternal Oath Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Resonance Liberation - Sword of Eternal Oath Resonance Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Resonance Liberation - Sword of Eternal Oath Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Resonance Liberation - Sublime is the Sun Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Sublime is the Sun - Everbright Protector Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["3s", "3s", "3s", "3s", "3s", "3s", "3s", "3s", "3s", "3s"]
                    }],
                    index: 8
                }
            ]
        },
        {
            skillId: 4,
            typeName: 'Intro Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconAogusita/SP_IconAogusitaQTE.webp",
            skillName: 'Stride of Goldenflare',
            skillDescription: `<span class="start-gap"></span>
            Deal <span class="Thunder">Electro DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["50.00%*2", "54.10%*2", "58.20%*2", "63.94%*2", "68.04%*2", "72.76%*2", "79.32%*2", "85.88%*2", "92.44%*2", "99.41%*2"]
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
            skillName: 'Battlesong of the Unyielding',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconAogusita/SP_IconAogusitaT.webp",
            skillDescription: `The next Resonator switched onto the field gains the following effects for 14s, which end immediately if they are switched out:<br>
            - Gain 15% DMG Amplification for all Attributes.<br>
            - Casting Outro Skill grants 1 stack of Majesty and 1 stack of Crown of Wills to Augusta.<br>
            <span class="gap"></span>
            <span class="Title">Crown of Wills</span>
            Each stack grants 15% Electro DMG Bonus, up to 1 stack. When <span class="Highlight">Resonance Liberation - Sublime is the Sun: Everbright Protector</span> ends, all stacks of Crown of Wills are removed.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconAogusita/SP_IconAogusitaY.webp",
            skillName: 'Call Me By the Sun',
            skillDescription: `<span class="Title">Resonance Skill - Undying Sunlight: Strike</span>
            When Ascendancy is full, <span class="Highlight">Resonance Skill - Warrior's Blade</span> is replaced with <span class="Highlight">Resonance Skill - Undying Sunlight: Strike</span>, dealing <span class="Thunder">Electro DMG</span>.<br>
            - <span class="Highlight">Press Normal Attack or Resonance Skill</span> during the action to cast <span class="Highlight">Resonance Skill - Undying Sunlight: Leap</span>.<br>
            - <span class="Highlight">Resonance Skill - Undying Sunlight: Strike</span> can be re-cast shortly after being interrupted.<br>
            - <span class="Highlight">Resonance Skill - Undying Sunlight: Leap</span> can be cast some time again after being interrupted.<br>
            - Can be cast mid-air.
            <div class="gap"></div>
            <span class="Title">Resonance Skill - Undying Sunlight: Leap</span>
            Deal <span class="Thunder">Electro DMG</span>.<br>
            - <span class="Highlight">Press Normal Attack or Resonance Skill</span> during the action to cast <span class="Highlight">Resonance Skill - Undying Sunlight: Plunge</span>.<br>
            - <span class="Highlight">Resonance Skill - Undying Sunlight: Leap</span> can be re-cast shortly after being interrupted.<br>
            - <span class="Highlight">Resonance Skill - Undying Sunlight: Plunge</span> can be cast some time again after being interrupted.<br>
            - Can only be cast mid-air.
            <div class="gap"></div>
            <span class="Title">Resonance Skill - Undying Sunlight: Plunge</span>
            Consume all Ascendancy to cast this skill, dealing <span class="Thunder">Electro DMG</span>, considered as Heavy Attack DMG.<br>
            - Casting this skill grants 1 stack of Majesty.<br>
            - Can only be cast mid-air.
            <div class="gap"></div>
            <span class="Title">Dodge Counter - Undying Sunlight: Strike</span>
            When Ascendancy is full, <span class="Highlight">press Resonance Skill</span> after a successful ground Dodge or <span class="Highlight">press Normal Attack or Resonance Skill</span> after successful Mid-air Dodge to cast <span class="Highlight">Dodge Counter - Undying Sunlight: Strike</span>, dealing <span class="Thunder">Electro DMG</span>, considered as Resonance Skill DMG.<br>
            - <span class="Highlight">Press Normal Attack or Resonance Skill</span> during the action to cast <span class="Highlight">Resonance Skill - Undying Sunlight: Leap</span>.<br>
            - <span class="Highlight">Resonance Skill - Undying Sunlight: Leap</span> can be cast again some time after being interrupted.
            <div class="gap"></div>
            <span class="Title">Ascendancy</span>
            Augusta can hold up to 100 points of Ascendancy.<br>
            - Ascendancy is obtained when <span class="Highlight">Normal Attacks</span> deal damage.<br>
            - Casting <span class="Highlight">Intro Skill - Stride of Goldenflare</span> restores 20% Ascendancy.<br>
            - Casting <span class="Highlight">Resonance Skill - Warrior's Blade</span> restores 10% Ascendancy.<br>
            - Casting <span class="Highlight">Resonance Liberation - Sword of Eternal Oath</span> restores 40% Ascendancy.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Resonance Skill - Undying Sunlight: Strike DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["70.00%*2", "75.74%*2", "81.48%*2", "89.52%*2", "95.26%*2", "101.86%*2", "111.05%*2", "120.23%*2", "129.41%*2", "139.17%*2"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Resonance Skill - Undying Sunlight: Leap DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["112.00%+14.00%*2", "121.19%+15.15%*2", "130.37%+16.30%*2", "143.23%+17.91%*2", "152.41%+19.06%*2", "162.98%+20.38%*2", "177.67%+22.21%*2", "192.36%+24.05%*2", "207.06%+25.89%*2", "222.67%+27.84%*2"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Resonance Skill - Undying Sunlight: Plunge DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["43.55%+391.95%", "47.13%+424.09%", "50.70%+456.23%", "55.70%+501.23%", "59.27%+533.37%", "63.37%+570.33%", "69.09%+621.76%", "74.80%+673.18%", "80.52%+724.60%", "86.59%+779.24%"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Mid-air Dodge Counter - Undying Sunlight: Strike DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["70.00%*2", "75.74%*2", "81.48%*2", "89.52%*2", "95.26%*2", "101.86%*2", "111.05%*2", "120.23%*2", "129.41%*2", "139.17%*2"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Resonance Skill - Undying Sunlight: Plunge Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["7", "7", "7", "7", "7", "7", "7", "7", "7", "7"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Resonance Skill - Undying Sunlight: Strike STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Resonance Skill - Undying Sunlight: Leap STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 7
                }
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Glory\'s Favor',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconAogusita/SP_IconAogusitaD1.webp",
            skillDescription: `When Augusta deals damage, she gains a shield equal to 350 + 2.5% of her Max HP for 5s, triggered once every 0.5s. This effect is unstackable. This Shield will not be passed on to the incoming Resonator.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Blazing Valor',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconAogusita/SP_IconAogusitaD2.webp",
            skillDescription: `When Augusta is out of combat for over 4s, she gains the following effects that can be triggered once every 4s:<br>
            - If Majesty is less than 1 stack, restore 1 stack.<br>
            - Fully restore Crown of Wills.`,
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
            name: "Stained in Scorched Earth",
            description: `- Each stack of Crown of Wills additionally increases Augusta's Crit. DMG by 15%.<br>
            - The max stack of Crown of Wills is increased to 2.<br>
            - Casting <span class="Highlight">Intro Skill - Stride of Goldenflare</span> now grants 1 stack of Crown of Wills.<br>
            - <span class="Highlight">Resonance Skill - Undying Sunlight: Strike</span>, <span class="Highlight">Resonance Skill - Undying Sunlight: Leap</span>, and <span class="Highlight">Resonance Skill - Undying Sunlight: Plunge</span> are now immune to interruption.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_AogusitaM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "Cleansed in Crimson War",
            description: `- Crown of Wills provides additional effects: Each stack increases Augusta's Crit. Rate by 20%.<br>
            For every 1% of Crit. Rate over 100%, Augusta gains 2% Crit. DMG increase, up to 100%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_AogusitaM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "Forged in Rot and Ruin",
            description: `The following skills have their DMG Multiplier increased by 25%:<br>
            - <span class="Highlight">Heavy Attack - Thunderoar: Backstep</span>, <span class="Highlight">Dodge Counter - Thunderoar: Backstep</span>, <span class="Highlight">Heavy Attack - Thunderoar: Spinslash</span>, <span class="Highlight">Heavy Attack - Thunderoar: Uppercut</span>.<br>
            - <span class="Highlight">Resonance Skill - Undying Sunlight: Plunge</span>.<br>
            - <span class="Highlight">Resonance Liberation - Sublime is the Sun: Sunborne</span>, <span class="Highlight">Resonance Liberation - Sublime is the Sun: Everbright Protector</span>.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_AogusitaM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "Ascent in Sun and Glory",
            description: `Casting <span class="Highlight">Intro Skill - Stride of Goldenflare</span> increases the ATK of all Resonators in the team by 20% for 30s.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_AogusitaM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "Unshaken in Wrathful Tides",
            description: `The Shield provided by <span class="Highlight">Inherent Skill - Glory's Favor</span> is increased by 50%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_AogusitaM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "Engraved in Radiant Light",
            description: `- Augusta can now hold up to 4 stacks of Crown of Wills.<br>
            - For every 1% of Crit. Rate over 150%, Augusta gains 2% Crit. DMG increase, up to 50%.<br>
            - When Augusta performs <span class="Highlight">Heavy Attack - Thunderoar: Spinslash</span> or <span class="Highlight">Heavy Attack - Thunderoar: Uppercut</span>, she obtains 2 stacks of Crown of Wills. Augusta can only obtain 2 stacks of Crown of Wills every 1s via <span class="Highlight">Engraved in Radiant Light</span>.<br>
            - While casting <span class="Highlight">Heavy Attack - Thunderoar: Spinslash</span> or <span class="Highlight">Heavy Attack - Thunderoar: Uppercut</span>, Thunder Rage is triggered at the spot, dealing two instances of <span class="Thunder">Electro DMG</span>, with each instance equal to 100% of Augusta's ATK, considered as Heavy Attack DMG.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_AogusitaM6_UI.webp"
        }
    ]
}