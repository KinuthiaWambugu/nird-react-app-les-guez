import React, { useState, useEffect } from "react";
import "./css/CalculatorSection.css";

const CalculatorSection = () => {
  const [computers, setComputers] = useState(100);
  const [bigtechCost, setBigtechCost] = useState(0);
  const [nirdCost, setNirdCost] = useState(0);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    const bigtech = computers * 800; // Example Big Tech cost per PC
    const nird = computers * 20;     // Example NIRD cost per PC
    setBigtechCost(bigtech);
    setNirdCost(nird);
    setSavings(bigtech - nird);
  }, [computers]);

  const formatNumber = (num) => num.toLocaleString("fr-FR");

  return (
    <section id="calculator" className="calculator-section">
      <h2 className="section-title">Simulateur d'Économies</h2>
      <p className="section-subtitle">Découvrez votre potentiel de libération</p>

      <div className="calculator-container">
        <div className="slider-control">
          <label htmlFor="computers">Nombre d'ordinateurs à équiper</label>
          <input
            type="range"
            id="computers"
            min="10"
            max="500"
            step="10"
            value={computers}
            onChange={(e) => setComputers(parseInt(e.target.value))}
          />
          <div className="value-display">{computers} ordinateurs</div>
        </div>

        <div className="comparison-grid">
          <div className="comparison-card bigtech-card">
            <h4>❌ Modèle Big Tech</h4>
            <div className="comparison-details">
              Nouveaux PC + Windows 11<br />
              Licences propriétaires
            </div>
            <div className="cost-display">{formatNumber(bigtechCost)}€</div>
          </div>

          <div className="comparison-card nird-card">
            <h4>✓ Approche NIRD</h4>
            <div className="comparison-details">
              PCs existants + Linux<br />
              Logiciels libres
            </div>
            <div className="cost-display">{formatNumber(nirdCost)}€</div>
            <div className="savings-badge">
              💰 ÉCONOMIE : {formatNumber(savings)}€
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
