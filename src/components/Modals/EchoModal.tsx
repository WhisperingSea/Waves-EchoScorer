import { useEffect, useState } from "react";
import { useEchoes } from "../../contexts/CalcEchoContext";
import { useEchoContext } from "../../contexts/EchoDataContext";
import "./EchoModal.css";
import { WWSonataData } from "../../data/WWSonata";
import { useLocalStorageContext } from "../../contexts/LocalStorageContext";
import EchoComp from "../Cards/EchoComp";
import { useEchoScanner } from "../../hooks/EchoScanner";
import { Icons } from "../../data/Icons.ts";
import StoreEchoFilter from "./StoreEchoFilter.tsx";
import { useSearchFilter } from "../../contexts/SearchFilterContext.tsx";

interface EchoFeaturesModalProps {
  onClose: () => void;
  index: number;
  noSelect?: boolean;
}

interface FilterState {
  cost: number;
  sonata: number;
  stat: string | undefined;
  subStats: string[];
}

const EchoModal: React.FC<EchoFeaturesModalProps> = ({
  onClose,
  index,
  noSelect,
}) => {
  const { echoStats, setEchoStats, sonataGroup, sonataGroup2 } = useEchoes();
  const { echoes } = useEchoContext();
  const { storedEcho, selectedStoreEcho, setSelectedStoreEcho, removeEcho } =
    useLocalStorageContext();
  const { filteredStoreEchoes } = useSearchFilter();
  const { processImages, processedImages } = useEchoScanner();
  const [FilteredEchoes, setFilteredEchoes] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<number>(!noSelect ? 1 : 2);
  const [newEcho, setNewEcho] = useState(true);
  const [open, setOpen] = useState(false);
  const [fileSelected, setFileSelected] = useState<File[]>([]);
  const [Icon, setIcon] = useState<string>("");
  const [Icon3, setIcon3] = useState<string>("");
  const [Icon4, setIcon4] = useState<string>("");
  const [Icon5, setIcon5] = useState<string>("");
  const [Icon6, setIcon6] = useState<string>("");
  const [Icon7, setIcon7] = useState<string>("");
  const [filters, setFilters] = useState<FilterState>({
    cost: 0,
    sonata: 0,
    stat: undefined,
    subStats: [],
  });

  const openFilter = () => {
    setOpen(true);
  };

  const closeFilter = () => {
    setOpen(false);
  };

  useEffect(() => {
    const sonataId1 = WWSonataData.find((i) => i.name === sonataGroup);
    const sonataId2 = WWSonataData.find((i) => i.name === sonataGroup2);

    if (sonataId1 && sonataId2) {
      if (sonataGroup === sonataGroup2) {
        setFilteredEchoes(
          Object.values(echoes).filter((e) =>
            e.sonataGroup.includes(sonataId1.id)
          )
        );
      } else {
        setFilteredEchoes(
          Object.values(echoes).filter(
            (e) =>
              e.sonataGroup.includes(sonataId1.id) ||
              e.sonataGroup.includes(sonataId2.id)
          )
        );
      }
    } else {
      setFilteredEchoes([]);
    }
  }, [sonataGroup, sonataGroup2, WWSonataData, echoes]);

  const closeModal = () => {
    onClose();
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleEchoStatSelect = (name: string, cost: number, id: number) => {
    setEchoStats((prev) => ({
      ...prev,
      [index]: { ...prev[index], name: name, cost: cost, id: id },
    }));
    closeModal();
  };

  const handleFilterChange = (updatedFilters: {
    cost: number;
    sonata: number;
    stat: string | undefined;
    subStats: string[];
  }) => {
    setFilters(updatedFilters);
  };

  const handleEchoStoreSelect = (
    id: number,
    name: string,
    cost: number,
    set: number,
    mainStat: string,
    mainStatValue: number,
    substat1: string,
    substat1value: number,
    substat2: string,
    substat2value: number,
    substat3: string,
    substat3value: number,
    substat4: string,
    substat4value: number,
    substat5: string,
    substat5value: number
  ) => {
    setEchoStats((prevEcho) => ({
      ...prevEcho,
      [index]: {
        ...prevEcho[index],
        id,
        name,
        cost,
        set,
        mainStat,
        mainStatValue,
        selectedSubStat1: {
          ...prevEcho[index].selectedSubStat1,
          stat: substat1,
          value: substat1value,
        },
        selectedSubStat2: {
          ...prevEcho[index].selectedSubStat2,
          stat: substat2,
          value: substat2value,
        },
        selectedSubStat3: {
          ...prevEcho[index].selectedSubStat3,
          stat: substat3,
          value: substat3value,
        },
        selectedSubStat4: {
          ...prevEcho[index].selectedSubStat4,
          stat: substat4,
          value: substat4value,
        },
        selectedSubStat5: {
          ...prevEcho[index].selectedSubStat5,
          stat: substat5,
          value: substat5value,
        },
      },
    }));
    closeModal();
  };

  const handleStoreEchoSelect = (id: number) => {
    setSelectedStoreEcho(id);
  };

  const handleRemoveEcho = () => {
    removeEcho(StoreSelectedEcho ? StoreSelectedEcho.storeId : 0);
  };

  const StoreSelectedEcho = storedEcho.find(
    (i) => i.storeId === selectedStoreEcho
  );

  const handleStoreAddEcho = (name: string, cost: number, id: number) => {
    setEchoStats((prev) => ({
      ...prev,
      6: { ...prev[index], name: name, cost: cost, id: id },
    }));
  };

  useEffect(() => {
    if (echoStats[6].id === 0) {
      setNewEcho(true);
    } else {
      setNewEcho(false);
    }
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFileSelected(Array.from(event.target.files));
    }
  };

  const handleImageProcess = () => {
    processImages(fileSelected);
  };

  const icon = Object.values(Icons);

  useEffect(() => {
    var main = icon.find(
      (i) => i.name === StoreSelectedEcho?.mainStat.replace("%", "")
    );
    var sub1 = icon.find(
      (i) =>
        i.name === StoreSelectedEcho?.selectedSubStat1.stat.replace("%", "")
    );
    var sub2 = icon.find(
      (i) =>
        i.name === StoreSelectedEcho?.selectedSubStat2.stat.replace("%", "")
    );
    var sub3 = icon.find(
      (i) =>
        i.name === StoreSelectedEcho?.selectedSubStat3.stat.replace("%", "")
    );
    var sub4 = icon.find(
      (i) =>
        i.name === StoreSelectedEcho?.selectedSubStat4.stat.replace("%", "")
    );
    var sub5 = icon.find(
      (i) =>
        i.name === StoreSelectedEcho?.selectedSubStat5.stat.replace("%", "")
    );

    if (main) {
      setIcon(main.icon);
    }
    if (sub1) {
      setIcon3(sub1.icon);
    }
    if (sub2) {
      setIcon4(sub2.icon);
    }
    if (sub3) {
      setIcon5(sub3.icon);
    }
    if (sub4) {
      setIcon6(sub4.icon);
    }
    if (sub5) {
      setIcon7(sub5.icon);
    }
  }, [icon, Icons, StoreSelectedEcho]);

  return (
    <>
      <div className="overlay-echo-modal" onClick={handleOverlayClick}>
        <div className="CalcEcho-Modal-Container">
          {!noSelect && (
            <button
              className="CalcEcho-modal-btn"
              onClick={() => setActiveTab(1)}
            >
              Echoes
            </button>
          )}
          <button
            className="CalcEcho-modal-btn"
            onClick={() => setActiveTab(2)}
          >
            My Echoes
          </button>
          <button
            className="CalcEcho-modal-btn"
            onClick={() => setActiveTab(3)}
          >
            Add Echoes
          </button>
          {activeTab === 1 && !noSelect && (
            <div className="calcEcho-modal-box">
              {activeTab === 1 &&
                FilteredEchoes &&
                FilteredEchoes?.sort((a, b) => {
                  if (b.cost === a.cost) {
                    return a.name.localeCompare(b.name);
                  }
                  return b.cost - a.cost;
                }).map((item) => (
                  <div
                    key={item.id}
                    className="echo-modal-cards"
                    onClick={() =>
                      handleEchoStatSelect(item.name, item.cost, item.id)
                    }
                  >
                    <div className="echo-modal-card-top">
                      <img src={item.img} alt={`${item.name} Icon`} />
                    </div>
                    <div className="echo-modal-card-bottom">
                      <div className="echo-name">
                        <h3 className="">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
          {activeTab === 2 && (
            <div className="calcEcho-modal-box-2">
              <div className="calcEcho-modal-store-box">
                {filteredStoreEchoes &&
                  filteredStoreEchoes
                    .sort((a, b) => {
                      if (b.cost === a.cost) {
                        return a.name.localeCompare(b.name);
                      }
                      return b.cost - a.cost;
                    })
                    .map((item) => (
                      <div className="relative-box" key={item.storeId}>
                        <div
                          className="echo-modal-cards-store"
                          onClick={() => handleStoreEchoSelect(item.storeId)}
                        >
                          <div className="echo-modal-card-top">
                            <img
                              src={
                                Object.values(echoes).find(
                                  (i) => i.name === item.name
                                )?.img
                              }
                              alt={`${item.name} Icon`}
                            />
                          </div>
                          <h3 className="echo-modal-card-cost">{item.cost}</h3>
                          <img
                            className="echo-modal-card-stat"
                            src={
                              icon.find(
                                (i) => i.name === item.mainStat.replace("%", "")
                              )?.icon
                            }
                          />
                          <img
                            className="echo-modal-card-set"
                            src={
                              WWSonataData.find((I) => I.id === item.set)?.img
                            }
                          />
                        </div>
                      </div>
                    ))}
              </div>
              <div className="echo-modal-stats">
                {StoreSelectedEcho ? (
                  <>
                    <h3 className="no-margin">{StoreSelectedEcho.name}</h3>
                    <h3 className="no-margin">Main Stat -</h3>
                    <div className="echo-modal-stats-box">
                      <img className="stat-Icons" src={Icon} />
                      <h3 className="margin-box-text">
                        {StoreSelectedEcho.mainStat.replace("%", "")}
                      </h3>
                      <h3>
                        {StoreSelectedEcho.mainStat.includes("%")
                          ? `${StoreSelectedEcho.mainStatValue.toFixed(1)}%`
                          : `${StoreSelectedEcho.mainStatValue}`}
                      </h3>
                    </div>
                    <h3 className="no-margin">Sub Stats -</h3>
                    <div className="echo-modal-stats-box">
                      <img className="stat-Icons" src={Icon3} />
                      <h3 className="margin-box-text">
                        {StoreSelectedEcho.selectedSubStat1.stat.replace(
                          "%",
                          ""
                        )}
                      </h3>
                      <h3>
                        {StoreSelectedEcho.selectedSubStat1.stat.includes("%")
                          ? `${StoreSelectedEcho.selectedSubStat1.value.toFixed(
                              1
                            )}%`
                          : `${StoreSelectedEcho.selectedSubStat1.value}`}
                      </h3>
                    </div>
                    <div className="echo-modal-stats-box">
                      <img className="stat-Icons" src={Icon4} />
                      <h3 className="margin-box-text">
                        {StoreSelectedEcho.selectedSubStat2.stat.replace(
                          "%",
                          ""
                        )}
                      </h3>
                      <h3>
                        {StoreSelectedEcho.selectedSubStat2.stat.includes("%")
                          ? `${StoreSelectedEcho.selectedSubStat2.value.toFixed(
                              1
                            )}%`
                          : `${StoreSelectedEcho.selectedSubStat2.value}`}
                      </h3>
                    </div>
                    <div className="echo-modal-stats-box">
                      <img className="stat-Icons" src={Icon5} />
                      <h3 className="margin-box-text">
                        {StoreSelectedEcho.selectedSubStat3.stat.replace(
                          "%",
                          ""
                        )}
                      </h3>
                      <h3>
                        {StoreSelectedEcho.selectedSubStat3.stat.includes("%")
                          ? `${StoreSelectedEcho.selectedSubStat3.value.toFixed(
                              1
                            )}%`
                          : `${StoreSelectedEcho.selectedSubStat3.value}`}
                      </h3>
                    </div>
                    <div className="echo-modal-stats-box">
                      <img className="stat-Icons" src={Icon6} />
                      <h3 className="margin-box-text">
                        {StoreSelectedEcho.selectedSubStat4.stat.replace(
                          "%",
                          ""
                        )}
                      </h3>
                      <h3>
                        {StoreSelectedEcho.selectedSubStat4.stat.includes("%")
                          ? `${StoreSelectedEcho.selectedSubStat4.value.toFixed(
                              1
                            )}%`
                          : `${StoreSelectedEcho.selectedSubStat4.value}`}
                      </h3>
                    </div>
                    <div className="echo-modal-stats-box">
                      <img className="stat-Icons" src={Icon7} />
                      <h3 className="margin-box-text">
                        {StoreSelectedEcho.selectedSubStat5.stat.replace(
                          "%",
                          ""
                        )}
                      </h3>
                      <h3>
                        {StoreSelectedEcho.selectedSubStat5.stat.includes("%")
                          ? `${StoreSelectedEcho.selectedSubStat5.value.toFixed(
                              1
                            )}%`
                          : `${StoreSelectedEcho.selectedSubStat5.value}`}
                      </h3>
                    </div>
                    <div className="echo-modal-btn-box">
                      <button
                        className="echo-modal-select-btn"
                        onClick={() =>
                          handleEchoStoreSelect(
                            StoreSelectedEcho.storeId,
                            StoreSelectedEcho.name,
                            StoreSelectedEcho.cost,
                            StoreSelectedEcho.set,
                            StoreSelectedEcho.mainStat,
                            StoreSelectedEcho.mainStatValue,
                            StoreSelectedEcho.selectedSubStat1.stat,
                            StoreSelectedEcho.selectedSubStat1.value,
                            StoreSelectedEcho.selectedSubStat2.stat,
                            StoreSelectedEcho.selectedSubStat2.value,
                            StoreSelectedEcho.selectedSubStat3.stat,
                            StoreSelectedEcho.selectedSubStat3.value,
                            StoreSelectedEcho.selectedSubStat4.stat,
                            StoreSelectedEcho.selectedSubStat4.value,
                            StoreSelectedEcho.selectedSubStat5.stat,
                            StoreSelectedEcho.selectedSubStat5.value
                          )
                        }
                      >
                        Select Echo
                      </button>
                      <button
                        className="echo-modal-delete-btn"
                        onClick={handleRemoveEcho}
                      >
                        Delete Echo
                      </button>
                    </div>
                  </>
                ) : storedEcho.length === 0 ? (
                  <h3>No Echoes in storage</h3>
                ) : (
                  <h3>Select Echoes to view it's stats</h3>
                )}
              </div>
              <div className="calcEcho-modal-store-filter" onClick={openFilter}>
                <img
                  className="echo-filter-btn"
                  src={
                    "https://sohansc13.github.io/wuthering-waves-assets/images/icons_ui2/Filter.png"
                  }
                />
              </div>
              {open && (
                <StoreEchoFilter
                  onClose={closeFilter}
                  initialCost={filters.cost}
                  initialSonata={filters.sonata}
                  initialStat={filters.stat}
                  initialSubStats={filters.subStats}
                  onFilterChange={handleFilterChange}
                />
              )}
            </div>
          )}
          {activeTab === 3 && (
            <div className="calcEcho-modal-box-3">
              <div
                className={
                  newEcho
                    ? "calcEcho-modal-add-box"
                    : "calcEcho-modal-add-box-select"
                }
              >
                {newEcho ? (
                  Object.values(echoes).map((item) => (
                    <div
                      key={item.name}
                      className="echo-modal-cards-2"
                      onClick={() =>
                        handleStoreAddEcho(item.name, item.cost, item.id)
                      }
                    >
                      <div className="echo-modal-card-top-2">
                        <img src={item.img} alt={`${item.name} Icon`} />
                      </div>
                      <div className="echo-modal-card-bottom-2">
                        <div className="echo-name-2">
                          <h3>{item.name}</h3>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <EchoComp index={6} />
                  </>
                )}
              </div>
              <div className="calcEvho-modal-add-box-2">
                <input
                  className="Image-addEcho-input"
                  id="Echo-Image-Select"
                  type="file"
                  onChange={handleFileChange}
                />
                <button onClick={handleImageProcess}>Process</button>
                <div>
                  {processedImages.map((imageSrc, index) => (
                    <div key={index}>
                      <img
                        src={imageSrc}
                        alt={`Processed ${index}`}
                        height="300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EchoModal;
