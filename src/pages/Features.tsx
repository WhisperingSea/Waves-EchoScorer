import React, { useState } from "react";
import Navbar from "../components/Common/Navbar.tsx";
import FeaturesModal from "../components/Modals/FeaturesModal.tsx";
import "../styles/Features.css";
import Footer from "../components/Common/Footer.tsx";

const Features: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState<string>("");

  const openFeatureModal1 = () => {
    setOpen(true);
    setLink("/damage-calculator/");
  };

  const openFeatureModal2 = () => {
    setOpen(true);
    setLink("/echo-scorer/");
  };

  const closeFeatureModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="features-page-container">
        <header>
          <Navbar />
          {open && (
            <FeaturesModal onClose={closeFeatureModal} pageLink={link} />
          )}
        </header>
        <main>
          <section className="feature-section">
            <h1 className="header">Waves Features</h1>
            <div className="feature-grid">
              <div className="feature-grid-item-1" onClick={openFeatureModal1}>
                <div className="feature-grid-item-1-bg"></div>
                <div className="feature-grid-item-overlay"></div>
                <h2 className="header-2">Damage Calculator</h2>
              </div>
              <div className="feature-grid-item-2" onClick={openFeatureModal2}>
                <div className="feature-grid-item-2-bg"></div>
                <div className="feature-grid-item-overlay"></div>
                <h2 className="header-2">Echo Scorer</h2>
                <p>(Coming Soon)</p>
              </div>
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

export default Features;
