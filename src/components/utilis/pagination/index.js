/*
 * 分页组件入口
 * */
import paginationComponent from "./paginationComponent";
export default {
    functional:true,
    props:{
        //布局
        layout:{
            type:String,
            default:"total, sizes, prev, pager, next, jumper"
        },
        //总条数【默认100】
        total:{
            type:Number,
            default:400
        },
        //下拉选择列表【默认100/200/300/400】
        pageSizes:{
            type:Array,
            default:()=>[100, 200, 300, 400]
        },
        //当前选择列表项
        pageSize:{
            type:Number,
            default:100
        },
        //当前页面页码【默认第一页】
        currentPage:{
            type:Number,
            default:1
        },
        //当前页面变更
        handleCurrentChange:{
            type:Function,
            default:()=>{}
        },
        //页码变更
        handleSizeChange:{
            type:Function,
            default:()=>{}
        }
    },
    render(createElement,context){
        return createElement(paginationComponent,{
                props:{
                    layout:context.props.layout,
                    total:context.props.total,
                    pageSizes:context.props.pageSizes,
                    pageSize:context.props.pageSize,
                    currentPage:context.props.currentPage,
                    handleCurrentChange:context.props.handleCurrentChange,
                    handleSizeChange:context.props.handleSizeChange 
                }
            }
        )
    }
}
