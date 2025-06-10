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
        model: "//TODO"
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