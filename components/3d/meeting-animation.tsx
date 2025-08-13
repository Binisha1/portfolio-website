"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Cylinder } from "@react-three/drei"
import type * as THREE from "three"
import type { PersonFigureProps } from "@/types"

const PersonFigure = ({ ref, color }: PersonFigureProps) => (
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
)

export function MeetingAnimation() {
  const person1Ref = useRef<THREE.Group>(null)
  const person2Ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (person1Ref.current) {
      // Person 1 walking towards center
      person1Ref.current.position.x = -2 + Math.sin(time * 0.5) * 0.5
      person1Ref.current.rotation.y = Math.sin(time * 4) * 0.1
    }

    if (person2Ref.current) {
      // Person 2 walking towards center
      person2Ref.current.position.x = 2 - Math.sin(time * 0.5) * 0.5
      person2Ref.current.rotation.y = Math.PI + Math.sin(time * 4) * 0.1
    }
  })

  return (
    <group>
      <PersonFigure ref={person1Ref} color="#3498db" />
      <PersonFigure ref={person2Ref} color="#e74c3c" />

      {/* Connection line */}
      <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
        <Cylinder position={[0, 0.5, 0]} args={[0.02, 0.02, 3, 8]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#f39c12" emissive="#f39c12" emissiveIntensity={0.3} />
        </Cylinder>
      </Float>
    </group>
  )
}
