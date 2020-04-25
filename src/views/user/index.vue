<template>
    <div class="content">
        <el-button @click="fChangeTheme">切换主题</el-button>
        <login-component-i
           class="login-container"
           :conf="loginConfig"
           :source="loginModel"
           :loginBtnClick="fLoginBtnClick"
        />
    </div>
</template>
<script>
import {loginComponentI} from "@/index";
import userService from "@/services/userService"
let layoutI = ()=>import(/*webpackChunkName:'order'*/ '@/layouts/layoutI');
let indexIndexPage = ()=>import(/*webpackChunkName:'index'*/ '@/views/index/index'); //首页
export default {
    name:"userLogin",
    data(){
        return {
            loginConfig:{
                title:"运行管理系统",
                placeholder:[
                    '请选择账号',
                    '请输入密码'
                ],
                role:[{
                    name:"管理员",
                    value:"12340000000"
                },{
                    name:"高级用户",
                    value:"12345000000"
                },{
                    name:"普通用户",
                    value:"12345600000"
                }],
                rules:{
                    account: [
                        {required: true, message: '请选择账号', trigger: 'blur'},
                    ],
                    checkPass: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ]
                }
            },
            loginModel:{
                account:"12340000000",
                checkPass:"123456"
            },

        }
    },
    components:{
        loginComponentI
    },
    methods:{
        /*
         * 登录
         * */
        fLoginBtnClick:function(){
            userService.fLoginService({
                "grant_type":"password",
                "username":'pr_'+this.loginModel.account,
                "password":this.loginModel.checkPass
            }).then((res)=>{
                this.$router.push({name:'MaintenanceStatus'})
            })
        },
        fChangeTheme:function(){
            this.$nextTick(()=>{
                document.body.className="theme-oth";
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@include themems(){
  .content{
      background:getTheme('bg');
  }
  .login-container{
      position: absolute;
      width: 800px;
      height: 428px;
      margin: auto;
      top:0px;
      right:0px;
      bottom:0px;
      left:0px;
  }
}
</style>
