import { Link } from "react-router-dom";
import { useSearchFilter } from "../../contexts/SearchFilterContext";
import { useDataContext } from "../../contexts/CharacterDataContext";
import "./Card.css";

const Card: React.FC = () => {
  const { filteredCharacters } = useSearchFilter();
  const { setSelectedCharacterId } = useDataContext();

  return (
    <>
      <div className="card-group">
        <div className="grid">
          {filteredCharacters
            ?.sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => (
              <Link
                key={item.charaId}
                className="card-link"
                to={`/characters/${encodeURIComponent(
                  item.name.toLowerCase()
                )}`}
              >
                <div
                  className="card"
                  onClick={() => setSelectedCharacterId(item.charaId)}
                >
                  <div className="top">
                    <img
                      key={item.charaId}
                      src={item.images.icon_sq}
                      alt={item.name}
                    />
                  </div>
                  <p className="bottom">{item.name}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Card;
