<template functional>
    <el-dropdown @command="props.checkoutItem">
        <span class="el-dropdown-link">
           <i :class="props.source.title.icon" class="el-icon--left"></i>{{props.source.title.name}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item 
             v-for="(item,key) in props.source.list"
             :key="key"
             :icon="item.icon" 
             :command="item.command">
             {{item.name}}
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>    
</template>
<script>
export default {
  props:[
   'checkoutItem',
   'source' 
  ]
}
</script>
<style lang="scss">
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    font-size: 18px;
  }

  .el-dropdown{
      position: absolute;
      line-height: 1;
      height: 24px;
      margin: auto 0px;
      top:0px;
      bottom: 0px;
      right: 0px;
  }
  .el-dropdown-menu{
    background-color: rgba(1, 143, 252, 0.3);
    border: 1px solid #0b2342;
  }
  .el-dropdown-menu__item{
    color: #66ccff;
  }
  .el-popper[x-placement^=bottom] .popper__arrow::after{
    border-bottom-color:#0c3059;
  }
  .el-popper[x-placement^=bottom] .popper__arrow{
    border-bottom-color:#0b2342;
  }
  .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover{
    background-color: rgba(1, 143, 252, 0.3);
  }
</style>