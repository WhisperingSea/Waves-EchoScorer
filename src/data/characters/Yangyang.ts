import { WWCharacter } from "../WWCharacter";

const rarity4Star = "https://whisperingsea.github.io/wuthering-waves-assets/images/icon_stars/Icon_4_Stars.webp";

export const Yangyang: WWCharacter = {
    name: "Yangyang",
    charaId: 1402,
    rarity: {
        alt: "5 Star",
        img: rarity4Star
    },
    element: "Aero",
    weapon: "Sword",
    bio: `Yangyang journeyed far away from home to become an Outrider in Jinzhou.
Instead of seeking the spotlight, Yangyang chooses to provide comfort through quiet companionship for others.
After enduring hardships and anguish, she has found a clear purpose: to be a beacon of guidance and an aiding presence in a world still in need of healing.`,
    images: {
        portrait: "https://whisperingsea.github.io/wuthering-waves-assets/images/portraits/T_IconRole_Pile_yangyang_UI.png",
        icon_sq: "https://whisperingsea.github.io/wuthering-waves-assets/images/icons_character/Yangyang.png",
        model: "https://whisperingsea.github.io/wuthering-waves-assets/images/models/Oldyangyang2.png"
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
        base_hp: 816,
        base_atk: 20,
        base_def: 90,
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
                skillName: 'Feather as Blade',
                skillDescription: `<span class="Title">Basic Attack</span>\n
                Yangayang performs up to 4 consecutive attacks, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Yangyang consumes Stamina to lunge forward, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Heavy Attack: Zephyr Song</span>\n
                Use <span class="Highlight">Basic Attack</span> after <span class="Highlight">Heavy Attack</span> or <span class="Highlight">Dodge Counter</span> to perform Heavy Attack <span class="Highlight">Zephyr Song</span>, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>\n
                Yangyang consumes Stamina to perform a Plunging Attack from mid-air, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Use <span class="Highlight">Basic Attack</span> after a successful <span class="Highlight">Dodge</span> to thrust forward, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Part 1 Damage",
                        skillDetailNum: [{
                            values: ["22.50%", "24.34%", "26.18%", "28.77%", "30.61%", "32.73%", "35.69%", "38.64%", "41.59%", "44.73%", "48.42%", "52.11%", "55.80%", "59.49%", "63.18%", "66.87%", "70.56%", "74.25%", "77.94%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Part 2 Damage",
                        skillDetailNum: [{
                            values: ["30.00%", "32.46%", "34.92%", "38.36%", "40.82%", "43.65%", "47.58%", "51.52%", "55.46%", "59.64%", "64.56%", "69.48%", "74.40%", "79.32%", "84.24%", "89.16%", "94.08%", "99.00%", "103.92%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Part 3 Damage",
                        skillDetailNum: [{
                            values: ["23.55%*2", "25.48%*2", "27.41%*2", "30.11%*2", "32.04%*2", "34.26%*2", "37.35%*2", "40.44%*2", "43.53%*2", "46.81%*2", "50.68%*2", "54.54%*2", "58.40%*2", "62.26%*2", "66.13%*2", "69.99%*2", "73.85%*2", "77.71%*2", "81.57%*2"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Part 4 Damage",
                        skillDetailNum: [{
                            values: ["29.86%*2+39.81%", "32.31%*2+43.08%", "34.76%*2+46.34%", "38.19%*2+50.91%", "40.64%*2+54.18%", "43.45%*2+57.93%", "47.37%*2+63.16%", "51.29%*2+68.38%", "55.20%*2+73.60%", "59.36%*2+79.15%", "64.26%*2+85.68%", "69.16%*2+92.21%", "74.05%*2+98.74%", "78.95%*2+105.27%", "83.85%*2+111.80%", "88.74%*2+118.32%", "93.64%*2+124.85%", "98.54%*2+131.38%", "103.43%*2+137.91%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Heavy Attack Damage",
                        skillDetailNum: [{
                            values: ["10.00%*3", "10.82%*3", "11.64%*3", "12.78%*3", "13.60%*3", "14.55%*3", "15.86%*3", "17.17%*3", "18.48%*3", "19.88%*3", "21.52%*3", "23.16%*3", "24.80%*3", "26.44%*3", "28.08%*3", "29.72%*3", "31.36%*3", "33.00%*3", "34.64%*3"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Mid-Air Attack Damage",
                        skillDetailNum: [{
                            values: ["46.50%", "50.31%", "54.12%", "59.46%", "63.27%", "67.66%", "73.76%", "79.86%", "85.96%", "92.44%", "100.07%", "107.69%", "115.32%", "122.95%", "130.57%", "138.20%", "145.82%", "153.45%", "161.08%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Zephyr Song Damage",
                        skillDetailNum: [{
                            values: ["53.62%", "58.02%", "62.41%", "68.57%", "72.97%", "78.02%", "85.06%", "92.10%", "99.13%", "106.61%", "115.40%", "124.20%", "132.99%", "141.78%", "150.58%", "159.37%", "168.17%", "176.96%", "185.76%"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Dodge Counter Damage",
                        skillDetailNum: [{
                            values: ["43.80%*2", "47.39%*2", "50.98%*2", "56.01%*2", "59.60%*2", "63.73%*2", "69.47%*2", "75.22%*2", "80.97%*2", "87.07%*2", "94.26%*2", "101.44%*2", "108.62%*2", "115.81%*2", "122.99%*2", "130.17%*2", "137.36%*2", "144.54%*2", "151.72%*2"]
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
                skillName: 'Zephyr Domain',
                skillDescription: `Yangyang wields her sword to create a whirling vortex of winds that gathers nearby enemies to the center, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["17.37%*4+104.22%", "18.79%*4+112.76%", "20.21%*4+121.31%", "22.21%*4+133.27%", "23.63%*4+141.82%", "25.27%*4+151.65%", "27.55%*4+165.32%", "29.83%*4+178.99%", "32.11%*4+192.67%", "34.53%*4+207.19%", "37.38%*4+224.29%", "40.23%*4+241.38%", "43.07%*4+258.47%", "45.92%*4+275.56%", "48.77%*4+292.66%", "51.62%*4+309.75%", "54.47%*4+326.84%", "57.32%*4+343.93%", "60.17%*4+361.02%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                        }],
                        index: 3
                    }
                ]
            },
            {
                skillId: 3,
                typeName: 'Resonance Liveration',
                skillName: 'Wind Spirals',
                skillDescription: `Yangyang conjures a mighty Cyclone that gathers nearby enemies, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["23.43%*12+187.46%", "25.35%*12+202.83%", "27.27%*12+218.21%", "29.96%*12+239.73%", "31.88%*12+255.10%", "34.09%*12+272.78%", "37.17%*12+297.37%", "40.24%*12+321.97%", "43.32%*12+346.56%", "46.58%*12+372.70%", "50.43%*12+403.44%", "54.27%*12+434.19%", "58.11%*12+464.93%", "61.95%*12+495.67%", "65.80%*12+526.42%", "69.64%*12+557.16%", "73.48%*12+587.91%", "77.33%*12+618.65%", "81.17%*12+649.40%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Cooldown",
                        skillDetailNum: [{
                            values: ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Res. Energy Cost",
                        skillDetailNum: [{
                            values: ["100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100", "100"]
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
                skillName: 'Cerulean Song',
                skillDescription: `Yangyang sends the target into the air, dealing <span class="Wind">Aero DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Skill Damage",
                        skillDetailNum: [{
                            values: ["40.00%*2", "43.28%*2", "46.56%*2", "51.15%*2", "54.43%*2", "58.20%*2", "63.45%*2", "68.70%*2", "73.94%*2", "79.52%*2", "86.08%*2", "92.64%*2", "99.20%*2", "105.76%*2", "112.32%*2", "118.88%*2", "125.44%*2", "132.00%*2", "138.56%*2"]
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
                skillName: 'Whispering Breeze',
                skillDescription: `Yangyang recovers {0} Resonance Energy per second in {1}s for the next character (or other characters on a nearby team that activates an Outro Skill).`,
                skillDetailNum: ["4", "5"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillName: 'Echoing Feathers',
                skillDescription: `<span class="Title">Heavy Attack: Stormy Strike</span>\n
                When Yangyang has {0} Melodies, she can cast <span class="Highlight">Stormy Strike</span> after <span class="Highlight">Heavy Attack</span>, dealing <span class="Wind">Aero DMG</span>.\n
                <div class="gap"></div>
                <span class="Title">Mid-air Attack: Feather Release</span>\n
                When Yangyang has {1} Melodies, casting <span class="Highlight">Basic Attacks</span> in mid-air will cause her to consume all Melodies, perform consecutive strikes, and dive from mid-air, dealing <span class="Wind">Aero DMG</span>. As Yangyang lands, she sheathes her sword with an attack, dealing <span class="Wind">Aero DMG</span>. This attack is considered as Basic Attack.\n
                <div class="gap"></div>
                <span class="Title">Melody</span>\n
                Yangyang can hold up to {2} Melodies\n
                Yangyang obtains {3} Melody with every <span class="Highlight">Basic Attack 4</span> on hit.\n
                Yangyang obtains {4} Melody for every <span class="Highlight">Zephyr Song</span> on hit.\n
                Yangyang obtains {5} Melody for every Resonance Skill <span class="Highlight">Zephyr Domain</span> on hit.\n
                Yangyang obtains {6} Melody upon casting Intro Skill <span class="Highlight">Cerulean Song</span>.`,
                skillDetailNum: ["3", "3", "3", "1", "1", "1", "1"],
                multipliers: [
                    {
                        attributeName: "Stormy Strike Damage",
                        skillDetailNum: [{
                            values: ["19.12%*2", "20.69%*2", "22.26%*2", "24.45%*2", "26.02%*2", "27.82%*2", "30.33%*2", "32.84%*2", "35.35%*2", "38.02%*2", "41.15%*2", "44.29%*2", "47.43%*2", "50.56%*2", "53.70%*2", "56.84%*2", "59.97%*2", "63.11%*2", "66.25%*2"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Feather Release Damage",
                        skillDetailNum: [{
                            values: ["10.93%*5+63.78%*2", "11.83%*5+69.01%*2", "12.72%*5+74.24%*2", "13.98%*5+81.57%*2", "14.88%*5+86.80%*2", "15.91%*5+92.81%*2", "17.34%*5+101.18%*2", "18.78%*5+109.55%*2", "20.21%*5+117.92%*2", "21.73%*5+126.81%*2", "23.53%*5+137.27%*2", "25.32%*5+147.73%*2", "27.11%*5+158.19%*2", "28.91%*5+168.66%*2", "30.70%*5+179.12%*2", "32.49%*5+189.58%*2", "34.29%*5+200.04%*2", "36.08%*5+210.50%*2", "37.87%*5+220.96%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Feather Release Con. Energy Regen",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 3
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Compassion',
                skillDescription: `Yangyang recovers {0} Stamina after she casts a Mid-air Attack <span class="Highlight">Feather Release</span>.`,
                skillDetailNum: ["30"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Lazuline Mercy',
                skillDescription: `Yangyang's Aero DMG Bonus is increased by {0} for {1}s after casting Intro Skill <span class="Highlight">Cerulean Song</span>.`,
                skillDetailNum: ["8%", "8"],
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
            name: "Sapphire Skies, Soaring Sparrows",
            description: `Intro Skill <span class="Highlight">Cerulean Song</span> increases Yangyang's Aero DMG Bonus by an additional {0} for {1}s.`,
            detailNum: ["15%", "8"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Aero Damage Bonus"],
            sequenceBuff: [15],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1402_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Nesting Twigs, in Beaks They Harrow",
            description: `<span class="Highlight">Heavy Attack</span> recovers an additional {0} Resonance Energy for Yangyang when it hits a target, which can be triggered 1 time every {1}s.`,
            detailNum: ["10", "20"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1402_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Nature Sings in Symphony",
            description: `Resonance Skill DMG Bonus is increased by {0}. The Wind Field's pulling effect on surrounding targets is enhanced, and the pulling range is expanded by {1}.`,
            detailNum: ["40%", "33%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonance Skill Damage Bonus"],
            sequenceBuff: [40],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1402_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Close Your Eyes and Listen in",
            description: `Mid-Air Attack <span class="Highlight">Feather Release</span>'s damage is increased by {0}.`,
            detailNum: ["95%"],
            sequenceBuffType: "Skill Damage Buff",
            sequenceBuffAtrribute: ["Feather Release"],
            sequenceBuff: [95],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1402_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Winds Whisper in Harmony",
            description: `Resonance Liberation <span class="Highlight">Wind Spirals</span>'s damage is increased by {0}.`,
            detailNum: ["85%"],
            sequenceBuffType: "Skill Liberation Buff",
            sequenceBuffAtrribute: ["Resonance Liberation"],
            sequenceBuff: [85],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1402_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "A Tribute to Life's Sweet Hymn",
            description: `After casting Mid-Air Attack <span class="Highlight">Feather Release</span>, the ATK of all team members is increased by {0} for {1}s.`,
            detailNum: ["20%", "20"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [20],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1402_UI.png"
        }
    ]
}