import { Component } from '@angular/core';

@Component({
  selector: 'Expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss']
})
export class ExpanderComponent {
  public isActive = false;

  public activate() {
    this.toggle(true);
  }

  public deactivate() {
    this.toggle(false);
  }

  public toggle(isActive: boolean, event?: MouseEvent): void {
    event?.stopPropagation();
    this.isActive = isActive;
  }
}
