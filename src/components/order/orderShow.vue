<template>
    <div id="order-detail">
        <div class='head-block'>
            <div class='title-nav flex align-center justify-between'>
                <van-icon name="arrow-left" slot="left" color="#fff" class="left"/>
                <div class="center flex align-center"><img src="../../assets/img/radius-bingo.png" alt=""> <span>订单详情</span></div>
                <div class="right-space"></div>
            </div>
            <div class='row-guwen-box'>
                <div class='row-guwen flex align-center justify-between'>
                    <img class='left' src="../../assets/img/icon-buling.png" alt="">
                    <div class="center">{{orderCard.status_text}}</div>
                    <img class="right" src="../../assets/img/head-nav-left.png" alt="">
                </div>
            </div>
        </div>
        <div class="card-block order-card1">
            <div class='row-1 flex'>
                <div class="left img-box"><img :src="orderable_obj.cover" alt=""></div>
                <div class="right">
                    <p class='title-name'>{{orderable_obj.name}}</p>
                    <div class='price-yen flex align-end'>
                        <i>&yen;</i>
                        <p>{{parseInt( orderable_obj.price)}}</p>
                        <span>.00</span>
                    </div>
                </div>
            </div>
            <div class='row-2 flex align-center' v-if="orderCard.status!='payment_free'">
                <span style='font-size:16px'>
                    <svg t="1571823661464" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1737" width="36" height="36"><path d="M694.851515 660.911518c-0.119727-1.88493-0.119727-1.88493-0.119727-1.88493-0.459464-2.02103-3.911076-14.234189-7.66968-27.139104l-127.403668-437.412235c-3.758604-12.903891-7.767917-27.232225-8.91095-31.840172 0 0 0 0-1.671059-3.722788-9.188266-20.930705-29.880541-34.462906-52.720735-34.462906-11.097756 0-21.908986 3.222391-31.407314 9.331529-3.364631 2.219551-3.364631 2.219551-3.364631 2.219551-3.38612 3.084245-14.558577 12.707416-24.826432 21.38096L286.913569 283.997146c-10.268878 8.67559-29.567409 17.245779-42.887786 19.047822 0 0-3.490497 0.471744-16.473183 4.266164-54.677297 15.918551-99.856265 52.17122-127.254266 102.074793C72.900334 459.314057 66.576301 516.90266 82.494852 571.556421c15.918551 54.677297 52.17122 99.856265 102.075817 127.254266 8.239662 4.526083 16.700357 8.42488 25.307386 11.795651 0.268106 0.12689 0.432859 0.369414 0.707105 0.488117 114.00859 48.925293 181.549869 228.589209 182.218088 230.40353 3.651157 9.856485 13.007245 15.966647 22.935362 15.966647 2.816139 0 5.680373-0.50142 8.472975-1.527796 12.649088-4.653997 19.116383-18.711154 14.462387-31.360242-2.333138-6.304589-45.965891-122.040521-126.758985-201.140043 11.664667-1.394766 23.299659-3.470031 34.802644-6.821359 13.865799-4.009314 19.098987-6.497994 19.098987-6.497994 12.138458-5.77247 33.025161-9.534144 46.414099-8.362458l202.670909 17.762549c13.388938 1.172709 26.083052 2.186805 28.209482 2.252297 0 0 0 0 1.88493-0.286526 28.973892-4.367471 49.999764-28.734438 49.999764-57.970296C694.993754 663.082974 694.875051 661.340283 694.851515 660.911518zM343.757205 666.595984c0 0 0 0-10.667967 3.098571-42.147936 12.267395-86.514399 7.374968-124.986619-13.722536-38.47222-21.12104-66.419735-55.942103-78.686107-98.06548-12.267395-42.147936-7.398504-86.538959 13.722536-124.986619 21.12104-38.47222 55.942103-66.419735 98.06548-78.686107 9.925047-2.8847 9.925047-2.8847 9.925047-2.8847 11.831466-1.451048 24.662703 7.897877 28.511357 20.777209l77.935 260.835633C361.423563 645.838218 355.206978 660.97394 343.757205 666.595984zM642.488937 670.684092c-1.521656 1.069355-13.722536 0.984421-27.111474-0.189312L412.723949 652.729162c-13.388938-1.173732-27.494191-12.671601-31.341822-25.549909l-78.650291-263.22096c-3.848655-12.878309 1.401929-30.513968 11.670807-39.189557l154.840554-130.847094c10.265808-8.67559 19.346627-16.381086 20.181645-17.121959 0.835018-0.740874 3.555989-2.671852 5.262864-3.472078 0 0 0 0 1.671059 0 4.200672 0 6.921643 2.839675 8.018627 5.298679 0.119727 0.286526 0.334621 0.906649 0.524956 1.981121 0.143263 0.954745 0.143263 0.954745 0.143263 0.954745 0.274246 1.036609 3.576455 12.444427 7.333012 25.348318l126.71703 435.072957C642.850164 654.886291 644.010593 669.614737 642.488937 670.684092z" fill="#FF2525" p-id="1738" data-spm-anchor-id="a313x.7781069.0.i0" class=""></path><path d="M741.821269 66.535369 765.152651 78.656431 671.827125 199.858864Z" fill="#FF2525" p-id="1739"></path><path d="M740.714052 346.491479 948.738899 241.054101 942.933683 273.043676Z" fill="#FF2525" p-id="1740"></path><path d="M933.573501 590.880535 769.880325 503.498372 936.224888 552.143279Z" fill="#FF2525" p-id="1741"></path></svg>    
                </span>
                <p>{{orderCard.tip}}</p>
            </div>
        </div>
        <div class="card-block  order-card2 flex align-center justify-center">
            <div class='icon-customer'>
                <img src="../../assets/img/icon-roder-customer.png" alt="">
                <span>联系客服</span>
            </div>
        </div>
        <div class="card-block order-card3">
            <div class="order-card-row">
                <div class="left">订单编号:</div>
                <div class="right"><span>{{orderCard.no}}</span></div>
            </div>
            <div class="order-card-row">
                <div class="left">下单时间:</div>
                <div class="right"><span>{{orderCard.created_at}}</span></div>
            </div>
            <div class="order-card-row">
                <div class="left">支付方式:</div>
                <div class="right"><span>{{ orderCard.payment_method }}</span></div>
            </div>
            <div class="order-card-row">
                <div class="left">支付流水号:</div>
                <div class="right"><span>{{ orderCard.pay_no == undefined ? '无支付流水号' : orderCard.pay_no }}</span></div>
            </div>
        </div>

        <div class="card-block order-card3" v-if="promotions_ree.length != 0">
            <div class="order-card-row">
                <div class="left">参与活动:</div>
                <div class="right" style="display: flex;flex-direction: column;">
                    <span v-for="(items,index) in promotions_ree" :key='index'>{{items.title}}</span>
                </div>
            </div>
        </div>

        <div class="card-block order-card4">
            <div class="order-card-row justify-between">
                <div class="left">商品金额</div>
                <div class="right"><span>￥ {{orderable_obj.price}}</span></div>
            </div>
            <div class="order-card-row justify-between" v-if="orderCard.status!='payment_free'">
                <div class="left">无优惠</div>
                <div class="right"><span>- ￥ 0</span></div>
            </div>
            <div class="order-card-row justify-between" v-else>
                <div class="left">免费预约</div>
                <div class="right"><span>- ￥ {{orderable_obj.price}}</span></div>
            </div>
            <div class="order-row-end flex">
                <div class="left flex align-end">实付款</div>
                <div class='price-yen flex align-end'>
                    <i>&yen;</i>
                    <p>{{parseInt( orderCard.total_amount )}}</p>
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
            orderable_obj:{},
            promotions_ree:[]
        }
    },
    mounted(){
        // this.orderCard = this.$route.params
        // console.log(this.orderable_obj)
        
    },
    created(){
        this.$axios({
            method:'get',
            url:'/api/home/order',
            headers:this.$store.state.token
            }).then((res)=>{
            if (res.status == 200) {
                for(let items in res.data){
                    if(res.data[items].id === parseInt(this.$route.params.orderId)){
                        this.orderCard = res.data[items]
                        this.orderable_obj = res.data[items].orderable
                        this.promotions_ree = res.data[items].promotions

                        switch(this.orderCard.payment_method){
                            case null:
                                this.orderCard.payment_method = '微信支付';
                                break;
                            case 'wechat':
                                this.orderCard.payment_method = '微信支付';
                                break;
                            case 'alipay':
                                this.orderCard.payment_method = '支付宝支付';
                                break;
                        }
                        switch(this.orderCard.status){
                            case 'payment_completed':
                                this.orderCard.status_text = '您提交了订单，稍后您的专属顾问将与您取得联系！';
                                break;
                            case 'order_close':
                                this.orderCard.status_text = '等待顾问与您联系,助您好孕';
                                break;
                            case 'payment_free':
                                this.orderCard.status_text = '您提交了订单，稍后您的专属顾问将与您取得联系！';
                                break;
                        }
                    }
                    console.log(res.data[items])
                }

            }
        

        })
        
    }

}
</script>

