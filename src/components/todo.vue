<template>
<section>
<ul v-for="todo in vm.todos" :key="todo.key" class="task-list">
    <li><span @click='todo.isDone=!todo.isDone' :class="{'dashed':todo.isDone}">{{todo.title}}</span></li>
</ul>
<div>
    <input type="text" placeholder="New title" v-model="title"/>
    <br/>
    <button @click="addNewTodo()">Add</button>
</div>
<div>
    Task not finished {{ this.vm.undones}}
</div>
</section>
</template>
<script>
import { computed } from 'mobx';
import { observer } from "mobx-vue";
import TodoList from '@/store/todoList';
export default observer({
    name:'todo',
    data(){
        return {title:'',vm:new TodoList()}
    },
    methods:{
        addNewTodo(){
            this.vm.addTodo(this.title);
            this.title='';
        }
    }
});
</script>
<style lang="css" scoped>
ul.task-list{
    list-style-type: none;
}
ul li {
    cursor: pointer;
}
.dashed{
    text-decoration-line: line-through;
}
</style>
