import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_stars/Icon_5_Stars.webp";

export const XiangliYao: WWCharacter = {
    name: "Xiangli-Yao",
    charaId: 1304,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Electro",
    weapon: "Gauntlets",
    bio: `Huaxu Academy's Principal Investigator, Xiangli Yao, displays exceptional expertise in various research fields despite his young age.
He is a gentle yet rational soul, embracing unique insights and commitment to the research of Automata Mechanics.`,
    images: {
        portrait: "https://whisperingsea.github.io/wuthering-waves-assets/images/portraits/XiangliyaoPortrait.webp",
        icon_sq: "https://whisperingsea.github.io/wuthering-waves-assets/images/icons_character/XiangliYao.png",
        model: "https://whisperingsea.github.io/wuthering-waves-assets/images/models/Xiangli_Yao_Full_Sprite.webp"
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
            item: "Hidden Thunder Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Violet Coral",
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
        base_hp: 850,
        base_atk: 34,
        base_def: 100,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 0,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 0,
        bonus_critdmg: 16,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillName: 'Probe',
                skillDescription: `<span class="Title">Basic Attack</span>
                Perform up to 5 consecutive attacks, dealing <span className="Thunder">Electro DMG</span>.
                <span class="Title">Heavy Attack</span>
                Perform a charged attack at the cost of STA, dealing <span className="Thunder">Electro DMG</span>.
                <span class="Title">Mid-air Attack</span>
                Perform a Plunging Attack from mid-air at the cost of STA, dealing <span className="Thunder">Electro DMG</span>.
                <span class="Title">Dodge Counter</span>
                Use <span className="Highlight">Basic Attack</span> after a successful <span className="Highlight">Dodge</span> to attack the target, dealing <span className="Thunder">Electro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Stage 1 DMG",
                        skillDetailNum: [{
                            values: ["16.65%*2", "18.02%*2", "19.39%*2", "21.30%*2", "22.66%*2", "24.23%*2", "26.42%*2", "28.60%*2", "30.79%*2", "33.11%*2", "35.84%*2", "38.57%*2", "41.30%*2", "44.03%*2", "46.76%*2", "49.49%*2", "52.22%*2", "54.95%*2", "57.68%*2", "60.41%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Stage 2 DMG",
                        skillDetailNum: [{
                            values: ["50.10%", "54.21%", "58.32%", "64.07%", "68.18%", "72.91%", "79.48%", "86.05%", "92.62%", "99.61%", "107.83%", "116.04%", "124.26%", "132.47%", "140.69%", "148.91%", "157.12%", "165.34%", "173.56%", "181.77%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Stage 3 DMG",
                        skillDetailNum: [{
                            values: ["20.00%*3", "21.64%*3", "23.28%*3", "25.58%*3", "27.22%*3", "29.10%*3", "31.73%*3", "34.35%*3", "36.98%*3", "39.76%*3", "43.04%*3", "46.32%*3", "49.60%*3", "52.88%*3", "56.16%*3", "59.44%*3", "62.72%*3", "66.00%*3", "69.28%*3", "72.56%*3"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Stage 4 DMG",
                        skillDetailNum: [{
                            values: ["26.68%*2+13.34%", "28.87%*2+14.44%", "31.06%*2+15.53%", "34.12%*2+17.06%", "36.31%*2+18.16%", "38.83%*2+19.42%", "42.33%*2+21.17%", "45.83%*2+22.92%", "49.33%*2+24.67%", "53.05%*2+26.53%", "57.42%*2+28.71%", "61.80%*2+30.90%", "66.17%*2+33.09%", "70.55%*2+35.28%", "74.93%*2+37.47%", "79.30%*2+39.65%", "83.68%*2+41.84%", "88.05%*2+44.03%", "92.43%*2+46.22%", "96.80%*2+48.40%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Stage 5 DMG",
                        skillDetailNum: [{
                            values: ["100.00%", "108.20%", "116.40%", "127.88%", "136.08%", "145.51%", "158.63%", "171.75%", "184.87%", "198.81%", "215.21%", "231.61%", "248.01%", "264.41%", "280.81%", "297.21%", "313.61%", "330.01%", "346.41%", "362.81%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "HA DMG",
                        skillDetailNum: [{
                            values: ["41.65%*2", "45.07%*2", "48.49%*2", "53.27%*2", "56.68%*2", "60.61%*2", "66.07%*2", "71.54%*2", "77.00%*2", "82.81%*2", "89.64%*2", "96.47%*2", "103.30%*2", "110.13%*2", "116.96%*2", "123.79%*2", "130.62%*2", "137.45%*2", "144.28%*2", "151.12%*2"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Mid-air Attack DMG",
                        skillDetailNum: [{
                            values: ["62.00%", "67.09%", "72.17%", "79.29%", "84.37%", "90.22%", "98.36%", "106.49%", "114.62%", "123.27%", "133.44%", "143.60%", "153.77%", "163.94%", "174.11%", "184.28%", "194.44%", "204.61%", "214.78%", "224.95%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Dodge Counter DMG",
                        skillDetailNum: [{
                            values: ["120.00%", "129.84%", "139.68%", "153.46%", "163.30%", "174.62%", "190.36%", "206.10%", "221.85%", "238.58%", "258.26%", "277.94%", "297.62%", "317.30%", "336.98%", "356.66%", "376.34%", "396.02%", "415.70%", "435.38%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "HA STA Cost",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Mid-air Attack STA Cost",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 10
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Deduction',
                skillDescription: `Attack the target, dealing <span className="Thunder">Electro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill DMG",
                        skillDetailNum: [{
                            values: ["100.00%", "108.20%", "116.40%", "127.88%", "136.08%", "145.51%", "158.63%", "171.75%", "184.87%", "198.81%", "215.21%", "231.61%", "248.01%", "264.41%", "280.81%", "297.21%", "313.61%", "330.01%", "346.41%", "362.81%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Concerto Regen",
                        skillDetailNum: [{
                            values: ["7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7"]
                        }],
                        index: 3
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Cogitation Model',
                skillDescription: `Attack the target, dealing <span className="Thunder">Electro DMG</span>. Enter <span className="Highlight">Intuition</span>.
                When in <span className="Highlight">Intuition</span>:
                -Obtain {0} Hypercube(s). Each time Resonance Skill <span className="Highlight">Law of Reigns</span> is cast, consume {1} Hypercube(s). <span className="Highlight">Intuition</span> ends once all Hypercubes are consumed.
                -<span className="Highlight">Basic Attack</span> and <span className="Highlight">Heavy Attack</span> are replaced with Basic Attack <span className="Highlight">Pivot - Impale</span>, which performs up to 3 consecutive attacks, dealing <span className="Thunder">Electro DMG</span>.
                -Resonance Skill <span className="Highlight">Deduction</span> is replaced with Resonance Skill <span className="Highlight">Divergence</span>, which deals <span className="Thunder">Electro DMG</span>.
                -<span className="Highlight">Dodge Counter</span> is replaced with Dodge Counter <span className="Highlight">Unfathomed</span>, considered as Resonance Liberation DMG.`,
                skillDetailNum: ["3", "1"],
                multipliers: [
                    {
                        attributeName: "Cogitation Model DMG",
                        skillDetailNum: [{
                            values: ["670.38%", "725.35%", "780.32%", "857.28%", "912.25%", "975.47%", "1063.42%", "1151.38%", "1239.33%", "1332.78%", "1442.72%", "1552.66%", "1662.61%", "1772.55%", "1882.49%", "1992.43%", "2102.37%", "2212.31%", "2322.26%", "2432.20%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Pivot - Impale Stage 1 DMG",
                        skillDetailNum: [{
                            values: ["60.19%", "65.13%", "70.06%", "76.97%", "81.91%", "87.59%", "95.48%", "103.38%", "111.28%", "119.67%", "129.54%", "139.41%", "149.28%", "159.15%", "169.02%", "178.89%", "188.76%", "198.63%", "208.51%", "218.38%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Pivot - Impale Stage 2 DMG",
                        skillDetailNum: [{
                            values: ["30.65%*4", "33.16%*4", "35.67%*4", "39.19%*4", "41.70%*4", "44.59%*4", "48.61%*4", "52.63%*4", "56.65%*4", "60.92%*4", "65.95%*4", "70.97%*4", "76.00%*4", "81.02%*4", "86.05%*4", "91.07%*4", "96.10%*4", "101.12%*4", "106.15%*4", "111.17%*4"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Pivot - Impale Stage 3 DMG",
                        skillDetailNum: [{
                            values: ["67.03%*2", "72.52%*2", "78.02%*2", "85.71%*2", "91.21%*2", "97.53%*2", "106.32%*2", "115.12%*2", "123.91%*2", "133.25%*2", "144.25%*2", "155.24%*2", "166.23%*2", "177.22%*2", "188.21%*2", "199.20%*2", "210.20%*2", "221.19%*2", "232.18%*2", "243.17%*2"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Divergence DMG",
                        skillDetailNum: [{
                            values: ["24.94%*3+87.29%*2", "26.99%*3+94.45%*2", "29.04%*3+101.61%*2", "31.90%*3+111.63%*2", "33.94%*3+118.79%*2", "36.30%*3+127.02%*2", "39.57%*3+138.47%*2", "42.84%*3+149.93%*2", "46.11%*3+161.38%*2", "49.59%*3+173.55%*2", "53.68%*3+187.86%*2", "57.77%*3+202.18%*2", "61.86%*3+216.49%*2", "65.95%*3+230.81%*2", "70.04%*3+245.12%*2", "74.13%*3+259.44%*2", "78.22%*3+273.76%*2", "82.31%*3+288.07%*2", "86.40%*3+302.39%*2", "90.49%*3+316.70%*2"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Unfathomed DMG",
                        skillDetailNum: [{
                            values: ["19.53%*2+156.22%", "21.13%*2+169.03%", "22.73%*2+181.84%", "24.98%*2+199.77%", "26.58%*2+212.58%", "28.42%*2+227.31%", "30.98%*2+247.81%", "33.54%*2+268.30%", "36.10%*2+288.80%", "38.83%*2+310.58%", "42.03%*2+336.20%", "45.23%*2+361.82%", "48.43%*2+387.43%", "51.64%*2+413.05%", "54.84%*2+438.67%", "58.04%*2+464.29%", "61.24%*2+489.91%", "64.45%*2+515.53%", "67.65%*2+541.15%", "70.85%*2+566.77%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Intuition Duration",
                        skillDetailNum: [{
                            values: ["24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Cogitation Model Cooldown",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Divergence Cooldown",
                        skillDetailNum: [{
                            values: ["7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Resonance Cost",
                        skillDetailNum: [{
                            values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Cogitation Model Concerto Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 11
                    }, {
                        attributeName: "Divergence Concerto Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 12
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Principle',
                skillDescription: `Attack the target, dealing <span className="Thunder">Electro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill DMG",
                        skillDetailNum: [{
                            values: ["50.00%*2", "54.10%*2", "58.20%*2", "63.94%*2", "68.04%*2", "72.76%*2", "79.32%*2", "85.88%*2", "92.44%*2", "99.41%*2", "107.61%*2", "115.81%*2", "124.01%*2", "132.21%*2", "140.41%*2", "148.61%*2", "156.81%*2", "165.01%*2", "173.21%*2", "181.41%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Concerto Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Chain Rule',
                skillDescription: `When the incoming Resonator's <span className="Highlight">Basic Attack</span> hits a target, Xiangli Yao will attack the same target, dealing <span className="Thunder">Electro DMG</span> equal to {1} of Xiangli Yao's ATK. This effect lasts for {2}s and can be triggered once every {0}s, up to 3 times.`,
                skillDetailNum: ["2", "237.63%", "8"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Forever Seeking',
                skillDescription: `<span class="Title">Resonance Skill - Decipher</span>
                When Capacity reaches {0}, Resonance Skill <span className="Highlight">Deduction</span> is replaced with Resonance Skill <span className="Highlight">Decipher</span>.
                Consume {8} Capacity to cast Resonance Skill <span className="Highlight">Decipher</span>, dealing <span className="Thunder">Electro DMG</span>, considered as Resonance Liberation DMG.
                <span class="Title">Resonance Skill - Law of Reigns</span>
                When in <span className="Highlight">Intuition</span> triggered by Resonance Liberation and Performance Capacity reaches {1}, Resonance Skill <span className="Highlight">Divergence</span> is replaced with Resonance Skill <span className="Highlight">Law of Reigns</span>.
                Consume {9} Performance Capacity to cast Resonance Skill <span className="Highlight">Law of Reigns</span>, dealing <span className="Thunder">Electro DMG</span>, considered as Resonance Liberation DMG.
                <span class="Title">Mid-air Attack - Revamp</span>
                Shortly after casting Resonance Skill <span className="Highlight">Decipher</span> or Resonance Skill <span className="Highlight">Divergence</span>, use <span className="Highlight">Basic Attack</span> to perform Mid-air Attack <span className="Highlight">Revamp</span> at the cost of STA, dealing <span className="Thunder">Electro DMG</span>, considered as Resonance Liberation DMG.
                <span class="Title">Capacity</span>
                Xiangli Yao can hold up to {2} Capacity.
                Every Normal Attack <span className="Highlight">Probe</span> on hit grants Capacity.
                Every Resonance Skill <span className="Highlight">Deduction</span> on hit grants Capacity.
                <span class="Title">Performance Capacity</span>
                Xiangli Yao can hold up to {3} Performance Capacity.
                When in <span className="Highlight">Intuition</span> triggered by Resonance Liberation:
                Obtain {4} Performance Capacity when Stage 1 of Basic Attack <span className="Highlight">Pivot - Impale</span> hits a target.
                Obtain {5} Performance Capacity when Stage 2 or 3 of Basic Attack <span className="Highlight">Pivot - Impale</span> hits a target.
                Obtain {6} Performance Capacity for every Resonance Skill <span className="Highlight">Divergence</span> on hit.
                Obtain {7} Performance Capacity for every Mid-air Attack <span className="Highlight">Revamp</span> on hit.
                Obtain {10} Performance Capacity for every Dodge Counter <span className="Highlight">Unfathomed</span> on hit.`,
                skillDetailNum: ["100", "5", "100", "5", "1", "2", "2", "3", "100", "5", "2"],
                multipliers: [
                    {
                        attributeName: "Decipher DMG",
                        skillDetailNum: [{
                            values: ["200.10%", "216.51%", "232.92%", "255.89%", "272.30%", "291.17%", "317.42%", "343.68%", "369.93%", "397.82%", "430.64%", "463.46%", "496.27%", "529.09%", "561.91%", "594.72%", "627.54%", "660.36%", "693.17%", "725.99%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Law of Reigns DMG",
                        skillDetailNum: [{
                            values: ["48.15%*4+128.40%", "52.10%*4+138.93%", "56.05%*4+149.46%", "61.58%*4+164.20%", "65.53%*4+174.73%", "70.07%*4+186.84%", "76.39%*4+203.69%", "82.70%*4+220.53%", "89.02%*4+237.38%", "95.73%*4+255.28%", "103.63%*4+276.33%", "111.53%*4+297.39%", "119.42%*4+318.45%", "127.32%*4+339.51%", "135.22%*4+360.57%", "143.11%*4+381.62%", "151.01%*4+402.68%", "158.90%*4+423.74%", "166.80%*4+444.80%", "174.70%*4+465.85%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Revamp DMG",
                        skillDetailNum: [{
                            values: ["11.00%*4+33.00%*2", "11.91%*4+35.71%*2", "12.81%*4+38.42%*2", "14.07%*4+42.21%*2", "14.97%*4+44.91%*2", "16.01%*4+48.02%*2", "17.45%*4+52.35%*2", "18.90%*4+56.68%*2", "20.34%*4+61.01%*2", "21.87%*4+65.61%*2", "23.68%*4+71.02%*2", "25.48%*4+76.44%*2", "27.29%*4+81.85%*2", "29.09%*4+87.26%*2", "30.89%*4+92.67%*2", "32.70%*4+98.08%*2", "34.50%*4+103.50%*2", "36.31%*4+108.91%*2", "38.11%*4+114.32%*2", "39.91%*4+119.73%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Revamp STA Cost",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Decipher Concerto Regen",
                        skillDetailNum: [{
                            values: ["7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Law of Reigns Concerto Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Revamp Concerto Regen",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 7
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Knowing',
                skillDescription: `Gain {0} Electro DMG Bonus after casting Resonance Skill for 8s, stackable for up to 4 times.`,
                skillDetailNum: ["5%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Focus',
                skillDescription: `When in <span className="Highlight">Intuition</span> triggered by Resonance Liberation, Xiangli Yao's resistance to interruption is enhanced.`,
                skillDetailNum: ["20%", "20"],
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
            name: "Prodigy of Protégés",
            description: `When casting Resonance Skill <span className="Highlight">Law of Reigns</span>, deal {0} extra times of DMG, each equal to {1} of that of Resonance Skill <span className="Highlight">Law of Reigns</span>.`,
            detailNum: ["6", "0%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Traces of Predecessors",
            description: `When Resonance Skill or Resonance Liberation <span className="Highlight">Cogitation Model</span> is cast, Crit. DMG is increased by {0} for {1}s.`,
            detailNum: ["30%", "8"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "The Choice to Flourish",
            description: `After Resonance Liberation <span className="Highlight">Cogitation Model</span> is cast, the subsequent {0} Resonance Skills cast within {2}s are empowered to deal {1} extra DMG.`,
            detailNum: ["5", "63%", "24"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Vessel of Rebirth",
            description: `When casting Resonance Liberation <span className="Highlight">Cogitation Model</span>, all team members' Resonance Liberation gains {0} DMG Bonus for {1}s.`,
            detailNum: ["25%", "30"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: ["Spectro Damage Bonus"],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "End of Stars",
            description: `The DMG Multiplier of Outro Skill <span className="Highlight">Chain Rule</span> is increased by {0}. The DMG Multiplier of Resonance Liberation <span className="Highlight">Cogitation Model</span> is increased by {1}.`,
            detailNum: ["222.09%", "120%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Solace of the Ordinary",
            description: `The Hypercubes obtained from Resonance Liberation <span className="Highlight">Cogitation Model</span> are enhanced, increasing the DMG Multiplier of Resonance Skill <span className="Highlight">Law of Reigns</span> by {0}.`,
            detailNum: ["76%",],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        }
    ]
}