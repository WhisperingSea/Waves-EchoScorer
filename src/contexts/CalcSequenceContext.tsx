import React, { createContext, useContext, useState, ReactNode } from "react";

interface CalcSequenceTypes {
  name: string;
  charaId: number;
  sequences: {
    node1: {
      id: number;
      type: string;
      buff: string;
      value: number;
      stacks: number;
    }[];
    node2: {
      id: number;
      type: string;
      buff: string;
      value: number;
      stacks: number;
    }[];
    node3: {
      id: number;
      type: string;
      buff: string;
      value: number;
      stacks: number;
    }[];
    node4: {
      id: number;
      type: string;
      buff: string;
      value: number;
      stacks: number;
    }[];
    node5: {
      id: number;
      type: string;
      buff: string;
      value: number;
      stacks: number;
    }[];
    node6: {
      id: number;
      type: string;
      buff: string;
      value: number;
      stacks: number;
    }[];
  };
}

interface CalcSequence {
  sequence: CalcSequenceTypes;
  setSequence: React.Dispatch<React.SetStateAction<CalcSequenceTypes>>;
}

const CalcSequenceContext = createContext<CalcSequence | undefined>(undefined);

export const useSequence = () => {
  const context = useContext(CalcSequenceContext);
  if (!context) {
    throw new Error("useSequence must be used within an CalcSequenceProvider");
  }
  return context;
};

interface CalcSequenceProviderProps {
  children: ReactNode;
}

export const CalcSequenceProvider: React.FC<CalcSequenceProviderProps> = ({
  children,
}) => {
  const [sequence, setSequence] = useState<CalcSequenceTypes>({
    name: "",
    charaId: 0,
    sequences: {
      node1: [],
      node2: [],
      node3: [],
      node4: [],
      node5: [],
      node6: [],
    },
  });

  return (
    <CalcSequenceContext.Provider value={{ sequence, setSequence }}>
      {children}
    </CalcSequenceContext.Provider>
  );
};
