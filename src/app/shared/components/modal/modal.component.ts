import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';

@Component({
  selector: 'Modal',
  templateUrl: 'modal.component.html',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class ModalComponent {
  @Output() public closed = new EventEmitter();

  @Input() public set isActive(active: boolean) {
    this._isActive = active;

    if (this.isActive) {
      this.preventScrolling();
    } else {
      this.allowScrolling();
    }
  }

  public get isActive() {
    return this._isActive;
  }

  private _isActive = false;

  constructor(
    @Inject('Window') public windowRef: Window
  ) { }

  private preventScrolling() {
    this.windowRef.document.body.style.overflow = 'hidden';
  }

  private allowScrolling() {
    this.windowRef.document.body.style.overflow = 'unset';
  }

  public deactivate() {
    this.isActive = false;
    this.closed.emit();
  }
}
