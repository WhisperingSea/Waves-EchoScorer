import React, { createContext, useState, useContext, ReactNode } from "react";
import { WWEchoes, WWEchoesJSON } from "../data/WWEchoes.ts";

interface EchoContextTypes {
  echoes: Record<number, WWEchoes>;
  selectedEcho: number | null;
  setSelectedEcho: (id: number | null) => void;
}

const EchoContext = createContext<EchoContextTypes | undefined>(undefined);

export const useEchoContext = () => {
  const context = useContext(EchoContext);
  if (!context) {
    throw new Error("useEchoContext must be used within a EchoContextProvider");
  }
  return context;
};

interface EchoContextProviderProps {
  children: ReactNode;
}

export const EchoContextProvider: React.FC<EchoContextProviderProps> = ({
  children,
}) => {
  // @ts-ignore For setEchoes warning
  const [echoes, setEchoes] = useState<Record<number, WWEchoes>>(
    WWEchoesJSON.reduce((acc, echo) => {
      acc[echo.id] = echo;
      return acc;
    }, {} as Record<number, WWEchoes>)
  );
  const [selectedEcho, setSelectedEcho] = useState<number | null>(null);

  return (
    <>
      <EchoContext.Provider value={{ selectedEcho, setSelectedEcho, echoes }}>
        {children}
      </EchoContext.Provider>
    </>
  );
};
