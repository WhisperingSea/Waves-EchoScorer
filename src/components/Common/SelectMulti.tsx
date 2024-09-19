import React, { useState, useRef, useEffect } from "react";

interface Option {
  label: string;
  value: string;
}

interface MultiSelectProps {
  options: Option[];
  selectedValues?: Set<string>; // Make selectedValues optional
  defaultSelectedValues?: Set<string>; // Make defaultSelectedValues optional
  onChange: (selected: Set<string>) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selectedValues = new Set<string>(), // Default to empty Set if not provided
  defaultSelectedValues = new Set<string>(), // Default to empty Set if not provided
  onChange,
}) => {
  const [internalSelectedValues, setInternalSelectedValues] = useState<
    Set<string>
  >(new Set<string>());
  const [isOpen, setIsOpen] = useState(false);
  const [hasDefaultBeenCleared, setHasDefaultBeenCleared] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize internalSelectedValues on mount
  useEffect(() => {
    if (selectedValues.size > 0) {
      setInternalSelectedValues(new Set(selectedValues));
    } else if (!hasDefaultBeenCleared && defaultSelectedValues.size > 0) {
      setInternalSelectedValues(new Set(defaultSelectedValues));
    }
  }, [selectedValues, defaultSelectedValues, hasDefaultBeenCleared]);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Handle option selection
  const handleOptionToggle = (value: string) => {
    const newSelected = new Set(internalSelectedValues);
    if (newSelected.has(value)) {
      newSelected.delete(value);
    } else {
      newSelected.add(value);
    }
    setInternalSelectedValues(newSelected);
    onChange(newSelected);

    // Check if any default value is removed
    if (defaultSelectedValues.has(value)) {
      setHasDefaultBeenCleared(true);
    }
  };

  // Handle removing a selected option
  const handleRemoveOption = (value: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevents the click from toggling the dropdown
    const newSelected = new Set(internalSelectedValues);
    newSelected.delete(value);
    setInternalSelectedValues(newSelected);
    onChange(newSelected);

    // Check if any default value is removed
    if (defaultSelectedValues.has(value)) {
      setHasDefaultBeenCleared(true);
    }
  };

  // Close dropdown when clicking outside
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

  // Render selected options with overflow indicator
  const renderSelectedOptions = () => {
    const selectedArray = Array.from(internalSelectedValues);
    const maxDisplay = 2; // Number of items to show before showing "+n"

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
                backgroundColor: internalSelectedValues.has(option.value)
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

export default MultiSelect;
