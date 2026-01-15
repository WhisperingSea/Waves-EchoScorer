import React, { useState, ChangeEvent } from 'react';
import { createWorker } from 'tesseract.js';
import { WWSonataData } from '../data/WWSonata';
import { WWEchoesJSON } from '../data/WWEchoes';
import '../styles/Test.css';

interface EchoRectangle {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface StatRegion {
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface EchoStats {
  mainStat: string;
  mainValue: string;
  flatStat: string;
  flatValue: string;
  subStats: Array<{ stat: string; value: string }>;
}

const TestPage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [echoImages, setEchoImages] = useState<string[]>([]);
  const [echoStats, setEchoStats] = useState<EchoStats[]>([]);
  const [ocrTexts, setOcrTexts] = useState<string[]>([]);
  const [substatImages, setSubstatImages] = useState<string[][]>([]);
  const [selectedEchoes, setSelectedEchoes] = useState<Array<number | null>>([]);
  const [selectedSonatas, setSelectedSonatas] = useState<Array<number | null>>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const statRegions: StatRegion[] = [
    { name: 'mainStat', x: 188, y: 70, width: 174, height: 60 },
    { name: 'flatStat', x: 0, y: 190, width: 363, height: 30 },
    { name: 'subStat1', x: 40, y: 230, width: 323, height: 33 },
    { name: 'subStat2', x: 40, y: 263, width: 323, height: 33 },
    { name: 'subStat3', x: 40, y: 296, width: 323, height: 33 },
    { name: 'subStat4', x: 40, y: 329, width: 323, height: 33 },
    { name: 'subStat5', x: 40, y: 362, width: 323, height: 33 },
  ];
  const calculateEchoRectangles = (
    imgWidth: number,
    imgHeight: number
  ): EchoRectangle[] => {
    // Reference dimensions for 1920x1080
    const refWidth = 1920;
    const refHeight = 1080;
    const refCardX = 23;
    const refCardY = 652;
    const refCardWidth = 363;
    const refCardHeight = 407;
    const refGap = 11;

    // Scale factors
    const scaleX = imgWidth / refWidth;
    const scaleY = imgHeight / refHeight;

    return Array.from({ length: 5 }, (_, i) => ({
      left: Math.round((refCardX + i * (refCardWidth + refGap)) * scaleX),
      top: Math.round(refCardY * scaleY),
      width: Math.round(refCardWidth * scaleX),
      height: Math.round(refCardHeight * scaleY),
    }));
  };

  const cropStatRegion = (
    cardImage: string,
    region: StatRegion
  ): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = cardImage;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = region.width;
        canvas.height = region.height;
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          resolve(cardImage);
          return;
        }

        ctx.drawImage(
          img,
          region.x,
          region.y,
          region.width,
          region.height,
          0,
          0,
          region.width,
          region.height
        );

