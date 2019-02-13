<template>
<section>
<ul v-for="todo in vm.todos" :key="todo.key" class="task-list">
    <li><button @click="removeTodo(todo.id)">X</button><span @click='todo.isDone=!todo.isDone' :class="{'dashed':todo.isDone}">{{todo.title}}</span></li>
</ul>
<div>
    <input type="text" placeholder="New Task" v-model="title" @keyup.enter="addNewTodo()"/>
    <br/>
    <button @click="addNewTodo()" :disabled="title===''">Add</button>
</div>
<div v-if="this.vm.undones>0">
    Task not finished {{ this.vm.undones}}
</div>
<div v-else-if="vm.todos.length>0">
   All tasks are done!
</div>
</section>
</template>
<script>
import { observer } from "mobx-vue";
import TodoList from '@/store/todoList';
import Vue from 'vue';

Vue.config.keyCodes.atsign = 50;

export default observer({
    name:'todo',
    data(){
        return {title:'',vm:new TodoList(),disabled:false}
    },
    methods:{
        triggerNewTodo(e){
            if(e.keyCode === 13){
                this.addNewTodo();
            }
        },
        addNewTodo(){
            if(this.title!==''){
                this.vm.addTodo(this.title);
                this.title='';
            }
            
        },
        removeTodo(id){
            this.vm.removeTodo(id);
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
