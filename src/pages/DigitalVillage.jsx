import React, { useRef } from "react";
import HeroSection from "../components/HeroSection";
import PillarsSection from "../components/PillarsSection";
import StatsSection from "../components/StatsSection";
const DigitalVillage = () => {
  const pillarsRef = useRef(null);
  const calculatorRef = useRef(null);

  // Fonction pour scroll vers une section
  const scrollToSection = (section) => {
    if (section === "pillars" && pillarsRef.current) {
      pillarsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "calculator" && calculatorRef.current) {
      calculatorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <HeroSection scrollToSection={scrollToSection} />

      {/* Placeholder en attendant les vraies sections */}
      <section ref={pillarsRef} style={{ padding: "80px", background: "#f5f5f5" }}>
        <h2>Pillars Section (à développer)</h2>
      </section>

      <section ref={calculatorRef} style={{ padding: "80px", background: "#e9e9e9" }}>
        <h2>Calculator Section (à développer)</h2>
      </section>
    </div>
  );
};

export default DigitalVillage;
