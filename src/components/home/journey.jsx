import React, { useState, useRef, useEffect } from "react";

const items = [
  {
    title: "Pourquoi résister aux géants de la tech ?",
    image: "/public/features/big tech.png",
    description: "Les écoles sont structurellement dépendantes des Big Tech, confrontées à l'obsolescence matérielle, aux licences coûteuses, au stockage de données hors UE et aux écosystèmes fermés.",
    link: "/learn-more-1",
  },
  {
    title: "Principes du NIRD: Inclusion / Responsabilité / Durabilité",
    image: "/public/features/nird.jpeg",
    description: " La démarche NIRD repose sur trois piliers qui guident l'ensemble des actions menées : Inclusif, Responsabilité et Durabilité.",
    link: "https://nird.forge.apps.education.fr/",
  },
  {
    title: "Ce que votre école peut faire",
    image: "/public/features/school.jpg",
    description: "  Les écoles peuvent rejoindre le mouvement en se concentrant sur des activités clés : Lire le projet du Lycée Carnot de Bruay-Labuissière",
    link:"https://nird.forge.apps.education.fr/pilotes/0620056z.html"
  },
  {
    title: "Feature Four",
    image: "/img4.png",
    description: "A simple description about feature four.",
    link: "/learn-more-4",
  },
];

const FeatureCircleGrid = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 🔥 INTERSECTION OBSERVER FOR SCROLL FADE-IN
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 } // Trigger around 20% into view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`
        w-full py-24 bg-slate-900 text-white transition-all duration-1000
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="w-full flex flex-col items-center">
                {/* CIRCLE BUTTON */}
                <button
                  onClick={() => toggle(index)}
                  className="transition-all duration-300"
                >
                  <div
                    className={`
                      rounded-full p-2 border-4 border-white transition-all duration-300
                      ${isOpen ? "ring-4 ring-cyan-400 shadow-cyan-400 shadow-glow" : ""}
                    `}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`
                        rounded-full object-contain transition-all duration-300 hover:scale-105
                        ${isOpen ? "w-24 h-24" : "w-32 h-32"}
                      `}
                    />
                  </div>
                </button>

                {/* DROPDOWN */}
                <div
                  className={`
                    w-full text-center overflow-hidden transition-all duration-500
                    ${isOpen ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="text-gray-300 text-sm">{item.description}</p>

                  <a
                    href={item.link}
                    className="text-cyan-400 hover:underline text-sm mt-2 block"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCircleGrid;
