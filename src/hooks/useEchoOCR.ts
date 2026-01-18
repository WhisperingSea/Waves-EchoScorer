import { createWorker } from 'tesseract.js';
import { WWSonataData } from '../data/WWSonata';
import { WWEchoesJSON } from '../data/WWEchoes';

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

interface EchoRectangle {
  left: number;
  top: number;
  width: number;
  height: number;
}

export const useEchoOCR = () => {
  const statRegions: StatRegion[] = [
    { name: 'mainStat', x: 188, y: 70, width: 174, height: 60 },
    { name: 'flatStat', x: 0, y: 190, width: 363, height: 30 },
    { name: 'subStat1', x: 40, y: 230, width: 323, height: 33 },
    { name: 'subStat2', x: 40, y: 263, width: 323, height: 33 },
    { name: 'subStat3', x: 40, y: 296, width: 323, height: 33 },
    { name: 'subStat4', x: 40, y: 329, width: 323, height: 33 },
    { name: 'subStat5', x: 40, y: 362, width: 323, height: 33 },
  ];

  const calculateEchoRectangles = (imgWidth: number, imgHeight: number): EchoRectangle[] => {
    const refWidth = 1920;
    const refHeight = 1080;
    const refCardX = 23;
    const refCardY = 652;
    const refCardWidth = 363;
    const refCardHeight = 407;
    const refGap = 11;

    const scaleX = imgWidth / refWidth;
    const scaleY = imgHeight / refHeight;

    return Array.from({ length: 5 }, (_, i) => ({
      left: Math.round((refCardX + i * (refCardWidth + refGap)) * scaleX),
      top: Math.round(refCardY * scaleY),
      width: Math.round(refCardWidth * scaleX),
      height: Math.round(refCardHeight * scaleY),
    }));
  };

  const cropStatRegion = (cardImage: string, region: StatRegion): Promise<string> => {
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

        ctx.drawImage(img, region.x, region.y, region.width, region.height, 0, 0, region.width, region.height);
        resolve(canvas.toDataURL('image/png'));
      };
    });
  };

  const cropImageCard = (img: HTMLImageElement, rect: EchoRectangle): string => {
    const canvas = document.createElement('canvas');
    canvas.width = rect.width;
    canvas.height = rect.height;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error('Failed to get canvas context');
    }

    ctx.drawImage(img, rect.left, rect.top, rect.width, rect.height, 0, 0, rect.width, rect.height);
    return canvas.toDataURL('image/png');
  };

  const preprocessImageForOCR = (imageDataUrl: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = imageDataUrl;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width * 3;
        canvas.height = img.height * 3;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          resolve(imageDataUrl);
          return;
        }

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
          const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
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

  const parseMainStatOnly = (ocrText: string): EchoStats => {
    let cleanText = ocrText
      .replace(/(?<!\d)\b[xwljA]\b(?!\d)/gi, '') // Remove OCR artifacts but NOT when adjacent to digits
      .replace(/\s+\d%\s+/g, ' ') // Remove single-digit percentages like "3% "
      .replace(/\s+%\s+/g, ' ')
      .replace(/(^|\s)\d(\s|$)/g, '$1$2')
      .replace(/\s+/g, ' ')
      .trim();

    const mainStatPattern = /(Crit\.\s*(?:DMG|Rate)|Healing\s*Bonus|Energy\s*Regen|ATK|HP|DEF|(?:Glacio|Fusion|Electro|Aero|Havoc|Spectro)\s*DMG\s*Bonus)\s*([\d.]+)(?:\s+([\d.]+))?%?/i;

    const match = cleanText.match(mainStatPattern);

    if (match) {
      const statName = match[1].trim();
      const num1 = parseFloat(match[2]);
      const num2 = match[3] ? parseFloat(match[3]) : null;
      
      // For bonus stats, use the larger value (OCR often reads extra small numbers)
      const isBonusStat = /bonus/i.test(statName);
      let rawValue = match[2];
      let num = num1;
      
      if (isBonusStat && num2 !== null && num2 > num1) {
        rawValue = match[3];
        num = num2;
      }

      const isPctStat = /bonus/i.test(statName) || /crit\./i.test(statName) || /energy\s*regen/i.test(statName);
      if (!isNaN(num) && isPctStat && rawValue.startsWith('0.') && num < 1) {
        num = num * 100;
      }

      if (!isNaN(num) && /crit\.\s*dmg/i.test(statName)) {
        if (num > 100) {
          num = num / 10;
        }
        if (num > 44) {
          num = 44;
        }
      }

      let formatted = Number.isFinite(num) ? (num % 1 === 0 ? String(num) : num.toFixed(2).replace(/\.00$/, '')) : rawValue;

      return {
        mainStat: statName,
        mainValue: formatted + '%',
        flatStat: '',
        flatValue: '',
        subStats: []
      };
    }

    return { mainStat: '', mainValue: '', flatStat: '', flatValue: '', subStats: [] };
  };

  const parseFlatStatOnly = (ocrText: string): EchoStats => {
    let cleanText = ocrText.replace(/\b[xw4]\b/gi, '').replace(/\s+/g, ' ').trim();
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
    let cleanText = ocrText.replace(/\b[xw]\b/gi, '').replace(/\s+/g, ' ').trim();
    // Updated pattern to capture the % if present
    const subStatPattern = /(ATK|HP|DEF|Crit\.\s*DMG|Crit\.\s*Rate|Energy\s*Regen|Basic\s*Attack\s*DMG\s*Bonus|Heavy\s*Attack\s*DMG\s*Bonus|Resonance\s*(?:Skill|Liberation)(?:\s*DMG)?(?:\s*Bonus)?)\s*([\d.]+)(%)?/i;

    const match = cleanText.match(subStatPattern);

    if (match) {
      let statName = match[1].trim();
      const value = match[2];
      const hasPercent = match[3]; // % symbol if present

      if (statName.toLowerCase().includes('resonance')) {
        if (statName.toLowerCase().includes('liberation')) {
          statName = 'Resonance Liberation DMG Bonus';
        } else if (statName.toLowerCase().includes('skill')) {
          statName = 'Resonance Skill DMG Bonus';
        }
      }

      // Use the % symbol from OCR as the source of truth
      // If OCR said "9.4%", keep it as "9.4%"
      // If OCR said "60", keep it as "60"
      let finalValue = value;
      
      if (hasPercent) {
        // OCR explicitly marked it with %
        finalValue = value + '%';
      } else {
        // No % in OCR text, so it's a flat stat
        // But some stats like Bonus/Energy/Rate/Crit should always be percentages
        const shouldBePercent = 
          statName.includes('Bonus') || 
          statName.includes('Energy') || 
          statName.includes('Rate') ||
          statName.includes('Crit');
        
        if (shouldBePercent) {
          finalValue = value + '%';
        }
      }

      return {
        stat: statName,
        value: finalValue
      };
    }

    return { stat: '', value: '' };
  };

  const matchSonataImage = async (echoSetImageDataUrl: string): Promise<{ name: string; id: number } | null> => {
    try {
      const sourceImg = new Image();
      sourceImg.src = echoSetImageDataUrl;

      return new Promise((resolve) => {
        const timeout = setTimeout(() => resolve(null), 5000);

        sourceImg.onload = async () => {
          clearTimeout(timeout);
          let bestMatch: { name: string; id: number } | null = null;
          let bestScore = -1;

          for (const sonata of WWSonataData) {
            try {
              const targetImg = new Image();
              const normalizedSrc = sonata.img.match(/^https?:\/\//)
                ? sonata.img
                : `${import.meta.env.BASE_URL ?? '/'}${sonata.img.replace(/^\//, '')}`;
              targetImg.crossOrigin = 'anonymous';
              targetImg.src = normalizedSrc;

              await new Promise<void>((imgResolve) => {
                const imgTimeout = setTimeout(() => imgResolve(), 2000);

                targetImg.onload = () => {
                  clearTimeout(imgTimeout);
                  try {
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

          if (bestScore > 28 && bestMatch) {
            resolve(bestMatch);
          } else {
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
        const timeout = setTimeout(() => resolve(null), 5000);

        sourceImg.onload = async () => {
          clearTimeout(timeout);
          let bestMatch: { name: string; id: number } | null = null;
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

  const processEchoImage = async (
    imagePath: string,
    onProgress?: (step: string) => void
  ): Promise<{
    echoImages: string[];
    echoStats: EchoStats[];
    matchedSonatas: Array<{ name: string; id: number } | null>;
    matchedEchoes: Array<{ name: string; id: number } | null>;
  }> => {
    onProgress?.('Loading image...');
    const img = new Image();
    img.src = imagePath;

    return new Promise((resolve, reject) => {
      img.onload = async () => {
        try {
          onProgress?.('Calculating echo positions...');
          const echoRectangles = calculateEchoRectangles(img.naturalWidth, img.naturalHeight);
          const croppedImages = echoRectangles.map((rect) => cropImageCard(img, rect));

          onProgress?.('Initializing OCR...');
          const worker = await createWorker('eng');
          const parsedStats: EchoStats[] = [];
          const allMatchedSonatas: Array<{ name: string; id: number } | null> = [];
          const allMatchedEchoes: Array<{ name: string; id: number } | null> = [];

          for (let i = 0; i < croppedImages.length; i++) {
            onProgress?.(`Processing echo ${i + 1} of ${croppedImages.length}...`);

            try {
              const mainStatImage = await cropStatRegion(croppedImages[i], statRegions[0]);
              const preprocessedMainStat = await preprocessImageForOCR(mainStatImage);

              const { data: { text: mainStatText } } = await worker.recognize(preprocessedMainStat, {
                tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.% '
              } as any);

              const flatStatImage = await cropStatRegion(croppedImages[i], statRegions[1]);
              const preprocessedFlatStat = await preprocessImageForOCR(flatStatImage);

              const { data: { text: flatStatText } } = await worker.recognize(preprocessedFlatStat, {
                tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789% '
              } as any);

              const subStats: Array<{ stat: string; value: string }> = [];
              let yPositionOffset = 0;

              for (let j = 2; j < 7; j++) {
                const adjustedRegion: StatRegion = {
                  ...statRegions[j],
                  y: statRegions[j].y + yPositionOffset
                };

                const subStatImage = await cropStatRegion(croppedImages[i], adjustedRegion);
                const preprocessedSubStat = await preprocessImageForOCR(subStatImage);

                const { data: { text: subStatText } } = await worker.recognize(preprocessedSubStat, {
                  tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.% '
                } as any);

                const parsedSubStat = parseSubStatOnly(subStatText);
                if (parsedSubStat.stat) {
                  subStats.push(parsedSubStat);
                }

                const lowerText = subStatText.toLowerCase();
                if (lowerText.includes('liberation') || lowerText.includes('skill')) {
                  yPositionOffset += 2;
                }
              }

              const parsedMain = parseMainStatOnly(mainStatText);
              const parsedFlat = parseFlatStatOnly(flatStatText);

              const echoSetRegion: StatRegion = {
                name: 'echoSet',
                x: 244,
                y: 9,
                width: 48,
                height: 48
              };
              const echoSetImage = await cropStatRegion(croppedImages[i], echoSetRegion);

              const matchedSonata = await matchSonataImage(echoSetImage);
              allMatchedSonatas.push(matchedSonata);

              const echoPortraitRegion: StatRegion = {
                name: 'echoPortrait',
                x: 0,
                y: 0,
                width: 189,
                height: 179
              };
              const echoPortrait = await cropStatRegion(croppedImages[i], echoPortraitRegion);

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
            } catch (error) {
              console.error(`Error during OCR for card ${i + 1}:`, error);
              parsedStats.push({
                mainStat: 'Error',
                mainValue: '',
                flatStat: '',
                flatValue: '',
                subStats: []
              });
            }
          }

          await worker.terminate();
          onProgress?.('Complete');

          resolve({
            echoImages: croppedImages,
            echoStats: parsedStats,
            matchedSonatas: allMatchedSonatas,
            matchedEchoes: allMatchedEchoes
          });
        } catch (error) {
          reject(error);
        }
      };

      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };
    });
  };

  return {
    processEchoImage,
    cropStatRegion,
    matchSonataImage,
    matchEchoImage
  };
};
