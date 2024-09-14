import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://sohansc13.github.io/wuthering-waves-assets/images/icon_stars/Icon_5_Stars.webp";

export const Zhezhi: WWCharacter = {
    name: "Zhezhi",
    charaId: 1104,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Glacio",
    weapon: "Rectifier",
    bio: `Zhezhi is a commissioned painter, quiet and shy with a dedication to her craft.
She's not very eloquent, but her persistence and love for painting speak volumes.`,
    images: {
        portrait: "https://sohansc13.github.io/wuthering-waves-assets/images/portraits/Zhezhi_Portrait.webp",
        icon_sq: "https://sohansc13.github.io/wuthering-waves-assets/images/icons_character/Zhezhi.png",
        model: "https://sohansc13.github.io/wuthering-waves-assets/images/models/Zhezhi_Full_Sprite.webp"
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
            value: "46",
        },
        {
            item: "Lanternberry",
            id: 1,
            value: "60",
        },
        {
            item: "Shell Credits",
            id: 1,
            value: "170,000",
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
        base_hp: 980,
        base_atk: 30,
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
        skillName: "Dimming Brush",
        skillId: 1,
        skillDescription: `<span className="Title">Basic Attack</span>
Perform up to 3 consecutive attacks, dealing <span className="Ice">Glacio DMG</span>.
<span className="Title">Heavy Attack</span>
Consume STA to perform an attack, dealing <span className="Ice">Glacio DMG</span>.
Heavy Attack does not reset the Basic Attack cycle.
<span className="Title">Mid-air Attack</span>
Consume STA to perform up to 2 consecutive attacks while in mid-air, dealing <span className="Ice">Glacio DMG</span>.
<span className="Title">Dodge Counter</span>
Use <span className="Highlight">Basic Attack</span> after a successful <span className="Highlight">Dodge</span> to attack the target, dealing <span className="Ice">Glacio DMG</span>.`,
        typeName: "Normal Attack",
        skillDetailNum: [],
        multipliers: [{
            attributeName: "Stage 1 DMG",
            skillDetailNum: [{
                values: ["21.00%*2", "22.73%*2", "24.45%*2", "26.86%*2", "28.58%*2", "30.56%*2", "33.32%*2", "36.07%*2", "38.83%*2", "41.76%*2", "45.20%*2", "48.64%*2", "52.09%*2", "55.53%*2", "58.98%*2", "62.42%*2", "65.86%*2", "69.31%*2", "72.75%*2"]
            }],
            index: 1
        }, {
            attributeName: "Stage 2 DMG",
            skillDetailNum: [{
                values: ["10.34%*5", "11.18%*5", "12.03%*5", "13.22%*5", "14.06%*5", "15.04%*5", "16.39%*5", "17.75%*5", "19.11%*5", "20.55%*5", "22.24%*5", "23.93%*5", "25.63%*5", "27.32%*5", "29.02%*5", "30.71%*5", "32.41%*5", "34.10%*5", "35.80%*5"]
            }],
            index: 2
        }, {
            attributeName: "Stage 3 DMG",
            skillDetailNum: [{
                values: ["67.20%", "72.72%", "78.23%", "85.94%", "91.45%", "97.79%", "106.60%", "115.42%", "124.24%", "133.61%", "144.63%", "155.65%", "166.67%", "177.69%", "188.71%", "199.73%", "210.75%", "221.77%", "232.79%"]
            }],
            index: 3
        }, {
            attributeName: "HA DMG",
            skillDetailNum: [{
                values: ["56.70%", "61.35%", "66.00%", "72.51%", "77.16%", "82.50%", "89.94%", "97.38%", "104.82%", "112.72%", "122.02%", "131.32%", "140.61%", "149.91%", "159.21%", "168.51%", "177.81%", "187.10%", "196.40%"]
            }],
            index: 4
        }, {
            attributeName: "Mid-air Attack DMG",
            skillDetailNum: [{
                values: ["12.55%*5+52.70%", "13.58%*5+57.03%", "14.61%*5+61.35%", "16.05%*5+67.40%", "17.08%*5+71.72%", "18.26%*5+76.69%", "19.91%*5+83.60%", "21.55%*5+90.52%", "23.20%*5+97.43%", "24.95%*5+104.78%", "27.01%*5+113.42%", "29.06%*5+122.06%", "31.12%*5+130.71%", "33.18%*5+139.35%", "35.24%*5+147.99%", "37.29%*5+156.63%", "39.35%*5+165.28%", "41.41%*5+173.92%", "43.47%*5+182.56%"]
            }],
            index: 5
        }, {
            attributeName: "Dodge Counter DMG",
            skillDetailNum: [{
                values: ["14.62%*5", "15.82%*5", "17.02%*5", "18.70%*5", "19.90%*5", "21.28%*5", "23.20%*5", "25.11%*5", "27.03%*5", "29.07%*5", "31.47%*5", "33.87%*5", "36.26%*5", "38.66%*5", "41.06%*5", "43.46%*5", "45.85%*5", "48.25%*5", "50.65%*5"]
            }],
            index: 6
        }, {
            attributeName: "HA STA Cost",
            skillDetailNum: [{
                values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
            }],
            index: 7
        }, {
            attributeName: "Mid-air Attack STA Cost",
            skillDetailNum: [{
                values: ["5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25", "5+25"]
            }],
            index: 8
        }]
        },
        {
        skillName: "Manifestation",
        skillId: 2,
        skillDescription: `<span className="Title">Press</span>
Deal <span className="Ice">Glacio DMG</span>. If "Afflatus" is no less than 60, consume 60 "Afflatus" to summon <span className="Highlight">Phatasmic Imprint - Left</span> and <span className="Highlight">Phatasmic Imprint - Right</span> on the ground.
<span className="Title">Hold</span>
Deal <span className="Ice">Glacio DMG</span>. If "Afflatus" is no less than 60, consume 60 "Afflatus" to summon <span className="Highlight">Phatasmic Imprint - Left</span> and <span className="Highlight">Phatasmic Imprint - Right</span> in the air.
<span className="Title">Press while in Mid-air</span>
Deal <span className="Ice">Glacio DMG</span>. If "Afflatus" is no less than 60, consume 60 "Afflatus" to summon <span className="Highlight">Phatasmic Imprint - Left</span> and <span className="Highlight">Phatasmic Imprint - Right</span> in the air.`,
        typeName: "Resonance Skill",
        skillDetailNum: [],
        multipliers: [{
            attributeName: "Press DMG",
            skillDetailNum: [{
                values: ["49.50%*3", "53.56%*3", "57.62%*3", "63.31%*3", "67.36%*3", "72.03%*3", "78.53%*3", "85.02%*3", "91.52%*3", "98.42%*3", "106.53%*3", "114.65%*3", "122.77%*3", "130.89%*3", "139.01%*3", "147.12%*3", "155.24%*3", "163.36%*3", "171.48%*3"]
            }],
            index: 1
        }, {
            attributeName: "Hold DMG",
            skillDetailNum: [{
                values: ["49.50%*3", "53.56%*3", "57.62%*3", "63.31%*3", "67.36%*3", "72.03%*3", "78.53%*3", "85.02%*3", "91.52%*3", "98.42%*3", "106.53%*3", "114.65%*3", "122.77%*3", "130.89%*3", "139.01%*3", "147.12%*3", "155.24%*3", "163.36%*3", "171.48%*3"]
            }],
            index: 2
        }, {
            attributeName: "Mid-air Press DMG",
            skillDetailNum: [{
                values: ["49.50%*3", "53.56%*3", "57.62%*3", "63.31%*3", "67.36%*3", "72.03%*3", "78.53%*3", "85.02%*3", "91.52%*3", "98.42%*3", "106.53%*3", "114.65%*3", "122.77%*3", "130.89%*3", "139.01%*3", "147.12%*3", "155.24%*3", "163.36%*3", "171.48%*3"]
            }],
            index: 3
        }, {
            attributeName: "Cooldown",
            skillDetailNum: [{
                values: ["6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"]
            }],
            index: 4
        }, {
            attributeName: "Press Concerto Regen",
            skillDetailNum: [{
                values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
            }],
            index: 5
        }, {
            attributeName: "Hold Concerto Regen",
            skillDetailNum: [{
                values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
            }],
            index: 6
        }, {
            attributeName: "Mid-air Press Concerto Regen",
            skillDetailNum: [{
                values: ["8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8"]
            }],
            index: 7
        }]
        },
        {
        skillName: "Living Canvas",
        skillId: 3,
        skillDescription: `Summon <span className="Highlight">Inklit Spirits</span> for assistance.
<span className="Title">Inklit Spirit</span>
When the active Resonator deals DMG, an <span className="Highlight">Inklit Spirit</span> will be summoned to perform a Coordinated Attack, dealing <span className="Ice">Glacio DMG</span>, considered as Basic Attack DMG.
-In the {0}s after DMG is dealt, 1 <span className="Highlight">Inklit Spirit</span> is summoned every second. This effect can be triggered 1 time every second. Damage dealt by Inklit Spirit will not trigger this effect.
-Up to {1} <span className="Highlight">Inklit Spirit</span> can be summoned every second, and up to {2} in total.
-This effect lasts for {3}s, until max <span className="Highlight">Inklit Spirits</span> are summoned.`,
        typeName: "Resonance Liberation",
        skillDetailNum: ["3", "1", "21", "30"],
        multipliers: [{
            attributeName: "Inklit Spirit DMG",
            skillDetailNum: [{
                values: ["32.80%", "35.49%", "38.18%", "41.95%", "44.64%", "47.73%", "52.04%", "56.34%", "60.64%", "65.21%", "70.59%", "75.97%", "81.35%", "86.73%", "92.11%", "97.49%", "102.87%", "108.25%", "113.63%"]
            }],
            index: 1
        }, {
            attributeName: "Cooldown",
            skillDetailNum: [{
                values: ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]
            }],
            index: 2
        }, {
            attributeName: "Resonance Energy Cost",
            skillDetailNum: [{
                values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
            }],
            index: 3
        }, {
            attributeName: "Concerto Energy Regen",
            skillDetailNum: [{
                values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
            }],
            index: 4
        }]
        },
        {
        skillName: "Radiant Ruin",
        skillId: 4,
        skillDescription: `Attack the target, dealing <span className="Ice">Glacio DMG</span>.`,
        typeName: "Intro Skill",
        skillDetailNum: [],
        multipliers: [{
            attributeName: "DMG",
            skillDetailNum: [{
                values: ["43.34%*3", "46.89%*3", "50.44%*3", "55.42%*3", "58.97%*3", "63.06%*3", "68.74%*3", "74.43%*3", "80.12%*3", "86.16%*3", "93.26%*3", "100.37%*3", "107.48%*3", "114.58%*3", "121.69%*3", "128.80%*3", "135.90%*3", "143.01%*3", "150.12%*3"]
            }],
            index: 1
        }, {
            attributeName: "Concerto Regen",
            skillDetailNum: [{
                values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
            }],
            index: 2
        }]
        },
        {
        skillName: "Carve and Draw",
        skillId: 5,
        skillDescription: "The incoming Resonator has their Glacio DMG Amplified by {0} and Resonance Skill DMG Amplified by {1} for {2}s or until they are switched out.",
        typeName: "Outro Skill",
        skillDetailNum: ["20%", "25%", "14"],
        multipliers: []
        },
        {
        skillName: "Ink and Wash",
        skillId: 6,
        skillDescription: `<span className="Title">Phantasmic Imprint</span>
Up to 1 of each of <span className="Highlight">Phantasmic Imprint - Left</span>, <span className="Highlight">Phantasmic Imprint - Middle</span>, and <span className="Highlight">Phantasmic Imprint - Right</span> can exist at the same time, each lasting for {0}s.
<span className="Title">Heavy Attack - Conjuration</span>
The 5 moves below consume STA to perform <span className="Highlight">Conjuration</span> to attack the target, dealing <span className="Ice">Glacio DMG</span>.
-Hold the <span className="Highlight">Basic Attack button</span> shortly after <color=Hightlight>Basic Attack Stage 3</span>.
-Press the <span className="Highlight">Basic Attack button</span> shortly after casting Resonance Skill <span className="Highlight">Manifestation</span>.
-Hold the <span className="Highlight">Basic Attack button</span> shortly after casting Resonance Skill <span className="Highlight">Stroke of Genius</span> or Resonance Skill <span className="Highlight">Creation's Zenith</span>.
-Hold the <span className="Highlight">Basic Attack button</span> while in mid-air.
-Hold the <span className="Highlight">Basic Attack button</span> after a Dodge.
If Zhezhi has at least 30 "Afflatus" when performing any of these, consume 30 "Afflatus" to summon <span className="Highlight">Phantasmic Imprint - Middle</span>.
<span className="Title">Resonance Skill - Stroke of Genius</span>
When a <span className="Highlight">Phatasmic Imprint</span> is nearby, the Resonance Skill is replaced with <span className="Highlight">Stroke of Genius</span>, which can be cast while in mid-air. When it is cast, Zhezhi will:
-Blink to the location of the <span className="Highlight">Phatasmic Imprint</span>, remove it, and then summon a crane spirit to attack the target, dealing <span className="Ice">Glacio DMG</span>, considered as Basic Attack DMG. Refresh the mid-air Dodge counter if the target <span className="Highlight">Phatasmic Imprint</span> is in mid-air.
-Gain 1 stack of "Painter's Delight", lasting for {1}s and stacking up to 2 times.
<span className="Title">Resonance Skill - Creation's Zenith</span>
When a <span className="Highlight">Phantasmic Imprint</span> is nearby and there are 2 stacks of "Painter's Delight", <span className="Highlight">Stroke of Genius</span> is replaced with <span className="Highlight">Creation's Zenith</span>, which can be cast while in mid-air. When it is cast, Zhezhi will:
-Blink to the location of the <span className="Highlight">Phantasmic Imprint</span>, remove it, and then summon a crane spirit to attack the target, dealing greater <span className="Ice">Glacio DMG</span>, considered as Basic Attack DMG, additionally increasing the Basic Attack DMG Bonus by {2} for {3}s. Refresh the mid-air Dodge counter if the target <span className="Highlight">Phatasmic Imprint</span> is in mid-air.
<span className="Title">"Afflatus"</span>
Zhezhi can hold up to 90 "Afflatus".
Normal Attacks grant "Afflatus".
Intro Skill grants "Afflatus".`,
        typeName: "Forte Circuit",
        skillDetailNum: ["15", "8", "18%", "27"],
        multipliers: [{
            attributeName: "HA - Conjuration DMG",
            skillDetailNum: [{
                values: ["41.75%*3", "45.18%*3", "48.60%*3", "53.39%*3", "56.82%*3", "60.76%*3", "66.23%*3", "71.71%*3", "77.19%*3", "83.01%*3", "89.86%*3", "96.70%*3", "103.55%*3", "110.40%*3", "117.24%*3", "124.09%*3", "130.94%*3", "137.78%*3", "144.63%*3"]
            }],
            index: 1
        }, {
            attributeName: "HA - Conjuration STA Cost",
            skillDetailNum: [{
                values: ["15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15", "15"]
            }],
            index: 2
        }, {
            attributeName: "Stroke of Genius DMG",
            skillDetailNum: [{
                values: ["150.00%", "162.30%", "174.60%", "191.82%", "204.12%", "218.27%", "237.95%", "257.63%", "277.31%", "298.22%", "322.82%", "347.42%", "372.02%", "396.62%", "421.22%", "445.82%", "470.42%", "495.02%", "519.62%"]
            }],
            index: 3
        }, {
            attributeName: "Creation's Zenith DMG",
            skillDetailNum: [{
                values: ["60.00%*3", "64.92%*3", "69.84%*3", "76.73%*3", "81.65%*3", "87.31%*3", "95.18%*3", "103.05%*3", "110.93%*3", "119.29%*3", "129.13%*3", "138.97%*3", "148.81%*3", "158.65%*3", "168.49%*3", "178.33%*3", "188.17%*3", "198.01%*3", "207.85%*3"]
            }],
            index: 4
        }, {
            attributeName: "Stroke of Genius Concerto Regen",
            skillDetailNum: [{
                values: ["13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13"]
            }],
            index: 5
        }, {
            attributeName: "Creation's Zenith Concerto Regen",
            skillDetailNum: [{
                values: ["13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13", "13"]
            }],
            index: 6
        }]
        },
        {
        skillName: "Calligrapher's Touch",
        skillId: 7,
        skillDescription: `When casting Resonance Skill <span className="Highlight">Stroke of Genius</span> or Resonance Skill <span className="Highlight">Creation's Zenith</span>, ATK is increased by {0} for {2}s. This can be stacked up to {1} time(s).`,
        typeName: "Inherent Skill",
        skillDetailNum: ["6%", "3", "27"],
        multipliers: []
        }, 
        {
        skillName: "Flourish",
        skillId: 8,
        skillDescription: "After Outro Skill is cast, restore {0} Resonance Energy to the incoming Resonator.",
        typeName: "Inherent Skill",
        skillDetailNum: ["15"],
        multipliers: []
        }
        ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Brushwork's Finish",
            description: `When casting Resonance Skill Creation's Zenith, Resonance Energy is restored by 15 and Crit. Rate is increased by 10% for 27s.`,
            detailNum: ["10%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["Crit. Rate"],
            sequenceBuff: [10],
            itemImg: ""
        },
        {
            node: "Sequence Node 2",
            name: "Vivid Strokes",
            description: `Max Inklit Spirits summoned by Resonance Liberation Living Canvas increases by 6.`,
            detailNum: [""],
            sequenceBuffType: "No Buff",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: ""
        },
        {
            node: "Sequence Node 3",
            name: "Reflection's Grace",
            description: `When Resonance Skill Manifestation, Resonance Skill Stroke of Genius, or Resonance Skill Creation's Zenith is cast, ATK increases by 15%, stacking up to 3 time(s) for 27s.`,
            detailNum: ["15%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [15],
            stacks: 3,
            itemImg: ""
        },
        {
            node: "Sequence Node 4",
            name: "Hue's Spectrum",
            description: `When Resonance Liberation Living Canvas is cast, ATK of Resonators on the team increases by 20% for 30s.`,
            detailNum: ["20%"],
            sequenceBuffType: "Character Skill Buff",
            sequenceBuffAtrribute: ["ATK"],
            sequenceBuff: [20],
            itemImg: ""
        },
        {
            node: "Sequence Node 5",
            name: "Composition's Clue",
            description: `For every 3 Inklit Spirits summoned by Resonance Liberation Living Canvas, 1 extra Inklit Spirit is summoned to perform a Coordinated Attack, dealing DMG equal to 140% of Inklit Spirit's DMG, considered as Basic Attack DMG. This damage dealt will not further summon Inklit Spirit.`,
            detailNum: ["140%"],
            sequenceBuffType: "Extra Skill Buff",
            sequenceBuffAtrribute: ["Proper Structuring"],
            sequenceBuff: [140],
            itemImg: ""
        },
        {
            node: "Sequence Node 6",
            name: "Infinite Legacy",
            description: `When Resonance Skill Stroke of Genius or Resonance Skill Creation's Zenith is cast, an extra Ivory Herald will be summoned to deal DMG equal to 120% of Resonance Skill Stroke of Genius's DMG, considered as Basic Attack DMG.`,
            detailNum: ["120%"],
            sequenceBuffType: "Extra Skill Buff",
            sequenceBuffAtrribute: ["Imitation and Inheritance"],
            sequenceBuff: [120],
            itemImg: ""
        },
    ]
}