<style lang="scss" scoped>
.font-price{
    font-family: 'DIN Alternate Bold';
}
#order-detail {
  width: 100%;
  min-height: 100vh;
  background-color: #F7F5F5;
  font-family: "PingFang SC";
  padding-bottom: 1.333333rem;

  .head-block {
    width: 100%;
    height: 3.2rem;
    background: linear-gradient(135deg, rgba(222, 63, 65, 1) 0%, rgba(235, 116, 58, 1) 100%);
    color: #fff;
    padding: 0 .4rem;
    position: relative;

    .title-nav {
      padding: .48rem 0 0;

      .left {
        font-size: .48rem;
      }

      .center {
        > img {
          width: .56rem;
          margin-right: .08rem;
        }

        font-size: .48rem;
        font-weight: 400;
        line-height: .333333rem;
      }
    }

    .row-guwen-box {
      width: 8.4rem;
      height: 1.066667rem;
      overflow: hidden;
      margin: .32rem auto 0;
    }

    .row-guwen {
      width: 16.8rem;
      height: 2.133333rem;
      line-height: 2.133333rem;
      background: rgba(255, 255, 255, 0.21);
      border-radius: .533333rem;
      padding: 0 .8rem;
      font-size: .586667rem;
      transform: scale(0.5);
      transform-origin: left top;
      -webkit-transform-origin: left top;
      -moz-transform-origin: left top;
      -o-transform-origin: left top;

      .right {
        width: .373333rem;
        transform: rotate(180deg);
      }
    }
  }
}

