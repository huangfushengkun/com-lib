<template>
    <el-form :inline="true" :rules="rules" ref="form" :model="sizeForm" class="article-from-container">
        <slot
           name="header"
        ></slot>
        <slot
            name="main"
        ></slot>
        <slot
            name="footer"
        ></slot>
    </el-form>
</template>
<script>

export default {
    name:"articleComponent",
    props:[
      "rules",
      "sizeForm"
    ],
    methods:{
       async fFormSubmit(){
           await this.$refs['form'].validate((valid,object)=>{
                console.log(valid);
                return valid;
            })
        }
    }
}
</script>
<style lang="scss">
.article-from-container{
    p{
        color:#66ccff;
        margin:0px;
        min-height:40px;
        line-height:40px;
        font-size:20px;
    }
    .el-form-item{
        margin:0px;
    }
    .el-input__inner, .el-textarea__inner{
        border:none;
        background:transparent;
        border-bottom:1px solid rgba(102,204,255,0.4);
    }
    .line{
        margin: 20px 0px;
    }
    .paragraph{
        padding: 20px 0px;   
    }
    .footer-container{
        position: relative;
    }
    .footer-container li{
        display: inline-block;
    }
    .footer-container li:nth-last-of-type(1){
        text-align: right;
        position: absolute;
        right: 0px;
        bottom: 0px;
    }
    header{
        text-align: center;
        p{
            font-size: 12px;
        }
    }
    h2{
        color:#66ccff;
    }
}
</style>
<style lang="scss">
  @each $width in 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20{
      .word-#{$width} input{
          width:($width*12)+px;
          box-sizing: content-box;
      }
  }
</style>