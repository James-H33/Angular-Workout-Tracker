import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { exercises } from './exercise-data/exercises';

@Component({
  selector: 'app-exercise-picker',
  templateUrl: './exercise-picker.component.html',
  styleUrls: ['./exercise-picker.component.scss']
})
export class ExercisePickerComponent {
  @Input()
  public isOpen = false;

  @Output()
  public closed = new EventEmitter();

  @Output()
  public selected = new EventEmitter();

  public exercises = exercises;

  public close() {
    this.closed.emit();
  }

  public select(e: any) {
    this.selected.emit(e);
    this.close();
  }
}
