import React from 'react'
import './Registro.css'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'

const Registro = () => {
  return (
    <div>
      <Navbar/>
        <h3>Registrarse como:</h3>
        <div className='opciones'>
          <input className='btn' type="checkbox" name="Donador" id="" />Donador
          <input className='btn' type="checkbox" name="" id="" />Empleado/Voluntario
        </div>
        <div className='contenedor_registro'>
          <form className='form_registro' action="">
            <div className='mini_contenedor'>
              <div className='label'>
                <label  htmlFor="">Nombre:</label>  
              </div>
              <div className='txt_input'>
                <input type="text" />
              </div>
            </div>
            
            <div className='mini_contenedor'>
              <div className='label'>
                <label  htmlFor="">Apellido Paterno:</label>  
              </div>
              <div className='txt_input'>
                <input type="text" />
              </div>
            </div>

            <div className='mini_contenedor'>
              <div className='label'>
                <label  htmlFor="">Apellido Materno:</label>  
              </div>
              <div className='txt_input'>
                <input type="text" />
              </div>
            </div>

            <div className='mini_contenedor'>
              <div className='label'>
                <label  htmlFor="">Id Institucional:</label>  
              </div>
              <div className='txt_input'>
                <input type="text" />
              </div>
            </div>
            
            <div className='mini_contenedor'>
              <div className='label'>
                <label  htmlFor="">Correo Electronico:</label>  
              </div>
              <div className='txt_input'>
                <input type="text" />
              </div>
            </div>

            <div className='mini_contenedor'>
              <div className='label'>
                <label  htmlFor="">Contraseña:</label>  
              </div>
              <div className='txt_input'>
                <input type="text" />
              </div>
            </div>

            <div className='mini_contenedor'>
              <div className='label'>
                <label  htmlFor="">Confirmar Contraseña:</label>  
              </div>
              <div className='txt_input'>
                <input type="text" />
              </div>
            </div>
            
            <div className='mini_contenedor'>
              <div className='label'>
                <label  htmlFor="">Pregunta Secreta:</label>  
              </div>
              <div className='txt_input'>
                <input type="text" />
              </div>
            </div>

            <div className='mini_contenedor'>
              <div className='label'>
                <label  htmlFor="">Respuesta:</label>  
              </div>
              <div className='txt_input'>
                <input type="text" />
              </div>
            </div>

            <div className='contenedor_final'>
              <div className='contenedor_terminos'>
                  <input type="checkbox" name="btn_Terminos" id="" />
                  <a className='termino' href="">Terminos y Condiciones</a>
              </div>

              <div className='btn_registro'>
                <button className='btn_submit' type="submit">Registrar</button>
              </div>
            </div>
            
          </form>
        </div>
      <Footer/>
    </div>
  )
}

export default Registro