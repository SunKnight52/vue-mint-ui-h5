
<template>
 <!-- 
list:数组
     item:对象
     item.name:名称
     item.url:跳转链接, 不填则无
     item.icon:图标,不填则无
     item.slot:右侧文字 ,不填则无
     item.return是否显示返回图标默认0 
bottom:css中margin-bottom
backcolor:css中background-color
color:css中color 
-->
    <div v-bind:style="{marginBottom:bottom,backgroundColor:backcolor}">
        <div v-for="(item,index) in list" :key="index" class="box">
            <router-link  v-bind:style="{color:color}" tag="div" :to="item.url?item.url:''" :class="[index+1==list.length?'bd':'']">
                <div class="ads">
                    <img :src="item.icon" alt="" class="fanhui1" v-if="item.icon">
                    <span>{{item.name}}</span>
                </div>
                <div class="fanhui">
                    <span>{{item.slot}}</span>
                    <img src="../../static/img/icon_jt_you.png"  v-if="item.return?false:true" alt="">  
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        list: Array,
        bottom:String,
        backcolor:String,
        color:String
    },
    data(){
        return {
        }
    },
    mounted() {
        
    },
};
</script>
<style lang="less" scoped>
.box {
    width: 100vw;
    > div {
        display: flex;
        height: 45px;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        color: #333;
        border-bottom: 1px #eee solid;
        > .ads {
            display: flex;
            align-items: center;
            padding-left: 4vw;
            > .fanhui1 {
                width: 4.8vw;
                height: 4.8vw;
                margin-right: 1.3333vw;
            }
        }
        > .fanhui {
            
            margin-right: 4vw;
            img{
                width: 1.6vw;
                height: 2.9333vw;
                margin-left: 2vw;
            }
        }
       
    }
    .bd {
        border-bottom: 0;
    }
}
</style>
