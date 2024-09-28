import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://sohansc13.github.io/wuthering-waves-assets/images/icon_stars/Icon_5_Stars.webp";

export const Lingyang: WWCharacter = {
    name: "Lingyang",
    charaId: 1103,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Glacio",
    weapon: "Gauntlets",
    bio: `Lingyang is a sincere, compassionate foreign visitor of the human community.
He joined the Liondance Troupe in Jinzhou by chance, aspiring to dispel fear and dread for others through his electrifying "Liondance".`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_lingyang_UI.png",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Lingyang.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Lingyang_Full_Sprite.png"
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
            item: "Sound-Keeping Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Coriolus",
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
        base_hp: 831,
        base_atk: 35,
        base_def: 99,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
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
                skillName: 'Majestic Fists',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Lingyang performs up to 5 consecutive attacks, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Basic Attack: Feral Roars</span>\n
                After Resonance Skill <span class="Highlight">Furious Punches</span> is cast, <span class="Highlight">Basic Attack 5</span> is replaced with <span class="Highlight">Feral Roars</span>, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Lingyang consumes Stamina to attack the target, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Lingyang consumes Stamina to perform a Mid-air Plunging Attack, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Ice">Glacio DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["30.00%", "32.46%", "34.92%", "38.37%", "40.83%", "43.66%", "47.59%", "51.53%", "55.47%", "59.65%", "64.57%", "69.49%", "74.41%", "79.33%", "84.25%", "89.17%", "94.09%", "99.01%", "103.93%", "108.85%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["40.00%", "43.28%", "46.56%", "51.16%", "54.44%", "58.21%", "63.46%", "68.70%", "73.95%", "79.53%", "86.09%", "92.65%", "99.21%", "105.77%", "112.33%", "118.89%", "125.45%", "132.01%", "138.57%", "145.13%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["36.65%*2", "39.66%*2", "42.67%*2", "46.87%*2", "49.88%*2", "53.33%*2", "58.14%*2", "62.95%*2", "67.76%*2", "72.87%*2", "78.88%*2", "84.89%*2", "90.90%*2", "96.91%*2", "102.92%*2", "108.93%*2", "114.94%*2", "120.95%*2", "126.96%*2", "132.97%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["10.27%*5+21.99%", "11.11%*5+23.80%", "11.95%*5+25.60%", "13.13%*5+28.13%", "13.97%*5+29.93%", "14.94%*5+32.00%", "16.28%*5+34.89%", "17.63%*5+37.77%", "18.98%*5+40.66%", "20.41%*5+43.72%", "22.09%*5+47.33%", "23.77%*5+50.94%", "25.46%*5+54.54%", "27.14%*5+58.15%", "28.82%*5+61.76%", "30.50%*5+65.36%", "32.19%*5+68.97%", "33.87%*5+72.57%", "35.55%*5+76.18%", "37.24%*5+79.79%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Part 5 Damage",
                        skillDetailNum: [{
                            values: ["76.70%", "82.99%", "89.28%", "98.09%", "104.38%", "111.61%", "121.67%", "131.74%", "141.80%", "152.49%", "165.07%", "177.65%", "190.23%", "202.81%", "215.39%", "227.97%", "240.54%", "253.12%", "265.70%", "278.28%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Feral Roars Damage",
                        skillDetailNum: [{
                            values: ["40.00%*2", "43.28%*2", "46.56%*2", "51.16%*2", "54.44%*2", "58.21%*2", "63.46%*2", "68.70%*2", "73.95%*2", "79.53%*2", "86.09%*2", "92.65%*2", "99.21%*2", "105.77%*2", "112.33%*2", "118.89%*2", "125.45%*2", "132.01%*2", "138.57%*2", "145.13%*2"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["73.30%", "79.32%", "85.33%", "93.74%", "99.75%", "106.66%", "116.28%", "125.90%", "135.51%", "145.73%", "157.75%", "169.78%", "181.80%", "193.82%", "205.84%", "217.86%", "229.88%", "241.90%", "253.92%", "265.94%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        skillDetailNum: [{
                            values: ["62.00%", "67.09%", "72.17%", "79.29%", "84.37%", "90.22%", "98.36%", "106.49%", "114.62%", "123.27%", "133.44%", "143.60%", "153.77%", "163.94%", "174.11%", "184.28%", "194.44%", "204.61%", "214.78%", "224.95%"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["63.40%*2", "68.60%*2", "73.80%*2", "81.08%*2", "86.28%*2", "92.26%*2", "100.58%*2", "108.89%*2", "117.21%*2", "126.05%*2", "136.45%*2", "146.85%*2", "157.24%*2", "167.64%*2", "178.04%*2", "188.44%*2", "198.83%*2", "209.23%*2", "219.63%*2", "230.03%*2"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Heavy Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 11
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillName: 'Ancient Arts',
                skillDescription: `<span class="Title">Ancient Arts</span>\n
                Attack the target, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Furious Punches</span>\n
                When <span class="Highlight">Basic Attacks 3, 4, or 5</span> or Basic Attack <span class="Highlight">Feral Roars</span> hits the target, Resonance Skill <span class="Highlight">Ancient Arts</span> is replaced with Resonance Skill <span class="Highlight">Swift Punches</span>.\n
                If Lingyang uses <span class="Highlight">Basic Attack</span> after casting Basic Attack <span class="Highlight">Feral Roars</span> and Resonance Skill <span class="Highlight">Swift Punches</span>, he will start from <span class="Highlight">Basic Attack 3</span>.\n
                <div class="gap"></div>
                Lingyang's Resonance Skill will not reset his Basic Attack stage.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Ancient Arts Damage",
                        skillDetailNum: [{
                            values: ["66.70%", "72.17%", "77.64%", "85.30%", "90.77%", "97.06%", "105.81%", "114.56%", "123.31%", "132.61%", "143.55%", "154.49%", "165.43%", "176.37%", "187.31%", "198.24%", "209.18%", "220.12%", "231.06%", "242.00%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Furious Punches Damage",
                        skillDetailNum: [{
                            values: ["38.35%*2", "41.50%*2", "44.64%*2", "49.05%*2", "52.19%*2", "55.81%*2", "60.84%*2", "65.87%*2", "70.90%*2", "76.25%*2", "82.54%*2", "88.83%*2", "95.12%*2", "101.41%*2", "107.70%*2", "113.99%*2", "120.27%*2", "126.56%*2", "132.85%*2", "139.14%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
                        }],
                        index: 3
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: `Strive: Lion's Vigor`,
                skillDescription: `Attack the target, dealing <span class="Ice">Glacio DMG</span>, and receive the blessing of <span class="Highlight">Lion's Vigor</span>, which lasts for {0}s.
                <div class="gap"></div>
                <span class="Title">Lion's Vigor</span>
                Lingyang's <span class="Ice">Glacio DMG Bonus</span> is increased by {0};`,
                skillDetailNum: ["50%"],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["200.00%", "216.40%", "232.80%", "255.76%", "272.16%", "291.02%", "317.26%", "343.50%", "369.74%", "397.62%", "430.42%", "463.22%", "496.02%", "528.82%", "561.62%", "594.42%", "627.22%", "660.02%", "692.82%", "725.62%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Lion's Vigor Duration",
                        skillDetailNum: [{
                            values: ["14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14", "14"]
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
                            values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Con. Energy Regen",
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
                skillName: 'Lion Awakens',
                skillDescription: `Lingyang enters the battlefield, dealing <span class="Ice">Glacio DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["50.00%*2", "54.10%*2", "58.20%*2", "63.94%*2", "68.04%*2", "72.76%*2", "79.32%*2", "85.88%*2", "92.44%*2", "99.41%*2", "107.61%*2", "115.81%*2", "124.01%*2", "132.21%*2", "140.41%*2", "148.61%*2", "156.81%*2", "165.01%*2", "173.21%*2", "181.41%*2"]
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
                skillName: 'Frosty Marks',
                skillDescription: `Lingyang releases a shock wave centered on the skill target, dealing <span class="Ice">Glacio DMG</span> equal to {0} of Lingyang's ATK to targets within the range.`,
                skillDetailNum: ["587.94%"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Unification of Spirits',
                skillDescription: `<span class="Title">Heavy Attack: Glorious Plunge</span>\n
                When Lion's Spirit is full, use <span class="Highlight">Heavy Attack</span> to perform <span class="Highlight">Glorious Plunge</span>, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack: Tail Strike</span>\n
                When Lion's Spirit is not full, use <span class="Highlight">Basic Attack</span> after <span class="Highlight">Heavy Attack</span> to perform <span class="Highlight">Tail Strike</span>, dealing <span class="Ice">Glacio DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Striding Lion</span>\n
                After casting Heavy Attack <span class="Highlight">Glorious Plunge</span>, enter <span class="Highlight">Striding Lion</span> state;\n
                After casting Intro Skill <span class="Highlight">Lion Awakens</span> or Resonance Liberation <span class="Highlight">Strive: Lion's Vigor</span>, if Lion's Spirit is full, use <span class="Highlight">Basic Attack</span> to enter <span class="Highlight">Striding Lion</span> state.\n
                In the <span class="Highlight">Striding Lion</span> state:\n
                Attacks can be launched in mid-air. If Lingyang is on the ground, use Heavy Attack <span class="Highlight">Glorious Plunge</span> to get back in the air.\n
                Lion's Spirit is continuously consumed, and the <span class="Highlight">Striding Lion</span> state ends in {0}s after Lion's Spirit runs out;\n
                In the Resonance Liberation <span class="Highlight">Lion's Vigor</span> state, the consumption speed of Lion's Spirit is reduced by {1}, extending <span class="Highlight">Striding Lion</span> state by up to {2}s.\n
                Lingyang's <span class="Highlight">Basic Attack</span> is replaced with Basic Attack <span class="Highlight">Feral Gyrate</span>, which performs up to 2 consecutive attacks, dealing <span class="Ice">Glacio DMG</span>.\n
                Lingyang's <span class="Highlight">Resonance Skill</span> is replaced with <span class="Highlight">Mountain Roamer</span>, dealing <span class="Ice">Glacio DMG</span>.\n
                When Lion's Spirit is less than {3}, use <span class="Highlight">Basic Attack</span> to perform <span class="Highlight">Stormy Kicks</span>, dealing <span class="Ice">Glacio DMG</span>; after performing Basic Attack <span class="Highlight">Stormy Kicks</span>, the Mid-air Attack <span class="Highlight">Radiant Plunge</span> becomes available.\n
                Con. Energy is restored when Lion's Spirit is consumed.\n
                <div class="gap"></div>
                <span class="Title">Lion's Spirit</span>\n
                Lingyang can hold up to {4} Lion's Spirit.\n
                When casting Resonance Skill <span class="Highlight">Furious Punches</span>, Lion's Spirit is restored.\n
                When casting Intro Skill <span class="Highlight">Lion Awakens</span>, Lion's Spirit is restored.\n
                When casting Resonance Liberation <span class="Highlight">Strive: Lion's Vigor</span>, Lion's Spirit is restored.`,
                skillDetailNum: ["5", "50%", "10", "10", "100"],
                multipliers: [
                    {
                        attributeName: "Glorious Plunge Damage",
                        skillDetailNum: [{
                            values: ["86.70%", "93.81%", "100.92%", "110.88%", "117.99%", "126.16%", "137.54%", "148.91%", "160.29%", "172.37%", "186.59%", "200.81%", "215.03%", "229.25%", "243.47%", "257.69%", "271.90%", "286.12%", "300.34%", "314.56%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Feral Gyrate Part 1 Damage",
                        skillDetailNum: [{
                            values: ["43.80%*2+58.40%", "47.40%*2+63.19%", "50.99%*2+67.98%", "56.02%*2+74.69%", "59.61%*2+79.48%", "63.74%*2+84.98%", "69.48%*2+92.64%", "75.23%*2+100.31%", "80.98%*2+107.97%", "87.08%*2+116.11%", "94.27%*2+125.69%", "101.45%*2+135.27%", "108.63%*2+144.84%", "115.82%*2+154.42%", "123.00%*2+164.00%", "130.18%*2+173.58%", "137.37%*2+183.15%", "144.55%*2+192.73%", "151.73%*2+202.31%", "158.92%*2+211.89%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Feral Gyrate Part 2 Damage",
                        skillDetailNum: [{
                            values: ["15.98%*6", "17.29%*6", "18.60%*6", "20.44%*6", "21.75%*6", "23.26%*6", "25.35%*6", "27.45%*6", "29.55%*6", "31.77%*6", "34.39%*6", "37.01%*6", "39.63%*6", "42.26%*6", "44.88%*6", "47.50%*6", "50.12%*6", "52.74%*6", "55.36%*6", "57.98%*6"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Mountain Roamer Damage",
                        skillDetailNum: [{
                            values: ["41.69%*2", "45.11%*2", "48.53%*2", "53.31%*2", "56.73%*2", "60.66%*2", "66.13%*2", "71.60%*2", "77.07%*2", "82.88%*2", "89.72%*2", "96.56%*2", "103.39%*2", "110.23%*2", "117.07%*2", "123.90%*2", "130.74%*2", "137.58%*2", "144.41%*2", "151.25%*2"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Stormy Kicks Damage",
                        skillDetailNum: [{
                            values: ["18.13%*8+96.65%", "19.61%*8+104.58%", "21.10%*8+112.51%", "23.18%*8+123.60%", "24.67%*8+131.53%", "26.37%*8+140.64%", "28.75%*8+153.32%", "31.13%*8+166.00%", "33.51%*8+178.68%", "36.03%*8+192.15%", "39.01%*8+208.01%", "41.98%*8+223.86%", "44.95%*8+239.71%", "47.92%*8+255.56%", "50.89%*8+271.41%", "53.87%*8+287.26%", "56.84%*8+303.11%", "59.81%*8+318.96%", "62.78%*8+334.81%", "65.75%*8+350.66%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Tail Strike Damage",
                        skillDetailNum: [{
                            values: ["88.00%*2", "95.22%*2", "102.44%*2", "112.54%*2", "119.76%*2", "128.05%*2", "139.60%*2", "151.14%*2", "162.69%*2", "174.96%*2", "189.39%*2", "203.82%*2", "218.25%*2", "232.69%*2", "247.12%*2", "261.55%*2", "275.98%*2", "290.41%*2", "304.85%*2", "319.28%*2"]
                        }],
                        index: 8
                    }, {
                        attributeName: `"Lion's Spirit" Con. Energy Regen`,
                        skillDetailNum: [{
                            values: ["35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35", "35"]
                        }],
                        index: 9
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: `Lion's Pride`,
                skillDescription: `Damage of the Intro Skill <span class="Highlight">Lion Awakens</span> is increased by {0}.`,
                skillDetailNum: ["50%"],
                multipliers: [],
                skillBuffAtrribute: ["Intro Skill"],
                skillBuff: [50],
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Diligent Practice',
                skillDescription: `Under the <span class="Highlight">Striding Lion</span> state, within {0}s after each <span class="Highlight">Basic Attack</span>, the next <span class="Highlight">Mountain Roamer</span> will deal an additional <span class="Ice">Glacio DMG</span>, equal to {1} of <span class="Highlight">Mountain Roamer</span> damage, considered as Resonance Skill damage.`,
                skillDetailNum: ["3", "150%"],
                multipliers: [],
                skillBuffAtrribute: ["Intro Skill"],
                skillBuff: [50]
            },
            {
                skillId: 9,
                typeName: 'Inherent Skill',
                skillName: 'Skillful Cooking',
                skillDescription: `Has a chance to produce special dishes when cooking.`,
                skillDetailNum: [],
                multipliers: []
            }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Lion of Light, Blessings Abound",
            description: `During Resonance Liberation <color=Highlight>Lion's Vigor</color>, Lingyang's Anti-Interruption is enhanced.`,
            detailNum: [],
            sequenceBuffType: "No Buff",
            sequenceBuff: [],
            sequenceBuffAtrribute: [""],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1104_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Dominant and Fierce, Power Unbound",
            description: `Intro Skill <color=Highlight>Lion Awakens</color> additionally recovers {0} Resonance Energy for Lingyang, triggered once every {1}s.`,
            detailNum: ["10", "20"],
            sequenceBuffType: "No Buff",
            sequenceBuff: [],
            sequenceBuffAtrribute: [""],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1104_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Jaw-Dropping Feats, Loud and Wide",
            description: `During Resonance Liberation <color=Highlight>Lion's Vigor</color>, Lingyang's Basic Attack DMG Bonus is increased by {0}, and Resonance Skill DMG Bonus increased by {1}.`,
            detailNum: ["20%", "10%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Basic Attack Damage Bonus", "Resonance Skill Damage Bonus"],
            sequenceBuff: [20, 10],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1104_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Immortals Bow, in Reverence Flawed",
            description: `Outro Skill <color=Highlight>Frosty Marks</color> increases the Glacio DMG Bonus of all team members by {0} for {1}s.`,
            detailNum: ["20%", "30"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Glacio Damage Bonus"],
            sequenceBuff: [20],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1104_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Seven Stars Shine, Stepped upon High",
            description: `Resonance Liberation <color=Highlight>Strive: Lion's Vigor</color> additionally deals <color=Ice>Glacio DMG</color> equal to {0} of Lingyang's ATK.`,
            detailNum: ["200%"],
            sequenceBuffType: "Extra Skill Buff",
            sequenceBuffAtrribute: ["Seven Stars Shine, Stepped upon High"],
            sequenceBuff: [200],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1104_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Demons Tremble, Divine Power Nigh",
            description: `In the Forte Circuit <color=Highlight>Striding Lion</color> state, during the first {0}s after every Resonance Skill <color=Highlight>Mountain Roamer</color>, the Basic Attack DMG Bonus for Lingyang's next Basic Attack is increased by {1}.`,
            detailNum: ["3", "100%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Basic Attack Damage Bonus"],
            sequenceBuff: [100],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1104_UI.png"
        }
    ]
    }