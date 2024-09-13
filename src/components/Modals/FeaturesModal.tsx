import { useSearchFilter } from "../../contexts/SearchFilterContext";
import { useDataContext } from "../../contexts/CharacterDataContext";
import "./FeatureModal.css";
import { Link } from "react-router-dom";
import Sidebar from "../Common/Sidebar";

interface FeaturesModalProps {
  onClose: () => void;
  pageLink: string;
}

const FeaturesModal: React.FC<FeaturesModalProps> = ({ onClose, pageLink }) => {
  const { filteredCharacters } = useSearchFilter();
  const { setSelectedCharacterId } = useDataContext();

  const img =
    "https://sohansc13.github.io/wuthering-waves-assets/images/ClosrButton.png";

  const closeModal = () => {
    onClose();
  };

  const handleFeatureModal = (id: number) => {
    setSelectedCharacterId(id);
    closeModal();
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  return (
    <>
      <div className="overlay" onClick={handleOverlayClick}>
        <div className="feature-modal">
          <header></header>
          <img
            className="close-img"
            src={img}
            onClick={closeModal}
            alt="close-window"
          />
          <div className="feature-flexbox">
            <div>
              <Sidebar />
            </div>
            <div>
              <h2 className="feature-header-2">-Select Your Charcter-</h2>
            </div>
          </div>
          <div className="feature-cards">
            <div className="feature-card-grid">
              {filteredCharacters
                ?.sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <Link
                    key={item.charaId}
                    className="card-link"
                    to={`${pageLink}${encodeURIComponent(
                      item.name.toLowerCase()
                    )}`}
                  >
                    <div
                      className="feature-card"
                      onClick={() => handleFeatureModal(item.charaId)}
                    >
                      <div className="top">
                        <img
                          key={item.charaId}
                          src={item.images.icon_sq}
                          alt={item.name}
                        />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesModal;
