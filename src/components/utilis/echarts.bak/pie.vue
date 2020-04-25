<template>
  <section class="pie-container"></section>  
</template>
<script>
import titleMod from "./lib/title";
import tooltipMod from "./lib/tooltip";
import legendMod from "./lib/legend";
import seriesMod from "./lib/seriesPie";
import graphicMod from "./lib/graphic";
import echarts from "echarts";
/*
 * 配置映射
 * */
let echartOptsMap={
    title:titleMod,
    tooltip:tooltipMod,
    legend:legendMod,
    series:seriesMod,
    graphic:graphicMod
}
/*
 * 图表配置工厂
 * */
let echartOptsFactory=(params)=>{
    console.log(Object.keys(params));
    let opts={}
    for(let [key,item] of Object.entries(params)){
        console.log(key);
        opts[key]=echartOptsMap[key]['setConf'](item)[key]
    }
    return opts
}
/*
 * 数据配置工厂
 * */
let echartDataFactory=(params,keys)=>{
    console.log(keys);
    let opts={};
    if(keys.includes('legend')){
        opts.legend=legendMod.setData(params.map((item)=>{
            return item.name;
        })).legend;
    }
    opts.series=seriesMod.setData(params).series;
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
    mounted(){
        let pieChart=echarts.getInstanceByDom(this.$el);
        
        if(pieChart){
            pieChart.setOption(echartDataFactory(this.source,Object.keys(this.opts)));
        }else{
            pieChart=echarts.init(this.$el);
            pieChart.setOption(echartOptsFactory(this.opts));
            pieChart.setOption(echartDataFactory(this.source,Object.keys(this.opts)));
        }
        // pieChart.setOption({
        //     //组件标题
        //     title:{
        //         id:"title",
        //         left:"center",
        //         text:"XXX标题",
        //         show:true,
        //         textStyle:{fontSize: 18, color: "#fff000", size: 16},
        //         top: "5"
        //     },
        //     // ...echartOptsFactory(this.opts),
        //     //浮动层
        //     tooltip: {
        //         trigger: 'item',
        //         formatter: "{a} <br/>{b}: {c} ({d}%)"
        //     },
        //     //图例组件
        //     legend: {
        //         orient: 'vertical',
        //         x: 'left',
        //         data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        //     },
        //     series: [
        //         {
        //             id:"pie",
        //             name:'访问来源',
        //             type:'pie',
        //             radius: ['50%', '70%'],
        //             avoidLabelOverlap: false,
        //             label: {
        //                 show: true,
        //                 position: 'outside',
        //                 emphasis: {
        //                     show: true,
        //                        textStyle:{
        //                            fontSize:"30",
        //                            fontWeight:"bold"
        //                        }
        //                 }
        //             },
        //             labelLine: {
        //                 show: true
        //             },
        //             data:[
        //                 {value:335, name:'直接访问'},
        //                 {value:310, name:'邮件营销'},
        //                 {value:234, name:'联盟广告'},
        //                 {value:135, name:'视频广告'},
        //                 {value:1548, name:'搜索引擎'}
        //             ]
        //         }
        //     ]
        // });
    }
}
</script>
<style>
 .pie-container{
     height: 100%;
     /* background-color: aliceblue */
 }
</style>