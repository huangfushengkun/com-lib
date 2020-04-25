/*
 * 坐标系
 *
 * 默认配置
 * */
let DefConf={
    id:"grid",
    left:"7%",
    right:"7%",
    top:"18%",
    bottom:"20%"
}

export default {
    /*
     * 设置配置
     * */
    setConf:(params)=>{
        let opts=Object.assign({},DefConf,params);
        return {
            grid:opts
        };        
    },
    /*
     * 设置数据
     * */
    setData:()=>{

    }
}