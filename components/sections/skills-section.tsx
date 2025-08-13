"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { AnimatedTechSkills } from "@/components/3d/tech-skills/animated-tech-skills";
import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-white">
              Technologies I Work With
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center space-x-4">
                  <div className="text-lg font-bold text-gray-400">⚡</div>
                  <span className="text-base sm:text-lg font-medium text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-64 sm:h-96">
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[5, 5, 5]} intensity={0.8} />
              <AnimatedTechSkills />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              {/* <Environment preset="warehouse" /> */}
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
