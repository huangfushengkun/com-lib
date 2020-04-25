/*
 * 数据分析子路由
 * */

 let pageAnalysisIndex=()=>import(/*webpackChunkName:'analysis'*/ "@/views/analysis/index")

export default [{
    path:"DataManagement",
    name:"analysisIndex",
    component:pageAnalysisIndex,
    meta:{isReq:true}
}]
