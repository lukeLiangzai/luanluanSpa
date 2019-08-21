<template>
        <div id="personal-main">
        <div class="head-block flex justify-between align-center">
            <div class="left flex">
                <div class="img-box"><img src="../../assets/img/head-img.png" alt=""></div>
                <div class="l-right flex flex-column justify-center">
                    <p>这是昵称</p>
                    <div class='triesto'>好孕从此开始</div>
                </div>
            </div>
            <a class="right img-box"><img src="../../assets/img/icon-personal-1.png" alt=""></a>
        </div>
        <div class='card-block personal-block1 flex justify-around align-center'>
            <div class="flex flex-column justify-center align-center">
                <img src="../../assets/img/icon-personal-3.png" alt="">
                <span>我的预约</span>
            </div>
            <div class="flex flex-column justify-center align-center">
                <img src="../../assets/img/icon-personal-2.png" alt="">
                <span>我的订单</span>
            </div>
            <div class="flex flex-column justify-center align-center">
                <img src="../../assets/img/icon-personal-4.png" alt="">
                <span>我的拼团</span>
            </div>
        </div>
        <div class='card-block consultant-block flex'>
            <div class="left flex flex-auto flex-column justify-between">
                <p>我是<i>徐顾问</i></p>
                <p>有任何试管方面的问题都可以向我提问</p>
                <img src="../../assets/img/icon-personal-6.png" alt="">
            </div>
            <div class="right flex align-center justify-center">立即沟通</div>
        </div>
        <div class='card-block personal-list'>
            <div class='card-block-row flex align-center'>
                <div class="left img-box"><img src="../../assets/img/icon-personal-5.png" alt=""></div>
                <div class="cneter flex-auto">会员中心</div>
                <div class="right img-box"><img src="../../assets/img/icon-toright.png" alt=""></div>
            </div>  
        </div>
        <div class='card-block personal-list'>
            <div class='card-block-row flex align-center'>
                <div class="left img-box"><img src="../../assets/img/icon-personal-7.png" alt=""></div>
                <div class="cneter flex-auto">会员中心</div>
                <div class="right img-box"><img src="../../assets/img/icon-toright.png" alt=""></div>
            </div>  
            <div class='card-block-row flex align-center'>
                <div class="left img-box"><img src="../../assets/img/icon-personal-8.png" alt=""></div>
                <div class="cneter flex-auto">会员中心</div>
                <div class="right img-box"><img src="../../assets/img/icon-toright.png" alt=""></div>
            </div>  
            <div class='card-block-row flex align-center'>
                <div class="left img-box"><img src="../../assets/img/icon-personal-9.png" alt=""></div>
                <div class="cneter flex-auto">会员中心</div>
                <div class="right img-box"><img src="../../assets/img/icon-toright.png" alt=""></div>
            </div>  
        </div>
        <div class='log-base'>退出登录</div>
    </div>
</template>

<script>
export default {
    components:{
    },
    name:"Personal",
    data(){
        return {
            msg:'这里是我的',
            item: 4
        }
    },
    methods:{
    }
}
</script>
<style lang="scss" scoped>
.card-block{
        width: 100%;
        background-color: #fff;
        padding: 0 .3rem;
        border-radius: .2rem;
        min-height: 1rem;
        margin-bottom: .2rem
    } 
    .card-block:last-child{margin-bottom: 0;}
    #personal-main{
        width: 100%;
        min-height: 100vh;
        background-color: #F7F5F5;
        font-family:"PingFang SC";
        padding-bottom: 1rem;
        box-sizing: border-box;
    }
#personal-main>.card-block{
    margin: 0 .3rem .3rem;
    box-sizing: border-box; 
    width: auto;
    border-radius: .1rem;
}
#personal-main>.head-block{
    width: 100%;
    height: 3rem;
    background-color: #14B6C4;
    padding: 0 1rem .7rem;
    color: #fff;
    font-size: .24rem;
}
#personal-main>.head-block>.left>.img-box{
    width: 1rem;
    height: 1rem;
    background-color: pink;
    border-radius: 100%;
    margin-right: .2rem;
    overflow: hidden;
}
#personal-main>.head-block>.left>.l-right>p{
    font-size:.36rem;
    font-weight:600;
    margin-bottom: .14rem;
}
#personal-main>.head-block>.right{
    width: .54rem;
    height: .54rem;
}
/* #personal-main .triesto{
    background: url(/../../assets/img/toright01.png) no-repeat right 52%;
    background-size: .26rem;
} */
#personal-main>.personal-block1{
    margin: -.7rem .3rem .36rem;
    font-size:.2rem;
    color:rgba(105,105,105,1);
    height: 1.4rem;
    padding: 0;
}
#personal-main>.personal-block1 img{
    width: 50%;
    margin-bottom: .1rem;
}
#personal-main>.consultant-block{
    height: 1.2rem;
    padding: 0;
}
#personal-main>.consultant-block>.right{
    width: 1.2rem;
    height: 100%;
    background-color: #14B6C4;
    font-size: .2rem;
    color:rgba(255,255,255,1);
    border-radius: 0 .1rem .1rem 0;
}
#personal-main>.consultant-block>.left{
    padding:.26rem 0 .26rem 1.6rem;
    font-size: .2rem;
    color:rgba(105,105,105,1);
    position: relative;
}
#personal-main>.consultant-block>.left i{
    font-size: .24rem;
}
#personal-main>.consultant-block>.left>img{
    position: absolute;
    width: .82rem;
    bottom: 0;
    left: .54rem;
}
#personal-main>.personal-list{
    padding: .2rem .2rem .2rem .56rem;
    font-size:.24rem;
    color:rgba(106,106,106,1);
}
#personal-main>.personal-list>.card-block-row{
    padding: .2rem 0;
}
#personal-main>.personal-list>.card-block-row>.right{
    width: .12rem;
}
#personal-main>.personal-list>.card-block-row>.left{
    width: .46rem;
    margin-right: .28rem;
}
.log-base{
    width: calc(100% - .6rem);
    height: .76rem;
    background-color: #14B6C4;
    margin: 0 .3rem .3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: .32rem;
    border-radius: .1rem;
}
</style>



