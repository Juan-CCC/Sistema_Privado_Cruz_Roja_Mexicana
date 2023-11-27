import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import Logo from '../../assets/img/logo.png'

const Navbar = () => {
  return (
  
        <nav >
          <div className='logo'><a href="/"><img src={Logo} alt="logo" /></a></div>
            
            <ul>
                <li><Link className='nav-link active' to="/">Inicio</Link></li>
                <li><Link className='nav-link active' to="/contratacionservicios">Contratación de Servicios</Link></li>
                <li><Link className='nav-link active' to="/donaciones">Donaciones</Link></li>
                <li><Link className='nav-link active' to="/tramites">Tramites</Link></li>
                
                <li><Link className='nav-link active' to="/registro">Registro</Link></li>
                <li><Link className='nav-link active' to="/iniciosesion">Inicio de Sesión</Link></li>
                <li><Link className='nav-link active' to="/iniciosesion">Quienes Somos</Link></li>
                <li><Link className='nav-link active' to="/iniciosesion">Ayuda y Soporte Tecnico</Link></li>
            </ul>
        </nav>
    
  )
}

export default Navbar