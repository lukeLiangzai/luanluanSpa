<template>
    <div id="information-show">
        <div class='head-box'>
            <div class='head-row1 flex align-center justify-between'>
                <van-icon name="arrow-left" :color="imgIsshow ? '#fff' : '#323233'" size="18" @click="back"/>
            </div>
            <div class='head-row2 flex align-center justify-center' :style="{opacity : headOpacity}"><span>文章详情</span></div>
        </div>
        <div class="module-banner" :style="{backgroundImage: 'url(' + articleData.cover  + ')'}">
            <div class='title-box'>
                <p>{{articleData.describe}}</p>
                <div class="flex align-center"><img src="../../assets/img/luanluan-logo.png" alt="">{{articleData.category == null ? 0 : articleData.category.name}}</div>
            </div>
        </div>
        <div class="content-text" v-html="contentHTML">
        </div>
        <footer class='information-show-foo flex align-center justify-between'>
            <div class="left">{{articleData.category == null ? 0 : articleData.updated_at.slice(0,10)}}</div>
            <div class="right flex ">
                <div class='block-icon flex align-center justify-center'>
                    <img src="../../assets/img/icon-eye.png" alt="">
                    <span>{{articleData.category == null ? 0 : articleData.read_count}}</span>
                </div>
                <div class='block-icon flex align-center justify-center'>
                    <img src="../../assets/img/icon-good.png" alt="">
                    <span>{{articleData.category == null ? 0 : articleData.favorites_count}}</span>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name:'hospitalShow',
    data(){
        return {
            msg:this.$route.params.fid,

            headOpacity : 0,
            imgIsshow : true,

            articleData:{},
            contentHTML:'',

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
    },
    mounted(){
        window.addEventListener('scroll',this.hosScroll,true);
        
    },
    destroyed() {
        window.removeEventListener("scroll", this.hosScroll, true);
    },
    created(){
        this.$axios.get('https://www.luanluanhaiwai.com/api/article/'+this.$route.params.fid)
        .then( (response)=> {
            this.articleData = response.data.article
            this.contentHTML = escape2Html(response.data.article.content)
            console.log(this.articleData)
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
     #information-show{
        width: 100%;
        min-height: 100vh;
        background-color: #F7F5F5;
        font-family:"PingFang SC";
        padding-bottom: 1.333333rem;
        box-sizing: border-box;
    }
    #information-show>.module-banner{
        width: 100%;
        height: 5.6rem;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
        color: #fff;
        position: relative;
    }
    #information-show>.module-banner>.title-box{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: rgba(0,0,0,0.2);
        padding: .133333rem .4rem;
    }
    #information-show>.module-banner>.title-box>p{
        font-size:.48rem;
        font-weight:600;
        margin-bottom: .066667rem;
        line-height: .64rem;
    }
    #information-show>.module-banner>.title-box>div{
        font-size: .373333rem;
    }
    #information-show>.module-banner>.title-box>div>img{
        height: .426667rem;
        margin-right: .08rem;
    }
    .information-show-foo{
        width: 100%;
        height: 1.333333rem;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 2;
        font-size:.32rem;
        font-family:"PingFang SC";
        font-weight:500;
        color:rgba(153,153,153,1);
        padding: 0 .4rem;

        box-shadow:0 -0.026667rem -.533333rem rgba(0,0,0,0.16);
    }
    .information-show-foo .block-icon{
        width:1.52rem;
        height:1.066667rem;
        background:rgba(255,72,72,1);
        box-shadow: .053333rem .106667rem .053333rem rgba(255,72,72,0.14);
        opacity:1;
        border-radius:.133333rem;
        color: #fff;
        font-size: .373333rem;
        font-family: 'DIN Alternate';
        margin-left: .4rem;
    }
    .information-show-foo .block-icon:active{
        background-color: rgb(228, 64, 64);
    }
    .information-show-foo .block-icon>span{
        margin-left: .133333rem;
        line-height: 1.12rem;
    }
    .information-show-foo .block-icon>img{
        height: .4rem;
    }

    #information-show>.content-text{
        padding: .4rem;
        font-size:.373333rem;
        font-family:"PingFang SC";
        font-weight:400;
        line-height:.533333rem;
        color:rgba(153,153,153,1);
    }
   
</style>