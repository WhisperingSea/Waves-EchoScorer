import { useEffect, useState } from "react";
import { useDataContext } from "../../contexts/CharacterDataContext";
import "./ScorerBar.css";
import FeaturesModal from "../Modals/FeaturesModal";
import ScorerWeightsModal from "../Modals/ScorerWeightModal";
import { useScorerContext } from "../../contexts/ScorerContext";
import { WWCharaBuilds } from "../../data/WWCharacterBuild";
import { useParams } from "react-router-dom";

interface ScorerBarTypes {
  isLoading: boolean;
  downloadDivAsImage: () => {};
}

const ScorerBar: React.FC<ScorerBarTypes> = ({
  isLoading,
  downloadDivAsImage,
}) => {
  const { characters, selectedCharacterId, setSelectedCharacterId } =
    useDataContext();
  const { charaName } = useParams();
  const { handleSubStats, handleCost1Main, handleCost3Main, handleCost4Main } =
    useScorerContext();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [selectedValues, setSelectedValues] = useState<Set<string>>(new Set());
  const [selectedValues2, setSelectedValues2] = useState<Set<string>>(
    new Set()
  );
  const [selectedValues3, setSelectedValues3] = useState<Set<string>>(
    new Set()
  );
  const [selectedSubStats, setSelectedSubStats] = useState<string[]>([]);

  const chara = Object.values(characters).find(
    (Char) => Char.charaId === selectedCharacterId
  );

  const cName = Object.values(characters).find((char) => {
    char.name.toLowerCase() === charaName;
  });

  useEffect(() => {
    if (cName) {
      setSelectedCharacterId(cName.charaId);
    }
  }, [cName]);

  const stats = WWCharaBuilds.find(
    (stat) => stat.charaId === selectedCharacterId
  );

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

  useEffect(() => {
    setSelectedValues(new Set(stats?.preferedMainStat3 || []));
    setSelectedValues2(new Set(stats?.preferedMainStat2 || []));
    setSelectedValues3(new Set(stats?.preferedMainStat1 || []));
  }, [stats]);

  useEffect(() => {
    if (selectedSubStats) {
      handleSubStats(selectedSubStats);
    }
  }, [selectedSubStats]);

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

  useEffect(() => {
    if (selectedCharacterId) {
      if (stats) {
        setSelectedSubStats(stats.preferedSubStats || []);
      }
    }
  }, [stats, selectedCharacterId]);

  return (
    <>
      <div className="ScorerBar-Container">
        {open && (
          <FeaturesModal onClose={handleModalClose} pageLink="/echo-scorer/" />
        )}
        {open2 && (
          <ScorerWeightsModal
            selectedValues={selectedValues}
            selectedValues2={selectedValues2}
            selectedValues3={selectedValues3}
            selectedSubStats={selectedSubStats}
            setSelectedValues={setSelectedValues}
            setSelectedValues2={setSelectedValues2}
            setSelectedValues3={setSelectedValues3}
            setSelectedSubStats={setSelectedSubStats}
            onClose={handleModal2Close}
          />
        )}
        <div className="scorerBar-item-1">
          <h3>Selected Character : </h3>
          <img
            className="scorerBar-select-img"
            src={chara?.images.icon_sq}
            onClick={handleModalOpen}
          />
        </div>
        <div className="scorerBar-item-2">
          <button className="algorithm-btn" onClick={handleModal2Open}>
            Scoring Algorithm
          </button>
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