/*--解决移动端图文垂直居中问题  双倍数值然后缩放0.5--*/

.order-card1 {
  width: 100%;
  position: relative;
  z-index: 2;
  margin-top: -0.266667rem;
  box-shadow: 0px 0.08rem 0.666667rem rgba(0, 0, 0, 0.07);
  padding: .666667rem .4rem;

  .row-1 > {
    .left {
      width: 3.733333rem;
      height: 2.666667rem;
      border-radius: .266667rem;
      overflow: hidden;
      margin-right: .266667rem;
    }

    .right > {
      .title-name {
        width: 4.933333rem;
        min-height: 1.28rem;
        font-size: .426667rem;
        font-weight: 600;
        line-height: .56rem;
        color: rgba(0, 0, 0, 1);
      }

      .price-yen {
        color: #FF2E36;
        font-family: 'DIN Alternate Bold';
        font-weight: bold;
        position: relative;

        > {
          .confirm-num {
            position: absolute;
            right: 0;
            top: 0;
            width: .8rem;
            height: .4rem;
            line-height: .426667rem;
            background: rgba(242, 242, 242, 1);
            text-align: center;
            color: #999999;
          }

          i {
            font-size: .32rem;
            margin-right: .053333rem;
          }

          p {
            font-size: .48rem;
            line-height: .426667rem;
          }

          span {
            font-size: .32rem;
          }
        }
      }
    }
  }

  .row-2 {
    padding: .266667rem 0 0;
    font-size: .32rem;
    color: #FF2525;

    > span {
      color: #000;
      margin-right: .2rem;
    }
  }
}

