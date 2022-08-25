import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'Backdrop',
  templateUrl: './backdrop.component.html'
})
export class BackdropComponent {
  @Output() public clicked = new EventEmitter();
  @Input() public isActive = false;

  public dismiss() {
    this.clicked.emit();
  }
}
