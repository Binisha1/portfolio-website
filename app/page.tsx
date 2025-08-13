"use client";

import type React from "react";
import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import {
  Html,
  Float,
  Sphere,
  Box,
  Torus,
  Cylinder,
  Text,
} from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type * as THREE from "three";

// Enhanced Floating Code Elements with React, AI/ML, and FastAPI
function FloatingCodeElements() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Text
          position={[-3, 1, -1]}
          fontSize={0.3}
          color="#61dafb"
          anchorX="center"
          anchorY="middle"
        >
          React
        </Text>
      </Float>

      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
        <Text
          position={[-2, 0.5, -0.5]}
          fontSize={0.25}
          color="#9c27b0"
          anchorX="center"
          anchorY="middle"
        >
          AI/ML
        </Text>
      </Float>

      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
        <Text
          position={[-3.5, -0.5, 0]}
          fontSize={0.28}
          color="#009688"
          anchorX="center"
          anchorY="middle"
        >
          FastAPI
        </Text>
      </Float>

      <Float speed={1} rotationIntensity={0.3} floatIntensity={2}>
        <Box position={[-1.5, -1, 1]} args={[0.3, 0.3, 0.3]}>
          <meshStandardMaterial
            color="#e74c3c"
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
      </Float>

      <Float speed={1.8} rotationIntensity={1} floatIntensity={1}>
        <Torus position={[-4, 0, 1]} args={[0.2, 0.08, 16, 32]}>
          <meshStandardMaterial
            color="#f39c12"
            metalness={0.6}
            roughness={0.3}
          />
        </Torus>
      </Float>
    </>
  );
}

