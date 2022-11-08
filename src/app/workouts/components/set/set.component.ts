import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { first } from 'rxjs/operators';
import { SetModel } from '../../models/set.model';
import { WorkoutDetailState } from '../../pages/workout-detail/workout-detail-state.service';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'Set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CheckboxComponent
  ]
})
export class SetComponent implements AfterViewInit {
  @Input() public set = new SetModel();
  @Input() public exerciseIndex = 0;
  @Input() public setIndex = 0;
  @ViewChild('ContentWrapper') public contentWrapperRef?: ElementRef;

  public position: number = 0;

  constructor(private state: WorkoutDetailState) {}

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.attachSwipeToDeleteListener();
    }, 0);
  }

  private attachSwipeToDeleteListener() {
    const div = this.contentWrapperRef?.nativeElement;

    fromEvent(div, 'touchstart')
      .subscribe((e: any) => {
        let touchStartPos = e.touches[0].clientX;

        const move = fromEvent(div, 'touchmove')
          .subscribe((e: any) => {
            const current = e.touches[0].clientX;
            const distance = (Math.round(touchStartPos - current));

            if (distance <= 0) {
              this.slideBack();
            } else {
              if (distance >= 50) {
                this.position = -100;
              } else {
                this.position = -distance;
              }
            }
          });

        fromEvent(div, 'touchend')
          .pipe(first())
          .subscribe(() => {
            move.unsubscribe();

            if (!(Math.abs(this.position) >= 100)) {
              this.slideBack();
            }
          });
      })
  }

  public slideBack() {
    if (this.position < 0) {
      let next = this.position + 2;
      this.position = next >= 0 ? 0 : next;
      requestAnimationFrame(this.slideBack.bind(this));
    }
  }

  public onComplete() {
    const newState = { ...this.set, isComplete: !this.set.isComplete };
    this.updateState(newState);
  }

  public onRepsChanged(e: any) {
    const val = e.target.value;
    const newState = { ...this.set, reps: parseInt(val) };
    this.updateState(newState);
  }

  public onWeightChanged(e: any) {
    const val = e.target.value;
    const newState = { ...this.set, weight: parseInt(val) };
    this.updateState(newState);
  }

  public delete() {
    this.state.deleteSet(this.exerciseIndex, this.setIndex);
  }

  public updateState(s: SetModel) {
    this.state.updateSet(this.exerciseIndex, this.setIndex, s);
  }
}
