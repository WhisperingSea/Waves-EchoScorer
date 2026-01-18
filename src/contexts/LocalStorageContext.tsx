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
  addEchoBatch: (echoes: Omit<Echo, "storeId">[]) => void;
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

  const isSameEcho = (
    a: Omit<Echo, "storeId"> | Echo,
    b: Omit<Echo, "storeId"> | Echo
  ) => {
    return (
      a.id === b.id &&
      a.name === b.name &&
      a.set === b.set &&
      a.cost === b.cost &&
      a.mainStat === b.mainStat &&
      a.mainStatValue === b.mainStatValue &&
      a.selectedSubStat1.stat === b.selectedSubStat1.stat &&
      a.selectedSubStat1.value === b.selectedSubStat1.value &&
      a.selectedSubStat2.stat === b.selectedSubStat2.stat &&
      a.selectedSubStat2.value === b.selectedSubStat2.value &&
      a.selectedSubStat3.stat === b.selectedSubStat3.stat &&
      a.selectedSubStat3.value === b.selectedSubStat3.value &&
      a.selectedSubStat4.stat === b.selectedSubStat4.stat &&
      a.selectedSubStat4.value === b.selectedSubStat4.value &&
      a.selectedSubStat5.stat === b.selectedSubStat5.stat &&
      a.selectedSubStat5.value === b.selectedSubStat5.value
    );
  };

  const addEcho = (echo: Omit<Echo, "storeId">) => {
    setStoredEcho((prevItems) => {
      const duplicate = prevItems.find((item) => isSameEcho(item, echo));
      if (duplicate) {
        return prevItems; // skip adding duplicate
      }
      const newItem = { ...echo, storeId: nextId };
      const updatedItems = [...prevItems, newItem];
      setNextId((prevId) => prevId + 1);
      return updatedItems;
    });
  };

  const addEchoBatch = (echoes: Omit<Echo, "storeId">[]) => {
    setStoredEcho((prevItems) => {
      let currentId = nextId;
      const existing = [...prevItems];
      const toAdd: Echo[] = [];

      for (const echo of echoes) {
        const isDup = existing.some((item) => isSameEcho(item, echo)) ||
          toAdd.some((item) => isSameEcho(item, echo));
        if (!isDup) {
          toAdd.push({ ...echo, storeId: currentId });
          currentId++;
        }
      }

      if (toAdd.length === 0) return prevItems;

      const updatedItems = [...prevItems, ...toAdd];
      setNextId(currentId);
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
        addEchoBatch,
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
