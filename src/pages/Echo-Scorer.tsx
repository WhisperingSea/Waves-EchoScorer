import "../styles/EchoScorer.css";
import { useEffect, useRef, useState } from "react";
import { useDataContext } from "../contexts/CharacterDataContext";
import { useParams } from "react-router-dom";
import CalcStats from "../components/CalculatorComponents/CalcStats";
import ScorerEchoCard from "../components/Cards/Scorer-EchoCard";
import ScorerWeaponCard from "../components/Cards/Scorer-WeaponCard";
import ScorerResonance from "../components/PageComponents/ScorerResonance";
import ScorerBar from "../components/SearchBars/ScorerBar";
import { useEchoContext } from "../contexts/EchoDataContext";
import { useEchoes } from "../contexts/CalcEchoContext";
import { useWeapons } from "../contexts/CalcWeaponContext";
import { useWeaponContext } from "../contexts/WeaponDataContext";
import html2canvas from "html2canvas";
import Footer from "../components/Common/Footer";

const EchoScorer: React.FC = () => {
  const { characters, selectedCharacterId, setSelectedCharacterId, level } =
    useDataContext();
  const [eleImg, setEleImg] = useState<string>("");
  const { echoes } = useEchoContext();
  const { echoStats } = useEchoes();
  const { weaponStats } = useWeapons();
  const { weapons } = useWeaponContext();
  const { charaName } = useParams<{ charaName: string }>();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [zoom, setZoom] = useState<number>(1);
  const [isEditing, setIsEdititng] = useState(false);
  const shiftIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  //Page Dependency
  const chara = Object.values(characters).find(
    (char) => char.charaId === selectedCharacterId
  );

  const cName = Object.values(characters).find(
    (character) => character.name.toLowerCase() === charaName?.toLowerCase()
  );

  useEffect(() => {
    if (cName) {
      setSelectedCharacterId(cName.charaId);
    }
  });

  const [images, setImages] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  });

  useEffect(() => {
    const echo = Object.values(echoes).find(
      (echo) => echo.name === echoStats[1].name
    )?.img;
    const echo2 = Object.values(echoes).find(
      (echo) => echo.name === echoStats[2].name
    )?.img;
    const echo3 = Object.values(echoes).find(
      (echo) => echo.name === echoStats[3].name
    )?.img;
    const echo4 = Object.values(echoes).find(
      (echo) => echo.name === echoStats[4].name
    )?.img;
    const echo5 = Object.values(echoes).find(
      (echo) => echo.name === echoStats[5].name
    )?.img;
    const weapon = Object.values(weapons).find(
      (weap) => weap.name === weaponStats.name
    )?.img;

    // Only set the images if they exist
    setImages((prevImages) => ({
      ...prevImages,
      1: echo || prevImages[1],
      2: echo2 || prevImages[2],
      3: echo3 || prevImages[3],
      4: echo4 || prevImages[4],
      5: echo5 || prevImages[5],
      6: weapon || prevImages[6],
      7: chara?.images.model || prevImages[7],
      8: imageUrl || prevImages[8],
    }));
  }, [echoes, echoStats, weaponStats, chara, imageUrl]);

  //Image Handling
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const loadImages = async (urls: string[]): Promise<void> => {
    const loadImage = (url: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      });
    };

    await Promise.all(urls.map((url) => loadImage(url)));
  };

  useEffect(() => {
    const loadedImages = Object.values(images).filter((img) => img !== "");
    if (loadedImages.length > 0) {
      setImageUrls(loadedImages);
    }
  }, [images]);

  const downloadDivAsImage = async () => {
    if (divRef.current) {
      setIsLoading(true);

      try {
        await loadImages(imageUrls);

        html2canvas(divRef.current, {
          scale: window.devicePixelRatio * 2,
          useCORS: true,
          logging: true,
          backgroundColor: null,
        })
          .then((canvas) => {
            const dataUrl = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = `${chara?.name}-Card.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Failed to capture div:", error);
            setIsLoading(false);
          });
      } catch (error) {
        console.error("Failed to load images:", error);
        setIsLoading(false);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImageUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageEdit = (state: "Edit" | "Save") => {
    setIsEdititng(state === "Edit" && true);
    if (state === "Save") {
      setIsEdititng(false);
    }
  };

  const shiftImage = (direction: "left" | "right" | "up" | "down") => {
    setPosition((prev) => ({
      x:
        direction === "left"
          ? prev.x - 10
          : direction === "right"
          ? prev.x + 10
          : prev.x,
      y:
        direction === "up"
          ? prev.y - 10
          : direction === "down"
          ? prev.y + 10
          : prev.y,
    }));
  };

  const zoomImage = (direction: "in" | "out") => {
    setZoom((prev) =>
      Math.max(0.1, Math.min(prev + (direction === "in" ? 0.1 : -0.1), 3))
    );
  };

  const handleMouseDown = (direction: "left" | "right" | "up" | "down") => {
    shiftIntervalRef.current = setInterval(() => shiftImage(direction), 100); // Adjust interval as needed
  };

  const handleMouseUp = () => {
    if (shiftIntervalRef.current) {
      clearInterval(shiftIntervalRef.current);
      shiftIntervalRef.current = null;
    }
  };

  const handleMouseLeaveButton = () => {
    handleMouseUp();
  };

  const handleImageReset = () => {
    setImageUrl(null);
    setIsEdititng(false);
    setPosition({ x: 0, y: 0 });
    setZoom(1);
  };

  //Character Elements
  useEffect(() => {
    switch (chara?.element) {
      case "Glacio":
        setEleImg(
          "https://sohansc13.github.io/wuthering-waves-assets/images/icons_ele/Glacio_3.png"
        );
        break;
      case "Fusion":
        setEleImg(
          "https://sohansc13.github.io/wuthering-waves-assets/images/icons_ele/Fusion_3.png"
        );
        break;
      case "Electro":
        setEleImg(
          "https://sohansc13.github.io/wuthering-waves-assets/images/icons_ele/Electro_3.png"
        );
        break;
      case "Aero":
        setEleImg(
          "https://sohansc13.github.io/wuthering-waves-assets/images/icons_ele/Aero_3.png"
        );
        break;
      case "Spectro":
        setEleImg(
          "https://sohansc13.github.io/wuthering-waves-assets/images/icons_ele/Spectro_3.png"
        );
        break;
      case "Havoc":
        setEleImg(
          "https://sohansc13.github.io/wuthering-waves-assets/images/icons_ele/Havoc_3.png"
        );
    }
  }, [chara, setEleImg]);

  return (
    <>
      <div className="echo-scorer-page-container">
        <div className="scorer-background"></div>
        <main>
          <section className="echo-scorer-section">
            <div></div>
            <div className="scorer-item-1">
              <ScorerBar
                isLoading={isLoading}
                downloadDivAsImage={downloadDivAsImage}
              />
            </div>
            <div className="echo-scorer-grid" ref={divRef}>
              <div className="scorer-item-2">
                {imageUrl === null ? (
                  <>
                    <label
                      htmlFor="ScorerImgInput"
                      className="custom-file-label"
                    >
                      Add
                    </label>
                    <input
                      className="scorer-img-edit"
                      type="file"
                      id="ScorerImgInput"
                      style={{ display: "none" }}
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </>
                ) : isEditing ? (
                  <button
                    className="custom-file-label"
                    onClick={() => handleImageEdit("Save")}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="custom-file-label"
                    onClick={() => handleImageEdit("Edit")}
                  >
                    Edit
                  </button>
                )}
                <button className="scorer-img-reset" onClick={handleImageReset}>
                  Reset
                </button>
                <div className="image-container">
                  <img
                    src={imageUrl ? imageUrl : chara?.images.model}
                    style={
                      imageUrl
                        ? {
                            position: "absolute",
                            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                            width: "max-content",
                            height: "100%",
                            scale: 2,
                          }
                        : {
                            width: "max-content",
                            height: "95%",
                            scale: 2,
                          }
                    }
                  />
                </div>
                {imageUrl && !isEditing && (
                  <div className="scorer-item-resonance">
                    <ScorerResonance />
                  </div>
                )}
                {imageUrl && isEditing && (
                  <div className="controls">
                    <button
                      onClick={() => shiftImage("left")}
                      onMouseDown={() => handleMouseDown("left")}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseLeaveButton}
                    >
                      Shift Left
                    </button>
                    <button
                      onClick={() => shiftImage("right")}
                      onMouseDown={() => handleMouseDown("right")}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseLeaveButton}
                    >
                      Shift Right
                    </button>
                    <button
                      onClick={() => shiftImage("up")}
                      onMouseDown={() => handleMouseDown("up")}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseLeaveButton}
                    >
                      Shift Up
                    </button>
                    <button
                      onClick={() => shiftImage("down")}
                      onMouseDown={() => handleMouseDown("down")}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseLeaveButton}
                    >
                      Shift Down
                    </button>
                    <button onClick={() => zoomImage("in")}>Zoom In</button>
                    <button onClick={() => zoomImage("out")}>Zoom Out</button>
                  </div>
                )}
              </div>
              <div className="scorer-item-3">
                <img
                  className="scorer-item-img-rarity"
                  src={chara?.rarity.img}
                />
                <h3>{chara?.name}</h3>
                <div className="scorer-img-flex">
                  <h3>Level: {level}</h3>
                  <img
                    className="scorer-item-img-element"
                    src={eleImg}
                    alt={`${chara?.element} Icon`}
                  />
                </div>
                <div className="no-center">
                  <CalcStats Element={chara?.element} />
                </div>
              </div>
              <div className="scorer-item-4">
                <ScorerEchoCard Index={1} />
              </div>
              <div className="scorer-item-5">
                <ScorerEchoCard Index={2} />
              </div>
              <div className="scorer-item-6">
                <ScorerEchoCard Index={3} />
              </div>
              <div className="scorer-item-7">
                <ScorerEchoCard Index={4} />
              </div>
              <div className="scorer-item-8">
                <ScorerEchoCard Index={5} />
              </div>
              <div className="scorer-item-9">
                <ScorerWeaponCard />
              </div>
              <div className="scorer-item-10"></div>
            </div>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default EchoScorer;
