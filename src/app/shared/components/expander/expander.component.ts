import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'Expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss'],
  standalone: true,
  imports: []
})
export class ExpanderComponent {
  public isActive = false;

  public get baseUrl() {
    return this._baseHref;
  }

  constructor(
    @Inject(APP_BASE_HREF) private _baseHref: string
  ) { }

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
