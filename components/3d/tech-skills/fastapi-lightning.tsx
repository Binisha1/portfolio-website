"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Sphere } from "@react-three/drei"
import type * as THREE from "three"

export function FastAPILightning() {
  const fastApiRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (fastApiRef.current) {
      fastApiRef.current.rotation.z = time * 1.2
    }
  })

  return (
    <Float speed={2.5} rotationIntensity={0} floatIntensity={2}>
      <group ref={fastApiRef} position={[-2.5, 1, 1.5]}>
        {/* Lightning bolt 1 */}
        <mesh rotation={[0, 0, Math.PI / 6]}>
          <boxGeometry args={[0.1, 1.5, 0.1]} />
          <meshStandardMaterial color="#009688" emissive="#009688" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0.2, 0.3, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.08, 0.8, 0.08]} />
          <meshStandardMaterial color="#00bcd4" emissive="#00bcd4" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[-0.2, -0.3, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.08, 0.8, 0.08]} />
          <meshStandardMaterial color="#4caf50" emissive="#4caf50" emissiveIntensity={0.5} />
        </mesh>
        {/* Energy particles */}
        <Sphere args={[0.08, 8, 8]} position={[0.4, 0.6, 0]}>
          <meshStandardMaterial color="#ffeb3b" emissive="#ffeb3b" emissiveIntensity={0.8} />
        </Sphere>
        <Sphere args={[0.06, 8, 8]} position={[-0.3, -0.5, 0]}>
          <meshStandardMaterial color="#ff9800" emissive="#ff9800" emissiveIntensity={0.8} />
        </Sphere>
      </group>
    </Float>
  )
}
