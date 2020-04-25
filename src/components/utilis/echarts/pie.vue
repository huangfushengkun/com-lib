<template>
  <section class="pie-container"></section>  
</template>
<script>

import echartMod from "./lib"; //配置库
import echarts from "echarts";
/*
 * 配置映射
 * */
let echartOptsMap={
    title:echartMod.title,
    tooltip:echartMod.tooltip,
    legend:echartMod.legend,
    series:echartMod.seriesPie,
    graphic:echartMod.graphic
}
/*
 * 图表配置工厂
 * */
let echartOptsFactory=(params)=>{
    let opts={}
    for(let [key,item] of Object.entries(params)){
        opts[key]=echartOptsMap[key]['setConf'](item)[key]
    }
    return opts
}
/*
 * 饼图数据配置工厂
 * */
let echartDataFactory=(params,keys)=>{
    console.log(keys);
    let opts={};
    if(keys.includes('legend')){
        opts.legend=echartOptsMap.legend.setData(params.map((item)=>{
            return item.name;
        })).legend;
    }
    opts.series=echartOptsMap.series.setData(params).series;
    return opts;
}

/*
 * 饼图（环形图）
 * */
export default {
    name:"pieComponent",
    props:{
        opts:{
            type:Object
        },
        source:{
            type:Array,
            default:[]
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
    mounted(){
        let pieChart=echarts.getInstanceByDom(this.$el);        
        if(pieChart){
            pieChart.setOption(echartDataFactory(this.source,Object.keys(this.opts)));
        }else{
            pieChart=echarts.init(this.$el);
            pieChart.setOption(echartOptsFactory(this.opts));
            pieChart.setOption(echartDataFactory(this.source,Object.keys(this.opts)));
        }
    },
    methods:{
        fSetData(params){
            let pieChart=echarts.getInstanceByDom(this.$el);
            pieChart.setOption(echartDataFactory(params,Object.keys(this.opts)));
        }
    }
}
</script>
<style>
 .pie-container{
     height: 100%;
 }
</style>