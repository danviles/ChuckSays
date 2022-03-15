import React, { useContext, useEffect, useState } from 'react'
import ChuckContext from '../../Context/ChuckApi/ChuckContext'

const Formulario = () => {

    const chuckContext = useContext(ChuckContext);
    const { categorias, obtenerCategorias, obtenerFrase } = chuckContext

    const [ categoria, setCategoria ] = useState('');

    useEffect(() => {
        obtenerCategorias();
    }, [])

    const generarFrase = (e) => {
        e.preventDefault();
        obtenerFrase(categoria);
    }

    return (
        <div>
            <form onSubmit={generarFrase}>
                <select name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="" disabled>Select Category</option>
                    {categorias.map(opcion => (
                        <option key={opcion} value={opcion}>{opcion}</option>
                    ))}
                </select>
                <button type='submit'>Generate</button>
            </form>
        </div>
    )
}

export default Formulario   