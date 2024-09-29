export interface WWEchoes {
    name: string;
    id: number;
    img: string;
    echoSkill: string;
    bio: string;
    element: number;
    cost: number;
    sonataGroup: number[];
    skill1: string[];
    skill2: string[];
    skill3: string[];
    skill4: string[];
    skill5: string[];
    advantage? : string;
    recommendedChara?: string[];
};

export const WWEchoesJSON: WWEchoes[] = [
    {
      name: "Bell-Borne Geochelone",
      id: 900000401,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/BellBorneGeochelone.png",
      echoSkill:
        `Activate the protection of Bell-Borne Geochelone. Deal Glacio DMG based on {0} of the current character's DEF to nearby enemies, and obtain a Bell-Borne Shield that lasts for <b>15s</b> The Bell-Borne Shield provides <b>50.00%</b> DMG Reduction and <b>10.00%</b> DMG Boost for the current team members, and disappears after the current character is hit for <b>3</b> times.<br><br>
        CD: <b>20s</b>`,
      bio: "The giant turtle lurking in the cold pond, carrying the ancient bell, sleeps.\\n\\nOnce, a researcher tried to transcribe the inscriptions on the ancient bell on the turtle`s back, but accidentally disturbed the giant turtle`s peaceful dream—\\n\\nWhenever the giant turtle awakens, the long bell ringing echoes in the Gorges of Spirits.",
      element: 1,
      cost: 4,
      sonataGroup: [8, 7],
      skill1: [`91.20%`, `15`, `50%`, `10%`, `3`, `20`],
      skill2: [`104.88%`, `15`, `50%`, `10%`, `3`, `20`],
      skill3: [`118.56%`, `15`, `50%`, `10%`, `3`, `20`],
      skill4: [`132.24%`, `15`, `50%`, `10%`, `3`, `20`],
      skill5: [`145.92%`, `15`, `50%`, `10%`, `3`, `20`],
      advantage: `Bell-Borne Geochelone is great Echo choice for support characters.
      It provides a general shield effect that can transfer to the next character, while also providing DMG reduction and DMG Boost with it's skill.
      The skill lasts for 15 seconds but may end earlier after taking 3 hits`,
      recommendedChara: ["Verina", "Baizhi", "Taoqi"]
    },
    {
      name: `Tempest Mephis`,
      id: 900000402,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/TempestMephis.png",
      echoSkill:
        `Transform into Tempest Mephis to perform tail swing attacks followed by a claw attack. The lightning strike summoned by the tail swing deals {0} Electro DMG each time, while the claw attack deals {1} Electro DMG. After the claw hit, increase the current character's Electro DMG by <b>12.00%</b> and Heavy Attack DMG by <b>12.00%</b> for <b>15s</b>.<br><br>
        CD: <b>20s</b>`,
      bio: `A powerful Tacet Discord that appears at Central Plains. Capable of using Electro powers.`,
      element: 3,
      cost: 4,
      sonataGroup: [3],
      skill1: [`59.40%`, `158.40%`, `12%`, `12%`, `15`, `25`],
      skill2: [`73.66%`, `126.27%`, `12%`, `12%`, `15`, `25`],
      skill3: [`83.27%`, `142.74%`, `12%`, `12%`, `15`, `25`],
      skill4: [`92.87%`, `159.21%`, `12%`, `12%`, `15`, `25`],
      skill5: [`102.48%`, `175.68%`, `12%`, `12%`, `15`, `25`],
      advantage: `Tempest Mephis is suitable Echo for Electro element characters, as it can boost their Electro DMG and Heavy Attack DMG with it's skill and is fairly easier to use.`,
      recommendedChara: ["Calcharo", "Yinlin", "Yuanwu"]
    },
    {
      name: `Inferno Rider`,
      id: 900000403,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/InfernoRider.png",
      echoSkill:
        `Transform into Inferno Rider to launch up to 3 consecutive slashes in a row, each slash dealing  {0}, {1}, and {2} Fusion DMG respectively. After the final hit, increase the current character's Fusion DMG by <b>12.00%</b> and Basic Attack DMG by <b>12.00%</b> for <b>15s</b>. Long press the Echo Skill to transform into Inferno Rider and enter the Riding Mode. When exiting the Riding Mode, deal <b>12.00%</b> Fusion DMG to enemies in front.<br><br>
        CD: <b>20s</b>`,
      bio: `The Iron Cavalry, born in the Port City of Guixu, sets a trial of courage for the intruders with the unceasing flames.\\n\\nOver the long years, the truth of history gradually burns out, and the knights who once marched forward with a song of death gradually mutate in the word of mouth of humans, becoming the messengers of fear.\\n\\n\\"That is a knight who will turn fear into fuel and bring disaster.\\"\\n\\nHowever, among the idle talks of the indigenous people of the Port City of Guixu, another rumor quietly spread.\\n\\n\\"When you face that knight, please put away your fear, and return with the highest respect, and prove your courage to live towards death to him.\\"`,
      element: 2,
      cost: 4,
      sonataGroup: [2],
      skill1: [`151.50%`, `176.75%`, `176.75%`, `12%`, `12%`, `15`, `25`],
      skill2: [`174.23%`, `203.26%`, `203.26%`, `12%`, `12%`, `15`, `25`],
      skill3: [`196.95%`, `229.78%`, `229.78%`, `12%`, `12%`, `15`, `25`],
      skill4: [`219.68%`, `256.29%`, `256.29%`, `12%`, `12%`, `15`, `25`],
      skill5: [`242.40%`, `282.80%`, `282.80%`, `12%`, `12%`, `15`, `25`],
      advantage: `The Echo Inferno Rider provides a subsequent Fusion DMG boost after it's skill is used which benifits Fusion Element character's.
      The Echo can also be used by any character for it's quick move skill.`,
      recommendedChara: ["Chixia", "Encore", "Changli"]
    },
    {
      name: `Impermanenance Heron`,
      id: 900000404,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/ImpermanenceHeron.png",
      echoSkill:
        `Transform into Impermanence Heron to fly up and smack down, dealing {0} Havoc DMG. Long press to stay as Impermanence Heron and continuously spit flames, each attack dealing {1} Havoc DMG. Once the initial attack lands on any enemy, the current character regains <b>10</b> Resonance Energy. If the current character uses their Outro Skill within the next <b>15s</b>, the next character's damage dealt will be boosted by <b>12%</b> for <b>15s</b>.<br><br>
        CD: <b>20s</b>.`,
      bio: `The mimic giant bird that lurks in Desorock Highland, its three heads are responsible for feeding, attacking, and guarding, respectively.\\n\\n\\"The three heads, the left one is dull, the right one is bad, and the leading one is the most harmful.\\" So the nursery rhyme in Jinzhou sings.`,
      element: 6,
      cost: 4,
      sonataGroup: [8],
      skill1: [`194.10%`, `34.83%`, `25`],
      skill2: [`223.22%`, `40.05%`, `25`],
      skill3: [`252.33%`, `45.28%`, `25`],
      skill4: [`281.45%`, `50.50%`, `25`],
      skill5: [`310.56%`, `55.73%`, `25`],
      advantage: `Impermanenance Heron Echo is best suited for any sub-dps characters with it's ability to restore Resonance Energy and Boost the dmaage of next character.`,
      recommendedChara: ["Aalto", "Jianxin", "Mortefi", " Sanhua", "Taoqi", "Yangyang", "Yinlin", "Yuanwu"]
    },
    {
      name: `Lampylumen Myriad`,
      id: 900000405,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/LampylumenMyriad.png",
      echoSkill:
        `Transform into Lampylumen Myriad. Perform up to 3 consecutive attacks. Unleash a freezing shock by performing consecutive forward strikes, with the initial two strikes inflicting {0} and {1} Glacio DMG respectively, and the final strike dealing {2} Glacio DMG. Enemies will be frozen on hit. Each shock increases the current character's Glacio DMG by <b>4.00%</b> and Resonance Skill DMG dealt by <b>4.00%</b> for <b>15s</b>, stacking up to <b>3</b> times.<br><br>
        CD: <b>20s</b>.`,
      bio: `The Trapper that dwells in the cold caves, obsessed with collecting and imitating sounds, can mimic human speech through the trembling hum.\\n\\nThe Lampylumen Myriad uses sound as bait, freezing the lured prey in the deep cold. The hallucinations brought about by hypothermia and dying, will make humans spill out the dying words that contain huge emotional fluctuations.\\n\\nFor the Lampylumen Myriad, this is the supreme delicious frequency.`,
      element: 1,
      cost: 4,
      sonataGroup: [1],
      skill1: [`125.10%`, `125.10%`, `166.80%`, `4%`, `4%`, `15`, `25`],
      skill2: [`143.87%`, `143.87%`, `191.82%`, `4%`, `4%`, `15`, `25`],
      skill3: [`162.63%`, `162.63%`, `216.84%`, `4%`, `4%`, `15`, `25`],
      skill4: [`181.40%`, `181.40%`, `241.86%`, `4%`, `4%`, `15`, `25`],
      skill5: [`200.16%`, `200.16%`, `266.88%`, `4%`, `4%`, `15`, `25`],
      advantage: `Lampylumen Myriad Echo provides Glacio DMG and Resonance Skill DMG Boost making it suitable choice for Glacio Element character's`,
      recommendedChara: ["Lingyang", "Sanhua"]
    },
    {
      name: `Feilian Beringal`,
      id: 900000406,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/FeilianBeringal.png",
      echoSkill:
        `Transform into Feilian Beringal to perform a powerful kick. If the kick lands on an enemy, immediately perform a follow-up strike. The kick deals {0} Aero DMG, and the follow-up strike deals {1} Aero DMG. After the follow-up strike hits, the current character's Aero DMG increases by <b>12.00%</b>, and the Heavy Attack DMG increases by <b>12.00%</b> for <b>15s</b>.<br><br>
        CD: <b>20s</b>.`,
      bio: `The mimic giant ape dwelling in the Giant Banyan, protecting the territory of the ape group, shows strong hostility to invaders.\\n\\nTo avoid a head-on encounter with the Feilian Beringal, the Midnight Rangers and the Huaxu Academy once launched a special operation, putting a positioning bracelet on the Feilian Beringal to observe its movements in the forest.`,
      element: 4,
      cost: 4,
      sonataGroup: [4],
      skill1: [`144.90%`, `177.10%`, `12%`, `12%`, `15`, `25`],
      skill2: [`166.64%`, `203.67%`, `12%`, `12%`, `15`, `25`],
      skill3: [`188.37%`, `230.23%`, `12%`, `12%`, `15`, `25`],
      skill4: [`210.11%`, `256.80%`, `12%`, `12%`, `15`, `25`],
      skill5: [`231.84%`, `283.36%`, `12%`, `12%`, `15`, `25`],
      advantage: `The Echo Feilian Beringal give Boost to character's Aero DMG and Heavy Attack Damage.`,
      recommendedChara: ["Yangyabg", "Jianxin", "Jiyan"]
    },
    {
      name: `Mourning Aix`,
      id: 900000407,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/MourningAix.png",
      echoSkill:
        `Transform into Mourning Aix and perform 2 consecutive claw attacks, each attack dealing {0} and {1} Spectro DMG respectively. After the transformation, increase current character's Spectro DMG by <b>12.00%</b> and Resonance Liberation DMG by <b>12.00%</b> for <b>15s</b>.<br><br>
        CD: <b>20s</b>.`,
      bio: "The mimicking bird that dwells in Whining Aix`s Mire, its cry is like a mournful elegy.\\n\\nIt is said that the bird once had a mate, and their combined song was wonderfully pleasing to the ear. The old name of the pair is no longer known, but the rhythm of their song was recorded and preserved by humans.\\n\\nUntil the disappearance of one of the birds - the surviving bird mourns all day, and its mournful cry has earned it the name of Mourning Aix.\\n\\nThe Mourning Aix, having lost its mate, has become increasingly violent, no longer allowing anyone to step into the old love nest, but instead, it hovers in the high sky with its elegy, chasing the lost mirage in the clouds.",
      element: 5,
      cost: 4,
      sonataGroup: [5],
      skill1: [`98.40%`, `147.60%`, `12%`, `12%`, `15`, `25`],
      skill2: [`113.16%`, `169.74%`, `12%`, `12%`, `15`, `25`],
      skill3: [`127.92%`, `191.88%`, `12%`, `12%`, `15`, `25`],
      skill4: [`142.68%`, `214.02%`, `12%`, `12%`, `15`, `25`],
      skill5: [`157.44%`, `236.16%`, `12%`, `12%`, `15`, `25`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Crownless`,
      id: 900000408,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/Crownless.png",
      echoSkill:
        `Transform into Crownless and perform up to <b>4</b> consecutive attacks. The first <b>2</b> attacks deal {0} Havoc DMG each, the 3rd attack deals {1} Havoc DMG <b>2</b> times, and the 4th attack deals {2} Havoc DMG <b>3</b> times. After the transformation, increase current character's Havoc DMG by <b>12.00%</b> and Resonance Skill DMG by <b>12.00%</b> for <b>15s</b>.<br><br>
        CD: <b>20s</b>.`,
      bio: `The Whisperin Tacet Discord, born alongside the mysterious Tacet Field, emerged outside the Gorges of Spirits. It was detected that a large amount of human frequencies were fused within it, the excitement and desire for victory, the fear and resentment of death in battle... The human heart of battle, suppressed in the bones and blood, was manifested as a trial for itself. \\n\\nIt is the soldier dispatched by the enemy lurking in the dark, and also the harbinger of the endless war disaster.`,
      element: 6,
      cost: 4,
      sonataGroup: [6],
      skill1: [`83.80%`, `62.85%`, `41.90%`, `12%`, `12%`, `15`, `25`],
      skill2: [`96.37%`, `72.28%`, `48.19%`, `12%`, `12%`, `15`, `25`],
      skill3: [`108.94%`, `81.71%`, `54.47%`, `12%`, `12%`, `15`, `25`],
      skill4: [`121.51%`, `91.13%`, `60.76%`, `12%`, `12%`, `15`, `25`],
      skill5: [`134.08%`, `100.56%`, `67.04%`, `12%`, `12%`, `15`, `25`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Dreamless`,
      id: 900000409,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/Dreamless.png",
      echoSkill:
        `Transform into Dreamless and perform <b>6</b> consecutive attacks. The first <b>5</b> attacks deal {0} Havoc DMG each, and the last attack deal {1} Havoc DMG. The DMG of this Echo Skill is increased by <b>50%</b> during the first <b>5s</b> after character casts Resonance Liberation.<br><br>
        CD: <b>20s</b>.`,
      bio: `The Whisperin Tacet Discord, born alongside the mysterious Tacet Field, emerged outside the Gorges of Spirits. It was detected that a large amount of human frequencies were fused within it, the excitement and desire for victory, the fear and resentment of death in battle... The human heart of battle, suppressed in the bones and blood, was manifested as a trial for itself. \\n\\nIt is the soldier dispatched by the enemy lurking in the dark, and also the harbinger of the endless war disaster.`,
      element: 6,
      cost: 4,
      sonataGroup: [6],
      skill1: [`33.80%`, `169.00%`, `41.90%`, `12%`, `12%`, `15`, `25`],
      skill2: [`38.87%`, `194.35%`, `48.19%`, `12%`, `12%`, `15`, `25`],
      skill3: [`43.94%`, `219.70%`, `54.47%`, `12%`, `12%`, `15`, `25`],
      skill4: [`49.01%`, `245.05%`, `60.76%`, `12%`, `12%`, `15`, `25`],
      skill5: [`54.08%`, `270.40%`, `67.04%`, `12%`, `12%`, `15`, `25`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Mech Abomination`,
      id: 900000410,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/MechAbomination.png",
      echoSkill:
        `Strike the enemies in front, dealing {0} Electro DMG. Summon Mech Waste to attack enemies. Mech Waste deals {1} Electro DMG on-hit and explode after a while to deal {2} Electro DMG. After casting this Echo Skill, increase current character's ATK by <b>12.00%</b> for <b>15s</b>. Damage dealt by Mech Waste is considered Outro Skill DMG.<br><br>
        CD: <b>20s</b>.`,
      bio: `The Mech Abomination, born from the Court of Savantae laboratory, continues to evolve in the process of devouring the Echo.\\n\\n\\n\\nIt has been detected that the Mech Abomination has fused a small amount of human frequency, showing a demanding and persistent pursuit of perfection, and in this way, it has been improving its own composition, becoming increasingly huge.\\n\\n\\n\\nIts existence, like a subtle reflection, silently tells the human obsession and madness in the pursuit of the bottom of science.`,
      element: 3,
      cost: 4,
      sonataGroup: [9],
      skill1: [`30.40%`, `200%`, `100%`, `12%`, `15`, `25`],
      skill2: [`34.96%`, `230%`, `115%`, `12%`, `15`, `25`],
      skill3: [`39.52%`, `260`, `130%`, `12%`, `15`, `25`],
      skill4: [`44.08%`, `290%`, `145%`, `12%`, `15`, `25`],
      skill5: [`48.64%`, `320%`, `160%`, `12%`, `15`, `25`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Thundering Mephis`,
      id: 900000411,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/ThunderingMephis.png",
      echoSkill:
        `Transform into Thundering Mephis, engaging in a rapid assault of up to <b>6</b> strikes. The first 5 strikes deal {0} Electro DMG each, while the final strike inflicts {1} Electro DMG, with an additional {2} Electro DMG from the thunder. After the final hit, increase the current character's Electro DMG by <b>12.00%</b> and Resonance Liberation DMG by <b>12.00%</b> for <b>15s</b>.<br><br>
        CD: <b>20s</b>.`,
      bio: `The powerful Tacet Discord based in Desorock Highland, possessing the power of lightning, is regarded as one of the vanguards of the Crownless.`,
      element: 3,
      cost: 4,
      sonataGroup: [3],
      skill1: [`82.88%`, `118.40%`, `19.73%`, `12%`, `12%`, `15`, `25`],
      skill2: [`95.31%`, `136.16%`, `22.69%`, `12%`, `12%`, `15`, `25`],
      skill3: [`107.74%`, `153.92%`, `25.65%`, `12%`, `12%`, `15`, `25`],
      skill4: [`120.18%`, `171.68%`, `28.61%`, `12%`, `12%`, `15`, `25`],
      skill5: [`132.61%`, `189.44%`, `31.57%`, `12%`, `12%`, `15`, `25`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Stonewall Bracer`,
      id: 900000301,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/StonewallBracer.png",
      echoSkill:
        `Transform into Stonewall Bracer and charge forward, dealing {0} Physical DMG on-hit, then smash to deal {1} Physical DMG, and gain a shield of <b>10.00%</b> of current character's Max HP. Use the Echo skill again to exit the transformation state.<br><br>
        CD: <b>15s</b>.`,
      bio: `The Tacet Discord constructed by Stonewall, moves heavily and slowly, but with astonishing strength, likes to use throwing rocks as an offensive means.`,
      element: 0,
      cost: 3,
      sonataGroup: [7, 8],
      skill1: [`70.40%`, `105.60%`, `12%`, `12%`, `15`, `25`],
      skill2: [`80.96%`, `121.44%`, `12%`, `12%`, `15`, `25`],
      skill3: [`91.52%`, `137.28%`, `12%`, `12%`, `15`, `25`],
      skill4: [`102.08%`, `153.12%`, `12%`, `12%`, `15`, `25`],
      skill5: [`112.64%`, `168.96%`, `12%`, `12%`, `15`, `25`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Violet-Feathered Heron`,
      id: 900000302,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/VioletFeatheredHeron.png",
      echoSkill:
        `Transform into Violet-Feathered Heron and enter a Parry Stance. Counterattack when the Parry stance is over, dealing {0} Electro DMG. If attacked during Parry Stance, you can counterattack in advance and additionally recover <b>5</b> Concerto Energy.<br><br>
        CD: <b>15s</b>.`,
      bio: `The mimetic egret active in the mountains and by the water, with wide purple wings, only flies when the thunderclouds roll in.`,
      element: 3,
      cost: 3,
      sonataGroup: [2, 3],
      skill1: [`180%`, `5`, `15`],
      skill2: [`207%`, `5`, `15`],
      skill3: [`234%`, `5`, `15`],
      skill4: [`261%`, `5`, `15`],
      skill5: [`288%`, `5`, `15`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Cyan-Feathered Heron`,
      id: 900000303,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/CyanFeatheredHeron.png",
      echoSkill:
        `Transform into Cyan-Feathered Heron and charge at the enemies, dealing {0} Aero DMG; This Echo Skill interrupts enemy Special Skills upon dealing damage.<br><br>
        CD: <b>15s</b>.`,
      bio: `A mimic heron active in forests and along water banks, with broad cyan wings, only takes flight when strong winds blow.`,
      element: 4,
      cost: 3,
      sonataGroup: [4, 5],
      skill1: [`148%`, `15`],
      skill2: [`170.2%`, `15`],
      skill3: [`192.4%`, `15`],
      skill4: [`214.6%`, `15`],
      skill5: [`236.8%`, `15`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Flautist`,
      id: 900000304,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/Flautist.png",
      echoSkill:
        `Transform into Flautist, continuously emitting Electro lasers, dealing {0} Electro DMG for a total of <b>10</b> times. Gain <b>1</b> Concerto Energy every time a hit lands.<br><br>
        CD: <b>15s</b>.`,
      bio: `A humanoid Tacet Discord that uses Forte with musical instruments, imitating the human behavior of signaling with whistles, but the rhythm of its playing is mocking and harsh, like a death knell.`,
      element: 3,
      cost: 3,
      sonataGroup: [9, 3],
      skill1: [`33.3%`, `1`, `15`],
      skill2: [`38.3%`, `1`, `15`],
      skill3: [`43.2%`, `1`, `15`],
      skill4: [`48.2%`, `1`, `15`],
      skill5: [`53.2%`, `1`, `15`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Tambourinist`,
      id: 900000305,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/Tambourinist.png",
      echoSkill:
        `Summon a Tambourinist that periodically emits Melodies of Annihilation. Friendly units hit with Melodies of Annihilation deal an extra Havoc DMG of {0} with their attacks, up to <b>10</b> times. <br><br>
        CD: <b>15s</b>.`,
      bio: `A humanoid Tacet Discord that uses Forte with musical instruments, imitating the human behavior of ringing bells in prayer, but what it chants is not a blessing, but a curse.`,
      element: 6,
      cost: 3,
      sonataGroup: [1, 6],
      skill1: [`9%`, `15`],
      skill2: [`10.35%`, `15`],
      skill3: [`11.70%`, `15`],
      skill4: [`13.05%`, `15`],
      skill5: [`14.40%`, `15`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Rocksteady Guardian`,
      id: 900000306,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/RocksteadyGuardian.png",
      echoSkill:
        `Transform into Rocksteady Guardian and enter a Parry State. Upon being attacked, deal Spectro DMG equal to {0} of the current character's Max HP, and perform a follow-up attack that deals Spectro DMG equal to {1} of the current character's Max HP. Use the Echo skill again to exit the transformation.<br><br>
        If the attack received is a Special Skill attack, interrupt the enemy's Special Skill and perform a two-stage follow-up attack, each inflicting Spectro DMG equal to {2} of the current character's max HP. These follow-up attacks simultaneously launch three ground-breaking waves, each inflicting Spectro DMG equal to {3} of the current character's Max HP.<br>
        CD: <b>15s</b>.`,
      bio: `Binomial name “Rocksteady Guardian", a member of the genus Devorsonidum. If approached, it might violently bump and slam players.`,
      element: 5,
      cost: 3,
      sonataGroup: [7, 5],
      skill1: [`5.18%`, `5.18%`, `3.45%`, `2.87%`, `15`],
      skill2: [`5.96%`, `5.96%`, `3.97%`, `3.30%`, `15`],
      skill3: [`6.73%`, `6.73%`, `4.49%`, `3.73%`, `15`],
      skill4: [`7.51%`, `7.51%`, `5.00%`, `4.16%`, `15`],
      skill5: [`8.29%`, `8.29%`, `5.52%`, `4.59%`, `15`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Chasm Guardian`,
      id: 900000307,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/ChasmGuardian.png",
      echoSkill:
        `Transform into Chasm Guardian to perform a Leap Strike that deals {0} Havoc DMG on hit. Current character loses <b>10.00%</b> HP after the hit lands. Periodically restore current character's HP after 5s for up to <b>10.00%</b> of their Max HP.<br><br>
        CD: <b>15s</b>.`,
      bio: `Binomial name \\"Chasm Guardian\\", a member of the genus Devorsonidum. Its appearance shows signs of evolution towards humanoid shapes. It can utilize one of its upper limbs to bash, smash or slash. A major fighter TD.`,
      element: 6,
      cost: 3,
      sonataGroup: [9, 7],
      skill1: [`171%`, `10%`, `5`, `10%`, `15`],
      skill2: [`196.65%`, `10%`, `5`, `10%`, `15`],
      skill3: [`222.30%`, `10%`, `5`, `10%`, `15`],
      skill4: [`247.95%`, `10%`, `5`, `10%`, `15`],
      skill5: [`273.60%`, `10%`, `5`, `10%`, `15`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Geohide Saurian`,
      id: 900000308,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/GeohideSaurian.png",
      echoSkill:
        `Summon a Viridblaze Saurian to continuously spit fire, dealing {0} Fusion DMG <b>10</b> times.<br><br>
        CD: <b>15s</b>.`,
      bio: `Binomial name \\"Aigialosauridae lapis\\", a carnivorous, gregarious Mutant Organism. Adults can be as high as up to 1.5 times of human adult. Regions of bare rocks are the haunt of this. Geohide Saurians are ferocious animals which would attack any others approaching their territory. So access to them in daytime is dangerous. However, due the value of their scales and teeth, some would take the risk and hunt them on midnights, when their physical capabilities are limited due to lower temperature.`,
      element: 2,
      cost: 3,
      sonataGroup: [8, 2],
      skill1: [`10.70%`, `25`],
      skill2: [`12.31%`, `25`],
      skill3: [`13.91%`, `25`],
      skill4: [`15.52%`, `25`],
      skill5: [`17.12%`, `25`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Roseshroom`,
      id: 900000309,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/Roseshroom.png",
      echoSkill:
        `Summon a Roseshroom that fires a laser, dealing {1} Havoc DMG up to <b>3</b> times.<br><br>
        CD: <b>15s</b>.`,
      bio: `Binomial name \\"Agaricus mimicus\\". A shade-tolerant, hygrophilous plant that tends to gather in groups in wet caves rich in Tacetite. Please be noted that Roseshroom does not have any intelligence as a plant. All its attacking attempts are reactive.`,
      element: 6,
      cost: 3,
      sonataGroup: [1, 6],
      skill1: [`3`, `35.67%`, `15`],
      skill2: [`3`, `41.02%`, `15`],
      skill3: [`3`, `46.37%`, `15`],
      skill4: [`3`, `51.72%`, `15`],
      skill5: [`3`, `57.07%`, `15`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Havoc Dreadmane`,
      id: 900000310,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/HavocDreadmane.png",
      echoSkill:
        `Transform into Havoc Dreadmane to perform tail strikes up to <b>2</b> times. Each strike deals {0} Havoc DMG. An additional strike will be performed on hit, dealing {1} Havoc DMG.<br><br>
        CD: <b>15s</b>.`,
      bio: `Scientifically named \\"Chrysocyon brachyurus terreo\\". Adult Dreadmanes are larger in size, nocturnal, and gregarious, with strong social and aggressive characteristics. Its dense fur display a certain degree of immunity to Havoc Energy. Dreadmanes are of special cultural significance in New Federation. Myths would depict that two Dreadmanes, one black, one white played on the wilderness, and the traces the white one left on the grassland was the first soils of New Federation.`,
      element: 6,
      cost: 3,
      sonataGroup: [2, 6],
      skill1: [`72.90%`, `48.60%`, `25`],
      skill2: [`83.84%`, `55.89%`, `25`],
      skill3: [`94.77%`, `63.18%`, `25`],
      skill4: [`105.71%`, `70.47%`, `25`],
      skill5: [`116.64%`, `77.76%`, `25`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Hoochief`,
      id: 900000311,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/Hoochief.png",
      echoSkill:
        `Use the Echo skill, transform into Hoochief Cyclone and attack with a palm, causing {0} Aero DMG.<br><br>
        CD: <b>15s</b>.`,
      bio: `Binomial name \\"Hoolock vexo\\". Sightings of this are only located in the Dim Forest. The Mutant Organism with the highest level of intelligence found in Huanglong. According to existing data, The colony of Hoochief might have developed a complicated social hierarchy similar to primitive human society. With its benefit, Hoochiefs have become the overlord of Dim Forest, proactively assaulting, raiding humans that enter the place.`,
      element: 4,
      cost: 3,
      sonataGroup: [7, 4],
      skill1: [`149%`, `15`],
      skill2: [`178.8%`, `15`],
      skill3: [`208.6%`, `15`],
      skill4: [`238.4%`, `15`],
      skill5: [`268.2%`, `15`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Spearback`,
      id: 900000312,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/Spearback.png",
      echoSkill:
        `Summon a Spearback to perform 5 consecutive attacks. The first <b>4</b> attacks deal {0} Physical DMG, and the last deals {1} Physical DMG.<br><br>
        CD: <b>15s</b>.`,
      bio: `Scientifically named \\"Ursus spelaeus sagispina”. Mainly found inhabiting the Huanglong forests. This Mutant Organism has poor eyesight and relies mainly on hearing for hunting. Its head is covered in hard Tacetite strutures that can endure even Resonator weapons. A feasible solution to confrontation is to silently and cautiously leave its hearing range.`,
      element: 0,
      cost: 3,
      sonataGroup: [9, 8],
      skill1: [`18.73%`, `32.10%`, `15`],
      skill2: [`21.53%`, `36.92%`, `15`],
      skill3: [`24.34%`, `41.73%`, `15`],
      skill4: [`27.15%`, `46.55%`, `15`],
      skill5: [`29.96%`, `51.36%`, `15`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Chaserazor`,
      id: 900000313,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/Chaserazor.png",
      echoSkill:
        `Transform into Carapace to perform a spinning attack that deals {0} Aero DMG, followed by a slash that deals {1} Aero DMG.<br><br>
        CD: <b>15s</b>.`,
      bio: `Part of the artificial species, only found in the Dim Forest. This Tacet Discord usually uses abandoned vehicles as a host shell, and moves quickly. Once it has set eyes on its prey, it will never give up, hence the name “Chaserazor\\".`,
      element: 4,
      cost: 3,
      sonataGroup: [8, 4],
      skill1: [`70.00%`, `105.00%`, `15`],
      skill2: [`80.50%`, `120.75%`, `15`],
      skill3: [`91.00%`, `136.50%`, `15`],
      skill4: [`101.50%`, `152.25%`, `15`],
      skill5: [`112.00%`, `168.00%`, `15`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Autopuppet Scout`,
      id: 900000314,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/AutopuppetScout.png",
      echoSkill:
        `Transform into Autopuppet Scout, dealing {0} Glacio DMG to the surroundings, and generate up to <b>3</b> Ice Walls to block off the enemies.<br><br>
        CD: <b>15s</b>.`,
      bio: `The Tacet Discord that parasitizes the Autopuppet Scout disguises itself with a rusty and damaged armor shell. It takes \\"patrol\\" as its duty, monitors all the movements in the city, and eliminates all potential threats.`,
      element: 1,
      cost: 3,
      sonataGroup: [5, 1],
      skill1: [`170%`, `25`],
      skill2: [`195.5%`, `25`],
      skill3: [`221%`, `25`],
      skill4: [`246.5%`, `25`],
      skill5: [`272%`, `25`],
      advantage: ``,
      recommendedChara: []
    },
    {
      name: `Vanguard Junrock`,
      id: 900000101,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/VanguardJunrock.png",
      echoSkill:
        `Summon a Vanguard Junrock that charges forward, dealing {0} Physical DMG to enemies in its path.<br><br>
        CD: <b>8s</b>.`,
      bio: `Binomially named \\"Resinacrustidum lapis\\", it is a member of the Resinacrustidum species. This Tacet Discord is often found active in packs within mines and mountainous areas, along with Fission Junrocks. Less dangerous.`,
      element: 0,
      cost: 1,
      sonataGroup: [7, 3, 9],
      skill1: [`20.00%+40`, `15`],
      skill2: [`23.00%+46`, `15`],
      skill3: [`26.00%+52`, `15`],
      skill4: [`29.00%+58`, `15`],
      skill5: [`32.00%+64`, `15`]
    },
    {
      name: `Fission Junrock`,
      id: 900000102,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/FissionJunrock.png",
      echoSkill:
        `Summon a Fission Junrock. Generate a Resonance Effect that restores <b>2%</b> HP for friendly units each time. If not in combat, you can pick up minerals or plants nearby.<br><br>
        CD: <b>15s</b>.`,
      bio: `Binomially named \\"Resinacrustidum lapis\\", part of the Resinacrustidum species. This Tacet Discord is often found active, along with Vanguard Junrocks. What makes the two species different is this has more Tacetite on its shell, thus is more energetically active and unstable. External impacts might trigger explosions. Cases of this being used as throwing weapons by other TDs are documented.`,
      element: 0,
      cost: 1,
      sonataGroup: [8, 3, 7],
      skill1: [`2%`, `15`],
      skill2: [`2%`, `15`],
      skill3: [`2%`, `15`],
      skill4: [`2%`, `15`],
      skill5: [`2%`, `15`]
    },
    {
      name: `Electro Predator`,
      id: 900000103,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/ElectroPredator.png",
      echoSkill:
        `Summon an Electro Predator to shoot the enemy <b>5</b>times. The first <b>4</b> shots deals {0} Electro DMG, and the last deals {1} Electro DMG.<br><br>
        CD: <b>8s</b>`,
      bio: `Binomial name \\"Electro Predator\\", Devourer specis. The left upper limb of the Impulse Predators has evolved into a bow and arrow, which can gather conductive energy to shoot at longer distances.`,
      element: 3,
      cost: 1,
      sonataGroup: [2, 3],
      skill1: [`10.80%`, `28.80%`, `8`],
      skill2: [`12.42%`, `33.12%`, `8`],
      skill3: [`14.04%`, `37.44%`, `8`],
      skill4: [`15.66%`, `41.76%`, `8`],
      skill5: [`17.28%`, `46.08%`, `8`]
    },
    {
      name: `Glacio Predator`,
      id: 900000104,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/GlacioPredator.png",
      echoSkill:
        `Summon a Glacio Predator that throws an ice spear, dealing {0} Glacio DMG on hit. Deal {1} Glacio DMG up to <b>10</b> times during the charging time, and {2} Glacio DMG when the spear explodes.<br><br>
        CD: <b>8s</b>.`,
      bio: `Binomial name \\"Glacio Predator”. Devourer specis. A body structure similar to a human \\"cape” has evolved on it, which is presumed to be able to gather Glacio energy more quickly to form a \\"projectile” for long-range attacks.`,
      element: 1,
      cost: 1,
      sonataGroup: [5, 1],
      skill1: [`28.8%`, `2.88%`, `14.40%`, `8`],
      skill2: [`33.12%`, `3.31%`, `16.56%`, `8`],
      skill3: [`37.44%`, `3.74%`, `18.72%`, `8`],
      skill4: [`41.76%`, `4.18%`, `20.88%`, `8`],
      skill5: [`46.08%`, `4.61%`, `23.04%`, `8`]
    },
    {
      name: `Aero Predator`,
      id: 900000105,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/AeroPredator.png",
      echoSkill:
        `Summon an Aero Predator that throws a dart forward. The dart will bounce between enemies up to three times, dealing {0} Aero DMG each time it hits.<br><br>
        CD: <b>8s</b>.`,
      bio: `Binomial name \\"Devorsonidum spiritalis\\", a member of the genus Devorsonidum. Different from other “Predator” TDs, which condense energy for attacks, the Aero Predator\`s throwing weapon is part of its body structure, and can be recovered using its own Aero energy after being thrown.`,
      element: 4,
      cost: 1,
      sonataGroup: [3, 4],
      skill1: [`18%`, `8`],
      skill2: [`20.70%`, `8`],
      skill3: [`23.40%`, `8`],
      skill4: [`26.10%`, `8`],
      skill5: [`28.80%`, `8`]
    },
    {
      name: `Fusion Warrior`,
      id: 900000106,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/FusionWarrior.png",
      echoSkill:
        `Transform into Fusion Warrior to perform a Counterattack. If the Counterattack is successful, the cooldown time of this skill will be reduced by <b>70.00%</b>, and {1} Fusion DMG will be dealt.<br><br>
        CD: <b>15s</b>`,
      bio: `Binomial name \\"Devorsonidum fusio\\", a member of the genus Devorsonidum. Its two upper limbs resemble long and short spears respectively, and can attack by stabbing and chopping. Moderately dangerous. While it attacks, this TD is observed to perform actions that looks like saluting, presumed to be a clumsy imitation of human swordsman.`,
      element: 2,
      cost: 1,
      sonataGroup: [4, 3, 2],
      skill1: [`70%`, `180%`, `15`],
      skill2: [`70%`, `207%`, `15`],
      skill3: [`70%`, `234%`, `15`],
      skill4: [`70%`, `261%`, `15`],
      skill5: [`70%`, `288%`, `15`]
    },
    {
      name: `Havoc Warrior`,
      id: 900000107,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/HavocWarrior.png",
      echoSkill:
        `Transform into Havoc Warrior to attack up to <b>3</b> times, dealing {0} Havoc DMG each time.<br><br>
        CD: <b>15s</b>`,
      bio: `Binomial name \\"Tambourinist\\", a member of the genus Disorder. Its appearance resembles that of a human, with a strong desire to attack. Dangerous to a degree. This TD has body parts that look like “cloth”, presumed to be structures evolved to mimic human dress, though its functions remain unclear.`,
      element: 6,
      cost: 1,
      sonataGroup: [5, 6],
      skill1: [`107.33%`, `15`],
      skill2: [`123.43%`, `15`],
      skill3: [`139.53%`, `15`],
      skill4: [`155.63%`, `15`],
      skill5: [`171.73%`, `15`]
    },
    {
      name: `Snip Snap`,
      id: 900000108,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/SnipSnap.png",
      echoSkill:
        `Summon a Snip Snap that throws fireballs at the enemy, dealing {0} Fusion DMG on-hit.<br><br>
        CD: <b>8s</b>`,
      bio: `Binomial name \\"Strepoplasmidum fusio\\", a member of the genus Strepoplasmidum. Does not possess any intelligence. It has a plier-shape body, which is why it is occasionally called the \\"plier beast\\".`,
      element: 2,
      cost: 1,
      sonataGroup: [9, 7, 2],
      skill1: [`20%+40`, `8`],
      skill2: [`23%+46`, `8`],
      skill3: [`26%+52`, `8`],
      skill4: [`29%+58`, `8`],
      skill5: [`32%+64`, `8`]
    },
    {
      name: `Zig Zag`,
      id: 900000109,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/ZigZag.png",
      echoSkill:
        `Summon a Zig Zag that denotates Spectro energy, dealing {0} Spectro DMG and creating a Stagnation Zone that lasts <b>1.8s</b>.<br><br>
        CD: <b>15s</b>.`,
      bio: `Scientifically named the \\"Strepoplasmidum spectrum\\", a member of the genus Strepoplasmidum. Gained its name due to the lack of intelligence and simple behavioral logic.`,
      element: 5,
      cost: 1,
      sonataGroup: [8, 9, 5],
      skill1: [`30%+60`, `8`],
      skill2: [`34.50%+69`, `8`],
      skill3: [`39%+78`, `8`],
      skill4: [`43.50%+87`, `8`],
      skill5: [`48%+96 `, `8`]
    },
    {
      name: `Whiff Whaff`,
      id: 900000110,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/WhiffWhaff.png",
      echoSkill:
        `Summon a Whiff Whaff that triggers an air explosion, dealing {0} Aero DMG and produce a Low-pressure Zone. The Low-pressure Zone continuously pulls enemies nearby towards the center for <b>2s</b>, dealing {2} Aero DMG up to <b>6</b> times.<br><br>
        CD: <b>15s</b>.`,
      bio: `Binomial name \\"Strepoplasmidum spiritalis\\", a member of the genus Strepoplasmidum. Possesses no intelligence. The Aero energy mass gathered in its \\"head\\" emits sound similar to that of a gust of wind, hence the name \\"Whiff Whaff\\".`,
      element: 4,
      cost: 1,
      sonataGroup: [7, 8, 4],
      skill1: [`32.10%`, `2`, `12.48%`, `15`],
      skill2: [`36.92%`, `2`, `14.35%`, `15`],
      skill3: [`41.73%`, `2`, `16.22%`, `15`],
      skill4: [`46.55%`, `2`, `18.10%`, `15`],
      skill5: [`51.36%`, `2`, `19.97%`, `15`]
    },
    {
      name: `Tick Tack`,
      id: 900000111,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/TickTack.png",
      echoSkill:
        `Summon a Tick Tack that charges and bites the enemy. The charge from Tick Tack will deal {0} Havoc DMG to the enemy, and the bite will deal {1} Havoc DMG to the enemy. Reduces enemy Vibration Strength by up to <b>5.00%</b> during <b>5s</b>.<br><br>
        CD: <b>15s</b>.`,
      bio: `Binomial name \\"Strepoplasmidum ruptura\\", a member of the genus Strepoplasmidum. Can use Havoc energy in simple ways to attack. Possesses no intelligence.`,
      element: 6,
      cost: 1,
      sonataGroup: [9, 7, 6],
      skill1: [`42.80%`, `64.20%`, `5`, `5%`, `15`],
      skill2: [`49.22%`, `73.83%`, `5`, `5%`, `15`],
      skill3: [`55.64%`, `83.46%`, `5`, `5%`, `15`],
      skill4: [`62.06%`, `93.09%`, `5`, `5%`, `15`],
      skill5: [`68.48%`, `102.72%`, `5`, `5%`, `15`]
    },
    {
      name: `Gulpuff`,
      id: 900000112,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/Gulpuff.png",
      echoSkill:
        `Summon a Gulpuff that blows bubbles <b>5</b> times, each time dealing {0} Glacio DMG.<br><br>
        CD: <b>8s</b>.`,
      bio: `Binomial name \\"Tetraodon lateo\\", a Mutant Organism of the genus Tetraodon. Widely present in all fresh waters. A duckweed-shaped leaf on the top of its head serves as its cover to help its surprise strike on preys.`,
      element: 1,
      cost: 1,
      sonataGroup: [5, 1],
      skill1: [`5`, `14.40%`, `8`],
      skill2: [`5`, `16.56%`, `8`],
      skill3: [`5`, `18.72%`, `8`],
      skill4: [`5`, `20.88%`, `8`],
      skill5: [`5`, `23.04%`, `8`]
    },
    {
      name: `Chirpuff`,
      id: 900000113,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/Chirpuff.png",
      echoSkill:
        `Summon a Chirpuff that self-inflates and blasts a powerful gust of wind forward <b>3</b> times. Each blast inflicts {0} Aero DMG and pushes enemies backwards.<br><br>
        CD: <b>8s</b>.`,
      bio: `Binomially named \\"Tetraodon spiritalis\\", Chirpuff is a Mutant Organism of the genus Tetraodon. Theories suggest it is a relative to the Gurglepuff, but the ecological niche of the two are slightly different. Chirpuffs mostly float in the midair and prey on various insects. Fishermen would take advantage of this habit to capture them with fake bait. idioms in Huanglong compare Chirpuff to someone who has been taken advantage of.`,
      element: 4,
      cost: 1,
      sonataGroup: [6, 4],
      skill1: [`3`, `24%`, `8`],
      skill2: [`3`, `27.60%`, `8`],
      skill3: [`3`, `31.20%`, `8`],
      skill4: [`3`, `34.80%`, `8`],
      skill5: [`3`, `38.40%`, `8`]
    },
    {
      name: `Glacio Prism`,
      id: 900000114,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/GlacioPrism.png",
      echoSkill:
        `Summon a Glacio Prism that continuously fires three crystal shards, each dealing {0} Glacio DMG.<br><br>
        D: <b>8s</b>.`,
      bio: `Binomial name \\"Resinacrustidum convenire\\", a member of the genus Resinacrustidum. A less dangerous Tacet Discord widely found across the world. The material that makes its shell varies based on the vein it inhabits. Proficient miners can tell the location and quality of a vein by this characteristic.`,
      element: 1,
      cost: 1,
      sonataGroup: [6, 8, 1],
      skill1: [`24.00%`, `8`],
      skill2: [`27.60%`, `8`],
      skill3: [`31.20%`, `8`],
      skill4: [`34.80%`, `8`],
      skill5: [`38.40%`, `8`]
    },
    {
      name: `Fusion Prism`,
      id: 900000115,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/FusionPrism.png",
      echoSkill:
        `Summon a Fusion Prism to fire a crystal shard, dealing {0} Fusion DMG.<br><br>
        CD: <b>8s</b>.`,
      bio: `Binomial name \\"Resinacrustidum convenire\\", a member of the genus Resinacrustidum. A less dangerous Tacet Discord widely found across the world. The material that makes its shell varies based on the vein it inhabits. Proficient miners can tell the location and quality of a vein by this characteristic.`,
      element: 2,
      cost: 1,
      sonataGroup: [1, 9, 2],
      skill1: [`20%+40`, `8`],
      skill2: [`23%+46`, `8`],
      skill3: [`26%+52`, `8`],
      skill4: [`29%+58`, `8`],
      skill5: [`32%+64`, `8`]
    },
    {
      name: `Spectro Prism`,
      id: 900000116,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/SpectroPrism.png",
      echoSkill:
        `Summon a Spectro Prism to emit a laser that hits the enemy up to <b>8</b> times, dealing {1} Spectro DMG each time.<br><br>
        CD: <b>8s</b>.`,
      bio: `Binomial name \\"Resinacrustidum convenire\\", a member of the genus Resinacrustidum. A less dangerous Tacet Discord widely found across the world. The material that makes its shell varies based on the vein it inhabits. Proficient miners can tell the location and quality of a vein by this characteristic.`,
      element: 5,
      cost: 1,
      sonataGroup: [2, 3, 5],
      skill1: [`8`, `9.00%`, `8`],
      skill2: [`8`, `10.35%`, `8`],
      skill3: [`8`, `11.70%`, `8`],
      skill4: [`8`, `13.05%`, `8`],
      skill5: [`8`, `14.40%`, `8`]
    },
    {
      name: `Havoc Prism`,
      id: 900000117,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/HavocPrism.png",
      echoSkill:
        `Summon a Havoc Prism to fire five crystal shards, each dealing {0} Havoc DMG.<br><br>
        CD: <b>8s</b>.`,
      bio: `Binomial name \\"Resinacrustidum convenire\\", a member of the genus Resinacrustidum. A less dangerous Tacet Discord widely found across the world. The material that makes its shell varies based on the vein it inhabits. Proficient miners can tell the location and quality of a vein by this characteristic.`,
      element: 6,
      cost: 1,
      sonataGroup: [3, 5, 6],
      skill1: [`14.40%`, `8`],
      skill2: [`16.56%`, `8`],
      skill3: [`18.72%`, `8`],
      skill4: [`20.88%`, `8`],
      skill5: [`23.04%`, `8`]
    },
    {
      name: `Cruisewing`,
      id: 900000118,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/Cruisewing.png",
      echoSkill:
        `Summon a Cruisewing that restores HP for all current team characters by {0} of their Max HPs plus an additional <b>80</b> points of HP, up to <b>4</b> times.<br><br>
        CD: <b>8s</b>.`,
      bio: `Binomial name \\"Acanthacorydalis squapenna”. Diurnal animal. Commonly found on waterfronts in warm and humid areas throughout Huanglong. Although slightly aggressive, it is easily preyed upon by Geohide Saurians and other predators, and are thus not very dangerous. Judging from its scientific name, it is a member of the Corydalidae family rather than a butterfly.`,
      element: 5,
      cost: 1,
      sonataGroup: [7, 8, 5],
      skill1: [`1%`, `80`, `8`],
      skill2: [`1.20%`, `80`, `8`],
      skill3: [`1.40%`, `80`, `8`],
      skill4: [`1.60%`, `80`, `8`],
      skill5: [`1.80%`, `80`, `8`]
    },
    {
      name: `Sabyr Boar`,
      id: 900000119,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/SabyrBoar.png",
      echoSkill:
        `Summon a Sabyr Boar to headbutt the enemy into the air, dealing {0} Physical DMG.<br><br>
        CD: <b>8s</b>.`,
      bio: `Binomial name \\"Babyrousa fractden”. An omnivore Mutant Organism commonly seen. Although its diet is mainly of vegetative origin, its temperament is not that of an ordinary herbivores. Sensitive and irritable, the whole population will charge twoards intruders of its colony on the instant the intrusion is found. Hunters often take advantage of this habit to trap them. A Huanglong idiom also compares “Sabyr Boar’s charge” to reckless people.`,
      element: 0,
      cost: 1,
      sonataGroup: [8, 4, 1],
      skill1: [`20.00%+40`, `8`],
      skill2: [`23.00%+46`, `8`],
      skill3: [`26.00%+52`, `8`],
      skill4: [`29.00%+58`, `8`],
      skill5: [`32.00%+64`, `8`]
    },
    {
      name: `Excarat`,
      id: 900000120,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/Excarat.png",
      echoSkill:
        `Transform into an Excarat and tunnel underground to advance. In this state, you have the ability to change your direction and are immune to damage.<br><br>
        CD: <b>2s</b>.`,
      bio: `Binomial name \\"Myospalax actinoaftia\\", a commonly seen rodent Mutant Organism mostly found in grasslands or temperate forests and mountains. It has a habit of storing food in accomadation. Human who encounter accidents in the wild can find emergency nutrition in an Excarat’s cave.`,
      element: 6,
      cost: 1,
      sonataGroup: [1, 6],
      skill1: [`8`],
      skill2: [`8`],
      skill3: [`8`],
      skill4: [`8`],
      skill5: [`8`]
    },
    {
      name: `Young Geohide Saurian`,
      id: 900000121,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/YoungGeohideSaurian.png",
      echoSkill:
        `Transform into Baby Viridblaze Saurian to rest in place, and slowly restore HP.<br><br>
        CD: <b>2s</b>.`,
      bio: `The species does not have the habit of caring for their younglings, thus young lizards can only survive by imitating the hunting behavior of the adults, scavenging the remains of their food and, if necessary, preying on fellow young Geohide Saurians.`,
      element: 2,
      cost: 1,
      sonataGroup: [9, 3, 2],
      skill1: [`8`],
      skill2: [`8`],
      skill3: [`8`],
      skill4: [`8`],
      skill5: [`8`]
    },
    {
      name: `Young Roseshroom`,
      id: 900000122,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/YoungRoseshroom.png",
      echoSkill:
        `Summon a Baby Roseshroom that fires a laser, dealing {0} Havoc DMG.<br><br>
        CD: <b>8s</b>.`,
      bio: `A younger individual of Roseshroom. It shares the shade-tolerant, hygrophilous habit with adults. Research shows that in its immatured stage, Roseshroom does not yet possess the ability to absorb nutrients from Tacetites, thus needing to gather nutrients from nearby matured Roseshrooms in order to survive.`,
      element: 6,
      cost: 1,
      sonataGroup: [4, 6],
      skill1: [`20%+40`, `8`],
      skill2: [`23%+46`, `8`],
      skill3: [`26%+52`, `8`],
      skill4: [`29%+58`, `8`],
      skill5: [`32%+64`, `8`]
    },
    {
      name: `Hooscamp`,
      id: 900000123,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/Hooscamp.png",
      echoSkill:
        `Transform into Hooscamp Flinger and pounce at the enemies, dealing {0} Aero DMG.<br><br>
        CD: <b>8s</b>.`,
      bio: `A young Hoochief. Sightings of it are only located from the Dim Forest, same as the adults. Though physically incomparable to adults, it has a intellectual development that is no different to the latter. Adult Hoochiefs teach them to hunt and ambush passers-by in the Dim Forest.`,
      element: 4,
      cost: 1,
      sonataGroup: [9, 4],
      skill1: [`30%+60`, `8`],
      skill2: [`34.50%+69`, `8`],
      skill3: [`39.00%+78`, `8`],
      skill4: [`43.50%+87`, `8`],
      skill5: [`48.00%+96`, `8`]
    },
    {
      name: `Diamondclaw`,
      id: 900000124,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/Diamondclaw.png",
      echoSkill:
        `Transform into Crystal Scorpion and enter a Parry State. Counterattack when the Parry State is over, dealing {0} Physical DMG.<br><br>
        CD: <b>8s</b>.`,
      bio: `The Cyrscorpion is one of the few Mutant Organisms whose common name is identical to its scientific name. It is rumored that the Huanglong biologist who discovered it was dilatory and could not establish its scientific name until he passed away. However, by then the creature's common name was already widely cited in various periodicals, which makes the revision of the name too costly for later researchers.`,
      element: 0,
      cost: 1,
      sonataGroup: [8, 9],
      skill1: [`30.00%+60`, `8`],
      skill2: [`34.50%+69`, `8`],
      skill3: [`39.00%+78`, `8`],
      skill4: [`43.50%+87`, `8`],
      skill5: [`48.00%+96`, `8`]
    },
    {
      name: `Hoartoise`,
      id: 900000125,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/Hoartoise.png",
      echoSkill:
        `Transform into Hoartoise and slowly restore HP. Use the Echo skill again to exit the transformation state.<br><br>
        CD: <b>2s</b>.`,
      bio: `Scientifically named “Hoartoise”, a terrestrial reptile Mutant Organism. It exhibits a violent temperament, often provoking and rushing towards creatures larger than itself. Whether this behavior is linked to its mutation is unclear. In Huanglong, tortoises are typically associated with calmness and sophistication, except for the Hoartoise.`,
      element: 1,
      cost: 1,
      sonataGroup: [5, 1],
      skill1: [`8`],
      skill2: [`8`],
      skill3: [`8`],
      skill4: [`8`],
      skill5: [`8`]
    },
    {
      name: `Fusion Dreamane Minor`,
      id: 900000126,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/FusionDreadmane.png",
      echoSkill:
        `Summon a Fusion Dreadmane that fiercely strikes the enemy, dealing {0} Fusion DMG.<br><br>
        CD: <b>8s</b>.`,
      bio: `A young individual of Fusion Dreadmane. With a smaller body, it is absolutely obedient to adult Dreadmanes. At this stage, the young wolves’ mane is almost the same as that of adult wolves’, which help them stay safe against Fusion attacks. However, they still lack the experience and skills for hunting in packs. Adult wolves would teach them to hunt, as well as protecting them. Sometimes such protection involve taking lethal damage.`,
      element: 2,
      cost: 1,
      sonataGroup: [7, 2],
      skill1: [`20%+40`, `8`],
      skill2: [`23%+46`, `8`],
      skill3: [`26%+52`, `8`],
      skill4: [`29%+58`, `8`],
      skill5: [`32%+64`, `8`]
    },
    {
      name: `Traffic Illuminator`,
      id: 900000127,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/TrafficIlluminator.png",
      echoSkill:
        `Summon a Traffic Illuminator, immobilizing enemies for up to <b>1s</b>. The immobilization will be lifted once the enemy is hit.<br><br>
        CD: <b>15s</b>.`,
      bio: `The small Tacet Discord fused with the traffic light, its Forte incorporates the common knowledge of \\"red light stop, green light go\\", and will slightly punish the uncivilized citizens.\\n\\nSo, everyone, please be sure to obey the traffic rules.`,
      element: 0,
      cost: 1,
      sonataGroup: [3, 4, 2],
      skill1: [`1`, `15`],
      skill2: [`1`, `15`],
      skill3: [`1`, `15`],
      skill4: [`1`, `15`],
      skill5: [`1`, `15`]
    },
    {
      name: "Dwarf Cassowary",
      id: 900000128,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/DwarfCassowary.png",
      echoSkill: `Summon a Dwarf Cassowary that tracks and attacks the enemy, dealing {0} Physical DMG 3 time(s).<br><br>
      CD: <b>8s</b>.`,
      bio: "Summon a Dwarf Cassowary that tracks and attacks the enemy, dealing {0} Physical DMG 3 time(s). \\n\\nCD: <b>8s</b>.",
      element: 0,
      cost: 1,
      sonataGroup: [4, 7],
      skill1: ["0"],
      skill2: ["27.6%"],
      skill3: ["31.2%"],
      skill4: ["34.8%"],
      skill5: ["38.4%"],
  }, {
      name: "Clang Bang",
      id: 900000129,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/ClangBang.png",
      echoSkill: `Summon a Clang Bang that follows the enemy and eventually self-combusts, dealing {0} Glacio DMG.<br><br>
      CD: <b>8s</b>.`,
      bio: "Summon a Clang Bang that follows the enemy and eventually self-combusts, dealing {0} Glacio DMG. \\n\\nCD: <b>8s</b>.",
      element: 0,
      cost: 1,
      sonataGroup: [1, 5],
      skill1: ["0"],
      skill2: ["23.00%+46"],
      skill3: ["26.00%+52"],
      skill4: ["29.00%+58"],
      skill5: ["32.00%+64"],
  }, {
      name: "Lava Larva",
      id: 900000130,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/LavaLarva.png",
      echoSkill: `Summon a Lava Larva that continuously attacks enemies, dealing {0} Fusion DMG with each hit. The Lava Larva disappears when the summoner is switched out or moves too far away.<br><br>
      CD: <b>8s</b>.`,
      bio: "Test",
      element: 0,
      cost: 1,
      sonataGroup: [9, 2],
      skill1: ["0"],
      skill2: ["27.6%"],
      skill3: ["31.2%"],
      skill4: ["34.8%"],
      skill5: ["38.4%"],
  }, {
      name: "Lightcrusher",
      id: 900000315,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/Lightcrusher.png",
      echoSkill: `Lunge forward as a Lightcrusher, dealing {0} Spectro DMG. Generate 6 Ablucence on hit. Each Ablucence explosion deals {1} Spectro DMG. Hold the Echo Skill to stay in the Lightcrusher form, which allows you to leap up and pounce forward in the air for a short distance.<br><br>
      CD: <b>15s</b>.`,
      bio: "Test",
      element: 0,
      cost: 3,
      sonataGroup: [5],
      skill1: ["0", "0"],
      skill2: ["97.29%", "10.81%"],
      skill3: ["109.98%", "12.22%"],
      skill4: ["122.67%", "13.63%"],
      skill5: ["135.36%", "15.04%"],
      advantage: ``,
      recommendedChara: []
  }, {
      name: "Glacio Dreadmane",
      id: 900000316,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/GlacioDreadmane.png",
      echoSkill: `Lacerate enemies as a Glacio Dreadmane, dealing {0} Glacio DMG on each hit. Equipped with 2 charges and can be cast mid-air. Glacio Dreadmane deals 20% more DMG while in mid-air and generates 6 Icicles upon landing, each dealing {1} Glacio DMG.<br><br>
      CD: <b>20s</b>.`,
      bio: "Test",
      element: 0,
      cost: 3,
      sonataGroup: [1, 8],
      skill1: ["0", "0"],
      skill2: ["154.1%", "23%"],
      skill3: ["174.2%", "26%"],
      skill4: ["194.3%", "29%"],
      skill5: ["214.4%", "32%"],
      advantage: ``,
      recommendedChara: []
  }, {
      name: "Lumiscale Construct",
      id: 900000317,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/LumiscaleConstruct.png",
      echoSkill: `Transform into a Lumiscale Construct and enter a Parry Stance. If you are not attacked during the Parry Stance, slash to deal {0} Glacio DMG when the stance finishes. If attacked, counterattack instantly, dealing {1} Glacio DMG. When hit with a Special Skill attack while in the Parry Stance, break the Special Skill and counterattack, dealing {1} Glacio DMG.<br><br>
      CD: <b>15s</b>.`,
      bio: "Test",
      element: 0,
      cost: 3,
      sonataGroup: [3, 1],
      skill1: ["0", "0"],
      skill2: ["397.9%", "596.85%"],
      skill3: ["449.8%", "674.7%"],
      skill4: ["501.7%", "752.55%"],
      skill5: ["553.6% ", "830.4%"],
      advantage: ``,
      recommendedChara: []
  }, {
      name: "Jué",
      id: 900000412,
      img: "https://whisperingsea.github.io/wuthering-waves-assets/images/echoes/Jue.png",
      echoSkill: `Summon Jué to the aid. Jué soars through the air, dealing {0} Spectro DMG, and summons thunderbolts that strike nearby enemies up to <b>5</b> times, each hit dealing {1} Spectro DMG. Jué then spirals downward, attacking surrounding enemies twice, each hit dealing {0} Spectro DMG. Casting this Echo Skill grants the Resonator a Blessing of Time effect that lasts <b>15s</b>, during when: -The Resonator gains <b>16%</b> Resonance Skill DMG Bonus. -When the Resonator's Resonance Skill hits the target, inflict {3} Spectro DMG 1 time per second for 15s, considered as the Resonator's Resonance Skill DMG.<br><br>
      CD: <b>20s</b>.`,
      bio: "Test",
      element: 0,
      cost: 4,
      sonataGroup: [5],
      skill1: ["0", "0", "0", "0"],
      skill2: ["34.96%", "13.98%", "46%", "11.5%"],
      skill3: ["39.52%", "15.81%", "52%", "13%"],
      skill4: ["44.08%", "17.63%", "58%", "14.5%"],
      skill5: ["48.64%", "19.46%", "64%", "16%"],
      advantage: ``,
      recommendedChara: []
  }
];