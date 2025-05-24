import React from 'react'
import { Link } from 'react-router-dom' 
import "./NavBar.css"
export default function NavBar() {
  return (
<div className="navbar-container">
    <nav className="navbar">
        <Link to="/" className="nav-link">Calculer</Link> 
        <Link to="/list" className="nav-link">List dossiers</Link>
    </nav>
</div>

  )
}
