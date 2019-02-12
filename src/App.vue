<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <todo :list='todos' :undones='todos.unDoneTodosCount'/>
  </div>
</template>

<script>
import todo from './components/todo';
import TodoList from '@/store/todoList';
export default {
  name: 'app',
  components: {
    todo
  },
  data(){
    return {todos:new TodoList()}
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
