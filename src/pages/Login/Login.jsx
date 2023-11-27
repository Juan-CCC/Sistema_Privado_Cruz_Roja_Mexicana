import React from 'react'
import './Login.css'
import Navbar from '../../components/NavBar/Navbar'
import Personal from '../../assets/img/Login/personal.png'
import Footer from '../../components/Footer/Footer'

const Login = () => {
  return (
    <div>
      <Navbar/>
      <h3>Iniciar Sesión como:</h3>
      <div className='opciones'>
        <input className='btn' type="checkbox" name="Donador" id="" />Donador
        <input className='btn' type="checkbox" name="" id="" />Empleado/Voluntario
      </div>
      
      <div className='login_contenedor'>
          <form className='form_login' action="">
            <div className='img_login'><img className='img_personal' src={Personal} alt="" /></div>
            <div className='inf_login'>
              <div className='label'>
                <label  htmlFor="">Id Institucional</label>  
              </div>
              <div className='input'>
                <input type="text" />
              </div>
              <div className='label' >
                <label htmlFor="">Contraseña</label>
              </div>
              <div className='input'>
                <input type="password" name="" id="" />
              </div>
              <div className='btn_login'>
                <button className='btn_submit' type="submit">Iniciar Sesión</button>
              </div>
              <div className='preguntas'><a className='pregunta' href="">¿Se te olvido tu contraseña?</a></div>
              <div className='preguntas'><a className='pregunta' href="">¿No tienes una cuenta?</a></div>
              
            </div>
          </form>
        
        
      </div>
      <Footer/>
    </div>
  )
}

export default Login