
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'Checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
  template: `
    <div class="checkbox" (click)="onSelected()" aria-hidden="true">
      <div class="checkbox-checkmark">
        @if (selected) {
          <img src="assets/checkmark.png" alt="checkmark" />
        }
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
