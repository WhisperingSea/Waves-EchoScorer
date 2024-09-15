import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  SetStateAction,
} from "react";

interface Echo {
  storeId: number;
  id: number;
  set: number;
  name: string;
  cost: number;
  mainStat: string;
  mainStatValue: number;
  selectedSubStat1: { stat: string; value: number };
  selectedSubStat2: { stat: string; value: number };
  selectedSubStat3: { stat: string; value: number };
  selectedSubStat4: { stat: string; value: number };
  selectedSubStat5: { stat: string; value: number };
}

interface StorageEchoProps {
  storedEcho: Echo[];
  addEcho: (echo: Omit<Echo, "storeId">) => void;
  removeEcho: (id: number) => void;
  updateEcho: (
    storeId: number,
    newEcho: Partial<Omit<Echo, "storeId">>
  ) => void;
  selectedStoreEcho: number;
  setSelectedStoreEcho: React.Dispatch<SetStateAction<number>>;
}

const LocalStorageContext = createContext<StorageEchoProps | undefined>(
  undefined
);

export const useLocalStorageContext = () => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error(
      "useLocalStorage must be used within a LocalStorageContextProvider"
    );
  }
  return context;
};

interface LocalStorageContextProviderProps {
  children: ReactNode;
}

export const LocalStorageContextProvider: React.FC<
  LocalStorageContextProviderProps
> = ({ children }) => {
  const [storedEcho, setStoredEcho] = useState<Echo[]>(() => {
    const storedItems = localStorage.getItem("Echoes");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [selectedStoreEcho, setSelectedStoreEcho] = useState<number>(0);

  const [nextId, setNextId] = useState<number>(() => {
    const storedItems = localStorage.getItem("Echoes");
    const parsedItems = storedItems ? JSON.parse(storedItems) : [];
    return parsedItems.length
      ? Math.max(...parsedItems.map((item: Echo) => item.storeId)) + 1
      : 1;
  });

  useEffect(() => {
    localStorage.setItem("Echoes", JSON.stringify(storedEcho));
  }, [storedEcho]);

  useEffect(() => {
    const storedItems = localStorage.getItem("Echoes");
    if (storedItems) {
      setStoredEcho(JSON.parse(storedItems));
    }
  }, []);

  const addEcho = (echo: Omit<Echo, "storeId">) => {
    setStoredEcho((prevItems) => {
      const newItem = { ...echo, storeId: nextId };
      const updatedItems = [...prevItems, newItem];
      setNextId((prevId) => prevId + 1);
      return updatedItems;
    });
  };

  const removeEcho = (storeId: number) => {
    setStoredEcho((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.storeId !== storeId);
      localStorage.setItem("Echoes", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const updateEcho = (
    storeId: number,
    newEcho: Partial<Omit<Echo, "storeId">>
  ) => {
    setStoredEcho((prevItems) =>
      prevItems.map((item) =>
        item.storeId === storeId ? { ...item, ...newEcho } : item
      )
    );
  };

  return (
    <LocalStorageContext.Provider
      value={{
        storedEcho,
        addEcho,
        removeEcho,
        updateEcho,
        selectedStoreEcho,
        setSelectedStoreEcho,
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};
