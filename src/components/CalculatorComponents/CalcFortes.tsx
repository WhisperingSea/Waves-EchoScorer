import "./Calculator.css";
import { useDataContext } from "../../contexts/CharacterDataContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { WWForteBonus } from "../../data/WWForteBonus";
import { useForte } from "../../contexts/CalcForteContext";
import { InherantSkillCalc1 } from "../../hooks/DamageCalcHooks/BonusCalc/InherantSkill1Calc";
import { InherantSkillCalc2 } from "../../hooks/DamageCalcHooks/BonusCalc/InherantSkill2Calc";

const CalcFortes: React.FC = () => {
  const { characters, selectedCharacterId, setSelectedCharacterId } =
    useDataContext();
  const { charaName } = useParams<{ charaName: string }>();
  const { setForteStats, setSkillLevels } = useForte();
  const [skillId, setSkillId] = useState<number>(0);
  const [BALevel, setBALevel] = useState<number>(1);
  const [RSLevel, setRSLevel] = useState<number>(1);
  const [RLLevel, setRLLevel] = useState<number>(1);
  const [FCLevel, setFCLevel] = useState<number>(1);
  const [ISLevel, setISLevel] = useState<number>(1);
  const [InherantSkill1, setInherantSkill1] = useState(false);
  const [InherantSkill2, setInherantSkill2] = useState(false);

  const InSk1 = InherantSkillCalc1();
  const InSk2 = InherantSkillCalc2();

  const chara = Object.values(characters).find(
    (id) => id.charaId === selectedCharacterId
  );

  const cName = Object.values(characters).find(
    (character) => character.name.toLowerCase() === charaName?.toLowerCase()
  );

  const forte = Object.values(WWForteBonus).find(
    (id) => id.Id === selectedCharacterId
  );

  useEffect(() => {
    if (cName) {
      setSelectedCharacterId(cName.charaId);
    }
  }, [cName, setSelectedCharacterId]);

  const skill = chara?.skills.find((id) => id.skillId === skillId);

  const formattedDesc = skill?.skillDescription.replace(
    /{(\d+)}/g,
    (match, number) => skill?.skillDetailNum?.[parseInt(number)] ?? match
  ) as string | TrustedHTML;

  const handleForteCheck = (
    id: number | undefined,
    stat1: string,
    stat2: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(e.target.value);
    const isChekced = e.target.checked;

    setForteStats((prevForteStat) => {
      const updatedForteStats = { ...prevForteStat };

      updatedForteStats.id = chara?.charaId;
      updatedForteStats.name = chara?.name;
      updatedForteStats.stat1 = (forte?.minorForte[1].type as string) || stat1;
      updatedForteStats.stat2 = (forte?.minorForte[5].type as string) || stat2;

      if (id !== undefined) {
        switch (id) {
          case 1:
            updatedForteStats.stat1Value1 = isChekced ? value : 0;
            break;
          case 2:
            updatedForteStats.stat1Value2 = isChekced ? value : 0;
            break;
          case 3:
            updatedForteStats.stat1Value3 = isChekced ? value : 0;
            break;
          case 4:
            updatedForteStats.stat1Value4 = isChekced ? value : 0;
            break;
          case 5:
            updatedForteStats.stat2Value1 = isChekced ? value : 0;
            break;
          case 6:
            updatedForteStats.stat2Value2 = isChekced ? value : 0;
            break;
          case 7:
            updatedForteStats.stat2Value3 = isChekced ? value : 0;
            break;
          case 8:
            updatedForteStats.stat2Value4 = isChekced ? value : 0;
            break;
          default:
            console.error(`Unexpected id: ${id}`);
        }
      }

      console.log(updatedForteStats);
      return updatedForteStats;
    });
  };

  const handleIS1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInherantSkill1(e.target.checked);
  };

  const handleIS2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInherantSkill2(e.target.checked);
  };

  useEffect(() => {
    setSkillLevels((prevLevel) => ({
      ...prevLevel,
      ...(BALevel && { BasicAttack: BALevel as number }),
      ...(RSLevel && { ResonanceSkill: RSLevel as number }),
      ...(RLLevel && { ResonanceLiberation: RLLevel as number }),
      ...(FCLevel && { ForteCircuit: FCLevel as number }),
      ...(ISLevel && { IntroSkill: ISLevel as number }),
    }));
  }, [BALevel, RSLevel, RLLevel, FCLevel, ISLevel]);

  const defaultSkill = {
    Buff: "",
    Value: 0,
    Buff2: "",
    Valuw2: 0,
  };

  useEffect(() => {
    setSkillLevels((prevVal) => {
      if (InherantSkill1) {
        const newSkill = {
          Buff: InSk1?.Buff || prevVal.InherantSkill1?.Buff,
          Value: InSk1?.Value || prevVal.InherantSkill1?.Value,
        };

        if (
          JSON.stringify(prevVal.InherantSkill1) !== JSON.stringify(newSkill)
        ) {
          return {
            ...prevVal,
            InherantSkill1: newSkill,
          };
        }
      } else {
        // Reset to default if the checkbox is unchecked
        if (
          JSON.stringify(prevVal.InherantSkill1) !==
          JSON.stringify(defaultSkill)
        ) {
          return {
            ...prevVal,
            InherantSkill1: defaultSkill,
          };
        }
      }

      return prevVal;
    });
  }, [InherantSkill1, InSk1]);

  useEffect(() => {
    setSkillLevels((prevVal) => {
      if (InherantSkill2) {
        const newSkill = {
          Buff: InSk2?.Buff || prevVal.InherantSkill2?.Buff,
          Value: InSk2?.Value || prevVal.InherantSkill2?.Value,
          Buff2: InSk2?.Buff2,
          Value2: InSk2?.Value2,
        };

        if (
          JSON.stringify(prevVal.InherantSkill2) !== JSON.stringify(newSkill)
        ) {
          return {
            ...prevVal,
            InherantSkill2: newSkill,
          };
        }
      } else {
        // Reset to default if the checkbox is unchecked
        if (
          JSON.stringify(prevVal.InherantSkill2) !==
          JSON.stringify(defaultSkill)
        ) {
          return {
            ...prevVal,
            InherantSkill2: defaultSkill,
          };
        }
      }

      return prevVal;
    });
  }, [InherantSkill2, InSk2]);

  return (
    <>
      <div className="CalcForte-Container">
        <section className="calcFortes-section">
          <h2>Skills -</h2>
          <div className="calcForte-skills">
            <div className="calcForte-skill-box">
              <button
                className="forte-info-btn"
                onClick={() => setSkillId((Id) => (Id === 1 ? 0 : 1))}
              >
                +
              </button>
              <h3>Basic Attack</h3>
              <input
                id="Basic-Skill"
                name="Skill-Level-input"
                type="range"
                min={1}
                max={10}
                defaultValue={1}
                onChange={(e) => setBALevel(parseInt(e.target.value))}
              />
              <h3 className="skill-end">{BALevel}</h3>
            </div>
            <div className="calcForte-skill-desc">
              {skillId === 1 && skill?.skillDescription && (
                <div>
                  <h3>{skill.skillName}</h3>
                  <h3 dangerouslySetInnerHTML={{ __html: formattedDesc }}></h3>
                </div>
              )}
            </div>
          </div>
          <div className="calcForte-skills">
            <div className="calcForte-skill-box">
              <button
                className="forte-info-btn"
                onClick={() => setSkillId((Id) => (Id === 2 ? 0 : 2))}
              >
                +
              </button>
              <h3>Resonance Skill</h3>
              <input
                id="Resonance-Skill"
                name="Skill-Level-input"
                type="range"
                min={1}
                max={10}
                defaultValue={1}
                onChange={(e) => setRSLevel(parseInt(e.target.value))}
              />
              <h3 className="skill-end">{RSLevel}</h3>
            </div>
            <div className="calcForte-skill-desc">
              {skillId === 2 && skill?.skillDescription && (
                <div>
                  <h3>{skill.skillName}</h3>
                  <h3 dangerouslySetInnerHTML={{ __html: formattedDesc }}></h3>
                </div>
              )}
            </div>
          </div>
          <div className="calcForte-skills">
            <div className="calcForte-skill-box">
              <button
                className="forte-info-btn"
                onClick={() => setSkillId((Id) => (Id === 3 ? 0 : 3))}
              >
                +
              </button>
              <h3>Resonance Liberatiion</h3>
              <input
                id="Resonance-Liberation"
                name="Skill-Level-input"
                type="range"
                min={1}
                max={10}
                defaultValue={1}
                onChange={(e) => setRLLevel(parseInt(e.target.value))}
              />
              <h3 className="skill-end">{RLLevel}</h3>
            </div>
            <div className="calcForte-skill-desc">
              {skillId === 3 && skill?.skillDescription && (
                <div>
                  <h3>{skill.skillName}</h3>
                  <h3 dangerouslySetInnerHTML={{ __html: formattedDesc }}></h3>
                </div>
              )}
            </div>
          </div>
          <div className="calcForte-skills">
            <div className="calcForte-skill-box">
              <button
                className="forte-info-btn"
                onClick={() => setSkillId((Id) => (Id === 6 ? 0 : 6))}
              >
                +
              </button>
              <h3>Forte Circuit</h3>
              <input
                id="Forte-Circuit"
                name="Skill-Level-input"
                type="range"
                min={1}
                max={10}
                defaultValue={1}
                onChange={(e) => setFCLevel(parseInt(e.target.value))}
              />
              <h3 className="skill-end">{FCLevel}</h3>
            </div>
            <div className="calcForte-skill-desc">
              {skillId === 6 && skill?.skillDescription && (
                <div>
                  <h3>{skill.skillName}</h3>
                  <h3 dangerouslySetInnerHTML={{ __html: formattedDesc }}></h3>
                </div>
              )}
            </div>
          </div>
          <div className="calcForte-skills">
            <div className="calcForte-skill-box">
              <button
                className="forte-info-btn"
                onClick={() => setSkillId((Id) => (Id === 4 ? 0 : 4))}
              >
                +
              </button>
              <h3>Intro Skill</h3>
              <input
                id="Intro-Skill"
                name="Skill-Level-input"
                type="range"
                min={1}
                max={10}
                defaultValue={1}
                onChange={(e) => setISLevel(parseInt(e.target.value))}
              />
              <h3 className="skill-end">{ISLevel}</h3>
            </div>
            <div className="calcForte-skill-desc">
              {skillId === 4 && skill?.skillDescription && (
                <div>
                  <h3>{skill.skillName}</h3>
                  <h3 dangerouslySetInnerHTML={{ __html: formattedDesc }}></h3>
                </div>
              )}
            </div>
          </div>
          <div className="calcForte-skills">
            <div className="calcForte-skill-box">
              <button
                className="forte-info-btn"
                onClick={() => setSkillId((Id) => (Id === 7 ? 0 : 7))}
              >
                +
              </button>
              <h3>Inherant Skill 1</h3>
              <input
                id="Inherant-Skill-1"
                name="Skill-Level-input"
                type="checkbox"
                checked={InherantSkill1}
                onChange={handleIS1}
              />
            </div>
            <div className="calcForte-skill-desc">
              {skillId === 7 && skill?.skillDescription && (
                <div>
                  <h3>{skill.skillName}</h3>
                  <h3 dangerouslySetInnerHTML={{ __html: formattedDesc }}></h3>
                </div>
              )}
            </div>
          </div>
          <div className="calcForte-skills">
            <div className="calcForte-skill-box">
              <button
                className="forte-info-btn"
                onClick={() => setSkillId((Id) => (Id === 8 ? 0 : 8))}
              >
                +
              </button>
              <h3>Inherant Skill 2</h3>
              <input
                id="Inherant-Skill-2"
                name="Skill-Level-input"
                type="checkbox"
                checked={InherantSkill2}
                onChange={handleIS2}
              />
            </div>
            <div className="calcForte-skill-desc">
              {skillId === 8 && skill?.skillDescription && (
                <div>
                  <h3>{skill.skillName}</h3>
                  <h3 dangerouslySetInnerHTML={{ __html: formattedDesc }}></h3>
                </div>
              )}
            </div>
          </div>
          <div className="calcForte-skills">
            <div className="calcForte-skill-box">
              <button
                className="forte-info-btn"
                onClick={() => setSkillId((Id) => (Id === 5 ? 0 : 5))}
              >
                +
              </button>
              <h3>Outro Skill</h3>
            </div>
            <div className="calcForte-skill-desc">
              {skillId === 5 && skill?.skillDescription && (
                <div>
                  <h3>{skill.skillName}</h3>
                  <h3 dangerouslySetInnerHTML={{ __html: formattedDesc }}></h3>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="calcFortes-section">
          <h2>Minor Fortes -</h2>
          <div className="calcForte-minor-forte">
            {chara &&
              forte &&
              forte.minorForte.map((item) => (
                <div key={item.id} className="calcForte-minor-forte-box">
                  <h3>{item.type}:</h3>
                  <div className="calcForte-minor-forte-box-2">
                    <h3>
                      <strong>{item.value.toFixed(2)}%</strong>
                    </h3>
                    <input
                      className="forte-end"
                      id={`Minor-Forte-${item.id}`}
                      name="Minor-Forte-input"
                      type="checkbox"
                      value={item.value.toFixed(2)}
                      onChange={(e) =>
                        handleForteCheck(
                          item.id,
                          item.id <= 4 ? item.type : "",
                          item.id >= 5 ? item.type : "",
                          e
                        )
                      }
                    />
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default CalcFortes;
