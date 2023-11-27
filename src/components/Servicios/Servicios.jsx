import React from 'react'
import './Servicios.css'
import Ambulancia from '../../assets/img/Servicios/ambulancia.png'
import Medica from '../../assets/img/Servicios/medico.png'
import Desastres from '../../assets/img/Servicios/desastres.jpeg'

const Servicios = () => {
  return (
    <div>
        <div className='contenedor_nuestros_servicios'>
            <h1 className='titulo_servicio'>Nuestros Servicios</h1>
            <div className='contenedor_ambulancia'>
                <div><img className='img_ambulancia' src={Ambulancia} alt="" /></div>
                <div className='inf_ambulancia'>
                    <h4>Ambulancias</h4>
                    <p>Cruz Roja Mexicana Delegación Huejutla cuenta con diversos servicios de ambulancia:</p>
                    <h5>Urgencias:</h5>
                    <p>Es aquel que se otorga de forma gratuita, derivado de las llamadas de emergencias reportadas
                    al 911. Tiene como objetivo atender las situaciones que pongan en peligro a la ciudadanía,
                    ya sea por accidentes o desastres naturales.</p>
                    <h5>Traslados Programados:</h5>
                    <p>Es el servicio que se ofrece a pacientes que requieren ser trasladados a instituciones médicas
                    y/o laboratorios y que no están catalogados como urgencias. En este servicio se aplica una cuota
                    de recuperación.</p>
                    <h5>Cobertura de Eventos:</h5>
                    <p>Es la contratación de una o más ambulancias, así como paramédicos altamente capacitados,
                    para respetar los lineamientos de Protección Civil que deben cumplir organizadores de eventos
                    masivos, públicos y privados.</p>
                </div>
            </div>

            <div className='contenedor_medicos'>
                <div className='inf_medico'>
                    <h4>Servicios Médicos</h4>
                    <p>Cruz Roja Mexicana Delegación Huejutla de Reyes cuenta con una base de médicos que ofrecen
                    sus servicios las 24 horas en Unidad Moderna y en horario de 8:00am a 8:00pm
                    en Unidad Huejutla de Reyes.</p>
                    <p>- Consulta Médica</p>
                    <p>- Toma de Presión</p>
                    <p>- Curaciones</p>
                    <p>- Certificados de Salud</p>
                    <p>- Inyeccciones</p>
                </div>
                <img className='img_medico' src={Medica} alt="" />
            </div>

            <div className='contenedor_desastres'>
                <div><img className='img_desastres' src={Desastres} alt="" /></div>
                <div className='inf_desastres'>
                    <h4>Atención a Desastres</h4>
                    <p>Esta área cuenta con personal especializado en Búsqueda y Rescate de Estructuras Colapsadas
                    (BREC), así como en el manejo de albergues, centros de acopio, localización y
                    búsqueda de familiares y evaluación de daños en inundaciones, sismos e incendios.</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Servicios