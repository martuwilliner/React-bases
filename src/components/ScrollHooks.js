import React, {useState, useEffect} from 'react';


export default function ScrollHooks () {

    const [scrollY , setSCrollY] = useState(0);
    


    useEffect(() => {
    console.log('Moviendo el scroll')
    
    const detectarScroll = () => {
        setSCrollY(window.pageYOffset);
    }
    
    window.addEventListener("scroll", detectarScroll);

    return() => {
        window.removeEventListener("scroll", detectarScroll);
        /* console.log('Fase de Desmontaje'); */
    }
    }, [scrollY]);

    useEffect(() => {
        /* console.log('Fase de Montaje') */
    }, []); /* este tiene vacio el [] xq se ejecuta la 1ra vez como el componenteDidUpdate */

    useEffect(() => {
        /* console.log('Fase de Actualización') */
    })


    return(
        <>
            <h2>Hooks - useEffect y ciclo de vida</h2>
            <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    )
}