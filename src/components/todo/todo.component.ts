import { Component } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { TodolistComponent } from "../todolist/todolist.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [InputComponent, TodolistComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

}
