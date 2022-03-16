import React, { useContext, useEffect, useState } from 'react'
import ChuckContext from '../../Context/ChuckApi/ChuckContext'

const Formulario = () => {

    const chuckContext = useContext(ChuckContext);
    const { categorias, obtenerCategorias, obtenerFrase } = chuckContext

    const [categoria, setCategoria] = useState('');

    useEffect(() => {
        obtenerCategorias();
    }, [])

    const generarFrase = (e) => {
        e.preventDefault();
        if (categoria) {
            obtenerFrase(categoria);
        } else {
            swal({
                title: "Error!",
                text: "Select category first",
                icon: "error",
                timer: 2000
            });
        }
    }

    return (
        <div className='container mt-1'>
            <form onSubmit={generarFrase}>
                <div className="input-group mb-3">
                    <select className='form-select' name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                        <option value="" disabled>Select Category</option>
                        {categorias.map(opcion => (
                            <option key={opcion} value={opcion}>{opcion}</option>
                        ))}
                    </select>
                    <div className="input-group-append">
                        <button className='btn btn-primary' type='submit'>Generate</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Formulario   