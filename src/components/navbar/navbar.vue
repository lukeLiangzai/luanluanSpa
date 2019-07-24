<template>
    <div class="navBox">
      <div v-for="(items,index) in navBarType" :key="index" @click="didClickedItem(index)" v-bind:class="{actives: actives[index]}">
        <svg class="icon" aria-hidden="true" :font-size="items.iconSize">
          <use :xlink:href="items.icon"></use>
        </svg>
        <span>{{items.title}}</span>
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
          value:0
          ,title:'首页'
          ,icon:'#icon-fenlei-'
          ,iconSize:'22px'
        }
        ,{
          value:1
          ,title:'医院'
          ,icon:'#icon-yiyuan1'
          ,iconSize:'26px'
        }
        ,{
          value:2
          ,title:'服务'
          ,icon:'#icon-fuwu'
          ,iconSize:'22px'
        }
        ,{
          value:3
          ,title:'资讯'
          ,icon:'#icon-lyq-zixun'
          ,iconSize:'22px'
        }
        ,{
          value:2
          ,title:'我的'
          ,icon:'#icon-wode-'
          ,iconSize:'22px'
        }
      ]
    }
  },
  methods:{
    didClickedItem:function(tag){
        this.actives = this.actives.map(function(){
          return false;
        });
      this.actives[tag] = true;
      // this.$store.state.navBarNum=tag;
      this.$emit("navBarNum",tag);
    }
  },
  mounted(){ 

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .navBox{
    width:100vw;
    height: 1.5625rem;
    position: fixed;
    bottom:0;
    background-color: #fff;
    box-shadow: 0 -0.026667rem .066667rem rgba(51,51,51,.1);
    z-index: 9999;
    display: flex;
    div{
      width: 25%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: column;
      color: #909090;
      text-decoration: none;
      padding-bottom: .2rem;
      svg{
        color: #909090;
      }
      span{
        margin-top: .066667rem
      }
    }
    div.actives{
      color: #14b6c4!important;
      svg{
        color: #14b6c4!important;
      }
    }
  }
</style>

