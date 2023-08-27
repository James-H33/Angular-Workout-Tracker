import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IWorkoutDetailState, WorkoutDetailActions } from '@store/workout';
import { fromEvent } from 'rxjs';
import { first } from 'rxjs/operators';
import { SetModel } from '../../models/set.model';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'Set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CheckboxComponent
  ]
})
export class SetComponent implements AfterViewInit {
  @Input() public set = new SetModel();
  @Input() public exerciseIndex = 0;
  @Input() public setIndex = 0;
  @ViewChild('ContentWrapper') public contentWrapperRef?: ElementRef;

  public position: number = 0;

  constructor(
    private store: Store<IWorkoutDetailState>
  ) {}

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.attachSwipeToDeleteListener();
    }, 0);
  }

  private attachSwipeToDeleteListener() {
    const div = this.contentWrapperRef?.nativeElement;

    function findParentWithClass(el: any, cls: any) {
      while ((el = el.parentElement) && !el.classList.contains(cls));
      return el;
    }

    fromEvent(div, 'touchstart', { passive: true })
      .subscribe((e: any) => {
        let touchStartPos = e.touches[0].clientX;
        const setEl = findParentWithClass(e.target, 'set');

        const move = fromEvent(div, 'touchmove', { passive: true })
          .subscribe((e: any) => {
            const current = e.touches[0].clientX;
            const distance = (Math.round(touchStartPos - current));
            setEl.classList.add('active');

            if (distance <= 0) {
              this.slideBack(setEl);
            } else {
              if (distance >= 50) {
                this.position = -80;
              } else {
                this.position = -distance;
              }
            }
          });

        fromEvent(div, 'touchend', { passive: true })
          .pipe(first())
          .subscribe(() => {
            move.unsubscribe();

            if (!(Math.abs(this.position) >= 80)) {
              this.slideBack(setEl);
            }
          });
      })
  }

  public slideBack(el?: any) {
    if (this.position < 0) {
      let next = this.position + 2;
      this.position = next >= 0 ? 0 : next;
      requestAnimationFrame(this.slideBack.bind(this, el));
    } else {
      el.classList.remove('active');
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
    this.store.dispatch(WorkoutDetailActions.RemoveSet({ exerciseIndex: this.exerciseIndex, setIndex: this.setIndex }));
  }

  public updateState(s: SetModel) {
    this.store.dispatch(WorkoutDetailActions.UpdateSet({ exerciseIndex: this.exerciseIndex, setIndex: this.setIndex, set: s }));
  }
}
