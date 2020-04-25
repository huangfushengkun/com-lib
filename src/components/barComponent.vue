<template>
  <section>
    <input type="button" value="异步加载数据" @click="fButtonClick"/>
    <div class="I">
      <hs-bar
        :opts="bar.opts"
        :source="bar.data"
      ></hs-bar>
    </div>
  </section>
</template>
<script>
/*
 * 
 * */
import hsBar from "./utilis/echarts/bar.vue"
export default {
    name:"echars",
    data(){
        return {
          bar:{
            opts:{
              title:{},
              tooltip:{
                trigger:"axis",
                axisPointer:{
                  type:'shadow'
                }
              },
              legend:{},
              grid:{},
              xAxis:{
                // axisPointer: {
                //   snap: true,
                //   lineStyle: {
                //     color: '#004E52',
                //     opacity: 0.5,
                //     width: 2
                //   },
                //   handle: {
                //   show: true,
                //   color: '#004E52'
                //   }
                // }
              },
              yAxis:[{},{}],
              // dataZoom:[],
              toolbox:{},
              // series:[{
              //   type:"bar",
              //   name:"蒸发量"
              // },{
              //   type:"bar",
              //   name:"降水量"
              // }]
              series:{
                type:"line",
                name:"蒸发量"
              }
            },
            data:{
              legend:['蒸发量','降水量'],
              xAxis:{
                data:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], //支持多天坐标轴
              },
              // series:[
              //   {
              //     data:[120, 200, 150, 80, 70, 110, -30],  //图型数据
              //     line:[{type:'average',name:'平均值'}],    //标记线数据
              //     point:[{type:'max',name:'最大值'}]        //标记点数据  
              //   },{
              //     data:[120, 200, 150, 80, 70, 110, 30]     //图像数据
              //   }
              // ],
              series:{
                type:"line",
                // data:[120, 200, 150, 80, 70, 110, -30],
                // line:[{type:'average',name:'平均值'}],
                // point:[{type:'max',name:'最大值'}]
              }
            }
          }
        }
    },
    components:{
      hsBar
    },
    methods:{
      fButtonClick(){
        // console.log(this.bar.data);
        this.bar.data={
            series:{
              type:"line",
              data:[120, 200, 150, 80, 70, 110, -30],
              // line:[{type:'average',name:'平均值'}],
              // point:[{type:'max',name:'最中值'}]
            }
        }
        // this.$set(this.bar.data,'series',{
        //       data:[120, 200, 150, 80, 70, 110, -30],
        //       line:[{type:'average',name:'平均值'}],
        //       point:[{type:'max',name:'最大值'}]
        // });
        // console.log(this.bar);
      }
    }
}
</script>
<style scoped>
  div{
       border:solid 1px #999;
       width: 600px;
       height: 300px;
       background-color: rgba(0, 0, 0, .1) 
  }
  .I{
       width: 600px;
       height: 300px;
   }
  .II{
       width: 600px;
       height: 300px;
   }
  .III{
       width: 260px;
       height: 272px;
   }
</style>