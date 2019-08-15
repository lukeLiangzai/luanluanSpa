<template>
    <div>
        <div class='more-title'>
            <div class="left">医院</div>
            <div class="right">更多</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'titleListNav',
    data (){
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
.more-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .133333rem .4rem .266667rem;
}
.more-title>.left{
    font-size:.426667rem;
    line-height: .4rem;
    font-weight:400;
    color:rgba(0,0,0,1);
    padding-left: .186667rem;
    background: url(../../assets/img/head-title.png) no-repeat 0 1px;
    background-size: contain;
}
.more-title>.right{
    font-size:.32rem;
    line-height: .346667rem;
    font-weight:400;
    color:#C5C5C9;
    padding-right: .24rem;
    background: url(../../assets/img/icon-toright.png) no-repeat right center;
    background-size: .16rem auto;
}

</style>
