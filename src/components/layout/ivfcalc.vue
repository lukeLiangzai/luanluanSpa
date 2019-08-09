<template>
    <div class="main">
        <van-nav-bar title="IVF成功率计算器" left-arrow @click-left="onClickLeft"></van-nav-bar>
        <div class="calc-list">
            <div v-for="(items,indexs) in calc_data" :key="indexs">
                <div class="calc-items flex align-center" @click="calc_data[indexs].showPicker = true">
                    <div class="left">
                        <div class="tag-left">NO.{{indexs+1}}</div>
                    </div>
                    <div class="center flex-auto">
                        <div>
                            <input type="text" name="age" placeholder="请选择" :value="calc_data[indexs].value">
                            <div class="inputMask"></div>
                        </div>
                        <p>{{items.title}}</p>
                    </div>
                    <div class="right img-box"><van-icon name="arrow" size="16px" color="#C5C5C9"/></div>
                </div>
                <van-popup v-model="calc_data[indexs].showPicker" position="bottom">
                    <van-picker
                        show-toolbar
                        :columns="items.optionaArr"
                        @cancel="calc_data[indexs].showPicker = false"
                        @confirm="onConfirm(indexs)"
                        @change="onChange"
                    />
                </van-popup>
            </div>

            <div class="calc-btn" @click="calculate('All')">马上测试</div>
        </div>
        
    </div>
</template>

