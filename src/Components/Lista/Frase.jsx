import React, { useContext } from 'react'
import ChuckContext from '../../Context/ChuckApi/ChuckContext'


const Frase = ({ frase }) => {

    const chuckContext = useContext(ChuckContext);
    const { borrarFrase } = chuckContext;

    const borrar = (e) => {
        e.preventDefault();
        borrarFrase(frase);
        swal({
            title: "Good job!",
            text: "The phrase has been REMOVED successfully",
            icon: "success",
            timer: 2000
          });
    }

    return (
        <div className='container mt-2 listado-frases'>
            <p>{frase}</p>
            <button className='btn btn-danger' onClick={borrar}>Delete</button>
            <hr />
        </div>

    )
}

export default Frase