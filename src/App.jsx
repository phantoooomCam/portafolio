"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
// import Projects from "./components/Projects"
import Journey from "./components/Journey"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Loader from "./components/Loader"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Establecer siempre el modo oscuro
    document.body.className = "dark-mode"

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <div className="app" key="app">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            {/* Sección de Proyectos eliminada */}
            <Journey />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </AnimatePresence>
  )
}

export default App
