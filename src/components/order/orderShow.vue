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
                    <div class="center">等待顾问与您联系,祝您好孕！</div>
                    <img class="right" src="../../assets/img/head-nav-left.png" alt="">
                </div>
            </div>
        </div>
        <div class="card-block order-card1">
            <div class='row-1 flex'>
                <div class="left img-box"><img :src="orderCard.orderable.cover" alt=""></div>
                <div class="right">
                    <p class='title-name'>{{orderCard.orderable.name}}</p>
                    <div class='price-yen flex align-end'>
                        <i>&yen;</i>
                        <p>{{parseInt( orderCard.orderable.price)}}</p>
                        <span>.00</span>
                    </div>
                </div>
            </div>
            <div class='row-2 flex' v-if="orderCard.tip != undefined">
                <p>{{orderCard.tip}}</p>
            </div>
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
                <div class="right"><span>{{orderCard.no}}</span></div>
            </div>
            <div class="order-card-row">
                <div class="left">下单时间:</div>
                <div class="right"><span>{{orderCard.created_at}}</span></div>
            </div>
            <div class="order-card-row">
                <div class="left">支付方式:</div>
                <div class="right"><span>暂定payment_method</span></div>
            </div>
            <div class="order-card-row">
                <div class="left">支付流水号:</div>
                <div class="right"><span>{{orderCard.pay_no}}</span></div>
            </div>
        </div>
        <div class="card-block order-card4">
            <div class="order-card-row justify-between">
                <div class="left">商品金额</div>
                <div class="right"><span>￥{{orderCard.orderable.price}}</span></div>
            </div>
            <div class="order-card-row justify-between">
                <div class="left">需付定金</div>
                <div class="right"><span>10%</span></div>
            </div>
            <div class="order-card-row justify-between" v-if="false">
                <div class="left">女神节活动优惠</div>
                <div class="right"><span>-￥3000.00</span></div>
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

        }
    },
    mounted(){
        // this.orderCard = this.$route.params
        // console.log(this.orderCard)
        
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
                        console.log(this.orderCard)
                    }
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
        width: .293333rem;
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
    padding: .266667rem 0;
    font-size: .32rem;
    color: rgba(153, 153, 153, 1);

    > span {
      color: #000;
      margin-right: .4rem;
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