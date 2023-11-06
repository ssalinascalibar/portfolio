import React from "react";
import AboutMe from "../components/AboutMe";

//components
//import CardsProjects from "../components/CardsProjects";
import Header from "../components/Header";
import SliderProjects from "../components/SliderProjects";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <AboutMe />
        </section>

        <section>
          <SliderProjects />
        </section>
      </main>
    </div>
  );
}
