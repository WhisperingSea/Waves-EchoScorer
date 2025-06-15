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
  const { processImages, processedImages, isProcessing } = useEchoScanner();
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
  const [imgReset, setImgReset] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const W = window.innerWidth;

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

  useEffect(() => {
    if (StoreSelectedEcho && W < 768) {
      setIsVisible(true);
    }
  }, [StoreSelectedEcho, W]);

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
    setIsVisible2(false);
    setImgReset(true);
  };

  const handleImageReset = () => {
    setFileSelected([]);
    setImgReset(false);
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

  console.log("is processing", isProcessing);

  return (
    <>
      <div className="overlay-echo-modal" onClick={handleOverlayClick}>
        <img
          className="echo-modal-close"
          src="https://whisperingsea.github.io/wuthering-waves-assets/images/CloseButton.png"
          onClick={closeModal}
        />
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
            onClick={() => {
              setActiveTab(2), setIsVisible2(false);
            }}
          >
            My Echoes
          </button>
          <button
            className="CalcEcho-modal-btn"
            onClick={() => {
              setActiveTab(3), setIsVisible2(false);
            }}
          >
            Add Echoes
          </button>
          {W < 768 && activeTab === 3 ? (
            <>
              <button
                className="CalcEcho-modal-btn"
                onClick={() => setIsVisible2(true)}
              >
                Image Proc
              </button>
            </>
          ) : (
            ""
          )}
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
              <div
                className={`${
                  isVisible ? "echo-modal-stats-sidebar" : "echo-modal-stats"
                }`}
              >
                {StoreSelectedEcho ? (
                  <>
                    {W < 768 && isVisible && (
                      <img
                        className="echo-modal-menu"
                        src="https://whisperingsea.github.io/wuthering-waves-assets/images/CloseButton.png"
                        onClick={() => setIsVisible(false)}
                      />
                    )}
                    <h3 className="no-margin echo-stat-box-name">
                      <b>{StoreSelectedEcho.name}</b>
                    </h3>
                    <h3 className="no-margin">Main Stat -</h3>
                    <div className="echo-modal-stats-box">
                      <img className="stat-Icons" src={Icon} />
                      <h3 className="margin-box-text">
                        {StoreSelectedEcho.mainStat
                          .replace("%", "")
                          .replace("DMG Bonus", "Bonus")}
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
                        {StoreSelectedEcho.selectedSubStat1.stat
                          .replace("%", "")
                          .replace("DMG Bonus", "Bonus")}
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
                        {StoreSelectedEcho.selectedSubStat2.stat
                          .replace("%", "")
                          .replace("DMG Bonus", "Bonus")}
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
                        {StoreSelectedEcho.selectedSubStat3.stat
                          .replace("%", "")
                          .replace("DMG Bonus", "Bonus")}
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
                        {StoreSelectedEcho.selectedSubStat4.stat
                          .replace("%", "")
                          .replace("DMG Bonus", "Bonus")}
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
                        {StoreSelectedEcho.selectedSubStat5.stat
                          .replace("%", "")
                          .replace("DMG Bonus", "Bonus")}
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
                  <h3 className="echo-select-text">
                    Select Echoes to view it's stats
                  </h3>
                )}
              </div>
              <div className="calcEcho-modal-store-filter" onClick={openFilter}>
                <img
                  className="echo-filter-btn"
                  src={
                    "https://whisperingsea.github.io/wuthering-waves-assets/images/icons_ui2/Filter.png"
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
                  isProcessing ? (
                    <div className="processing-screen">
                      <div className="spinner"></div>
                      <h3 className="process-text">Image is Processing</h3>
                    </div>
                  ) : (
                    Object.values(echoes).sort((a, b) => {
                      if (a.cost !== b.cost) {
                        return a.cost - b.cost;
                      }
                      return a.name.localeCompare(b.name);
                    }).map((item) => (
                      <div
                        key={item.name}
                        className="echo-modal-cards-2"
                        onClick={() =>
                          handleStoreAddEcho(item.name, item.cost, item.id)
                        }
                      >
                        <div className="echo-modal-card-top-2">
                          <img src={item.img} alt={`${item.name} Icon`} title={item.name}/>
                        </div>
                      </div>
                    ))
                  )
                ) : (
                  <>
                    {isProcessing ? (
                      <div className="processing-screen">
                        <div className="spinner"></div>
                        <h3 className="process-text">Image is Processing</h3>
                      </div>
                    ) : (
                      <EchoComp index={6} />
                    )}
                  </>
                )}
              </div>
              <div
                className={
                  isVisible2
                    ? "calcEcho-modal-add-box-2-sidebar"
                    : "calcEcho-modal-add-box-2"
                }
              >
                <div className="calcEcho-modal-add-flex-box">
                  <label
                    htmlFor="Echo-Image-Select"
                    className="custom-file-upload"
                  >
                    Choose File
                  </label>
                  <input
                    className="Image-addEcho-input"
                    id="Echo-Image-Select"
                    type="file"
                    onChange={handleFileChange}
                  />

                  {imgReset ? (
                    <button
                      className="image-process-btn"
                      onClick={handleImageReset}
                    >
                      Reset
                    </button>
                  ) : (
                    <button
                      className="image-process-btn"
                      onClick={handleImageProcess}
                    >
                      Process
                    </button>
                  )}
                </div>
                {fileSelected.map((imageSrc, index) => (
                  <div key={index}>
                    <p style={{ margin: 0 }}>{imageSrc.name}</p>
                  </div>
                ))}
                <div>
                  {processedImages.map((imageSrc, index) => (
                    <div key={index}>
                      <img
                        src={imageSrc}
                        alt={`Processed ${index}`}
                        style={
                          imgReset
                            ? {
                                display: "block",
                                height: "auto",
                                width: W < 481 ? "200px" : "300px",
                              }
                            : { display: "none" }
                        }
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="process-img-intsruction">
                    How to use Image Processor
                  </p>
                  <p>
                    <b style={{ color: "red" }}>
                      Important: Please use the same kind of image as shown
                      below. No editing or cropping is needed. Only one image
                      can be processed at a time
                    </b>
                  </p>
                  <img
                    className="example-echo-img"
                    src="https://whisperingsea.github.io/wuthering-waves-assets/images/DreamlessEcho.png"
                  />
                  <p>
                    <b>
                      • It may take up to 5-10 seconds to process the image.
                    </b>
                    <br />
                  </p>
                  <p>
                    <b>
                      • After the processing is done, the stats will be shown on
                      left box and an cropped up image on right box for
                      comparision. The Image processingg may not be 100% correct
                      all the time so please make changes manually if required.
                    </b>
                  </p>
                  <p>
                    <b>
                      • Make sure to wait until the screen looks like below
                      image.
                    </b>
                  </p>
                  <img
                    className="example-echo-img"
                    src="https://whisperingsea.github.io/wuthering-waves-assets/images/ImageProcessor2.png"
                  />
                  <p>
                    <b>
                      • Please make sure to change the Sonata Set manually as
                      the image processor does not support it.
                    </b>
                  </p>
                  <div>
                    <img src="https://whisperingsea.github.io/wuthering-waves-assets/images/ImageProcessor.png" />
                  </div>
                  <p>
                    <b>
                      • Once done, scroll down on left box and hit the Save Echo
                      button and it'll be added into My Echoes tab.
                    </b>
                  </p>
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
