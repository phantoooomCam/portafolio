"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import "./About.css"
import febaLogo from "../assets/feba_completo_blanco.png"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.1 * i,
      },
    }),
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.3,
      },
    },
  }

  return (
    <section id="about" className="about" ref={ref}>
      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Sobre Mí
      </motion.h2>

      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="about-text" variants={contentVariants}>
          <p>
            Soy un Ingeniero en Informática con experiencia en desarrollo web y aplicaciones. Actualmente trabajo en R&R
            CONSULTANCY & SAFETY SERVICES, donde he desarrollado servicios web para gestión de archivos, casos y
            herramientas de inteligencia.
          </p>
          <p>
            Soy fundador de <strong>FEBAcode</strong>, un startup especializado en desarrollo de aplicaciones web,
            plataformas de IA y desarrollo de software a medida para empresas y emprendedores.
          </p>
          <motion.div className="company-logo-container" variants={logoVariants}>
            <a href="https://febacode.com" target="_blank" rel="noopener noreferrer" className="company-logo-link">
              <img src={febaLogo || "/placeholder.svg"} alt="FEBAcode Logo" className="company-logo" />
            </a>
          </motion.div>
          <p>
            Mi enfoque combina un sólido conocimiento técnico con una pasión por crear soluciones elegantes y
            eficientes. Me especializo en el desarrollo full stack, utilizando tecnologías como React, Python y bases de
            datos SQL.
          </p>
          <p>
            Estoy constantemente aprendiendo y mejorando mis habilidades para mantenerme al día con las últimas
            tendencias y tecnologías en el campo del desarrollo.
          </p>
        </motion.div>

        <div className="about-info">
          <motion.div
            className="info-item"
            variants={cardVariants}
            custom={1}
            whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
          >
            <h3>Educación</h3>
            <div className="education-item">
              <h4>Ingeniería en Informática</h4>
              <p>
                Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas – IPN UPIICSA
              </p>
              <p className="date">Presente</p>
            </div>
            <div className="education-item">
              <h4>Técnico en Telecomunicaciones</h4>
              <p>Centro de Estudios Científicos y Tecnológicos - IPN</p>
              <p className="date">2018 - 2021</p>
            </div>
          </motion.div>

          <motion.div
            className="info-item"
            variants={cardVariants}
            custom={2}
            whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
          >
            <h3>Contacto</h3>
            <ul className="contact-list">
              <li>
                <span className="contact-label">Email:</span>
                <a href="mailto:bigocam123@gmail.com">bigocam123@gmail.com</a>
              </li>
              <li>
                <span className="contact-label">GitHub:</span>
                <a href="https://github.com/phantoooomCam" target="_blank" rel="noopener noreferrer">
                  github.com/phantoooomCam
                </a>
              </li>
              <li>
                <span className="contact-label">LinkedIn:</span>
                <a href="https://linkedin.com/in/diego-camarillo-20a4a420a" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/diego-camarillo-20a4a420a
                </a>
              </li>
              <li>
                <span className="contact-label">Teléfono:</span>
                <a href="tel:+525571915854">+52 55-71-91-58-54</a>
              </li>
              <li>
                <span className="contact-label">FEBAcode:</span>
                <a href="https://febacode.com" target="_blank" rel="noopener noreferrer">
                  febacode.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
