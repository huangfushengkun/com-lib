<template>
    <el-date-picker
        :type="type"
        v-model="sizeForm[model]"
        v-bind="attr"
        v-on="evt"
        style="width:100%"
    />
</template>
<script>
export default {
    name:"dateComponent",
    props:[
        'type',
        'sizeForm',
        'model',
        'evt',
        'attr'
    ]
}
</script>
<style lang="scss">

</style>