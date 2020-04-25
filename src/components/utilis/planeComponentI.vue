<template functional>
  <div class="plane-I">
     <h3>发动机运行状态</h3>
     <slot></slot>
  </div>    
</template>
<script>
export default {
    name:"plane-I",
    props:[
      "title",
      "type"
    ]
}
</script>
<style lang="scss" scoped>
   .plane-I{
     border:solid 1px #ff0000;
   }
</style>