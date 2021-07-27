import logo from './logo.svg';
import './App.css';

function App() {
  const Formulario = () => {
    return (
      <div className="translucent-form-overlay">
      <form>
        <h3>Crear Cita</h3>
        <div className="">
          <label>Nombre Mascota
            <input type="text" name="keyword" placeholder="Nombre de tu Mascota" />
          </label>
        </div>
        <div className="">
          <label>Nombre Dueño
            <input type="text" name="keyword" placeholder="Nombre del Dueño de la Mascota" />
          </label>
        </div>
        <div className="">
          <label>Fecha
            <input type="date" name="keyword" />
          </label>
        </div>
        <div className="">
          <label>Hora
            <input type="time" name="keyword" />
          </label>
        </div>
        <div className="">
          <label>Tipo de Mascota
            <select name="status" type="text">
              <option>Perro</option>
              <option value="rent">Gato</option>
              <option value="buy">Pajaro</option>
            </select>
          </label>
        </div>
        <div className="">
          <label>Sintomas
            <textarea placeholder="Escribe los sintomas de tu mascota aquí" rows="4"></textarea>
          </label>
        </div>
        <button type="button" className="primary button expanded search-button">
          Crear Cita
        </button>
      </form>
    </div>
    )
  }

  return (
    <div className="Main">
        <div className="Header"><h1>Administrador de Pacientes</h1></div>
        <div className="Izquierda">
          <Formulario />
        </div>
        <div className="Derecha">
          Hola
        </div>
    </div>
  );
}

export default App;
