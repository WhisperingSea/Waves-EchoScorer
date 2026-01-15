import { useEffect, useState } from "react";
import { useEchoes } from "../../contexts/CalcEchoContext";
import { useEchoContext } from "../../contexts/EchoDataContext";
import "./EchoModal.css";
import { WWSonataData } from "../../data/WWSonata";
import { WWEchoesJSON } from "../../data/WWEchoes";
import { useLocalStorageContext } from "../../contexts/LocalStorageContext";
import EchoComp from "../Cards/EchoComp";
import { useEchoScanner } from "../../hooks/EchoScanner";
import { Icons } from "../../data/Icons.ts";
import StoreEchoFilter from "./StoreEchoFilter.tsx";
import { useSearchFilter } from "../../contexts/SearchFilterContext.tsx";
import { useEchoOCR } from "../../hooks/useEchoOCR";

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

interface ProcessedEchoData {
  mainStat: string;
  mainValue: string;
  flatStat: string;
  flatValue: string;
  subStats: Array<{ stat: string; value: string }>;
  matchedSonataId: number | null;
  matchedEchoId: number | null;
  selectedSonataId: number | null;
  selectedEchoId: number | null;
  echoImage?: string;
}

const EchoModal: React.FC<EchoFeaturesModalProps> = ({
  onClose,
  index,
  noSelect,
}) => {
  const { echoStats, setEchoStats, sonataGroup, sonataGroup2 } = useEchoes();
  const { echoes } = useEchoContext();
  const { storedEcho, selectedStoreEcho, setSelectedStoreEcho, removeEcho, addEcho, addEchoBatch } =
    useLocalStorageContext();
  const { filteredStoreEchoes } = useSearchFilter();
  const { processImages, processedImages, isProcessing } = useEchoScanner();
  const { processEchoImage } = useEchoOCR();
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
  const [importImageUrl, setImportImageUrl] = useState<string | null>(null);
  const [isImporting, setIsImporting] = useState(false);
  const [processedEchoes, setProcessedEchoes] = useState<ProcessedEchoData[]>([]);
  const [importProgress, setImportProgress] = useState<string>("");
  const [savedEchoes, setSavedEchoes] = useState<Record<number, boolean>>({});
  const W = window.innerWidth;

  const normalizePercentValue = (stat: string, raw: string | number) => {
    const str = String(raw).trim();
    const num = parseFloat(str);
    if (!Number.isFinite(num)) return 0;

    // If the raw value explicitly has %, it's a percentage - just return the number
    if (str.includes("%")) {
      return num;
    }

    // If no % in the value, check if it should be scaled
    // Only scale very small decimals (< 1) for percentage stats
    const statText = stat.toLowerCase();
    const looksLikePercentStat =
      statText.includes("%") ||
      statText.includes("crit") ||
      statText.includes("bonus") ||
      statText.includes("regen") ||
      statText.includes("rate") ||
      statText.includes("energy");

    // Scale only true decimals (0.44 -> 44), not already-formatted values
    if (looksLikePercentStat && num > 0 && num < 1) {
      return num * 100;
    }

    return num;
  };

  const normalizeStatName = (stat: string, value?: string | number) => {
    if (!stat) return "";
    
    const cleaned = stat
      .trim()
      .replace(/\s+/g, " ")
      .replace(/^Crit\s+/, "Crit. ")
      .replace(/Crit\.?\s+(DMG|Rate)/, (match, suffix) => `Crit. ${suffix}`)
      .replace(/(\w)\s+(Bonus)/, "$1 $2");

    // Reject obvious OCR errors
    const lower = cleaned.toLowerCase();
    if (lower === "trash" || lower.length === 0 || lower.includes("error")) {
      return "";
    }

    // Exact stat names expected by Echo Scorer (from WWEchoStats and WWSubstats)
    const validStats = [
      "HP", "DEF", "ATK",
      "HP%", "DEF%", "ATK%",
      "Crit. Rate%", "Crit. DMG%",
      "Energy Regen%",
      "Healing Bonus%",
      "Glacio DMG Bonus%",
      "Fusion DMG Bonus%",
      "Electro DMG Bonus%",
      "Aero DMG Bonus%",
      "Spectro DMG Bonus%",
      "Havoc DMG Bonus%",
      "Basic Attack DMG Bonus%", 
      "Heavy Attack DMG Bonus%",
      "Resonance Skill DMG Bonus%", 
      "Resonance Liberation DMG Bonus%"
    ];

    // PRIORITY: Special handling for ATK/DEF/HP: determine if flat or percentage based on value
    // This must be checked BEFORE exact match, so threshold logic takes precedence
    if (value !== undefined) {
      const valueStr = String(value).replace("%", "").trim();
      const num = parseFloat(valueStr);
      if (cleaned === "ATK" || cleaned.toLowerCase() === "atk") {
        // ATK%: 6.4-11.6 | ATK flat: 30-60
        return num < 20 ? "ATK%" : "ATK";
      }
      if (cleaned === "DEF" || cleaned.toLowerCase() === "def") {
        // DEF%: 8.1-14.7 | DEF flat: 40-70
        return num < 20 ? "DEF%" : "DEF";
      }
      if (cleaned === "HP" || cleaned.toLowerCase() === "hp") {
        // HP%: 6.4-11.6 | HP flat: 320-580
        return num < 100 ? "HP%" : "HP";
      }
    }

    // Try exact match first (after ATK/DEF/HP check)
    if (validStats.includes(cleaned)) {
      return cleaned;
    }

    // Try case-insensitive match
    const match = validStats.find(v => v.toLowerCase() === lower);
    if (match) {
      return match;
    }

    // Handle common patterns and add % suffix if needed
    const withPercent = cleaned.endsWith("%") ? cleaned : cleaned + "%";
    const matchWithPercent = validStats.find(v => v.toLowerCase() === withPercent.toLowerCase());
    if (matchWithPercent) {
      return matchWithPercent;
    }

    // If it looks like a bonus but doesn't have DMG, add it
    if (cleaned.includes("Bonus") && !cleaned.includes("DMG")) {
      const asDMGBonus = cleaned.replace("Bonus", "DMG Bonus");
      const dmgMatch = validStats.find(v => v.toLowerCase() === (asDMGBonus + "%").toLowerCase());
      if (dmgMatch) {
        return dmgMatch;
      }
    }

    // If no match and it's obviously incomplete/corrupted, return empty
    if (cleaned.length < 2) return "";
    
    return cleaned;
  };

  const isPercentStat = (stat: string) => {
    // If stat name ends with %, it's definitely a percentage
    if (stat.endsWith("%")) return true;
    
    // For ATK/DEF/HP without %, they're flat values
    const lower = stat.toLowerCase();
    if (lower === "atk" || lower === "def" || lower === "hp") return false;
    
    // Everything else with these keywords is percentage
    return (
      lower.includes("bonus") ||
      lower.includes("rate") ||
      lower.includes("regen") ||
      lower.includes("energy")
    );
  };

  const formatStatValue = (stat: string, value: number) => {
    if (!Number.isFinite(value)) return "";
    if (isPercentStat(stat)) {
      const val = value % 1 === 0 ? value : Number(value.toFixed(1));
      return `${val}%`;
    }
    return value % 1 === 0 ? String(value) : value.toFixed(1);
  };

  const handleClearAllSavedEchoes = () => {
    const confirmed = window.confirm("Clear all saved echoes?");
    if (!confirmed) return;
    storedEcho.forEach((e) => removeEcho(e.storeId));
    setSavedEchoes({});
  };

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
        mainStat: normalizeStatName(mainStat, mainStatValue),
        mainStatValue: normalizePercentValue(mainStat, mainStatValue),
        selectedSubStat1: {
          ...prevEcho[index].selectedSubStat1,
          stat: normalizeStatName(substat1, substat1value),
          value: normalizePercentValue(substat1, substat1value),
        },
        selectedSubStat2: {
          ...prevEcho[index].selectedSubStat2,
          stat: normalizeStatName(substat2, substat2value),
          value: normalizePercentValue(substat2, substat2value),
        },
        selectedSubStat3: {
          ...prevEcho[index].selectedSubStat3,
          stat: normalizeStatName(substat3, substat3value),
          value: normalizePercentValue(substat3, substat3value),
        },
        selectedSubStat4: {
          ...prevEcho[index].selectedSubStat4,
          stat: normalizeStatName(substat4, substat4value),
          value: normalizePercentValue(substat4, substat4value),
        },
        selectedSubStat5: {
          ...prevEcho[index].selectedSubStat5,
          stat: normalizeStatName(substat5, substat5value),
          value: normalizePercentValue(substat5, substat5value),
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

  const handleImportImageFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setImportImageUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcessImportImage = async () => {
    if (!importImageUrl) return;
    setIsImporting(true);
    setImportProgress("Processing image...");
    try {
      const result = await processEchoImage(importImageUrl, (progress) => {
        setImportProgress(`Processing: ${progress}`);
      });
      setProcessedEchoes(
        result.echoImages.map((img, idx) => ({
          mainStat: result.echoStats[idx]?.mainStat || "",
          mainValue: result.echoStats[idx]?.mainValue || "",
          flatStat: result.echoStats[idx]?.flatStat || "",
          flatValue: result.echoStats[idx]?.flatValue || "",
          subStats: result.echoStats[idx]?.subStats || [],
          matchedSonataId: result.matchedSonatas[idx]?.id || null,
          matchedEchoId: result.matchedEchoes[idx]?.id || null,
          selectedSonataId: result.matchedSonatas[idx]?.id || null,
          selectedEchoId: result.matchedEchoes[idx]?.id || null,
          echoImage: img,
        }))
      );
      setSavedEchoes({});
      setImportProgress("");
    } catch (error) {
      console.error("Error processing image:", error);
      setImportProgress("Error processing image");
    } finally {
      setIsImporting(false);
    }
  };

  const handleSaveAllImportedEchoes = () => {
    // Build array of echoes to persist to local storage
    const echoesToAdd = processedEchoes
      .filter((echo) => echo.selectedEchoId)
      .map((echo) => {
        const echoData = WWEchoesJSON.find((e) => e.id === echo.selectedEchoId);
        if (!echoData) return null;
        
        return {
          name: echoData.name,
          cost: echoData.cost,
          id: echoData.id,
          set: echo.selectedSonataId || 1,
          mainStat: normalizeStatName(echo.mainStat, echo.mainValue),
          mainStatValue: normalizePercentValue(echo.mainStat, echo.mainValue),
          selectedSubStat1: {
            stat: normalizeStatName(echo.subStats[0]?.stat || "", echo.subStats[0]?.value ?? 0),
            value: normalizePercentValue(echo.subStats[0]?.stat || "", echo.subStats[0]?.value ?? 0),
          },
          selectedSubStat2: {
            stat: normalizeStatName(echo.subStats[1]?.stat || "", echo.subStats[1]?.value ?? 0),
            value: normalizePercentValue(echo.subStats[1]?.stat || "", echo.subStats[1]?.value ?? 0),
          },
          selectedSubStat3: {
            stat: normalizeStatName(echo.subStats[2]?.stat || "", echo.subStats[2]?.value ?? 0),
            value: normalizePercentValue(echo.subStats[2]?.stat || "", echo.subStats[2]?.value ?? 0),
          },
          selectedSubStat4: {
            stat: normalizeStatName(echo.subStats[3]?.stat || "", echo.subStats[3]?.value ?? 0),
            value: normalizePercentValue(echo.subStats[3]?.stat || "", echo.subStats[3]?.value ?? 0),
          },
          selectedSubStat5: {
            stat: normalizeStatName(echo.subStats[4]?.stat || "", echo.subStats[4]?.value ?? 0),
            value: normalizePercentValue(echo.subStats[4]?.stat || "", echo.subStats[4]?.value ?? 0),
          },
        };
      })
      .filter((echo): echo is NonNullable<typeof echo> => echo !== null);

    // Add all echoes in one batch to get unique IDs
    if (echoesToAdd.length > 0) {
      addEchoBatch(echoesToAdd);
    }

    // Apply directly into Echo Scorer slots 1-5 in order
    setEchoStats((prev) => {
      const updated = { ...prev };
      processedEchoes.forEach((echo, idx) => {
        const slot = idx + 1; // fill slots 1..5
        if (slot <= 5 && echo.selectedEchoId) {
          const echoData = WWEchoesJSON.find((e) => e.id === echo.selectedEchoId);
          if (echoData) {
            updated[slot] = {
              ...updated[slot],
              id: echoData.id,
              name: echoData.name,
              cost: echoData.cost,
              set: echo.selectedSonataId || 1,
              mainStat: normalizeStatName(echo.mainStat, echo.mainValue),
              mainStatValue: normalizePercentValue(echo.mainStat, echo.mainValue),
              selectedSubStat1: {
                stat: normalizeStatName(echo.subStats[0]?.stat || "", echo.subStats[0]?.value ?? 0),
                value: normalizePercentValue(echo.subStats[0]?.stat || "", echo.subStats[0]?.value ?? 0),
              },
              selectedSubStat2: {
                stat: normalizeStatName(echo.subStats[1]?.stat || "", echo.subStats[1]?.value ?? 0),
                value: normalizePercentValue(echo.subStats[1]?.stat || "", echo.subStats[1]?.value ?? 0),
              },
              selectedSubStat3: {
                stat: normalizeStatName(echo.subStats[2]?.stat || "", echo.subStats[2]?.value ?? 0),
                value: normalizePercentValue(echo.subStats[2]?.stat || "", echo.subStats[2]?.value ?? 0),
              },
              selectedSubStat4: {
                stat: normalizeStatName(echo.subStats[3]?.stat || "", echo.subStats[3]?.value ?? 0),
                value: normalizePercentValue(echo.subStats[3]?.stat || "", echo.subStats[3]?.value ?? 0),
              },
              selectedSubStat5: {
                stat: normalizeStatName(echo.subStats[4]?.stat || "", echo.subStats[4]?.value ?? 0),
                value: normalizePercentValue(echo.subStats[4]?.stat || "", echo.subStats[4]?.value ?? 0),
              },
            };
          }
        }
      });
      return updated;
    });

    setProcessedEchoes([]);
    setImportImageUrl(null);
    setSavedEchoes({});
    closeModal();
  };

  const handleSaveIndividualEcho = (idx: number) => {
    const echo = processedEchoes[idx];
    if (echo.selectedEchoId) {
      const echoData = WWEchoesJSON.find((e) => e.id === echo.selectedEchoId);
      if (echoData) {
        const newEcho = {
          name: echoData.name,
          cost: echoData.cost,
          id: echoData.id,
          set: echo.selectedSonataId || 1,
          mainStat: normalizeStatName(echo.mainStat, echo.mainValue),
          mainStatValue: normalizePercentValue(echo.mainStat, echo.mainValue),
          selectedSubStat1: {
            stat: normalizeStatName(echo.subStats[0]?.stat || "", echo.subStats[0]?.value ?? 0),
            value: normalizePercentValue(echo.subStats[0]?.stat || "", echo.subStats[0]?.value ?? 0),
          },
          selectedSubStat2: {
            stat: normalizeStatName(echo.subStats[1]?.stat || "", echo.subStats[1]?.value ?? 0),
            value: normalizePercentValue(echo.subStats[1]?.stat || "", echo.subStats[1]?.value ?? 0),
          },
          selectedSubStat3: {
            stat: normalizeStatName(echo.subStats[2]?.stat || "", echo.subStats[2]?.value ?? 0),
            value: normalizePercentValue(echo.subStats[2]?.stat || "", echo.subStats[2]?.value ?? 0),
          },
          selectedSubStat4: {
            stat: normalizeStatName(echo.subStats[3]?.stat || "", echo.subStats[3]?.value ?? 0),
            value: normalizePercentValue(echo.subStats[3]?.stat || "", echo.subStats[3]?.value ?? 0),
          },
          selectedSubStat5: {
            stat: normalizeStatName(echo.subStats[4]?.stat || "", echo.subStats[4]?.value ?? 0),
            value: normalizePercentValue(echo.subStats[4]?.stat || "", echo.subStats[4]?.value ?? 0),
          },
        };
        addEcho(newEcho);
        setSavedEchoes((prev) => ({ ...prev, [idx]: true }));
      }
    }
  };

  const handleUpdateProcessedEcho = (
    idx: number,
    field: "selectedSonataId" | "selectedEchoId",
    value: number
  ) => {
    const updated = [...processedEchoes];
    updated[idx] = { ...updated[idx], [field]: value };
    setProcessedEchoes(updated);
  };

  const resolveSonataIconSrc = (id: number | null) => {
    if (!id) return "";
    const sonata = WWSonataData.find((s) => s.id === id);
    if (!sonata) return "";
    if (/^https?:\/\//.test(sonata.img)) return sonata.img;
    const base = import.meta.env.BASE_URL ?? "/";
    return `${base}${sonata.img.replace(/^\//, "")}`;
  };

  const resolveEchoImageSrc = (id: number | null) => {
    if (!id) return "";
    const echo = WWEchoesJSON.find((e) => e.id === id);
    if (!echo) return "";
    if (/^https?:\/\//.test(echo.img)) return echo.img;
    const base = import.meta.env.BASE_URL ?? "/";
    return `${base}${echo.img.replace(/^\//, "")}`;
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
          <button
            className="CalcEcho-modal-btn"
            onClick={() => {
              setActiveTab(4), setIsVisible2(false);
            }}
          >
            Import from Image
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
              {storedEcho.length > 0 && (
                <div className="echo-tab-actions">
                  <button
                    className="echo-modal-delete-btn"
                    onClick={handleClearAllSavedEchoes}
                  >
                    Clear Saved Echoes
                  </button>
                </div>
              )}
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
                      <h3>{formatStatValue(StoreSelectedEcho.mainStat, StoreSelectedEcho.mainStatValue)}</h3>
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
                        {formatStatValue(
                          StoreSelectedEcho.selectedSubStat1.stat,
                          StoreSelectedEcho.selectedSubStat1.value
                        )}
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
                        {formatStatValue(
                          StoreSelectedEcho.selectedSubStat2.stat,
                          StoreSelectedEcho.selectedSubStat2.value
                        )}
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
                        {formatStatValue(
                          StoreSelectedEcho.selectedSubStat3.stat,
                          StoreSelectedEcho.selectedSubStat3.value
                        )}
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
                        {formatStatValue(
                          StoreSelectedEcho.selectedSubStat4.stat,
                          StoreSelectedEcho.selectedSubStat4.value
                        )}
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
                        {formatStatValue(
                          StoreSelectedEcho.selectedSubStat5.stat,
                          StoreSelectedEcho.selectedSubStat5.value
                        )}
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
          {activeTab === 4 && (
            <div className="calcEcho-modal-box-4">
              {processedEchoes.length === 0 ? (
                <div className="calcEcho-modal-import-box">
                  <label htmlFor="Import-Echo-Image" className="custom-file-upload">
                    Choose Image
                  </label>
                  <input
                    className="Image-import-input"
                    id="Import-Echo-Image"
                    type="file"
                    accept="image/*"
                    onChange={handleImportImageFile}
                  />
                  {importImageUrl && (
                    <button
                      className="image-process-btn"
                      onClick={handleProcessImportImage}
                      disabled={isImporting}
                    >
                      {isImporting ? "Processing..." : "Process Image"}
                    </button>
                  )}
                  {importProgress && (
                    <p className="import-progress">{importProgress}</p>
                  )}
                  {importImageUrl && (
                    <img
                      src={importImageUrl}
                      alt="Import Preview"
                      style={{
                        maxWidth: W < 481 ? "200px" : "300px",
                        height: "auto",
                        marginTop: "10px",
                      }}
                    />
                  )}
                </div>
              ) : (
                <div className="echo-cards-container">
                  <div className="echo-cards-grid">
                    {processedEchoes.map((echo, index) => {
                      const currentSonataId = echo.selectedSonataId;
                      const currentEchoId = echo.selectedEchoId;
                      const selectedSonataData = currentSonataId
                        ? WWSonataData.find((s) => s.id === currentSonataId)
                        : null;
                      const selectedEchoData = currentEchoId
                        ? WWEchoesJSON.find((e) => e.id === currentEchoId)
                        : null;
                      const echoCandidate = currentSonataId
                        ? WWEchoesJSON.filter((e) => e.sonataGroup.includes(currentSonataId))
                        : [];
                      const sonataIconSrc = resolveSonataIconSrc(currentSonataId);
                      const selectedEchoImg = resolveEchoImageSrc(currentEchoId);

                      return (
                        <div key={index} className="echo-card-item">
                          <p>Echo {index + 1}</p>
                          <div className="stats-display">
                            <div className="echo-match-header">
                              {selectedEchoImg ? (
                                <>
                                  <div className="echo-match-image-wrapper">
                                    <img
                                      src={selectedEchoImg}
                                      alt={selectedEchoData?.name}
                                      className="echo-match-full-image"
                                    />
                                    {sonataIconSrc && (
                                      <img
                                        src={sonataIconSrc}
                                        alt={selectedSonataData?.name}
                                        className="sonata-icon-small-overlay"
                                      />
                                    )}
                                  </div>
                                  <select
                                    className="dropdown-select"
                                    value={currentEchoId ?? ""}
                                    onChange={(e) => {
                                      handleUpdateProcessedEcho(
                                        index,
                                        "selectedEchoId",
                                        e.target.value ? parseInt(e.target.value) : 0
                                      );
                                    }}
                                  >
                                    <option value="">-- Select Echo --</option>
                                    {echoCandidate.map((candidate) => (
                                      <option key={candidate.id} value={candidate.id}>
                                        {candidate.name}
                                      </option>
                                    ))}
                                  </select>
                                </>
                              ) : (
                                <select
                                  className="dropdown-select"
                                  value={currentEchoId ?? ""}
                                  onChange={(e) => {
                                    handleUpdateProcessedEcho(
                                      index,
                                      "selectedEchoId",
                                      e.target.value ? parseInt(e.target.value) : 0
                                    );
                                  }}
                                >
                                  <option value="">-- Select Echo --</option>
                                  {echoCandidate.map((candidate) => (
                                    <option key={candidate.id} value={candidate.id}>
                                      {candidate.name}
                                    </option>
                                  ))}
                                </select>
                              )}
                            </div>
                            <div className="sonata-header">
                              <select
                                className="dropdown-select"
                                value={currentSonataId ?? ""}
                                onChange={(e) => {
                                  const newSonataId = e.target.value ? parseInt(e.target.value) : 0;
                                  handleUpdateProcessedEcho(index, "selectedSonataId", newSonataId);
                                  handleUpdateProcessedEcho(index, "selectedEchoId", 0);
                                }}
                              >
                                <option value="">-- Select Sonata --</option>
                                {WWSonataData.map((sonata) => (
                                  <option key={sonata.id} value={sonata.id}>
                                    {sonata.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="main-stat">
                              <span className="stat-name">{echo.mainStat}</span>
                              <span className="stat-value">{echo.mainValue}</span>
                            </div>
                            <div className="flat-stat">
                              <span className="stat-name">{echo.flatStat}</span>
                              <span className="stat-value">{echo.flatValue}</span>
                            </div>
                            <div className="sub-stats">
                              {echo.subStats.map((sub, sIdx) => (
                                <div key={sIdx} className="sub-stat">
                                  <span className="stat-name">{sub.stat}</span>
                                  <span className="stat-value">{sub.value}</span>
                                </div>
                              ))}
                            </div>
                            <button
                              className="import-save-btn"
                              onClick={() => handleSaveIndividualEcho(index)}
                              disabled={!!savedEchoes[index]}
                            >
                              {savedEchoes[index] ? "Echo saved!" : "Save This Echo"}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="import-bulk-actions">
                    <button
                      className="import-save-all-btn"
                      onClick={handleSaveAllImportedEchoes}
                    >
                      Save All & Apply
                    </button>
                    <button
                      className="import-reset-btn"
                      onClick={() => {
                        setProcessedEchoes([]);
                        setImportImageUrl(null);
                        setSavedEchoes({});
                      }}
                    >
                      Import Another Image
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EchoModal;
