import React, { useContext, useEffect } from 'react'
import ChuckContext from '../../Context/ChuckApi/ChuckContext'

const Formulario = () => {

    const chuckContext = useContext(ChuckContext);
    const { categorias, obtenerCategorias } = chuckContext

    useEffect(() => {
        obtenerCategorias();
    }, [])
    

    return (
        <div>
            <select>
                <option value="" disabled>Select Category</option>
                {categorias.map( opcion => (
                   <option value={opcion}>{opcion}</option> 
                ))}
            </select>
            <button>Generate</button>
        </div>
    )
}

export default Formulario   