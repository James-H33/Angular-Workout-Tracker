import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { WorkoutDetailActions, selectCurrentWorkout } from '@store/workout';
import { IWorkoutDetailState } from '@store/workout/workout.reducer';
import { BehaviorSubject, ReplaySubject, Subject, combineLatest } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ExerciseCardComponent } from '../../components/exercise-card/exercise-card.component';
import { ExercisePickerComponent } from '../../components/exercise-picker/exercise-picker.component';
import { TimerComponent } from '../../components/timer/timer.component';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ExerciseCardComponent,
    ExercisePickerComponent,
    TimerComponent
  ],
  providers: []
})
export class WorkoutDetailComponent implements OnInit, OnDestroy {
  @ViewChild('TimerAnchor')
  public set timerAnchorRef(ref: ElementRef | null) {
    if (!ref) {
      return;
    }

    this.timerAnchor = ref;
    this.timerAnchor$.next(ref);
  }

  @ViewChild('ScrollingTimerRef')
  public set scrollingTimerRef(ref: ElementRef | null) {
    if (!ref) {
      return;
    }

    this.timerRef = ref;
    this.timerRef$.next(ref);
  }

  public timerAnchor: ElementRef | null = null;
  public timerRef: ElementRef | null = null;
  public timerAnchor$ = new ReplaySubject(1);
  public timerRef$ = new ReplaySubject(1);
  public viewInit$ = new BehaviorSubject<boolean>(false);

  public isChoosingExercise = false;
  public workout$ = this.store.select(selectCurrentWorkout);
  public workoutDuration$ = new BehaviorSubject<number>(0);

  private destroy$ = new Subject();

  constructor(
    private router: ActivatedRoute,
    private routing: Router,
    private store: Store<IWorkoutDetailState>
  ) { }

  public ngOnInit(): void {
    this.router.paramMap
      .subscribe(map => {
        const id = map.get('id');

        if (id) {
          this.store.dispatch(WorkoutDetailActions.LoadWorkout({ id }));
        }
      });

    combineLatest([
      this.workout$,
      this.timerAnchor$,
      this.timerRef$
    ])
      .pipe(
        takeUntil(this.destroy$),
        map(() => Promise.resolve())
      )
      .subscribe(() => {
        this.initObserver();
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public initObserver() {
    if (!this.timerAnchor || !this.timerRef) {
      return;
    }

    const action = (entries: any) => {
      const entry = entries[0];
      const timeRef = this.timerRef?.nativeElement;

      if (!entry.isIntersecting) {
        timeRef.classList.add('show');
      } else {
        timeRef.classList.remove('show');
      }
    }

    const observer = new IntersectionObserver(action);
    observer.observe(this.timerAnchor.nativeElement);
  }


  public async complete() {
    const callback = () => {
      this.routing.navigate(['']);
    }

    this.store.dispatch(WorkoutDetailActions.FinishWorkout({ callback }));
  }

  public start() {
    this.store.dispatch(WorkoutDetailActions.StartWorkout());
  }

  public async cancel() {
    this.store.dispatch(WorkoutDetailActions.CancelWorkout());
  }

  public addExercise(exercise: { title: string }) {
    this.store.dispatch(WorkoutDetailActions.AddExercise({ title: exercise.title }));
  }

  public openExercisePicker() {
    this.isChoosingExercise = true;
  }

  public handleWorkoutTimerUpdate(duration: number) {
    this.workoutDuration$.next(duration);
  }
}
