import { useParams } from "react-router-dom";
import { useDataContext } from "../../contexts/CharacterDataContext";
import { useEffect } from "react";
import "./Calculator.css";

const CalcSequence: React.FC = () => {
  const { characters, selectedCharacterId, setSelectedCharacterId } =
    useDataContext();
  const { charaName } = useParams<{ charaName: string }>();

  const chara = Object.values(characters).find(
    (id) => id.charaId === selectedCharacterId
  );

  const cName = Object.values(characters).find(
    (character) => character.name.toLowerCase() === charaName?.toLowerCase()
  );

  useEffect(() => {
    if (cName) {
      setSelectedCharacterId(cName.charaId);
    }
  }, [cName, setSelectedCharacterId]);

  return (
    <>
      <div className="CalcSequence-conyainer">
        <div>
          {chara &&
            chara?.sequences &&
            chara?.sequences.map((item, index) => (
              <div className="calcSequence-box" key={index}>
                <div key={index} className={`calcSequence-${index + 1}`}>
                  <h2 className="calcSequence-node">
                    <b>{item.node}</b>
                  </h2>
                  <h2 className="calcSequence-name">-{item.name}-</h2>
                  <p
                    className="paragraph calcSequence-desc"
                    dangerouslySetInnerHTML={{
                      __html: item.description.replace(
                        /{(\d)}/g,
                        (match, number) =>
                          item.detailNum?.[parseInt(number)] ?? match
                      ),
                    }}
                  ></p>
                </div>
                <input
                  className="calcSequence-checkbox"
                  id="Sequence-Checkbox"
                  type="checkbox"
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CalcSequence;
