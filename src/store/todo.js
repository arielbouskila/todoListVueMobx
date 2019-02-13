<<<<<<< HEAD
import { observable } from 'mobx';
=======
import { action,computed,observable } from 'mobx';
>>>>>>> b7ec067a6122d5b1093f3f8982aa1dfdbb18e051
export default class Todo{
    id = Math.random();
    @observable title;
    @observable isDone = false;
    constructor(title){
        this.title = title;
    }
}