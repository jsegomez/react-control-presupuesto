import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import ErrorComponent from './Error';
import shortid from 'shortid';

const Formulario = ({setPresupuesto, listaGastos, calculoRestante, setGastos, restante}) => {

    // State para capturar el nombre del gaso
    const [nombreGasto, setNombreGasto] = useState('');
    // State para capturar el monto del gasto
    const [montoGasto, setMontoGasto] = useState('');

    // State para manejar errores
    const [error, setError] = useState(false);

    // Función que agrega un gasto
    const agregarGasto = (e) => {
        e.preventDefault();
        // Validamos los datos del gasto
        if(montoGasto < 1 || nombreGasto.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        // Construimos el gasto
        const gasto = {
            id: shortid.generate(),
            nombre: nombreGasto,
            monto: montoGasto,            
        }        

        // Pasamos el gasto al componente principal
        if(gasto.monto > restante){
            alert('Gasto sobrepasa presupuesto');
            setMontoGasto('');
            return;
        }

        listaGastos(gasto);
        calculoRestante(montoGasto);

        // Reiniciamos el formulario
        setNombreGasto('')
        setMontoGasto('')
    }

    // Funcion para reiniciar presupuesto
    const resetPresupuesto = (e) =>{
        setPresupuesto(0);
        setGastos([]);
        return;
    };

    return(
        <Fragment>            
            <form onSubmit={agregarGasto}>
                <h2>Agrega tus gastos aquí</h2>
                { error ? <ErrorComponent mensaje="Favor agregar nombre y monto del gasto"/> : null }

                <div className="campo">
                    <label>Nombre del gasto</label>
                    <input 
                        type="text"
                        className="u-full-width"
                        placeholder="Ejemplo: Transporte"
                        value={nombreGasto}
                        onChange={e => setNombreGasto(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label>Monto del gasto</label>
                    <input 
                        type="number"
                        className="u-full-width"
                        placeholder="Monto del gasto"
                        value={montoGasto}
                        onChange={e => setMontoGasto(parseInt(e.target.value))}
                    />
                </div>
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar gasto"                    
                />
            </form>

            <button className="btn-sm" onClick={resetPresupuesto}>
                Cambiar presupuesto
            </button>
        </Fragment>
    ); 
}

Formulario.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    listaGastos: PropTypes.func.isRequired,
    calculoRestante: PropTypes.func.isRequired,
    setGastos: PropTypes.func.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default Formulario;