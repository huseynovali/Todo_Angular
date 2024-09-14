import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from "../input/input.component";

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
 @Input() todo:{todo:string,id:number}[] = [];
 @Output() deleteTodo = new EventEmitter<any>();

 delete(id: number) {
   this.deleteTodo.emit(id);
 }
}
