import React, { useState, useEffect, useRef } from "react";
import "./Slider.css";
import { useDataContext } from "../../contexts/CharacterDataContext";

type ImageData = {
  src: string;
  alt: string;
  charaId: number;
};

type ImageSliderProps = {
  images: ImageData[];
  onImageClick?: (index: number) => void;
  onAltChange?: (alt: string) => void;
  vertical?: boolean;
  visibleImagesCount?: number;
  autoPlay?: boolean;
  interval?: number;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  onImageClick,
  onAltChange,
  vertical = false,
  visibleImagesCount = 3,
  autoPlay = true,
  interval = 10000,
}) => {
  const [currentImageId, setCurrentImageId] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const { setSelectedCharacterId } = useDataContext();

  useEffect(() => {
    if (images.length === 0) return;

    if (autoPlay) {
      startSlider();
    }

    return () => {
      stopSlider();
    };
  }, [currentImageId, images, autoPlay]);

  useEffect(() => {
    if (onAltChange && images[currentImageId]) {
      onAltChange(images[currentImageId].alt);
    }
    setSelectedCharacterId(images[currentImageId]?.charaId); // Added optional chaining here
  }, [currentImageId, images, onAltChange]);

  const startSlider = () => {
    stopSlider(); // Clear any existing interval before starting a new one
    intervalRef.current = setInterval(nextSlide, interval);
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const nextSlide = () => {
    setCurrentImageId((currentImageId + 1) % images.length);
  };

  const handleImageClick = (index: number) => {
    if (index === currentImageId) {
      if (autoPlay) {
        startSlider(); // Restart autoplay if slider is becoming visible again
      } else {
        stopSlider(); // Stop autoplay if slider is becoming invisible
      }
    } else {
      setCurrentImageId(index); // Set new currentImageId
      if (autoPlay) {
        startSlider(); // Start autoplay if it's enabled
      }
    }
    if (onImageClick) {
      onImageClick(index); // Call onImageClick callback if provided
    }
  };

  if (images.length === 0) return null;

  // Calculate indexes for visible images based on currentImageId
  const halfVisibleCount = Math.floor(visibleImagesCount / 2);
  let startIndex = currentImageId - halfVisibleCount;
  let endIndex = currentImageId + halfVisibleCount;

  // Adjust for negative indexes (wrap around)
  if (startIndex < 0) {
    startIndex += images.length;
  }

  // Generate array of indexes to show
  const indexesToShow: number[] = [];
  for (let i = startIndex; i <= endIndex; i++) {
    indexesToShow.push((i + images.length) % images.length);
  }

  return (
    <div className={`image-slider ${vertical ? "vertical" : "horizontal"}`}>
      <div className="slider-container">
        {images.map((image, index) => (
          <img
            key={image.charaId}
            src={image.src}
            alt={image.alt}
            className={`slider-image ${
              index === currentImageId
                ? "active"
                : indexesToShow.includes(index)
                ? "fade-in"
                : "fade-out"
            }`}
            onClick={() => handleImageClick(index)}
            style={{
              display: indexesToShow.includes(index) ? "block" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
