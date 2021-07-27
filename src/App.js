import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
const { uuid } = require('uuidv4');

function App() {
  const [id, setId] = useState([])
  const [cita, setCita] = useState({
    nombre: "",
    propietario: "",
    fecha: "",
    hora: "",
    tipo: "",
    sintomas: ""
  });

  const Citas = id.map((cadaId, index) => {
    const cat = JSON.parse(localStorage.getItem(cadaId));
    console.log(cat);
    return (
      <Fragment>
        <h1>Hola {cat["nombre"]}</h1>
        {/* <h3>Nombre de la Mascota: {cat}</h3> */}
        {/* <p>Dueño: {cita["propietario"]}</p>
        <p>Tipo de Mascota: {cita["tipo"]}</p>
        <p>Sintomas: {cita["sintomas"]}</p>
        <p>Dia de la Cita: {cita["fecha"]}</p>
        <p>Horario: {cita["hora"]}</p>
        <button type="button" className="alert button small"> Cancelar Cita </button> */}
    </Fragment>
    )
  })

  // const Citas = () => {
  //   if (id != []) {
  //     for (let index = 0; index < id.length; index++) {
  //       const element = id[index];
        
  //     }
  //     return (
        // <Fragment>
        //   <h3>Nombre de la Mascota: {cita["nombre"]}</h3>
        //   <p>Dueño: {cita["propietario"]}</p>
        //   <p>Tipo de Mascota: {cita["tipo"]}</p>
        //   <p>Sintomas: {cita["sintomas"]}</p>
        //   <p>Dia de la Cita: {cita["fecha"]}</p>
        //   <p>Horario: {cita["hora"]}</p>
        //   <button type="button" className="alert button small"> Cancelar Cita </button>
        // </Fragment>
  //     )
  //   } else if (id==[]) {
  //     return (
  //       <div>Nada</div>
  //     )
  //   }else {
  //     return (
  //       <h1>Nada</h1>
  //     )
  //   }
  // }

  const HandlerEnvio = (event) => {
    event.preventDefault();
    let idx = String(uuid());
    setId([...id, idx]);
    localStorage.setItem(idx, JSON.stringify(cita));
  }

  const HandlerEnvio2 = (event) => {
    console.log(id);
  } 

  return (
    <div className="Main">
        <div className="Header"><h1>Administrador de Pacientes</h1></div>
        <div className="Izquierda">
        <Formulario cita={cita} setCita={setCita}/>
        <button type="button" className="primary button expanded search-button" onClick={(e) => HandlerEnvio(e)}>
            Crear Cita
        </button>
        <button type="button" className="primary button expanded search-button" onClick={(e) => HandlerEnvio2(e)}>
            Prueba
        </button>
        </div>
        <div className="Derecha">
        {Citas}
        </div>
    </div>
  );
}

export default App;
