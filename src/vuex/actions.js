/*
 * 异步处理事件
 * */
import {
    GET_INOFS
} from "./mutitaion-type"

export default {
    getInfos({commit,state},params=""){
        commit(GET_INOFS,params);
    }
}