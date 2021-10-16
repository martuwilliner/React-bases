import React from 'react';
import PropTypes from 'prop-types';
/* algo que quiero enviar a otro componente */

export default function Propiedades (props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.boolean ? "Verdadero" : "Falso"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: "Las Props",
    
}

Propiedades.propTypes = { /* propType setea el tipo de propiedad que puede esperar cada propiedad */
    numero: PropTypes.number.isRequired, /* con isRequired hacemos que tenga que estar si o si */
}