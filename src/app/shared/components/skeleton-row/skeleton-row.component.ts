import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'SkeletonRow',
  templateUrl: './skeleton-row.component.html',
  styleUrls: ['./skeleton-row.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonRowComponent {
  @Input()
  @HostBinding('style.--skeleton-row-height')
  public height = 0;
}
