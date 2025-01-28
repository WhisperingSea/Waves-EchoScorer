import { WWCharacter } from "../WWCharacter";

const rarity4Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_4_Stars.webp";

export const Taoqi: WWCharacter = {
    name: "Taoqi",
    charaId: 1601,
    rarity: {
        alt: "4 Star",
        img: rarity4Star
    },
    element: "Havoc",
    weapon: "Broadblade",
    bio: `Taoqi oversees Jinzhou's border defense at the Ministry of Development.
Despite her unhurried demeanor, she is an exceptionally dependable individual who works tirelessly to protect others and provide a peaceful haven.
With effortless efficiency, she balances her work and personal life, steadily moving towards her ultimate goal: creating a future of true safety for all.`,
    images: {
        portrait: "https://wuthering-waves-assets.pages.dev/portraits/T_IconRole_Pile_taohua_UI.png",
        icon_sq: "https://wuthering-waves-assets.pages.dev/icons_character/Taoqi.png",
        model: "https://wuthering-waves-assets.pages.dev/models/Taoqi_Model.png"
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
            item: "Gold-Dissolving Feather",
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
            item: "Unwarranted Feather",
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
        base_hp: 716,
        base_atk: 18,
        base_def: 128,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 1.12,
        bonus_atk: 0,
        bonus_def: 1.152,
        bonus_heal: 0,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Normal Attack',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill2.webp",
                skillName: 'Concealed Edge',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Taoqi performs up to 4 continuous attacks, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Taoqi consumes Stamina and enters <span class="Highlight">Rocksteady Defense</span> state.\n
                <div class="gap"></div>
                <span class="Title">Rocksteady Defense</span>\n
                Taoqi's damage taken is reduced by {0};\n
                -When Taoqi is attacked during <span class="Highlight">Rocksteady Defense</span>, she will cat <span class="Highlight">Strategic Parry</span>;\n
                -<span class="Highlight">Strategic Parry</span> is automatically cast after <span class="Highlight">Rocksteady Defense</span> lasts for {1}s;\n
                -If Taoqi is attacked when casting Resonance Skill <span class="Highlight">Rocksteady Shield</span>, <span class="Highlight">Strategic Parry</span> is automatically cast.\n
                <div class="gap"></div>
                <span class="Title">Strategic Parry</span>\n
                Taoqi attacks the target, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Taoqi consumes Stamina to perform a Mid-Air Plunging Attack, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: ["35%", "3"],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["45.34%", "49.06%", "52.78%", "57.99%", "61.7%", "65.98%", "71.93%", "77.88%", "83.83%", "90.15%", "97.58%", "105.02%", "112.45%", "119.89%", "127.32%", "134.76%", "142.2%", "149.63%", "157.07%", "164.5%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["42.67%", "46.17%", "49.67%", "54.57%", "58.07%", "62.09%", "67.69%", "73.29%", "78.89%", "84.84%", "91.84%", "98.83%", "105.83%", "112.83%", "119.83%", "126.82%", "133.82%", "140.82%", "147.82%", "154.82%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["56%", "60.6%", "65.19%", "71.62%", "76.21%", "81.49%", "88.84%", "96.18%", "103.53%", "111.34%", "120.52%", "129.71%", "138.89%", "148.07%", "157.26%", "166.44%", "175.63%", "184.81%", "193.99%", "203.18%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["136%", "147.16%", "158.31%", "173.92%", "185.07%", "197.9%", "215.74%", "233.58%", "251.43%", "270.39%", "292.69%", "314.99%", "337.3%", "359.6%", "381.91%", "404.21%", "426.51%", "448.82%", "471.12%", "493.43%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Heavy Attack Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["110.84%", "119.93%", "129.02%", "141.75%", "150.84%", "161.29%", "175.83%", "190.37%", "204.91%", "220.37%", "238.54%", "256.72%", "274.9%", "293.08%", "311.25%", "329.43%", "347.61%", "365.79%", "383.97%", "402.14%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Heavy Attack Damage Reduction",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["35%", "35%", "35%", "35%", "35%", "35%", "35%", "35%", "35%", "35%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Strategic Parry Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["39.59%", "42.84%", "46.08%", "50.63%", "53.87%", "57.61%", "62.8%", "67.99%", "73.19%", "78.7%", "85.2%", "91.69%", "98.18%", "104.67%", "111.16%", "117.66%", "124.15%", "130.64%", "137.13%", "143.62%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["62%", "67.09%", "72.17%", "79.29%", "84.37%", "90.22%", "98.36%", "106.49%", "114.62%", "123.27%", "133.44%", "143.6%", "153.77%", "163.94%", "174.11%", "184.28%", "194.44%", "204.61%", "214.78%", "224.95%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Dodge Counter Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["125%", "135.25%", "145.5%", "159.85%", "170.1%", "181.89%", "198.29%", "214.69%", "231.09%", "248.52%", "269.02%", "289.52%", "310.02%", "330.52%", "351.02%", "371.52%", "392.02%", "412.52%", "433.02%", "453.52%"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Heavy Attack Stamina Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Mid-Air Attack Stamina Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 11
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillTaoqi2.webp",
                skillName: 'Fortified Defense',
                skillDescription: `Taoqi deals <span class="Dark">Havoc DMG</span> to surrounding targets, generating {0} Rocksteady Shield and restoring HP to Taoqi.
                If attacked when casting <span class="Highlight">Fortified Defense</span>, <span class="Highlight">Strategic Parry</span> will be automatically cast.
                <div class="gap"></div>
                <span class="Title">Rocksteady Shield</span>
                When the active character is attacked, {1} <span class="Highlight">Rocksteady Shield</span> is consumed to reduce the damage taken.`,
                skillDetailNum: ["3", "1"],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["67.86%", "73.43%", "78.99%", "86.78%", "92.35%", "98.75%", "107.65%", "116.55%", "125.46%", "134.92%", "146.05%", "157.18%", "168.3%", "179.43%", "190.56%", "201.69%", "212.82%", "223.95%", "235.08%", "246.21%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "HP recovery",
                        type: "Healing",
                        skillDetailNum: [{
                            values: ["950+45.00%", "1064+46.80%", "1187+48.60%", "1330+51.30%", "1501+54.90%", "1662+58.50%", "1691+65.25%", "1729+72.90%", "1757+81.00%", "1805+94.50%", "1953+102.30%", "2102+110.09%", "2251+117.89%", "2400+125.68%", "2549+133.48%", "2698+141.27%", "2847+149.07%", "2996+156.86%", "3145+164.66%", "3293+172.45%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Rocksteady Shield Damage Reduction",
                        type: "",
                        skillDetailNum: [{
                            values: ["15%", "15%", "15%", "15%", "15%", "15%", "15%", "15%", "15%", "15%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 5
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillTaoqi3.webp",
                skillName: 'Unmovable',
                skillDescription: `Launch an attack based on Taoqi's DEF on the target, dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: ["2"],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "Liberation",
                        skillDetailNum: [{
                            values: ["226.2%", "244.75%", "263.3%", "289.27%", "307.82%", "329.15%", "358.83%", "388.5%", "418.18%", "449.71%", "486.81%", "523.91%", "561%", "598.1%", "635.2%", "672.29%", "709.39%", "746.49%", "783.58%", "820.68%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Res. Energy Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 4
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillTaoqi5.webp",
                skillName: 'Defense Formation',
                skillDescription: `Attack the target, dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "",
                        skillDetailNum: [{
                            values: ["105%", "113.61%", "122.22%", "134.28%", "142.89%", "152.79%", "166.57%", "180.34%", "194.12%", "208.76%", "225.98%", "243.2%", "260.42%", "277.64%", "294.86%", "312.08%", "329.3%", "346.52%", "363.74%", "380.96%"]
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
                skillName: 'Iron Will',
                skillDescription: `The next character (or other characters on a nearby team that activates an Outro Skill) gains {0} Resonance Skill DMG Deepen for {1}s, or until the character is switched off field.`,
                skillDetailNum: ["38%", "14"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillTaoqi4.webp",
                skillName: 'Power Shift',
                skillDescription: `<span class="Title">Timed Counters</span>\n
                When carrying "Resolving Caliber", use <span class="Highlight">Basic Attack</span> after <span class="Highlight">Heavy Attack: Strategic Parry</span> or <span class="Highlight">Intro Skill: Defense Formation</span> to cast <span class="Highlight">Timed Counters</span>, performing up to 3 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>, considered as Basic Attack damage.\n
                <span class="Highlight">Timed Counters</span> consume {0} "Resolving Caliber" upon hitting an enemy to grant a shield.\n
                After casting the Intro Skill <span class="Highlight">Defense Formation</span>, using <span class="Highlight">Basic Attack</span> can directly cast <span class="Highlight">Timed Counters</span>.\n
                <div class="gap"></div>
                <span class="Title">Resolving Caliber</span>\n
                Taoqi can hold up to {1} Resolving Caliber.\n
                <span class="Highlight">Basic Attack 4</span> will consume all of Taoqi's <span class="Highlight">Rocksteady Shields</span> to obtain that many "Resolving Caliber".\n
                While <span class="Highlight">Rocksteady Shield</span> exists, when the on-field character is attacked, {2} <span class="Highlight">Rocksteady Shield</span> will be consumed, and "Resolving Caliber" is recovered.\n
                After <span class="Highlight">Rocksteady Shield</span> ends, all remaining <span class="Highlight">Rocksteady Shield</span> will be consumed to grant that many "Resolving Caliber".`,
                skillDetailNum: ["1", "3", "1"],
                multipliers: [
                    {
                        attributeName: "Timed Counters Part 1 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["43.36%", "46.92%", "50.47%", "55.45%", "59%", "63.09%", "68.78%", "74.47%", "80.16%", "86.2%", "93.31%", "100.42%", "107.53%", "114.64%", "121.75%", "128.86%", "135.97%", "143.08%", "150.19%", "157.3%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Timed Counters Part 2 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["55.8%", "60.38%", "64.95%", "71.36%", "75.93%", "81.19%", "88.51%", "95.83%", "103.16%", "110.93%", "120.08%", "129.23%", "138.38%", "147.54%", "156.69%", "165.84%", "174.99%", "184.14%", "193.29%", "202.44%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Timed Counters Part 3 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["73.14%", "79.14%", "85.14%", "93.53%", "99.53%", "106.43%", "116.02%", "125.62%", "135.22%", "145.41%", "157.41%", "169.4%", "181.39%", "193.39%", "205.38%", "217.38%", "229.37%", "241.37%", "253.36%", "265.36%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Timed Counters Part 1 Shield",
                        type: "Shield",
                        skillDetailNum: [{
                            values: ["300+11.25%", "336+11.7%", "375+12.15%", "420+12.82%", "474+13.72%", "525+14.62%", "534+16.31%", "546+18.22%", "555+20.25%", "570+23.62%", "617+25.57%", "664+27.52%", "711+29.47%", "758+31.42%", "805+33.36%", "852+35.31%", "899+37.26%", "946+39.21%", "993+41.16%", "1040+43.11%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Timed Counters Part 2 Shield",
                        type: "Shield",
                        skillDetailNum: [{
                            values: ["450+16.87%", "504+17.55%", "562+18.22%", "630+19.23%", "711+20.58%", "787+21.93%", "801+24.46%", "819+27.33%", "832+30.37%", "855+35.43%", "925+38.36%", "996+41.28%", "1066+44.2%", "1137+47.13%", "1207+50.05%", "1278+52.97%", "1348+55.9%", "1419+58.82%", "1489+61.74%", "1560+64.67%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Timed Counters Part 3 Shield",
                        type: "Shield",
                        skillDetailNum: [{
                            values: ["750+28.12%", "840+29.25%", "937+30.37%", "1050+32.06%", "1185+34.31%", "1312+36.56%", "1335+40.78%", "1365+45.56%", "1387+50.62%", "1425+59.06%", "1542+63.93%", "1660+68.8%", "1777+73.67%", "1895+78.55%", "2012+83.42%", "2130+88.29%", "2247+93.16%", "2365+98.03%", "2482+102.91%", "2600+107.78%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Shield Duration",
                        type: "",
                        skillDetailNum: [{
                            values: ["18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18", "18"]
                        }],
                        index: 7
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Steadfast Protection',
                skillDescription: `During the duration of the Resonance Skill <span class="Highlight">Rocksteady Shield</span>, the Character's DEF is increased by {0}.`,
                skillDetailNum: ["15%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Unyielding',
                skillDescription: `After <span class="Highlight">Heavy Attack: Strategic Parry</span> is successfully triggered, {0} Stamina is recovered.`,
                skillDetailNum: ["25"],
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
            name: "Essense of Tranquility",
            description: `Forte Circuit <span class="Highlight">Power Shift</span>'s Shield is increased by {0}.`,
            detailNum: ["40%"],
            sequenceBuffType: "Shield Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1601_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Silent Strength",
            description: `The Crit. Rate and Crit. DMG of Resonance Liberation <span class="Highlight">Unmovable</span> is increased by {0} and {1}, respectively.`,
            detailNum: ["20%", "20%"],
            sequenceBuffType: "Skill Critcal Buff",
            sequenceBuffAtrribute: ["Unmovable"],
            sequenceBuff: [20],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1601_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Keen-eyed Observer",
            description: `The duration of Resonance Skill <span class="Highlight">Rocksteady Shield</span> is extended to {0}s.`,
            detailNum: ["30"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1601_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Heavylifting Duty",
            description: `When Taoqi successfully triggers Heavy Attack <span class="Highlight">Strategic Parry</span>, she restores {0} HP and increases her DEF by {1} for {2}s. This can be triggered once every {3}s.`,
            detailNum: ["25%", "50%", "5", "15"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["DEF"],
            sequenceBuff: [50],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1601_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Benevolent Guardian",
            description: `The damage of Forte Circuit <span class="Highlight">Power Shift</span> is increased by {0}. When Forte Circuit <span class="Highlight">Power Shift</span> hits a target, restore {1} Resonance Energy.`,
            detailNum: ["50%", "20"],
            sequenceBuffType: "Forte Skill Buff",
            sequenceBuffAtrribute: ["Forte Circuit"],
            sequenceBuff: [50],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1601_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Defender of Peace",
            description: `The damage of Taoqi's Basic Attack and Heavy Attack is increased by {0} while the Shield granted by Resonance Skill <span class="Highlight">Rocksteady Shield</span> holds.`,
            detailNum: ["40%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Basic Attack Damage Bonus", "Heavy Attack Damage Bonus"],
            sequenceBuff: [40],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1601_UI.png"
        }
    ]
}