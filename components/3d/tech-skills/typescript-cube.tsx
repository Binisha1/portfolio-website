"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Box } from "@react-three/drei"
import type * as THREE from "three"

export function TypeScriptCube() {
  const typescriptRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (typescriptRef.current) {
      typescriptRef.current.rotation.x = time * 0.7
      typescriptRef.current.rotation.y = time * 0.5
    }
  })

  return (
    <Float speed={1.6} rotationIntensity={0} floatIntensity={1.8}>
      <group ref={typescriptRef} position={[2.5, -1, -1.5]}>
        {/* Main cube */}
        <Box args={[0.8, 0.8, 0.8]}>
          <meshStandardMaterial color="#3178c6" roughness={0.2} metalness={0.8} />
        </Box>
        {/* TS Letters */}
        <mesh position={[0, 0, 0.41]}>
          <boxGeometry args={[0.6, 0.1, 0.02]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[-0.15, -0.2, 0.41]}>
          <boxGeometry args={[0.1, 0.4, 0.02]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0.2, -0.1, 0.41]}>
          <boxGeometry args={[0.3, 0.1, 0.02]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0.2, -0.3, 0.41]}>
          <boxGeometry args={[0.25, 0.1, 0.02]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
        </mesh>
      </group>
    </Float>
  )
}
