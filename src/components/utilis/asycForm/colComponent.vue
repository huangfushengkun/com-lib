<template functional>
    <el-col 
      v-if="props.item.type=='split'"
      :span="props.item.span"
      class="split-container"
    >
       {{props.item.content}}
    </el-col>
    <el-col
      v-else
      :span="props.item.span"
    >
        <slot></slot>
    </el-col>    
</template>
<script>
export default {
    name:"rowComponent",
    props:["item"]
}
</script>
<style>
 .split-container{
    text-align: center;
    color:#66ccff;
 }
</style>