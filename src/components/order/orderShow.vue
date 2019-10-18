<template>
    <div id="order-detail">
        <div class='head-block'>
            <div class='title-nav flex align-center justify-between'>
                <img onclick="javascript :history.back(-1)" class="left" src="../../assets/img/head-nav-left.png" alt="">
                <div class="center flex align-center"><img src="../../assets/img/radius-bingo.png" alt=""> <span>订单详情</span></div>
                <div class="right-space"></div>
            </div>
            <div class='row-guwen-box'>
                <div class='row-guwen flex align-center justify-between'>
                    <img class='left' src="../../assets/img/icon-buling.png" alt="">
                    <div class="center">您提交了订单，稍后您的专属顾问将与您联系！</div>
                    <img class="right" src="../../assets/img/head-nav-left.png" alt="">
                </div>
            </div>
        </div>
        <div class="card-block order-card1">
            <div class='row-1 flex'>
                <div class="left img-box"><img src="../../assets/img/order-testimg.png" alt=""></div>
                <div class="right">
                    <p class='title-name'>泰国温馨公寓20天 移植期</p>
                    <div class='price-yen flex align-end'>
                        <i>&yen;</i>
                        <p>28800</p>
                        <span>.00</span>
                    </div>
                </div>
            </div>
            <div class='row-2 flex'><span>留言</span><p>这是留言这是留言这是留言这是留言</p></div>
        </div>
        <div class="card-block  order-card2 flex align-center justify-center">
            <div class='icon-customer'>
                <img src="../..//assets/img/icon-roder-customer.png" alt="">
                <span>联系客服</span>
            </div>
        </div>
        <div class="card-block order-card3">
            <div class="order-card-row">
                <div class="left">订单编号:</div>
                <div class="right"><span>20190110160048482852</span></div>
            </div>
            <div class="order-card-row">
                <div class="left">下单时间:</div>
                <div class="right"><span>2019-01-11 22:01:07</span></div>
            </div>
            <div class="order-card-row">
                <div class="left">支付方式:</div>
                <div class="right"><span>支付宝</span></div>
            </div>
            <div class="order-card-row">
                <div class="left">支付流水号:</div>
                <div class="right"><span>4200000239201901125675193568</span></div>
            </div>
        </div>
        <div class="card-block order-card4">
            <div class="order-card-row justify-between">
                <div class="left">商品金额</div>
                <div class="right"><span>￥26800.00</span></div>
            </div>
            <div class="order-card-row justify-between">
                <div class="left">运费</div>
                <div class="right"><span>+￥0.00</span></div>
            </div>
            <div class="order-card-row justify-between">
                <div class="left">女神节活动优惠</div>
                <div class="right"><span>-￥3000.00</span></div>
            </div>
            <div class="order-row-end flex">
                <div class="left flex align-end">实付款</div>
                <div class='price-yen flex align-end'>
                    <i>&yen;</i>
                    <p>28800</p>
                    <span>.00</span>
                </div>
            </div>

        </div>
        <footer class='order-footer flex align-center justify-between'>
            <span  class='left'>删除订单</span>
            <div class='right-btn'>评价订单</div>
        </footer>
    </div>
</template>

<script>
export default {
    name:"orderShow",
    data(){
        return {
            orderCard:[],

        }
    },
    mounted(){
    },
    created(){
        // this.$axios({
        //     method:'get',
        //     url:'/api/home/order',
        //     headers:this.$store.state.token
        //     }).then((res)=>{
        //     if (res.status == 200) {
        //         let resData = []
        //         for(let items in res.data){
        //             switch(res.data[items].status){
        //                 case 'payment_pending':
        //                     res.data[items].status = '等待支付';
        //                     break;
        //                 case 'payment_free':
        //                     res.data[items].status = '无需付款';
        //                     break;
        //                 case 'order_close':
        //                     res.data[items].status = '订单关闭';
        //                     break;
        //                 case 'refund_pending':
        //                     res.data[items].status = '退款中';
        //                     break;
        //                 case 'payment_completed':
        //                     res.data[items].status = '支付完成';
        //                     break;
        //             }
        //             if(res.data[items].type == 'normal'){
        //                 resData.push(res.data[items])
        //             }
        //         }
        //         this.orderCard = resData

        //     }
        

        // })
    }

}
</script>

<style lang="scss" scoped>
.font-price{
    font-family: 'DIN Alternate Bold';
}
#order-detail{
    width: 100%;
    min-height: 100vh;
    background-color: #F7F5F5;
    font-family:"PingFang SC";
    padding-bottom: 1.333333rem;
}
#order-detail .head-block{
    width: 100%;
    height:3.2rem;
    background:linear-gradient(135deg,rgba(222,63,65,1) 0%,rgba(235,116,58,1) 100%);
    color: #fff;
    padding: 0 .4rem;
    position: relative;
}
#order-detail .head-block .title-nav{
    padding: .48rem 0 0;
}
#order-detail .head-block .title-nav .left{
    width: .293333rem;
}
#order-detail .head-block .title-nav .center>img{
    width: .56rem;
    margin-right: .08rem;
}
#order-detail .head-block .title-nav .center{
    font-size:.48rem;
    font-weight:400;
    line-height:.333333rem;
}
#order-detail .head-block .row-guwen-box{
    width: 8.4rem;
    height: 1.066667rem;
    overflow: hidden;
    margin: .32rem auto 0;
}
    /*--解决移动端图文垂直居中问题  双倍数值然后缩放0.5--*/
