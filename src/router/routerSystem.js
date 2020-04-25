/*
 * 系统设置子路由
 * */
let pageSystemIndex=()=>import(/*webpackChunkName:'system'*/ '@/views/system/index')

export default [{
    path:"systemSetup",
    name:"systemSetup",
    component:pageSystemIndex,
    meta:{isReq:true}
}]