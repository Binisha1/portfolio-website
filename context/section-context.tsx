"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

const SectionContext = createContext({
  activeSection: "",
  setActiveSection: (section: string) => {},
})

export const SectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState("")

  return <SectionContext.Provider value={{ activeSection, setActiveSection }}>{children}</SectionContext.Provider>
}

export const useSection = () => useContext(SectionContext)
