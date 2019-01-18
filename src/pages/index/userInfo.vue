<template>
    <div class="user_info">
        <app-list :list="listItem"></app-list>
        <app-list :list="listItem" backcolor="#5871ff" color="#fff"></app-list>
        <form action="#">
            <app-input phold="请输入手机号" title="手机密码" verify="获取验证码" url="">
                <img src="../../../static/img/icon_shouji.png" alt="">
            </app-input>
            <app-input phold="请输入手机号" title="手机密码" verify="获取验证码" url="">
                <img src="../../../static/img/icon_shouji.png" alt="">
            </app-input>
        </form>
        <img src="../../../static/img/icon_shouji.png" alt="">
        <van-swipe-cell :right-width="65" :on-close="onClose">
            <!-- <span slot="left" class="swipe">选择</span> -->
            <van-cell-group>
                <van-cell title="单元格" value="内容" />
            </van-cell-group>
            <span slot="right" class="swipe">删除</span>
        </van-swipe-cell>

        <button @click="show=true">dandannd</button>
        <van-actionsheet v-model="show" cancel-text="取消" :actions="actions" @select="onSelect" />
        <router-view></router-view>
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
                    icon: require("../../../static/img/icon_shangjia.png"),
                    slot: "哈哈",
                    url: "/webview"
                },
                {
                    name: "特效",
                    icon: require("../../../static/img/icon_shangjia.png"),
                    return: 1,
                    slot: "哈哈哈",
                    url:"/special"
                },
                {
                    name: "设备信息",
                    icon: require("../../../static/img/icon_shangjia.png"),
                    return: 1,
                    slot: "手机专用",
                    url:"/device"
                }
            ],
            show: false,
            actions: [
                {
                    name: "拍照"
                },
                {
                    name: "从相册中选取"
                },
                {
                    name: "扫描二维码"
                }
            ],
            barcode: null
        };
    },
    components: {
        appList,
        appInput
    },
    methods: {
        onClose(clickPosition, instance) {
            switch (clickPosition) {
                case "left":
                    console.log(3);
                    instance.close();
                    break;
                case "cell":
                case "outside":
                    console.log(2);
                    instance.close();
                    break;
                case "right":
                    console.log(1);
                    instance.close();
                    break;
            }
        },
        onSelect(item) {
            // 点击选项时默认不会关闭菜单，可以手动关闭
            let that = this;
            console.log(item);
            switch (item.name) {
                case "拍照":
                    that.camera();
                    break;
                case "从相册中选取":
                    that.show=false;
                    that.$router.push("/index/photo")
                    break;
                case "扫描二维码":
                    that.createBarcode();
                    break;
            }
        },
        camera() {
            //拍照
            var cmr = plus.camera.getCamera();
            var res = cmr.supportedImageResolutions[0];
            var fmt = cmr.supportedImageFormats[0];
            console.log("Resolution: " + res + ", Format: " + fmt);
            cmr.captureImage(
                function(path) {
                    alert("Capture image success: " + path);
                },
                function(error) {
                    alert("Capture image failed: " + error.message);
                },
                { resolution: res, format: fmt }
            );
        },
        createBarcode() {
            let barcode=this.barcode;
            console.log(barcode)
            //创建二维码拍照
            if (!barcode) {
                barcode = plus.barcode.create("barcode", [plus.barcode.QR], {
                    top: "0",
                    left: "0px",
                    width: "100%",
                    height: "100vh",
                    position: "static"
                });
                this.barcode=barcode;
                barcode.onmarked = this.onmarked;
                plus.webview.currentWebview().append(barcode);
          
            }
            barcode.start();
        },
        onmarked: function(type, result) { //二维码扫描回调
            var text = "未知: ";
            switch (type) {
                case plus.barcode.QR:
                    text = "QR: ";
                    break;
                case plus.barcode.EAN13:
                    text = "EAN13: ";
                    break;
                case plus.barcode.EAN8:
                    text = "EAN8: ";
                    break;
            }
            alert(text + result);
            this.barcode.close();
            this.barcode=null;
        }
    }
};
</script>
<style lang="less" scoped>
.user_info {
    > form {
        padding: 0 4vw;
    }
    .swipe {
        display: block;
        width: 65px;
        line-height: 44px;
        color: #fff;
        background-color: red;
        text-align: center;
    }
}
</style>
