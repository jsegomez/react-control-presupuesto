import React from 'react';
import PropTypes from 'prop-types';

import { revisarPresupuesto } from '../helpers';


const ControlPresupuesto = ({presupuesto, restante}) => {
    return (
        <div>            
            <div className="alert alert-primary">
                Presupuesto: {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: {restante}
            </div>
        </div>
    );
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number,
    restante: PropTypes.number
}
 
export default ControlPresupuesto;