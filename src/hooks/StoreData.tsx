import { useState, useEffect } from "react";

interface Item {
  storeId: number;
  id: number;
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

const useLocalStorage = (key: string, initialValue: Item[]) => {
  const [items, setItems] = useState<Item[]>(() => {
    const storedItems = localStorage.getItem(key);
    return storedItems ? JSON.parse(storedItems) : initialValue;
  });
  const [selectedStoreEchoes, setSelectedStoreEchoes] = useState<number>(0);

  const [nextId, setNextId] = useState<number>(() => {
    const storedItems = localStorage.getItem(key);
    const parsedItems = storedItems ? JSON.parse(storedItems) : initialValue;
    return parsedItems.length
      ? Math.max(...parsedItems.map((item: Item) => item.storeId)) + 1
      : 1;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(items));
  }, [items, key]);

  const addItem = (item: Omit<Item, "storeId">) => {
    setItems((prevItems) => {
      const newItem = { ...item, storeId: nextId };
      const updatedItems = [...prevItems, newItem];
      console.log("Adding item:", newItem);
      localStorage.setItem(key, JSON.stringify(updatedItems));
      return updatedItems;
    });
    setNextId((prevId) => prevId + 1);
  };

  const updateItem = (
    storeId: number,
    newItem: Partial<Omit<Item, "storeId">>
  ) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.storeId === storeId ? { ...item, ...newItem } : item
      )
    );
  };

  const removeItem = (storeId: number) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.storeId !== storeId);
      console.log("Removing item:", storeId);
      localStorage.setItem(key, JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  return {
    items,
    addItem,
    updateItem,
    removeItem,
    selectedStoreEchoes,
    setSelectedStoreEchoes,
  };
};

export default useLocalStorage;
