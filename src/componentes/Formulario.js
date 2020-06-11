import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearConsulta}) => {
    //crear state
    const [consulta, agregarConsulta] = useState({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false)
   
    //funcion que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = e => {
        agregarConsulta({
            ...consulta,
            [e.target.name]: e.target.value
        })
    }

    //extraer valores
    const {mascota, dueño, fecha, hora, sintomas} = consulta;

    //cuando el usuario presiona agregar contulta
    const submitConsulta = (e) => {
        e.preventDefault();

        //validar
        if(mascota.trim() === '' || dueño.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''  ){
            actualizarError(true);
            return;
        }
        //eliminar el mensaje previo
        actualizarError(false);

        //asignar id
        consulta.id= uuidv4();

        //crear la consulta
        crearConsulta(consulta);

        //reiniciar el formulario
        agregarConsulta({
            mascota: '',
            dueño: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    }

    return(
      <Fragment>
          <h2>Crear Cita</h2>
          {error ? <p className="alerta-error">Todos los campos son obligatorios</p> 
           : null }
          <form
           onSubmit={submitConsulta}
          >
              <label>Nombre Mascota</label>
              <input 
                  type="text"
                  name="mascota"
                  className="u-full-width"
                  placeholder="Nombre Mascota"
                  onChange={actualizarState}
                  value={mascota}
              />
              <label>Nombre Dueño</label>
              <input 
                  type="text"
                  name="dueño"
                  className="u-full-width"
                  placeholder="Nombre Dueño"
                  onChange={actualizarState}
                  value={dueño}
              />
              <label>Fecha</label>
              <input 
                  type="date"
                  name="fecha"
                  className="u-full-width"
                  onChange={actualizarState}
                  value={fecha}
              />
              <label>Hora</label>
              <input 
                  type="time"
                  name="hora"
                  className="u-full-width"
                  onChange={actualizarState}
                  value={hora}
              />
              <label>Sìntomas</label>
              <textarea 
              className="u-full-width"
              name="sintomas"
              onChange={actualizarState}
              value={sintomas}
              ></textarea>
              <button
              type="submit"
              className="u-full-width button-primary"
              >Agregar</button>
          </form>
      </Fragment>
    );
}

export default Formulario;