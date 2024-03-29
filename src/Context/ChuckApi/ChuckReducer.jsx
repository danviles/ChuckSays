import {
    OBTENER_FRASE,
    RELLENAR_CATEGORIAS,
    AGREGAR_FRASE,
    CARGAR_FRASES,
    BORRAR_FRASE
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
        
        case CARGAR_FRASES:
            return {
                ...state,
                listafrases: action.payload
            }
        
        case BORRAR_FRASE:
            return {
                ...state,
                listafrases: state.listafrases.filter((data) => data.value !== action.payload)
            }

        default:
            return state;
    }
}