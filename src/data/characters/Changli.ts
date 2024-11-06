import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Changli: WWCharacter = {
    name: "Changli",
    charaId: 1204,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Fusion",
    weapon: "Sword",
    bio: `Counselor to the Jinzhou Magistrate, Changli excels at leveraging human nature to corner her enemies into traps.
Being the mentor to Jinhsi, she is persuasive and patient.
She entertains an unwavering aspiration, holding her ground in the endless game against time and chaos.`,
    images: {
        portrait: "https://wuthering-waves-assets.pages.dev/portraits/rolecard_1205.png",
        icon_sq: "https://wuthering-waves-assets.pages.dev/icons_character/Changli.png",
        model: "https://wuthering-waves-assets.pages.dev/models/ChangliCharacter_Sprite.png"
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
            item: "Rage Tactet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Pavo Plum",
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
            item: "",
            id: 5,
            value: "25"
        },
        {
            item: "",
            id: 6,
            value: "28"
        },
        {
            item: "",
            id: 7,
            value: "55"
        },
        {
            item: "",
            id: 8,
            value: "67"
        },
        {
            item: "",
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
        base_hp: 831,
        base_atk: 37,
        base_def: 90,
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill1.webp",
                skillName: 'Blazing Enlightment',
                skillDescription: `<span class="Title">Basic Attack</span>
                Perform up to 4 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>.
                After releasing <span class="Highlight">Ground Basic Attack Stage 4</span>, Changli enters <span class="Highlight">True Sight</span>, lasting for 12s.
                <span class="Title">Mid-air Attack</span>
                Consume Stamina to perform up to 4 consecutive attacks in mid-air, dealing <span class="Fire">Fusion DMG</span>.
                After releasing <span class="Highlight">Mid-air Attack Stage 4</span>, Changli enters <span class="Highlight">True Sight</span>, lasting for 12s.
                <span class="Title">Heavy Attack</span>
                Hold <span class="Highlight">Basic Attack</span> on the ground to consume Stamina to perform an upward strike, dealing <span class="Fire">Fusion DMG</span>. Use <span class="Highlight">Basic Attack</span> within a certain time to release <span class="Highlight">Mid-air Attack Stage 3</span>.
                <span class="Title">Mid-air Heavy Attack</span>
                Shortly after holding <span class="Highlight">Basic Attack</span> in mid-air or using Basic Attack <span class="Highlight">True Sight: Charge</span>, use <span class="Highlight">Basic Attack</span> to consume Stamina to perform a Plunging Attack, dealing <span class="Fire">Fusion DMG</span>. Use <span class="Highlight">Basic Attack</span> within a certain time to release <span class="Highlight">Basic Attack Stage 3</span>.
                <span class="Title">Dodge Counter</span>
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Fire">Fusion DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {                    
                        attributeName: "Part 1 DMG",
                        type: "Basic",
                        skillDetailNum: [{values: ["14.84%*2", "16.05%*2", "17.27%*2", "18.97%*2", "20.19%*2", "21.59%*2", "23.53%*2", "25.48%*2", "27.43%*2", "29.49%*2", "31.93%*2", "34.36%*2", "36.79%*2", "39.22%*2", "41.66%*2", "44.09%*2", "46.52%*2", "48.95%*2", "51.39%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Basic Attack 2 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["17.85%*2", "19.32%*2", "20.78%*2", "22.83%*2", "24.30%*2", "25.98%*2", "28.32%*2", "30.66%*2", "33.00%*2", "35.49%*2", "38.42%*2", "41.35%*2", "44.27%*2", "47.20%*2", "50.13%*2", "53.06%*2", "55.98%*2", "58.91%*2", "61.84%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Basic Attack 3 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["18.34%*3", "19.84%*3", "21.34%*3", "23.45%*3", "24.95%*3", "26.68%*3", "29.08%*3", "31.49%*3", "33.89%*3", "36.45%*3", "39.46%*3", "42.46%*3", "45.47%*3", "48.48%*3", "51.48%*3", "54.49%*3", "57.49%*3", "60.50%*3", "63.51%*3"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Basic Attack 4 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["25.50%+14.88%*4", "27.60%+16.10%*4", "29.69%+17.32%*4", "32.61%+19.03%*4", "34.71%+20.25%*4", "37.11%+21.65%*4", "40.46%+23.60%*4", "43.80%+25.55%*4", "47.15%+27.50%*4", "50.70%+29.58%*4", "54.88%+32.02%*4", "59.07%+34.46%*4", "63.25%+36.90%*4", "67.43%+39.34%*4", "71.61%+41.78%*4", "75.79%+44.21%*4", "79.98%+46.65%*4", "84.16%+49.09%*4", "88.34%+51.53%*4"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Mid-Air Attack 1 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["30.86%", "33.39%", "35.92%", "39.46%", "41.99%", "44.90%", "48.95%", "53.00%", "57.05%", "61.35%", "66.41%", "71.47%", "76.53%", "81.59%", "86.65%", "91.71%", "96.77%", "101.83%", "106.89%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Mid-Air Attack 2 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["25.59%*2", "27.69%*2", "29.79%*2", "32.72%*2", "34.82%*2", "37.23%*2", "40.59%*2", "43.95%*2", "47.30%*2", "50.87%*2", "55.07%*2", "59.26%*2", "63.46%*2", "67.65%*2", "71.85%*2", "76.05%*2", "80.24%*2", "84.44%*2", "88.63%*2"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Mid-Air Attack 3 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["22.13%*3", "23.95%*3", "25.76%*3", "28.30%*3", "30.12%*3", "32.20%*3", "35.11%*3", "38.01%*3", "40.91%*3", "44.00%*3", "47.63%*3", "51.26%*3", "54.89%*3", "58.51%*3", "62.14%*3", "65.77%*3", "69.40%*3", "73.03%*3", "76.66%*3"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Mid-Air Attack 4 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["19.13%+11.16%*4", "20.70%+12.08%*4", "22.27%+12.99%*4", "24.46%+14.27%*4", "26.03%+15.19%*4", "27.83%+16.24%*4", "30.34%+17.70%*4", "32.85%+19.17%*4", "35.36%+20.63%*4", "38.03%+22.18%*4", "41.16%+24.01%*4", "44.30%+25.84%*4", "47.44%+27.67%*4", "50.57%+29.50%*4", "53.71%+31.33%*4", "56.85%+33.16%*4", "59.98%+34.99%*4", "63.12%+36.82%*4", "66.26%+38.65%*4"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Heavy Attack",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["14.58%*3+18.75%", "15.78%*3+20.28%", "16.97%*3+21.82%", "18.65%*3+23.97%", "19.84%*3+25.51%", "21.22%*3+27.28%", "23.13%*3+29.74%", "25.04%*3+32.20%", "26.95%*3+34.65%", "28.99%*3+37.27%", "31.38%*3+40.34%", "33.77%*3+43.41%", "36.16%*3+46.49%", "38.55%*3+49.56%", "40.94%*3+52.64%", "43.33%*3+55.71%", "45.72%*3+58.78%", "48.11%*3+61.86%", "50.50%*3+64.93%"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Mid-Air Heavy Attack",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["62.00%", "67.09%", "72.17%", "79.29%", "84.37%", "90.22%", "98.36%", "106.49%", "114.62%", "123.27%", "133.44%", "143.60%", "153.77%", "163.94%", "174.11%", "184.28%", "194.44%", "204.61%", "214.78%"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Dodge Counter",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["41.57%*3", "44.98%*3", "48.39%*3", "53.16%*3", "56.57%*3", "60.49%*3", "65.94%*3", "71.40%*3", "76.85%*3", "82.64%*3", "89.46%*3", "96.28%*3", "103.09%*3", "109.91%*3", "116.73%*3", "123.55%*3", "130.36%*3", "137.18%*3", "144.00%*3"]
                        }],
                        index: 11
                    }, {
                        attributeName: "Mid-Air Attack Stamina Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 12
                    }, {
                        attributeName: "Heavy Attack Stamina Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillChangli2.webp",
                skillName: 'Tripartite Flames',
                skillDescription: `<span class="Title">True Sight: Capture</span>
After releasing <span class="Highlight">Resonance Skill</span>, Changli rapidly attacks the enemy and enters <span class="Highlight">True Sight</span>, lasting for 12s. In the end, Changli releases a Plunging Attack, dealing <span class="Fire">Fusion DMG</span>.
<span class="Highlight">True Sight: Capture</span> has 2 initial attempts and can be used up to 2 times. The number of attempts is increased by 1 every 12s.

<span class="Title">Basic Attack: True Sight - Conquest</span>
When in <span class="Highlight">True Sight</span>, if Changli uses <span class="Highlight">Ground Basic Attack</span>, she releases <span class="Highlight">True Sight: Conquest</span>, rapidly approaching the enemy and dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Skill DMG. After releasing <span class="Highlight">True Sight: Conquest</span>, <span class="Highlight">True Sight</span> ends.

<span class="Title">Basic Attack: True Sight - Charge</span>
When in <span class="Highlight">True Sight</span>, if Changli <span class="Highlight">jumps</span> or uses <span class="Highlight">Basic Attack</span> in mid-air, she releases <span class="Highlight">True Sight: Charge</span>, dashing towards the enemy and dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Skill DMG. After releasing <span class="Highlight">True Sight: Charge</span>, <span class="Highlight">True Sight</span> ends.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "True Sight - Capture DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["33.70%*3+67.40%", "36.46%*3+72.92%", "39.23%*3+78.45%", "43.10%*3+86.19%", "45.86%*3+91.71%", "49.04%*3+98.07%", "53.46%*3+106.91%", "57.88%*3+115.75%", "62.30%*3+124.59%", "67.00%*3+133.99%", "72.52%*3+145.04%", "78.05%*3+156.09%", "83.57%*3+167.14%", "89.10%*3+178.20%", "94.63%*3+189.25%", "100.15%*3+200.30%", "105.68%*3+211.35%", "111.21%*3+222.41%", "116.73%*3+233.46%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "True Sight - Conquest DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["29.65%*2+41.51%+47.44%", "32.08%*2+44.91%+51.33%", "34.51%*2+48.32%+55.22%", "37.92%*2+53.08%+60.67%", "40.35%*2+56.49%+64.56%", "43.14%*2+60.40%+69.03%", "47.03%*2+65.85%+75.25%", "50.92%*2+71.29%+81.48%", "54.81%*2+76.74%+87.70%", "58.95%*2+82.52%+94.31%", "63.81%*2+89.33%+102.09%", "68.67%*2+96.14%+109.87%", "73.53%*2+102.94%+117.65%", "78.40%*2+109.75%+125.43%", "83.26%*2+116.56%+133.21%", "88.12%*2+123.37%+140.99%", "92.98%*2+130.17%+148.77%", "97.84%*2+136.98%+156.55%", "102.71%*2+143.79%+164.33%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "True Sight - Charge DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["36.56%+54.84%", "39.56%+59.34%", "42.56%+63.83%", "46.75%+70.13%", "49.75%+74.62%", "53.20%+79.80%", "58.00%+86.99%", "62.79%+94.18%", "67.59%+101.38%", "72.68%+109.02%", "78.68%+118.02%", "84.67%+127.01%", "90.67%+136.00%", "96.66%+144.99%", "102.66%+153.99%", "108.66%+162.98%", "114.65%+171.97%", "120.65%+180.97%", "126.64%+189.96%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "True Sight: Capture - Con. Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"]
                        }],
                        index: 4
                    }, {
                        attributeName: "True Sight: Conquest - Con. Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7"]
                        }],
                        index: 5
                    }, {
                        attributeName: "True Sight: Charge - Con. Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillChangli3.webp",
                skillName: 'Radiance of Fealty',
                skillDescription: `Deal <span class="Fire">Fusion DMG</span> to nearby targets, obtaining 4 stacks of [Enflamement], and entering <span class="Highlight">Fiery Feather</span>.
<span class="Title">Fiery Feather</span>
When Changli releases Heavy Attack <span class="Highlight">Flaming Sacrifice</span> within 10s, her ATK is increased by {0}, after which <span class="Highlight">Fiery Feather</span> ends.`,
                skillDetailNum: ["25%"],
                multipliers: [
                    {
                        attributeName: "Skill DMG",
                        type: "Liberation",
                        skillDetailNum: [{
                            values: ["610.00%", "660.02%", "710.04%", "780.07%", "830.09%", "887.62%", "967.65%", "1047.68%", "1127.71%", "1212.75%", "1312.79%", "1412.83%", "1512.87%", "1612.91%", "1712.95%", "1812.99%", "1913.03%", "2013.07%", "2113.11%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Resonance Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Con. Regen",
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillChangli5.webp",
                skillName: 'Obedience of Rules',
                skillDescription: `Changli appears in mid-air, attacks the target, and enters <span class="Highlight">True Sight</span>, lasting for 12s.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill DMG",
                        type: "",
                        skillDetailNum: [{
                            values: ["22.38%+13.06%*4", "24.22%+14.13%*4", "26.06%+15.20%*4", "28.62%+16.70%*4", "30.46%+17.77%*4", "32.57%+19.00%*4", "35.51%+20.71%*4", "38.44%+22.43%*4", "41.38%+24.14%*4", "44.50%+25.96%*4", "48.17%+28.10%*4", "51.84%+30.24%*4", "55.51%+32.38%*4", "59.18%+34.52%*4", "62.85%+36.66%*4", "66.52%+38.81%*4", "70.19%+40.95%*4", "73.86%+43.09%*4", "77.53%+45.23%*4"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Regen",
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
                skillName: 'Strategy of Duality',
                skillDescription: `Changli's Outro Skill increases the switched-in Resonator's Fusion DMG by {0} and their Resonance Liberation DMG by {1}, lasting for {2}s. Switching to another Resonator ends this effect.`,
                skillDetailNum: ["20%", "25%", "10"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillChangli4.webp",
                skillName: 'Flaming Sacrifice',
                skillDescription: `<span class="Title">Heavy Attack: Flaming Sacrifice</span>
When releasing <span class="Highlight">Heavy Attack</span>, if Changli carries 4 stacks of [Enflamement], she consumes all stacks of [Enflamement] to release <span class="Highlight">Flaming Sacrifice</span>, dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Skill DMG.
<span class="Title">Enflamement</span>
Changli can hold up to 4 stacks of [Enflamement].
Changli obtains 1 stack of [Enflamement] for every Basic Attack: <span class="Highlight">True Sight - Conquest</span> on hit.
Changli obtains 1 stack of [Enflamement] for every Basic Attack: <span class="Highlight">True Sight - Charge</span> on hit.
Changli obtains 4 stacks of [Enflamement] for every Resonance Liberation <span class="Highlight">Radiance of Fealty</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Flaming Sacrifice DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["19.74%*5+230.30%", "21.36%*5+249.18%", "22.98%*5+268.07%", "25.25%*5+294.51%", "26.87%*5+313.39%", "28.73%*5+335.11%", "31.32%*5+365.32%", "33.91%*5+395.54%", "36.50%*5+425.75%", "39.25%*5+457.85%", "35.10%*5+409.43%", "37.77%*5+440.63%", "40.45%*5+471.83%", "43.12%*5+503.03%", "45.80%*5+534.23%", "48.47%*5+565.43%", "51.14%*5+596.63%", "53.82%*5+627.83%", "56.49%*5+659.03%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Secret Strategist',
                skillDescription: `When Changli releases Basic Attack: <span class="Highlight">True Sight - Conquest</span> or Basic Attack: <span class="Highlight">True Sight - Charge</span>, for each stack of [Enflamement], Changli's Fusion DMG is increased by {0}.`,
                skillDetailNum: ["5%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Sweeping Force',
                skillDescription: `When Changli releases Heavy Attack <span class="Highlight">Flaming Sacrifice</span> or Resonance Liberation <span class="Highlight">Radiance of Fealty</span>, Changli's Fusion DMG Bonus is increased by {0}, and Changli ignores {1} of the target's DEF when dealing damage.`,
                skillDetailNum: ["20%", "15%"],
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
            name: "Hidden Thoughts",
            description: `Resonance Skill Tripartite Flames and Heavy Attack Flaming Sacrifice increase Changli's DMG dealt by 10% and resistance to interruption.`,
            detailNum: ["10%"],
            sequenceBuffType: "Skill Damage Buff",
            sequenceBuffAtrribute: ["Damage Increase"],
            sequenceBuff: [10],
            itemImg: ""
        },
        {
            node: "Sequence Node 2",
            name: "Pursuit of Desires",
            description: `Enflamement increases Changli's Crit. Rate by 25% for 8s.`,
            detailNum: ["25%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Crit. Rate"],
            sequenceBuff: [25],
            itemImg: ""
        },
        {
            node: "Sequence Node 3",
            name: "Learned Secrets",
            description: `Resonance Liberation Radiance of Fealty DMG is increased by 80%.`,
            detailNum: ["80%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonance Liberation Damage Bonus"],
            sequenceBuff: [80],
            itemImg: ""
        },
        {
            node: "Sequence Node 4",
            name: "Polished Words",
            description: `After Intro Skill is cast, all team members' ATK is increased by 20% for 30s.`,
            detailNum: ["20%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [20],
            itemImg: ""
        },
        {
            node: "Sequence Node 5",
            name: "Sacrificed Gains",
            description: `Heavy Attack Flaming Sacrifice's Multiplier is increased by 50% and its DMG dealt is increased by 50%.`,
            detailNum: ["50%", "50%"],
            sequenceBuffType: "Skill Damage Buff",
            sequenceBuffAtrribute: ["Damage Increase"],
            sequenceBuff: [50],
            itemImg: ""
        },
        {
            node: "Sequence Node 6",
            name: "Realized Plans",
            description: `Resonance Skill Tripartite Flames, Heavy Attack Flaming Sacrifice, and Resonance Liberation Radiance of Fealty ignore an additional 40% of the target's DEF when dealing damage.`,
            detailNum: ["40%"],
            sequenceBuffType: "Enemy Def Ignore",
            sequenceBuffAtrribute: ["Def Ignore"],
            sequenceBuff: [40],
            itemImg: ""
        },
    ]
}