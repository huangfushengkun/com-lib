<template>
    <section>
        <!-- <article-component/> -->
        <!-- <tool-component-i/> -->
        <el-row>
            <!-- <el-col>
                <pie-component/>
            </el-col> -->
            <el-col>
                <bar-component-i/>
            </el-col>
        </el-row>
        <el-row>
           <el-col></el-col>
           <el-col class="sd">
               <table-component-i/>
               <pagination-component-i/>  
           </el-col>
        </el-row>
    </section>
</template>
<script>
import {toolComponentI,tableComponentI,paginationComponentI,pieComponent,barComponentI,articleComponent} from "@/index"
export default {
    // name:"maintenance",
    components:{
        toolComponentI,
        tableComponentI,
        paginationComponentI,
        articleComponent,
        pieComponent,
        barComponentI
    }
}
</script>
<style lang="scss" scoped>
  .sd{
      padding: 20px;
  }
</style>
