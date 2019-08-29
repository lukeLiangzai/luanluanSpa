<template>
    <div class="main">
        <div class='head-nav flex align-center' :style="{backgroundColor : headOpacity}">
            <img src="../../assets/img/icon-bao.png" alt="" v-if="imgIsshow">
            <img src="../../assets/img/icon-bao-gray.png" alt="" v-else>
            <input type="text" class='flex-auto' placeholder="泰国杰特宁医院">
            <img src="../../assets/img/icon-customer.png" alt="" v-if="imgIsshow">
            <img src="../../assets/img/icon-customer-gray.png" alt="" v-else>
        </div>
        <div class='banner'>
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image.url" />
                </van-swipe-item>
            </van-swipe>
        </div>
        
        <div class='row-nav'> 
            <van-grid :border="false">
                <van-grid-item
                    v-for="(value,index2) in iconList"
                    :key="index2"
                    :icon="value.icon"
                    :text="value.text"
                    @click="gridClick(index2)"
                />
            </van-grid>
        </div>
        <div class='active-card flex justify-between'>
            <div class="card-item1" @click="jumpHosshow">
                <img src="../../assets/img/comma.png" alt="" class='comma'>
                <p>一对一问诊</p>
                <img src="../../assets/img/icon-doctor.png" alt="" class='doctor-img'>
            </div>
            <div class="right-items flex flex-column justify-between">
                <div class='card-item2'>
                    <img src="../../assets/img/comma.png" alt="">
                    <p>公寓服务再升级</p>
                    <img src="../../assets/img/icon-waiter.png" alt="">
                </div>
                <div class='card-item3'>
                    <img src="../../assets/img/comma.png" alt="">
                    <p>孪娈海外七月好孕节</p>
                    <img src="../../assets/img/icon-niuer.png" alt="">
                </div>
            </div> 
        </div>

        <div class="title-recommended img-box"><img src="../../assets/img/title-recommended.png" alt=""></div>
        <titleListNav name='医院' value=1></titleListNav>
        <hosSerListLi :hosList="hospitalList"></hosSerListLi>

        <titleListNav name='服务' value=3></titleListNav>
        <div class="serve-card-itmes img-box"><img src="../../assets/img/serve-card-itmes1.png" alt=""></div>
        <div class="serve-card-itmes img-box"><img src="../../assets/img/serve-card-itmes2.png" alt=""></div>

        <titleListNav name='咨询' value=2></titleListNav>
        <infoList :article='articleList'></infoList>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
