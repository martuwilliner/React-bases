import React, {Component} from 'react';

/* componente funcional. Este no puede tener estado */
function EstadoAHijo(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}

export default class Estado extends Component {
    constructor(props) {
        super(props);
        this.state = {/* aca creamos el objeto del estado */
            contador: 0,
        };

        /* setInterval(() => {
            this.setState( 
               {contador: this.state.contador + 1
        });
        }, 1000); */
    }/* sin el setState no se actualiza el DOM porque no lo lee el render */

    

    render() {
        return(
            <div>
            <h2>El State</h2> 
            <p>{this.state.contador}</p>

            <EstadoAHijo contadorHijo={this.state.contador}/>
            </div>
        )
    }
}