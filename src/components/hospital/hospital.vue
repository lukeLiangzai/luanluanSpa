<template>
    <div class='main'>
        <div class='head-nav flex align-center justify-between bg-white fixed'>
            <span class='bold text-black'>医院</span>
            <input type="text" placeholder="泰国杰特宁医院">
            <img src="../../assets/img/icon-01.png" alt="">
        </div>
        <div class='cards flex justify-between'>
            <a><img src="../../assets/img/icon-03.png" alt="">测成功率</a>
            <a><img src="../../assets/img/icon-04.png" alt="">费用估算</a>
        </div>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1"/>
            <van-dropdown-item v-model="value2" :options="option2" />
            <van-dropdown-item v-model="value3" :options="option3" />
            <van-dropdown-item v-model="value4" :options="option4" />
        </van-dropdown-menu>
    </div>
</template>

<script>
import hosSerListLi from "../layout/hosSerListLi"
export default {
    name:'Hospital',
    components:{
        hosSerListLi
    },
    data(){
        return{
            value1: 0,
            value2: 0,
            value3: 0,
            value4: 0,
            option1: [
                { text: '推荐', value: 0 },
            ]
            ,option2: [
                { text: '默认排序', value: 0 },
                { text: '好评排序', value: 1 },
                { text: '销量排序', value: 2 },
            ]
            ,option3: [
                { text: '默认排序', value: 0 },
                { text: '好评排序', value: 1 },
                { text: '销量排序', value: 2 },
            ]
            ,option4: [
                { text: '默认排序', value: 0 },
                { text: '好评排序', value: 1 },
                { text: '销量排序', value: 2 },
            ]
        }
    },
    methods:{
        onClickLeft() {
            // Toast('返回');
        },
        onClickRight() {
            // Toast('按钮');
        }
    }
}
</script>
<style lang="scss" scoped>
.main{
    background-color: #F7F5F5;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    overflow: auto;
}
.head-nav{
    width: 100%;
    height: 1.333333rem;
    padding: 0 .4rem;
    top: 0;
    left: 0;
    z-index: 1;
    span{
        font-size:.64rem;
    }
    input{
        flex:1;
        height: .8rem;
        background-color: #f0f0f0;
        border-radius: .533333rem;
        padding: 0 .533333rem;
        padding-left: 1.066667rem;
        margin:0 .4rem 0 .533333rem;
        background-image: url(../../assets/img/icon-search.png);
        background-repeat: no-repeat;
        background-position: .533333rem center;
        background-size: .4rem;
    }
    input::-webkit-input-placeholder{
        font-size:.373333rem;
        font-weight:400;
        color:#CFCFCF;
    }
    input::-moz-placeholder{   /* Mozilla Firefox 19+ */
        font-size:.373333rem;
        font-weight:400;
        color:#CFCFCF;
    }
    input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
        font-size:.373333rem;
        font-weight:400;
        color:#CFCFCF;
    }
    input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
        font-size:.373333rem;
        font-weight:400;
        color:#CFCFCF;
    }

    img{
        width: .4rem;
    }
}
.cards{
    width: 100%;
    background-color: #fff;
    font-size:.32rem;
    font-weight:bold;
    padding: 1.68rem .4rem .533333rem;
    a{
        width:4.213333rem;
        height:1.44rem;
        background:rgba(20,182,196,1);
        border-radius:.266667rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color:rgba(255,255,255,1);
        img{
            width: .48rem;
            margin-right: .133333rem;
        }
    }
    a:nth-child(2){
        background-color: #62A9F8;
    }
}
</style>


