<template>
    <div>
        <Entrance v-if="navData!=undefined" :toNavnum="navData"></Entrance>
        <nav-bar @navBarNum='getData'></nav-bar>
    </div>
</template>

<script>
import navBar from './navbar/navbar'
import Entrance from './Entrance/index'
export default {
    components:{
        'nav-bar':navBar
        ,'Entrance':Entrance
    },
    name:'enterElement',
    data(){
        return{
            navData:0,
        }
    },
    methods:{
        getData:function(data){
            this.navData = data;
        }
    },
    mounted(){
    }    
}
</script>
<style lang="scss" scoped>

</style>
