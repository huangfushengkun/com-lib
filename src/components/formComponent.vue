<template>
    <asyc-form-component
      :source="items"
      :sizeForm="sizeForm"
      :rules="rules"
    />
</template>
<script>
import asycFormComponent from "./utilis/asycForm"
export default {
    name:"formComponent",
    data(){
       let validatorMonthRange=(rule,value,callback)=>{
           if(Array.isArray(value)){
               callback();
           }else{
               callback(new Error('请选择月份'));
           }
       }
        return {
            items:{
                labelWidth:"80px",
                content:[{
                        type:"text",  //类型
                        label:"活动名称",  //标题
                        model:"name",     //数据key 用于数据提交与rules
                        attr:{
                            placeholder:"请求输入名称",  //提示
                            disabled:true,          //是否可以输入   
                        },                        
                        evt:{
                           blur:function(event){console.log(event)},
                           focus:function(event){console.log(event)},
                           input:function(v){console.log(v)},
                           change:function(v){console.log(v)} 
                        },
                    },{
                        type:"select",
                        label:"活动区域",
                        model:"region",
                        attr:{
                            placeholder:"请求输入名称",  //提示
                            disabled:false,          //是否可以输入   
                        },
                        evt:{
                            /*
                             * 选中事件
                             * @params {string} v 选中的值
                             * */
                            change:function(v){
                                console.log(v)
                            }
                        },   
                        opts:[{
                            label:"区域一",
                            value:"上海"
                        },{
                            label:"区域二",
                            value:"上海"
                        }]
                    },{
                        type:"columns",
                        label:"活动时间",
                        items:[{
                            type:"monthrange",
                            model:"date1",
                            attr:{
                                'range-separator':"至",
                                'start-placeholder':"开始月份",
                                'end-placeholder':"结束月份",
                                disabled:false
                            },
                            evt:{
                                blur:function(i){console.log(i)},
                                focus:function(i){console.log(i)},
                                change:function(v){console.log(v)} 
                            },
                            span:11
                        },{
                            type:"split",
                            content:"-",
                            span:2
                        },{
                            type:"date",
                            model:"date2",
                            attr:{
                                placeholder:"请选择时间",
                                disabled:false
                            },
                            evt:{
                                blur:function(i){console.log(i)},
                                focus:function(i){console.log(i)},
                                change:function(v){console.log(v)} 
                            },                           
                            span:11
                        }]
                    },
                    {
                        type:"checkbox",
                        label:"活动性质",
                        model:"type",
                        evt:{
                            change:function(v){console.log(v)} 
                        },
                        items:[{
                            label:"美食/餐厅线上活动",
                            name:"type",
                            attr:{
                               disabled:true
                            }
                        },{
                            label:"地推活动",
                            name:"type",
                            attr:{
                               disabled:false
                            }
                        },{
                            label:"线下主题活动",
                            name:"type",
                            attr:{
                               disabled:false
                            }                 
                        }]
                    }
                    ,{
                        type:"radio",
                        label:"特殊资源",
                        model:"resource",
                        evt:{
                            change:function(v){console.log(v)} 
                        },
                        items:[{
                            label:"线上品牌商赞助",
                            attr:{
                               disabled:true
                            }
                        },{
                            label:"线下场地免费",
                             attr:{
                               disabled:false
                            }
                        }]
                    },{
                        type:"textarea",
                        label:"活动形式",
                        model:"desc",
                        attr:{
                            placeholder:"请求输入名称",  //提示
                            disabled:true          //是否可以输入   
                        },
                        evt:{
                           blur:function(event){console.log(event)},
                           focus:function(event){console.log(event)},
                           input:function(v){console.log(v)},
                           change:function(v){console.log(v)} 
                        },   
                    }],
                buttons:[{
                    type:"submit",
                    style:"primary",
                    text:"确定",
                    callback:this.fSubmitBtnClick
                },{
                    type:"cancel",
                    style:"default",
                    text:"取消",
                    callback:this.fCancelBtnClick
                }]    
            },

            //数据源
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
            //验证规则
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
               //自定义验证规则
               date1:[{
                   validator:validatorMonthRange, 
                   message: '请选择日期', 
                   trigger: 'change'
               }],
               date2:[{
                   type: 'date', 
                   required: true, 
                   message: '请选择日期', 
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
        }
    },
    components:{
        asycFormComponent
    },
    methods:{
        fSubmitBtnClick(params){
            console.log(params);
        },
        fCancelBtnClick(params){
            console.log(params);
        }
    }
}
</script>