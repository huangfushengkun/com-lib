/*
 * 坐标系
 * */
import axisConf from "./axis";

/*
 * 默认设置
 * */
let DefConf={
    name:"-",
    id:"yAxis_0",
    type: 'value', //数值与枚举
    nameTextStyle:{
        color:"#ff0000"
    },
    axisLine:{
        show:true,
        lineStyle:{
            color:"#ff0000"
        }
    },
    splitLine:{
        show:false,
        lineStyle:{
            color:["#ff0000"]
        }
    }
};

export default {
    /*
     * 设置配置
     * */
    setConf:(params)=>{
        let opts=null;
        //是否为数组
        if(Array.isArray(params)){
            opts=[];
            params.map((item,index)=>{
                opts.push(Object.assign({},DefConf,{id:`yAxis_${index}`},item));
            })
        }else{
            opts=Object.assign({},DefConf,params);
        }
        return {
            yAxis:opts
        }
    },
    /*
     * 设置数据
     * */
    setData:(params)=>{
        let opts=null;
        if(params[0]){
            opts=[];
            params.map((item,index)=>{
                opts.push({id:`yAxis_${index}`,...item});
            })
        }else{
            opts={id:"yAxis_0",...params};
        }
        return {
            yAxis:opts
        }
    }
}