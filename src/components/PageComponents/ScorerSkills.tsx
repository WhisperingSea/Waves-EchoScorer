import { useEffect, useRef, useState } from "react";
import { useDataContext } from "../../contexts/CharacterDataContext";
import "./ScorerSkills.css";

type Skills = "BA" | "RS" | "RL" | "FC" | "IS";

const ScorerSkills: React.FC = () => {
  const { characters, selectedCharacterId } = useDataContext();
  const [BA, setBA] = useState<number>(1);
  const [RS, setRS] = useState<number>(1);
  const [FC, setFC] = useState<number>(1);
  const [RL, setRL] = useState<number>(1);
  const [IS, setIS] = useState<number>(1);
  const [skill, setSkill] = useState<string>("");
  const [skillDesc, setSkillDesc] = useState<string>(``);

  const chara = Object.values(characters).find(
    (char) => char.charaId === selectedCharacterId
  );

  const getDescription = (skill: any) => {
    const desc = skill?.skillDescription?.replace(
      /{(\d+)}/g,
      (match: string, number: string) =>
        skill?.skillDetailNum?.[parseInt(number)] ?? match
    );
    return desc || "";
  };

  const BasicSkill = chara?.skills.find((i) => i.skillId === 1);
  const BADesc = getDescription(BasicSkill);

  const ResSkill = chara?.skills.find((i) => i.skillId === 2);
  const RSDesc = getDescription(ResSkill);

  const ResLib = chara?.skills.find((i) => i.skillId === 3);
  const RLDesc = getDescription(ResLib);

  const IntroSkill = chara?.skills.find((i) => i.skillId === 4);
  const ISDesc = getDescription(IntroSkill);

  const Forte = chara?.skills.find((i) => i.skillId === 6);
  const FCDesc = getDescription(Forte);

  const handleSkillLevels = (level: number, skill: Skills) => {
    switch (skill) {
      case "BA": {
        setBA(level);
        break;
      }
      case "RS": {
        setRS(level);
        break;
      }
      case "RL": {
        setRL(level);
        break;
      }
      case "IS": {
        setIS(level);
        break;
      }
      case "FC": {
        setFC(level);
        break;
      }
      default: {
        break;
      }
    }
    setSkill("");
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSkill(""); // Close the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderSkillDropdown = (skills: Skills) => {
    return skill === skills ? (
      <div className="skill-dropdown" ref={dropdownRef}>
        <div className="dropdown-arrow"></div>
        <div className="skill-level-row">
          {[1, 2, 3, 4, 5].map((Num) => (
            <div
              key={Num}
              className="skill-level-option"
              onClick={() => handleSkillLevels(Num, skill)}
            >
              {Num}
            </div>
          ))}
        </div>
        <div className="skill-level-row">
          {[6, 7, 8, 9, 10].map((Num) => (
            <div
              key={Num}
              className="skill-level-option"
              onClick={() => handleSkillLevels(Num, skill)}
            >
              {Num}
            </div>
          ))}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: skillDesc }}
          className="scorer-skill-desc"
        />
      </div>
    ) : null;
  };

  console.log(skillDesc);

  return (
    <>
      <div className="scorer-skill-box">
        <div className="scorer-skill-box-item">
          <div
            className="scorer-skill-img-box"
            onClick={() => setSkillDesc(BADesc)}
          >
            {renderSkillDropdown("BA")}
            <img
              className="skill-img"
              src={BasicSkill?.skillImg}
              onClick={() => setSkill("BA")}
            />
            <span className="skill-level">{BA}</span>
          </div>
        </div>
        <div className="scorer-skill-box-item">
          <div
            className="scorer-skill-img-box"
            onClick={() => setSkillDesc(RSDesc)}
          >
            {renderSkillDropdown("RS")}
            <img
              className="skill-img"
              src={ResSkill?.skillImg}
              onClick={() => setSkill("RS")}
            />
            <span className="skill-level">{RS}</span>
          </div>
        </div>
        <div className="scorer-skill-box-item">
          <div
            className="scorer-skill-img-box"
            onClick={() => setSkillDesc(FCDesc)}
          >
            {renderSkillDropdown("FC")}
            <img
              className="skill-img"
              src={Forte?.skillImg}
              onClick={() => setSkill("FC")}
            />
            <span className="skill-level">{FC}</span>
          </div>
        </div>
        <div className="scorer-skill-box-item">
          <div
            className="scorer-skill-img-box"
            onClick={() => setSkillDesc(RLDesc)}
          >
            {renderSkillDropdown("RL")}
            <img
              className="skill-img"
              src={ResLib?.skillImg}
              onClick={() => setSkill("RL")}
            />
            <span className="skill-level">{RL}</span>
          </div>
        </div>
        <div className="scorer-skill-box-item">
          <div
            className="scorer-skill-img-box"
            onClick={() => setSkillDesc(ISDesc)}
          >
            {renderSkillDropdown("IS")}
            <img
              className="skill-img"
              src={IntroSkill?.skillImg}
              onClick={() => setSkill("IS")}
            />
            <span className="skill-level">{IS}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScorerSkills;
