<template>
    <el-menu
      class="menu-container"
      @open="handleOpen"
      @close="handleClose"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <i class="el-icon-setting"></i>
        <span slot="title">运营</span>
      </el-menu-item>

      <el-submenu index="2">
          <template slot="title">
             <i class="el-icon-location"></i>
             <span>运行</span>
          </template>
          <el-menu-item index="2-1">监控</el-menu-item>
          <el-menu-item index="2-2">通报</el-menu-item>
          <el-menu-item index="2-3">统计</el-menu-item>
          <el-menu-item index="2-4">监控</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
           <template slot="title">
             <i class="el-icon-location"></i>
             <span>管理</span>
           </template>
           <el-submenu index="3-1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>正文</span>
                </template>
                <el-menu-item index="3-1-1">证明</el-menu-item>
                <el-menu-item index="3-1-2">试车</el-menu-item>
                <el-menu-item index="3-1-3">曲线</el-menu-item>
                <el-menu-item index="3-1-4">结论</el-menu-item>
                <el-menu-item index="3-1-5">说明</el-menu-item>
                <el-menu-item index="3-1-6">命首</el-menu-item>
                <el-menu-item index="3-1-7">时安</el-menu-item>
                <el-menu-item index="3-1-8">寿命</el-menu-item>
                <el-menu-item index="3-1-9">体零</el-menu-item>
                <el-menu-item index="3-1-10">元体</el-menu-item>
                <el-menu-item index="3-1-11">和启</el-menu-item>
                <el-menu-item index="3-1-12">中的</el-menu-item>
                <el-menu-item index="3-1-13">时间</el-menu-item>
                <el-menu-item index="3-1-14">记事</el-menu-item>
                <el-menu-item index="3-1-15">通报</el-menu-item>
            </el-submenu>
            <el-submenu index="3-2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>副本</span>
                </template>
                <el-menu-item index="3-2-1">时间</el-menu-item>
                <el-menu-item index="3-2-2">试车</el-menu-item>
                <el-menu-item index="3-2-3">工作</el-menu-item>
                <el-menu-item index="3-2-4">检查</el-menu-item>
            </el-submenu>
            <el-submenu index="3-3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>维护</span>
                </template>
                <el-menu-item index="3-2-1">清单</el-menu-item>
                <el-menu-item index="3-2-2">间隙</el-menu-item>
                <el-menu-item index="3-2-3">参数</el-menu-item>
                <el-menu-item index="3-2-4">消耗</el-menu-item>
                <el-menu-item index="3-2-4">光谱</el-menu-item>
            </el-submenu>
            <el-menu-item index="3-4">管理</el-menu-item>
            <el-menu-item index="3-5">清单</el-menu-item>
      </el-submenu>

      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">识别</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">智能</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">分析</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-setting"></i>
        <span slot="title">分析</span>
      </el-menu-item>
      <el-menu-item index="8">
        <i class="el-icon-setting"></i>
        <span slot="title">资料</span>
      </el-menu-item>
      <el-menu-item index="9">
        <i class="el-icon-setting"></i>
        <span slot="title">培训</span>
      </el-menu-item>
      <el-menu-item index="10">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
</template>
<script>
export default {
    name:"menuComponentI",
    data(){
        return {
            list:[{
                name:"状态"
            },{
                name:"管理",
                list:[{
                    name:"监控"
                },{
                    name:"通报"
                },{
                    name:"统计"
                },{
                    name:"监控"
                }]
            },{
                name:"管理",
                list:[{
                    name:"正文",
                    list:[{
                        name:"证明"
                    },{
                        name:"试车"
                    },{
                        name:"曲线"
                    },{
                        name:"结论"
                    },{
                        name:"说明"
                    },{
                        name:"命首"
                    },{
                        name:"时安"
                    },{
                        name:"寿命"
                    },{
                        name:"体零"
                    },{
                        name:"元体"
                    },{
                        name:"和启"
                    },{
                        name:"中的"
                    },{
                        name:"时间"
                    },{
                        name:"记事"
                    },{
                        name:"技通报"
                    }]
                },{
                    name:"副本",
                    list:[{
                        name:"工时间"
                    },{
                        name:"外场车"
                    },{
                        name:"维工作"
                    },{
                        name:"定检查"
                    }]
                },{
                    name:"检验护",
                    list:[{
                        name:"零清单"
                    },{
                        name:"尺间隙"
                    },{
                        name:"验参数"
                    },{
                        name:"油消耗"
                    },{
                        name:"滑光谱"
                    }]
                },{
                    name:"故管理"
                },{
                    name:"数清单"
                }]
            },{
                name:"能别"
            },{
                name:"能历卡"
            },{
                name:"数据析"
            },{
                name:"荷析"
            },{
                name:"术料"
            },{
                name:"习培"
            },{
                name:"统置"
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
