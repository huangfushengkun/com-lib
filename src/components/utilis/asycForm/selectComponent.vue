<template>
    <el-select 
        v-model="sizeForm[model]"
        v-bind="attr"
        v-on="evt"
    >
        <el-option
          v-for="(item,key) in options"
          :key="key"  
          :label="item.label" 
          :value="item.value"
        />
    </el-select>
</template>
<script>
export default {
    name:"selectComponent",
    props:["sizeForm","options","model","evt","attr"]
}
</script>