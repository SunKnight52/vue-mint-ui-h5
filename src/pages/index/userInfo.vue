<template>
    <div class="user_info">
        <app-list :list="listItem"></app-list>
        <app-list :list="listItem" backcolor="#5871ff" color="#fff"></app-list>
        <form action="#">
            <app-input
            icon="../../../static/img/icon_shouji.png"
            phold="请输入手机号"
            title="手机密码"
            verify="获取验证码"
            url=""
            ></app-input>
        </form>
    </div>
</template>
<script>
import appList from "../../components/list.vue";
import appInput from "../../components/appInput.vue";
export default {
    data() {
        return {
            listItem: [
                {
                    name: "设置",
                    icon: "../../../static/img/icon_shangjia.png",
                    slot:"哈哈",
                    url:"/webview"
                },
                {
                    name: "商家驻",
                    icon: "../../../static/img/icon_shangjia.png" ,
                    return:1,
                    slot:"哈哈哈"
                },
                 {
                    name: "商家驻",
                    icon: "../../../static/img/icon_shangjia.png" ,
                    return:1,
                    slot:"哈哈哈"
                }
            ]
        };
    },
    components: {
        appList,
        appInput
    }
};
</script>
<style lang="less" scoped>
   .user_info {
       >form {
           padding: 0 4vw;
       }
   }
</style>
