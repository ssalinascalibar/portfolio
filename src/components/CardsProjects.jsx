import React from "react";
import { useState, useEffect } from "react";

//css
import cardProject from '../assets/css/cardProject.css'

export default function () {
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
        <h2>Mis proyectos</h2>
      <div className="row gy-5">
        {projects?.map((project, i) => (
          <div className="col-12 col-md-6 col-lg-4" key={i}>
            <div className="card" data-aos="fade-up" data-aos-duration="3000" style={{height: '100%'}}>
              <img src={project.img} className="card-img-top" alt="portfolio Sebastian Salinas"></img>
              <div className="card-body">
                <h5 className="card-title">{project.project_name}</h5>
                <p className="card-text">{project.desc}</p>
                <p className="card-text text-tech">{project.tech}</p>
                <a href={project.url_repo} rel="noreferrer" target="_blank" className="btn btn-primary my-3">
                  Ir al repositorio
                </a>
                <a href={project.url_deploy} rel="noreferrer" target="_blank" className="btn btn-primary">
                  Ver proyecto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
