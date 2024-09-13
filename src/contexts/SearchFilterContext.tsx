import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { WWCharacter, WWCharacterData } from "../data/WWCharacter.ts";
import { WWEchoes, WWEchoesJSON } from "../data/WWEchoes.ts";
import { WWWeapons, WWWeaponsJSON } from "../data/WWWeapons.ts";
import { useLocalStorageContext } from "./LocalStorageContext.tsx";

type WeaponType =
  | ""
  | "Sword"
  | "Broadblade"
  | "Pistols"
  | "Gauntlets"
  | "Rectifier";

type ElementType =
  | ""
  | "Glacio"
  | "Fusion"
  | "Electro"
  | "Aero"
  | "Spectro"
  | "Havoc";

type EchoGroupType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type EchoCostType = 0 | 1 | 3 | 4;

type EchoMainStats =
  | "HP%"
  | "ATK%"
  | "DEF%"
  | "Glacio DMG Bonus%"
  | "Fusion DMG Bonus%"
  | "Electro DMG Bonus%"
  | "Aero DMG Bonus%"
  | "Spectro DMG Bonus%"
  | "Havoc DMG Bonus%"
  | "Energy Regen%"
  | "Crit. Rate%"
  | "Crit. Damage%"
  | "Healing Bonus%";

type EchoSubStats =
  | "HP"
  | "ATK"
  | "DEF"
  | "HP%"
  | "ATK%"
  | "DEF%"
  | "Crit. Rate%"
  | "Crit. DMG%"
  | "Energy Regen%"
  | "Basic Attack DMG Bonus%"
  | "Heavy Attack DMG Bonus%"
  | "Resonance Skill DMG Bonus%"
  | "Resonance Liberation DMG Bonus%";

interface SearchFilterContextProps {
  query: string;
  selectedElement: ElementType;
  echoQuery: string;
  selectedEchoGroup: number;
  selectedEchoCost: number;
  selectedEchoRarity: number;
  selectedMainStat: EchoMainStats | undefined;
  selectedSubStats: EchoSubStats[];
  weaponQuery: string;
  selectedWeaponRarity: number;
  selectedWeaponType: WeaponType;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleWeaponFilter: (weaponType: WeaponType) => void;
  handleElementFilter: (elementType: ElementType) => void;
  handleEchoSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEchoGroupFilter: (echoGroup: EchoGroupType) => void;
  handleStoreEchoGroupFilter: (echoGroup: EchoGroupType) => void;
  handleEchoCostFilter: (echoCost: EchoCostType) => void;
  handleStoreEchoCostFilter: (echoCost: EchoCostType) => void;
  handleEchoRarity: (echoRarity: number) => void;
  handleWeaponQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleWeaponRarity: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleEchoMainStat: (echoMain: EchoMainStats | undefined) => void;
  handleEchoSubStats: (echoSub: EchoSubStats[]) => void;
  filteredCharacters?: WWCharacter[];
  filteredWeapons?: WWWeapons[];
  filteredEchoes?: WWEchoes[];
  filteredStoreEchoes?: any[];
}

const SearchFilterContext = createContext<SearchFilterContextProps | undefined>(
  undefined
);

export const useSearchFilter = () => {
  const context = useContext(SearchFilterContext);
  if (!context) {
    throw new Error(
      "useSearchFilter must be used within a SearchFilterProvider"
    );
  }
  return context;
};

