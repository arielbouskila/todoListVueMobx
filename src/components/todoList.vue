<template>
<section>
<ul class="task-list">
    <li v-for="todo in vm.todos" :key="todo.key" class="task-item">
        <button @click="removeTodo(todo.id)" class="remove">X</button><span @click='todo.isDone=!todo.isDone' :class="{'dashed':todo.isDone}" class="task-name">{{todo.title}}</span>

        </li>
</ul>

<add-todo/>
</section>
</template>
<script>
import { observer } from "mobx-vue";
import {store} from "@/store/todoList";
import Vue from "vue";
import addTodo  from "./addTodo";

export default observer({
  name: "todo",
  components: {
    addTodo
  },
  data() {
    return { vm: store };
  },
  methods: {
    removeTodo(id) {
      this.vm.removeTodo(id);
    }
  }
});
</script>
<style scoped>
ul.task-list {
  list-style-type: none;
  max-height: 200px;
  overflow: auto;
}
ul li {
  cursor: pointer;
}
.dashed {
  text-decoration-line: line-through;
}
</style>
