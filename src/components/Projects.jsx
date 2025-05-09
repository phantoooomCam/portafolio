"use client"

import { useState } from "react"
import "./Projects.css"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "UPII-Market",
      description:
        "Aplicación de entrega de comida desarrollada con HTML, CSS, JavaScript, Python, Flask y SQL Server.",
      category: "web",
      year: "2024",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "School Management Application",
      description:
        "Aplicación de gestión escolar que permite la interacción entre estudiantes y profesores a través de una interfaz web responsiva.",
      category: "web",
      year: "2024",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "U-Theatre",
      description:
        "Aplicación de gestión de teatro que administra obras, horarios y venta de boletos a través de una interfaz web responsiva.",
      category: "web",
      year: "2023",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "Port Scanner",
      description:
        "Aplicación de escritorio que escanea dispositivos en una LAN mostrando la dirección IPv4, MAC y analiza sus puertos.",
      category: "desktop",
      year: "2023",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      title: "BankCore",
      description:
        "Aplicación de escritorio para la gestión de entidades bancarias, permitiendo la administración de clientes, cuentas, etc.",
      category: "desktop",
      year: "2023",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      title: "Client/Server Messaging",
      description: "Programa de mensajería entre cliente y servidor utilizando sockets de Python.",
      category: "networking",
      year: "2022",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Mis Proyectos</h2>

      <div className="project-filters">
        <button
          className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          Todos
        </button>
        <button
          className={`filter-btn ${activeFilter === "web" ? "active" : ""}`}
          onClick={() => setActiveFilter("web")}
        >
          Web
        </button>
        <button
          className={`filter-btn ${activeFilter === "desktop" ? "active" : ""}`}
          onClick={() => setActiveFilter("desktop")}
        >
          Escritorio
        </button>
        <button
          className={`filter-btn ${activeFilter === "networking" ? "active" : ""}`}
          onClick={() => setActiveFilter("networking")}
        >
          Redes
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
              <div className="project-overlay">
                <div className="project-category">{project.category}</div>
                <div className="project-year">{project.year}</div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="project-btn">Ver Detalles</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
