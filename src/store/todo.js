import { action,computed,observable } from 'mobx';
export default class Todo{
    id = Math.random();
    @observable title;
    @observable isDone = false;
    constructor(title){
        this.title = title;
    }
}