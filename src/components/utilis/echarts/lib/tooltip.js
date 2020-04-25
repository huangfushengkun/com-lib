/*
 * 浮动层
 * @params {Boolean} show 是否显示
 * @params {String} trigger 触发类型 （饼图：item,类目轴：axis）
 * @params {String|Function} formatter 显示文本格式
 * 
 * 默认控制配置
 * */
let DefConf={
    show:true,
    trigger:'item',
    formatter:"{a} <br/>{b}: {c} ({d}%)"
}

export default {
    /*
     * 设置配置
     * @params {Boolean} show 是否显示
     * @params {String} trigger 触发类型 （饼图：item,类目轴：axis）
     * @params {String|Function} formatter 显示文本格式
     * */
    setConf:(params)=>{
        let opts=Object.assign({},DefConf,params);
        return {
            tooltip:opts
        }
    },
    /*
     * 设置数据
     * */
    setData:(params)=>{
        return {}
    }
}