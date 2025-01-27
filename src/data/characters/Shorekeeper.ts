import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Shorekeeper: WWCharacter = {
    name: "Shorekeeper",
    charaId: 1505,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Spectro",
    weapon: "Rectifier",
    bio: `Baizhi, a researcher at Huaxu Academy, is known for her sharp intellect and precise methods.
Despite appearing aloof, she is approachable to those who seek knowledge.
Her insatiable thirst for understanding drives her to tirelessly study Remnant Energy.
She will stop at nothing until its mysteries are unraveled, even if it means dedicating her entire life to the pursuit.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_shouanren_UI.webp",
        icon_sq: "https://wuthering-waves-assets.pages.dev/icons_character/Shorekeeper.png",
        model: "https://wuthering-waves-assets.pages.dev/models/The_Shorekeeper_Full_Sprite.webp"
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
            item: "Novas",
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
        base_hp: 1337,
        base_atk: 24,
        base_def: 90,
        base_crit: 5,
        base_critdmg: 150,
        base_healing: 0,
        max_energy: 125,
        bonus_ele: 0,
        bonus_atk: 0,
        bonus_def: 0,
        bonus_heal: 12,
        bonus_crit: 0,
        bonus_critdmg: 0,
        bonus_hp: 1.12
    },
    skills: [
            {
                skillId: 1,
                typeName: 'Basic Attack',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill5.webp",
                skillName: 'Origin Calculus',
                skillDescription: `<span class="Title">Basic Attack</span>
                Perform up to 4 consecutive attacks, dealing <span class="Light">Spectro DMG</span>. Each hit generates 1 <span class="Highlight">Collapsed Core</span>.
                <span class="Title">Heavy Attack</span>
                Hold the <span class="Highlight">Normal Attack Button</span> to enter <span class="Highlight">Unbound Form</span>, which consumes STA continuously. While in this form, Shorekeeper will:
                - Generate a segment of <span class="Highlight">Deductive Data</span> every second;
                - Automatically collect nearby plant collectibles.
                Using up all STA or actions such as casting <span class="Highlight">Basic Attack</span> will end the <span class="Highlight">Unbound Form</span> and deal <span class="Light">Spectro DMG</span> to the target. Each accumulated segment of <span class="Highlight">Deductive Data</span> will convert into a segment of Empirical Data and generate a <span class="Highlight">Collapsed Core</span>.
                <span class="Title">Mid-air Attack</span>
                Consume STA to perform a Plunging Attack. Each hit generates 1 <span class="Highlight">Collapsed Core</span>. Quickly Press the <span class="Highlight">Normal Attack Button</span> after the Plunging Attack to perform <span class="Highlight">Basic Attack Stage 2</span>.
                <span class="Title">Dodge Counter</span>
                Press the <span class="Highlight">Normal Attack Button</span> after a successful Dodge to attack a target, dealing <span class="Light">Spectro DMG</span>.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Stage 1 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["15.99%", "17.30%", "18.61%", "20.45%", "21.76%", "23.26%", "25.36%", "27.46%", "29.55%", "31.78%", "34.40%", "37.03%", "39.65%", "42.27%", "44.89%", "47.51%", "50.13%", "52.75%", "55.38%", "58.00%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Stage 2 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["12.00%*2", "12.99%*2", "13.97%*2", "15.35%*2", "16.33%*2", "17.47%*2", "19.04%*2", "20.61%*2", "22.19%*2", "23.86%*2", "25.83%*2", "27.80%*2", "29.77%*2", "31.73%*2", "33.70%*2", "35.67%*2", "37.64%*2", "39.61%*2", "41.57%*2", "43.54%*2"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Stage 3 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["11.73%*3", "12.69%*3", "13.66%*3", "15.00%*3", "15.96%*3", "17.07%*3", "18.61%*3", "20.15%*3", "21.69%*3", "23.32%*3", "25.24%*3", "27.17%*3", "29.09%*3", "31.02%*3", "32.94%*3", "34.86%*3", "36.79%*3", "38.71%*3", "40.63%*3", "42.56%*3"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Stage 4 DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["36.58%", "39.58%", "42.58%", "46.78%", "49.78%", "53.23%", "58.03%", "62.82%", "67.62%", "72.72%", "78.72%", "84.72%", "90.72%", "96.72%", "102.71%", "108.71%", "114.71%", "120.71%", "126.71%", "132.71%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Heavy Attack DMG",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["23.04%", "24.93%", "26.82%", "29.47%", "31.36%", "33.53%", "36.55%", "39.58%", "42.60%", "45.81%", "49.59%", "53.37%", "57.15%", "60.93%", "64.70%", "68.48%", "72.26%", "76.04%", "79.82%", "83.60%"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Plunging Attack DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["37.20%", "40.26%", "43.31%", "47.58%", "50.63%", "54.13%", "59.02%", "63.90%", "68.78%", "73.96%", "80.06%", "86.16%", "92.26%", "98.37%", "104.47%", "110.57%", "116.67%", "122.77%", "128.87%", "134.97%"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Dodge Counter DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["44.00%*2", "47.61%*2", "51.22%*2", "56.27%*2", "59.88%*2", "64.03%*2", "69.80%*2", "75.57%*2", "81.35%*2", "87.48%*2", "94.70%*2", "101.91%*2", "109.13%*2", "116.35%*2", "123.56%*2", "130.78%*2", "137.99%*2", "145.21%*2", "152.43%*2", "159.64%*2"]
                        }],
                        index: 7
                    }, {
                        attributeName: "Heavy Attack STA Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 8
                    }, {
                        attributeName: "Plunging Attack STA Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 9
                    }
                ]
            },
            {
                skillId: 2,
                typeName: 'Resonance Skill',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillShorekeeper2.webp",
                skillName: 'Chaos Theory',
                skillDescription: `Restore HP for all nearby party members and summon 5 <span class="Highlight">Dim Star Butterflies</span>, which automatically track and attack a target, dealing <span class="Light">Spectro DMG</span>. Follow up with <span class="Highlight">Basic Attack</span> in time to start the Basic Attack cycle from <span class="Highlight">Stage 2</span>.
                Can be performed in mid-air.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Dim Star Butterfly DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["15.75%", "17.04%", "18.33%", "20.14%", "21.43%", "22.91%", "24.98%", "27.05%", "29.11%", "31.31%", "33.89%", "36.47%", "39.05%", "41.63%", "44.22%", "46.80%", "49.38%", "51.96%", "54.54%", "57.13%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Healing",
                        type: "Healing",
                        skillDetailNum: [{
                            values: ["660+3.00%", "715+3.25%", "769+3.50%", "845+3.84%", "899+4.09%", "961+4.37%", "1047+4.76%", "1134+5.16%", "1221+5.55%", "1313+5.97%", "1421+6.46%", "1529+6.95%", "1637+7.45%", "1746+7.94%", "1854+8.43%", "1962+8.92%", "2070+9.41%", "2179+9.91%", "2287+10.40%", "2395+10.89%"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"]
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
                skillId: 3,
                typeName: 'Resonance Liberation',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillShorekeeper3.webp",
                skillName: 'End Loop',
                skillDescription: `<span class="Title">Outer Stellarealm</span>
                Generate the <span class="Highlight">Outer Stellarealm</span> to restore HP for all party members within its effective range continuously. This effect can be triggered once every 3s.
                <span class="Title">Inner Stellarealm</span>
                When a party member uses <span class="Highlight">Intro Skill</span> within the <span class="Highlight">Outer Stellarealm</span>, it evolves into the <span class="Highlight">Inner Stellarealm</span>. Within the effective range of the <span class="Highlight">Inner Stellarealm</span>, for every {0} of Shorekeeper's Energy Regen, all party members gain {1} bonus Crit. Rate, up to {2}. 
                <span class="Highlight">Inner Stellarealm</span> has all the effects of the <span class="Highlight">Outer Stellarealm</span>.
                <span class="Title">Supernal Stellarealm</span>
                When a party member uses <span class="Highlight">Intro Skill</span> within the <span class="Highlight">Inner Stellarealm</span>, it evolves into the <span class="Highlight">Supernal Stellarealm</span>. Within the effective range of the <span class="Highlight">Supernal Stellarealm</span>, for every {3} of Shorekeeper's Energy Regen, all party members gain a {4} increase of Crit. DMG, up to {5}. 
                <span class="Highlight">Supernal Stellarealm</span> has all the effects of the <span class="Highlight">Inner Stellarealm</span>.
                When a <span class="Highlight">Supernal Stellarealm</span> is generated, Shorekeeper's first Intro Skill triggered in its duration will be replaced with Intro Skill <span class="Highlight">Discernment</span>. This effect takes place once each time a <span class="Highlight">Supernal Stellarealm</span> is generated.`,
                skillDetailNum: ["0.2%", "0.01%", "12.5%", "0.1%", "0.01%", "25%"],
                multipliers: [
                    {
                        attributeName: "Healing",
                        type: "Healing",
                        skillDetailNum: [{
                            values: ["220+1.20%", "239+1.30%", "257+1.40%", "282+1.54%", "300+1.64%", "321+1.75%", "349+1.91%", "378+2.07%", "407+2.22%", "438+2.39%", "474+2.59%", "510+2.78%", "546+2.98%", "582+3.18%", "618+3.37%", "654+3.57%", "690+3.77%", "727+3.97%", "763+4.16%", "799+4.36%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Stellarealm Duration",
                        type: "",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Cooldown",
                        type: "",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Resonance Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175", "175"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Concerto Regen",
                        type: "",
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
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillShorekeeper5.webp",
                skillName: 'Proof of Existence',
                skillDescription: `<span class="Title">Enlightenment</span>
                Shorekeeper appears to restore HP for all nearby party members and summon 5 <span class="Highlight">Dim Star Butterflies</span>, which automatically track and attack a target, dealing <span class="Light">Spectro DMG</span>. This is considered Resonance Skill DMG.
                <span class="Title">Discernment</span>
                When a <span class="Highlight">Supernal Stellarealm</span> is generated, Shorekeeper's first Intro Skill triggered in its duration will be replaced with Intro Skill <span class="Highlight">Discernment</span>.  
                Casting Discernment ends the current Stellarealm, restores HP for all nearby party members, and deals <span class="Light">Spectro DMG</span> to the targets. This attack is guaranteed to be a Critical Hit dealing Resonance Liberation DMG. The Intro Skill <span class="Highlight">Discernment</span> can only be triggered once each time a <span class="Highlight">Supernal Stellarealm</span> is generated.`,
                skillDetailNum: [],
                multipliers: [
                    {
                        attributeName: "Enlightenment DMG",
                        type: "Skill",
                        skillDetailNum: [{
                            values: ["22.79%*5", "24.66%*5", "26.53%*5", "29.14%*5", "31.01%*5", "33.16%*5", "36.15%*5", "39.14%*5", "42.13%*5", "45.30%*5", "49.04%*5", "52.78%*5", "56.51%*5", "60.25%*5", "63.98%*5", "67.72%*5", "71.46%*5", "75.19%*5", "78.93%*5", "82.67%*5"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Discernment DMG",
                        type: "Liberation",
                        skillDetailNum: [{
                            values: ["9.88%*3", "10.69%*3", "11.50%*3", "12.64%*3", "13.45%*3", "14.38%*3", "15.67%*3", "16.97%*3", "18.26%*3", "19.64%*3", "21.26%*3", "22.88%*3", "24.50%*3", "26.12%*3", "27.74%*3", "29.36%*3", "30.98%*3", "32.60%*3", "34.22%*3", "35.84%*3"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Enlightenment Healing",
                        type: "Healing",
                        skillDetailNum: [{
                            values: ["130+0.60%", "141+0.65%", "152+0.70%", "167+0.77%", "177+0.82%", "190+0.88%", "207+0.96%", "224+1.04%", "241+1.11%", "259+1.20%", "280+1.30%", "302+1.39%", "323+1.49%", "344+1.59%", "366+1.69%", "387+1.79%", "408+1.89%", "430+1.99%", "451+2.08%", "472+2.18%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Discernment Healing",
                        type: "Healing",
                        skillDetailNum: [{
                            values: ["145+0.66%", "157+0.72%", "169+0.77%", "186+0.85%", "198+0.90%", "211+0.97%", "231+1.05%", "250+1.14%", "269+1.23%", "289+1.32%", "313+1.43%", "336+1.53%", "360+1.64%", "384+1.75%", "408+1.86%", "431+1.97%", "455+2.07%", "479+2.18%", "503+2.29%", "527+2.40%"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Enlightenment Concerto Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Discernment Concerto Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                        }],
                        index: 6
                    }
                ]
            },
            {
                skillId: 5,
                typeName: 'Outro Skill',
                skillName: 'Binary Butterfly',
                skillDescription: `Shorekeeper summons 1 <span class="Highlight">Flare Star Butterfly</span> and 1 <span class="Highlight">Dim Star Butterfly</span> to circle the Resonator on the field for up to {0}s, granting the following effects:  
                - If the Resonator on the field is hit or launched, tapping the <span class="Highlight">Dodge Button</span> allows the Resonator to immediately recover from the interruption, triggering a successful Dodge. The Resonator launched in the air can land on the ground standing if they are close to the ground. This effect can be triggered up to {1} time(s).
                - All nearby party members' DMG is Amplified by {2}.`,
                skillDetailNum: ["30", "5", "15%"],
                multipliers: []
            },
            {
                skillId: 6,
                typeName: 'Forte Circuit',
                skillImg: "https://wuthering-waves-assets.pages.dev/Skills/SkillShorekeeper4.webp",
                skillName: 'Astral Chord',
                skillDescription: `<span class="Title">Flare Star Butterfly</span>
                Hitting a target with a Normal Attack generates a <span class="Highlight">Collapsed Core</span>, which transforms into a <span class="Highlight">Flare Star Butterfly</span> after {0}s. <span class="Highlight">Flare Star Butterflies</span> automatically track and attack a target, dealing <span class="Light">Spectro DMG</span>. If there are already {1} <span class="Highlight">Collapsed Cores</span>, Shorekeeper's next <span class="Highlight">Normal Attack</span> hit will instantly convert a <span class="Highlight">Collapsed Core</span> into a <span class="Highlight">Flare Star Butterfly</span>.
                <span class="Title">Illation</span>
                When Shorekeeper has 5 segments of Empirical Data, casting <span class="Highlight">Heavy Attack</span> will consume all segments to pull in nearby targets, dealing <span class="Light">Spectro DMG</span>. Meanwhile, all generated <span class="Highlight">Collapsed Cores</span> will instantly transform into <span class="Highlight">Flare Star Butterflies</span>.
                <span class="Title">Transmutation</span>
                When Shorekeeper has 5 segments of Empirical Data, casting <span class="Highlight">Mid-air Attack</span> will consume all segments to deal <span class="Light">Spectro DMG</span>. Meanwhile, all generated <span class="Highlight">Collapsed Cores</span> will instantly transform into <span class="Highlight">Flare Star Butterflies</span>. Quickly press the <span class="Highlight">Normal Attack Button</span> afterward to perform <span class="Highlight">Basic Attack Stage 2</span>.
                <span class="Title">Empirical Data</span>
                Shorekeeper can hold up to 5 segments of Empirical Data.
                - Obtain 1 segment of Empirical Data when <span class="Highlight">Basic Attack Stage 1, 2, or 4</span> hits a target.
                - Obtain 2 segments of Empirical Data when <span class="Highlight">Basic Attack Stage 3</span> hits a target.
                - Obtain 1 segment of Empirical Data when <span class="Highlight">Mid-air Attack</span> hits a target.
                - Obtain 1 segment of Empirical Data when <span class="Highlight">Dodge Counter</span> hits a target.`,
                skillDetailNum: ["6", "5"],
                multipliers: [
                    {
                        attributeName: "Flare Star Butterfly DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["18.76%", "20.29%", "21.83%", "23.99%", "25.52%", "27.29%", "29.75%", "32.21%", "34.67%", "37.29%", "40.36%", "43.44%", "46.51%", "49.59%", "52.66%", "55.74%", "58.81%", "61.89%", "64.96%", "68.04%"]
                        }],
                        index: 1
                    }, {
                        attributeName: "Illation DMG",
                        type: "Heavy",
                        skillDetailNum: [{
                            values: ["9.54%*5", "10.33%*5", "11.11%*5", "12.20%*5", "12.99%*5", "13.89%*5", "15.14%*5", "16.39%*5", "17.64%*5", "18.97%*5", "20.54%*5", "22.10%*5", "23.67%*5", "25.23%*5", "26.79%*5", "28.36%*5", "29.92%*5", "31.49%*5", "33.05%*5", "34.62%*5"]
                        }],
                        index: 2
                    }, {
                        attributeName: "Transmutation DMG",
                        type: "Basic",
                        skillDetailNum: [{
                            values: ["37.20%", "40.26%", "43.31%", "47.58%", "50.63%", "54.13%", "59.02%", "63.90%", "68.78%", "73.96%", "80.06%", "86.16%", "92.26%", "98.37%", "104.47%", "110.57%", "116.67%", "122.77%", "128.87%", "134.97%"]
                        }],
                        index: 3
                    }, {
                        attributeName: "Illation STA Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
                        }],
                        index: 4
                    }, {
                        attributeName: "Transmutation STA Cost",
                        type: "",
                        skillDetailNum: [{
                            values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                        }],
                        index: 5
                    }, {
                        attributeName: "Illation Concerto Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
                        }],
                        index: 6
                    }, {
                        attributeName: "Transmutation Concerto Regen",
                        type: "",
                        skillDetailNum: [{
                            values: ["6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
                        }],
                        index: 7
                    }
                ]
            },
            {
                skillId: 7,
                typeName: 'Inherent Skill',
                skillName: 'Life Entwined',
                skillDescription: `When a Resonator other than Shorekeeper takes a fatal blow, they will not be knocked out and will instead be healed for {0} of Shorekeeper's HP while Shorekeeper loses the same amount of HP. Shorekeeper's HP will not go below 1 from this effect. This effect can be triggered once every 10 minutes.`,
                skillDetailNum: ["50%"],
                multipliers: []
            },
            {
                skillId: 8,
                typeName: 'Inherent Skill',
                skillName: 'Self Gravitation',
                skillDescription: `When the Resonator on the field is within the effective range of a <span class="Highlight">Stellarealm</span>, Shorekeeper's Energy Regen increases by {0}. If Rover is on the same team, Rover's Energy Regen also increases by {1}.`,
                skillDetailNum: ["10%", "10%"],
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
            name: "Unspoken Conjecture",
            description: `The <span class="Highlight">Stellarealms</span> generated by Resonance Liberation <span class="Highlight">End Loop</span> gain the following enhancements:
            - The effective range of the healing and buffs is extended by {0}
            - The duration is extended by {1}s.
            - Casting Intro Skill <span class="Highlight">Discernment</span> no longer ends the existing <span class="Highlight">Stellarealm</span>.`,
            detailNum: ["150%", "10"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1103_UI.png"
        },
        {
            node: "Sequence Node 2",
            name: "Night's Gift and Refusal",
            description: `The <span class="Highlight">Outer Stellarealm</span> now increases the ATK of all team members by {0}.`,
            detailNum: ["40%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1103_UI.png"
        },
        {
            node: "Sequence Node 3",
            name: "Infinity Awaits Me",
            description: `Casting Resonance Liberation <span class="Highlight">End Loop</span> grants Shorekeeper {0} Concerto Energy. This effect can be triggered once every {1}s.`,
            detailNum: ["20", "25"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1103_UI.png"
        },
        {
            node: "Sequence Node 4",
            name: "Overflowing Quietude",
            description: `Gain {0} additional Healing Bonus when casting Resonance Skill <span class="Highlight">Chaos Theory</span>.`,
            detailNum: ["70%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1103_UI.png"
        },
        {
            node: "Sequence Node 5",
            name: "Echoes in Silence",
            description: `Extend the ranges of the pulling effect of <span class="Highlight">Basic Attack Stage 3</span> by {0} and <span class="Highlight">Illation</span> by {1}.`,
            detailNum: ["50%", "30%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1103_UI.png"
        },
        {
            node: "Sequence Node 6",
            name: "To the New World",
            description: `Increase the DMG Multiplier of Intro Skill <span class="Highlight">Discernment</span> by {0}. Casting Intro Skill <span class="Highlight">Discernment</span> increases Shorekeeper's Crit. DMG by {1}.`,
            detailNum: ["42%", "500%"],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://cdn.wanderer.moe/wuthering-waves/other/T_IconRup_Part_1103_UI.png"
        }
    ]
}