<template>
    <div class='main'>
        <!-- @touchmove.prevent 移动端禁止滑动 -->
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
            <van-dropdown-menu :class="{'fixed-nav' : isActive}" active-color="#1989fa">
                <van-dropdown-item 
                    v-model="value1" 
                    :options="option1" 
                    ref="recommended"  
                    :title-class="navActive[0]?'noIcon active':'noIcon'" 
                    @change="changeVal(value1,0)" 
                    @open="dropOpen(0)" 
                    @close="dropClose(0)"/>
                <van-dropdown-item 
                    v-model="value2" 
                    :options="option2" 
                    :title-class="navActive[1]?'active':''" 
                    @change="changeVal(value2,1)" 
                    @open="dropOpen(1)" 
                    @close="dropClose(1)"/>
                <van-dropdown-item 
                    v-model="value3" 
                    :options="option3" 
                    :title-class="navActive[2]?'active':''" 
                    @change="changeVal(value3,2)" 
                    @open="dropOpen(2)" 
                    @close="dropClose(2)"/>
                <van-dropdown-item 
                    v-model="value4" 
                    :options="option4" 
                    :title-class="navActive[3]?'active':''" 
                    @change="changeVal(value4,3)" 
                    @open="dropOpen(3)" 
                    @close="dropClose(3)"/>
            </van-dropdown-menu>
        </div>
        <hosSerListLi :hosList="hosChild"></hosSerListLi>
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
                {text:'推荐',value:0}
            ],
            option2: [
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
            ,hosChild:[]
            ,hosChildBat:[]
            ,navActive:[true,false,false,false]
        }
    },
    methods:{
        //吸顶
        placeholderScroll(e){
            let scrollNum = e.target.scrollTop
            let placeholderBox=this.$refs.placeholderBox.offsetTop - this.$refs.headNav.offsetHeight
            if(scrollNum >= placeholderBox){
                this.isActive = true
            }else if(scrollNum < placeholderBox){
                this.isActive = false
            }
        },
        //跳转ivf计算器
        toIvfcalc(){
            this.$router.push({path:'/ivfcalc'})
        },
        changeVal(e,idx){

            this.navActive = this.navActive.map(function(){
                return false;
            });
            this.navActive[idx] = true;

            this.sorting(this.value2,this.value3,this.value4);

        },
        sorting(countryVal,typeVal,sortVal){//类型排序

            let hosChildVal = []; 

            let switchVal = String( countryVal > 0 ? 1 : 0 ) + String( typeVal > 0 ? 1 : 0 ) + String( sortVal > 0 ? 1 : 0 );
            
            let sortFunc=function(val1,val2,data3){
                data3.map(function(items,index){
                    if( (val1 ? items.country == countryVal : true) &&  (val2 ? items.type == typeVal : true)){
                        hosChildVal.push(items);
                    }
                });
            }

            switch(switchVal){
                case '100' :
                    sortFunc(true,false,this.hosChildBat);
                    // console.log("国家——被选择");
                    break;
                case '101' :
                    if(sortVal == 2){
                        sortFunc(true,false,this.hosChildBat);
                        hosChildVal.sort(this.sortBy('convert_price',true));
                    }else if(sortVal == 1){
                        alert("功能未开放");
                    }
                    // console.log("国家、排序——被选择");
                    break;
                case '110' :
                    sortFunc(true,true,this.hosChildBat);
                    // console.log("国家、类型——被选择");
                    break;
                case '111' :
                    if(sortVal == 2){
                        sortFunc(true,true,this.hosChildBat);
                        hosChildVal.sort(this.sortBy('convert_price',true));
                    }else if(sortVal == 1){
                        alert("功能未开放");
                    }
                    // console.log("国家、类型、排序——被选择");
                    break;
                case '010' :
                    sortFunc(false,true,this.hosChildBat);
                    // console.log("类型——被选择");
                    break;
                case '011' :
                    if(sortVal == 2){
                        sortFunc(false,true,this.hosChildBat);
                        hosChildVal.sort(this.sortBy('convert_price',true));
                    }else if(sortVal == 1){
                        alert("功能未开放");
                    }
                    // console.log("类型、排序——被选择");
                    break;
                case '001' :
                    if(sortVal == 2){
                        hosChildVal = this.hosChildBat;
                        hosChildVal.sort(this.sortBy('convert_price',true));
                    }else if(sortVal == 1){
                        alert("功能未开放");
                    }
                    // console.log("排序——被选择");
                    break;
                case '000' :
                    hosChildVal = this.hosChildBat;
                    // console.log("全部未被选择");
                    break;
            }

            this.hosChild = hosChildVal;

        },
       
        sortBy(attr,rev){ //价格排序
            if(rev == undefined){
                rev = 1;
            }else{
                rev = (rev) ? 1 : -1;
            }
            return function(a,b){
                a = parseInt(a[attr]);
                b = parseInt(b[attr]);
                if(a < b){
                    return rev * -1;
                }
                if(a > b){
                    return rev * 1;
                }
                return 0;
            }
        },
        dropOpen(idx){
            // console.log('打开');
            //一般第三个参数可直接填false,
            // true -> 表示在捕获阶段调用事件处理程序, 
            // false -> 表示在冒泡阶段调用事件处理程序使用，但是touchmove会被浏览器忽略掉，并不会阻止默认行为，
            // 这里通过passive:false明确声明为不是被动的
            document.addEventListener('touchmove',this.touchStart,{passive:false})
            
            if(idx == 0){
                this.navActive = this.navActive.map(function(){
                    return false;
                });
                this.navActive[idx] = true;
            }

        },
        dropClose(idx){
            // console.log('关闭');
            document.removeEventListener('touchmove',this.touchStart,{pasive:false})

            if(idx == 0){
                this.hosChild = this.hosChildBat
                this.value1 = 0
                this.value2 = 0
                this.value3 = 0
                this.value4 = 0
            }
        },
        touchStart(){
            event.preventDefault();//通知 Web 浏览器不要执行与事件关联的默认动作
        }
    },
    mounted(){
        window.addEventListener('scroll',this.placeholderScroll,true);
    },
    beforeDestroy() {
        window.removeEventListener("scroll",this.placeholderScroll,true)
    },
    created(){
        this.$axios.get('api/hospital')
        .then( (response)=> {
            this.hosChild = response.data.hospitals
            this.hosChildBat = response.data.hospitals
        })

        .catch(function (error) {
            console.log(error);
        });
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

</style>


