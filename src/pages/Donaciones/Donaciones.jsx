import React from 'react'
import './Donaciones.css'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import Nacional from '../../assets/img/Colectas/Colecta_Nacional.jpg'
import Desastres from '../../assets/img/Colectas/Colecta_Desastres.jpg'

const Donaciones = () => {
  return (
    <div>
        <Navbar/>
        <h3>Conoce Nuestras Causas</h3>
        <div className='contenedor_donaciones'>
            <div className='colecta'>
                <div><img className='img_colecta' src={Nacional} alt="" /></div>
                <div className='contenedor_titulo'><h5 className='titulo'>Colecta Nacional</h5></div>
                <div className='contenedor_narrativa'><p className='narrativa'>Una sola vez no basta #Dona+</p></div>
                <div className='btn_registro'>
                    <button className='btn_submit' type="submit">Donar Ahora</button>
                </div>
            </div>
            <div className='colecta'>
                <div><img className='img_colecta' src={Desastres} alt="" /></div>
                <div className='contenedor_titulo'><h5 className='titulo'>Fondos para la Atención de Desastres Naturales</h5></div>
                <div className='contenedor_narrativa'><p className='narrativa'>Cruz Roja Mexicana esta lista en todo momento.</p></div>
                <div className='btn_registro'>
                    <button className='btn_submit' type="submit">Donar Ahora</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Donaciones