import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Carlotta: WWCharacter = {
    name: "Carlotta",
    charaId: 1107,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Glacio",
    weapon: "Pistols",
    bio: `Carlotta, the second daughter of the esteemed Montelli family, embodies innate nobility and a refined appreciation for art. Her elegance is matched by her unconventional spirit, unshackled by tradition.
To ensure her family's future, she alternates between dual roles, addressing delicate "troubles" behind the scenes.`,
    images: {
        portrait: "https://wuthering-waves-assets.pages.dev/portraits/CarlottaPortrait.webp",
        icon_sq: "https://wuthering-waves-assets.pages.dev/icons_character/Carlotta.webp",
        model: "https://wuthering-waves-assets.pages.dev/models/Carlotta_Full_Sprite.webp"
    },
    asension: {
        charaAsension: [
            {
                item: "LF Polygon Core",
                id: 1,
                value: "4"
            },
            {
                item: "MF Polygon Core",
                id: 2,
                value: "12"
            },
            {
                item: "HF Polygon Core",
                id: 3,
                value: "12"
            },
            {
                item: "FF Polygon Core",
                id: 4,
                value: "4"
            },
            {
                item: "Platinum Core",
                id: 5,
                value: "46"
            },
            {
                item: "Sword Acorus",
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
                item: "LF Polygon Core",
                id: 1,
                value: "25"
            },
            {
                item: "MF Polygon Core",
                id: 2,
                value: "28"
            },
            {
                item: "HF Polygon Core",
                id: 3,
                value: "40"
            },
            {
                item: "FF Polygon Core",
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
                item: "The Netherworld's Stare",
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
        base_hp: 996,
        base_atk: 37,
        base_def: 98,
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
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill3.webp",
            skillName: 'Silent Execution',
            skillDescription: `<span class="Title">Basic Attack</span>
                Perform up to 2 consecutive strikes, dealing <span class="Ice">Glacio DMG</span>.<br>
                <div class="gap"></div>
                <span class="Title">Basic Attack - <span class="Highlight">Necessary Measures</span></span>\n
                With Moldable Crystals, Carlotta's <span class="Highlight">Basic Attack</span> is replaced with <span class="Highlight">Necessary Measures</span>.<br>
                Chain up to 3 strikes, dealing <span class="Ice">Glacio DMG</span>. Each strike of <span class="Highlight">Necessary Measures</span> consumes 1 Moldable Crystal.
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>\n
                Deliver a charged attack at the target at the cost of STA, dealing <span class="Ice">Glacio DMG</span>.<br>
                <div class="gap"></div>
                <span class="Title">Heavy Attack - <span class="Highlight">Containment Tactics</span></span>\n
                When Carlotta's Substance is full, her <span class="Highlight">Heavy Attack</span> will be replaced with <span class="Highlight">Containment Tactics</span>: consume all Substance to deal <span class="Ice">Glacio DMG</span> and reduce the cooldown of Resonance Skill <span class="Highlight">Art of Violence</span> by 6s.<br>
                <div class="gap"></div>
                <span class="Title">Mid-air Attacks</span>\n
                Perform a Plunging Attack at the cost of STA, dealing <span class="Ice">Glacio DMG</span>. Using <span class="Highlight">Basic Attack</span> shortly after the landing will cast <span class="Highlight">Customary Greetings</span>.<br>
                <div class="gap"></div>
                <span class="Title">Mid-air Attacks - <span class="Highlight">Customary Greetings</span></span>\n
                Flip over the target and deliver a surprise shot, dealing <span class="Ice">Glacio DMG</span>.<br>
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>\n
                Press <span class="Highlight">Normal Attack</span> shortly after a successful <span class="Highlight">Dodge </span>to deliver a riposte shot, dealing <span class="Ice">Glacio DMG</span>. This consumes 1 Moldable Crystal.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Basic Attack Stage 1",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["27.20%", "29.44%", "31.67%", "34.49%", "37.02%", "39.58%", "43.15%", "46.72%", "50.29%", "54.08%"]
                    }],
                    index: 1
                }, {
                    attributeName: "Basic Attack Stage 2",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["19.89%+19.89%+26.52%", "21.53%+21.53%+28.70%", "23.16%+23.16%+30.87%", "25.44%+25.44%+33.92%", "27.07%+27.07%+36.09%", "28.95%+28.95%+38.59%", "31.56%+31.56%+42.07%", "34.17%+34.17%+45.55%", "36.78%+36.78%+49.03%", "39.55%+39.55%+52.73%"]
                    }],
                    index: 2
                }, {
                    attributeName: "Necessary Measures Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["33.15%", "35.87%", "38.59%", "42.40%", "45.12%", "48.24%", "52.59%", "56.94%", "61.29%", "65.91%"]
                    }],
                    index: 3
                }, {
                    attributeName: "Necessary Measures Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["30.22%+36.94%", "32.70%+39.97%", "35.18%+42.99%", "38.65%+47.23%", "41.12%+50.26%", "43.97%+53.75%", "47.94%+58.59%", "51.90%+63.44%", "55.87%+68.28%", "60.08%+73.43%"]
                    }],
                    index: 4
                }, {
                    attributeName: "Necessary Measures Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["70.38%+11.73%*4", "76.16%+12.70%*4", "81.93%+13.66%*4", "90.01%+15.01%*4", "95.78%+15.97%*4", "102.41%+17.07%*4", "111.65%+18.61%*4", "120.88%+20.15%*4", "130.12%+21.69%*4", "139.93%+23.33%*4"]
                    }],
                    index: 5
                }, {
                    attributeName: "Heavy Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["11.48%*2+11.48%*2+30.60%", "12.42%*2+12.42%*2+33.11%", "13.36%*2+13.36%*2+35.62%", "14.68%*2+14.68%*2+39.14%", "15.62%*2+15.62%*2+41.65%", "16.70%*2+16.70%*2+44.53%", "18.21%*2+18.21%*2+48.55%", "19.71%*2+19.71%*2+52.56%", "21.22%*2+21.22%*2+56.58%", "22.82%*2+22.82%*2+60.84%"]
                    }],
                    index: 6
                }, {
                    attributeName: "Containment Tactics DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["17.22%*2+17.22%*2+45.90%", "18.63%*2+18.63%*2+49.67%", "20.04%*2+20.04%*2+53.43%", "22.02%*2+22.02%*2+58.70%", "23.43%*2+23.43%*2+62.47%", "25.05%*2+25.05%*2+66.79%", "27.31%*2+27.31%*2+72.82%", "29.57%*2+29.57%*2+78.84%", "31.83%*2+31.83%*2+84.86%", "34.23%*2+34.23%*2+91.26%"]
                    }],
                    index: 7
                }, {
                    attributeName: "Mid-air Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["52.70%", "57.03%", "61.35%", "67.40%", "71.72%", "76.69%", "83.60%", "90.52%", "97.43%", "104.78%"]
                    }],
                    index: 8
                }, {
                    attributeName: "Customary Greetings DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["54.32%+66.39%", "58.77%+71.83%", "63.23%+77.28%", "69.46%+84.90%", "73.92%+90.34%", "79.04%+96.60%", "86.16%+105.31%", "93.29%+114.02%", "100.42%+122.73%", "107.99%+131.99%"]
                    }],
                    index: 9
                }, {
                    attributeName: "Dodge Counter DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["52.20%+69.19%", "56.48%+74.86%", "60.76%+80.54%", "66.75%+88.48%", "71.03%+94.15%", "75.95%+100.68%", "82.80%+109.76%", "89.65%+118.83%", "96.49%+127.91%", "103.77%+137.55%"]
                    }],
                    index: 10
                }, {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                    }],
                    index: 11
                }, {
                    attributeName: "Mid-air Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 12
                }, {
                    attributeName: "Containment Tactics Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                    }],
                    index: 13
                },
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SKillCarlotta2.webp",
            skillName: 'Art of Violence',
            skillDescription: `
                Deal <span class="Ice">Glacio DMG</span> and inflict  <span class="Highlight">Dispersion</span> on the target. Press <span class="Highlight">Resonance Skill</span> again shortly after to cast <span class="Highlight">Chromatic Splendor</span>.
                <div class="gap"></div>
                <span class="Title"> <span class="Highlight">Dispersion</span></span>\n
                Targets with Dispersion are immobilized for 1.5s.
                <div class="gap"></div>
                <span class="Title">Chromatic Splendor</span>\n
                Consume all Moldable Crystals and deal <span class="Ice">Glacio DMG</span>.<br>
                The Resonance Skill enters cooldown after a while if <span class="Highlight">Chromatic Splendor</span> is not cast or Carlotta is switched off the field.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["72.49%+72.49%", "78.43%+78.43%", "84.37%+84.37%", "92.69%+92.69%", "98.64%+98.64%", "105.47%+105.47%", "114.98%+114.98%", "124.49%+124.49%", "134.00%+134.00%", "144.11%+144.11%"]
                    }],
                    index: 1
                }, {
                    attributeName: "Chromatic Splendro DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["56.70%+56.70%+170.10%", "61.35%+61.35%+184.05%", "66.00%+66.00%+198.00%", "72.51%+72.51%+217.53%", "77.16%+77.16%+231.48%", "82.51%+82.51%+247.52%", "89.95%+89.95%+269.83%", "97.39%+97.39%+292.15%", "104.83%+104.83%+314.47%", "112.73%+112.73%+338.18%"]
                    }],
                    index: 2
                }, {
                    attributeName: "Cooldown",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["14s", "14s", "14s", "14s", "14s", "14s", "14s", "14s", "14s", "14s"]
                    }],
                    index: 3
                }, {
                    attributeName: "Concerto Regen",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 4
                }, {
                    attributeName: "Chromatic Splendor Concerto Regen",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 5
                },

            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillCarlotta3.webp",
            skillName: 'Era of New Wave',
            skillDescription: `
            Deal <span class="Ice">Glacio DMG</span> to all targets in an area (considered Resonance Skill DMG) and inflict <span class="Highlight">Deconstruction</span> on targets hit, then activate <span class="Highlight">Twilight Tango</span>.<br>
            Can be cast in mid-air close to the ground.
            <div class="gap"></div>
            <span class="Title">Deconstruction</span>\n
            Dealing DMG to targets inflicted with <span class="Highlight">Deconstruction</span> ignores 18% of their DEF.
            <div class="gap"></div>
            <span class="Title">Twilight Tango</span>\n
            While in <span class="Highlight">Twilight Tango</span>, press <span class="Highlight">Normal Attack</span> or <span class="Highlight">Resonance Liberation</span> to cast <span class="Highlight">Death Knell</span>.<br>
            Each <span class="Highlight">Death Knell</span> grants 1 Meta Vector.<br>
            With 4 Meta Vectors, press <span class="Highlight">Normal Attack</span> or <span class="Highlight">Resonance Liberation</span> to cast <span class="Highlight">Fatal Finale</span>.<br>
            - All Substance is removed when activating and ending <span class="Highlight">Twilight Tango</span>. Cannot perform Basic Attack <span class="Highlight">Necessary Measures</span>, Heavy Attack <span class="Highlight">Containment Tactics</span>, and Heavy Attack <span class="Highlight">Imminent Oblivion</span> while in <span class="Highlight">Twilight Tango</span>.
            <div class="gap"></div>
            <span class="Title">Death Knell</span>\n
            Carlotta fires powerful shots with her musket and summons 4 crystal shards to attack the target, dealing <span class="Ice">Glacio DMG</span>, considered Resonance Skill DMG.<br>
            - Carlotta moves in the direction of the movement input with each shot of <span class="Highlight">Death Knell</span>.
            <div class="gap">Moldbale Crystal</div>
            <span class="Title">Fatal Finale</span>\n
            Deal <span class="Ice">Glacio DMG</span> to an area, considered <span class="Highlight">Resonance Skill</span> DMG.<br>
            - <span class="Highlight">Twilight Tango</span> ends after casting <span class="Highlight">Fatal Finale</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["202.56%", "219.17%", "235.78%", "259.03%", "275.64%", "294.74%", "321.32%", "347.89%", "374.47%", "402.71%"]
                    }],
                    index: 1
                }, {
                    attributeName: "Death Knell DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["92.37%+7.30%*4", "99.94%+7.89%*4", "107.52%+8.49%*4", "118.12%+9.33%*4", "125.70%+9.93%*4", "134.41%+10.62%*4", "146.52%+11.57%*4", "158.64%+12.53%*4", "170.76%+13.49%*4", "183.64%+14.50%*4"]
                    }],
                    index: 2
                }, {
                    attributeName: "Fatal Finale DMG",
                    type: "Liberaion",
                    skillDetailNum: [{
                        values: ["324.09%", "350.67%", "377.24%", "414.45%", "441.03%", "471.59%", "514.11%", "556.63%", "599.15%", "644.33%"]
                    }],
                    index: 3
                }, {
                    attributeName: "Skill Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s"]
                    }],
                    index: 4
                }, {
                    attributeName: "Resonance Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                    }],
                    index: 5
                }, {
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 6
                }, {
                    attributeName: "Death Knell Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["7", "7", "7", "7", "7", "7", "7", "7", "7", "7"]
                    }],
                    index: 7
                }, {
                    attributeName: "Fatal Finale Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 8
                }, {
                    attributeName: "Deconstruction Duration",
                    type: "",
                    skillDetailNum: [{
                        values: ["4s", "4s", "4s", "4s", "4s", "4s", "4s", "4s", "4s", "4s"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Twilight Tango Duration",
                    type: "",
                    skillDetailNum: [{
                        values: ["10s", "10s", "10s", "10s", "10s", "10s", "10s", "10s", "10s", "10s"]
                    }],
                    index: 10
                },
            ]
        },
        {
            skillId: 4,
            typeName: 'Intro Skill',
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillCarlotta5.webp",
            skillName: 'Wintertime Aria',
            skillDescription: `Attack the target, dealing <span class="Ice">Glacio DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill Damage",
                    type: "",
                    skillDetailNum: [{
                        values: ["90.00%+30.00%*2", "97.38%+32.46%*2", "104.76%+34.92%*2", "115.10%+38.37%*2", "122.48%+40.83%*2", "130.96%+43.66%*2", "142.77%+47.59%*2", "154.58%+51.53%*2", "166.39%+55.47%*2", "178.93%+59.65%*2"]
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
            skillName: 'Closing Remark',
            skillDescription: `Attack the target, dealing <span class="Ice">Glacio DMG</span> equal to {0} of Carlotta's ATK.`,
            skillDetailNum: ["794.2%"],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillCarlotta4.webp",
            skillName: 'Lethal Repertoire',
            skillDescription: `<span class="Title">Heavy Attack - <span class="Highlight">Imminent Oblivion</span></span>\n
            Carlotta activates <span class="Highlight">Tinted Crystal</span> every 22s.<br>
            When Substance is full and <span class="Highlight">Tinted Crystal</span> is activated, hold <span class="Highlight">Normal Attack</span> to consume all Substance and cast Heavy Attack <span class="Highlight">Imminent Oblivion</span>, after which <span class="Highlight">Tinted Crystal</span> enters cooldown.<br>
            Deal <span class="Ice">Glacio DMG</span> (considered Resonance Skill DMG), and reduce the cooldown of Resonance Skill <span class="Highlight">Art of Violence</span> by 6s.
            <div class="gap"></div>
            <span class="Title">Final Blow</span>\n
            When Substance is full, enter the <span class="Highlight">Final Bow</span> state.<br>
            Increase the DMG Multiplier of Resonance Liberation <span class="Highlight">Era of New Wave</span>, Resonance Liberation <span class="Highlight">Death Knell</span>, and Resonance Liberation <span class="Highlight">Fatal Finale</span> by 80%. This effect ends when Carlotta is switched off the field during <span class="Highlight">Twilight Tango</span> or when <span class="Highlight">Twilight Tango</span> ends.
            <div class="gap"></div>
            <span class="Title">Substance</span>\n
            Carlotta can hold up to 120 points of Substance.<br>
            Cannot gain Substance while in <span class="Highlight">Twilight Tango</span> triggered by <span class="Highlight">Resonance Liberation</span>.<br>
            Restore 30 points of Substance upon casting Intro Skill <span class="Highlight">Wintertime Aria</span>.<br>
            Restore 10 points of Substance for every 1 Moldable Crystal consumed upon casting Resonance Skill <span class="Highlight">Chromatic Splendor</span>.<br>
            Restore 10 points of Substance for every 1 Moldable Crystal consumed upon casting Basic Attack <span class="Highlight">Necessary Measures</span>.<br>
            Consume 1 Moldable Crystal and restore 10 points of Substance upon casting <span class="Highlight">Dodge Counter</span>.
            <div class="gap"></div>
            <span class="Title">Moldable Crystal</span>\n
            Carlotta can hold up to 6 Moldable Crystals.<br>
            Cannot gain Moldable Crystal while in <span class="Highlight">Twilight Tango</span> triggered by <span class="Highlight">Resonance Liberation</span>.<br>
            Restore 3 Moldable Crystals upon casting <span class="Highlight">Basic Attack Stage 2</span>.<br>
            Restore 3 Moldable Crystals upon casting <span class="Highlight">Heavy Attack</span>.<br>
            Restore 3 Moldable Crystals upon casting Mid-air Attack <span class="Highlight">Customary Greetings</span>.<br>
            Restore 3 Moldable Crystals upon casting Intro Skill <span class="Highlight">Wintertime Aria</span>.<br>
            Restore 3 Moldable Crystals upon casting Resonance Skill <span class="Highlight">Art of Violence</span>.<br>
            Restore 3 Moldable Crystals upon a successful Dodge.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Imminent Oblivion DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["33.62%*5+252.11%", "36.38%*5+272.78%", "39.13%*5+293.45%", "42.99%*5+322.39%", "45.75%*5+343.07%", "48.92%*5+366.84%", "53.33%*5+399.92%", "57.74%*5+432.99%", "62.15%*5+466.07%", "66.83%*5+501.21%"]
                    }],
                    index: 1
                }, {
                    attributeName: "Tinted Crystal Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["22s", "22s", "22s", "22s", "22s", "22s", "22s", "22s", "22s", "22s"]
                    }],
                    index: 2
                }, {
                    attributeName: "Imminent Oblivion Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
                    }],
                    index: 3
                }, {
                    attributeName: "Moldable Crystal Duration",
                    type: "",
                    skillDetailNum: [{
                        values: ["10s", "10s", "10s", "10s", "10s", "10s", "10s", "10s", "10s", "10s"]
                    }],
                    index: 4
                },
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Flawless Purity',
            skillDescription: `After casting Resonance Skill <span class="Highlight">Chromatic Splendor</span>, Carlotta can perform <span class="Highlight">Mid-air Attacks</span> while being immune to any DMG or interruptions before the Mid-air Attack deals DMG.<br>
            When Carlotta is on the team, the active Resonator's Flight STA cost is reduced by {0}.`,
            skillDetailNum: ["20%"],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Ars Gratia Artis',
            skillDescription: `Intro Skill <span class="Highlight">Wintertime Aria</span>, Resonance Skill <span class="Highlight">Chromatic Splendor</span>, Resonance Liberation <span class="Highlight">Death Knell</span>, and Heavy Attack <span class="Highlight">Imminent Oblivion</span> can inflict <span class="Highlight">Deconstruction</span>.`,
            skillDetailNum: [],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Beauty Blazes Brightest Before It Fades",
            description: `When Carlotta deals DMG to a target inflicted with <span class="Highlight">Deconstruction</span>, the Crit. Rate of this instance of DMG is increased by {0}. When Resonance Skill <span class="Highlight">Chromatic Splendor</span> hits a target inflicted with <span class="Highlight">Dispersion</span>, Carlotta additionally restores {1} points of Substance.`,
            detailNum: ["12.5%", "30"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Crit. Rate"],
            sequenceBuff: [12.5],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KelaitaM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "Fallen Petals Give Life to New Blooms",
            description: `The DMG Multiplier of Resonance Liberation <span class="Highlight">Fatal Finale</span> is increased by {0}.`,
            detailNum: ["126%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonance Liberation Damage Bonus"],
            sequenceBuff: [126],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KelaitaM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "Adelante, Cortado, Spinning in Grace",
            description: `Enable Outro Skill <span class="Highlight">Kaleidoscope Sparks</span>: Deal 1 additional strike at the end of Outro Skill <span class="Highlight">Closing Remark</span>, dealing <span class="Ice">Glacio DMG</span> equal to {0} of Carlotta's ATK. The DMG Multiplier of Resonance Skill <span class="Highlight">Art of Violence</span> and Resonance Skill <span class="Highlight">Chromatic Splendor</span> is increased by {1}.`,
            detailNum: ["1032.18%", "93%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Closing Remark", "Resonance Skill Damage Bonus"],
            sequenceBuff: [1032.18, 93],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KelaitaM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "Yesterday's Raindrops Make Finest Wine",
            description: `Casting Heavy Attack, Heavy Attack <span class="Highlight">Containment Tactics</span>, and Heavy Attack <span class="Highlight">Imminent Oblivion</span> grants all Resonators in the team {0} Resonance Skill DMG Bonus for 30s.`,
            detailNum: ["25%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonance Skill Damage Bonus"],
            sequenceBuff: [25],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KelaitaM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "Toast to Past, Today, and Every Day to Come",
            description: `The DMG Multiplier of Heavy Attack <span class="Highlight">Imminent Oblivion</span> is increased by {0}.`,
            detailNum: ["47%"],
            sequenceBuffType: "Skill Buff",
            sequenceBuffAtrribute: ["Heavy Attack Damage Bonus"],
            sequenceBuff: [47],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KelaitaM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "Bloom For You Thousand Times Over",
            description: `Shots of Resonance Liberation <span class="Highlight">Death Knell</span> deal higher DMG and shoot out double the number of crystal shards, representing a total increase of {0} in the DMG Multiplier of Resonance Liberation <span class="Highlight">Death Knell</span>.<br>
            Shots of Resonance Liberation <span class="Highlight">Death Knell</span> inflict <span class="Highlight">Scattering</span> on targets when hit, during which the target is immobilized. This effect is removed after 1.5s or when the target receives DMG.`,
            detailNum: ["186.6%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Resonation Liberation Damage Bonus"],
            sequenceBuff: [186.6],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KelaitaM6_UI.webp"
        }
    ]
}