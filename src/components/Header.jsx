import React from 'react'

//css
import header from '../assets/css/header.css'

export default function Header() {
  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="header-text">
                        <p>Hola, soy</p>
                        <h1><span className="span-header">Sebastian Salinas.</span><br/>Te invito a visitar mi portfolio</h1>
                        <p>Aquí podrás encontrar parte de mis trabajos y proyectos realizados en el área del desarrollo Web</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
