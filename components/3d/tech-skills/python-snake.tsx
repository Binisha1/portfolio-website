"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Sphere } from "@react-three/drei"
import type * as THREE from "three"

export function PythonSnake() {
  const pythonRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (pythonRef.current) {
      pythonRef.current.rotation.y = time * 0.6
    }
  })

  return (
    <Float speed={1.8} rotationIntensity={0} floatIntensity={1.5}>
      <group ref={pythonRef} position={[0, -2, 0]}>
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 12
          const radius = 0.8
          const height = Math.sin(i * 0.5) * 0.3
          return (
            <Sphere
              key={i}
              position={[Math.cos(angle) * radius, height, Math.sin(angle) * radius]}
              args={[0.12, 16, 16]}
            >
              <meshStandardMaterial
                color={i % 2 === 0 ? "#3776ab" : "#ffd43b"}
                emissive={i % 2 === 0 ? "#3776ab" : "#ffd43b"}
                emissiveIntensity={0.3}
              />
            </Sphere>
          )
        })}
        {/* Python head */}
        <Sphere args={[0.18, 16, 16]} position={[0.8, 0, 0]}>
          <meshStandardMaterial color="#3776ab" emissive="#3776ab" emissiveIntensity={0.5} />
        </Sphere>
      </group>
    </Float>
  )
}
