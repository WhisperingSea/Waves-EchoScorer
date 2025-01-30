import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Camellya: WWCharacter = {
    name: "Camellya",
    charaId: 1603,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Havoc",
    weapon: "Sword",
    bio: `Bloom Bearer from the Black Shores, Camellya is a laid-back character free from shackles, with her personal aroma of "danger."
Intrigued by the belief in fate, she wanders the lands of her own accord, following such a chain of scenarios and its vague guidance.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_chun_UI.webp",
        icon_sq: "https://static.wikia.nocookie.net/wutheringwaves/images/b/bc/Camellya_Icon.png",
        model: "https://static.wikia.nocookie.net/wutheringwaves/images/d/d4/Camellya_Full_Sprite.png"
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
                item: "Topological Confinement",
                id: 5,
                value: "46"
            },
            {
                item: "Nova",
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
                item: "Dreamless Feather",
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
        base_hp: 826,
        base_atk: 36,
        base_def: 95,
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
            skillImg: "https://wutheringlab.com/wp-content/uploads/Camellya-Basic-Attack.webp",
            skillName: 'Burgeoning',
            skillDescription: `<span class="Title">Basic Attack</span>
                Perform up to 5 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.<br>
                After performing <span class="Highlight">Basic Attack Stage 3</span> or Heavy Attack <span class="Highlight">Pruning</span>, hold Normal Attack Button to continuously strike the target, dealing <span class="Dark">Havoc DMG</span>.<br>
                <span class="Highlight">Basic Attack Stage 4</span> is automatically followed by <span class="Highlight">Basic Attack Stage 5</span>.
                <div class="gap"></div>
                <span class="Title">Heavy Attack - Pruning</span>\n
                Consume STA to attack the target, dealing <span class="Dark">Havoc DMG</span>.
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Consume STA to perform Plunging Attack, dealing <span class="Dark">Havoc DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> right after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Dark">Havoc DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Basic Attack 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["31.45%", "34.03%", "36.61%", "40.27%", "42.80%", "45.77%", "49.89%", "54.02%", "58.15%", "62.53%"]
                    }],
                    index: 1
                }, {
                    attributeName: "Basic Attack 2 Damage",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["23.38%*2", "25.30%*2", "27.21%*2", "29.90%*2", "31.81%*2", "34.02%*2", "37.08%*2", "40.15%*2", "43.22%*2", "46.48%*2"]
                    }],
                    index: 2
                }, {
                    attributeName: "Basic Attack 3 Damage",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["25.50%*3", "27.59%*3", "29.68%*3", "32.61%*3", "34.70%*3", "37.11%*3", "40.45%*3", "43.80%*3", "43.80%*3", "50.70%*3"]
                    }],
                    index: 3
                }, {
                    attributeName: "Basic Attack 4 Damage",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["12.42%*20", "13.44%*20", "14.46%*20", "15.89%*20", "16.91%*20", "18.08%*20", "19.71%*20", "21.34%*20", "22.97%*20", "24.70%*20"]
                    }],
                    index: 4
                }, {
                    attributeName: "Basic Attack 5 Damage",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["24.23%*4", "26.22%*4", "28.20%*4", "30.98%*4", "32.97%*4", "35.25%*4", "38.43%*4", "41.61%*4", "44.79%*4", "48.17%*4"]
                    }],
                    index: 5
                }, {
                    attributeName: "Heavy Attack Damage",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["44.33%*3", "47.97%*3", "51.60%*3", "56.69%*3", "60.33%*3", "64.51%*3", "70.32%*3", "76.14%*3", "81.96%*3", "88.14%*3"]
                    }],
                    index: 6
                }, {
                    attributeName: "Mid-Air Attack Damage",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["33.00%*2", "35.71%*2", "38.42%*2", "42.21%*2", "44.91%*2", "48.02%*2", "52.35%*2", "56.68%*2", "61.01%*2", "65.61%*2"]
                    }],
                    index: 7
                }, {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["33.44%*3+42.99%", "36.18%*3+46.52%", "38.93%*3+50.05%", "42.76%*3+54.98%", "45.51%*3+58.51%", "48.66%*3+62.56%", "53.05%*3+68.20%", "57.43%*3+73.84%", "61.82%*3+79.48%", "66.48%*3+85.47%", "71.96%*3+92.52%", "77.45%*3+99.57%", "82.93%*3+106.62%", "88.41%*3+113.67%", "93.90%*3+120.73%", "99.38%*3+127.78%", "104.87%*3+134.83%", "110.35%*3+141.88%", "115.83%*3+148.93%", "121.32%*3+155.98%"]
                    }],
                    index: 8
                }, {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 9
                }, {
                    attributeName: "Plunging Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 10
                }
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://wutheringlab.com/wp-content/uploads/Camellya-Resonance-Skill.webp",
            skillName: 'Valse of Bloom and Blight',
            skillDescription: `<span class="Title">Crimson Blossom</span>
            Attack the target, dealing <span class="Dark">Havoc DMG</span> (considered Basic Attack DMG), then enter <span class="Highlight">Blossom Mode</span>.<br>
            This attack can be performed in mid-air.
            <span class="Title">Blossom Mode</span>
            - Unable to move while suspended on vines.<br>
            - <span class="Highlight">Basic Attack</span> and Heavy Attack <span class="Highlight">Pruning</span> are replaced by <span class="Highlight">Basic Attack Vining Waltz</span>: chain together 4 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>, considered Basic Attack DMG.<br>
            - When performing <span class="Highlight">Vining Waltz Stage 3</span>, hold <span class="Highlight">Normal Attack Button</span> to cast <span class="Highlight">Blazing Waltz</span> that deals <span class="Dark">Havoc DMG</span> before automatically performing <span class="Highlight">Vining Waltz Stage 4</span>.</br>
            - <span class="Highlight">Dodge Counter</span> is replaced by Dodge Counter <span class="Highlight">Atonement</span>. Press <span class="Highlight">Normal Attack</span> Button right after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Dark">Havoc DMG</span>, considered Basic Attack DMG.<br>
            - Resonance Skill is replaced by Resonance Skill <span class="Highlight">Floral Ravage</span>. Casting <span class="Highlight">Floral Ravage</span> deals <span class="Dark">Havoc DMG</span>, considered Basic Attack DMG.<br>
            - Resonance Skill <span class="Highlight">Floral Ravage</span> can be cast in mid-air.<br>
            - <span class="Highlight">Blossom Mode</span> ends after casting Resonance Skill <span class="Highlight">Floral Ravage</span>.<br>
            - <span class="Highlight">Blossom Mode</span> ends after using the <span class="Highlight">Levitator</span>.<br>
            - Jump is replaced with Basic Attack <span class="Highlight">Vining Ronde</span>. Press Jump to deal <span class="Dark">Havoc DMG</span> (considered Basic Attack DMG) and ends the <span class="Highlight">Blossom Mode</span>.<br>
            - Using Basic Attack <span class="Highlight">Vining Waltz</span>, Basic Attack <span class="Highlight">Blazing Waltz</span>, and Basic Attack <span class="Highlight">Vining Ronde</span> in mid-air consumes STA.<br>
            - Casting Resonance Skill <span class="Highlight">Floral Ravage</span> in mid-air doesn't restore STA.<br>
            - Consume STA continuously to stay suspended on the vines.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Crimson Blossom DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["57.15%*2", "61.84%*2", "66.53%*2", "73.09%*2", "77.77%*2", "83.16%*2", "90.66%*2", "98.16%*2", "105.66%*2", "105.66%*2"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Vining Waltz 1 DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["48.45%", "52.43%", "56.40%", "61.96%", "65.94%", "70.50%", "76.86%", "83.22%", "89.57%", "96.33%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Vining Waltz 2 DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["22.95%*2", "24.84%*2", "26.72%*2", "29.35%*2", "31.24%*2", "33.40%*2", "36.41%*2", "39.42%*2", "42.43%*2", "45.63%*2"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Vining Waltz 3 DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["11.04%*6", "11.95%*6", "12.86%*6", "14.12%*6", "15.03%*6", "16.07%*6", "17.52%*6", "18.97%*6", "20.41%*6", "21.95%*6"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Vining Waltz 4 DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["34.00%*3", "36.79%*3", "39.58%*3", "43.48%*3", "46.27%*3", "49.47%*3", "53.93%*3", "58.39%*3", "62.85%*3", "67.59%*3"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Blazing Waltz DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["11.04%*19", "11.95%*19", "12.86%*19", "14.12%*19", "15.03%*19", "16.07%*19", "17.52%*19", "18.97%*19", "20.41%*19", "21.95%*19"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Floral Ravage DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["26.46%*5", "28.63%*5", "30.80%*5", "33.84%*5", "36.01%*5", "38.51%*5", "41.98%*5", "45.45%*5", "48.92%*5", "52.61%*5"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Vining Ronde DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["26.64%*3", "28.82%*3", "31.00%*3", "34.06%*3", "36.24%*3", "38.76%*3", "42.25%*3", "45.74%*3", "49.24%*3", "52.95%*3"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Atonement DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["57.00%*2", "61.68%*2", "66.35%*2", "72.90%*2", "77.57%*2", "82.95%*2", "90.42%*2", "97.90%*2", "105.38%*2", "113.33%*2"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
                    }],
                    index: 10
                },
                {
                    attributeName: "Crimson Blossom Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["7", "7", "7", "7", "7", "7", "7", "7", "7", "7"]
                    }],
                    index: 11
                },
                {
                    attributeName: "Floral Ravage Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["7", "7", "7", "7", "7", "7", "7", "7", "7", "7"]
                    }],
                    index: 12
                },
                {
                    attributeName: "Wiring Waltz 1 STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 13
                },
                {
                    attributeName: "Wiring Waltz 2 STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 14
                },
                {
                    attributeName: "Wiring Waltz 3 STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 15
                },
                {
                    attributeName: "Wiring Waltz 4 STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 16
                },
                {
                    attributeName: "Blazing Waltz STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 17
                },
                {
                    attributeName: "Floral Ravage STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 18
                },
                {
                    attributeName: "STA Cost Per Second When Suspended",
                    type: "",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 19
                }
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://wutheringlab.com/wp-content/uploads/Camellya-Resonance-Liberation.webp",
            skillName: 'Fervor Efflorescent',
            skillDescription: `Attack the target, dealing <span class="Dark">Havoc DMG</span>.<br>
            This attack can be performed in mid-air.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill Damage",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["605.00%", "654.61%", "704.22%", "773.68%", "823.29%", "880.34%", "959.72%", "1039.09%", "1118.47%", "1202.81%"]
                    }],
                    index: 1
                }, {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 2
                }, {
                    attributeName: "Resonance Energy Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                    }],
                    index: 3
                }, {
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 4
                }
            ]
        },
        {
            skillId: 4,
            typeName: 'Intro Skill',
            skillImg: "https://wutheringlab.com/wp-content/uploads/Camellya-Intro-Skill.webp",
            skillName: 'Everblooming',
            skillDescription: `Attack the target, dealing <span class="Dark">Havoc DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill Damage",
                    type: "",
                    skillDetailNum: [{
                        values: ["100.00%", "108.20%", "116.40%", "127.88%", "136.08%", "145.51%", "158.63%", "171.75%", "184.87%", "198.81%"]
                    }],
                    index: 1
                }, {
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 2
                }
            ]
        },
        {
            skillId: 5,
            typeName: 'Outro Skill',
            skillName: 'Twining',
            skillDescription: `Attack the target, dealing <span class="Dark">Havoc DMG</span> equal to {0} of Camellya's ATK.<br>
            After activating Forte Circuit's Ephemeral, the next Outro Skill Twining deals additional <span class="Dark">Havoc DMG</span> equal to {1} of Camellya's ATK.`,
            skillDetailNum: ["329%", "459%"],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://wutheringlab.com/wp-content/uploads/Camellya-Forte-Circuit.webp",
            skillName: 'Vegative Universe',
            skillDescription: `
                Hitting a target with <span class="Highlight">Normal Attack</span>, Basic Attack <span class="Highlight">Vining Waltz</span>, Basic Attack <span class="Highlight">Vining Ronde</span>, Dodge Counter <span class="Highlight">Atonement</span>, Resonance Skill <span class="Highlight">Crimson Blossom</span>, and Resonance Skill <span class="Highlight">Floral Ravage</span> consumes <span class="Highlight">Crimson Pistils</span>. The Energy Regen Multiplier of this attack is increased by {0}.<br>
                Consuming <span class="Highlight">{1} Crimson Pistils</span> recovers <span class="Highlight">{2} Concerto Energy</span> and obtains <span class="Highlight">{3} Crimson Bud(s)</span>. Each bud lasts for <span class="Highlight">{4}s</span>, stacking up to <span class="Highlight">{5}</span> times.<br>
                <span class="Title">Forte Circuit: Ephemeral</span>
                When Concerto Energy is fully recovered, and <span class="Highlight">Ephemeral</span> is not on Cooldown, Resonance Skill is replaced with <span class="Highlight">Ephemeral</span>.<br>
                Casting <span class="Highlight">Ephemeral</span> consumes {6} Concerto Energy and deals <span class="Dark">Havoc DMG</span> to the targets. This damage is considered Basic Attack DMG.<br>
                Camellya enters <span class="Highlight">Budding Mode</span> after casting <span class="Highlight">Ephemeral</span>.
                <span class="Title">Budding Mode</span>
                - <span class="Highlight">Sweet Dream</span>: Increase the DMG Multiplier of <span class="Highlight">Normal Attack</span>, Basic Attack <span class="Highlight">Vining Waltz</span>, Basic Attack <span class="Highlight">Vining Ronde</span>, Dodge Counter <span class="Highlight">Atonement</span>, Resonance Skill <span class="Highlight">Crimson Blossom</span>, and Resonance Skill <span class="Highlight">Floral Ravage</span> by {7}.<br>
                - Casting <span class="Highlight">Ephemeral</span> consumes all <span class="Highlight">Crimson Buds</span>. Each <span class="Highlight">Crimson Bud</span> consumed additionally increases the DMG Multiplier of <span class="Highlight">Sweet Dream</span> by {8}, up to {9}.<br>
                - When in <span class="Highlight">Budding Mode</span>, Camellya cannot gain <span class="Highlight">Crimson Buds</span>.<br>
                - When in <span class="Highlight">Budding Mode</span>, the Energy Regen Multiplier of <span class="Highlight">Normal Attack</span>, Basic Attack <span class="Highlight">Vining Waltz</span>, Basic Attack <span class="Highlight">Vining Ronde</span>, Dodge Counter <span class="Highlight">Atonement</span>, Resonance Skill <span class="Highlight">Crimson Blossom</span>, and Resonance Skill <span class="Highlight">Floral Ravage</span> is reduced to {10}.<br>
                - <span class="Highlight">Budding Mode</span> ends when Camellya is switched off the field.<br>
                - <span class="Highlight">Budding Mode</span> ends when all <span class="Highlight">Crimson Pistils</span> are consumed.<br>
                <span class="Title">Crimson Pistil</span>
                Camellya can hold up to {11} Crimson Pistils.<br>
                - Casting Intro Skill <span class="Highlight">Everblooming</span> recovers {11} <span class="Highlight">Crimson Pistils</span>.<br>
                - Activating Forte Circuit's <span class="Highlight">Ephemeral</span> recovers {11} <span class="Highlight">Crimson Pistils</span>.`,
            skillDetailNum: ["150%", "10", "4", "1", "15", "10", "70", "50%", "5%", "50%", "0%", "100"],
            multipliers: [
                {
                    attributeName: 'Ephemeral DMG',
                    type: "",
                    skillDetailNum: [{
                        values: ["635.00%", "687.07%", "739.14%", "812.04%", "864.11%", "923.99%", "1007.31%", "1090.62%", "1173.93%", "1262.45%"]
                    }],
                    index: 1
                }, {
                    attributeName: 'Budding Mode Duration',
                    type: "",
                    skillDetailNum: [{
                        values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                    }],
                    index: 2
                }, {
                    attributeName: 'Ephemeral Cooldown',
                    type: "",
                    skillDetailNum: [{
                        values: ["25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s"]
                    }],
                    index: 3
                }
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Seedbed',
            skillDescription: `Gain {0} <span class="Dark">Havoc DMG</span> Bonus. Heavy Attack Pruning now deals Basic Attack DMG.`,
            skillDetailNum: ["15%"],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Epiphyte',
            skillDescription: `Gain {0} <span class="Dark">Havoc DMG</span> Bonus. Basic Attack and Basic Attack Vining Waltz gain increased resistance to interruption.`,
            skillDetailNum: ["15%"],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Somewhere No One Traveled",
            description: `Casting Intro Skill <span class="Highlight">Everblooming</span> increases Camellya's Crit. DMG by {0} for {1}s. This effect can be triggered every {2}s.<br>
            Immune to interruptions while casting Ephemeral.`,
            detailNum: ["28%", "18", "25"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Crit. Damage"],
            sequenceBuff: [28],
            itemImg: "https://static.wikia.nocookie.net/wutheringwaves/images/c/c8/Sequence_Node_Somewhere_No_One_Travelled.png"
        },
        {
            node: "Sequence Node 2",
            name: "Calling Upon the Silent Rose",
            description: `The DMG Multiplier of Resonance Skill <span class="Highlight">Ephemeral</span> is increased by {0}.`,
            detailNum: ["120%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonance Skill Damage Bonus"],
            sequenceBuff: [120],
            itemImg: "https://static.wikia.nocookie.net/wutheringwaves/images/d/dd/Sequence_Node_Calling_Upon_the_Silent_Rose.png"
        },
        {
            node: "Sequence Node 3",
            name: "A Bud Adorned by Thorns",
            description: `The DMG Multiplier of Resonance Liberation <span class="Highlight">Fervor Efflorescent</span> is increased by {0}. When in Budding Mode, Camellya's ATK is increased by {1}.`,
            detailNum: ["50%", "58%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonance Liberation Damage Bonus", "Attack"],
            sequenceBuff: [50, 58],
            itemImg: "https://static.wikia.nocookie.net/wutheringwaves/images/8/88/Sequence_Node_A_Bud_Adorned_by_Thorns.png"
        },
        {
            node: "Sequence Node 4",
            name: "Roots Set Deep in Eternity",
            description: `Casting <span class="Highlight">Everblooming</span> gives all team members {0} Basic Attack DMG Bonus for {1}s.`,
            detailNum: ["25%", "30"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Basic Attack Damage Bonus"],
            sequenceBuff: [20],
            itemImg: "https://static.wikia.nocookie.net/wutheringwaves/images/f/f7/Sequence_Node_Roots_Set_Deep_In_Eternity.png"
        },
        {
            node: "Sequence Node 5",
            name: "Infinity Held in Your Palm",
            description: `The DMG Multipliers of Intro Skill <span class="Highlight">Everblooming</span> is increased by {0} and Outro Skill <span class="Highlight">Twining</span> is increased by {1}.`,
            detailNum: ["303%", "68%"],
            sequenceBuffType: "Skill Buff",
            sequenceBuffAtrribute: ["Everblooming", "Twining"],
            sequenceBuff: [303, 68],
            itemImg: "https://static.wikia.nocookie.net/wutheringwaves/images/7/7d/Sequence_Node_Infinity_Held_in_Your_Palm.png"
        },
        {
            node: "Sequence Node 6",
            name: "Bloom For You Thousand Times Over",
            description: `The DMG Multiplier of Forte Circuit's <span class="Highlight">Sweet Dream</span> is additionally increased by {0}.
            Forte Circuit <span class="Highlight">Perennial</span>: Within {1}s after casting <span class="Highlight">Ephemeral</span>, if Concerto Energy is full and <span class="Highlight">Perennial</span> is not on cooldown, Resonance Skill is replaced with <span class="Highlight">Perennial</span>.
            Casting <span class="Highlight">Perennial</span> consumes {2} Concerto Energy and recovers {3} Crimson Pistils, dealing <span class="Dark">Havoc DMG</span> equal to {4} of Ephemeral, considered Basic Attack DMG. This skill can be cast once every {5}s.
            Camellya enters <span class="Highlight">Budding Mode</span> after casting <span class="Highlight">Perennial</span> and removes all Crimson Buds. The bonus DMG Multiplier granted by Forte Circuit's <span class="Highlight">Sweet Dream</span> is increased to {6}.
            Immune to interruptions when casting <span class="Highlight">Perennial</span>.`,
            detailNum: ["150%", "15", "50", "50", "100%", "25", "250%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://static.wikia.nocookie.net/wutheringwaves/images/9/9e/Sequence_Node_Bloom_For_You_Thousand_Times_Over.png"
        }
    ]
}