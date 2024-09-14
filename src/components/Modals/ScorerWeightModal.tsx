import { useState } from "react";
import MultiSelectDropdown from "../Common/SelectMulti";
import "./ScorerWeightModal.css";

interface WeightsModal {
  onClose: () => void;
}

const ScorerWeightsModal: React.FC<WeightsModal> = ({ onClose }) => {
  const [selectedValues, setSelectedValues] = useState<Set<string>>(new Set());
  const [selectedValues2, setSelectedValues2] = useState<Set<string>>(
    new Set()
  );
  const [selectedValues3, setSelectedValues3] = useState<Set<string>>(
    new Set()
  );

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
                    new Set<string>(["ATK%", "Crit. Rate%"])
                  }
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ScorerWeightsModal;
