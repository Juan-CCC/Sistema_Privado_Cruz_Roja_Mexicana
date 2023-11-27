import React from 'react'
import './Inicio.css'
import Emergencia from '../../assets/img/Emergencia.png'
import Navbar from '../../components/NavBar/Navbar'
import ImgPrincipal from '../../assets/img/principal.png'
import Work from '../../assets/img/Servicios/work-6.jpeg'
import Work2 from '../../assets/img/Servicios/work-7.jpeg'
import Work3 from '../../assets/img/Servicios/work-8.jpeg'
import Footer from '../../components/Footer/Footer'
import Servicios from '../../components/Servicios/Servicios'


const Inicio = () => {
  return (
    <>
      <Navbar/>
      <div className='Principal'>
        <div className='contenerdor'>
          <div className='btn_Emergencia'><a href="/"><img src={Emergencia} alt="Emergencia" /></a></div>
          <h3 className='eslogan'>Todos los dias la Cruz Roja Mexicana es protagonista de una historia en el que la vida triunfa.</h3>
        </div>
        <div className='Img_Principal'><img className='prin' src={ImgPrincipal} alt="principal" /></div>
      </div>
      <Servicios/>
      <div className='Servicios'>
        <h1 className='Apoyo'>Apoyos a la Comunidad</h1>
        <div className='Works'>
          <div className='Img_contenedor'><img className='work' src={Work} alt="" /></div>
          <div className='Img_contenedor'><img className='work' src={Work2} alt="" /></div>
          <div className='Img_contenedor'><img className='work' src={Work3} alt="" /></div>
        </div>
        
      </div>
      <Footer/>
    </>
  )
}

export default Inicio