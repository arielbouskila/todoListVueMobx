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
<<<<<<< HEAD
    
=======
>>>>>>> b7ec067a6122d5b1093f3f8982aa1dfdbb18e051
}