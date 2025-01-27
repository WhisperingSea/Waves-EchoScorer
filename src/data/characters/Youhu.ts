import { WWCharacter } from "../WWCharacter";

const rarity4Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_4_Stars.webp";

export const Youhu: WWCharacter = {
    name: "Youhu",
    charaId: 1105,
    rarity: {
        alt: "4 Star",
        img: rarity4Star
    },
    element: "Glacio",
    weapon: "Gauntlets",
    bio: `Youhu, a natural expert in identifying antiques, is a capable speaker with distinctive tastes.
When dealing with treasures and antiques, this jubilant dynamo settles into calm perception, tracing their distant past through their wrinkles and textures.`,
    images: {
        portrait: "https://wuthering-waves-assets.pages.dev/portraits/Youhu_Full_Sprite.webp",
        icon_sq: "https://wuthering-waves-assets.pages.dev/icons_character/Youhu.png",
        model: "https://wuthering-waves-assets.pages.dev/models/Youhu.webp"
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
            item: "Topological Confinement",
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
        base_hp: 798,
        base_atk: 21,
        base_def: 86,
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
                typeName: 'Basic Attack',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill4.webp",
                skillName: 'Frosty Punches',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Perform up to 4 consecutive attacks, dealing <span class="Ice">Glacio DMG</span>\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                - When Frost is full, hold the <span class="Highlight">Normal Attack Button</span> to cast <span class="Highlight">Frostfall</span>\n
                - When Frost is full during the <span class="Highlight">Fortune Rolling</span> state, release the <span class="Highlight">Normal Attack Button</span> to cast <span class="Highlight">Frostfall</span> If Youhu cannot cast <span class="Highlight">Frostfall</span> at the moment, perform <span class="Highlight">Lucky Draw</span> once instead.\n
                <span class="Highlight">Youhu can obtain Frost in the following ways:</span>\n
                - When Frost is not full, hold <span class="Highlight">Normal Attack Button</span> to enter the <span class="Highlight">Fortune Rolling</span> state and restore Frost over time.\n
                - When <span class="Highlight">Basic Attacks</span> hit a target.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack: Frostfall</span>\n
                Youhu dashes forward, dealing <span class="Ice">Glacio DMG</span>, and performs <span class="Highlight">Lucky Draw</span> once.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Perform a Plunging Attack at the cost of STA, dealing <span class="Ice">Glacio DMG</span>\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                When Youhu possesses no <span class="Highlight">Antique</span>, quickly press <span class="Highlight">Normal Attack Button</span> right after a successful <span class="Highlight">Dodge</span> to thrust forward, dealing <span class="Ice">Glacio DMG</span>, and perform<span class="Highlight">Lucky Draw</span> once.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Stage 1 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["23.83%", "25.79%", "27.74%", "30.48%", "32.43%", "34.68%", "37.80%", "40.93%", "44.05%", "47.38%", "51.28%", "55.19%", "59.10%", "63.01%", "66.91%", "70.82%", "74.73%", "78.64%", "82.55%", "86.45%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Stage 2 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["16.05%+29.81%", "17.37%+32.25%", "18.69%+34.70%", "20.53%+38.12%", "21.84%+40.56%", "23.36%+43.37%", "25.46%+47.28%", "27.57%+51.19%", "29.67%+55.10%", "31.91%+59.26%", "34.54%+64.15%", "37.18%+69.04%", "39.81%+73.92%", "42.44%+78.81%", "45.07%+83.70%", "47.70%+88.59%", "50.34%+93.48%", "52.97%+98.36%", "55.60%+103.25%", "58.23%+108.14%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Stage 3 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["19.15%+23.40%", "20.72%+25.32%", "22.29%+27.24%", "24.49%+29.93%", "26.06%+31.84%", "27.86%+34.05%", "30.37%+37.12%", "32.88%+40.19%", "35.40%+43.26%", "38.06%+46.52%", "41.20%+50.36%", "44.34%+54.20%", "47.48%+58.03%", "50.62%+61.87%", "53.76%+65.71%", "56.90%+69.54%", "60.04%+73.38%", "63.18%+77.22%", "66.32%+81.06%", "69.46%+84.89%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Stage 4 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["58.53%", "63.33%", "68.13%", "74.84%", "79.64%", "85.16%", "92.84%", "100.52%", "108.20%", "116.35%", "125.95%", "135.55%", "145.15%", "154.74%", "164.34%", "173.94%", "183.54%", "193.13%", "202.73%", "212.33%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Heavy Attack: Frostfall DMG",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["7.27%*6", "7.87%*6", "8.46%*6", "9.29%*6", "9.89%*6", "10.58%*6", "11.53%*6", "12.48%*6", "13.43%*6", "14.45%*6", "15.64%*6", "16.83%*6", "18.02%*6", "19.21%*6", "20.40%*6", "21.60%*6", "22.79%*6", "23.98%*6", "25.17%*6", "26.36%*6"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Mid-air Attack DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["62.00%", "67.09%", "72.17%", "79.29%", "84.37%", "90.22%", "98.36%", "106.49%", "114.62%", "123.27%", "133.44%", "143.60%", "153.77%", "163.94%", "174.11%", "184.28%", "194.44%", "204.61%", "214.78%", "224.95%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Dodge Counter DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["14.53%*6", "15.73%*6", "16.92%*6", "18.58%*6", "19.78%*6", "21.15%*6", "23.05%*6", "24.96%*6", "26.86%*6", "28.89%*6", "31.27%*6", "33.66%*6", "36.04%*6", "38.42%*6", "40.80%*6", "43.19%*6", "45.57%*6", "47.95%*6", "50.33%*6", "52.72%*6"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Mid-air Attack STA Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 8
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillYouhu2.webp",
                skillName: 'Scroll Divination',
                skillDescription: `Youhu smashes her scroll down at the enemy, dealing <span class="Ice">Glacio DMG</span>, restoring HP for all party members nearby, and performs <span class="Highlight">Lucky Draw</span> once.
                <span class="Title">Lucky Draw</span>
                Youhu obtains a random <span class="Highlight">Antique</span> after the <span class="Highlight">Lucky Draw</span> With an <span class="Highlight">Antique</span>, her next <span class="Highlight">Basic Attack</span> will activate the corresponding <span class="Highlight">Antique Appraisal</span>
                Only one <span class="Highlight">Antique</span> can exist at a time, and the newly drawn <span class="Highlight">Antique</span> will replace the existing one.
                <span class="Title">Antique Appraisal</span>
                - <span class="Highlight">Chime</span>: Attack the enemy with a Chime, dealing <span class="Ice">Glacio DMG</span> Chime can effectively reduce the enemy's Vibration Strength.
                - <span class="Highlight">Ruyi</span>: Batter the enemy with a Ruyi, dealing <span class="Ice">Glacio DMG</span> Ruyi has a higher DMG Multiplier.
                - <span class="Highlight">Ding</span>: Ram into the enemy on a Ding, dealing <span class="Ice">Glacio DMG</span> Ding can effectively break the enemy's stance.
                - <span class="Highlight">Mask</span>: Throw a Mask at enemies in front, dealing <span class="Ice">Glacio DMG</span> Mask can pull in enemies along its path.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["78.70%", "85.16%", "91.61%", "100.64%", "107.10%", "114.52%", "124.84%", "135.17%", "145.49%", "156.46%", "169.37%", "182.28%", "195.18%", "208.09%", "221.00%", "233.90%", "246.81%", "259.72%", "272.62%", "285.53%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Scroll Divination Healing",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["1041+39.00%", "1097+40.56%", "1162+42.12%", "1302+44.46%", "1469+47.58%", "1627+50.70%", "1655+56.55%", "1692+63.18%", "1720+70.20%", "1767+81.90%", "1912+88.66%", "2058+95.41%", "2204+102.17%", "2350+108.92%", "2495+115.68%", "2641+122.44%", "2787+129.19%", "2933+135.95%", "3078+142.70%", "3224+149.46%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Chime DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["20.65%+25.07%*3+51.62%", "22.34%+27.13%*3+55.85%", "24.04%+29.19%*3+60.08%", "26.41%+32.06%*3+66.01%", "28.10%+34.12%*3+70.24%", "30.05%+36.48%*3+75.11%", "32.76%+39.77%*3+81.88%", "35.46%+43.06%*3+88.65%", "38.17%+46.35%*3+95.42%", "41.05%+49.85%*3+102.62%", "44.44%+53.96%*3+111.08%", "47.82%+58.07%*3+119.55%", "51.21%+62.18%*3+128.01%", "54.59%+66.29%*3+136.48%", "57.98%+70.40%*3+144.94%", "61.37%+74.51%*3+153.41%", "64.75%+78.63%*3+161.87%", "68.14%+82.74%*3+170.34%", "71.52%+86.85%*3+178.80%", "74.91%+90.96%*3+187.27%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Ruyi DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["68.91%+84.23%", "74.56%+91.13%", "80.21%+98.04%", "88.13%+107.71%", "93.78%+114.61%", "100.27%+122.56%", "109.31%+133.61%", "118.36%+144.66%", "127.40%+155.71%", "137.00%+167.45%", "148.30%+181.26%", "159.60%+195.07%", "170.91%+208.88%", "182.21%+222.70%", "193.51%+236.51%", "204.81%+250.32%", "216.11%+264.13%", "227.41%+277.94%", "238.71%+291.76%", "250.01%+305.57%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Ding DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["14.38%*6+57.49%", "15.55%*6+62.20%", "16.73%*6+66.91%", "18.38%*6+73.51%", "19.56%*6+78.23%", "20.92%*6+83.65%", "22.80%*6+91.19%", "24.69%*6+98.73%", "26.57%*6+106.27%", "28.57%*6+114.28%", "30.93%*6+123.71%", "33.29%*6+133.14%", "35.64%*6+142.56%", "38.00%*6+151.99%", "40.36%*6+161.42%", "42.72%*6+170.85%", "45.07%*6+180.27%", "47.43%*6+189.70%", "49.79%*6+199.13%", "52.14%*6+208.55%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Mask DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["5.77%*9+22.23%", "6.24%*9+24.06%", "6.71%*9+25.88%", "7.37%*9+28.43%", "7.85%*9+30.25%", "8.39%*9+32.35%", "9.15%*9+35.27%", "9.90%*9+38.18%", "10.66%*9+41.10%", "11.46%*9+44.20%", "12.41%*9+47.84%", "13.35%*9+51.49%", "14.30%*9+55.14%", "15.24%*9+58.78%", "16.19%*9+62.43%", "17.13%*9+66.07%", "18.08%*9+69.72%", "19.02%*9+73.36%", "19.97%*9+77.01%", "20.91%*9+80.65%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Concerto Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Chime Concerto Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Ding Concerto Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Ruyi Concerto Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 11
                    }, {
                        attributeName: "Mask Concerto Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 12
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillYouhu3.webp",
                skillName: `Fortune's Favor`,
                skillDescription: `Youhu hurls her scroll at the enemy, causing a <span class="Ice">Glacio DMG</span> blast in the area.
                On the blast, four buttons will appear. Choose a button within the specified time to obtain the corresponding <span class="Highlight">Antique</span> Otherwise, obtain one random <span class="Highlight">Antique</span>`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill DMG",
                        type: "Liberation",
                        skillDetailNum: [{
                            values: ["164.58%", "178.07%", "191.57%", "210.46%", "223.95%", "239.47%", "261.06%", "282.66%", "304.25%", "327.19%", "354.18%", "381.17%", "408.16%", "435.15%", "462.14%", "489.13%", "516.12%", "543.11%", "570.10%", "597.09%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Resonance Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Concerto Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 4
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillYouhu5.webp",
                skillName: 'Scroll of Wonders',
                skillDescription: `Toss out the scroll and perform <span class="Highlight">Lucky Draw</span> once.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill DMG",
                        type: "",
                        skillDetailNum: [{
                            values: ["45.00%+55.00%", "48.69%+59.51%", "52.38%+64.02%", "57.55%+70.34%", "61.24%+74.85%", "65.48%+80.04%", "71.39%+87.25%", "77.29%+94.47%", "83.20%+101.68%", "89.47%+109.35%", "96.85%+118.37%", "104.23%+127.39%", "111.61%+136.41%", "118.99%+145.43%", "126.37%+154.45%", "133.75%+163.47%", "141.13%+172.49%", "148.51%+181.51%", "155.89%+190.53%", "163.27%+199.55%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Concerto Regen",
                        type: "",
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
                skillName: 'Timeless Classics',
                skillDescription: `The incoming Resonator has their Coordinated Attack DMG Amplified by {0} for {1}s.`,
                skillDetailNum: ["100%", "28"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillYouhu4.webp",
                skillName: 'Poetic Essence',
                skillDescription: `At four Auspices, hold the <span class="Highlight">Normal Attack</span> button to release <span class="Highlight">Poetic Essence</span>, dealing <span class="Ice">Glacio DMG</span>, considered as Resonance Skill DMG, while restoring HP for all nearby party members.
                Youhu can hold up to four Auspices.
                <span class="Title">Poetic Essence</span>
                Deal <span class="Ice">Glacio DMG</span> to enemies within the range and additionally obtain one of the following effects based on the Auspice combination:
                - <span class="Highlight">Free Verse</span>: Four different types Auspices. Additionally reduce the Vibration Strength of hit enemies.
                - <span class="Highlight">Antithesis</span>: A pair of Auspices. Increase <span class="Highlight">Poetic Essence</span>'s DMG by {0}.
                - <span class="Highlight">Double Pun</span>: Two pairs of Auspices. Additionally restore HP for all nearby party members.
                - <span class="Highlight">Triplet</span>: Three identical Auspices. Increase <span class="Highlight">Poetic Essence</span>'s DMG by {1}.
                - <span class="Highlight">Perfect Rhyme</span>: Four identical Auspices. Simultaneously activate the effects of <span class="Highlight">Free Verse</span>, <span class="Highlight">Double Pun</span>, and <span class="Highlight">Triplet</span> at the same time.
                Casting <span class="Highlight">Poetic Essence</span> removes all Auspices.
                <span class="Title">Auspice</span>
                - Youhu gains an Auspice through <span class="Highlight">Antique Appraisal</span> Use <span class="Highlight">Basic Attack</span> while holding an <span class="Highlight">Antique</span> to receive the corresponding Auspice.
                - Youhu unlocks <span class="Highlight">Antiques</span> by casting Resonance Skill <span class="Highlight">Scroll Divination</span>, Intro Skill <span class="Highlight">Scroll of Wonders</span>, Heavy Attack <span class="Highlight">Frostfall</span>, Resonance Liberation <span class="Highlight">Fortune's Favor</span>, and <span class="Highlight">Dodge Counter</span>`,
                skillDetailNum: ["70%", "175%"],
                multipliers: [
                    {
                        attributeName: "Poetic Essence Skill DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["18.72%*10", "20.26%*10", "21.79%*10", "23.94%*10", "25.47%*10", "27.24%*10", "29.69%*10", "32.15%*10", "34.60%*10", "37.21%*10", "40.28%*10", "43.35%*10", "46.42%*10", "49.49%*10", "52.56%*10", "55.63%*10", "58.70%*10", "61.77%*10", "64.84%*10", "67.91%*10"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Poetic Essence Healing",
                        type: "Healing",
                        skillDetailNum: [{
                            values: ["1180+44.20%", "1243+45.97%", "1317+47.74%", "1475+50.39%", "1665+53.92%", "1844+57.46%", "1876+64.09%", "1918+71.60%", "1949+79.56%", "2002+92.82%", "2167+100.48%", "2332+108.13%", "2498+115.79%", "2663+123.45%", "2828+131.10%", "2993+138.76%", "3158+146.42%", "3324+154.07%", "3489+161.73%", "3654+169.39%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Double Pun Bonus Healing",
                        type: "Healing",
                        skillDetailNum: [{
                            values: ["694+26.00%", "731+27.04%", "775+28.08%", "868+29.64%", "979+31.72%", "1085+33.80%", "1103+37.70%", "1128+42.12%", "1147+46.80%", "1178+54.60%", "1275+59.10%", "1372+63.61%", "1469+68.11%", "1566+72.62%", "1663+77.12%", "1761+81.62%", "1858+86.13%", "1955+90.63%", "2052+95.14%", "2149+99.64%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Concerto Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 4
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Treasured Piece',
                skillDescription: `Restore HP for all nearby party members based on {0} of the healing provided by Resonance Skill <span class="Highlight">Scroll Divination</span> when Resonance Skill <span class="Highlight">Antique Appraisal</span> is cast.`,
                skillDetailNum: ["30%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Rare Find',
                skillDescription: `Gain {0} Glacio DMG Bonus for {1}s upon casting Intro Skill <span class="Highlight">Scroll of Wonders</span>`,
                skillDetailNum: ["15%", "14"],
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
            name: "Waterside Respite",
            description: `Youhu has a {0} chance to gain immunity to damage and interruption after casting <span class="Highlight">Lucky Draw</span> This effect lasts for {1}s or until she is switched out.`,
            detailNum: ["10%", "5"],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [],
            sequenceBuff: [],
            itemImg: ""
        },
        {
            node: "Sequence Node 2",
            name: "Sunroom Siesta",
            description: `<span class="Highlight">Antithesis</span>, <span class="Highlight">Triplet</span> and <span class="Highlight">Perfect Rhyme</span> additionally increase the DMG of <span class="Highlight">Poetic Essence</span> once.`,
            detailNum: [],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [],
            sequenceBuff: [],
            itemImg: ""
        },
        {
            node: "Sequence Node 3",
            name: "Restless Sleep",
            description: `Youhu's ATK is increased by {0}.`,
            detailNum: ["20%"],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [],
            sequenceBuff: [],
            itemImg: ""
        },
        {
            node: "Sequence Node 4",
            name: "Frosted Lullaby",
            description: `Every time Resonance Skill <span class="Highlight">Scroll Divination</span> is cast, there is a {0} chance that the skill will not enter Cooldown.`,
            detailNum: ["20%"],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [],
            sequenceBuff: [],
            itemImg: ""
        },
        {
            node: "Sequence Node 5",
            name: "Dreamland Meander",
            description: `When Intro Skill <span class="Highlight">Scroll of Wonders</span> is cast, Youhu's Crit. Rate is increased by {0} for {1}s.`,
            detailNum: ["15%", "14"],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [],
            sequenceBuff: [],
            itemImg: ""
        },
        {
            node: "Sequence Node 6",
            name: "Slumber Evermore",
            description: `When casting Resonance Skill <span class="Highlight">Antique Appraisal</span>, gain {0} stack of <span class="Highlight">Sky Blue</span>, stackable up to {1} times, lasting for {2}s. Each stack increases Youhu's Crit. DMG by {3}.`,
            detailNum: ["1", "4", "7", "15%"],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [],
            sequenceBuff: [],
            itemImg: ""
        },
    ]
}