<template>
    <el-form ref="form" :rules="rules" :model="sizeForm" :label-width="labelWidth" size="mini" class="asyc-form-container">
       <slot></slot>
       <el-form-item size="large">
           <el-button
             v-for="(item,key) in buttons"
             :key="key"
             :type="item.style"
              @click="fBtnClick(item.type,item.callback)"
            >{{item.text}}</el-button>
       </el-form-item>
    </el-form>
</template>
<script>
export default {
    name:"itemComponet",
    props:[
        "rules",
        "sizeForm",
        "buttons",
        "labelWidth"
    ],
    methods:{
      /*
       * 按钮点击事件
       * @params {String} type 事件类型（submit - 提交 , cancel - 取消）
       * @params {Function} callback 回调函数
       * */
      fBtnClick(type,callback) {
        if(type=="submit"){
            this.$refs['form'].validate((valid,object)=>{
                console.log(object);
                callback(valid);
            })  
        }else if(type=="cancel"){

        }  
      }
    }
}
</script>
<style lang="scss">
  .asyc-form-container{
    .el-form-item .el-form-item{
        margin-bottom:0px !important;
    }
  }

</style>