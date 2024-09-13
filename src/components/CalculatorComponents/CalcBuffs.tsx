import { WWSonataData } from "../../data/WWSonata";
import "./Calculator.css";

const CalcBuffs: React.FC = () => {
  const Buff = Object.values(WWSonataData);
  return (
    <>
      <div className="CalcBuffs-Container">
        <div className="calcBuff-box">
          <h3 className="calcBuff-sonata">{Buff[6].name}</h3>
          <h3>{Buff[6].fivePiece}</h3>
          <input
            id="SonataBuff1"
            className="calcSonata-checkbox"
            type="checkbox"
          />
        </div>
        <div className="calcBuff-box">
          <h3 className="calcBuff-sonata">{Buff[7].name}</h3>
          <h3>{Buff[7].fivePiece}</h3>
          <input
            id="SonataBuff2"
            className="calcSonata-checkbox"
            type="checkbox"
          />
        </div>
      </div>
    </>
  );
};

export default CalcBuffs;
