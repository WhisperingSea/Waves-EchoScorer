import React, { useState, useRef, useEffect } from "react";

interface SelectInputProps {
  options: (number | string)[];
  selectedValue: number | string;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({
  options = [],
  selectedValue,
  onValueChange,
  disabled = false,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownWidth, setDropdownWidth] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const width = window.innerWidth;
  const W = width < 481 ? true : false;

  useEffect(() => {
    if (containerRef.current) {
      setDropdownWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const createChangeEvent = (
    value: number | string
  ): React.ChangeEvent<HTMLInputElement> => {
    const event = {
      target: {
        value: value,
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    return event;
  };

  const handleArrowClick = (direction: "up" | "down") => {
    if (disabled) return;

    const currentIndex = options.indexOf(selectedValue);
    let newIndex = -1;

    if (direction === "down") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    } else if (direction === "up") {
      newIndex =
        currentIndex < options.length - 1
          ? currentIndex + 1
          : options.length - 1;
    }

    if (newIndex !== -1) {
      const event = createChangeEvent(options[newIndex]);
      onValueChange(event);
    }
  };

  const handleInputClick = () => {
    if (!disabled) {
      setDropdownOpen(!isDropdownOpen);
    }
  };

  const handleOptionClick = (value: number | string) => {
    const event = createChangeEvent(value);
    onValueChange(event);
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => handleArrowClick("up")}
          aria-label="Increase value"
          style={{
            height: W ? "25px" : "30px",
            width: W ? "25px" : "30px",
            marginRight: "5px",
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
            fontSize: "14px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: "1",
            padding: "0",
            boxSizing: "border-box",
            opacity: disabled ? 0.5 : 1, // Dimmed when disabled
            cursor: disabled ? "not-allowed" : "pointer",
          }}
          disabled={disabled}
        >
          &#9650; {/* Up arrow */}
        </button>

        <input
          ref={inputRef}
          type="text"
          value={selectedValue || ""}
          readOnly
          onClick={handleInputClick}
          style={{
            height: W ? "25px" : "30px",
            width: W ? "50px" : "70px",
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
            boxSizing: "border-box",
            opacity: disabled ? 0.5 : 1,
            cursor: disabled ? "not-allowed" : "text", // Input should allow text cursor
          }}
          disabled={disabled}
        />

        <button
          onClick={() => handleArrowClick("down")}
          aria-label="Decrease value"
          style={{
            height: W ? "25px" : "30px",
            width: W ? "25px" : "30px",
            marginLeft: "5px",
            backgroundColor: "black",
            color: "white",
            border: "1px solid white",
            fontSize: "14px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: "1",
            padding: "0",
            boxSizing: "border-box",
            opacity: disabled ? 0.5 : 1,
            cursor: disabled ? "not-allowed" : "pointer",
          }}
          disabled={disabled}
        >
          &#9660; {/* Down arrow */}
        </button>
      </div>

      {isDropdownOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: `${dropdownWidth}px`,
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            zIndex: 1000,
            maxHeight: "150px",
            overflowY: "auto",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              style={{
                padding: W ? "2px" : "8px",
                cursor: "pointer",
                borderBottom: "1px solid #ccc",
                backgroundColor: option === selectedValue ? "#222" : "#000",
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectInput;
