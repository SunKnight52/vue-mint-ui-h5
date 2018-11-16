<template>
    <div>
        <app-concern :user="list"></app-concern>
    </div>
</template>
<script>
import appConcern from "../components/appconcern"
export default {
    components:{
        appConcern
    },
    data(){
        return {
            list:[
                {
                    title:"宫崎英高",
                    main:"趁其不备,攻其阴睾",
                    url:require("../../static/img/icon_xiangji.png")
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>

</style>
