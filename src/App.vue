<template>
  <div id="app">
    <router-view v-if="path.includes($route.fullPath)"/>
    <keep-alive v-else>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isKeep: false,
      path: [
        '/pageA',
        '/pageB',
        '/pageC',
        '/pageD',
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
