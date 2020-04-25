<template>
    <el-row tag="header">
        <el-col :span='20'>
            <logo-component 
            :title="title"
            :logo="logo"
            />
        </el-col>
        <el-col :span='4'>
            <dropdownComponent
                :source="accountInfos"
                :checkoutItem="fDropdownCheckoutItem"
            />
        </el-col>    
    </el-row>    
</template>
<script>
import logoComponent from './utilis/logoComponentI'
import dropdownComponent from './utilis/dropdownComponentI'
export default {
    name:"headerI",
    props:[
        "title",
        "logo",
        "accountInfos",
        "checkoutUser",
        "logout"
    ],
    components:{
        logoComponent,
        dropdownComponent
    },
    methods:{
        fDropdownCheckoutItem(type){
            if(type=="checkoutUser"){ //切换用户
              this.checkoutUser();
            }else if(type=="logout"){ //退出登录
              this.logout();
            }
        }
    }    
}
</script>
<style lang="scss" scoped>

</style>