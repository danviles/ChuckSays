import {
    OBTENER_FRASE,
    RELLENAR_CATEGORIAS,
    AGREGAR_FRASE,
    CARGAR_FRASES
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        
        case RELLENAR_CATEGORIAS:
            return {
                ...state,
                categorias: action.payload
            }
        
        case OBTENER_FRASE:
            return {
                ...state,
                fraseactual: action.payload
            }
        
        case AGREGAR_FRASE:
            return {
                ...state,
                listafrases: [...state.listafrases, action.payload],
                fraseactual: null
            }
        
        // case CARGAR_FRASES:
        //     return {
        //         ...state,
        //         listafrases
        //     }

        default:
            return state;
    }
}