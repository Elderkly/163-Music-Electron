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
  // import nconf from 'nconf'

  export default {
    name: 'wangyi-music-electron',
    components:{
      WorkView,
      TopNavigation,
      BottomNavigation
    },
    created() {
      // console.log('database:host: ' + nconf.get('database:host'));
      // console.log('NODE_ENV: ' + nconf.get('NODE_ENV'));
      // console.log('database: ' + nconf.get('database'));
      //
      // nconf.argv()
      //     .env()
      //     .file({ file: 'config.json' });
      //
      // nconf.set('database:host', '127.0.0.1');
      // nconf.set('database:port', 5984);
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
