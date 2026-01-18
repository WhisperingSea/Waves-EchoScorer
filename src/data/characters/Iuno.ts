import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Iuno: WWCharacter = {
    name: "Iuno",
    charaId: 1410,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Aero",
    weapon: "Gauntlets",
    bio: `She is favored by fate under one name, and swept away by it in another. Yet never once has she been defeated, nor has she ever yielded.
    Now, witness the defiant Priestess. Witness what keeps her striding forward, never to look back. Witness how she walks the intricate web of destiny and becomes the only answer.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_younuo_UI.webp",
        icon_sq: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_48_UI.webp",
        model: "https://i.imgur.com/TUOfXb6.png"
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
                item: "Abyssal Husk",
                id: 5,
                value: "46"
            },
            {
                item: "Sliverglow Bloom",
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
                item: "Cadence Seed",
                id: 5,
                value: "25"
            },
            {
                item: "Cadence Bud",
                id: 6,
                value: "28"
            },
            {
                item: "Cadence Leaf",
                id: 7,
                value: "55"
            },
            {
                item: "Cadence Blossom",
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
        base_hp: 842,
        base_atk: 36,
        base_def: 92,
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
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill4.webp",
            skillName: 'Moon Steps',
            skillDescription: `<span class="Title">Moonring - Basic Attack</span>
            Perform up to 3 consecutive attacks with the <span class="Highlight">Moonring</span>, dealing <span class="Wind">Aero DMG</span>.
            <div class="gap"></div>
            <span class="Title">Mid-air Attack</span>
            Consume STA to perform a Plunging Attack, dealing <span class="Wind">Aero DMG</span>.
            <div class="gap"></div>
            <span class="Title">Moonring - Dodge Counter</span>
            Press Normal Attack shortly after a successful Dodge to attack the target with <span class="Highlight">Moonring</span>, dealing <span class="Wind">Aero DMG</span>. Press Normal Attack again shortly after performing this skill to cast Moonring - Basic Attack Stage 3.
            <div class="gap"></div>
            <span class="Title">Moonbow - Basic Attack</span>
            Enter <span class="Highlight">Lunar Cycle - New Moon</span> by casting <span class="Highlight">Heavy Attack - Flux: Moonring</span>. When in this state, Iuno will attack with <span class="Highlight">Moonbow</span>.<br>
            Perform up to 3 consecutive attacks with the <span class="Highlight">Moonbow</span>, dealing <span class="Wind">Aero DMG</span>, considered as Resonance Liberation DMG.<br>
            Can be cast in mid-air.
            <div class="gap"></div>
            <span class="Title">Moonbow - Dodge Counter</span>
            When in <span class="Highlight">Lunar Cycle - New Moon</span>, press Normal Attack shortly after a successful Dodge to attack the target with <span class="Highlight">Moonbow</span>, dealing <span class="Wind">Aero DMG</span>, considered as Resonance Liberation DMG.<br>
            When in <span class="Highlight">Lunar Cycle - New Moon</span>, press Normal Attack again shortly after performing this skill to cast Moonbow - Basic Attack Stage 3.<br>
            Can be cast in mid-air.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Moonring - Basic Attack 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["44.10%", "47.72%", "51.34%", "56.40%", "60.02%", "64.17%", "69.96%", "75.75%", "81.53%", "87.68%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Moonring - Basic Attack 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["23.17%*2+23.87%", "25.07%*2+25.83%", "26.97%*2+27.79%", "29.63%*2+30.53%", "31.53%*2+32.48%", "33.71%*2+34.74%", "36.75%*2+37.87%", "39.79%*2+41.00%", "42.83%*2+44.13%", "46.06%*2+47.46%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Moonring - Basic Attack 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["44.26%*2+45.60%", "47.89%*2+49.34%", "51.52%*2+53.08%", "56.60%*2+58.31%", "60.22%*2+62.05%", "64.40%*2+66.35%", "70.20%*2+72.33%", "76.01%*2+78.31%", "81.82%*2+84.29%", "87.98%*2+90.65%"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Mid-air Attack",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["27.00%*2", "29.22%*2", "31.43%*2", "34.53%*2", "36.75%*2", "39.29%*2", "42.84%*2", "46.38%*2", "49.92%*2", "53.68%*2"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Moonring - Dodge Counter",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["41.29%*2+42.54%", "44.67%*2+46.03%", "48.06%*2+49.51%", "52.80%*2+54.40%", "56.18%*2+57.89%", "60.08%*2+61.90%", "65.49%*2+67.48%", "70.91%*2+73.06%", "76.32%*2+78.64%", "82.08%*2+84.57%"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Moonbow - Basic Attack 1 DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["63.60%", "68.82%", "74.04%", "81.34%", "86.55%", "92.55%", "100.89%", "109.24%", "117.58%", "126.45%"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Moonbow - Basic Attack 2 DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["28.00%*3", "30.30%*3", "32.60%*3", "35.81%*3", "38.11%*3", "40.75%*3", "44.42%*3", "48.09%*3", "51.77%*3", "55.67%*3"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Moonbow - Basic Attack 3 DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["84.00%*2", "90.89%*2", "97.78%*2", "107.42%*2", "114.31%*2", "122.23%*2", "133.25%*2", "144.27%*2", "155.30%*2", "167.01%*2"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Moonbow - Dodge Counter DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["52.00%*3", "56.27%*3", "60.53%*3", "66.50%*3", "70.77%*3", "75.67%*3", "82.49%*3", "89.31%*3", "96.14%*3", "103.39%*3"]
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
                }
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconYounuo/SP_IconYounuoB1.webp",
            skillName: 'Foresight Fugue',
            skillDescription: `<span class="Title">Pulse of Origins</span>
            Dash forward, dealing <span class="Wind">Aero DMG</span>.
            <div class="gap"></div>
            <span class="Title">Closing Refrain</span>
            When not in <span class="Highlight">Lunar Cycle</span>, casting <span class="Highlight">Moonring - Basic Attack Stage 3</span>, <span class="Highlight">Intro Skill</span>, or <span class="Highlight">Pulse of Origins</span> replaces Iuno's Resonance Skill with <span class="Highlight">Closing Refrain</span> for 5s.<br>
            Casting Closing Refrain unleashes a flurry of strikes, dealing <span class="Wind">Aero DMG</span>, and activates <span class="Highlight">Lunar Cycle</span>.
            <div class="gap"></div>
            <span class="Title">Unfinished Refrain</span>
            When in <span class="Highlight">Lunar Cycle - Half Moon</span>, Iuno's Resonance Skill is replaced with <span class="Highlight">Unfinished Refrain</span>.<br>
            Casting Unfinished Refrain unleashes a flurry of strikes, dealing <span class="Wind">Aero DMG</span>.<br>
            Unfinished Refrain shares the same Cooldown as Closing Refrain.
            <div class="gap"></div>
            <span class="Title">Arc Beyond the Edge</span>
            When Iuno is in <span class="Highlight">Lunar Cycle - New Moon</span>, her Resonance Skill is replaced with <span class="Highlight">Arc Beyond the Edge</span>, which has 2 initial charges.<br>
            Casting Arc Beyond the Edge causes Iuno to shift position and deal <span class="Wind">Aero DMG</span>, considered as Resonance Liberation DMG.<br>
            - Directional input can be used to extend the travel distance. If Iuno is hit or launched into mid-air, casting <span class="Highlight">Arc Beyond the Edge</span> immediately makes her recover from the attack.<br>
            - Can be cast in mid-air.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Pulse of Origins DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["9.38%*7+65.65%", "10.15%*7+71.04%", "10.92%*7+76.42%", "12.00%*7+83.96%", "12.77%*7+89.34%", "13.65%*7+95.53%", "14.88%*7+104.15%", "16.11%*7+112.76%", "17.34%*7+121.37%", "18.65%*7+130.52%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Pulse of Origins Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["6s", "6s", "6s", "6s", "6s", "6s", "6s", "6s", "6s", "6s"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Pulse of Origins Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Closing Refrain DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["70.79%*2+72.93%", "76.59%*2+78.92%", "82.40%*2+84.90%", "90.52%*2+93.27%", "96.33%*2+99.25%", "103.00%*2+106.13%", "112.29%*2+115.69%", "121.58%*2+125.26%", "130.87%*2+134.83%", "140.73%*2+145.00%"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Closing Refrain Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Unfinished Refrain DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["70.79%*2+72.93%", "76.59%*2+78.92%", "82.40%*2+84.90%", "90.52%*2+93.27%", "96.33%*2+99.25%", "103.00%*2+106.13%", "112.29%*2+115.69%", "121.58%*2+125.26%", "130.87%*2+134.83%", "140.73%*2+145.00%"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Closing/Unfinished Refrain Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["8s", "8s", "8s", "8s", "8s", "8s", "8s", "8s", "8s", "8s"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Unfinished Refrain Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Arc Beyond the Edge DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["110.55%*2", "119.62%*2", "128.69%*2", "141.38%*2", "150.44%*2", "160.87%*2", "175.37%*2", "189.87%*2", "204.38%*2", "219.79%*2"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Arc Beyond the Edge Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["10s", "10s", "10s", "10s", "10s", "10s", "10s", "10s", "10s", "10s"]
                    }],
                    index: 10
                },
                {
                    attributeName: "Arc Beyond the Edge Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
                    }],
                    index: 11
                }
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconYounuo/SP_IconYounuoC1.webp",
            skillName: 'Beneath Lunar Tides',
            skillDescription: `<span class="start-gap"></span>
            Deal <span class="Wind">Aero DMG</span> and activate the <span class="Highlight">Lunar Cycle</span> state.<br>
            Can be cast in mid-air.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["550.00%", "595.10%", "640.20%", "703.34%", "748.44%", "800.31%", "872.47%", "944.63%", "1016.79%", "1093.46%"]
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
                    attributeName: "Resonance Cost",
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
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconYounuo/SP_IconYounuoQTE.webp",
            skillName: 'Illuminated Manifestation',
            skillDescription: `<span class="start-gap"></span>
            Deal <span class="Wind">Aero DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["8.00%*7+24.00%", "8.66%*7+25.97%", "9.32%*7+27.94%", "10.24%*7+30.70%", "10.89%*7+32.66%", "11.65%*7+34.93%", "12.70%*7+38.08%", "13.74%*7+41.22%", "14.79%*7+44.37%", "15.91%*7+47.72%"]
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
            skillName: 'From Gloom to Gleam',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconYounuo/SP_IconYounuoT.webp",
            skillDescription: `Attack the target to deal 100% <span class="Wind">Aero DMG</span>. The incoming Resonator gains 50% Heavy Attack DMG Amplification for 14s. This effect ends early if they are switched off the field.<br>
            Casting <span class="Highlight">Outro Skill</span> won't interrupt <span class="Highlight">Heavy Attack - Absolute Fullness</span>, and the Outro Skill effect still applies.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconYounuo/SP_IconYounuoY.webp",
            skillName: 'Ebb and Flow',
            skillDescription: `<span class="Title">Lunar Cycle</span>
            Iuno can activate Lunar Cycle by casting <span class="Highlight">Resonance Skill - Closing Refrain</span> or <span class="Highlight">Resonance Liberation</span>.<br>
            Lunar Cycle has two states: <span class="Highlight">Half Moon</span> and <span class="Highlight">New Moon</span>. By default, Iuno enters the <span class="Highlight">Half Moon</span> state when activating Lunar Cycle and can switch between the two states by casting <span class="Highlight">Heavy Attack - Flux</span>.<br>
            When in Lunar Cycle:<br>
            - Iuno's Jump is replaced with <span class="Highlight">Heavy Attack - Flux</span>. STA won't recover when Iuno is in mid-air.<br>
            - Iuno's movement becomes <span class="Highlight">Meandering</span>, which consumes STA continuously in mid-air to move in a unique manner.<br>
            - Performing environmental interactions, using Utilities, or holding Jump will end <span class="Highlight">Lunar Cycle</span>.
            <div class="gap"></div>
            <span class="Title">Lunar Cycle - Half Moon</span>
            Iuno attacks using the Moonring, restoring <span class="Highlight">Sentience</span> on hit.<br>
            She can use <span class="Highlight">Heavy Attack - Flux: Moonbow</span> to deal <span class="Wind">Aero DMG</span> (considered as Resonance Liberation DMG) and switch to <span class="Highlight">Lunar Cycle - New Moon</span>.<br>
            <span class="Highlight">Heavy Attack - Flux: Moonbow</span> can be cast in mid-air.
            <div class="gap"></div>
            <span class="Title">Lunar Cycle - New Moon</span>
            Iuno attacks using the Moonbow. While in this state, casting <span class="Highlight">Moonbow - Basic Attack</span>, <span class="Highlight">Resonance Skill - Arc Beyond the Edge</span>, or <span class="Highlight">Moonbow - Dodge Counter</span> consumes <span class="Highlight">Sentience</span> to increase the skill's DMG Multiplier, restore additional Concerto Energy, and heal nearby Resonators in the team.<br>
            Iuno can use <span class="Highlight">Heavy Attack - Flux: Moonring</span> to deal <span class="Wind">Aero DMG</span> (considered as Resonance Liberation DMG) and switch to <span class="Highlight">Lunar Cycle - Half Moon</span>.<br>
            <span class="Highlight">Heavy Attack - Flux: Moonring</span> can be cast in mid-air.
            <div class="gap"></div>
            <span class="Title">Heavy Attack - Absolute Fullness</span>
            When Iuno's Concerto Energy is full, her Heavy Attack is replaced with <span class="Highlight">Absolute Fullness</span>.<br>
            Casting Absolute Fullness ends <span class="Highlight">Lunar Cycle</span>, provides healing for nearby Resonators in the team, deals <span class="Wind">Spectro DMG</span> to nearby targets (considered as Resonance Liberation DMG), and conjures a <span class="Highlight">Full Moon</span> domain at her location. This effect can be triggered once every 25s.<br>
            Can be cast in mid-air.
            <div class="gap"></div>
            <span class="Title">Full Moon Domain</span>
            Resonators inside the domain periodically restore HP and STA.<br>
            Gaining a Shield inside the domain grants 1 stack of <span class="Highlight">Blessing of the Wan Light</span>. This effect can be triggered once every 0.5s.
            <div class="gap"></div>
            <span class="Title">Blessing of the Wan Light</span>
            The receiving Resonator gains 4% all DMG Amplification for 10s, stacking up to 10 times. Gaining new stacks resets the duration. This effect ends early if the receiving Resonator is switched off the field.
            <div class="gap"></div>
            <span class="Title">Sentience</span>
            Iuno can hold up to 100 points of <span class="Highlight">Sentience</span>.<br>
            Casting Intro Skill restores 40 points of <span class="Highlight">Sentience</span>.<br>
            Casting Resonance Liberation restores 60 points of <span class="Highlight">Sentience</span>.<br>
            Casting <span class="Highlight">Closing Refrain</span> or <span class="Highlight">Unfinished Refrain</span> restores 25 points of <span class="Highlight">Sentience</span>.<br>
            When Iuno is in <span class="Highlight">Lunar Cycle</span>, Moonring - Basic Attack, Moonring - Dodge Counter, and Mid-air Attack restore <span class="Highlight">Sentience</span> on hit.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Lunar Cycle Duration",
                    type: "",
                    skillDetailNum: [{
                        values: ["15s", "15s", "15s", "15s", "15s", "15s", "15s", "15s", "15s", "15s"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Flux - Moonbow DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["126.00%", "136.34%", "146.67%", "161.13%", "171.47%", "183.35%", "199.88%", "216.41%", "232.94%", "250.51%"]
                    }],
                    index: 2
                }, {
                    attributeName: "Flux - Moonring DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["39.83%*4", "43.10%*4", "46.36%*4", "50.93%*4", "54.20%*4", "57.95%*4", "63.18%*4", "68.40%*4", "73.63%*4", "79.18%*4"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Enhanced Moonbow - Basic Attack 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["103.60%", "112.10%", "120.60%", "132.49%", "140.98%", "150.75%", "164.35%", "177.94%", "191.53%", "205.97%"]
                    }],
                    index: 4
                }, {
                    attributeName: "Enhanced Moonbow - Basic Attack 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["48.00%*3", "51.94%*3", "55.88%*3", "61.39%*3", "65.32%*3", "69.85%*3", "76.15%*3", "82.44%*3", "88.74%*3", "95.43%*3"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Enhanced Moonbow - Basic Attack 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["134.00%*2", "144.99%*2", "155.98%*2", "171.36%*2", "182.35%*2", "194.99%*2", "212.57%*2", "230.15%*2", "247.73%*2", "266.41%*2"]
                    }],
                    index: 6
                }, {
                    attributeName: "Enhanced Moonbow - Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["78.67%*3", "85.12%*3", "91.57%*3", "100.60%*3", "107.05%*3", "114.47%*3", "124.79%*3", "135.11%*3", "145.44%*3", "156.40%*3"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Enhanced Arc Beyond the Edge DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["160.55%*2", "173.72%*2", "186.89%*2", "205.32%*2", "218.48%*2", "233.62%*2", "254.69%*2", "275.75%*2", "296.81%*2", "319.19%*2"]
                    }],
                    index: 8
                }, {
                    attributeName: "Moonbow - Basic Attack 1 Extra Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Moonbow - Basic Attack 2 Extra Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
                    }],
                    index: 10
                }, {
                    attributeName: "Moonbow - Basic Attack 3 Extra Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 11
                },
                {
                    attributeName: "Moonbow - Dodge Counter Extra Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
                    }],
                    index: 12
                }, {
                    attributeName: "Arc Beyond the Edge Extra Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 13
                },
                {
                    attributeName: "Moonbow - Basic Attack 1 Healing",
                    type: "",
                    skillDetailNum: [{
                        values: ["13.03% ATK", "14.10% ATK", "15.17% ATK", "16.67% ATK", "17.73% ATK", "18.96% ATK", "20.67% ATK", "22.38% ATK", "24.09% ATK", "25.91% ATK"]
                    }],
                    index: 14
                }, {
                    attributeName: "Moonbow - Basic Attack 2 Healing",
                    type: "",
                    skillDetailNum: [{
                        values: ["13.03% ATK", "14.10% ATK", "15.17% ATK", "16.67% ATK", "17.73% ATK", "18.96% ATK", "20.67% ATK", "22.38% ATK", "24.09% ATK", "25.91% ATK"]
                    }],
                    index: 15
                },
                {
                    attributeName: "Moonbow - Basic Attack 3 Healing",
                    type: "",
                    skillDetailNum: [{
                        values: ["24.43% ATK", "26.44% ATK", "28.44% ATK", "31.24% ATK", "33.25% ATK", "35.55% ATK", "38.75% ATK", "41.96% ATK", "45.16% ATK", "48.57% ATK"]
                    }],
                    index: 16
                }, {
                    attributeName: "Moonbow - Dodge Counter Healing",
                    type: "",
                    skillDetailNum: [{
                        values: ["16.29% ATK", "17.63% ATK", "18.96% ATK", "20.83% ATK", "22.17% ATK", "23.70% ATK", "25.84% ATK", "27.97% ATK", "30.11% ATK", "32.38% ATK"]
                    }],
                    index: 17
                },
                {
                    attributeName: "Arc Beyond the Edge Healing",
                    type: "",
                    skillDetailNum: [{
                        values: ["24.43% ATK", "26.44% ATK", "28.44% ATK", "31.24% ATK", "33.25% ATK", "35.55% ATK", "38.75% ATK", "41.96% ATK", "45.16% ATK", "48.57% ATK"]
                    }],
                    index: 18
                }, {
                    attributeName: "Absolute Fullness DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["80.00%", "86.56%", "93.12%", "102.31%", "108.87%", "116.41%", "126.91%", "137.40%", "147.90%", "159.05%"]
                    }],
                    index: 19
                },
                {
                    attributeName: "Absolute Fullness Healing",
                    type: "",
                    skillDetailNum: [{
                        values: ["97.71% ATK", "105.73% ATK", "113.74% ATK", "124.96% ATK", "132.97% ATK", "142.18% ATK", "155.00% ATK", "167.82% ATK", "180.64% ATK", "194.26% ATK"]
                    }],
                    index: 20
                }, {
                    attributeName: "Full Moon Domain Duration",
                    type: "",
                    skillDetailNum: [{
                        values: ["30s", "30s", "30s", "30s", "30s", "30s", "30s", "30s", "30s", "30s"]
                    }],
                    index: 21
                },
                {
                    attributeName: "Full Moon Domain Interval",
                    type: "",
                    skillDetailNum: [{
                        values: ["5s", "5s", "5s", "5s", "5s", "5s", "5s", "5s", "5s", "5s"]
                    }],
                    index: 22
                }, {
                    attributeName: "Full Moon Domain Healing",
                    type: "",
                    skillDetailNum: [{
                        values: ["16.29% ATK", "17.63% ATK", "18.96% ATK", "20.83% ATK", "22.17% ATK", "23.70% ATK", "25.84% ATK", "27.97% ATK", "30.11% ATK", "32.38% ATK"]
                    }],
                    index: 23
                },
                {
                    attributeName: "Full Moon Domain STA Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 24
                }, {
                    attributeName: "Meandering STA Cost per Second",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 25
                },
                {
                    attributeName: "Heavy Attack - Flux STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 26
                }
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Waxing Ascent',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconYounuo/SP_IconYounuoD1.webp",
            skillDescription: `Every time Iuno casts Basic Attack, Heavy Attack, Dodge Counter, Resonance Skill, Resonance Liberation, or Intro Skill, she gains 1 Shield equal to 32% of her ATK for 15s. This Shield will not be passed on to the incoming Resonator.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Derivation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconYounuo/SP_IconYounuoD2.webp",
            skillDescription: `When Iuno casts Intro Skill or Resonance Liberation, she immediately gains 5 stacks of <span class="Highlight">Blessing of the Wan Light</span>.`,
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
            name: "Wax or Wane, All Gild the Bough",
            description: `When Iuno is in <span class="Highlight">Lunar Cycle</span>, her ATK is increased by 40%.<br>
            When Iuno is inside the <span class="Highlight">Full Moon Domain</span>, she additionally restores 1 point of Resonance Energy per second.<br>
            <span class="Highlight"> Resonance Skill - Arc Beyond the Edge</span> and <span class="Highlight">Heavy Attack - Absolute Fullness</span> become immune to interruption.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_YounuoM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "Day or Night, Let This Be Eternal",
            description: `Resonators in the team with 10 stacks of <span class="Highlight">Blessing of the Wan Light</span> gain an additional 40% all DMG Amplification.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_YounuoM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "I Drink Deep of Their Forgetting",
            description: `When Iuno is in <span class="Highlight">Lunar Cycle</span>, DMG dealt by <span class="Highlight">Moonbow - Basic Attack</span>, <span class="Highlight">Resonance Skill - Arc Beyond the Edge</span>, and <span class="Highlight">Moonbow - Dodge Counter</span> is Amplified by 65%.<br>
            Within a certain period after performing <span class="Highlight">Moonbow - Basic Attack</span> or <span class="Highlight">Moonbow - Dodge Counter</span>, casting <span class="Highlight">Resonance Skill - Arc Beyond the Edge</span> does not reset the cycle of <span class="Highlight">Moonbow - Basic Attack</span>.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_YounuoM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "Rainy Season Dwell in My Eyes",
            description: `Casting <span class="Highlight">Heavy Attack - Absolute Fullness</span> grants a Shield equal to 160% of Iuno's ATK to all Resonators in the team for 30s, which cannot be passed on to the incoming Resonator.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_YounuoM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "A Thousand Futile Glimpses",
            description: `Iuno gains 20% Resonance Liberation DMG Bonus.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_YounuoM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "I Am the Constant in the Chaos",
            description: `The DMG Multiplier of <span class="Highlight">Heavy Attack - Absolute Fullness</span> is increased by 1600%. Upon casting this skill, Iuno re-enters <span class="Highlight">Lunar Cycle - New Moon</span>, gains 100 points of <span class="Highlight">Sentience</span>, and resets all the cooldown of <span class="Highlight">Resonance Skill - Arc Beyond the Edge</span>.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_YounuoM6_UI.webp"
        },
    ]
}