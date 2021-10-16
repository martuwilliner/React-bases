import React , {Component} from 'react';

export class EventosES6 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        };

        this.sumar = this.sumar.bind(this);
        this.resta = this.resta.bind(this);
    }

    sumar(){
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    resta(){
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return(
            <div>
                <h2>Eventos en componentes de clase</h2>
                <nav>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.resta}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
                
            </div>
        );
    }
}


// Properties Initializer
export class EventosES7 extends Component {
    
    state = {
        contador: 0,
    };

    //Eventos definidos con Arrow function

    sumar = (e) => {
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    resta = (e) =>{
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return(
            <div>
                <h2>Eventos en componentes de clase Vresion ES7 (mas simple)</h2>
                <nav>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.resta}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
                
            </div>
        );
    }
}


/* function Boton(props){
    return <button onClick={props.myOnClick}>Botón hecho componente</button>
} */
/* const Boton = (props) => (<button onClick={props.myOnClick}>Botón hecho componente</button>) */


const Boton = ({myOnClick}) => (<button onClick={myOnClick}>Botón hecho componente</button>)

export class MasSobreEventos extends Component {
    
    handleClick = (e, mensaje) => {
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target)
        console.log(mensaje)
    }

    render(){
        return(
            <div>
                <h2>Mas sobre eventos:</h2>
                <button onClick={(e)=>
                    this.handleClick(e,"hola pasando parametros desde un evento")}
                    >
                        Saludar</button>
                {/*evento personalizado*/}
                <Boton myOnClick={(e)=>
                    this.handleClick(e,"hola pasando parametros desde un evento")}/>
                
            </div>
        )
    }
}