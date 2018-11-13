<template>
<!-- 
card:数组
    item:对象
    item.mounth头部月份,没有则无
    item.data数组
        item1对象
        item1.title单元格标题
        item1.icon右侧图标
        item1.main单元格标题下侧内容
        item1.nub单元格右侧内容
 -->
    <div>
        <div v-for="(item2,index1) in card" :key="index1">
            <div class="mounth">{{index1==0?'本月':item2.mounth}}</div>
            <div  v-for="(item1,index) in item2.data" :key="index" :class="[index+1==card.length?'card ff':'card']">
            <div class="left">
                <img :src="item1.icon" alt="">
                <div>
                <p>{{item1.title}}</p>
                <p>{{item1.main}}</p>
                </div>
            </div>
            <div class="right">
                {{item1.nub}}
            </div>
        </div>
        </div>
        
    </div>
</template>
<script>
export default {
    props:{
        card:Array
    }

}
</script>

<style lang="less" scoped>
.mounth {
    height: 34px;
    line-height: 34px;
    color: #666;
}
    .card {
       width: 92vw;
       height: 66px; 
       background-color: #fff;
       margin-bottom: 10px;
       box-sizing: border-box;
       padding: 0 15px;
       border-radius: 5px;
       .left {
        height: 66px; 
        display: flex;
        align-items: center;
           img { 
               width: 12.5333vw;
               margin-right: 10px;
           }
           >div {
               display: inline-block;
               >p:nth-of-type(2){
                   font-size: 12px;
                   color: #999;
               }
           }
       }
       .right {
       height: 66px; 
       line-height: 66px;
       color: #0c93f9;
       }
    }
    .ff {
        margin-bottom: 0;
    }
</style>
