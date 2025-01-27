import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Jinhsi: WWCharacter = {
    name: "Jinhsi",
    charaId: 1304,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Spectro",
    weapon: "Broadblade",
    bio: `Being the Magistrate of Jinzhou, Jinhsi bears her noble and weighty share of duties.
Through repeated ages, the Lament has preyed upon mankind's vulnerable hope.
Yet, grasping the nettle, she strives with all her might to forge a path toward tomorrow.`,
    images: {
        portrait: "https://wuthering-waves-assets.pages.dev/portraits/jinhsi-image.webp",
        icon_sq: "https://wuthering-waves-assets.pages.dev/icons_character/Jinhsi.png",
        model: "https://wuthering-waves-assets.pages.dev/models/jinhsi-Full-image.png"
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
            item: "Loong's Pearl",
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
            item: "Sentinel's Dagger",
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
        base_hp: 866,
        base_atk: 33,
        base_def: 103,
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill2.webp",
                skillName: 'Slash of Breaking Dawn',
                skillDescription: `<span class="Title">Basic Attack</span>
Perform up to 4 consecutive strikes, dealing <span class="Light">Spectro DMG</span>.
<span class="Title">Heavy Attack</span>
Perform a charged attack by consuming Stamina, dealing <span class="Light">Spectro DMG</span>.

<span class="Title">Mid-Air Attack</span>
Perform a Plunging Attack while in mid-air by consuming Stamina, dealing <span class="Light">Spectro DMG</span>.

<span class="Title">Dodge Counter</span>
Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to counterattack, dealing <span class="Light">Spectro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Stage 1 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["33.43%", "36.18%", "38.92%", "42.75%", "45.50%", "48.65%", "53.03%", "57.42%", "61.81%", "66.47%", "71.95%", "77.43%", "82.91%", "88.40%", "93.88%", "99.36%", "104.84%", "110.33%", "115.81%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Stage 2 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["19.61%+9.81%*3", "21.22%+10.61%*3", "22.83%+11.42%*3", "25.08%+12.54%*3", "26.69%+13.35%*3", "28.54%+14.27%*3", "31.11%+15.56%*3", "33.68%+16.84%*3", "36.26%+18.13%*3", "38.99%+19.50%*3", "42.20%+21.10%*3", "45.42%+22.71%*3", "48.64%+24.32%*3", "51.85%+25.93%*3", "55.07%+27.54%*3", "58.28%+29.14%*3", "61.50%+30.75%*3", "64.72%+32.36%*3", "67.93%+33.97%*3"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Stage 3 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["5.36%*7+16.07%", "5.80%*7+17.39%", "6.24%*7+18.70%", "6.85%*7+20.55%", "7.29%*7+21.86%", "7.80%*7+23.38%", "8.50%*7+25.49%", "9.20%*7+27.59%", "9.90%*7+29.70%", "10.65%*7+31.94%", "11.53%*7+34.57%", "12.41%*7+37.21%", "13.28%*7+39.84%", "14.16%*7+42.48%", "15.04%*7+45.11%", "15.92%*7+47.75%", "16.80%*7+50.38%", "17.68%*7+53.02%", "18.55%*7+55.65%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Stage 4 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["31.74%+47.60%", "34.34%+51.51%", "36.94%+55.41%", "40.58%+60.87%", "43.19%+64.78%", "46.18%+69.26%", "50.34%+75.51%", "54.50%+81.75%", "58.67%+88.00%", "63.09%+94.63%", "68.29%+102.44%", "73.50%+110.25%", "78.70%+118.05%", "83.91%+125.86%", "89.11%+133.66%", "94.31%+141.47%", "99.52%+149.28%", "104.72%+157.08%", "109.93%+164.89%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Heavy Attack DMG",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["12.00%*5+18.00%+42.00%", "12.99%*5+19.48%+45.45%", "13.97%*5+20.96%+48.89%", "15.35%*5+23.02%+53.71%", "16.33%*5+24.50%+57.16%", "17.47%*5+26.20%+61.12%", "19.04%*5+28.56%+66.63%", "20.61%*5+30.92%+72.14%", "22.19%*5+33.28%+77.65%", "23.86%*5+35.79%+83.51%", "25.83%*5+38.74%+90.39%", "27.80%*5+41.69%+97.28%", "29.77%*5+44.65%+104.17%", "31.73%*5+47.60%+111.06%", "33.70%*5+50.55%+117.95%", "35.67%*5+53.50%+124.83%", "37.64%*5+56.45%+131.72%", "39.61%*5+59.41%+138.61%", "41.57%*5+62.36%+145.50%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Mid-air Attack DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["6.20%+12.40%+43.40%", "6.71%+13.42%+46.96%", "7.22%+14.44%+50.52%", "7.93%+15.86%+55.50%", "8.44%+16.88%+59.06%", "9.03%+18.05%+63.16%", "9.84%+19.68%+68.85%", "10.65%+21.30%+74.54%", "11.47%+22.93%+80.24%", "12.33%+24.66%+86.29%", "13.35%+26.69%+93.41%", "14.36%+28.72%+100.52%", "15.38%+30.76%+107.64%", "16.40%+32.79%+114.76%", "17.42%+34.83%+121.88%", "18.43%+36.86%+128.99%", "19.45%+38.89%+136.11%", "20.47%+40.93%+143.23%", "21.48%+42.96%+150.35%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Dodge Counter DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["7.38%*7+22.14%", "7.99%*7+23.96%", "8.59%*7+25.77%", "9.44%*7+28.32%", "10.05%*7+30.13%", "10.74%*7+32.22%", "11.71%*7+35.12%", "12.68%*7+38.03%", "13.65%*7+40.93%", "14.68%*7+44.02%", "15.89%*7+47.65%", "17.10%*7+51.28%", "18.31%*7+54.91%", "19.52%*7+58.54%", "20.73%*7+62.17%", "21.94%*7+65.80%", "23.15%*7+69.43%", "24.36%*7+73.06%", "25.57%*7+76.69%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Heavy Attack Stamina Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Mid-air Attack Stamina Cost",
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillJinhsi2.webp",
                skillName: 'Trailing Lights of Eons',
                skillDescription: `Dash forward and perform consecutive strikes that inflict <span class="Light">Spectro DMG</span>.
<span class="Title">Overflowing Radiance</span>
After Jinhsi uses <span class="Light">Basic Attack 4</span> or, while not in <span class="Highlight">Incarnation</span>, Intro Skill <span class="Highlight">Loong's Halo</span>, an alternative Resonance Skill <span class="Highlight">Overflowing Radiance</span> becomes available within {0}s.
Resonance Skill <span class="Highlight">Overflowing Radiance</span> inflicts <span class="Highlight">Spectro DMG</span> and sends Jinhsi into <span class="Highlight"> Incarnation</span>`,
                skillDetailNum: ["5"],
                multipliers: [
                    {
                        attributeName: "Trailing Lights of Eons DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["9.79%*4+39.15%", "10.60%*4+42.37%", "11.40%*4+45.58%", "12.52%*4+50.07%", "13.32%*4+53.28%", "14.25%*4+56.97%", "15.53%*4+62.11%", "16.82%*4+67.25%", "18.10%*4+72.38%", "19.46%*4+77.84%", "21.07%*4+84.26%", "22.67%*4+90.68%", "24.28%*4+97.10%", "25.88%*4+103.52%", "27.49%*4+109.94%", "29.09%*4+116.36%", "30.70%*4+122.78%", "32.30%*4+129.20%", "33.91%*4+135.62%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Overflowing Radiance DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["4.96%*4+14.88%*4+19.84%", "5.37%*4+16.11%*4+21.47%", "5.78%*4+17.33%*4+23.10%", "6.35%*4+19.03%*4+25.38%", "6.75%*4+20.25%*4+27.00%", "7.22%*4+21.66%*4+28.87%", "7.87%*4+23.61%*4+31.48%", "8.52%*4+25.56%*4+34.08%", "9.17%*4+27.51%*4+36.68%", "9.87%*4+29.59%*4+39.45%", "10.68%*4+32.03%*4+42.70%", "11.49%*4+34.47%*4+45.96%", "12.31%*4+36.91%*4+49.21%", "13.12%*4+39.35%*4+52.46%", "13.93%*4+41.79%*4+55.72%", "14.75%*4+44.23%*4+58.97%", "15.56%*4+46.67%*4+62.23%", "16.37%*4+49.11%*4+65.48%", "17.19%*4+51.55%*4+68.73%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Incarnation Duration",
                        type: "",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Overflowing Radiance Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Overflowing Radiance Con. Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liberation',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillJinhsi3.webp",
                skillName: 'Purge of Light',
                skillDescription: `Unleash the power of a heart's wish to deal <span class="Highlight">Spectro DMG</span>.
                Can be cast in mid-air.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Purge of Light DMG",
                        type: "Liberation",
                        skillDetailNum: [{
                            values: ["251.40%+586.60%", "272.02%+634.71%", "292.63%+682.81%", "321.50%+750.15%", "342.11%+798.25%", "365.82%+853.57%", "398.80%+930.53%", "431.78%+1007.49%", "464.77%+1084.45%", "499.81%+1166.22%", "541.04%+1262.43%", "582.27%+1358.63%", "623.50%+1454.83%", "664.73%+1551.03%", "705.96%+1647.24%", "747.19%+1743.44%", "788.42%+1839.64%", "829.65%+1935.84%", "870.88%+2032.05%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24", "24"]
                        }],
                        index: 2
                    }, {
                        attributeName: "RES Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150", "150"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Con. Regen",
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillJinhsi5.webp",
                skillName: `Loong's Halo`,
                skillDescription: `Attack the target, dealing <span class="Highlight">Spectro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill DMG",
                        type: "",
                        skillDetailNum: [{
                            values: ["80.00%", "86.56%", "93.12%", "102.31%", "108.87%", "116.41%", "126.91%", "137.40%", "147.90%", "159.05%", "172.17%", "185.29%", "198.41%", "211.53%", "224.65%", "237.77%", "250.89%", "264.01%", "277.13%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Regen",
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
                skillName: 'Temporal Bender',
                skillDescription: `With the power homologous with the Sentinel, Jinhsi reduces the Cooldown of <span class="Highlight">Eras in Unity</span> to {0}s. This lasts for {1}s.`,
                skillDetailNum: ["1", "20"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillJinhsi4.webp",
                skillName: 'Luminal Synthesis',
                skillDescription: `<span class="Title">Incarnation</span>
While in <span class="Highlight">Incarnation</span>:
- Alternative Basic Attack <span class="Highlight">"Incarnation: Basic Attack"</span> becomes available. Perform up to 4 consecutive strikes, dealing <span class="Light">Spectro DMG</span>. The basic attack cycle of this will not be reset. Can be cast in mid-air.
- Alternative Resonance Skill <span class="Highlight">"Crescent Divinity"</span> becomes available. Deal <span class="Light">Spectro DMG</span>. Can be cast in mid-air.
- Alternative Heavy Attack <span class="Highlight">"Incarnation: Heavy Attack"</span> becomes available. Attack the target in mid-air at the cost of Stamina, dealing <span class="Light">Spectro DMG</span>.
- Alternative Dodge <span class="Highlight">"Incarnation: Dodge"</span> becomes available while airborne. Can be cast multiple times at the cost of Stamina.
- Alternative Dodge Counter <span class="Highlight">"Incarnation: Dodge Counter"</span> becomes available. Deal <span class="Light">Spectro Damage</span>.
Can be cast in mid-air.

<span class="Title">Resonance Skill: Illuminous Epiphany</span>
After Stage 4 of <span class="Highlight">Incarnation: Basic Attack</span>, <span class="Highlight">Incarnation</span> terminates and Jinhsi gains <span class="Highlight">Ordination Glow</span>. 
Can be cast in mid-air.
While <span class="Highlight">Ordination Glow</span> lasts:
- Basic Attack is replaced with the Alternative Heavy Attack <span class="Highlight">"Incarnation: Heavy Attack"</span> when airborne. Attack the target in mid-air at the cost of Stamina, dealing <span class="Light">Spectro DMG</span>.
Resonance Skill is replaced with Resonance Skill <span class="Highlight">Illuminous Epiphany</span>. Send out <span class="Highlight">Solar Flare</span> that detonates as <span class="Highlight">Stella Glamour</span> that deals <span class="Light">Spectro Damage</span> after a short delay. When Jinhsi has "Incandescence", consume up to {0} Incandescence, each point of Incandescence grants an additional DMG multiplier percentage to the <span class="Highlight">Star Glamour</span>. Can be cast in mid-air.
After casting Resonance Skill <span class="Highlight">Illuminous Epiphany</span>, Jinhsi gains <span class="Highlight">Unison</span>. This can be triggered once in {1}s.

<span class="Title">Unison</span>
While Jinhsi has <span class="Highlight">Unison</span>, switching to other Characters will remove Jinhsi's <span class="Highlight">Unison</span> to trigger Jinhsi's Outro Skill and the incoming character's Intro Skill. <span class="Highlight">Unison</span> will be consumed in priority in place of Con. Energy when Con. Energy is full.

<span class="Title">Incandescence</span>
Jinhsi can hold up to {2} Incandescence。
When Jinhsi is on the team, all nearby characters on the team gain <span class="Highlight">Eras in Unity</span>. When characters with <span class="Highlight">Eras in Unity</span> deal Damage with an attribute, Jinhsi gains {3} Incandescence. Damage of the same attribute can provide up to {5} Incandescence every {4}s.`,
                skillDetailNum: ["40", "25", "40", "1", "3", "1"],
                multipliers: [
                    {
                        attributeName: "Incarnation: Basic Attack 1 DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["44.58%", "48.23%", "51.89%", "57.00%", "60.66%", "64.86%", "70.71%", "76.56%", "82.41%", "88.62%", "95.93%", "103.24%", "110.55%", "117.86%", "125.17%", "132.48%", "139.79%", "147.10%", "154.41%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Incarnation: Basic Attack 2 DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["39.22%+13.08%+13.08%", "42.44%+14.15%+14.15%", "45.65%+15.22%+15.22%", "50.16%+16.72%+16.72%", "53.37%+17.79%+17.79%", "57.07%+19.03%+19.03%", "62.22%+20.74%+20.74%", "67.36%+22.46%+22.46%", "72.51%+24.17%+24.17%", "77.97%+25.99%+25.99%", "84.40%+28.14%+28.14%", "90.84%+30.28%+30.28%", "97.27%+32.43%+32.43%", "103.70%+34.57%+34.57%", "110.13%+36.71%+36.71%", "116.56%+38.86%+38.86%", "123.00%+41.00%+41.00%", "129.43%+43.15%+43.15%", "135.86%+45.29%+45.29%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Incarnation: Basic Attack 3 DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["50.02%+33.35%", "54.12%+36.08%", "58.23%+38.82%", "63.97%+42.65%", "68.07%+45.38%", "72.79%+48.53%", "79.35%+52.90%", "85.91%+57.28%", "92.47%+61.65%", "99.44%+66.30%", "107.65%+71.77%", "115.85%+77.24%", "124.05%+82.70%", "132.26%+88.17%", "140.46%+93.64%", "148.66%+99.11%", "156.86%+104.58%", "165.07%+110.05%", "173.27%+115.52%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Incarnation: Basic Attack 4 DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["9.39%*6+37.56%", "10.16%*6+40.64%", "10.93%*6+43.72%", "12.01%*6+48.03%", "12.78%*6+51.11%", "13.67%*6+54.65%", "14.90%*6+59.58%", "16.13%*6+64.51%", "17.36%*6+69.44%", "18.67%*6+74.67%", "20.21%*6+80.83%", "21.75%*6+86.99%", "23.29%*6+93.15%", "24.83%*6+99.31%", "26.37%*6+105.47%", "27.91%*6+111.63%", "29.45%*6+117.79%", "30.99%*6+123.95%", "32.53%*6+130.11%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Incarnation: Heavy Attack DMG",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["24.00%+56.00%", "25.97%+60.60%", "27.94%+65.19%", "30.70%+71.62%", "32.66%+76.21%", "34.93%+81.49%", "38.08%+88.84%", "41.22%+96.18%", "44.37%+103.53%", "47.72%+111.34%", "51.66%+120.52%", "55.59%+129.71%", "59.53%+138.89%", "63.46%+148.07%", "67.40%+157.26%", "71.34%+166.44%", "75.27%+175.63%", "79.21%+184.81%", "83.14%+193.99%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Incarnation: Dodge Counter DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["22.08%+16.56%*2+55.19%", "23.89%+17.92%*2+59.71%", "25.70%+19.27%*2+64.24%", "28.23%+21.17%*2+70.57%", "30.04%+22.53%*2+75.10%", "32.12%+24.09%*2+80.30%", "35.02%+26.27%*2+87.54%", "37.91%+28.44%*2+94.78%", "40.81%+30.61%*2+102.02%", "43.89%+32.92%*2+109.71%", "47.51%+35.63%*2+118.76%", "51.13%+38.35%*2+127.81%", "54.75%+41.06%*2+136.86%", "58.37%+43.78%*2+145.91%", "61.99%+46.49%*2+154.96%", "65.61%+49.21%*2+164.01%", "69.23%+51.92%*2+173.06%", "72.85%+54.64%*2+182.11%", "76.47%+57.35%*2+191.16%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Crescent Divinity DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["50.68%+38.01%*2+126.70%", "54.84%+41.13%*2+137.09%", "59.00%+44.25%*2+147.48%", "64.81%+48.61%*2+162.03%", "68.97%+51.73%*2+172.42%", "73.75%+55.31%*2+184.37%", "80.40%+60.30%*2+200.99%", "87.05%+65.29%*2+217.61%", "93.70%+70.27%*2+234.24%", "100.76%+75.57%*2+251.90%", "109.07%+81.81%*2+272.68%", "117.38%+88.04%*2+293.45%", "125.70%+94.27%*2+314.23%", "134.01%+100.51%*2+335.01%", "142.32%+106.74%*2+355.79%", "150.63%+112.97%*2+376.57%", "158.94%+119.21%*2+397.35%", "167.25%+125.44%*2+418.13%", "175.57%+131.68%*2+438.91%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Illuminous Epiphany: Solar Flare DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["10.00%*6", "10.82%*6", "11.64%*6", "12.79%*6", "13.61%*6", "14.56%*6", "15.87%*6", "17.18%*6", "18.49%*6", "19.89%*6", "21.53%*6", "23.17%*6", "24.81%*6", "26.45%*6", "28.09%*6", "29.73%*6", "31.37%*6", "33.01%*6", "34.65%*6"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Illuminous Epiphany: Star Glamour DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["175.00%", "189.35%", "203.70%", "223.79%", "238.14%", "254.65%", "277.61%", "300.57%", "323.53%", "347.92%", "376.62%", "405.32%", "434.02%", "462.72%", "491.42%", "520.12%", "548.82%", "577.52%", "606.22%"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Incandescence additional multiplier per stack",
                        type: "",
                        skillDetailNum: [{
                            values: ["13.50%", "14.61%", "15.72%", "17.27%", "18.38%", "19.65%", "21.42%", "23.19%", "24.96%", "26.84%", "29.06%", "31.27%", "33.49%", "35.70%", "37.91%", "40.13%", "42.34%", "44.56%", "46.77%"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Incarnation: Heavy Attack Stamina Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 11
                    }, {
                        attributeName: "Incarnation: Dodge Stamina Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 12
                    }, {
                        attributeName: "Ordination Glow Duration",
                        type: "",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 13
                    }, {
                        attributeName: "Unison Duration",
                        type: "",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 14
                    }, {
                        attributeName: "Crescent Divinity Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 15
                    }, {
                        attributeName: "Crescent Divinity Con. Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
                        }],
                        index: 16
                    }, {
                        attributeName: "Illuminous Epiphany Con. Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 17
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Radiant Surge',
                skillDescription: `Jinhsi's Spectro DMG Bonus is increased by {0}.`,
                skillDetailNum: ["20%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Converged Flash',
                skillDescription: `Intro Skill <span class="Highlight">Loong's Halo</span> gains {0} additional DMG.`,
                skillDetailNum: ["50%"],
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
            name: "Abyssal asension",
            description: `When Jinhsi casts Basic Attack <span class="Highlight">"Incarnation: Basic Attack"</span> or Resonance Skill <span class="Highlight">"Crescent Divinity"</span>, gain one stack of <span class="Highlight">Herald of Revival</span>, which stacks up to {0} times and last for {1}s. When casting Resonance Skill <span class="Highlight">"Illuminous Epiphany"</span>, Jinhsi consumes all stacks of <span class="Highlight">Herald of Revival</span>. Each stack increases the DMG of Resonance Skill <span class="Highlight">"Illuminous Epiphany"</span> by {2}.`,
            detailNum: ["4", "6", "20%"],
            sequenceBuffType: "Skill Buff",
            sequenceBuffAtrribute: ["Illuminous Epiphany"],
            sequenceBuff: [20],
            stacks: 4,
            itemImg: ""
        },
        {
            node: "Sequence Node 2",
            name: "Chronofrost Repose",
            description: `Jinhsi recovers {1} Incandescence while staying out of combat for more than {0}s. This effect can only be triggered {3} every {2}s.`,
            detailNum: ["4", "40", "4", "1"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: ""
        },
        {
            node: "Sequence Node 3",
            name: "Celestial Incarnate",
            description: `Gain {0} stack of <span class="Highlight">Immortal's Descendancy</span> after casting Intro Skill <span class="Highlight">Loong's Halo</span>. Every stack of <span class="Highlight">Immortal's Descendancy</span> increases ATK by {1}, for up to {2} stacks, lasting for {3}s.`,
            detailNum: ["1", "25%", "2", "20"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [25],
            stacks: 2,
            itemImg: ""
        },
        {
            node: "Sequence Node 4",
            name: "Benevolent Grace",
            description: `When casting Resonance Liberation <span class="Highlight">Purge of Light</span> or Resonance Skill <span class="Highlight">Illuminous Epiphany</span>, all nearby Characters in the team gain DMG Bonus for all attributes by {0} for {1}s.`,
            detailNum: ["20%", "20"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Element Damage Bonus"],
            sequenceBuff: [20],
            itemImg: ""
        },
        {
            node: "Sequence Node 5",
            name: "Frostfire Illumination",
            description: `The DMG Multiplier of Resonance Liberation <span class="Highlight">Purge of Evil</span> is increased by {0}.`,
            detailNum: ["120%"],
            sequenceBuffType: "Skill Buff",
            sequenceBuffAtrribute: ["Purge of Evil"],
            sequenceBuff: [120],
            itemImg: ""
        },
        {
            node: "Sequence Node 6",
            name: "Comes Spring when Chill Exhausts",
            description: `DMG Multiplier percentage for Resonance Skill <span class="Highlight">Illuminous Epiphany</span> is increased by {0}. The multiplier increase brought by Incandescence is additionally increased by {1}.`,
            detailNum: ["45%", "45%"],
            sequenceBuffType: "Skill Buff",
            sequenceBuffAtrribute: ["Illuminous Epiphany"],
            sequenceBuff: [45],
            itemImg: ""
        }
    ]
}