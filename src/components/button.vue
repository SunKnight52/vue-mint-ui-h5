<template>
    <div class="button">
        <button v-bind:style="{
            width:width,
            height:height,
            width:width,
            borderRadius:radius,
        }">哈哈哈
            <slot></slot>
        </button>
    </div>
</template>
<script>
export default {
    props:{
        firstColor:String,
        secondColor:String,
        width:String,
        height:String,
        radius:String
    },
    data(){
        return {
            // appRadius:
        }
    },
    computed:{
        appRadius:function(firstColor,secondColor){
            return "linear-gradient(left, "+firstColor+" 0%,"+secondColor+" 100%)"
        }
    },
    mounted () {
    }
}
</script>
<style lang="less" scoped>
    .button {
        display: inline-block;
        >button {
            text-align: center;
        }
    }
</style>
