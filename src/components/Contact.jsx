"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import "./Contact.css"
import { Mail, Github, Linkedin, Phone } from "lucide-react"

const Contact = () => {
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
    hidden: { opacity: 0, y: 30 },
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

  const methodVariants = {
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
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  }

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Contacto
      </motion.h2>

      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="contact-info">
          <motion.h3 variants={titleVariants}>¡Hablemos!</motion.h3>
          <motion.p variants={contentVariants}>
            Estoy interesado en oportunidades de trabajo freelance o posiciones a tiempo completo. Si tienes alguna
            pregunta o propuesta, no dudes en contactarme a través de cualquiera de estos medios.
          </motion.p>

          <div className="contact-methods">
            <motion.div className="contact-method" variants={methodVariants} custom={1} whileHover="hover">
              <motion.div className="contact-icon" variants={iconVariants} whileHover="hover">
                <Mail size={24} />
              </motion.div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:bigocam123@gmail.com">bigocam123@gmail.com</a>
              </div>
            </motion.div>

            <motion.div className="contact-method" variants={methodVariants} custom={2} whileHover="hover">
              <motion.div className="contact-icon" variants={iconVariants} whileHover="hover">
                <Phone size={24} />
              </motion.div>
              <div className="contact-details">
                <h4>Teléfono</h4>
                <a href="tel:+525571915854">+52 55-71-91-58-54</a>
              </div>
            </motion.div>

            <motion.div className="contact-method" variants={methodVariants} custom={3} whileHover="hover">
              <motion.div className="contact-icon" variants={iconVariants} whileHover="hover">
                <Github size={24} />
              </motion.div>
              <div className="contact-details">
                <h4>GitHub</h4>
                <a href="https://github.com/phantoooomCam" target="_blank" rel="noopener noreferrer">
                  github.com/phantoooomCam
                </a>
              </div>
            </motion.div>

            <motion.div className="contact-method" variants={methodVariants} custom={4} whileHover="hover">
              <motion.div className="contact-icon" variants={iconVariants} whileHover="hover">
                <Linkedin size={24} />
              </motion.div>
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com/in/diego-camarillo-20a4a420a" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/diego-camarillo-20a4a420a
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
