/*
 * 标题组件
 *
 * 默认字体样式
 * */
let TextStyle={
    fontSize:18,
    color:"#ff0000",
};
/*
 * 默认控制配置
 * */
let DefOpts={
    show:true,
    text:"-",        
    top:"5",
    left:"center"   
};
export default {
    /*
     * 设置配置
     * @params {Boolean} show 是否显示
     * @params {String} text 标题值
     * @params {Object} textStyle 字体样式
     * 其他echart包含的配置支持
     * */
    setConf:(params)=>{
        let opts=Object.assign({},DefOpts,params);
        opts.textStyle=Object.assign({},TextStyle,params.textStyle);
        return {
            title:{
                id:"title",
                ...opts
            }
        }
    },
    /*
     * 设置数据
     * */
    setData:(params)=>{
        return {
           
        }
    }
}