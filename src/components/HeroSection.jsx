import React from "react";
import "./css/HeroSection.css";
import heroImage from "../assets/1961233.jpg" // fichier CSS optionnel

const HeroSection = ({ scrollToSection }) => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">Le Village Numérique Résistant</h1>
      <p className="hero-subtitle">
        Comment les établissements scolaires peuvent tenir tête aux Big Tech ?
      </p>

       <div className="hero-image-container">
        <img
          src={heroImage}
          alt="Village Numérique Résistant"
          className="hero-image"
        />
      </div>

      <div className="cta-container">
        <button className="btn btn-primary" onClick={() => scrollToSection("pillars")}>
          Explorer les Piliers
        </button>
        <button className="btn btn-secondary" onClick={() => scrollToSection("calculator")}>
          Calculer les Économies
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
