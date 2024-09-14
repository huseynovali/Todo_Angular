import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Output() addTodo = new EventEmitter<any>();
  i = 0;
  profileForm = new FormGroup({
    todo: new FormControl(''),
  });

  handleSubmit() {
    this.i++;
    this.addTodo.emit({ ...this.profileForm.value, id: this.i });
    this.profileForm.value.todo = '';
  }
}
