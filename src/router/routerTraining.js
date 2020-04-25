/*
 * 学习培训子路由
 * */
let pageTrainingIndex=()=>import(/*webpackChunkName:'training'*/ '@/views/training/index')

export default [{
    path:"Training",
    name:"Training",
    component:pageTrainingIndex,
    meta:{isReq:true}
}]