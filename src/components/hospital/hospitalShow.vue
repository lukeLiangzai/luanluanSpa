<template>
  <div>
      <div class='head-box'>
        <div class='head-row1 flex align-center justify-between'>
            <van-icon name="arrow-left" color="#000" size="18"/>
            <div class='left' onclick="javascript :history.back(-1)"></div>
            <div class='right'></div>
        </div>
        <div class='head-row2 flex align-center justify-center'><span>医院详情</span></div>
    </div>
      <div class='banner'>
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image.srcImg" />
                </van-swipe-item>
            </van-swipe>
        </div>
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
        }
    },
    methods:{

    },
    mounted(){
        // var swiper = new Swiper('.doctor-list', {
        //     slidesPerView: 'auto',
        //     spaceBetween: 10,
        // });
        // var swiper = new Swiper('.banner-box', {
        //     loop:true,
        //     pagination: {
        //         el: '.swiper-pagination',
        //     },
        //     autoplay: {
        //         delay: 3500,
        //         disableOnInteraction: false,
        //     },
        // });
    }

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
</style>