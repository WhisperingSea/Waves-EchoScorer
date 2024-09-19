import { useState } from "react";
import { useDataContext } from "../../contexts/CharacterDataContext";
import "./ScorerBar.css";
import FeaturesModal from "../Modals/FeaturesModal";
import ScorerWeightsModal from "../Modals/ScorerWeightModal";

interface ScorerBarTypes {
  isLoading: boolean;
  downloadDivAsImage: () => {};
}

const ScorerBar: React.FC<ScorerBarTypes> = ({
  isLoading,
  downloadDivAsImage,
}) => {
  const { characters, selectedCharacterId } = useDataContext();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModal2Open = () => {
    setOpen2(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleModal2Close = () => {
    setOpen2(false);
  };

  const chara = Object.values(characters).find(
    (Char) => Char.charaId === selectedCharacterId
  );

  return (
    <>
      <div className="ScorerBar-Container">
        {open && (
          <FeaturesModal onClose={handleModalClose} pageLink="/echo-scorer/" />
        )}
        {open2 && <ScorerWeightsModal onClose={handleModal2Close} />}
        <div className="scorerBar-item-1">
          <h3>Selected Character : </h3>
          <img
            className="scorerBar-select-img"
            src={chara?.images.icon_sq}
            onClick={handleModalOpen}
          />
        </div>
        <div className="scorerBar-item-2">
          <button onClick={handleModal2Open}>Scoring Alogrithm</button>
        </div>
        <div className="scorerBar-item-3">
          <button
            className="download-btn"
            onClick={downloadDivAsImage}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Download Image"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ScorerBar;
