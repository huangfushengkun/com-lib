<template>
  <el-table
    v-if="refresh"
    :data="items"
    border
    @selection-change="handleSelectChange"
    :row-class-name="handleRowClassName"
    :cell-class-name="handleCellClassName"
  >
    <slot></slot>
  </el-table>
</template>
<script>
export default {
  data: function() {
    return {
      refresh: true
    };
  },
  props: [
    "items",
    "handleSelectChange",
    "headers",
    "handleRowClassName",
    "handleCellClassName"
  ],
  watch: {
    headers: {
      handler: function() {
        this.refresh = false;
        this.$nextTick(() => {
          this.refresh = true;
        });
      },
      deep: true
    }
  },
  mounted() {
    console.log(this.handleRowClassName);
    console.log(this.handleCellClassName);
  }
};
</script>
<style lang="scss">
// 商品详情样式
.vares_thumbnail {
  display: flex;
  img {
    width: 50px;
  }
  .vares_text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    span {
      margin-left: 5px;
    }
  }
}

.el-table--enable-row-hover .el-table__body tr:hover > td,
.el-table,
.el-table__expanded-cell {
  background: #0c3059 !important;
}
.el-table,
.el-table thead {
  color: #65cefe;
  font-size: 15px;
  border-color: rgba(102, 204, 255, 0.4) !important;
}
.el-table tr,
.hover-row td {
  background-color: #0c3059 !important;
}
.el-table td,
.el-table th {
  border-color: rgba(102, 204, 255, 0.4) !important;
}
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: transparent;
}
.el-table--border,
.el-table--group {
  border-color: rgba(102, 204, 255, 0.4) !important;
}
.el-table th {
  background: rgba(110, 183, 245, 0.1) !important;
}
.el-checkbox__inner {
  background-color: transparent;
  border: 1px solid rgba(102, 204, 255, 0.4) !important;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: rgba(110, 183, 245, 0.4);
}
.el-table__fixed-right::before,
.el-table__fixed::before {
  height: 0px;
}
.el-table__row {
  td {
    padding: 0px !important;
  }
  .cell {
    padding: 0px !important;
    height: 100%;
    box-sizing: border-box;
    div {
      padding: 12px 10px;
      min-height: 23px;
      border-bottom: solid 1px rgba(102, 204, 255, 0.4);
    }
    div:nth-last-of-type(1) {
      border-bottom: none;
    }
  }
  .el-input__inner {
    width: 100%;
    box-sizing: border-box;
  }
  .el-input {
    padding: 0px !important;
  }
  p {
    margin: 0px;
    height: 100%;
    box-sizing: border-box;
    cursor: pointer;
  }
}
.dz-p {
  .cell {
    padding: 0px 10px !important;
  }
}
.el-table--scrollable-y .el-table__body-wrapper::-webkit-scrollbar {
  width: 1px;
}
.cell-0 {
  padding: 0 !important;
}
</style>
