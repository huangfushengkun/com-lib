<template>
    <section class="container">
        <header-component-i
          class="header-wrap"
          :title="title"
          :logo="logo"
          :checkoutUser="fCheckoutUser"
          :logout="fLoginOut"
          :accountInfos="accountInfos"
        />
        <el-row tag="main" class="main-wrap">
            <el-col :span="3" tag="aside" class="menu-wrap">
               <menu-component-i />
            </el-col>
            <el-col :span="21" class="main-container">
               <router-view></router-view>
            </el-col>
        </el-row>
    </section>
</template>
<script>
import {menuComponentI,headerComponentI} from '@/index'
export default {
    name:"layout-I",
    data(){
        return{
            title:"运行管理系统",
            logo:require("../assets/images/logo.png"),
            accountInfos:{
                title:{
                    name:"管理员",
                    icon:"el-icon-user-solid"
                },
                list:[{
                    name:"切换账号",
                    icon:"el-icon-user",
                    command:"checkoutUser"
                },{
                    name:"退出",
                    icon:"el-icon-delete",
                    command:"logout"
                }]
            }
        }
    },
    components:{
        headerComponentI,
        menuComponentI
    },
    methods:{
        /*
         * 切换用户
         * */
        fCheckoutUser(){
            this.$confirm("确认注销吗？","提示",{
                confirmButtonText:"确定",
                cancelButtonText:'取消',
                showClose: false
            }).then(()=>{
                this.$router.push('/login');
            }).catch(()=>{
                console.log('取消操作');
            })
        },
        /*
         * 退出登录
         * */
        fLoginOut(){
            this.$confirm("确认退出吗？","提示",{
                confirmButtonText:"确定",
                cancelButtonText:'取消',
                showClose: false
            }).then(()=>{

            }).catch(()=>{
                console.log('取消操作');
            })
        }
    }
}
</script>
<style lang="scss" scoped>
 .container{
     height: 100%;
     background: url("../../static/images/bg.7969588.png") center center no-repeat transparent scroll;
     background-size: cover;
 }
.main-wrap{
     height: calc(100% - 58px);
     height: -webkit-calc(100% - 58px);
     height: -moz-calc(100% - 58px);
 }
 /*滚动条的宽度*/
::-webkit-scrollbar {
	width:1px;
}
 .header-wrap{
     height: 58px;
     line-height: 58px;
     margin: 0px 18px;
 }
 .menu-wrap{
     overflow-y: auto;
     overflow-x: hidden;
     height: 100%;
     -webkit-box-shadow: 0 0 12px rgba(0, 127, 255, 0.24) inset;
     box-shadow: 0 0 12px rgba(0, 127, 255, 0.24) inset;
 }
.main-container{
    height: 100%;
    overflow: auto;
}
</style>
