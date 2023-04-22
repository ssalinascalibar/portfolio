import React from 'react'

//css
import footer from '../assets/css/footer.css'

export default function Footer() {

// variable contiene el año en curso,
  const year = new Date().getFullYear();

  return (
    <footer>
        <p className="text-center">&copy; {year} Sebastian Salinas Calibar</p>
    </footer>
  )
}