export const SearchFilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { storedEcho } = useLocalStorageContext();
  const [query, setQuery] = useState<string>("");
  const [selectedWeaponType, setSelectedWeaponType] = useState<WeaponType>("");
  const [selectedElement, setSelectedElement] = useState<ElementType>("");
  const [echoQuery, setEchoQuery] = useState<string>("");
  const [selectedEchoGroup, setSelectedEchoGroup] = useState<EchoGroupType>(0);
  const [selectedEchoCost, setSelectedEchoCost] = useState<EchoCostType>(0);
  const [selectedEchoRarity, setSelectedEchoRarity] = useState<number>(5);
  const [weaponQuery, setWeaponQuery] = useState<string>("");
  const [selectedWeaponRarity, setSelectedWeaponRarity] = useState<number>(0);
  const [selectedMainStat, setSelectedMainStat] = useState<
    EchoMainStats | undefined
  >(undefined);
  const [selectedSubStats, setSelectedSubStats] = useState<EchoSubStats[]>([]);

  const [filteredCharacters, setFilteredCharacters] = useState<WWCharacter[]>(
    []
  );

  const [filteredEchoes, setFilteredEchoes] = useState<WWEchoes[]>([]);

  const [filteredWeapons, setFilteredWeapons] = useState<WWWeapons[]>([]);

  const [filteredStoreEchoes, setFilteredStoreEchoes] = useState<any[]>([]);

  useEffect(() => {
    let characters = WWCharacterData;
    let echoes = WWEchoesJSON;
    let weapons = WWWeaponsJSON;
    let storeEchoes = Object.values(storedEcho);

    // Filter characters
    if (query) {
      characters = characters.filter((char) =>
        char.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedWeaponType) {
      characters = characters.filter(
        (char) => char.weapon === selectedWeaponType
      );
      weapons = weapons.filter(
        (weap) => weap.weaponType === selectedWeaponType
      );
    }

    if (selectedElement) {
      characters = characters.filter(
        (char) => char.element === selectedElement
      );
    }

    // Filter echoes (WWEchoesJSON)
    if (echoQuery) {
      echoes = echoes.filter((echo) =>
        echo.name.toLowerCase().includes(echoQuery.toLowerCase())
      );
    }

    if (selectedEchoGroup !== 0) {
      echoes = echoes.filter((echo) =>
        echo.sonataGroup.includes(selectedEchoGroup)
      );
    }

    if (selectedEchoCost !== 0) {
      echoes = echoes.filter((echo) => echo.cost === selectedEchoCost);
    }

    // Filter storeEchoes (storedEcho)
    if (selectedEchoGroup !== 0) {
      storeEchoes = storeEchoes.filter(
        (echo) => echo.set === selectedEchoGroup
      );
    }

    if (selectedEchoCost !== 0) {
      storeEchoes = storeEchoes.filter(
        (echo) => echo.cost === selectedEchoCost
      );
    }

    if (selectedMainStat !== undefined) {
      storeEchoes = storeEchoes.filter(
        (echo) => echo.mainStat === selectedMainStat
      );
    }

    if (selectedSubStats.length !== 0) {
      storeEchoes = storeEchoes.filter((echo) => {
        const subs = [
          echo.selectedSubStat1.stat,
          echo.selectedSubStat2.stat,
          echo.selectedSubStat3.stat,
          echo.selectedSubStat4.stat,
          echo.selectedSubStat5.stat,
        ];
        return selectedSubStats.every((stat) =>
          subs.includes(stat as EchoSubStats)
        );
      });
    }

    // Filter weapons
    if (weaponQuery) {
      weapons = weapons.filter((weap) =>
        weap.name.toLowerCase().includes(weaponQuery.toLowerCase())
      );
    }

    if (selectedWeaponRarity !== 0) {
      weapons = weapons.filter((weap) => weap.rarity === selectedWeaponRarity);
    }

    // Update state
    setFilteredCharacters(characters);
    setFilteredEchoes(echoes);
    setFilteredWeapons(weapons);
    setFilteredStoreEchoes(storeEchoes);
  }, [
    query,
    selectedWeaponType,
    selectedElement,
    echoQuery,
    selectedMainStat,
    selectedSubStats,
    selectedEchoGroup,
    selectedEchoCost,
    weaponQuery,
    selectedWeaponRarity,
  ]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleWeaponFilter = (weaponType: WeaponType) => {
    setSelectedWeaponType((preType) =>
      preType === weaponType ? "" : weaponType
    );
  };

  const handleElementFilter = (elementType: ElementType) => {
    setSelectedElement(elementType);
  };

  const handleEchoSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEchoQuery(event.target.value);
  };

  const handleEchoGroupFilter = (echoGroup: EchoGroupType) => {
    setSelectedEchoGroup((preGroup) =>
      preGroup === echoGroup ? 0 : echoGroup
    );
  };

  const handleStoreEchoGroupFilter = (echoGroup: EchoGroupType) => {
    setSelectedEchoGroup(echoGroup);
  };

  const handleEchoCostFilter = (echoCost: EchoCostType) => {
    setSelectedEchoCost((preCost) => (preCost === echoCost ? 0 : echoCost));
  };

  const handleStoreEchoCostFilter = (echoCost: EchoCostType) => {
    setSelectedEchoCost(echoCost);
  };

  const handleEchoRarity = (echoRarity: number) => {
    setSelectedEchoRarity(echoRarity);
  };

  const handleWeaponQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeaponQuery(event.target.value);
  };

  const handleWeaponRarity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const rarity = parseInt(event.target.value, 10);
    setSelectedWeaponRarity(rarity);
  };

  const handleEchoMainStat = (echoMain: EchoMainStats | undefined) => {
    setSelectedMainStat(echoMain);
  };

  const handleEchoSubStats = (echoSub: EchoSubStats[]) => {
    setSelectedSubStats((preSubs) => (preSubs === echoSub ? [] : echoSub));
  };

  return (
    <SearchFilterContext.Provider
      value={{
        query,
        selectedElement,
        echoQuery,
        selectedEchoGroup,
        selectedEchoCost,
        selectedEchoRarity,
        selectedMainStat,
        selectedSubStats,
        weaponQuery,
        selectedWeaponType,
        selectedWeaponRarity,
        handleSearch,
        handleWeaponFilter,
        handleElementFilter,
        handleEchoSearch,
        handleEchoGroupFilter,
        handleStoreEchoGroupFilter,
        handleEchoCostFilter,
        handleStoreEchoCostFilter,
        handleEchoRarity,
        handleWeaponQuery,
        handleWeaponRarity,
        handleEchoMainStat,
        handleEchoSubStats,
        filteredCharacters,
        filteredEchoes,
        filteredWeapons,
        filteredStoreEchoes,
      }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
};
