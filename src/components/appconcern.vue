<template>
<!-- 用户关注 -->
<!-- 
        title:上方标题
        main:简介
        url:图标 
        -->
    <div class="concern"> 
        <div v-for="(item,index) in user" :key="index">
            <img :src="item.url" alt="">
            <div>
                <p>{{item.title}}</p>
                <span>{{item.main}}</span>
            </div>
            <div>
                关注
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        user:Array
    }
      
    
}
</script>
<style lang="less" scoped>

</style>
