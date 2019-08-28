<template>
    <div>
        <div class='more-title'>
            <div class="left">{{name}}</div>
            <div class="right" @click="toLink">更多</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'titleListNav',
    props:{
        'name':String,
        'value':String
    },
    data (){
        return {
            
        }
    },
    methods:{
        toLink(){
            this.$store.state.navBarNum = Number(this.value)
        }
    },
    mounted(){
    }
}
</script>
<style lang="scss" scoped>
.more-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .133333rem .4rem .266667rem;
    .left{
        font-size:.426667rem;
        line-height: .4rem;
        font-weight:400;
        color:rgba(0,0,0,1);
        padding-left: .186667rem;
        background: url(../../assets/img/head-title.png) no-repeat 0 1px;
        background-size: contain;
    }
    .right{
        font-size:.32rem;
        line-height: .346667rem;
        font-weight:400;
        color:#C5C5C9;
        padding-right: .24rem;
        background: url(../../assets/img/icon-toright.png) no-repeat right center;
        background-size: .16rem auto;
    }
}

</style>
