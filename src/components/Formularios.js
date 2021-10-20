import React, { useState } from 'react'

export default function Formularios () {

    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("")
    const [lenguaje, setLenguaje] = useState("")
    const [terminos, setTerminos] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault(); /* para que la página no se recargue al mandar el formulario */

        alert("El formulario se envió correctamente")
    }

    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input
                type="text"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />
                <p>Elijí tu librería favorita</p>
                <input
                type="radio"
                id="vanilla"
                name="sabor"
                value="vanilla"
                onChange={(e) => setSabor(e.target.value)}/>
                <label htmlFor="vanilla">Vanilla Js</label>

                <input
                type="radio"
                id="react"
                name="sabor"
                value="react"
                onChange={(e) => setSabor(e.target.value)}
                defaultChecked/>
                <label htmlFor="react">React</label>
                <input
                type="radio"
                id="angular"
                name="sabor"
                value="angular"
                onChange={(e) => setSabor(e.target.value)}/>
                <label htmlFor="angular">Angular</label>
                <input
                type="radio"
                id="vue"
                name="sabor"
                value="vue"
                onChange={(e) => setSabor(e.target.value)}/>
                <label htmlFor="vue">Vue</label>
                <input
                type="radio"
                id="svelte"
                name="sabor"
                value="svelte"
                onChange={(e) => setSabor(e.target.value)}/>
                <label htmlFor="svelte">Svelte</label>

                <p>Elejí tu lenguaje favorito</p>
                <select name="lenguaje" onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="ruby">Ruby</option>
                </select>
                <br/>
                <label htmlFor="terminos">Acepto términos</label>
                <input type="checkbox" id="terminos" name="terminos" onChange={(e) => setTerminos(e.target.checked)}/>
                <br/>
                <input type="submit"/>
            </form>
        </>
    )
    
}