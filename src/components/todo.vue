<template>
<section>
<ul v-for="todo in vm.todos" :key="todo.key" class="task-list">
    <li><span @click='todo.isDone=!todo.isDone' :class="{'dashed':todo.isDone}">{{todo.title}}</span></li>
</ul>
<div>
    <input type="text" placeholder="New title" v-model="title"/>
    <br/>
<<<<<<< HEAD
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
=======
    <button @click="addNewTodo()">Add</button>
</div>
<div>
    Task not finished {{ this.vm.undones}}
</div>
</section>
</template>
<script>
import { computed } from 'mobx';
>>>>>>> b7ec067a6122d5b1093f3f8982aa1dfdbb18e051
import { observer } from "mobx-vue";
import TodoList from '@/store/todoList';
export default observer({
    name:'todo',
    data(){
<<<<<<< HEAD
        return {title:'',vm:new TodoList(),disabled:false}
=======
        return {title:'',vm:new TodoList()}
>>>>>>> b7ec067a6122d5b1093f3f8982aa1dfdbb18e051
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
