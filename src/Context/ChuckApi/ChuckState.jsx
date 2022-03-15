import React, { useReducer } from 'react';
import ChuckContext from './ChuckContext';
import ChuckReducer from './ChuckReducer';
import axios from 'axios'

import { RELLENAR_CATEGORIAS } from '../../types';

const ChuckState = props => {
    const initialState = {
        categorias: []
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

    return(
        <ChuckContext.Provider
            value={{
                categorias: state.categorias,
                obtenerCategorias
            }}
        >{props.children}

        </ChuckContext.Provider>
    )
}
export default ChuckState;