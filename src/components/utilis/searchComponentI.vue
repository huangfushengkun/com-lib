<template>
  <el-form :inline="true">
    <el-form-item>
      <el-input placeholder="审批人"></el-input>
    </el-form-item>
    <el-form-item>
        <el-select placeholder="请选择" value="">
            <el-option 
               label="1"
               value="2"
            />
            <el-option
               label="1"
               value="3"
            />
        </el-select>
    </el-form-item>
     <el-form-item>     
       <el-button type="primary" @click="onSubmit">查询</el-button>
     </el-form-item>
  </el-form>    
</template>
<script>
export default {
    name:"searchComponentI",
    methods:{
      onSubmit(){

      }
    }
}
</script>
<style lang="scss" scoped>
  .el-form-item{
      margin-top:5px; 
      margin-bottom: 0px;
  }
</style>