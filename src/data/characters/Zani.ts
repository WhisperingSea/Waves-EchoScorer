import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Zani: WWCharacter = {
    name: "Zani",
    charaId: 1507,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Spectro",
    weapon: "Gauntlets",
    bio: `A member of Averardo Vault's security team and holder of "Best Employee" for longer than she cares to count. She has made plenty of plans for her free time, but for now, her biggest mission is simple: clocking out on time.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_zanni_UI.webp",
        icon_sq: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_38_UI.webp",
        model: "https://i.imgur.com/trrdFgW.png"
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
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill4.webp",
            skillName: 'Routine Negotiation',
            skillDescription: `<span class="Title">Basic Attack</span>
                Perform up to 4 consecutive attacks to deal <span class="Light">Spectro DMG</span>.<br>
                After performing <span class="Highlight">Basic Attack Stage 3</span>, pressing Normal Attack at the right time to perform Basic Attack <span class="Highlight">Breakthrough</span>, which can be followed by <span class="Highlight">Basic Attack Stage 4</span> by pressing Normal Attack again.<br>
                Following <span class="Highlight">Basic Attack Stage 3</span>, <span class="Highlight">Basic Attack Stage 4</span> can also be triggered by dodging and pressing <span class="Highlight">Normal Attack</span> within a certain time after <span class="Highlight">Basic Attack Stage 3</span>.
                <div class="gap">Heavy Attack</div>
                Consume STA to attack the target, dealing <span class="Light">Spectro DMG</span>.<br>
                Press <span class="Highlight">Normal Attack</span> within a certain time to perform <span class="Highlight">Basic Attack Stage 3</span>.
                <span class="Title">Mid-air attack</span>
                Consume STA to attack the target, <span class="Highlight">dealing Spectro DMG</span>.
                Press <span class="Highlight">Normal Attack</span> within a certain time to perform <span class="Highlight">Basic Attack Stage 3</span>.
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>
                Press <span class="Highlight">Normal Attack</span> within a certain time after a successful Dodge to attack the target, dealing <span class="Light">Spectro DMG</span>. Then Press <span class="Highlight">Normal Attack</span> at the right time to cast Basic Attack <span class="Highlight">Breakthrough</span>.<br>
                If <span class="Highlight">Dodge Counter</span> is not followed by <span class="Highlight">Basic Attack Stage 4</span>, press <span class="Highlight">Normal Attack</span> on the ground within a certain time to cast <span class="Highlight">Basic Attack Stage 4</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Basic Attack 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["29.60%", "32.03%", "34.46%", "37.86%", "40.28%", "43.08%", "46.96%", "50.84%", "54.73%", "58.85%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Basic Attack 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["40.00%", "43.28%", "46.56%", "51.16%", "54.44%", "58.21%", "63.46%", "68.70%", "73.95%", "79.53%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Basic Attack 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["21.34%*3", "23.09%*3", "24.84%*3", "27.29%*3", "29.04%*3", "31.05%*3", "33.85%*3", "36.64%*3", "39.44%*3", "42.42%*3"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Basic Attack 4 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["34.00%*4", "36.79%*4", "39.58%*4", "43.48%*4", "46.27%*4", "49.48%*4", "53.94%*4", "58.40%*4", "62.86%*4", "67.60%*4"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Breakthrough DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["30.94%+8.84%*7", "33.47%+9.57%*7", "36.01%+10.29%*7", "39.56%+11.31%*7", "42.10%+12.03%*7", "45.02%+12.87%*7", "49.07%+14.02%*7", "53.13%+15.18%*7", "57.19%+16.34%*7", "61.50%+17.58%*7"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Heavy Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["20.66%*4", "22.36%*4", "24.05%*4", "26.43%*4", "28.12%*4", "30.07%*4", "32.78%*4", "35.49%*4", "38.20%*4", "41.08%*4"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Plunging Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["52.80%", "57.13%", "61.46%", "67.53%", "71.86%", "76.83%", "83.76%", "90.69%", "97.62%", "104.98%"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["37.34%*3", "40.40%*3", "43.46%*3", "47.75%*3", "50.81%*3", "54.33%*3", "59.23%*3", "64.12%*3", "69.02%*3", "74.23%*3"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Mid-air Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 10
                },
                
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconZanni/SP_IconZanniB1.webp",
            skillName: 'Restless Watch',
            skillDescription: `<span class="Title">Standard Defense Protocol</span>
                Attack the target to deal <span class="Light">Spectro DMG</span> and enter a block stance. This state ends early if Zani is switched off the field. Press <span class="Highlight">Normal Attack</span> within a certain time to perform <span class="Highlight">Basic Attack Stage 3</span>, recovering 10 points of Redundant Energy and Stagnating the target on hit.<br>
                When attacked by the enemy in the block stance, reduce this instance of damage by 100% and Stagnate nearby targets, then cast Resonance Skill <span class="Highlight">Pinpoint Strike</span>, dealing <span class="Light">Spectro DMG</span> and additionally reducing their Vibration Strength by 5%. The DMG taken by Zani is reduced by 30% within the next 2s.
                <div class="gap"></div>
                span class="Title">Crisis Response Protocol</span>
                When Zani is not in <span class="Highlight">Inferno Mode</span> and has full Redundant Energy, her <span class="Highlight">Resonance Skill</span> is replaced with Resonance Skill <span class="Highlight">Crisis Response Protocol</span>.<br>
                Hold <span class="Highlight">Resonance Skill</span> to enter <span class="Highlight">Ready Stance</span>. While in <span class="Highlight">Ready Stance</span>, Zani is immune to interruption. This state ends early if Zani is switched off the field. After releasing <span class="Highlight">Resonance Skill</span> button or when the stance duration ends, consume all Redundant Energy to cast <span class="Highlight">Targeted Action</span>, dealing <span class="Light">Spectro DMG</span>.<br>
                When attacked by the enemy in <span class="Highlight">Ready Stance</span>, reduce this instance of damage by 100% and consume all Redundant Energy to cast <span class="Highlight">Forcible Riposte</span>, dealing <span class="Light">Spectro DMG</span>, stagnating the target, and further reducing their Vibration Strength by 5%. The DMG taken by Zani is reduced by 30% within the next 2s.<br>
                Casting <span class="Highlight">Targeted Action</span> or <span class="Highlight">Forcible Riposte</span> inflicts a stack of Heliacal Ember upon the target on hit and recovers Blaze before entering <span class="Highlight">Sunburst</span> mode.
                <div class="gap"></div>
                span class="Title">Sunburst</span>
                The Spectro Frazzle DMG dealt by Zani to the target is Amplified by 20%.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Standard Defense Protocol DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["32.16%", "34.80%", "37.44%", "41.13%", "43.77%", "46.80%", "51.02%", "55.24%", "59.46%", "63.94%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Pinpoint Strike DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["30.68%+61.36%", "33.20%+66.40%", "35.72%+71.43%", "39.24%+78.47%", "41.75%+83.50%", "44.65%+89.29%", "48.67%+97.34%", "52.70%+105.39%", "56.72%+113.44%", "61.00%+121.99%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Targeted Action DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["43.35%+14.45%+86.70%", "46.91%+15.64%+93.81%", "50.46%+16.82%+100.92%", "55.44%+18.48%+110.88%", "59.00%+19.67%+117.99%", "63.08%+21.03%+126.16%", "68.77%+22.93%+137.54%", "74.46%+24.82%+148.91%", "80.15%+26.72%+160.29%", "86.19%+28.73%+172.37%"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Forcible Riposte DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["43.35%+14.45%+86.70%", "46.91%+15.64%+93.81%", "50.46%+16.82%+100.92%", "55.44%+18.48%+110.88%", "59.00%+19.67%+117.99%", "63.08%+21.03%+126.16%", "68.77%+22.93%+137.54%", "74.46%+24.82%+148.91%", "80.15%+26.72%+160.29%", "86.19%+28.73%+172.37%"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Standard Defense Protocol Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["5s", "5s", "5s", "5s", "5s", "5s", "5s", "5s", "5s", "5s"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Standard Defense Protocol Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Pinpoint Strike Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Targeted Action Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Forcible Riposte Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Sunburst Duration",
                    type: "",
                    skillDetailNum: [{
                        values: ["14s", "14s", "14s", "14s", "14s", "14s", "14s", "14s", "14s", "14s"]
                    }],
                    index: 10
                }
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconZanni/SP_IconZanniC1.webp",
            skillName: 'Between Dawn and Dusk',
            skillDescription: `<span class="Title">Rekindle</span>
                Deal <span class="Light">Spectro DMG</span> and enter <span class="Highlight">Inferno Mode</span>, increasing Max Blaze from 100 to 150 and granting 50 Blazes. When in <span class="Highlight">Inferno Mode</span>, the DMG Multiplier of Basic Attack is increased.
                <div class="gap"></div>
                <span class="Title">The Last Stand</span>
                When in <span class="Highlight">Inferno Mode</span>, Resonance Liberation <span class="Highlight">The Last Stand</span> becomes available when Blaze is lower than 30 or after 8s in <span class="Highlight">Inferno Mode</span>.
                Casting Resonance Liberation <span class="Highlight">The Last Stand</span> deals <span class="Light">Spectro DMG</span> and ends the <span class="Highlight">Inferno Mode</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Rekindle DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["160.22%", "173.35%", "186.49%", "204.88%", "218.02%", "233.13%", "254.15%", "275.17%", "296.19%", "318.52%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Judgement Day DMG",
                    type: "Liberation",
                    skillDetailNum: [{
                        values: ["96.13%+544.73%", "104.01%+589.39%", "111.90%+634.06%", "122.93%+696.59%", "130.81%+741.26%", "139.88%+792.63%", "152.49%+864.10%", "165.10%+935.56%", "177.72%+1007.03%", "191.12%+1082.96%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Basic Attack Multiplier Increase",
                    type: "",
                    skillDetailNum: [{
                        values: ["25%", "25%", "25%", "25%", "25%", "25%", "25%", "25%", "25%", "25%"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Resonance Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Rekindle Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Judgement Day Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Inferno Mode Duration",
                    type: "",
                    skillDetailNum: [{
                        values: ["20s", "20s", "20s", "20s", "20s", "20s", "20s", "20s", "20s", "20s"]
                    }],
                    index: 8
                }
            ]
        },
        {
            skillId: 4,
            typeName: 'Intro Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconZanni/SP_IconZanniQTE.webp",
            skillName: 'Immediate Execution',
            skillDescription: `Attack the target, dealing <span class="Light">Spectro DMG</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Skill DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["12.20%*5+40.64%", "13.20%*5+43.98%", "14.20%*5+47.31%", "15.60%*5+51.98%", "16.60%*5+55.31%", "17.75%*5+59.14%", "19.35%*5+64.47%", "20.94%*5+69.80%", "22.54%*5+75.14%", "24.24%*5+80.80%"]
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
            skillName: 'Beacon For the Future',
            skillDescription: `Attack the target, dealing <span class="Light">Spectro DMG</span> equal to {0} of Zani's ATK and removing all stacks of Heliacal Ember inflicted upon the target. Each stack increases the DMG dealt by {1}. This DMG is considered <span class="Highlight">Spectro Frazzle DMG</span>. The Spectro DMG dealt by other Resonators in the team to the target marked by <span class="Highlight">Heliacal Ember</span> is Amplified by {2} for {3}s.`,
            skillDetailNum: ["150%", "10%", "20%", "20"],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconZanni/SP_IconZanniY.webp",
            skillName: 'There Will Be A Light',
            skillDescription: `<span class="Title">Heliacal Ember</span>
                When Zani is in the team and a nearby Resonator inflicts <span class="Highlight">Spectro Frazzle</span> upon a target, immediately consume all Spectro Frazzle stacks and trigger the corresponding DMG, then convert Spectro Frazzle into an equal number of Heliacal Embers. Every time the conversion happens, Zani obtains Blaze based on the stacks of Heliacal Ember inflicted. Heliacal Ember is capped at 60 stacks, with each stack lasting for 6s. Heliacal Ember stacks are counted toward the Spectro Frazzle stacks for the Eternal Radiance Sonata Effect.
                <div class="gap"></div>
                <span class="Title">Scorching Light</span>
                When Zani is in <span class="Highlight">Inferno Mode</span>, <span class="Highlight">Heavy Slash - Daybreak</span>, <span class="Highlight">Heavy Slash - Dawning</span>, <span class="Highlight">Heavy Slash - Nightfall</span>, and <span class="Highlight">Heavy Slash - Lightsmash</span> become available, which deal <span class="Light">Spectro DMG</span> that is considered both Heavy Attack DMG and <span class="Highlight">Spectro Frazzle</span> DMG.<br>
                When Blaze is higher than 30, Resonance Skill <span class="Highlight">Standard Defense Protocol</span> is replaced with Resonance Skill <span class="Highlight">Scorching Light</span>.<br>
                Hold <span class="Highlight">Resonance Skill</span> to enter <span class="Highlight">Ready Stance</span>, during which Zani is immune to interruption. This state ends early when Zani is switched off the field. Release <span class="Highlight">Resonance Skill</span> button to consume Blaze and perform <span class="Highlight">Heavy Slash - Daybreak</span>.<br>
                When attacked in a certain time after entering <span class="Highlight">Ready Stance</span>, reduce this instance of damage by 100% and Stagnate nearby targets, then perform <span class="Highlight">Heavy Slash - Lightsmash</span>, consuming Blazes and further reducing their Vibration Strength by 10%. The DMG taken within the next 2s is reduced by 30%.<br>
                After casting <span class="Highlight">Heavy Slash - Lightsmash</span>, <span class="Highlight">Basic Attack</span> is replaced with <span class="Highlight">Heavy Slash - Nightfall</span>, consuming up to 40 Blazes on hit, with each Blaze increasing the DMG Multiplier of <span class="Highlight">Heavy Slash - Nightfall</span>.<br>
                When <span class="Highlight">Ready Stance</span> ends, immediately perform <span class="Highlight">Heavy Slash - Nightfall</span>.<br>
                When Blaze is higher than 30, <span class="Highlight">Basic Attack</span> is replaced with <span class="Highlight">Heavy Slash - Daybreak</span>. After entering <span class="Highlight">Inferno Mode</span>, casting <span class="Highlight">Basic Attack</span> immediately replaces the current <span class="Highlight">Basic Attack</span> with Resonance Skill <span class="Highlight">Scorching Light</span>. Hold <span class="Highlight">Basic Attack</span> to enter <span class="Highlight">Ready Stance</span>.<br>
                After performing <span class="Highlight">Heavy Slash - Daybreak</span>, <span class="Highlight">Basic Attack</span> is replaced with <span class="Highlight">Heavy Slash - Dawning</span> when Zani has more than 30 Blazes. <span class="Highlight">Heavy Slash - Dawning</span> consumes Blazes.<br>
                After performing <span class="Highlight">Heavy Slash - Dawning</span>, <span class="Highlight">Basic Attack</span> is replaced with <span class="Highlight">Heavy Slash - Nightfall</span>.<br>
                If <span class="Highlight">Basic Attack</span> is not replaced with <span class="Highlight">Heavy Slash - Nightfall</span> after a successful Dodge, press <span class="Highlight">Normal Attack</span> within a certain time to perform <span class="Highlight">Heavy Slash - Lightsmash</span> at the cost of Blazes.
                <div class="gap"></div>
                <span class="Title">Redundant Energy</span>
                Zani can hold up to 100 Redundant Energy.<br>
                Obtain Redundant Energy when Normal Attacks hit a target.<br>
                Obtain Redundant Energy when Intro Skill <span class="Highlight">Immediate Execution</span> hits a target.<br>
                Obtain Redundant Energy when casting Resonance Skill <span class="Highlight">Standard Defense Protocol</span>.<br>
                Obtain Redundant Energy when casting <span class="Highlight">Pinpoint Strike</span>.<br>
                Cannot obtain Redundant Energy while in <span class="Highlight">Inferno Mode</span>.
                <div class="gap"></div>
                <span class="Title">Blaze</span>
                Blaze is capped at 100 when not in <span class="Highlight">Inferno Mode</span>.<br>
                Blaze is capped at 150 in <span class="Highlight">Inferno Mode</span>.<br>
                Casting <span class="Highlight">Targeted Action</span> or <span class="Highlight">Forcible Riposte</span> grants 10 Blazes.<br>
                Every stack of Heliacal Ember converted from <span class="Highlight">Spectro Frazzle</span> grants 5 Blazes.<br>
                Casting Resonance Liberation <span class="Highlight">Rekindle</span> grants 50 Blazes.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Heavy Slash - Daybreak DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["100.00%", "108.20%", "116.40%", "127.88%", "136.08%", "145.51%", "158.63%", "171.75%", "184.87%", "198.81%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Heavy Slash - Dawning DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["213.30%", "230.80%", "248.29%", "272.77%", "290.26%", "310.38%", "338.36%", "366.35%", "394.33%", "424.07%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Heavy Slash - Nightfall DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["68.00%+132.00%", "73.58%+142.83%", "79.16%+153.65%", "86.96%+168.81%", "92.54%+179.63%", "98.95%+192.08%", "107.87%+209.40%", "116.79%+226.71%", "125.72%+244.03%", "135.20%+262.43%"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Additional Multiplier Per Blaze",
                    type: "",
                    skillDetailNum: [{
                        values: ["5.00%", "5.41%", "5.82%", "6.40%", "6.81%", "7.28%", "7.94%", "8.59%", "9.25%", "9.95%"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Heavy Slash - Lightsmash DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["213.30%", "230.80%", "248.29%", "272.77%", "290.26%", "310.38%", "338.36%", "366.35%", "394.33%", "424.07%"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Max Heliacal Ember Stacks",
                    type: "",
                    skillDetailNum: [{
                        values: ["60", "60", "60", "60", "60", "60", "60", "60", "60", "60"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Heliacal Ember Duration Per Stack",
                    type: "",
                    skillDetailNum: [{
                        values: ["6s", "6s", "6s", "6s", "6s", "6s", "6s", "6s", "6s", "6s"]
                    }],
                    index: 7
                }
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: 'Quick Response',
            skillDescription: `Casting Intro Skill <span class="Highlight">Immediate Execution</span> gives {0} Spectro DMG Bonus for {1}s.`,
            skillDetailNum: ["12%", "14"],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: 'Fear No Pain',
            skillDescription: `When in <span class="Highlight">Ready Stance</span>, all DMG taken is reduced by {0}.`,
            skillDetailNum: ["40%"],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "When the Alarm Clock Rings",
            description: `Casting <span class="Highlight">Targeted Action</span> or <span class="Highlight">Forcible Riposte</span> gives 50% Spectro DMG Bonus for 14s.<br>
            Immune to interruptions while casting Resonance Skill <span class="Highlight">Heavy Slash - Nightfall</span>.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_ZanniM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "Stale Bread With Energy Drink",
            description: `Crit. Rate is increased by 20%.<br>
            The DMG Multiplier of <span class="Highlight">Targeted Action</span> and <span class="Highlight">Forcible Riposte</span> is increased by 80%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_ZanniM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "Each Day A New Commute",
            description: `When in <span class="Highlight">Inferno Mode</span>, every 1 Blaze consumed increases the DMG Multiplier of Resonance Liberation <span class="Highlight">The Last Stand</span> by 8%, maxed at 1200%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_ZanniM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "More Efficiency, Less Drama",
            description: `When Intro Skill <span class="Highlight">Immediate Execution</span> is cast, ATK of all Resonators in the team is increased by 20% for 30s.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_ZanniM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "Delivered In Full On Time",
            description: `The DMG Multiplier of Resonance Liberation <span class="Highlight">Rekindle</span> is increased by 120%.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_ZanniM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "First Things First? Clock Out!",
            description: `The DMG Multipliers of <span class="Highlight">Heavy Slash - Daybreak</span>, <span class="Highlight">Heavy Slash - Dawning</span>, <span class="Highlight">Heavy Slash - Nightfall</span>, and <span class="Highlight">Heavy Slash - Lightsmash</span> are increased by 40%.<br>
            Gain following effects when in <span class="Highlight">Inferno Mode</span>:<br>
            - When Blaze is lower than 70, restore 70 Blazes immediately. This effect is triggered once in <span class="Highlight">Inferno Mode</span>.<br>
            - Within 8s after entering <span class="Highlight">Inferno Mode</span>, Zani will remain standing with at least 1 HP if hit by a fatal blow.`,
            detailNum: [""],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_ZanniM6_UI.webp"
        },
    ]
}