<template functional>
    <el-pagination
      @size-change="props.handleSizeChange"
      @current-change="props.handleCurrentChange"
      :current-page="props.currentPage"
      :page-sizes="props.pageSizes"
      :page-size="props.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="props.total"
    >
    </el-pagination>
</template>
<script>
export default {
  name:"paginationTpl",
  props:{
    layout:String,
    total:Number,
    pageSizes:Array,
    pageSize:Number,
    currentPage:Number,
    handleCurrentChange:Function,
    handleSizeChange:Function
  },
}
</script>
<style lang="scss">
.el-pagination .btn-next, .el-pagination .btn-prev,.el-dialog, .el-pager li{
    background-color: transparent !important;
}
.el-pagination__total,.el-pagination__jump,.el-pagination .btn-next, .el-pagination .btn-prev,.el-dialog, .el-pager li{
   color:#66CCFE;
}
.el-pagination button:disabled{
    color: #C0C4CC;
}
.el-select-dropdown__item{
    color:#66CCFE;
}
</style>