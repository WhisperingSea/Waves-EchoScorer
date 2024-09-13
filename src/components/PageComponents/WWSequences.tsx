import React from "react";
import { useDataContext } from "../../contexts/CharacterDataContext";
import "./WWSequences.css";

const WWSequences: React.FC = () => {
  const { characters, selectedCharacterId } = useDataContext();

  const chara = Object.values(characters).find(
    (id) => id.charaId === selectedCharacterId
  );

  return (
    <>
      <div className="sequences">
        <h1 className={`sequence center-header ${chara?.element}`}>
          Sequences
        </h1>
        <div>
          {chara &&
            chara?.sequences &&
            chara?.sequences.map((item, index) => (
              <div className="sequence-box" key={index}>
                <div key={index} className={`sequence-${index + 1}`}>
                  <h2 className="sequence-node">
                    <b>{item.node}</b>
                  </h2>
                  <h2 className="sequence-name">-{item.name}-</h2>
                  <p
                    className="paragraph sequence-desc"
                    dangerouslySetInnerHTML={{
                      __html: item.description.replace(
                        /{(\d)}/g,
                        (match, number) =>
                          item.detailNum?.[parseInt(number)] ?? match
                      ),
                    }}
                  ></p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default WWSequences;
