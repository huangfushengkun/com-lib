<template functional>
    <el-table-column
        :label="props.items.name"
        :width="props.items.width"
    >
       <slot></slot>
    </el-table-column>
</template>
<script>
/*
 * 列组件
 * @params {object} items 数据源
 * */
export default {
    name:"columnComponent",
    props:["items"]
}
</script>