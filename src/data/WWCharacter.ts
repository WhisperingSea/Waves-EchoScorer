import { Aalto } from "./characters/Aalto";
import { Baizhi } from "./characters/Baizhi";
import { Brant } from "./characters/Brant";
import { Calcharo } from "./characters/Calcharo";
import { Camellya } from "./characters/Camellya";
import { Cantarella } from "./characters/Cantarella";
import { Carlotta } from "./characters/Carlotta";
import { Changli } from "./characters/Changli";
import { Chixia } from "./characters/Chixia";
import { Ciaccona } from "./characters/Ciaccona";
import { Danjin } from "./characters/Danjin";
import { Encore } from "./characters/Encore";
import { Jianxin } from "./characters/Jianxin";
import { Jinhsi } from "./characters/Jinhsi";
import { Jiyan } from "./characters/Jiyan";
import { Lingyang } from "./characters/Lingyang";
import { Lumi } from "./characters/Lumi";
import { Mortefi } from "./characters/Mortefi";
import { Phoebe } from "./characters/Phoebe";
import { Roccia } from "./characters/Roccia";
import { RoverAero } from "./characters/Rover-Aero"
import { RoverHavoc } from "./characters/Rover-Havoc";
import { RoverSpectro } from "./characters/Rover-Spectro";
import { Sanhua } from "./characters/Sanhua";
import { Shorekeeper } from "./characters/Shorekeeper";
import { Taoqi } from "./characters/Taoqi";
import { Verina } from "./characters/Verina";
import { XiangliYao } from "./characters/XiangliYao";
import { Yangyang } from "./characters/Yangyang";
import { Yinlin } from "./characters/Yinlin";
import { Youhu } from "./characters/Youhu";
import { Yuanwu } from "./characters/Yuanwu";
import { Zani } from "./characters/Zani";
import { Zhezhi } from "./characters/Zhezhi";

export interface WWCharacter {
    name: string;
    charaId: number;
    rarity: {
        alt: string;
        img: string
    };
    element: string;
    weapon: string;
    bio: string;
    images: {
        portrait: string;
        icon_sq: string;
        icon_cr?: string;
        sigil?: string;
        model: string;
    };
    asension: {
        charaAsension: {
            item: string;
            id: number;
            value: string;
        }[];
        forteAsension: {
            item: string;
            id: number;
            value: string;
        }[];
    };
    stats: {
        base_hp: number;
        base_atk: number;
        base_def: number;
        base_crit: number;
        base_critdmg: number;
        base_healing: number;
        max_energy: number;
        bonus_ele: number;
        bonus_atk: number;
        bonus_def: number;
        bonus_heal: number;
        bonus_crit: number;
        bonus_critdmg: number;
        bonus_hp: number;
    };
    skills: {
        skillId: number;
        skillImg?: string;
        typeName: string;
        skillName: string;
        skillDescription: string;
        skillDetailNum?: string[];
        skillBuffAtrribute?: string[];
        skillBuff?: number[];
        multipliers: {
            attributeName: string;
            index: number;
            type: string
            skillDetailNum?: {
                values: string[];
            }[];
        }[];
    }[];
    sequences: {
        node: string;
        name: string;
        description: string;
        detailNum: string[];
        itemImg: string;
        sequenceBuffType: string;
        sequenceBuffAtrribute: string[];
        sequenceBuff: number[];
        stacks?: number
    }[];
}


export const WWCharacterData: WWCharacter[] = [
    RoverSpectro,
    RoverHavoc,
    Baizhi,
    Sanhua,
    Lingyang,
    Zhezhi,
    Youhu,
    Encore,
    Chixia,
    Mortefi,
    Changli,
    Calcharo,
    Yinlin,
    Yuanwu,
    XiangliYao,
    Jianxin,
    Yangyang,
    Aalto,
    Jiyan,
    Verina,
    Jinhsi,
    Shorekeeper,
    Taoqi,
    Danjin,
    Camellya,
    Lumi,
    Carlotta,
    Roccia,
    Phoebe,
    Brant,
    RoverAero,
    Cantarella,
    Zani,
    Ciaccona
]