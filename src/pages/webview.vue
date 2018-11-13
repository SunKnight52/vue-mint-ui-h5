<template>
    <div>
        <app-list :list="listItem"></app-list>
    </div>
</template>
<script>
import appList from "../components/list.vue";
export default {
    data() {
        return {
            listItem: [
                {
                    name: "设置",
                    icon: "../../../static/img/icon_shangjia.png",
                    slot:"哈哈",
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
        appList
    },
    methods:{
        
    }
}
</script>
<style lang="less" scoped>

</style>
