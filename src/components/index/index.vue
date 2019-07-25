<template>
    <div class="main">
        <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
    <div><img src="../../assets/img/nav-bar1.png" alt="">11</div>
    </div>
</template>

<script>
export default {
    name:"Index",
    data(){
        return {
            msg:'这里是首页',
            item: 10
        }
    },
    methods:{
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
    },
    mounted(){
        
    }
}
</script>
<style lang="scss" scoped>

</style>

