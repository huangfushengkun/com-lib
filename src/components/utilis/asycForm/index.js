/*
 * 动态表单组件
 * input 类型
 * 对外自定义属性：
 * attr:{
 *              
 * }
 * */
import formComponent from "./formComponent";      //表单容器组件
import itemComponent from "./itemComponent";      //表单项组件
import inputComponent from "./inputComponent";    //输入框组件
import selectComponent from "./selectComponent";  //下拉列表组件
import checkboxComponent from "./checkboxComponent"; //复选框组件
import radioComponent from "./radioComponent";    //单选按钮组件
import dateComponent from "./dateComponent";      //日历组件
import colComponent from "./colComponent";        //多组组件

/*
 * 默认值设置
 * */
let _default={
    attr:"",         //待绑定属性默认值
    evt:{}           //事件对象默认值
};

/*
 * 数据适配器
 * 为数据添加默认attr
 * @params {object} params 待添加默认属性项的数据
 * @return {object} 已适配属性项的数据
 * */
let _fListAdapater=(params)=>(
    params.map((item)=>{
        if(!item.attr){
            item.attr=_default.attr
        }
        return item;
    })
)

export default {
    functional:true,
    props:{
        //表单配置源
        source:{
            type:Object,
            default:{}
        },
        //表单数据源
        sizeForm:{
            type:Object,
            default:{}
        },
        //表单验证规则
        rules:{
            type:Object,
            default:{}
        }
    },
    /* 渲染函数 */
    render(createElement,context){
        /* 创建表单单容器项目
         * @params {object} item 表单项配置
         * @return 表单项vnode
         * */  
        function createItemContainer(item){
            return createElement(itemComponent,{
                props:{
                    label:item.label,
                    name:item.model
                }
            },[createItemContent(item)])
        }
        /* 创建表单一行多列容器
         * @params {object} items 多行容器中表单项配置组合
         * @return 表单多列vnode 
         * */
        function createCol(items){
            return items.map((item)=>{
                // 非内容项的分隔符
                if(item.type=='split'){
                    return createElement(colComponent,{
                        props:{
                            item:item
                        }
                    })
                }else{
                    return createElement(colComponent,{
                        props:{
                            item:item
                        }
                    },[createItemContainer(item)])
                }
            })
        }
        /* 根据表单类型（type）创建表单内容项
         * @params {object} item 表单项目配置
         * @return 表单单项vnode
         * */
        function createItemContent(item){
            let opts=[];
            switch(item.type){
                case "textarea":
                case "text":opts=[inputComponent,{
                    props:{
                        sizeForm:context.props.sizeForm,
                        model:item.model,
                        type:item.type,
                        attr:item.attr?item.attr:_default.attr,
                        evt:item.evt?item.evt:_default.evt
                    }
                }];break;
                case "select":opts=[selectComponent,{
                    props:{
                        sizeForm:context.props.sizeForm,
                        model:item.model,
                        placeholder:item.placeholder,
                        options:item.opts,
                        attr:item.attr?item.attr:_default.attr,
                        evt:item.evt?item.evt:_default.evt
                    },
                }];break;
                case "columns":return createCol(item.items);
                case "checkbox":opts=[checkboxComponent,{
                    props:{
                        sizeForm:context.props.sizeForm,
                        model:item.model,
                        items:_fListAdapater(item.items),
                        evt:item.evt?item.evt:_default.evt
                    }
                }];break;
                case "radio":opts=[radioComponent,{
                    props:{
                        sizeForm:context.props.sizeForm,
                        model:item.model,
                        items:_fListAdapater(item.items),
                        evt:item.evt?item.evt:_default.evt
                    }
                }];break;
                case "year":
                case "month":
                case "dates":
                case "week":
                case "datetime":
                case "datetimerange":
                case "daterange":
                case "monthrange":                        
                case "date":opts=[dateComponent,{
                    props:{
                        type:item.type,
                        sizeForm:context.props.sizeForm,
                        model:item.model,
                        attr:item.attr?item.attr:_default.attr,
                        evt:item.evt?item.evt:_default.evt
                    }
                }];break;
            }

            return createElement(...opts)
        }

        /* 创建表单项目
         * @params {object} items 表单配置项目组合
         * @return 返回表单项目的vNode数组
         * */
        function buildFormItem(items){
            return items.map((item)=>{
                return createItemContainer(item)
            })
        }

        //创建表单
        return createElement(formComponent,{
            props:{
                labelWidth:context.props.source.labelWidth?context.props.source.labelWidth:"80px",
                rules:context.props.rules,
                sizeForm:context.props.sizeForm,
                buttons:context.props.source.buttons
            }
        },buildFormItem(context.props.source.content))
    }
}