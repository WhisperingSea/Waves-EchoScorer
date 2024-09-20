import React, { useEffect, useRef, useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface MultiSelectDropdownProps {
  options: Option[];
  selectedValues?: Set<string>;
  onChange: (selected: Set<string>) => void;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
  selectedValues = new Set(),
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionToggle = (value: string) => {
    const newSelected = new Set(selectedValues);
    if (newSelected.has(value)) {
      newSelected.delete(value);
    } else {
      newSelected.add(value);
    }
    onChange(newSelected);
  };

  const handleRemoveOption = (value: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const newSelected = new Set(selectedValues);
    newSelected.delete(value);
    onChange(newSelected);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderSelectedOptions = () => {
    const selectedArray = Array.from(selectedValues);
    const maxDisplay = 2;

    if (selectedArray.length === 0) {
      return "Select options";
    }

    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
        {selectedArray.slice(0, maxDisplay).map((value) => {
          const option = options.find((opt) => opt.value === value);
          return option ? (
            <div
              key={value}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "2px 6px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "0.9rem",
                backgroundColor: "#000",
                cursor: "default",
              }}
            >
              {option.label.replace("DMG", "")}
              <button
                onClick={(event) => handleRemoveOption(value, event)}
                style={{
                  marginLeft: "4px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                &times;
              </button>
            </div>
          ) : null;
        })}
        {selectedArray.length > maxDisplay && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "2px 6px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#000",
              fontSize: "0.9rem",
              cursor: "default",
            }}
          >
            +{selectedArray.length - maxDisplay}
          </div>
        )}
      </div>
    );
  };

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
      <div
        onClick={toggleDropdown}
        style={{
          border: "1px solid #ccc",
          padding: "4px 8px",
          cursor: "pointer",
          borderRadius: "4px",
          backgroundColor: "#000",
          minHeight: "30px",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {renderSelectedOptions()}
      </div>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            border: "1px solid #ccc",
            backgroundColor: "#000",
            width: "100%",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 1,
            borderRadius: "4px",
          }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              style={{
                padding: "8px",
                cursor: "pointer",
                backgroundColor: selectedValues.has(option.value)
                  ? "#333"
                  : "#000",
              }}
              onClick={() => handleOptionToggle(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
