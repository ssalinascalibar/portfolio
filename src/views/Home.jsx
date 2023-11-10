import React from "react";
import AboutMe from "../components/AboutMe";

//components
//import CardsProjects from "../components/CardsProjects";
import Header from "../components/Header";
import Projects from "../components/Projects";

//css
import '../assets/css/home.css';


export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <AboutMe />
        </section>
        <section className="mis-proyectos">
          <Projects />
        </section>
      </main>
    </div>
  );
}
