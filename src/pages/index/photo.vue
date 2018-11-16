<template>
    <div class="photo">
        <van-nav-bar title="请选择照片" left-text="返回" left-arrow @click-left="onClickLeft" />
        <div class="photo_main" >
           <div v-for="item in piack_photo" key="4">
                <img :src="item" alt="">
           </div>
        </div>
        <div class="add_photo" @click="galleryImgs">
            <img src="../../../static/img/icon_xiangji.png" alt="">
        </div>
        <button>返回</button>
    </div>
</template>
<script>
export default {
     data(){
            return {
                piack_photo:[],
            }
        },
    methods: {
       
        onClickLeft() {
            this.$router.push("/index/userinfo");
        },
        galleryImgs() {
            let that=this;
            plus.gallery.pick(
                function(e) {
                    that.piack_photo=e.files;
                    for (var i in e.files) {
                        console.log(e.files[i]);
                        
                    }
                },
                function(e) {
                    console.log("取消选择图片");
                },
                { filter: "image", multiple: true, system: false, maximum: 5 }
            );
        }
    }
};
</script>
<style lang="less" scoped>
.photo {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    text-align: center;

    .photo_main {
        width: 90vw;
        margin: 0 auto;
        height: 100px;
        border: 1px #5871ff dashed;
        border-radius: 5.1333vw;
         display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
       >div {
           width: 100%;
           height: 100%;
           display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            >img{
            width: 25vw;
            height: 25vw;
        }
       }
    }
    .add_photo {
        width: 20.6667vw;
        height: 20.6667vw;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px #5871ff dashed;
        margin-top: 3vw;
        border-radius: 3.1333vw;
        margin-left: 5vw;
        > img {
            width: 10.1333vw;
        }
    }
}
</style>
