/*
 * 技术资料子路由
 * */
let pageTechnicalInfoIndex=()=>import(/*webpackChunkName:'technicalInfo'*/ '@/views/technicalInfo/index')

export default [{
    path:"TechnicalInfo",
    name:"technicalInfo",
    component:pageTechnicalInfoIndex,
    meta:{isReq:true}
}]