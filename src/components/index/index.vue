<template>
    <div class="main">
        <div class='head-nav flex align-center'>
            <img src="../../assets/img/icon-bao.png" alt="">
            <input type="text" class='flex-auto' placeholder="泰国杰特宁医院">
            <img src="../../assets/img/icon-customer.png" alt="">
        </div>
        <div><img src="../../assets/img/nav-bar1.png" alt=""></div>
    </div>
</template>

<script>
export default {
    name:"Index",
    data(){
        return {
            msg:'这里是首页',
            item: 10
        }
    },
    methods:{

    },
    mounted(){
        
    }
}
</script>
<style lang="scss" scoped>
    .head-nav{
        width: 100%;
        height: 1.333333rem;
        background-color: transparent;
        position: fixed;
        left: 0;
        top: 0;
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
</style>

