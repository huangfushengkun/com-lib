<template>
    <el-radio-group 
       v-model="sizeForm[model]"
       v-on="evt" 
       size="medium"
    >
        <el-radio
          v-for="(item,key) in items"
            v-bind="item.attr"
            :key="key" 
            :label="item.label" 
        />
    </el-radio-group>
</template>
<script>
export default {
    name:"radioCompoent",
    props:[
        'model',
        'items',
        'sizeForm',
        'evt'
    ]
}
</script>