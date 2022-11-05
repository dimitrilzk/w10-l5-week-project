import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo.interface';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = this.service.todoList;

  constructor(private service: TodosService) { }

  ngOnInit(): void {

  }

}
