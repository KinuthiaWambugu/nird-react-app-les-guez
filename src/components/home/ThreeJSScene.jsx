import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model } from "../../components/Desktop";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="border-2 border-transparent rounded-lg p-8 bg-slate-800/30 backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Welcome to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Le Village Numérique Résistant
                </span>
              </h1>
              <p className="text-lg text-black-300">
                Embarquez pour un voyage éducatif extraordinaire, propulsé par une technologie innovante et des expériences immersives.
              </p>
            </div>

            {/* CTA */}
            <div className="border-2 border-transparent rounded-lg p-6 bg-slate-800/30 backdrop-blur-sm flex justify-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-12 rounded-lg transition transform hover:scale-105 shadow-lg text-lg">
                Get Started
              </button>
            </div>
          </div>

          {/* RIGHT SIDE — 3D Desktop */}
          <div className="border-none rounded-lg p-4 bg-white h-[40rem] w-[40rem]">
            <Canvas camera={{ position: [2, 2, 2], fov: 45 }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[5, 5, 5]} intensity={1} />

              <Model />

              <OrbitControls enableZoom={false} enablePan={false} />
              <Environment preset="city" />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
