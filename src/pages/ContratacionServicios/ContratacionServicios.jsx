import React from 'react'
import './ContratacionServicios.css'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'

const ContratacionServicios = () => {
  return (
    <div>
        <Navbar/>
            <h3>Contratación de Ambulancias para Traslados</h3>
            <div className='contenedor_servicios'>
                <form className='form_servicios' action="">
                    <div className='contenedor_buscador'>
                        <label className='label_folio'  htmlFor="">Folio del Paciente:</label>
                        <input className='btn_search' type="search" name="" id="" />  
                        <input className='btn_buscar' type="submit" value="Buscar" />
                    </div>
                    <div className='contenedor_datos'>
                        <div className='label_dato'>
                            <label htmlFor="">Nombre del Paciente:</label>
                        </div>
                        <div className='btn_dato'>
                            <input type="text" name="" id="" />
                        </div>
                    </div>

                    <div className='contenedor_datos'>
                        <div className='label_dato'>
                            <label htmlFor="">Apellido Paterno:</label>
                        </div>
                        <div className='btn_dato'>
                            <input type="text" name="" id="" />
                        </div>
                    </div>

                    <div className='contenedor_datos'>
                        <div className='label_dato'>
                            <label htmlFor="">Apellido Materno:</label>
                        </div>
                        <div className='btn_dato'>
                            <input type="text" name="" id="" />
                        </div>
                    </div>

                    <div className='contenedor_datos'>
                        <div className='label_dato'>
                            <label htmlFor="">Tipo de Traslado:</label>
                        </div>
                        <div className='btn_dato'>
                            <select className='btn_select' name="" id="">
                                <option value="">opcion 1</option>
                                <option value="">opcion 2</option>
                                <option value="">opcion 3</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className='contenedor_datos'>
                        <div className='label_dato'>
                            <label htmlFor="">Motivo de Traslado:</label>
                        </div>
                        <div className='btn_dato'>
                            <select className='btn_select' name="" id="">
                                <option value="">opcion 1</option>
                                <option value="">opcion 2</option>
                                <option value="">opcion 3</option>
                            </select>
                        </div>
                    </div>

                    <div className='contenedor_datos'>
                        <div className='label_dato'>
                            <label htmlFor="">Lugar a Trasladar:</label>
                        </div>
                        <div className='btn_dato'>
                            <select className='btn_select' name="" id="">
                                <option value="">opcion 1</option>
                                <option value="">opcion 2</option>
                                <option value="">opcion 3</option>
                            </select>
                        </div>
                    </div >

                    <div className='contenedor_datos'>
                        <div className='label_dato'>
                            <label htmlFor="">Fecha de Traslado:</label>
                        </div>
                        <div className='btn_dato'>
                            <input type="date" name="" id="" />
                        </div>
                    </div>
                        
                    <div className='contenedor_datos'>
                        <div className='label_dato'>
                            <label htmlFor="">Hora de Traslado:</label>
                        </div>
                        <div className='btn_dato'>
                            <input type="time" name="" id="" />
                        </div>
                    </div>
                    <div className='contenedor_btn'>
                        <div className='btn_registro'>
                            <button className='btn_submit' type="submit">Contratar</button>
                        </div>
                        <div className='preguntas'>
                            <a className='pregunta' href="">Iniciar Sesión</a>
                        </div>
                        <div className='preguntas'>
                            <a className='pregunta' href="">¿No tienes una cuenta?</a>
                        </div>
                    </div>
                </form>
            </div>
        <Footer/>
    </div>
  )
}

export default ContratacionServicios