<template>
  <div>
    <section class="bar-container"></section>
  </div>
</template>
<script>
import echartsMod from "./lib";//配置库
import echarts from "echarts";
/*
 * 配置映射
 * */
let echartOptsMap={
  title:echartsMod.title,
  tooltip:echartsMod.tooltip,
  legend:echartsMod.legend,
  grid:echartsMod.grid,
  series:echartsMod.seriesGrid,
  dataZoom:echartsMod.dataZoom,
  toolbox:echartsMod.toolBox,
  xAxis:echartsMod.xAxis,
  yAxis:echartsMod.yAxis,
  graphic:echartsMod.graphic
};
/*
 * 图表配置工厂
 * */
let echartOptsFactory=(params)=>{
    let opts={}
    for(let [key,item] of Object.entries(params)){
    console.log(key,item);
    
        opts[key]=echartOptsMap[key]['setConf'](item)[key]
    }
    return opts 
}
/*
 * 柱图数据配置工厂
 * */
let echartDataFactory=(params,keys)=>{
    let opts={}
    for(let [key,item] of Object.entries(params)){
        opts[key]=echartOptsMap[key]['setData'](item)[key]
    }
    return opts 
}

/*
 * 柱图
 * */
export default {
    name:"barComponent",
    props:{
      opts:{
        type:Object
      },
      source:{
        type:Object,
        default:[]
      }
    },
    computed:{
      name(){
        console.log(this.source.series);
      }
    },
    watch:{
      source:{
        handler:function(v){
           this.fSetData(v);
        },
        deep:true
      }
    },
    methods:{
        fSetData(params){
            let gridChart=echarts.getInstanceByDom(this.$el);
            gridChart.setOption(echartDataFactory(params));
        }
    },
    mounted(){
      let gridChart=echarts.getInstanceByDom(this.$el);
      if(gridChart){
        gridChart.setOption(echartDataFactory(this.source));
      }else{
        /*
         * 主题色
         * 字体颜色
         * 坐标轴颜色
         * 坐标分割线
         * */
        gridChart=echarts.init(this.$el);
        console.log(this);
        console.log(this.$el);
        
        gridChart.setOption(echartOptsFactory(this.opts));
        gridChart.setOption(echartDataFactory(this.source));
       
       // gridChart.setOption({
        //   grid:{
        //     id:"grid",
        //     left:"7%",
        //     right:"7%",
        //     top:"12%",
        //     bottom:"8%"
        //   },
        //   xAxis: {
        //     id:"xAxisI",
        //     type: 'category', //数值与枚举
        //     name:"123",
        //     nameTextStyle:{
        //       color:"#ff0000"
        //     },
        //     axisLine:{
        //       show:true,
        //       lineStyle:{
        //         color:"#ff0000"
        //       }
        //     },
        //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        //   },
        //   yAxis:[{
        //     id:"yAxisI",
        //     type: 'value',
        //     name:'Y',

        //     nameTextStyle:{
        //       color:'#ff0000'
        //     },
        //     axisLine:{
        //       show:true,
        //       lineStyle:{
        //         color:"#ff0000"
        //       }
        //     },
        //     splitLine:{
        //       show:false,
        //       lineStyle:{
        //         color:["#ff0000"]
        //       }
        //     }
        //   },{
        //     id:"yAxisII",
        //     type: 'value',
        //     name:'Y',
        //     nameTextStyle:{
        //       color:'#ff0000'
        //     },
        //     axisLine:{
        //       show:true,
        //       lineStyle:{
        //         color:"#ff0000"
        //       }
        //     },
        //     axisLabel: {
        //         formatter: '{value}'
        //     },
        //     splitLine:{
        //       show:true,
        //       lineStyle:{
        //         color:["#ff0000"]
        //       }
        //     }
        //   }],
        //   series: [
        //     {
        //       data: [120, 200, 150, 80, 70, 110, -30],
        //       type: 'bar',
        //       stack:"fit"
        //     },{
        //       data: [120, 200, 150, 80, 70, 110, -30],
        //       type: 'bar',
        //       yAxisIndex: 1,
        //       stack:"fit"
        //     }
        //   ]
        // });

      }
    }
}
</script>
<style scoped>
 .bar-container{
     height: 100%;
 }
</style>