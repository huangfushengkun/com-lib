/*
 * 运行管理子路由
 * */
let pageOperManagement=()=>import(/*webpackChunkName:'oper'*/ '@/views/oper/index')
let pageMonitiring=()=>import(/*webpackChunkName:'oper'*/ '@/views/oper/monitiring') //滑油管控

export default [{
        path:"operManagement",
        name:"operManagement",
        component:pageOperManagement,
        meta:{isReq:true}
    },{
        path:"Monitoring",
        component:pageMonitiring,
        meta:{isReq:true}
    },{
        path:"Technology",
        component:pageOperManagement,
        meta:""
    },{
        path:"FaultMonitoring",
        component:pageOperManagement,
        meta:""
    },{
        path:"LifeTime",
        component:pageOperManagement,
        meta:""
}]