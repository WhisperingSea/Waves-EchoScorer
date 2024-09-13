import Tesseract from "tesseract.js";
import * as fabric from "fabric";
import { useEffect, useState } from "react";
import { useEchoContext } from "../contexts/EchoDataContext";
import { useEchoes } from "../contexts/CalcEchoContext";

interface LineResult {
  echoName?: string;
  statName?: string;
  value?: string;
}

interface UseEchoScannerReturn {
  processedImages: string[];
  textResults: Record<string, LineResult[]>;
  processImages: (images: File[]) => void;
}

export function useEchoScanner(): UseEchoScannerReturn {
  const { echoes } = useEchoContext();
  const { setEchoStats } = useEchoes();
  const [processedImages, setProcessedImages] = useState<string[]>([]);
  const [textResults, setTextResults] = useState<Record<string, LineResult[]>>(
    {}
  );

  const processImages = async (images: File[]) => {
    try {
      const imagesToProcess = images.slice(0, 5);
      const resizedImages = await Promise.all(
        imagesToProcess.map((img) => resizeImage(img))
      );

      // Data URLs
      const dataURLs = await Promise.all(
        resizedImages.map((file) => URL.createObjectURL(file))
      );
      setProcessedImages(dataURLs);

      // Scan
      const results = await Promise.all(resizedImages.map(scan));

      // Combine results
      const combinedResults: Record<string, LineResult[]> = results
        .filter(
          (
            result
          ): result is {
            line: string;
            echoName?: string;
            statName?: string;
            value?: string;
          }[] => result !== undefined
        )
        .flat()
        .reduce((acc, { line, echoName, statName, value }) => {
          if (!acc[line]) {
            acc[line] = [];
          }
          acc[line].push({ echoName, statName, value });
          return acc;
        }, {} as Record<string, LineResult[]>);

      setTextResults(combinedResults);
    } catch (error) {
      console.error("Error processing images:", error);
    }
  };

  const resizeImage = async (img: File): Promise<File> => {
    const imgElement = await loadImage(img);

    const targetWidth = 1920;
    const targetHeight = 1080;
    const cropWidth = targetWidth / 3;

    const canvas = new fabric.Canvas(`canvas-${img.name}`, {
      width: cropWidth,
      height: targetHeight,
    });

    //Image Crop
    const fabricImg = new fabric.FabricImage(imgElement, {
      left: -2 * cropWidth,
      top: 0,
      scaleX: targetWidth / imgElement.width,
      scaleY: targetHeight / imgElement.height,
    });

    canvas.add(fabricImg);
    fabricImg.filters.push(new fabric.filters.Grayscale());
    fabricImg.filters.push(new fabric.filters.Contrast({ contrast: 0.5 }));
    fabricImg.applyFilters();

    canvas.renderAll();

    // Canvas to Data URL
    const dataURL = canvas.toDataURL({
      format: "jpeg",
      multiplier: 1,
    });

    // Data URL to File
    const blob = await fetch(dataURL).then((res) => res.blob());
    return new File([blob], img.name, { type: "image/jpeg" });
  };

  const loadImage = async (img: File): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imgElement = new Image();
        imgElement.src = e.target?.result as string;
        imgElement.onload = () => resolve(imgElement);
        imgElement.onerror = () => reject(new Error("Image load error"));
      };
      reader.onerror = () => reject(new Error("FileReader error"));
      reader.readAsDataURL(img);
    });
  };

  const scan = async (
    file: File
  ): Promise<
    | { line: string; echoName?: string; statName?: string; value?: string }[]
    | undefined
  > => {
    try {
      const {
        data: { text },
      } = await Tesseract.recognize(file, "eng");

      const filteredText = text
        .replace(/[^\w\s-.é%]/gi, "")
        .replace(/\b[a-zA-Z]\b(?!\.)/g, "");
      const results = parseStats(filteredText);
      console.log(filteredText);

      return results;
    } catch (error) {
      console.error("Error scanning image:", error);
    }
  };

  const parseStats = (
    text: string
  ): {
    line: string;
    echoName?: string;
    statName?: string;
    value?: string;
  }[] => {
    const results: {
      line: string;
      echoName?: string;
      statName?: string;
      value?: string;
    }[] = [];
    const lines = text.split("\n");

    const echoNames = Object.values(echoes).map((i) => i.name);
    const mainStats = [
      "HP%",
      "ATK%",
      "DEF%",
      "Glacio DMG Bonus",
      "Fusion DMG Bonus",
      "Electro DMG Bonus",
      "Aero DMG Bonus",
      "Spectro DMG Bonus",
      "Havoc DMG Bonus",
      "Energy Regen",
      "EnergyRegen",
      "Crit Rate",
      "Crit. Rate",
      "Crit DMG",
      "Crit. DMG",
      "Healing Bonus",
    ];
    const mainStat2 = ["HP", "ATK", "AIK"];
    const subStats = [
      "HP",
      "ATK",
      "DEF",
      "HP%",
      "ATK%",
      "DEF%",
      "Crit Rate",
      "Crit. Rate",
      "Crit DMG",
      "Crit. DMG",
      "Energy Regen",
      "EnergyRegen",
      "Basic Attack DMG Bonus",
      "Basic Attack DMGBonus",
      "Heavy Attack DMG Bonus",
      "Heavy Attack DMGBonus",
      "Resonance Skill DMG",
      "Resonance Liberation",
    ];

    lines.forEach((line) => {
      // Echo Name Match
      for (const echo of echoNames) {
        if (
          line
            .toLowerCase()
            .replace(" ", "")
            .includes(echo.toLowerCase().replace(" ", ""))
        ) {
          results.push({ line, echoName: echo });
          return;
        }
      }

      // Stat Match
      const pattern = new RegExp(
        `(${[...mainStats, ...mainStat2, ...subStats].join(
          "|"
        )})\\s+(\\d+\\.\\d+%?|\\d+)%?`
      );
      const match = line.match(pattern);

      if (match) {
        const [, name, value] = match;
        const normalizedName = normalizeName(name).trim();
        results.push({ line, statName: normalizedName, value: value.trim() });
      }
    });

    return results;
  };

  // Normalize stat names
  const normalizeName = (name: string): string => {
    return name.replace(/[^\w\s]/gi, "").trim();
  };

  useEffect(() => {
    if (textResults) {
      const firstItemArray = Object.values(textResults)[0] || [];
      const secondItem = Object.values(textResults)[1] || [];
      const mainStat = statFix(
        secondItem[0]?.statName || "",
        secondItem[0]?.value || ""
      );

      //@ts-ignore
      const thirdItem = Object.values(textResults)[2] || [];

      const fourthItem = Object.values(textResults)[3] || [];
      const thirdStat = statFix(
        fourthItem[0]?.statName || "",
        fourthItem[0]?.value || ""
      );

      const fifthItem = Object.values(textResults)[4] || [];
      const fourthStat = statFix(
        fifthItem[0]?.statName || "",
        fifthItem[0]?.value || ""
      );

      const sixthItem = Object.values(textResults)[5] || [];
      const fifthStat = statFix(
        sixthItem[0]?.statName || "",
        sixthItem[0]?.value || ""
      );

      const seventhItem = Object.values(textResults)[6] || [];
      const sixthStat = statFix(
        seventhItem[0]?.statName || "",
        seventhItem[0]?.value || ""
      );

      const eigthItem = Object.values(textResults)[7] || [];
      const seventhStat = statFix(
        eigthItem[0]?.statName || "",
        eigthItem[0]?.value || ""
      );

      const echo = Object.values(echoes).find(
        (i) => i.name === firstItemArray[0]?.echoName
      );

      setEchoStats((prevEchoStats) => {
        const updatedEchoStats = {
          ...prevEchoStats,
          [6]: {
            ...prevEchoStats[6],
            id: echo?.id || 0,
            name: firstItemArray[0]?.echoName || "",
            cost: echo?.cost || 0,
            mainStat: mainStat.stat || "",
            mainStatValue: mainStat.statValue,
            selectedSubStat1: {
              ...prevEchoStats[6].selectedSubStat1,
              stat: thirdStat.stat || "",
              value: thirdStat.statValue || 0,
            },
            selectedSubStat2: {
              ...prevEchoStats[6].selectedSubStat2,
              stat: fourthStat.stat || "",
              value: parseFloat(fifthItem[0]?.value || "0"),
            },
            selectedSubStat3: {
              ...prevEchoStats[6].selectedSubStat3,
              stat: fifthStat.stat || "",
              value: parseFloat(sixthItem[0]?.value || "0"),
            },
            selectedSubStat4: {
              ...prevEchoStats[6].selectedSubStat4,
              stat: sixthStat.stat || "",
              value: parseFloat(seventhItem[0]?.value || "0"),
            },
            selectedSubStat5: {
              ...prevEchoStats[6].selectedSubStat5,
              stat: seventhStat.stat || "",
              value: parseFloat(eigthItem[0]?.value || "0"),
            },
          },
        };
        return updatedEchoStats;
      });
    }
  }, [textResults, setEchoStats]);

  const statFix = (stats: string, value: string) => {
    let stat = "";
    let statValue = 0;
    if (stats === "Crit Rate") {
      stat = "Crit. Rate%";
    } else if (stats === "Crit DMG") {
      stat = "Crit. DMG%";
    } else if (stats === "Resonance Skill DMG") {
      stat = "Resonance Skill DMG Bonus%";
    } else if (stats === "Resonance Liberation") {
      stat = "Resonance Liberation DMG Bonus%";
    } else if (stats === "Heavy Attack DMGBonus") {
      stat = "Heavy Attack DMG Bonus%";
    } else if (stats === "Basic Attack DMGBonus") {
      stat = "Basic Attack DMG Bonus%";
    } else if (stats === "EnergyRegen") {
      stat = "Energy Regen%";
    } else if (value.includes("%")) {
      stat = `${stats}%`;
    } else {
      stat = stats;
    }

    if (value.includes("%")) {
      statValue = parseFloat(parseFloat(value).toFixed(1));
    } else {
      statValue = parseFloat(value);
    }

    return { stat, statValue };
  };

  return {
    processedImages,
    textResults,
    processImages,
  };
}
