<template>
    <div id="login-main">
        <div class="block-title flex flex-column align-center justify-center">
            <div class="toback img-box" onclick="javascript :history.back(-1)"><img src="../../assets/img/head-nav-left.png" alt=""></div>
            <img src="../../assets/img/login-logo.png" width="73" height="70" alt="">
            <p>好孕从此开始</p>
        </div>
        <div class='form-box'>
            <div class='ipt1'>
                <input type="number" placeholder="请输入手机号" v-model="form.phone">
                <!-- <p class='err-msg'>*手机号不能为空</p> -->
            </div>
            <div class='ipt2'>
                <input type="number" placeholder="请输入验证码" v-model="form.code">
                <span class='yan-btn' @click="getVerifyCode">{{sendVerifyBtnText}}</span>
                <!-- <p class='err-msg'>*验证码错误</p> -->
            </div>
            <div class='ipt3'><button class='login-btn' @click="doLogin">登录</button></div>
            <div class="ipt-wechat flex align-center justify-center flex-column">
                <span>微信登录</span>
                <img src="../../assets/img/wechat2.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant'
import { mapMutations } from 'vuex';
export default {
    components:{
    },
    name:"Login",
    data(){
        return {
            showModal: false,
            ModalMessage: '',
            sendVerifyBtnText: '获取验证码',
            timeout: 60,
            form: {
                phone: '',
                code: ''
            },
        }
    },
    methods:{
        ...mapMutations(['SET_TOKEN','GET_USER']),
        doLogin(){
            if (this.verify()) {
                this.$axios.post('/api/login', this.form).then((res)=>{
                    if (res.status == 200 && res.data.status_code == 200) {
                        
                        this.SET_TOKEN({ Authorization: 'Bearer '+res.data.token });
                        // console.log(this.$store.state.token)
                        this.$axios({
                            method:'get',
                            url:'/api/user',
                            headers:this.$store.state.token
                            }).then((res)=>{

                            if (res.status == 200) {
                                Toast.success('登录成功');
                                this.GET_USER(res.data)
                                this.$router.push({path:'/'})
                                this.$store.state.navBarNum = 4
                                // console.log(this.$store.state.user)
                            }

                        })
                    }
                    if (res.status == 419 && res.data.status_code == 419) {

                        Toast.fail(res.data.message)

                    }
                })
            }
        },
        getVerifyCode() {
            if(this.form.phone !=''&& this.is_moblie()){

                this.$axios.post('api/send/verifycode', {phone: this.form.phone}).then((res)=>{
                    console.log(res)
                    if (res.status == 204) {
                        this.starTimeout()
                        Toast.success('验证码发送成功')
                    }
                    // if (res.status == 429) {
                    //     Toast.fail('休息一会再发送验证码吧')
                    // }
                }).catch(function (error) {
                    console.log(error);
                });

            }else{
                Toast.fail('请正确填写手机号')
            }
            
        },
        starTimeout() {
            this.sendVerifyBtnText = this.timeout + 's'
            let clock = setInterval(() => {
                this.timeout--
                this.sendVerifyBtnText = this.timeout + 's'
                if (this.timeout < 0) {     //当倒计时小于0时清除定时器
                    clearInterval(clock)
                    this.sendVerifyBtnText = '获取验证码'
                    this.timeout = 60
                }
            },1000)
        },

        verify() {
            var canLogin = true;
            if (this.form.phone == '') {
                canLogin = false
                Toast.fail('请填写手机号')
            }
            if (! this.is_moblie()) {
                canLogin = false
                Toast.fail('请确认手机号是否正确')
            }
            if (this.form.code == '') {
                canLogin = false
                Toast.fail('请填写验证码')
            }
            
            return canLogin;
        },

        showTip(message) {
            this.ModalMessage = message
            this.showModal = true
        },

        is_moblie() {
            var reg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/ //验证规则
            return reg.test(this.form.phone);
        },

        getuserinfo() {
            wx.login({
                success: (res) => {
                    if (res.errMsg == 'login:ok') {
                    // 获取code成功
                        this.$http.post('mini/auth', {code: res.code}).then((res)=>{

                            if (res.statusCode == 200 && res.data.status_code == 200) {

                                uni.setStorageSync('token', res.data.token);
                                this.$http.get('user').then((res)=>{

                                if (res.statusCode == 200) {

                                    this.login(res.data);
                                    uni.navigateBack({
                                        delta: 1
                                    });

                                }

                                })

                            }
                            if (res.statusCode == 419 && res.data.status_code == 419) {
                                this.showTip(res.data.message)
                            }
                        })
                    }
                },
            })
        }
    },
    mounted(){

    }
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

 <!-- <template>-->
 <!-- <view>
  <cu-custom bgColor="bg-luanluan" :isBack="true"><block slot="backText">返回</block></cu-custom>
        <view class="logo">
   <view class="img">
    <image mode="widthFix" src="../../../static/login-logo.png"></image>
   </view>
  </view> -->
  <!-- 账号密码输入框 -->
  <!-- <view class="form">
   <view class="username">
    <input placeholder="请输入手机号" v-model="form.phone" placeholder-style="color: rgba(255,255,255,0.8);"/>
   </view>
   <view class="password">
    <input placeholder="请输入验证码" v-model="form.code" placeholder-style="color: rgba(255,255,255,0.8);"/>
    <button class='cu-btn bg-luanluan' :disabled="canSend" style="width: 75px;" @tap="getVerifyCode">{{ sendVerifyBtnText }}</button>
   </view>
   <view class="btn" @tap="doLogin">登 录</view>
   <view class="res">
    <view></view>
   </view>
  </view> -->
  
  <!-- <view class="oauth">
   <view class="text">— 快速登录 —</view>
   <view class="list">
    <view class="icon weixin" @tap="getuserinfo"></view>
   </view>
  </view> -->
  
  <!-- #ifdef MP-WEIXIN -->
  <!-- <button type="primary" open-type="getUserInfo" @getuserinfo="getuserinfo" withCredentials="true">微信登录</button> -->
  <!-- #endif -->
  
  <!-- 登录提示 -->
  <!-- <view class="cu-modal" :class="showModal ?'show':''">
   <view class="cu-dialog">
    <view class="cu-bar bg-white justify-end">
     <view class="content">温馨提示</view>
     <view class="action" @tap="showModal = false">
      <text class="icon-close text-red"></text>
     </view>
    </view>
    <view class="padding-xl">
     {{ ModalMessage }}
    </view>
   </view>
  </view>
 </view> -->
<!-- </template> -->

<!--<script>
 import { mapState, mapMutations } from 'vuex'
 
 export default {
  data() {
   return {
    StatusBar: this.StatusBar,
    CustomBar: this.CustomBar,
    showModal: false,
    ModalMessage: '',
    sendVerifyBtnText: '获取',
    timeout: 60,
    form: {
     phone: '',
     code: ''
    },
   }
  },
  mounted() {
  },
  methods: {
   ...mapMutations(['login']),
   doLogin() {
    if (this.verify()) {
     this.$http.post('login', this.form).then((res)=>{
      if (res.statusCode == 200 && res.data.status_code == 200) {
       uni.setStorageSync('token', res.data.token);
       this.$http.get('user').then((res)=>{
        if (res.statusCode == 200) {
         this.login(res.data);
         uni.navigateBack({
          delta: 2
         });
        }
       })
      }
      if (res.statusCode == 419 && res.data.status_code == 419) {
       this.showTip(res.data.message)
      }
     })
    }
   },
   verify() {
    var canLogin = true;
    if (this.form.phone == '') {
     canLogin = false
     this.showTip('请填写手机号')
    }
    if (! this.is_moblie()) {
     canLogin = false
     this.showTip('请确认手机号是否正确')
    }
    if (this.form.code == '') {
     canLogin = false
     this.showTip('请填写验证码')
    }
    
    return canLogin;
   },
   getVerifyCode() {
    
    this.$http.post('send/verifycode', {phone: this.form.phone}).then((res)=>{
     if (res.statusCode == 204) {
       this.starTimeout()
     }
     if (res.statusCode == 429) {
      this.showTip('休息一会再发送验证码吧')
     }
    })
   },

   starTimeout() {
    this.sendVerifyBtnText = this.timeout + 's'
    let clock = setInterval(() => {
     this.timeout--
     this.sendVerifyBtnText = this.timeout + 's'
     if (this.timeout < 0) {     //当倒计时小于0时清除定时器
      clearInterval(clock)
      this.sendVerifyBtnText = '获 取'
      this.timeout = 60
     }
    },1000)
   },

   showTip(message) {
    this.ModalMessage = message
    this.showModal = true
   },

   is_moblie() {
    var reg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/ //验证规则
    return reg.test(this.form.phone);
   },

   getuserinfo() {
    wx.login({
     success: (res) => {
      if (res.errMsg == 'login:ok') {
       // 获取code成功
       this.$http.post('mini/auth', {code: res.code}).then((res)=>{
        if (res.statusCode == 200 && res.data.status_code == 200) {
         uni.setStorageSync('token', res.data.token);
         this.$http.get('user').then((res)=>{
          if (res.statusCode == 200) {
           this.login(res.data);
           uni.navigateBack({
            delta: 1
           });
          }
         })
        }
        if (res.statusCode == 419 && res.data.status_code == 419) {
         this.showTip(res.data.message)
        }
       })
      }
     },
    })
   }
  },
  computed: {
   style() {
    var StatusBar= this.StatusBar;
    var CustomBar= this.CustomBar;
    var bgImage = this.bgImage;
    var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
    if (this.bgImage) {
     style = `${style}background-image:url(${bgImage});`;
    }
    return style
   },
   canSend() {
    if (! this.is_moblie() || this.timeout != 60) {
     return true
    }
    return false
   }
  },
 }
</script> -->

<!--<style lang="scss">
 @import "../../../static/css/login.scss";
 @font-face {font-family:"HMfont-login";src:url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVwAAsAAAAACiwAAAUhAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqHTIY+ATYCJAMUCwwABCAFhG0HRhvICBEVpCGR/UgwbhrPeq6LhESdqBKaSN/kw79n/bk3aCYZKO1yZCbTFZBZqLv71CzRPvkPQPDEzrPbAAEEdy/nHLBRL1RJVpMf+cAnKX4Do/NzekpNyAm5/zlmunw+sPy2tUt22QBHAx5Q5EUGHvAdnfOh3DK8OuQd0OlAAIiIQw5IS1uPAgEstFUEAFmxdPFcCDE92AIcgaDigV1ZkBvBQaCH6csAbnB/nnyDIiIAFBwDbePAotYFaAjIY0OMFtTMsBEQdGcFwOwFMAByALAAWQfaV4Dx4zlgIEpRFg2A/DsBFDQgB2oDc8eGgkGQeEFKUZejCznt9o/HQ5OHYmxDggUCskkBBgjUUoAAgbkUoMDYkPDCyDliuQhABkgJQK6yyhT38BIY8CBxYSRMEkkMSSATwkJdISFRxmEK1/vOnrTzXjViHzwz8aKlGEYs2iibpmp+5ratsgWGNWLbfrapGoZCpmU/tfdypWk3P2UpyrXbL9yT7r9NuzXF7fWdOOu/rp+KJfM9J10u24o94tV0yTZj7Q1k2sNGbKz3FE7fJrlO6jZTvS8u0ZhJun8isa0RspKxyKuEe2NZXZZOEuakK+yhNyZTXZI887RY8YQzlSXpoBHeCI5wo155sye1OndEW2qmqrgfekbypF8gtj1yfSpZR24fvUPxWVJPRLG2DHcxzf7n0tWR1+x5R0CV6j3Gds3IOfkK9MdFr5Un3mk4rSddo6/Jd1vEsCbatsu6R7YZUv2mevIuRf9nThs/zvYVz49u+Zw5nLqge+KujIq2hXHLc265lFGtRqxMdB4ZW7GDGxWkhRXLMpfNnaPMmLeT8S2mw3TIt3Ynv5P1TWOGGMW3c6cDCdUbnElHp9An2M7UvfFrl9Se3Mpl2OsC/OPrLn+Z/t+8OYMbyc7EULKrYRH0H8RvBcrsPjrZH/r9uO9DFSlsbnuo+4UQU/18N/9U41O/hEONfOLyA79rcYXtbq65rDorfijy9epSZFw8fEWNBN4peoL0Ll7SS4QBfh0/4Jnj+Jabk3XpkHSMdxxyuKysOZ4BfiuXySHl2UXydcnnx30kioxf/vShfUSnz/oZraNzc1Nu0tJttfyZxEhcTaOb/Ofrls75Pu/7/A/zPvxwpc/TJ34YSpffeeM2qlH/jVhDV9gcvNONnb7ZJePd7ubF++dFqYkkt2sh8dkoHjBpXMs3De/mt/y3dmCZ8424T5Y6B9aQf4r8dxu+imujrYtcywuiBztmF7Bt/yXK7wSmVlUEpshvJ/7HthUAHPDGBa7l2AIACD6yMPolEHyG+Y62A8EXmZ8Xf8adtzCtX+sirIn7vGB2RM1vgnSbRt7WD193ec251eT45BSoLPg221gAwV8Wxoo0A8eK3SZfLOSwDxLwhIWfYccX6Y7Gh90o5crFAIEAOQQKByYDAwEpSBabAxwktBLgCepBlK3eWxLDWSILAZDljYCI9AEq3GPAiPRFstgfcJz+wItsCaKRYg4pSas5NDtkASXwFzSCRmWYwsErPaK+9cxFRS7+is43IUijJJmqcUTXxRb+rrMQFChHA1TobNj3BJOjFkWITAhTHscKeqFI0DA7aOYgJkAS4F5AQyAjZQ8PDqnvP0LaTY9xBT0l9ivkeM34IBVJKiBr+Vip51SqvTstE4ioAhRTTAagIqyo1+METPC8FhKCiGkQneRiYpCqKo+GVw7nWPBn9NWuwEUJQ1jCER7cseG02dIwGppNhOPnjIu1djYDAAAA') format('woff2');}

 .icon {
  font-family:"HMfont-login" !important;
  
  font-style:normal;
  color:#ffffff;
  &.weixin {
   &:before{content:"\e615";}
  }
  &.qq {
   &:before{content:"\e752";}
  }
  &.sinaweibo {
   &:before{content:"\e63d";}
  }
  &.xiaomi {
   &:before{content:"\e661";}
  }
 }
 .username {
  -webkit-box-sizing: unset;
  box-sizing: unset;
 }
 .password {
  -webkit-box-sizing: unset;
  box-sizing: unset;
 }
 .form {
  -webkit-box-sizing: unset;
  box-sizing: unset;
  
  .res {
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 100upx;
   color: rgba($color: #ffffff, $alpha: 0.8);
  }
 }
 .oauth{
  @media all and (max-height:150vw){
   display: none;
  }
  position: absolute;
  bottom: 50upx;
  width: 100%;
  .text{
   width: 100%;
   height: 60upx;
   display: flex;
   justify-content: center;
   align-items: center;
   color: rgba($color: #ffffff, $alpha: 0.8);
   font-size: 28upx;
  }
  .list{
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 20upx 0;
   .icon{
    font-size:80upx;
    margin: 0 30upx;
   }
  }
 }
</style>-->