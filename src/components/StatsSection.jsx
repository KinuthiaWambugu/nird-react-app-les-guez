import React from "react";
import "./css/StatsSection.css";

const stats = [
  { number: "300+", label: "Ordinateurs sauvés" },
  { number: "50K€", label: "Économisés en licences" },
  { number: "15+", label: "Établissements engagés" },
  { number: "5T", label: "CO₂ évitées" },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <h2 className="section-title">Impact Mesuré</h2>
      <p className="section-subtitle">Les chiffres de la résistance</p>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
