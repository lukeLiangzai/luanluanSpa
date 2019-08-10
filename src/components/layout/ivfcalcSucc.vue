<template>
    <div class="main">
        <van-nav-bar title="计算结果" left-arrow @click-left="onClickLeft"></van-nav-bar>
        <div class="successfully">
            <div class="card-block flex flex-column align-center block1">
                <p>您的成功率为</p>
                <div class="succ_num">44.3</div>
                <div class="block-btn">重新测试</div>
                <span>小娈所测数据仅供参考，具体情况因人而异</span>
            </div>
            <div class="card-block flex flex-column align-center justify-center end-block">
                <div><span>IVFpredict&copy;2015</span><i>孪娈海外官网</i><i>IVF成功率计算器</i></div>
                <p>好孕热线：400-999-6816</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components:{
    },
    name:"Ivfcalcsucc",
    data(){
        return {
        }
    },
    methods:{
        onClickLeft() {
            this.$router.push({path:'/'})
        }
        ,onSelect(){}
        ,onCancel(){}
    },
    mounted(){
        console.log(this.$router.params)
    }
}
</script>
<style lang="scss" scoped>
.van-nav-bar .van-icon {
    color: #323233;
    vertical-align: middle;
    font-size: .48rem;
}
.van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #323233;
    font-weight: 500;
    font-size: .48rem;
}
.van-nav-bar {
    position: relative;
    height: 1.28rem;
    line-height: 1.28rem;
    text-align: center;
    background-color: #fff;
    -webkit-user-select: none;
    user-select: none;
}

    .successfully{
        // position: fixed;
        // top: 0;
        // left: 0;
        // bottom: 0;
        // right: 0;
        min-height: calc(100vh - 1.28rem);
        width: 100vw;
        padding-top: .4rem;
        background-color: #F7F5F5;
        box-sizing: border-box;
        // transform: translateX(100%);
        // transition: all .3s linear;
        /* display: none; */
    }
    .card-block{
        width: 100%;
        background-color: #fff;
        padding: 0 .4rem;
        border-radius: .266667rem;
        min-height:.133333rem;
        margin-bottom: .266667rem;
    } 
    .card-block:last-child{margin-bottom: 0;}
    .successfully>.card-block{
        margin-left: .4rem; 
        margin-right: .4rem; 
        width: auto;
        margin-bottom: .533333rem;
    }
    .successfully>.card-block.end-block{
        padding: 1.066667rem 0 .933333rem;
        font-size:.373333rem;
        color:rgba(82,84,101,1);
    }
    .successfully>.card-block.end-block>p{
        margin-top: .266667rem;
    }
    .successfully>.card-block.end-block>div>i{
        color: #14B6C4;
        margin: 0 .08rem;
    }
    .successfully>.card-block.block1{
        padding: .933333rem 0 .8rem;
    }
    .successfully>.card-block.block1>p{
        font-size:.533333rem;
        color:rgba(0,0,0,1);
        margin-bottom: .933333rem;
    }
    .successfully>.card-block.block1>div.succ_num{
        font-size:1.866667rem;
        font-family: 'DIN Alternate Bold';
        color:rgba(255,72,72,1);
        position: relative;
        line-height: 0.6;
        padding-right: .4rem;
    }
    .successfully>.card-block.block1>div.succ_num::after{
        content: "%";
        position: absolute;
        font-size: .533333rem;
        bottom: 0;
    }
    .successfully>.card-block.block1>div.block-btn{
        width: 2.666667rem;
        height: .8rem;
        margin: .933333rem 0 .266667rem;
        color: #fff;
        background-color: #14B6C4;
        text-align: center;
        line-height: .853333rem;
        box-shadow: .053333rem .106667rem .053333rem rgba(20,182,196,0.16);
        border-radius: .133333rem;
        font-size: .32rem;
        display: block;
    }
    .successfully>.card-block.block1>div.block-btn:active{
        background-color: #13a8b5;
    }

</style>



