<template functional>
     <el-menu-item :index="props.item.path" class="hs-menu-item">
        <i>
          <img :src="props.item.icon" class="item-icon"/>
        </i>
        <span slot="title">{{props.item.name}}</span>
      </el-menu-item>
</template>
<script>
export default {
    props:["item","index"]
}
</script>