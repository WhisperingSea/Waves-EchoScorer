import React, { createContext, useContext, useState, ReactNode } from "react";

interface WeaponStat {
  id: number;
  name: string;
  weaponType: string;
  level: number;
  rank: number;
  primaryStat: string;
  primaryStatValue: number;
  secondaryStat: string;
  secondaryStatValue: number;
  weaponSkillBonus: { [key: number]: { stat: string; value: number } };
}

interface WeaponStatsType {
  weaponStats: WeaponStat;
  setWeaponStats: React.Dispatch<React.SetStateAction<WeaponStat>>;
}

const CalcWeaponContext = createContext<WeaponStatsType | undefined>(undefined);

export const useWeapons = () => {
  const context = useContext(CalcWeaponContext);
  if (!context) {
    throw new Error("useWeapons must be used within an CalcWeaponProvider");
  }
  return context;
};

interface WeaponContextProvideProps {
  children: ReactNode;
}

export const CalcWeaponProvider: React.FC<WeaponContextProvideProps> = ({
  children,
}) => {
  const [weaponStats, setWeaponStats] = useState<WeaponStat>({
    id: 0,
    name: "",
    weaponType: "",
    level: 90,
    rank: 1,
    primaryStat: "",
    primaryStatValue: 0,
    secondaryStat: "",
    secondaryStatValue: 0,
    weaponSkillBonus: {
      1: { stat: "", value: 0 },
      2: { stat: "", value: 0 },
      3: { stat: "", value: 0 },
      4: { stat: "", value: 0 },
    },
  });

  return (
    <CalcWeaponContext.Provider value={{ weaponStats, setWeaponStats }}>
      {children}
    </CalcWeaponContext.Provider>
  );
};
