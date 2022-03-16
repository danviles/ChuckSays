import React, { useEffect, useContext, useState } from 'react'
import ChuckContext from '../../Context/ChuckApi/ChuckContext'
import Frase from './Frase';

const ListaFrases = () => {
    const chuckContext = useContext(ChuckContext);
    const { listafrases, cargarFrases } = chuckContext;

    useEffect(() => {
        cargarFrases()
    }, []);

    return (
        <div className='container mb-5 mt-2'>
            <div className='lista-frases'>
                {listafrases.length > 0 ?
                    listafrases.map((frase, i) =>
                        <Frase key={i} frase={frase} />
                    )
                    :
                    <p>There are no saved phrases</p>
                }
            </div>
        </div>
    )
}

export default ListaFrases