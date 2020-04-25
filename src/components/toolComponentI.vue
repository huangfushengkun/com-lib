<template>
   <el-row class="bread-container">
       <el-col :span="10">
         <breadcrumbComponent/>
       </el-col>
       <el-col :span="14" style="text-align:right">
          <searchComponent/>
       </el-col>   
   </el-row>
</template>
<script>
import breadcrumbComponent from "./utilis/breadcrumbComponent"
import searchComponent from "./utilis/searchComponentI"
export default {
    name:"toolComponentI",
    components:{
       breadcrumbComponent,
       searchComponent
    }
}
</script>
<style lang="scss" scoped>
  .bread-container{
    background: rgba(1, 143, 252, 0.1);
    line-height: 50px;
    color: #66ccff;
    font-size: 20px;
    margin-left: 2px;
    padding: 0 0 0 13px;
    height: 50px !important;
    overflow: hidden;
  }
</style>