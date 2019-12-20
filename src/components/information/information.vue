<template>
    <div class="main">
        <div class="tab-nav flex justify-center align-end">
            <div class='tab-nav-items' :class="{'active' : isActive}" @click="isActive = true">资讯</div>
            <div class='tab-nav-items' :class="{'active' : !isActive}" @click="isActive = false">动态</div>
        </div>
        <div class="page1" v-if="isActive">
            <!-- <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                :offset="20"
                >
                <infoList :article='list'></infoList>
            </van-list> -->
            <van-tabs  swipeable animated >
                <van-tab title="推荐">
                    <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    :offset="20"
                    >
                        <infoList :article='list'></infoList>
                    </van-list>
                </van-tab>
                <van-tab title="成功案例">
                    <infoList :article='articlesc1'></infoList>
                </van-tab>
                <van-tab title="常见问题">
                    <infoList :article='articlesc2'></infoList>
                </van-tab>
                <van-tab title="试管资讯">
                    <infoList :article='articlesc3'></infoList>
                </van-tab>
            </van-tabs>
        </div>
        <div class="page2" v-else-if="!isActive">
            <div class='message-items flex justify-between align-center' v-for="(index,idx) in 8" :key="idx">
                <div class="left img-box"><img src="../../assets/img/icon-test.png" alt=""></div>
                <div class="center flex flex-column justify-center flex-auto">
                    <p>孪娈小娈</p>
                    <span>13.8万人民币全包服务</span>
                </div>
                <div class="right img-box"><img src="../../assets/img/icon-list-right.png" alt=""></div>
            </div>
        </div>
        
    </div>
</template>

<script>
import infoList from "../layout/infoList"
import { List } from 'vant'

export default { 
    name:"Information",
    components:{
        infoList
    },
    data(){
        return {
            isActive:true,
            articles:[],
            articlesc1:[],
            articlesc2:[],
            articlesc3:[],
            list: [],
            loading: false,
            finished: false,
        }
    },
    methods:{
        onLoad() {
            // 异步更新数据
                // console.log( this.list)
                // if(this.articles.length!=0){

                    setTimeout(() => {
                        if(this.articles.length-this.list.length>=10){
                            for (let i = 0; i < 10; i++) {
                                this.list.push(this.articles[this.list.length]);
                            }
                        }else{
                            for (let i = 0; i < this.articles.length-this.list.length; i++) {
                                this.list.push(this.articles[this.list.length]);
                            }
                        }
                        // for (let i = 0; i < 10; i++) {
                            //     this.list.push(this.list.length + 1);
                        // }
                        // 加载状态结束
                        console.log(this.articles.length) 
                        this.loading = false;

                        // 数据全部加载完成
                        if (this.list.length >= this.articles.length && this.articles.length!=0) {
                            this.finished = true;
                        }
                    }, 500);
                // }
        }
    },
    mounted(){
        
    },
    created(){


        let sessionArticleData = JSON.parse(window.sessionStorage.getItem('articleData'))

        let sortFunc=function(cid,dataVal){
                let artChildVal = []
                dataVal.map(function(items,index){
                    if( items.category_id == cid ){
                        artChildVal.push(items);
                    }
                });
                return artChildVal;
            }
        if(sessionArticleData != null){

            this.articles = sessionArticleData.articles

            this.articlesc1 = sortFunc(1,sessionArticleData.articles);
            this.articlesc2 = sortFunc(2,sessionArticleData.articles);
            this.articlesc3 = sortFunc(3,sessionArticleData.articles);

        }else{
            this.$axios.get('/api/article')
            .then( (response)=> {

                window.sessionStorage.setItem('articleData', JSON.stringify(response.data))

                this.articles = response.data.articles

                this.articlesc1 = sortFunc(1,response.data.articles);
                this.articlesc2 = sortFunc(2,response.data.articles);
                this.articlesc3 = sortFunc(3,response.data.articles);
                

            })

            .catch(function (error) {
                console.log(error);
            });
        }

    }
}
</script>
<style lang="scss" scoped>
    .main{
        background-color: #ffffff;
        height: calc(100% - 1.466667rem);
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        overflow: auto;
    }

    
    .tab-nav{
        font-size:.426667rem;
        color:rgba(153,153,153,1);
        width: 100%;
        height: 1.466667rem;
        padding-bottom: .4rem;
        background-color: #fff;
    }
    .tab-nav>.tab-nav-items{
        margin: 0 .133333rem;
    }
    .tab-nav>.tab-nav-items.active{
        font-size: .48rem;
        font-weight:bold;
        color:rgba(50,50,51,1);
        position: relative;
    }
    .tab-nav>.tab-nav-items.active::before{
        content: "";
        position: absolute;
        display: block;
        width: 5px;
        height: 5px;
        background-color: #FF2E36;
        border-radius: 50%;
        top: -0.133333rem;
        right: -0.106667rem;
    }
    .page1{
        width: 100%;
        background-color: #ffffff;
        overflow-y: auto;
        height: calc(100vh - 2.933333rem );
        padding-top: 44px;
    }
    .page2{
        width: 100%;
        height:84vh;
        background-color: #ffffff;
        overflow-y: auto;
        .message-items{
            width: calc(100% - .8rem);
            padding: .266667rem .4rem;
            background-color: #fff;
            border-radius: .133333rem;
            font-size:.373333rem;
            color:rgba(153,153,153,1);
            margin: .4rem auto .266667rem;
            .left{
                width: 1.333333rem;
                height: 1.333333rem;
                border-radius: 50%;
                overflow: hidden;
                margin-right: .266667rem;
            }
            .center{
                p{
                    font-size:.426667rem;
                    line-height:22px;
                    color:rgba(57,57,57,1);
                    margin-bottom: .08rem;
                }
            }
            .right{
                width: .426667rem;
                height: .32rem;
            }
        }
        

    }

    
</style>

