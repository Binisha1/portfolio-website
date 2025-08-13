import type React from "react"
import type * as THREE from "three"

export interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
  icon: React.ReactNode
}

export interface Skill {
  name: string
  color: string
}

export interface PersonFigureProps {
  ref: React.RefObject<THREE.Group>
  color: string
}
