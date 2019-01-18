<template>
  <div>
    <appheader>异步</appheader>
    <app-list :list="listItem"></app-list>
    <div @click="add">异步模拟</div>
  </div>
</template>
<script>
import appList from "../components/list.vue";
import appheader from "../components/head";

export default {
  data() {
    return {
      listItem: [
        {
          name: "设置",
          icon: require("../../static/img/icon_shangjia.png"),
          slot: "哈哈"
        },
        {
          name: "商家驻",
          icon: require("../../static/img/icon_shangjia.png"),
          return: 1,
          slot: "哈哈哈"
        },
        {
          name: "商家驻",
          icon: require("../../static/img/icon_shangjia.png"),
          return: 1,
          slot: "哈哈哈"
        }
      ]
    };
  },
  components: {
    appList,appheader
  },
  methods: {
    add(){
      this.listItem[1].name=this.listItem[1].name=="sasdada"?"商家驻":"sasdada"
    }
  }
};
</script>
<style lang="less" scoped>
</style>
