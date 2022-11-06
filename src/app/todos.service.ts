import { Injectable } from '@angular/core';
import { ClassTodo } from './classes/class-todo';


@Injectable({
  providedIn: 'root'
})

export class TodosService {

  todoList: ClassTodo [] = []

  completeTodo: ClassTodo [] = []

  constructor() {}

  addTodo(title: string) {
    let todo: ClassTodo = new ClassTodo(title);
    this.todoList.push(todo);
  }
  removeTodo(obj: ClassTodo) {
    let i = this.todoList.indexOf(obj);
    this.todoList.splice(i, 1);
  }
  moveTodo(obj: ClassTodo) {
    let i = this.todoList.indexOf(obj);
    this.todoList.splice(i, 1);
    this.completeTodo.push(obj);
  }

}
