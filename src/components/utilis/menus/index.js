/*
 * 菜单
 * 根据数据结构规律，递归方式构建菜单
 * 知识点：createElement 函数
 * createElement(
 *    {String | Object | Function}
 *    'div',
 *    {Object}
 *    一个与模板中属性对应的数据对象，可选择
 *    {String | Array}
 *    子级虚拟节点（vnodes）由‘createElement()’ 构建而成，作用域插槽？
 *    也可以使用字符串来生成文本虚拟节点，可选择
 * )
 * */
let itemComponentI = ()=>import("./itemComponentI"); //没有list的菜单组件模板
let itemComponentII = ()=>import("./itemComponentII"); //带有list的子菜单模板
let itemComponentIII = ()=>import("./itemComponentIII"); //list列表中不带子项的菜单模板
export default {
    functional:true, //函数式组件
    props:{
      source:{  // 菜单数据源
          type:Object,
          required:true,
      },
      index:{  //菜单序列号
          type:Number,
          required:true
      }
    },
    //渲染函数
    render(createElement,context){
        /*
         * 构建list菜单的子菜单
         * @params {object} params 子菜单数据对象
         * @params {string} index 菜单的序列号
         * @return {vNode} 构建好的子菜单的虚拟Dom
         * */
        function createSubMenu(params,index){
            let arr=[];
            params.map((item,key)=>{ //枚举子菜单项
                if(item.list){
                    arr.push(  //拥有子菜单的项目，进行递归创建
                        createListMenu(item,index+"-"+key)  
                    )
                }else{   // 没有子菜单的项目
                    arr.push(
                        createElement(
                            itemComponentIII,{
                            props:{
                                    item:item,
                                    index:index+"-"+key
                                  }
                            }
                        )
                    )
                }
            })
            return arr;
        }
        /*
         * 构建带list的菜单
         * @params {object} params 菜单数据对象
         * @params {string} index 菜单的序列号 
         * @return {vNode} 构建好的菜单项的虚拟Dom  
         * */
        function createListMenu(params,index) {
            return createElement(
                     itemComponentII,{   //拥有list菜单的模板
                        props:{
                             item:params,
                             index:index
                        },
                    }, createSubMenu(params.list,index))   
        }
        /*
         * 构建菜单
         * @params {object} params 菜单数据对象
         * @params {string} index 菜单的序列号
         * @return {vNode} 构建好的菜单项的虚拟Dom  
         * */
        function buildMenu(params,index){
            if(context.props.source.list){   //没有list的菜单
                return createListMenu(params,index);
            }else{                           //拥有list的菜单  
                return createElement(
                    itemComponentI,          //没有list的菜单模板
                    {
                      props:{
                        item:params,
                        index:index
                      }
                    }
                )
            }
        }

        return buildMenu(context.props.source,context.props.index.toString());
    }
}