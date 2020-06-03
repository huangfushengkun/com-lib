<template>
  <el-menu
    class="menu-container"
    @select="fMenuSelect"
    active-text-color="#ffd04b"
    router
    unique-opened
  >
    <menu-component
      v-for="(item, key) in list"
      :key="key"
      :index="key + 1"
      :source="item"
    />
  </el-menu>
</template>
<script>
import menuComponent from "./utilis/menus";
export default {
  name: "menuComponentI",
  data() {
    return {
      list: [
        {
          name: "状态",
          // icon:require("@/assets/images/maintenanceStatus.png"),
          path: "MaintenanceStatus"
        },
        {
          name: "管理",
          // icon:require("@/assets/images/operManagement.png"),
          path: "operManagement",
          list: [
            {
              name: "监控",
              // icon:require("@/assets/images/dot.png"),
              path: "Monitoring"
            },
            {
              name: "通报",
              // icon:require("@/assets/images/dot.png"),
              path: "Technology"
            },
            {
              name: "统计",
              // icon:require("@/assets/images/dot.png"),
              path: "FaultMonitoring"
            },
            {
              name: "监控",
              // icon:require("@/assets/images/dot.png"),
              path: "LifeTime"
            }
          ]
        },
        {
          name: "管理",
          // icon:require("@/assets/images/pedigree.png"),
          path: "pedigree",
          list: [
            {
              name: "正文",
              // icon:require("@/assets/images/dot.png"),
              list: [
                {
                  name: "证明",
                  path: "acceptance"
                },
                {
                  name: "试车",
                  path: "natureData"
                },
                {
                  name: "曲线",
                  path: "natureBigth"
                },
                {
                  name: "结论",
                  path: "verDict"
                },
                {
                  name: "说明",
                  path: "special"
                },
                {
                  name: "命首",
                  path: "modify"
                },
                {
                  name: "时安",
                  path: "adjunct"
                },
                {
                  name: "寿命",
                  path: "reason"
                },
                {
                  name: "体零",
                  path: "record"
                },
                {
                  name: "元体",
                  path: "graveChange"
                },
                {
                  name: "封启",
                  path: "seal"
                },
                {
                  name: "中的",
                  path: "tearInstall"
                },
                {
                  name: "时间",
                  path: "cycleIndex"
                },
                {
                  name: "记事",
                  path: "memorandum"
                },
                {
                  name: "通报",
                  path: "carryOut"
                }
              ]
            },
            {
              name: "副本",
              // icon:require("@/assets/images/dot.png"),
              list: [
                {
                  name: "时间",
                  path: "workTime"
                },
                {
                  name: "试车",
                  path: "argument"
                },
                {
                  name: "工作",
                  path: "maintain"
                },
                {
                  name: "检查",
                  path: "period"
                }
              ]
            },
            {
              name: "检验维护",
              // icon:require("@/assets/images/dot.png"),
              list: [
                {
                  name: "清单",
                  path: "partsList"
                },
                {
                  name: "间隙",
                  path: "space"
                },
                {
                  name: "参数",
                  path: "accept"
                },
                {
                  name: "消耗",
                  path: "grease"
                },
                {
                  name: "光谱",
                  path: "spectrum"
                }
              ]
            },
            {
              name: "管理",
              // icon:require("@/assets/images/dot.png"),
              path: "Fault"
            },
            {
              name: "数据清单",
              // icon:require("@/assets/images/dot.png"),
              path: "DataList"
            }
          ]
        },
        {
          name: "识别",
          // icon:require("@/assets/images/capacity.png"),
          path: "capacity"
        },
        {
          name: "履历卡",
          // icon:require("@/assets/images/cardManagement.png"),
          path: "CardManagement"
        },
        {
          name: "分析",
          // icon:require("@/assets/images/dataManagement.png"),
          path: "DataManagement"
        },
        {
          name: "载分析",
          // icon:require("@/assets/images/loadSpectrum.png"),
          path: "ZhpManagement"
        },
        {
          name: "技料",
          // icon:require("@/assets/images/techData.png"),
          path: "TechnicalInfo"
        },
        {
          name: "学习训",
          // icon:require("@/assets/images/training.png"),
          path: "Training"
        },
        {
          name: "系设置",
          // icon:require("@/assets/images/systemSetup.png"),
          path: "systemSetup"
        }
      ]
    };
  },
  components: {
    menuComponent
  },
  methods: {
    fMenuSelect(index, indexPath) {
      console.log(index);
      console.log(indexPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.menu-container {
  background-color: transparent;
  border: none;
  height: 100%;
  .el-menu-item {
    color: rgb(102, 204, 255) !important;
    font-size: 16px;
  }
}
</style>
<style>
.el-submenu__title {
  color: rgb(102, 204, 255) !important;
  font-size: 16px;
}
.el-menu {
  background-color: transparent;
  -webkit-box-shadow: 0 0 12px rgba(0, 127, 255, 0.24) inset;
  box-shadow: 0 0 12px rgba(0, 127, 255, 0.24) inset;
}
.el-menu-item:hover,
.el-submenu__title:hover {
  background-color: rgba(0, 81, 170, 0.1);
}
.el-menu-item.is-active {
  color: #66ccff;
  background: rgba(0, 81, 170, 0.3);
  border-color: #00a6ff;
  border-style: solid;
  border-left-color: #66ccff;
  border-width: 1px 1px 1px 4px;
  -webkit-box-shadow: 0 0 9px rgba(0, 174, 255, 0.4) inset;
  box-shadow: 0 0 9px rgba(0, 174, 255, 0.4) inset;
  font-family: "Microsoft YaHei";
  font-size: 17px;
  text-shadow: 0 2px 1px black;
}
.hs-menu-item,
.hs-menu-item-ii .el-submenu__title,
.hs-menu-item-iii {
  position: relative;
  padding-left: 60px !important;
}
.hs-menu-item .item-icon,
.hs-menu-item-ii .item-icon {
  position: absolute;
  left: 20px;
  margin: auto 0px;
  top: 0px;
  bottom: 0px;
}
.hs-menu-item-iii .item-icon {
  position: absolute;
  left: 40px;
  margin: auto 0px;
  top: 0px;
  bottom: 0px;
}
</style>
