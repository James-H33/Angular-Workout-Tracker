import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { WorkoutDetailActions, selectCurrentWorkout } from '@store/workout';
import { IWorkoutDetailState } from '@store/workout/workout.reducer';
import { ExerciseCardComponent } from '../../components/exercise-card/exercise-card.component';
import { ExercisePickerComponent } from '../../components/exercise-picker/exercise-picker.component';
import { TimerComponent } from '../../components/timer/timer.component';
import { Workout } from '../../models/workout.model';
import { WorkoutsService } from '../../services/workouts.service';
import { WorkoutDetailState } from './workout-detail-state.service';
import { BehaviorSubject, Subject } from 'rxjs';

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
  providers: [WorkoutDetailState],
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
    private workoutService: WorkoutsService,
    private state: WorkoutDetailState,
    private routing: Router,
    private store: Store<IWorkoutDetailState>
  ) { }

  public ngOnInit(): void {
    // this.state.watch().subscribe((w: any) => this.workout = w);

    this.router.paramMap.subscribe(map => {
      const id = map.get('id');

      if (id) {
        this.store.dispatch(WorkoutDetailActions.LoadWorkout({ id }));
        // this.getWorkout(id);
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
    console.log('Completed!');
    // this.workout.lastCompletedDate = new Date().toUTCString();
    // await this.workoutService.update(this.workout);
    // this.routing.navigate(['']);
  }

  public start() {
    this.store.dispatch(WorkoutDetailActions.StartWorkout());
  }

  public async cancel() {
    const workoutDuration = this.workoutDuration$.getValue();
    debugger;
    this.store.dispatch(WorkoutDetailActions.CancelWorkout());
    // await this.workoutService.update(this.workout);
    // this.routing.navigate(['']);
  }

  public addExercise(exercise: { title: string }) {
    this.store.dispatch(WorkoutDetailActions.AddExercise({ title: exercise.title }));
    // this.state.addExercise(exercise.title);
  }

  public openExercisePicker() {
    this.isChoosingExercise = true;
  }

  public async getWorkout(id: string) {
    const workout = await this.workoutService.getById(id);
    this.state.set(workout);
  }

  public handleWorkoutTimerUpdate(duration: number) {
    this.workoutDuration$.next(duration);
  }
}
