<template>
    <div>
        <app-concern :user="list"></app-concern>

        <button @click="closeApp">asdasdsasssa</button>

        <form action="" id="hh">
            <input type="text" name="id">
            <input type="text" name="password">
            <input type="text" name="phone">
            <button @click="formsub">提交</button>
        </form>
        <input type="text" name="user">
    </div>
</template>
<script>
import appConcern from "../components/appconcern";
export default {
    components: {
        appConcern
    },
    data() {
        return {
            list: [
                {
                    title: "宫崎英高",
                    main: "趁其不备,攻其阴睾",
                    url: require("../../static/img/icon_xiangji.png")
                }
            ]
        };
    },
    mounted() {
        plus.ui.toast("请输入有效的手机号！");
    },
    methods: {
        closeApp() {
            this.owner.closeApp();
        },
        formsub(){
            $("#ff").submit(function(data){
                console.log(data)
            })
        }
    }
};
</script>
<style lang="less" scoped>
input {
    border: 1px #000 solid;
}
</style>
