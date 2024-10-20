import "./Calculator.css";
import {
  AttackCalc,
  HealthCalc,
  DefenseCalc,
} from "../../hooks/CalculateStats";
import { CritcalCalc, CritcalDamageCalc } from "../../hooks/CalculateCritStats";
import { EnergyCalc, HealCalc } from "../../hooks/CalcculateBonusStats";
import {
  GlacioDamageCalc,
  FusionDamageCalc,
  ElectroDamageCalc,
  AeroDamageCalc,
  SpectroDamageCalc,
  HavocDamageCalc,
} from "../../hooks/CalculateElementBonusStats";
import {
  BasicAttackBonus,
  HeavyAttackBonus,
  RLiberationBonus,
  RSkillBonus,
} from "../../hooks/CalculateSkillBonus";
import { Icons } from "../../data/Icons";

interface CalcStatsType {
  Element?: string;
}

const CalcStats: React.FC<CalcStatsType> = ({ Element }) => {
  const Health = HealthCalc();
  const Attack = AttackCalc();
  const Defense = DefenseCalc();
  const CritRate = CritcalCalc();
  const CritDamage = CritcalDamageCalc();
  const EnergyRegen = EnergyCalc();
  const HealingBonus = HealCalc();
  const BasicAttackBonusDamage = BasicAttackBonus();
  const HeavyAttackBonusDamage = HeavyAttackBonus();
  const ResonanceSkillBonus = RSkillBonus();
  const ResonanceLiberaionBonus = RLiberationBonus();
  const GlacioDamageBonus = GlacioDamageCalc();
  const FusionDamageBonus = FusionDamageCalc();
  const ElectroDamageBonus = ElectroDamageCalc();
  const AeroDamageBonus = AeroDamageCalc();
  const SpectroDamageBonus = SpectroDamageCalc();
  const HavocDamageBonus = HavocDamageCalc();

  const icon = Object.values(Icons);

  return (
    <>
      <div className="CalcStats-Container">
        <section className="calcStats-section">
          <div>
            <div className="calc-stats">
              <img
                className="scorer-stat-Icons"
                src={icon.find((i) => i.name === "HP")?.icon}
              />
              <h3 className="scorer-stat-name">Health</h3>
              <h3>{Element ? parseInt(Health.toString()) : Health}</h3>
            </div>
            <div className={`calc-stats ${Element ? "" : "even-stat"}`}>
              <img
                className="scorer-stat-Icons"
                src={icon.find((i) => i.name === "ATK")?.icon}
              />
              <h3 className="scorer-stat-name">Attack</h3>
              <h3>{Element ? parseInt(Attack.toString()) : Attack}</h3>
            </div>
            <div className="calc-stats">
              <img
                className="scorer-stat-Icons"
                src={icon.find((i) => i.name === "DEF")?.icon}
              />
              <h3 className="scorer-stat-name">Defense</h3>
              <h3>{Element ? parseInt(Defense.toString()) : Defense}</h3>
            </div>
            <div className={`calc-stats ${Element ? "" : "even-stat"}`}>
              <img
                className="scorer-stat-Icons"
                src={icon.find((i) => i.name === "Crit. Rate")?.icon}
              />
              <h3 className="scorer-stat-name">Crit. Rate</h3>
              <h3>{CritRate}%</h3>
            </div>
            <div className="calc-stats">
              <img
                className="scorer-stat-Icons"
                src={icon.find((i) => i.name === "Crit. DMG")?.icon}
              />
              <h3 className="scorer-stat-name">Crit. DMG</h3>
              <h3>{CritDamage}%</h3>
            </div>
            <div className={`calc-stats ${Element ? "" : "even-stat"}`}>
              <img
                className="scorer-stat-Icons"
                src={icon.find((i) => i.name === "Energy Regen")?.icon}
              />
              <h3 className="scorer-stat-name">Energy Regen</h3>
              <h3>{EnergyRegen}%</h3>
            </div>
          </div>
          <div>
            <div className="calc-stats">
              <img
                className="scorer-stat-Icons"
                src={icon.find((i) => i.name === "Healing Bonus")?.icon}
              />
              <h3 className="scorer-stat-name">Healing Bonus</h3>
              <h3>{HealingBonus}%</h3>
            </div>
            <div className={`calc-stats ${Element ? "" : "even-stat"}`}>
              <img
                className="scorer-stat-Icons"
                src={
                  icon.find((i) => i.name === "Basic Attack DMG Bonus")?.icon
                }
              />
              <h3 className="scorer-stat-name">Basic ATK Bonus</h3>
              <h3>{BasicAttackBonusDamage}%</h3>
            </div>
            <div className="calc-stats">
              <img
                className="scorer-stat-Icons"
                src={
                  icon.find((i) => i.name === "Heavy Attack DMG Bonus")?.icon
                }
              />
              <h3 className="scorer-stat-name">Heavy ATK Bonus</h3>
              <h3>{HeavyAttackBonusDamage}%</h3>
            </div>
            <div className={`calc-stats ${Element ? "" : "even-stat"}`}>
              <img
                className="scorer-stat-Icons"
                src={
                  icon.find((i) => i.name === "Resonance Skill DMG Bonus")?.icon
                }
              />
              <h3 className="scorer-stat-name">Res. Skill Bonus</h3>
              <h3>{ResonanceSkillBonus}%</h3>
            </div>
            <div className="calc-stats">
              <img
                className="scorer-stat-Icons"
                src={
                  icon.find((i) => i.name === "Resonance Liberation DMG Bonus")
                    ?.icon
                }
              />
              <h3 className="scorer-stat-name">Res. Lib. Bonus</h3>
              <h3>{ResonanceLiberaionBonus}%</h3>
            </div>
            {Element === "Glacio" ? (
              <div className={`calc-stats ${Element ? "" : "even-stat"}`}>
                <img
                  className="scorer-stat-Icons"
                  src={icon.find((i) => i.name === "Glacio DMG Bonus")?.icon}
                />
                <h3 className="scorer-stat-name">Glacio DMG Bonus</h3>
                <h3>{GlacioDamageBonus}%</h3>
              </div>
            ) : Element === "Fusion" ? (
              <div className="calc-stats">
                <img
                  className="scorer-stat-Icons"
                  src={icon.find((i) => i.name === "Fusion DMG Bonus")?.icon}
                />
                <h3 className="scorer-stat-name">Fusion DMG Bonus</h3>
                <h3>{FusionDamageBonus}%</h3>
              </div>
            ) : Element === "Electro" ? (
              <div className={`calc-stats ${Element ? "" : "even-stat"}`}>
                <img
                  className="scorer-stat-Icons"
                  src={icon.find((i) => i.name === "Electro DMG Bonus")?.icon}
                />
                <h3 className="scorer-stat-name">Electro DMG Bonus</h3>
                <h3>{ElectroDamageBonus}%</h3>
              </div>
            ) : Element === "Aero" ? (
              <div className="calc-stats">
                <img
                  className="scorer-stat-Icons"
                  src={icon.find((i) => i.name === "Aero DMG Bonus")?.icon}
                />
                <h3 className="scorer-stat-name">Aero DMG Bonus</h3>
                <h3>{AeroDamageBonus}%</h3>
              </div>
            ) : Element === "Spectro" ? (
              <div className={`calc-stats ${Element ? "" : "even-stat"}`}>
                <img
                  className="scorer-stat-Icons"
                  src={icon.find((i) => i.name === "Spectro DMG Bonus")?.icon}
                />
                <h3 className="scorer-stat-name">Spectro DMG Bonus</h3>
                <h3>{SpectroDamageBonus}%</h3>
              </div>
            ) : Element === "Havoc" ? (
              <div className="calc-stats">
                <img
                  className="scorer-stat-Icons"
                  src={icon.find((i) => i.name === "Havoc DMG Bonus")?.icon}
                />
                <h3 className="scorer-stat-name">Havoc DMG Bonus</h3>
                <h3>{HavocDamageBonus}%</h3>
              </div>
            ) : (
              <></>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default CalcStats;
