import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Encore: WWCharacter = {
    name: "Encore",
    charaId: 1201,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Fusion",
    weapon: "Rectifier",
    bio: `Encore, a consultant from the Black Shores, is a quirky, lively, and spunky girl who loves to recount her friendships and adventures through fantasy and fairy tales.
She always has two Woolies with her, who are Encore's best friends and protectors.
With Cosmos and Cloudy, Encore travels all over the world!`,
    images: {
        portrait: "https://wuthering-waves-assets.pages.dev/portraits/T_IconRole_Pile_anke_UI.png",
        icon_sq: "https://wuthering-waves-assets.pages.dev/icons_character/Encore.png",
        model: "https://wuthering-waves-assets.pages.dev/models/EncoreModel.png"
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
            item: "Rage Tacet Core",
            id: 5,
            value: "46"
        },
        {
            item: "Pecok Flower",
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
        base_hp: 841,
        base_atk: 34,
        base_def: 102,
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill5.webp",
                skillName: 'Wooly Attack',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Encore performs up to 4 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Basic Attack: Wooly Strike</span>\n
                After <span class="Highlight">Basic Attack 4</span>, press the Basic Attack button to attack the target, dealing <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Encore consumes Stamina to attack the target, dealing <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Encore consumes Stamina to perform a Mid-Air Plunging Attack, dealing <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Fire">Fusion DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["28.00%", "30.29%", "32.59%", "35.80%", "38.10%", "40.74%", "44.41%", "48.09%", "51.76%", "55.66%", "60.25%", "64.85%", "69.44%", "74.03%", "78.62%", "83.21%", "87.81%", "92.40%", "96.99%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["33.30%", "36.03%", "38.76%", "42.58%", "45.31%", "48.45%", "52.82%", "57.19%", "61.56%", "66.20%", "71.66%", "77.12%", "82.58%", "88.04%", "93.50%", "98.97%", "104.43%", "109.89%", "115.35%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["33.35%*2", "36.08%*2", "38.81%*2", "42.64%*2", "45.38%*2", "48.52%*2", "52.90%*2", "57.27%*2", "61.65%*2", "66.30%*2", "71.77%*2", "77.24%*2", "82.71%*2", "88.18%*2", "93.65%*2", "99.11%*2", "104.58%*2", "110.05%*2", "115.52%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["19.25%*4", "20.82%*4", "22.40%*4", "24.61%*4", "26.19%*4", "28.01%*4", "30.53%*4", "33.06%*4", "35.58%*4", "38.27%*4", "41.42%*4", "44.58%*4", "47.74%*4", "50.89%*4", "54.05%*4", "57.21%*4", "60.36%*4", "63.52%*4", "66.68%*4"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Woolies Damage",
                        skillDetailNum: [{
                            values: ["120.00%", "129.84%", "139.67%", "153.45%", "163.29%", "174.61%", "190.35%", "206.10%", "221.84%", "238.57%", "258.25%", "277.93%", "297.61%", "317.29%", "336.97%", "356.65%", "376.33%", "396.01%", "415.69%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["94.10%", "101.81%", "109.53%", "120.33%", "128.05%", "136.92%", "149.27%", "161.61%", "173.96%", "187.08%", "202.51%", "217.94%", "233.37%", "248.80%", "264.24%", "279.67%", "295.10%", "310.53%", "325.97%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Mid-Air Attack",
                        skillDetailNum: [{
                            values: ["62.00%", "67.08%", "72.16%", "79.28%", "84.36%", "90.21%", "98.35%", "106.48%", "114.61%", "123.26%", "133.43%", "143.59%", "153.76%", "163.93%", "174.10%", "184.27%", "194.43%", "204.60%", "214.77%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["63.34%*2", "68.54%*2", "73.73%*2", "81.01%*2", "86.20%*2", "92.18%*2", "100.49%*2", "108.80%*2", "117.11%*2", "125.94%*2", "136.33%*2", "146.72%*2", "157.11%*2", "167.50%*2", "177.89%*2", "188.28%*2", "198.67%*2", "209.06%*2", "219.45%*2"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Heavy Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Mid-Air Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 10
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillEncore2.webp",
                skillName: 'Flaming Woolies',
                skillDescription: `<span class="Title">Flaming Woolies</span>\n
                Encore summons Cloudy and Cosmos to attack with burning rays, dealing <span class="Fire">Fusion DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Energetic Welcome</span>\n
                After casting <span class="Highlight">Flaming Woolies</span>, use <span class="Highlight">Resonance Skill</span> to perform <span class="Highlight">Energetic Welcome</span>, dealing <span class="Fire">Fusion DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Flaming Woolies Damage",
                        skillDetailNum: [{
                            values: ["38.53%*8", "41.69%*8", "44.85%*8", "49.28%*8", "52.44%*8", "56.07%*8", "61.13%*8", "66.18%*8", "71.24%*8", "76.61%*8", "82.93%*8", "89.25%*8", "95.57%*8", "101.89%*8", "108.21%*8", "114.53%*8", "120.85%*8", "127.17%*8", "133.49%*8"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Energetic Welcome Damage",
                        skillDetailNum: [{
                            values: ["170.60%", "184.58%", "198.57%", "218.16%", "232.15%", "248.24%", "270.62%", "293.00%", "315.38%", "339.16%", "367.14%", "395.12%", "423.10%", "451.08%", "479.06%", "507.04%", "535.01%", "562.99%", "590.97%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Flaming Woolies Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Energetic Welcome Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                        }],
                        index: 5
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillEncore3.webp",
                skillName: 'Cosmos Rave',
                skillDescription: `As Encore loses control, Cosmos breaks free and wreaks havoc on its surroundings.\n
                <div class="gap"></div>
                <span class="Title">Basic Attack: Cosmos: Frolicking</span>\n
                During Cosmos Rave, the <span class="Highlight">Basic Attack</span> is replaced with <span class="Highlight">Cosmos: Frolicking</span>, which performs up to 4 consecutive attacks, dealing <span class="Fire">Fusion DMG</span>, considered as Basic Attack damage.\n
                <div class="gap"></div>
                <span class="Title">Cosmos: Heavy Attack</span>\n
                During Cosmos Rave, the <span class="Highlight">Heavy Attack</span> is replaced with <span class="Highlight">Cosmos: Heavy Attack</span>, consuming Stamina to attack the target, dealing <span class="Fire">Fusion DMG</span>, considered as Heavy Attack damage.\n
                <div class="gap"></div>
                <span class="Title">Resonance Skill: Cosmos: Rampage</span>\n
                During Cosmos Rave, <span class="Highlight">Flaming Woolies</span> is replaced with <span class="Highlight">Cosmos: Rampage</span>, dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Skill damage.\n
                <div class="gap"></div>
                <span class="Title">Cosmos: Dodge Counter</span>\n
                During Cosmos Rave, use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Fire">Fusion DMG</span>, considered as Basic Attack damage.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Cosmos: Frolicking Part 1 Damage",
                        skillDetailNum: [{
                            values: ["45.36%*2", "49.08%*2", "52.80%*2", "58.01%*2", "61.73%*2", "66.01%*2", "71.96%*2", "77.91%*2", "83.86%*2", "90.18%*2", "97.62%*2", "105.06%*2", "112.50%*2", "119.94%*2", "127.38%*2", "134.81%*2", "142.25%*2", "149.69%*2", "157.13%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cosmos: Frolicking Part 2 Damage",
                        skillDetailNum: [{
                            values: ["28.37%*3", "30.70%*3", "33.02%*3", "36.28%*3", "38.61%*3", "41.28%*3", "45.00%*3", "48.72%*3", "52.45%*3", "56.40%*3", "61.05%*3", "65.71%*3", "70.36%*3", "75.01%*3", "79.66%*3", "84.31%*3", "88.97%*3", "93.62%*3", "98.27%*3"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cosmos: Frolicking Part 3 Damage",
                        skillDetailNum: [{
                            values: ["33.19%*4", "35.92%*4", "38.64%*4", "42.45%*4", "45.17%*4", "48.30%*4", "52.65%*4", "57.01%*4", "61.36%*4", "65.99%*4", "71.43%*4", "76.87%*4", "82.32%*4", "87.76%*4", "93.20%*4", "98.65%*4", "104.09%*4", "109.53%*4", "114.98%*4"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Cosmos: Frolicking Part 4 Damage",
                        skillDetailNum: [{
                            values: ["97.59%*3", "105.59%*3", "113.59%*3", "124.79%*3", "132.79%*3", "142.00%*3", "154.80%*3", "167.60%*3", "180.40%*3", "194.01%*3", "210.01%*3", "226.01%*3", "242.02%*3", "258.02%*3", "274.02%*3", "290.03%*3", "306.03%*3", "322.03%*3", "338.04%*3"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Cosmos: Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["109.44%", "118.42%", "127.39%", "139.96%", "148.93%", "159.25%", "173.61%", "187.97%", "202.32%", "217.58%", "235.53%", "253.48%", "271.42%", "289.37%", "307.32%", "325.27%", "343.22%", "361.16%", "379.11%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Cosmos Rampage Damage",
                        skillDetailNum: [{
                            values: ["31.85%*4", "34.46%*4", "37.07%*4", "40.72%*4", "43.34%*4", "46.34%*4", "50.52%*4", "54.70%*4", "58.88%*4", "63.32%*4", "68.54%*4", "73.76%*4", "78.99%*4", "84.21%*4", "89.43%*4", "94.66%*4", "99.88%*4", "105.10%*4", "110.33%*4"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Cosmos: Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["33.19%*4", "35.92%*4", "38.64%*4", "42.45%*4", "45.17%*4", "48.30%*4", "52.65%*4", "57.01%*4", "61.36%*4", "65.99%*4", "71.43%*4", "76.87%*4", "82.32%*4", "87.76%*4", "93.20%*4", "98.65%*4", "104.09%*4", "109.53%*4", "114.98%*4"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Cosmos: Heavy Attack Stamina Consumption",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Cosmos Rave Duration",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 9
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"]
                        }],
                        index: 10
                    }, {
                        attributeName: "Cosmos Rampage Cooldown",
                        skillDetailNum: [{
                            values: ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]
                        }],
                        index: 11
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                        }],
                        index: 12
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 13
                    }
                ]
            },
            {
                skillId: 4,
                typeName: 'Intro Skill',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillEncore5.webp",
                skillName: 'Woolies Can Help!',
                skillDescription: `Encore pounces at the enemies with Cosmos, dealing <span class="Fire">Fusion DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["100.00%", "108.20%", "116.40%", "127.88%", "136.08%", "145.51%", "158.63%", "171.75%", "184.87%", "198.81%", "215.21%", "231.61%", "248.01%", "264.41%", "280.81%", "297.21%", "313.61%", "330.01%", "346.41%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Con. Energy Regen",
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
                skillName: 'Thermal Field',
                skillDescription: `Encore generates a Flame Zone centered around skill target, with a radius of {0}m. Targets inside the Flame Zone are continuously burned, suffering <span class="Fire">Fusion DMG</span> equal to {2} of Encore's ATK every {1}s for {3}s.`,
                skillDetailNum: ["3", "1.5", "176.76%", "6"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillEncore4.webp",
                skillName: 'Black & White Woolies',
                skillDescription: `<span class="Title">Resonance Liberation: Cloudy Frenzy</span>\n
                When Encore's "Dissonance" is full, after casting a <span class="Highlight">Heavy Attack</span>, Encore will consume all "Dissonance" to enter the Dissonance state, reducing damage taken by {0}. Switching Characters does not interrupt "Dissonance".\n
                After the Dissonance state ends, Encore will cast <span class="Highlight">Cloudy Frenzy</span>, dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Liberation damage.\n
                <div class="gap"></div>
                <span class="Title">Resonance Liberation: Cosmos Rupture</span>\n
                During Cosmos Rampage, when casting <span class="Highlight">Heavy Attack</span>, if "Dissonance" is full, Encore will consume all "Dissonance" to enter Cosmos' Dissonance state, reducing damage taken by {1}. Switching Characters does not interrupt "Dissonance".\n
                After Cosmos' Dissonance state ends, Encore will cast <span class="Highlight">Cosmos Rupture</span>, dealing <span class="Fire">Fusion DMG</span>, considered as Resonance Liberation damage.\n
                <div class="gap"></div>
                <span class="Title">Dissonance</span>\n
                Encore can hold up to {2} "Dissonance".\n
                When Normal Attack <span class="Highlight">Wooly Attack</span> hits the target, Encore restores "Dissonance".\n
                When Resonance Skill <span class="Highlight">Flaming Woolies</span> hits the target, Encore restores "Dissonance".\n
                When Resonance Skill <span class="Highlight">Energetic Welcome</span> hits the target, Encore restores "Dissonance".\n
                When Intro Skill <span class="Highlight">Woolies Helpers</span> hits the target, Encore restores "Dissonance".\n
                During the duration of Resonance Liberation <span class="Highlight">Cosmos Rave</span>, hitting targets will restore "Dissonance" to Encore.`,
                skillDetailNum: ["70%", "70%", "100"],
                multipliers: [
                    {
                        attributeName: "Cloudy: Frenzy Damage",
                        skillDetailNum: [{
                            values: ["168.00%", "181.77%", "195.55%", "214.83%", "228.61%", "244.45%", "266.49%", "288.53%", "310.58%", "334.00%", "361.55%", "389.10%", "416.65%", "444.20%", "471.76%", "499.31%", "526.86%", "554.41%", "581.96%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cosmos: Rupture Damage",
                        skillDetailNum: [{
                            values: ["23.35%*6+249.08%", "25.26%*6+269.51%", "27.18%*6+289.93%", "29.86%*6+318.53%", "31.77%*6+338.95%", "33.97%*6+362.44%", "37.04%*6+395.12%", "40.10%*6+427.80%", "43.17%*6+460.48%", "46.42%*6+495.21%", "50.25%*6+536.06%", "54.08%*6+576.91%", "57.91%*6+617.76%", "61.74%*6+658.61%", "65.57%*6+699.46%", "69.40%*6+740.31%", "73.23%*6+781.16%", "77.06%*6+822.01%", "80.89%*6+862.86%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cloudy: Frenzy Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Cosmos: Rupture Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 4
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Angry Cosmos',
                skillDescription: `During the Resonance Liberation <span class="Highlight">Cosmos Rave</span>, when Encore's HP is above {0}, DMG dealt is increased by {1}.`,
                skillDetailNum: ["70%", "10%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Woolies Cheer Dance',
                skillDescription: `When Resonance Skill <span class="Highlight">Flaming Woolies</span> or Resonance Skill <span class="Highlight">Cosmos: Rampage</span> is cast, Encore's Fusion DMG Bonus is increased by {0} for {1}s.`,
                skillDetailNum: ["10%", "10"],
                multipliers: []
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
            name: "Wooly's Fairy Tale",
            description: `When <color=Highlight>Basic Attack</color> hits a target, Encore's Fusion DMG Bonus is increased by {0}, stacking up to {1} times for {2}s.`,
            detailNum: ["3%", "4", "6"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Fusion Damage Bonus"],
            sequenceBuff: [3],
            stacks: 4,
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1203_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Sheep-counting Lullaby",
            description: `Encore additionally restores {0} Resonance Energy when casting Basic Attack <color=Highlight>Woolies Attack</color> or Resonance Skill <color=Highlight>Energetic Welcome</color>. This can be triggered once every {1}s.`,
            detailNum: ["10", "10"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1203_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Fog? The Black Shores!",
            description: `The DMG multiplier of Heavy Attack <color=Highlight>Cloudy: Frenzy</color> and Heavy Attack <color=Highlight>Cosmos: Rupture</color> is increased by {0}.`,
            detailNum: ["40%"],
            sequenceBuffType: "Skill Forte Buff",
            sequenceBuffAtrribute: ["Forte Circuit"],
            sequenceBuff: [40],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1203_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: `Adventure? Let's go!`,
            description: `Heavy Attack <color=Highlight>Cosmos: Rupture</color> increases the Fusion DMG Bonus of all team members by {0} for {1}s.`,
            detailNum: ["20%", "30"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Fusion Damage Bonus"],
            sequenceBuff: [20],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1203_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Hero Takes the Stage!",
            description: `Resonance Skill DMG Bonus is increased by {0}.`,
            detailNum: ["35%"],
            sequenceBuffType: "Character Buff",
            sequenceBuffAtrribute: ["Resonance Skill Damage Bonus"],
            sequenceBuff: [35],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1203_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "Woolies Save the World!",
            description: `During Resonance Liberation <color=Highlight>Cosmos Rave</color>, Encore gains {0} stack(s) of "Lost Lamb" every time she deals damage, each stack increasing her ATK by {1} for {2}s, stacking up to {3} time(s).`,
            detailNum: ["1", "5%", "10", "5"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [5],
            stacks: 5,
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1203_UI.png"
        }
    ]
}