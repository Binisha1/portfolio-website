"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Sphere, Cylinder } from "@react-three/drei"
import type * as THREE from "three"

export function AIMLBrain() {
  const aiMlRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (aiMlRef.current) {
      aiMlRef.current.rotation.y = time * 1.0
    }
  })

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={1.2}>
      <group ref={aiMlRef} position={[-2.5, -1, -1.5]}>
        {/* Central brain core */}
        <Sphere args={[0.3, 16, 16]}>
          <meshStandardMaterial color="#9c27b0" emissive="#9c27b0" emissiveIntensity={0.6} />
        </Sphere>

        {/* Neural network nodes */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 8
          const radius = 0.7
          return (
            <group key={i}>
              <Sphere
                position={[Math.cos(angle) * radius, Math.sin(angle) * radius * 0.5, Math.sin(angle) * radius * 0.3]}
                args={[0.08, 12, 12]}
              >
                <meshStandardMaterial color="#e91e63" emissive="#e91e63" emissiveIntensity={0.4} />
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
                <meshStandardMaterial color="#ff5722" emissive="#ff5722" emissiveIntensity={0.3} />
              </Cylinder>
            </group>
          )
        })}

        {/* Outer neural ring */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 12
          const radius = 1.2
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
              <meshStandardMaterial color="#673ab7" emissive="#673ab7" emissiveIntensity={0.5} />
            </Sphere>
          )
        })}
      </group>
    </Float>
  )
}
