import { useDataContext } from "../../contexts/CharacterDataContext";
import "./CharaScreen.css";

const CharaSliderScreen: React.FC = () => {
  const { characters, selectedCharacterId } = useDataContext();

  const chara = Object.values(characters).find(
    (id) => id.charaId === selectedCharacterId
  );

  return (
    <>
      <div>
        <h2 className={`chara-name ${chara?.element}`}>{chara?.name}</h2>
        <h3
          style={{ whiteSpace: "pre-wrap" }}
          className="chara-bio"
          dangerouslySetInnerHTML={{ __html: chara?.bio as TrustedHTML }}
        ></h3>
        <p className="paragraph ele">
          <b>Element</b>:{" "}
          <span className={chara?.element}>{chara?.element}</span>
        </p>
        <p className="paragraph weap">
          <b>Weapon</b>: <span>{chara?.weapon}</span>
        </p>
        <p className="paragraph rare">{chara?.rarity.alt}</p>
      </div>
    </>
  );
};

export default CharaSliderScreen;
