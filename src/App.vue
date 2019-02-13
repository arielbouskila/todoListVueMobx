<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <todo/>
  </div>
</template>

<script>
import todo from './components/todo';
export default {
  name: 'app',
  components: {
    todo
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