<script>
export default {
    components:{
    },
    name:"Ivfcalc",
    data(){
        return {
            calc_data : [
                {
                    value: '',
                    showPicker: false,
                    title:'请选择女性的年龄',
                    inputName:'age',
                    optionaArr:[
                        "18岁~34岁",
                        "35岁~37岁",
                        "38岁~39岁",
                        "40岁~42岁",
                        "43岁~44岁",
                        "45岁以上"
                    ]
                },
                {
                    value: '',
                    showPicker: false,
                    title:'您尝试怀孕有几年了',
                    inputName:'years',
                    optionaArr:[
                        "1年以内",
                        "1年~3年",
                        "3年~6年",
                        "7年~9年",
                        "9年~12年",
                        "13年以上"
                    ]
                },
                {
                    value: '',
                    showPicker: false,
                    title:'您是选择自己的卵子还是卵子捐赠',
                    inputName:'own',
                    optionaArr:[
                        "卵子捐赠",
                        "自己的",
                    ]
                },
                {
                    value: '',
                    showPicker: false,
                    title:'您本次做试管婴儿的主要原因',
                    inputName:'reason',
                    optionaArr:[
                        "身体正常，其他原因",
                        "输卵管疾病",
                        "卵巢疾病",
                        "子宫内膜异位症",
                        "子宫颈疾病",
                        "男方精子问题",
                        "多种不孕因素结合"
                    ]
                },
                {
                    value: '',
                    showPicker: false,
                    title:'您这是第几次尝试试管婴儿',
                    inputName:'attempt_times',
                    optionaArr:[
                        "第1次",
                        "第2次",
                        "3次以上"
                    ]
                },
                {
                    value: '',
                    showPicker: false,
                    title:'您之前做试管婴儿失败的次数',
                    inputName:'failed_times',
                    optionaArr:[
                        "0次",
                        "1次",
                        "2次",
                        "3次",
                        "4次",
                        "5次以上"
                    ]
                },
                {
                    value: '',
                    showPicker: false,
                    title:'哪一种是您的妊娠史',
                    inputName:'pregnancy_history',
                    optionaArr:[
                        "没有做过试管婴儿，没有妊娠史",
                        "没有做过试管婴儿，怀孕一次",
                        "没有做过试管婴儿，活产",
                        "做过试管婴儿，无怀孕史",
                        "做过试管婴儿，怀孕一次",
                        "做过试管婴儿，活产"
                    ]
                },
                {
                    value: '',
                    showPicker: false,
                    title:'之前使用过哪些相关药物',
                    inputName:'medicine_history',
                    optionaArr:[
                        "抗雌激素",
                        "促性腺激素",
                        "激素代替"
                    ]
                },
                {
                    value: '',
                    showPicker: false,
                    title:'选择哪种试管婴儿技术',
                    inputName:'ivf_technology',
                    optionaArr:[
                        "第一代试管婴儿（IVF）",
                        "第二代试管婴儿（ICSI）"
                    ]
                },
            ]
            ,temporaryVal:{
                value:'',
                index:-1
            }
            ,inputVal:[
                {val:-1},
                {val:-1},
                {val:-1},
                {val:-1},
                {val:-1},
                {val:-1},
                {val:-1},
                {val:-1},
                {val:-1},
            ]
        }
    },
    methods:{
        onClickLeft() {
            this.$router.push({path:'/'})
        }
        ,onSelect(){}
        ,onCancel(){}
        ,onConfirm(index) {
            if(this.temporaryVal.value == ""){
                this.calc_data[index].value = this.calc_data[index].optionaArr[0]
                this.inputVal[index].val = 0
            }else{
                this.calc_data[index].value = this.temporaryVal.value
                this.inputVal[index].val = this.temporaryVal.index
            }
            this.calc_data[index].showPicker = false
            this.temporaryVal.value = ""
            this.temporaryVal.index = -1
        }
        ,onChange(picker,value,index){
            this.temporaryVal.value = value
            this.temporaryVal.index = index
        }
        // 成功率计算函数
        ,calculate(known) { 
        // tables from the paper
            var t1 = [
                        [0.4109,0.1391,0.0,-0.0909,-0.1571,-0.1545],
                        [0.3935,0.0913,0.2,-0.03,-0.1449,-0.1151],
                        [0.5010,0.0410,-0.2586,-0.0329,-0.0850,-0.0137],
                        [0.4885,0.0415,0.0513,-0.0367,-0.0881,-0.1658],
                        [0.1705,-0.1013,-0.0336,-0.5706,-0.8279,-0.4323],
                        [0.2530,-0.0188,-0.3816,0.0314,0.0443,-0.4652]
                    ];
                        
            var t2 = [
                        [0.0,0.0129],
                        [0.20,-0.4216],
                        [-0.2586,-0.3436],
                        [0.0513,-1.2512],
                        [-0.0336,-2.1049],
                        [-0.3816,-2.7981]
                    ];

            var t3 = [
                        [0.0,-0.1455,-0.0763,-0.0526,-1.1661,-0.2728,-0.22],
                        [0.1481,-0.8872,0.0208,-0.0499,0.2509,0.02,-0.003]
                    ];
            var t4 = [
                        [0.0,-0.1613,-0.0368],
                        [0.1481,-0.1662,-0.1927]
                    ];

            var t5 = [0.0,-0.3210,-0.3489,-0.2496,-0.5931,-0.3863];
            
            // 0 means no previous IVF, never been pregnant
            // 1         ditt         , spontaneous pregnancy
            // 2         ditto        , normal live birth
            // 3 means previous unsuccessful IVF
            // 4 means previous IVF, got pregnant, no baby
            // 5 means previous successful IVF 			 
            var t6 = [0.0,0.0276,0.1735,0.1280,0.0123,0.4593];
            
            var t7 = [0.0,0.29,0.4458];

            var ageIndex = [0,1,2,3,4,5];

            var yearIndex = [0,1,2,3,4,5]; 

            
            //年龄
            var age = this.inputVal[0].val;
            //几年未怀孕
            var dur = this.inputVal[1].val;
                //卵子
            var src = this.inputVal[2].val;
                //做试管的原因
            var cause = this.inputVal[3].val;
            //第几次试管
            var cyc = this.inputVal[4].val;
            //失败次数
            var atts = this.inputVal[5].val;
            //妊娠史
            var hist = this.inputVal[6].val;
            //药物史
            var prep = this.inputVal[7].val;
            //技术
            var icsi = this.inputVal[8].val;

            if (known == "All") {
            
            
                if (age<0||dur<0||src<0||cause<0||cyc<0||atts<0||hist<0||prep<0||icsi<0){
                        alert("为了更准确的计算成功率请回答全部问题");
                }else {
                        
                    var yup = t1[age][dur] + t2[age][src] + t3[icsi][cause] + t4[icsi][cyc] + t5[atts] + t6[hist] + t7[prep];
                    var y = -0.377;
                    y = y + yup;
                    var prob = (100*Math.exp(y))/(1 + Math.exp(y));
                    prob = Math.round(prob * 10) / 10;
                    // $(".succ_num").text(prob);
                    // successfully(true);
                    console.log(prob);
                }
                }
        }
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
    .calc-list{
        width: 100%;
        background-color: #fff;
        border-radius: .266667rem;
        padding: .4rem 0 1.066667rem;
        margin-top: .266667rem;
        .calc-items{
            width: 100%;
            padding:.16rem .4rem .16rem;
            background-color: #fff;
            .right{
                width: .213333rem;
                height: .346667rem;
                margin: 0 .106667rem;
            }
            .left{
                width: 2.133333rem;
                height: 1.173333rem;
                overflow: hidden;
                .tag-left{
                    width:2.4rem;
                    height:1.2rem;
                    background:rgba(20,182,196,1);
                    border-radius:0px .64rem 0px .64rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size:.64rem;
                    color:rgba(255,255,255,1);
                    transform: scale(.5);
                    transform-origin: left top;
                    -webkit-transform-origin: left top;
                    -moz-transform-origin: left top;
                    -o-transform-origin: left top;
                }
            }
            .center{
                div{
                    height: .72rem;
                    width: 100%;
                    display: flex;
                    align-items: flex-end;
                    margin-bottom: .213333rem;
                    position: relative;
                    .inputMask{
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                    input{
                        width: 100%;
                        height: .533333rem;
                        font-family:"PingFang SC";
                        font-size: .426667rem;
                        color: #000;
                    }
                    input::-webkit-input-placeholder{ /*WebKit browsers*/
                        font-size:.426667rem;
                        color:rgba(197,197,201,1);
                        font-family:"PingFang SC";
                        font-weight: 400;
                    }
                    
                    input::-moz-input-placeholder{ /*Mozilla Firefox*/
                        font-size:.426667rem;
                        color:rgba(197,197,201,1);
                        font-weight: 400;
                        font-family:"PingFang SC";
                    }
                    
                    input::-ms-input-placeholder{ /*Internet Explorer*/ 
                        font-size:.426667rem;
                        color:rgba(197,197,201,1);
                        font-weight: 400;
                        font-family:"PingFang SC";
                    }
                }
                p{
                    font-size:.32rem;
                    color:rgba(197,197,201,1);
                }
            }
        }
        .calc-items:active{
            background-color: rgba(0, 0, 0, 0.05)
        }
        .calc-btn{
            margin: .533333rem auto 0;
            width:3.866667rem;
            height:1.066667rem;
            background:rgba(20,182,196,1);
            box-shadow:.053333rem .106667rem .053333rem rgba(20,182,196,0.16);
            border-radius:.133333rem;
            font-size:.373333rem;
            color:rgba(255,255,255,1);
            display: block;
            text-align: center;
            line-height: 1.066667rem;
        }
        .calc-btn:active{
            background-color: #13a8b5;
        }
    }
    
</style>



