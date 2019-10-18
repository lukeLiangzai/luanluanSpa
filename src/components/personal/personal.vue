<template>
    <div id="personal-main">
        <div class="head-block flex justify-between align-center">
            <div class="left flex">
                <div class="img-box"><img :src="data.avatar_url" alt=""></div>
                <div class="l-right flex flex-column justify-center">
                    <p>{{data.hidden_name}}</p>
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
                <div class="cneter flex-auto">我的资料</div>
                <div class="right img-box"><img src="../../assets/img/icon-toright.png" alt=""></div>
            </div>  
        </div>
        <div class='card-block personal-list'>
            <div class='card-block-row flex align-center'>
                <div class="left img-box"><img src="../../assets/img/icon-personal-7.png" alt=""></div>
                <div class="cneter flex-auto">我的收藏</div>
                <div class="right img-box"><img src="../../assets/img/icon-toright.png" alt=""></div>
            </div>  
            <div class='card-block-row flex align-center'>
                <div class="left img-box"><img src="../../assets/img/icon-personal-8.png" alt=""></div>
                <div class="cneter flex-auto">我的优惠卷</div>
                <div class="right img-box"><img src="../../assets/img/icon-toright.png" alt=""></div>
            </div>  
            <div class='card-block-row flex align-center'>
                <div class="left img-box"><img src="../../assets/img/icon-personal-9.png" alt=""></div>
                <div class="cneter flex-auto">我的地址</div>
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
            data: {},
            item: 4
        }
    },
    methods:{
    },
    mounted(){
        // console.log(this.$store.state.user)
    },
    created(){

        // 进入个人中心组件时  查看token是否存在 true——取出token存data  false——转到login
        if(this.$store.state.token.constructor === Object){
            this.data = this.$store.state.user
        }else{
            this.$router.push({ path: '/login', query: { routeStr : 'EnterElement' , navBarNum : 4 }});
        }
    }
}
</script>
<style lang="scss" scoped>
.card-block{
    width: 100%;
    background-color: #fff;
    padding: 0 .4rem;
    border-radius: .266667rem;
    min-height: 1.333333rem;
    margin-bottom: .266667rem;
} 
.card-block:last-child{margin-bottom: 0;}
#personal-main{
    width: 100%;
    min-height: 100vh;
    background-color: #F7F5F5;
    font-family:"PingFang SC";
    padding-bottom: 1.333333rem;
    box-sizing: border-box;
}
#personal-main>.card-block{
    margin: 0 .4rem .4rem;
    box-sizing: border-box; 
    width: auto;
    border-radius: .133333rem;
}
#personal-main>.head-block{
    width: 100%;
    height: 4rem;
    background-color: #14B6C4;
    padding: 0 1.333333rem .933333rem;
    color: #fff;
    font-size: .32rem;
}
#personal-main>.head-block>.left>.img-box{
    width: 1.333333rem;
    height: 1.333333rem;
    background-color: pink;
    border-radius: 100%;
    margin-right: .266667rem;
    overflow: hidden;
}
#personal-main>.head-block>.left>.l-right>p{
    font-size:.48rem;
    font-weight:600;
    margin-bottom: .186667rem;
}
#personal-main>.head-block>.right{
    width: .72rem;
    height: .72rem;
}
#personal-main>.personal-block1{
    margin: -0.933333rem .4rem .48rem;
    font-size:.266667rem;
    color:rgba(105,105,105,1);
    height: 1.866667rem;
    padding: 0;
}
#personal-main>.personal-block1 img{
    width: 50%;
    margin-bottom: .133333rem;
}
#personal-main>.consultant-block{
    height: 1.6rem;
    padding: 0;
}
#personal-main>.consultant-block>.right{
    width: 1.6rem;
    height: 100%;
    background-color: #14B6C4;
    font-size: .266667rem;
    color:rgba(255,255,255,1);
    border-radius: 0 .133333rem .133333rem 0;
}
#personal-main>.consultant-block>.left{
    padding:.346667rem 0 .346667rem 2.133333rem;
    font-size: .266667rem;
    color:rgba(105,105,105,1);
    position: relative;
}
#personal-main>.consultant-block>.left i{
    font-size: .32rem;
}
#personal-main>.consultant-block>.left>img{
    position: absolute;
    width: 1.093333rem;
    bottom: 0;
    left: .72rem;
}
#personal-main>.personal-list{
    padding: .266667rem .266667rem .266667rem .746667rem;
    font-size:.32rem;
    color:rgba(106,106,106,1);
}
#personal-main>.personal-list>.card-block-row{
    padding: .266667rem 0;
}
#personal-main>.personal-list>.card-block-row>.right{
    width: .16rem;
}
#personal-main>.personal-list>.card-block-row>.left{
    width: .613333rem;
    margin-right: .373333rem;
}
.log-base{
    width: calc(100% - .8rem);
    height: 1.013333rem;
    background-color: #14B6C4;
    margin: 0 .4rem .4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: .426667rem;
    border-radius: .133333rem;
}
</style>



