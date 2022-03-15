import React, { useContext } from 'react'
import ChuckContext from '../../Context/ChuckApi/ChuckContext'


const Frase = ({ frase }) => {

    const chuckContext = useContext(ChuckContext);
    const { borrarFrase } = chuckContext;

    const borrar = (e) => {
        e.preventDefault();
        borrarFrase(frase);
    }

    return (
        <div>
            <p>{frase}</p>
            <button onClick={borrar}>Delete</button>
        </div>
    )
}

export default Frase