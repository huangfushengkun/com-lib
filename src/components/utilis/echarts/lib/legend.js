/*
 * 图例组件
 *
 * 默认样式
 * @params {String} orient 排列方式 【horizontal:水平，vertical：垂直】
 * @params {Object} pos 显示位置
 * */
let TextStyle={
    color:"#65cefe"
}
let DefConf={
    orient:'vertical',
    align:'auto',
    x:'left'
}
export default {
    /*
     * 设置配置
     * @params {String} orient 排列方式 【horizontal:水平，vertical：垂直】
     * @params {Object} pos 显示位置
     * */
    setConf:(params)=>{
        let opts=Object.assign({},DefConf,params);
        opts.textStyle=Object.assign({},TextStyle,params.textStyle);
        return {
            legend:{
                id:"legend",
                ...opts,
                data:[]
            }
        }
    },
    /*
     * 设置数据
     * */
    setData:(params)=>{
        return {
            legend:{
                id:"legend",
                data:params
            }
        }
    }
}