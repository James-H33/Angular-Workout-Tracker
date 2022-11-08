import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'Backdrop',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <div class="global-backdrop" [class.active]="isActive" (click)="dismiss()"></div>
  `
})
export class BackdropComponent {
  @Output() public clicked = new EventEmitter();
  @Input() public isActive = false;

  public dismiss() {
    this.clicked.emit();
  }
}
