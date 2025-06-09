import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Ciaccona: WWCharacter = {
    name: "Ciaccona",
    charaId: 1407,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Aero",
    weapon: "Pistols",
    bio: `A wandering bard from Rinascita, Ciaccona. She sings not only for the Divinity, but also for the common folk. She records stories along her journeys, turning them into songs that evoke laughter, emotion, and tears in both the storytellers and the audience.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_xiakong_UI.webp",
        icon_sq: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_37_UI.webp",
        model: "https://i.imgur.com/hV6S0Bo.png"
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
                item: "Impure Phlogiston",
                id: 5,
                value: "25"
            },
            {
                item: "Extracted Phlogiston",
                id: 6,
                value: "28"
            },
            {
                item: "Refined Phlogiston",
                id: 7,
                value: "55"
            },
            {
                item: "Flawless Phlogiston",
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
        bonus_critdmg: 16,
        bonus_hp: 0
    },
    skills: [
        {
            skillId: 1,
            typeName: 'Normal Attack',
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill3.webp",
            skillName: 'Quadruple Time Steps',
            skillDescription: `<span class="Title">Basic Attack</span>
                Perform up to 4 consecutive attacks, dealing <span class="Wind">Aero DMG</span>. Basic Attack Stage 4 inflicts 1 stack of <span class="Highlight">Aero Erosion</span> upon the target hit.<br>
                - When the first three stages of Ciaccona's Basic Attack are interrupted by dodging, press Basic Attack in time to resume the attack cycle and cast the corresponding Basic Attack stage.<br>
                - After Basic Attack Stage 4, Ciaccona starts a <span class="Highlight">Solo Concert</span>. If Ciaccona's Basic Attack Stage 4 or <span class="Highlight">Solo Concert</span> ends early (proactively or being interrupted), an <span class="Highlight">Ensemble Sylph</span> is generated.
                <div class="gap"></div>
                <span class="Title">Solo Concert</span>
                When Ciaccona or Ensemble Sylph performs Solo Concert, they give 24% Aero DMG Bonus to all nearby Resonators in the team. This effect is not stackable.
                <div class="gap"></div>
                <span class="Title">Ensemble Sylph</span>
                Up to 2 Ensemble Sylphs may exist simultaneously.<br>
                If Ciaccona's <span class="Highlight">Basic Attack Stage 4</span> is interrupted, the Ensemble Sylphs generated will finish the attack for Ciaccona and enter <span class="Highlight">Solo Concert</span>.<br>
                If Ciaccona's <span class="Highlight">Solo Concert</span> is interrupted, the <span class="Highlight">Ensemble Sylphs</span> generated will continue the <span class="Highlight">Solo Concert</span> for Ciaccona.<br>
                Aside from the two situations mentioned above, Ensemble Sylphs generated by <span class="Highlight">Resonance Skill</span> will finish Ciaccona's current attack without entering <span class="Highlight">Solo Concert</span>.
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>
                Consume STA to jump into mid-air and attack the target, dealing <span class="Wind">Aero DMG</span>.
                <div class="gap"></div>
                <span class="Title">Aimed Attack</span>
                Press Aim to enter Aiming Mode to fire charged shots, dealing <span class="Wind">Aero DMG</span>, considered Heavy Attack DMG.
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>
                Consume STA to perform up to 2 consecutive attacks, dealing <span class="Wind">Aero DMG</span>.<br>
                Press Normal Attack after Mid-air Attack Stage 2 to cast Basic Attack Stage 4.
                <div class="gap"></div>
                <span class="Title">Dodge Counter Attack</span>
                Follow up successful <span class="Highlight">Dodges</span> with <span class="Highlight">Basic Attack</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.`,//TODO missing
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["28.70%", "31.06%", "33.41%", "36.71%", "39.06%", "41.77%", "45.53%", "49.30%", "53.06%", "57.06%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["24.60%+12.30%*2+32.80%", "26.62%+13.31%*2+35.49%", "28.64%+14.32%*2+38.18%", "31.46%+15.73%*2+41.95%", "33.48%+16.74%*2+44.64%", "35.80%+17.90%*2+47.73%", "39.03%+19.52%*2+52.04%", "42.26%+21.13%*2+56.34%", "45.48%+22.74%*2+60.64%", "48.91%+24.46%*2+65.21%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Stage 4 DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["30.75%*4", "33.28%*4", "35.80%*4", "39.33%*4", "41.85%*4", "44.75%*4", "48.78%*4", "52.82%*4", "56.85%*4", "61.14%*4"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Heavy Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["54.12%", "58.56%", "63.00%", "69.21%", "73.65%", "78.76%", "85.86%", "92.96%", "100.06%", "107.60%"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Aimed Shot DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["16.40%", "17.75%", "19.09%", "20.98%", "22.32%", "23.87%", "26.02%", "28.17%", "30.32%", "32.61%"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Fully Charged Aimed Shot DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["36.90%", "39.93%", "42.96%", "47.19%", "50.22%", "53.70%", "58.54%", "63.38%", "68.22%", "73.37%"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Mid-air Attack Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["27.88%*2", "30.17%*2", "32.46%*2", "35.66%*2", "37.94%*2", "40.57%*2", "44.23%*2", "47.89%*2", "51.55%*2", "55.43%*2"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Mid-air Attack Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["12.30%*4", "13.31%*4", "14.32%*4", "15.73%*4", "16.74%*4", "17.90%*4", "19.52%*4", "21.13%*4", "22.74%*4", "24.46%*4"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["28.76%*4", "31.12%*4", "33.48%*4", "36.78%*4", "39.13%*4", "41.85%*4", "45.62%*4", "49.39%*4", "53.16%*4", "57.17%*4"]
                    }],
                    index: 10
                },
                {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 11
                },
                {
                    attributeName: "Mid-air Attack Stage 1 STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                    }],
                    index: 12
                },
                {
                    attributeName: "Mid-air Attack Stage 2 STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                    }],
                    index: 13
                }
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconXiakong/SP_IconXiakongB1.webp",
            skillName: 'Harmonic Allegro',
            skillDescription: `Move a certain distance, dealing <span class="Wind">Aero DMG</span> and inflicting 1 stack of <span class="Highlight">Aero Erosion</span> on the target upon hit.<br>
                Press Normal Attack in time to cast Basic Attack Stage 2.<br>
                - When Ciaccona interrupts Basic Attack, Heavy Attack, Mid-air Attack, or <span class="Highlight">Solo Concert</span> with Resonance Skill, an <span class="Highlight">Ensemble Sylph</span> is generated.<br>
                - Ciaccona's Resonance Skill can be cast in mid-air.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "SKill",
                    skillDetailNum: [{
                        values: ["20.32%*4", "21.98%*4", "23.65%*4", "25.98%*4", "27.65%*4", "29.56%*4", "32.23%*4", "34.89%*4", "37.56%*4", "40.39%*4"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["10s", "10s", "10s", "10s", "10s", "10s", "10s", "10s", "10s", "10s"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                    }],
                    index: 3
                }
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconXiakong/SP_IconXiakongC1.webp",
            skillName: 'Singer\'s Triple Cadenza',
            skillDescription: `
                Ciaccona and <span class="Highlight">Ensemble Sylphs</span> perform an <span class="Highlight">Improvised Symphonic Poem</span> together, dealing <span class="Wind">Aero DMG</span> once to the nearby targets and entering Recital.
                <div class="gap"></div>
                <span class="Title">Recital</span>
                When in Recital, sound waves will periodically radiate around Ciaccona. When the sound wave overlaps with the circle indicator, press the green or yellow buttons to generate <span class="Highlight">Symphonic Poem: Tonic</span> of the corresponding color and recover a certain amount of Concerto Energy.<br>
                During Recital:<br>
                - Switching to another Resonator doesn't end Recital, but automatically generates a <span class="Highlight">Symphonic Poem: Tonic</span> matching the color of the last generated Tonic before switching. A green <span class="Highlight">Symphonic Poem: Tonic</span> is generated by default if no interaction input is given before switching to another Resonator.<br>
                - Ciaccona is immune to interruptions and takes 50% less DMG.<br>
                - Exit Recital by pressing Resonance Liberation again or switching Ciaccona back onto the field.<br>
                - <span class="Highlight">Ensemble Sylphs</span> can now directly grant Aero DMG Bonus provided by <span class="Highlight">Solo Concert</span>.
                <div class="gap"></div>
                <span class="Title">Symphonic Poem: Tonic</span>
                Green Tonic: Deal <span class="Wind">Aero DMG</span> to nearby targets and inflict a stack of <span class="Highlight">Aero Erosion</span> on targets hit.<br>
                Yellow Tonic: Deal <span class="Wind">Aero DMG</span> to nearby targets and inflict a stack of <span class="Highlight">Spectro Frazzle</span> on targets hit.
                <div class="gap"></div>`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Improvised Symphonic Poem Skill DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["553.50%", "598.89%", "644.28%", "707.82%", "753.21%", "805.40%", "878.02%", "950.64%", "1023.26%", "1100.42%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Symphonic Poem: Tonic DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["3.08%*20", "3.33%*20", "3.58%*20", "3.94%*20", "4.19%*20", "4.48%*20", "4.88%*20", "5.29%*20", "5.69%*20", "6.12%*20"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["20s", "20s", "20s", "20s", "20s", "20s", "20s", "20s", "20s", "20s"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Resonance Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
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
                {
                    attributeName: "Successful Interaction Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 6
                }
            ]
        },
        {
            skillId: 4,
            typeName: 'Intro Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconXiakong/SP_IconXiakongQTE.webp",
            skillName: 'Roaming with the Wind',
            skillDescription: `
                Attack the target to deal <span class="Wind">Aero DMG</span> and inflict a stack of <span class="Highlight">Aero Erosion</span>.<br>
                Follow up with Basic Attack in time to cast Basic Attack Stage 3.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["95.12%", "102.92%", "110.72%", "121.64%", "129.44%", "138.41%", "150.89%", "163.37%", "175.85%", "189.11%"]
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
                },
            ]
        },
        {
            skillId: 5,
            typeName: 'Outro Skill',
            skillName: 'Windcalling Tune',
            skillDescription: `<span class="Highlight">Aero Erosion</span> DMG dealt to targets near the active Resonator is Amplified by 100% for 30s.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconXiakong/SP_IconXiakongY.webp",
            skillName: 'Symphony of Wind and Verse',
            skillDescription: `<span class="Title">Heavy Attack - Quadruple Downbeat</span>
                When there are 3 segments of Musical Essence, Heavy Attack is replaced with <span class="Highlight">Heavy Attack - Quadruple Downbeat</span>.<br>
                Consume all Music Essense to shoot <span class="Highlight">Downbeat Notes</span> forward to deal <span class="Wind">Aero DMG</span>, pulling in the nearby targets and inflicting 1 stack of <span class="Highlight">Aero Erosion</span> on the target hit.<br>
                <span class="Highlight">Heavy Attack - Quadruple Downbeat</span> can be cast in mid-air close to the ground.
                <div class="gap"></div>
                <span class="Title">Musical Essence</span>
                Ciaccona can hold up to 3 segments of Musical Essence.<br>
                Casting <span class="Highlight">Basic Attack Stage 4</span> and <span class="Highlight">Intro Skill</span> recovers 1 segment of Musical Essence.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Quadruple Downbeat DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["15.80%*10+157.95%", "17.10%*10+170.91%", "18.39%*10+183.86%", "20.20%*10+201.99%", "21.50%*10+214.94%", "22.99%*10+229.84%", "25.06%*10+250.56%", "27.13%*10+271.28%", "29.21%*10+292.01%", "31.41%*10+314.03%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 2
                }
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Interlude Tune',
            skillDescription: `Casting Resonance Liberation <span class="Highlight">Singer's Triple Cadenza</span> grants Ciaccona a Shield equal to 100% of her Max HP for 4s. Switching out Ciaccona removes the Shield.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Winds of Rinascita',
            skillDescription: `Increase <span class="Highlight">Heavy Attack - Quadruple Downbeat's</span> DMG by 30%.`,
            skillDetailNum: [""],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Where Wind Sings",
            description: `Casting Resonance Skill <span class="Highlight">Harmonic Allegro</span> grants Ciaccona immunity to interruption for 3s. Casting Basic Attack increases Ciaccona's ATK by 35% for 10s.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_XiakongM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "Song of the Four Seasons",
            description: `During Resonance Liberation <span class="Highlight">Singer's Triple Cadenza</span>, Resonators in the team gain 40% Aero DMG Bonus.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_XiakongM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "Starlit Improv",
            description: `Casting <span class="Highlight">Basic Attack Stage 4</span> additionally grants 1 segment of Musical Essence. Resonance Skill <span class="Highlight">Harmonic Allegro</span> gains 1 more charge.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_XiakongM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "Toccata and Fugue",
            description: `Ciaccona ignores 45% of the targets' DEF when dealing damage with Heavy Attack <span class="Highlight">Quadruple Downbeat</span>;<br>
            Ciaccona ignores 45% of the targets' DEF when dealing Resonance Liberation DMG.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_XiakongM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "Eternal Idyll to Lasting Summer",
            description: `Gain 40% Resonance Liberation DMG Bonus;<br>
            DMG taken by Resonators within and near the range of Resonance Liberation <span class="Highlight">Singer's Triple Cadenza</span> is reduced by 30%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_XiakongM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "Unending Cadence",
            description: `When in <span class="Highlight">Solo Concert</span>, Ciaccona or <span class="Highlight">Ensemble Sylph</span> deals <span class="Wind">Aero DMG</span> equal to 220% of Ciaccona's ATK to nearby targets, considered Resonance Liberation DMG.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: ""
        },
    ]
}