<template>
  <div>
      <appheader>设备信息</appheader>
  
   <div>地区:{{address}}</div>
   <div>IP:{{ip}}</div>
   <div>激活码:{{code}}</div>
   <div>APPID:{{APPID}}</div>
   <div>版本号:{{version}}</div>
   <div>设备:{{model}}</div>
   <div>设备厂商:{{vendor}}</div>
   <div>设备ID:{{uuid}}</div>
   <div>详细地址具体到街道{{addre}}</div>
    <label for="news">消息推送</label><input type="text" id="news" v-model="pulls">
    <button @click="pull">发送消息</button>
    <label for="call">拨打电话</label><input type="number" id="call" v-model="calls">
    <button @click="call">拨打</button>
    <button @click="codes">随机激活码</button>
  </div>
</template>
<script>
import appheader from "../components/head";
export default {
  data() {
    return {
      code:'',
      addre:"",
      pulls:"",
      calls:""
    };
  },
  methods: {
    codes(){
      let a="abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ0123456789";
      let b=""
      for (let i = 0; i < 8; i++) {
        b+=a.split("")[Math.floor(Math.random()*a.split("").length)] 
      }
      this.code=b;
    },
    pull(){
      let that=this;
      plus.push.createMessage( that.pulls)
    },
    call(){
      let that=this;
      plus.push.device.dial( that.calls)
    }
  },
  computed: {
    address() {
      return returnCitySN['cname']
    },
    ip() {
      return returnCitySN['cip']
    },
    APPID(){
      return plus.runtime.appid;
    },
    version(){
      return plus.runtime.version;
    },
    model(){
      return plus.device.model;
    },
    vendor(){
      return plus.device.vendor;
    },
    uuid(){
      return plus.device.uuid;
    }
  },

  mounted() {
    this.codes();
    let that=this;
    //详细地址
    plus.geolocation.getCurrentPosition(function(p){
      that.addre=p.address.country+p.address.province+p.address.city+p.address.district+p.address.street
	  })
  },
  components: {
    appheader,
    // scrc: {
    //   render: function(createElement) {
    //     return createElement("script", {
    //       attrs: {
    //         type: "text/javascript",
    //         src: "http://pv.sohu.com/cityjson?ie=utf-8"
    //       }
    //     });
    //   }
    // }
  }
};
</script>
<style lang="less" scoped>
#news,#call {
  border:1px #ccc solid
}
</style>
