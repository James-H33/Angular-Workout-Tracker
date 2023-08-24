import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { exercises } from './exercise-data/exercises';

@Component({
  selector: 'app-exercise-picker',
  templateUrl: './exercise-picker.component.html',
  styleUrls: ['./exercise-picker.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class ExercisePickerComponent {
  @Output()
  public closed = new EventEmitter();

  @Output()
  public selected = new EventEmitter();

  @Input()
  public set isOpen(open: boolean) {
    this._isOpen = open;

    if (this.isOpen) {
      this.preventScrolling();
    } else {
      this.allowScrolling();
    }
  }

  public get isOpen() {
    return this._isOpen;
  }

  private _isOpen = false;

  public exercises = exercises;

  constructor(
    @Inject('Window') public windowRef: Window
  ) { }

  private preventScrolling() {
    this.windowRef.document.body.style.overflow = 'hidden';
  }

  private allowScrolling() {
    this.windowRef.document.body.style.overflow = 'unset';
  }

  public close() {
    this.closed.emit();
  }

  public select(e: any) {
    this.selected.emit(e);
    this.close();
  }
}
