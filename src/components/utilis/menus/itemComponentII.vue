<template functional>
      <el-submenu :index="props.index" class="hs-menu-item-ii">
          <template slot="title">
             <i>
                 <img :src="props.item.icon" class="item-icon"/>
             </i>
             <span>{{props.item.name}}</span>
          </template>
          <slot></slot>
      </el-submenu>
</template>
<script>
export default {
    props:["item","index"]
}
</script>      