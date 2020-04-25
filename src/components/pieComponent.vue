<template>
  <section>
    <input type="button" value="异步加载数据" @click="fButtonClick"/>
    <div class="I">
      <hs-pie
        ref="pie"
        :source="pie.data"
        :opts="pie.opts"
      ></hs-pie>
    </div>
  </section>
</template>
<script>
import hsPie from "./utilis/echarts/pie.vue"
export default {
    name:"echars",
    data(){
        return {
            pie:{
                opts:{
                  title:{
                    text:"XXX标题",
                    textStyle:{
                    color:"#fff000",
                    size:16,
                    },
                  },
                  tooltip:{},
                  legend:{},
                  /*
                   * 类型配置
                   * 类型III
                   * 可设置背景颜色和延长长度
                   * */
                  series:{
                    type:"I",
                  },
                },
                data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:154, name:'搜索引擎'}
                ] 
            }
        }
    },
    components:{
       hsPie
    },
    methods:{
      fButtonClick(){
        this.pie.data=[{
            "name":"\u65E0\u6545\u969C:50.00%(6\u53F0)",
            "value":6
          },{
            "name":"\u4E00\u822C\u8B66\u62A5:8.33%(1\u53F0)",
            "value":10
          },{
            "name":"\u9EC4\u8272\u8B66\u62A5:8.33%(1\u53F0)",
            "value":1
          },{
            "name":"\u7EA2\u8272\u8B66\u62A5:33.33%(4\u53F0)",
            "value":4
          }
        ];
      }
    }
}
</script>
<style scoped>
  div{
       border:solid 1px #999;
       width: 600px;
       height: 300px;
       background-color: rgba(0, 0, 0, .1) 
  }
  .I{
       width: 600px;
       height: 300px;
   }
  .II{
       width: 600px;
       height: 300px;
   }
  .III{
       width: 260px;
       height: 272px;
   }
</style>