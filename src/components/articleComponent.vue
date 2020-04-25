<template>
    <div>
        <input type="button" value="点击" @click="fBtnClick"/>
        <article-form-component
            refName="articleFormRef1"
            :source="content"
            :sizeForm="sizeForm"
            :rules="rules"
        />
    </div>
</template>
<script>
import articleFormComponent from "./utilis/articleForm"
export default {
    name:'articleComponent',
    data(){
      return{  
        content:{
            header:[
                ['XXXXXX协议'],
                ['XXXXXXX备注']
            ],
            main:[
                [
                    '|input&8&name1|型|input&8&name2|号发动机按现行设计图样和技术规范制造合格，并经试车验收合格',
                ],[
                    '贮存期为：|input&8&name3|个月， 自：|input&8&name4|年月日起， 至：|input&8&name5|年|input&8&name6|月|input&8&name7|日止，',
                    '使用时间为：从首次启封日起，|input&8&name8|工作小时，|input&8&name9|个月，|input&8&name10|次循环（以先到为准），',
                    '保质期为：从首次启封日起，|input&8&name11|工作小时， |input&8&name12|个月，|input&8&name13|次循环（以先到为准），'
                ],[
                    '上述贮存期、暂定使用时间、保质期。仅在正确的贮存、安装、使用、和维护条件下才有效'
                ]
            ],
            footer:[
                [
                   '承制方法人代表签章|input&8&name14|',
                   '单位      （公章）',
                   '|input&8&name15|年|input&8&name16|月|input&8&name17|日' 
                ],[
                    '总军事代表签章|input&8&name18|',
                   '单位      （公章）',
                   '|input&8&name19|年|input&8&name20|月|input&8&name21|日'                    
                ]
            ]
        },
        //数据源
        sizeForm:{
            name1:'',
            name2:'',
            name3:''                
        },
        //验证规则
        rules:{
            name1:[{
                   required:true,
                   message:"请输入活动区域",
                   trigger:'blur'
            }],
        }
      }
    },
    components:{
        articleFormComponent
    },
    methods:{
        fBtnClick(){
            console.log(this.$refs);
           if(this.$refs.articleFormRef1.fFormSubmit()){
               console.log(this.sizeForm);
           };            
        }
    }
}
</script>