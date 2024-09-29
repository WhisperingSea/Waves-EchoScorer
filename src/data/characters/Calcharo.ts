import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_stars/Icon_5_Stars.webp";

export const Calcharo: WWCharacter = {
    name: "Calcharo",
    charaId: 1301,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Electro",
    weapon: "Broadblade",
    bio: `Leader of the "Ghost Hounds", an international mercenary group.
Ruthless, vengeful, unforgiving. A potential client must be mindful of the price to pay before making him an offer.`,
    images: {
        portrait: "https://whisperingsea.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_kakaluo_UI.png",
        icon_sq: "https://whisperingsea.github.io/wuthering-waves-assets/images/icons_character/Calcharo.png",
        model: "https://whisperingsea.github.io/wuthering-waves-assets/images/models/Calcharo_Model.png"
    },
    asension: {
        charaAsension: [
        {
            item: "Crude Ring",
            id: 1,
            value: "4"
        },
        {
            item: "Basic Ring",
            id: 2,
            value: "12"
        },
        {
            item: "Improved Ring",
            id: 3,
            value: "12"
        },
        {
            item: "Tailored Ring",
            id: 4,
            value: "4"
        },
        {
            item: "Thundering Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Iris",
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
            item: "Crude Ring",
            id: 1,
            value: "25"
        },
        {
            item: "Basic Ring",
            id: 2,
            value: "28"
        },
        {
            item: "Improved Ring",
            id: 3,
            value: "40"
        },
        {
            item: "Tailered Ring",
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
            item: "Monument Bell",
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
        base_hp: 840,
        base_atk: 35,
        base_def: 97,
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
                skillName: 'Gnawing Fang',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Calcharo performs up to 4 consecutive attacks, dealing <span class="Thunder">Electro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Consumes Stamina to attack the target, dealing <span class="Thunder">Electro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Consumes Stamina to perform a Mid-Air Plunging Attack, dealing <span class="Thunder">Electro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Thunder">Electro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["23.00%*2", "24.89%*2", "26.78%*2", "29.42%*2", "31.30%*2", "33.47%*2", "36.49%*2", "39.51%*2", "42.53%*2", "45.73%*2", "49.50%*2", "53.28%*2", "57.05%*2", "60.82%*2", "64.59%*2", "68.36%*2", "72.14%*2", "75.91%*2", "79.68%*2", "83.45%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["50.00%", "54.10%", "58.20%", "63.94%", "68.04%", "72.76%", "79.32%", "85.88%", "92.44%", "99.41%", "107.61%", "115.81%", "124.01%", "132.21%", "140.41%", "148.61%", "156.81%", "165.01%", "173.21%", "181.41%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["42.84%+21.42%*3", "46.36%+23.18%*3", "49.87%+24.94%*3", "54.79%+27.40%*3", "58.30%+29.15%*3", "62.34%+31.17%*3", "67.96%+33.98%*3", "73.58%+36.79%*3", "79.20%+39.60%*3", "85.18%+42.59%*3", "92.20%+46.10%*3", "99.23%+49.62%*3", "106.25%+53.13%*3", "113.28%+56.64%*3", "120.30%+60.15%*3", "127.33%+63.67%*3", "134.36%+67.18%*3", "141.38%+70.69%*3", "148.41%+74.21%*3", "155.43%+77.72%*3"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["39.99%*2+53.32%", "43.27%*2+57.70%", "46.55%*2+62.07%", "51.14%*2+68.19%", "54.42%*2+72.56%", "58.19%*2+77.59%", "63.44%*2+84.59%", "68.69%*2+91.58%", "73.93%*2+98.58%", "79.51%*2+106.01%", "86.07%*2+114.75%", "92.63%*2+123.50%", "99.18%*2+132.24%", "105.74%*2+140.99%", "112.30%*2+149.73%", "118.86%*2+158.48%", "125.42%*2+167.22%", "131.98%*2+175.97%", "138.53%*2+184.71%", "145.09%*2+193.46%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["20.80%*5", "22.51%*5", "24.22%*5", "26.60%*5", "28.31%*5", "30.27%*5", "33.00%*5", "35.73%*5", "38.46%*5", "41.36%*5", "44.77%*5", "48.18%*5", "51.59%*5", "55.00%*5", "58.41%*5", "61.82%*5", "65.24%*5", "68.65%*5", "72.06%*5", "75.47%*5"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        skillDetailNum: [{
                            values: ["62.00%", "67.09%", "72.17%", "79.29%", "84.37%", "90.22%", "98.36%", "106.49%", "114.62%", "123.27%", "133.44%", "143.60%", "153.77%", "163.94%", "174.11%", "184.28%", "194.44%", "204.61%", "214.78%", "224.95%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["33.44%*3+42.99%", "36.18%*3+46.52%", "38.93%*3+50.05%", "42.76%*3+54.98%", "45.51%*3+58.51%", "48.66%*3+62.56%", "53.05%*3+68.20%", "57.43%*3+73.84%", "61.82%*3+79.48%", "66.48%*3+85.47%", "71.96%*3+92.52%", "77.45%*3+99.57%", "82.93%*3+106.62%", "88.41%*3+113.67%", "93.90%*3+120.73%", "99.38%*3+127.78%", "104.87%*3+134.83%", "110.35%*3+141.88%", "115.83%*3+148.93%", "121.32%*3+155.98%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Heavy Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
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
                skillName: 'Extermination index',
                skillDescription: `Calcharo performs up to 3 consecutive attacks, dealing <span class="Thunder">Electro DMG</span>.
                If Calcharo is switched off field, or if Resonance Skill <span class="Highlight">Extermination index</span> is not performed again in a while, this skill will enter Cooldown.
                Resonance Skill <span class="Highlight">Extermination index</span> does not interrupt Calcharo's Basic Attack combo.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Extermination index Part 1 Damage",
                        skillDetailNum: [{
                            values: ["25.94%*2+34.59%", "28.07%*2+37.42%", "30.20%*2+40.26%", "33.17%*2+44.23%", "35.30%*2+47.07%", "37.75%*2+50.33%", "41.15%*2+54.87%", "44.55%*2+59.40%", "47.96%*2+63.94%", "51.57%*2+68.76%", "55.83%*2+74.43%", "60.08%*2+80.11%", "64.33%*2+85.78%", "68.59%*2+91.45%", "72.84%*2+97.12%", "77.10%*2+102.79%", "81.35%*2+108.46%", "85.60%*2+114.14%", "89.86%*2+119.81%", "94.11%*2+125.48%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Extermination index Part 2 Damage",
                        skillDetailNum: [{
                            values: ["38.91%*2+51.88%", "42.10%*2+56.13%", "45.29%*2+60.39%", "49.76%*2+66.34%", "52.95%*2+70.60%", "56.62%*2+75.49%", "61.72%*2+82.30%", "66.83%*2+89.10%", "71.93%*2+95.91%", "77.36%*2+103.14%", "83.74%*2+111.65%", "90.12%*2+120.16%", "96.50%*2+128.66%", "102.88%*2+137.17%", "109.26%*2+145.68%", "115.64%*2+154.19%", "122.02%*2+162.69%", "128.40%*2+171.20%", "134.78%*2+179.71%", "141.16%*2+188.22%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Extermination index Part 3 Damage",
                        skillDetailNum: [{
                            values: ["108.08%*2", "116.94%*2", "125.80%*2", "138.21%*2", "147.07%*2", "157.26%*2", "171.44%*2", "185.62%*2", "199.80%*2", "214.87%*2", "232.59%*2", "250.32%*2", "268.04%*2", "285.77%*2", "303.49%*2", "321.21%*2", "338.94%*2", "356.66%*2", "374.39%*2", "392.11%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Extermination index Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
                        }],
                        index: 5
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liberation',
                skillName: 'Phantom Etching',
                skillDescription: `Calcharo attacks the target, dealing <span class="Thunder">Electro DMG</span> and enters <span class="Highlight">Deathblade Gear</span> state. After Resonance Liberation <span class="Highlight">Deathblade Gear</span> state ends, Calcharo's next Intro Skill is replaced with Intro Skill <span class="Highlight">"Necessary Means"</span>, which deals <span class="Thunder">Electro DMG</span>, considered as Intro Skill damage.\n
                <div class="gap"></div>
                <span class="Title">Deathblade Gear</span>\n
                -<span class="Highlight">Basic Attack</span> is replaced with Basic Attack <span class="Highlight">Hounds Roar</span>.\n
                -<span class="Highlight">Dodge Counter</span> deals increased damage, considered as Resonance Liberation damage.\n
                <div class="gap"></div>
                <span class="Title">Hounds Roar</span>\n
                Calcharo performs up to 5 consecutive attacks, dealing <span class="Thunder">Electro DMG</span>, considered as Basic Attack Damage.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["300.00%", "324.60%", "349.20%", "383.64%", "408.24%", "436.53%", "475.89%", "515.25%", "554.61%", "596.43%", "645.63%", "694.83%", "744.03%", "793.23%", "842.43%", "891.63%", "940.83%", "990.03%", "1039.23%", "1088.43%"]
                        }],
                        index: 1
                    }, {
                        attributeName: '"Necessary Means" Damage',
                        skillDetailNum: [{
                            values: ["100.00%*2", "108.20%*2", "116.40%*2", "127.88%*2", "136.08%*2", "145.51%*2", "158.63%*2", "171.75%*2", "184.87%*2", "198.81%*2", "215.21%*2", "231.61%*2", "248.01%*2", "264.41%*2", "280.81%*2", "297.21%*2", "313.61%*2", "330.01%*2", "346.41%*2", "362.81%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Hounds Roar Part 1",
                        skillDetailNum: [{
                            values: ["44.30%", "47.93%", "51.56%", "56.65%", "60.28%", "64.46%", "70.27%", "76.08%", "81.89%", "88.07%", "95.33%", "102.59%", "109.86%", "117.12%", "124.39%", "131.65%", "138.91%", "146.18%", "153.44%", "160.71%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Hounds Roar Part 2",
                        skillDetailNum: [{
                            values: ["17.72%*2+26.58%*2", "19.18%*2+28.76%*2", "20.63%*2+30.94%*2", "22.66%*2+33.99%*2", "24.11%*2+36.17%*2", "25.79%*2+38.68%*2", "28.11%*2+42.16%*2", "30.43%*2+45.65%*2", "32.76%*2+49.14%*2", "35.23%*2+52.84%*2", "38.13%*2+57.20%*2", "41.04%*2+61.56%*2", "43.95%*2+65.92%*2", "46.85%*2+70.28%*2", "49.76%*2+74.63%*2", "52.66%*2+78.99%*2", "55.57%*2+83.35%*2", "58.47%*2+87.71%*2", "61.38%*2+92.07%*2", "64.29%*2+96.43%*2"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Hounds Roar Part 3",
                        skillDetailNum: [{
                            values: ["82.41%", "89.17%", "95.93%", "105.39%", "112.14%", "119.92%", "130.73%", "141.54%", "152.35%", "163.84%", "177.35%", "190.87%", "204.38%", "217.90%", "231.41%", "244.93%", "258.44%", "271.96%", "285.47%", "298.99%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Hounds Roar Part 4",
                        skillDetailNum: [{
                            values: ["17.52%*6", "18.95%*6", "20.39%*6", "22.40%*6", "23.83%*6", "25.49%*6", "27.78%*6", "30.08%*6", "32.38%*6", "34.82%*6", "37.69%*6", "40.56%*6", "43.44%*6", "46.31%*6", "49.18%*6", "52.05%*6", "54.92%*6", "57.79%*6", "60.67%*6", "63.54%*6"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Hounds Roar Part 5",
                        skillDetailNum: [{
                            values: ["75.54%*2", "81.74%*2", "87.93%*2", "96.61%*2", "102.80%*2", "109.92%*2", "119.83%*2", "129.74%*2", "139.66%*2", "150.19%*2", "162.57%*2", "174.96%*2", "187.35%*2", "199.74%*2", "212.13%*2", "224.52%*2", "236.90%*2", "249.29%*2", "261.68%*2", "274.07%*2"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["31.20%*5", "33.76%*5", "36.32%*5", "39.90%*5", "42.46%*5", "45.40%*5", "49.50%*5", "53.59%*5", "57.68%*5", "62.03%*5", "67.15%*5", "72.27%*5", "77.38%*5", "82.50%*5", "87.62%*5", "92.73%*5", "97.85%*5", "102.97%*5", "108.08%*5", "113.20%*5"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["28.67%*6", "31.02%*6", "33.37%*6", "36.66%*6", "39.01%*6", "41.72%*6", "45.48%*6", "49.24%*6", "53.00%*6", "56.99%*6", "61.69%*6", "66.40%*6", "71.10%*6", "75.80%*6", "80.50%*6", "85.20%*6", "89.90%*6", "94.60%*6", "99.30%*6", "104.00%*6"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Heavy Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Deathblade Gear Duration",
                        skillDetailNum: [{
                            values: ["11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11"]
                        }],
                        index: 11
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 12
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                        }],
                        index: 13
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 14
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Wanted Outlaw',
                skillDescription: `Attack the target, dealing <span class="Thunder">Electro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["20.00%*2+30.00%*2", "21.64%*2+32.46%*2", "23.28%*2+34.92%*2", "25.58%*2+38.37%*2", "27.22%*2+40.83%*2", "29.11%*2+43.66%*2", "31.73%*2+47.59%*2", "34.35%*2+51.53%*2", "36.98%*2+55.47%*2", "39.77%*2+59.65%*2", "43.05%*2+64.57%*2", "46.33%*2+69.49%*2", "49.61%*2+74.41%*2", "52.89%*2+79.33%*2", "56.17%*2+84.25%*2", "59.45%*2+89.17%*2", "62.73%*2+94.09%*2", "66.01%*2+99.01%*2", "69.29%*2+103.93%*2", "72.57%*2+108.85%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
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
                skillName: 'Shadowy Raid',
                skillDescription: `Calcharo summons <span class="Highlight">Phantom</span> to support the on-field Resonator, clearing the targets in front with a slash. The <span class="Highlight">Phantom's</span> attack deals <span class="Thunder">Electro DMG</span> equal to {0} of Calcharo's ATK.`,
                skillDetailNum: ["195.98%+391.96%"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Hunting Mission',
                skillDescription: `<span class="Title">Heavy Attack: "Mercy"</span>\n
                When Calcharo has {0} "Cruelty", his <span class="Highlight">Heavy Attack</span> is replaced with Heavy Attack <span class="Highlight">"Mercy"</span>.\n
                When casting Heavy Attack <span class="Highlight">"Mercy"</span>, Calcharo consumes {1} "Cruelty" to deal <span class="Thunder">Electro DMG</span>, considered as Heavy Attack damage, and recovers Resonance Energy and Concerto Energy.\n
                <div class="gap"></div>
                <span class="Title">"Cruelty"</span>\n
                Calcharo can hold up to {2} "Cruelty".\n
                Under Resonance Liberation <span class="Highlight">Deathblade Gear</span> state, "Cruelty" cannot be acquired.\n
                When Resonance Skill <span class="Highlight">Extermination index</span> hits the target, gain {3} "Cruelty".\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack: "Death Messenger"</span>\n
                When Calcharo has {4} "Killing Intent", his <span class="Highlight">Basic Attack</span> is replaced with Heavy Attack <span class="Highlight">"Death Messenger"</span>.\n
                When casting Heavy Attack <span class="Highlight">"Death Messenger"</span>, Calcharo consumes {5} "Killing Intent" to deal <span class="Thunder">Electro DMG</span>, considered as Resonance Liberation damage, and recovers Resonance Energy and Concerto Energy.\n
                <div class="gap"></div>
                <span class="Title">"Killing Intent"</span>\n
                Under Resonance Liberation <span class="Highlight">Deathblade Gear</span> state, Calcharo's Forte Gauge is replaced with "Killing Intent", stacking up to {6}.\n
                When Basic Attack <span class="Highlight">Hounds Roar</span> hits the target, Calcharo gains 1 "Killing Intent".`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: '"Mercy" Damage',
                        skillDetailNum: [{
                            values: ["19.67%*8+39.34%", "21.29%*8+42.57%", "22.90%*8+45.80%", "25.16%*8+50.31%", "26.77%*8+53.54%", "28.63%*8+57.25%", "31.21%*8+62.41%", "33.79%*8+67.57%", "36.37%*8+72.73%", "39.11%*8+78.22%", "42.34%*8+84.67%", "45.56%*8+91.12%", "48.79%*8+97.57%", "52.01%*8+104.02%", "55.24%*8+110.48%", "58.47%*8+116.93%", "61.69%*8+123.38%", "64.92%*8+129.83%", "68.14%*8+136.28%", "71.37%*8+142.73%"]
                        }],
                        index: 1
                    }, {
                        attributeName: '"Death Messenger" Damage',
                        skillDetailNum: [{
                            values: ["49.18%*8+98.35%", "53.21%*8+106.42%", "57.24%*8+114.48%", "62.89%*8+125.77%", "66.92%*8+133.84%", "71.56%*8+143.11%", "78.01%*8+156.02%", "84.46%*8+168.92%", "90.91%*8+181.82%", "97.77%*8+195.53%", "105.83%*8+211.66%", "113.90%*8+227.79%", "121.96%*8+243.92%", "130.03%*8+260.05%", "138.09%*8+276.18%", "146.16%*8+292.31%", "154.22%*8+308.44%", "162.29%*8+324.57%", "170.35%*8+340.70%", "178.42%*8+356.83%"]
                        }],
                        index: 2
                    }, {
                        attributeName: '"Mercy" Con. Energy Regen',
                        skillDetailNum: [{
                            values: ["6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
                        }],
                        index: 3
                    }, {
                        attributeName: '"Death Messenger" Con. Energy Regen',
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 4
                    }, {
                        attributeName: '"Mercy" Con. Energy Regen',
                        skillDetailNum: [{
                            values: ["6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
                        }],
                        index: 5
                    }, {
                        attributeName: '"Death Messenger" Con. Energy Regen',
                        skillDetailNum: [{
                            values: ["12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5", "12.5"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Bloodshed Awaken',
                skillDescription: `When casting Heavy Attack <span class="Highlight">"Mercy"</span>, Calcharo's Resonance Liberation DMG Bonus is increased by {0} for {1}s.`,
                skillDetailNum: ["10%", "15"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Revenant Rush',
                skillDescription: `When Heavy Attack <span class="Highlight">"Death Messenger"</span> hits the target, the damage taken by Calcharo is reduced by {0} for {1}s.`,
                skillDetailNum: ["15%", "5"],
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
            name: "Covert Negotiation",
            description: `When Resonance Skill <span class="Highlight">Extermination index</span> hits a target, it additionally recovers {0} Resonance Energy. This can be triggered once every {1}s.`,
            detailNum: ["10", "20"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1301_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Zero-Sum Game",
            description: `After Calcharo casts Intro Skill <span class="Highlight">Wanted Criminal</span> or Intro Skill <span class="Highlight">"Necessary Means"</span>, his Resonance Skill DMG Bonus is increased by {0} for {1}s.`,
            detailNum: ["30%", "15"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonane Skill Damage Bonus"],
            sequenceBuff: [30   ],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1301_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Iron Fist Diplomacy",
            description: `During the Resonance Liberation <span class="Highlight">Deathblade Gear</span> state, Calcharo's Electro DMG Bonus is increased by {0}.`,
            detailNum: ["25%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Electro Damage Bonus"],
            sequenceBuff: [25],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1301_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Dark Alliance",
            description: `After casting Outro Skill <span class="Highlight">Shadowy Raid</span>, Electro DMG Bonus of all team members is increased by {0} for {1}s.`,
            detailNum: ["20%", "30"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Electro Damage Bonus"],
            sequenceBuff: [20],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1301_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Unconventional Compact",
            description: `Intro Skill <span class="Highlight">Wanted Criminal</span> and Intro Skill <span class="Highlight">"Necessary Means:</span> deal {0} more damage`,
            detailNum: ["50%"],
            sequenceBuffType: "Skill Buff",
            sequenceBuffAtrribute: ["Necessary Means"],
            sequenceBuff: [50],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1301_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "The Ultimatum",
            description: `When casting Resonance Liberation <span class="Highlight">"Death Messenger"</span>, Calcharo will summon {0} <span class="Highlight">Phantoms</span> to perform Coordinated Attacks. Each <span class="Highlight">Phantom</span> deals <span className="Thunder">Electro DMG</span> equal to {1} of Calcharo's ATK, which is considered Resonance Liberation damage.`,
            detailNum: ["2", "100.00%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1301_UI.png"
        }
    ]
}