import { useEffect, useState } from "react";
import MultiSelectDropdown from "../Common/SelectMulti";
import "./ScorerWeightModal.css";
import { useScorerContext } from "../../contexts/ScorerContext";
import { useDataContext } from "../../contexts/CharacterDataContext";
import { WWCharaBuilds } from "../../data/WWCharacterBuild";

interface WeightsModal {
  onClose: () => void;
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

const ScorerWeightsModal: React.FC<WeightsModal> = ({ onClose }) => {
  const { handleSubStats, handleCost1Main, handleCost3Main, handleCost4Main } =
    useScorerContext();
  const [selectedValues, setSelectedValues] = useState<Set<string>>(new Set());
  const [selectedValues2, setSelectedValues2] = useState<Set<string>>(
    new Set()
  );
  const [selectedSubStats, setSelectedSubStats] = useState<string[]>([]);
  const [selectedValues3, setSelectedValues3] = useState<Set<string>>(
    new Set()
  );
  const { selectedCharacterId } = useDataContext();

  // const chara = Object.values(characters).find(
  //   (char) => char.charaId === selectedCharacterId
  // );

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

  useEffect(() => {
    if (selectedSubStats.length !== 0) {
      handleSubStats(selectedSubStats);
    }
  }, [selectedSubStats]);

  const stats = WWCharaBuilds.find(
    (stat) => stat.charaId === selectedCharacterId
  );

  useEffect(() => {
    if (selectedCharacterId && stats) {
      if (!selectedSubStats.length) {
        setSelectedSubStats(stats.preferedSubStats);
      }
    }
  }, [selectedCharacterId, stats]);

  useEffect(() => {
    const newVals = Array.from(selectedValues);
    handleCost1Main(newVals);
  }, [selectedValues]);

  useEffect(() => {
    const newVals = Array.from(selectedValues2);
    handleCost3Main(newVals);
  }, [selectedValues2]);

  useEffect(() => {
    const newVals = Array.from(selectedValues3);
    handleCost4Main(newVals);
  }, [selectedValues3]);

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
                  defaultSelectedValues={
                    new Set<string>(stats?.preferedMainStat1)
                  }
                  onChange={handleSelectionChange3}
                />
              </div>
              <div>
                <h3 className="sort-type-text-weight-2">3 Cost</h3>
                <MultiSelectDropdown
                  options={Option2}
                  selectedValues={selectedValues2}
                  defaultSelectedValues={
                    new Set<string>(stats?.preferedMainStat2)
                  }
                  onChange={handleSelectionChange2}
                />
              </div>
              <div>
                <h3 className="sort-type-text-weight-2">1 Cost</h3>
                <MultiSelectDropdown
                  options={Option1}
                  selectedValues={selectedValues}
                  defaultSelectedValues={
                    new Set<string>(stats?.preferedMainStat3)
                  }
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
          <div className="weight-box-item-2">
            <button className="default-sort-weight">Dps Config</button>
            <button className="default-sort-weight">Sub-Dps Config</button>
            <button className="default-sort-weight">Support Config</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScorerWeightsModal;
