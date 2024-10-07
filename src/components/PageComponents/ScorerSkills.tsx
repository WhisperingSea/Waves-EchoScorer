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

  const chara = Object.values(characters).find(
    (char) => char.charaId === selectedCharacterId
  );

  const handleSkillLevels = (level: number, skill: Skills) => {
    switch (skill) {
      case "BA": {
        setBA(level);
        setSkill("");
        break;
      }
      case "RS": {
        setRS(level);
        setSkill("");
        break;
      }
      case "RL": {
        setRL(level);
        setSkill("");
        break;
      }
      case "IS": {
        setIS(level);
        setSkill("");
        break;
      }
      case "FC": {
        setFC(level);
        setSkill("");
        break;
      }
      default: {
        setSkill("");
        break;
      }
    }
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((Num, index) => (
          <div
            key={index}
            className="skill-level-option"
            onClick={() => handleSkillLevels(Num, skill)}
          >
            {Num}
          </div>
        ))}
      </div>
    ) : null;
  };

  const BasicSkill = chara?.skills.find((i) => i.skillId === 1);
  const ResSkill = chara?.skills.find((i) => i.skillId === 2);
  const ResLib = chara?.skills.find((i) => i.skillId === 3);
  const IntroSkill = chara?.skills.find((i) => i.skillId === 4);
  const Forte = chara?.skills.find((i) => i.skillId === 6);

  return (
    <>
      <div className="scorer-skill-box">
        <div className="scorer-skill-box-item">
          <div className="scorer-skill-img-box">
            {renderSkillDropdown("BA")}
            <img
              className="skill-img"
              src={BasicSkill?.skillImg}
              onClick={() => setSkill("BA")}
            />
            <span className="skill-level">{BA}</span>
          </div>
          <span>BA</span>
        </div>
        <div className="scorer-skill-box-item">
          <div className="scorer-skill-img-box">
            {renderSkillDropdown("RS")}
            <img
              className="skill-img"
              src={ResSkill?.skillImg}
              onClick={() => setSkill("RS")}
            />
            <span className="skill-level">{RS}</span>
          </div>
          <span>RS</span>
        </div>
        <div className="scorer-skill-box-item">
          <div className="scorer-skill-img-box">
            {renderSkillDropdown("FC")}
            <img
              className="skill-img"
              src={Forte?.skillImg}
              onClick={() => setSkill("FC")}
            />
            <span className="skill-level">{FC}</span>
          </div>
          <span>FC</span>
        </div>
        <div className="scorer-skill-box-item">
          <div className="scorer-skill-img-box">
            {renderSkillDropdown("RL")}
            <img
              className="skill-img"
              src={ResLib?.skillImg}
              onClick={() => setSkill("RL")}
            />
            <span className="skill-level">{RL}</span>
          </div>
          <span>RL</span>
        </div>
        <div className="scorer-skill-box-item">
          <div className="scorer-skill-img-box">
            {renderSkillDropdown("IS")}
            <img
              className="skill-img"
              src={IntroSkill?.skillImg}
              onClick={() => setSkill("IS")}
            />
            <span className="skill-level">{IS}</span>
          </div>
          <span>IS</span>
        </div>
      </div>
    </>
  );
};

export default ScorerSkills;
