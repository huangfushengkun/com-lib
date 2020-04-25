/*
 * 文章型表单
 * 组织结构：段落，页眉，页脚，行
 * 可设置：行间距,页面与页脚，间距
 * */

 import articleComponent from "./articleComponent";
 import wordComponent from "./wordComponent";
 import footerComponent from "./footerComponent";
 import headerComponent from "./headerComponent";

//  let items={
//      header:[
//          [

//          ],[
             
//          ]
//      ], //页头
//      main:[    
//         [
//           ["XXXX",{type:"input",width:8,key:name},"XXXXX"]   //行
//         ]     //段落 
//      ],   //内容
//      footer:[
//          [

//          ],[

//          ]
//      ]  //页脚
//  }
 
 /*
  * 数据适配
  * @params {object} data 数据列表
  * */
 let dataAdapter=(data)=>{
     let obj={};
     for(let key in data){
        if(data[key].length!=0){
            obj[key]=data[key].map((item)=>{
                return item.map((o)=>{
                    return o.split('|').map(i=>{
                        let ak=i.match(/([A-z]+)&(\d)&([A-z0-9]+)/);
                        if(ak==null){
                            return i; 
                        }else{
                            return [
                                ak[1],
                                ak[2],
                                ak[3]
                            ]
                        }
                    })
                })
            })
        }
    }
    return obj;
 }


 export default {
     functional:true,
     props:{
        refName:{
            type:String,
            default:'articleFormRef'
        },
        source:{
            type:Object,
            default:{}
        },
        sizeForm:{
            type:Object,
            default:{}
        },
        rules:{
            type:Object,
            default:{}
        }
     },
     render(createElement,context){
          

        let oData=dataAdapter(context.props.source);
        
        /*
         * 表单主体
         * */
        let BuildMain=(oData)=>oData.map((item)=>{
            return createElement("div",{
                attrs:{
                    class:"paragraph"
                },
                props:{
                    source:item
                }
            },BuildLine(item))
        });

        /*
         * 构建行
         * */
        let BuildLine=(lines)=>lines.map((line)=>{
            return createElement("p",{
                attrs:{
                    class:"line"
                },
            },BuildWord(line))
        });

        //构建字
        let BuildWord=(words)=>words.map((word)=>{
            return createElement(wordComponent,{
                props:{
                  word:word,
                  sizeForm:context.props.sizeForm
                }
            })
        })

        //构建页脚
        let BuildFooter=(oData)=>{
            return createElement(footerComponent,
                oData.map((line)=>createElement("li",BuildLine(line)))
            )
        }

        //构建页头
        let BuildHeader=(oData)=>{
            return createElement(headerComponent,{
                props:{
                    source:oData
                }
            })
        }

        //命名插槽
        let scopedSlots=()=>{
            let obj={}
            Object.keys(oData).map((item)=>{
                if(item=="main"){
                    obj.main=()=>BuildMain(oData.main);    
                }else if(item=="footer"){
                    obj.footer=()=>BuildFooter(oData.footer);    
                }else if(item=="header"){
                    obj.header=()=>BuildHeader(oData.header);
                }
            })
            return obj;
        }

         return createElement(articleComponent,{
             ref:context.props.refName,
             props:{
                sizeForm:context.props.sizeForm,
                rules:context.props.rules,
             },
             scopedSlots:scopedSlots()
         })
     }
 }