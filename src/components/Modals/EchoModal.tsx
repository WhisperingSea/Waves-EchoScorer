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
  const [addActiveTab, setAddActiveTab] = useState<"manual" | "game" | "discord">("manual");
  const [importImageUrl, setImportImageUrl] = useState<string | null>(null);
  const [isImporting, setIsImporting] = useState(false);
  const [processedEchoes, setProcessedEchoes] = useState<ProcessedEchoData[]>([]);
  const [importProgress, setImportProgress] = useState<string>("");
  const [savedEchoes, setSavedEchoes] = useState<Record<number, boolean>>({});
  const [duplicateMap, setDuplicateMap] = useState<Record<number, boolean>>({});
  // Manual add search/filter state
  const [manualSearch, setManualSearch] = useState<string>("");
  const [manualSet, setManualSet] = useState<number>(0); // 0 = All sets
  const [manualCost, setManualCost] = useState<number>(0); // 0 = All costs
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
    setEchoStats((prev) => {
      const targetEcho = Object.values(echoes).find((e) => e.id === id);
      const defaultSet = targetEcho?.sonataGroup?.[0] ?? prev[index].set ?? 1;
      const computedSet =
        manualSet !== 0 && targetEcho?.sonataGroup?.includes(manualSet)
          ? manualSet
          : defaultSet;
      return {
        ...prev,
        6: { ...prev[index], name, cost, id, set: computedSet },
      };
    });
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

  // Build a storage echo object (without storeId) from a processed echo
  const toStorageEcho = (echo: ProcessedEchoData) => {
    if (!echo.selectedEchoId) return null;
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
    } as const;
  };

  const isSameEcho = (a: any, b: any) => {
    return (
      a && b &&
      a.id === b.id &&
      a.name === b.name &&
      a.set === b.set &&
      a.cost === b.cost &&
      a.mainStat === b.mainStat &&
      a.mainStatValue === b.mainStatValue &&
      a.selectedSubStat1.stat === b.selectedSubStat1.stat &&
      a.selectedSubStat1.value === b.selectedSubStat1.value &&
      a.selectedSubStat2.stat === b.selectedSubStat2.stat &&
      a.selectedSubStat2.value === b.selectedSubStat2.value &&
      a.selectedSubStat3.stat === b.selectedSubStat3.stat &&
      a.selectedSubStat3.value === b.selectedSubStat3.value &&
      a.selectedSubStat4.stat === b.selectedSubStat4.stat &&
      a.selectedSubStat4.value === b.selectedSubStat4.value &&
      a.selectedSubStat5.stat === b.selectedSubStat5.stat &&
      a.selectedSubStat5.value === b.selectedSubStat5.value
    );
  };

  // Recompute duplicate map when processed echoes or storage change
  useEffect(() => {
    const map: Record<number, boolean> = {};
    processedEchoes.forEach((pe, idx) => {
      const candidate = toStorageEcho(pe);
      if (!candidate) {
        map[idx] = false;
      } else {
        map[idx] = storedEcho.some((se) => isSameEcho(se, candidate));
      }
    });
    setDuplicateMap(map);
  }, [processedEchoes, storedEcho]);

  const handleSaveAllImportedEchoes = () => {
    // Build array of echoes to persist to local storage
    const echoesToAddAll = processedEchoes
      .filter((echo) => echo.selectedEchoId)
      .map((echo) => {
        const candidate = toStorageEcho(echo);
        return candidate;
      })
      .filter((echo): echo is NonNullable<typeof echo> => echo !== null);

    // Exclude duplicates already in storage
    const echoesToAdd = echoesToAddAll.filter(
      (cand) => !storedEcho.some((se) => isSameEcho(se, cand))
    );

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
      const candidate = toStorageEcho(echo);
      if (!candidate) return;
      // Skip if duplicate
      const isDup = storedEcho.some((se) => isSameEcho(se, candidate));
      if (isDup) return;
      addEcho(candidate);
      setSavedEchoes((prev) => ({ ...prev, [idx]: true }));
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

  // Derived: filtered echoes for manual add tab (by name, set, cost)
  const manualFilteredEchoes = Object.values(echoes)
    .filter((e) => {
      const matchesName = manualSearch.trim().length === 0
        ? true
        : e.name.toLowerCase().includes(manualSearch.trim().toLowerCase());
      const matchesSet = manualSet === 0 ? true : e.sonataGroup.includes(manualSet);
      const matchesCost = manualCost === 0 ? true : e.cost === manualCost;
      return matchesName && matchesSet && matchesCost;
    })
    .sort((a, b) => {
      if (a.cost !== b.cost) return a.cost - b.cost;
      return a.name.localeCompare(b.name);
    });

  const manualEchoCosts = Array.from(new Set(Object.values(echoes).map((e) => e.cost))).sort((a, b) => a - b);

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
            <div className="echo-modal-tabs-full">
              <button
                className={`echo-tab-full ${activeTab === 1 ? "active" : ""}`}
                onClick={() => setActiveTab(1)}
              >
                Echoes
              </button>
            </div>
          )}
          <div className="echo-modal-tabs-split">
            <button
              className={`echo-tab-half ${activeTab === 2 ? "active" : ""}`}
              onClick={() => {
                setActiveTab(2);
                setIsVisible2(false);
              }}
            >
              My Echoes
            </button>
            <button
              className={`echo-tab-half ${activeTab === 3 ? "active" : ""}`}
              onClick={() => {
                setActiveTab(3);
                setIsVisible2(false);
              }}
            >
              Add Echoes
            </button>
          </div>
          
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
              <div className="echo-actions-row">
                {/* TODO: Fix filter functionality and re-enable */}
                {/* <div className="echo-filter-btn-wrapper" onClick={openFilter}>
                  <img
                    className="echo-filter-icon"
                    src="https://whisperingsea.github.io/wuthering-waves-assets/images/icons_ui2/Filter.png"
                    alt="Filter"
                  />
                </div> */}
                {storedEcho.length > 0 && (
                  <button
                    className="echo-modal-delete-btn"
                    onClick={handleClearAllSavedEchoes}
                  >
                    Clear Saved Echoes
                  </button>
                )}
              </div>
              <div className="echo-content-split">
                <div className="echo-list-panel">
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
                <div className="echo-stats-panel">
                  {StoreSelectedEcho ? (
                    <>
                      <h3 className="no-margin echo-stat-box-name">
                        <b>{StoreSelectedEcho.name}</b>
                      </h3>
                      <h3 className="no-margin">Main Stat:</h3>
                      <div className="echo-modal-stats-box">
                        <img className="stat-Icons" src={Icon} />
                        <h3 className="margin-box-text">
                          {StoreSelectedEcho.mainStat
                            .replace("%", "")
                            .replace("DMG Bonus", "Bonus")}
                        </h3>
                        <h3>{formatStatValue(StoreSelectedEcho.mainStat, StoreSelectedEcho.mainStatValue)}</h3>
                      </div>
                      <h3 className="no-margin">Sub Stats:</h3>
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
              <div className="add-subtabs-bar">
                <button
                  className={`add-subtab-btn ${addActiveTab === "manual" ? "active" : ""}`}
                  onClick={() => setAddActiveTab("manual")}
                >
                  Add manually
                </button>
                <button
                  className={`add-subtab-btn ${addActiveTab === "game" ? "active" : ""}`}
                  onClick={() => setAddActiveTab("game")}
                >
                  Import from game
                </button>
                <button
                  className={`add-subtab-btn ${addActiveTab === "discord" ? "active" : ""}`}
                  onClick={() => {
                    setAddActiveTab("discord");
                    setImportImageUrl(null);
                    setSavedEchoes({});
                  }}
                >
                  Import from Discord
                </button>
              </div>
              <div className="add-content-area">
              {addActiveTab === "manual" && (
                <div className="add-manual-layout">
                  <div className="manual-left-panel">
                    <div className="manual-searchbar">
                      <input
                        type="text"
                        className="search-input"
                        placeholder="Search by name..."
                        value={manualSearch}
                        onChange={(e) => setManualSearch(e.target.value)}
                      />
                      <select
                        className="dropdown-select"
                        value={manualSet}
                        onChange={(e) => setManualSet(parseInt(e.target.value))}
                        aria-label="Filter by set"
                      >
                        <option value={0}>All Sets</option>
                        {WWSonataData.map((s) => (
                          <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                      </select>
                      <select
                        className="dropdown-select"
                        value={manualCost}
                        onChange={(e) => setManualCost(parseInt(e.target.value))}
                        aria-label="Filter by cost"
                      >
                        <option value={0}>All Costs</option>
                        {manualEchoCosts.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div className="calcEcho-modal-add-box">
                      {manualFilteredEchoes.map((item) => (
                        <div
                          key={item.name}
                          className="echo-modal-cards-2"
                          onClick={() => handleStoreAddEcho(item.name, item.cost, item.id)}
                        >
                          <div className="echo-modal-card-top-2">
                            <img src={item.img} alt={`${item.name} Icon`} title={item.name} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="calcEcho-modal-add-box-2">
                    {newEcho ? (
                      <p className="processing-text">Select an echo from the left to edit.</p>
                    ) : (
                      <>
                        <h3 className="no-margin echo-stat-box-name">
                          <b>{echoStats[6].name}</b>
                        </h3>
                        <EchoComp index={6} />
                      </>
                    )}
                  </div>
                </div>
              )}

              {addActiveTab === "game" && (
                <div className="calcEcho-modal-box-4">
                  {isProcessing ? (
                    <div className="processing-screen">
                      <div className="spinner"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                  <>
                  <div className="import-buttons-row">
                    <label htmlFor="Echo-Image-Select" className="custom-file-upload">Choose Image</label>
                    <input
                      className="Image-import-input"
                      id="Echo-Image-Select"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    {imgReset ? (
                      <button className="image-process-btn" onClick={handleImageReset}>Reset</button>
                    ) : (
                      fileSelected.length > 0 && (
                        <button className="image-process-btn" onClick={handleImageProcess}>Process Image</button>
                      )
                    )}
                  </div>
                  {fileSelected.length > 0 && (
                    <div className="selected-file-list">
                      {fileSelected.map((f, idx) => (
                        <p style={{ margin: 0 }} key={idx}>{f.name}</p>
                      ))}
                    </div>
                  )}
                  {imgReset && processedImages.length > 0 && (
                    <div className="processed-images-row">
                      {processedImages.map((imageSrc, index) => (
                        <img
                          className="processed-image"
                          key={index}
                          src={imageSrc}
                          alt={`Processed ${index}`}
                        />
                      ))}
                    </div>
                  )}
                  <div className="tutorial-box">
                    <p className="process-img-intsruction">How to use Image Processor</p>
                    <ol>
                      <li>Upload a game screenshot that shows the full echo card. No cropping needed.</li>
                      <li>Process one image at a time; it can take 5-10 seconds.</li>
                      <li>Review the detected stats on the left and the cropped preview on the right; edit manually if needed.</li>
                      <li>Change the Sonata Set manually if required, then save the echo.</li>
                    </ol>
                    <p className="tutorial-note">Use a clear, unedited screenshot for best results.</p>
                    <div className="tutorial-images-row">
                      <img className="example-echo-img" src="https://whisperingsea.github.io/wuthering-waves-assets/images/DreamlessEcho.png" alt="Example of accepted in-game echo screenshot" />
                      <img className="example-echo-img" src="https://whisperingsea.github.io/wuthering-waves-assets/images/ImageProcessor2.png" alt="Example of processed echo layout" />
                    </div>
                  </div>
                  </>
                  )}
                </div>
              )}

              {addActiveTab === "discord" && (
                <div className="calcEcho-modal-box-4">
                  {processedEchoes.length === 0 ? (
                    <div className="calcEcho-modal-import-box">
                      <div className="import-buttons-row">
                        <label htmlFor="Import-Echo-Image" className="custom-file-upload">Choose Image</label>
                        <input
                          className="Image-import-input"
                          id="Import-Echo-Image"
                          type="file"
                          accept="image/*"
                          onChange={handleImportImageFile}
                        />
                        {importImageUrl && (
                          <button className="image-process-btn" onClick={handleProcessImportImage} disabled={isImporting}>
                            {isImporting ? "Processing..." : "Process Image"}
                          </button>
                        )}
                      </div>
                      {importProgress && <p className="import-progress">{importProgress}</p>}
                      {importImageUrl && (
                        <img
                          src={importImageUrl}
                          alt="Import Preview"
                          style={{ maxWidth: W < 481 ? "200px" : "300px", height: "auto" }}
                        />
                      )}
                      <div className="tutorial-box">
                        <p className="process-img-intsruction">How to import from Discord</p>
                        <ol>
                          <li>Join the official Wuthering Waves Discord and open the <b>wuwa-bot-command</b> channel.</li>
                          <li>Use the bot to generate the selected character image; note that un-leveled echoes may reduce accuracy.</li>
                          <li>Download the generated image directly (no cropping or edits) and upload it here.</li>
                          <li>Process the image, review the detected echo and sonata, adjust if needed, then save.</li>
                        </ol>
                        <p className="tutorial-note">Keep all echoes fully visible and leveled where possible for best detection.</p>
                        <img className="example-echo-img" src="https://i.imgur.com/ZglZiIS.jpeg" alt="Example Discord-generated echo image" />
                      </div>
                    </div>
                  ) : (
                    <div className="echo-cards-container">
                      <div className="echo-cards-grid">
                        {processedEchoes.map((echo, index) => {
                          const currentSonataId = echo.selectedSonataId;
                          const currentEchoId = echo.selectedEchoId;
                          const selectedSonataData = currentSonataId ? WWSonataData.find((s) => s.id === currentSonataId) : null;
                          const selectedEchoData = currentEchoId ? WWEchoesJSON.find((e) => e.id === currentEchoId) : null;
                          const echoCandidate = currentSonataId ? WWEchoesJSON.filter((e) => e.sonataGroup.includes(currentSonataId)) : [];
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
                                        <img src={selectedEchoImg} alt={selectedEchoData?.name} className="echo-match-full-image" />
                                        {sonataIconSrc && <img src={sonataIconSrc} alt={selectedSonataData?.name} className="sonata-icon-small-overlay" />}
                                      </div>
                                      <select className="dropdown-select" value={currentEchoId ?? ""} onChange={(e) => handleUpdateProcessedEcho(index, "selectedEchoId", e.target.value ? parseInt(e.target.value) : 0)}>
                                        <option value="">-- Select Echo --</option>
                                        {echoCandidate.map((candidate) => (
                                          <option key={candidate.id} value={candidate.id}>{candidate.name}</option>
                                        ))}
                                      </select>
                                    </>
                                  ) : (
                                    <select className="dropdown-select" value={currentEchoId ?? ""} onChange={(e) => handleUpdateProcessedEcho(index, "selectedEchoId", e.target.value ? parseInt(e.target.value) : 0)}>
                                      <option value="">-- Select Echo --</option>
                                      {echoCandidate.map((candidate) => (
                                        <option key={candidate.id} value={candidate.id}>{candidate.name}</option>
                                      ))}
                                    </select>
                                  )}
                                </div>
                                <div className="sonata-header">
                                  <select className="dropdown-select" value={currentSonataId ?? ""} onChange={(e) => {
                                    const newSonataId = e.target.value ? parseInt(e.target.value) : 0;
                                    handleUpdateProcessedEcho(index, "selectedSonataId", newSonataId);
                                    handleUpdateProcessedEcho(index, "selectedEchoId", 0);
                                  }}>
                                    <option value="">-- Select Sonata --</option>
                                    {WWSonataData.map((sonata) => (
                                      <option key={sonata.id} value={sonata.id}>{sonata.name}</option>
                                    ))}
                                  </select>
                                </div>
                                <div className="main-stat"><span className="stat-name">{echo.mainStat}</span><span className="stat-value">{echo.mainValue}</span></div>
                                <div className="flat-stat"><span className="stat-name">{echo.flatStat}</span><span className="stat-value">{echo.flatValue}</span></div>
                                <div className="sub-stats">
                                  {echo.subStats.map((sub, sIdx) => (
                                    <div key={sIdx} className="sub-stat"><span className="stat-name">{sub.stat}</span><span className="stat-value">{sub.value}</span></div>
                                  ))}
                                </div>
                                <button
                                  className="import-save-btn"
                                  onClick={() => handleSaveIndividualEcho(index)}
                                  disabled={!!savedEchoes[index] || !!duplicateMap[index]}
                                >
                                  {savedEchoes[index]
                                    ? "Echo saved!"
                                    : duplicateMap[index]
                                    ? "Already added"
                                    : "Save This Echo"}
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="import-bulk-actions">
                        <button className="import-save-all-btn" onClick={handleSaveAllImportedEchoes}>
                          {Object.values(duplicateMap).length > 0 && Object.values(duplicateMap).every(Boolean)
                            ? "Apply"
                            : "Save All & Apply"}
                        </button>
                        <button className="import-reset-btn" onClick={() => { setProcessedEchoes([]); setImportImageUrl(null); setSavedEchoes({}); }}>Import Another Image</button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EchoModal;
