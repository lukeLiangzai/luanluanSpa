<template>
    <div class="main">
        <van-nav-bar
            title="IVF成功率计算器"
            left-text=""
            right-text=""
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
    </div>
</template>

<script>
export default {
    components:{
    },
    name:"Ivfcalc",
    data(){
        return {
            msg:'这里是我的',
            item: 4
        }
    },
    methods:{
        onClickLeft() {
            // Toast('返回');
        },
        onClickRight() {
            // Toast('按钮');
        }
    }
}
</script>
<style lang="scss" scoped>

</style>



