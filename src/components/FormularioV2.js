import React, { useState } from 'react'

export default function FormularioV2 () {

    const [form, setForm] = useState({});

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleChecked = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault(); /* para que la página no se recargue al mandar el formulario */

        alert("El formulario se envió correctamente")
    }

    return (
        <>
            <h2>Formulario Version 2</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input
                type="text"
                id="nombre"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                />
                <p>Elijí tu librería favorita</p>
                <input
                type="radio"
                id="vanilla"
                name="sabor"
                value="vanilla"
                onChange={handleChange}/>
                <label htmlFor="vanilla">Vanilla Js</label>

                <input
                type="radio"
                id="react"
                name="sabor"
                value="react"
                onChange={handleChange}
                defaultChecked/>
                <label htmlFor="react">React</label>
                <input
                type="radio"
                id="angular"
                name="sabor"
                value="angular"
                onChange={handleChange}/>
                <label htmlFor="angular">Angular</label>
                <input
                type="radio"
                id="vue"
                name="sabor"
                value="vue"
                onChange={handleChange}/>
                <label htmlFor="vue">Vue</label>
                <input
                type="radio"
                id="svelte"
                name="sabor"
                value="svelte"
                onChange={handleChange}/>
                <label htmlFor="svelte">Svelte</label>

                <p>Elejí tu lenguaje favorito</p>
                <select name="lenguaje" onChange={handleChange} defaultValue="">
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="ruby">Ruby</option>
                </select>
                <br/>
                <label htmlFor="terminos">Acepto términos</label>
                <input type="checkbox" id="terminos" name="terminos" onChange={(e) => setForm(e.target.checked)}/>
                <br/>
                <input type="submit"/>
            </form>
        </>
    )
    
}