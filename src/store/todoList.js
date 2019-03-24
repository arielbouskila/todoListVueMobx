import { action,computed,observable } from 'mobx';
import Todo from './todo';
export default class TodoList{
    @observable 
    todos= [];
    @computed
    get undones(){
        return this.todos.filter(todo => !todo.isDone).length;
    } 
    @action
    addTodo(title){
        this.todos.push(new Todo(title));
    }
    @action
    removeTodo(id){
        this.todos = this.todos.filter(item=>item.id!==id);
    }
}
export const store = new TodoList();