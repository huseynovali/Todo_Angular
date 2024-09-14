import { Component, Input } from '@angular/core';
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
}
