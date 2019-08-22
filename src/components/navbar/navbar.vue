<template>
    <div class="navBox flex">
      <div class='flex flex-column align-center justify-center' v-for="(items,index) in navBarType" :key="index" @click="didClickedItem(index)" v-bind:class="{actives: actives[index]}">
        <img :src="items.src" alt="">
        <span :style="actives[index] ? items.iconColor : ''">{{items.title}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'navBar',
  data () {
    return {
      actives: [ true , false , false , false , false],
      navBarType:[
        {
          title:'首页'
          ,src: require('../../assets/img/nav-bar1.png')
          ,iconColor:'color:#ffc600'
        }
        ,{
          title:'医院'
          ,src: require('../../assets/img/nav-bar2.png')
          ,iconColor:'color:#95cef9'
        }
        ,{
          title:'发现'
          ,src: require('../../assets/img/nav-bar3.png')
          ,iconColor:'color:#ffc600'
        }
        ,{
          title:'套餐'
          ,src: require('../../assets/img/nav-bar4.png')
          ,iconColor:'color:#2c9ef4'
        }
        ,{
          title:'我的'
          ,src: require('../../assets/img/nav-bar5.png')
          ,iconColor:'color:#ff4858'
        }
      ]
    }
  },
  methods:{
    didClickedItem:function(tag){
        this.actives = this.actives.map(function(){
          return false;
        });
        
      this.$store.state.navBarNum = tag
      this.actives[this.$store.state.navBarNum] = true;
      // console.log(this.$store.state.navBarNum)
      // if(tag===4){
      //   this.$router.push({path:'/login'})
      // }
    }
  },
  mounted(){ 
    this.actives = this.actives.map(function(){
          return false;
        });
    this.actives[this.$store.state.navBarNum] = true;
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .navBox{
    width:100vw;
    height: 1.466667rem;
    position: fixed;
    bottom:0;
    background-color: #fff;
    box-shadow: 0px 0px .133333rem 0px #EBEBEB;
    z-index: 9999;
    div{
      width: 25%;
      height: 100%;
      color: #909090;
      text-decoration: none;
      span{
        margin-top: .133333rem;
        font-size:.24rem
      }
      img{
        height: .586667rem;
        transform: scale(1);
        transition: all .2s linear;
        transform-origin: center;
        -webkit-transform-origin: center;
        -moz-transform-origin: center;
        -o-transform-origin: center;
      }
    }
    div:active{
      img{
        transform: scale(0.9);
      }
    }
  }
  
</style>

