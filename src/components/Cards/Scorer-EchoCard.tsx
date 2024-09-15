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
  }, [icon, Icon, stats]);

  //Modal
  const openEchoModal = useCallback(() => {
    setOpen(true);
  }, []);

  const closeEchoModal = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (echo?.name) {
      console.log("Stats", echoStats);
    }
  }, [echo]);

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
          <div className="scorer-echoCard-grid-item-1">
            {echo ? (
              <div className="scorer-echoCard-img-btn white-border">
                <img
                  className="scorer-echoImage-png"
                  src={echo?.img}
                  alt={`${echo?.name} Image`}
                  onClick={openEchoModal}
                />
                <div className="scorer-echoCard-grid-item-3">
                  <img className="Icons-main" src={Icon} />
                  <h3 className="scorer-text-2">
                    {stats.mainStat.includes("%")
                      ? `${stats.mainStatValue.toFixed(1)}%`
                      : stats.mainStatValue}
                  </h3>
                </div>
              </div>
            ) : (
              <div className="scorer-echoCard-img-btn" onClick={openEchoModal}>
                <h1 className="no-echo-div">+</h1>
              </div>
            )}
          </div>
          {echo ? (
            <>
              <div className="scorer-echoCard-grid-item-4">
                {stats.cost === 1 ? (
                  <>
                    <img
                      className="Icons"
                      src={icon.find((i) => i.name === "HP")?.icon}
                    />
                  </>
                ) : (
                  <>
                    <img
                      className="Icons"
                      src={icon.find((i) => i.name === "ATK")?.icon}
                    />
                  </>
                )}
                <h3 className="scorer-text">
                  {stats.cost === 1 ? 2280 : stats.cost === 3 ? 100 : 150}
                </h3>
              </div>
              <div className="scorer-echoCard-grid-item-5">
                <img className="Icons" src={Icon3} />
                <h3 className="scorer-text">
                  {stats.selectedSubStat1.stat.includes("%")
                    ? `${stats.selectedSubStat1.value.toFixed(1)}%`
                    : stats.selectedSubStat1.value}
                </h3>
              </div>
              <div className="scorer-echoCard-grid-item-6">
                <img className="Icons" src={Icon4} />

                <h3 className="scorer-text">
                  {stats.selectedSubStat2.stat.includes("%")
                    ? `${stats.selectedSubStat2.value.toFixed(1)}%`
                    : stats.selectedSubStat2.value}
                </h3>
              </div>
              <div className="scorer-echoCard-grid-item-7">
                <img className="Icons" src={Icon5} />

                <h3 className="scorer-text">
                  {stats.selectedSubStat3.stat.includes("%")
                    ? `${stats.selectedSubStat3.value.toFixed(1)}%`
                    : stats.selectedSubStat3.value}
                </h3>
              </div>
              <div className="scorer-echoCard-grid-item-8">
                <img className="Icons" src={Icon6} />

                <h3 className="scorer-text">
                  {stats.selectedSubStat4.stat.includes("%")
                    ? `${stats.selectedSubStat4.value.toFixed(1)}%`
                    : stats.selectedSubStat4.value}
                </h3>
              </div>
              <div className="scorer-echoCard-grid-item-9">
                <img className="Icons" src={Icon7} />

                <h3 className="scorer-text">
                  {stats.selectedSubStat5.stat.includes("%")
                    ? `${stats.selectedSubStat5.value.toFixed(1)}%`
                    : stats.selectedSubStat5.value}
                </h3>
              </div>
            </>
          ) : (
            ""
          )}
          {echo && (
            <div className="scorer-echoCard-score">
              <h2 className="scorer-echoCard-score-text">{Score}</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ScorerEchoCard;
