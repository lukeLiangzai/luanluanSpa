<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './components/font/font.css';

$bgc:rgba(255, 255, 255, 0.972);
body{
  background-color: $bgc;
}
</style> 
