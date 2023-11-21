import React from "react";

//css
import "../assets/css/buttons.css";

export function ContactBtn() {
  return (
    <>
      <a
        href="mailto:sf.salinascalibar@gmail.com"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="contact-btn"
      >
        <i className="fa-solid fa-envelope"></i>
        Contáctame
      </a>
    </>
  );
}

export function ProjectsBtn({
  projects,
  setProjects,
  filterProjects,
  setFilterProjects,
}) {
  const buttons = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "App",
      value: "app",
    },
    {
      name: "Diseño",
      value: "diseño",
    },
    {
      name: "Ecommerce",
      value: "ecommerce",
    },
  ];

  const handleButton = (e) => {
    let typeProject = e.target.value;
    console.log(typeProject);
    typeProject !== "all"
      ? setFilterProjects(projects.filter((b) => b.type === typeProject))
      : setFilterProjects(projects);
    console.log(filterProjects);
  };

  // const allProjects = () => {
  //   // const results = projects.filter((e) => e.type === "ecommerce");
  //   // setProjects(results);
  // }
  // const appProjects = () => {
  //   const results = projects.filter((e) => e.type === "app");
  //   setProjects(results);
  // }
  // const desingProjects = () => {
  //   const resultado = projects.filter((e) => e.type === "diseño");
  //   setProjects(resultado);

  // }
  // const ecommerceProjects = () => {
  //   const results = projects.filter((e) => e.type === "ecommerce");
  //   setProjects(results);
  // }

  return (
    <>
      {buttons.map((b, i) => (
        <button
          className="projects-btn"
          key={i}
          value={b.value}
          onClick={handleButton}
        >
          {b.name}
        </button>
      ))}
      {/* <button className="projects-btn" onClick={() => allProjects()}>Todos</button> */}
    </>
  );
}
