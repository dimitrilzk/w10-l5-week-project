import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss']
})



export class TodoPage implements OnInit {

  constructor(private service: TodosService) { }

  ngOnInit(): void {
  }

}
