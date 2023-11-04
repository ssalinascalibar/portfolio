import React from 'react'
import { useState, useEffect } from "react";

//css
import '../assets/css/sliderProjects.css';
import '../assets/css/cardProject.css';

//react slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SliderProjects() {

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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-wrap">
        <h1>Mis proyectos</h1>
        <Slider {...settings}>
        {projects?.map((project, i) => (
        <div className="card" key={i}>
            <img src={project.img} className="card-img-top" alt="portfolio Sebastian Salinas"></img>
              <div className="card-body">
                <h5 className="card-title">{project.project_name}</h5>
                <p className="card-text">{project.desc}</p>
                <p className="card-text text-tech">{project.tech}</p>
              </div>
              <div className="card-bottom">        
                <a href={project.url_repo} rel="noreferrer" target="_blank" className="btn btn-primary my-3">
                  Ir al repositorio
                </a>
                <a href={project.url_deploy} rel="noreferrer" target="_blank" className="btn btn-primary">
                  Ver proyecto
                </a>
              </div>
        </div>
        ))}
        </Slider>
    </div>
  )
}
