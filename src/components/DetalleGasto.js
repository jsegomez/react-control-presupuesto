import React from 'react';
import PropTypes from 'prop-types';

const DetalleGasto = ({gasto}) => {
    return (
        <li className="gastos">
            <p>
                {gasto.nombre}
                <span className="gasto">
                    ${gasto.monto}
                </span>
            </p>
        </li>
    );
}

DetalleGasto.propTypes = {
    gasto: PropTypes.object.isRequired
}
 
export default DetalleGasto;