"use client"

import { Float, Box, Torus, Text } from "@react-three/drei"

export function FloatingCodeElements() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Text position={[-3, 1, -1]} fontSize={0.3} color="#61dafb" anchorX="center" anchorY="middle">
          React
        </Text>
      </Float>

      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
        <Text position={[-2, 0.5, -0.5]} fontSize={0.25} color="#9c27b0" anchorX="center" anchorY="middle">
          AI/ML
        </Text>
      </Float>

      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
        <Text position={[-3.5, -0.5, 0]} fontSize={0.28} color="#009688" anchorX="center" anchorY="middle">
          FastAPI
        </Text>
      </Float>

      <Float speed={1} rotationIntensity={0.3} floatIntensity={2}>
        <Box position={[-1.5, -1, 1]} args={[0.3, 0.3, 0.3]}>
          <meshStandardMaterial color="#e74c3c" metalness={0.8} roughness={0.2} />
        </Box>
      </Float>

      <Float speed={1.8} rotationIntensity={1} floatIntensity={1}>
        <Torus position={[-4, 0, 1]} args={[0.2, 0.08, 16, 32]}>
          <meshStandardMaterial color="#f39c12" metalness={0.6} roughness={0.3} />
        </Torus>
      </Float>
    </>
  )
}
