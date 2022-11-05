import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo.interface';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  title: string = '';

  constructor(private service: TodosService) { }

  ngOnInit(): void {
  }
  printTodo() {
    let task: Todo = {id: 1, title: this.title, completed: false};
    this.service.addTodo(task);
    this.title = "";
  }

}
