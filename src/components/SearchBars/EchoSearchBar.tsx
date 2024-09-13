import React, { useEffect, useState } from "react";
import { useSearchFilter } from "../../contexts/SearchFilterContext.tsx";
import "./EchoSearch.css";
import { WWSonataData } from "../../data/WWSonata.ts";

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

  const sonataGroup = WWSonataData.find((s) => s.id === selectedEchoGroup);

  useEffect(() => {
    if (selectedEchoGroup) {
      setSonata2(sonataGroup?.twoPiece);
      setSonata5(sonataGroup?.fivePiece);
    } else if (selectedEchoGroup === 0) {
      setSonata2("Sonata Group Not Selected");
      setSonata5("Sonata Group Not Selected");
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
        <button className="sonata-btn" onClick={() => handleEchoGroupFilter(1)}>
          <span className="Glacio">Freezing Frost</span>
        </button>
        <button className="sonata-btn" onClick={() => handleEchoGroupFilter(2)}>
          <span className="Fusion">Molten Rift</span>
        </button>
        <button className="sonata-btn" onClick={() => handleEchoGroupFilter(3)}>
          <span className="Electro">Void Thunder</span>
        </button>
        <button className="sonata-btn" onClick={() => handleEchoGroupFilter(4)}>
          <span className="Aero">Sierra Gale</span>
        </button>
        <button className="sonata-btn" onClick={() => handleEchoGroupFilter(5)}>
          <span className="Spectro">Celestial Light</span>
        </button>
        <button className="sonata-btn" onClick={() => handleEchoGroupFilter(6)}>
          <span className="Havoc">Sun-Sinking Eclipse</span>
        </button>
        <button className="sonata-btn" onClick={() => handleEchoGroupFilter(7)}>
          <span className="Healing">Rejuvenating Glow</span>
        </button>
        <button className="sonata-btn" onClick={() => handleEchoGroupFilter(8)}>
          <span className="Energy">Moonlit Clouds</span>
        </button>
        <button className="sonata-btn" onClick={() => handleEchoGroupFilter(9)}>
          <span className="Strength">Lingering Tunes</span>
        </button>
        <div className="sonata-effect">
          <h3>2-Piece: {sonata2}</h3>
          <h3>5-Piece: {sonata5}</h3>
        </div>
        <div className="dropdown">
          <span>Cost: {selectedEchoCost}</span>
          <div className="dropdown-content">
            <ul>
              <li>
                <button
                  className="cost-select"
                  onClick={() => handleEchoCostFilter(1)}
                >
                  1 Cost
                </button>
              </li>
              <li>
                <button
                  className="cost-select"
                  onClick={() => handleEchoCostFilter(3)}
                >
                  3 Cost
                </button>
              </li>
              <li>
                <button
                  className="cost-select"
                  onClick={() => handleEchoCostFilter(4)}
                >
                  4 Cost
                </button>
              </li>
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
