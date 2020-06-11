import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./componentes/Formulario";
import Cita from "./componentes/Cita";
 

function App() {
  //consultas en el local Storge
  let consultasIniciales = JSON.parse(localStorage.getItem('consultas'));
  if(!consultasIniciales){
    consultasIniciales = [];
  }

  //arreglos consultas
  const [consultas, guardarConsultas] = useState([]);

  //useEffect
  useEffect(() => {
    if(consultasIniciales) {
      localStorage.setItem('consultas', JSON.stringify(consultas))
    }else {
      localStorage.setItem('consultas', JSON.stringify([]));
    }
  }, [consultas] );

  //funcion que toma las consultas actuales y agrega una nueva
  const crearConsulta = (consulta) => {
    guardarConsultas([
      ...consultas,
      consulta
    ]);
  }

  //funcion que elimina una cita por su id
  const eliminarConsulta = (id) => {
    const nuevasConsultas = consultas.filter(consulta => consulta.id !== id);
    guardarConsultas(nuevasConsultas);
  }

  //mensaje condicional
  const titulo = consultas.length === 0 ? 'no hay citas' : 'Administra tus citas';

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>  
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearConsulta={crearConsulta}
           />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {consultas.map(consulta => (
              <Cita 
                key={consulta.id}
                consulta={consulta}
                eliminarConsulta={eliminarConsulta}
              />
            ))}
          </div> 
        </div>
      </div>  
    </Fragment>
  );
}

export default App;
