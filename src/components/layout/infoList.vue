<template>
    <div>
        <div class="information-items">
            <p class="title">泰国三代试管有什么缺点管有什么缺点管有什么缺点管有什么缺点?我能不能做三代?</p>
            <div class="flex">
                <div class="left img-box"><img src="../../assets/img/hos-img.png" alt=""></div>
                <div class="right flex flex-column flex-auto justify-between">
                    <div class="text">
                        试管婴儿助孕技术产生近50年来，已从一代、二代发展至三代。
                        一代主要是解决女性导致的不孕不育，二代解决的是男性导致的不孕不育，
                        三代是革命性的突破，主要针对的是优生优育。
                        何为优生优育？相信这是许多想做试管婴儿助
                        孕但不知道选择几代的女性的共同疑问。
                    </div>
                    <div class="tag-box">
                        <div class="tag flex">
                            <span>孪娈自营</span>
                            <span>孪娈自营</span>
                            <span>孪娈自营</span>
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
