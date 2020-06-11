import React, { Fragment } from "react";

const Cita = ({consulta, eliminarConsulta}) => {
    return(
      <Fragment>
       <div className="cita">
         <p>Mascota: <span>{consulta.mascota}</span></p>
         <p>Dueño: <span>{consulta.dueño}</span></p>
         <p>Fecha: <span>{consulta.fecha}</span></p>
         <p>Hora: <span>{consulta.hora}</span></p>
         <p>Sintomas: <span>{consulta.sintomas}</span></p>

         <button className="button-primary eliminar u-full-width"
          onClick={ () => eliminarConsulta(consulta.id) }
         >
           Eliminar &times;
         </button>
       </div> 
      </Fragment>
    );
}

export default Cita;