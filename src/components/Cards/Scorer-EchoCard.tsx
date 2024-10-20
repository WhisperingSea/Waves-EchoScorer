import { useCallback, useEffect, useState } from "react";
import { useEchoes } from "../../contexts/CalcEchoContext";
import { useEchoContext } from "../../contexts/EchoDataContext";
import "./Scorer-EchoCard.css";
import EchoModal from "../Modals/EchoModal";
import { Icons } from "../../data/Icons.ts";
import { EchoScorerFunction } from "../../hooks/EchoScorerHook.tsx";

interface ScorerEchoCardType {
  Index: number;
}

const ScorerEchoCard: React.FC<ScorerEchoCardType> = ({ Index }) => {
  const { echoes } = useEchoContext();
  const { echoStats } = useEchoes();
  const [open, setOpen] = useState(false);
  const [Icon, setIcon] = useState<string>("");
  const [Icon3, setIcon3] = useState<string>("");
  const [Icon4, setIcon4] = useState<string>("");
  const [Icon5, setIcon5] = useState<string>("");
  const [Icon6, setIcon6] = useState<string>("");
  const [Icon7, setIcon7] = useState<string>("");
  const Score = EchoScorerFunction(Index);

  //Page Dependency
  const stats = Object.values(echoStats)[Index - 1];
  const echo = Object.values(echoes).find((e) => e.name === stats?.name);
  const icon = Object.values(Icons);

  useEffect(() => {
    var main = icon.find((i) => i.name === stats.mainStat.replace("%", ""));
    var sub1 = icon.find(
      (i) => i.name === stats.selectedSubStat1.stat.replace("%", "")
    );
    var sub2 = icon.find(
      (i) => i.name === stats.selectedSubStat2.stat.replace("%", "")
    );
    var sub3 = icon.find(
      (i) => i.name === stats.selectedSubStat3.stat.replace("%", "")
    );
    var sub4 = icon.find(
      (i) => i.name === stats.selectedSubStat4.stat.replace("%", "")
    );
    var sub5 = icon.find(
      (i) => i.name === stats.selectedSubStat5.stat.replace("%", "")
    );

    if (main) {
      setIcon(main.icon);
    }
    if (sub1) {
      setIcon3(sub1.icon);
    }
    if (sub2) {
      setIcon4(sub2.icon);
    }
    if (sub3) {
      setIcon5(sub3.icon);
    }
    if (sub4) {
      setIcon6(sub4.icon);
    }
    if (sub5) {
      setIcon7(sub5.icon);
    }
  }, [icon, stats]);

  //Modal
  const openEchoModal = useCallback(() => {
    setOpen(true);
  }, []);

  const closeEchoModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <div className="scorer-echoCard-container">
        {open && (
          <EchoModal onClose={closeEchoModal} index={Index} noSelect={true} />
        )}
        <div
          className="scorer-echoCard-grid"
          style={Index === 1 ? { border: "1px solid #dac400" } : undefined}
        >
          <div className="scorer-echoCard-item-1">
            <div className="echo-img-box">
              {echo ? (
                <>
                  <img
                    className="scorer-echo-image"
                    src={echo.img}
                    style={
                      Index === 1 ? { border: "1px solid #dac400" } : undefined
                    }
                    onClick={openEchoModal}
                  />
                  <h3 className="scorer-echo-name">{stats.name}</h3>
                </>
              ) : (
                <div className="add-echo-btn" onClick={openEchoModal}>
                  +
                </div>
              )}
            </div>
          </div>
          {echo ? (
            <>
              <div className="scorer-echoCard-item-2">
                <div className="scorer-echo-stat-box">
                  <div className="scorer-echo-stat-mini-box">
                    <img className="scorer-echo-stat-icon" src={Icon} />
                    <h3 className="scorer-echo-stat Main-stat">
                      {stats.mainStatValue}%
                    </h3>
                  </div>
                  <h3 className="echo-score-text">{Score}</h3>
                </div>
              </div>
              <div className="scorer-echoCard-item-divider"></div>
              <div className="scorer-echoCard-item-3">
                <div className="scorer-echo-stat-mini-box">
                  <img
                    className="scorer-echo-stat-icon"
                    src={
                      stats.cost === 1
                        ? icon.find((i) => i.name === "HP")?.icon
                        : icon.find((i) => i.name === "ATK")?.icon
                    }
                  />
                  <h3 className="scorer-echo-stat Main-stat">
                    {stats.cost === 1 ? 2280 : stats.cost === 3 ? 100 : 150}
                  </h3>
                </div>
                <div className="scorer-echo-stat-box">
                  <div className="scorer-echo-stat-mini-box">
                    <img className="scorer-echo-stat-icon" src={Icon3} />
                    <h3 className="scorer-echo-stat">
                      {stats.selectedSubStat1.stat.includes("%")
                        ? `${stats.selectedSubStat1.value}%`
                        : stats.selectedSubStat1.value}
                    </h3>
                  </div>
                  <div className="scorer-echo-stat-mini-box">
                    <img className="scorer-echo-stat-icon" src={Icon4} />
                    <h3 className="scorer-echo-stat">
                      {stats.selectedSubStat2.stat.includes("%")
                        ? `${stats.selectedSubStat2.value}%`
                        : stats.selectedSubStat2.value}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="scorer-echoCard-item-divider"></div>
              <div className="scorer-echoCard-item-4">
                <div className="scorer-echo-stat-mini-box">
                  <img className="scorer-echo-stat-icon" src={Icon5} />
                  <h3 className="scorer-echo-stat">
                    {stats.selectedSubStat3.stat.includes("%")
                      ? `${stats.selectedSubStat3.value}%`
                      : stats.selectedSubStat3.value}
                  </h3>
                </div>
                <div className="scorer-echo-stat-mini-box">
                  <img className="scorer-echo-stat-icon" src={Icon6} />
                  <h3 className="scorer-echo-stat">
                    {stats.selectedSubStat4.stat.includes("%")
                      ? `${stats.selectedSubStat4.value}%`
                      : stats.selectedSubStat4.value}
                  </h3>
                </div>
                <div className="scorer-echo-stat-mini-box">
                  <img className="scorer-echo-stat-icon" src={Icon7} />
                  <h3 className="scorer-echo-stat">
                    {stats.selectedSubStat5.stat.includes("%")
                      ? `${stats.selectedSubStat5.value}%`
                      : stats.selectedSubStat5.value}
                  </h3>
                </div>
              </div>
            </>
          ) : (
            <h3 className="no-echo">No Echo Selected</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default ScorerEchoCard;
