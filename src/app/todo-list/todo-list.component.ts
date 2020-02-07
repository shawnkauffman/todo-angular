import { Component, OnInit } from '@angular/core';

import { todos } from '../todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos = todos;
  count = this.todos.length;

  onAddItem(newTask: string) {
    if (newTask) {
      this.todos.push({ name: newTask });
    }
    this.count++;
  }

  onClearAll() {
    this.todos = [];
    this.count = this.todos.length;
  }

  onDeleteItem(index) {
    this.todos.splice(index, 1);
    this.count--;
  }

  constructor() { 

  }

  ngOnInit(): void {
  }

}
