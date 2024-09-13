import React, { createContext, useContext, useState, ReactNode } from "react";

interface EchoStat {
  id: number;
  name: string;
  set: number;
  cost: number;
  mainStat: string;
  mainStatValue: number;
  selectedSubStat1: { stat: string; value: number };
  selectedSubStat2: { stat: string; value: number };
  selectedSubStat3: { stat: string; value: number };
  selectedSubStat4: { stat: string; value: number };
  selectedSubStat5: { stat: string; value: number };
}

interface EchoContextType {
  echoStats: { [key: number]: EchoStat };
  setEchoStats: React.Dispatch<
    React.SetStateAction<{ [key: number]: EchoStat }>
  >;
  sonataGroup: string;
  sonataGroup2: string;
  sonataEffectStacks: number;
  setSonataGroup: React.Dispatch<React.SetStateAction<string>>;
  setSonataGroup2: React.Dispatch<React.SetStateAction<string>>;
  setSonataEffectStacks: React.Dispatch<React.SetStateAction<number>>;
}

const CalcEchoContext = createContext<EchoContextType | undefined>(undefined);

export const useEchoes = () => {
  const context = useContext(CalcEchoContext);
  if (!context) {
    throw new Error("useEchoes must be used within an EchoProvider");
  }
  return context;
};

interface EchoProviderProps {
  children: ReactNode;
}

export const CalcEchoProvider: React.FC<EchoProviderProps> = ({ children }) => {
  const [echoStats, setEchoStats] = useState<{ [key: number]: EchoStat }>({
    1: {
      id: 0,
      name: "",
      set: 0,
      cost: 0,
      mainStat: "",
      mainStatValue: 0,
      selectedSubStat1: { stat: "", value: 0 },
      selectedSubStat2: { stat: "", value: 0 },
      selectedSubStat3: { stat: "", value: 0 },
      selectedSubStat4: { stat: "", value: 0 },
      selectedSubStat5: { stat: "", value: 0 },
    },
    2: {
      id: 0,
      mainStat: "",
      set: 0,
      name: "",
      cost: 0,
      mainStatValue: 0,
      selectedSubStat1: { stat: "", value: 0 },
      selectedSubStat2: { stat: "", value: 0 },
      selectedSubStat3: { stat: "", value: 0 },
      selectedSubStat4: { stat: "", value: 0 },
      selectedSubStat5: { stat: "", value: 0 },
    },
    3: {
      id: 0,
      mainStat: "",
      set: 0,
      name: "",
      cost: 0,
      mainStatValue: 0,
      selectedSubStat1: { stat: "", value: 0 },
      selectedSubStat2: { stat: "", value: 0 },
      selectedSubStat3: { stat: "", value: 0 },
      selectedSubStat4: { stat: "", value: 0 },
      selectedSubStat5: { stat: "", value: 0 },
    },
    4: {
      id: 0,
      mainStat: "",
      set: 0,
      name: "",
      cost: 0,
      mainStatValue: 0,
      selectedSubStat1: { stat: "", value: 0 },
      selectedSubStat2: { stat: "", value: 0 },
      selectedSubStat3: { stat: "", value: 0 },
      selectedSubStat4: { stat: "", value: 0 },
      selectedSubStat5: { stat: "", value: 0 },
    },
    5: {
      id: 0,
      mainStat: "",
      set: 0,
      name: "",
      cost: 0,
      mainStatValue: 0,
      selectedSubStat1: { stat: "", value: 0 },
      selectedSubStat2: { stat: "", value: 0 },
      selectedSubStat3: { stat: "", value: 0 },
      selectedSubStat4: { stat: "", value: 0 },
      selectedSubStat5: { stat: "", value: 0 },
    },
    6: {
      id: 0,
      mainStat: "",
      set: 0,
      name: "",
      cost: 0,
      mainStatValue: 0,
      selectedSubStat1: { stat: "", value: 0 },
      selectedSubStat2: { stat: "", value: 0 },
      selectedSubStat3: { stat: "", value: 0 },
      selectedSubStat4: { stat: "", value: 0 },
      selectedSubStat5: { stat: "", value: 0 },
    },
  });
  const [sonataGroup, setSonataGroup] = useState<string>("");
  const [sonataGroup2, setSonataGroup2] = useState<string>("");
  const [sonataEffectStacks, setSonataEffectStacks] = useState<number>(0);

  return (
    <CalcEchoContext.Provider
      value={{
        echoStats,
        setEchoStats,
        setSonataGroup,
        sonataGroup,
        setSonataGroup2,
        sonataGroup2,
        sonataEffectStacks,
        setSonataEffectStacks,
      }}
    >
      {children}
    </CalcEchoContext.Provider>
  );
};
