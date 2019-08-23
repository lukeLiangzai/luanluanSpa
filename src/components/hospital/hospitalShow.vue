<template>
  <div>
    <div class='head-box'>
        <div class='head-row1 flex align-center justify-between'>
            <van-icon name="arrow-left" :color="imgIsshow ? '#fff' : '#323233'" size="18"/>
        </div>
        <div class='head-row2 flex align-center justify-center' :style="{opacity : headOpacity}"><span>医院详情</span></div>
    </div>
    <div class='banner'>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image.srcImg" />
            </van-swipe-item>
        </van-swipe>
    </div>
    <footer class='details-nav-bar'>
        <div class='focus'>
            <img src="../../assets/img/nav-bar-heart.png" alt="">
            <span>关注</span>
        </div>
        <div class='btn-bottom'>在线咨询</div>
        <div class='btn-bottom'>免费预约</div>
    </footer>
</div>
</template>

<script>
export default {
    name:'hospitalShow',
    data(){
        return{
            images:[//轮播图
                {srcImg: require("../../assets/img/banner-test.png")},
                {srcImg: require("../../assets/img/banner-test.png")},
                {srcImg: require("../../assets/img/banner-test.png")},
            ],
            headOpacity : 0,
            imgIsshow : true
        }
    },
    methods:{
        hosScroll(e){
            let scrollNum = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
            if(scrollNum < 50){
                this.imgIsshow = true
            }else if(scrollNum > 50){
                this.imgIsshow = false
            }
            if(scrollNum < 98){
                this.headOpacity = scrollNum/100
            }else if(scrollNum > 98){
                this.headOpacity = 1
            }
        },
    },
    mounted(){
        window.addEventListener('scroll',this.hosScroll,true)
    },
    destroyed() {
        window.removeEventListener("scroll", this.hosScroll, true);
    },

}
</script>

<style lang="scss" scoped>
    .banner{
        width: 100%;
        max-height: 5.786667rem;
        img{
            width: 100vw;
        }
    }
    .head-box{
        position: relative;
        z-index: 4;
        div{
            position: fixed;
            top: 0;
            left: 0;
            z-index: 3;
            width: 100%;
            height: 1.28rem;
            font-size: .426667rem;
            font-weight: 400;
            padding: 0 .4rem;
            z-index: 4;
        }
        .head-row2{
            z-index: 3;
            background-color: #fff;
            opacity: 0;
        }
    }
    
.details-nav-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.333333rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    box-shadow: 0 -0.026667rem .066667rem rgba(51,51,51,.1);
    z-index: 2;
    .focus{
        width:.613333rem;
        margin: 0 .48rem;
        font-size:.266667rem;
        font-weight:400;
        line-height:.373333rem;
        color:rgba(85,85,85,1);
        text-align: center;
        img{
            width: .613333rem;
        }
    }
    .btn-bottom{
        width:3.866667rem;
        height:1.066667rem;
        background:rgba(255,95,95,1);
        box-shadow: .053333rem .106667rem .053333rem rgba(255,72,72,0.14);
        border-radius:.133333rem;
        margin-right: auto;
        font-size:.373333rem;
        font-weight:500;
        line-height:1.093333rem;
        text-align: center;
        color:rgba(255,255,255,1);
    }
    .btn-bottom:last-child{
        background:rgba(255,72,72,1);
    }
}
</style>