import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ErrorComponent from './Error';

const Pregunta = ({setPresupuesto, setRestante}) => {
    // State para guardar el monto total de presupuesto
    const [montoPresupuesto, setMontoPresupuesto] = useState(0);
    const [error, setError] = useState(false);

    // Función que lee el presupuesto y guarda en state montoPresupuesto
    const guardarPresupuesto = (e) => {        
        setMontoPresupuesto(
            parseInt(e.target.value, 10)
        );
    }

    // Funcion que se lanza en el submit 
    const agregarPresupuesto = (e) => {
        e.preventDefault();
        
        // Validar monto de presupuesto
        if(montoPresupuesto < 1 || isNaN(montoPresupuesto)){
            setError(true)
            setMontoPresupuesto(0);
            return;
        }

        setError(false);
        setPresupuesto(montoPresupuesto);
        setRestante(montoPresupuesto);        
    }

    return (
        <div className="animate__animated animate__fadeIn">
            <h2>Coloca tu presupuesto</h2>

            {error ? <ErrorComponent mensaje={"Presupuesto debe ser mayor a cero"}/> : null}  

            <form onSubmit={agregarPresupuesto}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={guardarPresupuesto}                    
                />
                <input
                    type="submit"
                    value="Definir presupuesto"
                    className="button-primary u-full-width"
                />
            </form>
        </div>
    );
}

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired, 
    setRestante: PropTypes.func.isRequired
}
 
export default Pregunta;