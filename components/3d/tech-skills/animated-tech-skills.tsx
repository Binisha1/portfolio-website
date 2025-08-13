"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { ReactAtom } from "./react-atom"
import { NextJSLogo } from "./nextjs-logo"
import { FastAPILightning } from "./fastapi-lightning"
import { PythonSnake } from "./python-snake"
import { TypeScriptCube } from "./typescript-cube"
import { AIMLBrain } from "./ai-ml-brain"

export function AnimatedTechSkills() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime
    // Main group rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <ReactAtom />
      <NextJSLogo />
      <FastAPILightning />
      <PythonSnake />
      <TypeScriptCube />
      <AIMLBrain />
    </group>
  )
}
