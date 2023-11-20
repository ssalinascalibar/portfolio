import React from "react";

//css
import "../assets/css/buttons.css";

export function ContactBtn() {
  return (
    <>
      <button className="contact-btn">
        <a
          href="mailto:sf.salinascalibar@gmail.com"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <i className="fa-solid fa-envelope"></i>
          Contáctame
        </a>
      </button>
    </>
  );
}

export function ProjectsBtn( { projects, setProjects, filterProjects, setFilterProjects }) {

  // const [filterButtons, setFilterButtons] = useState(null);

  const buttons = [
    {
      name: "All",
      value: "all"
    },
    {
      name: "App",
      value: "app"
    },
    {
      name: "Diseño",
      value: "diseño"
    },
    {
      name: "Ecommerce",
      value: "ecommerce"
    },
  ]

  const handleButton = (e) => {
    let typeButton = e.target.value;
    console.log(typeButton)
    typeButton !== "all"
    ? setFilterProjects(projects.filter(b => b.type === typeButton))
    : setFilterProjects(projects);
    console.log(filterProjects)
  }

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
        <button className="projects-btn" key={i} value={b.value} onClick={handleButton}>{b.name}</button>
      ))}
      {/* <button className="projects-btn" onClick={() => allProjects()}>Todos</button> */}
    </>
  );
}
