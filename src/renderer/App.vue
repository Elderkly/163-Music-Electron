<template>
  <div id="app">
    <div class="main-TopBox">
      <work-view/>
      <div class="main-Content">
        <top-navigation/>
        <router-view></router-view>
      </div>
    </div>
    <bottom-navigation/>
  </div>
</template>

<script>
  import WorkView from './containers/WorkView'
  import TopNavigation from './containers/TopNavigation'
  import BottomNavigation from './containers/BottomNavigation'

  export default {
    name: 'wangyi-music-electron',
    components:{
      WorkView,
      TopNavigation,
      BottomNavigation
    }

  }
</script>

<style lang="scss">
  .main-TopBox{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    .main-Content{
      flex: 1;
      background: rgba(255, 49, 0, 0.51);
    }
  }
</style>
