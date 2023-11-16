import React from "react";
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

export function ExitBtn() {
  return (
    <>
      <button className="exit-btn">Salir</button>
    </>
  );
}
