import React, { useEffect, useState } from "react";
import "./StoreEchoFilter.css";
import { useSearchFilter } from "../../contexts/SearchFilterContext";
import { WWSonataData } from "../../data/WWSonata";

interface StoreEchoFilterTypes {
  onClose: () => void;
  initialCost: number;
  initialSonata: number;
  initialStat: string | undefined;
  initialSubStats: string[];
  onFilterChange: (filters: {
    cost: number;
    sonata: number;
    stat: string | undefined;
    subStats: string[];
  }) => void;
}

type EchoCostType = 0 | 1 | 3 | 4;

type EchoGroupType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type EchoMainStats =
  | "HP%"
  | "ATK%"
  | "DEF%"
  | "Glacio DMG Bonus%"
  | "Fusion DMG Bonus%"
  | "Electro DMG Bonus%"
  | "Aero DMG Bonus%"
  | "Spectro DMG Bonus%"
  | "Havoc DMG Bonus%"
  | "Energy Regen%"
  | "Crit. Rate%"
  | "Crit. Damage%"
  | "Healing Bonus%";

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

const StoreEchoFilter: React.FC<StoreEchoFilterTypes> = ({
  onClose,
  initialCost,
  initialSonata,
  initialStat,
  initialSubStats,
  onFilterChange,
}) => {
  const {
    handleStoreEchoCostFilter,
    handleStoreEchoGroupFilter,
    handleEchoMainStat,
    handleEchoSubStats,
  } = useSearchFilter();
  const [cost, setCost] = useState<number>(initialCost);
  const [sonata, setSonata] = useState<number>(initialSonata);
  const [selectedStat, setSelectedStat] = useState<string | undefined>(
    initialStat
  );
  const [selectedSubStats, setSelectedSubStats] =
    useState<string[]>(initialSubStats);

  const costFilter = [1, 3, 4];

  const MainStats: EchoMainStats[] = [
    "HP%",
    "ATK%",
    "DEF%",
    "Glacio DMG Bonus%",
    "Fusion DMG Bonus%",
    "Electro DMG Bonus%",
    "Aero DMG Bonus%",
    "Spectro DMG Bonus%",
    "Havoc DMG Bonus%",
    "Energy Regen%",
    "Crit. Rate%",
    "Crit. Damage%",
    "Healing Bonus%",
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

  useEffect(() => {
    setCost(initialCost);
    setSonata(initialSonata);
    setSelectedStat(initialStat);
    setSelectedSubStats(initialSubStats);
  }, [initialCost, initialSonata, initialStat, initialSubStats]);

  const closeModal = () => {
    onClose();
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedStat(event.target.value);
  };

  const handleDivClick = (stat: string) => {
    setSelectedStat(stat);
    onFilterChange({
      cost,
      sonata,
      stat,
      subStats: selectedSubStats,
    });
  };

  const handleDivClickSub = (stat: string) => {
    setSelectedSubStats((prevSelected) => {
      const updated = prevSelected.includes(stat)
        ? prevSelected.filter((s) => s !== stat)
        : [...prevSelected, stat];

      onFilterChange({
        cost,
        sonata,
        stat: selectedStat,
        subStats: updated,
      });

      return updated;
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Number(e.target.value);
    setCost(selectedValue || 0);
    onFilterChange({
      cost: selectedValue || 0,
      sonata,
      stat: selectedStat,
      subStats: selectedSubStats,
    });
  };

  const handleSelectChange2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Number(e.target.value);
    setSonata(selectedValue || 0);
    onFilterChange({
      cost,
      sonata: selectedValue || 0,
      stat: selectedStat,
      subStats: selectedSubStats,
    });
  };

  const handleFilterReset = () => {
    setCost(0);
    setSonata(0);
    setSelectedStat(undefined);
    setSelectedSubStats([]);
    onFilterChange({
      cost: 0,
      sonata: 0,
      stat: undefined,
      subStats: [],
    });
    handleStoreEchoCostFilter(0);
    handleStoreEchoGroupFilter(0);
    handleEchoMainStat(undefined);
    handleEchoSubStats([]);
  };

  useEffect(() => {
    if (cost) {
      handleStoreEchoCostFilter(cost as EchoCostType);
    }
  }, [cost]);

  useEffect(() => {
    if (sonata) {
      handleStoreEchoGroupFilter(sonata as EchoGroupType);
    }
  }, [sonata]);

  useEffect(() => {
    if (selectedStat !== undefined) {
      handleEchoMainStat(selectedStat as EchoMainStats);
    }
  }, [selectedStat]);

  useEffect(() => {
    if (selectedSubStats.length > 0) {
      handleEchoSubStats(selectedSubStats as EchoSubStats[]);
    } else {
      handleEchoSubStats([]);
    }
  }, [selectedSubStats]);

  return (
    <>
      <div className="overlay-storeEcho-modal" onClick={handleOverlayClick}>
        <div className="Store-Echo-Filter-Container">
          <div className="echo-filter-box">
            <h3 className="sort-type-text">Basic Sort</h3>
            <div className="echo-filter-box-item-1">
              <div className="echo-sort-box">
                <h3>Sort By Cost : </h3>
                <select
                  id="Echo-Sort-Cost"
                  className="sort-select"
                  value={cost}
                  onChange={handleSelectChange}
                >
                  <option disabled value={0}>
                    Select Cost
                  </option>
                  {costFilter.map((c, index) => (
                    <option value={c} key={index}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="echo-sort-box">
                <h3>Sort By set : </h3>
                <select
                  id="Echo-Sort-Set"
                  className="sort-select"
                  value={sonata}
                  onChange={handleSelectChange2}
                >
                  <option disabled value={0}>
                    Select Set
                  </option>
                  {WWSonataData.map((echo) => (
                    <option key={echo.id} value={echo.id}>
                      {echo.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <h3 className="sort-type-text">Advanced Sort</h3>
            <div className="echo-filter-box-item-2">
              <h3 className="sort-type-text-2">Main Stats</h3>
              {MainStats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-sort-flex"
                  onClick={() => handleDivClick(stat)}
                >
                  <h3 className="stat-sort-text">{stat.replace("%", "")}</h3>
                  <input
                    id={`${stat}-Main-Id`}
                    className="stat-select-input-radio"
                    type="radio"
                    value={stat}
                    checked={selectedStat === stat}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
            <div className="echo-filter-box-item-3">
              <h3 className="sort-type-text-2">Sub Stats</h3>
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
            <button className="filter-reset-btn" onClick={handleFilterReset}>
              Reset Filter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreEchoFilter;
