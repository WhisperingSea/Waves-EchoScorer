import "../styles/Characters.css";
import { useDataContext } from "../contexts/CharacterDataContext.tsx";
import ImageSlider from "../components/PageComponents/ImageSlider.tsx";
import CharaSliderScreen from "../components/PageComponents/CharaSliderScreen.tsx";
import Card from "../components/Cards/CharacterCards.tsx";
import { SearchBar } from "../components/SearchBars/SearchBar.tsx";
import Footer from "../components/Common/Footer.tsx";

const Characters: React.FC = () => {
  const { characters } = useDataContext();

  const images = Object.values(characters).map((character) => ({
    src: character.images.portrait,
    alt: character.name,
    charaId: character.charaId,
    sigil: character.images.sigil,
  }));

  return (
    <>
      <div className="container-chara-page">
        <div className="characters-background"></div>
        <main>
          <section className="chara-page-section">
            <div className="flexbox chara-flexbox">
              <div className="left-flex">
                <ImageSlider images={images} visibleImagesCount={1} vertical />
              </div>
              <div className="right-flex">
                <CharaSliderScreen />
              </div>
            </div>
          </section>
          <section className="chara-page-section-2">
            <h2 className="heading-2 center">Character List</h2>
            <div className="chara-cards">
              <SearchBar />
              <Card />
            </div>
          </section>
          <footer>
            <Footer />
          </footer>
        </main>
      </div>
    </>
  );
};

export default Characters;
