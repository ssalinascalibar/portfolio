import React from 'react'

//css
import '../assets/css/footer.css'

export default function Footer() {

// variable contiene el año en curso,
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="contact">
        <a href="https://www.linkedin.com/in/sebastian-salinas-calibar-9b070a23a/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/ssalinascalibar" target="_blank"><i className="fa-brands fa-github"></i></a>
        <a href="mailto:sf.salinascalibar@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i></a>
      </div>
      <p className="text-center">&copy; {year} Sebastian Salinas Calibar</p>
    </footer>
  )
}
