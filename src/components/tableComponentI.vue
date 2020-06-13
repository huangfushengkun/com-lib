<template>
  <div>
    <input @click="fBtnClick" type="button" value="确定" />
    <table-component
      v-if="tbTag"
      :headers="headers"
      :source="source"
      :handleSelectChange="fHandleSelectChange"
      :handleEdit="fHandleEditSource"
      :handleDelete="fHandleDeleteSource"
      :handleRowClassName="fHandleRowClassName"
      :handleCellClassName="fhandleCellClassName"
    />
  </div>
</template>
<script>
/*
 * _edit='Y|N'
 * rule 输入规则
 * int:纯整数
 * float:小数
 * money:小数点后两位小数
 * en:纯字母
 * cn:纯中文
 * */
import tableComponent from "./utilis/table";
export default {
  name: "tabelComponent",
  data() {
    return {
      tbTag: true,
      headers: [
        {
          type: "chk",
          width: ""
        },
        // ,{
        //     name:"转速r/min",
        //     children:[{
        //         name:"蒸汽发生器",
        //         children:[{
        //             name:"物理",
        //             key:"list",
        //             width:"",
        //             rule:"float",
        //             fixed:true
        //         },{
        //             name:"换算",
        //             key:"name",
        //             width:"",
        //             rule:/^\d$/,
        //             fixed:true
        //         }]
        //     },{
        //         name:"动力涡轮",
        //         children:[{
        //             name:"物理",
        //             key:"address",
        //             width:"",
        //             fixed:true
        //         }]
        //     }]
        // }
        {
          name: "输出轴功率kw",
          children: [
            {
              name: "换算",
              key: "name",
              width: "",
              format: v => `v0`
            },
            {
              name: "实测",
              key: ["address"],
              width: "",
              format: v => v
            }
          ]
        }
        // ,{
        //     name:"温度C",
        //     children:[{
        //         name:"滑油进口实测值",
        //         key:"date",
        //         width:""
        //     },{
        //         name:"燃气温度T45",
        //         children:[{
        //             name:"换算",
        //             key:"name",
        //             width:""
        //         },{
        //             name:"实测",
        //             key:"name",
        //             width:""
        //         }]
        //     }]
        // }
        // ,{
        //    type:"delete",
        //    name:"操作",
        //    width:""
        // }
      ],
      source: [
        {
          date: "",
          name: 1,
          list: [1, 2],
          address: "上海市普陀",
          // _edit:{
          //   date:true,
          //   name:true,
          //   list:[true,false],
          //   address:true
          // },
          _rule: {
            date: "date"
          }
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          list: [1, 2],
          address: "上海市普陀",
          _edit: {
            date: true,
            name: false,
            list: [true, false],
            address: true
          }
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          list: [2, 4, 5],
          address: "上海市普陀",
          _edit: {
            date: true,
            name: true,
            list: [true, false, false],
            address: true
          }
        },
        {
          date: "2016-05-01",
          name: "",
          list: [3],
          address: "上海市普陀",
          _edit: {
            date: true,
            name: true,
            list: [true],
            address: true
          }
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          list: [4],
          address: "上海市普陀",
          _edit: {
            date: true,
            name: true,
            list: [true],
            address: true
          }
        }
      ]
    };
  },
  components: {
    tableComponent
  },
  methods: {
    /*
     * checkbox选择回调
     * @params {array} val 选择行的数据数组
     * */
    fHandleSelectChange(val) {
      console.log(val);
    },
    /*
     * 编辑表格项回调函数
     * @params {object} row 编辑后的行数据
     * @params {Number} index 编辑的行号
     * @params {object} edit 表格项目的编辑状态，使用 edit 对象里，添加值对应的字段，如：edit.address=false ,使用boolean值进行赋值
     * @params {object} rule 表格项目的验证规则，使用 rule 对象里，添加值对应的字段，除已经设置的默认的验证类型，还可以直接添加正则表达式，如：rule.name="en" 或 rule.name=/\d/
     * */
    fHandleEditSource(row, index, edit, rule) {
      console.log(edit);
      console.log(row);
      // edit.address=false;
      // rule.name=/\d/;
    },
    /*
     * 表格删行回调
     * @params {object} row 删除行的数据
     * @params {Number} index 删除的行号
     * */
    fHandleDeleteSource(row, index) {
      console.log(row);
    },
    /* 行样式 */
    fHandleRowClassName({ row, rowIndex }) {
      if (row.name == "王小虎") {
        return "a_class";
      } else {
        return "";
      }
    },
    /* 单元格样式 */
    fhandleCellClassName({ row, rowIndex }) {
      console.log(row);
      if (row.name == "王小虎") {
        return "a_yby";
      } else {
        return "";
      }
    },
    fBtnClick() {
      this.headers = [
        //     {
        //     type:"chk",
        //     width:""
        // },
        // {
        //     name:"状态02",
        //     key:"list",
        //     width:"",
        //     rule:"cn",
        //     fixed:true
        // }
        // ,
        {
          name: "转速r/min",
          children: [
            {
              name: "蒸汽发生器02",
              children: [
                {
                  name: "物理1",
                  key: "name",
                  width: "",
                  rule: "float",
                  fixed: true
                }
              ]
            },
            {
              name: "动力涡轮",
              children: [
                {
                  name: "物理2",
                  key: "address",
                  width: "",
                  fixed: true
                }
              ]
            }
          ]
        },
        {
          name: "输出轴功率kw02",
          children: [
            {
              name: "换算",
              key: "list",
              width: ""
            },
            {
              name: "实测",
              key: "name",
              width: ""
            }
          ]
        }
      ];
      // this.tbTag=false;
      // this.$nextTick(()=>{
      //     this.tbTag=true;
      // })
    }
  }
};
</script>
<style lang="scss">
.a_yby {
  color: red !important;
}
</style>
