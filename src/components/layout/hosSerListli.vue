<template>
    <li class="hosSerList">
        <a href="#">
            <div class="hosSerList_left">
                <img alt="" class="hos_img1" src="https://static.luanluanhaiwai.com/uploads/skpuU7YhPc079d7fv8aposBQ5Qpj5viLy7mmInePXhdlhdGW6wR3wxbjCc7KbREN.jpg"> 
                <span>泰国</span>
                <img alt="" class="hos_img2" src="https://m.luanluanhaiwai.com/mobile/img/ic5.png">
            </div> 
            <div class="hosSerList_right">
                <p>泰国28天温馨公寓（促排+移植）</p>
                <div class="hosTag">
                    <!-- <div>
                        <span>包食宿</span>
                    </div>
                    <div>
                        <span>双翻译</span>
                    </div>
                    <div>
                        <span>完整周期</span>
                    </div> -->
                </div>
                <div class="price">
                    <div class="price_num">
                        <span><small>￥</small>26820</span>
                        <span><small>￥</small><s>29800</s></span>
                    </div>
                    <div class="stat">
                        <span>订购人数 : 29</span>
                    </div>
                </div>
            </div> 
        </a>
    </li>
</template>

<script>
export default {
    name:'hosSerListLi',
    data (){
        return {
            
        }
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
.hosSerList{
    width: 100%;
    margin-bottom:.533333rem; 
    background-color: #fff;
    border-radius: .133333rem;
    overflow: hidden;
    box-shadow:2px 2px 10px rgba(0, 0, 0, 0.1);
    a{
        width: 100%;
        display: flex;
        .hosSerList_left{
            width: 3.2rem;
            height: 3.2rem;
            position: relative;
            span{
                position: absolute;
                left: .133333rem;
                top: .133333rem;
                color: white;
                border: 1px solid #fff;
                line-height: .373333rem;
                padding: 1px .133333rem 0;
                display: flex;
                border-radius: 3000px;
                font-size: .293333rem;
                background-color: rgba(51,51,51,.2);
            }
            img.hos_img1{
                width: 3.2rem;
                height: 3.2rem;
                object-fit: cover;
            }
            img.hos_img2{
                width: 1.013333rem;
                position: absolute;
                right: 0;
                top: 0;
            }
        .hosSerList_right{
            width: 100%;
            background-color: #000;
        }
        }
    }
}
</style>
