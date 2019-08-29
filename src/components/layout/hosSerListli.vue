<template>
    <div>
        <a href="#" class='list-items' v-for="(item,index) in hosList" :key="index">
            <div class='left-img img-box'><img :src="item.cover" alt=""></div>
            <div class='right-introduce flex flex-column flex-auto'>
                <p class="title">{{item.name}}</p>
                <div class='row-1 flex justify-between'>
                    <div class='score flex'>
                        <i class='active' v-for="(i,index3) in item.score/2" :key="index3"></i>
                    </div>
                    <div class='price-row flex align-end'>
                        <i>&yen;</i>
                        <p>{{parseInt(item.convert_price)}}</p>
                        <span>/周期</span>
                    </div>
                </div>
                <div class='row-2 flex align-center' v-for="(tag,index2) in item.promotions" :key="index2">
                    <div class="tag-square">{{tag.label}}</div>
                    <p>{{tag.describe}}</p>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name:'hosSerListLi',
    props:[
        'hosList'
    ],
    data (){
        return {
            
        }
    },
    mounted(){
        // console.log(this.hosList);
    },
    beforeMount(){
    }
}
</script>
<style lang="scss" scoped>
a{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    text-decoration: none;
    color: #333;
}
a:hover{
    text-decoration: none;
}

    .list-items{
        width: calc(100% - .8rem);
        background-color: #fff;
        border-radius: .133333rem;
        min-height:2.4rem;
        padding: .266667rem 0 .266667rem .32rem;
        display: flex;
        margin:0 auto .32rem;
        .left-img{
            width: 2.933333rem;
            height: 1.866667rem;
            overflow: hidden;
            margin-right: .266667rem;
            border-radius: .133333rem;
        }
        .right-introduce{
            .title{
                font-size:.426667rem;
                line-height:.533333rem;
                color:#000;
            }
            .row-1{
                margin: .266667rem 0 .213333rem;
                .score{
                    i{
                        width:.32rem;
                        height:.32rem;
                        background: url(../../assets/img/icon-stars.png) no-repeat  0 0;
                        background-size: .32rem .32rem;
                        margin-right: .08rem;
                    }
                    i.active{
                        background: url(../../assets/img/icon-stars-bat.png) no-repeat  0 0;
                        background-size: .32rem .32rem;
                    }
                }
                .price-row{
                    color: #000;
                    margin-right: .266667rem;
                    i{
                        font-size: .266667rem;
                        font-weight: bold;
                    }
                    p{
                        font-size: .426667rem;
                        line-height: .373333rem;
                        margin:0 .053333rem;
                        font-family: 'DIN Alternate Bold';
                    }
                    span{
                        font-size: .266667rem;
                        font-weight: bold;
                    }
                }
            }
            .row-2{margin-bottom: .133333rem;}
            .row-2,.row-3{
                font-size:.32rem;
                color:rgba(137,137,137,1);
                font-weight: 400;
            }  
            .row-2:nth-child(2n+1){
                div.tag-square{
                    background:#62A9F8;
                    margin-right: .133333rem;
                }
            }
            .row-2:nth-child(2n){
                div.tag-square{
                    background-color: #14B6C4;
                    margin-right: .133333rem;
                }
            }
            div.tag-square+p{
                flex: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                line-height: 1.2;
            }
        }
    }
.tag-square{
    border-radius:2px;
    padding: 3px 3px 2px;
    color: #fff;
    font-size: .266667rem;
    line-height: .293333rem;
}


</style>
