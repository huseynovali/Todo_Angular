import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { TodolistComponent } from '../todolist/todolist.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [InputComponent, TodolistComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  Todo: { todo: string; id: number }[] = JSON.parse(
    localStorage.getItem('todo') ?? '[]'
  );
  addTodo(todo: { id: number; todo: string }) {
    if (todo.todo == '') {
      alert('todo required !');
      return;
    }
    this.Todo.push(todo);
  }
  deleteTodo(id: number) {
    this.Todo = [...this.Todo.filter((item) => item.id !== id)];
  }
}
