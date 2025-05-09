"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import "./Journey.css"

const Journey = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const journeyItems = [
    {
      year: "Presente",
      title: "Fundador de FEBAcode",
      description:
        "Fundador de un startup especializado en desarrollo de aplicaciones web, plataformas de IA y desarrollo de software a medida para empresas y emprendedores.",
    },
    {
      year: "Presente",
      title: "R&R CONSULTANCY & SAFETY SERVICES",
      description:
        "Desarrollo de un servicio web para gestión de archivos, casos y herramientas de inteligencia, con frontend en React, backend en Python y una API en C#, utilizando PostgreSQL como base de datos para un almacenamiento eficiente.",
    },
    {
      year: "2024",
      title: "Desarrollo de UPII-Market",
      description:
        "Aplicación de entrega de comida desarrollada con HTML, CSS, JavaScript, Python, Flask y SQL Server.",
    },
    {
      year: "2024",
      title: "Desarrollo de School Management Application",
      description:
        "Aplicación de gestión escolar que permite la interacción entre estudiantes y profesores a través de una interfaz web responsiva.",
    },
    {
      year: "2023",
      title: "Desarrollo de U-Theatre",
      description:
        "Aplicación de gestión de teatro que administra obras, horarios y venta de boletos a través de una interfaz web responsiva.",
    },
    {
      year: "2023",
      title: "Desarrollo de BankCore",
      description:
        "Aplicación de escritorio para la gestión de entidades bancarias, permitiendo la administración de clientes, cuentas, etc.",
    },
  ]

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  }

  const timelineVariants = {
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
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? -50 : 50,
      y: 20,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  }

  return (
    <section id="journey" className="journey" ref={ref}>
      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Mi Trayectoria
      </motion.h2>

      <motion.div
        className="timeline"
        variants={timelineVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {journeyItems.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            variants={itemVariants}
            custom={index}
            whileHover="hover"
          >
            <motion.div
              className="timeline-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="timeline-year">{item.year}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Journey
