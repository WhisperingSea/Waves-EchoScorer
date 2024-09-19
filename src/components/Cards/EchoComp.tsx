import "./EchoComp.css";
import { useEchoes } from "../../contexts/CalcEchoContext";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useEchoContext } from "../../contexts/EchoDataContext";
import EchoModal from "../Modals/EchoModal";
import { useLocalStorageContext } from "../../contexts/LocalStorageContext";
import { WWSonataData } from "../../data/WWSonata";
import SelectInput from "../Common/SelectInput";
import { WWSubstats } from "../../data/WWEchoStats";

interface EchoStat {
  storeId: number;
  id: number;
  name: string;
  set: number;
  cost: number;
  mainStat: string;
  mainStatValue: number;
  selectedSubStat1: { stat: string; value: number };
  selectedSubStat2: { stat: string; value: number };
  selectedSubStat3: { stat: string; value: number };
  selectedSubStat4: { stat: string; value: number };
  selectedSubStat5: { stat: string; value: number };
}

type EchoCompType = { index: number };

type SubStatType =
  | "selectedSubStat1"
  | "selectedSubStat2"
  | "selectedSubStat3"
  | "selectedSubStat4"
  | "selectedSubStat5";

const EchoComp: React.FC<EchoCompType> = ({ index }) => {
  const { echoStats, setEchoStats } = useEchoes();
  const { echoes } = useEchoContext();
  const [open, setOpen] = useState(false);
  const [MainStatsAttribute, setMainStatsAttribute] = useState<string[]>([]);
  const { addEcho } = useLocalStorageContext();
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedVal, setSelectedVal] = useState<number>(0);
  const [selsectSet, setSelecteSet] = useState(false);

  const subStatRolls = (stat: string) => {
    const rolls = Object.values(WWSubstats).find((s) => s.name === stat)?.rolls;

    return rolls;
  };

  const selectedEcho = Object.values(echoes).find(
    (i) => i.name === echoStats[index].name
  );

  const openEchoModal = useCallback(() => {
    setOpen(true);
  }, []);

  const closeEchoModal = useCallback(() => {
    setOpen(false);
  }, []);

  let SubStatsAttribute = useMemo(
    () => [
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
    ],
    []
  );

  const updateMainStatsAttribute = () => {
    const currentCost = echoStats[index]?.cost;
    switch (currentCost) {
      case 1:
        return ["HP%", "ATK%", "DEF%"];
      case 3:
        return [
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
        ];
      case 4:
        return [
          "HP%",
          "ATK%",
          "DEF%",
          "Crit. Rate%",
          "Crit. Damage%",
          "Healing Bonus%",
        ];
      default:
        return [];
    }
  };

  useEffect(() => {
    const newMainStatsAttribute = updateMainStatsAttribute();
    if (
      JSON.stringify(newMainStatsAttribute) !==
      JSON.stringify(MainStatsAttribute)
    ) {
      setMainStatsAttribute(newMainStatsAttribute);
    }
  }, [echoStats, index, MainStatsAttribute]);

  const isPercentageStat = useCallback(
    (stat: string) => stat.includes("%"),
    []
  );

  const handleMainStatChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newStat = e.target.value;
      setEchoStats((prevEchoStats) => {
        const updatedStats = {
          ...prevEchoStats,
          [index]: {
            ...prevEchoStats[index],
            mainStat: newStat,
          },
        };
        return updatedStats;
      });
    },
    [setEchoStats, index]
  );

  const handleMainStatValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVal = isPercentageStat(echoStats[index].mainStat)
        ? parseFloat(e.target.value)
        : parseInt(e.target.value);
      setEchoStats((prevEchoStats) => ({
        ...prevEchoStats,
        [index]: {
          ...prevEchoStats[index],
          mainStatValue: newVal,
        },
      }));
    },
    [index, echoStats, isPercentageStat]
  );

  const handleSubStatChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>, subStatKey: SubStatType) => {
      const newStat = e.target.value;
      setEchoStats((prevEchoStats) => ({
        ...prevEchoStats,
        [index]: {
          ...prevEchoStats[index],
          [subStatKey]: {
            ...prevEchoStats[index][subStatKey],
            stat: newStat,
          },
        },
      }));
    },
    [index, setEchoStats]
  );

  const handleSubStatValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, subStatKey: SubStatType) => {
      const newVal = echoStats[index][subStatKey].stat.trim().includes("%")
        ? parseFloat(e.target.value)
        : parseInt(e.target.value);
      setEchoStats((prevEchoStats) => ({
        ...prevEchoStats,
        [index]: {
          ...prevEchoStats[index],
          [subStatKey]: {
            ...prevEchoStats[index][subStatKey],
            value: newVal,
          },
        },
      }));
    },
    [index, echoStats, setEchoStats]
  );

  const handleStatReset = useCallback(() => {
    setEchoStats((prevEchoStats) => {
      const updatedEchoStats = {
        ...prevEchoStats,
        [index]: {
          ...prevEchoStats[index],
          id: 0,
          name: "",
          set: 0,
          cost: 0,
          mainStat: "",
          mainStatValue: 0,
          selectedSubStat1: {
            ...prevEchoStats[index].selectedSubStat1,
            stat: "",
            value: 0,
          },
          selectedSubStat2: {
            ...prevEchoStats[index].selectedSubStat2,
            stat: "",
            value: 0,
          },
          selectedSubStat3: {
            ...prevEchoStats[index].selectedSubStat3,
            stat: "",
            value: 0,
          },
          selectedSubStat4: {
            ...prevEchoStats[index].selectedSubStat4,
            stat: "",
            value: 0,
          },
          selectedSubStat5: {
            ...prevEchoStats[index].selectedSubStat5,
            stat: "",
            value: 0,
          },
        },
      };
      return updatedEchoStats;
    });
  }, [index, setEchoStats]);

  async function fetchAllSavedItems(): Promise<EchoStat[]> {
    const savedItemsJson = localStorage.getItem("Echoes");
    return savedItemsJson ? JSON.parse(savedItemsJson) : [];
  }

  const handleSaveEcho = useCallback(async () => {
    const newItem = echoStats[index];
    const allSavedItems = await fetchAllSavedItems();

    const isDuplicate = allSavedItems.some(
      (item) =>
        item.id === newItem.id &&
        item.name === newItem.name &&
        item.set === newItem.set &&
        item.cost === newItem.cost &&
        item.mainStat === newItem.mainStat &&
        item.mainStatValue === newItem.mainStatValue &&
        item.selectedSubStat1.stat === newItem.selectedSubStat1.stat &&
        item.selectedSubStat1.value === newItem.selectedSubStat1.value &&
        item.selectedSubStat2.stat === newItem.selectedSubStat2.stat &&
        item.selectedSubStat2.value === newItem.selectedSubStat2.value &&
        item.selectedSubStat3.stat === newItem.selectedSubStat3.stat &&
        item.selectedSubStat3.value === newItem.selectedSubStat3.value &&
        item.selectedSubStat4.stat === newItem.selectedSubStat4.stat &&
        item.selectedSubStat4.value === newItem.selectedSubStat4.value &&
        item.selectedSubStat5.stat === newItem.selectedSubStat5.stat &&
        item.selectedSubStat5.value === newItem.selectedSubStat5.value
    );

    if (!isDuplicate) {
      if (newItem.set === 0) {
        setSelecteSet(true);
      } else {
        addEcho(newItem);
        handleStatReset();
      }
    } else {
      alert("This item already exists in storage.");
    }
  }, [echoStats, index, addEcho, fetchAllSavedItems, handleStatReset]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setSelecteSet(false);
    }
  };

  useEffect(() => {
    if (
      echoStats[index]?.mainStat !== "" &&
      echoStats[index]?.selectedSubStat1?.stat !== "" &&
      echoStats[index]?.selectedSubStat2?.stat !== "" &&
      echoStats[index]?.selectedSubStat3?.stat !== "" &&
      echoStats[index]?.selectedSubStat4?.stat !== "" &&
      echoStats[index]?.selectedSubStat5?.stat !== ""
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  });

  const handleEchoSet = () => {
    setSelecteSet(false);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVal(parseInt(e.target.value, 10));
  };

  useEffect(() => {
    setEchoStats((prevEchoStats) => ({
      ...prevEchoStats,
      [index]: {
        ...prevEchoStats[index],
        set: selectedVal,
      },
    }));
  }, [selectedVal]);

  useEffect(() => {
    if (selectedEcho?.sonataGroup.length === 1) {
      const newSet = selectedEcho.sonataGroup[0];
      setSelectedVal(newSet);
    }
  }, [selectedEcho, setSelectedVal]);

  return (
    <>
      <div className="CalcEcho-Container">
        {open && <EchoModal onClose={closeEchoModal} index={index} />}
        {echoStats[index].id !== 0 &&
          selsectSet &&
          selectedEcho?.sonataGroup.length !== 1 && (
            <div className="overlay" onClick={handleOverlayClick}>
              <div className="set-selector">
                <div className="set-selector-box">
                  <h3>Set:</h3>
                  <select
                    id="SonataSelect"
                    onChange={handleSelectChange}
                    value={
                      selectedEcho?.sonataGroup.length === 1
                        ? selectedEcho?.sonataGroup[0]
                        : selectedVal
                    }
                  >
                    {Object.values(echoes)
                      .find((echo) => echo.name === echoStats[index].name)
                      ?.sonataGroup.map((i) => {
                        const setData = WWSonataData.find(
                          (set) => set.id === i
                        );
                        return setData ? (
                          <option key={setData.id} value={setData.id}>
                            {setData.name}
                          </option>
                        ) : null;
                      })}
                  </select>
                  <button onClick={handleEchoSet}>Confirm</button>
                </div>
              </div>
            </div>
          )}
        <div className="calcEcho-box">
          <div className={index > 5 ? "calcEcho-box-1-add" : "calcEcho-box-1"}>
            <div
              className="calcEcho-modal-btn"
              onClick={index < 6 ? openEchoModal : undefined}
              aria-disabled={
                Object.values(echoStats)
                  .slice(1, 6)
                  .reduce((total, echo) => total + echo.cost, 0) > 12
              }
            >
              {echoStats[index].id !== 0 ? (
                <>
                  <img
                    className="Echo-icon"
                    src={
                      Object.values(echoes).find(
                        (i) => i.name === echoStats[index].name
                      )?.img
                    }
                  />
                </>
              ) : (
                <>
                  <img
                    className="Echo-icon"
                    src="https://cdn.wanderer.moe/wuthering-waves/icons/T_IconAchv_005.png"
                  />
                </>
              )}
            </div>
            {echoStats[index].id !== 0 && (
              <div className="echo-comp-echo-img">
                <img
                  className="Sonata-set-icon"
                  src={WWSonataData.find((S) => S.id === selectedVal)?.img}
                  onClick={() => setSelecteSet(true)}
                />
              </div>
            )}
          </div>
          <div className={index > 5 ? "calcEcho-box-2-add" : "calcEcho-box-2"}>
            {echoStats[index].id === 0 ? (
              <h3>Echo Not Selected</h3>
            ) : (
              <h3>Main Stat:</h3>
            )}
            <div className="calcEcho-box-flex">
              {echoStats[index].id !== 0 && (
                <select
                  id="CalcEchoStat-Select-1"
                  className="calcEcho-stat-select"
                  value={echoStats[index].mainStat}
                  onChange={handleMainStatChange}
                >
                  <option value="" disabled>
                    Select a Stat
                  </option>
                  {MainStatsAttribute.map((stat, index) => (
                    <option key={index} value={stat}>
                      {stat}
                    </option>
                  ))}
                </select>
              )}
              {echoStats[index].id !== 0 && (
                <input
                  id="Echo-Stat-Input-1"
                  disabled={echoStats[index].mainStat === ""}
                  className="calcEcho-stat-input"
                  type="number"
                  value={echoStats[index].mainStatValue}
                  step={isPercentageStat(echoStats[index].mainStat) ? 0.1 : 1}
                  min={0}
                  onChange={handleMainStatValueChange}
                />
              )}
            </div>
          </div>
          <div className={index > 5 ? "calcEcho-box-3-add" : "calcEcho-box-3"}>
            {echoStats[index].id === 0 ? <></> : <h3>Sub Stats:</h3>}
            <div className="calcEcho-box-flex">
              {echoStats[index].id !== 0 && (
                <select
                  id="CalcEchoStat-Select-2"
                  className="calcEcho-stat-select"
                  value={echoStats[index].selectedSubStat1.stat}
                  onChange={(e) => handleSubStatChange(e, "selectedSubStat1")}
                >
                  <option value="" disabled>
                    Select a Stat
                  </option>
                  {SubStatsAttribute.map((stat, index) => (
                    <option key={index} value={stat}>
                      {stat}
                    </option>
                  ))}
                </select>
              )}
              {echoStats[index].id !== 0 && (
                <>
                  <SelectInput
                    options={
                      subStatRolls(echoStats[index].selectedSubStat1.stat) ?? []
                    }
                    onValueChange={(value) =>
                      handleSubStatValueChange(value, "selectedSubStat1")
                    }
                    selectedValue={echoStats[index].selectedSubStat1.value}
                    disabled={echoStats[index].selectedSubStat1.stat === ""}
                  />
                </>
              )}
            </div>
          </div>
          <div className={index > 5 ? "calcEcho-box-4-add" : "calcEcho-box-4"}>
            {echoStats[index].id !== 0 && (
              <select
                id="CalcEchoStat-Select-3"
                className="calcEcho-stat-select"
                value={echoStats[index].selectedSubStat2.stat}
                onChange={(e) => handleSubStatChange(e, "selectedSubStat2")}
              >
                <option value="" disabled>
                  Select a Stat
                </option>
                {SubStatsAttribute.map((stat, index) => (
                  <option key={index} value={stat}>
                    {stat}
                  </option>
                ))}
              </select>
            )}
            {echoStats[index].id !== 0 && (
              <>
                <SelectInput
                  options={
                    subStatRolls(echoStats[index].selectedSubStat2.stat) ?? []
                  }
                  onValueChange={(value) =>
                    handleSubStatValueChange(value, "selectedSubStat2")
                  }
                  selectedValue={echoStats[index].selectedSubStat2.value}
                  disabled={echoStats[index].selectedSubStat2.stat === ""}
                />
              </>
            )}
          </div>
          <div className={index > 5 ? "calcEcho-box-5-add" : "calcEcho-box-5"}>
            {echoStats[index].id !== 0 && (
              <select
                id="CalcEchoStat-Select-4"
                className="calcEcho-stat-select"
                value={echoStats[index].selectedSubStat3.stat}
                onChange={(e) => handleSubStatChange(e, "selectedSubStat3")}
              >
                <option value="" disabled>
                  Select a Stat
                </option>
                {SubStatsAttribute.map((stat, index) => (
                  <option key={index} value={stat}>
                    {stat}
                  </option>
                ))}
              </select>
            )}
            {echoStats[index].id !== 0 && (
              <>
                <SelectInput
                  options={
                    subStatRolls(echoStats[index].selectedSubStat3.stat) ?? []
                  }
                  onValueChange={(value) =>
                    handleSubStatValueChange(value, "selectedSubStat3")
                  }
                  disabled={echoStats[index].selectedSubStat3.stat === ""}
                  selectedValue={echoStats[index].selectedSubStat3.value}
                />
              </>
            )}
          </div>
          <div className={index > 5 ? "calcEcho-box-6-add" : "calcEcho-box-6"}>
            {echoStats[index].id !== 0 && (
              <select
                id="CalcEchoStat-Select-5"
                className="calcEcho-stat-select"
                value={echoStats[index].selectedSubStat4.stat}
                onChange={(e) => handleSubStatChange(e, "selectedSubStat4")}
              >
                <option value="" disabled>
                  Select a Stat
                </option>
                {SubStatsAttribute.map((stat, index) => (
                  <option key={index} value={stat}>
                    {stat}
                  </option>
                ))}
              </select>
            )}
            {echoStats[index].id !== 0 && (
              <>
                <SelectInput
                  options={
                    subStatRolls(echoStats[index].selectedSubStat4.stat) ?? []
                  }
                  onValueChange={(value) =>
                    handleSubStatValueChange(value, "selectedSubStat4")
                  }
                  disabled={echoStats[index].selectedSubStat4.stat === ""}
                  selectedValue={echoStats[index].selectedSubStat4.value}
                />
              </>
            )}
          </div>
          <div className={index > 5 ? "calcEcho-box-7-add" : "calcEcho-box-7"}>
            {echoStats[index].id !== 0 && (
              <select
                id="CalcEchoStat-Select-6"
                className="calcEcho-stat-select"
                value={echoStats[index].selectedSubStat5.stat}
                onChange={(e) => handleSubStatChange(e, "selectedSubStat5")}
              >
                <option value="" disabled>
                  Select a Stat
                </option>
                {SubStatsAttribute.map((stat, index) => (
                  <option key={index} value={stat}>
                    {stat}
                  </option>
                ))}
              </select>
            )}
            {echoStats[index].id !== 0 && (
              <>
                <SelectInput
                  options={
                    subStatRolls(echoStats[index].selectedSubStat5.stat) ?? []
                  }
                  onValueChange={(value) =>
                    handleSubStatValueChange(value, "selectedSubStat5")
                  }
                  disabled={echoStats[index].selectedSubStat5.stat === ""}
                  selectedValue={echoStats[index].selectedSubStat5.value}
                />
              </>
            )}
          </div>
          <div className={index > 5 ? "calcEcho-box-8-add" : "calcEcho-box-8"}>
            {echoStats[index].id !== 0 && (
              <div>
                <button
                  className="calcEcho-stat-reset"
                  onClick={handleStatReset}
                >
                  Reset Echo
                </button>
                <button
                  className="calcEcho-stat-reset"
                  disabled={isDisabled}
                  onClick={handleSaveEcho}
                >
                  Save Echo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EchoComp;
