import React, { useReducer } from 'react';
import ChuckContext from './ChuckContext';
import ChuckReducer from './ChuckReducer';
import axios from 'axios'

import { 
    RELLENAR_CATEGORIAS,
    OBTENER_FRASE,
    AGREGAR_FRASE,
    CARGAR_FRASES
} from '../../types';

const ChuckState = props => {
    const initialState = {
        categorias: [],
        listafrases: [],
        fraseactual: null
    }

    const [ state, dispatch ] = useReducer(ChuckReducer, initialState);

    const obtenerCategorias = (async () => {
        try {
            const resultado = await axios.get('https://api.chucknorris.io/jokes/categories'); 
            console.log(resultado); 
            dispatch({
                type: RELLENAR_CATEGORIAS,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);
        }
    })

    const obtenerFrase = (async (categoria) => {
        try {
            const resultado = await axios.get(`https://api.chucknorris.io/jokes/random?category=${categoria}`); 
            console.log(resultado); 
            dispatch({
                type: OBTENER_FRASE,
                payload: resultado.data.value
            })
        } catch (error) {
            console.log(error);
        }
    })

    const agregarFrase = (frase) => {
        dispatch({
            type: AGREGAR_FRASE,
            payload: frase
        })
    }

    // const cargarFrases = () => {
    //     dispatch({
    //         type: CARGAR_FRASES,
    //         payload: frase
    //     })
    // }

    return(
        <ChuckContext.Provider
            value={{
                categorias: state.categorias,
                fraseactual: state.fraseactual,
                listafrases: state.listafrases,
                obtenerCategorias,
                obtenerFrase,
                agregarFrase
            }}
        >{props.children}

        </ChuckContext.Provider>
    )
}
export default ChuckState;