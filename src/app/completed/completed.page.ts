import { Component, OnInit } from '@angular/core';
import { ClassTodo } from '../classes/class-todo';
import { TodosService } from '../todos.service';

@Component({
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss']
})
export class CompletedPage implements OnInit {

  completed: ClassTodo [] = this.service.completeTodo

  constructor(private service: TodosService) { }

  ngOnInit(): void {
  }

}
