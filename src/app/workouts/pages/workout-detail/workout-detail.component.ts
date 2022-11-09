import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseCardComponent } from '../../components/exercise-card/exercise-card.component';
import { ExercisePickerComponent } from '../../components/exercise-picker/exercise-picker.component';
import { TimerComponent } from '../../components/timer/timer.component';
import { Workout } from '../../models/workout.model';
import { WorkoutsService } from '../../services/workouts.service';
import { WorkoutDetailState } from './workout-detail-state.service';

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
  @Input() public workout: Workout = new Workout();
  @ViewChild('TimerAnchor') public timerAnchor: ElementRef | null = null;
  @ViewChild('ScrollingTimerRef') public timerRef: ElementRef | null = null;
  public isChoosingExercise = false;

  constructor(
    private router: ActivatedRoute,
    private workoutService: WorkoutsService,
    private state: WorkoutDetailState,
    private routing: Router
  ) { }

  public ngOnInit(): void {
    this.state.watch().subscribe((w: any) => this.workout = w);

    this.router.paramMap.subscribe(map => {
      const id = map.get('id');

      if (id) {
        this.getWorkout(id);
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
    await this.workoutService.update(this.workout);
    this.routing.navigate(['']);
  }

  public async cancel() {
    await this.workoutService.update(this.workout);
    this.routing.navigate(['']);
  }

  public addExercise(exercise: any) {
    this.state.addExercise(exercise.title);
  }

  public openExercisePicker() {
    this.isChoosingExercise = true;
  }

  public async getWorkout(id: string) {
    const workout = await this.workoutService.getById(id);
    this.state.set(workout);
  }
}
