<template>
    <pagination-component
       :total="total"
       :currentPage="currentPage"
       :handleCurrentChange="handleCurrentChange"
       :handleSizeChange="handleSizeChange"
    />
</template>
<script>
import paginationComponent from "./utilis/pagination"
export default {
    name:"paginationComponentI",
    data(){
        return {
            total:500,
            currentPage:2
        }
    },
    components:{
        paginationComponent
    },
    methods:{
        /*
         * 点击页面回调
         * @params {Number} val 选择的页码
         * */
        handleCurrentChange(val){
            console.log(val);
        },
        /*
         * 输入页面回调
         * @params {Number} val 选择的页码         
         * */
        handleSizeChange(val){
            console.log(val)
        }
    }    
}
</script>