import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Characters from "./pages/Characters.tsx";
import "./styles/App.css";
import { DataContextProvider } from "./contexts/CharacterDataContext.tsx";
import { EchoContextProvider } from "./contexts/EchoDataContext.jsx";
import Guide from "./pages/Guide.tsx";
import Echoes from "./pages/Echo.tsx";
import { SearchFilterProvider } from "./contexts/SearchFilterContext.tsx";
import EchoScorer from "./pages/Echo-Scorer.tsx";
import Features from "./pages/Features.tsx";
import DamageCalculator from "./pages/Damage-Calculator.tsx";
import { WeaponContextProvider } from "./contexts/WeaponDataContext.tsx";
import Weapons from "./pages/Weapon.tsx";
import WeaponInfo from "./pages/WeaponInfo.tsx";
import { CalcEchoProvider } from "./contexts/CalcEchoContext.tsx";
import { CalcWeaponProvider } from "./contexts/CalcWeaponContext.tsx";
import { CalcForteProvider } from "./contexts/CalcForteContext.tsx";
import { LocalStorageContextProvider } from "./contexts/LocalStorageContext.tsx";
import { EnemyStatsProvider } from "./contexts/CalcEnemyStatsContext.tsx";
import { CalcSkillProvider } from "./contexts/CalcSkillValueContext.tsx";
import { CalcSequenceProvider } from "./contexts/CalcSequenceContext.tsx";
import { ScorerContextProvider } from "./contexts/ScorerContext.tsx";
import Navbar from "./components/Common/Navbar.tsx";
import Sidebar from "./components/Common/Sidebar.tsx";

const App = () => {
  // const [activeTab, setActiveTab] = useState<number>(1);

  // const handleTabChange = (tab: number) => {
  //   setActiveTab(tab);
  // };

  return (
    <DataContextProvider>
      <WeaponContextProvider>
        <EchoContextProvider>
          <CalcEchoProvider>
            <CalcWeaponProvider>
              <CalcForteProvider>
                <EnemyStatsProvider>
                  <CalcSequenceProvider>
                    <CalcSkillProvider>
                      <LocalStorageContextProvider>
                        <SearchFilterProvider>
                          <ScorerContextProvider>
                            <Router>
                              <Navbar />
                              <Sidebar />
                              <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                  path="/characters"
                                  element={<Characters />}
                                />
                                <Route
                                  path="/characters/:charaName"
                                  element={<Guide />}
                                />
                                <Route path="/weapons" element={<Weapons />} />
                                <Route
                                  path="/weapons/:weaponName"
                                  element={<WeaponInfo />}
                                />
                                <Route path="/echoes" element={<Echoes />} />
                                <Route
                                  path="/echo-scorer/:charaName"
                                  element={<EchoScorer />}
                                />
                                <Route
                                  path="/damage-calculator/:charaName"
                                  element={<DamageCalculator />}
                                />
                                <Route
                                  path="/features"
                                  element={<Features />}
                                />
                              </Routes>
                            </Router>
                          </ScorerContextProvider>
                        </SearchFilterProvider>
                      </LocalStorageContextProvider>
                    </CalcSkillProvider>
                  </CalcSequenceProvider>
                </EnemyStatsProvider>
              </CalcForteProvider>
            </CalcWeaponProvider>
          </CalcEchoProvider>
        </EchoContextProvider>
      </WeaponContextProvider>
    </DataContextProvider>
  );
};

export default App;
