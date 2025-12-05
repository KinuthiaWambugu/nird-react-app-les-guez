import React, { useEffect } from "react";
import "./css/BackgroundAnimation.css";

const BackgroundAnimation = () => {
  useEffect(() => {
    const container = document.getElementById("particles");
    if (container && container.children.length === 0) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 15 + "s";
        particle.style.animationDuration = (Math.random() * 10 + 10) + "s";
        container.appendChild(particle);
      }
    }
  }, []);

  return (
    <>
      <div className="bg-animation"></div>
      <div className="grid-overlay"></div>
      <div className="particles" id="particles"></div>
    </>
  );
};

export default BackgroundAnimation;
