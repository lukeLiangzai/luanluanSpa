<template>
    <div class="main">
        <div class='head-nav flex align-center justify-between bg-white fixed'>
            <span class='bold text-black'>服务</span>
            <input type="text" placeholder="泰国杰特宁医院">
            <img src="../../assets/img/icon-01.png" alt="">
        </div>
        <div class="data-card-box">
            <div class="data-card">
                <p>累计服务</p>
                <div class='data-num'><i>3,896</i><span>次</span></div>
                <div class="img-box"><img src="../../assets/img/serve-img1.png" alt=""></div>
            </div>   
        </div>
        <div class="serve-card">
            <a class='serve-card-items img-box' @click="showTo(0)">
                <img src="../../assets/img/serve-apartment.png" alt="">
            </a>
            <a class='serve-card-items img-box' @click="showTo(1)">
                <img src="../../assets/img/serve-translations.png" alt="">
            </a>
            <div class="foo-edge">孪娈海外祝您试管无忧</div>
        </div> 
    </div>
</template>

<script>
export default {
    name:"Service",
    data(){
        return {
            
        }
    },
    methods:{
        showTo(sid){
            this.$router.push({path:`/serviceShow/${sid}`}) 
        }
    }
}
</script>
<style lang="scss" scoped>
.data-card-box{
    width: 100%;
    background-color: #fff;
    padding-top: 1.6rem;
}
.data-card-box>.data-card{
    width:8.4rem;
    height:3.466667rem;
    background:#5A98E7;
    border-radius:.266667rem .266667rem 0px 0px;
    margin: 0 auto;
    font-size:.373333rem;
    font-weight:400;
    color:#E2E2E2;
    padding: 1.066667rem .533333rem;
    position: relative;
}
.data-card-box>.data-card>.img-box{
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    bottom: 0;
    right: .426667rem;
}
.data-card-box>.data-card>.data-num{
    color: #fff;
    font-family: 'DIN Alternate Bold';
    font-size: .853333rem;
    margin-top: .266667rem;
}
.data-card-box>.data-card>.data-num>span{
    font-size: .426667rem;
    font-weight: bold;
    margin-left: .08rem;
}
.serve-card{
    width: 100%;
    min-height: calc(100vh - 5.066667rem);
    background-color: #fff;
    padding: .4rem .4rem 1.28rem;
    -moz-box-shadow:0px -10px 20px 5px #EBEBEB;
    -webkit-box-shadow:0px -10px 20px 5px #EBEBEB;
    box-shadow:0px -10px 20px 5px #EBEBEB;
}
.serve-card>.serve-card-items{
    display: block;
    width: 100%;
    height: 4.8rem;
    margin-bottom: .4rem;
    border-radius: .266667rem;
    overflow: hidden;
}

.head-nav{
    width: 100%;
    height: 1.333333rem;
    padding: 0 .4rem;
    top: 0;
    left: 0;
    z-index: 1;
}
.head-nav span{
    font-size:.64rem;
}
.head-nav input{
    flex:1;
    height: .8rem;
    background-color: #f0f0f0;
    border-radius: 2.666667rem;
    padding: 0 .533333rem;
    padding-left: 1.066667rem;
    margin:0 .4rem 0 .533333rem;
    background-image: url(../../assets/img/icon-search.png);
    background-repeat: no-repeat;
    background-position: .533333rem center;
    background-size: .4rem;
}
input::-webkit-input-placeholder{
    font-size:14px;
    font-weight:400;
    color:#CFCFCF;
}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    font-size:14px;
    font-weight:400;
    color:#CFCFCF;
}
input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    font-size:14px;
    font-weight:400;
    color:#CFCFCF;
}
input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    font-size:14px;
    font-weight:400;
    color:#CFCFCF;
}

.head-nav img{
    width: .3rem;
}

.foo-edge{
    position: relative;
    width: 100%;
    text-align: center;
    color: #D3D3D3;
    bottom: -0.8rem;
}
.foo-edge::before{
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
.foo-edge::after{
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
</style>

