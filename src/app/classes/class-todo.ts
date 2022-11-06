import { Todo } from "../todo.interface";

export class ClassTodo implements Todo {
  id = 1;
  title = "Fare la spesa";
  completed = false;
}
