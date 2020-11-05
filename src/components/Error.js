import React from 'react';
import PropTypes from 'prop-types';

const ErrorComponent = ({mensaje}) => {
    return (
        <p className="alert alert-danger error">
            {mensaje}
        </p>
    );
}

ErrorComponent.propTypes = {
    mensaje: PropTypes.string.isRequired
}
 
export default ErrorComponent;