<template>
  <div class='main'>
    <div class='head-box'>
        <div class='head-row1 flex align-center justify-between'>
            <van-icon name="arrow-left" :color="imgIsshow ? '#fff' : '#323233'" size="18" @click="back"/>
        </div>
        <div class='head-row2 flex align-center justify-center' :style="{opacity : headOpacity}"><span>医院详情</span></div>
    </div>
    <div class='banner'>
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(bann,idx) in coverList" :key='idx'><img :src="bann.url" alt=""></van-swipe-item>
        </van-swipe>
        <div class="heart-btn"><img src="../../assets/img/icon-heart.png" alt=""><span>60</span></div>
    </div>
    <div class="card-block module1">
        <div class='title'>{{hospitalData.name}}</div>
        <div class='row-tag flex'>
            <div v-for="(tags,idx) in hospitalData.tags" :key='idx'>
                <van-tag round color='#62a9f8'>{{tags}}</van-tag>
            </div>
            <a class='img-box'><img src="../../assets/img/icon-share.png" alt=""></a>   
        </div>
        <div class="row-price flex justify-between align-center">
            <div class='left flex align-end'>
                <i>&yen;</i>
                <p>{{ parseInt(hospitalData.convert_price)}}</p>
                <span>/周期</span>
            </div>
            <div class="right">官方价格</div>
        </div>
        <div class='row-alt' v-for="(rowAlt,idx) in hospitalData.promotions" :key='idx'>
            <div class="left">{{rowAlt.label}}</div>
            <div class="center">{{rowAlt.title}}</div>
            <div class="right"><img src="../../assets/img/icon-more.png" alt=""></div>
        </div>
    </div> 
    <div class='card-block module2'>
        <div class="row">
            <div class="left">位置</div>
            <div class="right">
                <p>{{hospitalData.location}}</p>
                <a><img src="../../assets/img/icon-more.png" alt=""></a>
            </div>
        </div>
        <div class="row">
            <div class="left">技术</div>
            <div class="right">
                <p>{{hospitalData.skill}}</p>
                <a><img src="../../assets/img/icon-more.png" alt=""></a>
            </div>
        </div>
        <div class="row">
            <div class="left">人群</div>
            <div class="right">
                <p>{{hospitalData.crowd}}</p>
                <a><img src="../../assets/img/icon-more.png" alt=""></a>
            </div>
        </div>
        <div class="row">
            <div class="left">详情</div>
            <div class="right">
                <p>点击查看医院介绍</p>
                <a><img src="../../assets/img/icon-more.png" alt=""></a>
            </div>
        </div>
        <div class="row">
            <div class="left">价格</div>
            <div class="right">
                <p>价格详细表</p>
                <a><img src="../../assets/img/icon-more.png" alt=""></a>
            </div>
        </div>
    </div> 
    <div class='card-block module3'>
        <div class="head-title">医疗顾问</div>
        <div class="content flex align-center">
            <div class="left-img img-box"><img src="../../assets/img/guwen-img.png" alt=""></div>
            <div class='right flex align-center flex-auto justify-between'>
                <span>徐顾问</span>
                <p class='flex-auto'>拥有八年试管婴儿生育经验</p>
                <a href='' class='flex'>
                    咨询
                </a>
            </div>
        </div>
        <div class="content flex align-center">
            <div class="left-img img-box"><img src="../../assets/img/guwen-img2.png" alt=""></div>
            <div class='right flex align-center flex-auto justify-between'>
                <span>周顾问</span>
                <p class='flex-auto'>拥有八年试管婴儿生育经验</p>
                <a href='' class='flex'>
                    咨询
                </a>
            </div>
        </div>
    </div>
    <div class='card-block module4'>
        <div class='title'>主治医生</div>
        <div class="swiper-container doctor-list">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(doc,idx) in hospitalData.doctor" :key='idx'>
                    <div class="left img-box">
                        <img :src="doc.cover" alt="">
                    </div>
                    <div class='right'>
                        <div class="row-name">
                            <img src="../../assets/img/icon-v.png" alt="">
                            <span>{{doc.name}}</span>
                        </div>
                        <div class='row-text' v-html="doc.curriculum_vitae"></div>
                        <div class='row-btn'>预约</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class='card-block module-comments'>
        <div class="title flex justify-between" >
            <div class="left flex align-end"><img src="../../assets/img/head-title.png" alt=""> <span>评价</span><p>{{hospitalData.comments.length}}+</p></div>
            <div class="right flex align-center">好评度5星 <img src="../../assets/img/icon-toright.png" alt=""></div>
        </div>
        <div class="comments-items" v-for="(coms,idx) in hospitalData.comments" :key='idx' v-show="idx < 2">
            <div class="row-head flex">
                <div class='img-box'><img :src="'//'+coms.user.avatar_url" alt=""></div>
                <div class='right flex flex-column'>
                    <p>{{coms.user.name}}</p>
                    <div class="stars flex">
                        <img src="../../assets/img/comments-stars.png" alt="" v-for="(rates,idx) in coms.rate" :key='idx'>
                    </div>
                </div>
            </div>
            <div class="row-text">{{coms.body}}</div>
            <!-- <div class="row-img">
                <div class='img-box'></div>
                <div class='img-box'></div>
                <div class='img-box'></div>
            </div> -->
        </div>
        <div class="comments-more">查看全部评论</div>
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
import Swiper from "swiper"
export default {
    name:'hospitalShow',
    data(){
        return{
            coverList:[],
            headOpacity : 0,
            imgIsshow : true,
            hospitalData:{},
            doctorList:[],
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
        back(){
            this.$router.go(-1);
        },
        _initSwiper_banner(){
            var swiper = new Swiper('.banner-box', {
                loop:true,
                pagination: {
                    el: '.swiper-pagination',
                },
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false,
                },
                observer:true,
                observeParents:true
            });
        },
        _initSwiper_docList(){
            var swiper = new Swiper('.doctor-list', {
                slidesPerView: 'auto',
                spaceBetween: 10,
                observer:true,
                observeParents:true
            });
        },
    },
    mounted(){
        window.addEventListener('scroll',this.hosScroll,true);
        
    },
    destroyed() {
        window.removeEventListener("scroll", this.hosScroll, true);
    },
    created(){
        this.$axios.get('https://www.luanluanhaiwai.com/api/hospital/'+this.$route.params.hid)
        .then( (response)=> {
            this.hospitalData = response.data.hospital
            this.coverList = response.data.hospital.coverList

            for(let res in this.hospitalData.doctor){
                this.hospitalData.doctor[res].curriculum_vitae = escape2Html(this.hospitalData.doctor[res].curriculum_vitae)
            }

            this._initSwiper_docList();
            this._initSwiper_banner();
            console.log(this.hospitalData)
        })

        .catch(function (error) {
            console.log(error);
        });

        function escape2Html(str) {
            var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
            return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});
        }
    }

}
</script>

