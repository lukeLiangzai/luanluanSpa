<template>
    <div>
        <indexTemplate v-if="this.toNavnum===0"></indexTemplate>
        <hospitalTemplate v-if="this.toNavnum===1"></hospitalTemplate>
        <informationTemplate v-if="this.toNavnum===2"></informationTemplate>
        <serviceTemplate v-if="this.toNavnum===3"></serviceTemplate>
        <personalTemplate v-if="this.toNavnum===4"></personalTemplate>
    </div>
</template>
<script>
import index from '../index/index'
import hospital from '../hospital/hospital'
import service from '../service/service'
import information from '../information/information'
import personal from '../personal/personal'

export default {
    components:{
        'indexTemplate':index
        ,'hospitalTemplate':hospital
        ,'serviceTemplate':service
        ,'informationTemplate':information
        ,'personalTemplate':personal
    },
    props:[
        "toNavnum"
    ],
    data(){
        return {

        }
    },
    methods:{
    },
    mounted(){
        
    },
    
}
</script>
<style lang="scss" scoped>

</style>
