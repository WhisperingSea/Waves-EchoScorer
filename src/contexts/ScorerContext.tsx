import React, { createContext, useState, useContext, ReactNode } from "react";

interface ScorerTypes {
  Weight: { stat: string; value: number }[];
}

interface ScorerContextTypes {
  ScorerWeight: ScorerTypes;
  setScorerWeight: React.Dispatch<React.SetStateAction<ScorerTypes>>;
}

const ScorerContext = createContext<ScorerContextTypes | undefined>(undefined);

export const useScorerContext = () => {
  const context = useContext(ScorerContext);
  if (!context) {
    throw new Error(
      "useScorerContext must be used within a ScorerContextProvider"
    );
  }
  return context;
};

interface ScorerContextProviderProps {
  children: ReactNode;
}

export const ScorerContextProvider: React.FC<ScorerContextProviderProps> = ({
  children,
}) => {
  const [ScorerWeight, setScorerWeight] = useState<ScorerTypes>({
    Weight: [
      { stat: "ATK", value: 1 },
      { stat: "ATK%", value: 1 },
      { stat: "HP", value: 1 },
      { stat: "HP%", value: 1 },
      { stat: "DEF", value: 1 },
      { stat: "DEF%", value: 1 },
      { stat: "Crit. Rate%", value: 1 },
      { stat: "Crit. DMG%", value: 1 },
      { stat: "Energy Regen%", value: 1 },
      { stat: "Heaing Bonus%", value: 0 },
      { stat: "Basic Attack DMG Bonus%", value: 0.75 },
      { stat: "Heavy Attak DMG Bonus%", value: 0.75 },
      { stat: "Resonance Skill DMG Bonus%", value: 0.75 },
      {
        stat: "Resonance Liberation DMG Bonus&",
        value: 0.75,
      },
    ],
  });
  return (
    <ScorerContext.Provider value={{ ScorerWeight, setScorerWeight }}>
      {children}
    </ScorerContext.Provider>
  );
};
