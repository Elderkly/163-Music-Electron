<template>
  <div id="app">
    <div class="Top-navigation"></div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: '163-music-electron'
  }
</script>

<style>
  /* CSS */
  .Top-navigation{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 50px;
    background: rgba(0,0,0,.7);
    -webkit-app-region: drag
  }
</style>
