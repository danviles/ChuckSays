import React, { useEffect, useContext, useState } from 'react'
import ChuckContext from '../../Context/ChuckApi/ChuckContext'
import Export from './Export';
import Frase from './Frase';


const ListaFrases = () => {
    const chuckContext = useContext(ChuckContext);
    const { listafrases, cargarFrases } = chuckContext;

    useEffect(() => {
        cargarFrases()
    }, []);

    return (
        <>
            <div className='container mb-5 mt-2 overflow-auto container-frases'>
                <div className='lista-frases'>
                    {listafrases.length > 0 ?
                        listafrases.map((data, i) =>
                            <Frase key={i} frase={data.value} />
                        )
                        :
                        <p>There are no saved phrases</p>
                    }
                </div>
            </div>
            <div className="container">
                <Export data={listafrases} />
            </div>
        </>
    )
}

export default ListaFrases