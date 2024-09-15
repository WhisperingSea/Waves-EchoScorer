import "../styles/Weapons.css";
import WeaponCards from "../components/Cards/WeaponCard.tsx";
import WeaponSearchBar from "../components/SearchBars/WeaponSearchBar.tsx";
import Footer from "../components/Common/Footer.tsx";

const Weapons: React.FC = () => {
  return (
    <>
      <div className="weapon-page-container">
        <div className="weapon-page-bg"></div>
        <main>
          <section className="weapon-page-section">
            <h2 className="header-2">Wuthering Waves Weapons</h2>
          </section>
          <section className="weapon-page-section">
            <div className="weapon-search-bar-holder">
              <WeaponSearchBar />
            </div>
            <div className="weapon-card-holder">
              <WeaponCards />
            </div>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Weapons;
