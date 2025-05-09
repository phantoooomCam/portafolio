"use client"

import { motion } from "framer-motion"
import "./Hero.css"
import perfilImg from "../assets/libro.png"
import febaIcon from "../assets/feba_blanco.png"

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.6,
      },
    },
  }

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  }

  const febaIconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 1,
      },
    },
  }

  return (
    <section id="home" className="hero">
      <motion.div className="hero-container" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h1 variants={itemVariants}>Diego Flores Camarillo</motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Ingeniero en Informática & Desarrollador Full Stack
          </motion.p>
          <motion.div className="hero-company" variants={febaIconVariants}>
            <a href="https://febacode.com" target="_blank" rel="noopener noreferrer" className="company-link">
              <img src={febaIcon || "/placeholder.svg"} alt="FEBAcode" className="company-icon" />
              <span>Fundador de FEBAcode</span>
            </a>
          </motion.div>
          <motion.p className="hero-description" variants={itemVariants}>
            Desarrollo soluciones web y aplicaciones con tecnologías modernas que combinan diseño atractivo con
            funcionalidad robusta.
          </motion.p>
          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a href="#projects" className="btn" variants={buttonVariants} whileHover="hover" whileTap="tap">
              Ver Proyectos
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Contactar
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div className="hero-image" variants={imageVariants}>
          <motion.img
            src={perfilImg}
            alt="Diego Flores"
            className="profile-image"
            initial={{ rotate: -5 }}
            animate={{ rotate: 5 }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 5,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
