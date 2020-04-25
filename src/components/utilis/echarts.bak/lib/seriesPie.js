/*
 * 图表数据
 * 图表类型：I   环形图
 *          II  饼图
 * roseType : 'radius' //蓝订尔图
 * */
let DefOpts={
    /*
     * 环形图
     * */
    I:{
        name:"-",
        type:'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        z:6
    },
    /*
     * 饼图
     * */
    II:{
        name:"-",
        type:'pie',
        radius: '70%',
        avoidLabelOverlap: false,
        z:6
    },
    /*
     * 饼图带背景
     * 背景设置：
     * bg:{
            color:"#ff0000",
            outLength:10
        }
     * */
    III:{
        name:"-",
        type:'pie',
        radius: '70%',
        avoidLabelOverlap: false,
        z:6
    },
    /*
     * 环图带背景
     * 背景色
     * bg:{
            color:"#ff0000",
            outLength:10
       },
       前景色
     * pg:{
     *      color:"#ff0000",
            outLength:10
     * }
     * */
    IV:{
        name:"-",
        type:'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        z:6
    }
}

/*
 * 默认label
 * */
let DefLabel={
    show: true,
    position: 'outside',
    emphasis: {
        show: true
    }
}

/*
 * 默认label线
 * */
let DefLabelLine={
    show: true
}

/*
 * 默认的项目样式
 * */
let DefItemStyle={
 
}

/*
 * 创建背景配置
 * */
let DefBgCycle=({opts,bg={color:"#ffffff",outLength:10}})=>{
    let radius=Array.isArray(opts.radius)?[opts.radius[0],((Number(opts.radius[1].replace("%",""))+bg.outLength)+"%")]:((Number(opts.radius.replace("%",""))+bg.outLength)+"%");
    return [{
        name:"-",
        type:'pie',
        radius:radius,
        avoidLabelOverlap:true,
        hoverAnimation:false,
        label:{
            show:false
        },
        labelLine:{
            show:false
        },
        itemStyle:{
            color:bg.color
        },
        data:[{
            value:100,
            tooltip:{
                show:false
            }
        }],
        z:2
    }]
}
/*
 * 创建前景圆
 * */
let DefPreCycle=({opts,bg={color:"#ffffff"}})=>{
    return [{
        name:"-",
        type:'pie',
        radius:[((Number(opts.radius[0].replace("%",""))-1)+"%"),opts.radius[0]],
        avoidLabelOverlap:true,
        hoverAnimation:false,
        itemStyle:{
            color:bg.color
        },
        label:{
            show:false
        },
        labelLine:{
            show:false
        },
        data:[{
            value:1000,
            tooltip:{
                show:false
            }
        }],
        z:2
    }]
}

export default {
    /*
     * 设置配置
     * @params {Object} label配置项
     * @params {Object} labelLine配置项
     * @params {Object} labelStyle配置项
     * */
    setConf:(params)=>{
        let {type,bg,pg,...oParams}=params;
        let opts=Object.assign({},DefOpts[type],oParams);
        
        opts.label=Object.assign({},DefLabel,oParams.label);
        opts.labelLine=Object.assign({},DefLabelLine,oParams.labelLine);
        opts.itemStyle=Object.assign({},DefItemStyle,oParams.itemStyle);

        let bgCycle={}; //背景圆
        let preCycle={}; //前景圆

        if(type=="III"){
            bgCycle=DefBgCycle({opts:opts,bg:bg});
        }

        if(type=="IV"){
            bgCycle=DefBgCycle({opts:opts,bg:bg});
            preCycle=DefPreCycle({opts:opts,bg:pg});
        }

        return {
            series:[
            ...preCycle,      
            ...bgCycle,  
            {
                id:"pie",
                ...opts,
                data:[]
            }]
        }
    },
    /*
     * 设置数据
     * */
    setData:(params)=>{
        return {
            series:[{
                id:"pie",
                data:params
            }]
        }
    }
}