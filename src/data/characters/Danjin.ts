import { WWCharacter } from "../WWCharacter";

const rarity4Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_4_Stars.webp";

export const Danjin: WWCharacter = {
    name: "Danjin",
    charaId: 1602,
    rarity: {
        alt: "4 Star",
        img: rarity4Star
    },
    element: "Havoc",
    weapon: "Sword",
    bio: `A ranger straightforward in nature, with a strong sense of moral judgment.
She travels the lands refining her knowledge in an endeavour to seek the true meaning of good and evil.
Though perils lurk in every corner of her journey, she vowes to cleanse the world of villainy.`,
    images: {
        portrait: "https://wuthering-waves-assets.pages.dev/portraits/T_IconRole_Pile_micai_UI.png",
        icon_sq: "https://wuthering-waves-assets.pages.dev/icons_character/Danjin.png",
        model: "https://wuthering-waves-assets.pages.dev/models/Danjin_Full_Sprite.png"
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
            item: "Tailered Ring",
            id: 4,
            value: "4"
        },
        {
            item: "Strife Tacet Core",
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
            item: "Inert Metallic Drip",
            id: 5,
            value: "25"
        },
        {
            item: "Reactive Metallic Drip",
            id: 6,
            value: "28"
        },
        {
            item: "Polarized Metallic Drip",
            id: 7,
            value: "55"
        },
        {
            item: "Heterized Metallic Drip",
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
        base_hp: 755,
        base_atk: 21,
        base_def: 94,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 100,
        bonus_ele: 1.12,
        bonus_atk: 1.12,
        bonus_def: 0,
        bonus_heal: 0,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 0
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill1.webp",
                skillName: 'Execution',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Danjin performs up to 3 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Danjin combines her Forte with the blade in her hand and consumes Stamina to launch consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Consume Stamina to perform a Mid-air Plunging Attack, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to launch an attack, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter: Ruby Shades</span>\n
                After a successful Dodge Counter, Danjin can use the Resonance Skill <span class="Highlight">Crimson Fragment</span> to perform Resonance Skill: <span class="Highlight">Crimson Erosion</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["28.80%", "31.17%", "33.53%", "36.83%", "39.20%", "41.91%", "45.69%", "49.47%", "53.25%", "57.26%", "61.99%", "66.71%", "71.43%", "76.16%", "80.88%", "85.60%", "90.32%", "95.05%", "99.77%", "104.49%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["29.60%", "32.03%", "34.46%", "37.86%", "40.28%", "43.08%", "46.96%", "50.84%", "54.73%", "58.85%", "63.71%", "68.56%", "73.42%", "78.27%", "83.12%", "87.98%", "92.83%", "97.69%", "102.54%", "107.40%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["40.00%", "43.28%", "46.56%", "51.16%", "54.44%", "58.21%", "63.46%", "68.70%", "73.95%", "79.53%", "86.09%", "92.65%", "99.21%", "105.77%", "112.33%", "118.89%", "125.45%", "132.01%", "138.57%", "145.13%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Heavy Attack Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["18.67%*3", "20.20%*3", "21.73%*3", "23.88%*3", "25.41%*3", "27.17%*3", "29.62%*3", "32.06%*3", "34.51%*3", "37.12%*3", "40.18%*3", "43.24%*3", "46.30%*3", "49.36%*3", "52.42%*3", "55.48%*3", "58.55%*3", "61.61%*3", "64.67%*3", "67.73%*3"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Mid-air Attack Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["49.60%", "53.67%", "57.74%", "63.43%", "67.50%", "72.18%", "78.69%", "85.19%", "91.70%", "98.61%", "106.75%", "114.88%", "123.02%", "131.15%", "139.29%", "147.42%", "155.56%", "163.69%", "171.82%", "179.96%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Dodge Counter Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["32.00%*3", "34.63%*3", "37.25%*3", "40.93%*3", "43.55%*3", "46.57%*3", "50.77%*3", "54.96%*3", "59.16%*3", "63.62%*3", "68.87%*3", "74.12%*3", "79.37%*3", "84.62%*3", "89.86%*3", "95.11%*3", "100.36%*3", "105.61%*3", "110.86%*3", "116.10%*3"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Heavy Attack Stamina Consumption",
                        type: "",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        type: "",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 8
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillDanjin2.webp",
                skillName: 'Crimson Fragment',
                skillDescription: `When casting <span class="Highlight">Incinerating Will</span>, each attack consumes {0} of Danjin's max HP. When Danjin's HP is less than {1}, this no longer consumes HP.\n
                <div class="gap"></div>
                <span class="Title">Carmine Gleam</span>\n
                Danjin attacks the target, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Crimson Erosion</span>\n
                After <span class="Highlight">Basic Attack 2</span>, <span class="Highlight">Dodge Counter</span> or Intro Skill <span class="Highlight">Vindication</span>, use <span class="Highlight">Resonance Skill</span> to perform up to 2 consecutive strikes, dealing <span class="Dark">Havoc DMG</span>.\n
                When <span class="Highlight">Crimson Erosion II</span> hits a target, apply <span class="Highlight">Incinerating Will</span> to it.\n
                <div class="gap"></div>
                <span class="Title">Incinerating Will</span>\n
                Danjin's damage dealt to targets marked with <span class="Highlight">Incinerating Will</span> is increased by {2}.\n
                <div class="gap"></div>
                <span class="Title">Sanguine Pulse</span>\n
                Use <span class="Highlight">Resonance Skill</span> after <span class="Highlight">Basic Attack 3</span> to perform up to 3 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: ["3%", "1%", "20%"],
                multipliers: [
                    {
                        attributeName: "Carmine Gleam Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["19.20%*2", "20.78%*2", "22.35%*2", "24.56%*2", "26.13%*2", "27.94%*2", "30.46%*2", "32.98%*2", "35.50%*2", "38.18%*2", "41.33%*2", "44.47%*2", "47.62%*2", "50.77%*2", "53.92%*2", "57.07%*2", "60.22%*2", "63.37%*2", "66.52%*2", "69.66%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Crimson Erosion Part 1 Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["32.40%*2", "35.06%*2", "37.72%*2", "41.44%*2", "44.09%*2", "47.15%*2", "51.40%*2", "55.65%*2", "59.90%*2", "64.42%*2", "69.73%*2", "75.05%*2", "80.36%*2", "85.67%*2", "90.99%*2", "96.30%*2", "101.61%*2", "106.93%*2", "112.24%*2", "117.56%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Crimson Erosion Part 2 Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["30.00%*2", "32.46%*2", "34.92%*2", "38.37%*2", "40.83%*2", "43.66%*2", "47.59%*2", "51.53%*2", "55.47%*2", "59.65%*2", "64.57%*2", "69.49%*2", "74.41%*2", "79.33%*2", "84.25%*2", "89.17%*2", "94.09%*2", "99.01%*2", "103.93%*2", "108.85%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Sanguine Pulse Part 1 Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["28.20%*2", "30.52%*2", "32.83%*2", "36.07%*2", "38.38%*2", "41.04%*2", "44.74%*2", "48.44%*2", "52.14%*2", "56.07%*2", "60.69%*2", "65.32%*2", "69.94%*2", "74.57%*2", "79.19%*2", "83.82%*2", "88.44%*2", "93.07%*2", "97.69%*2", "102.32%*2"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Sanguine Pulse Part 2 Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["21.60%*3", "23.38%*3", "25.15%*3", "27.63%*3", "29.40%*3", "31.44%*3", "34.27%*3", "37.10%*3", "39.94%*3", "42.95%*3", "46.49%*3", "50.03%*3", "53.58%*3", "57.12%*3", "60.66%*3", "64.20%*3", "67.74%*3", "71.29%*3", "74.83%*3", "78.37%*3"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Sanguine Pulse Part 3 Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["32.40%*3", "35.06%*3", "37.72%*3", "41.44%*3", "44.09%*3", "47.15%*3", "51.40%*3", "55.65%*3", "59.90%*3", "64.42%*3", "69.73%*3", "75.05%*3", "80.36%*3", "85.67%*3", "90.99%*3", "96.30%*3", "101.61%*3", "106.93%*3", "112.24%*3", "117.56%*3"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Incinerating Will Duration",
                        type: "",
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
                        }],
                        index: 8
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillDanjin3.webp",
                skillName: 'Crimson Bloom',
                skillDescription: `Danjin's anger intensifies as she frantically swings her dual blades, performing multiple rapid consecutive attacks, and {0} Scarlet Burst attack(s), dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: ["1"],
                multipliers: [
                    {
                        attributeName: "Continuous Attack Damage",
                        type: "Liberation",
                        skillDetailNum: [{
                            values: ["24.69%*8", "26.72%*8", "28.74%*8", "31.58%*8", "33.60%*8", "35.93%*8", "39.17%*8", "42.41%*8", "45.64%*8", "49.09%*8", "53.13%*8", "57.18%*8", "61.23%*8", "65.28%*8", "69.33%*8", "73.38%*8", "77.43%*8", "81.48%*8", "85.52%*8", "89.57%*8"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Scarlet Burst Damage",
                        type: "Liberation",
                        skillDetailNum: [{
                            values: ["197.50%", "213.70%", "229.89%", "252.57%", "268.76%", "287.39%", "313.30%", "339.21%", "365.12%", "392.65%", "425.04%", "457.43%", "489.82%", "522.21%", "554.60%", "586.99%", "619.38%", "651.77%", "684.16%", "716.55%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Res. Energy Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 5
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillDanjin5.webp",
                skillName: 'Vindiction',
                skillDescription: `With unwavering determination, Danjin unleashes a strike, dealing <span class="Dark">Havoc DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "",
                        skillDetailNum: [{
                            values: ["25.00%*4", "27.05%*4", "29.10%*4", "31.97%*4", "34.02%*4", "36.38%*4", "39.66%*4", "42.94%*4", "46.22%*4", "49.71%*4", "53.81%*4", "57.91%*4", "62.01%*4", "66.11%*4", "70.21%*4", "74.31%*4", "78.41%*4", "82.51%*4", "86.61%*4", "90.71%*4"]
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
                skillName: 'Duality',
                skillDescription: `The next character (or other characters on a nearby team that activates an Outro Skill) gains {0} Havoc DMG Deepen for {1}s, or until the character is switched off field.`,
                skillDetailNum: ["23%", "14"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillDanjin4.webp",
                skillName: 'Serene Vigil',
                skillDescription: `<span class="Title">Heavy Attack: Chaoscleave</span>\n
                After accumulating {0} "Ruby Blossom", long press <span class="Highlight">Basic Attack</span> to consume all "Ruby Blossom" to cast <span class="Highlight">Chaoscleave</span>, dealing <span class="Dark">Havoc DMG</span> considered as Heavy Attack damage, and restore HP for Danjin.\n
                If current "Ruby Blossom" reaches over {1}, this skill consumes {2} "Ruby Blossom" to increase the damage multiplier of <span class="Highlight">Chaoscleave</span> and <span class="Highlight">Scatterbloom</span> performed this time.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack: Scatterbloom</span>\n
                Use <span class="Highlight">Basic Attack</span> after Heavy Attack <span class="Highlight">Chaoscleave</span> to cast <span class="Highlight">Shatter</span> to attack the target, dealing <span class="Dark">Havoc DMG</span>, considered as Heavy Attack damage.\n
                <div class="gap"></div>
                <span class="Title">Ruby Blossom</span>\n
                Danjin obtains "Ruby Blossom" when using Resonance Skill <span class="Highlight">Crimson Fragment</span>.`,
                skillDetailNum: ["60", "120", "120", "120"],
                multipliers: [
                    {
                        attributeName: "Chaoscleave Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["30.00%*7", "32.46%*7", "34.92%*7", "38.37%*7", "40.83%*7", "43.66%*7", "47.59%*7", "51.53%*7", "55.47%*7", "59.65%*7", "64.57%*7", "69.49%*7", "74.41%*7", "79.33%*7", "84.25%*7", "89.17%*7", "94.09%*7", "99.01%*7", "103.93%*7", "108.85%*7"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Scatterbloom Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["90.00%", "97.38%", "104.76%", "115.10%", "122.48%", "130.96%", "142.77%", "154.58%", "166.39%", "178.93%", "193.69%", "208.45%", "223.21%", "237.97%", "252.73%", "267.49%", "282.25%", "297.01%", "311.77%", "326.53%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Full Energy Chaoscleave Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["72.00%*7", "77.91%*7", "83.81%*7", "92.08%*7", "97.98%*7", "104.77%*7", "114.22%*7", "123.66%*7", "133.11%*7", "143.15%*7", "154.96%*7", "166.76%*7", "178.57%*7", "190.38%*7", "202.19%*7", "214.00%*7", "225.80%*7", "237.61%*7", "249.42%*7", "261.23%*7"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Full Energy Scatterbloom Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["216.00%", "233.72%", "251.43%", "276.23%", "293.94%", "314.31%", "342.65%", "370.98%", "399.32%", "429.43%", "464.86%", "500.28%", "535.71%", "571.13%", "606.55%", "641.98%", "677.40%", "712.83%", "748.25%", "783.67%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Chaoscleave Healing",
                        type: "",
                        skillDetailNum: [{
                            values: ["36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36", "36"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Chaoscleave Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50", "50"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Crimson Light',
                skillDescription: `Damage of Resonance Skill <span class="Highlight">Crimson Erosion</span> triggered by <span class="Highlight">Dodge Counter: Ruby Shades</span> is increased by {0}. The HP cost and stacks of "Ruby Blossom" recovered are doubled.`,
                skillDetailNum: ["20%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Overflow',
                skillDescription: `After casting the Resonance Skill <span class="Highlight">Sanguine Pulse</span>, Danjin's Heavy Attack damage is increased by {0} for {1}s.`,
                skillDetailNum: ["30%", "5"],
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
            name: "Crimson Heart of Justice",
            description: `When Danjin attacks a target with Resonance Skill's <span class="Highlight">Incinerating Will</span>, her ATK is increased by {0} for {1}s, stacking up to {2} times. Danjin loses {3} stacks of this effect each time she takes damage.`,
            detailNum: ["5%", "6", "6", "1"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [5],
            stacks: 6,
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1602_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Dusted Mirror",
            description: `When Danjin attacks a target with Resonance Skill's <span class="Highlight">Incinerating Will</span>, her damage dealt is increased by {0}.`,
            detailNum: ["20%"],
            sequenceBuffType: "Skill Damage Buff",
            sequenceBuffAtrribute: ["Damage Increse"],
            sequenceBuff: [20],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1602_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Fleeting Blossom",
            description: `Resonance Liberation DMG Bonus is increased by {0}.`,
            detailNum: ["30%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonance Liberation Damage Bonus"],
            sequenceBuff: [30],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1602_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Solitary Carnation",
            description: `When Danjin has more than {0} "Ruby Blossom", her Crit. Rate is increased by {1}.
This effect lasts until the end of <span class="Highlight">Heavy Attack: Scatterbloom</span> even after all "Ruby Blossom" is consumed when casting <span class="Highlight">Heavy Attack: Chaoscleave</span>.`,
            detailNum: ["60", "15%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Crit. Rate"],
            sequenceBuff: [15],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1602_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Reigning Blade",
            description: `Danjin's Havoc DMG Bonus is increased by {0}, and further increased by another {2} when her HP is lower than {1}.`,
            detailNum: ["15%", "60%", "15%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Havoc Damage Bonus"],
            sequenceBuff: [15, 15],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1602_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Bloodied Jade",
            description: `Heavy Attack <span class="Highlight">Chaoscleave</span> increases the ATK of all team members by {0} for {1}s.`,
            detailNum: ["20%", "20"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [20],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1602_UI.png"
        }
    ]
}