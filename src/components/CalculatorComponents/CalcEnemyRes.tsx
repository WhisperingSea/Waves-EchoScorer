import "./Calculator.css";
import { useEnemyStats } from "../../contexts/CalcEnemyStatsContext";

const CalcEnemyRes: React.FC = () => {
  const { setEnemyEleRes, setEnemyLevel } = useEnemyStats();

  const handleEnemyLevel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = parseInt(e.target.value);
    setEnemyLevel(newVal);
  };

  const handleEnemyEleRes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = parseFloat(e.target.value);
    setEnemyEleRes(newVal);
  };

  return (
    <>
      <div className="CalcEnemyRes-Container">
        <div className="calcEnemyRes-box">
          <input
            id="EnemyLevel"
            className="EnemyLevelInput"
            type="number"
            defaultValue={90}
            min={1}
            onChange={handleEnemyLevel}
          />
          <input
            id="EnemyRes"
            className="EnemyResInput"
            type="number"
            defaultValue={0.1}
            step={0.1}
            onChange={handleEnemyEleRes}
          />
        </div>
      </div>
    </>
  );
};

export default CalcEnemyRes;
