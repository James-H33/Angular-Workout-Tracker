import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { makeGuid } from 'src/app/shared/utils/utils';

@Component({
  selector: 'Checkbox',
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {
  @Input() selected = false;
  @Input() disabled = false;
  @Output() selectedChange = new EventEmitter();
  public id = makeGuid();

  public onSelected() {
    if (this.disabled) {
      return;
    }

    this.selected = !this.selected;
    this.selectedChange.emit();
  }
}
