import React, { useEffect, useState } from "react";
import { useSearchFilter } from "../../contexts/SearchFilterContext.tsx";
import "./EchoCard.css";

const EchoCard: React.FC = () => {
  const { filteredEchoes, selectedEchoRarity } = useSearchFilter();
  const [style, setStyle] = useState<React.CSSProperties>({
    display: "flex",
    padding: "25px 25px",
    borderRadius: "12px",
    border: "1px solid azure",
    gap: "10px",
  });

  useEffect(() => {
    switch (selectedEchoRarity) {
      case 2:
        setStyle((prevStyle) => ({
          ...prevStyle,
          background:
            "linear-gradient(to bottom, rgba(36, 167, 47, 0.151) 0%, rgba(78, 78, 75, 0.5) 100%)",
        }));
        break;
      case 3:
        setStyle((prevStyle) => ({
          ...prevStyle,
          background:
            "linear-gradient(to bottom, rgba(36, 136, 167, 0.151) 0%, rgba(78, 78, 75, 0.5) 100%)",
        }));
        break;
      case 4:
        setStyle((prevStyle) => ({
          ...prevStyle,
          background:
            "linear-gradient(to bottom, rgba(163, 36, 167, 0.151) 0%, rgba(78, 78, 75, 0.5) 100%)",
        }));
        break;
      case 5:
        setStyle((prevStyle) => ({
          ...prevStyle,
          background:
            "linear-gradient(to bottom, rgba(167, 158, 36, 0.151) 0%, rgba(78, 78, 75, 0.5) 100%)",
        }));
        break;
      default:
        setStyle((prevStyle) => ({
          ...prevStyle,
          background:
            "linear-gradient(to bottom, rgba(167, 126, 36, 0.151) 0%, rgba(78, 78, 75, 0.5) 100%)",
        }));
        break;
    }
  }, [selectedEchoRarity]);

  return (
    <>
      <div className="echo-card-group">
        <div className="echo-card-grid">
          {filteredEchoes && filteredEchoes.length > 0 ? (
            filteredEchoes
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => (
                <div key={item.id} className="echo-card" style={style}>
                  <div className="echo-card-top">
                    <img src={item.img} alt={`${item.name} Icon`} />
                  </div>
                  <div className="echo-card-bottom">
                    <p className="echo-name">{item.name}</p>
                    <p className="echo-cost">
                      Cost: <b>{item.cost}</b>
                    </p>
                    <p
                      className="echo-skill"
                      dangerouslySetInnerHTML={{
                        __html: item.echoSkill.replace(
                          /{(\d)}/g,
                          (match, number) => {
                            const index = parseInt(number);
                            if (isNaN(index)) return match;

                            switch (selectedEchoRarity) {
                              case 2:
                                return item.skill2[index] ?? match;
                              case 3:
                                return item.skill3[index] ?? match;
                              case 4:
                                return item.skill4[index] ?? match;
                              default:
                                return item.skill5[index] ?? match;
                            }
                          }
                        ),
                      }}
                    ></p>
                  </div>
                </div>
              ))
          ) : (
            <h2 className="No-Match">No Match Found</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default EchoCard;
