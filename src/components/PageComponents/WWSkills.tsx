import { useState } from "react";
import { useDataContext } from "../../contexts/CharacterDataContext";
import "./WWSkills.css";

const WWSkills: React.FC = () => {
  const [skillId, setSkillId] = useState<string>("1");
  const [showMulti, setShowMulti] = useState(false);
  const [index, setIndex] = useState<string>("1");

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

  return (
    <>
      <div className="WWSkills-container">
        <h1 className={`center-header ${chara?.element}`}>Skills</h1>
        <div className="tab-flexbox">
          <div className="sticky-tabs sticky-flexbox ">
            <button className="tab-link" value={1} onClick={handleSkillId}>
              Basic Attack
            </button>
            <button className="tab-link" value={2} onClick={handleSkillId}>
              Resonance Skill
            </button>
            <button className="tab-link" value={3} onClick={handleSkillId}>
              Resonance Liberation
            </button>
            <button className="tab-link" value={6} onClick={handleSkillId}>
              Forte Circuit
            </button>
            <button className="tab-link" value={4} onClick={handleSkillId}>
              Intro Skill
            </button>
            <button className="tab-link" value={5} onClick={handleSkillId}>
              Outro Skill
            </button>
            <button className="tab-link" value={7} onClick={handleSkillId}>
              Inherant Skills 1
            </button>
            <button className="tab-link" value={8} onClick={handleSkillId}>
              Inherant Skills 2
            </button>
          </div>
          <div className="tab">
            <h2 className="skill-name">{skill?.skillName}</h2>
            <div>
              {skill?.skillDescription && (
                <div
                  className="Desc"
                  dangerouslySetInnerHTML={{ __html: formattedDesc }}
                ></div>
              )}
            </div>
            <div className="multiplyer">
              <button className="multi multi-link" onClick={handleMulti}>
                Multiplier
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
                    <div key={multi.index} className="multi-flex">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WWSkills;
