import { Injectable } from '@angular/core';
import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root'
})

export class TodosService {

  todoList: Todo [] = [
    {
      id: 1,
      title: "Studiare Angular",
      completed: true
    },
    {
      id: 2,
      title: "Capire Angular",
      completed: false
    },

  ]



  constructor() {}

  addTodo(obj: Todo) {
    this.todoList.push(obj)
  }

}
