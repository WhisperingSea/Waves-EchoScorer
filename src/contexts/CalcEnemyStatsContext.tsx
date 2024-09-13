import React, { createContext, useContext, useState, ReactNode } from "react";

interface EnemyStatsType {
  EnemyLevel: number;
  setEnemyLevel: React.Dispatch<React.SetStateAction<number>>;
  EnemyEleRes: number;
  setEnemyEleRes: React.Dispatch<React.SetStateAction<number>>;
  EnemyDefIgnore: number;
  setEnemyDefIgnore: React.Dispatch<React.SetStateAction<number>>;
}

const EnemyStatsContext = createContext<EnemyStatsType | undefined>(undefined);

export const useEnemyStats = () => {
  const context = useContext(EnemyStatsContext);
  if (!context) {
    throw new Error("useEnemyStats must be used within an EnemyStatsProvider");
  }
  return context;
};

interface EnemyStatsProviderProps {
  children: ReactNode;
}

export const EnemyStatsProvider: React.FC<EnemyStatsProviderProps> = ({
  children,
}) => {
  const [EnemyLevel, setEnemyLevel] = useState(90);
  const [EnemyEleRes, setEnemyEleRes] = useState(0.1);
  const [EnemyDefIgnore, setEnemyDefIgnore] = useState(0);

  return (
    <EnemyStatsContext.Provider
      value={{
        EnemyEleRes,
        EnemyLevel,
        setEnemyEleRes,
        setEnemyLevel,
        EnemyDefIgnore,
        setEnemyDefIgnore,
      }}
    >
      {children}
    </EnemyStatsContext.Provider>
  );
};
