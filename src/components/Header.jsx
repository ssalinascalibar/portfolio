import React from "react";

//css
import "../assets/css/header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
    
          
            <div className="header-text">
              <p data-aos="fade-down" data-aos-duration="1000">
                Hola, mi nombre es
              </p>
              <h1 data-aos="fade" data-aos-duration="3000">
                <span className="span-header">Sebastian Salinas.</span>
                <br />
                Soy desarrollador Front End y te invito a visitar mi portafolio.
              </h1>
              <p data-aos="fade" data-aos-duration="3000">
                Aquí podrás encontrar parte de mis trabajos y proyectos
                realizados en el área del desarrollo Web.
              </p>
            </div>
          
        
      </div>
    </header>
  );
}
