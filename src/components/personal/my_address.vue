<template>
  	<div>
        <van-nav-bar title="我的地址" fixed>
            <van-icon name="arrow-left" slot="left" color="#000" @click="onClickLeft"/>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
name:"my_address",
    data(){
        return {

        }
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        }
    },
    mounted(){
        
    },
}
</script>

<style>

</style>