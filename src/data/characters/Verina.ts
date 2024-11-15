import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Verina: WWCharacter = {
    name: "Verina",
    charaId: 1501,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Spectro",
    weapon: "Rectifier",
    bio: `Formerly a member of a Pioneer Association expedition team from the New Federation, Verina is a humble and determined plant breeder.
Somehow she always ends up taking on caretaker duties in any expedition, showing remarkable tenacity for her age.`,
    images: {
        portrait: "https://wuthering-waves-assets.pages.dev/portraits/T_IconRole_Pile_jueyuan_UI.png",
        icon_sq: "https://wuthering-waves-assets.pages.dev/icons_character/Verina.png",
        model: "https://wuthering-waves-assets.pages.dev/models/Verina_Full_Sprite.webp"
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
            item: "Elegy Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Belle Poppy",
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
            item: "Lento Helix",
            id: 5,
            value: "25"
        },
        {
            item: "Adagio Helix",
            id: 6,
            value: "28"
        },
        {
            item: "Andante Helix",
            id: 7,
            value: "55"
        },
        {
            item: "Presto Helix",
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
        base_hp: 1139,
        base_atk: 27,
        base_def: 90,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 175,
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
                typeName: 'Basic Attack',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill5.webp",
                skillName: 'Cultivation',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Verina performs up to 5 consecutive attacks with vines, dealing <span class="Light">Spectro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Verina consumes Stamina to charge forward, dealing <span class="Light">Spectro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Verina consumes Stamina to perform up to 3 consecutive attacks in mid-air, dealing <span class="Light">Spectro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Heavy Attack</span>\n
                Hold <span class="Highlight">Basic Attack</span> to consume Stamina and perform an Mid-air Plunging Attack, dealing <span class="Light">Spectro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Light">Spectro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["19.04%", "20.61%", "22.17%", "24.35%", "25.91%", "27.71%", "30.21%", "32.70%", "35.20%", "37.86%", "40.98%", "44.10%", "47.22%", "50.35%", "53.47%", "56.59%", "59.71%", "62.84%", "65.96%", "69.08%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["25.73%", "27.84%", "29.95%", "32.91%", "35.02%", "37.44%", "40.82%", "44.19%", "47.57%", "51.16%", "55.38%", "59.60%", "63.81%", "68.03%", "72.25%", "76.47%", "80.69%", "84.91%", "89.13%", "93.35%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["12.87%*2", "13.92%*2", "14.98%*2", "16.46%*2", "17.51%*2", "18.72%*2", "20.41%*2", "22.10%*2", "23.79%*2", "25.58%*2", "27.69%*2", "29.80%*2", "31.91%*2", "34.02%*2", "36.13%*2", "38.24%*2", "40.35%*2", "42.46%*2", "44.57%*2", "46.68%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["33.86%", "36.64%", "39.42%", "43.30%", "46.08%", "49.27%", "53.72%", "58.16%", "62.60%", "67.32%", "72.87%", "78.43%", "83.98%", "89.53%", "95.08%", "100.64%", "106.19%", "111.74%", "117.30%", "122.85%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Part 5 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["36.03%", "38.98%", "41.93%", "46.07%", "49.02%", "52.42%", "57.14%", "61.87%", "66.60%", "71.62%", "77.52%", "83.43%", "89.34%", "95.25%", "101.15%", "107.06%", "112.97%", "118.88%", "124.78%", "130.69%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Heavy Attack Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["50.00%", "54.10%", "58.20%", "63.94%", "68.04%", "72.76%", "79.32%", "85.88%", "92.44%", "99.41%", "107.61%", "115.81%", "124.01%", "132.21%", "140.41%", "148.61%", "156.81%", "165.01%", "173.21%", "181.41%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Mid-Air Attack Part 1 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["28.35%", "30.68%", "33.00%", "36.26%", "38.58%", "41.26%", "44.98%", "48.70%", "52.42%", "56.37%", "61.02%", "65.67%", "70.32%", "74.97%", "79.61%", "84.26%", "88.91%", "93.56%", "98.21%", "102.86%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Mid-Air Attack Part 2 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["26.75%", "28.95%", "31.14%", "34.21%", "36.41%", "38.93%", "42.44%", "45.95%", "49.46%", "53.19%", "57.57%", "61.96%", "66.35%", "70.73%", "75.12%", "79.51%", "83.90%", "88.28%", "92.67%", "97.06%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Mid-Air Attack Part 3 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["12.79%*3", "13.84%*3", "14.88%*3", "16.35%*3", "17.40%*3", "18.61%*3", "20.28%*3", "21.96%*3", "23.64%*3", "25.42%*3", "27.52%*3", "29.61%*3", "31.71%*3", "33.81%*3", "35.90%*3", "38.00%*3", "40.09%*3", "42.19%*3", "44.29%*3", "46.38%*3"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Mid-Air Heavy Attack Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["31.00%", "33.55%", "36.09%", "39.65%", "42.19%", "45.11%", "49.18%", "53.25%", "57.31%", "61.64%", "66.72%", "71.80%", "76.89%", "81.97%", "87.06%", "92.14%", "97.22%", "102.31%", "107.39%", "112.48%"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Dodge Counter Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["65.00%", "70.33%", "75.66%", "83.13%", "88.46%", "94.59%", "103.11%", "111.64%", "120.17%", "129.23%", "139.89%", "150.55%", "161.21%", "171.87%", "182.53%", "193.19%", "203.85%", "214.51%", "225.17%", "235.83%"]
                        }],
                        index: 11
                    }, {
                        attributeName: "Heavy Attack Stamina Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 12
                    }, {
                        attributeName: "Mid-Air Attack Stamina Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 13
                    }, {
                        attributeName: "Mid-Air Heavy Attack Stamina Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 14
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillVerina2.webp",
                skillName: 'Botany Experiment',
                skillDescription: `Verina converges an energy field in front to grow foliage, dealing <span class="Light">Spectro DMG</span> within the range.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["18.00%*3+36.00%", "19.48%*3+38.96%", "20.96%*3+41.91%", "23.02%*3+46.04%", "24.50%*3+48.99%", "26.20%*3+52.39%", "28.56%*3+57.11%", "30.92%*3+61.83%", "33.28%*3+66.56%", "35.79%*3+71.58%", "38.74%*3+77.48%", "41.69%*3+83.38%", "44.65%*3+89.29%", "47.60%*3+95.19%", "50.55%*3+101.10%", "53.50%*3+107.00%", "56.45%*3+112.90%", "59.41%*3+118.81%", "62.36%*3+124.71%", "65.31%*3+130.62%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 3
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillVerina3.webp",
                skillName: 'Arboreal Flourish',
                skillDescription: `Verina nourishes nearby foliage at rapid speed, dealing <span class="Light">Spectro DMG</span> while restoring HP to all Characters on teams nearby. A <span class="Highlight">Photosynthesis Mark</span> is applied to the target on hit.
                <div class="gap"></div>
                <span class="Title">Photosynthesis Mark</span>
                Whenever a Character on a team nearby performs an attack on targets with a Photosynthesis Mark, Verina performs a Coordinated Attack, dealing <span class="Light">Spectro DMG</span> while restoring HP to the active Character dealing damage on a team nearby, triggered once per second.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "Liberation",
                        skillDetailNum: [{
                            values: ["100.00%", "108.20%", "116.40%", "127.88%", "136.08%", "145.51%", "158.63%", "171.75%", "184.87%", "198.81%", "215.21%", "231.61%", "248.01%", "264.41%", "280.81%", "297.21%", "313.61%", "330.01%", "346.41%", "362.81%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Arboreal Flourish Healing",
                        type: "Healing",
                        skillDetailNum: [{
                            values: ["500+11.33%", "600+13.03%", "700+14.17%", "800+15.87%", "825+17.00%", "890+18.13%", "900+19.27%", "915+20.40%", "930+21.53%", "950+23.80%", "1029+25.76%", "1107+27.73%", "1186+29.69%", "1264+31.65%", "1342+33.62%", "1421+35.58%", "1499+37.54%", "1577+39.51%", "1656+41.47%", "1734+43.43%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Coordinated Attack Damage",
                        type: "Liberation",
                        skillDetailNum: [{
                            values: ["5.00%", "5.41%", "5.82%", "6.40%", "6.81%", "7.28%", "7.94%", "8.59%", "9.25%", "9.95%", "10.77%", "11.59%", "12.41%", "13.23%", "14.05%", "14.87%", "15.69%", "16.51%", "17.33%", "18.15%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Coordinated Attack Healing",
                        type: "Healing",
                        skillDetailNum: [{
                            values: ["225+5.10%", "270+5.87%", "315+6.38%", "360+7.14%", "372+7.65%", "401+8.16%", "405+8.67%", "412+9.18%", "419+9.69%", "428+10.71%", "463+11.59%", "499+12.48%", "534+13.36%", "569+14.24%", "604+15.13%", "640+16.01%", "675+16.89%", "710+17.78%", "745+18.66%", "781+19.54%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Photosynthesis Mark Duration",
                        type: "",
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Res. Energy Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 8
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillVerina5.webp",
                skillName: 'Verdant Growth',
                skillDescription: `Verina attacks the target, dealing <span class="Light">Spectro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "",
                        skillDetailNum: [{
                            values: ["50.00%", "54.10%", "58.20%", "63.94%", "68.04%", "72.76%", "79.32%", "85.88%", "92.44%", "99.41%", "107.61%", "115.81%", "124.01%", "132.21%", "140.41%", "148.61%", "156.81%", "165.01%", "173.21%", "181.41%"]
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
                skillName: 'Blossom',
                skillDescription: `Verina recovers HP to the next character (or other characters on a nearby team that activates an Outro Skill) equal to {0} of her ATK per second for {1}s. All Characters on nearby teams gain {2} all-Type DMG Deepen for {3}s.`,
                skillDetailNum: ["19%", "6", "15%", "30"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillVerina4.webp",
                skillName: 'Starflower Blooms',
                skillDescription: `<span class="Title">Heavy Attack: Starflower Blooms</span>\n
                When casting <span class="Highlight">Heavy Attack</span>, if Verina carries "Photosynthesis Energy", Verina consumes {0} stack of "Photosynthesis Energy" to recover Concerto Energy and restore HP for all party members nearby;\n
                <span class="Highlight">Heavy Attack: Starflower Blooms</span> deals <span class="Light">Spectro DMG</span>, considered as Heavy Attack damage.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack: Starflower Blooms</span>\n
                When casting <span class="Highlight">Mid-air Attack</span>, if Verina carries "Photosynthesis Energy", Verina consumes {0} stack of "Photosynthesis Energy" to recover Concerto Energy and restore HP for all party members nearby;\n
                <span class="Highlight">Mid-air Attack: Starflower Blooms</span> deals <span class="Light">Spectro DMG</span>, considered as Basic Attack damage.\n
                Verina can cast <span class="Highlight">Mid-air Attack: Starflower Blooms</span> by using <span class="Highlight">Basic Attack</span> after casting <span class="Highlight">Heavy Attack: Starflower Blooms</span>.\n
                <div class="gap"></div>
                <span class="Title">Photosynthesis Energy</span>\n
                Verina can hold up to {1} "Photosynthesis Energy".\n
                Verina obtains {2} stack of "Photosynthesis Energy" for every Basic Attack 5 on hit;\n
                Verina obtains {3} stack of "Photosynthesis Energy" for every Resonance Skill <span class="Highlight">Botany Experiment</span> on hit;\n
                Verina obtains {4} stack of "Photosynthesis Energy" for every Intro Skill <span class="Highlight">Verdant Growth</span> on hit.`,
                skillDetailNum: ["1", "4", "1", "1", "1"],
                multipliers: [
                    {
                        attributeName: "Heavy Attack: Starflower Blooms Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["32.67%+49.00%", "35.35%+53.02%", "38.03%+57.04%", "41.78%+62.67%", "44.46%+66.68%", "47.54%+71.30%", "51.82%+77.73%", "56.11%+84.16%", "60.40%+90.59%", "64.95%+97.42%", "70.31%+105.46%", "75.66%+113.49%", "81.02%+121.53%", "86.38%+129.57%", "91.74%+137.60%", "97.09%+145.64%", "102.45%+153.67%", "107.81%+161.71%", "113.17%+169.75%", "118.52%+177.78%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Mid-Air Attack: Starflower Bloom Part 1 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["34.02%", "36.81%", "39.60%", "43.51%", "46.30%", "49.51%", "53.97%", "58.43%", "62.90%", "67.64%", "73.22%", "78.80%", "84.38%", "89.96%", "95.54%", "101.12%", "106.70%", "112.27%", "117.85%", "123.43%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Mid-Air Attack: Starflower Bloom Part 2 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["32.10%", "34.74%", "37.37%", "41.05%", "43.69%", "46.71%", "50.93%", "55.14%", "59.35%", "63.82%", "69.09%", "74.35%", "79.62%", "84.88%", "90.15%", "95.41%", "100.67%", "105.94%", "111.20%", "116.47%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Mid-Air Attack: Starflower Bloom Part 3 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["15.34%*3", "16.60%*3", "17.86%*3", "19.62%*3", "20.88%*3", "22.33%*3", "24.34%*3", "26.35%*3", "28.36%*3", "30.50%*3", "33.02%*3", "35.53%*3", "38.05%*3", "40.57%*3", "43.08%*3", "45.60%*3", "48.11%*3", "50.63%*3", "53.14%*3", "55.66%*3"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Starflower Blooms Healing",
                        type: "Healing",
                        skillDetailNum: [{
                            values: ["625+14.17%", "750+16.29%", "875+17.71%", "1000+19.83%", "1032+21.25%", "1113+22.67%", "1125+24.08%", "1144+25.50%", "1163+26.92%", "1188+29.75%", "1286+32.20%", "1384+34.66%", "1482+37.11%", "1580+39.57%", "1678+42.02%", "1776+44.47%", "1874+46.93%", "1972+49.38%", "2070+51.84%", "2168+54.29%"]
                        }],
                        index: 5
                    }, {
                        attributeName: '"Photosynthesis Energy" Con. Energy Regen',
                        type: "",
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Grace of Life',
                skillDescription: `Verina protects a party member from fatal damage and grants a shield with strength equal to {0} of Verina's ATK, lasting for {1}s. This can be triggered once every {2} minutes.`,
                skillDetailNum: ["120%", "10", "10"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Gift of Nature',
                skillDescription: `When Verina casts Heavy Attack <span class="Highlight">Starflower Blooms</span>, Mid-air Attack <span class="Highlight">Starflower Blooms</span>, Resonance Liberation <span class="Highlight">Arboreal Flourish</span> or Outro Skill <span class="Highlight">Blossom</span>, ATK for all party members is increased by {0} for {1}s.`,
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
            name: "Moment of Emergence",
            description: `Outro Skill <span class="Highlight">Blossom</span> grants the next character a continuous Healing effect, recovering HP by {1} of Verina's ATK every {0}s for {2}s.`,
            detailNum: ["5", "20%", "30"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Sprouting Reflections",
            description: `Resonance Skill <span class="Highlight">Botany Experiment</span> additionally grants {0} [Photosynthetic Energy] and {1} Con. Energy.`,
            detailNum: ["1", "10"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "The Choice to Flourish",
            description: `Healing of Resonance Liberation's <span class="Highlight">Photosynthesis Mark</span> is increased by {0}.`,
            detailNum: ["12%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Blossoming Embrace",
            description: `Heavy Attack <span class="Highlight">Starflower Blooms</span>, Mid-Air Attack <span class="Highlight">Starflower Blooms</span>, Resonance Liberation <span class="Highlight">Arboreal Flourish</span> and Outro Skill <span class="Highlight">Blossom</span> increases the Spectro DMG Bonus of all team members by {0} for {1}s.`,
            detailNum: ["15%", "24"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: ["Spectro Damage Bonus"],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Miraculous Blooms",
            description: `When Verina heals a team member with HP less than {0}, her Healing is increased by {1}.`,
            detailNum: ["50%", "20%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Joyous Harvest",
            description: `Heavy Attack <span class="Highlight">Starflower Blooms</span> and Mid-Air Attack <span class="Highlight">Starflower Blooms</span> deal {0} more damage. They will trigger Coordinated Attack {1} time and heal all characters nearby. The DMG of this Coordinated Attack and the Healing are equal to those of the Resonance Liberation's <span class="Highlight">Photosynthesis Mark</span>.`,
            detailNum: ["20%", "1"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1503_UI.png"
        }
    ]
}