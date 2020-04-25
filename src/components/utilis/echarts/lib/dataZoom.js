/*
 * 放大缩小
 *
 * 默认配置
 * filterMode:
 * 当『只有 X 轴 或 只有 Y 轴受 dataZoom 组件控制』时，常使用 filterMode: 'filter'，这样能使另一个轴自适应过滤后的数值范围。
 * 当『X 轴 Y 轴分别受 dataZoom 组件控制』时：
 * 如果 X 轴和 Y 轴是『同等地位的、不应互相影响的』，比如在『双数值轴散点图』中，那么两个轴可都设为 fiterMode: 'empty'。
 * 如果 X 轴为主，Y 轴为辅，比如在『柱状图』中，需要『拖动 dataZoomX 改变 X 轴过滤柱子时，Y 轴的范围也自适应剩余柱子的高度』，
 * 『拖动 dataZoomY 改变 Y 轴过滤柱子时，X 轴范围不受影响』，那么就 X轴设为 fiterMode: 'filter'，Y 轴设为 fiterMode: 'empty'，
 * 即主轴 'filter'，辅轴 'empty'。
 * */
let DefConf=[{
    id:"zoom_0",
    height:12,
    handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
    handleSize: '110%',
    handleStyle:{
      color:"#d3dee5",

    },
    textStyle:{
      color:"#fff"
    },
    borderColor:"#90979c",
    type: 'slider', //滚动条类型：slider, 区域缩放：inside
    show:true,      //是否显示
    xAxisIndex: 0,  //控制的x轴标记
    filterMode: 'empty',
},{
    id:"zoom_1",
    width:12,
    type: 'slider',
    handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
    handleSize: '110%',
    handleStyle:{
      color:"#d3dee5",

    },
    textStyle:{
      color:"#fff"
    },
    borderColor:"#90979c",
    show:true,
    yAxisIndex: 0,
    filterMode: 'empty'
},{
    id:"zoom_2",
    type: 'inside',  //区域支持滚动缩放
    show:true,
    xAxisIndex: 0,
    filterMode: 'empty'
},{
    id:"zoom_3",
    type: 'inside',
    show:true,
    yAxisIndex: 0,
    filterMode: 'empty'
}]
export default {
    /*
     * 设置配置
     * 缩小放大配置信息暂时支持默认配置或者用户配置；
     * */
    setConf:(params=null)=>{
        let opts=params.length>0?params:DefConf;
        return {
            dataZoom:opts 
        } 
    },
    /*
     * 设置数据
     * */
    setData:()=>{

    }
}