#order-detail .head-block .row-guwen{
    width:16.8rem;
    height:2.133333rem;
    line-height: 2.133333rem;
    background:rgba(255,255,255,0.21);
    border-radius:.533333rem;
    padding: 0 .8rem;
    font-size: .586667rem;
    transform: scale(.5);
    transform-origin: left top;
    -webkit-transform-origin: left top;
    -moz-transform-origin: left top;
    -o-transform-origin: left top;
}
#order-detail .head-block .row-guwen .right{
    width: .373333rem;
    transform: rotate(180deg);
} 
.order-card1{
    width: 100%;
    position: relative;
    z-index: 2;
    margin-top: -0.266667rem;
    box-shadow:0px .08rem .666667rem rgba(0,0,0,0.07);
    padding: .666667rem .4rem;
}
.order-card1 .row-1>.left{
    width:3.733333rem;
    height:2.666667rem;
    border-radius:.266667rem;
    overflow: hidden;
    margin-right: .266667rem;
}
.order-card1 .row-1>.right>.title-name{
    width:4.933333rem;
    min-height: 1.28rem;
    font-size:.426667rem;
    font-weight:600;
    line-height:.56rem;
    color:rgba(0,0,0,1);
}
.order-card1 .row-1>.right>.price-yen{
    color: #FF2E36;
    font-family: 'DIN Alternate Bold';
    font-weight:bold;
    position: relative;
}
.order-card1 .row-1>.right>.price-yen>.confirm-num{
    position: absolute;
    right: 0;
    top:0;
    width:.8rem;
    height:.4rem;
    line-height: .426667rem;
    background:rgba(242,242,242,1);
    text-align: center;
    color: #999999;
}
.order-card1 .row-1>.right>.price-yen>i{
    font-size: .32rem;
    margin-right: .053333rem;
}
.order-card1 .row-1>.right>.price-yen>p{
    font-size: .48rem;
    line-height: .426667rem;
}
.order-card1 .row-1>.right>.price-yen>span{
    font-size: .32rem;
}
.order-card1 .row-2{
    padding: .266667rem 0;
    font-size:.32rem;
    color:rgba(153,153,153,1);
}
.order-card1 .row-2>span{
    color: #000;
    margin-right: .4rem;
}
#order-detail .order-card2{
    margin-top: -0.533333rem;
    padding-top: .373333rem;
}
#order-detail .order-card2 .icon-customer{
    font-size:.64rem;
    color:rgba(102,102,102,1);
    transform: scale(.5);
}
#order-detail .order-card3{
    padding: .133333rem .4rem;
}
.order-card4{
    padding: .133333rem .4rem;
}
.order-card-row{
    display: flex;
    padding: .266667rem 0;
    font-size:.32rem;
    color:#151515;
}
.order-card-row>.left{
    min-width: 2rem;
}
.order-card-row>.right>span{
    font-size:.32rem;
    font-family: 'DIN Alternate Bold';
    font-weight:bold;
    color:rgba(0,0,0,1);
}
#order-detail .order-row-end{
    justify-content: flex-end;
    padding-bottom: .24rem;
}
#order-detail .order-row-end>.left{
    font-size:.32rem;
    color:rgba(0,0,0,1);
    margin-right: .133333rem;
}
#order-detail .order-row-end>.price-yen{
    color: #FF2E36;
    font-family: 'DIN Alternate Bold';
    font-weight:bold;
    /* line-height:21px; */
}
#order-detail .order-row-end>.price-yen>i{
    font-size: .32rem;
    margin-right: .053333rem;
}
#order-detail .order-row-end>.price-yen>p{
    font-size: .48rem;
    line-height: .426667rem;
}
#order-detail .order-row-end>.price-yen>span{
    font-size: .32rem;
}
.order-footer{
    width: 100%;
    height: 1.333333rem;
    padding: 0 .4rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow:0px -1px .533333rem rgba(0,0,0,0.16);
    color: #999999;
    font-size: .32rem;
}
.order-footer>.right-btn{
    width:3.866667rem;
    height:1.066667rem;
    background:rgba(255,72,72,1);
    box-shadow:2px 4px 2px rgba(255,72,72,0.14);
    opacity:1;
    border-radius:5px;
    font-size: .373333rem;
    color: #fff;
    text-align: center;
    line-height: 1.093333rem;
}
.order-footer>.left .price-yen{
    color: #FF2E36;
    font-size: .32rem;
    font-family: 'DIN Alternate Bold';
    font-weight:bold;
}
.order-footer>.left .price-yen>p{
    font-size: .48rem;
    line-height: .426667rem;
    margin-left: .053333rem;
}

#order-confirm{
    width: 100%;
    min-height: 100vh;
    background-color: #F7F5F5;
    font-family:"PingFang SC";
}
#order-confirm>.title-nav{
    width: 100%;
    height: 1.28rem;
    background-color: #fff;
    padding: 0 .4rem;
    font-size:.48rem;
    font-weight:600;
    color:rgba(50,50,51,1);
    margin-bottom: .4rem;
}
#order-confirm>.title-nav img{
    width: 50%;
}
#order-confirm>.confirm-card2{
    padding: .133333rem .4rem;
}
#order-confirm>.confirm-card2>.alert-row{
    height: .96rem;
}
#order-confirm>.confirm-card2>.alert-row>.right>img{
    width: .453333rem;
    margin-left: .4rem;
}
#order-confirm>.confirm-card2>.alert-row>.content{
    font-size:24px;
    color:rgba(0,0,0,1);
}
#order-confirm>.confirm-card2>.alert-row>.content>span{
    width: 1.386667rem;
    height: .666667rem;
    line-height: .693333rem;
    background: url(../../assets/img/icon-volume.png) no-repeat 0 0;
    background-size: 1.386667rem .666667rem;
    color: #fff;
    font-size: .32rem;
    text-align: center;
}
</style>