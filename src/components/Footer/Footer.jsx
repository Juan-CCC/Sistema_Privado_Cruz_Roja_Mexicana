import React from 'react'
import './Footer.css'
import Facebook from '../../assets/img/Redes_Sociales/facebook.png'
import Instagram from '../../assets/img/Redes_Sociales/instagram.png'
import Twitter from '../../assets/img/Redes_Sociales/twitter.png'
import YouTube from '../../assets/img/Redes_Sociales/youtube.png'
import Logo from '../../assets/img/911.jpg'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='contenedor'><img className='logo_footer' src={Logo} alt="" /></div>
        
        <div className='contenedor'>
            <ul>
                <li className='li'><a href="">Aviso de Privacidad</a></li>
                <li className='li'><a href="">Terminos y Condiciones</a></li>
                <li className='li'><a href="">Politica de Cookies</a></li>
            </ul>
        </div>
        <div className='contenedor'>
            <h2>Dirección:</h2>
            <ul>
                <li className='li'><a href="">Santa Irene, 4300. Huejutla, Hgo.</a></li>
                <li className='li'>Telefono: <a href="">789 896 1940</a></li>
                
            </ul>
        </div>
        <div className='contenedor'>
            <h2>Siguenos en:</h2>
            <div className='icono_contenedor'>
                <ul>
                    <li className='li'><a href=""><img className='icono' src={Facebook} alt="facebook" /></a></li>
                    <li className='li'><a href=""><img className='icono' src={Instagram} alt="instagram" /></a></li>
                    <li className='li'><a href=""><img className='icono' src={Twitter} alt="twitter" /></a></li>
                    <li className='li'><a href=""><img className='icono' src={YouTube} alt="youtube" /></a></li>
                </ul>
            </div>
           
        </div>

    </div>
  )
}

export default Footer