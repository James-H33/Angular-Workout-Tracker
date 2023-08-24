import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { makeGuid } from 'src/app/shared/utils/utils';

@Component({
  selector: 'Checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="checkbox" (click)="onSelected()">
      <div class="checkbox-checkmark">
        <img *ngIf="selected" src="assets/checkmark.png" />
      </div>
    </div>
  `
})
export class CheckboxComponent {
  @Input() selected = false;
  @Input() disabled = false;
  @Output() selectedChange = new EventEmitter();

  public onSelected() {
    if (this.disabled) {
      return;
    }

    this.selected = !this.selected;
    this.selectedChange.emit();
  }
}
