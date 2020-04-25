/*
 * 智能履历卡子路由
 * */
let pageCardIndex=()=>import(/*webpackChunkName:'card'*/ '@/views/card/index');

export default [{
    path:"CardManagement",
    name:"cardManagement",
    component:pageCardIndex,
    meta:{isReq:true}
}]
