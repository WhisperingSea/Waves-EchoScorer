import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  SetStateAction,
} from "react";
import { WWCharacter, WWCharacterData } from "../data/WWCharacter";

interface DataContextType {
  characters: Record<number, WWCharacter>;
  selectedCharacterId: number | null;
  setSelectedCharacterId: (id: number | null) => void;
  level: number | undefined;
  setLevel: React.Dispatch<SetStateAction<number>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
};

interface DataContextProviderProps {
  children: ReactNode;
}

export const DataContextProvider: React.FC<DataContextProviderProps> = ({
  children,
}) => {
  // @ts-ignore: Ignoring unused variable warning for setCharacters //
  const [characters, setCharacters] = useState<Record<number, WWCharacter>>(
    WWCharacterData.reduce((acc, char) => {
      acc[char.charaId] = char;
      return acc;
    }, {} as Record<number, WWCharacter>)
  );
  const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(
    null
  );
  const [level, setLevel] = useState<number>(90);

  return (
    <DataContext.Provider
      value={{
        characters,
        selectedCharacterId,
        setSelectedCharacterId,
        level,
        setLevel,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
