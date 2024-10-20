import MultiSelectDropdown from "../Common/SelectMulti";
import "./ScorerWeightModal.css";

interface WeightsModal {
  onClose: () => void;
  selectedValues: Set<string>;
  setSelectedValues: React.Dispatch<React.SetStateAction<Set<string>>>;
  selectedValues2: Set<string>;
  setSelectedValues2: React.Dispatch<React.SetStateAction<Set<string>>>;
  selectedValues3: Set<string>;
  setSelectedValues3: React.Dispatch<React.SetStateAction<Set<string>>>;
  selectedSubStats: string[];
  setSelectedSubStats: React.Dispatch<React.SetStateAction<string[]>>;
}

type EchoSubStats =
  | "HP"
  | "ATK"
  | "DEF"
  | "HP%"
  | "ATK%"
  | "DEF%"
  | "Crit. Rate%"
  | "Crit. DMG%"
  | "Energy Regen%"
  | "Basic Attack DMG Bonus%"
  | "Heavy Attack DMG Bonus%"
  | "Resonance Skill DMG Bonus%"
  | "Resonance Liberation DMG Bonus%";

const ScorerWeightsModal: React.FC<WeightsModal> = ({
  onClose,
  selectedValues,
  selectedValues2,
  selectedValues3,
  selectedSubStats,
  setSelectedValues,
  setSelectedValues2,
  setSelectedValues3,
  setSelectedSubStats,
}) => {
  const Option1 = [
    { label: "HP", value: "HP%" },
    { label: "ATK", value: "ATK%" },
    { label: "DEF", value: "DEF%" },
  ];

  const Option2 = [
    { label: "HP", value: "HP%" },
    { label: "ATK", value: "ATK%" },
    { label: "DEF", value: "DEF%" },
    { label: "Glacio DMG Bonus", value: "Glacio DMG Bonus%" },
    { label: "Fusion DMG Bonus", value: "Fusion DMG Bonus%" },
    { label: "Electro DMG Bonus", value: "Electro DMG Bonus%" },
    { label: "Aero DMG Bonus", value: "Aero DMG Bonus%" },
    { label: "Spectro DMG Bonus", value: "Spectro DMG Bonus%" },
    { label: "Havoc DMG Bonus", value: "Havoc DMG Bonus%" },
    { label: "Energy Reg.", value: "Energy Regen%" },
  ];

  const Option3 = [
    { label: "HP", value: "HP%" },
    { label: "ATK", value: "ATK%" },
    { label: "DEF", value: "DEF%" },
    { label: "Crit. Rate", value: "Crit. Rate%" },
    { label: "Crit. Dmg", value: "Crit. DMG%" },
    { label: "Healing Bonus", value: "Healing Bonus%" },
  ];

  const SubStats: EchoSubStats[] = [
    "HP",
    "ATK",
    "DEF",
    "HP%",
    "ATK%",
    "DEF%",
    "Crit. Rate%",
    "Crit. DMG%",
    "Energy Regen%",
    "Basic Attack DMG Bonus%",
    "Heavy Attack DMG Bonus%",
    "Resonance Skill DMG Bonus%",
    "Resonance Liberation DMG Bonus%",
  ];

  const closeModal = () => {
    onClose();
  };

  const handleSelectionChange = (selected: Set<string>) => {
    setSelectedValues(selected);
  };

  const handleSelectionChange2 = (selected: Set<string>) => {
    setSelectedValues2(selected);
  };

  const handleSelectionChange3 = (selected: Set<string>) => {
    setSelectedValues3(selected);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleDivClickSub = (stat: string) => {
    setSelectedSubStats((prevSelected) => {
      const updated = prevSelected.includes(stat)
        ? prevSelected.filter((s) => s !== stat)
        : [...prevSelected, stat];

      return updated;
    });
  };

  return (
    <>
      <div className="overlay-scorerWeight-modal" onClick={handleOverlayClick}>
        <div className="Scorer-Weight-Modal-Container">
          <div className="scorerWeight-box">
            <h3 className="sort-type-text-weight">Main Stat</h3>
            <div className="weight-Box-item-1">
              <div>
                <h3 className="sort-type-text-weight-2">4 Cost</h3>
                <MultiSelectDropdown
                  options={Option3}
                  selectedValues={selectedValues3}
                  onChange={handleSelectionChange3}
                />
              </div>
              <div>
                <h3 className="sort-type-text-weight-2">3 Cost</h3>
                <MultiSelectDropdown
                  options={Option2}
                  selectedValues={selectedValues2}
                  onChange={handleSelectionChange2}
                />
              </div>
              <div>
                <h3 className="sort-type-text-weight-2">1 Cost</h3>
                <MultiSelectDropdown
                  options={Option1}
                  selectedValues={selectedValues}
                  onChange={handleSelectionChange}
                />
              </div>
            </div>
            <h3 className="sort-type-text-weight">Sub Stats</h3>
            <div className="weight-Box-item-1">
              {SubStats.map((stat, index) => (
                <div
                  key={index}
                  className="sub-stat-sort-flex"
                  onClick={() => handleDivClickSub(stat)}
                >
                  <h3 className="stat-sort-text">
                    {["HP%", "ATK%", "DEF%"].includes(stat)
                      ? stat.replace("%", " %")
                      : stat.replace("%", "").replace("DMG Bonus", "Bonus")}
                  </h3>
                  <input
                    id={`${stat}-Sub-Id`}
                    className="stat-select-input-radio"
                    type="checkbox"
                    checked={selectedSubStats.includes(stat)}
                    onChange={() => handleDivClickSub(stat)}
                  />
                </div>
              ))}
            </div>
            <div className="scorer-how-to-box">
              <h3 className="sort-type-text">How It Works</h3>
              <p className="sort-type-text-para">Substat Score</p>
              <div className="scorer-how-to-box-1">
                <p>
                  <b>
                    The substats are scored in a fairly simple way using the
                    roll value of stat and the characters preferred stats.
                  </b>
                </p>
                <h3>What's a Roll value?</h3>
                <p>
                  <b>
                    Each Substat has a maximum 8 values it can roll into except
                    for flat stats which only has 4 rolls.
                  </b>
                  <br />
                  Example: Flat Atk can roll into either 30, 40, 50, 60. In
                  accrodance to how high the roll index is, it is given 0.5
                  points.
                  <br />
                  <b>
                    If Flat Atk rolls into 50 then it's roll index would be 3
                    and it's roll value would be 3 x 0.5 = 1.5.
                  </b>
                  <br />
                  <b>
                    All stats except for flat stats have a maximum roll value of
                    4 whereas Flat stats has a maximum roll value of 2.
                  </b>
                </p>
              </div>
              <p className="sort-type-text-para">Preferred Stat Score</p>
              <div className="scorer-how-to-box-1">
                <p>
                  <b>
                    The preferred stats of a character plays the most critical
                    role in calculating overall score of an Echo.
                  </b>
                </p>
                <p>
                  <b>• Preferred Main stat adds a bonus of 2 points.</b>
                  <br />
                  <b>• Preferred Sub stat adds a bonus of 2 points.</b>
                  <br />
                  <b>
                    • For a DPS character, If the substat is Crit. Rate or Crit.
                    DMG, it additionally gives 5 bonus points and for Atk% (Def%
                    for Def scaling characters) 3 bonus points.
                  </b>
                  <br />
                  <b>
                    • For a Support character, If the substat is HP%, Atk% (For
                    Verina) or Energy Regen, it additionally gives 5 bonus
                    points.
                  </b>
                  <br />
                  <b>
                    • Flat bonuses for preffered substats give additional 2
                    points
                  </b>
                  <br />
                </p>
                <p>
                  <b>
                    For Rover Havoc, a Crit. Rate roll of 9.3 which has an index
                    of 6 will have stat score of: <br />3 (Roll Value) + 3
                    (Preferred Stat) + 5 (Critical Bonus) = 11
                  </b>
                </p>
              </div>
              <p className="sort-type-text-para">
                Why do preferred stats carry more weight in scoring?
              </p>
              <div className="scorer-how-to-box-1">
                <p>
                  <b>
                    In Wuthering Waves an Echo has a total of 13 substats it can
                    roll into, but the value for each substat is only rolled
                    once and cannot be upgraded afterwards.
                    <br />
                    This makes the preferred stat roll valuable even if the stat
                    value is lowz which is why the prferred stat rolls are given
                    more importance than stat value.
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScorerWeightsModal;
