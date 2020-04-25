/*
 * 智能识别子路由
 * */
let pageCapacity=()=>import(/*webpackChunkName:'capacity'*/ '@/views/capacity/index')
export default [{
    path:"capacity",
    name:"capacity",
    component:pageCapacity,
    meta:{isReq:true}
}]