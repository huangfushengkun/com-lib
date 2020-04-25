/*
 * 载荷谱分析
 * */
let pageZhpManagement=()=>import(/*webpackChunkName:'zhpManagement'*/ '@/views/zhpManagement/index');
export default [{
    path:"ZhpManagement",
    name:"ZhpManagement",
    component:pageZhpManagement,
    meta:{isReq:true}
}]