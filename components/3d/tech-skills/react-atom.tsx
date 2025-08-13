"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Torus, Sphere } from "@react-three/drei"
import type * as THREE from "three"

export function ReactAtom() {
  const reactRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (reactRef.current) {
      reactRef.current.rotation.x = time * 0.8
      reactRef.current.rotation.z = time * 0.6
    }
  })

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={1}>
      <group ref={reactRef} position={[0, 2, 0]}>
        {/* Electron rings */}
        <Torus args={[0.8, 0.03, 16, 32]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#61dafb" emissive="#61dafb" emissiveIntensity={0.3} />
        </Torus>
        <Torus args={[0.8, 0.03, 16, 32]} rotation={[Math.PI / 3, 0, Math.PI / 3]}>
          <meshStandardMaterial color="#61dafb" emissive="#61dafb" emissiveIntensity={0.3} />
        </Torus>
        <Torus args={[0.8, 0.03, 16, 32]} rotation={[-Math.PI / 3, 0, -Math.PI / 3]}>
          <meshStandardMaterial color="#61dafb" emissive="#61dafb" emissiveIntensity={0.3} />
        </Torus>
        {/* Nucleus */}
        <Sphere args={[0.15, 16, 16]}>
          <meshStandardMaterial color="#61dafb" emissive="#61dafb" emissiveIntensity={0.8} />
        </Sphere>
        {/* Electrons */}
        <Sphere args={[0.05, 8, 8]} position={[0.8, 0, 0]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </Sphere>
        <Sphere args={[0.05, 8, 8]} position={[-0.4, 0.7, 0]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </Sphere>
        <Sphere args={[0.05, 8, 8]} position={[-0.4, -0.7, 0]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </Sphere>
      </group>
    </Float>
  )
}
