/**
 * @author Gustavo Molina <gusmol37@gmail.com>
 * @version 1.0.0 2022-06-30
 */

import {
    VER_CONTACTO,
    VER_CONTACTO_EXITO,
    VER_CONTACTO_ERROR,
    EDITAR_CONTACTO,
    EDITAR_CONTACTO_EXITO,
    EDITAR_CONTACTO_ERROR,
    GUARDAR_CONTACTO,
    GUARDAR_CONTACTO_EXITO,
    GUARDAR_CONTACTO_ERROR,
    ELIMINAR_CONTACTO,
    ELIMINAR_CONTACTO_EXITO,
    ELIMINAR_CONTACTO_ERROR,
    OBTENER_EDITAR_CONTACTO,
    CONTACTO_EDITAR_NULL
} from '../type';

const initialState = {
    contactos: [],
    contactoeditar: null,
    loading: null,
    error: null
}

const contactoReducer = (state = initialState, action) =>{
    switch (action.type){
        case ELIMINAR_CONTACTO:
        case GUARDAR_CONTACTO:
        case EDITAR_CONTACTO:
        case VER_CONTACTO:
            return{
                ...state,
                loading: true,
                error: null,
                contactoeditar: null
            }
        case VER_CONTACTO_EXITO:
            return{
                ...state,
                loading: false,
                error: null,
                contactos: action.payload,
            }
        case EDITAR_CONTACTO_EXITO:
            return{
                ...state,
                loading: false,
                error: null,
                contactos: state.contactos.map(tp => tp.id === action.payload.id
                    ? tp = action.payload
                    : tp),
            }
        case GUARDAR_CONTACTO_EXITO:
            return{
                ...state,
                loading: false,
                error: null,
                contactos: [...state.contactos, action.payload]
            }
        case ELIMINAR_CONTACTO_EXITO:
            return{
                ...state,
                loading: false,
                error: null,
                contactos: state.contactos.filter(tp => tp.id !== action.payload.id),
            }
        case OBTENER_EDITAR_CONTACTO:
            return{
                ...state,
                loading: false,
                error: null,
                contactoeditar: action.payload,
            }
        case CONTACTO_EDITAR_NULL:
            return{
                ...state,
                loading: false,
                error: null,
                contactoeditar: null,
            }

        case ELIMINAR_CONTACTO_ERROR:
        case GUARDAR_CONTACTO_ERROR:
        case EDITAR_CONTACTO_ERROR:
        case VER_CONTACTO_ERROR:
            return{
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export default contactoReducer;