// Animated Tech Skills Visualization - All 6 Technologies Rotating
function AnimatedTechSkills() {
  const groupRef = useRef<THREE.Group>(null);
  const reactRef = useRef<THREE.Group>(null);
  const nextRef = useRef<THREE.Group>(null);
  const fastApiRef = useRef<THREE.Group>(null);
  const pythonRef = useRef<THREE.Group>(null);
  const typescriptRef = useRef<THREE.Group>(null);
  const aiMlRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Main group rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }

    // Individual tech rotations
    if (reactRef.current) {
      reactRef.current.rotation.x = time * 0.8;
      reactRef.current.rotation.z = time * 0.6;
    }

    if (nextRef.current) {
      nextRef.current.rotation.x = time * 0.5;
      nextRef.current.rotation.y = time * 0.3;
      nextRef.current.rotation.z = time * 0.4;
    }

    if (fastApiRef.current) {
      fastApiRef.current.rotation.z = time * 1.2;
    }

    if (pythonRef.current) {
      pythonRef.current.rotation.y = time * 0.6;
    }

    if (typescriptRef.current) {
      typescriptRef.current.rotation.x = time * 0.7;
      typescriptRef.current.rotation.y = time * 0.5;
    }

    if (aiMlRef.current) {
      aiMlRef.current.rotation.y = time * 1.0;
    }
  });

  return (
    <group ref={groupRef}>
      {/* React - Atomic Structure */}
      <Float speed={2} rotationIntensity={0} floatIntensity={1}>
        <group ref={reactRef} position={[0, 2, 0]}>
          {/* Electron rings */}
          <Torus args={[0.8, 0.03, 16, 32]} rotation={[0, 0, 0]}>
            <meshStandardMaterial
              color="#61dafb"
              emissive="#61dafb"
              emissiveIntensity={0.3}
            />
          </Torus>
          <Torus
            args={[0.8, 0.03, 16, 32]}
            rotation={[Math.PI / 3, 0, Math.PI / 3]}
          >
            <meshStandardMaterial
              color="#61dafb"
              emissive="#61dafb"
              emissiveIntensity={0.3}
            />
          </Torus>
          <Torus
            args={[0.8, 0.03, 16, 32]}
            rotation={[-Math.PI / 3, 0, -Math.PI / 3]}
          >
            <meshStandardMaterial
              color="#61dafb"
              emissive="#61dafb"
              emissiveIntensity={0.3}
            />
          </Torus>
          {/* Nucleus */}
          <Sphere args={[0.15, 16, 16]}>
            <meshStandardMaterial
              color="#61dafb"
              emissive="#61dafb"
              emissiveIntensity={0.8}
            />
          </Sphere>
          {/* Electrons */}
          <Sphere args={[0.05, 8, 8]} position={[0.8, 0, 0]}>
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.5}
            />
          </Sphere>
          <Sphere args={[0.05, 8, 8]} position={[-0.4, 0.7, 0]}>
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.5}
            />
          </Sphere>
          <Sphere args={[0.05, 8, 8]} position={[-0.4, -0.7, 0]}>
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.5}
            />
          </Sphere>
        </group>
      </Float>

      {/* Next.js - Triangular Logo */}
      <Float speed={1.5} rotationIntensity={0} floatIntensity={1.5}>
        <group ref={nextRef} position={[2.5, 1, 1.5]}>
          {/* Main triangle */}
          <mesh>
            <coneGeometry args={[0.6, 1.2, 3]} />
            <meshStandardMaterial
              color="#000000"
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
          {/* Inner triangle */}
          <mesh position={[0, 0.1, 0]} scale={0.7}>
            <coneGeometry args={[0.6, 1.2, 3]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      </Float>

      {/* FastAPI - Lightning Bolts */}
      <Float speed={2.5} rotationIntensity={0} floatIntensity={2}>
        <group ref={fastApiRef} position={[-2.5, 1, 1.5]}>
          {/* Lightning bolt 1 */}
          <mesh rotation={[0, 0, Math.PI / 6]}>
            <boxGeometry args={[0.1, 1.5, 0.1]} />
            <meshStandardMaterial
              color="#009688"
              emissive="#009688"
              emissiveIntensity={0.5}
            />
          </mesh>
          <mesh position={[0.2, 0.3, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <boxGeometry args={[0.08, 0.8, 0.08]} />
            <meshStandardMaterial
              color="#00bcd4"
              emissive="#00bcd4"
              emissiveIntensity={0.5}
            />
          </mesh>
          <mesh position={[-0.2, -0.3, 0]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.08, 0.8, 0.08]} />
            <meshStandardMaterial
              color="#4caf50"
              emissive="#4caf50"
              emissiveIntensity={0.5}
            />
          </mesh>
          {/* Energy particles */}
          <Sphere args={[0.08, 8, 8]} position={[0.4, 0.6, 0]}>
            <meshStandardMaterial
              color="#ffeb3b"
              emissive="#ffeb3b"
              emissiveIntensity={0.8}
            />
          </Sphere>
          <Sphere args={[0.06, 8, 8]} position={[-0.3, -0.5, 0]}>
            <meshStandardMaterial
              color="#ff9800"
              emissive="#ff9800"
              emissiveIntensity={0.8}
            />
          </Sphere>
        </group>
      </Float>

      {/* Python - Snake Spiral */}
      <Float speed={1.8} rotationIntensity={0} floatIntensity={1.5}>
        <group ref={pythonRef} position={[0, -2, 0]}>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * Math.PI * 2) / 12;
            const radius = 0.8;
            const height = Math.sin(i * 0.5) * 0.3;
            return (
              <Sphere
                key={i}
                position={[
                  Math.cos(angle) * radius,
                  height,
                  Math.sin(angle) * radius,
                ]}
                args={[0.12, 16, 16]}
              >
                <meshStandardMaterial
                  color={i % 2 === 0 ? "#3776ab" : "#ffd43b"}
                  emissive={i % 2 === 0 ? "#3776ab" : "#ffd43b"}
                  emissiveIntensity={0.3}
                />
              </Sphere>
            );
          })}
          {/* Python head */}
          <Sphere args={[0.18, 16, 16]} position={[0.8, 0, 0]}>
            <meshStandardMaterial
              color="#3776ab"
              emissive="#3776ab"
              emissiveIntensity={0.5}
            />
          </Sphere>
        </group>
      </Float>

      {/* TypeScript - TS Logo Cube */}
      <Float speed={1.6} rotationIntensity={0} floatIntensity={1.8}>
        <group ref={typescriptRef} position={[2.5, -1, -1.5]}>
          {/* Main cube */}
          <Box args={[0.8, 0.8, 0.8]}>
            <meshStandardMaterial
              color="#3178c6"
              roughness={0.2}
              metalness={0.8}
            />
          </Box>
          {/* TS Letters */}
          <mesh position={[0, 0, 0.41]}>
            <boxGeometry args={[0.6, 0.1, 0.02]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.3}
            />
          </mesh>
          <mesh position={[-0.15, -0.2, 0.41]}>
            <boxGeometry args={[0.1, 0.4, 0.02]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.3}
            />
          </mesh>
          <mesh position={[0.2, -0.1, 0.41]}>
            <boxGeometry args={[0.3, 0.1, 0.02]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.3}
            />
          </mesh>
          <mesh position={[0.2, -0.3, 0.41]}>
            <boxGeometry args={[0.25, 0.1, 0.02]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.3}
            />
          </mesh>
        </group>
      </Float>

      {/* AI/ML - Neural Network Brain */}
      <Float speed={2} rotationIntensity={0} floatIntensity={1.2}>
        <group ref={aiMlRef} position={[-2.5, -1, -1.5]}>
          {/* Central brain core */}
          <Sphere args={[0.3, 16, 16]}>
            <meshStandardMaterial
              color="#9c27b0"
              emissive="#9c27b0"
              emissiveIntensity={0.6}
            />
          </Sphere>

          {/* Neural network nodes */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * Math.PI * 2) / 8;
            const radius = 0.7;
            return (
              <group key={i}>
                <Sphere
                  position={[
                    Math.cos(angle) * radius,
                    Math.sin(angle) * radius * 0.5,
                    Math.sin(angle) * radius * 0.3,
                  ]}
                  args={[0.08, 12, 12]}
                >
                  <meshStandardMaterial
                    color="#e91e63"
                    emissive="#e91e63"
                    emissiveIntensity={0.4}
                  />
                </Sphere>
                {/* Connection lines */}
                <Cylinder
                  position={[
                    Math.cos(angle) * radius * 0.5,
                    Math.sin(angle) * radius * 0.25,
                    Math.sin(angle) * radius * 0.15,
                  ]}
                  args={[0.02, 0.02, radius * 0.8, 8]}
                  rotation={[0, 0, angle]}
                >
                  <meshStandardMaterial
                    color="#ff5722"
                    emissive="#ff5722"
                    emissiveIntensity={0.3}
                  />
                </Cylinder>
              </group>
            );
          })}

          {/* Outer neural ring */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * Math.PI * 2) / 12;
            const radius = 1.2;
            return (
              <Sphere
                key={`outer-${i}`}
                position={[
                  Math.cos(angle) * radius,
                  Math.sin(angle) * radius * 0.3,
                  Math.cos(angle + Math.PI / 4) * radius * 0.2,
                ]}
                args={[0.05, 8, 8]}
              >
                <meshStandardMaterial
                  color="#673ab7"
                  emissive="#673ab7"
                  emissiveIntensity={0.5}
                />
              </Sphere>
            );
          })}
        </group>
      </Float>
    </group>
  );
}

