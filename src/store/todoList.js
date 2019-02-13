import { action,computed,observable } from 'mobx';
import Todo from './todo';
export default class TodoList{
    @observable 
    todos= [];
    @computed
    get undones(){
        return this.todos.filter(todo => !todo.isDone).length;
    } 
    @action.bound
    addTodo(title){
        this.todos.push(new Todo(title));
    }
    @action.bound
    removeTodo(id){
        this.todos = this.todos.filter(item=>item.id!==id);
    }
}