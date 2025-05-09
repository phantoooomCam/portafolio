"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./Header.css"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const navVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    exit: {
      x: 20,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  }

  const logoVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const headerVariants = {
    initial: { y: -100 },
    animate: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.2,
      },
    },
  }

  return (
    <motion.header
      className={`header ${isScrolled ? "scrolled" : ""}`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="header-container">
        <motion.div className="logo" variants={logoVariants} initial="initial" animate="animate">
          <a href="#home">Diego Flores</a>
        </motion.div>

        <nav className="desktop-nav">
          <ul className="nav-list">
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#about">Sobre Mí</a>
            </li>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <a href="#journey">Trayectoria</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>

        <div className="nav-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? "active" : ""}`}></div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className={`mobile-nav ${menuOpen ? "open" : ""}`}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="nav-list">
                <motion.li variants={itemVariants}>
                  <a href="#home" onClick={() => setMenuOpen(false)}>
                    Inicio
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a href="#about" onClick={() => setMenuOpen(false)}>
                    Sobre Mí
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a href="#skills" onClick={() => setMenuOpen(false)}>
                    Habilidades
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a href="#journey" onClick={() => setMenuOpen(false)}>
                    Trayectoria
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a href="#contact" onClick={() => setMenuOpen(false)}>
                    Contacto
                  </a>
                </motion.li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
