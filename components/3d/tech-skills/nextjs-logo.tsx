"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import type * as THREE from "three"

export function NextJSLogo() {
  const nextRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (nextRef.current) {
      nextRef.current.rotation.x = time * 0.5
      nextRef.current.rotation.y = time * 0.3
      nextRef.current.rotation.z = time * 0.4
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={1.5}>
      <group ref={nextRef} position={[2.5, 1, 1.5]}>
        {/* Main triangle */}
        <mesh>
          <coneGeometry args={[0.6, 1.2, 3]} />
          <meshStandardMaterial color="#000000" roughness={0.1} metalness={0.9} />
        </mesh>
        {/* Inner triangle */}
        <mesh position={[0, 0.1, 0]} scale={0.7}>
          <coneGeometry args={[0.6, 1.2, 3]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} />
        </mesh>
      </group>
    </Float>
  )
}
