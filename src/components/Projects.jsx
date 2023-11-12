import React from "react";
import { useState, useEffect } from "react";

//css
import "../assets/css/projects.css";
import ModalProjects from "./ModalProjects";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const endPoint = "/projects.json";
    const res = await fetch(endPoint);
    const data = await res.json();

    setProjects(data);
    console.log(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="container">
      <h2>Mis Proyectos</h2>
      <ul className="projects-wrap" data-aos="fade" data-aos-duration="3000">
        {projects?.map((p, i) => (
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
