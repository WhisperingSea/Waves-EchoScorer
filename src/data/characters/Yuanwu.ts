import { WWCharacter } from "../WWCharacter";

const rarity4Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_4_Stars.webp";

export const Yuanwu: WWCharacter = {
    name: "Yuanwu",
    charaId: 1303,
    rarity: {
        alt: "5 Star",
        img: rarity4Star
    },
    element: "Electro",
    weapon: "Gauntlets",
    bio: `As the proprietor of a boxing gym, Yuanwu is a polite and modest gentleman, displaying composure and confidence in his actions.
Having honed his skills in the Leihuang martial arts style, Yuanwu also earned mastery in health management.A perfect synergy of strength and elegance.`,
    images: {
        portrait: "https://wuthering-waves-assets.pages.dev/portraits/T_IconRole_Pile_yuanwu_UI.png",
        icon_sq: "https://wuthering-waves-assets.pages.dev/icons_character/Yuanwu.png",
        model: "https://wuthering-waves-assets.pages.dev/models/Yuanwu_Illustration.png"
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
            item: "Hidden Thunder Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "",
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
        base_hp: 682,
        base_atk: 18,
        base_def: 134,
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
                typeName: 'Basic Attack',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill4.webp",
                skillName: 'Leihuangquan',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Yuanwu performs up to 5 consecutive attacks, dealing <span class="Thunder">Electro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Yuanwu consumes Stamina to attack the target, dealing <span class="Thunder">Electro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Yuanwu consumes Stamina to launch a Mid-air Plunging Attack, dealing <span class="Thunder">Electro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Thunder">Electro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["24.70%", "26.73%", "28.76%", "31.59%", "33.62%", "35.95%", "39.19%", "42.43%", "45.67%", "49.11%", "53.16%", "57.21%", "61.26%", "65.31%", "69.36%", "73.41%", "77.47%", "81.52%", "85.57%", "89.62%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["26.06%*2", "28.20%*2", "30.34%*2", "33.33%*2", "35.46%*2", "37.92%*2", "41.34%*2", "44.76%*2", "48.18%*2", "51.81%*2", "56.08%*2", "60.36%*2", "64.63%*2", "68.91%*2", "73.18%*2", "77.45%*2", "81.73%*2", "86.00%*2", "90.27%*2", "94.55%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["10.99%*2+16.48%*2", "11.89%*2+17.83%*2", "12.79%*2+19.18%*2", "14.05%*2+21.07%*2", "14.95%*2+22.42%*2", "15.99%*2+23.98%*2", "17.43%*2+26.14%*2", "18.87%*2+28.30%*2", "20.31%*2+30.46%*2", "21.84%*2+32.76%*2", "23.64%*2+35.46%*2", "25.44%*2+38.16%*2", "27.24%*2+40.86%*2", "29.05%*2+43.57%*2", "30.85%*2+46.27%*2", "32.65%*2+48.97%*2", "34.45%*2+51.67%*2", "36.25%*2+54.37%*2", "38.05%*2+57.07%*2", "39.85%*2+59.78%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["26.06%*2", "28.20%*2", "30.34%*2", "33.33%*2", "35.46%*2", "37.92%*2", "41.34%*2", "44.76%*2", "48.18%*2", "51.81%*2", "56.08%*2", "60.36%*2", "64.63%*2", "68.91%*2", "73.18%*2", "77.45%*2", "81.73%*2", "86.00%*2", "90.27%*2", "94.55%*2"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Part 5 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["24.70%*2+32.94%", "26.73%*2+35.64%", "28.76%*2+38.34%", "31.59%*2+42.12%", "33.62%*2+44.82%", "35.95%*2+47.93%", "39.19%*2+52.25%", "42.43%*2+56.57%", "45.67%*2+60.89%", "49.11%*2+65.48%", "53.16%*2+70.88%", "57.21%*2+76.28%", "61.26%*2+81.68%", "65.31%*2+87.08%", "69.36%*2+92.48%", "73.41%*2+97.88%", "77.47%*2+103.29%", "81.52%*2+108.69%", "85.57%*2+114.09%", "89.62%*2+119.49%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Heavy Attack Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["80.00%", "86.56%", "93.12%", "102.31%", "108.87%", "116.41%", "126.91%", "137.40%", "147.90%", "159.05%", "172.17%", "185.29%", "198.41%", "211.53%", "224.65%", "237.77%", "250.89%", "264.01%", "277.13%", "290.25%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["49.60%", "53.67%", "57.74%", "63.43%", "67.50%", "72.18%", "78.69%", "85.19%", "91.70%", "98.61%", "106.75%", "114.88%", "123.02%", "131.15%", "139.29%", "147.42%", "155.56%", "163.69%", "171.82%", "179.96%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Dodge Counter Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["57.60%*2", "62.33%*2", "67.05%*2", "73.66%*2", "78.39%*2", "83.82%*2", "91.38%*2", "98.93%*2", "106.49%*2", "114.52%*2", "123.97%*2", "133.41%*2", "142.86%*2", "152.31%*2", "161.75%*2", "171.20%*2", "180.64%*2", "190.09%*2", "199.54%*2", "208.98%*2"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Heavy Attack Stamina Consumption",
                        type: "",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        type: "",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 10
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillYuanwu2.webp",
                skillName: 'Leihuang Master',
                skillDescription: `<span class="Title">Thunder Wedge</span>\n
                Yuanwu summons <span class="Highlight">Thunder Wedge</span>, dealing <span class="Thunder">Electro DMG</span>, and forms a <span class="Highlight">Thunder Field</span> centered on the <span class="Highlight">Thunder Wedge</span>. <span class="Highlight">Thunder Wedge</span> lasts for {0}s.\n
                Forte Circuit <span class="Highlight">Rumbling Spark</span> and Resonance Liberation <span class="Highlight">Blazing Might</span> will immediately detonate Resonance Skill <span class="Highlight">Thunder Wedge</span> on the field, dealing <span class="Thunder">Electro DMG</span>, considered as Resonance Skill Damage.\n
                <div class="gap"></div>
                <span class="Title">Thunder Field</span>\n
                The on-field character gains the effects below when in the <span class="Highlight">Thunder Field</span>: a Coordinated Attack from Resonance Skill <span class="Highlight">Thunder Wedge</span> is triggered when attacks hit a target, dealing <span class="Thunder">Electro DMG</span>. This can be triggered once every {1}s. The effect lasts for {2}s.`,
                skillDetailNum: ["12", "1.2", "1.5"],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["12.00%", "12.99%", "13.97%", "15.35%", "16.33%", "17.47%", "19.04%", "20.61%", "22.19%", "23.86%", "25.83%", "27.80%", "29.77%", "31.73%", "33.70%", "35.67%", "37.64%", "39.61%", "41.57%", "43.54%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Thunder Wedge Coordinated Attack Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["4.00%", "4.33%", "4.66%", "5.12%", "5.45%", "5.83%", "6.35%", "6.87%", "7.40%", "7.96%", "8.61%", "9.27%", "9.93%", "10.58%", "11.24%", "11.89%", "12.55%", "13.21%", "13.86%", "14.52%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Thunder Wedge Detonation Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["30.00%", "32.46%", "34.92%", "38.37%", "40.83%", "43.66%", "47.59%", "51.53%", "55.47%", "59.65%", "64.57%", "69.49%", "74.41%", "79.33%", "84.25%", "89.17%", "94.09%", "99.01%", "103.93%", "108.85%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Rumbling Spark Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["54.60%", "59.07%", "63.55%", "69.82%", "74.29%", "79.44%", "86.60%", "93.76%", "100.93%", "108.54%", "117.49%", "126.44%", "135.39%", "144.35%", "153.30%", "162.25%", "171.21%", "180.16%", "189.11%", "198.06%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Thunder Wedge Duration",
                        type: "",
                        skillDetailNum: [{
                            values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Leihuang Master Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Rumbling Spark Con. Energy Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 9
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillYuanwu3.webp",
                skillName: 'Blazing Might',
                skillDescription: `Awaken the power of thunder and provide Forte Circuit <span class="Highlight">Lightning Infused</span> status for all nearby characters for {0}s, granting them increased Anti-interruption, then perform a powerful blow that deals <span class="Thunder">Electro DMG</span>`,
                skillDetailNum: ["10"],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "Liberation",
                        skillDetailNum: [{
                            values: ["88.00%*2", "95.22%*2", "102.44%*2", "112.54%*2", "119.76%*2", "128.05%*2", "139.60%*2", "151.14%*2", "162.69%*2", "174.96%*2", "189.39%*2", "203.82%*2", "218.25%*2", "232.69%*2", "247.12%*2", "261.55%*2", "275.98%*2", "290.41%*2", "304.85%*2", "319.28%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Res. Energy Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillYuanwu5.webp",
                skillName: 'Thunder Bombardment',
                skillDescription: `Attack the target, dealing <span class="Thunder">Electro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        type: "",
                        skillDetailNum: [{
                            values: ["32.00%", "34.63%", "37.25%", "40.93%", "43.55%", "46.57%", "50.77%", "54.96%", "59.16%", "63.62%", "68.87%", "74.12%", "79.37%", "84.62%", "89.86%", "95.11%", "100.36%", "105.61%", "110.86%", "116.10%"]
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
                skillName: 'Lightning Manipulation',
                skillDescription: `Yuanwu summons thunderbolts on a field centered on the skill target, dealing significant Vibration Strength depletion to the enemies hit.`,
                skillDetailNum: [],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillYuanwu4.webp",
                skillName: 'Unassuming Blade',
                skillDescription: `<span class="Title">Rumbling Spark</span>\n
                When "Readiness" is full, long press Resonance Skill to consume all "Readiness" and cast Rumbling Spark, dealing <span class="Thunder">Electro DMG</span> and entering the <span class="Highlight">Lightning Infused</span> state.\n
                <div class="gap"></div>
                <span class="Title">Thunder Uprising</span>\n
                When you have full "Readiness", Resonance Skill <span class="Highlight">Thunder Wedge</span> will cast <span class="Highlight">Thunder Uprising</span>, dealing <span class="Thunder">Electro DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Lightning Infused</span>\n
                The character in <span class="Highlight">Lightning Infused</span> state has a greatly increased anti-interruption.\n
                When Yuanwu is in this state:\n
                -<span class="Highlight">Basic Attacks</span>: Hits targets in a larger range, depletes enemy Vibration Strength faster;\n
                -<span class="Highlight">Heavy Attacks</span>: Attack speed is increased, deplete enemy Vibration Strength faster;\n
                -<span class="Highlight">Dodge Counters</span>: Attack speed is increased, deplete enemy Vibration Strength faster.\n
                -Use <span class="Highlight">Basic Attack</span> within {0}s after casting a <span class="Highlight">Heavy Attack</span> or a successful <span class="Highlight">Counterattack</span> to cast <span class="Highlight">Thunderweaver</span>, dealing <span class="Thunder">Electro DMG</span>, considered as Basic Attack damage;\n
                Yuanwu does not recover "Readiness" in this state.\n
                <div class="gap"></div>
                <span class="Title">Readiness</span>\n
                Yuanwu can hold up to {1} "Readiness".\n
                When Resonance Skill <span class="Highlight">Thunder Wedge</span> is on the field, Yuanwu gains {2} "Readiness" every second, even when he is not the on-field character;\n
                When Resonance Skill <span class="Highlight">Thunder Wedge</span> hits a target with a Coordinated Attack, Yuanwu gains {3} "Readiness".`,
                skillDetailNum: ["3", "100", "6", "5"],
                multipliers: [
                    {
                        attributeName: "Thunder Uprising Damage",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["20.00%", "21.64%", "23.28%", "25.58%", "27.22%", "29.11%", "31.73%", "34.35%", "36.98%", "39.77%", "43.05%", "46.33%", "49.61%", "52.89%", "56.17%", "59.45%", "62.73%", "66.01%", "69.29%", "72.57%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Lightning Infused Basic Attack Part 1 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["12.35%", "13.37%", "14.38%", "15.80%", "16.81%", "17.98%", "19.60%", "21.22%", "22.84%", "24.56%", "26.58%", "28.61%", "30.63%", "32.66%", "34.68%", "36.71%", "38.74%", "40.76%", "42.79%", "44.81%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Lightning Infused Basic Attack Part 2 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["13.03%*2", "14.10%*2", "15.17%*2", "16.67%*2", "17.73%*2", "18.96%*2", "20.67%*2", "22.38%*2", "24.09%*2", "25.91%*2", "28.04%*2", "30.18%*2", "32.32%*2", "34.46%*2", "36.59%*2", "38.73%*2", "40.87%*2", "43.00%*2", "45.14%*2", "47.28%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Lightning Infused Basic Attack Part 3 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["5.50%*2+8.24%*2", "5.95%*2+8.92%*2", "6.40%*2+9.59%*2", "7.03%*2+10.54%*2", "7.48%*2+11.21%*2", "8.00%*2+11.99%*2", "8.72%*2+13.07%*2", "9.44%*2+14.15%*2", "10.16%*2+15.23%*2", "10.92%*2+16.38%*2", "11.82%*2+17.73%*2", "12.72%*2+19.08%*2", "13.62%*2+20.43%*2", "14.53%*2+21.79%*2", "15.43%*2+23.14%*2", "16.33%*2+24.49%*2", "17.23%*2+25.84%*2", "18.13%*2+27.19%*2", "19.03%*2+28.54%*2", "19.93%*2+29.89%*2"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Lightning Infused Basic Attack Part 4 Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["5.77%*5", "6.24%*5", "6.71%*5", "7.38%*5", "7.85%*5", "8.39%*5", "9.15%*5", "9.90%*5", "10.66%*5", "11.46%*5", "12.41%*5", "13.35%*5", "14.30%*5", "15.24%*5", "16.19%*5", "17.13%*5", "18.08%*5", "19.02%*5", "19.97%*5", "20.91%*5"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Lightning Infused Basic Attack Part V Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["8.24%*3+16.47%", "8.91%*3+17.82%", "9.59%*3+19.17%", "10.53%*3+21.06%", "11.21%*3+22.41%", "11.99%*3+23.97%", "13.07%*3+26.13%", "14.15%*3+28.29%", "15.23%*3+30.45%", "16.37%*3+32.74%", "17.72%*3+35.44%", "19.07%*3+38.14%", "20.42%*3+40.84%", "21.77%*3+43.54%", "23.12%*3+46.24%", "24.47%*3+48.94%", "25.83%*3+51.65%", "27.18%*3+54.35%", "28.53%*3+57.05%", "29.88%*3+59.75%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Lightning Infused Heavy Attack Damage",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["15.60%", "16.88%", "18.16%", "19.95%", "21.23%", "22.70%", "24.75%", "26.80%", "28.84%", "31.02%", "33.58%", "36.14%", "38.69%", "41.25%", "43.81%", "46.37%", "48.93%", "51.49%", "54.04%", "56.60%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Thunderweaver Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["15.60%+10.40%*2", "16.88%+11.26%*2", "18.16%+12.11%*2", "19.95%+13.30%*2", "21.23%+14.16%*2", "22.70%+15.14%*2", "24.75%+16.50%*2", "26.80%+17.87%*2", "28.84%+19.23%*2", "31.02%+20.68%*2", "33.58%+22.39%*2", "36.14%+24.09%*2", "38.69%+25.80%*2", "41.25%+27.50%*2", "43.81%+29.21%*2", "46.37%+30.91%*2", "48.93%+32.62%*2", "51.49%+34.33%*2", "54.04%+36.03%*2", "56.60%+37.74%*2"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Lightning Infused Dodge Counter Damage",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["21.76%+16.32%*2", "23.55%+17.66%*2", "25.33%+19.00%*2", "27.83%+20.88%*2", "29.62%+22.21%*2", "31.67%+23.75%*2", "34.52%+25.89%*2", "37.38%+28.03%*2", "40.23%+30.18%*2", "43.27%+32.45%*2", "46.83%+35.13%*2", "50.40%+37.80%*2", "53.97%+40.48%*2", "57.54%+43.16%*2", "61.11%+45.83%*2", "64.68%+48.51%*2", "68.25%+51.19%*2", "71.82%+53.86%*2", "75.38%+56.54%*2", "78.95%+59.22%*2"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Lightning Infused Heavy Attack Stamina Consumption",
                        type: "",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Lightning Infused Duration",
                        type: "",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 11
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Thunderweaver',
                skillDescription: `The damage multiplier of Resonance Skill <span class="Highlight">Thunder Uprising</span> is increased by {0}, and its depletion of enemy Vibration Strength is enhanced.`,
                skillDetailNum: ["40%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Reserved Confidence',
                skillDescription: `The ranges of the Resonance Skill <span class="Highlight">Thunder Field</span> and <span class="Highlight">Thunder Uprising</span> are greatly expanded. When exiting during combat, if <span class="Highlight">Readiness</span> is not full, Yuanwu will automatically leave {0} Resonance Skill <span class="Highlight">Thunder Wedge</span> in place.`,
                skillDetailNum: ["1"],
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
            name: "Steaming Cup of Justice",
            description: `When Yuanwu is in Forte Circuit's <span class="Highlight">Lightning Infused</span> state, his Basic Attack Speed is increased by {0}, and his Heavy Attack Speed is increased by {1}.`,
            detailNum: ["20%", "20%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1303_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Fierce Heart, Serene Mind",
            description: `Intro Skill <span class="Highlight">Thunder Bombardment</span> additionally recovers {0} Resonance Energy for Yuanwu.`,
            detailNum: ["15"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1303_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Upholder of Integrity",
            description: `When the Coordinated Attacks of Resonance Skill's <span class="Highlight">Thunder Wedge</span> hits a target, the damage is additionally increased by {0} of Yuanwu's DEF.`,
            detailNum: ["20%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1303_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Retributive Knuckles",
            description: `When casting Resonance Liberation <span class="Highlight">Blazing Might</span>, the on-field character will gain a Shield equal to {0} of Yuanwu's DEF for {1}s.`,
            detailNum: ["200%", "10"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1303_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Neighborhood Protector",
            description: `When Resonance Skill <span class="Highlight">Thunder Wedge</span> is on the field, Yuanwu's Resonance Liberation DMG Bonus is increased by {0}.`,
            detailNum: ["50%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonance Liberation Damage Bonus"],
            sequenceBuff: [50],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1303_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Defender of All Realms",
            description: `All team members nearby within the range of Resonance Skill <span class="Highlight">Thunder Wedge</span> will gain a {0} DEF increase, lasting {1}s.`,
            detailNum: ["32%", "3"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["DEF"],
            sequenceBuff: [32],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1303_UI.png"
        }
    ]
}