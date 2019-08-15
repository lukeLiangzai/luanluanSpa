<template>
    <div class="main">
        <div class="tab-nav flex justify-center align-end">
            <div class='tab-nav-items' :class="{'active' : isActive}" @click="isActive = true">资讯</div>
            <div class='tab-nav-items' :class="{'active' : !isActive}" @click="isActive = false">动态</div>
        </div>
        <div class="page1" v-if="isActive">
            <van-tabs  swipeable animated >
                <van-tab v-for="(index,idx) in ['推荐','成功案例','常见问题','试管资讯']" :title=" index" :key="idx" >
                    <infoList v-for="(index,idx) in 7" :key="idx"></infoList>
                </van-tab>
            </van-tabs>
        </div>
        <div class="page2" v-else-if="!isActive">
            动态
        </div>
        
    </div>
</template>

<script>
import infoList from "../layout/infoList"
export default {
    name:"Information",
    components:{
        infoList
    },
    data(){
        return {
            isActive:true,
        }
    },
    methods:{
    }
}
</script>
<style lang="scss" scoped>
    .main{
        padding-top: 1.466667rem;
    }
    .tab-nav{
        font-size:.426667rem;
        color:rgba(153,153,153,1);
        width: 100%;
        height: 1.466667rem;
        padding-bottom: .4rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        background-color: #fff;
    }
    .tab-nav>.tab-nav-items{
        margin: 0 .133333rem;
    }
    .tab-nav>.tab-nav-items.active{
        font-size: .48rem;
        font-weight:bold;
        color:rgba(50,50,51,1);
        position: relative;
    }
    .tab-nav>.tab-nav-items.active::before{
        content: "";
        position: absolute;
        display: block;
        width: 5px;
        height: 5px;
        background-color: #FF2E36;
        border-radius: 50%;
        top: -0.133333rem;
        right: -0.106667rem;
    }
    .page1{
        width: 100%;
        height:84vh;
        background-color: #f7f5f5;
        overflow-y: auto;
        padding-top: 1.466667rem;
    }

    
</style>

