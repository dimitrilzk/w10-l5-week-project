import { InterfaceTodo } from "../todo.interface";

export class ClassTodo implements InterfaceTodo {
  id?: number;
  title: string;
  completed: boolean = false
    constructor(title: string) {
      this.title = title
    }
}
