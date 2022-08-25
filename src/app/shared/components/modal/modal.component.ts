import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'Modal',
  templateUrl: 'modal.component.html'
})
export class ModalComponent {
  @Output() public close = new EventEmitter();

  @Input() public set isActive(active: boolean) {
    this._isActive = active;
  }

  public get isActive() {
    return this._isActive;
  }

  private _isActive = false;

  public deactivate() {
    this.isActive = false;
    this.close.emit();
  }
}
