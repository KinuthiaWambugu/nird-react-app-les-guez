import React from "react";
import "./css/PillarsSection.css";

const pillars = [
  {
    icon: "🤝",
    title: "Inclusion",
    description:
      "Un numérique accessible à tous, sans barrières technologiques ni exclusion. Nous adaptons les outils aux besoins de chacun.",
  },
  {
    icon: "🎯",
    title: "Responsabilité",
    description:
      "Reprendre le contrôle de nos données, de nos choix technologiques et de notre souveraineté numérique.",
  },
  {
    icon: "🌱",
    title: "Durabilité",
    description:
      "Combattre l'obsolescence programmée, prolonger la vie du matériel et réduire notre empreinte carbone numérique.",
  },
];

const PillarsSection = () => {
  return (
    <section id="pillars" className="pillars-section">
      <h2 className="section-title">Les Trois Piliers</h2>
      <p className="section-subtitle">La fondation de notre résistance numérique</p>

      <div className="pillars-grid">
        {pillars.map((pillar, index) => (
          <div key={index} className="pillar-card">
            <span className="pillar-icon">{pillar.icon}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PillarsSection;
