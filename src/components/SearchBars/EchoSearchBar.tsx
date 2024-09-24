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
          <img
            className="sonata-btn-img"
            src={WWSonataData.find((img) => img.id === 1)?.img}
          />
        </button>
        <button className="sonata-btn" onClick={() => handleEchoGroupFilter(2)}>
          <img
            className="sonata-btn-img"
            src={WWSonataData.find((img) => img.id === 2)?.img}
          />
        </button>
        <button className="sonata-btn" onClick={() => handleEchoGroupFilter(3)}>
          <img
            className="sonata-btn-img"
            src={WWSonataData.find((img) => img.id === 3)?.img}
          />
        </button>
        <button className="sonata-btn" onClick={() => handleEchoGroupFilter(4)}>
          <img
            className="sonata-btn-img"
            src={WWSonataData.find((img) => img.id === 4)?.img}
          />
        </button>
        <button className="sonata-btn" onClick={() => handleEchoGroupFilter(5)}>
          <img
            className="sonata-btn-img"
            src={WWSonataData.find((img) => img.id === 5)?.img}
          />
        </button>
        <button className="sonata-btn" onClick={() => handleEchoGroupFilter(6)}>
          <img
            className="sonata-btn-img"
            src={WWSonataData.find((img) => img.id === 6)?.img}
          />
        </button>
        <button className="sonata-btn" onClick={() => handleEchoGroupFilter(7)}>
          <img
            className="sonata-btn-img"
            src={WWSonataData.find((img) => img.id === 7)?.img}
          />
        </button>
        <button className="sonata-btn" onClick={() => handleEchoGroupFilter(8)}>
          <img
            className="sonata-btn-img"
            src={WWSonataData.find((img) => img.id === 8)?.img}
          />
        </button>
        <button className="sonata-btn" onClick={() => handleEchoGroupFilter(9)}>
          <img
            className="sonata-btn-img"
            src={WWSonataData.find((img) => img.id === 9)?.img}
          />
        </button>
        <div className="sonata-effect">
          <h3 className="sonata-effect-text">2-Piece: {sonata2}</h3>
          <h3 className="sonata-effect-text">5-Piece: {sonata5}</h3>
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
