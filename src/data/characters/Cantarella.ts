import { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Cantarella: WWCharacter = {
    name: "Cantarella",
    charaId: 1607,
    rarity: {
        alt: "5 Star",
        img: rarity5Star
    },
    element: "Havoc",
    weapon: "Rectifier",
    bio: `The current head of Fisalia, Cantarella, the Bane. A mysterious noblewoman, her beauty as captivating as it is perilous. She resides in a crown-like castle perched atop the mountain, where illusory dreams flow like streams, meticulously spun by her own hands.`,
    images: {
        portrait: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRolePile/T_IconRole_Pile_kanteleila_UI.webp",
        icon_sq: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconRoleHead256/T_IconRoleHead256_34_UI.webp",
        model: "https://i.imgur.com/eGROdfc.png"
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
                item: "Cleansing Conch",
                id: 5,
                value: "46"
            },
            {
                item: "Seaside Cendrelis",
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
        base_hp: 928,
        base_atk: 32,
        base_def: 90,
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
            skillImg: "https://wuthering-waves-assets.pages.dev/Skills/BasicSkill5.webp",
            skillName: 'Illusion Collapse',
            skillDescription: `<span class="Title">Basic Attack</span>
                Perform up to 3 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>.
                <div class="gap"></div>
                <span class="Title">Heavy Attack</span>
                Consume STA to attack the target, dealing <span class="Dark">Havoc DMG</span>.
                <div class="gap"></div>
                <span class="Title">Heavy Attack - Delusive Dive</span>
                When Cantarella has Trance, <span class="Highlight">Heavy Attack</span> becomes <span class="Highlight">Delusive Dive</span>, dealing <span class="Dark">Havoc DMG</span> to the target, and then Cantarella enters <span class="Highlight">Mirage</span>. While in <span class="Highlight">Mirage</span>, casting <span class="Highlight">Delusive Dive</span> does not activate <span class="Highlight">Mirage</span> again.<br>
                Can be cast in water.
                <div class="gap"></div>
                <span class="Title">Mid-air Attack</span>
                Consume STA to perform Plunging Attack, dealing <span class="Dark">Havoc DMG</span>.
                <div class="gap"></div>
                <span class="Title">Dodge Counter</span>
                Press <span class="Highlight">Normal Attack</span> right after a successful <span class="Highlight">Dodge</span> to attack the target, dealing <span class="Dark">Havoc DMG</span>.
                `,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["40.00%", "43.28%", "46.56%", "51.16%", "54.44%", "58.21%", "63.46%", "68.70%", "73.95%", "79.53%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["18.33%*4", "19.83%*4", "21.34%*4", "23.44%*4", "24.94%*4", "26.67%*4", "29.07%*4", "31.48%*4", "33.88%*4", "36.44%*4"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["36.50%*2", "39.50%*2", "42.49%*2", "46.68%*2", "49.67%*2", "53.12%*2", "57.90%*2", "62.69%*2", "67.48%*2", "72.57%*2"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Heavy Attack DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["28.76%*2", "31.12%*2", "33.48%*2", "36.78%*2", "39.14%*2", "41.85%*2", "45.63%*2", "49.40%*2", "53.17%*2", "57.18%*2"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Delusive Dive DMG",
                    type: "Heavy",
                    skillDetailNum: [{
                        values: ["26.68%*2", "28.87%*2", "31.06%*2", "34.12%*2", "36.31%*2", "38.83%*2", "42.33%*2", "45.83%*2", "49.33%*2", "53.05%*2"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Mid-air Attack DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["21.12%+31.68%", "22.86%+34.28%", "24.59%+36.88%", "27.01%+40.52%", "28.75%+43.12%", "30.74%+46.10%", "33.51%+50.26%", "36.28%+54.42%", "39.05%+58.57%", "41.99%+62.99%"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Dodge Counter DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["26.66%*4", "28.85%*4", "31.04%*4", "34.10%*4", "36.28%*4", "38.80%*4", "42.30%*4", "45.79%*4", "49.29%*4", "53.01%*4"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Heavy Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["20", "20", "20", "20", "20", "20", "20", "20", "20", "20"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Mid-air Attack STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 9
                },
                
            ]
        },
        {
            skillId: 2,
            typeName: 'Resonance Skill',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconKanteleila/SP_IconKanteleilaB1.webp",
            skillName: 'Dance with Shadows',
            skillDescription: `<span class="Title">Graceful Step</span>
                Attack the target, dealing <span class="Dark">Havoc DMG</span>.
                <div class="gap"></div>
                <span class="Title">Flickering Reverie</span>
                When in <span class="Highlight">Mirage</span>, <span class="Highlight">Resonance Skill</span> becomes <span class="Highlight">Flickering Reverie</span>, which is considered an <span class="Highlight">Echo Skill</span> when being cast. Attack the target, dealing <span class="Dark">Havoc DMG</span>, and send them into <span class="Highlight">Hazy Dream</span>.<br>
                Can be cast in mid-air.
                <div class="gap"></div>
                <span class="Title">Hazy Dream</span>
                Reduce the target's movement speed for 6.5s. When the target takes damage, <span class="Highlight">Jolt</span> is triggered once, removing <span class="Highlight">Hazy Dream</span> to deal <span class="Dark">Havoc DMG</span>, considered Basic Attack DMG.<br>
                Attacks by other Resonators in the team will not <span class="Highlight">Jolt</span> a target influenced by <span class="Highlight">Hazy Dream</span> and will remove the <span class="Highlight">Hazy Dream</span>.<br>
                Coordinated Attacks and damage from Utilities will not <span class="Highlight">Jolt</span> a target.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Graceful Step DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["37.02%*2", "40.06%*2", "43.10%*2", "47.35%*2", "50.38%*2", "53.87%*2", "58.73%*2", "63.59%*2", "68.44%*2", "73.60%*2"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Flickering Reverie DMG",
                    type: "Skill",
                    skillDetailNum: [{
                        values: ["98.70%", "106.80%", "114.89%", "126.22%", "134.32%", "143.62%", "156.57%", "169.52%", "182.47%", "196.23%"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Jolt DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["100.00%", "108.20%", "116.40%", "127.88%", "136.08%", "145.51%", "158.63%", "171.75%", "184.87%", "198.81%"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Graceful Step Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["6s", "6s", "6s", "6s", "6s", "6s", "6s", "6s", "6s", "6s"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Flickering Reverie Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s", "12s"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Graceful Step Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Flickering Reverie Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 7
                }
            ]
        },
        {
            skillId: 3,
            typeName: 'Resonance Liberation',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconKanteleila/SP_IconKanteleilaC1.webp",
            skillName: 'Beneath the Sea',
            skillDescription: `<span class="Title">Flowing Suffocation</span>
                Attack the target, dealing <span class="Dark">Havoc DMG</span> (considered Basic Attack DMG). Grant <span class="Highlight">Diffusion</span> to all Resonators in the team. Casting this skill is also considered as casting <span class="Highlight">Echo Skill</span>.<br>
                Can be cast in mid-air close to the ground.
                <div class="gap"></div>
                <span class="Title">Diffusion</span>
                When the Resonator on the field deals damage to a target, summon <span class="Highlight">Dreamweavers</span> to perform Coordinated Attack, dealing <span class="Dark">Havoc DMG</span> (considered as Basic Attack DMG).<br>
                - Within 3s after the Resonator deals damage, summon 1 <span class="Highlight">Dreamweaver</span> per second. This effect can be triggered once per second. Damage dealt by <span class="Highlight">Dreamweavers</span> cannot trigger this effect.<br>
                - Up to 1 <span class="Highlight">Dreamweaver</span> can be summoned each second, max 21 <span class="Highlight">Dreamweavers</span> in total.<br>
                - This effect lasts for 30s or until reaching the maximum number of <span class="Highlight">Dreamweavers</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Flowing Suffocation DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["189.13%", "204.64%", "220.15%", "241.86%", "257.37%", "275.20%", "300.01%", "324.83%", "349.64%", "376.00%"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Diffusion DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["7.31%*21", "7.91%*21", "8.51%*21", "9.35%*21", "9.95%*21", "10.64%*21", "11.60%*21", "12.56%*21", "13.52%*21", "14.54%*21"]
                    }],
                    index: 2
                },{
                    attributeName: "Flowing Suffocation Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s", "25s"]
                    }],
                    index: 3
                },{
                    attributeName: "Resonance Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["125", "125", "125", "125", "125", "125", "125", "125", "125", "125"]
                    }],
                    index: 4
                },{
                    attributeName: "Flowing Suffocation Concerto Regen",
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
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconKanteleila/SP_IconKanteleilaQTE.webp",
            skillName: 'Cruise',
            skillDescription: `<span class="Title">Ripple</span>
                Attack the target, dealing <span class="Dark">Havoc DMG</span>.<br>
                Press <span class="Highlight">Normal Attack</span> shortly after casting this skill to start the Basic Attack combo from <span class="Highlight">Basic Attack Stage 3</span>.
                <div class="gap"></div>
                <span class="Title">Tidal Surge</span>
                When in <span class="Highlight">Mirage</span>, <span class="Highlight">Intro Skill</span> becomes <span class="Highlight">Tidal Surge</span>, which triggers 3 coordinated attacks on hit, dealing <span class="Dark">Havoc DMG</span>. Casting <span class="Highlight">Tidal Surge</span> resets the combo of Basic Attack <span class="Highlight">Phantom Sting</span>.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Ripple DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["21.25%*4", "23.00%*4", "24.74%*4", "27.18%*4", "28.92%*4", "30.93%*4", "33.71%*4", "36.50%*4", "39.29%*4", "42.25%*4"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Tidal Surge DMG",
                    type: "",
                    skillDetailNum: [{
                        values: ["8.50%*3+59.50%", "9.20%*3+64.38%", "9.90%*3+69.26%", "10.87%*3+76.09%", "11.57%*3+80.97%", "12.37%*3+86.58%", "13.49%*3+94.39%", "14.60%*3+102.20%", "15.72%*3+110.00%", "16.90%*3+118.30%"]
                    }],
                    index: 2
                },{
                    attributeName: "Ripple Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 3
                },{
                    attributeName: "Tidal Surge Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["10", "10", "10", "10", "10", "10", "10", "10", "10", "10"]
                    }],
                    index: 4
                }
            ]
        },
        {
            skillId: 5,
            typeName: 'Outro Skill',
            skillName: 'Gentle Tentacles',
            skillDescription: `Amplify the incoming Resonator's Havoc DMG by {0} and Resonance Skill DMG by {1} for {2}s. Switching Resonators ends this effect.`,
            skillDetailNum: ["20", "25%", "14"],
            multipliers: []
        },
        {
            skillId: 6,
            typeName: 'Forte Circuit',
            skillImg: "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconKanteleila/SP_IconKanteleilaY.webp",
            skillName: 'Between Illusion and Reality',
            skillDescription: `<span class="Title">Mirage</span>
                - <span class="Highlight">Basic Attack</span> becomes Basic Attack <span class="Highlight">Phantom Sting</span>. Perform up to 3 consecutive attacks, dealing <span class="Dark">Havoc DMG</span>. Can be cast in mid-air. When cast mid-air, Basic Attack <span class="Highlight">Phantom Sting</span> consumes STA, and the combo does not reset when Cantarella is airborne.<br>
                - Hitting the target with Basic Attack <span class="Highlight">Phantom Sting</span> consumes 1 point of Trance to obtain 1 point of Shiver and heal all nearby Resonators in the team.<br>
                - The third stage of Basic Attack <span class="Highlight">Phantom Sting</span> triggers 3 Coordinated Attacks, dealing <span class="Dark">Havoc DMG</span>.<br>
                - <span class="Highlight">Mid-air Attack</span> becomes <span class="Highlight">Abysmal Vortex</span>. Press <span class="Highlight">Jump</span> to perform a Plunging Attack at the cost of STA, dealing <span class="Dark">Havoc DMG</span>.<br>
                - <span class="Highlight">Dodge Counter</span> becomes Dodge Counter <span class="Highlight">Shadowy Sweep</span>. Attack the target, dealing <span class="Dark">Havoc DMG</span>. Press <span class="Highlight">Normal Attack</span> right after casting the skill to cast Basic Attack <span class="Highlight">Phantom Sting Stage 2</span>.<br>
                - When Mid-air Attack <span class="Highlight">Abysmal Vortex</span> or Dodge Counter <span class="Highlight">Shadowy Sweep</span> hits a target, consume 1 point of Trance to obtain 1 point of Shiver and heal all nearby Resonators in the team.<br>
                - Mirage lasts for 8s.<br>
                - Mirage ends when Trance is depleted.
                <div class="gap"></div>
                <span class="Title">Forte Circuit - Perception Drain</span>
                If Cantarella has 3 points of Shiver when in <span class="Highlight">Mirage</span>, <span class="Highlight">Resonance Skill</span> becomes <span class="Highlight">Perception Drain</span>.<br>
                Consume all Shiver to attack the target, dealing <span class="Dark">Havoc DMG</span>, considered Basic Attack DMG. Send the target into <span class="Highlight">Hazy Dream</span> and heal all Resonators in the team.<br>
                Casting this skill is also considered as casting <span class="Highlight">Echo Skill</span>.<br>
                Can be cast in mid-air.
                <div class="gap"></div>
                <span class="Title">Abyssal Rebirth</span>
                After casting <span class="Highlight">Intro Skill</span>, Cantarella enters <span class="Highlight">Abyssal Rebirth</span>, which lasts for 25s and can be activated once every 25s. In the duration, for up to 6 times, when Resonators in the team cast Echo Skill, Cantarella recovers 6 points of Concerto Energy. Echoes with the same name can only trigger this effect once.<br>
                When in water, Cantarella's swimming speed increases and STA cost decreases.
                <div class="gap"></div>
                <span class="Title">Trance</span>
                - Cantarella can hold up to 5 points of Trance.<br>
                - Casting <span class="Highlight">Intro Skill</span> recovers 1 point of Trance.<br>
                - Hitting a target with <span class="Highlight">Basic Attack Stage 3</span> recovers 1 point of Trance.<br>
                - Casting Resonance Skill <span class="Highlight">Graceful Step</span> recovers 1 point of Trance.<br>
                - Casting Resonance Liberation <span class="Highlight">Flowing Suffocation</span> recovers 3 points of Trance.<br>
                - When in the water, recover 1 point of Trance every 5s.
                <div class="gap"></div>
                <span class="Title">Shiver</span>
                - Cantarella can hold up to 3 points of Shiver.<br>
                - Hitting the target with Basic Attack <span class="Highlight">Phantom Sting</span> recovers 1 point of Shiver.<br>
                - When Mid-air Attack <span class="Highlight">Abysmal Vortex</span> or Dodge Counter <span class="Highlight">Shadowy Sweep</span> hits a target, restore 1 point of Shiver.`,
            skillDetailNum: [],
            multipliers: [
                {
                    attributeName: "Phantom Sting Stage 1 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["17.77%*3", "19.23%*3", "20.69%*3", "22.73%*3", "24.18%*3", "25.86%*3", "28.19%*3", "30.52%*3", "32.85%*3", "35.33%*3"]
                    }],
                    index: 1
                },
                {
                    attributeName: "Phantom Sting Stage 2 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["31.65%*2", "34.25%*2", "36.85%*2", "40.48%*2", "43.07%*2", "46.06%*2", "50.21%*2", "54.36%*2", "58.52%*2", "62.93%*2"]
                    }],
                    index: 2
                },
                {
                    attributeName: "Phantom Sting Stage 3 DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["32.50%*4", "35.17%*4", "37.83%*4", "41.57%*4", "44.23%*4", "47.30%*4", "51.56%*4", "55.82%*4", "60.09%*4", "64.62%*4"]
                    }],
                    index: 3
                },
                {
                    attributeName: "Abysmal Vortex DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["21.12%+31.68%", "22.86%+34.28%", "24.59%+36.88%", "27.01%+40.52%", "28.75%+43.12%", "30.74%+46.10%", "33.51%+50.26%", "36.28%+54.42%", "39.05%+58.57%", "41.99%+62.99%"]
                    }],
                    index: 4
                },
                {
                    attributeName: "Perception Drain DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["336.00%*2", "363.55%*2", "391.10%*2", "429.67%*2", "457.22%*2", "488.91%*2", "532.99%*2", "577.07%*2", "621.15%*2", "667.99%*2"]
                    }],
                    index: 5
                },
                {
                    attributeName: "Shadowy Sweep DMG",
                    type: "Basic",
                    skillDetailNum: [{
                        values: ["37.77%*3", "40.87%*3", "43.97%*3", "48.30%*3", "51.40%*3", "54.96%*3", "59.91%*3", "64.87%*3", "69.82%*3", "75.09%*3"]
                    }],
                    index: 6
                },
                {
                    attributeName: "Healing by Consuming Trance",
                    type: "Healing",
                    skillDetailNum: [{
                        values: ["90+21.60% ATK", "100+22.46% ATK", "112+23.33% ATK", "126+24.62% ATK", "142+26.35% ATK", "157+28.08% ATK", "160+31.32% ATK", "163+34.99% ATK", "166+38.88% ATK", "171+45.36% ATK"]
                    }],
                    index: 7
                },
                {
                    attributeName: "Perception Drain Healing",
                    type: "Healing",
                    skillDetailNum: [{
                        values: ["375+90.00% ATK", "420+93.60% ATK", "468+97.20% ATK", "525+102.60% ATK", "592+109.80% ATK", "656+117.00% ATK", "667+130.50% ATK", "682+145.80% ATK", "693+162.00% ATK", "712+189.00% ATK"]
                    }],
                    index: 8
                },
                {
                    attributeName: "Mid-air Phantom Sting STA cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5"]
                    }],
                    index: 9
                },
                {
                    attributeName: "Abysmal Vortex STA Cost",
                    type: "",
                    skillDetailNum: [{
                        values: ["30", "30", "30", "30", "30", "30", "30", "30", "30", "30"]
                    }],
                    index: 10
                },
                {
                    attributeName: "Mirage Duration",
                    type: "",
                    skillDetailNum: [{
                        values: ["8s", "8s", "8s", "8s", "8s", "8s", "8s", "8s", "8s", "8s"]
                    }],
                    index: 11
                },
                {
                    attributeName: "Perception Drain Cooldown",
                    type: "",
                    skillDetailNum: [{
                        values: ["18s", "18s", "18s", "18s", "18s", "18s", "18s", "18s", "18s", "18s"]
                    }],
                    index: 12
                },
                {
                    attributeName: "Perception Drain Concerto Regen",
                    type: "",
                    skillDetailNum: [{
                        values: ["12", "12", "12", "12", "12", "12", "12", "12", "12", "12"]
                    }],
                    index: 13
                },
                
            ]
        },
        {
            skillId: 7,
            typeName: 'Inherent Skill',
            skillName: '"Cure"',
            skillDescription: `Increase Healing Bonus by {0}.`,
            skillDetailNum: ["20%"],
            multipliers: []
        },
        {
            skillId: 8,
            typeName: 'Inherent Skill',
            skillName: '"Poison"',
            skillDescription: `Casting <span class="Highlight">Echo Skill</span> gives {0} Havoc DMG Bonus for {1}s, stacking up to {2} times.`,
            skillDetailNum: ["6%", "10", "2"],
            multipliers: []
        }
    ],
    sequences: [
        {
            node: "Sequence Node 1",
            name: "Embrace the Endless Waves",
            description: `Casting <span class="Highlight">Resonance Skill</span> recovers 1 point of Trance. The DMG Multiplier of Resonance Skill <span class="Highlight">Graceful Step</span>, Resonance Skill <span class="Highlight">Flickering Reverie</span>, and Forte Circuit <span class="Highlight">Perception Drain</span> is increased by {0}. Immune to interruptions while casting <span class="Highlight">Perception Drain</span>.`,
            detailNum: ["50%"],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KanteleilaM1_UI.webp"
        },
        {
            node: "Sequence Node 2",
            name: "Surrender to the Illusive Reverie",
            description: `Resonance Liberation <span class="Highlight">Flowing Suffocation</span> now sends the target into <span class="Highlight">Hazy Dream</span>. The DMG Multiplier of <span class="Highlight">Jolt</span> triggered by Cantarella is increased by {0}.`,
            detailNum: ["245%"],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KanteleilaM2_UI.webp"
        },
        {
            node: "Sequence Node 3",
            name: "Gaze into the Abyss",
            description: `The DMG Multiplier of Resonance Liberation <span class="Highlight">Flowing Suffocation</span> is increased by {0}. After casting Resonance Liberation <span class="Highlight">Flowing Suffocation</span>, enter into <span class="Highlight">Mirage</span>. If already in <span class="Highlight">Mirage</span>, casting Resonance Liberation <span class="Highlight">Flowing Suffocation</span> does not activate the Mirage state again.`,
            detailNum: ["370%"],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KanteleilaM3_UI.webp"
        },
        {
            node: "Sequence Node 4",
            name: "Behold Your Own Soul",
            description: `When in <span class="Highlight">Mirage</span>, Healing Bonus is increased by {0}.`,
            detailNum: ["When in Mirage, Healing Bonus is increased by 25%."],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KanteleilaM4_UI.webp"
        },
        {
            node: "Sequence Node 5",
            name: "Rest in Your Reflection",
            description: `The maximum number of <span class="Highlight">Dreamweavers</span> Cantarella can summon through Resonance Liberation <span class="Highlight">Diffusion</span> is increased by {0}.`,
            detailNum: ["5"],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KanteleilaM5_UI.webp"
        },
        {
            node: "Sequence Node 6",
            name: "Fall, Fall... and Fall Deeper into the Dream",
            description: `Increase the DMG Multiplier of Basic Attack <span class="Highlight">Phantom Sting</span> by {0}. Casting Resonance Liberation <span class="Highlight">Flowing Suffocation</span> makes Cantarella's DMG ignore {1} of the target's DEF for {2}s.<br>
            For the first {3}s of <span class="Highlight">Hazy Dream</span>, when the target takes an instance of DMG that does not inflict <span class="Highlight">Hazy Dream</span>, <span class="Highlight">Jolt</span> will not be triggered on the target.`,
            detailNum: ["80%", "30%", "10", "1.2"],
            sequenceBuffType: "",
            sequenceBuffAtrribute: [""],
            sequenceBuff: [],
            itemImg: "https://api.hakush.in/ww/UI/UIResources/Common/Image/IconDevice/T_IconDevice_KanteleilaM6_UI.webp"
        },
    ]
}