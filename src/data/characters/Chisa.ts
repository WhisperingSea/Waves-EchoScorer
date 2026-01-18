import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Chisa: WWCharacter = {
    name: "Chisa",
    charaId: 1508,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Havoc",
    weapon: "Broadblade",
    bio: `"Just an ordinary student." Calmly, she introduces herself, a faint iridescent shimmer flickering in her eyes. Again, the structures of the world reveal themselves in her vision. Narrowing her eyes, she singles out the very thread that tugs at life itself.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_Qianxiao_UI.webp",
        icon_sq: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_57_UI.webp",
        model: "https://i.imgur.com/2eyTJNz.png"
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
                item: "Abyssal Husk",
                id: 5,
                value: "46"
            },
            {
                item: "Summer Flower",
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
                item: "When Irises Bloom",
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
        base_hp: 862,
        base_atk: 35,
        base_def: 93,
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
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill2.webp",
            skillName: 'Reign of Silence',
            skillDescription: `<span class="Title">Basic Attack</span>
            Perform up to 2 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.<br>
            Press <span class="Highlight">Normal Attack</span> shortly after casting <span class="Highlight">Basic Attack Stage 2</span> to cast <span class="Highlight">Rending Lunge</span>.
            <div class="gap"></div>
            <span class="Title">Rending Lunge</span>
            Deal <span class="Dark">Havoc DMG</span>.<br>
            Press <span class="Highlight">Normal Attack</span> shortly after casting this skill on the ground to cast <span class="Highlight">Death Snip</span>.<br>
            Use <span class="Highlight">Normal Attack</span> shortly after casting this skill in mid-air to cast <span class="Highlight">Hanging Finality</span>.
            <div class="gap"></div>
            <span class="Title">Death Snip</span>
            Open the scissors, dealing <span class="Dark">Havoc DMG</span>. After a while, the scissors snip, dealing <span class="Dark">Havoc DMG</span> and restoring HP for all nearby Resonators in the team.<br>
            Use <span class="Highlight">Normal Attack</span> during this skill to deal additional <span class="Dark">Havoc DMG</span>. Use <span class="Highlight">Normal Attack</span> again to immediately snip the target.<br>
            The skill DMG is considered <span class="Highlight">Resonance Liberation DMG</span>.<br>
            Press <span class="Highlight">Normal Attack</span> shortly after casting <span class="Highlight">Death Snip</span> to cast <span class="Highlight">Thread Withdrawn</span>.
            <div class="gap"></div>
            <span class="Title">Thread Withdrawn</span>
            Deal <span class="Dark">Havoc DMG</span>.<br>
            Can trigger successful Dodges within a certain time after being cast.
            <div class="gap"></div>
            <span class="Title">Heavy Attack</span>
            Leap into the air and consume STA to attack the target, dealing <span class="Dark">Havoc DMG</span>.<br>
            This skill cannot be cast while in <span class="Highlight">Chainsaw Mode</span>.<br>
            Perform the following actions within a certain time after casting this skill to cast <span class="Highlight">Hanging Finality</span>:<br>
            - Press <span class="Highlight">Normal Attack</span>;<br>
            - Cast <span class="Highlight">Lifethread - Glide</span> and press <span class="Highlight">Normal Attack</span> before landing.<br>
            Hold <span class="Highlight">Normal Attack</span> before landing after casting <span class="Highlight">Heavy Attack</span> to cast <span class="Highlight">Heavy Attack - Severed Facet</span>.
            <div class="gap"></div>
            <span class="Title">Mid-air Attack</span>
            Consume STA to perform Plunging Attack, dealing <span class="Dark">Havoc DMG</span>.<br>
            While not in <span class="Highlight">Chainsaw Mode</span>, press <span class="Highlight">Normal Attack</span> within a certain time after casting Mid-air Attack to cast <span class="Highlight">Basic Attack Stage 2</span>.
            <div class="gap"></div>
            <span class="Title">Heavy Attack - Severed Facet</span>
            Deal <span class="Dark">Havoc DMG</span>.<br>
            Use <span class="Highlight">Normal Attack</span> within a certain time after casting <span class="Highlight">Heavy Attack - Severed Facet</span> to cast <span class="Highlight">Hanging Finality</span>.<br>
            If interrupted, <span class="Highlight">Heavy Attack - Severed Facet</span> can be cast again by holding <span class="Highlight">Normal Attack</span> before landing. This effect can be triggered once only before landing.
            <div class="gap"></div>
            <span class="Title">Hanging Finality</span>
            Consume STA to perform Plunging Attack, dealing <span class="Dark">Havoc DMG</span>.<br>
            Press <span class="Highlight">Normal Attack</span> shortly after casting this skill on the ground to cast <span class="Highlight">Death Snip</span>.
            <div class="gap"></div>
            <span class="Title">Dodge Counter</span>
            Press <span class="Highlight">Normal Attack</span> right after a successful Dodge to attack the target, dealing <span class="Dark">Havoc DMG</span>.<br>
            Press <span class="Highlight">Normal Attack</span> shortly after casting this skill to cast <span class="Highlight">Rending Lunge</span>.
            <div class="gap"></div>
            <span class="Title">Dodge Counter - Eye of Unraveling: Retraction</span>
            Hold <span class="Highlight">Dodge</span> after a successful <span class="Highlight">Dodge</span> on the ground to cast <span class="Highlight">Dodge Counter - Eye of Unraveling: Retraction</span> to attack and Stagnate the target, dealing <span class="Dark">Havoc DMG</span>.<br>
            - While not in <span class="Highlight">Chainsaw Mode</span>, after casting this skill, Press <span class="Highlight">Normal Attack</span> on the ground or use <span class="Highlight">Normal Attack</span> in mid-air to cast <span class="Highlight">Rending Lunge</span>. This effect is removed when Chisa enters <span class="Highlight">Chainsaw Mode</span>.<br>
            - While in <span class="Highlight">Chainsaw Mode</span>, press <span class="Highlight">Normal Attack</span> shortly after casting this skill to cast <span class="Highlight">Sawring - Blitz Stage 3</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["8.40%*2", "9.09%*2", "9.78%*2", "10.75%*2", "11.44%*2", "12.23%*2", "13.33%*2", "14.43%*2", "15.53%*2", "16.71%*2"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["4.80%+9.60%+33.60%", "5.20%+10.39%+36.36%", "5.59%+11.18%+39.12%", "6.14%+12.28%+42.97%", "6.54%+13.07%+45.73%", "6.99%+13.97%+48.90%", "7.62%+15.23%+53.30%", "8.25%+16.49%+57.71%", "8.88%+17.75%+62.12%", "9.55%+19.09%+66.81%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Death Snip DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["15.00%+7.50%+52.48%", "16.23%+8.12%+56.79%", "17.46%+8.73%+61.09%", "19.18%+9.59%+67.12%", "20.41%+10.21%+71.42%", "21.82%+10.91%+76.37%", "23.79%+11.90%+83.25%", "25.76%+12.88%+90.14%", "27.72%+13.86%+97.02%", "29.81%+14.91%+104.34%"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Death Snip Additional DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: [""]
                    }],
                    index: 4
                },
                {
                    attributeName: "Death Snip Healing",
                    type: "",
                    skillDetailNum: [{
                        values: ["600+24.00% ATK", "672+24.96% ATK", "750+25.92% ATK", "840+27.36% ATK", "948+29.28% ATK", "1050+31.20% ATK", "1068+34.80% ATK", "1092+38.88% ATK", "1110+43.20% ATK", "1140+50.40% ATK"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Thread Withdrawn DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["5.11%*2+23.82%", "5.53%*2+25.77%", "5.94%*2+27.72%", "6.53%*2+30.46%", "6.95%*2+32.41%", "7.43%*2+34.66%", "8.10%*2+37.78%", "8.77%*2+40.91%", "9.44%*2+44.03%", "10.15%*2+47.35%"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Rending Lunge DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["7.61%*4+45.61%", "8.23%*4+49.35%", "8.85%*4+53.08%", "9.72%*4+58.32%", "10.35%*4+62.06%", "11.06%*4+66.36%", "12.06%*4+72.34%", "13.06%*4+78.33%", "14.06%*4+84.31%", "15.11%*4+90.66%"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Heavy Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["18.00%*2", "19.48%*2", "20.96%*2", "23.02%*2", "24.50%*2", "26.20%*2", "28.56%*2", "30.92%*2", "33.28%*2", "35.79%*2"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Mid-air Attack DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["37.20%", "40.26%", "43.31%", "47.58%", "50.63%", "54.13%", "59.02%", "63.90%", "68.78%", "73.96%"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Severed Facet DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["22.50%*2", "24.35%*2", "26.19%*2", "28.78%*2", "30.62%*2", "32.74%*2", "35.70%*2", "38.65%*2", "41.60%*2", "44.74%*2"]
                    }],
                    index: 10
                },
                {
                    attributeName: "Hanging Finality DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["6.00%+12.00%*2+30.00%", "6.50%+12.99%*2+32.46%", "6.99%+13.97%*2+34.92%", "7.68%+15.35%*2+38.37%", "8.17%+16.33%*2+40.83%", "8.74%+17.47%*2+43.66%", "9.52%+19.04%*2+47.59%", "10.31%+20.61%*2+51.53%", "11.10%+22.19%*2+55.47%", "11.93%+23.86%*2+59.65%"]
                    }],
                    index: 11
                },
                {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["12.00%+24.00%+84.00%", "12.99%+25.97%+90.89%", "13.97%+27.94%+97.78%", "15.35%+30.70%+107.42%", "16.33%+32.66%+114.31%", "17.47%+34.93%+122.23%", "19.04%+38.08%+133.25%", "20.61%+41.22%+144.27%", "22.19%+44.37%+155.30%", "23.86%+47.72%+167.01%"]
                    }],
                    index: 12
                },
                {
                    attributeName: "Eye of Unraveling - Retraction DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["90.00%", "97.38%", "104.76%", "115.10%", "122.48%", "130.96%", "142.77%", "154.58%", "166.39%", "178.93%"]
                    }],
                    index: 13
                },
                {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 14
                },
                {
                    attributeName: "Mid-air Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 15
                },
                {
                    attributeName: "Severed Facet STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 16
                },
                {
                    attributeName: "Hanging Finality STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 17
                }
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconQianxiao/SP_IconQianxiaoB1.webp",
            skillName: 'Fractured Composition',
            skillDescription: `<span class="Title">Eye of Unraveling</span>
            Stagnate and deal <span class="Dark">Havoc DMG</span>.<br>
            - While not in <span class="Highlight">Chainsaw Mode</span>, after casting this skill, press <span class="Highlight">Normal Attack</span> on the ground or use <span class="Highlight">Normal Attack</span> in mid-air to cast <span class="Highlight">Rending Lunge</span>. This effect is removed when Chisa enters <span class="Highlight">Chainsaw Mode</span>.<br>
            - While in <span class="Highlight">Chainsaw Mode</span> and on the ground, press <span class="Highlight">Normal Attack</span> shortly after casting this skill to cast <span class="Highlight">Sawring - Blitz Stage 2</span>.<br>
            Can be cast in mid-air.
            <div class="gap"></div>
            <span class="Title">Serrated Loop</span>
            While on the ground and <span class="Highlight">Ring of Chainsaw</span> is full, <span class="Highlight">Resonance Skill</span> is replaced with <span class="Highlight">Serrated Loop</span>.<br>
            Stagnate targets, and deal <span class="Dark">Havoc DMG</span> and pull in nearby targets.<br>
            Casting this skill sends Chisa into <span class="Highlight">Chainsaw Mode</span> and replaces <span class="Highlight">Resonance Skill</span> with <span class="Highlight">Eye of Unraveling</span>.<br>
            Press <span class="Highlight">Normal Attack</span> shortly after casting this skill to cast <span class="Highlight">Sawring - Blitz Stage 2</span>.<br>
            Hold <span class="Highlight">Resonance Skill</span> while casting this skill to continuously attack and pull in nearby targets. Release the <span class="Highlight">Resonance Skill</span> button in the duration or keep holding it for a certain period of time to cast <span class="Highlight">Sawring - Blitz Stage 1</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Eye of Unraveling DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["18.00%", "19.48%", "20.96%", "23.02%", "24.50%", "26.20%", "28.56%", "30.92%", "33.28%", "35.79%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Serrated Loop DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["8.78%*8", "9.50%*8", "10.22%*8", "11.22%*8", "11.94%*8", "12.77%*8", "13.92%*8", "15.07%*8", "16.22%*8", "17.45%*8"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Serrated Loop Hold DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["3.76%*16", "4.06%*16", "4.37%*16", "4.80%*16", "5.11%*16", "5.46%*16", "5.96%*16", "6.45%*16", "6.94%*16", "7.46%*16"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Eye of Unraveling Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s"]
                    }],
                    index: 4
                }
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconQianxiao/SP_IconQianxiaoC1.webp",
            skillName: 'Moment of Nihility',
            skillDescription: `
            Deal <span class="Dark">Havoc DMG</span> and recover HP for all nearby Resonators in the team.<br>
            Casting this skill sends Chisa into <span class="Highlight">Woven Myriad - Convergence</span> for 15s.<br>
            While not in <span class="Highlight">Chainsaw Mode</span>, press <span class="Highlight">Normal Attack</span> shortly after casting this skill to cast <span class="Highlight">Basic Attack Stage 2</span>.<br>
            Can be cast in mid-air close to the ground.
            <div class="gap"></div>
            <span class="Title">Woven Myriad - Convergence</span>
            The DMG Multipliers of <span class="Highlight">Sawring - Blitz</span>, <span class="Highlight">Chainsaw Mode - Dodge Counter</span>, and <span class="Highlight">Sawring - Eradication</span> are increased by 120%.<br>
            The bonus DMG Multiplier for <span class="Highlight">Sawring - Eradication</span> granted by <span class="Highlight">Sawring - Blitz</span> and <span class="Highlight">Chainsaw Mode - Dodge Counter</span> when <span class="Highlight">Ring of Chainsaw</span> is consumed additionally increases by 120%.<br>
            Casting <span class="Highlight">Sawring - Eradication</span> ends <span class="Highlight">Woven Myriad - Convergence</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["480.00%", "519.36%", "558.72%", "613.83%", "653.19%", "698.45%", "761.43%", "824.40%", "887.38%", "954.29%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Healing",
                    type: "",
                    skillDetailNum: [{
                        values: ["1400+56.00% ATK", "1568+58.24% ATK", "1750+60.48% ATK", "1960+63.84% ATK", "2212+68.32% ATK", "2450+72.80% ATK", "2492+81.20% ATK", "2548+90.72% ATK", "2590+100.80% ATK", "2660+117.60% ATK"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Resonance Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 5
                }
            ]
        },
        {
            skillId: 4,
            typeName: 'Intro Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconQianxiao/SP_IconQianxiaoQTE.webp",
            skillName: 'Reverberance - Return',
            skillDescription: `
            Attack the target, dealing <span class="Dark">Havoc DMG</span>.<br>
            While not in <span class="Highlight">Chainsaw Mode</span>, press <span class="Highlight">Normal Attack</span> shortly after casting this skill to cast <span class="Highlight">Basic Attack Stage 2</span>.<br>
            While in <span class="Highlight">Chainsaw Mode</span>, use <span class="Highlight">Normal Attack</span> shortly after casting this skill to cast <span class="Highlight">Sawring - Blitz Stage 2</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["48.00%", "51.94%", "55.88%", "61.39%", "65.32%", "69.85%", "76.15%", "82.44%", "88.74%", "95.43%"]
                    }],
                    index: 1
                },
                {
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
            skillName: 'Unraveling - Law Zero',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconQianxiao/SP_IconQianxiaoT.webp",
            skillDescription: `Grant <span class="Highlight">Resonant Thread of Closure</span> to all nearby Resonators in the team for 20s.<br>
            While in <span class="Highlight">Resonant Thread of Closure</span>:<br>
            - When an attack hits, increase the max stacks of <span class="Highlight">Negative Status</span> and <span class="Thunder">Electro Rage</span> the target can receive by 3 for 15s. Unstackable.<br>
            - Inflicting <span class="Highlight">Negative Status</span> or dealing <span class="Highlight">Negative Status DMG</span> grants <span class="Highlight">Thread of Bane</span> for 15s.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconQianxiao/SP_IconQianxiaoY.webp",
            skillName: 'Sight of Unraveling - Oblivion',
            skillDescription: `<span class="Title">Unseen Snare</span>
            Chisa inflicts <span class="Highlight">Unseen Snare</span> on the target for 30s in the following 4 ways:<br>
            - Hitting a target with <span class="Highlight">Resonance Skill</span>.<br>
            - Hitting a target within a certain period of time after casting <span class="Highlight">Serrated Loop</span>.<br>
            - Hitting a target with <span class="Highlight">Dodge Counter - Eye of Unraveling: Retraction</span>.<br>
            - <span class="Highlight">Locking</span> on to a target.<br>
            When targets marked by <span class="Highlight">Unseen Snare</span> take direct damage from Resonators, Chisa inflicts 1 stack of <span class="Dark">Havoc Bane</span> on them. This effect can be triggered up to once every 2s.
            <div class="gap"></div>
            <span class="Title">Thread of Bane</span>
            When dealing damage to targets affected by <span class="Highlight">Unseen Snare</span>, ignore 18% of their DEF.
            <div class="gap"></div>
            <span class="Title">Chainsaw Mode</span>
            While in <span class="Highlight">Chainsaw Mode</span>, Chisa unlocks <span class="Highlight">Sawring - Blitz</span>, <span class="Highlight">Sawring - Eradication</span>, <span class="Highlight">Chainsaw Mode - Dodge Counter</span>.<br>
            <span class="Highlight">Sawring - Blitz</span> and <span class="Highlight">Chainsaw Mode - Dodge Counter</span> consume <span class="Highlight">Ring of Chainsaw</span> on hit.
            <div class="gap"></div>
            <span class="Title">Sawring - Blitz</span>
            <span class="Highlight">Sawring - Blitz</span> chains up to 3 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.<br>
            Press <span class="Highlight">Normal Attack</span> to start the combo from <span class="Highlight">Sawring - Blitz Stage 1</span>. Hold <span class="Highlight">Normal Attack</span> to start from <span class="Highlight">Sawring - Blitz Stage 2</span>.<br>
            Hold <span class="Highlight">Normal Attack</span> while casting <span class="Highlight">Sawring - Blitz Stage 2</span> to continuously attack the target. <span class="Highlight">Sawring - Blitz Stage 2</span> is automatically followed by <span class="Highlight">Sawring - Blitz Stage 3</span>.<br>
            While casting <span class="Highlight">Sawring - Blitz Stage 2</span>, release the <span class="Highlight">Normal Attack</span> button or <span class="Highlight">Dodge</span> without directional input to automatically cast <span class="Highlight">Sawring - Blitz Stage 2: Discordance</span>, dealing <span class="Dark">Havoc DMG</span>. Shortly after casting <span class="Highlight">Sawring - Blitz Stage 2: Discordance</span>, successful Dodges can be triggered.<br>
            Press <span class="Highlight">Normal Attack</span> shortly after casting <span class="Highlight">Sawring - Blitz Stage 2: Discordance</span> to cast <span class="Highlight">Sawring - Blitz Stage 3</span>.<br>
            While casting <span class="Highlight">Sawring - Blitz Stage 3</span>, hold <span class="Highlight">Normal Attack</span> to continuously attack the target. <span class="Highlight">Sawring - Blitz Stage 3</span> is automatically followed by <span class="Highlight">Sawring - Eradication</span>.<br>
            Release <span class="Highlight">Normal Attack</span> during <span class="Highlight">Sawring - Blitz Stage 3</span> to automatically cast <span class="Highlight">Sawring - Blitz Stage 3: Falltone</span>, dealing <span class="Dark">Havoc DMG</span>.<br>
            <span class="Highlight">Sawring - Blitz</span> DMG is considered <span class="Highlight">Resonance Liberation DMG</span>.
            <div class="gap"></div>
            <span class="Title">Chainsaw Mode - Dodge Counter</span>
            While in <span class="Highlight">Chainsaw Mode</span>, press <span class="Highlight">Normal Attack</span> following a successful <span class="Highlight">Dodge</span> to cast <span class="Highlight">Chainsaw Mode - Dodge Counter</span>, dealing <span class="Dark">Havoc DMG</span>.<br>
            Press <span class="Highlight">Normal Attack</span> following <span class="Highlight">Chainsaw Mode - Dodge Counter</span> to cast <span class="Highlight">Sawring - Blitz Stage 3</span>.<br>
            Hold <span class="Highlight">Normal Attack</span> while casting <span class="Highlight">Chainsaw Mode - Dodge Counter</span> to sustain the attack. When <span class="Highlight">Chainsaw Mode - Dodge Counter</span> ends, cast <span class="Highlight">Sawring - Blitz Stage 3</span> automatically.<br>
            Release the <span class="Highlight">Normal Attack</span> button or <span class="Highlight">Dodge</span> without directional input while casting <span class="Highlight">Chainsaw Mode - Dodge Counter</span> to cast <span class="Highlight">Sawring - Blitz Stage 2: Discordance</span> automatically.<br>
            <span class="Highlight">Chainsaw Mode - Dodge Counter</span> deals <span class="Highlight">Resonance Liberation DMG</span>.
            <div class="gap"></div>
            <span class="Title">Sawring - Eradication</span>
            While in <span class="Highlight">Chainsaw Mode</span>, Chisa casts <span class="Highlight">Sawring - Eradication</span> in the following 2 ways:<br>
            - Press <span class="Highlight">Normal Attack</span> after casting <span class="Highlight">Sawring - Blitz Stage 3: Falltone</span>.<br>
            - Press <span class="Highlight">Normal Attack</span> after consuming all <span class="Highlight">Ring of Chainsaw</span> with <span class="Highlight">Sawring - Blitz</span> or <span class="Highlight">Chainsaw Mode - Dodge Counter</span>.<br>
            Attacking targets with <span class="Highlight">Sawring - Eradication</span> deals <span class="Dark">Havoc DMG</span> and grants Shields to all nearby Resonators in the team for 30s.<br>
            The skill DMG is considered <span class="Highlight">Resonance Liberation DMG</span>.<br>
            Every 1 point of <span class="Highlight">Ring of Chainsaw</span> consumed by <span class="Highlight">Sawring - Blitz</span> and <span class="Highlight">Chainsaw Mode - Dodge Counter</span> increases the DMG Multiplier of the next <span class="Highlight">Sawring - Eradication</span>. Up to 100 points will be counted toward this effect.<br>
            Casting this skill consumes all <span class="Highlight">Ring of Chainsaw</span> and ends <span class="Highlight">Chainsaw Mode</span>.
            <div class="gap"></div>
            <span class="Title">Chainsaw Fever</span>
            While in <span class="Highlight">Chainsaw Mode</span>, <span class="Highlight">Lifethread - Jetstream</span> is replaced with <span class="Highlight">Chainsaw Fever</span>.<br>
            <span class="Highlight">Chainsaw Fever</span> is at 100% by default.<br>
            When Chisa goes on for a period without dealing any damage, <span class="Highlight">Chainsaw Fever</span> will rapidly deplete. Once it reaches 0, Chisa enters the <span class="Highlight">Burnout State</span> and exits <span class="Highlight">Chainsaw Mode</span>.<br>
            While in <span class="Highlight">Chainsaw Mode</span>, Chisa resets <span class="Highlight">Chainsaw Fever</span> when dealing damage or when casting Resonance Liberation <span class="Highlight">Moment of Nihility</span>, Intro Skill <span class="Highlight">Reverberance - Return</span> and <span class="Highlight">Sawring - Blitz Stage 3: Falltone</span>.<br>
            While in the <span class="Highlight">Burnout State</span>, <span class="Highlight">Ring of Chainsaw</span> will rapidly deplete. Once it reaches 0, Chisa exits the <span class="Highlight">Burnout State</span>.<br>
            When in <span class="Highlight">Burnout State</span>, Chisa exits the state upon dealing damage, or casting Resonance Liberation <span class="Highlight">Moment of Nihility</span> and Intro Skill <span class="Highlight">Reverberance - Return</span>.
            <div class="gap"></div>
            <span class="Title">Lifethread - Glide</span>
            When Chisa is not in <span class="Highlight">Chainsaw Mode</span> and has more than 10 points of <span class="Highlight">Lifethread - Jetstream</span>, she can consume 50 points of <span class="Highlight">Lifethread - Jetstream</span> to cast <span class="Highlight">Lifethread - Glide</span> in the following 5 ways:<br>
            - Press <span class="Highlight">Dodge</span> in mid-air before landing after casting <span class="Highlight">Heavy Attack</span>.<br>
            - While in mid-air, press <span class="Highlight">Dodge</span> before landing after casting Resonance Skill <span class="Highlight">Eye of Unraveling</span> or <span class="Highlight">Rending Lunge</span>.<br>
            - Dodge forward shortly after casting <span class="Highlight">Thread Withdrawn</span>.<br>
            - Press <span class="Highlight">Dodge</span> before landing when launched into mid-air.<br>
            - Press <span class="Highlight">Dodge</span> before landing after casting <span class="Highlight">Lifethread - Glide</span>.<br>
            Casting this skill can pull in nearby enemies marked by <span class="Highlight">Unseen Snare</span>.<br>
            During the skill, hold <span class="Highlight">Dodge</span> to glide a short distance on the weapon.<br>
            Can trigger successful Dodges within a certain time after casting this skill.
            <div class="gap"></div>
            <span class="Title">Ring of Chainsaw</span>
            Chisa can hold up to 100 points of <span class="Highlight">Ring of Chainsaw</span>.<br>
            Hitting a target with <span class="Highlight">Normal Attack</span> and Resonance Skill <span class="Highlight">Eye of Unraveling</span> grants Ring of Chainsaw.<br>
            Casting Resonance Liberation <span class="Highlight">Moment of Nihility</span> grants 40 points of <span class="Highlight">Ring of Chainsaw</span>.<br>
            Casting Intro Skill <span class="Highlight">Reverberance - Return</span> grants 20 points of <span class="Highlight">Ring of Chainsaw</span>.
            <div class="gap"></div>
            <span class="Title">Lifethread - Jetstream</span>
            Chisa can hold up to 100 points of <span class="Highlight">Lifethread - Jetstream</span>.<br>
            Chisa continuously obtains <span class="Highlight">Lifethread - Jetstream</span> over time.<br>
            Chisa obtains 100 points of <span class="Highlight">Lifethread - Jetstream</span> upon defeating a target.<br>
            Exiting <span class="Highlight">Chainsaw Mode</span> resets <span class="Highlight">Lifethread - Jetstream</span> to the max limit.<br>
            Chisa cannot obtain <span class="Highlight">Lifethread - Jetstream</span> passively for a short period of time after casting <span class="Highlight">Lifethread - Glide</span>.
            `,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Sawring - Blitz Stage 1 DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["5.78%*6", "6.25%*6", "6.73%*6", "7.39%*6", "7.86%*6", "8.41%*6", "9.17%*6", "9.92%*6", "10.68%*6", "11.49%*6"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Sawring - Blitz Stage 2 DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["5.35%*8", "5.79%*8", "6.23%*8", "6.85%*8", "7.29%*8", "7.79%*8", "8.49%*8", "9.19%*8", "9.90%*8", "10.64%*8"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Sawring - Blitz Stage 2 Hold DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["5.35%*10", "5.79%*10", "6.23%*10", "6.85%*10", "7.29%*10", "7.79%*10", "8.49%*10", "9.19%*10", "9.90%*10", "10.64%*10"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Sawring - Blitz Stage 2: Discordance DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["1.80%*3", "1.95%*3", "2.10%*3", "2.31%*3", "2.45%*3", "2.62%*3", "2.86%*3", "3.10%*3", "3.33%*3", "3.58%*3"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Sawring - Blitz Stage 3 DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["8.04%*8", "8.70%*8", "9.36%*8", "10.28%*8", "10.94%*8", "11.70%*8", "12.75%*8", "13.81%*8", "14.86%*8", "15.98%*8"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Sawring - Blitz Stage 3 Hold DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["8.04%*6", "8.70%*6", "9.36%*6", "10.28%*6", "10.94%*6", "11.70%*6", "12.75%*6", "13.81%*6", "14.86%*6", "15.98%*6"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Sawring - Blitz Stage 3: Falltone DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["1.80%*3", "1.95%*3", "2.10%*3", "2.31%*3", "2.45%*3", "2.62%*3", "2.86%*3", "3.10%*3", "3.33%*3", "3.58%*3"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Chainsaw Mode - Dodge Counter DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["5.35%*8", "5.79%*8", "6.23%*8", "6.85%*8", "7.29%*8", "7.79%*8", "8.49%*8", "9.19%*8", "9.90%*8", "10.64%*8"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Chainsaw Mode - Dodge Counter Hold DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["5.35%*10", "5.79%*10", "6.23%*10", "6.85%*10", "7.29%*10", "7.79%*10", "8.49%*10", "9.19%*10", "9.90%*10", "10.64%*10"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Sawring - Eradication DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["25.92%+103.68%", "28.05%+112.19%", "30.18%+120.69%", "33.15%+132.59%", "35.28%+141.09%", "37.72%+150.87%", "41.12%+164.47%", "44.52%+178.08%", "47.92%+191.68%", "51.54%+206.13%"]
                    }],
                    index: 10
                },
                {
                    attributeName: "Bonus DMG Multiplier per Ring of Chainsaw",
                    type: "",
                    skillDetailNum: [{
                        values: ["1.30%", "1.42%", "1.52%", "1.67%", "1.78%", "1.89%", "2.07%", "2.24%", "2.40%", "2.59%"]
                    }],
                    index: 11
                },
                {
                    attributeName: "Sawring - Eradication Shield",
                    type: "",
                    skillDetailNum: [{
                        values: ["2000+80.00% ATK", "2240+83.20% ATK", "2500+86.40% ATK", "2800+91.20% ATK", "3160+97.60% ATK", "3500+104.00% ATK", "3560+116.00% ATK", "3640+129.60% ATK", "3700+144.00% ATK", "3800+168.00% ATK"]
                    }],
                    index: 12
                },
                {
                    attributeName: "Sawring - Eradication Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["45", "45", "45", "45", "45", "45", "45", "45", "45", "45"]
                    }],
                    index: 13
                },
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Inescapable Fate',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconQianxiao/SP_IconQianxiaoD1.webp",
            skillDescription: `When a Resonator in the team defeats a target marked by <span class="Highlight">Unseen Snare</span>, the Cooldown of Chisa's Resonance Skill <span class="Highlight">Eye of Unraveling</span> is reset, triggered up to once every 3s.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'All Ends Here',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconQianxiao/SP_IconQianxiaoD2.webp",
            skillDescription: `Casting Intro Skill <span class="Highlight">Reverberance - Return</span> or Resonance Liberation <span class="Highlight">Moment of Nihility</span> grants 20% Havoc DMG Bonus and 20% Healing Bonus for 12s.<br>
            When Resonators in the team with <span class="Highlight">Thread of Bane</span> defeat a target marked by <span class="Highlight">Unseen Snare</span>, Chisa gains Sight of Unraveling, lasting 3s.<br>
            While in Sight of Unraveling, Chisa inflicts <span class="Highlight">Unseen Snare</span> that lasts for 30s on the targets damaged by Resonators in the team with Thread of Bane.`,
            skillDetailNum: [""],
            multipliers: []
        },
        {
            skillId: 9,
            typeName: "Tune Break",
            skillName: '',
            skillImg: "",
            skillDescription: `When the target\'s <span class="Highlight">Off-Tune Level</span> is full, the Resonator may cast <span class="Highlight">Tune Break</span> on the target.`,
            skillDetailNum: [""],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Wandering Through the Desolate Corridors",
            description: `Chisa is immune to interruption during <span class="Highlight">Sawring - Blitz</span>, <span class="Highlight">Sawring - Eradication</span>, and <span class="Highlight">Chainsaw Mode - Dodge Counter</span>.<br><br>
            Inflicting <span class="Highlight">Unseen Snare</span> grants the following additional effects:<br>
            - Chisa's ATK is increased by 30% for 15s.<br>
            - Deal fixed 61803 points of <span class="Dark">Havoc DMG</span>. The target's HP can be reduced to 61.80% at most and each target can take this damage only once. This instance of damage is considered Basic Attack DMG that does not bear any effect from damage bonuses.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_QianxiaoM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "Into the Web of Endless Bonds",
            description: `Ignore 10% of the target's Havoc RES when dealing damage.<br>
            Nearby Resonators in the team with <span class="Highlight">Thread of Bane</span> gain 50% All-Attribute DMG Bonus.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_QianxiaoM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "Across the Confusion of the Long Night",
            description: `The DMG Multipliers of <span class="Highlight">Sawring - Blitz</span>, <span class="Highlight">Chainsaw Mode - Dodge Counter</span> and <span class="Highlight">Sawring - Eradication</span> are increased by 120%. This effect is mutually stackable with that of <span class="Highlight">Woven Myriad - Convergence</span>.<br>
            The bonus DMG Multiplier for <span class="Highlight">Sawring - Eradication</span> granted by <span class="Highlight">Sawring - Blitz</span> and <span class="Highlight">Chainsaw Mode - Dodge Counter</span> when <span class="Highlight">Ring of Chainsaw</span> is consumed is increased by 120%. This effect is mutually stackable with that of <span class="Highlight">Woven Myriad - Convergence</span>.<br>
            The Vibration Strength Reduction Rate of <span class="Highlight">Sawring - Blitz</span>, <span class="Highlight">Chainsaw Mode - Dodge Counter</span> and <span class="Highlight">Sawring - Eradication</span> is increased by 50%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_QianxiaoM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "Severing the Endless Cycle of Tragic Fate",
            description: `The effect of <span class="Highlight">Unseen Snare</span> becomes:<br>
            When targets marked by <span class="Highlight">Unseen Snare</span> take direct damage from Resonators, Chisa inflicts 1 stack of <span class="Dark">Havoc Bane</span> on them. This effect is triggered up to once every 1s.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_QianxiaoM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "Thousands of Lights to Guide the Way Home",
            description: `Resonance Liberation <span class="Highlight">Moment of Nihility</span> gains 100% DMG Bonus.<br>
            <span class="Highlight">Lifethread - Glide</span> costs 50% less <span class="Highlight">Lifethread - Jetstream</span>.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_QianxiaoM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "Thus, Hope is Rekindled with the Rising Dawn",
            description: `When Chisa takes a fatal blow during <span class="Highlight">Sawring - Blitz</span>, <span class="Highlight">Sawring - Eradication</span>, and <span class="Highlight">Chainsaw Mode - Dodge Counter</span>, she will remain standing with at least 1 HP.<br><br>
            <span class="Highlight">Unseen Snare</span> becomes <span class="Highlight">Unseen Snare - Finality</span>, which has the following effects:<br>
            - <span class="Highlight">Unseen Snare - Finality</span> has all the effects of <span class="Highlight">Unseen Snare</span>.<br>
            - Targets affected by <span class="Highlight">Unseen Snare - Finality</span> takes 30% Amplified DMG from Negative Statuses.<br>
            - Targets affected by <span class="Highlight">Unseen Snare - Finality</span> takes 40% increased DMG from Chisa.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_QianxiaoM6_UI.webp"
        },
    ]
}