<style lang="scss" scoped>

@import "../../../node_modules/swiper/dist/css/swiper.css";

.main{
    width: 100%;
    min-height: 100vh;
    background-color: #f7f5f5;
    padding-bottom: 1.333333rem;
}
.van-tag--round {
    border-radius: 0 .8em .8em .8em;
}

.banner{
    width: 100%;
    min-height: 5.786667rem;
    position: relative;
    img{
        width: 100vw;
    }
    
    .heart-btn{
        height: .666667rem;
        background:rgba(255,255,255,1);
        border-radius: 2.666667rem;
        position: absolute;
        right: .4rem;
        bottom: .9rem;
        z-index: 10;
        text-align: center;
        font-size: .32rem;
        font-family: 'DIN Alternate';
        font-weight:bold;
        line-height: .693333rem;
        color:rgba(20,182,196,1);
        padding: 0 .24rem;
        img{
            width: .346667rem;
        }
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

.module1{
    border-radius: .533333rem .533333rem .266667rem .266667rem;
    margin-top: -0.586667rem;
    padding: .533333rem .4rem .213333rem;    
    z-index: 3;
    position: relative;
    .title{
        font-size:.48rem;
        font-weight:bold;
        color:#525465;
    }
    .row-tag{
        margin: .266667rem 0;
        font-size:.266667rem;
        color:rgba(255,255,255,1);
        position: relative;
        :not(:last-child){
            margin-right: .133333rem;
        }
        .img-box{
            position: absolute;
            display: block;
            width: .533333rem;
            height: .586667rem;
            top: -100%;
            right: 0;
        }
    }
    .row-price{
        margin-bottom: .266667rem;
        .left {
            i{
                font-size: .32rem;
                font-weight: bold;
                color: #FF6A6A;
            }
            p{
                font-size: .64rem;
                line-height: .506667rem;
                font-weight: bold;
                margin:0 .053333rem;
                color: #FF6A6A;
                font-family: 'DIN Alternate Bold';
            }
            span{
                font-size: .32rem;
            }
        }
        .right{
            background: url(../../assets/img/icon-toright.png) no-repeat right 50%;
            background-size: .133333rem;
            padding-right: .266667rem;
            font-size: .32rem;
            line-height: .24rem;
        }
    }
    .row-alt{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .32rem;
        color:rgba(137,137,137,1);
        margin-bottom: .186667rem;
        .left{
            width: 1.12rem;
            height: .72rem;
            background: url(../../assets/img/icon-activity.png) no-repeat 0 0;
            background-size: 100%;
            font-size: .32rem;
            color:rgba(255,255,255,1);
            text-align: center;
            padding-top: .16rem;

        }
        .center{
            flex: 1;
            padding: 0 .266667rem;
            
        }
        img{
            width: .453333rem;
        }
    }
}


.module2{
    padding-right: 0;
    .row{
        width: 100%;
        height: 1.146667rem;
        display: flex;
        align-items: center;
        .left{
            flex: 1;
            font-size:.32rem;
            font-weight:500;
            color:rgba(0,0,0,1);
        }
        .right{
            width: 8.346667rem;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-right: .4rem;
            font-size: .32rem;
            line-height: .453333rem;
            color:rgba(124,124,124,1);
            position: relative;
            border-bottom:1px solid #FAFAFA;
            .volume{
                display: flex;
                height: .666667rem;
                span{
                    width: 1.386667rem;
                    height: .666667rem;
                    line-height: .693333rem;
                    background: url(../../assets/img/icon-volume.png) no-repeat 0 0;
                    background-size: 1.386667rem .666667rem;
                    color: #fff;
                    font-size: .32rem;
                    text-align: center;
                    margin-right: .266667rem;
                }
            }
            p{
                max-width: 90%;
                height: .533333rem;
                line-height: .533333rem;
                overflow: hidden;
            }
            img{width: .453333rem;}
        }
    }
    .row:last-child{
        .right{
            border-bottom:none;
        }
    }
}

.module3{
    padding: .266667rem .4rem;
    .head-title{
        width:100%;
        height: .533333rem;
        font-size: .373333rem;
        font-weight:400;
        line-height: .533333rem;
        color:rgba(0,0,0,1);
        padding-left: .213333rem;
        background: url(../../assets/img/head-title.png) no-repeat 0 1px;
        background-size: .053333rem 100%;
        margin-bottom: .266667rem;
    }
    .content:not(:last-child){
        margin-bottom: .266667rem;
    }
    .content{
        .left-img{
            width: 1.066667rem;
            height: 1.066667rem;
        }
        .right{
            span{
                font-size: .32rem;
                font-weight:600;
                line-height: .453333rem;
                color:rgba(83,83,83,1);
                margin: 0 .4rem;
            }
            a{
                width: 1.493333rem;
                height: .613333rem;
                line-height: .64rem;
                text-align: center;
                border-radius: .08rem;
                font-size: .32rem;
                font-weight:400;
                color:rgba(255,255,255,1);
                background:rgba(98,169,248,1) url(../../assets/img/icon-plus-sign.png) no-repeat .266667rem center;
                padding-left: .586667rem;
                background-size: .24rem;
            }
            p{
                font-size: .32rem;
                line-height: .453333rem;
                color:rgba(154,154,154,1);
            }
        }
    }


}


.module4{
    padding: .2rem 0;
    .title{
        width:100%;
        height: .533333rem;
        font-size: .373333rem;
        font-weight:400;
        line-height: .533333rem;
        color:rgba(0,0,0,1);
        padding-left: .213333rem;
        background: url(../../assets/img/head-title.png) no-repeat .4rem 1px;
        background-size: .053333rem 100%;
        margin-bottom: .266667rem;
        padding: 0 .4rem 0 .613333rem;
    }
    .doctor-list{
        width: 100%;
        height: 3.2rem;
        padding: .133333rem;
        .swiper-slide{
            background-color: #fff;
            width: 5.333333rem;
            height: 2.933333rem;
            display: flex;
            align-items: center;
            box-shadow:0px 1px 10px rgba(199,199,199,0.16);
            .left{
                width: 2rem;
                height: 2rem;
                padding: 0 .266667rem;
            }
            .right{
                width: 2.933333rem;
                height: 2rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .row-name{
                    font-size: .373333rem;
                    font-weight:600;
                    color:rgba(0,0,0,1);
                    display: flex;
                    align-items: flex-end;
                    img{
                        width: .32rem;
                        margin-right: .08rem;
                    }
                    span{
                        flex: 1;
                        height: .373333rem;
                        overflow: hidden;
                        line-height: .426667rem;
                    }
                }
                .row-text{
                    width: 100%;
                    height: .8rem;
                    line-height: .4rem;
                    overflow: hidden;
                    font-size: .266667rem;
                    color:rgba(128,128,128,1);
                }
                .row-btn{
                    width: .96rem;
                    height: .426667rem;
                    background:rgba(98,169,248,1);
                    border-radius: .08rem;
                    font-size: .266667rem;
                    line-height: .453333rem;
                    text-align: center;
                    color:rgba(255,255,255,1);
                }
            }
        }
        .swiper-slide:first-child{
            margin-left: .133333rem;
        }
    }
}

.module-comments{
    padding: .32rem .4rem;
    .title{
        .left{
            position: relative;
            padding-left: .213333rem;
            img{
                width: .053333rem;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }
            span{
                font-size: .373333rem;
                color:rgba(0,0,0,1);
                margin-right: .053333rem;
            }
            p{
                font-size: .266667rem;
                color:rgba(121,121,121,1);
            }
        }
        .right{
            height: .4rem;
            font-size: .266667rem;
            color:rgba(153,153,153,1);
            position: relative;
            padding-right: .213333rem;
            img{
                width: .133333rem;
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-52%);
            }
        }
    }
    .comments-items{
        width: 100%;
        padding-top: .266667rem;
        .row-head{
            .img-box{
                width: .8rem;
                height:.8rem;
                margin-right: .133333rem;
                overflow: hidden;
                border-radius: 100%;
            }
            .right{
                p{
                    height:.533333rem;
                    font-size: .373333rem;
                    font-weight:400;
                    line-height:.533333rem;
                    color:rgba(105,105,105,1);
                }
                div>img{
                    width: .213333rem;
                    height: .213333rem;
                    margin-right: .053333rem;
                }
            }
        }
        .row-text{
            font-size: .32rem;
            font-weight:300;
            line-height:.453333rem;
            color:rgba(69,69,69,1);
            padding: .133333rem;
        }
        // 评论图片
        // .row-img{
        //     width: 100%;
        //     height: 2.133333rem;
        //     display: flex;
        //     .img-box{
        //         width: 2.133333rem;
        //         height: 2.133333rem;
        //         margin-right: .213333rem;
        //         background-color: #FAFAFA;
        //     }
        // }
    }
     .comments-more{
        width:3.2rem;
        height:.693333rem;
        text-align: center;
        background:rgba(255,255,255,1);
        border:1px solid rgba(172,172,172,1);
        border-radius:2.666667rem;
        font-size: .32rem;
        font-weight:300;
        line-height:.693333rem;
        color:rgba(153,153,153,1);
        margin: .266667rem auto 0;
    }
}
</style>