#order-detail {
  .order-card2 {
    margin-top: -0.533333rem;
    padding-top: .373333rem;

    .icon-customer {
      font-size: .64rem;
      color: rgba(102, 102, 102, 1);
      transform: scale(0.5);
    }
  }

  .order-card3 {
    padding: .133333rem .4rem;
  }
}

.order-card4 {
  padding: .133333rem .4rem;
}

.order-card-row {
  display: flex;
  padding: .266667rem 0;
  font-size: .32rem;
  color: #151515;

  > {
    .left {
      min-width: 2rem;
    }

    .right > span {
      font-size: .32rem;
      font-family: 'DIN Alternate Bold';
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
    }
    .right > span:not(:last-child) {
        margin-bottom: .133333rem;
    }
  }
}

#order-detail .order-row-end {
  justify-content: flex-end;
  padding-bottom: .24rem;

  > {
    .left {
      font-size: .32rem;
      color: rgba(0, 0, 0, 1);
      margin-right: .133333rem;
    }

    .price-yen {
      color: #FF2E36;
      font-family: 'DIN Alternate Bold';
      font-weight: bold;

      /* line-height:21px; */

      > {
        i {
          font-size: .32rem;
          margin-right: .053333rem;
        }

        p {
          font-size: .48rem;
          line-height: .426667rem;
        }

        span {
          font-size: .32rem;
        }
      }
    }
  }
}

.order-footer {
  width: 100%;
  height: 1.333333rem;
  padding: 0 .4rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0px -1px 0.533333rem rgba(0, 0, 0, 0.16);
  color: #999999;
  font-size: .32rem;

  > {
    .right-btn {
      width: 3.866667rem;
      height: 1.066667rem;
      background: rgba(255, 72, 72, 1);
      box-shadow: 2px 4px 2px rgba(255, 72, 72, 0.14);
      opacity: 1;
      border-radius: 5px;
      font-size: .373333rem;
      color: #fff;
      text-align: center;
      line-height: 1.093333rem;
    }

    .left .price-yen {
      color: #FF2E36;
      font-size: .32rem;
      font-family: 'DIN Alternate Bold';
      font-weight: bold;

      > p {
        font-size: .48rem;
        line-height: .426667rem;
        margin-left: .053333rem;
      }
    }
  }
}

#order-confirm {
  width: 100%;
  min-height: 100vh;
  background-color: #F7F5F5;
  font-family: "PingFang SC";

  > {
    .title-nav {
      width: 100%;
      height: 1.28rem;
      background-color: #fff;
      padding: 0 .4rem;
      font-size: .48rem;
      font-weight: 600;
      color: rgba(50, 50, 51, 1);
      margin-bottom: .4rem;

      img {
        width: 50%;
      }
    }

    .confirm-card2 {
      padding: .133333rem .4rem;

      > .alert-row {
        height: .96rem;

        > {
          .right > img {
            width: .453333rem;
            margin-left: .4rem;
          }

          .content {
            font-size: 24px;
            color: rgba(0, 0, 0, 1);

            > span {
              width: 1.386667rem;
              height: .666667rem;
              line-height: .693333rem;
              background: url(../../assets/img/icon-volume.png) no-repeat 0 0;
              background-size: 1.386667rem .666667rem;
              color: #fff;
              font-size: .32rem;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>