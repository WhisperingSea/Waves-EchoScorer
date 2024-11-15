import { useEffect, useRef, useState } from "react";
import "./ScorerResonance.css";

const ScorerResonance: React.FC = () => {
  const [show, setShow] = useState(false);
  const [sequence, setSequence] = useState(0);

  const resDropDisplay = () => {
    setShow(true);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShow(false); // Close the dropdown
      }
    };

    document.addEventListener("click", handleClickOutside); // Use click instead
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSequence = (num: number) => {
    setShow(false);
    setSequence(num);
  };

  return (
    <div className="Scorer-Resonance-Container">
      <div
        className="Scorer-resonance-box"
        onClick={() => resDropDisplay()}
        ref={dropdownRef}
      >
        <h3 className="res-num">R{sequence}</h3>
        {show && (
          <div className={"scorer-res-dropdown"}>
            {[0, 1, 2, 3, 4, 5, 6].map((num) => {
              return (
                <div
                  key={num}
                  className="res-list-drop"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSequence(num);
                  }}
                >
                  R{num}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScorerResonance;
