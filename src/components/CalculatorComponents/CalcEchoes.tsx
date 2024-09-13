import "./Calculator.css";
import EchoComp from "../Cards/EchoComp";
import { useEchoes } from "../../contexts/CalcEchoContext";
import { WWSonataData } from "../../data/WWSonata";
import { useEffect, useState } from "react";

const CalcEchoes: React.FC = () => {
  const {
    sonataGroup,
    setSonataGroup,
    sonataGroup2,
    setSonataGroup2,
    echoStats,
    setSonataEffectStacks,
  } = useEchoes();
  const [isSelected, setIsSelected] = useState(false);
  const [cost, setCost] = useState<number>(0);
  const [isChecked, setIsChecked] = useState(false);
  const [stacks, setStacks] = useState(0);

  const SonataEffect2Piece = Object.values(WWSonataData).find(
    (i) => i.name === sonataGroup
  );
  const SonataEffect5Piece = Object.values(WWSonataData).find(
    (i) => i.name === sonataGroup2
  );

  useEffect(() => {
    if (echoStats) {
      setCost(
        echoStats[1].cost +
          echoStats[2].cost +
          echoStats[3].cost +
          echoStats[4].cost +
          echoStats[5].cost
      );
    } else {
      setCost(0);
    }
  }, [echoStats]);

  useEffect(() => {
    // If the checkbox is checked and the sonata groups match
    if (isChecked && sonataGroup === sonataGroup2) {
      // If the SonataEffect2Piece ID matches one of the specific cases (2, 4, 5, 7, 8)
      if ([2, 4, 5, 7, 8].includes(SonataEffect2Piece?.id as number)) {
        setSonataEffectStacks(1);
      }
      // If the SonataEffect2Piece ID matches one of the other specific cases (1, 3, 6, 9)
      else if ([1, 3, 6, 9].includes(SonataEffect2Piece?.id as number)) {
        // If the sonata groups match, set stacks to the provided stacks value
        setSonataEffectStacks(sonataGroup === sonataGroup2 ? stacks : 0);
      }
    }
    // If the checkbox is not checked, reset the stacks to 0
    else if (!isChecked) {
      setSonataEffectStacks(0);
    }
  }, [isChecked, sonataGroup, sonataGroup2, SonataEffect2Piece, stacks]);

  useEffect(() => {
    if (sonataGroup !== sonataGroup2) {
      setIsChecked(false);
    }
  });

  const handleSonataEffectStacks = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStacks(parseInt(e.target.value));
  };

  return (
    <>
      <div className="CalcEcho-Container">
        <section className="calcEcho-section">
          {sonataGroup && sonataGroup2 && isSelected ? (
            <div className="">
              <h3>Main Echo:</h3>
              <EchoComp key={1} index={1} />
              <EchoComp key={2} index={2} />
              <EchoComp key={3} index={3} />
              <EchoComp key={4} index={4} />
              <EchoComp key={5} index={5} />
              <h3
                className="calcEcho-cost-compare"
                style={cost > 12 ? { backgroundColor: "#ff0f0f" } : {}}
              >
                Total Cost: {cost} / 12
              </h3>
            </div>
          ) : (
            <>
              <div className="calcEcho-sonata-selection">
                <img src="https://cdn.wanderer.moe/wuthering-waves/emotes/T_ChatEmo_E_01.png" />
                <div className="calcEcho-sonata-selection-2">
                  <div>
                    <h2>Select Sonata Effect 1</h2>
                    <select
                      className="calcEcho-stat-select"
                      id="CalcEcho-Sonata-Select-1"
                      value={sonataGroup}
                      onChange={(e) => setSonataGroup(e.target.value)}
                    >
                      <option value="" disabled>
                        Select a Sonata Group
                      </option>
                      {WWSonataData.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <h3>{SonataEffect2Piece?.twoPiece}</h3>
                  </div>
                  <div>
                    <h2>Select Sonata Effect 2</h2>
                    <select
                      className="calcEcho-stat-select"
                      id="CalcEcho-Sonata-Select-2"
                      value={sonataGroup2}
                      onChange={(e) => setSonataGroup2(e.target.value)}
                    >
                      <option value="" disabled>
                        Select a Sonata Group
                      </option>
                      {WWSonataData.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    {sonataGroup === sonataGroup2 && sonataGroup2 !== "" ? (
                      <div>
                        <h3>{SonataEffect2Piece?.fivePiece}</h3>
                        {isChecked && (
                          <input
                            id="SonataStacks"
                            type="number"
                            className="calcEcho-sonata-stacks"
                            min={0}
                            max={SonataEffect2Piece?.fivePieceEffect.stackable}
                            onChange={(e) => handleSonataEffectStacks(e)}
                            disabled={
                              sonataGroup !== "" &&
                              sonataGroup2 !== "" &&
                              SonataEffect2Piece?.fivePieceEffect.stackable ===
                                0
                            }
                          />
                        )}
                        <input
                          id="SonataStacksCheckbox"
                          type="checkbox"
                          className=""
                          onChange={(e) => setIsChecked(e.target.checked)}
                        />
                      </div>
                    ) : (
                      <h3>{SonataEffect5Piece?.twoPiece}</h3>
                    )}
                  </div>
                  <div>
                    <button
                      className="calcEcho-sonata-btn"
                      onClick={() => setIsSelected(true)}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default CalcEchoes;
