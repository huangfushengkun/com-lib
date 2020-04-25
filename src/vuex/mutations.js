/*
 * mutations.js
 * */
import {
    GET_INOFS
} from "./mutitaion-type"

export default {
    [GET_INOFS](state,{params}){
        state.id=params;
    }
}