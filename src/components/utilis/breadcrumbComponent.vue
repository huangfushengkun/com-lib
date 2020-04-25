<template>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{name:'/'}">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{name:'/'}">XXX</el-breadcrumb-item>
      <el-breadcrumb-item>米宽</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {
    
}
</script>
<style>
   .el-breadcrumb{
      height: 100%;
      line-height: 50px;
   } 
   .el-breadcrumb .el-breadcrumb__inner{
     color: #66ccff;
     font-size: 20px;
     font-weight: normal;
   }
</style>