import React, {useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
const { uuid } = require('uuidv4');

function App() {
  const [id, setId] = useState([]);
  const [cita, setCita] = useState({
    nombre: "",
    propietario: "",
    fecha: "",
    hora: "",
    tipo: "",
    sintomas: ""
  });

  useEffect(() => {
    if (localStorage.key(0) === null) {
      console.log("No has guardado nada");
    } else {
      for (let index = 0; index < 10; index++) {
      let resultado = localStorage.key(index)
      console.log("Esto es desde" + resultado);
      setId(id =>[...id, resultado]);
      
      }
    }
    
  }, [])

  const Citas = id.map((cadaId, index) => {
    console.log("Hola desde Citas" + cadaId);
    const cat = JSON.parse(localStorage.getItem(cadaId));
    try {
      return (
      <div className="cards" key={cadaId}>
        <h3>Nombre de la Mascota: {cat["nombre"]}</h3>
        <div className="dentro">
          <p>Dueño: {cat["propietario"]}</p>
          <p>Tipo de Mascota: {cat["tipo"]}</p>
          <p>Sintomas: {cat["sintomas"]}</p>
          <p>Dia de la Cita: {cat["fecha"]}</p>
          <p>Horario: {cat["hora"]}</p>
        </div>
        <button type="button" className="alert button small" id={cadaId} onClick={(e)=>{HandlerBorrar(e)}}> Cancelar Cita </button>
    </div>
      )
    }catch(error){
      return (
        <div></div>
      )
    }
    
  })

  const HandlerEnvio = (event) => {
    event.preventDefault();
    let idx = String(uuid());
    setId([...id, idx]);
    localStorage.setItem(idx, JSON.stringify(cita));
  }
  
  const HandlerBorrar = (event) => {
    console.log(event.target.id);
    const nuevoId = id.filter(id=>id!==event.target.id)
    setId(nuevoId);
    localStorage.removeItem(event.target.id)
  }

  const titulo = id.length === 0 ? 'No hay citas' : 'Administra tus Citas';

  return (
    <div className="Main">
        <div className="Header"><h1>Administrador de Pacientes</h1></div>
        <div className="Izquierda">
        <Formulario cita={cita} setCita={setCita}/>
        <button type="button" className="primary button expanded search-button" onClick={(e) => HandlerEnvio(e)}>
            Crear Cita
        </button>
        </div>
      <div className="Derecha">
        <h3>Citas Agendadas</h3>
        <p>Tienes: {titulo} </p>
        {Citas}
        </div>
    </div>
  );
}

export default App;
