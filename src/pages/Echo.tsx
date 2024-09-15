import React from "react";
import "../styles/Echoes.css";
import EchoSearchBar from "../components/SearchBars/EchoSearchBar.tsx";
import EchoCard from "../components/Cards/EchoCards.tsx";
import Footer from "../components/Common/Footer.tsx";

const Echoes: React.FC = () => {
  return (
    <>
      <div className="echoes-page-container">
        <div className="echoes-background"></div>
        <main>
          <section className="echoes-page-section">
            <h2 className="header-2">Wuthering Waves Echoes</h2>
          </section>
          <section className="echoes-page-section">
            <div className="echo-search-bar-container">
              <EchoSearchBar />
            </div>
            <EchoCard />
          </section>
          <section className="echoes-page-section">
            <h2 className="header-2">Echo Stat Ranges</h2>
            <div className="echo-mainstat">
              <h3>Overlord/Calamity Class: </h3>
              <table>
                <thead>
                  <tr>
                    <th>Rarity</th>
                    <th>ATK(Default)</th>
                    <th>ATK%</th>
                    <th>HP%</th>
                    <th>DEF%</th>
                    <th>Crit. Rate%</th>
                    <th>Crit. Damage%</th>
                    <th>Healing Bonus%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2 Star:</td>
                    <td>18 - 46</td>
                    <td>4.1% - 10.6%</td>
                    <td>4.1% - 10.6%</td>
                    <td>5.2% - 13.5%</td>
                    <td>2.7% - 7.1%</td>
                    <td>?? - 14.3%</td>
                    <td>?? - 8.5</td>
                  </tr>
                  <tr>
                    <td>3 Star:</td>
                    <td>20 - 68</td>
                    <td>4.3% - 14.6%</td>
                    <td>4.3% - 14.6%</td>
                    <td>5.5% - 18.7%</td>
                    <td>2.9% - 9.8%</td>
                    <td> 5.8% - 19.7%</td>
                    <td> 3.5% - 11.9%</td>
                  </tr>
                  <tr>
                    <td>4 Star:</td>
                    <td>22 - 92</td>
                    <td>4.9% - 20.5%</td>
                    <td>4.9% - 20.5%</td>
                    <td>6.2% - 26.0%</td>
                    <td>3.3% - 13.8%</td>
                    <td>6.6% - 27.7%</td>
                    <td>3.9% - 16.3%</td>
                  </tr>
                  <tr>
                    <td>5 Star</td>
                    <td>30 - 150</td>
                    <td>6.6% - 33.0%</td>
                    <td>6.6% - 33.0%</td>
                    <td>8.3% - 41.5%</td>
                    <td>4.4% - 22.0%</td>
                    <td>8.8% - 44.0%</td>
                    <td>5.2% - 26.0%</td>
                  </tr>
                </tbody>
              </table>
              <h3>Elite Class:</h3>
              <table>
                <thead>
                  <tr>
                    <th>Rarity</th>
                    <th>ATK(Default)</th>
                    <th>ATK%</th>
                    <th>HP%</th>
                    <th>DEF%</th>
                    <th>Element Damage%</th>
                    <th>Energt Regen%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2 Star:</td>
                    <td>12 - 31</td>
                    <td>3.7% - 9.6%</td>
                    <td>3.7% - 9.6%</td>
                    <td>4.7% - 12.3%</td>
                    <td>3.7% - 9.6%</td>
                    <td>?? - 10%</td>
                  </tr>
                  <tr>
                    <td>3 Star:</td>
                    <td>13 - 44</td>
                    <td>4.0% - 14.0%</td>
                    <td>4.0% - 14.0%</td>
                    <td>5.0% - 17%</td>
                    <td>4.0% - 14%</td>
                    <td>4.2% - 14.2%</td>
                  </tr>
                  <tr>
                    <td>4 Star:</td>
                    <td>15 - 63</td>
                    <td>4.5% - 18.9%</td>
                    <td>4.5% - 18.9%</td>
                    <td>5.7% - 23.9%</td>
                    <td>4.5% - 18.9%</td>
                    <td>4.8% - 20.1%</td>
                  </tr>
                  <tr>
                    <td>5 Star:</td>
                    <td>20 - 100</td>
                    <td>6.0% - 30%</td>
                    <td>6.0% - 30%</td>
                    <td>7.6% - 38%</td>
                    <td>6.0% - 30%</td>
                    <td>6.4% - 32.0%</td>
                  </tr>
                </tbody>
              </table>
              <h3>Common Class:</h3>
              <table>
                <thead>
                  <tr>
                    <th>Rarity</th>
                    <th>HP(Default)</th>
                    <th>ATK%</th>
                    <th>HP%</th>
                    <th>DEF%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2 Star:</td>
                    <td>114 - 296</td>
                    <td>2.2% - 5.7%</td>
                    <td>2.8% - 7.2%</td>
                    <td>2.2% - 5.7%</td>
                  </tr>
                  <tr>
                    <td>3 Star:</td>
                    <td>152 - 516</td>
                    <td>2.4% - 8.1%</td>
                    <td>3.0% - 10.20%</td>
                    <td>2.4% - 8.1%</td>
                  </tr>
                  <tr>
                    <td>4 Star:</td>
                    <td>228 - 957</td>
                    <td>2.7% - 11.3%</td>
                    <td>3.4% - 14.2%</td>
                    <td>2.7% - 11.3%</td>
                  </tr>
                  <tr>
                    <td>5 Star:</td>
                    <td>456 - 2280</td>
                    <td>3.6% - 18.0%</td>
                    <td>4.5% - 22.8%</td>
                    <td>3.6% - 18.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="echo-substats-group">
              <h3>Echo Substats:</h3>
              <table className="echo-substats-group">
                <thead>
                  <tr>
                    <th>Stat</th>
                    <th>Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HP</td>
                    <td>320 - 580</td>
                  </tr>
                  <tr>
                    <td>ATK</td>
                    <td>30 - 60</td>
                  </tr>
                  <tr>
                    <td>DEF</td>
                    <td>40 - 70</td>
                  </tr>
                  <tr>
                    <td>HP%</td>
                    <td>6.4% - 11.6%</td>
                  </tr>
                  <tr>
                    <td>ATK%</td>
                    <td>6.4% - 11.6%</td>
                  </tr>
                  <tr>
                    <td>DEF%</td>
                    <td>8.1% - 14.7%</td>
                  </tr>
                  <tr>
                    <td>Crit. Rate</td>
                    <td>6.3% - 10.5%</td>
                  </tr>
                  <tr>
                    <td>Crit. Damage</td>
                    <td>12.6% - 21%</td>
                  </tr>
                  <tr>
                    <td>Energy Regen</td>
                    <td>6.8% - 12.4%</td>
                  </tr>
                  <tr>
                    <td>Basic Attack DMG Bonus</td>
                    <td>6.4% - 11.6%</td>
                  </tr>
                  <tr>
                    <td>Hravy Attack DMG Bonus</td>
                    <td>6.4% - 11.6%</td>
                  </tr>
                  <tr>
                    <td>Resonance Skill DMG Bonus</td>
                    <td>6.4% - 11.6%</td>
                  </tr>
                  <tr>
                    <td>Resonance Liberation DMG Bonus</td>
                    <td>6.4% - 11.6%</td>
                  </tr>
                </tbody>
              </table>
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

export default Echoes;
