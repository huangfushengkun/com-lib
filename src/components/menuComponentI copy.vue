<template>
    <el-menu
      class="menu-container"
      @open="handleOpen"
      @close="handleClose"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <i class="el-icon-setting"></i>
        <span slot="title">运营状态</span>
      </el-menu-item>

      <el-submenu index="2">
          <template slot="title">
             <i class="el-icon-location"></i>
             <span>运行管理</span>
          </template>
          <el-menu-item index="2-1">滑油监控</el-menu-item>
          <el-menu-item index="2-2">技术通报</el-menu-item>
          <el-menu-item index="2-3">故障统计</el-menu-item>
          <el-menu-item index="2-4">寿命监控</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
           <template slot="title">
             <i class="el-icon-location"></i>
             <span>履历管理</span>
           </template>
           <el-submenu index="3-1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>正文</span>
                </template>
                <el-menu-item index="3-1-1">验收证明</el-menu-item>
                <el-menu-item index="3-1-2">验收试车</el-menu-item>
                <el-menu-item index="3-1-3">试车曲线</el-menu-item>
                <el-menu-item index="3-1-4">验收结论</el-menu-item>
                <el-menu-item index="3-1-5">特殊说明</el-menu-item>
                <el-menu-item index="3-1-6">总寿命首</el-menu-item>
                <el-menu-item index="3-1-7">出厂时安</el-menu-item>
                <el-menu-item index="3-1-8">零件寿命</el-menu-item>
                <el-menu-item index="3-1-9">单元体零</el-menu-item>
                <el-menu-item index="3-1-10">非单元体</el-menu-item>
                <el-menu-item index="3-1-11">封存和启</el-menu-item>
                <el-menu-item index="3-1-12">使用中的</el-menu-item>
                <el-menu-item index="3-1-13">工作时间</el-menu-item>
                <el-menu-item index="3-1-14">重大记事</el-menu-item>
                <el-menu-item index="3-1-15">技术通报</el-menu-item>
            </el-submenu>
            <el-submenu index="3-2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>副本</span>
                </template>
                <el-menu-item index="3-2-1">工作时间</el-menu-item>
                <el-menu-item index="3-2-2">外场试车</el-menu-item>
                <el-menu-item index="3-2-3">维护工作</el-menu-item>
                <el-menu-item index="3-2-4">定期检查</el-menu-item>
            </el-submenu>
            <el-submenu index="3-3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>检验维护</span>
                </template>
                <el-menu-item index="3-2-1">零件清单</el-menu-item>
                <el-menu-item index="3-2-2">尺寸间隙</el-menu-item>
                <el-menu-item index="3-2-3">验收参数</el-menu-item>
                <el-menu-item index="3-2-4">滑油消耗</el-menu-item>
                <el-menu-item index="3-2-4">滑油光谱</el-menu-item>
            </el-submenu>
            <el-menu-item index="3-4">故障管理</el-menu-item>
            <el-menu-item index="3-5">数据清单</el-menu-item>
      </el-submenu>

      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">智能识别</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">智能履历卡</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">数据分析</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-setting"></i>
        <span slot="title">载荷谱分析</span>
      </el-menu-item>
      <el-menu-item index="8">
        <i class="el-icon-setting"></i>
        <span slot="title">技术资料</span>
      </el-menu-item>
      <el-menu-item index="9">
        <i class="el-icon-setting"></i>
        <span slot="title">学习培训</span>
      </el-menu-item>
      <el-menu-item index="10">
        <i class="el-icon-setting"></i>
        <span slot="title">系统设置</span>
      </el-menu-item>
    </el-menu>
</template>
<script>
export default {
    name:"menuComponentI",
    data(){
        return {
            list:[{
                name:"运营状态"
            },{
                name:"运管理",
                list:[{
                    name:"油监控"
                },{
                    name:"技术报"
                },{
                    name:"故统计"
                },{
                    name:"命监控"
                }]
            },{
                name:"历管理",
                list:[{
                    name:"正文",
                    list:[{
                        name:"验证明"
                    },{
                        name:"收试车"
                    },{
                        name:"车曲线"
                    },{
                        name:"验收论"
                    },{
                        name:"特说明"
                    },{
                        name:"寿命"
                    },{
                        name:"出厂时"
                    },{
                        name:"件寿命"
                    },{
                        name:"单元"
                    },{
                        name:"非单元"
                    },{
                        name:"封存"
                    },{
                        name:"使用中"
                    },{
                        name:"工作时间"
                    },{
                        name:"重大记事"
                    },{
                        name:"技术通报"
                    }]
                },{
                    name:"副本",
                    list:[{
                        name:"工作时"
                    },{
                        name:"外试车"
                    },{
                        name:"维工作"
                    },{
                        name:"定期查"
                    }]
                },{
                    name:"验维护",
                    list:[{
                        name:"零件单"
                    },{
                        name:"尺寸隙"
                    },{
                        name:"验收"
                    },{
                        name:"消耗"
                    },{
                        name:"光谱"
                    }]
                },{
                    name:"故障"
                },{
                    name:"清单"
                }]
            },{
                name:"识别"
            },{
                name:"履历卡"
            },{
                name:"分析"
            },{
                name:"载荷谱"
            },{
                name:"资料"
            },{
                name:"培训"
            },{
                name:"设置"
            }]
        }
    }
}
</script>
<style lang="scss" scoped>
  .menu-container{
      background-color: transparent;
      border: none;
      .el-menu-item{
       color:rgb(102, 204, 255);
       font-size: 16px;
      }
  }
</style>
<style>
      .el-submenu__title{
       color:rgb(102, 204, 255);
       font-size: 16px;
      }
      .el-menu{
          background-color: transparent;
      }
</style>
