import React from "react";
import { useState, useEffect } from "react";

//css
import "../assets/css/projects.css";

//components
import { ProjectsBtn } from "./Buttons";
import ModalProjects from "./ModalProjects";

export default function Projects() {
  // Variable que contiene todos los proyectos
  const [projects, setProjects] = useState([]);

  // variable que contiene inicialmente todos los proyectos pero luego al activar onclick hará los filtros correspondientes
  const [filterProjects, setFilterProjects] = useState([]);

  const getProjects = async () => {
    const endPoint = "/projects.json";
    const res = await fetch(endPoint);
    const data = await res.json();

    setProjects(data);
    setFilterProjects(data);
    console.log(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="container">
      <h2>Mis Proyectos</h2>
      <div className="projects-btn-Wrap">
        <ProjectsBtn projects={projects} setProjects={setProjects} filterProjects={filterProjects} setFilterProjects={setFilterProjects} />
      </div>
      <ul className="projects-wrap" data-aos="fade" data-aos-duration="3000">
        {filterProjects?.map((p, i) => (
          <li key={i} id="project-list">
            <ModalProjects
              project_name={p.project_name}
              project_img={p.img}
              project_desc={p.desc}
              url_repo={p.url_repo}
              url_deploy={p.url_deploy}
              project_tech={p.tech}
              id_project={p.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
