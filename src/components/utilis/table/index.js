/*
 * 表格组件入口
 * 表格是否可编辑 添加属性 _edit='Y|N'
 * 当前需要控制单元格编辑状态，需手动在数据中添加 _edit 项目
 * */
import tableComponentI from "./tableComponentI"; //表格模板
import columnComponent from "./columnComponent"; //列表模板
import cellComponent from "./cellComponent"; //单元格模板
let GLOBE_RULES={
   "int":/^\d+$/, //纯整数
   "float":/^\d+(\.\d+)?$/,   //小数
   "money":/^\d+(\.\d{2})?$/,
   "en":/^[A-z]+$/,
   "cn":/^[\u4e00-\u9fa5]+$/
}

export default {
    functional:true,
    props:{
       //表格标题
       headers:{      
           type:Array,
           default:[]
       },
       //编辑状态
       _edit:{
           type:String,
           default:'Y',
       },
        //表格数据
        source:{      
            type:Array,
            default:[]
        },
        //表格chk勾选
        handleSelectChange:{
            type:Function,
            default:()=>{}
        },
        //表格编辑回调
        handleEdit:{
            type:Function,
            default:()=>{}
        },
        //表格删除回调
        handleDelete:{
           type:Function,
           default:()=>{}
       },
       //表格行ClassName
       handleRowClassName:{
        type:Function,
        default:()=>{}
       }
    },
    render(createElement,context){
       /* 
        * 渲染列对象数组
        * */
       function buildColumn(list){
           return list.map((item)=>{  //递归构建表格元素
               if(item.children){     //有子标题
                   return createElement(
                       columnComponent,{
                           props:{
                              items:item 
                           }
                       },buildColumn(item.children)
                   )

               }else{
                   return createElement(   //无子标题
                       cellComponent,{
                           props:{
                               items:item,
                               edit:context.props._edit,
                           },
                           on:{
                               fCellInputInput(event,row,key,index=null){
                                   if(index==null){
                                       row[key]=event;
                                   }else{
                                       row[key][index]=event;
                                   }
                               },
                              /*
                               * 双击表格事件
                               * @params {object} event 事件参数
                               * @params {Number} index 数据序号
                               * @params {object} row 数据行数据
                               * */
                               fCellDbClick(event,index,row){
                                   if(event.srcElement.tagName=="P"){
                                       event.srcElement.className=event.srcElement.className+" none";
                                       event.srcElement.nextElementSibling.className=event.srcElement.nextElementSibling.className.replace(/\bnone\b/,'');
                                       event.srcElement.nextElementSibling.querySelector("input").focus()
                                   }
                               },
                               /*
                               * 失去焦点事件,表单验证与提交
                               * 输入框上帮定正则表达式，单元格取值
                               * 传入值内 _rule 字段优先级最高
                               * @params {object} event 事件参数
                               * @params {Number} index 数据序号
                               * @params {object} row 数据行数据
                               * @return {object} 表单提交数据
                               * @return {Number} index 数据序列号
                               * @return {object} object 编辑状态
                               * */       
                               fCellInputBlur(event,index,row,rule){
                                   let rst={};
                                   /*判断传入的是否是正则表达式
                                   非正则表达式*/
                                   if(typeof rule == 'string') rule=GLOBE_RULES[rule];
                                   //是否设置了表格项目验证的正则表达式
                                   if(rule!==undefined&&rule!==""){
                                       event.srcElement.className=event.srcElement.className.replace(/\berror_input\b/,""); //清除验证失败的输入框样式
                                       if(event.srcElement.value!=""&&!rule.test(event.srcElement.value)){ //进行正则表达式匹配
                                           /\berror_input\b/.test(event.srcElement.className)?"":event.srcElement.className=event.srcElement.className+" error_input"; //添加失败的输入框标记
                                           event.srcElement.focus(); //获取焦点
                                           return;
                                       }
                                   }
                                   /*
                                   * 产出编辑行的数据
                                   * */
                                   for(let [key,item] of Object.entries(row)){
                                       if(key!=="_edit"||key!=="_rule"){
                                           rst[key]=item;
                                       }
                                   }
                                   context.props.handleEdit(rst,index,row._edit,row._rule,); //调用回调
                                   event.srcElement.parentNode.className=event.srcElement.parentNode.className+" none"; //切换表格项编辑项目
                                   event.srcElement.parentNode.previousElementSibling.className=event.srcElement.parentNode.previousElementSibling.className.replace(/\bnone\b/,'');
                               },
                               /*
                               * 删除按钮点击事件
                               * @params {Number} index 数据序号
                               * @params {object} row 数据行数据
                               * */          
                               fDeleteBtnClick(index,row){
                                   context.props.handleDelete(row,index);
                               },                               
                           }
                       }
                   );
               }
           })
       }
       /*
        * 渲染表格
        * */
        return createElement(
           tableComponentI,{
               props:{
                   headers:context.props.headers,
                   items:context.props.source,
                   handleSelectChange:context.props.handleSelectChange,
                   handleRowClassName:context.props.handleRowClassName
               }
           },buildColumn(context.props.headers)
        )
    }
}