import hosSerListLi from "../layout/hosSerListLi"
import titleListNav from "../layout/titleListNav"
import infoList from "../layout/infoList"
export default {
    name:"Index",
    components:{
        hosSerListLi,
        titleListNav,
        infoList,
    },
    data(){
        return {
            images:[
                {url:require("../../assets/img/banner-img2.png")}
            ],//轮播图
            iconList:[//grid
                {icon:require("../../assets/img/icon-row-nav1.png"),text:'医院'},
                {icon:require("../../assets/img/icon-row-nav2.png"),text:'服务'},
                {icon:require("../../assets/img/icon-row-nav3.png"),text:'医生'},
                {icon:require("../../assets/img/icon-row-nav4.png"),text:'反馈'},
            ],
            hospitalList:[],
            articleList:[],
            headOpacity : "rgba(250,250,250,0)",
            imgIsshow : true
        }
    },
    methods:{
        handleScroll(e){
            let scrollNum = e.target.scrollTop || document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
            if(scrollNum < 50){
                this.imgIsshow = true
            }else if(scrollNum > 50){
                this.imgIsshow = false
            }
            if(scrollNum < 98){
                this.headOpacity = "rgba(250,250,250,"+scrollNum/100+")"
            }else if(scrollNum > 98){
                this.headOpacity = "rgba(250,250,250,.98)"
            }
        },
        jumpHos(){
            this.$store.state.navBarNum = 1
        },
        jumpHosshow(){
            this.$router.push({path : '/hospitalShow'});
        },
        jumpSer(){
            this.$store.state.navBarNum = 3
        },
        gridClick(e){
            switch(e){
                case 0:
                 this.$store.state.navBarNum = 1;
                 break;
                case 1:
                 this.$store.state.navBarNum = 3;
                 break;
            }
        },
        
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll,true);
    },
    created(){
        this.$axios.get('https://www.luanluanhaiwai.com/api/index')
        .then( (response)=> {
            this.hospitalList = response.data.hospitals
            this.articleList = response.data.articles
            // console.log(response.data.articles)
        })

        .catch(function (error) {
            console.log(error);
        });
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll, true);
    },
}
</script>
<style lang="scss" scoped>
    .main{
        background-color: #F7F5F5;
        height: calc(100% - 1.466667rem);
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        overflow: auto;
    }
    .head-nav{
        width: 100%;
        height: 1.333333rem;
        background-color: transparent;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
        img{
            width: .48rem;
            margin: 0 .533333rem;
        }
        input{
            background-color: #fff;
            height: .8rem;
            border-radius: .08rem;
            padding-left: .8rem;
            padding-top: .026667rem;
            background: #fff url(../../assets/img/icon-indexsearch.png) no-repeat .266667rem center;
            background-size: .346667rem;
        }
        input::-webkit-input-placeholder{ /*WebKit browsers*/
            color:rgba(197,197,201,1);
            font-size: .373333rem;
        }

        input::-moz-input-placeholder{ /*Mozilla Firefox*/
            color:rgba(197,197,201,1);
            font-size: .373333rem;
        }

        input::-ms-input-placeholder{ /*Internet Explorer*/ 
            color:rgba(197,197,201,1);
            font-size: .373333rem;
        }
    }
    .banner{
        width: 100%;
        max-height: 5.786667rem;
        img{
            width: 100vw;
        }
    }
    .row-nav {
        width: calc(100% - .8rem);
        background-color: #fff;
        border-radius: .133333rem;
        padding: 0 .266667rem;
        margin:-1.066667rem .4rem .4rem;
        font-size: .32rem;
        color: rgba(141,141,141,1);
        position: relative;
        z-index: 2;
        box-shadow: 0 -0.026667rem .346667rem rgba(0,0,0,.08);
    }
    .active-card {
        font-size: .373333rem;
        font-weight: bold;
        color: #fff;
        padding: 0 .4rem;
        
        .card-item1 {
            width: 3.2rem;
            height: 3.733333rem;
            background: rgba(98,169,248,1);
            border-radius: .133333rem;
            position: relative;
            *{
                position: absolute;
            }
            .comma {
                width: .48rem;
                top: .266667rem;
                left: .266667rem;
            }
            p{
                left: .266667rem;
                top: .8rem;
            }
            .doctor-img {
                width: 1.466667rem;
                bottom: 0;
                right: .213333rem;
            }
        }
        .right-items{
            div {
                width: 5.6rem;
                height: 1.706667rem;
                background: rgba(20,182,196,1);
                border-radius: .133333rem;
                position: relative;
                *{
                    position: absolute;
                }
                img:nth-child(1){
                    width: .48rem;
                    left: .266667rem;
                    top: .266667rem;
                }
                p{
                    left: .746667rem;
                    top: .693333rem;
                }
                img:nth-child(3){
                    width: 1.146667rem;
                    height: 1.84rem;
                    right: .133333rem;
                    bottom: 0;
                }
            }
            div:nth-child(2){
                background-color: #62A9F8;
            }
        }
    }
    .title-recommended.img-box{
        width: 3.333333rem;
        height: .666667rem;
        margin: .373333rem auto 0;
    }
    .serve-card-itmes{
        width: calc(100% - .8rem);
        background-size: contain;
        border-radius: .266667rem;
        overflow: hidden;
        display: block;
        margin:0 auto .266667rem;
    }
</style>

