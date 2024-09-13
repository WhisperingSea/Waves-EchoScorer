import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  SetStateAction,
} from "react";

interface ForteStat {
  id: number | undefined;
  name: string | undefined;
  stat1: string;
  stat1Value1: number;
  stat1Value2: number;
  stat1Value3: number;
  stat1Value4: number;
  stat2: string;
  stat2Value1: number;
  stat2Value2: number;
  stat2Value3: number;
  stat2Value4: number;
}

interface SkillLevel {
  BasicAttack: number;
  ResonanceSkill: number;
  ResonanceLiberation: number;
  ForteCircuit: number;
  IntroSkill: number;
  InherantSkill1: {
    Value: number;
    Buff: string;
  };
  InherantSkill2: {
    Value: number;
    Buff: string;
    Value2?: number;
    Buff2?: string;
  };
}

interface ForteStatsType {
  forteStats: ForteStat;
  setForteStats: React.Dispatch<React.SetStateAction<ForteStat>>;
  skillLevels: SkillLevel;
  setSkillLevels: React.Dispatch<SetStateAction<SkillLevel>>;
}

const CalcForteContext = createContext<ForteStatsType | undefined>(undefined);

export const useForte = () => {
  const context = useContext(CalcForteContext);
  if (!context) {
    throw new Error("useForte must be used within an CalcForteProvider");
  }
  return context;
};

interface CalcForteProviderProps {
  children: ReactNode;
}

export const CalcForteProvider: React.FC<CalcForteProviderProps> = ({
  children,
}) => {
  const [forteStats, setForteStats] = useState<ForteStat>({
    id: 0,
    name: "",
    stat1: "",
    stat1Value1: 0,
    stat1Value2: 0,
    stat1Value3: 0,
    stat1Value4: 0,
    stat2: "",
    stat2Value1: 0,
    stat2Value2: 0,
    stat2Value3: 0,
    stat2Value4: 0,
  });
  const [skillLevels, setSkillLevels] = useState<SkillLevel>({
    BasicAttack: 1,
    ResonanceSkill: 1,
    ResonanceLiberation: 1,
    ForteCircuit: 1,
    IntroSkill: 1,
    InherantSkill1: {
      Buff: "",
      Value: 0,
    },
    InherantSkill2: {
      Buff: "",
      Value: 0,
      Buff2: "",
      Value2: 0,
    },
  });
  return (
    <CalcForteContext.Provider
      value={{ forteStats, setForteStats, skillLevels, setSkillLevels }}
    >
      {children}
    </CalcForteContext.Provider>
  );
};
