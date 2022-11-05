import { Injectable } from '@angular/core';
import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root'
})

export class TodosService {

  todoList: Todo [] = [
    {
      id: 1,
      title: "Opps, non ci sono Task",
      completed: true
    },
  ]

  constructor() {}

  addTodo(obj: Todo) {
    this.todoList.push(obj)
  }

}
