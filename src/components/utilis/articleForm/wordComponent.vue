<template>
    <el-form-item
        v-if="Array.isArray(word)"
        :prop="word[2]"
    >
        <el-input
          :class="'word-'+word[1]"
          v-model="sizeForm[word[2]]"
        /> 
    </el-form-item>
    <span
        v-else-if="word!==''"
    >{{word}}</span>
</template>
<script>
/*
 * input 帮定状态，无法使用函数式
 * */
export default {
    name:"wordComponent",
    props:[
        "word",
        "sizeForm"
    ]
}
</script>