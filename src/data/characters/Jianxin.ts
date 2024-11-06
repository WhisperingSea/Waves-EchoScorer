import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Jianxin: WWCharacter = {
    name: "Jianxin",
    charaId: 1401,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Aero",
    weapon: "Gauntlets",
    bio: `Born in the wilderness and raised in a Taoist sect, Jianxin has been imparted the martial arts of Fengyiquan.
Her upbringing instilled in her a pure and persistent dedication to perfecting her martial arts skills.
Now, she journeys into the secular world, eager to experience the bittersweetness of everyday life and gain a deeper understanding of the world around her.`,
    images: {
        portrait: "https://wuthering-waves-assets.pages.dev/portraits/T_IconRole_Pile_jiexin_UI.png",
        icon_sq: "https://wuthering-waves-assets.pages.dev/icons_character/Jianxin.png",
        model: "https://wuthering-waves-assets.pages.dev/models/Jianxin_Full_Sprite.png"
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
            item: "Roaring Rock Fist",
            id: 5,
            value: "46"
        },
        {
            item: "Lanternberry",
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
            item: "LF Whisperin Core",
            id: 1,
            value: "25"
        },
        {
            item: "MF Whisperin Core",
            id: 2,
            value: "28"
        },
        {
            item: "HF Whisperin Core",
            id: 3,
            value: "40"
        },
        {
            item: "FF Whisperin Core",
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
            item: "Unending Destruction",
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
        base_hp: 1129,
        base_atk: 27,
        base_def: 92,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 150,
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
                typeName: 'Basic Attack',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill4.webp",
                skillName: 'Fengyiquan',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Jianxin performs up to 4 consecutive attacks, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Jianxin consumes Stamina to attack the target, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Jianxin consumes Stamina to plunge and unleash a powerful kick, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["34.94%", "37.80%", "40.67%", "44.68%", "47.54%", "50.84%", "55.42%", "60.01%", "64.59%", "69.46%", "75.19%", "80.92%", "86.65%", "92.38%", "98.11%", "103.84%", "109.56%", "115.29%", "121.02%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["13.40%*2+40.19%", "14.50%*2+43.49%", "15.60%*2+46.78%", "17.14%*2+51.40%", "18.23%*2+54.69%", "19.50%*2+58.48%", "21.26%*2+63.76%", "23.01%*2+69.03%", "24.77%*2+74.30%", "26.64%*2+79.90%", "28.83%*2+86.49%", "31.03%*2+93.08%", "33.23%*2+99.68%", "35.43%*2+106.27%", "37.62%*2+112.86%", "39.82%*2+119.45%", "42.02%*2+126.04%", "44.21%*2+132.63%", "46.41%*2+139.22%", "48.61%*2+145.81%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["21.00%*4", "22.72%*4", "24.44%*4", "26.85%*4", "28.57%*4", "30.55%*4", "33.31%*4", "36.06%*4", "38.82%*4", "41.75%*4", "45.19%*4", "48.63%*4", "52.07%*4", "55.52%*4", "58.96%*4", "62.40%*4", "65.85%*4", "69.29%*4", "72.73%*4", "76.18%*4"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["57.04%", "61.72%", "66.39%", "72.94%", "77.62%", "83.00%", "90.48%", "97.96%", "105.45%", "113.40%", "122.75%", "132.10%", "141.46%", "150.81%", "160.16%", "169.52%", "178.87%", "188.23%", "197.58%", "206.93%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Heavy Attack Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["63.41%", "68.61%", "73.81%", "81.09%", "86.29%", "92.27%", "100.59%", "108.91%", "117.23%", "126.07%", "136.47%", "146.87%", "157.27%", "167.67%", "178.07%", "188.47%", "198.87%", "209.26%", "219.66%", "230.06%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["62.00%", "67.09%", "72.17%", "79.29%", "84.37%", "90.22%", "98.36%", "106.49%", "114.62%", "123.27%", "133.44%", "143.60%", "153.77%", "163.94%", "174.11%", "184.28%", "194.44%", "204.61%", "214.78%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Dodge Counter Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["20.54%*2+82.14%", "22.22%*2+88.87%", "23.91%*2+95.61%", "26.26%*2+105.04%", "27.95%*2+111.77%", "29.88%*2+119.52%", "32.58%*2+130.29%", "35.27%*2+141.07%", "37.96%*2+151.84%", "40.83%*2+163.29%", "44.19%*2+176.76%", "47.56%*2+190.23%", "50.93%*2+203.70%", "54.30%*2+217.17%", "57.66%*2+230.64%", "61.03%*2+244.11%", "64.40%*2+257.58%", "67.77%*2+271.05%", "71.13%*2+284.52%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Heavy Attack Stamina Consumption",
                        type: "",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        type: "",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 9
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillJianxin2.webp",
                skillName: 'Calming Air',
                skillDescription: `Hold <span class="Highlight">Resonance Skill</span> to enter <span class="Highlight">Parry Stance</span>.
                <div class="gap"></div>
                <span class="Title">Chi Counter</span>
                When Jianxin is attacked in the <span class="Highlight">Parry Stance</span>, she does not take damage and immediately performs <span class="Highlight">Chi Counter</span>, dealing <span class="Wind">Aero DMG</span>.
                <div class="gap"></div>
                <span class="Title">Chi Parry</span>
                Release the <span class="Highlight">Resonance Skill</span> button during <span class="Highlight">Parry Stance</span> to interrupt <span class="Highlight">Parry Stance</span> and perform <span class="Highlight">Chi Parry</span>, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Chi Counter Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["168.30%", "182.11%", "195.91%", "215.23%", "229.03%", "244.90%", "266.98%", "289.06%", "311.14%", "334.60%", "362.20%", "389.80%", "417.41%", "445.01%", "472.61%", "500.21%", "527.81%", "555.41%", "583.01%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Chi Parry Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["130.14%", "140.81%", "151.48%", "166.42%", "177.09%", "189.36%", "206.44%", "223.51%", "240.59%", "258.73%", "280.07%", "301.41%", "322.75%", "344.09%", "365.44%", "386.78%", "408.12%", "429.46%", "450.81%", "472.15%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Skill Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Chi Counter Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Chi Parry Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillJianxin3.webp",
                skillName: 'Purification Force Field',
                skillDescription: `Creates a strong wind field, continuously pulling targets within the wind field to the center and causing <span class="Wind">Aero DMG</span>. When the wind field disappears, it will cause <span class="Wind">Aero DMG</span> to all targets within the range again.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Resonance Liberation Continuous Damage",
                        type: "Liberation",
                        skillDetailNum: [{
                            values: ["15.00%", "16.23%", "17.46%", "19.19%", "20.42%", "21.83%", "23.80%", "25.77%", "27.74%", "29.83%", "32.29%", "34.75%", "37.21%", "39.67%", "42.13%", "44.59%", "47.05%", "49.51%", "51.97%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Resonance Liberation Explosion Damage",
                        type: "Liberation",
                        skillDetailNum: [{
                            values: ["320.00%", "346.24%", "372.48%", "409.22%", "435.46%", "465.64%", "507.62%", "549.60%", "591.59%", "636.20%", "688.68%", "741.16%", "793.64%", "846.12%", "898.60%", "951.08%", "1003.56%", "1056.04%", "1108.52%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Wind Field Duration",
                        type: "",
                        skillDetailNum: [{
                            values: ["3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12", "3.12"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Res. Energy Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillJianxin5.webp",
                skillName: 'Essence of Tao',
                skillDescription: `Pull in targets within the range, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "",
                        skillDetailNum: [{
                            values: ["17.00%*3+34.00%", "18.40%*3+36.79%", "19.79%*3+39.58%", "21.74%*3+43.48%", "23.14%*3+46.27%", "24.74%*3+49.48%", "26.97%*3+53.94%", "29.20%*3+58.40%", "31.43%*3+62.86%", "33.80%*3+67.60%", "36.59%*3+73.18%", "39.38%*3+78.75%", "42.17%*3+84.33%", "44.95%*3+89.90%", "47.74%*3+95.48%", "50.53%*3+101.06%", "53.32%*3+106.63%", "56.11%*3+112.21%", "58.89%*3+117.78%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Transcendence',
                skillDescription: `The next character (or other characters on a nearby team that activates an Outro Skill) gains {0} Resonance Liberation DMG Deepen for {1}s, or until the character is switched off field.`,
                skillDetailNum: ["38%", "14"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillJianxin4.webp",
                skillName: 'Primordial Chi Spiral',
                skillDescription: `<span class="Title">Heavy Attack: Primordial Chi Spiral</span>\n
                When "Chi" reaches max stacks, hold <span class="Highlight">Heavy Attack</span> to cast <span class="Highlight">Primordial Chi Spiral</span> and start <span class="Highlight">Zhoutian Progress</span>.\n
                <div class="gap"></div>
                <span class="Title">Zhoutian Progress</span>\n
                Jianxin's anti-interruption is increased, and her the damage taken is reduced by {0}:\n
                Jianxin continuously consumes "Chi" and casts <span class="Highlight">Chi Strike</span> to attack targets nearby, dealing <span class="Wind">Aero DMG</span>.\n
                As <span class="Highlight">Zhoutian Progress</span> accumulates, Jianxin reaches different Zhoutian and gain effects accordingly.\n
                Before Minor Zhoutian: Gain Zhoutian Progress 1 shield. When Zhoutian Progress is interrupted, cast <span class="Highlight">Pushing Punch</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.\n
                Minor Zhoutian: Gain Zhoutian Progress 2 shield and cast <span class="Highlight">Shock</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.  When <span class="Highlight">Zhoutian Progress</span> is interrupted, cast <span class="Highlight">Yielding Pull</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.\n
                Major Zhoutian: Inner: Gain Zhoutian Progress 3 shield and cast <span class="Highlight">Shock</span> to attack the target, dealing <span class="Wind">Aero DMG</span>. When Zhoutian Progress is interrupted, cast <span class="Highlight">Yielding Pull</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.\n
                Major Zhoutian: Outer: Gain Zhoutian Progress 3 shield and cast <span class="Highlight">Shock</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.\n
                When you release <span class="Highlight">Basic Attack</span> button, interrupt <span class="Highlight">Zhoutian Progress</span> and lose all "Chi";\n
                When all "Chi" is consumed, end <span class="Highlight">Zhoutian Progress</span>.\n
                <div class="gap"></div>
                When <span class="Highlight">Zhoutian Progress</span> ends, regain a shield according to the Zhoutian Progress you reached;\n
                As the shield provided by <span class="Highlight">Heavy Attack: Primordial Chi Spiral</span> persists, restore HP for the on-field character once every {1}s.\n
                <div class="gap"></div>
                <span class="Title">Chi</span>\n
                Jianxin can hold up to {2} Chi.\n
                Chi is obtained when a Normal Attack <span class="Highlight">Fengyiquan</span> hits the target.\n
                Chi is obtained when the Resonance Skill <span class="Highlight">Calming Air</span> is cast.\n
                Chi is obtained when the Resonance Skill <span class="Highlight">Chi Counter</span> or Resonance Skill <span class="Highlight">Chi Parry</span> hits the target.\n
                Chi is obtained when the Intro Skill <span class="Highlight">Essence of Tao</span> hits the target.`,
                skillDetailNum: ["50%", "6", "120"],
                multipliers: [
                    {
                        attributeName: "Pushing Punch Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["125.00%", "135.25%", "145.50%", "159.85%", "170.10%", "181.89%", "198.29%", "214.69%", "231.09%", "248.52%", "269.02%", "289.52%", "310.02%", "330.52%", "351.02%", "371.52%", "392.02%", "412.52%", "433.02%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Zhoutian Progress Continuous Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["12.50%", "13.53%", "14.55%", "15.99%", "17.01%", "18.19%", "19.83%", "21.47%", "23.11%", "24.86%", "26.91%", "28.96%", "31.01%", "33.06%", "35.11%", "37.16%", "39.21%", "41.26%", "43.31%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Minor Zhoutian Shock Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["70.00%", "75.74%", "81.48%", "89.52%", "95.26%", "101.86%", "111.05%", "120.23%", "129.41%", "139.17%", "150.65%", "162.13%", "173.61%", "185.09%", "196.57%", "208.05%", "219.53%", "231.01%", "242.49%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Major Zhoutian: Inner Shock Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["190.00%", "205.58%", "221.16%", "242.98%", "258.56%", "276.47%", "301.40%", "326.33%", "351.26%", "377.74%", "408.90%", "440.06%", "471.22%", "502.38%", "533.54%", "564.70%", "595.86%", "627.02%", "658.18%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Major Zhoutian: Outer Shock Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["260.00%", "281.32%", "302.64%", "332.49%", "353.81%", "378.33%", "412.44%", "446.55%", "480.67%", "516.91%", "559.55%", "602.19%", "644.83%", "687.47%", "730.11%", "772.75%", "815.39%", "858.03%", "900.67%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Yielding Pull Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["110.00%", "119.02%", "128.04%", "140.67%", "149.69%", "160.07%", "174.50%", "188.93%", "203.36%", "218.70%", "236.74%", "254.78%", "272.82%", "290.86%", "308.90%", "326.94%", "344.98%", "363.02%", "381.06%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Incomplete Minor Zhoutian Final Shield",
                        type: "Shield",
                        skillDetailNum: [{
                            values: ["437+17.06%", "490+17.75%", "546+18.43%", "612+19.45%", "691+20.82%", "765+22.18%", "778+24.74%", "796+27.64%", "809+30.71%", "831+35.83%", "899+38.79%", "968+41.74%", "1036+44.70%", "1105+47.65%", "1174+50.61%", "1242+53.57%", "1311+56.52%", "1379+59.48%", "1448+62.43%", "1516+65.39%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Minor Zhoutian Final Shield",
                        type: "Shield",
                        skillDetailNum: [{
                            values: ["875+34.13%", "980+35.49%", "1093+36.86%", "1225+38.90%", "1382+41.63%", "1531+44.36%", "1557+49.48%", "1592+55.28%", "1618+61.43%", "1662+71.66%", "1799+77.57%", "1936+83.49%", "2073+89.40%", "2211+95.31%", "2348+101.22%", "2485+107.13%", "2622+113.04%", "2759+118.95%", "2896+124.87%", "3033+130.78%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Major Zhoutian: Inner Final Shield",
                        type: "Shield",
                        skillDetailNum: [{
                            values: ["1750+68.25%", "1960+70.98%", "2187+73.71%", "2450+77.81%", "2765+83.27%", "3062+88.73%", "3115+98.96%", "3185+110.57%", "3237+122.85%", "3325+143.33%", "3599+155.15%", "3873+166.97%", "4147+178.79%", "4422+190.62%", "4696+202.44%", "4970+214.26%", "5244+226.09%", "5519+237.91%", "5793+249.73%", "6067+261.55%"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Major Zhoutian: Outer Final Shield",
                        type: "Shield",
                        skillDetailNum: [{
                            values: ["2915+113.70%", "3265+118.25%", "3644+122.80%", "4081+129.62%", "4606+138.72%", "5102+147.82%", "5189+164.87%", "5306+184.20%", "5393+204.67%", "5539+238.78%", "5996+258.48%", "6453+278.17%", "6910+297.87%", "7367+317.57%", "7824+337.27%", "8281+356.96%", "8738+376.66%", "9195+396.36%", "9652+416.05%", "10108+435.75%"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Shield Healing",
                        type: "Healing",
                        skillDetailNum: [{
                            values: ["700+27.30%", "784+28.39%", "875+29.48%", "980+31.12%", "1106+33.31%", "1225+35.49%", "1246+39.59%", "1274+44.23%", "1295+49.14%", "1330+57.33%", "1439+62.06%", "1549+66.79%", "1659+71.52%", "1768+76.25%", "1878+80.98%", "1988+85.71%", "2097+90.43%", "2207+95.16%", "2317+99.89%", "2427+104.62%"]
                        }],
                        index: 11
                    }, {
                        attributeName: "Shield Duration",
                        type: "",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 12
                    }, {
                        attributeName: "Pushing Punch Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 13
                    }, {
                        attributeName: "Minor Zhoutian Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 14
                    }, {
                        attributeName: "Major Zhoutian: Inner Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18"]
                        }],
                        index: 15
                    }, {
                        attributeName: "Major Zhoutian: Outer Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["23", "23", "23", "23", "23", "23", "23", "23", "23", "23", "23", "23", "23", "23", "23", "23", "23", "23"]
                        }],
                        index: 16
                    }, {
                        attributeName: "Yielding Pull Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7"]
                        }],
                        index: 17
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Formless Release',
                skillDescription: `Damage of Resonance Liberation <span class="Highlight">Purification Force Field</span> is increased by {0}.`,
                skillDetailNum: ["20%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Reflection',
                skillDescription: `The Shield obtained with Heavy Attack <span class="Highlight">Primordial Chi Spiral</span> is increased by {0}.`,
                skillDetailNum: ["20%"],
                multipliers: []
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Verdant Branchlet",
            description: `After casting Intro Skill <span class="Highlight">Essence of Tao</span>, Jianxin gains {0} extra "Chi" from <span class="Highlight">Basic Attacks</span> for {1}s.`,
            detailNum: ["100%", "10"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1405_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Tao Seeker's Journey",
            description: `Resonance Skill <span class="Highlight">Calming Air</span> can be used {0} more time.`,
            detailNum: ["1"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1405_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Principles of Wuwei",
            description: `After staying in the <span class="Highlight">Parry Stance</span> of Resonance Skill <span class="Highlight">Calming Air</span> for {0}s, Resonance Skill <span class="Highlight">Chi Counter</span> becomes immediately available.`,
            detailNum: ["2.5"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1405_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Multitide Reflection",
            description: `When performing Forte Circuit <span class="Highlight">Heavy Attack: Primordial Chi Spiral</span>, Jianxin's Resonance Liberation <span class="Highlight">Purification Force Field</span> damage is increased by {0} for {1}s.`,
            detailNum: ["80%", "14"],
            sequenceBuffType: "Skill Liberation Buff",
            sequenceBuffAtrribute: ["Resonanc Liberation"],
            sequenceBuff: [80],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1405_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Mirroring Introspection",
            description: `The range of Resonance Liberation <span class="Highlight">Purification Force Field</span> is increased by {0}.`,
            detailNum: ["33%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1405_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Truth from Within",
            description: `During Forte Circuit <span class="Highlight">Heavy Attack: Primordial Qi Spiral</span>, if Jianxin performs <span class="Highlight">Pushing Punch</span>, enhanced Resonance Skill <span class="Highlight">Special Chi Counter</span> can be used {1} time(s) in {0}s.  <span class="Highlight">Special Chi Counter</span>: Deals <span className="Wind">Aero DMG</span> equal to {2} of Jianxin's ATK, considered as Heavy Attack DMG. Obtain a Zhoutian Progress 4 Shield (Benefits from Inherent Skill <span class="Highlight">Reflection</span>'s bonus effect.)`,
            detailNum: ["5", "1", "556.67%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1405_UI.png"
        }
    ]
}