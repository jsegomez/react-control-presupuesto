import React from 'react';
import PropTypes from 'prop-types';

import DetalleGasto from './DetalleGasto';

const Listado = ({gastos}) => {

    let titulo = gastos.length > 0 ? 'Lista de gastos' : 'No hay gastos agregados';
    
    return(
        <div className="gastos-realizados">
            <h2>{titulo}</h2>            
            {gastos.map(gasto =>                
                <DetalleGasto
                    key={gasto.id}
                    gasto={gasto}                    
                />
            )}
        </div>
    );
}

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}
 
export default Listado;