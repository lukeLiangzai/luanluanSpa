<template>
    <div>
        <div class="information-items" v-for="(item,index) in article" :key="index">
            <p class="title">{{item.title}}</p>
            <div class="flex">
                <div class="left img-box"><img :src="item.cover" alt=""></div>
                <div class="right flex flex-column flex-auto justify-between">
                    <div class="text">{{item.describe}}</div>
                    <div class="tag-box">
                        <div class="tag flex">
                            <span v-for="(tag,index2) in item.tags" :key="index2">{{tag}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'infoList',
    props:['article'],
    data (){
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
.information-items{
        width: calc(100vw - .8rem);
        background-color: #fff;
        margin:0 auto .32rem;
        padding: .266667rem;
        border-radius: .133333rem;
        display: block;
    }
    .information-items>p.title{
        display: block;
        width: 100%;
        height: .533333rem;
        font-size:.4rem;
        line-height:.56rem;
        color:rgba(72,72,72,1);
        overflow: hidden;
        
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        margin-bottom: .266667rem;
    }
    .information-items .left{
        width: 3.2rem;
        height:2.4rem;
        overflow: hidden;
        border-radius: .133333rem;
        background-color: gray;
        margin-right: .266667rem;
    }
    .information-items .right>.text{
        height:1.733333rem;
        overflow: hidden;
        font-size:.32rem;
        color:rgba(159,159,159,1);
        line-height: .453333rem;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
    .information-items .right>.tag-box{
        width: 5.333333rem;
        height: .48rem;
        /* overflow: hidden; */
        position: relative;
    }
    .information-items .right>.tag-box>.tag{
        position: absolute;
        transform: scale(.5);
        transform-origin: left top;
        -webkit-transform-origin: left top;
        -moz-transform-origin: left top;
        -o-transform-origin: left top;
        width: 10.666667rem;
        height: .96rem;
    }
    .information-items .right>.tag-box>.tag>span{
        background:rgba(98,169,248,1);
        border-radius:0 1.333333rem 1.333333rem 1.333333rem;
        font-size:.533333rem;
        color:rgba(255,255,255,1);
        margin-right: .533333rem;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .026667rem .32rem 0;
    }
</style>
