/*
 * Vuex
 * */
import Vue from "vue"
import Vuex from "vuex"
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

let store={
    id:"1"
}

let getters={
    getId:state=>state.id
}

export default {
    state:store,
    getters:getters,
    actions,
    mutations,
    modules:{

    }
}