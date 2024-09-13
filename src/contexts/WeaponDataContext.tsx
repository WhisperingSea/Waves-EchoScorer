import React, { createContext, useState, useContext, ReactNode } from "react";
import { WWWeapons, WWWeaponsJSON } from "../data/WWWeapons";

interface WeaponContextTypes {
  weapons: Record<number, WWWeapons>;
  selectedWeapon: number | null;
  setSelectedWeapon: (id: number | null) => void;
}

const WeaponContext = createContext<WeaponContextTypes | undefined>(undefined);

export const useWeaponContext = () => {
  const context = useContext(WeaponContext);
  if (!context) {
    throw new Error("useEchoContext must be used within a EchoContextProvider");
  }
  return context;
};

interface WeaponContextProviderProps {
  children: ReactNode;
}

export const WeaponContextProvider: React.FC<WeaponContextProviderProps> = ({
  children,
}) => {
  // @ts-ignore For setEchoes warning
  const [weapons, setWeapons] = useState<Record<number, WWWeapons>>(
    WWWeaponsJSON.reduce((acc, echo) => {
      acc[echo.id] = echo;
      return acc;
    }, {} as Record<number, WWWeapons>)
  );
  const [selectedWeapon, setSelectedWeapon] = useState<number | null>(null);

  return (
    <>
      <WeaponContext.Provider
        value={{ selectedWeapon, setSelectedWeapon, weapons }}
      >
        {children}
      </WeaponContext.Provider>
    </>
  );
};
