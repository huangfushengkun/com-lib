/*
 * 主路由
 * {
 *  path: '/',
 *  name: 'index',
 *  component: layoutI,
 *  children:[{
 *    path:"",
 *    name: 'indexIndex',
 *    component:indexIndexPage,
 *    meta:{isReq:true}
 *  }]
 *}
 * */
import Vue from 'vue'
import Router from 'vue-router'
import routerCapacity from './routerCapacity';
import routerCard from './routerCard';
import routerAnalysis from './routerAnalysis';
import routerMaintenance from './routerMaintenance';
import routerOper from './routerOper';
import routerPedigree from './routerPedigree';
import routerSystem from './routerSystem';
import routerTraining from './routerTraining';
import routerUser from './routerUser';
import routerZhp from './routerZhp';
let layoutI = ()=>import(/*webpackChunkName:'main'*/ '@/layouts/layoutI');
let pageUserIndex = ()=>import(/*webpackChunkName:'user'*/ '@/views/user/index'); //登录
Vue.use(Router)

let routerInstance=new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: layoutI,
      children:[
        ...routerCapacity,
        ...routerCard,
        ...routerAnalysis,
        ...routerMaintenance,
        ...routerOper,
        ...routerPedigree,
        ...routerSystem,
        ...routerTraining,
        ...routerUser,
        ...routerZhp,
      // {
      //     path:"test",
      //     name: 'indexIndex',
      //     component:indexIndexPage,
      //     meta:{isReq:true}
      // }
     ]
    },{
      path:"/login",
      name:"login",
      component:pageUserIndex,
      meta:{isReq:false}
    }
  ]
})


routerInstance.beforeEach((to,from,next)=>{
  next();
})

export default routerInstance;