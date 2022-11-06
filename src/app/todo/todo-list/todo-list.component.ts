import { Component, OnInit } from '@angular/core';
import { ClassTodo } from 'src/app/classes/class-todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: ClassTodo[] = this.service.todoList;

  constructor(private service: TodosService) { }

  ngOnInit(): void {

  }
  deleteTodo(obj: ClassTodo) {
    this.service.removeTodo(obj)
  }
  checkedTodo(obj: ClassTodo) {
    this.service.moveTodo(obj)
  }

}
