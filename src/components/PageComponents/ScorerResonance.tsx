import { useEffect, useState } from "react";
import "./ScorerResonance.css";
import { useSequence } from "../../contexts/CalcSequenceContext";
import { useDataContext } from "../../contexts/CharacterDataContext";

interface ActiveR {
  R1: boolean;
  R2: boolean;
  R3: boolean;
  R4: boolean;
  R5: boolean;
  R6: boolean;
}

interface CalcSequenceTypes {
  name: string;
  charaId: number;
  sequences: {
    node1: {
      id: number;
      type: string;
      buff: string;
      value: number;
      stacks: number;
    }[];
    node2: {
      id: number;
      type: string;
      buff: string;
      value: number;
      stacks: number;
    }[];
    node3: {
      id: number;
      type: string;
      buff: string;
      value: number;
      stacks: number;
    }[];
    node4: {
      id: number;
      type: string;
      buff: string;
      value: number;
      stacks: number;
    }[];
    node5: {
      id: number;
      type: string;
      buff: string;
      value: number;
      stacks: number;
    }[];
    node6: {
      id: number;
      type: string;
      buff: string;
      value: number;
      stacks: number;
    }[];
  };
}

const ScorerResonance: React.FC = () => {
  const { setSequence } = useSequence();
  const { characters, selectedCharacterId } = useDataContext();
  const [activateResonance, setActivateResonance] = useState<ActiveR>({
    R1: false,
    R2: false,
    R3: false,
    R4: false,
    R5: false,
    R6: false,
  });

  const chara = Object.values(characters).find(
    (char) => char.charaId === selectedCharacterId
  );

  const updateNodeSequence = (nodeIndex: number, resonanceId: number) => {
    return {
      id: resonanceId,
      type: chara?.sequences[nodeIndex].sequenceBuffType || "",
      buff: chara?.sequences[nodeIndex].sequenceBuffAtrribute
        ? chara?.sequences[nodeIndex].sequenceBuffAtrribute[resonanceId - 1]
        : "",
      value: chara?.sequences[nodeIndex].sequenceBuff
        ? chara?.sequences[nodeIndex].sequenceBuff[resonanceId - 1]
        : 0,
      stacks: chara?.sequences[nodeIndex].stacks || 0,
    };
  };

  useEffect(() => {
    // Function to clear entries for all nodes
    const clearAllSequences = () => {
      setSequence((prevSequence) => ({
        ...prevSequence,
        name: chara?.name || "",
        charaId: chara?.charaId || 0,
        sequences: {
          node1: [],
          node2: [],
          node3: [],
          node4: [],
          node5: [],
          node6: [],
        },
      }));
    };

    const updateNodeSequences = (nodeIndex: number) => {
      setSequence((prevSequence) => {
        const nodeKey = `node${
          nodeIndex + 1
        }` as keyof CalcSequenceTypes["sequences"];
        const newEntries = [
          updateNodeSequence(nodeIndex, 1),
          updateNodeSequence(nodeIndex, 2),
        ];

        return {
          ...prevSequence,
          name: chara?.name || "",
          charaId: chara?.charaId || 0,
          sequences: {
            ...prevSequence.sequences,
            [nodeKey]: [...prevSequence.sequences[nodeKey], ...newEntries],
          },
        };
      });
    };

    clearAllSequences();

    if (activateResonance.R6) {
      updateNodeSequences(5); // R6
      updateNodeSequences(4); // R5
      updateNodeSequences(3); // R4
      updateNodeSequences(2); // R3
      updateNodeSequences(1); // R2
      updateNodeSequences(0); // R1
    } else if (activateResonance.R5) {
      updateNodeSequences(4); // R5
      updateNodeSequences(3); // R4
      updateNodeSequences(2); // R3
      updateNodeSequences(1); // R2
      updateNodeSequences(0); // R1
    } else if (activateResonance.R4) {
      updateNodeSequences(3); // R4
      updateNodeSequences(2); // R3
      updateNodeSequences(1); // R2
      updateNodeSequences(0); // R1
    } else if (activateResonance.R3) {
      updateNodeSequences(2); // R3
      updateNodeSequences(1); // R2
      updateNodeSequences(0); // R1
    } else if (activateResonance.R2) {
      updateNodeSequences(1); // R2
      updateNodeSequences(0); // R1
    } else if (activateResonance.R1) {
      updateNodeSequences(0); // R1
    }
  }, [chara, activateResonance, setSequence]);

  const handleClick = (resonance: keyof ActiveR) => {
    setActivateResonance((prev) => {
      const newState = { ...prev };
      const activate = !prev[resonance];

      if (resonance === "R1") {
        newState[resonance] = !prev[resonance];
        if (!newState[resonance]) {
          for (const key in newState) {
            newState[key as keyof ActiveR] = false;
          }
        }
      } else {
        if (activate) {
          let activatePrevious = true;
          for (const key in newState) {
            if (key <= resonance) {
              newState[key as keyof ActiveR] = activatePrevious;
            }
          }
        } else {
          let deactivate = false;
          for (const key in newState) {
            if (key === resonance) {
              deactivate = true;
            }
            if (deactivate) {
              newState[key as keyof ActiveR] = false;
            }
          }
        }
      }

      return newState;
    });
  };

  return (
    <div className="Scorer-Resonance-Container">
      <div className="Scorer-resonance-box">
        {[1, 2, 3, 4, 5, 6].map((num) => {
          const key = `R${num}` as keyof ActiveR;
          return (
            <div key={key} className={`scorer-resonance-box-item-${num}`}>
              <span
                className={
                  activateResonance[key]
                    ? "active-R resonance-btn"
                    : "resonance-btn"
                }
                onClick={() => handleClick(key)}
              >
                {num}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScorerResonance;
