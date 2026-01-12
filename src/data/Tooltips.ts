export const tooltips: { [key: string]: { header: string; description: string } } = {
    lynae_overflow: {
      header: 'Overflow',
      description: `Max 120 points.<br>
      While in <span class="Highlight">Optical Sampling Stage</span>, <span class="Highlight">Overflow</span> recovers during Basic Attack, Lynae-Style Palettes, Mid-air Attack, and Dodge Counter, or when Intro Skill is cast.<br>
      When <span class="Highlight">Overflow</span> is full, <span class="Highlight">Basic Attack - Spark Collision</span> becomes available.<br>
      Casting <span class="Highlight">Basic Attack - Spark Collision</span> removes all <span class="Highlight">Overflow</span>.`
    },
    lynae_oss: {
      header: 'Optical Sampling Stage',
      description: `Lynae is in <span class="Highlight">Optical Sampling Stage</span> by default. In this state, <span class="Highlight">Overflow</span> recovers during Basic Attack,  Lynae-Style Palettes, Mid-air Attack, and Dodge Counter, or when Intro Skill is cast.`
    },
    lynae_lumiflow: {
        header: 'Lumiflow',
        description: `Max 120 points.<br>
        During <span class="Highlight">Kaleidoscopic Parade</span>:<br>
        - Restore 20% of <span class="Highlight">Lumiflow</span> per second when Lynae is moving on the ground/climbing, or performs a successful Dodge on the ground, or within a certain time during <span class="Highlight">Kaleidoscopic Parade - Basic Attack</span>, <span class="Highlight">Kaleidoscopic Parade - Ground Heavy Attack</span>, <span class="Highlight">Kaleidoscopic Parade - Mid-air Heavy Attack</span>, <span class="Highlight">Kaleidoscopic Parade - Dodge Counter</span>, <span class="Highlight">Additive Color</span>, ground Dodge, Intro Skill, or <span class="Highlight">Basic Attack - To a Vivid Tomorrow!</span>.<br>
        - <span class="Highlight">Lumiflow</span> starts to deplete by 20% per second while Lynae is staying still on the ground/climbing/swimming or off the field, or after a certain time following the use of the skills listed above.<br>
        - <span class="Highlight">Lumiflow</span> does not change while Lynae is not in any of the states described above.<br>
        Exiting <span class="Highlight">Kaleidoscopic Parade</span> removes all <span class="Highlight">Lumiflow</span>.<br>
        With 120 points of <span class="Highlight"><te href=150906>Lumiflow</te></span>, Lynae's roller skating speed further increases. <span class="Highlight">Speed Skating</span> consumes STA over time.`
    },
    lynae_kp: {
        header: 'Kaleidoscopic Parade',
        description: `Casting <span class="Highlight">Basic Attack - Spark Collision</span> sends Lynae into <span class="Highlight">Kaleidoscopic Parade</span>. In this state, Lynae moves faster and continuously recovers <span class="Highlight">Lumiflow</span> when she moves on the ground or casts <span class="Highlight">Kaleidoscopic Parade - Basic Attack</span>, <span class="Highlight">Kaleidoscopic Parade - Ground Heavy Attack</span>, <span class="Highlight">Kaleidoscopic Parade - Mid-air Heavy Attack</span>, <span class="Highlight">Kaleidoscopic Parade - Mid-air Attack</span>, <span class="Highlight">Additive Color</span>, Dodge, Intro Skill, or <span class="Highlight">Basic Attack - To a Vivid Tomorrow!</span>.`
    },
    lynae_pf: {
        header: 'Photochromic Flux',
        description: `Inflict <span class="Highlight">Photochromic Flux</span> when hitting a target with <span class="Highlight">Basic Attack - Polychrome Leap</span>, <span class="Highlight">Basic Attack - Iridescent Splash</span>, <span class="Highlight">Basic Attack - Visual Impact</span> and <span class="Highlight">Intro Skill - Time to Show Some Colors!</span>. <span class="Highlight">Photochromic Flux</span> inflicts <span class="Highlight">Tune Rupture - Shifting</span>/<span class="Highlight">Tune Strain - Shifting</span> on targets for 25s when Lynae is in <span class="Highlight">Resonance Mode - Tune Rupture</span>/<span class="Highlight">Resonance Mode - Tune Strain</span>.`
    },
    lynae_trueColor: {
        header: 'True Color',
        description: `Max 3 points.<br>
        While in combat, <span class="Highlight">Polychrome Leap</span> grants 1 point of <span class="Highlight">True Color</span> each time it's cast. With 3 points of <span class="Highlight">True Color</span>, <span class="Highlight">Basic Attack - Iridescent Splash</span> and <span class="Highlight">Basic Attack - Visual Impact</span> become available.<br>
        Exiting <span class="Highlight">Kaleidoscopic Parade</span> removes all <span class="Highlight">True Color</span>.`
    },
    lynae_sprayPaint: {
        header: 'Spray Paint',
        description: `When Inherent Skill <span class="Highlight">Colors Never Fade!</span> is activated, Lynae leaves <span class="Highlight">Spray Paint</span> on the ground after casting <span class="Highlight">Basic Attack - Visual Impact</span>, which continuously inflicts <span class="Highlight">Photochromic Flux</span> on targets within the <span class="Highlight">Spray Paint</span> area.`
    },
    tuneBreak: {
        header: 'Tune Break',
        
        description: `When the target's <span class="Highlight">Off-Tune Level</span> is maxed, they enter the <span class="Highlight">Mistune</span> state:<br>
        The active Resonator in the team may perform <span class="Highlight">Tune Break Skill</span> on the target, dealing DMG and causing the target to leave the <span class="Highlight">Mistune</span> state.<br>
        If the target is of the Common Class, Resonators in the team may directly deal <span class="Highlight">Tune Break DMG</span> with some of their regular skills on hit. The target leaves the <span class="Highlight">Mistune</span> state afterward.`
    },
    tuneRupture_interfered: {
        header: 'Tune Rupture - Interfered',
        description: `A target enters this state when they are hit by <span class="Highlight">Tune Break</span> under the <span class="Highlight">Tune Rupture - Shifting</span> state. Resonators who can respond to <span class="Highlight">Tune Rupture- Interfered</span> cause additional effects when attacking targets in this state. <span class="Highlight">Tune Rupture- Interfered</span> lasts for 8s.`
    },
    tuneStrain_interfered: {
        header: 'Tune Strain - Interfered',
        description: `A target enters this state when they are hit by <span class="Highlight">Tune Break</span> under the <span class="Highlight">Tune Strain - Shifting</span> state. Resonators who can respond to <span class="Highlight">Tune Strain - Interfered</span> cause additional effects when attacking targets in this state. <span class="Highlight">Tune Strain - Interfered</span> lasts for 30s.`
    },
    tuneRupture_shifting: {
        header: 'Tune Rupture - Shifting',
        description: `Certain Resonators can inflict <span class="Highlight">Tune Rupture - Shifting</span> on the target. During this state, if the affected target is hit by <span class="Highlight">Tune Break</span>, their <span class="Highlight">Tune Rupture - Shifting</span> state is replaced with <span class="Highlight">Tune Rupture - Interfered</span>.`
    },
    tuneStrain_shifting: {
        header: 'Tune Strain - Shifting',
        description: `Certain Resonators can inflict <span class="Highlight">Tune Strain - Shifting</span> on the target. During this state, if the affected target is hit by <span class="Highlight">Tune Break</span>, their <span class="Highlight">Tune Strain - Shifting</span> state is replaced with <span class="Highlight">Tune Strain - Interfered</span>.`
    }
  };
  