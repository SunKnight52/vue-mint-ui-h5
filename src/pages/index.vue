<template>
    <div class="index">
        <van-tabbar v-model="active" class="tabbe">
            <van-tabbar-item icon="shop" to="/index/coin"> <span>首页</span>
                <img slot="icon" slot-scope="props" :src="props.active ? icon.index.active : icon.index.normal"></van-tabbar-item>
            <van-tabbar-item icon="chat" to="/index/wealth"> <span>财富</span>
                <img slot="icon" slot-scope="props" :src="props.active ? icon.wealth.active : icon.wealth.normal"></van-tabbar-item>
            <van-tabbar-item icon="records"  to="/index/concern"> <span>商城</span>
                <img slot="icon" slot-scope="props" :src="props.active ? icon.shop.active : icon.shop.normal"></van-tabbar-item>
            <van-tabbar-item icon="gold-coin" to="/index/userInfo"> <span>我的</span>
                <img slot="icon" slot-scope="props" :src="props.active ? icon.user.active : icon.user.normal"></van-tabbar-item>
        </van-tabbar>
                <router-view></router-view>
         
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0,
            icon: {
                index: {
                    normal: require("../../static/img/icon_sy_h.png"),
                    active: require("../../static/img/icon_shouye_l.png")
                },
                wealth: {
                    normal: require("../../static/img/icon_cf_h.png"),
                    active: require("../../static/img/icon_caiful.png")
                },
                shop: {
                    normal: require("../../static/img/icon_sc_h.png"),
                    active: require("../../static/img/icon_sc_l.png")
                },
                user: {
                    normal: require("../../static/img/icon_sy_h.png"),
                    active: require("../../static/img/icon_shouye_l.png")
                }
            },
           
        };
    },
   
};
</script>
<style lang="less" scoped>
.index{

   
    .tabbe {
    border-top: 0.1333vw #ccc solid;
}
}
</style>
<style  lang="less">
.tab-main {
    padding-top: 0;
    > .van-tabs__wrap {
        display: none;
    }
  
}
</style>

