<template>
  <div class="app">
    <appheader>小特效</appheader>
    <van-notice-bar text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。" mode="closeable" left-icon="volume-o" />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="special">
        <div class="texiao" @click="close" v-for="i in 10"></div>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
import "./special.css";
import appheader from "../components/head";
export default {
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    pp() {
      for (let i = 0; i < 10; i++) {
        $(".texiao").eq(i).css("left", 10 * i + "vw");
        $(".texiao").eq(i).css("top", Math.random() * 50 + "vw");
        $(".texiao").eq(i).css("-webkit-animation-delay", Math.random() + "s");
        $(".texiao").eq(i).css("animation-delay", Math.random() + "s");
        $(".texiao").eq(i).css("-webkit-animation-duration", Math.random() * 0.8 + 1 + "s");
        $(".texiao").eq(i).css("animation-duration", Math.random() * 0.8 + 1 + "s");
      }
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.pp();
      }, 500);
    },
    close(e) {
      $(e.target).animate({"top":"-100vh"},"slow")
    }
  },
  components: {
    appheader
  },
  mounted() {
    this.pp();
  }
};
</script>
<style lang="less" scoped>
</style>