// Two People Meeting Animation
function MeetingAnimation() {
  const person1Ref = useRef<THREE.Group>(null);
  const person2Ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (person1Ref.current) {
      // Person 1 walking towards center
      person1Ref.current.position.x = -2 + Math.sin(time * 0.5) * 0.5;
      person1Ref.current.rotation.y = Math.sin(time * 4) * 0.1;
    }

    if (person2Ref.current) {
      // Person 2 walking towards center
      person2Ref.current.position.x = 2 - Math.sin(time * 0.5) * 0.5;
      person2Ref.current.rotation.y = Math.PI + Math.sin(time * 4) * 0.1;
    }
  });

  const PersonFigure = ({
    ref,
    color,
  }: {
    ref: React.RefObject<THREE.Group>;
    color: string;
  }) => (
    <group ref={ref}>
      {/* Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.15, 0.2, 0.8, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.25, 0.7, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.04, 0.04, 0.4, 8]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>
      <mesh position={[0.25, 0.7, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.04, 0.04, 0.4, 8]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.1, -0.2, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.6, 8]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
      <mesh position={[0.1, -0.2, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.6, 8]} />
        <meshStandardMaterial color="#2c3e50" />
      </mesh>
    </group>
  );

  return (
    <group>
      <PersonFigure ref={person1Ref} color="#3498db" />
      <PersonFigure ref={person2Ref} color="#e74c3c" />

      {/* Connection line */}
      <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
        <Cylinder
          position={[0, 0.5, 0]}
          args={[0.02, 0.02, 3, 8]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <meshStandardMaterial
            color="#f39c12"
            emissive="#f39c12"
            emissiveIntensity={0.3}
          />
        </Cylinder>
      </Float>
    </group>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <HeroSection setActiveSection={setActiveSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-sm sm:text-base text-gray-400">
            © Built with Next.js, Three.js & lots of coffee
          </p>
        </div>
      </footer>
    </div>
  );
}
