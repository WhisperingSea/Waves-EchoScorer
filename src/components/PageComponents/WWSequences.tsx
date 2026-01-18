import React, { useState } from "react";
import { useDataContext } from "../../contexts/CharacterDataContext";
import DescriptionParser from "../Common/DescriptionParser";
import "./WWSequences.css";

const WWSequences: React.FC = () => {
  const { characters, selectedCharacterId } = useDataContext();
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

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
              <div className={`sequence-box ${chara.element}`} key={index}>
                <div key={index} className={`sequence-${index + 1}`}>
                  <div className="sequence-header" onClick={() => toggle(index)}>
                    <div className="sequence-info">
                      <h2 className="sequence-node">
                        <b>{item.node}</b>
                      </h2>
                      <h2 className="sequence-name">-{item.name}-</h2>
                    </div>
                    {item.itemImg && (
                      <img className="sequence-image" src={item.itemImg} alt={item.name} />
                    )}
                  </div>
                  <div className={`sequence-desc-wrapper ${open === index ? 'open' : ''}`}>
                    <div className="paragraph sequence-desc">
                      <DescriptionParser
                        description={item.description.replace(
                          /{(\d)}/g,
                          (match, number) =>
                            item.detailNum?.[parseInt(number)] ?? match
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default WWSequences;
