import { useState, useEffect } from "react";
import { useDataContext } from "../../contexts/CharacterDataContext";
import "./WWSkills.css";

const WWSkills: React.FC = () => {
  const [skillId, setSkillId] = useState<string>("1");
  const [showMulti, setShowMulti] = useState(false);
  const [index, setIndex] = useState<string>("1");
  const [imgLoaded, setImgLoaded] = useState(false);

  const { characters, selectedCharacterId } = useDataContext();

  const chara = Object.values(characters).find(
    (id) => id.charaId === selectedCharacterId
  );

  const skill = chara?.skills.find((id) => id.skillId.toString() === skillId);

  const handleSkillId = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSkillId(event.currentTarget.value);
  };

  const formattedDesc = skill?.skillDescription.replace(
    /{(\d+)}/g,
    (match, number) => skill?.skillDetailNum?.[parseInt(number)] ?? match
  ) as string | TrustedHTML;

  const handleMulti = () => {
    setShowMulti(!showMulti);
    if (skill?.multipliers.length === 0) {
      setShowMulti(false);
    }
  };

  const handleMultiSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIndex(event.target.value);
  };

  useEffect(() => {
    setImgLoaded(false);
    if (!chara?.skills) return
    chara.skills.forEach((s) => {
      if (s.skillImg) {
        const img = new Image();
        img.src = s.skillImg;
      }
    })
  }, [chara?.skills]);

  useEffect(() => {
    setImgLoaded(false);
  }, [skillId]);

  return (
    <>
      <div className="WWSkills-container">
        <h1 className={`center-header ${chara?.element}`}>Skills</h1>
        <div className="tab-flexbox">
          <div className={`sticky-tabs sticky-flexbox ${chara?.element}`}>
            <button className={`tab-link ${skillId === "1" ? "active" : ""}`} value={1} onClick={handleSkillId}>
              Normal Attack
            </button>
            <button className={`tab-link ${skillId === "2" ? "active" : ""}`} value={2} onClick={handleSkillId}>
              Resonance Skill
            </button>
            <button className={`tab-link ${skillId === "3" ? "active" : ""}`} value={3} onClick={handleSkillId}>
              Resonance Liberation
            </button>
            <button className={`tab-link ${skillId === "6" ? "active" : ""}`} value={6} onClick={handleSkillId}>
              Forte Circuit
            </button>
            <button className={`tab-link ${skillId === "4" ? "active" : ""}`} value={4} onClick={handleSkillId}>
              Intro Skill
            </button>
            <button className={`tab-link ${skillId === "5" ? "active" : ""}`} value={5} onClick={handleSkillId}>
              Outro Skill
            </button>
            <button className={`tab-link ${skillId === "7" ? "active" : ""}`} value={7} onClick={handleSkillId}>
              Inherent Skills 1
            </button>
            <button className={`tab-link ${skillId === "8" ? "active" : ""}`} value={8} onClick={handleSkillId}>
              Inherent Skills 2
            </button>
            <button className={`tab-link ${skillId === "9" ? "active" : ""}`} value={9} onClick={handleSkillId}>
              Tune Break
            </button>
          </div>
          <div className="tab">
            <div className={`skill-header ${chara?.element}`}>
                <h2 className="skill-name">{skillId === "9" ? (skill?.skillName || "Tune Break") : skill?.skillName}</h2>
                {(skill?.skillImg || skillId === "9") && (
                <img
                  className={`skill-image ${imgLoaded ? "loaded" : ""}`}
                  src={skillId === "9" ? (() => {
                  switch (chara?.weapon) {
                  case "Sword":
                  return "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconNor/SP_IconWeakPointBreakKnife.webp";
                  case "Broadblade":
                  return "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconNor/SP_IconWeakPointBreakSword.webp";
                  case "Pistols":
                  return "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconNor/SP_IconWeakPointBreakGun.webp";
                  case "Gauntlets":
                  return "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconNor/SP_IconWeakPointBreakFist.webp";
                  case "Rectifier":
                  return "https://api.hakush.in/ww/UI/UIResources/Common/Atlas/SkillIcon/SkillIconNor/SP_IconWeakPointBreakMagic.webp";
                  default:
                  return "";
                  }
                  })() : skill?.skillImg || ""}
                  alt={skill?.skillName}
                  loading="eager"
                  onLoad={() => setImgLoaded(true)} />
                )}
            </div>
            <div>
              {skill?.skillDescription && (
                <div
                  className="Desc"
                  dangerouslySetInnerHTML={{ __html: formattedDesc }}
                ></div>
              )}
            </div>
            {skill != null && skill?.multipliers.length > 0 &&
              (<div className="multiplyer">
                <button className={`multi multi-link ${chara?.element}`} onClick={handleMulti}>
                  Multipliers
                  <span className={`arrow ${showMulti ? 'arrow-up' : 'arrow-down'}`}>▼</span>
                </button>
                <div className={`multi-tab ${showMulti ? "showMulti" : ""}`}>
                  <div className="multi-grid">
                    <input
                      className="slider-multi-input"
                      type="range"
                      min={1}
                      max={10}
                      name="vol"
                      defaultValue={1}
                      onChange={handleMultiSlider}
                      step={1}
                    />
                    <p className="slider-multi-value">{index}</p>
                  </div>
                  {skill &&
                    skill.multipliers &&
                    skill.multipliers.map((multi) => (
                      <div key={multi.index} className={`multi-flex ${chara?.element}`}>
                        <p className="paragraph">{multi.attributeName}: </p>
                        <p className="paragraph skill-detail-num">
                          <b>
                            {multi.skillDetailNum &&
                              multi.skillDetailNum[0]?.values[
                              parseInt(index) - 1
                              ]}
                          </b>
                        </p>
                      </div>
                    ))}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default WWSkills;
