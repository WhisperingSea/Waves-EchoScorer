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
        model: "https://i.imgur.com/hV6S0Bo.png" //TODO temp photo?
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
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill3.webp",
            skillName: 'Quadruple Time Steps',
            skillDescription: `<span class="Title">Basic Attack</span>
                
                <div class="gap"></div>`,//TODO missing
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 1
                },
                {
                    attributeName: "Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 2
                },
                {
                    attributeName: "Stage 4 DMG",
                    type: "",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 4
                },
                {
                    attributeName: "Heavy Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 5
                },
                {
                    attributeName: "Aimed Shot DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 6
                },
                {
                    attributeName: "Fully Charged Aimed Shot DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 7
                },
                {
                    attributeName: "Mid-air Attack Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 8
                },
                {
                    attributeName: "Mid-air Attack Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 9
                },
                {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 10
                },
                {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 11
                },
                {
                    attributeName: "Mid-air Attack Stage 1 STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 12
                },
                {
                    attributeName: "Mid-air Attack Stage 2 STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 13
                }
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "",
            skillName: '',
            skillDescription: `<span class="Title">Basic Attack</span>
                        <div class="gap"></div>`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "",
                    type: "",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 1
                }
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "",
            skillName: '',
            skillDescription: `<span class="Title">Basic Attack</span>
                        <div class="gap"></div>`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "",
                    type: "",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 1
                }
            ]
        },
        {
            skillId: 4,
            typeName: 'Intro Skill',
            skillImg: "",
            skillName: '',
            skillDescription: `<span class="Title">Basic Attack</span>
                        <div class="gap"></div>`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "",
                    type: "",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 1
                }
            ]
        },
        {
            skillId: 5,
            typeName: 'Outro Skill',
            skillName: '',
            skillDescription: ``,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "",
            skillName: '',
            skillDescription: `<span class="Title">Basic Attack</span>
                        <div class="gap"></div>`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "",
                    type: "",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 1
                }
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: '',
            skillDescription: ``,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: '',
            skillDescription: ``,
            skillDetailNum: [""],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "",
            description: ``,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: ""
        },
        {
            node: "Sequence Node 2",
            name: "",
            description: ``,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: ""
        },
        {
            node: "Sequence Node 3",
            name: "",
            description: ``,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: ""
        },
        {
            node: "Sequence Node 4",
            name: "",
            description: ``,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: ""
        },
        {
            node: "Sequence Node 5",
            name: "",
            description: ``,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: ""
        },
        {
            node: "Sequence Node 6",
            name: "",
            description: ``,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: ""
        },
    ]
}