import React, { useEffect, useState } from "react";
import { useSearchFilter, EchoCostType} from "../../contexts/SearchFilterContext.tsx";
import "./EchoSearch.css";
import { WWSonataData } from "../../data/WWSonata.ts";

const echoCosts: EchoCostType[] = [1, 3, 4];

const EchoSearchBar: React.FC = () => {
  const {
    echoQuery,
    handleEchoSearch,
    selectedEchoGroup,
    handleEchoGroupFilter,
    handleEchoCostFilter,
    selectedEchoCost,
    handleEchoRarity,
    selectedEchoRarity,
  } = useSearchFilter();
  const [sonata2, setSonata2] = useState<string | undefined>("");
  const [sonata5, setSonata5] = useState<string | undefined>("");
  const [sonataName, setSonataName] = useState<string | undefined>("");
  const [activeEchoGroup, setActiveEchoGroup] = useState<number>(0);

  const sonataGroup = WWSonataData.find((s) => s.id === selectedEchoGroup);

  const handleSelectEchoGroup = (id: number) => {
    id === activeEchoGroup ? setActiveEchoGroup(0) : setActiveEchoGroup(id);
    handleEchoGroupFilter(id);
  }

  useEffect(() => {
    if (selectedEchoGroup) {
      setSonata2(sonataGroup?.twoPiece);
      setSonata5(sonataGroup?.fivePiece);
      setSonataName(sonataGroup?.name);
    }
  });

  return (
    <>
      <div className="echo-search-bar echo-search-grid">
        <div className="search-input">
          <input
            id="echo-search-input"
            className="echo-search"
            type="text"
            value={echoQuery}
            onChange={handleEchoSearch}
            placeholder="Search by name..."
          />
        </div>
        {WWSonataData.map((sonata) => (
          <button
            key={sonata.id}
            className={`sonata-btn ${selectedEchoGroup === sonata.id ? "active" : ""}`}
            onClick={() => handleSelectEchoGroup(sonata.id)}
            title={sonata.name}
          >
            <img className="sonata-btn-img" src={sonata.img} alt={`Sonata ${sonata.id}`} />
          </button>
        ))}
        {selectedEchoGroup !== 0 && (
          <div className="sonata-effect">
            <h3 className="sonata-effect-name">{sonataName}</h3>
            <h3 className="sonata-effect-text">2-Piece: {sonata2}</h3>
            <h3 className="sonata-effect-text">5-Piece: {sonata5}</h3>
          </div>
        )}
        <div className="dropdown">
          <span>{`Cost: ${selectedEchoCost > 0 ? selectedEchoCost : "Any"}`}</span>
          <div className="dropdown-content">
            <ul>
              {echoCosts.map((cost) => (
                <li>
                  <button
                    className="cost-select"
                    onClick={() => handleEchoCostFilter(cost)}
                  >
                    {cost} Cost
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="echo-rarity">
          <span>Rarity: </span>
          <input
            className="echo-rarity-range"
            type="range"
            min={2}
            max={5}
            defaultValue={5}
            step={1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const value = parseInt(e.target.value);
              handleEchoRarity(value);
            }}
          />
          <p>{selectedEchoRarity}</p>
        </div>
      </div>
    </>
  );
};

export default EchoSearchBar;
