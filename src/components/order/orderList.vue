<template>
    <div class='main'>
        <van-nav-bar title="订单列表" fixed>
            <van-icon name="arrow-left" slot="left" color="#000"/>
        </van-nav-bar>
        <div class="general-card-order" v-for="(items,index) in orderCard" :key='index'>
            <div class="head">
                <div class="left">
                    <img data-cfsrc="/assets/img/order-icon-5.png" alt="" src="https://m.luanluanhaiwai.com/assets/img/order-icon-5.png">
                </div>
                <div class="right">{{items.status}}</div>
            </div>
            <div class="content flex">
                <div class="left img-box">
                    <img alt="" :src="items.orderable.cover">
                </div>
                <div class="right flex-auto flex flex-column justify-between">
                    <div class="row-title">{{items.orderable.name}}</div>
                    <div class="row-ordernum flex align-center font-price bold">
                        <div class="imgbox">
                            <img data-cfsrc="/assets/img/order-icon-1.png" alt="" src="https://m.luanluanhaiwai.com/assets/img/order-icon-1.png">
                        </div>
                        <span>{{items.no}}</span>
                    </div>
                    <div class="price-yen flex align-end font-price bold">
                        <i>¥</i>
                        <p>{{parseInt(items.total_amount)}}</p> 
                        <span>.00</span>
                        <div class="confirm-num font-price bold">1</div>
                    </div>
                </div>
            </div> 
            <div class="foot">
                <div class="left">
                    <img data-cfsrc="/assets/img/order-icon-4.png" alt="" src="https://m.luanluanhaiwai.com/assets/img/order-icon-4.png">
                </div> 
                <div class="center font-price flex-auto bold">{{items.created_at}}</div>
                <a class="right-btn" @click="toOrdershow(items.id,items.status)">查看订单</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"orderList",
    data(){
        return {
            orderCard:[],

        }
    },
    methods:{
        toOrdershow(e,status){
            if(status !== '等待支付'){

                this.$router.push({name:'orderShow',params:{orderId:e}}) 
            }else{
                this.$router.push({name:'confirmorder',params:{conId:e}}) 
            }
            // console.log(e)
        }
    },
    mounted(){
        // console.log(this.orderCard) 详情页  id
    },
    created(){
        this.$axios({
            method:'get',
            url:'/api/home/order',
            headers:this.$store.state.token
            }).then((res)=>{
            if (res.status == 200) {
                let resData = []
                for(let items in res.data){
                    switch(res.data[items].status){
                        case 'payment_pending':
                            res.data[items].status = '等待支付';
                            break;
                        case 'payment_free':
                            res.data[items].status = '无需付款';
                            break;
                        case 'order_close':
                            res.data[items].status = '订单关闭';
                            break;
                        case 'refund_pending':
                            res.data[items].status = '退款中';
                            break;
                        case 'payment_completed':
                            res.data[items].status = '支付完成';
                            break;
                    }
                    if(res.data[items].type == 'normal'){
                        resData.push(res.data[items])
                    }
                }
                this.orderCard = resData
                console.log(this.orderCard)
            }
        

        })
    }

}
</script>

<style lang="scss" scoped>
.font-price{
    font-family: 'DIN Alternate Bold';
}
.main{
    width: 100%;
    min-height: 100vh;
    background-color: #f7f5f5;
    font-family: pingfang sc;
    border-bottom: 1px solid transparent;
    padding-top: 1.626667rem;
}
/* 列表的公共卡片样式 */
    .general-card-order{
        width: calc(100% - .8rem);
        background-color: #fff;
        margin: 0 .4rem .533333rem;
        border-radius: .213333rem;
        font-family: "PingFang SC";
        padding-top: .266667rem;
        font-size: .373333rem;
    }
    .general-card-order .head{
        width: 100%;
        height: .96rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #E8E8E8;
        font-weight: 400;
        font-size: .373333rem;
        color: #000;
    }
    .general-card-order .head .left{
        height: .426667rem;
        width: 1.066667rem;
        text-align: center;
        padding-left: .133333rem;
    }
    .general-card-order .head .left img{
        height: .426667rem;
    }
    .general-card-order .foot{
        width: 100%;
        border-top: 1px solid #E8E8E8;
        display: flex;
        align-items: center;
        padding: .266667rem .4rem .266667rem 0;
    }
    .general-card-order .foot .left{
        height: .426667rem;
        width: 1.066667rem;
        text-align: center;
        padding-left: .133333rem;
    }
    .general-card-order .foot .center{
        line-height: .4rem;
    }
    .general-card-order .foot .left img{
        height: .426667rem;
    }
    .general-card-order .foot .right-btn{
        width: 2rem;
        height: .666667rem;
        border: 1px solid #000;
        border-radius: .213333rem;
        text-align: center;
        line-height: .693333rem;
        color: #FBAA00;
    }
    .general-card-order .content{
        width: 100%;
        padding: .4rem .266667rem;
        position: relative;
    }
    .general-card-order .content>.left{
        width: 2.666667rem;
        height: 2.666667rem;
        border-radius: .213333rem;
        overflow: hidden;
        margin-right: .266667rem;
    }
    .general-card-order .content>.right .row-title{
        font-size: .426667rem;
        font-weight: 600;
        color: #000;
        height: .933333rem;
        line-height: .533333rem;
    }
    .general-card-order .content>.right .row-ordernum>.imgbox{
        height: .426667rem;
        margin-right: .133333rem;
    }
    .general-card-order .content>.right .row-ordernum>span{
        line-height: .4rem;
    }
    .general-card-order .content>.right .row-ordernum>.imgbox>img{
        height: .426667rem;
    }
    .general-card-order .content>.right .price-yen{
        font-size: .32rem;
        color: #FBAA00;
    }
    .general-card-order .content>.right .price-yen>p{
        font-size: .48rem;
        margin-left: .053333rem;
        line-height: .426667rem;
    }
    .general-card-order .content .confirm-num{
        position: absolute;
        height: .4rem;
        line-height: .4rem;
        padding: 0 .4rem;
        background-color: #F2F2F2;
        right:.4rem;
        top: 1.2rem;
        color: #999999;
    }
</style>