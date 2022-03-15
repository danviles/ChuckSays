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
        <div>
            {listafrases.map((frase, i) => 
                <Frase key={i} frase={frase}/>
            )}
        </div>
    )
}

export default ListaFrases