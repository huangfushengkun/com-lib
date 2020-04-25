<template functional>
    <h1 class="title-container">
        <img :src="props.logo" />
        {{props.title}}
    </h1>
</template>
<script>
export default {
    props:["title","logo"]
}
</script>
<style lang="scss" scoped>
.title-container{
    position: relative;
    color:#66ccff;
    font-size: 30px;
    font-weight: bold;
    padding-left: 58px; 
    img{
        position: absolute;
        margin: auto 0px;
        top:0px;
        bottom: 0px;
        left:0px;
    }
}
</style>