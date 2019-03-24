<template>
    <section>
        <div class="adding">
        <input type="text" placeholder="New Task" v-model="title" @keyup.enter="addNewTodo()"/>
            <br/>
            <button @click="addNewTodo()" :disabled="title===''">Add</button>
    </div>
    <div v-if="vm.undones>0">
    Task not finished {{ vm.undones}}
    </div>
    <div v-else-if="vm.todos.length>0">
    All tasks are done!
    </div>
    <div v-else>
    No tasks!
    </div>
    </section>
   
</template>

<script>
import { observer } from "mobx-vue";
import Vue from "vue";
import {store} from "@/store/todoList";

Vue.config.keyCodes.atsign = 50;
export default observer({
  name: "addTodo",
  data() {
    return { title: "", disabled: false,vm:store };
  },
  methods: {
    addNewTodo() {
      if (this.title !== "") {
        this.vm.addTodo(this.title);
        this.title = "";
      }
    }
  }
});
</script>
<style>
</style>
