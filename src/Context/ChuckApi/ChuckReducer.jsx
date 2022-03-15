import {
    RELLENAR_CATEGORIAS
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        
        case RELLENAR_CATEGORIAS:
            return {
                ...state,
                categorias: action.payload
            }

        default:
            return state;
    }
}