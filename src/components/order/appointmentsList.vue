<template>
    <div class='main'>
        <van-nav-bar title="预约列表" fixed>
            <van-icon name="arrow-left" slot="left" color="#000"/>
        </van-nav-bar>
        <div class='general-card-yue' v-for="(items,index) in appointmentsCard" :key="index">
            <div class='content bold'>
                <div class="row-col1">
                    <div class="left"><img src="../../assets/img/order-icon-1.png" alt=""></div>
                    <div class="right font-price">{{items.no}}</div>
                </div>
                <div class="row-col1">
                    <div class="left"><img src="../../assets/img/order-icon-2.png" alt=""></div>
                    <div class="right">{{items.orderable.name}}</div>
                </div>
                <div class="row-col1">
                    <div class="left"><img src="../../assets/img/order-icon-3.png" alt=""></div>
                    <div class="right">{{items.orderable.location}}</div>
                </div>
            </div>
            <div class='foot'>
                <div class="left"><img src="../../assets/img/order-icon-4.png" alt=""></div>
                <div class="center font-price flex-auto bold">{{items.created_at}}</div>
                <a class="right-btn">查看预约</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"appointmentsList",
    data(){
        return {
            appointmentsCard:[],

        }
    },
    mounted(){
        // for(let items in this.orderCard){
        //     console.log(items.type)
        // }
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
                    if(res.data[items].type == 'appointment'){
                        resData.push(res.data[items])
                    }
                }

                this.appointmentsCard = resData

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

/* 预约列表的公共卡片样式 */
    .general-card-yue{
        width: calc(100% - .8rem);
        background-color: #fff;
        margin: 0 .4rem .533333rem;
        border-radius: .213333rem;
        font-family: "PingFang SC";
        font-size: .373333rem;
    }
    .general-card-yue .content{
        width: 100%;
        padding-top: .373333rem;
    }
    .general-card-yue .content .row-col1{
        width: 100%;
        height: .746667rem;
        display: flex;
        align-items: center;
    }
    .general-card-yue .content .row-col1 .left{
        height: .426667rem;
        width: 1.066667rem;
        text-align: center;
        padding-left: .133333rem;
    }
    .general-card-yue .content .row-col1 .left img{
        height: .426667rem;
    }
    .general-card-yue .content .row-col1 .right{
        width: 85%;
        overflow: hidden;
        height: .373333rem;
        line-height: .4rem;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .general-card-yue .foot{
        width: 100%;
        border-top: 1px solid #E8E8E8;
        display: flex;
        align-items: center;
        padding: .266667rem .4rem .266667rem 0;
    }
    .general-card-yue .foot .left{
        height: .426667rem;
        width: 1.066667rem;
        text-align: center;
        padding-left: .133333rem;
    }
    .general-card-yue .foot .center{
        line-height: .4rem;
    }
    .general-card-yue .foot .left img{
        height: .426667rem;
    }
    .general-card-yue .foot .right-btn{
        width: 2rem;
        height: .666667rem;
        border: 1px solid #000;
        border-radius: .213333rem;
        text-align: center;
        line-height: .693333rem;
        color: #FBAA00;
    }
</style>