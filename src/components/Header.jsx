import React from 'react'

//css
import header from '../assets/css/header.css'

import headerBkg from '../assets/img/bkg-header.jpg'

export default function Header() {
  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="header-text">
                    {/* <img src={headerBkg} alt="" /> */}
                    <h1>Hola,<br />soy <span className="span-header">Sebastian Salinas</span><br/><br/>te invito a visitar mi portfolio</h1>
                    <p>Aquí podrás encontrar parte de mis trabajos y proyectos realizados en el área del desarrollo Web</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
