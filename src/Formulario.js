import React, { Fragment } from 'react';

const Formulario = ({cita, setCita }) => {
    const Handler = (event) => {
        setCita({...cita,[event.target.name]: event.target.value })
    }

    return (
        <Fragment>
            <form>
                <h3>Crear Cita</h3>
                <div className="">
                    <label>Nombre Mascota
                        <input type="text" name="nombre" placeholder="Nombre de tu Mascota" onChange={(e)=>Handler(e)}/>
                    </label>
                </div>
                <div className="">
                    <label>Nombre Dueño
                        <input type="text" name="propietario" placeholder="Nombre del Propietario de la Mascota" onChange={(e)=>Handler(e)}/>
                    </label>
                </div>
                <div className="">
                    <label>Fecha
                        <input type="date" name="fecha" onChange={(e)=>Handler(e)}/>
                    </label>
                </div>
                <div className="">
                    <label>Hora
                        <input type="time" name="hora" onChange={(e)=>Handler(e)}/>
                    </label>
                </div>
                <div className="">
                    <label>Tipo de Mascota
                        <select type="text" name="tipo"onChange={(e)=>Handler(e)}>
                            <option>Perro</option>
                            <option value="gato">Gato</option>
                            <option value="pajaro">Pajaro</option>
                        </select>
                    </label>
                </div>
                <div className="">
                    <label>Sintomas
                        <textarea name="sintomas" placeholder="Escribe los sintomas de tu mascota aquí" rows="4" onChange={(e)=>Handler(e)}></textarea>
                    </label>
                </div>
            </form>
        </Fragment>
    )
};

export default Formulario;