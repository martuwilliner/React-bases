import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos'
import ComunicacionComponentes from './components/ComunicacionComponentes'
import CicloDeVida from './components/CicloDeVida'  
import AjaxApis from './components/AjaxApis'
import ContadorHooks from './components/ContadorHooks'
import ScrollHooks from './components/ScrollHooks'
import RelojHooks from './components/RelojHooks'
import AjaxHooks from './components/AjaxHooks';

import './App.css';


function App() {
  let nombre = "Martin";
  let auth = false;
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
  return ( 
    <>
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre"/>
        <h1>{nombre}</h1>
        <p>{auth ? "El usuario está logueado" : "No está logueado"}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {estaciones.map((el, index) => (<li key={index}>{el}</li>))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
        <section>
        <Componente msg="Hola Soy un componente funcional Expresado desde una prop"/>
        <hr/>
        <Propiedades
        cadena="Cadena de texto"
        numero={19}
        boolean = {true}
        arreglo= {[1,2,3]}
        objeto= {{nombre: "Martin", correo: "jonmircha@gmail.com"}}
        funcion={num => num * num}
        elementoReact={<i>Elemento React</i>}
        componenteReact= {<Componente msg="Hola Soy un componente pasado como prop"/>}
        />
        <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
        <hr/>
        <EventosES6/>
        <hr/>
        <EventosES7/>
        <hr/>
        <MasSobreEventos/>
        <hr/>
        <ComunicacionComponentes/>
        <hr/>
        <CicloDeVida/>
        <hr/>
        <AjaxApis/>
        <hr/>
        <ContadorHooks/>
        <hr/>
        <ScrollHooks/>
        <hr/>
        <RelojHooks/>
        <hr/>
        <AjaxHooks/>
        
      </section>
      </header>
      
    </div> 
    <div></div>
  </>
  );
}

export default App;
