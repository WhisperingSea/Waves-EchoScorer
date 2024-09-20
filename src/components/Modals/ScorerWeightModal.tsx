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
    { label: "Energy Regen", value: "Energy Regen%" },
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
                  className="stat-sort-flex"
                  onClick={() => handleDivClickSub(stat)}
                >
                  <h3 className="stat-sort-text">
                    {["HP%", "ATK%", "DEF%"].includes(stat)
                      ? stat.replace("%", " %")
                      : stat.replace("%", "")}
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
          </div>
          {/* <div className="weight-box-item-2">
            <button className="default-sort-weight">Dps Config</button>
            <button className="default-sort-weight">Sub-Dps Config</button>
            <button className="default-sort-weight">Support Config</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ScorerWeightsModal;
