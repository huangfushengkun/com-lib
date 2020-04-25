/*
 * 坐标系数据
 *
 * 默认设置
 * */
let DefConf={
    data:[],
    id:"series_0",
    type:"",
    stack:"", //堆砌
    yAxisIndex:0,  //Y轴坐标
    xAxisIndex:0,  //X轴坐标
    markLine:{     //描线
      data:[]
    },
    markPoint:{    //描点
      data:[]
    }
}

/*
 * 标记线默认设置
 * */
let DefLine={
    lineStyle:{
        color:"#fff0ff"
    }
}

/*
 * 标记点默认设置
 * */
let DefPoint={
    itemStyle:{
        color:"#f00000"
    }
}

/*
 * 设置数据
 * */
export default {
    /*
     * 配置设置
     * */
    setConf:(params)=>{
        let opts=null;
        if(Array.isArray(params)){
            opts=[];
            let cache=null;
            params.map((item,index)=>{
                let {markLine={},markPoint={},...args}=item;
                cache=Object.assign({},DefConf,{id:`series_${index}`},args);
                cache.markLine=Object.assign({},DefLine,markLine);
                cache.markPoint=Object.assign({},DefPoint,markPoint);
                opts.push(cache);
            })
        }else{
            let {markLine={},markPoint={},...args}=params;
            opts=Object.assign({},DefConf,args);
            opts.markLine=Object.assign({},DefLine,markLine);
            opts.markPoint=Object.assign({},DefPoint,markPoint);

        }
        return {
            series:opts
        };
    },
    /*
     * 设置数据
     * */
    setData:(params)=>{
        let opts=null;
        if(Array.isArray(params)){
            opts=[];
            params.map((item,index)=>{
                let {data,line={},point={},...args}=item;
                opts.push({
                    id:`series_${index}`,
                    data:data,
                    markLine:{data:line},
                    markPoint:{data:point},
                    ...args
                })
            })
        }else{
            let {data,line={},point={},...args}=params;
            opts={
                id:"series_0",
                // type:type,
                // name:name,
                data:data,
                markLine:{data:line},
                markPoint:{data:point},
                ...args
            }
        }
        return {
            series:opts
        }
    }
}
