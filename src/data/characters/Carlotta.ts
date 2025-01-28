import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Carlotta: WWCharacter = {
    name: "Carlotta",
    charaId: 1107,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Glacio",
    weapon: "Pistols",
    bio: `Carlotta, the second daughter of the esteemed Montelli family, embodies innate nobility and a refined appreciation for art. Her elegance is matched by her unconventional spirit, unshackled by tradition.
To ensure her family's future, she alternates between dual roles, addressing delicate "troubles" behind the scenes.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_kelaita_UI.webp",
        icon_sq: "https://static.wikia.nocookie.net/wutheringwaves/images/0/06/Carlotta_Icon.png",
        model: "https://static.wikia.nocookie.net/wutheringwaves/images/d/da/Carlotta_Full_Sprite.png"
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
                item: "Platinum Core",
                id: 5,
                value: "46"
            },
            {
                item: "Sword Acorus",
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
        base_hp: 996,
        base_atk: 37,
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
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconNor/SP_IconNorGun.webp",
            skillName: 'Silent Execution',
            skillDescription: `<span class="Title">Basic Attack</span>
                Perform up to 2 consecutive strikes, dealing <span class="Ice">Glacio DMG</span>.<br>
                <div class="gap"></div>
                <span class="Title">Basic Attack - <span class="Highlight">Necessary Measures</span></span>\n
                With Moldable Crystals, Carlotta's <span class="Highlight">Basic Attack</span> is replaced with <span class="Highlight">Necessary Measures</span>.<br>
                Chain up to 3 strikes, dealing <span class="Ice">Glacio DMG</span>. Each strike of <span class="Highlight">Necessary Measures</span> consumes 1 Moldable Crystal.
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Deliver a charged attack at the target at the cost of STA, dealing <span class="Ice">Glacio DMG</span>.<br>
                <div class="gap"></div>
                <span class="Title">Heavy Attack - <span class="Highlight">Containment Tactics</span></span>\n
                When Carlotta's Substance is full, her <span class="Highlight">Heavy Attack</span> will be replaced with <span class="Highlight">Containment Tactics</span>: consume all Substance to deal <span class="Ice">Glacio DMG</span> and reduce the cooldown of Resonance Skill <span class="Highlight">Art of Violence</span> by 6s.<br>
                <div class="gap"></div>
                <span class="Title">Mid-air Attacks</span>\n
                Perform a Plunging Attack at the cost of STA, dealing <span class="Ice">Glacio DMG</span>. Using <span class="Highlight">Basic Attack</span> shortly after the landing will cast <span class="Highlight">Customary Greetings</span>.<br>
                <div class="gap"></div>
                <span class="Title">Mid-air Attacks - <span class="Highlight">Customary Greetings</span></span>\n
                Flip over the target and deliver a surprise shot, dealing <span class="Ice">Glacio DMG</span>.<br>
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Press <span class="Highlight">Normal Attack</span> shortly after a successful <span class="Highlight">Dodge </span>to deliver a riposte shot, dealing <span class="Ice">Glacio DMG</span>. This consumes 1 Moldable Crystal.
                <div class="gap"></div>
                `,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Basic Attack Stage 1",
                    type: "Basic",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 1
                }, {
                    attributeName: "Basic Attack Stage 2",
                    type: "Basic",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 2
                }, {
                    attributeName: "Necessary Measures Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 3
                }, {
                    attributeName: "Necessary Measures Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 4
                }, {
                    attributeName: "Necessary Measures Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 5
                }, {
                    attributeName: "Heavy Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 6
                }, {
                    attributeName: "Containment Tactics DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 7
                }, {
                    attributeName: "Mid-air Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 8
                }, {
                    attributeName: "Customary Greetings DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 9
                }, {
                    attributeName: "Dodge Counter DMG",
                    type: "",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 10
                }, {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 11
                }, {
                    attributeName: "Mid-air Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 12
                }, {
                    attributeName: "Containment Tactics Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 13
                },
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconKelaita/SP_IconKelaitaB1.webp",
            skillName: 'Art of Violence',
            skillDescription: `
                Deal <span class="Ice">Glacio DMG</span> and inflict  <span class="Highlight">Dispersion</span> on the target. Press <span class="Highlight">Resonance Skill</span> again shortly after to cast <span class="Highlight">Chromatic Splendor</span>.
                <div class="gap"></div>
                <span class="Title"> <span class="Highlight">Dispersion</span></span>\n
                Targets with Dispersion are immobilized for 1.5s.
                <div class="gap"></div>
                <span class="Title">Chromatic Splendor</span>\n
                Consume all Moldable Crystals and deal <span class="Ice">Glacio DMG</span>.<br>
                The Resonance Skill enters cooldown after a while if <span class="Highlight">Chromatic Splendor</span> is not cast or Carlotta is switched off the field.
                <div class="gap"></div>`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 1
                }, {
                    attributeName: "Chromatic Splendro DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 2
                }, {
                    attributeName: "Cooldown",
                    type: "Skill",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 3
                }, {
                    attributeName: "Concerto Regen",
                    type: "Skill",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 4
                }, {
                    attributeName: "Chromatic Splendor Concerto Regen",
                    type: "Skill",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 5
                },

            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconKelaita/SP_IconKelaitaC1.webp",
            skillName: 'Era of New Wave',
            skillDescription: `
            Deal <span class="Ice">Glacio DMG</span> to all targets in an area (considered Resonance Skill DMG) and inflict <span class="Highlight">Deconstruction</span> on targets hit, then activate <span class="Highlight">Twilight Tango</span>.<br>
            Can be cast in mid-air close to the ground.
            <div class="gap"></div>
            <span class="Title">Deconstruction</span>\n
            Dealing DMG to targets inflicted with <span class="Highlight">Deconstruction</span> ignores 18% of their DEF.
            <div class="gap"></div>
            <span class="Title">Twilight Tango</span>\n
            While in <span class="Highlight">Twilight Tango</span>, press <span class="Highlight">Normal Attack</span> or <span class="Highlight">Resonance Liberation</span> to cast <span class="Highlight">Death Knell</span>.<br>
            Each <span class="Highlight">Death Knell</span> grants 1 Meta Vector.<br>
            With 4 Meta Vectors, press <span class="Highlight">Normal Attack</span> or <span class="Highlight">Resonance Liberation</span> to cast <span class="Highlight">Fatal Finale</span>.<br>
            - All Substance is removed when activating and ending <span class="Highlight">Twilight Tango</span>. Cannot perform Basic Attack <span class="Highlight">Necessary Measures</span>, Heavy Attack <span class="Highlight">Containment Tactics</span>, and Heavy Attack <span class="Highlight">Imminent Oblivion</span> while in <span class="Highlight">Twilight Tango</span>.
            <div class="gap"></div>
            <span class="Title">Death Knell</span>\n
            Carlotta fires powerful shots with her musket and summons 4 crystal shards to attack the target, dealing <span class="Ice">Glacio DMG</span>, considered Resonance Skill DMG.<br>
            - Carlotta moves in the direction of the movement input with each shot of <span class="Highlight">Death Knell</span>.
            <div class="gap">Moldbale Crystal</div>
            <span class="Title">Fatal Finale</span>\n
            Deal <span class="Ice">Glacio DMG</span> to an area, considered <span class="Highlight">Resonance Skill</span> DMG.<br>
            - <span class="Highlight">Twilight Tango</span> ends after casting <span class="Highlight">Fatal Finale</span>.
            <div class="gap"></div>
            `,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 1
                },{
                    attributeName: "Death Knell DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 2
                },{
                    attributeName: "Fatal Finale DMG",
                    type: "Liberaion",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 3
                },{
                    attributeName: "Skill Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 4
                },{
                    attributeName: "Resonance Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 5
                },{
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 6
                },{
                    attributeName: "Death Knell Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 7
                },{
                    attributeName: "Fatal Finale Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 8
                },{
                    attributeName: "Deconstruction Duration",
                    type: "",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 9
                },
                {
                    attributeName: "Twilight Tango Duration",
                    type: "",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 10
                },
            ]
        },
        {
            skillId: 4,
            typeName: 'Intro Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconKelaita/SP_IconKelaitaQTE.webp",
            skillName: 'Wintertime Aria',
            skillDescription: `Attack the target, dealing <span class="Ice">Glacio DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill Damage",
                    type: "",
                    skillDetailNum: [{
                        values: []
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
            skillName: 'Closing Remark',
            skillDescription: `Attack the target, dealing <span class="Ice">Glacio DMG</span> equal to {0} of Carlotta's ATK.`,
            skillDetailNum: ["794.2%"],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconKelaita/SP_IconKelaitaY.webp",
            skillName: 'Lethal Repertoire',
            skillDescription: `<span class="Title">Heavy Attack - <span class="Highlight">Imminent Oblivion</span></span>\n
            Carlotta activates <span class="Highlight">Tinted Crystal</span> every 22s.<br>
            When Substance is full and <span class="Highlight">Tinted Crystal</span> is activated, hold <span class="Highlight">Normal Attack</span> to consume all Substance and cast Heavy Attack <span class="Highlight">Imminent Oblivion</span>, after which <span class="Highlight">Tinted Crystal</span> enters cooldown.<br>
            Deal <span class="Ice">Glacio DMG</span> (considered Resonance Skill DMG), and reduce the cooldown of Resonance Skill <span class="Highlight">Art of Violence</span> by 6s.
            <div class="gap"></div>
            <span class="Title">Final Blow</span>\n
            When Substance is full, enter the <span class="Highlight">Final Bow</span> state.<br>
            Increase the DMG Multiplier of Resonance Liberation <span class="Highlight">Era of New Wave</span>, Resonance Liberation <span class="Highlight">Death Knell</span>, and Resonance Liberation <span class="Highlight">Fatal Finale</span> by 80%. This effect ends when Carlotta is switched off the field during <span class="Highlight">Twilight Tango</span> or when <span class="Highlight">Twilight Tango</span> ends.
            <div class="gap"></div>
            <span class="Title">Substance</span>\n
            Carlotta can hold up to 120 points of Substance.<br>
            Cannot gain Substance while in <span class="Highlight">Twilight Tango</span> triggered by <span class="Highlight">Resonance Liberation</span>.<br>
            Restore 30 points of Substance upon casting Intro Skill <span class="Highlight">Wintertime Aria</span>.<br>
            Restore 10 points of Substance for every 1 Moldable Crystal consumed upon casting Resonance Skill <span class="Highlight">Chromatic Splendor</span>.<br>
            Restore 10 points of Substance for every 1 Moldable Crystal consumed upon casting Basic Attack <span class="Highlight">Necessary Measures</span>.<br>
            Consume 1 Moldable Crystal and restore 10 points of Substance upon casting <span class="Highlight">Dodge Counter</span>.
            <div class="gap"></div>
            <span class="Title">Moldable Crystal</span>\n
            Carlotta can hold up to 6 Moldable Crystals.<br>
            Cannot gain Moldable Crystal while in <span class="Highlight">Twilight Tango</span> triggered by <span class="Highlight">Resonance Liberation</span>.<br>
            Restore 3 Moldable Crystals upon casting <span class="Highlight">Basic Attack Stage 2</span>.<br>
            Restore 3 Moldable Crystals upon casting <span class="Highlight">Heavy Attack</span>.<br>
            Restore 3 Moldable Crystals upon casting Mid-air Attack <span class="Highlight">Customary Greetings</span>.<br>
            Restore 3 Moldable Crystals upon casting Intro Skill <span class="Highlight">Wintertime Aria</span>.<br>
            Restore 3 Moldable Crystals upon casting Resonance Skill <span class="Highlight">Art of Violence</span>.<br>
            Restore 3 Moldable Crystals upon a successful Dodge.
            <div class="gap"></div>
            `,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Imminent Oblivion DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 1
                }, {
                    attributeName: "Tinted Crystal Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 2
                }, {
                    attributeName: "Imminent Oblivion Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 3
                }, {
                    attributeName: "Moldable Crystal Duration",
                    type: "",
                    skillDetailNum: [{
                        values: []
                    }],
                    index: 4
                },
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Flawless Purity',
            skillDescription: `After casting Resonance Skill <span class="Highlight">Chromatic Splendor</span>, Carlotta can perform <span class="Highlight">Mid-air Attacks</span> while being immune to any DMG or interruptions before the Mid-air Attack deals DMG.<br>
            When Carlotta is on the team, the active Resonator's Flight STA cost is reduced by {0}.`,
            skillDetailNum: ["20%"],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Ars Gratia Artis',
            skillDescription: `Intro Skill <span class="Highlight">Wintertime Aria</span>, Resonance Skill <span class="Highlight">Chromatic Splendor</span>, Resonance Liberation <span class="Highlight">Death Knell</span>, and Heavy Attack <span class="Highlight">Imminent Oblivion</span> can inflict <span class="Highlight">Deconstruction</span>.`,
            skillDetailNum: [],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Beauty Blazes Brightest Before It Fades",
            description: `When Carlotta deals DMG to a target inflicted with <span class="Highlight">Deconstruction</span>, the Crit. Rate of this instance of DMG is increased by {0}. When Resonance Skill <span class="Highlight">Chromatic Splendor</span> hits a target inflicted with <span class="Highlight">Dispersion</span>, Carlotta additionally restores {1} points of Substance.`,
            detailNum: ["12.5%", "30"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Crit. Rate"],
            sequenceBuff: [12.5],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KelaitaM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "Fallen Petals Give Life to New Blooms",
            description: `The DMG Multiplier of Resonance Liberation <span class="Highlight">Fatal Finale</span> is increased by {0}.`,
            detailNum: ["126%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonance Liberation Damage Bonus"],
            sequenceBuff: [126],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KelaitaM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "Adelante, Cortado, Spinning in Grace",
            description: `Enable Outro Skill <span class="Highlight">Kaleidoscope Sparks</span>: Deal 1 additional strike at the end of Outro Skill <span class="Highlight">Closing Remark</span>, dealing <span class="Ice">Glacio DMG</span> equal to {0} of Carlotta's ATK. The DMG Multiplier of Resonance Skill <span class="Highlight">Art of Violence</span> and Resonance Skill <span class="Highlight">Chromatic Splendor</span> is increased by {1}.`,
            detailNum: ["1032.18%", "93%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Closing Remark", "Resonance Skill Damage Bonus"],
            sequenceBuff: [1032.18, 93],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KelaitaM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "Yesterday's Raindrops Make Finest Wine",
            description: `Casting Heavy Attack, Heavy Attack <span class="Highlight">Containment Tactics</span>, and Heavy Attack <span class="Highlight">Imminent Oblivion</span> grants all Resonators in the team {0} Resonance Skill DMG Bonus for 30s.`,
            detailNum: ["25%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonance Skill Damage Bonus"],
            sequenceBuff: [25],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KelaitaM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "Toast to Past, Today, and Every Day to Come",
            description: `The DMG Multiplier of Heavy Attack <span class="Highlight">Imminent Oblivion</span> is increased by {0}.`,
            detailNum: ["47%"],
            sequenceBuffType: "Skill Buff",
            sequenceBuffAtrribute: ["Heavy Attack Damage Bonus"],
            sequenceBuff: [47],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KelaitaM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "Bloom For You Thousand Times Over",
            description: `Shots of Resonance Liberation <span class="Highlight">Death Knell</span> deal higher DMG and shoot out double the number of crystal shards, representing a total increase of {0} in the DMG Multiplier of Resonance Liberation <span class="Highlight">Death Knell</span>.<br>
            Shots of Resonance Liberation <span class="Highlight">Death Knell</span> inflict <span class="Highlight">Scattering</span> on targets when hit, during which the target is immobilized. This effect is removed after 1.5s or when the target receives DMG.`,
            detailNum: ["186.6%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonation Liberation Damage Bonus"],
            sequenceBuff: [186.6],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KelaitaM6_UI.webp"
        }
    ]
}