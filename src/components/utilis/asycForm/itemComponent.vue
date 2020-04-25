<template functional>
    <el-form-item
      :label="props.label"
      :prop="props.name"
    >
        <slot></slot>
    </el-form-item>
</template>
<script>
export default {
    name:"formItemComponent",
    props:["label","name"]
}
</script>