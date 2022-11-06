import { Injectable } from '@angular/core';
import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root'
})

export class TodosService {

  todoList: Todo [] = [
    {
      id: 1,
      title: "",
      completed: true
    },
  ]

  constructor() {}

  addTodo(obj: Todo) {
    this.todoList.push(obj)
  }

}
