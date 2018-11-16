<template>
<!-- 
    icon:单元格左侧图标(废弃)
    phold:input的placehold
    title:图标右侧标题
    verify:右侧文字,但当文字时'获取验证码'时,url无效
    url:右侧文字链接
    slot:单元格左侧,可填图标
 -->
    <div>
        <div class="form_list">
            <div class="list_left">
                <slot></slot>
               <!-- <img :src="icon" v-if="icon" alt=""> -->
                <span>{{title}}</span>
            </div>
            <input type="text" :placeholder="phold" @focus="onfocue" @blur="onfocue" v-model="inputs" :style="verify?'paddingRight:28vw':'paddingRight:10vw'">
            <div class="del"><span v-if="inpu" @click="del">X</span>
                <router-link tag="a" style="marginLeft:4vw" :to="url" v-if="verify&&verify!='获取验证码'&&url">{{verify}}</router-link>
                <span  v-if="verify=='获取验证码'" style="marginLeft:4vw" @click="verifys">{{verify}}</span>
            </div>
           
        </div>
         <div>{{inputs*100/938}}</div>
    </div>
</template>
<script>
export default {
    props: {
        icon: String,
        phold: String,
        title: String,
        verify: String,
        url: String
    },
    data() {
        return {
            inpu: false,
            inputs: "",
            ver:true,
        };
    },
    methods: {
        onfocue() {
            this.inpu = !this.inpu;
        },
        del() {
            this.inputs = "";
        },
        verifys(e){
            let a=9,that=this
            console.log(that.ver)
            let d =e.currentTarget;
            if(that.ver){
            $(d).text("重新获取(10)");
            }
            if(that.ver){
            let c = setInterval(function(){
                that.ver=false;
                if(a==0){
                    clearInterval(c)
                    $(d).text("获取验证码")
                     that.ver=true;
                }else {
                     $(d).text("重新获取("+a+")");
                     a--;
                }
            },1000)
            }
           
        }
    }
};
</script>
<style lang="less" scoped>
.form_list {
    height: 12vw;
    width: 100%;
    padding-top: 4vw;
    border-bottom: 1px #ccc solid;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    > input {
        padding-right: 10vw;
        box-sizing: border-box;
        flex: 1;
        color: #333;
        min-width: 50vw;
        &::-webkit-input-placeholder {
            font-size: 14px;
            color: #ccc;
        }
    }

    > .list_left {
        color: #333;
        > img {
            width: 3.2vw;
            vertical-align: bottom;
            margin-right: 2vw;
        }
       >span {
           margin-right: 4vw;
       }
    }
    .del {
        position: absolute;
        right: 1vw;
        top: 5vw;
        font-size: 12px;
        color: #5871ff;
        > a {
            text-decoration: none;
            color: #5871ff;
            font-size: 14px;
        }
    }
}
</style>
