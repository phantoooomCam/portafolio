"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import "./Footer.css"
import febaLogo from "../assets/feba_completo_blanco.png"

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  }

  const linkVariants = {
    hover: {
      color: "#646cff",
      x: 5,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.3 },
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  }

  return (
    <footer className="footer" ref={ref}>
      <motion.div
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="footer-top">
          <motion.div className="footer-info" variants={itemVariants}>
            <h3>Diego Flores</h3>
            <p>Ingeniero en Informática & Desarrollador Full Stack</p>

            <motion.div className="footer-company" variants={logoVariants} whileHover="hover">
              <a href="https://febacode.com" target="_blank" rel="noopener noreferrer">
                <img src={febaLogo || "/placeholder.svg"} alt="FEBAcode" className="footer-company-logo" />
              </a>
            </motion.div>

            <div className="footer-social-section">
              <h4>Redes Sociales</h4>
              <div className="social-buttons">
                <motion.a
                  href="https://github.com/phantoooomCam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                  whileHover={{
                    backgroundColor: "#646cff",
                    color: "white",
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300, damping: 10 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/diego-camarillo-20a4a420a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                  whileHover={{
                    backgroundColor: "#646cff",
                    color: "white",
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300, damping: 10 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>

          <div className="footer-sections">
            <motion.div className="footer-nav" variants={itemVariants}>
              <h4>Navegación</h4>
              <ul>
                <motion.li variants={itemVariants}>
                  <motion.a href="#home" variants={linkVariants} whileHover="hover">
                    Inicio
                  </motion.a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <motion.a href="#about" variants={linkVariants} whileHover="hover">
                    Sobre Mí
                  </motion.a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <motion.a href="#skills" variants={linkVariants} whileHover="hover">
                    Habilidades
                  </motion.a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <motion.a href="#projects" variants={linkVariants} whileHover="hover">
                    Proyectos
                  </motion.a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <motion.a href="#journey" variants={linkVariants} whileHover="hover">
                    Trayectoria
                  </motion.a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <motion.a href="#contact" variants={linkVariants} whileHover="hover">
                    Contacto
                  </motion.a>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div className="footer-contact" variants={itemVariants}>
              <h4>Contacto</h4>
              <p>bigocam123@gmail.com</p>
              <p>+52 55-71-91-58-54</p>
              <p>
                <a href="https://febacode.com" target="_blank" rel="noopener noreferrer">
                  febacode.com
                </a>
              </p>
            </motion.div>

            <motion.div className="footer-social" variants={itemVariants}>
              <h4>Redes Sociales</h4>
              <ul>
                <motion.li variants={itemVariants}>
                  <motion.a
                    href="https://github.com/phantoooomCam"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    GitHub
                  </motion.a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <motion.a
                    href="https://linkedin.com/in/diego-camarillo-20a4a420a"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    LinkedIn
                  </motion.a>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div className="footer-bottom" variants={itemVariants}>
          <p>&copy; {currentYear} Diego Flores Camarillo. Todos los derechos reservados.</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
