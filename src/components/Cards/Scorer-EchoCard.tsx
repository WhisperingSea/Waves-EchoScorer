import { useCallback, useEffect, useMemo, useState } from "react";
import { useEchoes } from "../../contexts/CalcEchoContext";
import { useEchoContext } from "../../contexts/EchoDataContext";
import "./Scorer-EchoCard.css";
import EchoModal from "../Modals/EchoModal";
import { Icons } from "../../data/Icons.ts";
import { EchoScorerFunction } from "../../hooks/EchoScorerHook.tsx";
import { useScorerContext } from "../../contexts/ScorerContext";

interface ScorerEchoCardType {
  Index: number;
}

const ScorerEchoCard: React.FC<ScorerEchoCardType> = ({ Index }) => {
  const { echoes } = useEchoContext();
  const { echoStats, setEchoStats } = useEchoes();
  const { subStats } = useScorerContext();
  const [open, setOpen] = useState(false);
  const [Icon, setIcon] = useState<string>("");
  const [Icon3, setIcon3] = useState<string>("");
  const [Icon4, setIcon4] = useState<string>("");
  const [Icon5, setIcon5] = useState<string>("");
  const [Icon6, setIcon6] = useState<string>("");
  const [Icon7, setIcon7] = useState<string>("");
  const Score = EchoScorerFunction(Index);
  const gradeClass = useMemo(() => {
    switch (Score) {
      case "OP":
        return "grade-op";
      case "SSS+":
        return "grade-sss-plus";
      case "SSS":
        return "grade-sss";
      case "SS+":
        return "grade-ss-plus";
      case "SS":
        return "grade-ss";
      case "S+":
        return "grade-s-plus";
      case "S":
        return "grade-s";
      case "A+":
        return "grade-a-plus";
      case "A":
        return "grade-a";
      case "B+":
        return "grade-b-plus";
      case "B":
        return "grade-b";
      case "C+":
        return "grade-c-plus";
      case "C":
        return "grade-c";
      case "D+":
        return "grade-d-plus";
      case "D":
        return "grade-d";
      case "D-":
        return "grade-d-minus";
      case "Trash":
        return "grade-trash";
      default:
        return "";
    }
  }, [Score]);

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

  const clearEcho = useCallback(() => {
    setEchoStats((prev) => ({
      ...prev,
      [Index]: {
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
    }));
  }, [Index, setEchoStats]);

  const isPreferred = useCallback(
    (name: string) => !!subStats?.includes(name),
    [subStats]
  );

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
          {echo && (
            <button
              className="echo-clear-btn"
              aria-label="Clear echo"
              onClick={(e) => {
                e.stopPropagation();
                clearEcho();
              }}
            >
              ×
            </button>
          )}
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
                  <h3 className={`echo-score-text ${gradeClass}`}>{Score}</h3>
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
                  <div className={`scorer-echo-stat-mini-box ${isPreferred(stats.selectedSubStat1.stat) ? "preferred-sub" : ""}`}>
                    <img className="scorer-echo-stat-icon" src={Icon3} />
                    <h3 className="scorer-echo-stat">
                      {stats.selectedSubStat1.stat.includes("%")
                        ? `${stats.selectedSubStat1.value}%`
                        : stats.selectedSubStat1.value}
                    </h3>
                  </div>
                  <div className={`scorer-echo-stat-mini-box ${isPreferred(stats.selectedSubStat2.stat) ? "preferred-sub" : ""}`}>
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
                <div className={`scorer-echo-stat-mini-box ${isPreferred(stats.selectedSubStat3.stat) ? "preferred-sub" : ""}`}>
                  <img className="scorer-echo-stat-icon" src={Icon5} />
                  <h3 className="scorer-echo-stat">
                    {stats.selectedSubStat3.stat.includes("%")
                      ? `${stats.selectedSubStat3.value}%`
                      : stats.selectedSubStat3.value}
                  </h3>
                </div>
                <div className={`scorer-echo-stat-mini-box ${isPreferred(stats.selectedSubStat4.stat) ? "preferred-sub" : ""}`}>
                  <img className="scorer-echo-stat-icon" src={Icon6} />
                  <h3 className="scorer-echo-stat">
                    {stats.selectedSubStat4.stat.includes("%")
                      ? `${stats.selectedSubStat4.value}%`
                      : stats.selectedSubStat4.value}
                  </h3>
                </div>
                <div className={`scorer-echo-stat-mini-box ${isPreferred(stats.selectedSubStat5.stat) ? "preferred-sub" : ""}`}>
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
