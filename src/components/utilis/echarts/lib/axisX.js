/*
 * 坐标系
 * */
import axisConf from "./axis";

/*
 * 默认设置
 * */
let DefConf={
    name:"-",
    id:"xAxis_0",
    type: 'category', //数值与枚举
    nameTextStyle:{
        color:"#ff0000"
    },
    axisLine:{
        show:true,
        lineStyle:{
            color:"#ff0000"
        }
    },
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
                opts.push(Object.assign({},DefConf,{id:`xAxis_${index}`},item));
            })
        }else{
            opts=Object.assign({},DefConf,params);
        }
        return {
            xAxis:opts
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
                console.log(...item);
                opts.push({id:`xAxis_${index}`,...item});
            })
        }else{
            opts={id:"xAxis_0",...params};
        }
        return {
            xAxis:opts
        }
    }
}