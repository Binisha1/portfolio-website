"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import type * as THREE from "three"

export function AnimeCharacter() {
  const groupRef = useRef<THREE.Group>(null)
  const rightArmRef = useRef<THREE.Group>(null)
  const leftArmRef = useRef<THREE.Group>(null)
  const hairRef = useRef<THREE.Group>(null)
  const eyesRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    }
    if (rightArmRef.current) {
      // Gentle waving animation
      rightArmRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.3 - 0.1
      rightArmRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 3) * 0.1
    }
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.05 + 0.1
    }
    if (hairRef.current) {
      hairRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.2) * 0.02
    }
    if (eyesRef.current) {
      // Blinking animation
      const blinkTime = Math.sin(state.clock.elapsedTime * 0.5)
      eyesRef.current.scale.y = blinkTime > 0.95 ? 0.1 : 1
    }
  })

  return (
    <group ref={groupRef} position={[3, -0.5, 0]} scale={0.7}>
      {/* Head - positioned like before */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#ffdbac" roughness={0.2} />
      </mesh>

      {/* Anime Hair */}
      <group ref={hairRef}>
        {/* Main hair volume */}
        <mesh position={[0, 1.8, -0.15]}>
          <sphereGeometry args={[0.45, 32, 32]} />
          <meshStandardMaterial color="#8b4513" roughness={0.2} />
        </mesh>

        {/* Hair bangs */}
        <mesh position={[0, 1.6, 0.35]} scale={[1.2, 0.8, 0.6]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial color="#8b4513" roughness={0.2} />
        </mesh>

        {/* Side hair strands */}
        <mesh position={[-0.35, 1.5, 0.1]} scale={[0.8, 1.2, 0.8]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#8b4513" roughness={0.2} />
        </mesh>
        <mesh position={[0.35, 1.5, 0.1]} scale={[0.8, 1.2, 0.8]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#8b4513" roughness={0.2} />
        </mesh>

        {/* Long hair back - more flowing */}
        <mesh position={[0, 1.0, -0.4]} scale={[1, 1.5, 0.8]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial color="#8b4513" roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.5, -0.35]} scale={[0.8, 1.2, 0.6]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#8b4513" roughness={0.2} />
        </mesh>
      </group>

      {/* Large Anime Eyes */}
      <group ref={eyesRef}>
        {/* Left eye */}
        <mesh position={[-0.15, 1.55, 0.35]} scale={[1.2, 1.5, 1]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ff69b4" emissive="#ff69b4" emissiveIntensity={0.4} />
        </mesh>
        {/* Right eye */}
        <mesh position={[0.15, 1.55, 0.35]} scale={[1.2, 1.5, 1]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ff69b4" emissive="#ff69b4" emissiveIntensity={0.4} />
        </mesh>

        {/* Eye highlights */}
        <mesh position={[-0.12, 1.6, 0.4]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[0.12, 1.6, 0.4]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
        </mesh>
      </group>

      {/* Small cute nose */}
      <mesh position={[0, 1.45, 0.38]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial color="#ffb3ac" />
      </mesh>

      {/* Cute smile */}
      <mesh position={[0, 1.35, 0.37]} rotation={[0, 0, 0]} scale={[1.5, 0.3, 1]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#ff8a80" />
      </mesh>

      {/* Body - simple and clean like before */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.28, 0.38, 0.8, 32]} />
        <meshStandardMaterial color="#ff69b4" roughness={0.2} />
      </mesh>

      {/* Skirt - simple cone like before */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.45, 0.35, 0.3, 32]} />
        <meshStandardMaterial color="#ff1493" roughness={0.2} />
      </mesh>

      {/* Left Arm - back to original position */}
      <group ref={leftArmRef} position={[-0.45, 0.9, 0]}>
        <mesh rotation={[0, 0, 0.2]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
          <meshStandardMaterial color="#ffdbac" />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.3, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#ffdbac" />
        </mesh>
      </group>

      {/* Right Arm (Waving) - back to original position */}
      <group ref={rightArmRef} position={[0.45, 0.9, 0]}>
        <mesh>
          <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
          <meshStandardMaterial color="#ffdbac" />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.3, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#ffdbac" />
        </mesh>
      </group>

      {/* Legs - back to original */}
      <mesh position={[-0.12, -0.4, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>
      <mesh position={[0.12, -0.4, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 16]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>

      {/* Cute shoes */}
      <mesh position={[-0.12, -0.75, 0.08]}>
        <capsuleGeometry args={[0.08, 0.15, 4, 8]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      <mesh position={[0.12, -0.75, 0.08]}>
        <capsuleGeometry args={[0.08, 0.15, 4, 8]} />
        <meshStandardMaterial color="#000" />
      </mesh>

      {/* Hair accessories */}
      <mesh position={[-0.25, 1.7, 0.2]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#ff69b4" emissive="#ff69b4" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.25, 1.7, 0.2]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#ff69b4" emissive="#ff69b4" emissiveIntensity={0.5} />
      </mesh>

      {/* Speech Bubble */}
      <Html position={[-0.8, 2.4, 0]} center>
        <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl p-3 shadow-2xl border border-white/20 backdrop-blur-sm">
          <p className="text-white font-semibold text-sm whitespace-nowrap">Hi! Welcome to my portfolio! 💖✨</p>
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-pink-400"></div>
        </div>
      </Html>
    </group>
  )
}
