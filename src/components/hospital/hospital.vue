<template>
    <div class='main'>
        <div class='head-nav flex align-center justify-between bg-white fixed' ref="headNav">
            <span class='bold text-black'>医院</span>
            <input type="text" placeholder="泰国杰特宁医院">
            <img src="../../assets/img/icon-01.png" alt="">
        </div>
        <div class='cards flex justify-between'>
            <a @click="toIvfcalc"><img src="../../assets/img/icon-03.png" alt="">测成功率</a>
            <a><img src="../../assets/img/icon-04.png" alt="">费用估算</a>
        </div>
        <div class='placeholder-box' ref="placeholderBox">
            <van-dropdown-menu :class="{'fixed-nav' : isActive}">
                <van-dropdown-item v-model="value1" :options="option1" ref="recommended"  class="noIcon active"/>
                <van-dropdown-item v-model="value2" :options="option2" />
                <van-dropdown-item v-model="value3" :options="option3" />
                <van-dropdown-item v-model="value4" :options="option4" />
            </van-dropdown-menu>
        </div>
        <hosSerListLi v-for="(items,index) in option2" :key="index"></hosSerListLi>
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
                { text: '国家', value: 0 },
                { text: '泰国', value: 1 },
                { text: '柬埔寨', value: 2 },
                { text: '马来西亚', value: 3 },
                { text: '俄罗斯', value: 4 },
                { text: '美国', value: 5 },
            ]
            ,option3: [
                { text: '类型', value: 0 },
                { text: '综合型医院', value: 1 },
                { text: '生殖专科医院', value: 2 },
            ]
            ,option4: [
                { text: '排序', value: 0 },
                { text: '人气优先', value: 1 },
                { text: '价格优先', value: 2 },
            ]
            ,isActive: false
        }
    },
    methods:{
        placeholderScroll(e){
            let scrollNum = e.target.scrollTop
            let placeholderBox=this.$refs.placeholderBox.offsetTop - this.$refs.headNav.offsetHeight
            if(scrollNum >= placeholderBox){
                this.isActive = true
            }else if(scrollNum < placeholderBox){
                this.isActive = false
            }
        },
        toIvfcalc(){
            this.$router.push({path:'/ivfcalc'})
        }
    },
    mounted(){
        window.addEventListener('scroll',this.placeholderScroll,true)
    },
    beforeDestroy() {
        window.removeEventListener("scroll",this.placeholderScroll,true)
    },
}
</script>
<style lang="scss" scoped>
.main{
    background-color: #F7F5F5;
    height: calc(100% - 1.466667rem);
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    overflow: auto;
    .placeholder-box{
        width: 100%;
        height: 50px;
        background-color: #fff;
        margin: .266667rem 0;
        div.fixed-nav{
            position: fixed;
            top: 1.333333rem;
            left: 0;
            width: 100%;
        }
    }
}
.head-nav{
    width: 100%;
    height: 1.333333rem;
    padding: 0 .4rem;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #fff;
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
.noIcon::after {
    display: none;
}
.van-dropdown-menu__title.active {
    color: rgb(25, 137, 250);
}
</style>


