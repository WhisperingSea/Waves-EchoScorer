import { WWCharacter } from "../WWCharacter";

const rarity4Star = "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_stars/Icon_4_Stars.webp";

export const Aalto: WWCharacter = {
    name: "Aalto",
    charaId: 1403,
    rarity: {
        alt: "5 Star",
        img: rarity4Star
    },
    element: "Aero",
    weapon: "Pistols",
    bio: `Aalto is an enigmatic Information Broker, known for his elusive nature and welcoming smile.
Rumor has it he'll provide any information at the right price.
He was invited to join the Black Shores, a mysterious organization based on an isolated island, for his intel-gathering expertise.
Both working for the Black Shores as Consultants, Aalto and Encore have become an inseparable and lively duo during missions.
Despite his skittish demeanor, Aalto's true character shines through as a reliable and attentive individual`,
    images: {
        portrait: "https://whisperingsea.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_qiushui_UI.png",
        icon_sq: "https://whisperingsea.github.io/wuthering-waves-assets/images/icons_character/Aalto.png",
        model: "https://whisperingsea.github.io/wuthering-waves-assets/images/models/Aalto_Full_body_illustration.png"
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
            item: "Wintry Bell",
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
            item: "Impure Phlogiston",
            id: 5,
            value: "25"
        },
        {
            item: "Extracted Phlogiston",
            id: 6,
            value: "28"
        },
        {
            item: "Refined Phlogiston",
            id: 7,
            value: "55"
        },
        {
            item: "Flawless Phlogiston",
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
        base_hp: 788,
        base_atk: 21,
        base_def: 88,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 150,
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
                skillName: 'Half Truths',
                skillDescription: `<span class="Title">Basic Attack</span>
                Aalto fires up to 5 consecutive shots, dealing <span class="Wind">Aero DMG</span>. Basic Attack 4 will spread the "Mist" forward, which lasts for {0}s.
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>
                Aalto enters the aiming state for a more powerful shot.
                The aimed shot fired after charging finishes deals <span class="Wind">Aero DMG</span>.
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>
                Aalto consumes Stamina to perform consecutive shots at the target in mid-air, dealing <span class="Wind">Aero DMG</span>.
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: ["1.5"],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["16%", "17.32%", "18.63%", "20.47%", "21.78%", "23.29%", "25.39%", "27.48%", "29.58%", "31.81%", "34.44%", "37.06%", "39.69%", "42.31%", "44.93%", "47.56%", "50.18%", "52.81%", "55.43%", "58.05%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["26.67%", "28.86%", "31.04%", "34.11%", "36.29%", "38.81%", "42.31%", "45.8%", "49.3%", "53.02%", "57.39%", "61.77%", "66.14%", "70.51%", "74.89%", "79.26%", "83.63%", "88.01%", "92.38%", "96.75%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["24%*2", "25.97%*2", "27.94%*2", "30.7%*2", "32.66%*2", "34.93%*2", "38.08%*2", "41.22%*2", "44.37%*2", "47.72%*2", "51.66%*2", "55.59%*2", "59.53%*2", "63.46%*2", "67.4%*2", "71.34%*2", "75.27%*2", "79.21%*2", "83.14%*2", "87.08%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["25.34%*2", "27.42%*2", "29.49%*2", "32.4%*2", "34.48%*2", "36.87%*2", "40.19%*2", "43.51%*2", "46.84%*2", "50.37%*2", "54.52%*2", "58.68%*2", "62.83%*2", "66.99%*2", "71.14%*2", "75.3%*2", "79.45%*2", "83.61%*2", "87.76%*2", "91.92%*2"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Part 5 Damage",
                        skillDetailNum: [{
                            values: ["90.4%", "97.82%", "105.23%", "115.61%", "123.02%", "131.55%", "143.41%", "155.27%", "167.13%", "179.73%", "194.55%", "209.38%", "224.21%", "239.03%", "253.86%", "268.68%", "283.51%", "298.33%", "313.16%", "327.99%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Mid-Air Attack",
                        skillDetailNum: [{
                            values: ["30%", "32.46%", "34.92%", "38.37%", "40.83%", "43.66%", "47.59%", "51.53%", "55.47%", "59.65%", "64.57%", "69.49%", "74.41%", "79.33%", "84.25%", "89.17%", "94.09%", "99.01%", "103.93%", "108.85%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Aimed Shot Damage",
                        skillDetailNum: [{
                            values: ["18.00%", "19.48%", "20.96%", "23.02%", "24.50%", "26.20%", "28.56%", "30.92%", "33.28%", "35.79%", "38.74%", "41.69%", "44.65%", "47.60%", "50.55%", "53.50%", "56.45%", "59.41%", "62.30%", "65.31%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Fully Charged Aimed Shot Damage",
                        skillDetailNum: [{
                            values: ["40.50%", "43.83%", "47.15%", "51.80%", "55.12%", "58.94%", "64.25%", "69.56%", "74.88%", "80.52%", "87.17%", "93.81%", "100.45%", "107.09%", "113.73%", "120.38%", "127.02%", "133.66%", "140.30%", "146.94%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["107.7%", "116.54%", "125.37%", "137.73%", "146.56%", "156.72%", "170.85%", "184.98%", "199.11%", "214.12%", "231.79%", "249.45%", "267.11%", "284.77%", "302.44%", "320.1%", "337.76%", "355.43%", "373.09%", "390.75%"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 10
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Shift Trick',
                skillDescription: `<span class="Title">Mist Avatar</span>\n
                Casts "Mist" and {0} "Mist Avatar(s)" to taunt the surrounding targets. The avatars inherit a portion of Aalto's HP and generate {1} <span class="Highlight">Mist Bullets</span> around them, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mist Missiles</span>\n
                Deals <span class="Wind">Aero DMG</span>, considered as Resonance Skill damage.`,
                skillDetailNum: ["1", "6"],
                multipliers: [
                    {
                        attributeName: "Mist Missile Damage",
                        skillDetailNum: [{
                            values: ["30%", "32.46%", "34.92%", "38.37%", "40.83%", "43.66%", "47.59%", "51.53%", "55.47%", "59.65%", "64.57%", "69.49%", "74.41%", "79.33%", "84.25%", "89.17%", "94.09%", "99.01%", "103.93%", "108.85%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Mist Avatar HP",
                        skillDetailNum: [{
                            values: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Mist Avatar Duration",
                        skillDetailNum: [{
                            values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 5
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Flower in the Mist',
                skillDescription: `Generate a "Gate of Quandary" in front, dealing <span class="Wind">Aero DMG</span>. When bullets pass through the "Gate of Quandary", ATK is increased. "Gate of Quandary" lasts for {0}s.`,
                skillDetailNum: ["10"],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["200%", "216.4%", "232.8%", "255.76%", "272.16%", "291.02%", "317.26%", "343.5%", "369.74%", "397.62%", "430.42%", "463.22%", "496.02%", "528.82%", "561.62%", "594.42%", "627.22%", "660.02%", "692.82%", "725.62%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Gate Of Quandary ATK Increase",
                        skillDetailNum: [{
                            values: ["10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%", "10%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 5
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillName: 'Feint Shot',
                skillDescription: `Aalto shows up out of thin air to performs rapid continuous shooting, dealing <span class="Wind">Aero damage</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["33.34%*3", "36.07%*3", "38.8%*3", "42.63%*3", "45.36%*3", "48.51%*3", "52.88%*3", "57.25%*3", "61.63%*3", "66.27%*3", "71.74%*3", "77.21%*3", "82.67%*3", "88.14%*3", "93.61%*3", "99.07%*3", "104.54%*3", "110.01%*3", "115.47%*3", "120.94%*3"]
                        }],
                        index: 20
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 24
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Dissolving Mist',
                skillDescription: `The next character (or other characters on a nearby team that activates an Outro Skill) gains {0} Aero DMG Deepen for {1}s, or until the character is switched off field.`,
                skillDetailNum: ["23%", "14"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Misty Cover',
                skillDescription: `When Aalto passes through "Mist" or "Gate of Quandary", he enters "Mistcloak Dash".\n
                <div class="gap"></div>
                <span class="Title">Mistcloak Dash</span>\n
                Movement speed increased;\n
                During this period, "Mist Drops" are continuously consumed, and for each {0} "Mist Drop" consumed, {1} Resonance Skill <span class="Highlight">Mist Missile</span> is generated.\n
                <div class="gap"></div>
                <span class="Title">Mist Drops</span>\n
                Aalto can hold up to {2} Mist Drops.\n
                When <span class="Highlight">Basic Attack</span> or <span class="Highlight">Mid-air Attack</span> passes through "Mist" and hits the target, {3} "Mist Drop" is recovered.`,
                skillDetailNum: ["1", "1", "6", "1"],
                multipliers: [
                    {
                        attributeName: "Mist Missile DMG",
                        skillDetailNum: [{
                            values: ["30%", "32.46%", "34.92%", "38.37%", "40.83%", "43.66%", "47.59%", "51.53%", "55.47%", "59.65%", "64.57%", "69.49%", "74.41%", "79.33%", "84.25%", "89.17%", "94.09%", "99.01%", "103.93%", "108.85%"]
                        }],
                        index: 21
                    }, {
                        attributeName: "Movement Speed Increase",
                        skillDetailNum: [{
                            values: ["40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%", "40%"]
                        }],
                        index: 22
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Perfect Performance',
                skillDescription: `Aalto's <span class="Highlight">Heavy Attack</span> will always critically hit, triggered once every {0}s.`,
                skillDetailNum: ["30"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Mid-game Break',
                skillDescription: `Aalto will continuously recover Stamina when he is in the Forte Circuit <span class="Highlight">Miscloak Dash</span> state.`,
                skillDetailNum: [],
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
            name: "Trickster's Opening Show",
            description: `The cooldown of Resonance Skill <span class="Highlight">Shift Trick</span> is reduced by {0}s.`,
            detailNum: ["4"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1403_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Mistweaver's Debut",
            description: `"Mist Avatar" inherits {0} more HP from Aalto. When Aalto attacks targets taunted by the "Mist Avatar(s)", his ATK is increased by {1}.`,
            detailNum: ["100%", "15%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [15],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1403_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Hazey Transition",
            description: `When Aalto's <span class="Highlight">Basic Attack</span> or <span class="Highlight">Mid-Air Attack</span> passes through the "Gate of Quandary", 2 more bullets will be generated, dealing {0} of the DMG of <span class="Highlight">Basic Attack</span> or <span class="Highlight">Mid-Air Attack</span>.`,
            detailNum: ["50%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1403_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Blake Bloom for Finale",
            description: `The damage of Resonance Skill <span class="Highlight">Mist Bullets</span> is increased by {0}; Aalto receives {1} less damage in his Forte Circuit <span class="Highlight">Mistcloak Dash</span> state.`,
            detailNum: ["30%", "30%"],
            sequenceBuffType: "Skill Damage Buff",
            sequenceBuffAtrribute: ["Mist Bullets"],
            sequenceBuff: [30],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1403_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Applause of the Lost",
            description: `In the Forte Circuit <span class="Highlight">Mistcloak Dash</span> state, Aalto's Aero DMG Bonus is increased by {0} for {1}s.`,
            detailNum: ["25%", "6"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Aero Damage Bonus"],
            sequenceBuff: [25],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1403_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Broker's Secrets",
            description: `Resonance Liberation <span class="Highlight">Flower in the Mist</span> now additionally increases Crit. Rate by {0}. When Aalto's Heavy Attack passes through the "Gate of Quandary", the damage dealt is additionally increased by {1}.`,
            detailNum: ["8%", "50%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Crit. Rate"],
            sequenceBuff: [8],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1403_UI.png"
        }
    ]
}