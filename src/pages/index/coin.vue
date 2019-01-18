<template>
    <div class="pp">
        <coin-list littitle="USDT" :newll="newnub" :add="gain">
            <img src="../../../static/img/icon_cf_h.png" slot="img" style="width:20px" alt="">
            BTC
            <p slot="content">比特币 数字货币之王</p>
        </coin-list>
        <coin-list littitle="USDT" :newll="newnub" :add="gain" back="red">
            <img src="../../../static/img/icon_cf_h.png" slot="img" style="width:20px" alt="">
            BTC
            <p slot="content">比特币 数字货币之王</p>
        </coin-list>
    </div>
</template>
<script>
import coinList from "../../components/coinList.vue"
export default {
    data(){
        return {
            newnub:"5665544565",
            gain:"-5.05%"
        }
    },
   components:{
      coinList 
   }
}
</script>
<style lang="less" scoped>
.pp {
    // padding-left: 10px;
}
</style>
