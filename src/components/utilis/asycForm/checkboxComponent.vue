<template>
    <el-checkbox-group
       v-model="sizeForm[model]"
       v-on="evt"
    >
        <el-checkbox
          v-for="(item,key) in items"
            v-bind="item.attr"
            :key="key" 
            :label="item.label" 
            :name="item.name"
        />
    </el-checkbox-group> 
</template>
<script>
export default {
    name:"checkBoxComponentz",
    props:[
        'sizeForm',
        'model',
        'items',
        'evt'
    ]
}
</script>