        resolve(canvas.toDataURL('image/png'));
      };
    });
  };

  const cropImageCard = (
    img: HTMLImageElement,
    rect: EchoRectangle
  ): string => {
    const canvas = document.createElement('canvas');
    canvas.width = rect.width;
    canvas.height = rect.height;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      throw new Error('Failed to get canvas context');
    }

    ctx.drawImage(
      img,
      rect.left,
      rect.top,
      rect.width,
      rect.height,
      0,
      0,
      rect.width,
      rect.height
    );

    return canvas.toDataURL('image/png');
  };;

  const resolveSonataIconSrc = (sonataId?: number | null): string | null => {
    if (!sonataId) return null;
    const match = WWSonataData.find((s) => s.id === sonataId);
    if (!match) return null;
    return match.img.match(/^https?:\/\//)
      ? match.img
      : `${import.meta.env.BASE_URL ?? '/'}${match.img.replace(/^\//, '')}`;
  };

  const resolveEchoImageSrc = (echoId?: number | null): string | null => {
    if (!echoId) return null;
    const match = WWEchoesJSON.find((e) => e.id === echoId);
    if (!match) return null;
    return match.img.match(/^https?:\/\//)
      ? match.img
      : `${import.meta.env.BASE_URL ?? '/'}${match.img.replace(/^\//, '')}`;
  };

  const preprocessImageForOCR = (imageDataUrl: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = imageDataUrl;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        // Upscale 3x for better OCR
        canvas.width = img.width * 3;
        canvas.height = img.height * 3;
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          resolve(imageDataUrl);
          return;
        }

        // Draw upscaled image
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Get image data for preprocessing
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Convert to grayscale and increase contrast
        for (let i = 0; i < data.length; i += 4) {
          // Grayscale conversion
          const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
          
          // Increase contrast significantly and brightness for light text on dark background
          let enhanced = ((gray - 128) * 2.2) + 128 + 30;
          enhanced = Math.max(0, Math.min(255, enhanced));
          
          data[i] = enhanced;
          data[i + 1] = enhanced;
          data[i + 2] = enhanced;
        }

        ctx.putImageData(imageData, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
    });
  };

  const matchEchoImage = async (
    echoPortraitDataUrl: string,
    sonataId: number | null
  ): Promise<{ name: string; id: number } | null> => {
    if (!sonataId) return null;

    const candidates = WWEchoesJSON.filter((echo) => echo.sonataGroup.includes(sonataId));
    if (!candidates.length) return null;

    try {
      const sourceImg = new Image();
      sourceImg.src = echoPortraitDataUrl;

      return new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn('Echo image matching timeout');
          resolve(null);
        }, 5000);

        sourceImg.onload = async () => {
          clearTimeout(timeout);
          let bestMatch: ({ name: string; id: number } | null) = null;
          let bestScore = -1;

          for (const echo of candidates) {
            try {
              const targetImg = new Image();
              const normalizedSrc = echo.img.match(/^https?:\/\//)
                ? echo.img
                : `${import.meta.env.BASE_URL ?? '/'}${echo.img.replace(/^\//, '')}`;
              targetImg.crossOrigin = 'anonymous';
              targetImg.src = normalizedSrc;

              await new Promise<void>((imgResolve) => {
                const imgTimeout = setTimeout(() => imgResolve(), 2000);

                targetImg.onload = () => {
                  clearTimeout(imgTimeout);
                  try {
                    const sourceCanvas = document.createElement('canvas');
                    const targetCanvas = document.createElement('canvas');
                    // Normalize to square for comparison
                    sourceCanvas.width = 120;
                    sourceCanvas.height = 120;
                    targetCanvas.width = 120;
                    targetCanvas.height = 120;
                    const sCtx = sourceCanvas.getContext('2d');
                    const tCtx = targetCanvas.getContext('2d');

                    if (sCtx && tCtx) {
                      sCtx.drawImage(sourceImg, 0, 0, 120, 120);
                      tCtx.drawImage(targetImg, 0, 0, 120, 120);

                      const sData = sCtx.getImageData(0, 0, 120, 120).data;
                      const tData = tCtx.getImageData(0, 0, 120, 120).data;

                      let matchPixels = 0;
                      const minLen = Math.min(sData.length, tData.length);
                      for (let i = 0; i < minLen; i += 4) {
                        const rDiff = Math.abs(sData[i] - tData[i]);
                        const gDiff = Math.abs(sData[i + 1] - tData[i + 1]);
                        const bDiff = Math.abs(sData[i + 2] - tData[i + 2]);
                        const diff = (rDiff + gDiff + bDiff) / 3;
                        if (diff < 45) matchPixels++;
                      }

                      const score = (matchPixels / (minLen / 4)) * 100;
                      if (score > bestScore) {
                        bestScore = score;
                        bestMatch = { name: echo.name, id: echo.id };
                      }
                    }
                  } catch (e) {
                    console.warn(`Error comparing with echo ${echo.name}:`, e);
                  }
                  imgResolve();
                };

                targetImg.onerror = () => {
                  clearTimeout(imgTimeout);
                  imgResolve();
                };
              });
            } catch (e) {
              console.warn(`Error loading echo ${echo.name}:`, e);
            }
          }
          if (bestScore > 20 && bestMatch) {
            resolve(bestMatch);
          } else {
            console.log('No echo match. Best score:', bestScore.toFixed(2));
            resolve(null);
          }
        };

        sourceImg.onerror = () => {
          clearTimeout(timeout);
          resolve(null);
        };
      });
    } catch (error) {
      console.error('Error matching echo image:', error);
      return null;
    }
  };

  const parseMainStatOnly = (ocrText: string): EchoStats => {
    // Clean up singular noise chars and standalone tokens before matching
    let cleanText = ocrText
      .replace(/\b[xw4ljA]\b/gi, '')            // remove stray letters/numbers (x, w, 4, l, j)
      .replace(/\s+%\s+/g, ' ')                // remove isolated % surrounded by spaces
      .replace(/(^|\s)\d(\s|$)/g, '$1$2')     // remove standalone single digits like ' 2 '
      .replace(/\s+/g, ' ')                    // normalize whitespace
      .trim();
    
    // Main stat patterns
    const mainStatPattern = /(Crit\.\s*(?:DMG|Rate)|Healing\s*Bonus|Energy\s*Regen|ATK|HP|DEF|(?:Glacio|Fusion|Electro|Aero|Havoc|Spectro)\s*DMG\s*Bonus)\s*([\d.]+)%?/i;
    
    const match = cleanText.match(mainStatPattern);
    
    if (match) {
      const statName = match[1].trim();
      const rawValue = match[2];
      let num = parseFloat(rawValue);
      
      // Heuristic: Correct misread tiny percentages like '0.30%' → '30%'
      const isPctStat = /bonus/i.test(statName) || /crit\./i.test(statName) || /energy\s*regen/i.test(statName);
      if (!isNaN(num) && isPctStat && rawValue.startsWith('0.') && num < 1) {
        num = num * 100;
      }
      
      // Heuristic: For main stat 'Crit. DMG', fix unrealistic large OCR values
      // Example: '449%' likely should be '44.9%' or '44%'
      if (!isNaN(num) && /crit\.\s*dmg/i.test(statName)) {
        if (num > 100) {
          num = num / 10; // common OCR digit duplication; shift one decimal place
        }
        if (num > 44) {
          num = 44; // cap to known maximum for main stat
        }
      }
      
      // Format up to 2 decimals and strip trailing .00
      let formatted = Number.isFinite(num) ? (num % 1 === 0 ? String(num) : num.toFixed(2).replace(/\.00$/, '')) : rawValue;
      
      return {
        mainStat: statName,
        mainValue: formatted + '%',
        flatStat: '',
        flatValue: '',
        subStats: []
      };
    }
    
    return {
      mainStat: '',
      mainValue: '',
      flatStat: '',
      flatValue: '',
      subStats: []
    };
  };

  const parseFlatStatOnly = (ocrText: string): EchoStats => {
    // Clean up singular 'x', 'w', '4' characters that appear as noise
    let cleanText = ocrText.replace(/\b[xw4]\b/gi, '').replace(/\s+/g, ' ').trim();
    
    // Flat stat patterns (ATK or HP with numeric value)
    const flatStatPattern = /(ATK|HP)\s*([\d]+)/i;
    
    const match = cleanText.match(flatStatPattern);
    
    return {
      mainStat: '',
      mainValue: '',
      flatStat: match ? match[1].trim() : '',
      flatValue: match ? match[2] : '',
      subStats: []
    };
  };

  const parseSubStatOnly = (ocrText: string): { stat: string; value: string } => {
    // Clean up singular 'x', 'w', '4' characters that appear as noise
    let cleanText = ocrText.replace(/\b[xw]\b/gi, '').replace(/\s+/g, ' ').trim();
    
    // Sub-stat patterns (allow optional 'DMG' and 'Bonus' for Resonance Skill/Liberation)
    const subStatPattern = /(ATK|HP|DEF|Crit\.\s*DMG|Crit\.\s*Rate|Energy\s*Regen|Basic\s*Attack\s*DMG\s*Bonus|Heavy\s*Attack\s*DMG\s*Bonus|Resonance\s*(?:Skill|Liberation)(?:\s*DMG)?(?:\s*Bonus)?)\s*([\d.]+)%?/i;
    
    const match = cleanText.match(subStatPattern);
    
    if (match) {
      let statName = match[1].trim();
      const value = match[2];

      // Normalize "Resonance Skill/Liberation" variants to include "DMG Bonus"
      if (statName.toLowerCase().includes('resonance')) {
        if (statName.toLowerCase().includes('liberation')) {
          statName = 'Resonance Liberation DMG Bonus';
        } else if (statName.toLowerCase().includes('skill')) {
          statName = 'Resonance Skill DMG Bonus';
        }
      }
      
      // Determine if it's a percentage stat
      const isPercentage = 
        cleanText.includes('%') || 
        statName.includes('Bonus') || 
        statName.includes('Energy') ||
        (statName.match(/^(ATK|HP|DEF)$/) && parseFloat(value) < 50);
      
      return {
        stat: statName,
        value: isPercentage ? value + '%' : value
      };
    }
    
    return { stat: '', value: '' };
  };

  const matchSonataImage = async (echoSetImageDataUrl: string): Promise<{ name: string; id: number } | null> => {
    try {
      const sourceImg = new Image();
      sourceImg.src = echoSetImageDataUrl;
      
      return new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn('Sonata image matching timeout');
          resolve(null);
        }, 5000); // 5 second timeout
        
        sourceImg.onload = async () => {
          clearTimeout(timeout);
          let bestMatch: { name: string; id: number } | null = null;
          let bestScore = -1;

          // Compare against all sonata images
          for (const sonata of WWSonataData) {
            try {
              const targetImg = new Image();
              const normalizedSrc = sonata.img.match(/^https?:\/\//)
                ? sonata.img
                : `${import.meta.env.BASE_URL ?? '/'}${sonata.img.replace(/^\//, '')}`;
              targetImg.crossOrigin = 'anonymous';
              targetImg.src = normalizedSrc;
              
              await new Promise<void>((imgResolve) => {
                const imgTimeout = setTimeout(() => imgResolve(), 2000); // 2 second timeout per image
                
                targetImg.onload = () => {
                  clearTimeout(imgTimeout);
                  try {
                    // Normalize both images to 48x48 for consistent pixel comparison
                    const sourceCanvas = document.createElement('canvas');
                    sourceCanvas.width = 48;
                    sourceCanvas.height = 48;
                    const sourceCtx = sourceCanvas.getContext('2d');
                    const targetCanvas = document.createElement('canvas');
                    targetCanvas.width = 48;
                    targetCanvas.height = 48;
                    const targetCtx = targetCanvas.getContext('2d');

                    if (sourceCtx && targetCtx) {
                      sourceCtx.drawImage(sourceImg, 0, 0, 48, 48);
                      targetCtx.drawImage(targetImg, 0, 0, 48, 48);

                      const sourceData = sourceCtx.getImageData(0, 0, 48, 48).data;
                      const targetData = targetCtx.getImageData(0, 0, 48, 48).data;
                      
                      // Calculate similarity score (0-100)
                      let matchPixels = 0;
                      const minLen = Math.min(sourceData.length, targetData.length);
                      for (let i = 0; i < minLen; i += 4) {
                        const rDiff = Math.abs(sourceData[i] - targetData[i]);
                        const gDiff = Math.abs(sourceData[i + 1] - targetData[i + 1]);
                        const bDiff = Math.abs(sourceData[i + 2] - targetData[i + 2]);
                        const diff = (rDiff + gDiff + bDiff) / 3;
                        if (diff < 40) matchPixels++;
                      }
                      const score = (matchPixels / (minLen / 4)) * 100;
                      
                      if (score > bestScore) {
                        bestScore = score;
                        bestMatch = { name: sonata.name, id: sonata.id };
                      }
                    }
                  } catch (e) {
                    console.warn(`Error comparing with ${sonata.name}:`, e);
                  }
                  imgResolve();
                };
                targetImg.onerror = () => {
                  clearTimeout(imgTimeout);
                  imgResolve();
                };
              });
            } catch (e) {
              console.warn(`Error loading ${sonata.name}:`, e);
            }
          }
          
          // Return match if similarity > 28%
          if (bestScore > 28 && bestMatch) {
            resolve(bestMatch);
          } else {
            console.log('No sonata match. Best score:', bestScore.toFixed(2));
            resolve(null);
          }
        };
        sourceImg.onerror = () => {
          clearTimeout(timeout);
          resolve(null);
        };
      });
    } catch (error) {
      console.error('Error matching sonata image:', error);
      return null;
    }
  };

  const processImage = async (imagePath: string) => {
    setIsProcessing(true);
    setEchoImages([]);
    setEchoStats([]);
    setOcrTexts([]);
    setSubstatImages([]);

    const img = new Image();
    img.src = imagePath;
    img.onload = async () => {
      try {
        // Calculate rectangles based on actual image dimensions
        const echoRectangles = calculateEchoRectangles(
          img.naturalWidth,
          img.naturalHeight
        );
        const croppedImages = echoRectangles.map((rect) =>
          cropImageCard(img, rect)
        );
        setEchoImages(croppedImages);

        // Process OCR for each card
        const worker = await createWorker('eng');
        const parsedStats: EchoStats[] = [];
        const rawTexts: string[] = [];
        const allSubImages: string[][] = [];
        const allEchoSetImages: string[] = [];
        const allEchoPortraits: string[] = [];
        const allMatchedEchoes: Array<{ name: string; id: number } | null> = [];
        const allMatchedSonatas: Array<{ name: string; id: number } | null> = [];

        for (let i = 0; i < croppedImages.length; i++) {
          try {
            // Crop and process main stat region
            const mainStatImage = await cropStatRegion(croppedImages[i], statRegions[0]);
            const preprocessedMainStat = await preprocessImageForOCR(mainStatImage);
            
            const { data: { text: mainStatText } } = await worker.recognize(preprocessedMainStat, {
              tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.% '
            } as any);
            console.log(`Echo ${i + 1} Main Stat OCR:`, mainStatText);
            
            // Crop and process flat stat region
            const flatStatImage = await cropStatRegion(croppedImages[i], statRegions[1]);
            const preprocessedFlatStat = await preprocessImageForOCR(flatStatImage);
            
            const { data: { text: flatStatText } } = await worker.recognize(preprocessedFlatStat, {
              tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789% '
            } as any);
            console.log(`Echo ${i + 1} Flat Stat OCR:`, flatStatText);
            
            // Process 5 sub-stats with dynamic height adjustment
            const subStats: Array<{ stat: string; value: string }> = [];
            let subStatsText = '';
            const subImages: string[] = [];
            let yPositionOffset = 0; // Tracks cumulative offset due to multi-line text
            
            for (let j = 2; j < 7; j++) {
              // Create adjusted region based on accumulated offset
              const adjustedRegion: StatRegion = {
                ...statRegions[j],
                y: statRegions[j].y + yPositionOffset
              };
              
              const subStatImage = await cropStatRegion(croppedImages[i], adjustedRegion);
              subImages.push(subStatImage);
              const preprocessedSubStat = await preprocessImageForOCR(subStatImage);
              
              const { data: { text: subStatText } } = await worker.recognize(preprocessedSubStat, {
                tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.% '
              } as any);
              console.log(`Echo ${i + 1} Sub-stat ${j - 1} OCR:`, subStatText);
              
              const parsedSubStat = parseSubStatOnly(subStatText);
              if (parsedSubStat.stat) {
                subStats.push(parsedSubStat);
              }
              subStatsText += `Sub ${j - 1}: ${subStatText}\n`;
              
              // Check if this substat contains "Liberation" or "Skill" (multi-line text)
              const lowerText = subStatText.toLowerCase();
              if (lowerText.includes('liberation') || lowerText.includes('skill')) {
                yPositionOffset += 2; // Add 2px offset for following regions
                console.log(`Echo ${i + 1} Sub-stat ${j - 1} contains multi-line text (Resonance), adding offset. New offset: ${yPositionOffset}`);
              }
            }
            
            rawTexts.push(`Main: ${mainStatText}\nFlat: ${flatStatText}\n${subStatsText}`);
            
            const parsedMain = parseMainStatOnly(mainStatText);
            const parsedFlat = parseFlatStatOnly(flatStatText);
            
            // Crop echo set image
            const echoSetRegion: StatRegion = {
              name: 'echoSet',
              x: 244,
              y: 9,
              width: 48,
              height: 48
            };
            const echoSetImage = await cropStatRegion(croppedImages[i], echoSetRegion);
            allEchoSetImages.push(echoSetImage);

            // Crop echo portrait (top image), then store
            const echoPortraitRegion: StatRegion = {
              name: 'echoPortrait',
              x: 0,
              y: 0,
              width: 189,
              height: 179
            };
            const echoPortrait = await cropStatRegion(croppedImages[i], echoPortraitRegion);
            allEchoPortraits.push(echoPortrait);
            
            // Match the echo set image with sonata data
            const matchedSonata = await matchSonataImage(echoSetImage);
            allMatchedSonatas.push(matchedSonata);

            // Match echo portrait against filtered echoes by sonata
            const matchedEcho = await matchEchoImage(echoPortrait, matchedSonata ? matchedSonata.id : null);
            allMatchedEchoes.push(matchedEcho);
            
            const combined: EchoStats = {
              mainStat: parsedMain.mainStat,
              mainValue: parsedMain.mainValue,
              flatStat: parsedFlat.flatStat,
              flatValue: parsedFlat.flatValue,
              subStats: subStats
            };
            
            parsedStats.push(combined);
            allSubImages.push(subImages);
          } catch (error) {
            console.error(`Error during OCR for card ${i + 1}:`, error);
            rawTexts.push('Error processing text');
            parsedStats.push({
              mainStat: 'Error',
              mainValue: '',
              flatStat: '',
              flatValue: '',
              subStats: []
            });
            allSubImages.push([]);
          }
        }

        await worker.terminate();
        setOcrTexts(rawTexts);
        setEchoStats(parsedStats);
        setSubstatImages(allSubImages);
        setSelectedEchoes(allMatchedEchoes.map((echo) => echo?.id ?? null));
        setSelectedSonatas(allMatchedSonatas.map((sonata) => sonata?.id ?? null));
      } catch (error) {
        console.error('Error during image cropping:', error);
        setEchoImages([]);
        setEchoStats([]);
        setOcrTexts([]);
        setSubstatImages([]);
        setSelectedEchoes([]);
        setSelectedSonatas([]);
      }

      setIsProcessing(false);
    };
    img.onerror = () => {
      console.error("Image failed to load for processing.");
      setIsProcessing(false);
    }
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      processImage(url);
    }
  };

  return (
    <div className="test-page-container">
      {!imageUrl && (
        <>
          <input type="file" accept="image/*" onChange={handleImageUpload} id="upload-button" style={{ display: 'none' }} />
          <label htmlFor="upload-button" className="custom-file-upload">
            Upload Image
          </label>
        </>
      )}
      {isProcessing && <p>Processing image...</p>}
      
      {echoImages.length > 0 && (
        <div className="echo-cards-container">
          <h3>Extracted Echo Cards:</h3>
          <div className="echo-cards-grid">
            {echoImages.map((echoImage, index) => {
              const currentSonataId = selectedSonatas[index];
              const currentEchoId = selectedEchoes[index];
              
              const selectedSonataData = currentSonataId 
                ? WWSonataData.find((s) => s.id === currentSonataId)
                : null;
              const selectedEchoData = currentEchoId
                ? WWEchoesJSON.find((e) => e.id === currentEchoId)
                : null;

              const echoCandidate = currentSonataId
                ? WWEchoesJSON.filter((echo) => echo.sonataGroup.includes(currentSonataId))
                : [];

              const sonataIconSrc = selectedSonataData ? resolveSonataIconSrc(selectedSonataData.id) : null;
              const selectedEchoImg = selectedEchoData ? resolveEchoImageSrc(selectedEchoData.id) : null;

              return (
                <div key={index} className="echo-card-item">
                  <p>Echo {index + 1}</p>
                  <div className="echo-image-wrapper">
                    <img src={echoImage} alt={`Echo ${index + 1}`} />
                  </div>
                  {echoStats[index] ? (
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
                                const newEchoes = [...selectedEchoes];
                                newEchoes[index] = e.target.value ? parseInt(e.target.value) : null;
                                setSelectedEchoes(newEchoes);
                              }}
                            >
                              <option value="">-- Select Echo --</option>
                              {echoCandidate.map((echo) => (
                                <option key={echo.id} value={echo.id}>
                                  {echo.name}
                                </option>
                              ))}
                            </select>
                          </>
                        ) : (
                          <select
                            className="dropdown-select"
                            value={currentEchoId ?? ""}
                            onChange={(e) => {
                              const newEchoes = [...selectedEchoes];
                              newEchoes[index] = e.target.value ? parseInt(e.target.value) : null;
                              setSelectedEchoes(newEchoes);
                            }}
                          >
                            <option value="">-- Select Echo --</option>
                            {echoCandidate.map((echo) => (
                              <option key={echo.id} value={echo.id}>
                                {echo.name}
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
                            const newSonatas = [...selectedSonatas];
                            newSonatas[index] = e.target.value ? parseInt(e.target.value) : null;
                            setSelectedSonatas(newSonatas);
                            // Reset echo selection when sonata changes
                            const newEchoes = [...selectedEchoes];
                            newEchoes[index] = null;
                            setSelectedEchoes(newEchoes);
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
                        <span className="stat-name">{echoStats[index].mainStat}</span>
                        <span className="stat-value">{echoStats[index].mainValue}</span>
                      </div>
                      <div className="flat-stat">
                        <span className="stat-name">{echoStats[index].flatStat}</span>
                        <span className="stat-value">{echoStats[index].flatValue}</span>
                      </div>
                      <div className="sub-stats">
                        {echoStats[index].subStats.map((sub, idx) => (
                          <div key={idx} className="sub-stat">
                            <span className="stat-name">{sub.stat}</span>
                            <span className="stat-value">{sub.value}</span>
                          </div>
                        ))}
                      </div>
                      {false && substatImages[index] && substatImages[index].length > 0 && (
                        <div className="substat-images">
                          <p className="ocr-label">Substat Crops:</p>
                          <div className="substat-images-row">
                            {substatImages[index].map((img, sIdx) => (
                              <div key={sIdx} className="substat-thumb">
                                <p className="substat-label">Sub {sIdx + 1}</p>
                                <img src={img} alt={`Echo ${index + 1} substat ${sIdx + 1}`} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="processing-text">Processing OCR...</p>
                  )}
                  {false && ocrTexts[index] && (
                    <div className="ocr-text-display">
                      <p className="ocr-label">Raw OCR Text:</p>
                      <pre>{ocrTexts[index]}</pre>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <button 
            onClick={() => {
              setImageUrl(null);
              setEchoImages([]);
              setEchoStats([]);
              setOcrTexts([]);
              setSelectedEchoes([]);
              setSelectedSonatas([]);
            }}
            className="reset-button"
          >
            Upload New Image
          </button>
        </div>
      )}
    </div>
  );
};

export default TestPage;