<template>
    <div class="wealth">
                    <div class="wealth_head">
                        <div class="wealth_back">

                        </div>
                        <div class="head_main">
                            <p>昨日收益</p>
                            <p>2.08</p>
                            <div class="profit">
                                <div class="profit_nub">
                                    <p>积分</p>
                                    <p>2.3540</p>
                                </div>
                                <div></div>
                                <div class="profit_nub">
                                    <p>粮票</p>
                                    <p>2.3540</p>
                                </div>
                            </div>
                            <button>复投</button>
                            <p>*复投单独计算,按照三倍金额来增加积分</p>
                        </div>
                    </div>
                    <div class="wealth_foot">
                        <van-tabs v-model="selet">
                            <van-tab title="奖励">
                                <div class="list">
                                    <img src="../../../static/img/icon_rili.png" @click="time" alt="">
                                    <card :card="reword"></card>
                                </div>
                            </van-tab>
                            <van-tab title="释放">
                                <div class="list">
                                    <img src="../../../static/img/icon_rili.png" @click="time" alt="">
                                    <card :card="reword"></card>
                                </div>
                            </van-tab>
                            <van-tab title="复投">
                                <div class="list">
                                    <img src="../../../static/img/icon_rili.png" @click="time" alt="">
                                    <card :card="reword"></card>
                                </div>
                            </van-tab>
                            <van-popup v-model="show" position="bottom" >
                                <van-datetime-picker v-model="currentDate" type="year-month" @confirm="timeOn" @cancel="time" />
                            </van-popup>
                        </van-tabs>
                    </div>
                </div>
</template>
<script>
import card from "../../components/card";

export default {
    data(){
        return {
            selet: 0,
            show: false,
            currentDate: new Date(),
             reword: [
                {
                    mounth: "九月",
                    data: [
                        {
                            title: "团队奖励",
                            icon: "../../static/img/icon_kjsy.png",
                            main: "2018-10-9 12:06:33",
                            nub: "+93.00"
                        },
                        {
                            title: "团队奖励",
                            icon: "../../static/img/icon_kjsy.png",
                            main: "2018-10-9 12:06:33",
                            nub: "+93.00"
                        }
                    ]
                },
                {
                    mounth: "",
                    data: [
                        {
                            title: "团队奖励",
                            icon: "../../static/img/icon_kjsy.png",
                            main: "2018-10-9 12:06:33",
                            nub: "+93.00"
                        },
                        {
                            title: "团队奖励",
                            icon: "../../static/img/icon_kjsy.png",
                            main: "2018-10-9 12:06:33",
                            nub: "+93.00"
                        }
                    ]
                }
            ]
        }
    },
     components: {
        card
    },
    methods: {
        time() {
            this.show = !this.show;
            console.log(this.show)
        },
        timeOn(value){
            console.log(value)
            this.show = !this.show;
        }
    }
}
</script>
<style lang="less" scoped>
    .wealth {
    width: 100vw;
    min-height: 100vh;
    padding-bottom: 70px;
    background-color: #f3f3f3;
    overflow: hidden;
    .wealth_head {
        width: 100vw;
        height: 93.3333vw;
        position: relative;
        top: 0;
        text-align: center;
        .wealth_back {
            width: 100vw;
            height: 65.3333vw;
            background-color: #0c93f9;
        }
        .head_main {
            width: 92vw;
            height: 77.3333vw;
            position: absolute;
            top:13.3333vw;
            left: 4vw;
            background-color: #fff;
            display: inline-block;
            border-radius: 1.3333vw;
            >p:first-of-type {
                font-size: 14px;
                color: #0d8df9;
                margin-top: 8vw;
            }
            >p:nth-of-type(2) {
                font-size: 40px;
                color: #0d8df9;
                margin-bottom: 8.8vw;
            }
            >p:nth-of-type(3) {
                font-size: 14px;
                color: #969a9b;
                margin-top: 3.4667vw;

            }
            >.profit {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 4.8vw;
                >.profit_nub {
                    flex: 1;
                }
                >div:nth-of-type(2){
                    width: 1px;
                    background-color: #ccc;
                    height: 34px;
                    
                }
            }
            >button {
                width: 46.6667vw;
                height: 10vw;
                color: #fff;
                background:linear-gradient(left, #0d8df9 0%,#02d3fe 100%);;
                border-radius: 5vw;
            }
        }
    }
    .wealth_foot {
        .list {
            padding: 0 4vw;
            position: relative;
            >img {
                position: absolute;
                right: 4vw;
                top:10px;
                width: 3.7333vw;
            }
        }
    }
}
</style>
<style lang="less">
  .wealth_foot {
        .van-tab--active {
            color: #333;
        }
        .van-tabs__line {
            background-color: #0d8df9;
        }
    }
</style>
