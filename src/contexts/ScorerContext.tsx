import React, { createContext, useState, useContext, ReactNode } from "react";

interface ScorerTypes {
  [key: string]: { stat: string; value: number };
}

interface ScorerContextTypes {
  ScorerWeight: ScorerTypes;
  cost4Main: string[] | null;
  cost3Main: string[] | null;
  cost1Main: string[] | null;
  handleCost4Main?: (stat: string[] | null) => void;
  handleCost3Main?: (stat: string[] | null) => void;
  handleCost1Main?: (stat: string[] | null) => void;
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
    MainStat: { stat: "Main Stat Value", value: 2 },
    ATK: { stat: "ATK", value: 1 },
    ATKPerc: { stat: "ATK%", value: 1 },
    HP: { stat: "HP", value: 1 },
    HPPerc: { stat: "HP%", value: 1 },
    DEF: { stat: "DEF", value: 1 },
    DEFPerc: { stat: "DEF%", value: 1 },
    CritRate: { stat: "Crit. Rate%", value: 1 },
    CritDMG: { stat: "Crit. DMG%", value: 1 },
    EnergyRegen: { stat: "Energy Regen%", value: 1 },
    HealingBonus: { stat: "Heaing Bonus%", value: 0 },
    BasicBonus: { stat: "Basic Attack DMG Bonus%", value: 0.75 },
    HeavyBonus: { stat: "Heavy Attak DMG Bonus%", value: 0.75 },
    SkillBonus: { stat: "Resonance Skill DMG Bonus%", value: 0.75 },
    LibreationBonus: {
      stat: "Resonance Liberation DMG Bonus&",
      value: 0.75,
    },
  });

  const [cost4Main, setCost4Main] = useState<string[] | null>([]);
  const [cost3Main, setCost3Main] = useState<string[] | null>([]);
  const [cost1Main, setCost1Main] = useState<string[] | null>([]);

  const handleCost4Main = (stat: string[] | null) => {
    setCost4Main(stat);
  };

  const handleCost3Main = (stat: string[] | null) => {
    setCost3Main(stat);
  };

  const handleCost1Main = (stat: string[] | null) => {
    setCost1Main(stat);
  };

  return (
    <ScorerContext.Provider
      value={{
        ScorerWeight,
        setScorerWeight,
        cost4Main,
        cost3Main,
        cost1Main,
        handleCost4Main,
        handleCost3Main,
        handleCost1Main,
      }}
    >
      {children}
    </ScorerContext.Provider>
  );
};
