import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() formGroup!: FormGroup;
  @Input() error = true;
  @Input() messageError = '';
  @Input() placeHolder = '';
  @Output() onChangeEvent = new EventEmitter<any>();

  onChange(event: any) {
    this.onChangeEvent.emit(event);
  }
}
