import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { WorkoutDetailActions, selectCurrentWorkout } from '@store/workout';
import { IWorkoutDetailState } from '@store/workout/workout.reducer';
import { BehaviorSubject } from 'rxjs';
import { ExerciseCardComponent } from '../../components/exercise-card/exercise-card.component';
import { ExercisePickerComponent } from '../../components/exercise-picker/exercise-picker.component';
import { TimerComponent } from '../../components/timer/timer.component';
import { Workout } from '../../models/workout.model';

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
  providers: [],
})
export class WorkoutDetailComponent {
  @ViewChild('TimerAnchor') public timerAnchor: ElementRef | null = null;
  @ViewChild('ScrollingTimerRef') public timerRef: ElementRef | null = null;
  public workout: Workout = new Workout();
  public isChoosingExercise = false;
  public workout$ = this.store.select(selectCurrentWorkout);
  public workoutDuration$ = new BehaviorSubject<number>(0);

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
  }

  public ngAfterViewInit(): void {
    setTimeout(() => this.initObserver(), 1);
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
