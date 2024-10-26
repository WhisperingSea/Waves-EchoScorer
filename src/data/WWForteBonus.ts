export interface WWForteBonusType {
    name: string;
    Id: number;
    skillBonuses?: {
        id: number;
        type: string;
        name: string;
        effect: string;
        values: number[];
    }[];
    sequenceBonuese?: {
        id: number;
        node: string;
        name: string;
        effect: string;
        values: number[];
    }[],
    minorForte: {
        id: number, 
        type: string;
        value: number;
    }[];
}[]

export const WWForteBonus: WWForteBonusType[] = [
    {
        name: "Rover-Spectro",
        Id: 1001,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Spectro Damage Bonus`, value: 1.8 },
            { id: 6, type: `Spectro Damage Bonus`, value: 1.8 },
            { id: 7, type: `Spectro Damage Bonus`, value: 4.2 },
            { id: 8, type: `Spectro Damage Bonus`, value: 4.2 }
        ]
    },
    {
        name: "Rover-Havoc",
        Id: 1002,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Havoc Damage Bonus`, value: 1.8 },
            { id: 6, type: `Havoc Damage Bonus`, value: 1.8 },
            { id: 7, type: `Havoc Damage Bonus`, value: 4.2 },
            { id: 8, type: `Havoc Damage Bonus`, value: 4.2 }
        ]
    },
    {
        name: "Baizhi",
        Id: 1101,
        minorForte: [
            { id: 1, type: "HP", value: 1.8 },
            { id: 2, type: "HP", value: 1.8 },
            { id: 3, type: "HP", value: 4.2 },
            { id: 4, type: "HP", value: 4.2 },
            { id: 5, type: "Bonus Healing", value: 1.8 },
            { id: 6, type: "Bonus Healing", value: 1.8 },
            { id: 7, type: "Bonus Healing", value: 4.2 },
            { id: 8, type: "Bonus Healing", value: 4.2 }
        ]
    },
    {
        name: "Sanhua",
        Id: 1102,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Glacio Damage Bonus`, value: 1.8 },
            { id: 6, type: `Glacio Damage Bonus`, value: 1.8 },
            { id: 7, type: `Glacio Damage Bonus`, value: 4.2 },
            { id: 8, type: `Glacio Damage Bonus`, value: 4.2 }
        ]
    },
    {
        name: "Lingyang",
        Id: 1103,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Glacio Damage Bonus`, value: 1.8 },
            { id: 6, type: `Glacio Damage Bonus`, value: 1.8 },
            { id: 7, type: `Glacio Damage Bonus`, value: 4.2 },
            { id: 8, type: `Glacio Damage Bonus`, value: 4.2 }
        ]
    },
    {
        name: "Zhezhi",
        Id: 1104,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: "Crit. Rate", value: 1.2 },
            { id: 6, type: "Crit. Rate", value: 1.2 },
            { id: 7, type: "Crit. Rate", value: 2.8 },
            { id: 8, type: "Crit. Rate", value: 2.8 }
        ]
    },
    {
        name: "Youhu",
        Id: 1105,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: "Crit. Rate", value: 1.2 },
            { id: 6, type: "Crit. Rate", value: 1.2 },
            { id: 7, type: "Crit. Rate", value: 2.8 },
            { id: 8, type: "Crit. Rate", value: 2.8 }
        ]
    },
    {
        name: "Encore",
        Id: 1201,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Fusion Damage Bonus`, value: 1.8 },
            { id: 6, type: `Fusion Damage Bonus`, value: 1.8 },
            { id: 7, type: `Fusion Damage Bonus`, value: 4.2 },
            { id: 8, type: `Fusion Damage Bonus`, value: 4.2 }
        ]
    },
    {
        name: "Chixia",
        Id: 1202,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Fusion Damage Bonus`, value: 1.8 },
            { id: 6, type: `Fusion Damage Bonus`, value: 1.8 },
            { id: 7, type: `Fusion Damage Bonus`, value: 4.2 },
            { id: 8, type: `Fusion Damage Bonus`, value: 4.2 }
        ]
    },
    {
        name: "Mortefi",
        Id: 1203,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Fusion Damage Bonus`, value: 1.8 },
            { id: 6, type: `Fusion Damage Bonus`, value: 1.8 },
            { id: 7, type: `Fusion Damage Bonus`, value: 4.2 },
            { id: 8, type: `Fusion Damage Bonus`, value: 4.2 }
        ]
    },
    {
        name: "Changli",
        Id: 1204,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: "Crit. Rate", value: 1.2 },
            { id: 6, type: "Crit. Rate", value: 1.2 },
            { id: 7, type: "Crit. Rate", value: 2.8 },
            { id: 8, type: "Crit. Rate", value: 2.8 }
        ]
    },
    {
        name: "Calcharo",
        Id: 1301,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: "Crit. Damage", value: 2.4 },
            { id: 6, type: "Crit. Damage", value: 2.4 },
            { id: 7, type: "Crit. Damage", value: 5.6 },
            { id: 8, type: "Crit. Damage", value: 5.6 }
        ]
    },
    {
        name: "Yinlin",
        Id: 1302,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: "Crit. Rate", value: 1.2 },
            { id: 6, type: "Crit. Rate", value: 1.2 },
            { id: 7, type: "Crit. Rate", value: 2.8 },
            { id: 8, type: "Crit. Rate", value: 2.8 }
        ]
    },
    {
        name: "Yuanwu",
        Id: 1303,
        minorForte: [
            { id: 1, type: "DEF", value: 2.28 },
            { id: 2, type: "DEF", value: 2.28 },
            { id: 3, type: "DEF", value: 5.32 },
            { id: 4, type: "DEF", value: 5.32 },
            { id: 5, type: `Electro Damage Bonus`, value: 1.8 },
            { id: 6, type: `Electro Damage Bonus`, value: 1.8 },
            { id: 7, type: `Electro Damage Bonus`, value: 4.2 },
            { id: 8, type: `Electro Damage Bonus`, value: 4.2 }
        ]
    },
    {
        name: "Xiangli-Yao",
        Id: 1304,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: "Crit. Damage", value: 2.4 },
            { id: 6, type: "Crit. Damage", value: 2.4 },
            { id: 7, type: "Crit. Damage", value: 5.6 },
            { id: 8, type: "Crit. Damage", value: 5.6 }
        ]
    },
        {
        name: "Jianxin",
        Id: 1401,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: "Crit. Rate", value: 1.2 },
            { id: 6, type: "Crit. Rate", value: 1.2 },
            { id: 7, type: "Crit. Rate", value: 2.8 },
            { id: 8, type: "Crit. Rate", value: 2.8 }
        ]
    },
        {
        name: "YangYang",
        Id: 1402,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Aero Damage Bonus`, value: 1.8 },
            { id: 6, type: `Aero Damage Bonus`, value: 1.8 },
            { id: 7, type: `Aero Damage Bonus`, value: 4.2 },
            { id: 8, type: `Aero Damage Bonus`, value: 4.2 }
        ]
    },
        {
        name: "Aalto",
        Id: 1403,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Aero Damage Bonus`, value: 1.8 },
            { id: 6, type: `Aero Damage Bonus`, value: 1.8 },
            { id: 7, type: `Aero Damage Bonus`, value: 4.2 },
            { id: 8, type: `Aero Damage Bonus`, value: 4.2 }
        ]
    },
        {
        name: "Jiyan",
        Id: 1404,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: "Crit. Rate", value: 1.2 },
            { id: 6, type: "Crit. Rate", value: 1.2 },
            { id: 7, type: "Crit. Rate", value: 2.8 },
            { id: 8, type: "Crit. Rate", value: 2.8 }
        ]
    },
        {
        name: "Verina",
        Id: 1501,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: "Bonus Healing", value: 1.8 },
            { id: 6, type: "Bonus Healing", value: 1.8 },
            { id: 7, type: "Bonus Healing", value: 4.2 },
            { id: 8, type: "Bonus Healing", value: 4.2 }
        ]
    },
        {
        name: "Jinhsi",
        Id: 1502,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: "Crit. Rate", value: 1.2 },
            { id: 6, type: "Crit. Rate", value: 1.2 },
            { id: 7, type: "Crit. Rate", value: 2.8 },
            { id: 8, type: "Crit. Rate", value: 2.8 }
        ]
    },
        {
        name: "Taoqi",
        Id: 1601,
        minorForte: [
            { id: 1, type: "DEF", value: 2.28 },
            { id: 2, type: "DEF", value: 2.28 },
            { id: 3, type: "DEF", value: 5.32 },
            { id: 4, type: "DEF", value: 5.32 },
            { id: 5, type: `Havoc Damage Bonus`, value: 1.8 },
            { id: 6, type: `Havoc Damage Bonus`, value: 1.8 },
            { id: 7, type: `Havoc Damage Bonus`, value: 4.2 },
            { id: 8, type: `Havoc Damage Bonus`, value: 4.2 }
        ]
    },
            {
        name: "Danjin",
        Id: 1602,
        minorForte: [
            { id: 1, type: "ATK", value: 1.8 },
            { id: 2, type: "ATK", value: 1.8 },
            { id: 3, type: "ATK", value: 4.2 },
            { id: 4, type: "ATK", value: 4.2 },
            { id: 5, type: `Havoc Damage Bonus`, value: 1.8 },
            { id: 6, type: `Havoc Damage Bonus`, value: 1.8 },
            { id: 7, type: `Havoc Damage Bonus`, value: 4.2 },
            { id: 8, type: `Havoc Damage Bonus`, value: 4.2 }
        ]
    },
]