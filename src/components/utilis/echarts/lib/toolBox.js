/*
 * 工具盒
 * 
 * 默认配置
 * */
let DefConf={
    id:"toolBox_0",
    feature: {
        dataZoom: {
            yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {},
    }
}
export default {
    /*
     * 设置配置
     * */
    setConf:(params)=>{
        let opts=params?DefConf:params;
        return {
            toolbox:opts
        }
    },
    /*
     * 设置数据
     * */
    setData:(params)=>{

    }
}