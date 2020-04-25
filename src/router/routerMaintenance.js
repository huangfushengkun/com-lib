/*
 * 运营状态子路由
 * */
let pageMaintenanceIndex = ()=>import( /*webpackChunkName:'MaintenanceStatus'*/ "@/views/maintenance/index");

export default [{
    path:"MaintenanceStatus",
    name:"MaintenanceStatus",
    component:pageMaintenanceIndex,
    meta:{isReq:true}
}]
