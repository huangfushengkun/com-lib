# 文档

 动态表单说明

 ## 表单配置项
 
  items:{
    labelWidth:"80px",  --------------------------------------------------------------- 表单项目标题宽度
    content:[{
            type:"text", -------------------------------------------------------------- 输入框类型
            label:"活动名称", ---------------------------------------------------------- 标题
            model:"name", ------------------------------------------------------------- 数据key 用于数据提交与rules
            placeholder:"请求输入名称" ------------------------------------------------- 提示信息
        },{
            type:"select", -------------------------------------------------------------- 下拉选择框类型
            label:"活动区域", ------------------------------------------------------------ 标题
            placeholder:"请选择活动区域", ------------------------------------------------- 提示信息
            model:"region", -------------------------------------------------------------- 数据绑定字段
            opts:[{ ---------------------------------------------------------------------- 下拉列表项目
                    label:"区域一", ------------------------------------------------------- 下拉列表标题
                    value:"上海" ---------------------------------------------------------- 下拉列表值
                },{
                    label:"区域二",
                    value:"上海"
                }]
        },{
            type:"columns", --------------------------------------------------------------- 行显示类型
            label:"活动时间", -------------------------------------------------------------- 标题
            items:[{ ---------------------------------------------------------------------- 行项目组
                    type:"date", ---------------------------------------------------------- 日历类型
                    model:"date1", -------------------------------------------------------- 数据绑定字段
                    placeholder:"选择日期", ------------------------------------------------ 提示信息
                    span:11 --------------------------------------------------------------- 行占比例
                },{
                    type:"split", --------------------------------------------------------- 行分隔符类型
                    content:"-", ---------------------------------------------------------- 分割符内容
                    span:2 ---------------------------------------------------------------- 行占比
                },{
                    type:"date",
                    model:"date2",
                    placeholder:"请选择时间",
                    span:11
                }]
        },{
            type:"checkbox", ------------------------------------------------------------------ 复选按钮组
            label:"活动性质", ------------------------------------------------------------------ 标题
            model:"type", ---------------------------------------------------------------------- 数据帮字段
                items:[{ ----------------------------------------------------------------------- 复选按钮选择项组
                        label:"美食/餐厅线上活动", ----------------------------------------------- 选择项标题
                        name:"type" ------------------------------------------------------------- 选择项数据值
                    },{
                        label:"地推活动",
                        name:"type"
                    },{
                        label:"线下主题活动",
                        name:"type"                   
                    }]
        },{
            type:"radio", ---------------------------------------------------------------------- 单选按钮组
            label:"特殊资源", ------------------------------------------------------------------- 标题
            model:"resource",  ----------------------------------------------------------------- 数据绑定字段
            items:[{ --------------------------------------------------------------------------- 单选按钮选择项组
                    label:"线上品牌商赞助"  ----------------------------------------------------- 选择项目标题
                },{
                    label:"线下场地免费"      
                }]
        },{
            type:"textarea",    ---------------------------------------------------------------- 文本域类型
            label:"活动形式",    ---------------------------------------------------------------- 标题
            model:"desc"        ---------------------------------------------------------------- 数据绑定字段  
        }
    ],
    -------------------------------------------------------------------------------------------- 按钮配置数组
    buttons:[{       
        type:"submit",   ----------------------------------------------------------------------- 按钮类型 （目前支持submit,cancel 两个类型）
        style:"primary",  ---------------------------------------------------------------------- 按钮样式 (参考elementUi按钮type)
        text:"确定",      ---------------------------------------------------------------------- 按钮文字  
        callback:this.fSubmitBtnClick  --------------------------------------------------------- 按钮回调函数
     },{
        type:"cancel",
        style:"default",
        text:"取消",
        callback:this.fCancelBtnClick
    }]    
    },
    -------------------------------------------------------------------------------------------- 数据源
    sizeForm:{
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''                
    },
    -------------------------------------------------------------------------------------------- 验证规则 根据Element-ui的表单验证规则
    rules:{
        name:[{
            required:true,
            message:"请输入活动区域",
            trigger:'blur'
        }],
        region:[{
            required: true, 
            message: '请选择活动区域', 
            trigger: 'change'
        }],
        date1:[{
            type: 'date', 
            required: true, 
            message: '请选择日期', 
            trigger: 'change'
        }],
        date2:[{
            type: 'date', 
            required: true, 
            message: '请选择时间', 
            trigger: 'change'
        }],
        delivery:[{
            require:true,
            message:"请输入活动区域",
            trigger:'blur'
        }],
        type:[{
            type: 'array',
            required: true, 
            message: '请至少选择一个活动性质', 
            trigger: 'change'
        }],
        resource:[{
            required: true, 
            message: '请选择活动资源', 
            trigger: 'change'
        }],
        desc:[{
            required: true, 
            message: '请填写活动形式', 
            trigger: 'blur'
        }]
}  