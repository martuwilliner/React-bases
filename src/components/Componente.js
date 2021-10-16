import React, {Component} from 'react';


/* componente basado en clases */
/* class Componente extends Component {
    render() {
        return <h2>{this.props.msg}</h2>
    }
} */



/* opcion 2: componente funcional */
/* function Componente(props) {
    return <h2>{props.msg}</h2>
} */




/* funcion expresada */

const Componente = props => <h2>{props.msg}</h2>

export default Componente;