import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const RoverAero: WWCharacter = {
    name: "Rover-Aero",
    charaId: 1406,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Aero",
    weapon: "Sword",
    bio: `A mysterious Resonator with the power to absorb all sounds. Currently journeying to find their lost memories.`,
    images: {
        portrait: "https://wuthering-waves-assets.pages.dev/portraits/T_IconRole_Pile_zhujuenan_UI.png",
        icon_sq: "https://wuthering-waves-assets.pages.dev/icons_character/RoverSpectroMale.png",
        model: "https://wuthering-waves-assets.pages.dev/models/Male_Rover_Model.png?raw=true"
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
                item: "Mysterious Code",
                id: 5,
                value: "5"
            },
            {
                item: "Pecok Flower",
                id: 6,
                value: "50"
            },
            {
                item: "Shell Credits",
                id: 7,
                value: "170,000"
            }
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
        base_hp: 862,
        base_atk: 35,
        base_def: 93,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 0,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 12,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
        {
            skillId: 1,
            typeName: 'Normal Attack',
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill1.webp",
            skillName: 'Wind Cutter',
            skillDescription: `<span class="Title">Basic Attack</span>
                Perform up to 4 consecutive attacks, dealing <span class="Wind">Aero DMG</span>.
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>
                Consume STA to attack the target, dealing <span class="Wind">Aero DMG</span>.<br>
                - Press <span class="Highlight">Normal Attack</span> right after casting the skill to perform <span class="Highlight">Basic Attack Stage 3</span> directly.
                <div class="gap"></div>
                <span class="Title">Heavy Attack - Razor Wind</span>
                Hold <span class="Highlight">Normal Attack</span> after casting <span class="Highlight">Basic Attack Stage 3</span>, <span class="Highlight">Dodge Counter</span>, or <span class="Highlight">Heavy Attack</span> to cast Heavy Attack <span class="Highlight">Razor Wind</span>. Consume STA to attack the target, dealing <span class="Wind">Aero DMG</span>.
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>
                Consume STA to perform Plunging Attack, dealing <span class="Wind">Aero DMG</span>.<br>
                - Press <span class="Highlight">Normal Attack</span> shortly after landing to cast <span class="Highlight">Basic Attack Stage 4</span>.<br>
                - At max Windstrings, press <span class="Highlight">Normal Attack</span> shortly after landing to cast Resonance Skill <span class="Highlight">Unbound Flow</span>.
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>
                Press <span class="Highlight">Normal Attack</span> right after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["17.76%", "19.22%", "20.68%", "22.72%", "24.17%", "25.85%", "28.18%", "30.51%", "32.84%", "35.31%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["21.66%*2", "23.43%*2", "25.21%*2", "27.69%*2", "29.47%*2", "31.51%*2", "34.35%*2", "37.19%*2", "40.03%*2", "43.05%*2"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Stage 4 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["38.59%", "41.76%", "44.92%", "49.35%", "52.51%", "56.15%", "61.21%", "66.28%", "71.34%", "76.72%"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Heavy Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["9.01%*3", "9.75%*3", "10.49%*3", "11.52%*3", "12.26%*3", "13.11%*3", "14.29%*3", "15.48%*3", "16.66%*3", "17.91%*3"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Razor Wind DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["18.30%+22.36%", "19.80%+24.20%", "21.30%+26.03%", "23.40%+28.60%", "24.90%+30.43%", "26.62%+32.54%", "29.02%+35.47%", "31.42%+38.40%", "33.82%+41.34%", "36.37%+44.46%"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Mid-air Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["70.80%", "76.61%", "82.42%", "90.54%", "96.35%", "103.03%", "112.32%", "121.60%", "130.89%", "140.76%"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["63.09%+1.00%*25", "68.27%+1.09%*25", "73.44%+1.17%*25", "80.68%+1.28%*25", "85.85%+1.37%*25", "91.80%+1.46%*25", "100.08%+1.59%*25", "108.36%+1.72%*25", "116.63%+1.85%*25", "125.43%+1.99%*25"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Razor Wind STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
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
                }
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconFengzhu/SP_IconFengzhuB1.webp",
            skillName: 'Illusion Breaker',
            skillDescription: `<span class="Title">Awakening Gale</span>
                Jump up into the mid-air and slash the target, dealing <span class="Wind">Aero DMG</span>.
                <div class="gap"></div>
                <span class="Title">Skyfall Severance</span>
                While in mid-air, press <span class="Highlight">Resonance Skill</span> to deal <span class="Wind">Aero DMG</span>, which removes all stacks of Spectro Frazzle, Havoc Bane, Fusion Burst, Glacio Chafe, and Electro Flare from the target hit and inflicts 1 stack of Aero Erosion for each stack removed.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Awakening Gale DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["33.42%+50.13%", "36.16%+54.24%", "38.90%+58.35%", "42.74%+64.11%", "45.48%+68.22%", "48.63%+72.94%", "53.02%+79.52%", "57.40%+86.10%", "61.78%+92.67%", "66.44%+99.66%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Skyfall Severance DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["11.76%*3+52.89%", "12.72%*3+57.23%", "13.69%*3+61.57%", "15.03%*3+67.64%", "16.00%*3+71.97%", "17.11%*3+76.96%", "18.65%*3+83.90%", "20.19%*3+90.84%", "21.73%*3+97.78%", "23.37%*3+105.15%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Awakening Gale Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["3s", "3s", "3s", "3s", "3s", "3s", "3s", "3s", "3s", "3s"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Skyfall Severance Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Awakening Gale Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Skyfall Severance Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 6
                },
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconFengzhu/SP_IconFengzhuC1.webp",
            skillName: 'Omega Storm',
            skillDescription: `Unleash the power of the Eye of Tempest, dealing <span class="Wind">Aero DMG</span> and healing all nearby Resonators in the team.<br>
            Can be cast in mid-air close to the ground.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["270.00%", "292.14%", "314.28%", "345.28%", "367.42%", "392.88%", "428.31%", "463.73%", "499.15%", "536.79%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Healing",
                    type: "Healing",
                    skillDetailNum: [{
                        values: ["1100+36.67% ATK", "1232+38.13% ATK", "1375+39.60% ATK", "1540+41.80% ATK", "1738+44.73% ATK", "1925+47.67% ATK", "1958+53.17% ATK", "2002+59.40% ATK", "2035+66.00% ATK", "2090+77.00% ATK"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["24s", "24s", "24s", "24s", "24s", "24s", "24s", "24s", "24s", "24s"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Resonance Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["150", "150", "150", "150", "150", "150", "150", "150", "150", "150"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 5
                },
            ]
        },
        {
            skillId: 4,
            typeName: 'Intro Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconFengzhu/SP_IconFengzhuQTE.webp",
            skillName: 'Relentless Squall',
            skillDescription: `Deal <span class="Wind">Aero DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["40.00%+60.00%", "43.28%+64.92%", "46.56%+69.84%", "51.16%+76.73%", "54.44%+81.65%", "58.21%+87.31%", "63.46%+95.18%", "68.70%+103.05%", "73.95%+110.93%", "79.53%+119.29%"]
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
            skillName: 'Storm\'s Echo',
            skillDescription: `Grant <span class="Highlight">Aeolian Realm</span> to all nearby Resonators in the team for {0}s. Aeolian Realm effect:<br>
            - Upon hitting a target, increase the maximum stack of Aero Erosion the target can receive by {1} for {2}s. This effect is not stackable.`,
            skillDetailNum: ["30", "3", "10"],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconFengzhu/SP_IconFengzhuY.webp",
            skillName: 'Cycle of Wind',
            skillDescription: `<span class="Title">Mid-air Attack - Cloudburst Dance</span>
                Perform up to 2 consecutive attacks, dealing <span class="Wind">Aero DMG</span> (considered Resonance Skill DMG) and healing all nearby Resonators in the team. Cast through the following 3 ways:<br>
                - Press <span class="Highlight">Normal Attack</span> right after casting Resonance Skill <span class="Highlight">Awakening Gale</span>.<br>
                - Press <span class="Highlight">Normal Attack</span> right after casting <span class="Highlight">Intro Skill</span>.<br>
                - Press <span class="Highlight">Normal Attack</span> right after casting Heavy Attack <span class="Highlight">Razor Wind</span>.<br>
                When casting Mid-air Attack <span class="Highlight">Cloudburst Dance</span>, hold <span class="Highlight">Normal Attack</span> to perform <span class="Highlight">Mid-air Attack</span>.
                <div class="gap"></div>
                <span class="Title">Resonance Skill - Unbound Flow</span>
                At max Windstrings, Resonance Skill <span class="Highlight">Awakening Gale</span> becomes Resonance Skill <span class="Highlight">Unbound Flow</span>: Perform up to 2 consecutive attacks. Each attack consumes 60 Windstrings, dealing <span class="Wind">Aero DMG</span>, considered Resonance Skill DMG.<br>
                Switching to another Resonator after Stage 1 automatically triggers Stage 2 of this skill.
                <div class="gap"></div>
                <span class="Title">Windstring</span>
                Rover can hold up to 120 Windstrings.<br>
                Each stage of Mid-air Attack <span class="Highlight">Cloudburst Dance</span> restores 25 Windstrings on hit.<br>
                Casting <span class="Highlight">Intro Skill</span> restores 20 Windstrings.<br>
                Hitting a target with <span class="Highlight">Basic Attack Stage 3 or 4</span> or <span class="Highlight">Dodge Counter</span> restores 10 Windstrings.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Cloudburst Dance Stage 1 DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["64.79%", "70.10%", "75.41%", "82.85%", "88.16%", "94.27%", "102.77%", "111.27%", "119.77%", "128.80%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Cloudburst Dance Stage 2 DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["71.16%", "76.99%", "82.83%", "91.00%", "96.83%", "103.54%", "112.88%", "122.21%", "131.55%", "141.47%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Cloudburst Dance Healing",
                    type: "Healing",
                    skillDetailNum: [{
                        values: ["330+11.00% ATK", "369+11.44% ATK", "412+11.88% ATK", "462+12.54% ATK", "521+13.42% ATK", "577+14.30% ATK", "587+15.95% ATK", "600+17.82% ATK", "610+19.80% ATK", "627+23.10% ATK"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Unbound Flow Stage 1 DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["17.26%*5", "18.67%*5", "20.09%*5", "22.07%*5", "23.48%*5", "25.11%*5", "27.37%*5", "29.63%*5", "31.90%*5", "34.30%*5"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Unbound Flow Stage 2 DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["363.68%", "393.50%", "423.32%", "465.07%", "494.90%", "529.19%", "576.90%", "624.62%", "672.33%", "723.03%"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Unbound Flow Concerto Regen per Stage",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 6
                }
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Sand in the Storm',
            skillDescription: `Casting Intro Skill <span class="Highlight">Relentless Squall</span> increases ATK by {0} for 10s.`,
            skillDetailNum: ["20%"],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Boundless Winds',
            skillDescription: `Increase Healing from Resonance Liberation <span class="Highlight">Omega Storm</span> by {0}.`,
            skillDetailNum: ["20%"],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Storm Subsides in the Void",
            description: `Casting Mid-air Attack <span class="Highlight">Cloudburst Dance</span> enhances Rover's resistance to interruption for {0}s.`,
            detailNum: ["3"],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FengzhuM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "Glimmers Fade into the Dark",
            description: `Casting Resonance Skill <span class="Highlight">Unbound Flow</span> continuously restores HP for the Resonator on the field by {0} of Rover's ATK every {1}s for {2}s. When the Resonator on the field has an HP lower than {3}, immediately restore {4} of their lost HP. This restoration effect can be triggered once every {5}s and will not be affected by any Healing Bonus.`,
            detailNum: ["20%", "3", "30", "35%", "10%", "10"],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FengzhuM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "Illusions Collapse in a Grip",
            description: `Aero DMG Bonus is increased by {0}.`,
            detailNum: ["15%"],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FengzhuM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "Boundaries Shatter in an Instant",
            description: `Casting Mid-air Attack <span class="Highlight">Cloudburst Dance</span> increases Resonance Skill DMG Bonus by {0} for {1}s.`,
            detailNum: ["15%", "5"],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FengzhuM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "Life and Death Intertwine",
            description: `The DMG Multiplier of Resonance Liberation <span class="Highlight">Omega Storm</span> is increased by {0}.`,
            detailNum: ["20%"],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FengzhuM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "All Crumble in the Wind",
            description: `The DMG Multiplier of Resonance Skill <span class="Highlight">Unbound Flow</span> is increased by {0}.`,
            detailNum: ["30%"],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_FengzhuM6_UI.webp"
        },
    ]
}