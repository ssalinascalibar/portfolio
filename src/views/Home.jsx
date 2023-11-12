import React from "react";
import AboutMe from "../components/AboutMe";

//components
//import CardsProjects from "../components/CardsProjects";
import Header from "../components/Header";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section id="sobre-mi">
          <AboutMe />
        </section>
        <section id="mis-proyectos">
          <Projects />
        </section>
      </main>
    </div>
  );
}
