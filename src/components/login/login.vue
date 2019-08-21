<template>
    <div id="login-main">
        <div class="block-title flex flex-column align-center justify-center">
            <div class="toback img-box" onclick="javascript :history.back(-1)"><img src="../../assets/img/head-nav-left.png" alt=""></div>
            <img src="../../assets/img/login-logo.png" width="73" height="70" alt="">
            <p>好孕从此开始</p>
        </div>
        <div class='form-box'>
            <div class='ipt1'>
                <input type="number" placeholder="请输入手机号">
                <!-- <p class='err-msg'>*手机号不能为空</p> -->
            </div>
            <div class='ipt2'>
                <input type="number" placeholder="请输入验证码">
                <span class='yan-btn'>获取验证码</span>
                <!-- <p class='err-msg'>*验证码错误</p> -->
            </div>
            <div class='ipt3'><button class='login-btn'>登录</button></div>
            <div class="ipt-wechat flex align-center justify-center flex-column">
                <span>微信登录</span>
                <img src="../../assets/img/wechat2.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components:{
    },
    name:"Login",
    data(){
        return {
            
        }
    },
}
</script>

<style>
    #login-main{
        width: 100%;
        min-height: 100vh;
        background-color: #fff;
        font-family:"PingFang SC";
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    }
    #login-main>.block-title{
        width: 100%;
        height: 6.4rem;
        background-color: #14B6C4;
        color: #fff;
        position: relative;
    }
    #login-main>.block-title>.toback{
        position: absolute;
        left: .4rem;
        top: .4rem;
        width: .32rem;
    }
    #login-main>.block-title>p{
        font-size: .48rem;
        font-weight: 500;
        margin-top: .453333rem;
    }
    #login-main>.form-box{
        display: block;
        width: 100%;
        padding: 1.466667rem .986667rem;
        position: relative;
        flex: 1;
    }
    #login-main>.form-box>div{
        width: 100%;
        height: 1.066667rem;
        position: relative;
    }
    #login-main>.form-box>div>input{
        width: 100%;
        height: 100%;
        background-color: #fff;
        padding-left: .066667rem;
    }
    #login-main>.form-box .login-btn{
        width: 100%;
        height: 100%;
        background:rgba(20,182,196,1);
        box-shadow:.053333rem .106667rem .4rem rgba(55,236,252,0.4);
        border-radius: .053333rem;
        font-size:.426667rem;
        font-family: "PingFang SC";
        color:rgba(255,255,255,1);
        border:none;
    }
    #login-main>.form-box .login-btn:active{
        background-color: #13a8b5;
    }
    #login-main>.form-box>.ipt3{
        margin-top: .8rem;
        height: 2.4rem;
        padding-bottom: 1.333333rem;
    }
    #login-main>.form-box>.ipt3::before{
        display: none;
    }
    #login-main>.form-box>.ipt2{
        margin-top: .8rem;
    }
    #login-main>.form-box>.ipt-wechat{
        width: 100%;
        height: auto;
        color: #D3D3D3;
        font-size:.426667rem;
        font-weight: 400;
        position: absolute;
        bottom: .666667rem;
        left: 0;
        padding: 0 .986667rem;
    }
    #login-main>.form-box>.ipt-wechat>img{
        width: .933333rem;
        margin-top: .266667rem;
    }
    #login-main>.form-box>.ipt-wechat>span{
        position: relative;
        width: 100%;
        text-align: center;
    }
    #login-main>.form-box>.ipt-wechat>span::before{
        content: "";
        position: absolute;
        width: 5.333333rem;
        height: 1px;
        background-color: #D3D3D3;
        top: 50%;
        right: 0;
        transform: scale(0.5) translateY(-50%);
        transform-origin: right center;
        -webkit-transform-origin: right center;
        -moz-transform-origin: right center;
        -o-transform-origin: right center;
    }
    #login-main>.form-box>.ipt-wechat>span::after{
        content: "";
        position: absolute;
        width: 5.333333rem;
        height: 1px;
        background-color: #D3D3D3;
        top: 50%;
        left: 0;
        transform: scale(0.5) translateY(-50%);
        transform-origin: left center;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
    }
    #login-main>.form-box>.ipt2>.yan-btn{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        font-size:.32rem;
        font-family:"PingFang SC";
        font-weight:400;
        color:rgba(204,204,204,1);
        padding: 0 .133333rem;
    }
    #login-main>.form-box>div>.err-msg{
        position: absolute;
        color: #000;
        font-size:.266667rem;
        font-family:"PingFang SC";
        font-weight:400;
        color:rgba(255,0,0,1);
        left: 0;
        top: calc(100% + .133333rem);
    }
    #login-main>.form-box>div:not(:last-child):before{
        content: "";
        width: 200%;
        height: 1px;
        background-color: #d8d8d8;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        transform: scale(0.5);
        transform-origin: left top;
        -webkit-transform-origin: left top;
        -moz-transform-origin: left top;
        -o-transform-origin: left top;
    }



</style>