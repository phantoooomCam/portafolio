"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import "./Skills.css"
import {
  FaPython,
  FaJsSquare,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaReact,
  FaAngular,
  FaAws,
  FaLinux,
} from "react-icons/fa"
import { SiTypescript, SiCplusplus, SiFlask, SiDjango, SiMysql, SiPostgresql } from "react-icons/si"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: "Lenguajes de Programación",
      skills: [
        { name: "Python", icon: <FaPython size={28} color="#3776AB" /> },
        { name: "JavaScript", icon: <FaJsSquare size={28} color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript size={28} color="#3178C6" /> },
        { name: "Java", icon: <FaJava size={28} color="#ED8B00" /> },
        { name: "C/C++", icon: <SiCplusplus size={28} color="#00599C" /> },
        { name: "HTML", icon: <FaHtml5 size={28} color="#E34F26" /> },
        { name: "CSS", icon: <FaCss3Alt size={28} color="#1572B6" /> },
        { name: "SQL", icon: <FaDatabase size={28} color="#4479A1" /> },
      ],
    },
    {
      title: "Tecnologías & Frameworks",
      skills: [
        { name: "React.js", icon: <FaReact size={28} color="#61DAFB" /> },
        { name: "React Native", icon: <FaReact size={28} color="#61DAFB" /> },
        { name: "Angular", icon: <FaAngular size={28} color="#DD0031" /> },
        { name: "Flask", icon: <SiFlask size={28} color="#FFFFFF" /> },
        { name: "Django", icon: <SiDjango size={28} color="#092E20" /> },
        { name: "MySQL", icon: <SiMysql size={28} color="#4479A1" /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={28} color="#336791" /> },
        { name: "SQL Server", icon: <FaDatabase size={28} color="#CC2927" /> },
        { name: "AWS", icon: <FaAws size={28} color="#FF9900" /> },
        { name: "Linux", icon: <FaLinux size={28} color="#FCC624" /> },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.2 * i,
      },
    }),
  }

  const skillItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.05 * i,
      },
    }),
    hover: {
      y: -10,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  }

  const featureVariants = {
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

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Mis Habilidades
      </motion.h2>

      <motion.div
        className="skills-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.p className="skills-intro" variants={titleVariants}>
          A lo largo de mi formación y experiencia profesional, he adquirido conocimientos en diversas tecnologías y
          lenguajes de programación que me permiten desarrollar soluciones completas y eficientes.
        </motion.p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div key={index} className="skill-category" variants={categoryVariants} custom={index + 1}>
              <h3>{category.title}</h3>
              <div className="skill-icons">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    variants={skillItemVariants}
                    custom={skillIndex}
                    whileHover="hover"
                  >
                    <motion.div className="skill-icon" whileHover={{ rotate: 10 }}>
                      {skill.icon}
                    </motion.div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="why-choose-me">
          <motion.h3 variants={titleVariants}>¿Por qué trabajar conmigo?</motion.h3>
          <div className="features-grid">
            <motion.div className="feature-item" variants={featureVariants} custom={1} whileHover="hover">
              <div className="feature-icon">🚀</div>
              <h4>Desarrollo Eficiente</h4>
              <p>Optimizo el código para obtener el mejor rendimiento posible en todas las plataformas.</p>
            </motion.div>
            <motion.div className="feature-item" variants={featureVariants} custom={2} whileHover="hover">
              <div className="feature-icon">🔍</div>
              <h4>Atención al Detalle</h4>
              <p>Me enfoco en los pequeños detalles que hacen que un producto pase de bueno a excelente.</p>
            </motion.div>
            <motion.div className="feature-item" variants={featureVariants} custom={3} whileHover="hover">
              <div className="feature-icon">💡</div>
              <h4>Soluciones Creativas</h4>
              <p>Busco enfoques innovadores para resolver problemas complejos de manera elegante.</p>
            </motion.div>
            <motion.div className="feature-item" variants={featureVariants} custom={4} whileHover="hover">
              <div className="feature-icon">🔄</div>
              <h4>Adaptabilidad</h4>
              <p>Me adapto rápidamente a nuevas tecnologías y metodologías de trabajo.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
