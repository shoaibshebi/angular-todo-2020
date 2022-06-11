import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: false,
      },
    ];
  }
  toggleDone = (id: number) => {
    this.todos = this.todos.map((x, i) => {
      if (i === id) x.completed = !x.completed;
      return x;
    });
  };
  deleteTodo = (id: number) => {
    this.todos = this.todos.filter((x, i) => i !== id);
  };
  addTodo = (val: string) => {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  };
}
